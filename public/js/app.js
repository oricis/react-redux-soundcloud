

/**
 * Functions declarations
 *
 */

function loadSongs(search)
{
    SC.get('/tracks', {
            query: search
        })
        .then(function (result) {
            if (result.length > 0) {
                console.log(result[0]); // HACK:

                playSong(); // HACK: show box

                for (let i = 0; i < result.length; i++) {
                    const cover_box = document.createElement('div');
                    const image = document.createElement('img');
                    const image_src = result[i].artwork_url;
                    console.log(image_src);

                    cover_box.className = 'cover-image';
                    if (image_src == null) {
                        cover_box.className = 'cover-image cover-image-default';
                        image.alt = 'generic song image';
                        image.src = './public/images/sound-png-5.png';

                    } else {
                        image.src = image_src
                    }

                    cover_box.append(image);
                    document.querySelector('.results').append(cover_box);

                } /**/
            } else {
                alert('No songs finded !');
            }
        });

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
