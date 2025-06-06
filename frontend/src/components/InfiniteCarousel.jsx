// src/components/InfiniteCarousel.jsx
import React, { useRef, useEffect, useState } from "react";
import "../../css/carrusel.css"; // Asegúrate de crear este archivo CSS para los estilos del carrusel

const InfiniteCarousel = ({ children, speed = 0.5 }) => {
  const carruselRef = useRef(null); // Usamos useRef para obtener una referencia al elemento DOM
  const [itemsDuplicated, setItemsDuplicated] = useState(false); // Estado para controlar la duplicación

  useEffect(() => {
    const carruselElement = carruselRef.current;

    if (!carruselElement) return; // Salir si el elemento no está disponible

    // Duplicar elementos solo una vez para el efecto infinito
    // Es crucial que esto se haga después de que los hijos se hayan renderizado
    // y solo si aún no se han duplicado.
    if (!itemsDuplicated) {
      // Duplicamos los hijos del carrusel para crear el efecto infinito.
      // La cantidad de duplicaciones dependerá del ancho de tus elementos y del contenedor,
      // para asegurar que siempre haya suficiente contenido para el scroll continuo.
      // Unas 2-3 veces el contenido original suele ser suficiente.
      const originalContent = carruselElement.innerHTML;
      carruselElement.innerHTML += originalContent; // Duplica una vez
      carruselElement.innerHTML += originalContent; // Duplica otra vez
      // Puedes ajustar cuántas veces lo duplicas, por ejemplo:
      // carruselElement.innerHTML = originalContent.repeat(5);

      setItemsDuplicated(true); // Marcamos que los ítems ya se duplicaron
    }

    let animationFrameId;
    let position = 0;

    const animateCarrusel = () => {
      position -= speed;

      // Reiniciar posición cuando termine un ciclo completo del contenido original.
      // Necesitamos el ancho total de los elementos originales.
      // Esto es un poco truculento porque carruselElement.scrollWidth incluye los duplicados.
      // Una forma más robusta es calcular el ancho de los elementos originales antes de duplicar.
      // Para simplificar, asumiremos que reiniciar en la mitad de `scrollWidth` funciona si duplicaste x2.
      // Si duplicas los ítems 2 veces (original + 2 copias), entonces la mitad del scrollWidth
      // corresponde aproximadamente al ancho de los ítems originales.
      const contentWidth = carruselElement.scrollWidth / 3; // Si duplicaste el contenido 2 veces (3 sets totales)

      if (Math.abs(position) >= contentWidth) {
        position = 0; // Reiniciar
      }

      carruselElement.style.transform = `translate3d(${position}px, 0, 0)`;

      animationFrameId = requestAnimationFrame(animateCarrusel);
    };

    // Iniciar animación
    animateCarrusel();

    // Función de limpieza de useEffect: se ejecuta cuando el componente se desmonta
    // o cuando las dependencias cambian. Esto previene fugas de memoria.
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, itemsDuplicated]); // Dependencias: la animación se reinicia si la velocidad o el estado de duplicación cambian

  return (
    <div className="carrusel-container">
      <div id="carrusel" ref={carruselRef} className="carrusel-content">
        {children}{" "}
        {/* Aquí se renderizarán los elementos que pases al carrusel */}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
