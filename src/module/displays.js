const listall = document.getElementById('lists');

export const displaysAll = (arr) => {
  arr.result.forEach((ls) => {
    listall.innerHTML += `<li class="list-unstyled p-3">${ls.user} : ${ls.score} </li>`;
  });
};
