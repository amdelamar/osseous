/*!
 * Osseous CSS v2.0.1
 * https://austindelamar.com/osseous
 * MIT License
 */
function openSidebar() {
    document.getElementById("sidebarMenu").style.display = "inline-block";
}
function closeSidebar() {
    document.getElementById("sidebarMenu").style.display = "none";
}
function gotoTop() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}
