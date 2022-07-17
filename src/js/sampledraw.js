const proContainer = document.querySelector("#product-review-container");
let flag = false;
const allProducts = document.querySelectorAll(".product");
allProducts.forEach((product) =>
  product.addEventListener("click", (e) => {
    flag = true;
    const price = +document.querySelector(".newPrice").textContent;

    proContainer.innerHTML = `
    <section class="product">
    <div class="innerSlider">
        <span class="closeInnerSlider"><i class='bx bx-window-close' ></i></span>
        <div class="top">
            <img class="inner-image" src="./src/images/954103.jpg" alt=""><img class="inner-image" src="./src/images/953609.jpg" alt=""><img class="inner-image" src="./src/images/75385.jpg" alt=""><img class="inner-image" src="./src/images/75383.jpg" alt="">
        </div>
        <div class="container"><img class="container-image" src="./src/images/954103.jpg" alt=""></div>
       
    </div>
    <div class="innerSliderOverLay"></div>
      <div class="product-slider">
        <img class="slide"  src="./src/images/10218.jpg" alt="slide 1" class="slide">
        <img class="slide"  src="./src/images/75383.jpg" alt="slide 2" class="slide">
        <img  class="slide" src="./src/images/75385.jpg" alt="slide 1" class="slide">
        <img class="slide"  src="./src/images/954103.jpg" alt="slide 1" class="slide">
        <button class="slider__btn slider__btn-left">
            <i class='bx bx-chevron-left'></i>
        </button>
        <button class="slider__btn slider__btn-right">
            <i class='bx bx-chevron-right'></i>
        </button>
    </div>
      <div class="product-information">
          <div class="header">
              <h3>تونیک زنانه رنگ قه.ه ای مدل 232234</h3>
              <div class="controls">
                 
                  <div class="controls-options">
                    <label for="size">سایز</label>  
                    <select name="size" id="size">
                         
                          <option value="S">SMALL</option>
                          <option value="M">MEDIUM</option>
                          <option value="L">LARGE</option>
                      </select>
                    <label for="num">تعداد</label>  
                    <select name="num" id="num">
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                      </select>
                      
                  </div>
                  <p class="itemPrice">${price} <span> تومان</span></p>
                  <a href="#" class="addToCartBtn btn btn-danger">افزودن به سبد</a>
              </div>
          </div>
          <article class="content">
            <div class="info">
            <p>جزئیات</p>
            <p>رایط فعلی
                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
            </div>
            <div class="info">
                <p> جزئیات نکه داری محصول</p>
            <p>رایط فعلی
                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
            </div>
            <div class="info">
                <p>توضیحات جنس محصول</p>
                <p>رایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
            </div>
          </article>
      </div>
  </section>
  <section id="tabbedComponent">
      <div class="tabs">
        <button
        class=" operations__tab operations__tab--1 "
        data-tab="1"
      >
       توضیحات محصول
      </button>
      <button class="operations__tab operations__tab--2 operations__tab--active" data-tab="2">
       دیدگاه کاربراان (3نظر)
      </button>
      
      </div>
      <article class="information operations__content operations__content--1 ">
        <div class="info">
            <p>جزئیات</p>
            <p>رایط فعلی
                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
            </div>
        <div class="info">
            <p>جزئیات</p>
            <p>رایط فعلی
                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
            </div>
        <div class="info">
            <p>جزئیات</p>
            <p>رایط فعلی
                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
            </div>
        <div class="info">
            <p>جزئیات</p>
            <p>رایط فعلی
                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
            </div>
            <div class="info">
                <p> جزئیات نکه داری محصول</p>
            <p>رایط فعلی
                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
            </div>
            <div class="info">
                <p>توضیحات جنس محصول</p>
                <p>رایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
            </div>
      </article>
      <article class="oponions operations__content operations__content--2 operations__content--active">
          <div class="oponion">
            <div class="title">
                <h4>موسی محمدی</h4>
                <span>در تاریخ 19 دی 1400</span>
            </div>
            <p class="message">رایط فعلی
              تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
          </div>
          <div class="oponion">
            <div class="title">
                <h4>علی ولی محمدی</h4>
                <span>در تاریخ 29 مهر 1401</span>
            </div>
            <p class="message">رایط فعلی
              تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
              </div>
          <div class="oponion">
            <div class="title">
                <h4>موسی محمدی</h4>
                <span>در تاریخ 19 دی 1400</span>
            </div>
            <p class="message">رایط فعلی
              تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای</p>
          </div>
          
      </article>
  </section>
  
  <section id="oponion-form">
      <form class="form">
          <div class="top">
              <input placeholder="شماره تلفن" type="tel" name="phone" id="phone">
              <input placeholder="نام" type="text" name="name" id="name">
          </div>
          <textarea placeholder="دیدگاه شما در مورد این محصول" name="message" id="message" rows="5"></textarea>
          <input id="submit" type="submit" value="ارسال دیدگاه" class="btn btn-succes">
      </form>
  </section>
    `;
    const sliderContainerImges = document.querySelectorAll(".slide");
    const innerSlider = document.querySelector(".innerSlider");
    const innerSliderOverlay = document.querySelector(".innerSliderOverLay");
    const closeInnerSlider = document.querySelector(".closeInnerSlider");
    const innerSlderImages = document.querySelectorAll(".inner-image");
    const innerSliderContainerImage =
      document.querySelector(".container-image");
    const tabs = document.querySelectorAll(".operations__tab");
    const tabsContainer = document.querySelector(".tabs");
    const tabsContent = document.querySelectorAll(".operations__content");
    // Slider
    const slider = function () {
      const slides = document.querySelectorAll(".slide");
      const btnLeft = document.querySelector(".slider__btn-left");
      const btnRight = document.querySelector(".slider__btn-right");

      let curSlide = 0;
      const maxSlide = slides.length;

      // Functions

      const goToSlide = function (slide) {
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
        );
        // setInterval(() => {
        //   goToSlide(1);
        // }, 4000);
      };

      // Next slide
      const nextSlide = function () {
        clearInterval();
        if (curSlide === maxSlide - 1) {
          curSlide = 0;
        } else {
          curSlide++;
        }

        goToSlide(curSlide);
      };

      const prevSlide = function () {
        if (curSlide === 0) {
          curSlide = maxSlide - 1;
        } else {
          curSlide--;
        }
        goToSlide(curSlide);
      };

      const init = function () {
        goToSlide(0);
      };
      setInterval(() => {
        nextSlide();
      }, 3000);
      init();

      // Event handlers
      btnRight.addEventListener("click", nextSlide);
      btnLeft.addEventListener("click", prevSlide);

      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") prevSlide();
        e.key === "ArrowRight" && nextSlide();
      });
    };
    slider();
    // inner Slider
    sliderContainerImges.forEach((sliderContainer) =>
      sliderContainer.addEventListener("click", (e) => {
        console.log(123);

        innerSlider.style.display = "grid";
        innerSliderOverlay.style.display = "grid";
      }),
    );

    innerSliderOverlay.addEventListener("click", () => {
      innerSlider.style.display = "none";
      innerSliderOverlay.style.display = "none";
    });
    closeInnerSlider.addEventListener("click", () => {
      console.log(1);
      innerSlider.style.display = "none";
      innerSliderOverlay.style.display = "none";
    });
    innerSlderImages.forEach((img) =>
      img.addEventListener("click", () => {
        innerSliderContainerImage.src = `${img.getAttribute("src")}`;
      }),
    );
    // tabbed component for oponions and informaation o product
    tabsContainer.addEventListener("click", function (e) {
      const clicked = e.target.closest(".operations__tab");

      // Guard clause
      if (!clicked) return;

      // Remove active classes
      tabs.forEach((t) => t.classList.remove("operations__tab--active"));
      tabsContent.forEach((c) =>
        c.classList.remove("operations__content--active"),
      );

      // Activate tab
      clicked.classList.add("operations__tab--active");

      // Activate content area
      document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
    });
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

    e.preventDefault();
  }),
);
if (proContainer.querySelector(".product")) {
  // slider
  // select UI elemtns
}
// fake data
// localStorage.clear();
