import './style.css';
import { postScore, getSc, prints } from './module/post_getScores.js';
import { displaysAll } from './module/displays.js';

const submitbtn = document.querySelector('.submits');
const refreshbtn = document.querySelector('.refresh');
submitbtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await postScore();
});
refreshbtn.addEventListener('click', () => {
  getSc()
    .then(async (response) => {
      await displaysAll(response);
    })
    .catch(() => {
      prints();
    });
});
