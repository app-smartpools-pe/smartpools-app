import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductosAdmin = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    document.title = "Productos de la smartpools Store - smartpools";
    return () => {
      document.title = "smartpools"; // O el título por defecto
    };
  }, []);

  const obtenerProductos = async () => {
    const res = await fetch("http://localhost:3000/api/productos");
    const data = await res.json();
    setProductos(data);
  };

  const eliminarProducto = async (id) => {
    if (confirm("¿Eliminar este producto?")) {
      await fetch(`http://localhost:3000/api/productos/${id}`, {
        method: "DELETE",
      });
      obtenerProductos();
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProductos = productos.filter(
    (prod) =>
      prod.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="globalManagerAllProducts-i-04-2025" role="main">
      <div
        data-i-gm-allProducts="inventory-4-2025"
        id="globalmanagerAllProducts"
        className="globalmanagerAllProducts"
      >
        <div
          id="globalmanagerAllProducts-container"
          className="rs-AllProducts-page-container"
        >
          <div className="rs-allProductsHeader">
            <div className="rs-allProducts-header-container">
              <div className="rs-allProducts-header-content">
                <div className="rs-allProducts-header-title">
                  <h1>
                    Productos de la{" "}
                    <span style={{ color: "#1057ee" }}>smartpools</span>
                    {""} Store.
                  </h1>
                </div>
                <div className="rs-allProducts-header-searchLink">
                  <div className="rs-allProducts-header-search">
                    <input
                      type="text"
                      placeholder="Buscar productos en smartpools.pe"
                      value={searchTerm}
                      onChange={handleSearch}
                      className="rs-allProducts-search-input"
                      aria-label="Search smartpools.pe"
                      autoCorrect="off"
                      autoCapitalize="off"
                      autoComplete="off"
                    />
                    <button
                      className="rs-allProducts-search-submit"
                      onClick={filteredProductos}
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
                    </button>
                  </div>
                  <div className="rs-allProducts-header-link">
                    <Link to="/api/auth/manager/create/products">
                      <span className="rs-allProducts-header-link-icon">
                        <svg viewBox="0 0 24 24" width="28" height="28">
                          <path
                            fill="#fff"
                            d="M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z"
                          />
                        </svg>
                      </span>
                      <span className="rs-allProducts-header-link-text">
                        Agregar producto
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rs-allProductsTable">
            <div className="">
              <div className="tableAllProducts">
                <table>
                  <div className="tableAllProducs-content">
                    <thead className="tableAllProducts-header">
                      <tr>
                        <th>
                          <div className="productListRow id">N°</div>
                        </th>
                        <th>
                          <div className="productListRow image">Imagen</div>
                        </th>
                        <th>
                          <div className="productListRow name">Nombre</div>
                        </th>
                        <th>
                          <div className="productListRow description">
                            SKU {""}
                            {/* <span
                              style={{ fontSize: "11px", fontWeight: "400" }}
                            >
                              (Descripción)
                            </span> */}
                          </div>
                        </th>
                        <th>
                          <div className="productListRow price">Precio</div>
                        </th>
                        <th>
                          <div className="productListRow stock">Stock</div>
                        </th>
                        <th>
                          <div className="productListRow category">
                            Categoría
                          </div>
                        </th>
                        {/* <th>
                          <div className="productListRow imageUrl">
                            imagen {""}
                            <span
                              style={{ fontSize: "11px", fontWeight: "400" }}
                            >
                              (Link)
                            </span>
                          </div>
                        </th> */}
                        <th>
                          <div className="productListRow brand">Marca</div>
                        </th>
                        <th>
                          <div className="productListRow actions">Editar</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="tableAllProducts-body">
                      {filteredProductos.map((prod) => (
                        <tr key={prod.id}>
                          <td>
                            <div className="item-productListRow productId">
                              {prod.id}
                            </div>
                          </td>
                          <td>
                            <div className="item-productListRow image">
                              {prod.imagen_url ? (
                                <img
                                  src={prod.imagen_url}
                                  alt={prod.nombre}
                                  width={48}
                                  height={48}
                                  className="item-productListRow-Img"
                                />
                              ) : (
                                <span
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "8px",
                                  }}
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    width={28}
                                    height={28}
                                    fill="#86868b66"
                                  >
                                    <path d="m16.5,5c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5,2.5-1.121,2.5-2.5-1.122-2.5-2.5-2.5Zm0,4c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Zm2,13H5.5c-1.862,0-3.389-1.462-3.494-3.299l6.348-6.348c.195-.195.195-.512,0-.707s-.512-.195-.707,0l-5.646,5.646V5.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v13c0,2.481,2.019,4.5,4.5,4.5h13c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm5.354,1.146l-1.838-1.838c.636-.796.984-1.784.984-2.809V5.5c0-2.481-2.019-4.5-4.5-4.5H5.5c-1.024,0-2.013.348-2.809.984L.854.146C.658-.049.342-.049.146.146S-.049.658.146.854l23,23c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707Zm-1.854-4.646c0,.759-.246,1.493-.698,2.095L3.404,2.697c.603-.451,1.337-.697,2.096-.697h13c1.93,0,3.5,1.57,3.5,3.5v13Z" />
                                  </svg>
                                </span>
                              )}
                            </div>
                          </td>
                          <td>
                            <div className="item-productListRow productName">
                              {prod.nombre}
                            </div>
                          </td>
                          <td>
                            <div className="item-productListRow productDescription">
                              {prod.descripcion}
                            </div>
                          </td>
                          <td>
                            <div className="item-productListRow productPrice">
                              $&nbsp;{prod.precio}
                            </div>
                          </td>
                          <td>
                            <div className="item-productListRow productStock">
                              {prod.stock}
                            </div>
                          </td>
                          <td>
                            <div className="item-productListRow productCategory">
                              {prod.categoria}
                            </div>
                          </td>
                          {/* <td>
                            <div className="item-productListRow productImageUrl">
                              {prod.imagen_url}
                            </div>
                          </td> */}
                          <td>
                            <div className="item-productListRow productBrand">
                              {prod.marca}
                            </div>
                          </td>
                          <td>
                            <div className="item-productListRow editCreate">
                              <div className="item-productEdit">
                                <Link
                                  to={`/manager/productos/editar/${prod.id}`}
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    width={18}
                                    height={18}
                                  >
                                    <path
                                      fill="#1057ee"
                                      d="m2.748 24a2.755 2.755 0 0 1 -2.719-3.151c.259-1.806 1.133-5.134 2.373-6.374a5.037 5.037 0 0 1 7.123 7.125c-1.239 1.239-4.567 2.113-6.374 2.372a2.741 2.741 0 0 1 -.403.028zm20.352-23.1a3.139 3.139 0 0 0 -4.33 0l-10.5 10.5a6.976 6.976 0 0 1 4.33 4.338l10.5-10.508a3.068 3.068 0 0 0 0-4.33z"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="item-productDelete">
                                <button
                                  onClick={() => eliminarProducto(prod.id)}
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    width={18}
                                    height={18}
                                  >
                                    <path
                                      fill="#f23005"
                                      d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-3,13h-8c-.552,0-1-.448-1-1s.448-1,1-1h8c.552,0,1,.448,1,1s-.448,1-1,1Z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosAdmin;
