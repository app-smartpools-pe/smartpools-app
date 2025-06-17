import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const PRODUCTS_PER_PAGE = 9; // Define cuántos productos mostrar por página

const Store = () => {
  const [productos, setProductos] = useState([]);
  const [categoriasUnicas, setCategoriasUnicas] = useState([]);
  const [filtroCategorias, setFiltroCategorias] = useState([]); // Estado para las categorías seleccionadas para filtrar
  const [mostrarCategorias, setMostrarCategorias] = useState(true); // Estado para controlar la visibilidad de las categorías
  const [currentPage, setCurrentPage] = useState(1);
  const { agregarAlCarrito } = useCart();

  useEffect(() => {
    document.title = "smartpools Store Online - smartpools";
    return () => {
      document.title = "smartpools"; // O el título por defecto
    };
  }, []);

  useEffect(() => {
    fetch("https://smartpools-pe.onrender.com/api/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  useEffect(() => {
    // Obtener categorías únicas una vez que los productos estén cargados
    if (productos.length > 0) {
      const uniqueCategories = [
        ...new Set(productos.map((producto) => producto.categoria)),
      ];
      setCategoriasUnicas(uniqueCategories);
    }
  }, [productos]);

  const handleFiltrarCategoria = (categoria, checked) => {
    if (checked) {
      setFiltroCategorias([...filtroCategorias, categoria]);
    } else {
      setFiltroCategorias(filtroCategorias.filter((cat) => cat !== categoria));
    }
  };

  const toggleMostrarCategorias = () => {
    setMostrarCategorias(!mostrarCategorias);
  };

  const productosFiltrados =
    filtroCategorias.length === 0
      ? productos
      : productos.filter((producto) =>
          filtroCategorias.includes(producto.categoria)
        );

  // Paginación
  const totalPages = Math.ceil(productosFiltrados.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const productosPaginados = productosFiltrados.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const formatNumber = (number) => {
    return number.toLocaleString("es-Pe", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div
      className="rs-storehome"
      role="main"
      style={{
        marginBlockEnd: "12px",
        paddingTop: "44px",
        backgroundColor: "#f5f5f7",
      }}
    >
      <div id="root">
        <div className="rs-storehome-app">
          <div
            className="rc-ribbon ribbon ribbon-blue-to-default rc-ribbon-hide rs-storehome-banner"
            data-analytics-region="banner"
          >
            <div className="ribbon-drop-wrapper">
              {" "}
              <div className="ribbon-content-wrapper">
                <div className="ribbon-content rc-ribbon-content-container row">
                  0
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div id="shop-content" className="rs-store-content">
        <div className="as-l-container rs-store-header">
          <div className="row">
            <div className="column large-8 small-12 rs-shop-header-section">
              <h1 className="rs-shop-header">Store.</h1>
              <p className="rs-shop-subheader">
                &nbsp;Compra los mejores equipos y accesorios para tu piscina
                aquí.
              </p>
            </div>
          </div>
        </div>

        <div className="rs-cardsshelf rs-productnav-cardsshelf">
          <div id="shelf-1">
            <div
              data-analytics-region="Shelf-0"
              data-analytics-section="Shelf-0"
              id="shelf-1_section"
            >
              <div className="rf-cards-scroller">
                <div className="rf-cards-scroller-crop">
                  <div
                    className="rf-cards-scroller-content"
                    data-core-scroller=""
                    style={{
                      overflowX: "scroll",
                    }}
                  >
                    <div
                      aria-label="Product"
                      className="rf-cards-scroller-platter"
                      data-core-scroller-platter=""
                      role="list"
                    >
                      {categoriasUnicas.map((categoria, index) => (
                        <div
                          key={index}
                          data-core-scroller-item=""
                          role="listitem"
                        >
                          <div className="rf-cards-scroller-itemview">
                            <div
                              className="rf-productnav-card as-util-relatedlink"
                              data-trigger-click="click [data-relatedlink=':r5:_link']"
                            >
                              <div className="rf-productnav-card-content">
                                <div className="rf-productnav-card-image">
                                  <img
                                    alt=""
                                    height="130"
                                    loading="lazy"
                                    src={null}
                                    width="200"
                                  />
                                </div>
                                <div className="rf-productnav-card-info">
                                  <div>
                                    <a
                                      className="rf-productnav-card-title"
                                      data-autom={""}
                                      data-display-name={""}
                                      data-index="1"
                                      data-relatedlink=":r5:_link"
                                      data-slot-name="Shelf-0"
                                      data-trigger-stoppropagation="true"
                                      href={""}
                                    >
                                      {categoria}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="paddlenav paddlenav-alpha paddlenav-framed paddlenav-elevated">
                  <button
                    aria-hidden="true"
                    className="paddlenav-arrow paddlenav-arrow-previous"
                    disabled
                    type="button"
                  >
                    <span>
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z" />
                      </svg>
                    </span>
                    <span className="visuallyhidden">Previous - Product</span>
                  </button>
                  <button
                    aria-hidden="true"
                    className="paddlenav-arrow paddlenav-arrow-next"
                    disabled
                    type="button"
                  >
                    <span>
                      <svg
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z" />
                      </svg>
                    </span>
                    <span className="visuallyhidden">Next - Product</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="as-l-container rs-cards-shelf-header">
          <h2 className="rs-cards-shelf-mainheader">Lo último.</h2>
          <span className="rs-cards-shelf-secondaryheader">
            &nbsp;Echa un vistazo a las novedades, ahora mismo.
          </span>
        </div>

        <div className="rf-cards-section">
          <div className="rf-products-section-header">
            <div className="rf-products-section-results-controls-container">
              <div
                data-core-sticky=""
                style={{
                  top: "0px",
                }}
              >
                <div className="rf-products-section-results-controls">
                  <div className="rf-products-sort-wrapper">
                    <div>
                      <div data-core-tooltip="">
                        <button
                          aria-controls="rf-products-sort-drawer"
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="rf-products-sort"
                          data-core-tooltip-trigger=""
                          type="button"
                        >
                          <span className="rf-products-sort-label">
                            Ordenar por:{" "}
                          </span>
                          <span className="rf-products-sort-selected">
                            Destacado
                          </span>
                          <span
                            aria-hidden="true"
                            className="icon icon-after icon-chevrondown"
                          />
                        </button>
                        <div
                          aria-hidden="true"
                          className="r-fade-transition-exit-done"
                          data-core-fade-transition-wrapper=""
                          data-core-tooltip-trans=""
                        >
                          <div
                            aria-hidden="true"
                            data-core-tooltip-bottom=""
                            data-core-tooltip-content=""
                            data-core-tooltip-withtip=""
                            id="rf-sort-drawer"
                            role="tooltip"
                            tabIndex="-1"
                          >
                            <ul
                              className="rf-products-sort-list"
                              id="rf-products-sort-drawer"
                              role="menu"
                            >
                              <li
                                className="rf-products-sort-listitem"
                                role="menuitem"
                              >
                                <a
                                  aria-current="true"
                                  className="rf-products-sort-links rf-sort-links-featured rf-products-selected-option"
                                  data-autom="sortBy-featured"
                                  href="?s=featured"
                                >
                                  Destacados
                                </a>
                              </li>
                              <li
                                className="rf-products-sort-listitem"
                                role="menuitem"
                              >
                                <a
                                  aria-current="false"
                                  className="rf-products-sort-links rf-sort-links-newest"
                                  data-autom="sortBy-newest"
                                  href="?s=newest"
                                >
                                  Más recientes
                                </a>
                              </li>
                              <li
                                className="rf-products-sort-listitem"
                                role="menuitem"
                              >
                                <a
                                  aria-current="false"
                                  className="rf-products-sort-links rf-sort-links-priceLH"
                                  data-autom="sortBy-priceLH"
                                  href="?s=priceLH"
                                >
                                  Precio: Menor a mayor
                                </a>
                              </li>
                              <li
                                className="rf-products-sort-listitem"
                                role="menuitem"
                              >
                                <a
                                  aria-current="false"
                                  className="rf-products-sort-links rf-sort-links-priceHL"
                                  data-autom="sortBy-priceHL"
                                  href="?s=priceHL"
                                >
                                  Precio: Mayor a menor
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rf-products-filters-toggle">
                    <button
                      aria-controls="rf-searchfilters"
                      aria-expanded="true"
                      className="rf-products-filter-button"
                      data-autom="filterButton"
                      type="button"
                    >
                      <span className="as-svgicon-container rf-products-filter-icon">
                        <svg
                          aria-hidden="true"
                          className="as-svgicon as-svgicon-filter as-svgicon-tiny as-svgicon-filtertiny"
                          height="21"
                          role="img"
                          width="21"
                        >
                          <path d="M0 0h21v21H0z" fill="none" />
                          <path d="M10.5 4.6c3.253 0 5.9 2.647 5.9 5.9s-2.647 5.9-5.9 5.9-5.9-2.647-5.9-5.9 2.647-5.9 5.9-5.9m0-1.1a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3 7.25a.5.5 0 0 0-.5-.5H8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 .5-.5zm-1 2.5a.5.5 0 0 0-.5-.5H9a.5.5 0 1 0 0 1h3a.5.5 0 0 0 .5-.5zm1.82-5a.5.5 0 0 0-.5-.5h-7a.5.5 0 1 0 0 1h7a.5.5 0 0 0 .5-.5z" />
                        </svg>
                      </span>
                      Filtrar
                    </button>
                  </div>
                </div>
                <div className="rf-fullwidth-border" />
              </div>
              <div className="rf-products-section-results-controls-placeholder" />
            </div>
          </div>
          <div className="rf-products-section">
            <div className="rf-cards-sidebar">
              <div data-core-sticky="" data-core-sticky-css="">
                <div className="rf-slide-transition-wrapper rf-slide-transition-enter-done">
                  <div
                    className="rf-searchfilters"
                    data-analytics-region="filters"
                    data-autom="filterOverlay"
                    id="rf-searchfilters"
                  >
                    <ul
                      className="rc-accordion rc-accordion-compact"
                      data-core-accordion=""
                      id=":r2:"
                      role="list"
                    >
                      <li
                        className="rc-accordion-item border-none"
                        data-core-accordion-item=""
                        data-core-accordion-item-expanded=""
                        role="listitem"
                      >
                        <button
                          aria-controls="content-:r2:-0"
                          aria-expanded={mostrarCategorias}
                          className="rc-accordion-button"
                          data-analytics-title="accordion-1"
                          data-core-accordion-button=""
                          data-core-accordion-button-expanded={
                            mostrarCategorias
                          }
                          id="tittle-categorias"
                          type="button"
                          onClick={toggleMostrarCategorias}
                        >
                          <span className="typography-callout" />
                          <span className="rc-accordion-title large-10 typography-callout">
                            Tipo de Producto
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
                        <div
                          className="r-height-transition-enter-done"
                          data-core-height-transition-wrapper=""
                          style={{}}
                        >
                          <div data-core-height-transition-content="">
                            <div
                              data-core-accordion-content=""
                              id="content-:r2:-0"
                            >
                              <div className="rc-accordion-content large-10 rc-accordion-content-nopadding">
                                <fieldset className="rf-facetlist">
                                  <legend className="visuallyhidden">
                                    Categorías
                                  </legend>
                                  {mostrarCategorias && (
                                    <ul
                                      className="rf-facetlist-list"
                                      data-analytics-activitymap-region-id="filters"
                                      id="categorias-lista"
                                    >
                                      {categoriasUnicas.map(
                                        (categoria, index) => (
                                          <li
                                            key={index}
                                            className="rf-facetlist-item"
                                          >
                                            <input
                                              data-analytics-filter=""
                                              data-analytics-title={categoria}
                                              data-tracking={`accType=${categoria}, `}
                                              defaultValue={index}
                                              id={`facet-${index}`}
                                              name="accType"
                                              type="checkbox"
                                              // value={categoria}
                                              onChange={(e) =>
                                                handleFiltrarCategoria(
                                                  categoria,
                                                  e.target.checked
                                                )
                                              }
                                            />
                                            <label htmlFor={`facet-${index}`}>
                                              {categoria}
                                            </label>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </fieldset>
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
            <div className="rf-cards-product">
              {productosPaginados.map((prod) => (
                <div
                  data-core-scroller-item=""
                  key={prod._id || prod.id}
                  className="listitem"
                >
                  <div
                    className="product-1 rf-cards-products-content"
                    data-trigger-click="click [data-relatedlink=':r1k:']"
                  >
                    <div className="rf-product-content-img">
                      <div className="image-product">
                        <Link
                          to={`/shop/product/IGMALLPRODUCTS/P/${prod.slug}`}
                        >
                          <img
                            alt=""
                            decoding="async"
                            height="13.5294117647"
                            src={prod.imagen_url}
                            width="auto"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="rf-product-content-info">
                      <div className="rf-recommcard-content-violator">
                        <span className="badge badge-reduced badge-no-scrim rf-recommcard-content-violatortext">
                          Nuevo
                        </span>
                      </div>
                      <h3 className="name-product">
                        <Link
                          to={`/shop/product/IGMALLPRODUCTS/P/${prod.slug}`}
                        >
                          <span>{prod.nombre}</span>
                        </Link>
                      </h3>
                      <div className="price-product">
                        <span>${formatNumber(prod.precio)}</span>
                      </div>
                      <div className="button-product">
                        <button
                          onClick={() => agregarAlCarrito(prod)}
                          style={{
                            display: "none",
                            color: "#fff",
                            backgroundColor: "#1057ee",
                            fontSize: "17px",
                            border: "1px solid #1057ee",
                            padding: "10px 15px",
                            width: "100%",
                            borderRadius: "0px",
                            cursor: "pointer",
                          }}
                        >
                          Agregar al carrito
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {totalPages > 1 && (
            <nav className="rc-pagination" data-analytics-region="router">
              <div>
                <div className="rc-pagination-arrow">
                  <button
                    aria-disabled={currentPage === 1}
                    aria-label="Previous"
                    className={`icon icon-chevronstart ${
                      currentPage === 1 ? "rc-pagination-disabled" : ""
                    }`}
                    data-analytics-pagination="prev"
                    disabled={currentPage === 1}
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <span className="icon icon-chevronstart rc-pagination-disabled">
                      <svg viewBox="0 0 24 24" width={17} height={17}>
                        <path d="M15,7H10.17V5.414A2,2,0,0,0,6.756,4L.876,9.879a3,3,0,0,0,0,4.242L6.756,20a2,2,0,0,0,3.414-1.414V17H16a6.006,6.006,0,0,1,6,6,1,1,0,0,0,2,0V16A9.01,9.01,0,0,0,15,7Z" />
                      </svg>
                    </span>
                    <span className="visuallyhidden">Previous</span>
                  </button>
                </div>
                <div
                  className="rc-pagination-spacing"
                  id="current-page-pagination"
                >
                  <label
                    className="visuallyhidden"
                    htmlFor="pagination-:r1v:"
                  />
                  <input
                    aria-describedby="rc-pagination-inputhint"
                    className="rc-pagination-pageinput"
                    data-analytics-pagination="pageinput"
                    data-autom="paginationPageInput"
                    defaultValue={currentPage}
                    id="pagination-input"
                    type="number"
                    value={currentPage}
                    min="1"
                    max={totalPages}
                    onChange={(e) => {
                      const pageNumber = parseInt(e.target.value, 10);
                      if (
                        !isNaN(pageNumber) &&
                        pageNumber >= 1 &&
                        pageNumber <= totalPages
                      ) {
                        handlePageChange(pageNumber);
                      }
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="visuallyhidden"
                    id="rc-pagination-inputhint"
                  />
                  <span className="visuallyhidden">undefined 1</span>
                  <span className="rc-pagination-delimiter">de</span>
                  <span
                    className="rc-pagination-total-pages"
                    data-autom="paginationTotalPages"
                  >
                    {totalPages}
                  </span>
                </div>
                <div className="rc-pagination-arrow">
                  <button
                    aria-label="Next"
                    aria-disabled={currentPage === totalPages}
                    className={`icon icon-chevronend ${
                      currentPage === totalPages ? "rc-pagination-disabled" : ""
                    }`}
                    disabled={currentPage === totalPages}
                    data-analytics-pagination="next"
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    <span className="icon icon-chevronend">
                      <svg viewBox="0 0 24 24" width={17} height={17}>
                        <path d="M17.244,4A2,2,0,0,0,13.83,5.414V7H9a9.01,9.01,0,0,0-9,9v7a1,1,0,0,0,2,0,6.006,6.006,0,0,1,6-6h5.83v1.586A2,2,0,0,0,17.244,20l5.879-5.879a3,3,0,0,0,0-4.242Z" />
                      </svg>
                    </span>
                    <span className="visuallyhidden">Next</span>
                  </button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Store;
