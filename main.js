const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = document.getElementById('i');

menuBtn.addEventListener("click",(e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click",(e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const ScrollRevealOption ={
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1",{
    ...ScrollRevealOption,
});
ScrollReveal().reveal(".header_container form",{
    ...ScrollRevealOption,
    delay:500
});
ScrollReveal().reveal(".header_container img",{
    ...ScrollRevealOption,
    origin:"right",
    delay:1000,
});


ScrollReveal().reveal(".range_card",{
    duration:1000,
    interval:500,
});
ScrollReveal().reveal(".location_image img",{
    ...ScrollRevealOption,
    origin:"right",
    delay:500
});
ScrollReveal().reveal(".location_content .section_header",{
    ...ScrollRevealOption,
    delay:500
});
ScrollReveal().reveal(".location_content p",{
    ...ScrollRevealOption,
    delay:1000
});
ScrollReveal().reveal(".location_content .location_btn",{
    ...ScrollRevealOption,
    delay:1500
});


const selectCards = document.querySelectorAll(".select_card");
selectCards[0].classList.add("show_info");

const price = ["255", "455", "275", "625", "395"];
const priceEl = document.getElementById("select-price");

function updateSwiperImage(swiper) {
  const index = swiper.realIndex; // ใช้ realIndex สำหรับ slide ที่แสดงผล
  priceEl.innerText = price[index];
  selectCards.forEach((item) => {
    item.classList.remove("show_info");
  });
  selectCards[index].classList.add("show_info");
}

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true, // แก้ไขตัวพิมพ์ผิด
  slidesPerView: "auto",
  coverflowEffect: { // แก้ไขตัวพิมพ์ผิด
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },
  on: {
    slideChangeTransitionStart: function () {
      updateSwiperImage(this); // ส่ง Swiper instance ไปในฟังก์ชัน
    },
  },
});

ScrollReveal().reveal(".story_card",{
  ...ScrollRevealOption,
  interval:500,
});

const banner = document.querySelector(".banner_wrapper");

// ดึง children ต้นฉบับเพียงครั้งเดียว
const bannerContent = Array.prototype.slice.call(banner.children);

bannerContent.forEach(item => {
  const duplicateNode = item.cloneNode(true); // ทำซ้ำโหนด
  duplicateNode.setAttribute("aria-hidden", true); // ตั้งค่า aria-hidden สำหรับโหนดซ้ำ
  banner.appendChild(duplicateNode); // เพิ่มโหนดใหม่ใน banner
});


ScrollReveal().reveal(".download_image img",{
  ...ScrollRevealOption,
  origin:"right",
});
ScrollReveal().reveal(".download .section_header",{
  ...ScrollRevealOption,
  delay:500
});
ScrollReveal().reveal(".download_links",{
  ...ScrollRevealOption,
  delay:1000
});
