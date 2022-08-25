const listall = document.getElementById('lists');

export const displaysAll = (arr) => {
  arr.result.forEach((ls) => {
    listall.innerHTML += `<li class="list-unstyled">${ls.user} : ${ls.score} </li>`;
  });
};
