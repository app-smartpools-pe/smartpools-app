// src/routes/quoteform.routes.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../.env" });

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/quotes", (req, res) => {
  const {
    first_name,
    last_name,
    mail, // Correo del cliente, lo usaremos para el acuse de recibo
    department,
    province,
    district,
    zip_code,
    number_phone,
    reason,
    comments,
  } = req.body;

  if (!first_name || !last_name || !mail || !reason) {
    return res.status(400).json({
      error:
        "Nombre, apellido, correo electrónico, departamento, provincia, distrito, código postal, número de teléfono, y motivo son campos obligatorios.",
    });
  }

  const query = `
    INSERT INTO avpoar_quote_form (
      first_name, last_name, mail, department, province, district,
      zip_code, number_phone, reason, comments
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    first_name,
    last_name,
    mail,
    department,
    province,
    district,
    zip_code,
    number_phone,
    reason,
    comments,
  ];

  db.query(query, values, (err, dbResult) => {
    if (err) {
      console.error(
        "Error al insertar datos en la tabla avpoar_quote_form:",
        err
      );
      return res.status(500).json({
        error:
          "Error interno del servidor al procesar la solicitud de base de datos.",
      });
    }

    // --- Definir los dos correos a enviar ---

    // 1. Correo para el equipo interno (el que ya tienes)
    const recipientEmails = process.env.EMAIL_TO_RECEIVE_QUOTES.split(",");
    const internalMailOptions = {
      from: `Smartpools App<${process.env.EMAIL_USER}>`,
      to: recipientEmails,
      subject: `Nueva Solicitud de Cotización: ${reason} de ${first_name} ${last_name}`,
      html: `
        <h2>Nueva Solicitud de Cotización</h2>
        <p><strong>Motivo:</strong> ${reason}</p>
        <p><strong>Nombre del Cliente:</strong> ${first_name} ${last_name}</p>
        <p><strong>Correo Electrónico del Cliente:</strong> ${mail}</p>
        <p><strong>Teléfono del Cliente:</strong> ${number_phone || "No especificado"}</p>
        <p><strong>Ubicación:</strong>
            ${department ? `Departamento: ${department}` : ""}
            ${province ? `, Provincia: ${province}` : ""}
            ${district ? `, Distrito: ${district}` : ""}
            ${zip_code ? `, Código Postal: ${zip_code}` : ""}
        </p>
        ${comments ? `<p><strong>Comentarios del Cliente:</strong><br>${comments.replace(/\n/g, "<br>")}</p>` : ""}
        <br>
        <p>Se ha guardado el registro en la base de datos con ID: ${dbResult.insertId}</p>
      `,
    };

    // 2. Correo de confirmación para el cliente
    const clientMailOptions = {
      from: `smartpools <${process.env.EMAIL_USER}>`,
      to: mail,
      subject: `Confirmación de Solicitud de Cotización de smartpools`,
      html: `
        <!DOCTYPE html>
        <html lang="es-PE">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmación de Solicitud de Cotización</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4;">
                <tr>
                    <td align="center" style="padding: 20px 0;">
                        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <tr>
                                <td style="padding: 20px; text-align: center; background-color: #007bff; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                                    <a href="[https://www.smartpools.pe]" data-discover="true">
                                      <img src="[URL_ABSOLUTA_A_TU_LOGO_smartpools]" alt="smartpools" style="max-width: 180px; height: auto; display: block; margin: 0 auto;">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px;">
                                    <h2 style="color: #007bff; margin-top: 0;">¡Hola ${first_name}!</h2>
                                    <p style="margin-bottom: 15px;">Gracias por contactar a smartpools. Hemos recibido tu solicitud de cotización para:</p>
                                    <p style="background-color: #e9f7ff; padding: 10px 15px; border-left: 4px solid #007bff; margin-bottom: 20px;">
                                        <strong>Motivo de la Solicitud:</strong> <span style="color: #0056b3; font-weight: bold;">${reason}</span>
                                    </p>
                                    ${comments ? `<p style="margin-bottom: 20px;"><strong>Tus Comentarios:</strong><br><span style="background-color: #f9f9f9; padding: 10px 15px; border-radius: 5px; display: block;">${comments.replace(/\n/g, "<br>")}</span></p>` : ""}
                                    <p style="margin-bottom: 15px;">Nuestro equipo está revisando tu solicitud y se pondrá en contacto contigo a la brevedad posible. Apreciamos tu paciencia.</p>
                                    <p style="margin-bottom: 25px;">Mientras tanto, te invitamos a explorar más sobre nuestros servicios y proyectos en nuestro sitio web:</p>
                                    <p style="text-align: center;">
                                        <a href="[https://www.smartpools.pe]" style="display: inline-block; padding: 12px 25px; background-color: #28a745; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">smartpools.pe</a>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px 30px; text-align: center; border-top: 1px solid #eee; background-color: #f8f8f8; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                                    <p style="font-size: 0.9em; color: #555; margin-bottom: 5px;">Atentamente,</p>
                                    <p style="font-size: 1em; color: #333; margin-top: 0; font-weight: bold;">El Equipo de smartpools</p>
                                    <p style="font-size: 0.8em; color: #777; margin-top: 15px;">Este es un correo de confirmación automático, por favor no lo respondas directamente.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
      `,
    };

    // --- Enviar ambos correos ---
    let internalMailSent = false;
    let clientMailSent = false;

    // Enviar correo interno
    transporter.sendMail(
      internalMailOptions,
      (internalMailError, internalInfo) => {
        if (internalMailError) {
          console.error(
            "Error al enviar el correo interno a smartpools:",
            internalMailError
          );
        } else {
          console.log(
            "Correo interno enviado a smartpools: %s",
            internalInfo.messageId
          );
          internalMailSent = true;
        }
        // Solo después de intentar enviar el correo interno, intenta enviar el del cliente
        sendClientMail();
      }
    );

    // Función para enviar correo al cliente
    const sendClientMail = () => {
      transporter.sendMail(clientMailOptions, (clientMailError, clientInfo) => {
        if (clientMailError) {
          console.error(
            "Error al enviar el correo de confirmación al cliente:",
            clientMailError
          );
        } else {
          console.log(
            "Correo de confirmación enviado al cliente: %s",
            clientInfo.messageId
          );
          clientMailSent = true;
        }

        // Una vez que ambos intentos de envío de correo se han completado,
        // enviamos la respuesta final al frontend.
        if (internalMailSent && clientMailSent) {
          return res.status(201).json({
            message:
              "Cotización enviada con éxito y confirmación enviada al cliente.",
            id: dbResult.insertId,
          });
        } else if (internalMailSent && !clientMailSent) {
          return res.status(201).json({
            message:
              "Cotización enviada, pero hubo un problema al enviar la confirmación al cliente.",
            id: dbResult.insertId,
          });
        } else if (!internalMailSent && clientMailSent) {
          return res.status(201).json({
            message:
              "Cotización enviada y confirmación al cliente, pero hubo un problema con el correo interno.",
            id: dbResult.insertId,
          });
        } else {
          // Ambos fallaron
          return res.status(201).json({
            // Podrías considerar un 500 si ambos son críticos
            message:
              "Cotización enviada, pero hubo problemas con el envío de ambos correos.",
            id: dbResult.insertId,
          });
        }
      });
    };
  });
});

module.exports = router;
