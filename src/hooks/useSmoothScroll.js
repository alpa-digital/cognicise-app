import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      // Asegurarse de que el enlace comienza con # y que existe un elemento con ese id
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para el header fijo
            behavior: 'smooth'
          });
        }
      }
    };

    // Agregar evento a todos los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    // Limpiar al desmontar
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
}