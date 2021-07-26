class Cover extends HTMLElement {
  connectedCallback() {
    const link = this.getAttribute('link');
    const img = this.getAttribute('img')
    const name = this.getAttribute('name');
    const alt = this.getAttribute('alt-name');

    this.innerHTML = `
      <div class="cover">
        <a class="cover__link" href="${link}">
          <img class="cover__img" src="${img}" alt="${alt}">
          <h4 class="cover__title">${name}</h4>
        </a>
     </div>
    `
  }
}

export default Cover;