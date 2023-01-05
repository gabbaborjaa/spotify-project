const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f7f2194c8emsh42d95e0e726cfabp1b1bd6jsn5bdaccb53bc7',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

const search = document.getElementById('query');
// const type = document.getElementById('type');


function displayS() {
    const searchQ = search.innerHTML;
    console.log(searchQ);

}

function getData() {
    fetch(`https://spotify23.p.rapidapi.com/search/?q=${search}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

document.getElementById("goSearch").addEventListener("click", getData);