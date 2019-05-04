const body = document.querySelector('body');
const sidebar = document.querySelector('aside');
const style = getComputedStyle(document.documentElement);
const minimizedColValue = style.getPropertyValue('--grid-columns-minimized').trim();
const expandedColValue = style.getPropertyValue('--grid-columns').trim();


sidebar.addEventListener('click', () => {
  const colStyle = body.style.getPropertyValue('grid-template-columns');
  body.style.setProperty('grid-template-columns', colStyle === minimizedColValue ? expandedColValue : minimizedColValue);
});
