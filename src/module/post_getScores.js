const name= document.getElementById("names");
const scores= document.getElementById("scores");
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores`;
// console.log(scores);
export const postScore = async ()  => {
    const name_vl=name.value;
    const score_vl=scores.value;
    const response= await fetch(
      url,
    {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset= UTF-8',
        },
        body: JSON.stringify(
          {
        	"user": name_vl,
        	"score": score_vl
          }),
      },
    );
    const { result } = await response.json();
    return result;
}

export const getScore = async () => {
    const response= await fetch(
      url,
    )
}
