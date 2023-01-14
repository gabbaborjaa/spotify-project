// RapidAPI GET Request
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
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            console.log(data);
            const dataResults = data.tracks.items[0].data.name;
            console.log(dataResults)

        });
}

// Displays results into UI by declaring proper variables
function displayResults(data) {
    document.getElementById("artistName").innerHTML = displayArtist
    const displayArtist = data.tracks.items[0].data.name;
    console.log(displayArtist)
}


document.getElementById("submit").addEventListener("click", getData);
document.getElementById("submit").addEventListener("click", displayResults);