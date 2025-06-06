import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

const Carrito = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const { carrito, eliminarDelCarrito, agregarAlCarrito } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Bag - smartpools";
    return () => {
      document.title = "smartpools"; // O el título por defecto
    };
  }, []);

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const igv = total * 0.18;
  const totalConIgv = total + igv;

  const irACheckout = () => {
    navigate("/shop/bag/checkout");
  };

  const formatNumber = (number) => {
    return number.toLocaleString("es-Pe", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const [relacionados, setRecomendados] = useState([]);
  const [mostrarCantidad, setMostrarCantidad] = useState(3);

  useEffect(() => {
    if (carrito.length === 0) return;

    const categorias = carrito.map((item) => item.categoria); // Asume que cada item tiene `categoria`

    fetch("http://localhost:3000/api/productos")
      .then((res) => res.json())
      .then((all) => {
        const idsEnCarrito = carrito.map((i) => i.id);

        // Filtrar productos de las mismas categorías y excluir los que ya están en el carrito
        const relacionados = all.filter(
          (p) =>
            categorias.includes(p.categoria) && !idsEnCarrito.includes(p.id)
        );

        setRecomendados(relacionados); // Guardamos todos, pero mostraremos por partes
      })
      .catch((err) => console.error("Error cargando relacionados:", err));
  }, [carrito]);

  // useEffect(() => {
  //   // Solo si hay productos en el carrito
  //   if (carrito.length === 0) return;

  //   fetch("http://localhost:3000/api/productos")
  //     .then((res) => res.json())
  //     .then((all) => {
  //       // Excluir los del carrito
  //       const idsEnCarrito = carrito.map((i) => i.id);
  //       const disponibles = all.filter((p) => !idsEnCarrito.includes(p.id));

  //       // Barajar (Fisher–Yates)
  //       for (let i = disponibles.length - 1; i > 0; i--) {
  //         const j = Math.floor(Math.random() * (i + 1));
  //         [disponibles[i], disponibles[j]] = [disponibles[j], disponibles[i]];
  //       }

  //       // Guardar hasta 12
  //       setRecomendados(disponibles.slice(0, 12));
  //     })
  //     .catch((err) => console.error("Error cargando recomendados:", err));
  // }, [carrito]);

  if (carrito.length === 0) {
    return (
      <main className="main" role="main">
        <div id="bag-container" className="rs-bag-page-content">
          <div className="rs-bag as-l-bag-container" role="main">
            <div className="rs-bag-content as-l-container rs-zoom-content">
              <div className="rs-bagempty large-9 small-12">
                <div className="rs-bag-header">
                  <h1 className="rs-bag-header">Tu carrito está vacío.</h1>
                </div>

                {!usuario && (
                  <div className="rs-bagempty-message">
                    Inicia sesión para ver si tienes artículos guardados o
                    continúa comprando.
                  </div>
                )}

                <div className="rs-bagempty-actions">
                  <div className="row">
                    {!usuario && (
                      <div className="column rs-bagempty-button">
                        <Link className="form-button" to="/login">
                          Iniciar Sesión
                        </Link>
                      </div>
                    )}
                    <div className="column rs-bagempty-button">
                      <Link
                        to="/store"
                        className="form-button form-button-secondary"
                      >
                        Continuar comprando
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="main" role="main">
      <div id="bag-container" className="rs-bag-page-content">
        <div className="rs-bag as-l-bag-container" role="main">
          <div
            id="bag-content"
            className="rs-bag-content as-l-container rs-zoom-content"
          >
            <div className="rs-bag-button-header large-12">
              <h1 className="rs-bag-header">
                El total de tu carrito es $&nbsp;
                {formatNumber(totalConIgv)}
              </h1>
              <span className="visuallyhidden"></span>
              <div className="rs-bag-headermessage">
                <span className="pd-util-weight-semibold">
                  Entrega gratuita y devoluciones gratuitas.
                </span>
              </div>
              <div className="row rs-bag-checkoutbutton-header">
                <div className="small-12 small-offset-0 large-12">
                  <div className="rs-bag-checkoutbuttons-wrapper rs-bag-smartpoolspay-enabled rs-bag-checkout-mainbutton-show">
                    <div className="rs-bag-checkoutbutton rs-bag-checkout-mainbutton">
                      <button
                        type="button"
                        className="button button-block"
                        onClick={irACheckout}
                      >
                        <span>Check Out</span>
                      </button>
                    </div>
                    <div className="rs-bag-checkoutbutton rs-bag-checkout-otheroptions">
                      <button
                        type="button"
                        className="button button-block"
                        onClick={irACheckout}
                      >
                        <span>Verificar</span>
                      </button>
                    </div>
                    <div className="rs-bag-checkoutbutton rs-bag-smartpoolspay rs-bag-smartpoolspay-activecard">
                      <button
                        type="button"
                        className="rs-smartpoolspay button button-block"
                      >
                        <span>Pagar con smartpools Pay</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ol-rs-bag-items ol-rs-iteminfos">
              <ol className="rs-bag-items rs-iteminfos">
                {carrito.map((item) => (
                  <li key={item.id} className="rs-bag-item rs-iteminfo-wrap">
                    <div className="rs-iteminfo row">
                      <div className="rs-iteminfo-image column large-3 small-12">
                        <img
                          src={item.imagen_url}
                          alt={item.nombre}
                          width={400}
                        />
                      </div>
                      <div className="rs-iteminfo-content column large-9 small-12">
                        <div className="rs-iteminfo-details">
                          <div className="rs-iteminfo-title-wrapper large-6 small-12">
                            <h2 className="rs-iteminfo-title">{item.nombre}</h2>
                          </div>
                          <div className="rs-iteminfo-quantity">
                            <span>{item.cantidad}</span>
                          </div>
                          <div className="rs-iteminfo-pricedetails large-last">
                            <div className="rs-iteminfo-price">
                              <p>$&nbsp;{formatNumber(item.precio)}</p>
                            </div>
                            <div className="rs-iteminfo-actions-right">
                              <button
                                className="rs-iteminfo-remove as-buttonlink"
                                onClick={() => eliminarDelCarrito(item.id)}
                              >
                                <span>Eliminar</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="rs-summary ">
                <div className="large-9 large-offset-3 small-12 small-offset-0">
                  <div className="rs-summary-content rs-summary-subtotal">
                    <div className="rs-summary-labelandvaluecontainer">
                      <div className="rs-summary-label">Subtotal</div>
                      <div className="rs-summary-value">
                        $&nbsp;{formatNumber(total)}
                      </div>
                    </div>
                  </div>
                  <div className="rs-summary-content rs-summary-shipping">
                    <div className="rs-summary-labelandvaluecontainer">
                      <div className="rs-summary-label">Envío</div>
                      <div className="rs-summary-value">FREE</div>
                    </div>
                  </div>
                  <div className="rs-summary-content rs-summary-tax">
                    <div className="rs-summary-labelandvaluecontainer">
                      <div className="rs-summary-label">
                        <div className="rs-summary-tax">
                          <span className="rs-summary-tax-label">
                            IGV&nbsp;(18%){" "}
                          </span>
                          <div className="form-tooltip rs-summary-tooltip form-tooltip-before form-tooltip-show">
                            <button
                              type="button"
                              className="form-tooltip-button"
                            >
                              <span className="form-icons form-icons-info19" />
                              <span className="visuallyhidden" />
                            </button>
                            <div
                              id=":re:"
                              className="form-tooltip-info form-tooltip-pointer-middle"
                              role="tooltip"
                              aria-hidden="true"
                            >
                              <div className="form-tooltip-title" />
                              <span className="visuallyhidden">
                                Qué significa "impuesto estimado"?&nbsp;
                              </span>
                              <div className="form-tooltip-content">
                                El impuesto sobre las ventas que aparece en la
                                página de pago es solo una estimación. Su
                                factura incluirá el impuesto sobre las ventas
                                final, incluyendo los impuestos locales, así
                                como cualquier reembolso o tarifa aplicable. En
                                Lima y Lima Metropolitana, el impuesto sobre las
                                ventas se aplica al precio del producto sin
                                paquete.
                              </div>
                              <div className="form-tooltip-gap" />
                            </div>
                          </div>
                          <button
                            id="rs-summary-enterzipcode"
                            aria-controls="shoppingCart.summary.taxCalculator.address"
                            className="as-buttonlink icon icon-after icon-chevrondown"
                            type="button"
                          >
                            <span>{""}</span>
                          </button>
                        </div>
                      </div>
                      <div className="rs-summary-value">
                        $&nbsp;{formatNumber(igv)}
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    data-core-height-transition-wrapper=""
                    className="rs-summary-enterzipcode r-height-transition-exit-done r-height-transition-enter-active"
                    style={{ height: 0 }}
                  >
                    <div data-core-height-transition-content="">
                      <div className="rf-inlineeditor rf-inlineeditor-collapsible">
                        <div className="rf-inlineeditor-content row">
                          <div className="rf-inlineeditor-input column">
                            <div className="form-textbox form-textbox-with-button">
                              {" "}
                              <input
                                id="shoppingCart.summary.taxCalculator.address.postalCode"
                                type="text"
                                className="form-textbox-input form-textbox-entered"
                                aria-labelledby="shoppingCart.summary.taxCalculator.address.postalCode_label"
                                aria-invalid="false"
                                aria-required="false"
                                autoComplete="off"
                                defaultValue={""}
                              />
                              <span
                                id="shoppingCart.summary.taxCalculator.address.postalCode_label"
                                className="form-textbox-label"
                                aria-hidden="true"
                              >
                                Zip Code
                              </span>
                              <button
                                type="button"
                                className="rf-inlineeditor-apply form-textbox-button"
                                id="shoppingCart.summary.taxCalculator.address.calculate"
                                aria-label="Apply Zip Code"
                              >
                                <span>Aplicar</span>
                              </button>
                            </div>
                          </div>
                          <div className="rf-inlineeditor-cancel-wrapper column">
                            <button
                              type="button"
                              className="rf-inlineeditor-cancel form-textbox-sidebutton"
                              aria-label="Cancel Tax Calculator"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                        <div className="rs-location-consent">
                          <div className="">
                            <div className="form-checkbox">
                              <input
                                type="checkbox"
                                id=":rh:"
                                className="form-checkbox-input"
                                aria-labelledby=":rh:_label"
                                aria-invalid="false"
                              />
                              <label
                                className="form-label"
                                htmlFor=":rh:"
                                id=":rh:_label"
                              >
                                <span
                                  aria-hidden="true"
                                  className="form-checkbox-indicator"
                                />
                                Guardar mi ubicación para futuras visitas
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rs-summary-labelandvaluecontainer rs-summary-total">
                    <div className="rs-summary-label">Total</div>
                    <div className="rs-summary-value">
                      $&nbsp;{formatNumber(totalConIgv)}
                    </div>
                  </div>
                  <div className="rs-summary-financingmessage-wrapper">
                    <div className="rs-summary-value">
                      <div
                        id="buyflow-message-container"
                        className="rf-ac-messages"
                      >
                        <div data-autom="rs-financinglink">
                          <div>
                            <button
                              className="as-buttonlink icon icon-after icon-pluscircle"
                              type="button"
                            >
                              <span>
                                Obtén efectivo diario con smartpools Card
                              </span>
                            </button>
                          </div>
                          <div />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row rs-bag-checkoutbutton-bottom">
                <div className="small-12 small-offset-0 large-9 large-offset-3">
                  <div className="rs-bag-checkoutbuttons-wrapper rs-bag-smartpoolspay-enabled rs-bag-checkout-mainbutton-show">
                    <div className="rs-bag-checkoutbutton rs-bag-checkout-mainbutton">
                      <button
                        id="shoppingCart.actions.checkout"
                        type="button"
                        className="form-button"
                        onClick={irACheckout}
                      >
                        <span>Check Out</span>
                      </button>
                    </div>
                    <div className="rs-bag-checkoutbutton rs-bag-checkout-otheroptions">
                      <button
                        id="shoppingCart.actions.checkoutOtherPayments"
                        type="button"
                        className="form-button"
                        onClick={irACheckout}
                      >
                        <span>Verificar</span>
                      </button>
                    </div>
                    <div className="rs-bag-checkoutbutton rs-bag-smartpoolspay rs-bag-smartpools-activecard">
                      <button
                        id="shoppingCart.actions.apwCheckout"
                        type="button"
                        className="rs-smartpoolspay form-button"
                        // onClick={pagarConSmartpools}
                      >
                        <span>Pagar con smartpools Pay</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rs-bag-chat-wrapper rs-bag-chat-hidekeyline">
            <div className="as-chat rs-chat">
              <div className="as-l-container rs-chat-content">
                <div>
                  Necesitas ayuda?{" "}
                  <a
                    href="https://wa.me/949174221"
                    target="_blank"
                    className="as-chat-button"
                  >
                    Chatea ahora
                    <span className="a11y">(Opens in a new window)</span>
                  </a>{" "}
                  o llama al <span>1‑363‑4023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rs-recommendations">
            <div className="rf-recommendations rf-recommendations-grid">
              <div className="as-l-container">
                <h2 className="rf-recommendations-title typography-headline-reduced">
                  También te puede interesar
                </h2>
              </div>
              <div className="as-l-container rf-recommendations-tiles">
                {relacionados.slice(0, mostrarCantidad).map((prod) => (
                  <div
                    key={prod.id}
                    tabIndex={-1}
                    id={`rf-recommendations-${prod.descripcion}`}
                    className="rf-recommendations-tile small-12"
                  >
                    <div className="rf-recommendations-accessory rf-recommendations-accessory-inline tile">
                      <div className="rf-recommendations-accessory-image">
                        <img
                          width={200}
                          height={200}
                          alt={prod.nombre}
                          src={prod.imagen_url}
                          className="as-util-relatedlink"
                        />
                      </div>
                      <div className="rf-recommendations-accessory-info">
                        <h3 className="rf-recommendations-accessory-title typography-body">
                          <Link to={`/productos/${prod.id}`}>
                            <span>{prod.nombre}</span>
                          </Link>
                        </h3>
                        <div className="rf-recommendations-accessory-price typography-body">
                          <span>${formatNumber(prod.precio)}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="button button-block button-super rf-recommendations-accessory-button"
                        onClick={() => agregarAlCarrito(prod)}
                      >
                        <span aria-hidden="true">Agregar al Carrito</span>
                        <span className="visuallyhidden">Add to Bag</span>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Mostrar solo si ya se mostraron 12 productos */}
                {mostrarCantidad >= 12 && (
                  <div className="rf-recommendations-divider"></div>
                )}

                <div className="as-l-container rf-recommendations-footer">
                  {mostrarCantidad < relacionados.length && (
                    <button
                      type="button"
                      className="as-buttonlink"
                      onClick={() => setMostrarCantidad(12)} // Muestra 9 más (total = 12)
                    >
                      Mostrar más productos
                      <span
                        aria-hidden="true"
                        className="icon icon-after icon-chevrondown"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="rs-bag-productspotlight">
            <div className="dd-billboard dd-checkout-201804-new-arrivals">
              <div className="dd-l-plate">
                <div className="dd-billboard-background">
                  <img
                    src="https://smartpools.pe/images/04.png"
                    alt=""
                    width={980}
                    height={400}
                    className="dd-invert-classic dd-billboard-hero ir ir"
                  />
                </div>
                <div className="dd-billboard-info">
                  <h2 className="dd-billboard-header">Novedades</h2>
                  <p className="dd-billboard-subcopy dd-compact-small-20">
                    Descubre los últimos productos para piscina.
                  </p>
                  <p className="dd-billboard-link">
                    <a href={""} className="more">
                      Comprar<span className="a11y">Novedades</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-core-accordion="" id=":rg:" className="rc-accordion rs-faq">
            <div data-core-accordion-item="" className="rc-accordion-item">
              <h2 className="as-l-container">
                <button
                  type="button"
                  data-core-accordion-button=""
                  aria-expanded="false"
                  aria-controls="content-:rg:-0"
                  id="title-:rg:-0"
                  className="rc-accordion-button"
                  data-autom="faq-button"
                >
                  <span className="typography-callout" />
                  <span className="rc-accordion-title large-10 typography-callout">
                    Preguntas sobre la compra
                  </span>
                  <span className="icon rc-accordion-collapse-icon" />
                  <span className="rc-accordion-chevrondown rc-accordion-collapse-icon">
                    <svg
                      className="accordion-icon-svg"
                      viewBox="0 0 17 8.85"
                      height="35px"
                      width="35px"
                    >
                      <polyline
                        data-accordion-icon-shape=""
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        fillRule="evenodd"
                        points="15 1.13 8.5 7.72 2 1.13"
                      >
                        <animate
                          data-accordion-animate="expand"
                          attributeName="points"
                          values="15 1.13 8.5 7.72 2 1.13; 15.85 4.42 8.5 4.42 1.15 4.42; 15 7.72 8.5 1.13 2 7.72"
                          dur="320ms"
                          begin="indefinite"
                          fill="freeze"
                          keyTimes="0; 0.5; 1"
                          calcMode="spline"
                          keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
                        />
                        <animate
                          data-accordion-animate="collapse"
                          attributeName="points"
                          values="15 7.72 8.5 1.13 2 7.72; 15.85 4.42 8.5 4.42 1.15 4.42; 15 1.13 8.5 7.72 2 1.13"
                          dur="320ms"
                          begin="indefinite"
                          fill="freeze"
                          keyTimes="0; 0.5; 1"
                          calcMode="spline"
                          keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
                        />
                      </polyline>
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                aria-hidden="true"
                data-core-height-transition-wrapper=""
                className="r-height-transition-exit-done"
                style={{ height: 0 }}
              >
                <div data-core-height-transition-content="">
                  <div
                    data-core-accordion-content=""
                    aria-hidden="true"
                    id="content-:rg:-0"
                    className="as-l-container"
                  >
                    <div className="rc-accordion-content large-10 rc-accordion-content-nopadding">
                      <ul
                        data-core-accordion=""
                        id="faq-question"
                        className="rc-accordion rc-accordion-compact"
                        role="list"
                      >
                        <li
                          data-core-accordion-item=""
                          className="rc-accordion-item"
                          role="listitem"
                        >
                          <h3>
                            <button
                              type="button"
                              data-core-accordion-button=""
                              aria-expanded="false"
                              aria-controls="content-faq-question-0"
                              id="title-faq-question-0"
                              className="rc-accordion-button"
                            >
                              <span className="typography-callout" />
                              <span className="rc-accordion-title large-10 typography-callout">
                                Cuándo recibiré mis productos?
                              </span>
                              <span className="icon rc-accordion-collapse-icon" />
                              <span className="rc-accordion-chevrondown rc-accordion-collapse-icon">
                                <svg
                                  className="accordion-icon-svg"
                                  viewBox="0 0 17 8.85"
                                  height="35px"
                                  width="35px"
                                >
                                  <polyline
                                    data-accordion-icon-shape=""
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    fillRule="evenodd"
                                    points="15 1.13 8.5 7.72 2 1.13"
                                  >
                                    <animate
                                      data-accordion-animate="expand"
                                      attributeName="points"
                                      values="15 1.13 8.5 7.72 2 1.13; 15.85 4.42 8.5 4.42 1.15 4.42; 15 7.72 8.5 1.13 2 7.72"
                                      dur="320ms"
                                      begin="indefinite"
                                      fill="freeze"
                                      keyTimes="0; 0.5; 1"
                                      calcMode="spline"
                                      keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
                                    />
                                    <animate
                                      data-accordion-animate="collapse"
                                      attributeName="points"
                                      values="15 7.72 8.5 1.13 2 7.72; 15.85 4.42 8.5 4.42 1.15 4.42; 15 1.13 8.5 7.72 2 1.13"
                                      dur="320ms"
                                      begin="indefinite"
                                      fill="freeze"
                                      keyTimes="0; 0.5; 1"
                                      calcMode="spline"
                                      keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
                                    />
                                  </polyline>
                                </svg>
                              </span>
                            </button>
                          </h3>
                          <div
                            aria-hidden="true"
                            data-core-height-transition-wrapper=""
                            className="r-height-transition-exit-done"
                            style={{ height: 0 }}
                          >
                            <div data-core-height-transition-content="">
                              <div
                                data-core-accordion-content=""
                                aria-hidden="true"
                                id="content-faq-question-0"
                              >
                                <div className="rc-accordion-content large-10">
                                  <div>
                                    Al ingresar un código postal, obtendrás
                                    fechas estimadas de entrega y recogida de
                                    tus productos. Recibirás la fecha de entrega
                                    final después de realizar tu pedido. Las
                                    estimaciones de entrega se basan en la
                                    disponibilidad de los productos y la opción
                                    de envío que elijas. Para la recogida,
                                    deberás elegir la fecha y la tienda al
                                    finalizar la compra.{" "}
                                    <a
                                      href={""}
                                      data-feature-name=""
                                      data-display-name=""
                                      className="icon-wrapper"
                                      target="_blank"
                                    >
                                      <span className="icon-copy">
                                        Obtenga más información sobre envíos
                                        &amp; recogidas de smartpools
                                      </span>
                                      <span className="visuallyhidden">
                                        {" "}
                                        (opens in a new window)
                                      </span>
                                      <span
                                        aria-hidden="true"
                                        className="icon icon-after icon-external"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          data-core-accordion-item=""
                          className="rc-accordion-item"
                          role="listitem"
                        >
                          <h3>
                            <button
                              type="button"
                              data-core-accordion-button=""
                              aria-expanded="false"
                              aria-controls="content-faq-question-1"
                              id="title-faq-question-1"
                              className="rc-accordion-button"
                            >
                              <span className="typography-callout" />
                              <span className="rc-accordion-title large-10 typography-callout">
                                Puedo recoger mis productos en una smartpools
                                Store?
                              </span>
                              <span className="icon rc-accordion-collapse-icon" />
                              <span className="rc-accordion-chevrondown rc-accordion-collapse-icon">
                                <svg
                                  className="accordion-icon-svg"
                                  viewBox="0 0 17 8.85"
                                  height="35px"
                                  width="35px"
                                >
                                  <polyline
                                    data-accordion-icon-shape=""
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    fillRule="evenodd"
                                    points="15 1.13 8.5 7.72 2 1.13"
                                  >
                                    <animate
                                      data-accordion-animate="expand"
                                      attributeName="points"
                                      values="15 1.13 8.5 7.72 2 1.13; 15.85 4.42 8.5 4.42 1.15 4.42; 15 7.72 8.5 1.13 2 7.72"
                                      dur="320ms"
                                      begin="indefinite"
                                      fill="freeze"
                                      keyTimes="0; 0.5; 1"
                                      calcMode="spline"
                                      keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
                                    />
                                    <animate
                                      data-accordion-animate="collapse"
                                      attributeName="points"
                                      values="15 7.72 8.5 1.13 2 7.72; 15.85 4.42 8.5 4.42 1.15 4.42; 15 1.13 8.5 7.72 2 1.13"
                                      dur="320ms"
                                      begin="indefinite"
                                      fill="freeze"
                                      keyTimes="0; 0.5; 1"
                                      calcMode="spline"
                                      keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
                                    />
                                  </polyline>
                                </svg>
                              </span>
                            </button>
                          </h3>
                          <div
                            aria-hidden="true"
                            data-core-height-transition-wrapper=""
                            className="r-height-transition-exit-done"
                            style={{ height: 0 }}
                          >
                            <div data-core-height-transition-content="">
                              <div
                                data-core-accordion-content=""
                                aria-hidden="true"
                                id="content-faq-question-1"
                              >
                                <div className="rc-accordion-content large-10">
                                  <div>
                                    Sí. Si eliges la opción de recogida,
                                    seleccionarás una tienda y una fecha de
                                    recogida para tus artículos al finalizar la
                                    compra. No todos los artículos están
                                    disponibles para recoger. Te enviaremos un
                                    mensaje de texto cuando tus artículos estén
                                    listos.{" "}
                                    <a
                                      href="/shop/help/shipping_delivery"
                                      data-feature-name="Astro Link"
                                      data-display-name="AOS: help/shipping_delivery"
                                      className="icon-wrapper"
                                      target="_blank"
                                    >
                                      <span className="icon-copy">
                                        Obtenga más información sobre smartpools
                                        Pickup
                                      </span>
                                      <span className="visuallyhidden">
                                        (opens in a new window)
                                      </span>
                                      <span
                                        aria-hidden="true"
                                        className="icon icon-after icon-external"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          data-core-accordion-item=""
                          className="rc-accordion-item"
                          role="listitem"
                        >
                          <h3>
                            <button
                              type="button"
                              data-core-accordion-button=""
                              aria-expanded="false"
                              aria-controls="content-faq-question-2"
                              id="title-faq-question-2"
                              className="rc-accordion-button"
                            >
                              <span className="typography-callout" />
                              <span className="rc-accordion-title large-10 typography-callout">
                                Cuáles son mis opciones de pago?
                              </span>
                              <span className="icon rc-accordion-collapse-icon" />
                              <span className="rc-accordion-chevrondown rc-accordion-collapse-icon">
                                <svg
                                  className="accordion-icon-svg"
                                  viewBox="0 0 17 8.85"
                                  height="35px"
                                  width="35px"
                                >
                                  <polyline
                                    data-accordion-icon-shape=""
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    fillRule="evenodd"
                                    points="15 1.13 8.5 7.72 2 1.13"
                                  >
                                    <animate
                                      data-accordion-animate="expand"
                                      attributeName="points"
                                      values="15 1.13 8.5 7.72 2 1.13; 15.85 4.42 8.5 4.42 1.15 4.42; 15 7.72 8.5 1.13 2 7.72"
                                      dur="320ms"
                                      begin="indefinite"
                                      fill="freeze"
                                      keyTimes="0; 0.5; 1"
                                      calcMode="spline"
                                      keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
                                    />
                                    <animate
                                      data-accordion-animate="collapse"
                                      attributeName="points"
                                      values="15 7.72 8.5 1.13 2 7.72; 15.85 4.42 8.5 4.42 1.15 4.42; 15 1.13 8.5 7.72 2 1.13"
                                      dur="320ms"
                                      begin="indefinite"
                                      fill="freeze"
                                      keyTimes="0; 0.5; 1"
                                      calcMode="spline"
                                      keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
                                    />
                                  </polyline>
                                </svg>
                              </span>
                            </button>
                          </h3>
                          <div
                            aria-hidden="true"
                            data-core-height-transition-wrapper=""
                            className="r-height-transition-exit-done"
                            style={{ height: 0 }}
                          >
                            <div data-core-height-transition-content="">
                              <div
                                data-core-accordion-content=""
                                aria-hidden="true"
                                id="content-faq-question-2"
                              >
                                <div className="rc-accordion-content large-10">
                                  <div>
                                    Aceptamos{" "}
                                    <a
                                      href={""}
                                      data-feature-name="Astro Link"
                                      data-display-name=""
                                    >
                                      <span className="icon-copy">
                                        smartpools Pay
                                      </span>
                                      <span className="visuallyhidden">
                                        (opens in a new window)
                                      </span>
                                    </a>
                                    , la mayoría de las tarjetas de crédito y
                                    débito, PayPal y tarjetas de regalo del
                                    smartpools Store. Sin embargo, es posible
                                    que PayPal, las tarjetas de regalo del
                                    smartpools Store y las opciones de
                                    financiación no estén disponibles para todos
                                    los productos. También hay opciones de
                                    financiación disponibles para clientes que
                                    cumplan los requisitos. Para más
                                    información, puede llamar al{" "}
                                    <span>1‑363‑4023</span>.{" "}
                                    <a
                                      href={""}
                                      data-feature-name="Astro Link"
                                      data-display-name=""
                                      className="icon-wrapper"
                                      target="_blank"
                                    >
                                      <span className="icon-copy">
                                        Learn more about smartpools Payment
                                        &amp; Pricing
                                      </span>
                                      <span className="visuallyhidden">
                                        (opens in a new window)
                                      </span>
                                      <span
                                        aria-hidden="true"
                                        className="icon icon-after icon-external"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          data-core-accordion-item=""
                          className="rc-accordion-item"
                          role="listitem"
                        >
                          <h3>
                            <button
                              type="button"
                              data-core-accordion-button=""
                              aria-expanded="false"
                              aria-controls="content-faq-question-3"
                              id="title-faq-question-3"
                              className="rc-accordion-button"
                            >
                              <span className="typography-callout" />
                              <span className="rc-accordion-title large-10 typography-callout">
                                Cuáles son mis opciones de financiamiento?
                              </span>
                              <span className="icon rc-accordion-collapse-icon" />
                              <span className="rc-accordion-chevrondown rc-accordion-collapse-icon">
                                <svg
                                  className="accordion-icon-svg"
                                  viewBox="0 0 17 8.85"
                                  height="35px"
                                  width="35px"
                                >
                                  <polyline
                                    data-accordion-icon-shape=""
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    fillRule="evenodd"
                                    points="15 1.13 8.5 7.72 2 1.13"
                                  >
                                    <animate
                                      data-accordion-animate="expand"
                                      attributeName="points"
                                      values="15 1.13 8.5 7.72 2 1.13; 15.85 4.42 8.5 4.42 1.15 4.42; 15 7.72 8.5 1.13 2 7.72"
                                      dur="320ms"
                                      begin="indefinite"
                                      fill="freeze"
                                      keyTimes="0; 0.5; 1"
                                      calcMode="spline"
                                      keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
                                    />
                                    <animate
                                      data-accordion-animate="collapse"
                                      attributeName="points"
                                      values="15 7.72 8.5 1.13 2 7.72; 15.85 4.42 8.5 4.42 1.15 4.42; 15 1.13 8.5 7.72 2 1.13"
                                      dur="320ms"
                                      begin="indefinite"
                                      fill="freeze"
                                      keyTimes="0; 0.5; 1"
                                      calcMode="spline"
                                      keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
                                    />
                                  </polyline>
                                </svg>
                              </span>
                            </button>
                          </h3>
                          <div
                            aria-hidden="true"
                            data-core-height-transition-wrapper=""
                            className="r-height-transition-exit-done"
                            style={{ height: 0 }}
                          >
                            <div data-core-height-transition-content="">
                              <div
                                data-core-accordion-content=""
                                aria-hidden="true"
                                id="content-faq-question-3"
                              >
                                <div className="rc-accordion-content large-10">
                                  <div>
                                    Ahora puedes pagar mensualmente y sin
                                    intereses
                                    <sup>
                                      <span className="visuallyhidden">
                                        {" "}
                                        Footnote{" "}
                                      </span>
                                      ◊
                                    </sup>{" "}
                                    por artículos elegibles al pagar con las
                                    cuotas mensuales de la smartpools Card.
                                    <sup>
                                      <span className="visuallyhidden">
                                        {" "}
                                        Footnote{" "}
                                      </span>
                                      ◊◊
                                    </sup>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Carrito;
