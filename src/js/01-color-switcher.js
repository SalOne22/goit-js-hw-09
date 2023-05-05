import ColorSwitcher from './ColorSwitcher';

const SWITCH_COLOR_DELAY = 1000;

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

const colorSwitcher = new ColorSwitcher(SWITCH_COLOR_DELAY);

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

refs.stopBtn.disabled = true;

function onStartClick() {
  toggleButtonsDisableAttr();
  colorSwitcher.startColorSwitch();
}

function onStopClick() {
  toggleButtonsDisableAttr();
  colorSwitcher.stopColorSwitch();
}

function toggleButtonsDisableAttr() {
  refs.startBtn.toggleAttribute('disabled');
  refs.stopBtn.toggleAttribute('disabled');
}
