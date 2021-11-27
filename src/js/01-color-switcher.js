const colorSwitch = document.querySelector('[data-color-switch]');
const startBtn = colorSwitch.querySelector('button[data-start]');
const stopBtn = colorSwitch.querySelector('button[data-stop]');
const bodyRef = document.body;

const options = { once: true, passive: true };
let intervalID = null;

const changeBgColor = el => (el.style.backgroundColor = getRandomHexColor());
const toggleDisabled = (...elems) =>
  elems.forEach(el => el.toggleAttribute('disabled'));

const btnMakeAction = btn => {
  if (btn === startBtn) {
    changeBgColor(bodyRef);
    intervalID = setInterval(() => changeBgColor(bodyRef), 1000);
  }

  if (btn === stopBtn) {
    clearInterval(intervalID);
  }
};

const onBtnClick = ({ target }) => {
  const btn = target.closest('button');
  if (!btn || btn.hasAttribute('disabled')) return;

  toggleDisabled(startBtn, stopBtn);
  btnMakeAction(btn);
};

colorSwitch.addEventListener('click', onBtnClick, { passive: true });

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
