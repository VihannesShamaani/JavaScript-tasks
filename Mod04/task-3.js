// Develop the app even further. Print specific information for all series from the search result on the web page.

const searchSeries = document.querySelector('#search');
searchSeries.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const show = document.querySelector('input[name=q]').value;

  try {
    let list = document.querySelector('#list');
    list.innerHTML = '';

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${show}`)
    const jsonData = await response.json();

    for (let i = 0; i < jsonData.length; i++) {
      // name
      let h2 = document.createElement('h2');
      h2.innerHTML = jsonData[i].show.name;
      list.appendChild(h2);

      // link
      let a = document.createElement('a');
      let url = jsonData[i].show.url;
      a.innerHTML = `<a href="${url}">${url}</a>`
      list.appendChild(a);

      // picture
      let figure = document.createElement('figure');
      let img = document.createElement('img');
      img.src = jsonData[i].show.image?.medium;
      img.alt = jsonData[i].show.name;
      figure.appendChild(img);
      list.appendChild(figure);

      // summary
      let p = document.createElement('div');
      p.innerHTML = jsonData[i].show.summary;
      list.appendChild(p);
    }
  } catch (error) {
    console.log(error.message);
  }
});