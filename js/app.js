$(document).ready(function() {

  $('#btn-random').click(() => {
    loadJokeFromApi();
  });

});

function loadJokeFromApi() {
  // TODO: get the random joke from the API
 let url = `https://api.chucknorris.io/jokes/random`;

  fetch(url)
  .then((response) => response.json())
  .then((data, status) => {
    // console.log(data);
    document.getElementById("joke").innerHTML = data.value;
  });

}
