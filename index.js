import $ from 'jquery';

/**
 * Gets the amount of pixels the selector is from the bottom of the page.
 * In the same way that scrollTop() takes the number of pixels from the top
 * of the selector, scrollBottom() will take the number of pixels taken for
 * the bottom of the selector to reach bottom of the site.
 * @param  {integer} position Optional. Set the position of the webpage
 *                            relative to the bottom of the page.
 * @return {integer}          The amount of pixels to the bottom of the page
 *                            if position is defined. Otherwise it will return
 *                            $(this).
 */
export default function scrollBottom(position) {
    // getter
    if (typeof position == 'undefined') {
        return $(document).height() - ($(this).scrollTop() + $(this).height());
    }

    // setter
    else {
        position = isNaN(position) ? 0 : Math.abs(position);
        var pos = $(document).height() - ($(this).scrollTop() + $(this).height()) - position;

        $(window).scrollTop(pos);

        return $(this);
    }
}
