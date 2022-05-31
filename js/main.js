const API_URL = "https://rickandmortyapi.com/api/character";
const container = document.querySelector('#main-container')

fetch(API_URL)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    const tpl = data.results.map((data) => 
    `<div class="character">
        <img class="character-image" src="${data.image}"></img>
        <div class="character-name">Full name: ${data.name}</div>
        <div class="character-description">Status: ${data.status}</div>
    </div>`
    );
    container.innerHTML = `<div>${tpl}</div>`;
});