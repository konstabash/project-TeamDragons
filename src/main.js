(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
    openMobMenBtn: document.querySelector("[data-mob-open]"),
    closeMobMenBtn: document.querySelector("[data-mob-close]"),
    mobmenu: document.querySelector("[data-mobmenu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openMobMenBtn.addEventListener("click", toggleMobMenu);
  refs.closeMobMenBtn.addEventListener("click", toggleMobMenu);
  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
  function toggleMobMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.mobmenu.classList.toggle("is-open");
  }
})();