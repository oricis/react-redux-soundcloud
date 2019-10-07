

/**
 * Functions declarations
 *
 */

function searchSong()
{
    console.log('btn clicked');

    $('playing-song').style.display = "block";
}

/**
 * Events
 *
 */

$('search-form').addEventListener("click", function(event){
    event.preventDefault();

    searchSong();
});


/**
 * App's code
 *
 */

 var api_key = "aa06b0630e34d6055f9c6f8beb8e02eb";
