import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { slug } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  const { agregarAlCarrito } = useCart();

  useEffect(() => {
    fetch(`http://localhost:3000/api/productos/slug/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setLoading(false);

        if (data && data.nombre) {
          document.title = `Comprar ${data.nombre} - smartpools`;
        } else {
          document.title = "Detalles del Producto - smartpools";
        }
      })
      .catch((error) => {
        console.error("Error al cargar producto:", error);
        setLoading(false);
        document.title = "Error al cargar producto - smartpools";
      });

    return () => {
      document.title = "smartpools";
    };
  }, [slug]);

  const formatNumber = (number) => {
    return number.toLocaleString("es-Pe", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <p>No se encontró el producto.</p>;

  return (
    <div id="root" className="rs-root-reveal">
      <div className="Product Page">
        <div
          className="rf-pdp as-l-container row"
          data-analytics-section="product hero"
        >
          <div className="column large-4 small-12 flex-column">
            <h1 className="rf-pdp-title" data-autom="productTitle">
              {producto.nombre}
            </h1>
            <div className="rf-pdp-skus">
              <div className="rc-sku rc-skus-lead-with-full-sku typography-label">
                <div className="rc-skus">
                  <div className="rc-skus-currentsku typography-label">
                    <span className="rc-skus-fullsku" data-autom="full-sku">
                      SKU:&nbsp;{producto.descripcion}
                    </span>
                  </div>
                </div>
                <div className="rc-prices-footer" />
              </div>
            </div>
            <div className="rf-pdp-prices">
              <div className="rc-prices rc-prices-lead-with-full-price typography-label">
                <div className="rc-price">
                  <div className="rc-prices-currentprice typography-label">
                    <span
                      className="rc-prices-fullprice"
                      data-autom="full-price"
                    >
                      $&nbsp;{formatNumber(producto.precio)}
                    </span>
                  </div>
                </div>
                <div className="rc-prices-footer" />
              </div>
            </div>
            <div className="rf-third-party-below-price" data-below-price="" />
            <div className="rf-pdp-buyform-wrapper">
              <div className="row rf-pdp-fulfillment-wrapper">
                <div className="rf-fulfillment-quote row rf-fulfillment-quote-leadbypickup">
                  <div className="rf-pickup-quote-storelink">
                    <div className="typography-body-reduced rf-pickupinfo">
                      <span className="as-svgicon-container rf-pickup-quote-icon">
                        <svg
                          aria-hidden="true"
                          className="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced"
                          height="25px"
                          role="img"
                          viewBox="0 0 25 25"
                          width="25px"
                        >
                          <path d="M0 0h25v25H0z" fill="none" />
                          <path d="M18.5 5h-1.775a4.231 4.231 0 0 0-8.45 0H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h12a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5Zm-6-3a3.245 3.245 0 0 1 3.225 3h-6.45A3.245 3.245 0 0 1 12.5 2ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6h12A1.5 1.5 0 0 1 20 7.5Z" />
                          <path d="M14.4 12.448a1.592 1.592 0 0 1 .738-1.328 1.607 1.607 0 0 0-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 0 0-1.739 2.068 4.32 4.32 0 0 0 .723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 0 0 .474-.989 1.516 1.516 0 0 1-.926-1.403ZM12.583 10.357a1.346 1.346 0 0 0 .941-.5 1.594 1.594 0 0 0 .361-.974.731.731 0 0 0-.008-.136 1.5 1.5 0 0 0-1.016.528 1.547 1.547 0 0 0-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011Z" />
                        </svg>
                      </span>
                      <div
                        className="rf-pickup-quote-info typography-body-reduced"
                        data-autom="pickUpDetails"
                      >
                        <span className="rf-pickup-quote-label">
                          Haz tu pedido ahora. Recógelo en tienda:
                        </span>
                        <div
                          className="rf-pickup-quote-disabled"
                          data-core-disabled="false"
                        >
                          <span className="rf-pickup-quote-value">
                            <span className="as-pickup-quote-availability-quote">
                              Hoy
                            </span>{" "}
                            en la{" "}
                            <button
                              className="rf-pickup-quote-overlay-trigger as-retailavailabilitytrigger-infobutton retail-availability-search-trigger as-buttonlink as-buttonlink-inline"
                              data-ase-click="show"
                              data-ase-overlay="buac-overlay"
                              type="button"
                            >
                              smartpools Store
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rf-dude-quote column large-12 rf-dude-quote-tooltip typography-body-reduced">
                    <span className="as-svgicon-container rf-dude-quote-icon">
                      <svg
                        aria-hidden="true"
                        className="as-svgicon-rtl-mirrored as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced"
                        height="25px"
                        role="img"
                        viewBox="0 0 25 25"
                        width="25px"
                      >
                        <path d="M0 0h25v25H0z" fill="none" />
                        <path
                          d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"
                          fill="#1d1d1f"
                        />
                      </svg>
                    </span>
                    <div className="rf-dude-quote-info typography-body-reduced">
                      <div className="rf-dude-quote-delivery-label">
                        <span className="rf-dude-quote-label">
                          Haz tu pedido hoy.{" "}
                        </span>
                        <div
                          className="rf-dude-quote-tooltip-disabled"
                          data-core-disabled="false"
                        >
                          <span className="rf-dude-quote-suffix-label">
                            Entrega en{" "}
                            <button
                              className="rf-dude-quote-overlay-trigger as-delivery-overlay-trigger as-purchaseinfo-dudetrigger as-buttonlink as-buttonlink-inline icon icon-after icon-pluscircle"
                              data-ase-click="show"
                              data-ase-overlay="dude-overlay"
                              data-autom="deliveryDateChecker"
                            >
                              33401
                              <span className="visuallyhidden">
                                (Consulta las fechas de entrega)
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                      <ul className="rf-dude-quote-delivery-message-list">
                        <li className="rf-dude-quote-delivery-message">
                          <span>Mañana, 10:30 a. m. - 12:30 p. m. — $9.00</span>
                        </li>
                        <li className="rf-dude-quote-delivery-message">
                          <span>Lunes, 28 de abril — Gratis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rf-pdp-buyflow-form-wrapper">
                <div className="rf-pdp-buyflow-form-buttons">
                  <div className="rf-pdp-smartpoolspay-form">
                    <form
                      action="/shop/pdpAddToBag/MWVV3AM/A"
                      data-display-name="AOS: Product Details"
                      data-feature-name="PDP"
                      data-part-number="MWVV3AM/A"
                      method="post"
                    >
                      <input
                        defaultValue="MWVV3AM/A"
                        name="product"
                        type="hidden"
                      />
                      <button
                        className="button button-block rf-pdp-smartpoolspay-button"
                        data-autom="add-to-cart"
                        id="pdp-options-applePay"
                        name="add-to-cart"
                        type="submit"
                        value="add-to-cart"
                      >
                        Pagar con smartpools Pay
                      </button>
                    </form>
                  </div>
                  <div className="rf-pdp-buyflow-form">
                    <form
                      action="/shop/pdpAddToBag/MWVV3AM/A"
                      data-display-name="AOS: Product Details"
                      data-feature-name="PDP"
                      data-part-number="MWVV3AM/A"
                      method="post"
                    >
                      <input
                        defaultValue="MWVV3AM/A"
                        name="product"
                        type="hidden"
                      />
                      <div className="rf-pdp-addtocart">
                        <button
                          onClick={() => agregarAlCarrito(producto)}
                          className="button button-block"
                          data-autom="add-to-cart"
                          id="add-to-cart"
                          name="add-to-cart"
                          type="submit"
                          value="add-to-cart"
                        >
                          Agregar al Carrito
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="rf-pdp-addtocart-saveditem-wrapper"
                  data-autom="favorite"
                >
                  <div className="rf-saveditem-container" id=":r0:_MWVV3AM/A">
                    <div>
                      <div>
                        <div className="rf-saveditem-content">
                          <h2 className="rf-saveditem-content-header typography-body-reduced">
                            <span>Necesitas un momento?</span>
                          </h2>
                          <div className="rf-saveditem-content-description typography-body-reduced">
                            Guarda todas tus selecciones guardando este
                            dispositivo en Tus guardados y vuelve cuando quieras
                            para retomarlo justo donde lo dejaste.
                          </div>
                        </div>
                        <div className="rf-saveditem-buttons-container">
                          <button
                            aria-label="Save for later "
                            className="rf-saveditem-button as-buttonlink typography-body-reduced"
                            data-autom="save-for-later"
                            id=":r1:"
                            type="button"
                          >
                            <span>
                              <svg
                                aria-hidden="true"
                                className="as-svgicon as-svgicon-bookmark as-svgicon-tiny as-svgicon-bookmarktiny"
                                height="21"
                                role="img"
                                width="21"
                              >
                                <path d="M0 0h21v21H0z" fill="none" />
                                <path d="M12.8 4.25a1.202 1.202 0 0 1 1.2 1.2v10.818l-2.738-2.71a1.085 1.085 0 0 0-1.524 0L7 16.269V5.45a1.202 1.202 0 0 1 1.2-1.2h4.6m0-1H8.2A2.2 2.2 0 0 0 6 5.45v11.588a.768.768 0 0 0 .166.522.573.573 0 0 0 .455.19.644.644 0 0 0 .38-.128 5.008 5.008 0 0 0 .524-.467l2.916-2.885a.084.084 0 0 1 .118 0l2.916 2.886a6.364 6.364 0 0 0 .52.463.628.628 0 0 0 .384.131.573.573 0 0 0 .456-.19.768.768 0 0 0 .165-.522V5.45a2.2 2.2 0 0 0-2.2-2.2Z" />
                              </svg>
                            </span>
                            <span>Guardar para más tarde</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rf-pdp-chat" data-autom="chatLink">
              <div className="as-chat-buyflow">
                <div className="as-svgicon-container">
                  <svg
                    aria-hidden="true"
                    className="as-svgicon as-svgicon-chat as-svgicon-reduced as-svgicon-chatreduced"
                    height="25"
                    role="img"
                    width="25"
                  >
                    <path d="M0 0h25v25H0z" fill="none" />
                    <path d="M22.855 12.34a4.685 4.685 0 0 0-1.237-1.489 6.255 6.255 0 0 0-1.84-1.005 6.503 6.503 0 0 0-2.05-.352 1.276 1.276 0 0 0-.201-.01 6.582 6.582 0 0 0-.895.06 6.233 6.233 0 0 0-3.187 1.307 4.856 4.856 0 0 0-1.247 1.488 3.864 3.864 0 0 0-.452 1.84 3.796 3.796 0 0 0 .543 1.99 3.436 3.436 0 0 0 .512.694 4.234 4.234 0 0 0 .825.754.705.705 0 0 0 .1.08 6.682 6.682 0 0 0 2.071.925 7.043 7.043 0 0 0 1.71.211c.21 0 .412-.01.623-.02h.01l.07.01a8.802 8.802 0 0 0 1.075.604c.362.17.694.311 1.006.422a2.543 2.543 0 0 0 .744.151.525.525 0 0 0 .362-.12.461.461 0 0 0 .151-.312.537.537 0 0 0-.13-.362c-.101-.12-.232-.282-.373-.483a4.054 4.054 0 0 1-.392-.563c-.01-.02 0-.1.04-.11a4.434 4.434 0 0 0 1.9-1.599 3.997 3.997 0 0 0 .714-2.272 3.864 3.864 0 0 0-.452-1.84zm-1.096 3.548a3.4 3.4 0 0 1-1.488 1.247.893.893 0 0 0-.554.522c-.09.252.526 1.07.616 1.31a31.727 31.727 0 0 1-1.799-1.016.89.89 0 0 0-.528-.143h-.07c-.19.01-.248.02-.43.02a5.91 5.91 0 0 1-1.457-.18 5.98 5.98 0 0 1-1.347-.534c-.14-.08-.271-.16-.402-.251a3.53 3.53 0 0 1-.513-.412 3.663 3.663 0 0 1-.633-.794 2.765 2.765 0 0 1-.402-1.478 2.695 2.695 0 0 1 .342-1.357 3.79 3.79 0 0 1 .985-1.187 5.028 5.028 0 0 1 1.538-.834 5.234 5.234 0 0 1 1.397-.291c.17-.01.342-.02.513-.02s.342.01.512.02a5.225 5.225 0 0 1 1.408.291 5.028 5.028 0 0 1 1.538.835 3.757 3.757 0 0 1 .985 1.176 2.864 2.864 0 0 1 .332 1.367 2.994 2.994 0 0 1-.543 1.71zM15.757 6.65a8.706 8.706 0 0 0-2.624-1.438 9.186 9.186 0 0 0-3.097-.512 11.696 11.696 0 0 0-3.507.513A8.76 8.76 0 0 0 3.895 6.65a6.815 6.815 0 0 0-1.759 2.132 5.528 5.528 0 0 0-.643 2.614 6.602 6.602 0 0 0 1.025 3.537 6.956 6.956 0 0 0 2.714 2.342.143.143 0 0 1 .03.11 6.55 6.55 0 0 1-.542.795c-.211.282-.382.513-.533.684a.789.789 0 0 0-.18.523.637.637 0 0 0 .21.442.76.76 0 0 0 .523.171 3.458 3.458 0 0 0 1.056-.221c.432-.151.915-.352 1.437-.593a14.798 14.798 0 0 0 1.498-.835.135.135 0 0 1 .05-.03c.282.02.963.03 1.245.03a8.894 8.894 0 0 0 2.374-.322l.1-.03a5.114 5.114 0 0 1-.764-.854 7.437 7.437 0 0 1-1.71.2c-.25 0-.912-.01-1.164-.03h-.08a1.156 1.156 0 0 0-.594.182 14.082 14.082 0 0 1-1.397.784 13.142 13.142 0 0 1-1.287.533l.03-.03a9.423 9.423 0 0 0 .603-.905 1.069 1.069 0 0 0 .08-.845 1.056 1.056 0 0 0-.533-.653 6.03 6.03 0 0 1-2.341-2.011 5.628 5.628 0 0 1-.845-2.974 4.413 4.413 0 0 1 .523-2.142 5.784 5.784 0 0 1 1.518-1.82A7.548 7.548 0 0 1 6.85 6.168a10.566 10.566 0 0 1 3.185-.463 8.025 8.025 0 0 1 2.766.463 7.487 7.487 0 0 1 2.322 1.267 6.767 6.767 0 0 1 .895.884 6.369 6.369 0 0 1 1.166-.12 7.144 7.144 0 0 0-1.428-1.549z" />
                  </svg>
                </div>
                <div className="as-chat-buyflow-container">
                  <div className="as-chat-title"> Necesitas ayuda? </div>{" "}
                  <div className="as-chat-content">
                    <a
                      className="as-chat-button active as-buttonlink icon icon-after icon-external"
                      data-autom="chat-with-a-specialist-link"
                      data-chat-ui="WEB_CHAT_ACTION_GROUP=FASTPASS;"
                      data-relatedlink="chat-with-a-specialist"
                      href={"https://wa.me/949174221"}
                      target="_blank"
                    >
                      Contáctanos
                      <span className="a11y">(Opens in a new window)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column large-7 large-offset-1 small-12 small-offset-0">
            <div data-autom="productImage">
              <div
                aria-label="Gallery"
                className="rc-inline-gallery rf-pdp-inline-gallery"
                role="group"
              >
                <div className="rf-pdp-inline-gallery-thumbnav-wrapper">
                  <ul className="rf-pdp-inline-gallery-thumbnav" role="tablist">
                    <li
                      className="rf-pdp-inline-gallery-thumbnav-item"
                      role="presentation"
                    >
                      <button
                        aria-controls=":r4:-gallery-item-0"
                        aria-selected="true"
                        className="rf-pdp-inline-gallery-thumbnav-current"
                        id=":r4:-tab-item-0"
                        role="tab"
                        tabIndex="0"
                        type="button"
                      >
                        <img
                          alt={""}
                          height="38"
                          src={producto.imagen_url}
                          width="38"
                        />
                      </button>
                    </li>
                    <li
                      className="rf-pdp-inline-gallery-thumbnav-slider"
                      role="presentation"
                      style={{
                        transform: "translate(0px, 68px)",
                        transition: "none",
                      }}
                    />
                  </ul>
                </div>
                <div
                  data-core-gallery="true"
                  data-core-gallery-fade="false"
                  id=":r4:"
                >
                  <div
                    data-core-gallery-scroller="true"
                    style={{
                      insetInlineStart: "0%",
                      transform: "translateX(0px)",
                      transition: "none",
                      width: "400%",
                    }}
                  >
                    <div
                      aria-hidden="false"
                      aria-label="Item 1"
                      className="rf-pdp-inline-gallery-item rf-pdp-inline-gallery-item-focusable rc-inline-gallery-item"
                      data-core-gallery-item="true"
                      id=":r4:-gallery-item-0"
                      role="tabpanel"
                      tabIndex="0"
                    >
                      <img
                        alt={""}
                        className="rf-pdp-inline-gallery-image"
                        height="572"
                        src={producto.imagen_url}
                        width="572"
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      aria-label="Item 2"
                      className="rf-pdp-inline-gallery-item rf-pdp-inline-gallery-item-focusable rc-inline-gallery-item"
                      data-core-gallery-item="true"
                      id=":r4:-gallery-item-1"
                      role="tabpanel"
                      tabIndex="-1"
                    >
                      <img
                        alt={""}
                        className="rf-pdp-inline-gallery-image"
                        height="572"
                        src={""}
                        width="572"
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      aria-label="Item 3"
                      className="rf-pdp-inline-gallery-item rf-pdp-inline-gallery-item-focusable rc-inline-gallery-item"
                      data-core-gallery-item="true"
                      id=":r4:-gallery-item-2"
                      role="tabpanel"
                      tabIndex="-1"
                    >
                      <img
                        alt={""}
                        className="rf-pdp-inline-gallery-image"
                        height="572"
                        src={""}
                        width="572"
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      aria-label="Item 4"
                      className="rf-pdp-inline-gallery-item rf-pdp-inline-gallery-item-focusable rc-inline-gallery-item"
                      data-core-gallery-item="true"
                      id=":r4:-gallery-item-3"
                      role="tabpanel"
                      tabIndex="-1"
                    >
                      <img
                        alt={""}
                        className="rf-pdp-inline-gallery-image"
                        height="572"
                        src={""}
                        width="572"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-label="Product Information" id="pdp-accordion-root">
        <div
          className="rf-pdp-product-details as-l-container"
          data-analytics-section="accordion"
        >
          <ul
            className="rc-accordion rf-pdp-accordionlist"
            data-core-accordion=""
            id=":r6:"
          >
            <li
              className="rf-pdp-accordionbox rf-pdp-productinfosection rc-accordion-item"
              data-core-accordion-item=""
              data-core-accordion-item-expanded=""
            >
              <h2
                className="rf-pdp-accordionboxtitle"
                data-autom="productInformationTitle"
              >
                <button
                  aria-controls="content-:r6:-0"
                  aria-expanded="true"
                  className="rc-accordion-button rf-pdp-productinformation-accordion"
                  data-core-accordion-button=""
                  data-core-accordion-button-expanded=""
                  id="title-:r6:-0"
                  type="button"
                >
                  <span className="typography-callout" />
                  <span className="rc-accordion-title large-10 typography-callout">
                    Información del producto
                  </span>
                  <span className="icon rc-accordion-collapse-icon" />
                  <span className="rc-accordion-chevrondown rc-accordion-collapse-icon">
                    <svg
                      className="accordion-icon-svg"
                      height="35px"
                      viewBox="0 0 17 8.85"
                      width="35px"
                    >
                      <polyline
                        data-accordion-icon-shape=""
                        fill="none"
                        fillRule="evenodd"
                        points="15 1.13 8.5 7.72 2 1.13"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <animate
                          attributeName="points"
                          begin="indefinite"
                          calcMode="spline"
                          data-accordion-animate="expand"
                          dur="320ms"
                          fill="freeze"
                          keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
                          keyTimes="0; 0.5; 1"
                          values="15 1.13 8.5 7.72 2 1.13; 15.85 4.42 8.5 4.42 1.15 4.42; 15 7.72 8.5 1.13 2 7.72"
                        />
                        <animate
                          attributeName="points"
                          begin="indefinite"
                          calcMode="spline"
                          data-accordion-animate="collapse"
                          dur="320ms"
                          fill="freeze"
                          keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
                          keyTimes="0; 0.5; 1"
                          values="15 7.72 8.5 1.13 2 7.72; 15.85 4.42 8.5 4.42 1.15 4.42; 15 1.13 8.5 7.72 2 1.13"
                        />
                      </polyline>
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                className="r-height-transition-enter-done"
                data-core-height-transition-wrapper=""
                style={{}}
              >
                <div data-core-height-transition-content="">
                  <div data-core-accordion-content="" id="content-:r6:-0">
                    <div className="rc-accordion-content large-10 rc-accordion-content-nopadding">
                      <div className="">
                        <div className="rc-pdsection-panel Overview-panel row">
                          <div className="rc-pdsection-sidepanel column large-3 small-12">
                            <h3
                              className="rc-pdsection-title typography-label"
                              data-autom="sectionTitle"
                            >
                              Descripción General
                            </h3>
                          </div>
                          <div className="rc-pdsection-mainpanel column large-9 small-12">
                            <div>
                              <div className="para-list as-pdp-lastparalist">
                                <p>-</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rc-pdsection-panel WhatsInTheBox-panel row">
                          <div className="rc-pdsection-sidepanel column large-3 small-12">
                            <h3
                              className="rc-pdsection-title typography-label"
                              data-autom="sectionTitle"
                            >
                              Qué hay en la caja
                            </h3>
                          </div>
                          <div className="rc-pdsection-mainpanel column large-9 small-12">
                            <div>
                              <div className="para-list as-pdp-lastparalist">
                                <p>-</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rc-pdsection-panel TechSpecs-panel row">
                          <div className="rc-pdsection-sidepanel column large-3 small-12">
                            <h3
                              className="rc-pdsection-title typography-label"
                              data-autom="sectionTitle"
                            >
                              Especificaciones técnicas
                            </h3>
                          </div>
                          <div className="rc-pdsection-mainpanel column large-9 small-12">
                            <div>
                              <div className="para-list as-pdp-lastparalist">
                                <p>-</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="rf-pdp-accordionbox rf-pdp-compatibility rc-accordion-item"
              data-core-accordion-item=""
            >
              <h2
                className="rf-pdp-accordionboxtitle"
                data-autom="compatibilityTitle"
              >
                <button
                  aria-controls="content-:r6:-1"
                  aria-expanded="false"
                  className="rc-accordion-button rf-pdp-compatibility-accordion"
                  data-core-accordion-button=""
                  id="title-:r6:-1"
                  type="button"
                >
                  <span className="typography-callout" />
                  <span className="rc-accordion-title large-10 typography-callout">
                    Compatibilidad
                  </span>
                  <span className="icon rc-accordion-collapse-icon" />
                  <span className="rc-accordion-chevrondown rc-accordion-collapse-icon">
                    <svg
                      className="accordion-icon-svg"
                      height="35px"
                      viewBox="0 0 17 8.85"
                      width="35px"
                    >
                      <polyline
                        data-accordion-icon-shape=""
                        fill="none"
                        fillRule="evenodd"
                        points="15 1.13 8.5 7.72 2 1.13"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <animate
                          attributeName="points"
                          begin="indefinite"
                          calcMode="spline"
                          data-accordion-animate="expand"
                          dur="320ms"
                          fill="freeze"
                          keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
                          keyTimes="0; 0.5; 1"
                          values="15 1.13 8.5 7.72 2 1.13; 15.85 4.42 8.5 4.42 1.15 4.42; 15 7.72 8.5 1.13 2 7.72"
                        />
                        <animate
                          attributeName="points"
                          begin="indefinite"
                          calcMode="spline"
                          data-accordion-animate="collapse"
                          dur="320ms"
                          fill="freeze"
                          keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
                          keyTimes="0; 0.5; 1"
                          values="15 7.72 8.5 1.13 2 7.72; 15.85 4.42 8.5 4.42 1.15 4.42; 15 1.13 8.5 7.72 2 1.13"
                        />
                      </polyline>
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                aria-hidden="true"
                className="r-height-transition-exit-done"
                data-core-height-transition-wrapper=""
                style={{
                  height: "0px",
                }}
              >
                <div data-core-height-transition-content="">
                  <div
                    aria-hidden="true"
                    data-core-accordion-content=""
                    id="content-:r6:-1"
                  >
                    <div className="rc-accordion-content large-10 rc-accordion-content-nopadding">
                      <div className="">
                        <div className="rf-pdp-compabilitysection-panel row">
                          <div className="rf-pdp-compability-sidepanel column large-3 small-12">
                            <div className="rf-pdp-compatibility" />
                          </div>
                          <div className="rf-compability-mainpanel column large-9 small-12">
                            <div className="rf-pdp-compatibility-list">
                              <h3
                                className="rf-pdp-compatibility-title"
                                data-autom="compatibleModelTitle"
                              >
                                Según su uso
                              </h3>
                              <ul className="rf-pdp-productlist" role="list">
                                <li
                                  className="rf-pdp-compatibility-productlistitems"
                                  role="listitem"
                                >
                                  <span>Piscinas Residenciales</span>
                                </li>
                                <li
                                  className="rf-pdp-compatibility-productlistitems"
                                  role="listitem"
                                >
                                  <span>Piscinas Comerciales</span>
                                </li>
                                <li
                                  className="rf-pdp-compatibility-productlistitems"
                                  role="listitem"
                                >
                                  <span>Piscinas con Hidromasajes</span>
                                </li>
                                <li
                                  className="rf-pdp-compatibility-productlistitems"
                                  role="listitem"
                                >
                                  <span>Piscinas Naturales</span>
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
