// -----------------------------
// Ленивое появление картинок при ховере
// -----------------------------

// Берем все ячейки с картами
const mapCells = document.querySelectorAll('.map-cell');

mapCells.forEach(cell => {
  // Берем путь к картинке из data-img
  const imgSrc = cell.dataset.img;

  // Создаем фон (div.bg) если его нет
  let bgDiv = cell.querySelector('.bg');
  if (!bgDiv) {
    bgDiv = document.createElement('div');
    bgDiv.classList.add('bg');
    cell.prepend(bgDiv); // ставим под текст
  }

  // Устанавливаем начальный фон
  bgDiv.style.backgroundImage = `url(${imgSrc})`;

  // Находим дочерние элементы текста и поднимаем их выше фона
  Array.from(cell.children).forEach(child => {
    if (child !== bgDiv) {
      child.style.position = 'relative';
      child.style.zIndex = 1;
    }
  });

  // Событие ховера
  cell.addEventListener('mouseenter', () => {
    bgDiv.style.opacity = '1';  // показываем фон
  });

  cell.addEventListener('mouseleave', () => {
    bgDiv.style.opacity = '0';  // скрываем фон
  });
});