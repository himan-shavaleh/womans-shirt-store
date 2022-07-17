// select UI elements
const message = document.querySelector("#message");
const name = document.querySelector("#name");
const oponionsContainer = document.querySelector(".oponions");
const phone = document.querySelector("#phone");
const sendOpoBtn = document.querySelector("#submit");
console.log(phone);
sendOpoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const messageInput = message.value;
  const nameInput = name.value;
  const now = new Date();
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  // const locale = navigator.language;
  // console.log(locale);

  const date = new Intl.DateTimeFormat("per-IR", options).format(now);
  const arr = date.split(" ");

  if (nameInput && messageInput && phone.value) {
    const markup = `
      <div class="oponion">
      <div class="title">
          <h4>${nameInput}</h4>
          <span>در تاریخ ${arr[3]} ${arr[2]} ${arr[1]} ${arr[0]}</span>
      </div>
      <p class="message">${messageInput}</p>
    </div>
      `;
    oponionsContainer.insertAdjacentHTML("beforeend", markup);
  }
  if (!nameInput) {
    name.focus();
  }
  if (!phone.value) {
    phone.focus();
  }
  if (!messageInput) {
    message.focus();
  }
});
