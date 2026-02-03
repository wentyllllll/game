const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const headerText = document.querySelector(".header_text");
const gifObj = document.querySelector(".gif");

let scale = 1;
let msgIndex = 0;

const messages = [
  "No 😭",
  "Are you sure?",
  "Really sure??",
  "Pookie please... 🥺",
  "Think about it!",
  "If you say no, I will be sad",
  "I will be very sad...",
  "I will be very very sad...",
  "Ok fine, I will stop...",
  "Just kidding, say YES! ❤️"
];

noBtn.addEventListener("click", () => {

  noBtn.innerText = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;


  scale *= 1.45; 
  yesBtn.style.transform = `scale(${scale})`;


  if (scale > 5) {
      noBtn.style.display = "none";
      gifObj.style.display = "none";
      headerText.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
  });

  document.body.innerHTML = `
    <div style="height:100dvh; display:flex; flex-direction:column; justify-content:center; align-items:center; background:linear-gradient(135deg, #ff9a9e, #fecfef); text-align:center;">
      <h1 style="font-size:36px; color:#d6336c; margin-bottom:20px;">Yayyy! She said YES! 💖</h1>
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" style="width:80%; max-width:300px; border-radius:15px;">
      <p style="font-size:20px; color:#555; margin-top:20px; padding:0 20px;">Best Valentine ever! ❤️</p>
    </div>
  `;
});
