// src/context/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const stored = localStorage.getItem("carrito");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(
        (item) => item.id === producto.id
      );

      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CartContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// // src/context/CartContext.jsx
// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [carrito, setCarrito] = useState(() => {
//     const stored = localStorage.getItem("carrito");
//     return stored ? JSON.parse(stored) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//   }, [carrito]);

//   const agregarAlCarrito = (producto) => {
//     const productoExistente = carrito.find((item) => item.id === producto.id);
//     if (productoExistente) {
//       const nuevoCarrito = carrito.map((item) =>
//         item.id === producto.id
//           ? { ...item, cantidad: item.cantidad + 1 }
//           : item
//       );
//       setCarrito(nuevoCarrito);
//     } else {
//       setCarrito([...carrito, { ...producto, cantidad: 1 }]);
//     }
//   };

//   const eliminarDelCarrito = (id) => {
//     setCarrito(carrito.filter((item) => item.id !== id));
//   };

//   const vaciarCarrito = () => setCarrito([]);

//   return (
//     <CartContext.Provider
//       value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
