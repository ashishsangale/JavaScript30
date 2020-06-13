const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']
const ul = document.querySelector('ul');

function strip(bandName){
    return bandName.replace(/^(a |the |an )/i,'').trim();
}

const band = bands.sort((a,b) => {
    if(strip(a) > strip(b)){
        return 1
    } else {
        return -1
    }
});

ul.innerHTML = band.map(val => `<li>${val}</li>`).join('');