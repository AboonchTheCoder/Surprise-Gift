const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Happy Birthday Aboonch! I love you much (˶  >   ₃  < ˶)♡";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazUzc3R0amlhcDl3NmFhNnI0MzlqczA2dHlwdWZjcmhzdmwwMXFvbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HXxib6eQdUVnNLLGbd/giphy-downsized-large.gif";

// Hide the noBtn after clicking yesBtn
  noBtn.style.display = "none";

});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
