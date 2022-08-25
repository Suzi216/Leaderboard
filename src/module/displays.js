const listall=document.getElementById("lists");

export const displaysAll = (arr)=> {
  Object.values(arr).forEach((ls) => {
    console.log(ls);
    listall.innerHTML+=`<li>${ls.user} : ${ls.score} </li>`
  });
};
