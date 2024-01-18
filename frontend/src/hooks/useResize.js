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
    // Добавляем слушателя события изменения размера окна
    window.addEventListener('resize', handleResize);

    return () => {
      // Убираем слушателя события при размонтировании компонента
      window.removeEventListener('resize', handleResize)
    };
  }, [width]);

  return width;
}

export default useResize;
