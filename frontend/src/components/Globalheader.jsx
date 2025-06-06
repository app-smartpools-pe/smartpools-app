import React from "react";
import { Link } from "react-router-dom";
import "../../css/globalheader.css";

const Navbar = () => {
  return (
    <div className="globalheader" id="globalheader">
      <nav
        id="globalnav"
        lang="es-PE"
        className="globalnav js globalnav-with-flyout-open globalnav-with-submenu-open"
        style={{
          "--r-globalnav-text-zoom-scale": "1",
          "--r-globalnav-next-flyout-height": "452px",
          "--r-globalnav-previous-flyout-height": "552px",
        }}
      >
        <div className="globalnav-content">
          <div className="globalnav-item globalnav-menuback">
            <button
              aria-label="Main menu"
              className="globalnav-menuback-button"
            >
              <span className="globalnav-chevron-icon">
                <svg
                  height="48"
                  viewBox="0 0 9 48"
                  width="9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m1.5618 24.0621 6.5581-6.4238c.2368-.2319.2407-.6118.0088-.8486-.2324-.2373-.6123-.2407-.8486-.0088l-7 6.8569c-.1157.1138-.1807.2695-.1802.4316.001.1621.0674.3174.1846.4297l7 6.7241c.1162.1118.2661.1675.4155.1675.1577 0 .3149-.062.4326-.1846.2295-.2388.2222-.6187-.0171-.8481z"></path>
                </svg>
              </span>
            </button>
          </div>
          <ul id="globalnav-list" className="globalnav-list">
            <li className="globalnav-item globalnav-item-smartpools">
              <Link
                to="./"
                className="globalnav-link globalnav-link-smartpools"
              >
                <span className="globalnav-image-regular globalnav-link-image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 16.55"
                    width="25"
                    height="44"
                  >
                    <path
                      d="m17.93,0c-3.91,0-7.09,3.32-7.09,7.4,0,.14,0,.28.01.42h3.32c-.02-.14-.02-.28-.02-.42,0-2.2,1.69-3.99,3.77-3.99s3.77,1.79,3.77,3.99c0,.14-.01.28-.02.42h3.32c0-.14.01-.28.01-.42C25.01,3.32,21.83,0,17.93,0Zm-7.1,8.73c.02.14.02.28.02.42,0,2.2-1.69,3.99-3.77,3.99-2.08,0-3.77-1.79-3.77-3.99,0-.14.01-.28.02-.42H.01c0,.14-.01.28-.01.42,0,4.08,3.18,7.4,7.09,7.4,3.91,0,7.09-3.32,7.09-7.4,0-.14,0-.28-.01-.42h-3.33s0,0,0,0Z"
                      fill="#1057ee"
                    ></path>
                  </svg>
                </span>
                <span className="globalnav-image-compact globalnav-link-image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 16.55"
                    width="25"
                    height="44"
                  >
                    <path
                      d="m17.93,0c-3.91,0-7.09,3.32-7.09,7.4,0,.14,0,.28.01.42h3.32c-.02-.14-.02-.28-.02-.42,0-2.2,1.69-3.99,3.77-3.99s3.77,1.79,3.77,3.99c0,.14-.01.28-.02.42h3.32c0-.14.01-.28.01-.42C25.01,3.32,21.83,0,17.93,0Zm-7.1,8.73c.02.14.02.28.02.42,0,2.2-1.69,3.99-3.77,3.99-2.08,0-3.77-1.79-3.77-3.99,0-.14.01-.28.02-.42H.01c0,.14-.01.28-.01.42,0,4.08,3.18,7.4,7.09,7.4,3.91,0,7.09-3.32,7.09-7.4,0-.14,0-.28-.01-.42h-3.33s0,0,0,0Z"
                      fill="#1057ee"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li id="menu" className="globalnav-item globalnav-menu">
              <div
                className="globalnav-flyout"
                style={{
                  "--r-globalnav-flyout-item-total": "0",
                  "--r-globalnav-flyout-group-number": "0",
                }}
              >
                <div
                  className="globalnav-menu-list"
                  style={{
                    "--r-globalnav-flyout-item-total": "8",
                  }}
                >
                  <div
                    data--analytics--element--engagement="globalnav hover - us"
                    className="globalnav-item globalnav-item-us globalnav-item-menu globalnav-item-submenu"
                    style={{
                      "--r-globalnav-flyout-item-number": "1",
                    }}
                  >
                    <ul className="globalnav-submenu-trigger-group">
                      <li className="globalnav-submenu-trigger-item">
                        <Link
                          to="/us"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-us"
                        >
                          Nosotros
                        </Link>
                      </li>
                    </ul>
                    <div
                      id="globalnav-submenu-link-us"
                      className="globalnav-flyout globalnav-submenu"
                      style={{
                        "--r-globalnav-flyout-item-total": "0",
                        "--r-globalnav-flyout-group-number": "0",
                        "--r-globalnav-flyout-height": "338px",
                        "--r-globalnav-flyout-rate": "240ms",
                        "--r-globalnav-scrollbar-width": "15px",
                      }}
                    >
                      <div className="globalnav-flyout-scroll-container">
                        <div className="globalnav-flyout-content globalnav-submenu-content">
                          <div className="globalnav-submenu-group globalnav-submenu-group-elevated">
                            <h2 className="globalnav-submenu-header">
                              Sobre Nosotros
                            </h2>
                            <ul className="globalnav-submenu-list">
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/nosotros/historia"
                                  className="globalnav-submenu-link"
                                >
                                  Historia de la Empresa
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/nosotros/equipo"
                                  className="globalnav-submenu-link"
                                >
                                  Equipo
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/nosotros/testimonios"
                                  className="globalnav-submenu-link"
                                >
                                  Testimonios
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/nosotros/proyectos"
                                  className="globalnav-submenu-link"
                                >
                                  Proyectos Destacados
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data--analytics--element--engagement="globalnav hover - store"
                    className="globalnav-item globalnav-item-store globalnav-item-menu globalnav-item-submenu"
                    style={{
                      "--r-globalnav-flyout-item-number": "2",
                    }}
                  >
                    <ul className="globalnav-submenu-trigger-group">
                      <li className="globalnav-submenu-trigger-item">
                        <Link
                          to="/store"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-store"
                        >
                          Store
                        </Link>
                      </li>
                    </ul>
                    <div
                      id="globalnav-submenu-link-store"
                      className="globalnav-flyout globalnav-submenu"
                      style={{
                        "--r-globalnav-flyout-item-total": "0",
                        "--r-globalnav-flyout-group-number": "0",
                        "--r-globalnav-flyout-height": "414px",
                        "--r-globalnav-flyout-rate": "240ms",
                        "--r-globalnav-scrollbar-width": "17px",
                      }}
                    >
                      <div className="globalnav-flyout-scroll-container">
                        <div className="globalnav-flyout-content globalnav-submenu-content">
                          <div className="globalnav-submenu-group globalnav-submenu-group-elevated">
                            <h2 className="globalnav-submenu-header">
                              Equipamineto para Piscinas
                            </h2>
                            <ul className="globalnav-submenu-list">
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/store"
                                  className="globalnav-submenu-link"
                                >
                                  Explorar Store
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/store/BombasFiltros"
                                  className="globalnav-submenu-link"
                                >
                                  Bombas y Filtros
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/store/Cloracion"
                                  className="globalnav-submenu-link"
                                >
                                  Sistemas de Cloración
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/store/Calentadores"
                                  className="globalnav-submenu-link"
                                >
                                  Calentadores de Agua
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/store/Iluminacion"
                                  className="globalnav-submenu-link"
                                >
                                  Iluminación
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/store/Accesorios"
                                  className="globalnav-submenu-link"
                                >
                                  Accesorios
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group">
                            <h2 className="globalnav-submenu-header">
                              Accesorios para Piscinas
                            </h2>
                            <ul className="globalnav-submenu-list">
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/store/EscalerasBarandillas"
                                  className="globalnav-submenu-link"
                                >
                                  Escaleras y Barandillas
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/store/JuguetesFlotadores"
                                  className="globalnav-submenu-link"
                                >
                                  Juguetes y Flotadores
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/store/LimpiezaMantenimiento"
                                  className="globalnav-submenu-link"
                                >
                                  Limpieza y Mantenimiento
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/store/QuimicosTratamientoAgua"
                                  className="globalnav-submenu-link"
                                >
                                  Químinos y Tratamiento del Agua
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group">
                            <h2 className="globalnav-submenu-header">
                              Mobiliario
                            </h2>
                            <ul className="globalnav-submenu-list">
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/store/TumbonasSillas"
                                  className="globalnav-submenu-link"
                                >
                                  Tumbonas y Sillas
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/store/SombrillasPergolas"
                                  className="globalnav-submenu-link"
                                >
                                  Sombrillas y Pérgolas
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/store/PlantasJardineria"
                                  className="globalnav-submenu-link"
                                >
                                  Plántas y Jardinería
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data--analytics--element--engagement="globalnav hover - products"
                    className="globalnav-item globalnav-item-products globalnav-item-menu globalnav-item-submenu"
                    style={{
                      "--r-globalnav-flyout-item-number": "3",
                    }}
                  >
                    <ul className="globalnav-submenu-trigger-group">
                      <li className="globalnav-submenu-trigger-item">
                        <Link
                          to="/products"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-products"
                        >
                          Productos
                        </Link>
                      </li>
                    </ul>
                    <div
                      id="globalnav-submenu-link-products"
                      className="globalnav-flyout globalnav-submenu"
                      style={{
                        "--r-globalnav-flyout-item-total": "0",
                        "--r-globalnav-flyout-group-number": "0",
                        "--r-globalnav-flyout-height": "338px",
                        "--r-globalnav-flyout-rate": "240ms",
                        "--r-globalnav-scrollbar-width": "15px",
                      }}
                    >
                      <div className="globalnav-flyout-scroll-container">
                        <div className="globalnav-flyout-content globalnav-submenu-content">
                          <div className="globalnav-submenu-group globalnav-submenu-group-elevated">
                            <h2 className="globalnav-submenu-header">
                              Productos Químicos
                            </h2>
                            <ul className="globalnav-submenu-list">
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/productos/CloroDesinfectantes"
                                  className="globalnav-submenu-link"
                                >
                                  Cloro y Desinfectantes
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/productos/Alguicidas"
                                  className="globalnav-submenu-link"
                                >
                                  Aguicidas
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/productos/ReguladorespH"
                                  className="globalnav-submenu-link"
                                >
                                  Reguladores de pH
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/productos/KitsPruebaAgua"
                                  className="globalnav-submenu-link"
                                >
                                  Kits de Prueba de Agua
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group">
                            <h2 className="globalnav-submenu-header">
                              Accesorios para Piscinas
                            </h2>
                            <ul className="globalnav-submenu-list">
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/productos/FlotadoresJuguetes"
                                  className="globalnav-submenu-link"
                                >
                                  Flotadores y Juguetes
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/productos/EscalerasToboganes"
                                  className="globalnav-submenu-link"
                                >
                                  Escaleras y Toboganes
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/productos/CubiertasEnrolladores"
                                  className="globalnav-submenu-link"
                                >
                                  Cubiertas y Enrolladores
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/productos/SistemasSeguridad"
                                  className="globalnav-submenu-link"
                                >
                                  Sistemas de Seguridad
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group">
                            <h2 className="globalnav-submenu-header">
                              Equipos de Limpieza
                            </h2>
                            <ul className="globalnav-submenu-list">
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/productos/RobotsLimpiaPiscinas"
                                  className="globalnav-submenu-link"
                                >
                                  Robots Limpia Piscinas
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/productos/AspiradorasManueles"
                                  className="globalnav-submenu-link"
                                >
                                  Aspiradoras Manuales
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/productos/RedesCepillos"
                                  className="globalnav-submenu-link"
                                >
                                  Redes y Cepillos
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/productos/ManguerasAccesorios"
                                  className="globalnav-submenu-link"
                                >
                                  Mangueras y Accesorios
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data--analytics--element--engagement="globalnav hover - services"
                    className="globalnav-item globalnav-item-services globalnav-item-menu globalnav-item-submenu"
                    style={{
                      "--r-globalnav-flyout-item-number": "4",
                    }}
                  >
                    <ul className="globalnav-submenu-trigger-group">
                      <li className="globalnav-submenu-trigger-item">
                        <Link
                          to="/services"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-service"
                        >
                          Servicios
                        </Link>
                      </li>
                    </ul>
                    <div
                      id="globalnav-submenu-link-services"
                      className="globalnav-flyout globalnav-submenu"
                      style={{
                        "--r-globalnav-flyout-item-total": "0",
                        "--r-globalnav-flyout-group-number": "0",
                        "--r-globalnav-flyout-height": "366px",
                        "--r-globalnav-flyout-rate": "240ms",
                        "--r-globalnav-scrollbar-width": "15px",
                      }}
                    >
                      <div className="globalnav-flyout-scroll-container">
                        <div className="globalnav-flyout-content globalnav-submenu-content">
                          <div className="globalnav-submenu-group globalnav-submenu-group-elevated">
                            <h2 className="globalnav-submenu-header">
                              Diseño de Piscinas
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/servicios/PiscinasResidenciales"
                                  className="globalnav-submenu-link"
                                >
                                  Piscinas Residenciales
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/servicios/PiscinasComerciales"
                                  className="globalnav-submenu-link"
                                >
                                  Piscinas Comerciales
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/servicios/PiscinasHidromasaje"
                                  className="globalnav-submenu-link"
                                >
                                  Piscinas con Hidromasajes
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link
                                  to="/servicios/PiscinasNaturales"
                                  className="globalnav-submenu-link"
                                >
                                  Piscinas Naturales
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group">
                            <h2 className="globalnav-submenu-header">
                              Construcción de Piscinas
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/ProcesoConstruccion"
                                  className="globalnav-submenu-link"
                                >
                                  Proceso de Construcción
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/MaterialesUtilizados"
                                  className="globalnav-submenu-link"
                                >
                                  Materiales Utilizados
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/ProyectosRecientes"
                                  className="globalnav-submenu-link"
                                >
                                  Proyectos Recientes
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/Garantias"
                                  className="globalnav-submenu-link"
                                >
                                  Garantías
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group">
                            <h2 className="globalnav-submenu-header">
                              Mantenimiento de Piscinas
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/ServiciosLimpieza"
                                  className="globalnav-submenu-link"
                                >
                                  Servicios de Limpieza
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/TratamientosQuimicos"
                                  className="globalnav-submenu-link"
                                >
                                  Tratamientos Químicos
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/ReparacionesRenovaciones"
                                  className="globalnav-submenu-link"
                                >
                                  Reparaciones y Renovaciones
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/PlanesMantenimiento"
                                  className="globalnav-submenu-link"
                                >
                                  Planes de Mantenimiento
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group">
                            <h2 className="globalnav-submenu-header">
                              Equipamiento de Piscinas
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/BombasFiltros"
                                  className="globalnav-submenu-link"
                                >
                                  Bombas y Filtros
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/CalefaccionClimatacion"
                                  className="globalnav-submenu-link"
                                >
                                  Calefacción y Climatación
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/Iluminacion"
                                  className="globalnav-submenu-link"
                                >
                                  Iluminación
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link
                                  to="/servicios/SistemasAutomatizacion"
                                  className="globalnav-submenu-link"
                                >
                                  Sistemas de Automatización
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data--analytics--element--engagement="globalnav hover - accesories"
                    className="globalnav-item globalnav-item-accesories globalnav-item-menu globalnav-item-submenu"
                    style={{
                      "--r-globalnav-flyout-item-number": "5",
                    }}
                  >
                    <ul className="globalnav-submenu-trigger-group">
                      <li className="globalnav-submenu-trigger-item">
                        <Link
                          to="/accessories"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-accesories"
                        >
                          Accesorios
                        </Link>
                      </li>
                    </ul>
                    <div
                      id="globalnav-submenu-link-accessories"
                      className="globalnav-flyout globalnav-submenu"
                      style={{
                        "--r-globalnav-flyout-item-total": "0",
                        "--r-globalnav-flyout-group-number": "0",
                        "--r-globalnav-flyout-height": "376px",
                        "--r-globalnav-flyout-rate": "240ms",
                        "--r-globalnav-scrollbar-width": "15px",
                      }}
                    >
                      <div className="globalnav-flyout-scroll-container">
                        <div className="globalnav-flyout-content globalnav-submenu-content">
                          <div className="globalnav-submenu-group globalnav-submenu-group-elevated">
                            <h2 className="globalnav-submenu-header">
                              Comprar Accesorios
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Limpieza y Cuidado
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Iluminación
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Sistemas de Filtrado
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Calentadores y Bombas
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Juegos y Flotadores
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group">
                            <h2 className="globalnav-submenu-header">
                              Explorar Accesorios
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item">
                                <Link to="/" className="globalnav-submenu-link">
                                  Cmp
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link to="/" className="globalnav-submenu-link">
                                  Hayward
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link to="/" className="globalnav-submenu-link">
                                  S.R. Smith
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data--analytics--element--engagement="globalnav hover - contact"
                    className="globalnav-item globalnav-item-contact globalnav-item-menu globalnav-item-submenu"
                    style={{
                      "--r-globalnav-flyout-item-number": "6",
                    }}
                  >
                    <ul className="globalnav-submenu-trigger-group">
                      <li className="globalnav-submenu-trigger-item">
                        <Link
                          to="/contact"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-contact"
                        >
                          Contacto
                        </Link>
                      </li>
                    </ul>
                    <div
                      id="globalnav-submenu-link-contact"
                      className="globalnav-flyout globalnav-submenu"
                      style={{
                        "--r-globalnav-flyout-item-total": "0",
                        "--r-globalnav-flyout-group-number": "0",
                        "--r-globalnav-flyout-height": "338px",
                        "--r-globalnav-flyout-rate": "240ms",
                        "--r-globalnav-scrollbar-width": "15px",
                      }}
                    >
                      <div className="globalnav-flyout-scroll-container">
                        <div className="globalnav-flyout-content globalnav-submenu-content">
                          <div className="globalnav-submenu-group globalnav-submenu-group-elevated">
                            <h2 className="globalnav-submenu-header">
                              Explorar Contacto
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Formulario de Contacto
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Ubicación y Horarios
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Solicitar una Cotización
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Preguntas Frecuentes (FAQ)
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group">
                            <h2 className="globalnav-submenu-header">
                              Más de Contacto
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item">
                                <Link to="/" className="globalnav-submenu-link">
                                  Atención al Cliente
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data--analytics--element--engagement="globalnav hover - brands"
                    className="globalnav-item globalnav-item-brands globalnav-item-menu globalnav-item-submenu"
                    style={{
                      "--r-globalnav-flyout-item-number": "7",
                    }}
                  >
                    <ul className="globalnav-submenu-trigger-group">
                      <li className="globalnav-submenu-trigger-item">
                        <Link
                          to="/brands"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-brands"
                        >
                          Marcas
                        </Link>
                      </li>
                    </ul>
                    <div
                      id="globalnav-submenu-link-brands"
                      className="globalnav-flyout globalnav-submenu"
                      style={{
                        "--r-globalnav-flyout-item-total": "0",
                        "--r-globalnav-flyout-group-number": "0",
                        "--r-globalnav-flyout-height": "338px",
                        "--r-globalnav-flyout-rate": "240ms",
                        "--r-globalnav-scrollbar-width": "15px",
                      }}
                    >
                      <div className="globalnav-flyout-scroll-container">
                        <div className="globalnav-flyout-content globalnav-submenu-content">
                          <div className="globalnav-submenu-group globalnav-submenu-group-elevated">
                            <h2 className="globalnav-submenu-header">
                              Explorar Marcas
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Marcas Ascociadas
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Marcas Exclusivas
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Certificaciones
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Preguntas Frecuentes (FAQ)
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data--analytics--element--engagement="globalnav hover - support"
                    className="globalnav-item globalnav-item-support globalnav-item-menu globalnav-item-submenu"
                    style={{
                      "--r-globalnav-flyout-item-number": "8",
                    }}
                  >
                    <ul className="globalnav-submenu-trigger-group">
                      <li className="globalnav-submenu-trigger-item">
                        <Link
                          to="/support"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-support"
                        >
                          Soporte
                        </Link>
                      </li>
                    </ul>
                    <div
                      id="globalnav-submenu-link-support"
                      className="globalnav-flyout globalnav-submenu"
                      style={{
                        "--r-globalnav-flyout-item-total": "0",
                        "--r-globalnav-flyout-group-number": "0",
                        "--r-globalnav-flyout-height": "376px",
                        "--r-globalnav-flyout-rate": "240ms",
                        "--r-globalnav-scrollbar-width": "15px",
                      }}
                    >
                      <div className="globalnav-flyout-scroll-container">
                        <div className="globalnav-flyout-content globalnav-submenu-content">
                          <div className="globalnav-submenu-group globalnav-submenu-group-elevated">
                            <h2 className="globalnav-submenu-header">
                              Explorar Soporte
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Preguntas Frecuentes (FAQ)
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Manuales y Guías
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Garantías y Politica de Devoluciones
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Términos y Condiciones
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item-elevated">
                                <Link to="/" className="globalnav-submenu-link">
                                  Servicio Técnico
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="globalnav-submenu-group">
                            <h2 className="globalnav-submenu-header">
                              Otros temas de Ayuda
                            </h2>
                            <ul>
                              <li className="globalnav-submenu-list-item">
                                <Link to="/" className="globalnav-submenu-link">
                                  Facturación y suscripciones
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link to="/" className="globalnav-submenu-link">
                                  Cuenta de smartpools y contraseña
                                </Link>
                              </li>
                              <li className="globalnav-submenu-list-item">
                                <Link to="/" className="globalnav-submenu-link">
                                  Accesibilidad
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              id="globalnav-search"
              className="globalnav-item globalnav-search"
            >
              <Link
                role="button"
                id="globalnav-menubutton-link-search"
                to="/us/search"
                className="globalnav-link globalnav-link-search"
              >
                <span className="globalnav-image-regular">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0.45 14.45 14.08 14.08"
                    width="15"
                    height="44"
                  >
                    <path
                      d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"
                      fill="#000000"
                    ></path>
                  </svg>
                </span>
                <span className="globalnav-image-compact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0.45 14.45 14.08 14.08"
                    width="15"
                    height="48"
                  >
                    <path
                      d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"
                      fill="#000000"
                    ></path>
                  </svg>
                </span>
              </Link>
              <div
                id="globalnav-submenu-search"
                className="globalnav-flyout globalnav-submenu"
                style={{
                  "--r-globalnav-flyout-group-number": "0",
                  "--r-globalnav-flyout-height": "388px",
                  "--r-globalnav-flyout-item-total": "0",
                  "--r-globalnav-flyout-rate": "240ms",
                  "--r-globalnav-scrollbar-width": "15px",
                }}
              >
                <div className="globalnav-flyout-scroll-container">
                  <div className="globalnav-flyout-content globalnav-submenu-content">
                    <form
                      action="/us/search"
                      method="get"
                      className="globalnav-searchfield"
                    >
                      <div className="globalnav-searchfield-wrapper">
                        <input
                          placeholder="Search smartpools.pe"
                          aria-label="Search smartpools.pe"
                          autoCorrect="off"
                          autoComplete="off"
                          spellCheck="false"
                          className="globalnav-searchfield-input"
                        />
                        <input
                          id="globalnav-searchfield-src"
                          type="hidden"
                          name="src"
                          value="globalnav"
                        />
                        <button
                          aria-label="Clear search"
                          tabIndex="-1"
                          type="button"
                          className="globalnav-searchfield-reset"
                          disabled=""
                          aria-hidden="true"
                        >
                          <span className="globalnav-image-regular">
                            <svg
                              height="14"
                              viewBox="0 0 14 14"
                              width="14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m7 .0339a6.9661 6.9661 0 1 0 6.9661 6.9661 6.9661 6.9661 0 0 0 -6.9661-6.9661zm2.798 8.9867a.55.55 0 0 1 -.778.7774l-2.02-2.02-2.02 2.02a.55.55 0 0 1 -.7784-.7774l2.0206-2.0206-2.0204-2.02a.55.55 0 0 1 .7782-.7778l2.02 2.02 2.02-2.02a.55.55 0 0 1 .778.7778l-2.0203 2.02z"></path>
                            </svg>
                          </span>
                          <span className="globalnav-image-compact">
                            <svg
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m0 8a8.0474 8.0474 0 0 1 7.9922-8 8.0609 8.0609 0 0 1 8.0078 8 8.0541 8.0541 0 0 1 -8 8 8.0541 8.0541 0 0 1 -8-8zm5.6549 3.2863 2.3373-2.353 2.3451 2.353a.6935.6935 0 0 0 .4627.1961.6662.6662 0 0 0 .6667-.6667.6777.6777 0 0 0 -.1961-.4706l-2.3451-2.3373 2.3529-2.3607a.5943.5943 0 0 0 .1961-.4549.66.66 0 0 0 -.6667-.6589.6142.6142 0 0 0 -.447.1961l-2.3686 2.3606-2.353-2.3527a.6152.6152 0 0 0 -.447-.1883.6529.6529 0 0 0 -.6667.651.6264.6264 0 0 0 .1961.4549l2.3451 2.3529-2.3451 2.353a.61.61 0 0 0 -.1961.4549.6661.6661 0 0 0 .6667.6667.6589.6589 0 0 0 .4627-.1961z"></path>
                            </svg>
                          </span>
                        </button>
                        <button
                          aria-label="Submit search"
                          tabIndex="-1"
                          aria-hidden="true"
                          type="submit"
                          className="globalnav-searchfield-submit"
                          disabled=""
                        >
                          <span className="globalnav-image-regular">
                            <svg
                              height="32"
                              viewBox="0 0 30 32"
                              width="30"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m23.3291 23.3066-4.35-4.35c-.0105-.0105-.0247-.0136-.0355-.0235a6.8714 6.8714 0 1 0 -1.5736 1.4969c.0214.0256.03.0575.0542.0815l4.35 4.35a1.1 1.1 0 1 0 1.5557-1.5547zm-15.4507-8.582a5.6031 5.6031 0 1 1 5.603 5.61 5.613 5.613 0 0 1 -5.603-5.61z"></path>
                            </svg>
                          </span>
                          <span className="globalnav-image-compact">
                            <svg
                              width="38"
                              height="40"
                              viewBox="0 0 38 40"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m28.6724 27.8633-5.07-5.07c-.0095-.0095-.0224-.0122-.032-.0213a7.9967 7.9967 0 1 0 -1.8711 1.7625c.0254.03.0357.0681.0642.0967l5.07 5.07a1.3 1.3 0 0 0 1.8389-1.8379zm-18.0035-10.0033a6.5447 6.5447 0 1 1 6.545 6.5449 6.5518 6.5518 0 0 1 -6.545-6.5449z"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div
                        role="status"
                        aria-live="polite"
                        data-topnav-searchresults-label="total results"
                        className="globalnav-searchresults-count"
                      ></div>
                    </form>
                    <div className="globalnav-searchresults">
                      <div className="globalnav-searchresults-current">
                        <div
                          className="globalnav-searchresults-container"
                          data-analytics-region="defaultlinks search"
                          style={{ "--r-globalnav-flyout-group-number": "0" }}
                        >
                          <h2
                            className="globalnav-searchresults-header"
                            style={{ "--r-globalnav-flyout-item-number": "0" }}
                          >
                            Quick Links
                          </h2>
                          <ul
                            className="globalnav-searchresults-list"
                            role="list"
                          >
                            <li
                              className="globalnav-searchresults-list-item"
                              role="listitem"
                              style={{
                                "--r-globalnav-flyout-item-number": "1",
                              }}
                            >
                              <a
                                className="globalnav-searchresults-list-link"
                                data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},											events:event50"
                                data-index="0"
                                data-items="5"
                                data-label=""
                                data-query="no keyword"
                                data-section="defaultlinks"
                                href=""
                              >
                                <span className="globalnav-searchresults-list-icon">
                                  <span className="globalnav-image-regular globalnav-link-image">
                                    <svg
                                      height="16"
                                      viewBox="0 0 9 16"
                                      width="9"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z" />
                                    </svg>
                                  </span>
                                  <span className="globalnav-image-compact globalnav-link-image">
                                    <svg
                                      height="25"
                                      viewBox="0 0 13 25"
                                      width="13"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z" />
                                    </svg>
                                  </span>
                                </span>
                                <span className="globalnav-searchresults-list-text"></span>
                              </a>
                            </li>
                            <li
                              className="globalnav-searchresults-list-item"
                              role="listitem"
                              style={{
                                "--r-globalnav-flyout-item-number": "2",
                              }}
                            >
                              <a
                                className="globalnav-searchresults-list-link"
                                data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},											events:event50"
                                data-index="1"
                                data-items="5"
                                data-label=""
                                data-query="no keyword"
                                data-section="defaultlinks"
                                href=""
                              >
                                <span className="globalnav-searchresults-list-icon">
                                  <span className="globalnav-image-regular globalnav-link-image">
                                    <svg
                                      height="16"
                                      viewBox="0 0 9 16"
                                      width="9"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z" />
                                    </svg>
                                  </span>
                                  <span className="globalnav-image-compact globalnav-link-image">
                                    <svg
                                      height="25"
                                      viewBox="0 0 13 25"
                                      width="13"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z" />
                                    </svg>
                                  </span>
                                </span>
                                <span className="globalnav-searchresults-list-text"></span>
                              </a>
                            </li>
                            <li
                              className="globalnav-searchresults-list-item"
                              role="listitem"
                              style={{
                                "--r-globalnav-flyout-item-number": "3",
                              }}
                            >
                              <a
                                className="globalnav-searchresults-list-link"
                                data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},											events:event50"
                                data-index="2"
                                data-items="5"
                                data-label=""
                                data-query="no keyword"
                                data-section="defaultlinks"
                                href=""
                              >
                                <span className="globalnav-searchresults-list-icon">
                                  <span className="globalnav-image-regular globalnav-link-image">
                                    <svg
                                      height="16"
                                      viewBox="0 0 9 16"
                                      width="9"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z" />
                                    </svg>
                                  </span>
                                  <span className="globalnav-image-compact globalnav-link-image">
                                    <svg
                                      height="25"
                                      viewBox="0 0 13 25"
                                      width="13"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z" />
                                    </svg>
                                  </span>
                                </span>
                                <span className="globalnav-searchresults-list-text"></span>
                              </a>
                            </li>
                            <li
                              className="globalnav-searchresults-list-item"
                              role="listitem"
                              style={{
                                "--r-globalnav-flyout-item-number": "4",
                              }}
                            >
                              <a
                                className="globalnav-searchresults-list-link"
                                data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},											events:event50"
                                data-index="3"
                                data-items="5"
                                data-label="smartpools Intelligence"
                                data-query="no keyword"
                                data-section="defaultlinks"
                                href=""
                              >
                                <span className="globalnav-searchresults-list-icon">
                                  <span className="globalnav-image-regular globalnav-link-image">
                                    <svg
                                      height="16"
                                      viewBox="0 0 9 16"
                                      width="9"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z" />
                                    </svg>
                                  </span>
                                  <span className="globalnav-image-compact globalnav-link-image">
                                    <svg
                                      height="25"
                                      viewBox="0 0 13 25"
                                      width="13"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z" />
                                    </svg>
                                  </span>
                                </span>
                                <span className="globalnav-searchresults-list-text"></span>
                              </a>
                            </li>
                            <li
                              className="globalnav-searchresults-list-item"
                              role="listitem"
                              style={{
                                "--r-globalnav-flyout-item-number": "5",
                              }}
                            >
                              <a
                                className="globalnav-searchresults-list-link"
                                data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},											events:event50"
                                data-index="4"
                                data-items="5"
                                data-label="smartpools Trade In"
                                data-query="no keyword"
                                data-section="defaultlinks"
                                href=""
                              >
                                <span className="globalnav-searchresults-list-icon">
                                  <span className="globalnav-image-regular globalnav-link-image">
                                    <svg
                                      height="16"
                                      viewBox="0 0 9 16"
                                      width="9"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z" />
                                    </svg>
                                  </span>
                                  <span className="globalnav-image-compact globalnav-link-image">
                                    <svg
                                      height="25"
                                      viewBox="0 0 13 25"
                                      width="13"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z" />
                                    </svg>
                                  </span>
                                </span>
                                <span className="globalnav-searchresults-list-text"></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li id="globalnav-bag" className="globalnav-item globalnav-bag">
              <Link
                role="button"
                id="globalnav-menubutton-link-bag"
                to="/shop/bag"
                className="globalnav-link globalnav-link-bag"
                target="_blank"
              >
                <span className="globalnav-image-regular">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12.9 14.9"
                    width="15"
                    height="44"
                  >
                    <path
                      d="M10.8,3h-1C9.6,1.3,8.2,0,6.5,0C4.8,0,3.4,1.3,3.1,3h-1C0.9,3,0,3.9,0,5.1v7.7c0,1.2,0.9,2.1,2.1,2.1h8.7c1.2,0,2.1-0.9,2.1-2.1V5.1C12.9,3.9,12,3,10.8,3z M6.5,1.1c1.1,0,2,0.8,2.2,1.9H4.2C4.5,1.9,5.4,1.1,6.5,1.1z M11.8,12.8c0,0.6-0.5,1-1,1H2.1c-0.6,0-1-0.5-1-1V5.1c0-0.6,0.5-1,1-1h8.7c0.6,0,1,0.5,1,1L11.8,12.8z"
                      fill="#000000"
                    ></path>
                  </svg>
                </span>
                <span className="globalnav-image-compact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12.9 14.9"
                    width="15"
                    height="48"
                  >
                    <path
                      d="M10.8,3h-1C9.6,1.3,8.2,0,6.5,0C4.8,0,3.4,1.3,3.1,3h-1C0.9,3,0,3.9,0,5.1v7.7c0,1.2,0.9,2.1,2.1,2.1h8.7c1.2,0,2.1-0.9,2.1-2.1V5.1C12.9,3.9,12,3,10.8,3z M6.5,1.1c1.1,0,2,0.8,2.2,1.9H4.2C4.5,1.9,5.4,1.1,6.5,1.1z M11.8,12.8c0,0.6-0.5,1-1,1H2.1c-0.6,0-1-0.5-1-1V5.1c0-0.6,0.5-1,1-1h8.7c0.6,0,1,0.5,1,1L11.8,12.8z"
                      fill="#000000"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
          <div className="globalnav-menutrigger">
            <button
              id="globalnav-menutrigger-button"
              aria-controls="globalnav-list"
              aria-label="Menu"
              data-topnav-menu-label-open="Menu"
              data-topnav-menu-label-close="Close"
              data-topnav-flyout-trigger-compact="menu"
              className="globalnav-menutrigger-button"
            >
              <svg width={18} height={18} viewBox="0 0 18 18">
                <polyline
                  id="globalnav-menutrigger-bread-bottom"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="2 12, 16 12"
                  className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
                >
                  <animate
                    id="globalnav-anim-menutrigger-bread-bottom-open"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                  />
                  <animate
                    id="globalnav-anim-menutrigger-bread-bottom-close"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                  />
                </polyline>
                <polyline
                  id="globalnav-menutrigger-bread-top"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="2 5, 16 5"
                  className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
                >
                  <animate
                    id="globalnav-anim-menutrigger-bread-top-open"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                  />
                  <animate
                    id="globalnav-anim-menutrigger-bread-top-close"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                  />
                </polyline>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div id="globalnav-curtain" className="globalnav-curtain" />
      <div id="globalnav-placeholder" className="globalnav-placeholder"></div>
    </div>
  );
};

export default Navbar;
