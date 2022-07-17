// fake data
// localStorage.clear();
const data = JSON.parse(window.localStorage.getItem("state"))
  ? JSON.parse(localStorage.getItem("state"))
  : {
      isLoggedIn: false,
      login: 0,
      users: [],
      quantity: 0,
      items: [],
      sumValue: 0,
    };
let cartItemsQuantity = data.quantity ? data.quantity : 0;

const submenuBtn = document.querySelector(".orders");
const submenuOrders = document.querySelector(".orders-submenu");

const closeModalBtns = document.querySelector(".close-modal");
const closeOverlayBtns = document.querySelector(".colse-modal");
const loginModal = document.querySelector("#login-modal");
const loginMenuHeader = document.querySelector(".cart-account-links");
// hide and show orders submenu event
submenuBtn.addEventListener("click", (e) => {
  submenuOrders.classList.toggle("hidden-orders-submenu");
  e.preventDefault();
});
// open and close login modal
closeOverlayBtns.addEventListener("click", () => {
  if ((loginModal.style.display = "none")) {
    loginModal.style.display = "flex";
  }
  if ((loginModal.style.display = "flex")) {
    loginModal.style.display = "none";
  }
  if ((closeOverlayBtns.style.display = "none")) {
    closeOverlayBtns.style.display = "flex";
  }
  if ((closeOverlayBtns.style.display = "flex")) {
    closeOverlayBtns.style.display = "none";
  }
});
closeModalBtns.addEventListener("click", () => {
  if ((loginModal.style.display = "none")) {
    loginModal.style.display = "flex";
  }
  if ((loginModal.style.display = "flex")) {
    loginModal.style.display = "none";
  }
  if ((closeOverlayBtns.style.display = "none")) {
    closeOverlayBtns.style.display = "flex";
  }
  if ((closeOverlayBtns.style.display = "flex")) {
    closeOverlayBtns.style.display = "none";
  }
});

// login system

const loginBtn = document.querySelector(".loginBtn");
loginBtn.addEventListener("click", (e) => {
  loginModal.style.display = "none";
  const emailORphone = document.querySelector("#userName").value;
  const pass = document.querySelector("#password").value;

  const activeUser = data.users.find(
    (user) => user.phone == emailORphone || user.email === emailORphone,
  );
  if (activeUser && activeUser.password == pass) {
    const newData = {
      isLoggedIn: true,
      login: activeUser.id,
      users: [...data.users],
      quantity: data.quantity,
      items: [...data.items],
      sumValue: data.samValu,
    };
    window.localStorage.setItem("state", JSON.stringify(newData));
    document
      .querySelector(".profile")
      .querySelector(".name-profile").innerHTML = `${activeUser.firstName}`;
    window.location.reload();
  } else {
    document.querySelector(".message").innerHTML =
      "نام کاربری یا رمز عبور اشتباه است";
  }
  e.preventDefault();
});
// open login modal wheb=n user not logged in
if (!data.isLoggedIn) {
  const openModalBtns = document.querySelectorAll(".account");
  openModalBtns.forEach((link) =>
    link.addEventListener("click", () => {
      if ((loginModal.style.display = "flex")) {
        loginModal.style.display = "none";
      }
      if ((loginModal.style.display = "none")) {
        loginModal.style.display = "flex";
      }
      if ((closeOverlayBtns.style.display = "flex")) {
        closeOverlayBtns.style.display = "none";
      }
      if ((closeOverlayBtns.style.display = "none")) {
        closeOverlayBtns.style.display = "flex";
      }
    }),
  );
}
// when page loads render UI with logged in user information or not logged in
// rendering header with logged in or

