import './style.css';
import {postScore, getSc} from './module/post_getScores.js'
import {displaysAll} from './module/displays.js'
const submit_btn=document.querySelector(".submits");
const refresh_btn =document.querySelector(".refresh");
submit_btn.addEventListener("click", async (e)=>{
  e.preventDefault();
  await postScore();
});
refresh_btn.addEventListener("click", async ()=>{
  const arr= await getSc();
  // const entries = Object.values(arr);
// console.log(entries);

  // console.log(typeof(entries))
  // console.log(arr);
  await displaysAll(arr);
})
