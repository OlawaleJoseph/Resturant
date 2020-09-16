const createBrand = () => {
  const brand = document.createElement('a');
  brand.classList.add('font-weight-bold', 'brand', 'logo');
  brand.textContent = 'BelleFul';
  return brand;
};

const createNavLink = (name) => {
  const navItem = document.createElement('li');
  navItem.classList.add('nav-item');
  const navLink = document.createElement('a');
  navLink.classList.add('nav-link');
  navLink.textContent = name;
  navItem.appendChild(navLink);
  return navItem;
};

const createNavLinks = () => {
  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav', 'nav-pills', 'nav-fill');
  navLinks.appendChild(createNavLink('Home'));
  navLinks.appendChild(createNavLink('Menu'));
  navLinks.appendChild(createNavLink('Contact'));
  return navLinks;
};

export default () => {
  const nav = document.createElement('nav');
  nav.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'p-4');
  nav.appendChild(createBrand());
  nav.appendChild(createNavLinks());
  return nav;
};