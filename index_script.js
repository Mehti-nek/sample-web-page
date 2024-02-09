function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("open");
    if (menuItems.classList.contains("open")) {
      menuItems.style.display = "block";
    } else {
      menuItems.style.display = "none";
    }
}
  