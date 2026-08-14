const theme = "back_to_school";
/** Theme key → background + optional character img + optional characterStyle (root-relative paths) */
const themeAssets = {
  all_year: { background: 'resource/escape-the-midnight-mall/assets/cutscene/main.png' },
  more_all_year: { background: 'resource/pickles-playground/assets/cutscene/main.png' },
  spring: { background: 'resource/beehive-blitz/assets/cutscene/main.png' },
  summer: {
    background: 'resource/camp-calamari/assets/cutscene/main.png',
    character: 'resource/camp-calamari/assets/activity/character/chef-gumbo.png',
    text: 'Camp Calamari is under attack!',
    button: 'Summer Escape Rooms →',
    link: 'https://dingopunks.com/collections/digital-summer-escape-rooms',
    alert: 'News',
  },
  fall: { background: 'resource/the-hasty-harvest/assets/cutscene/main.png' },
  winter: { background: 'resource/the-yeti-and-the-yam/assets/cutscene/main.png' },
  valentines: { background: 'resource/cupids-countdown/assets/cutscene/main.png' },
  st_patricks: { background: 'resource/rainbow-rescue/assets/cutscene/main.png' },
  easter: { background: 'resource/eggworld-emergency/assets/cutscene/main.png' },
  end_of_year: { background: 'resource/final-bell-breakout/assets/cutscene/main.png' },
  back_to_school: {
    background: 'resource/paradise-panic/assets/cutscene/main.png',
    character: 'resource/paradise-panic/assets/cutscene/badguy.png',
    characterStyle: {
      transform: 'scaleX(1)',
      left: 'auto',
      right: '-20%',
      top: '-50%',
    },
    text: 'Can you escape paradise?',
    button: 'Back to School Escape Rooms →',
    link: 'https://dingopunks.com/collections/digital-back-to-school-escape-rooms',
    alert: 'News',
  },
  halloween: { background: 'resource/funhouse-fright/assets/cutscene/main.png' },
  thanksgiving: { background: 'resource/turkey-takedown/assets/cutscene/main.png' },
  christmas: { background: 'resource/wacky-workshop/assets/cutscene/main.png' },
};


function renderPromoContainer(promoContainer, themeKey = theme, assetsMap = themeAssets) {
  if (!promoContainer || !themeKey || !assetsMap) {
    return;
  }

  const assets = assetsMap[themeKey];
  if (!assets?.background) {
    return;
  }

  if (assets.link) {
    promoContainer.href = assets.link;
  }

  const background = createElement('div', ['promo-container__background'], promoContainer);
  background.style.backgroundImage = "url('" + assets.background + "')";

  createElement('div', ['splash-tv-overlay', 'splash-tv-overlay--visible'], promoContainer);

  const logo = createElement('img', ['promo-container__logo'], promoContainer);
  logo.src = 'assets/branding/logo/logo-main.png';
  logo.alt = '';

  if (assets.alert) {
    const alert = createElement('p', ['promo-container__alert'], promoContainer);
    alert.textContent = assets.alert;
  }

  const copy = assets.text || assets.speech;
  if (!assets.character && !copy && !assets.button && !assets.alert) {
    return;
  }

  const content = createElement('div', ['promo-container__content'], promoContainer);

  if (assets.character) {
    const character = createElement('img', ['promo-container__character'], content);
    character.src = assets.character;
    character.alt = '';
    if (assets.characterStyle) {
      Object.assign(character.style, assets.characterStyle);
    }
  }

  if (copy || assets.button) {
    const copyWrap = createElement('div', ['promo-container__copy'], content);

    if (copy) {
      const text = createElement('p', ['promo-container__text'], copyWrap);
      text.textContent = copy;
    }

    if (assets.button) {
      const button = createElement('span', ['promo-container__link'], copyWrap);
      button.textContent = assets.button;
    }
  }
}
