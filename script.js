// 랜덤 HSL 색상 생성 (밝게 유지해 가독성 확보)
function randomHslColor() {
  const hue = Math.floor(Math.random() * 360); // 0-359
  const saturation = 70 + Math.floor(Math.random() * 30); // 70-100%
  const lightness = 60; // 밝게 고정해 텍스트 가독성 확보
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

function applyRandomBackground() {
  const color = randomHslColor();
  document.body.style.backgroundColor = color;
  const colorText = document.getElementById('colorText');
  if (colorText) colorText.textContent = color;
}

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('changeColorBtn');
  if (btn) btn.addEventListener('click', applyRandomBackground);
});