const activeUser = data.users.find((user) => user.id === data.login);
document.addEventListener("DOMContentLoaded", () => {
  if (data.isLoggedIn) {
    const headerMarkup = `
      <div class="cart-account-links">
            <a href="#" class="account btn btn-danger">
              ${activeUser.firstName}
              <i class="bx bxs-user"></i>
            </a>
            <div class="account-review hidden">
            <a href="#" class="btn btn-succes">مشاهده پروفایل</a>
            <a href="#" class="btn btn-danger logoutBtn">
                خروج از حساب
            </a>
        </div>
            <a href="#" class="cart">
            
              <i class="bx bxs-cart-add"></i>
              <span class="cart-quantity">${data.quantity || 0}</span>
     <div class="cart-review hidden">
      <div class="products">
       
        
      </div>
     
    </div>
            </a>
          </div>
       
   
    
    
      `;
    loginMenuHeader.innerHTML = "";
    loginMenuHeader.insertAdjacentHTML("afterbegin", headerMarkup);
    document.querySelector(
      ".name-profile",
    ).innerHTML = `${activeUser.firstName}`;
  }
  if (!data.isLoggedIn) {
    const headerMarkup = `
    <div class="cart-account-links">
    <a href="#" class="account account-top btn btn-danger">
      ورود
      <i class="bx bxs-user"></i>
    </a>
  
    <a href="#" class="cart">
      <i class="bx bxs-cart-add"></i>
      <span class="cart-quantity">${data.quantity || 0}</span>
      <div class="cart-review hidden">
        <div class="products"></div>
  
       
      </div>
    </a>
  </div>
      `;
    loginMenuHeader.innerHTML = "";
    loginMenuHeader.insertAdjacentHTML("afterbegin", headerMarkup);
  }
  // append cart items to cart review

  const cartProducts = document
    .querySelector(".cart-review")
    .querySelector(".products");

  const cartReview = document.querySelector(".cart-review");

  let markup;

  let sumValue = 0;
  if (data.items.length === 0) {
    cartProducts.innerHTML = `<p class="empty-cart">سبد خرید شما خالی است<i class='bx bxs-message-rounded-x' ></i></P>`;
  } else {
    data.items.forEach((item) => {
      sumValue += +item.itemPrice * +item.itemNum;
      markup = `
      <div class="product-cart">
          <img src="./src/images/banner1.jpg" alt="product 1" />
          <div class="product-information">
            <h6>محصول 1</h6>
            <p>
              <span class="quantity">${item.itemNum}</span> *
              <span class="price">${item.itemPrice}تومان</span>
            </p>
          </div>
          <button class="delete"><i class='bx bxs-trash'></i></button>
        </div>
      `;

      cartProducts.insertAdjacentHTML("beforeend", markup);
    });
    cartReview.innerHTML += `
    <div class="subtract">
        <p>جمع کل</p>
        <p class="sumValueInCart">${sumValue} تومان</p>
      </div>
      <div class="links">
        <a href="./cart.html" class="btn btn-danger ">مشاهده سبد</a>
        <a href="./cart.html" class="btn btn-succes">پرداخت</a>
      </div>
    `;
  }

  // open cart when hover or click
  const catrBtn = document.querySelector(".cart");

  catrBtn.addEventListener("click", (e) => {
    let sumVal = 0;
    if (e.target.classList.contains("bxs-trash")) {
      e.target.closest(".product-cart").remove();
      data.quantity--;
      if (data.quantity === 0) {
        cartProducts.innerHTML = `<p class="empty-cart">سبد خرید شما خالی است<i class='bx bxs-message-rounded-x' ></i></P>`;
      }
      data.items.shift();
      localStorage.setItem("state", JSON.stringify(data));
      document.querySelector(".cart-quantity").textContent = data.quantity;
      data.items.forEach((itemL) => {
        sumVal += +itemL.itemNum * +itemL.itemPrice;
      });
      data.samValu += sumVal;
      document.querySelector(".sumValueInCart").textContent = sumVal;
    } else {
      cartReview.classList.toggle("hidden");
    }
  });
  if (data.isLoggedIn) {
    document.querySelector(".logoutBtn").addEventListener("click", () => {
      const newData = {
        login: null,
        isLoggedIn: false,
        users: [...data.users],
        quantity: data.quantity,
        items: [...data.items],
        sumValue: data.sumValue,
      };
      localStorage.setItem("state", JSON.stringify(newData));
      window.location.reload();
    });
  }

  // open account information window when account logged in
  if (data.isLoggedIn) {
    const accountReview = document.querySelector(".account-review");
    document.querySelectorAll(".account").forEach((link) =>
      link.addEventListener("click", () => {
        accountReview.classList.toggle("hidden");
      }),
    );
  }
  if (!data.isLoggedIn) {
    document.querySelector(".account-top").addEventListener("click", () => {
      if ((loginModal.style.display = "flex")) {
        loginModal.style.display = "none";
      }
      if ((loginModal.style.display = "none")) {
        loginModal.style.display = "flex";
      }
      if ((closeOverlayBtns.style.display = "flex")) {
        closeOverlayBtns.style.display = "none";
      }
      if ((closeOverlayBtns.style.display = "none")) {
        closeOverlayBtns.style.display = "flex";
      }
    });
  }
});
// cart State mangment
if (document.querySelector(".addToCartBtn")) {
  const addToCartBtn = document.querySelector(".addToCartBtn");

  // add to cart event
  addToCartBtn.addEventListener("click", (e) => {
    const cartReview = document.querySelector(".cart-review");
    const quantity = document.querySelector(".quantity");
    const priceHolder = document.querySelector(".price");
    const sumInCart = document.querySelector(".sumValueInCart");
    // getting items options like size and quantity

    const size = document.querySelector("#size").value;
    const num = document.querySelector("#num").value;
    const price = +document
      .querySelector(".itemPrice")
      .textContent.split(" ")[0];
    // creating new Item with this informatio
    const item = {
      itemSize: size,
      itemNum: num,
      itemPrice: price,
      id: 13122,
    };
    // pushing that new data to state and check if it's exist in items or not
    const itemInCart = data.items.find((itemL) => itemL.id === item.id);
    const itemInCartIndex = data.items.findIndex(
      (itemL) => itemL.id === item.id,
    );

    let sumVal = 0;
    if (itemInCart) {
      data.items[itemInCartIndex].itemNum++;
      quantity.textContent = data.items[itemInCartIndex].itemNum;

      data.items.forEach((itemL) => {
        sumVal += +itemL.itemNum * +itemL.itemPrice;
      });
      data.samValu += sumVal;
      if (
        cartReview.querySelector(".subtract") &&
        cartReview.querySelector(".links")
      ) {
        cartReview.querySelector(".subtract").remove();
        cartReview.querySelector(".links").remove();
      }
      cartReview.insertAdjacentHTML(
        "beforeend",
        `
     <div class="subtract">
     <p>جمع کل</p>
     <p class="sumValueInCart">${sumVal} تومان</p>
   </div>
   <div class="links">
     <a href="./cart.html" class="btn btn-danger ">مشاهده سبد</a>
     <a href="./cart.html" class="btn btn-succes">پرداخت</a>
     </div>
 `,
      );
      data.items.forEach((itemL) => {
        sumVal += +itemL.itemNum * +itemL.itemPrice;
      });
      data.samValu += sumVal;
      if (
        cartReview.querySelector(".subtract") &&
        cartReview.querySelector(".links")
      ) {
        cartReview.querySelector(".subtract").remove();
        cartReview.querySelector(".links").remove();
      }
      cartReview.insertAdjacentHTML(
        "beforeend",
        `
     <div class="subtract">
     <p>جمع کل</p>
     <p class="sumValueInCart">${data.samValu} تومان</p>
   </div>
   <div class="links">
     <a href="./cart.html" class="btn btn-danger ">مشاهده سبد</a>
     <a href="./cart.html" class="btn btn-succes">پرداخت</a>
     </div>
 `,
      );
      document.querySelector(".cart-quantity").textContent = data.quantity;
      // UPDATE UI
    } else {
      if (document.querySelector(".empty-cart")) {
        document
          .querySelector(".cart-review")
          .querySelector(".products").innerHTML = "";
      }
      data.items.push(item);
      data.quantity++;
      const markup = `
      <div class="product-cart">
      <img src="./src/images/banner1.jpg" alt="product 1" />
      <div class="product-information">
        <h6>محصول 1</h6>
        <p>
          <span class="quantity">${item.itemNum}</span> *
          <span class="price">${item.itemPrice}تومان</span>
        </p>
      </div>
      <button class="delete"><i class='bx bxs-trash'></i></button>
    </div>
      `;
      document
        .querySelector(".cart-review")
        .querySelector(".products")
        .insertAdjacentHTML("afterbegin", markup);

      data.items.forEach((itemL) => {
        sumVal += +itemL.itemNum * +itemL.itemPrice;
      });
      data.samValu += sumVal;
      if (
        cartReview.querySelector(".subtract") &&
        cartReview.querySelector(".links")
      ) {
        cartReview.querySelector(".subtract").remove();
        cartReview.querySelector(".links").remove();
      }
      cartReview.insertAdjacentHTML(
        "beforeend",
        `
     <div class="subtract">
     <p>جمع کل</p>
     <p class="sumValueInCart">${sumVal} تومان</p>
   </div>
   <div class="links">
     <a href="./cart.html" class="btn btn-danger ">مشاهده سبد</a>
     <a href="./cart.html" class="btn btn-succes">پرداخت</a>
     </div>
 `,
      );
      document.querySelector(".cart-quantity").textContent = data.quantity;
    }

    // set data into local storage
    localStorage.setItem("state", JSON.stringify(data));
    e.preventDefault();
  });
}
// remove from cart
if (document.querySelector(".delete")) {
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.target.closest(".product-cart").remove();
      e.preventDefault();
    }),
  );
}
