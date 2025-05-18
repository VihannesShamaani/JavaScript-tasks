// Develop the app further

const searchSeries = document.querySelector('#search')
searchSeries.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const show = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${show}`)
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  }
});