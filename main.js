console.log('connected!')

let searchBar = document.createElement('div')
searchBar.classList.add('searchBar')
container.appendChild(searchBar)

let searchButton = document.createElement('div')
searchButton.innerText = search


let resultsDiv = document.querySelector('#results')
console.log('results div', resultsDiv)

let searchUrl = 'https://itunes.apple.com/search?term=because%2Bthe%2Binternet'

fetch(searchUrl, {
    method: 'GET',
    Headers: {'Content-Type': 'application/json'}
})

// response is whatever the fetch return
.then(function (response){
    return response.json()
})
// data is whatever the aboe code returns, in this case response.json()
.then(function (data){
    let songs  = data.results
    for(let song of songs){
    }
})
// function for displaying song results

function showSongName(songArray){
    for (let song of songArray)
        let songReturnDiv = document.createElement('div')
        songReturnDiv.classList.add('songReturn')

        //div for song thumbnail & class
        let trackCover = document.createElement('div')
        trackCover.classList.add('trackCover')
        trackCover.src = `${song.artworkUrl100}`

        // song title with div & class
        let songTitle = document.createElement('div')

}


