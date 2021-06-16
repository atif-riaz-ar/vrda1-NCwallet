import axios from "axios";

const getUsd = new Promise((resolve, reject) => {
  axios.post("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
    .then(function(response) {
      resolve(response.data.USD);
    })
    .catch(err => {
      // handle error
      console.log("Err function is working", err);
    });
});

export default getUsd;
