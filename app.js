

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const icon = document.getElementById("menu-icon");

  // Ouvrir / fermer menu + changer icône
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
      icon.classList.remove("bx-menu");
      icon.classList.add("bx-x");
    } else {
      icon.classList.remove("bx-x");
      icon.classList.add("bx-menu");
    }
  });

  // Fermer le menu après clic sur un lien
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
      icon.classList.remove("bx-x");
      icon.classList.add("bx-menu");
    });
  });



