const container = document.querySelector('.container')

let resultsDiv = document.querySelector('#results')
console.log('results div', resultsDiv)

let searchBaseUrl = 'https://itunes.apple.com/search?term='

let searchBar = document.querySelector('#search-bar')

searchBar.addEventListener('submit', (event) => {
    event.preventDefault()
    let searchBox = document.querySelector('#search-box')
    let searchUrl = `${searchBaseUrl}${searchBox.value}`
    console.log('search url', searchUrl)
    getSearchResults(searchUrl)

})

// search function
function getSearchResults(url){
    fetch(url, { 
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        // response is whatever the fetch return
        .then(function (response){
            return response.json()
        })
        
        // data is whatever the code returns, in this case response.json()
        // function for displaying Track info
        .then(function (data){
            let songs  = data.results
            console.log(songs)
            for(let song of songs){
        
                // create div and class for info
                let informationDiv = document.createElement('div')
                informationDiv.classList.add('informationDiv');
                
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
        
                // track album name div & classlist
                let albumName = document.createElement('div');
                albumName.classList.add('albumName')
                albumName.innerText = `${song.collectionName}`;

                // Audio & src & controls
                let audioPreview = document.createElement('audio');
                audioPreview.classList.add('audioPreview');
                audioPreview.src = song.previewUrl;
                audioPreview.controls = true;
                
            
                informationDiv.appendChild(albumCover)
                informationDiv.appendChild(artistName)
                informationDiv.appendChild(trackTitle)
                informationDiv.appendChild(albumName)
                informationDiv.appendChild(audioPreview)
                container.appendChild(informationDiv)
            
            }
        })
    }
   
