function dropDown() {
  const items = document.getElementById('dropdown');
  const menu = document.getElementById('menu');
  if (items.className.includes('dropdownToggle')) {
    items.classList.remove('dropdownToggle');
    menu.style.cssText =
      'transition-property: height; transition-delay: 0s; transition-duration: 0.2s; transition-timing-function: ease; height:850px;';
  } else {
    items.classList.add('dropdownToggle');
    menu.style.cssText = 'height:250px;';
  }
}
