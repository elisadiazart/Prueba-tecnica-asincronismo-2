// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const timeframesCurrent = document.querySelectorAll('.card__current');
const timeframesPrevious = document.querySelectorAll('.card__previous');
const cardList = document.getElementById('card-list');

const fetchData = (time = 'daily') => {
  fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
      timeframesCurrent.forEach((timeframe, index) => {
        timeframe.textContent = `${data[index].timeframes[time].current}hrs`;
      });
      timeframesPrevious.forEach((timeframe, index) => {
        timeframe.textContent = `${data[index].timeframes[time].previous}hrs`;
      });
    });
};

fetchData();

cardList.addEventListener('click', e => {
  fetchData(e.target.dataset.filter);
  [...cardList.children].forEach(child => {
    child.classList.remove('white-color');
  });
  if (!e.target.classList.contains('card__list-item')) return;
  e.target.classList.toggle('white-color');
});
