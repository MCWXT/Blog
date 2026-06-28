let number = 0;
let audio;

const easterEgg = {
	click: fun => {
		number++;
		setTimeout(() => number--, 1000);
		if (number >= 2) {
			easterEgg.trigger(fun);
		}
	},

	trigger: fun => {
		if (!process.client) return;
		alert("Hellow strEnger Im .............");
		fun?.();

		// 延迟创建 audio（关键）
		if (!audio) {
			audio = new Audio("/audio/Awakening.mp3");
		}
		setTimeout(() => {
			audio.play();
		}, 250);

		const html = document.documentElement;
		const style = document.createElement("style");

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
		html.dataset.theme = "easterEgg";
	}
};

export default easterEgg;
