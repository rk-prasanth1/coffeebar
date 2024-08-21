document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/menu')
    .then(response => response.json())
    .then(data => {
      const menuList = document.getElementById('menu-list');
      data.menu.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        menuList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching menu:', error));
});
