/*!
 * Osseous CSS v1.0.0
 * https://austindelamar.com/osseous
 * MIT License
 */
function openSidebar() {
    document.getElementById("sidebar").style.display = "inline-block";
}
function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
}
function gotoTop() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}
