import './style.css';
import {postScore} from './module/post_getScores.js'

const submit_btn=document.querySelector(".submits");

submit_btn.addEventListener("click", async (e)=>{
  e.preventDefault();
  await postScore();

});
