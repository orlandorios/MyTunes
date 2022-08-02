const container = document.querySelector('.container')


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
// function for displaying Track info
.then(function (data){
    let songs  = data.results
    for(let song of songs){

        // create div and class for info
        let mediaDiv = document.createElement('div')
        mediaDiv.classList.add('media');
        
        // album art div & class
        let albumCover = document.createElement('img');
        albumCover.classList.add('albumCover');
        albumCover.src = `${song.artworkUrl100}`;
        
         // artist name div & classlist
        let artistName = document.createElement('div');
        artistName.classList.add('artistName');
        artistName.innerText = `${song.artistName}`;
        
        // track title div & classlist
        let trackTitle = document.createElement('div');
        trackTitle.classList.add('trackTitle');
        trackTitle.innerText = `${song.trackName}`;
    
        mediaDiv.appendChild(albumCover)
        mediaDiv.appendChild(artistName)
        mediaDiv.appendChild(trackTitle)
        container.appendChild(mediaDiv)

    
    }
})



