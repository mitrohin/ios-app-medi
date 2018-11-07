/**
 * Open page into url
 *
 * @param url           The url to load
 */
function openPage(url) {
	myURL = encodeURI(url);
    window.open(myURL, '_system');
}