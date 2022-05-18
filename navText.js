// Scrambled Text Effect
class ScrambleTheText {
  constructor(el) {
    this.el = el;
    this.chars = "M!<>1-_9E\\8/[H]{}6—=+*^?#___";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    let oldText = this.el.innerText;
    let length = Math.max(oldText.length, newText.length);
    let promise = new Promise((resolve) => (this.resolve = resolve));

    this.queue = [];
    for (let i = 0; i < length; i++) {
      let from = oldText[i] || "";
      let to = newText[i] || "";
      let start = Math.floor(Math.random() * 40);
      let end = start + Math.floor(Math.random() * 40);
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
        output += `<span class="dummy">${char}</span>`;
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

// Usage Demo
let mySkills = ["Creativity", "Flexibility", "Proactivity"];

let el = document.querySelector(".knowledge");
let fx = new ScrambleTheText(el);

let counter = 0;
let next = () => {
  fx.setText(mySkills[counter]).then(() => {
    setTimeout(next, 1500);
  });
  counter = (counter + 1) % mySkills.length;
};
next();
