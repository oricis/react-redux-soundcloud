

/**
 * Drag and drop
 *
 */

function allowDrop(event)
{
    if (event.preventDefault) {
        event.preventDefault();
    }

    event.dataTransfer.dropEffect = 'move';

    return false;
}

function dragStart(event)
{
    var dragable_track_cover_src = event.target.src;
    var dragable_track_id        = event.target.id;
    var dt = event.dataTransfer;

    dt.setData("text/uri-list", dragable_track_cover_src);
    dt.setData("text/plain", dragable_track_id);
    dt.dropEffect = 'move';

    event.target.style.opacity = 0.5;
}

function dragEnd(event)
{
    if (event.stopPropagation) {
        event.stopPropagation(); // stops the browser from redirecting
    }

    // Don't do anything if dropping the same space we're dragging
    if ($('actual-song') == event.target) {
        // console.log('dragEnd() - moving...'); // HACK:
        event.target.style.opacity = 1;

        // Set the source item's HTML to the HTML of the item dropped on
        var dt = event.dataTransfer;
        var source_track_id = dt.getData('text/plain');
        var source_track_cover_src = dt.getData('URL');

        var image = document.createElement('img');
        image.id  = source_track_id;
        image.src = source_track_cover_src;
        image.setAttribute('height', 100);
        image.setAttribute('width', 100);

        event.target.append(image);
        playSong(source_track_id);
    }

    // Clear the drag data cache (for all formats/types)
    event.dataTransfer.clearData();

    return false;
}
