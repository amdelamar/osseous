/*!
 * Osseous CSS v1.0.0
 * https://austindelamar.com/osseous
 * MIT License
 */
function openSidebar() {
    document.getElementById("sidebar").style.display = "block";
}
function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
}
window.onclick = function(event) {
	// When the user clicks anywhere outside of the modal, close it
	var modal = document.getElementById('share-popup');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openPopup(name) {
	document.getElementById(name).style.display='block';
}
function closePopup(name) {
	document.getElementById(name).style.display='none';
}
// When the user clicks on the button, scroll to the top of the document
function gotoTop() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
} 