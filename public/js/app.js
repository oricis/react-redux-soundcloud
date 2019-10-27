
var actual_track_id;

/**
 * Functions declarations
 *
 */

function loadContent(song)
{
    var cover_box = document.createElement('div');
    var image     = document.createElement('img');
    var image_src = song.artwork_url;
    var path_to_generic_image = './images/sound-png-5.png';

    cover_box.className = 'cover-image';
    if (image_src == null) {
        cover_box.className = 'cover-image cover-image-default';
        image.alt = 'generic song image';
        image.src = path_to_generic_image;

    } else {
        image.src = image_src
    }
    image.setAttribute('dragable', 'true');
    image.setAttribute('onDragStart', 'dragStart(event)');
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
            q: search
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

function playSong(track_id)
{
    SC.stream('/tracks/' + track_id).then(function(player){
        player.play();
    });

    actual_track_id = track_id;
}

function removePreviousTrack(target)
{
    target.innerHTML = '';

    if (actual_track_id != undefined) {
        $(actual_track_id).style.opacity = 1;
        actual_track_id = undefined;
    }
}

function searchSong(search)
{
    if (search == '') {
        console.warn('The search input is empty !'); // HACK:
        return;
    }

    loadSongs(search);
}

/**
 * App's code
 *
 */

SC.initialize({
    client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb'
});
