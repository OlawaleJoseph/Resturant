const home = document.createElement('div');
home.classList.add('position-relative');
const carousel = () => {
  home.insertAdjacentHTML('beforeend', `<div id="carouselExampleControls" class="position-relative homepage z-1 carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://images.unsplash.com/photo-1592406118211-b340891b0af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`);
};

const pageText = () => {
  const container = document.createElement('div');
  container.classList.add('overlay', 'text-white');
  const text = document.createElement('div');
  text.classList.add('welcome-text');
  const headLine = '<h1>EAT WITH COMFORT</h1><h3>A Comfort Food Restaurant, committed to exciting your palate</h3>';
  text.insertAdjacentHTML('beforeend', headLine);
  container.appendChild(text);
  home.appendChild(container);
};

const createHomePgae = () => {
  carousel();
  pageText();
  return home;
};

export default createHomePgae;
