let number = 0;
const audio = new Audio('/audio/Awakening.mp3');

const easterEgg = {
  click: () => {
    number++;
    setTimeout(() => number--, 1000);
    if (number >= 6) {
      easterEgg.trigger();
    }
  },
  trigger: () => {
    alert('Hellow strEnger Im .............');
    setTimeout(() => audio.play(), 250);
    const html = document.documentElement;
    const style = document.createElement('style');
    style.textContent = `
* {
  transition: color 0.2s linear, 
              background-color 0.2s linear, 
              border-color 0.2s linear,
              border 0.2s linear;
  backface-visibility: hidden;
  will-change: color, border-color;
}
`;
    document.head.appendChild(style);
    setTimeout(() => {
      style.remove();
    }, 500);
    html.dataset.theme = 'easterEgg';
  },
};

export default easterEgg;
