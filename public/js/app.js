

/**
 * Functions declarations
 *
 */

function loadSongs(search)
{
    // TODO: fetch results for "search"
}



function playSong()
{
    $('playing-song').style.display = "block";

    // TODO: set song's image and play
}

function searchSong()
{
    console.log('btn clicked - searching: ' + $('search').value);

    let search = $('search').value;
    if (search == '') {
        console.warn('The search input is empty !'); // HACK:
        return;
    }


    // TODO: loadSongs()


    playSong(); // HACK:
}

/**
 * Events
 *
 */

$('search-button').addEventListener("click", function(event){
    event.preventDefault();

    searchSong();
});
window.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        searchSong();
    }
}, false);


/**
 * App's code
 *
 */

SC.initialize({
    client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb'
});
