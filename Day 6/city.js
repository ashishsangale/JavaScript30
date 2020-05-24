const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const search = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');
const cities = [];

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        //regular expression for search
        const regex = new RegExp(wordToMatch, 'gi')   //g-> global & i-> insensitive
        return place.city.match(regex) || place.state.match(regex)
    });
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities)
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class = 'h1'>${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class = 'h1'>${this.value}</span>`);
        return `
            <li>
                <span class='name'>${cityName},${stateName}</span>
                <span class='population'>${popCommas(place.population)}</span>
                
            </li>
        `;
    }).join('');
    suggestion.innerHTML = html;    
}

function popCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

search.addEventListener('change', displayMatches);
search.addEventListener('keyup',displayMatches);