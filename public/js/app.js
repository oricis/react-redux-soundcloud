

/**
 * Functions declarations
 *
 */

function loadContent(song)
{
    var cover_box = document.createElement('div');
    var image     = document.createElement('img');
    var image_src = song.artwork_url;


    cover_box.className = 'cover-image';
    if (image_src == null) {
        cover_box.className = 'cover-image cover-image-default';
        image.alt = 'generic song image';
        image.src = './public/images/sound-png-5.png';

    } else {
        image.src = image_src
    }
    image.setAttribute('dragable', 'true');
    image.setAttribute('ondragstart', 'dragStart(event)');
    image.id    = song.id;
    image.title = song.title;

    cover_box.append(image);
    document.querySelector('.results').append(cover_box);
}

function loadSongs(search)
{
    // clean div contents
    document.querySelector('.results').innerHTML = '';

    SC.get('/tracks', {
            query: search
        })
        .then(function (result) {
            if (result.length > 0) {
                $('playing-song').style.display = "block"; // NOTE: show box

                // console.log(result[0]); // HACK:
                for (var i = 0; i < result.length; i++) {
                    var song = result[i];
                    loadContent(song);
                }

            } else {
                alert('No songs finded !');
            }
        });

}

function playSong()
{
    // TODO: set song's image and play
}

function searchSong()
{
    var search = $('search').value;
    if (search == '') {
        console.warn('The search input is empty !'); // HACK:
        return;
    }

    loadSongs(search);
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
