// UI
// localStorage.clear();
const registerBtn = document.querySelector(".registerBtn");
const validPhoneNumber = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// email expression vallidation
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
let emailValue, phoneValue, passwordValue;
// emailValidation
email.addEventListener("focusout", (e) => {
  if (!e.target.value.match(validRegex)) {
    e.target.style.border = "2px solid rgb(248, 108, 108)";
    document.querySelector(".emailMessage").innerHTML =
      "ایمیل وارد شده صحیح نیست";
  } else {
    emailValue = e.target.value;
  }
});
// phone Validation
phone.addEventListener("focusout", (e) => {
  if (!e.target.value.match(validPhoneNumber)) {
    e.target.style.border = "2px solid rgb(248, 108, 108)";
    document.querySelector(".phoneMessage").innerHTML =
      "شماره تلفن وارد شده صحیح نیست";
  } else {
    phoneValue = e.target.value;
  }
});
password.addEventListener("focusout", (e) => {
  if (!e.target.value.match(validPassword)) {
    e.target.style.border = "2px solid rgb(248, 108, 108)";
    document.querySelector(".passwordMessage").innerHTML =
      "رمز وارد شده صحیح نیست";
  } else {
    passwordValue = e.target.value;
  }
});
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const repass = document.querySelector("#repass").value;
  if (!firstName) {
    document.querySelector("#first-name").focus();
    document.querySelector("#first-name").style.border =
      "2px solid rgb(248, 108, 108)";
  }
  if (!lastName) {
    document.querySelector("#last-name").focus();
    document.querySelector("#last-name").style.border =
      "2px solid rgb(248, 108, 108)";
  }
  if (passwordValue !== repass) {
    document.querySelector("#repass").focus();
    document.querySelector("#repass").style.border =
      "2px solid rgb(248, 108, 108)";
    document.querySelector(".repassMessage").innerHTML =
      "رمز وارد شده یکسان نیست";
  }

  if (
    firstName &&
    lastName &&
    emailValue &&
    phoneValue &&
    passwordValue &&
    passwordValue === repass
  ) {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: emailValue,
      password: passwordValue,
      phone: phoneValue,
      id: Math.trunc(Math.random() * 10 * (Math.random() * 10)),
    };

    const data = JSON.parse(window.localStorage.getItem("state"))
      ? JSON.parse(window.localStorage.getItem("state"))
      : {
          isLoggedIn: false,

          login: null,
          users: [],
          quantity: 0,
          items: [],
        };

    const users = data.users;
    users.push(user);
    const newData = {
      isLoggedIn: true,
      login: user.id,
      users: users,
      quantity: 0,
      items: [...data.items],
    };

    window.localStorage.setItem("state", JSON.stringify(newData));
    window.location.href = "./index.html";
  }
});
