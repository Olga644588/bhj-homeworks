function clickCookie() {
  const counter = document.getElementById('clicker__counter');
  const cookie = document.getElementById('cookie');

  counter.textContent = parseInt(counter.textContent) + 1;

  const currentWidth = parseInt(cookie.style.width);

  const newSize = currentWidth === 200 ? '250px' : '200px';
  cookie.style.width = newSize;
  cookie.style.height = newSize;
}
document.addEventListener('DOMContentLoaded', function() {
  const cookie = document.getElementById('cookie');
  cookie.addEventListener('click', clickCookie);
});
