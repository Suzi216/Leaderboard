/* eslint-disable no-mixed-spaces-and-tabs */
const name = document.getElementById('names');
const scores = document.getElementById('scores');
const error = document.querySelector('.error');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2NJNJ/scores';
export const postScore = async () => {
  const namevl = name.value;
  const scorevl = scores.value;
  const response = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset= UTF-8',
      },
      body: JSON.stringify({
        user: namevl,
        score: scorevl,
      }),
    },
  );
  const result = await response.json();
  return result;
};

export const getSc = async () => {
  const data = await fetch(
    url,
  );
  const res = await data.json();
  return res;
};

export const prints = () => {
  error.innerText = 'Error during fetch';
};
