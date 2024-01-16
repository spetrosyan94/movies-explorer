import React from "react";

// Хук для определения ширины экрана
function useResize() {
  const [width, setWidth] = React.useState(window.innerWidth);

  // Обработчик изменения ширины экрана
  React.useEffect(() => {
    function handleResize() {
      setTimeout(() => {
        setWidth(window.innerWidth);
      }, 1000)
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [width]);

  return width;
}

export default useResize;
