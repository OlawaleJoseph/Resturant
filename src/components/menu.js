const createMenuCard = ({ imgSrc, title, description }) => (`<div class="card m-3">
    <img class="card-img-top" src="${imgSrc}" alt="${title} dish image">
    <div class="card-body text-center">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
    </div>
  </div>`
);

const menuList = (menuArr) => {
  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('container', 'text-center');
  menuWrapper.innerHTML = '<h1 class="display-3 font-weight-bold my-5">MENU</h1>';
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('d-flex', 'flex-wrap');
  menuArr.forEach((menu) => {
    const menuCard = createMenuCard(menu);
    menuContainer.insertAdjacentHTML('beforeend', menuCard);
  });
  menuWrapper.appendChild(menuContainer);
  return menuWrapper;
};

export default menuList;
