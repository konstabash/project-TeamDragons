(() => {
  const refs = {
    openMobMenBtn: document.querySelector("[data-mob-open]"),
    closeMobMenBtn: document.querySelector("[data-mob-close]"),
    mobmenu: document.querySelector("[data-mobmenu]"),
  };

  refs.openMobMenBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleMobMenu();
  });

  refs.closeMobMenBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleMobMenu();
  });

  function toggleMobMenu() {
    refs.mobmenu.classList.toggle("is-open");
  }
})();