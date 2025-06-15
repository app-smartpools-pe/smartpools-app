import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../css/main.built.css";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [serviciosDestacados, setServiciosDestacados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  // const [data, setData] = useState(null);

  const productContentRef = useRef(null);
  const serviceContentRef = useRef(null);

  // const [lastProductScrollLeft, setLastProductScrollLeft] = useState(0);
  // const [lastServiceScrollLeft, setLastServiceScrollLeft] = useState(0);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mail: "",
    department: "",
    province: "",
    district: "",
    zip_code: "",
    number_phone: "",
    reason: "",
    comments: "",
  });

  const [message, setMessage] = useState(""); // Para mensajes de éxito o error
  const [error, setError] = useState(""); // Para errores específicos

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    setMessage(""); // Limpiar mensajes anteriores
    setError(""); // Limpiar errores anteriores

    try {
      const response = await fetch(
        "http://localhost:3000/api/quoteform/quotes",
        {
          // <--- URL de tu API
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Envía los datos del formulario como JSON
        }
      );

      const data = await response.json(); // Parsea la respuesta del servidor

      if (response.ok) {
        setMessage(data.message); // Muestra el mensaje de éxito del backend
        setFormData({
          // Limpia el formulario después del envío exitoso
          first_name: "",
          last_name: "",
          mail: "",
          department: "",
          province: "",
          district: "",
          zip_code: "",
          number_phone: "",
          reason: "",
          comments: "",
        });
      } else {
        setError(data.error || "Ocurrió un error al enviar la cotización."); // Muestra el error del backend
      }
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
      setError(
        "No se pudo conectar con el servidor. Inténtalo de nuevo más tarde."
      );
    }
  };

  // const productScrollAmount = 250;
  // const serviceScrollAmount = 200;

  useEffect(() => {
    // Simula carga de datos (puede ser fetch real)
    const loadData = async () => {
      await new Promise((res) => setTimeout(res, 2000)); // simula delay
      // setData({});

      // Inicia la animación fade-out
      setFadeOut(true);

      // Espera la animación para quitar el skeleton
      setTimeout(() => {
        setLoading(false);
      }, 800); // Igual al tiempo del fade-out en CSS
    };

    loadData();
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/featuredservices")
      .then((res) => res.json())
      .then((data) => setServiciosDestacados(data))
      .catch((err) => console.error("Error al cargar Featured Services:", err));
  }, []);

  // useEffect(() => {
  //   const container = productContentRef.current;
  //   if (!container) {
  //     return;
  //   }

  //   const handleScroll = () => {
  //     const currentScrollLeft = container.scrollLeft;
  //     if (currentScrollLeft < lastProductScrollLeft) {
  //       container.scrollTo({
  //         left: currentScrollLeft - productScrollAmount,
  //         behavior: "smooth",
  //       });
  //     }
  //     setLastProductScrollLeft(currentScrollLeft);
  //   };

  //   container.addEventListener("scroll", handleScroll);

  //   return () => {
  //     container.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastProductScrollLeft, productScrollAmount]);

  // useEffect(() => {
  //   const container = serviceContentRef.current;
  //   if (!container) {
  //     return;
  //   }

  //   const handleScroll = () => {
  //     const currentScrollLeft = container.scrollLeft;
  //     if (currentScrollLeft < lastServiceScrollLeft) {
  //       container.scrollTo({
  //         left: currentScrollLeft - serviceScrollAmount,
  //         behavior: "smooth",
  //       });
  //     }
  //     setLastServiceScrollLeft(currentScrollLeft);
  //   };

  //   container.addEventListener("scroll", handleScroll);

  //   return () => {
  //     container.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastServiceScrollLeft, serviceScrollAmount]);

  // --- ESTADOS Y LÓGICA PARA EL CARRUSEL DE PRODUCTOS BASADO EN SCROLL NATIVO ---

  const [canProductScrollLeft, setCanProductScrollLeft] = useState(false);
  const [canProductScrollRight, setCanProductScrollRight] = useState(true); // Asume que puede desplazarse a la derecha al inicio

  // Valor de desplazamiento por clic (puedes ajustarlo, por ejemplo, al ancho de 1, 2 o 4 productos)
  const productScrollStep = 1672; // Ejemplo: un valor en píxeles. Ajusta según el ancho real de tus '.listitem' + su margen.

  // Función para desplazar productos a la derecha
  const scrollProductsRight = () => {
    if (productContentRef.current) {
      productContentRef.current.scrollBy({
        left: productScrollStep,
        behavior: "smooth",
      });
    }
  };

  // Función para desplazar productos a la izquierda
  const scrollProductsLeft = () => {
    if (productContentRef.current) {
      productContentRef.current.scrollBy({
        left: -productScrollStep,
        behavior: "smooth",
      });
    }
  };

  // Función para actualizar el estado de los botones de scroll de productos
  const updateProductScrollButtons = () => {
    if (productContentRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        productContentRef.current;
      setCanProductScrollLeft(scrollLeft > 0);
      // Puedes desplazarte a la derecha si la posición actual + el ancho visible es menor que el ancho total del contenido
      setCanProductScrollRight(
        Math.round(scrollLeft) < scrollWidth - clientWidth - 1
      );
    }
  };

  // Agrega un listener para actualizar los botones cuando el scroll cambie en el carrusel de productos

  useEffect(() => {
    const currentRef = productContentRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", updateProductScrollButtons);
      updateProductScrollButtons();
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", updateProductScrollButtons);
      }
    };
  }, [productos]);

  // Dependencia de 'productos' para re-evaluar si los productos cambian

  // --- FIN LÓGICA PARA EL CARRUSEL DE PRODUCTOS BASADO EN SCROLL NATIVO ---

  return (
    <main className="main" role="main">
      {loading && (
        <div
          id="skeleton-container-fll"
          // className="skeleton-container"
          className={`skeleton-container skeleton-screen ${fadeOut ? "fade-out" : ""}`}
        >
          <div className="skeleton-body">
            <div className="skeleton-banner-wrapper">
              <div className="skeleton skeleton-head-banner"></div>
            </div>

            <div className="skeleton-title-wrapper">
              <div className="skeleton skeleton-head-title"></div>
            </div>

            <div className="skeleton-prod-wrapper">
              <div className="listitem">
                <div className="skeleton-body-item">
                  <div className="skeleton-image-wrapper">
                    <div className="skeleton skeleton-image"></div>
                  </div>
                  <div className="skeleton-text-body">
                    <div className="skeleton skeleton-violator"></div>
                    <div className="skeleton skeleton-name"></div>
                    <div className="skeleton skeleton-description"></div>
                  </div>
                </div>
              </div>

              <div className="listitem">
                <div className="skeleton-body-item">
                  <div className="skeleton-image-wrapper">
                    <div className="skeleton skeleton-image"></div>
                  </div>
                  <div className="skeleton-text-body">
                    <div className="skeleton skeleton-violator"></div>
                    <div className="skeleton skeleton-name"></div>
                    <div className="skeleton skeleton-description"></div>
                  </div>
                </div>
              </div>

              <div className="listitem">
                <div className="skeleton-body-item">
                  <div className="skeleton-image-wrapper">
                    <div className="skeleton skeleton-image"></div>
                  </div>
                  <div className="skeleton-text-body">
                    <div className="skeleton skeleton-violator"></div>
                    <div className="skeleton skeleton-name"></div>
                    <div className="skeleton skeleton-description"></div>
                  </div>
                </div>
              </div>

              <div className="listitem">
                <div className="skeleton-body-item">
                  <div className="skeleton-image-wrapper">
                    <div className="skeleton skeleton-image"></div>
                  </div>
                  <div className="skeleton-text-body">
                    <div className="skeleton skeleton-violator"></div>
                    <div className="skeleton skeleton-name"></div>
                    <div className="skeleton skeleton-description"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skeleton-title-wrapper">
              <div className="skeleton skeleton-head-title"></div>
            </div>

            <div className="skeleton-serv-wrapper">
              <div className="listitem">
                <div className="skeleton-body-item">
                  <div className="skeleton-image-wrapper">
                    <div className="skeleton skeleton-image"></div>
                  </div>
                  <div className="skeleton-text-body">
                    <div className="skeleton skeleton-violator"></div>
                    <div className="skeleton skeleton-name"></div>
                    <div className="skeleton skeleton-description"></div>
                  </div>
                </div>
              </div>

              <div className="listitem">
                <div className="skeleton-body-item">
                  <div className="skeleton-image-wrapper">
                    <div className="skeleton skeleton-image"></div>
                  </div>
                  <div className="skeleton-text-body">
                    <div className="skeleton skeleton-violator"></div>
                    <div className="skeleton skeleton-name"></div>
                    <div className="skeleton skeleton-description"></div>
                  </div>
                </div>
              </div>

              <div className="listitem">
                <div className="skeleton-body-item">
                  <div className="skeleton-image-wrapper">
                    <div className="skeleton skeleton-image"></div>
                  </div>
                  <div className="skeleton-text-body">
                    <div className="skeleton skeleton-violator"></div>
                    <div className="skeleton skeleton-name"></div>
                    <div className="skeleton skeleton-description"></div>
                  </div>
                </div>
              </div>

              <div className="listitem">
                <div className="skeleton-body-item">
                  <div className="skeleton-image-wrapper">
                    <div className="skeleton skeleton-image"></div>
                  </div>
                  <div className="skeleton-text-body">
                    <div className="skeleton skeleton-violator"></div>
                    <div className="skeleton skeleton-name"></div>
                    <div className="skeleton skeleton-description"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && (
        <div className="homepage-section collection-module">
          <div className="inv164121052025 first banner-slider-container">
            <div id="--slider--banner--home--" className="slider-banner-home">
              <div id="--unit--slider--" className="slider-wrapper-home">
                <section className="art-wrapper-section-home --unit--slide--1--">
                  <div className="unit-copy-wrapper">
                    <h2 className="welcome-to-smartpools">
                      ¡Bienvenido a smartpools!
                    </h2>
                    <p className="copy-to-welcome">
                      Transformamos tus ideas en realidad.
                    </p>
                    <div className="--unit--link--wrapper--banner-home--">
                      <div className="--unit--link--wrapper--">
                        <Link
                          to="./"
                          className="buttonpools button-elevated button-primary"
                        >
                          Empieza tu proyecto
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="unit-image-wrapper">
                    <picture className="art-image">
                      <img
                        src="images/unit-smartpools_intelligence-coming-soon-picture-25-26-100.jpg"
                        alt=""
                        className="--image--slider-home-- --unit--image--slide--home--1-- brightness-0"
                      />
                    </picture>
                  </div>
                </section>
                <section className="art-wrapper-section-home --unit--slide--1--">
                  <div className="unit-copy-wrapper">
                    <h2 className="welcome-to-smartpools">
                      ¡Bienvenido a smartpools!
                    </h2>
                    <p className="copy-to-welcome">
                      Transformamos tus ideas en realidad.
                    </p>
                    <div className="--unit--link--wrapper--banner-home--">
                      <div className="--unit--link--wrapper--">
                        <Link
                          to="./"
                          className="buttonpools button-elevated button-primary"
                        >
                          Empieza tu proyecto
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="unit-image-wrapper">
                    <picture className="art-image">
                      <img
                        src="images/swimming-pool-top-view.jpg"
                        alt=""
                        className="--image--slider-home-- --unit--image--slide--home--1-- brightness-1"
                      />
                    </picture>
                  </div>
                </section>
                <section className="art-wrapper-section-home --unit--slide--1--">
                  <div className="unit-copy-wrapper">
                    <h2 className="welcome-to-smartpools">
                      Equipos y Accesorios
                    </h2>
                    <p className="welcome-to-smartpools">
                      Todo lo que tu piscina necesita ¡A un solo clic!
                    </p>
                    <div className="--unit--link--wrapper--banner-home--">
                      <div className="--unit--link--wrapper--">
                        <Link
                          to="./"
                          className="buttonpools button-elevated button-primary"
                        >
                          Ir a la Tienda
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="unit-image-wrapper">
                    <picture className="art-image">
                      <img
                        src="images/--Everything your pool needs is just a click away.png"
                        alt=""
                        className="--image--slider-home-- --unit--image--slide--home--1-- brightness-2"
                      />
                    </picture>
                  </div>
                </section>
                <section className="art-wrapper-section-home --unit--slide--1--">
                  <div className="unit-copy-wrapper">
                    <h2 className="welcome-to-smartpools">
                      Nos encargamos del mantenimiento
                    </h2>
                    <p className="welcome-to-smartpools">
                      Brindamos mantenimiento y limpieza integral a tu piscina.
                    </p>
                    <div className="--unit--link--wrapper--banner-home--">
                      <div className="--unit--link--wrapper--">
                        <Link
                          to="./"
                          className="buttonpools button-elevated button-primary"
                        >
                          Quiero agendar una visita
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="unit-image-wrapper">
                    <picture className="art-image">
                      <img
                        src="images/pool-maintenance-technician.jpg"
                        alt=""
                        className="--image--slider-home-- --unit--image--slide--home--1-- brightness-3"
                      />
                    </picture>
                  </div>
                </section>
                <section className="art-wrapper-section-home --unit--slide--1--">
                  <div className="unit-copy-wrapper">
                    <h2 className="welcome-to-smartpools">
                      Smartpools Experience
                    </h2>
                    <p className="welcome-to-smartpools">
                      Contamos con más de 40 años de experiencia liderando el
                      mercado de construcción de piscinas, para casas
                      residenciales, hoteles, clubes y más.
                    </p>
                    <div className="--unit--link--wrapper--banner-home--">
                      <div className="--unit--link--wrapper--">
                        <Link
                          to="./"
                          className="buttonpools button-elevated button-primary"
                        >
                          Conócenos
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="unit-image-wrapper">
                    <picture className="art-image">
                      <img
                        src="images/high-angle-view-man-swimming-pool.jpg"
                        alt=""
                        className="--image--slider-home-- --unit--image--slide--home--1-- brightness-4"
                      />
                    </picture>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div
            // className="inv164121052025 center stn-prod-store-container"
            className="section section-incentive background-alt"
          >
            <div
              id="products"
              // className="contenido products-smartpools-store"
              className="gallery-container v0 staggered-end"
            >
              <div className="title">
                <h2>Productos destacados</h2>
              </div>
              <div
                // className="gallery product-content"
                id="scroll-gallery-icon-cards"
                className="gallery gallery-align-start gallery-icon-cards"
                aria-label="smartpools featured products"
                data-analytics-gallery-id="smartpools featured products"
                data-component-list="ScrollGallery"
                data-scroll-gallery=""
                data-scroll-gallery-icon-cards=""
                style={{
                  "--scroll-bar-width": "15px",
                }}
              >
                <div className="scroll-container" ref={productContentRef}>
                  <div className="item-container">
                    <ul className="card-set" role="list">
                      {productos.slice(0, 4).map((prod) => (
                        <li
                          role="listitem"
                          className="gallery-item grid-item"
                          data-analytics-gallery-item-id={prod.nombre}
                          key={prod.id}
                        >
                          <div
                            className="prodItem product-1 rf-cards-scroller-content"
                            data-trigger-click="click [data-relatedlink=':r1k:']"
                          >
                            <div className="rf-product-content-img">
                              <div className="image-product">
                                <Link
                                  to={`/shop/product/IGMALLPRODUCTS/P/${prod.slug}`}
                                  target="_blank"
                                >
                                  <img
                                    decoding="async"
                                    width={200}
                                    height={200}
                                    src={prod.imagen_url}
                                    alt=""
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="rf-product-content-info">
                              <div className="rf-recommcard-content-violator">
                                <span className="badge badge-reduced badge-no-scrim rf-recommcard-content-violatortext">
                                  {prod.categoria}
                                </span>
                              </div>
                              <h3 className="name-product">
                                <Link
                                  to={`/shop/product/IGMALLPRODUCTS/P/${prod.slug}`}
                                  target="_blank"
                                >
                                  <span>{prod.nombre}</span>
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="paddlenav paddlenav-alpha display-none"
                data-analytics-gallery-interaction-type="paddlenav"
                data-gallery-paddlenav=""
              >
                <ul className="sticky-element">
                  <li className="left-item">
                    <button
                      aria-label="Previous"
                      className="paddlenav-arrow paddlenav-arrow-previous"
                      onClick={scrollProductsLeft}
                      // disabled={!canProductScrollLeft}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z" />
                      </svg>
                    </button>
                  </li>
                  <li className="right-item">
                    <button
                      aria-label="Next"
                      className="paddlenav-arrow paddlenav-arrow-next"
                      onClick={scrollProductsRight}
                      disabled={!canProductScrollRight}
                    >
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z" />
                      </svg>
                    </button>
                  </li>
                  <div className="scrim" />
                </ul>
              </div>
              {/* <div className="btn-container">
                <div className="btn-2">
                  <div className="button-wrapper">
                    <div className="button-link">
                      <Link to="/store" target="_blank">
                        <span className="button-content-wrapper">
                          <span className="button-text">
                            Mostrar más productos
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="btn-container">
              <div className="btn-2">
                <div className="button-wrapper">
                  <div className="button-link">
                    <Link to="/store" target="_blank">
                      <span className="button-content-wrapper">
                        <span className="button-text">
                          Mostrar más productos
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inv164121052025 last stn-serv-smart-container">
            <div
              id="featuredServices"
              className="contenido featuredServices-smartpools-siteWeb"
            >
              <div className="title">
                <h2>Servicios destacados</h2>
              </div>

              <div
                className="gallery-container v0 staggered-end"
                data-component-list="StaggeredFadeIn"
              >
                <div
                  aria-label="Why Apple gallery"
                  className="gallery gallery-align-start gallery-icon-cards"
                  data-analytics-gallery-id="why apple gallery"
                  data-component-list="ScrollGallery"
                  data-scroll-gallery=""
                  data-scroll-gallery-icon-cards=""
                  id="scroll-gallery-icon-cards"
                  style={{
                    "--scroll-bar-width": "15px",
                  }}
                >
                  <div className="scroll-container">
                    <div className="item-container">
                      <ul
                        className="card-set"
                        role="list"
                        ref={serviceContentRef}
                      >
                        {serviciosDestacados.slice(0, 4).map((serv) => (
                          <li
                            className="gallery-item grid-item current"
                            data-ac-gallery-item=""
                            data-analytics-gallery-item-id={
                              serv.featuredservices
                            }
                            data-staggered-item=""
                            role="listitem"
                            style={{}}
                            key={serv.id}
                          >
                            <div
                              className="icon-card card-container"
                              data-component-list="Modal"
                              id="icon-card-trade-in"
                            >
                              <div className="card" tabIndex="-1">
                                <div className="card-modifier card-padding has-trigger-button fixed-width">
                                  <div className="card-viewport-content">
                                    <div className="icon-card-content">
                                      <div className="icon-container">
                                        <picture
                                          id={serv.featuredservices}
                                          className="overview-incentive-icon-trade-in-2024-iphone icon-card-image loaded"
                                          data-lazy=""
                                          data-picture-loaded=""
                                        >
                                          <img
                                            className="eeqv8d6hkt0m_large"
                                            alt=""
                                            onLoad="__lp(event)"
                                            src="images/icon_smartpools_iSotipe__eeqv8d6hkt0m_large_border-radius_iso_oo.png"
                                          />
                                        </picture>
                                      </div>
                                      <div className="copy-container">
                                        <h3 className="typography-card-headline">
                                          <span className="android-hide">
                                            {serv.featuredservices}
                                          </span>
                                        </h3>
                                        <p className="typography-family-paragraph">
                                          {serv.descripcion}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button
                                aria-label="Learn more about Apple Trade in."
                                className="card-modal-trigger modal-trigger card-cta-modal-button"
                                data-analytics-click="prop3:open modal - trade in"
                                data-analytics-intrapage-link=""
                                data-analytics-title="open modal - trade in"
                                data-modal-open=""
                              >
                                <div className="modal-trigger-container">
                                  <span className="card-cta-modal-button-icon">
                                    <svg
                                      className="card-cta-modal-button-small-icon card-modal-button-small-icon"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z" />
                                    </svg>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <div className="btn-2">
                <div className="button-wrapper">
                  <div className="button-link">
                    <Link to="/services" target="_blank">
                      <span className="button-content-wrapper">
                        <span className="button-text">
                          Mostrar más servicios
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="--ac-form-ctz--"
            className="--unit--section--form--container--pagehome--"
          >
            <div className="--unit--section--form--pagehome--">
              <div className="--unit--section--form--content--">
                <div className="--head--form--pagehome">
                  <div className="--head--form--pagehome--wrapper--">
                    <h1>
                      ¡Aumenta el valor a tu propiedad y obtén un área de
                      recreación!
                    </h1>
                    <p>
                      Envíanos tus datos y nos pondremos en contacto contigo.
                    </p>
                  </div>
                </div>
                <div className="--content--form--pagehome">
                  {message && <p className="success-message">{message}</p>}
                  {error && <p className="error-message">{error}</p>}
                  <form
                    id="--login--js--"
                    action=""
                    onSubmit={handleSubmit}
                    method="post"
                  >
                    <div className="--unit--form--input-- --unit--person--names--content--">
                      <div className="--firstname--">
                        <label className="label" htmlFor="name">
                          Nombre
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          placeholder="Nombre"
                          required=""
                        />
                      </div>
                      <div className="--secondname--">
                        <label className="label" htmlFor="name">
                          Apellido
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          placeholder="Apellido"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="--unit--form--input--">
                      <label className="label" htmlFor="email">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="mail"
                        name="mail"
                        value={formData.mail}
                        onChange={handleChange}
                        placeholder="Correo electrónico"
                        required=""
                      />
                    </div>
                    <div className="--unit--form--input-- --unit--person--address--content--">
                      <div className="--address-- --department--">
                        <label className="label" htmlFor="address">
                          Department
                        </label>
                        <input
                          type="text"
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          placeholder="Departamento"
                          required=""
                        />
                      </div>
                      <div className="--address-- --province--">
                        <label className="label" htmlFor="address">
                          Provincia
                        </label>
                        <input
                          type="text"
                          id="province"
                          name="province"
                          value={formData.province}
                          onChange={handleChange}
                          placeholder="Provincia"
                          required=""
                        />
                      </div>
                      <div className="--address-- --dristric-- --address--rigth--">
                        <label className="label" htmlFor="address">
                          Distrito
                        </label>
                        <input
                          type="text"
                          id="district"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          placeholder="Distrito"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="--unit--form--input-- --unit--person--codeid-and-email--content--">
                      <div className="--code--">
                        <label className="label" htmlFor="address">
                          Código Postal
                        </label>
                        <input
                          type="text"
                          id="zip_code"
                          name="zip_code"
                          value={formData.zip_code}
                          onChange={handleChange}
                          placeholder="Código Postal"
                          required=""
                        />
                      </div>
                      <div className="--numberphone--">
                        <label className="label" htmlFor="phone">
                          Número de Teléfono
                        </label>
                        <input
                          type="tel"
                          id="number_phone"
                          name="number_phone"
                          value={formData.number_phone}
                          onChange={handleChange}
                          placeholder="Número de Teléfono"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="--unit--form--input-- --reason--">
                      <label className="label" htmlFor="reason">
                        Motivo
                      </label>
                      <select
                        name="reason"
                        id="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required=""
                      >
                        <option
                          value={"Seleccione un motivo"}
                          disabled=""
                          selected=""
                        >
                          Seleccione un motivo
                        </option>
                        <option value={"Cotización"}>Cotización</option>
                        <option value={"Mantenimiento"}>Mantenimiento</option>
                        <option value={"Visita Técnica"}>Visita Técnica</option>
                        <option value={"Otro"}>Otro</option>
                      </select>
                    </div>
                    <div className="--unit--form--input-- --comments--">
                      <label className="label" htmlFor="comments">
                        Comentarios
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Comentarios (opcional)"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <div className="--unit--form--submit-- --submitForm--">
                      <input
                        type="submit"
                        defaultValue="Continuar"
                        value={"Continuar"}
                        className="--unit--form--submit-- --submitForm--"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
