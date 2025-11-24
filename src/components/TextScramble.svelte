<script>
import { onMount } from "svelte";

class TextScramble {
	constructor(el) {
		this.el = el;
		this.chars = "!<>-_\\/[]{}?=+*^?#________";
		this.update = this.update.bind(this);
	}
	setText(newText) {
		const oldText = this.el.innerText;
		const length = Math.max(oldText.length, newText.length);
		const promise = new Promise(resolve => (this.resolve = resolve));
		this.queue = [];
		for (let i = 0; i < length; i++) {
			const from = oldText[i] || "";
			const to = newText[i] || "";
			const start = Math.floor(Math.random() * 75);
			const end = start + Math.floor(Math.random() * 75);
			this.queue.push({ from, to, start, end });
		}
		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.update();
		return promise;
	}
	update() {
		let output = "";
		let complete = 0;
		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end, char } = this.queue[i];
			if (this.frame >= end) {
				complete++;
				output += to;
			} else if (this.frame >= start) {
				if (!char || Math.random() < 0.28) {
					char = this.randomChar();
					this.queue[i].char = char;
				}
				output += `<span class="dud">${char}</span>`;
			} else {
				output += from;
			}
		}
		this.el.innerHTML = output;
		if (complete === this.queue.length) {
			this.resolve();
		} else {
			this.frameRequest = requestAnimationFrame(this.update);
			this.frame++;
		}
	}
	randomChar() {
		return this.chars[Math.floor(Math.random() * this.chars.length)];
	}
}

const phrases = [
	"Hello?",
	"Is there anybody in there?",
	"Just nod if you can hear me.",
	"Is there anyone home?",
	"Come on, now.",
	"I hear you're feeling down.",
	"Well I can ease your pain,",
	"Get you on your feet again.",
	"fqwefeqwgrgw",
	"dwdewfrrg",
	"poktr",
	"Hello."
];

let el;

onMount(() => {
	if (!el) return;

	const fx = new TextScramble(el);
	let counter = 0;

	const next = () => {
		const phrase = phrases[counter];
		fx.setText(phrase).then(() => {
			// 根据 phrase 长度计算延迟：每个字符 80ms，最小 500ms，最大 3000ms
			let delay = Math.min(Math.max(phrase.length * 150, 2000), 5000);
			if (phrase === "Is there anybody home?" || phrase === "Hello.") {
				delay = 7500;
			}
			if (phrase === "fqwefeqwgrgw" || phrase === "dwdewfrrg" || phrase === "poktr") {
				delay = 30;
			}
			setTimeout(next, delay);
		});
		counter = (counter + 1) % phrases.length;
	};

	next();
});
</script>

<div class="container">
	<div class="text" bind:this={el}></div>
</div>

<style>
	/* 5. CSS 样式 */

	/* Svelte 默认会给样式添加作用域 (scoped)。
    对于 html, body 这种全局标签，
    和 .dud 这种通过 innerHTML 动态添加的类，
    我们需要使用 :global() 来使其全局生效。
  */

	.container {
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.text {
		font-family: var(--font-monospace);
		font-weight: 400;
		font-size: 2.5rem;
		color: var(--primary-color);
		@media screen and (max-width: 640px) {
			font-size: 1.5rem;
		}
	}

	:global(.dud) {
		color: var(--weak-color);
	}
</style>
