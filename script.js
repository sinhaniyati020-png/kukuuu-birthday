const screens = document.querySelectorAll(".screen");
const intro = document.getElementById("intro");
const passwordWorld = document.getElementById("passwordWorld");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const feedback = document.getElementById("feedback");
const passwordCard = document.getElementById("passwordCard");
const startAdventure = document.getElementById("startAdventure");
const surprisePanel = document.getElementById("surprisePanel");
const surpriseContent = document.getElementById("surpriseContent");
const backToGifts = document.getElementById("backToGifts");
const finalShortcut = document.getElementById("finalShortcut");
const restartBtn = document.getElementById("restartBtn");

function showScreen(id){
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0,0);
}

setTimeout(() => {
  intro.classList.add("hidden");
  passwordWorld.classList.remove("hidden");
  passwordInput.focus();
}, 2600);

function checkPassword(){
  const answer = passwordInput.value.trim();

  if(answer === "50924"){
    feedback.textContent = "WAIT... YOU ACTUALLY KNOW IT?! 😳✨";
    submitPassword.disabled = true;
    submitPassword.textContent = "ACCESS GRANTED 💗";

    setTimeout(() => {
      showScreen("birthdayScreen");
    }, 1400);
  } else {
    feedback.textContent = "BLEHHH 😛 WRONGGGG! Try again, silly human 😼";
    passwordCard.classList.remove("shake");
    void passwordCard.offsetWidth;
    passwordCard.classList.add("shake");
    passwordInput.value = "";
    passwordInput.focus();
  }
}

submitPassword.addEventListener("click", checkPassword);
passwordInput.addEventListener("keydown", e => {
  if(e.key === "Enter") checkPassword();
});

startAdventure.addEventListener("click", () => {
  showScreen("giftScreen");
  finalShortcut.classList.remove("hidden");
});

document.querySelectorAll(".gift").forEach(gift => {
  gift.addEventListener("click", () => openGift(gift.dataset.gift));
});

function openGift(type){
  surprisePanel.classList.remove("hidden");

  if(type === "message"){
    surpriseContent.innerHTML = `
      <div class="message-surprise">
        <div class="mail">💌</div>
        <h2>A tiny message for you...</h2>
        <p>
          Happy birthdayyy, Kukuuu! 🥺💗<br>
          I hope you know how special you are to me.
          This is only the beginning of your little surprise world.
        </p>
        <div class="cat-line">🐱 meow meowww 🐱</div>
      </div>`;
  }

  if(type === "cats"){
    surpriseContent.innerHTML = `
      <div class="cat-couple">
        <h2>Look who came to celebrate... 👀</h2>
        <div class="couple-cats">
          <div class="round-cat">🐱</div>
          <div class="love-heart">♥</div>
          <div class="round-cat">🐱</div>
        </div>
        <div>
          <span class="meow">meow...? 🥺</span>
          <span class="meow">MEOW MEOWWWW!! 💗</span>
        </div>
        <p class="memory-note">Two silly little cats. Totally not us. Definitely not. 😼</p>
      </div>`;
  }

  if(type === "memories"){
    surpriseContent.innerHTML = `
      <div class="memories">
        <h2>Our little memory corner 📸</h2>
        <div class="memory-grid">

  <img src="images/photo1.jpg.png" class="memory-photo">

  <img src="images/photo2.jpg.png" class="memory-photo">

  <img src="images/photo3.jpg.png" class="memory-photo">

</div>
          <p class="memory-note">
            I love how much time we have spent together, 
            and I hope we can make every moment count. 
            Thankyou for being my man and for being the bestest boyfriend ever. I love you so much.

           </p>
        </div>
      </div>`;
  }

  surprisePanel.scrollIntoView({behavior:"smooth", block:"center"});
}

backToGifts.addEventListener("click", () => {
  surprisePanel.classList.add("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
});

finalShortcut.addEventListener("click", () => {
  showScreen("finalScreen");
  finalShortcut.classList.add("hidden");
});

restartBtn.addEventListener("click", () => {
  passwordInput.value = "";
  feedback.textContent = "";
  submitPassword.disabled = false;
  submitPassword.textContent = "SUBMIT ✦";
  passwordWorld.classList.add("hidden");
  intro.classList.remove("hidden");
  showScreen("passwordScreen");

  setTimeout(() => {
    intro.classList.add("hidden");
    passwordWorld.classList.remove("hidden");
  }, 1800);
});
