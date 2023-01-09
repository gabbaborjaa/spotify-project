// You know. I actually don't know what this does.
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f7f2194c8emsh42d95e0e726cfabp1b1bd6jsn5bdaccb53bc7',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

function getData() {
    // search reads value that user types into input.
    const search = document.getElementById("search").value;
    // js function that retrieves API endpoint
    fetch(`https://spotify23.p.rapidapi.com/search/?q=${search}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        // json response into console.log
        .catch(err => console.error(err));
};

// Displays results into UI by declaring proper variables
function displayResults(data) {
    const artist = artist.items[0];
    const artistResults = document.getElementById("view");

    const artistName = artist.data.profile;
    const heading = document.getElementById("h1");
    heading.innerHTML = artistName;
    artistResults.appendChild(heading);
}


document.getElementById("submit").addEventListener("click", getData);
document.getElementById("submit").addEventListener("click", displayResults);