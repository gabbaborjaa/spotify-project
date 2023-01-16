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
            const dataResults = data.tracks.items;
            document.getElementById("topSong").innerHTML = "";
            dataResults.forEach(element => {
                displayResults(element.data.name);
            });
        });
};

// Displays results into UI by declaring proper variables
function displayResults(song) {
    document.getElementById("topSong").innerHTML += "<p>" + song + "</p>";
};



document.getElementById("submit").addEventListener("click", getData);
document.getElementById("search").addEventListener("keydown", function(e) {
    if (e.code === "Enter") { //checks whether the pressed key is "Enter"
        getData();
    }
});