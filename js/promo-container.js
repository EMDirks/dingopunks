function renderPromoContainer(promoContainer, themeKey, assetsMap) {
  if (!promoContainer || !themeKey || !assetsMap) {
    return;
  }

  const assets = assetsMap[themeKey];
  if (!assets?.background) {
    return;
  }

  promoContainer.style.backgroundImage = "url('" + assets.background + "')";

  const copy = assets.text || assets.speech;
  if (!assets.character && !copy && !assets.button) {
    return;
  }

  const content = createElement('div', ['promo-container__content'], promoContainer);

  if (assets.character) {
    const character = createElement('img', ['promo-container__character'], content);
    character.src = assets.character;
    character.alt = '';
  }

  if (copy || assets.button) {
    const copyWrap = createElement('div', ['promo-container__copy'], content);

    if (copy) {
      const text = createElement('p', ['promo-container__text'], copyWrap);
      text.textContent = copy;
    }

    if (assets.button && assets.link) {
      const link = createElement('a', ['promo-container__link'], copyWrap);
      link.href = assets.link;
      link.textContent = assets.button;
    }
  }
}
