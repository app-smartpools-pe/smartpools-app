import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Globalheader from "./components/Globalheader";
import Globalfooter from "./components/Globalfooter";

// Páginas principales
import Home from "./components/Home";
import Usapp from "./components/us";
import Store from "./components/Store";
import Products from "./components/Products";
import Services from "./components/Services";
import Accessories from "./components/Accessories";
import Contact from "./components/Contact";
import Brands from "./components/Brands";
import Support from "./components/Support";
import Search from "./components/Search";
import Bag from "./components/Bag";
import Checkout from "./components/Checkout";
import PedidoExitoso from "./components/PedidoExitoso";
import ProductDetail from "./components/ProductDetail";

// Páginas de categorias
import Categories from "./pages/Store/BombasFiltros/BombasFiltros";

// CRUD > CREATE // READ // UPDATE // DELETE //

import ProductosAdmin from "./pages/manager/ProductosAdmin";
import CrearProducto from "./pages/manager/CrearProducto";
import EditarProducto from "./pages/manager/EditarProducto";

// featured services

import FeaturedServices from "./pages/manager/FeaturedServices";
import CreateFeaturedServices from "./pages/manager/CreateFeaturedServices";
import EditFeaturedServices from "./pages/manager/EditFeaturedServices";

// Auth // Sign in //

import SignIn from "./auth/SignIn";

import RutaPrivada from "./components/RutaPrivada";

// // Dashboard Maganer // //

import DashboardManager from "./pages/manager/DashboardManager";
import DashboardClient from "./auth/DashboardClient";

function App() {
  return (
    <Router>
      <Globalheader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/us" element={<Usapp />} />
        <Route path="/store" element={<Store />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/support" element={<Support />} />
        <Route path="/us/shearch" element={<Search />} />
        <Route path="/shop/bag" element={<Bag />} />
        <Route path="/shop/bag/checkout" element={<Checkout />} />
        <Route path="/pedidoexitoso/:ordenid" element={<PedidoExitoso />} />
        <Route path="/store/:categoria" element={<Categories />} />
        <Route
          path="/shop/product/IGMALLPRODUCTS/P/:slug"
          element={<ProductDetail />}
        />

        <Route
          path="/manager/productos"
          element={
            <RutaPrivada requiereManager={true}>
              <ProductosAdmin />
            </RutaPrivada>
          }
        />
        <Route
          path="api/auth/manager/create/products"
          element={
            <RutaPrivada requiereManager={true}>
              <CrearProducto />
            </RutaPrivada>
          }
        />
        <Route
          path="/manager/productos/editar/:id"
          element={
            <RutaPrivada requiereManager={true}>
              <EditarProducto />
            </RutaPrivada>
          }
        />

        {/* featured services link */}

        <Route
          path="/manager/featured-services"
          element={
            <RutaPrivada requiereManager={true}>
              <FeaturedServices />
            </RutaPrivada>
          }
        />
        <Route
          path="api/auth/manager/create/featured-services"
          element={
            <RutaPrivada requiereManager={true}>
              <CreateFeaturedServices />
            </RutaPrivada>
          }
        />
        <Route
          path="/manager/featured-services/editar/:id"
          element={
            <RutaPrivada requiereManager={true}>
              <EditFeaturedServices />
            </RutaPrivada>
          }
        />

        <Route path="/api/auth/sign-in" element={<SignIn />} />

        <Route
          path="/api/auth/session-started/manager/dashboard"
          element={
            <RutaPrivada requiereManager={true}>
              <DashboardManager />
            </RutaPrivada>
          }
        />

        <Route
          path="/api/session-started/auth/client/dashboard"
          element={
            <RutaPrivada requiereClient={true}>
              <DashboardClient />
            </RutaPrivada>
          }
        />
      </Routes>
      <Globalfooter />
    </Router>
  );
}

export default App;
