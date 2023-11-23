// sidebar
const menu = document.querySelector('.navbar #menu');
const nav = document.querySelector('.navbar .navbar-nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('active')
});


// photo detail
// const photoDetail = document.querySelector(".photo-detail");
// const clickPhoto = document.querySelectorAll(".detail");

// clickPhoto.forEach((clc) => {
//   clc.onclick = (e) => {
//     photoDetail.style.display = "flex";
//     e.preventDefault();
//   };
// });
const photo = document.querySelectorAll(".thumb");
const photoSrc = document.querySelector(".photo-detail img");
const photoDetail = document.querySelectorAll(".photo-detail");
for (let i = 0; i < photoDetail.length; i++) {
  const element = photoDetail[i];

photo.forEach((image, i) => {
  image.onclick = (e) => {
    photoDetail[i].style.display = "flex";
    photoSrc.src = image.getAttribute("src");
    e.preventDefault();
  };
});
}

const readmore = document.querySelectorAll(".read more");
lengkap.forEach((kap, i) => {
  kap.onclick = (e) => {
    photoDetail[i].style.display = "flex";
    e.preventDefault();
  };
});
// document.querySelectorAll(".thumb").forEach((image) => {
//   image.onclick = () => {
//     document.querySelector(".photo-detail").style.display = "flex";
//     document.querySelector(".photo-detail img").src = image.getAttribute("src");
//   };
// });
// const imag = document.querySelector(".photo-detail .open");
// const tumb = document.querySelector(".thumb");

// photoDetail.addEventListener("click", function (e) {
//   if (e.target.className == "thumb") {
//     imag.src = e.target.src;
//   }
// });
// const photoDetail = document.querySelectorAll("#photo-detail");
// for (let i = 0; i < photoDetail.length; i++) {
//   const element = photoDetail[i];
// }
// const photoBtns = document.querySelectorAll(".click-detail");
// photoBtns.forEach((btn, i) => {
//   btn.onclick = (e) => {
//     photoDetail[i].style.display = "flex";
//     e.preventDefault();
//   };
// });

// click tombol close photo detail
const btnClose = document.querySelectorAll(".close-icon");
for (let i = 0; i < photoDetail.length; i++) {
  const element = photoDetail[i];
}
btnClose.forEach((btn, i) => {
  btn.onclick = (e) => {
    photoDetail[i].style.display = "none";
    e.preventDefault();
  };
});
// const btnsClose = document.querySelectorAll(".close-icon");
// btnsClose.forEach((cls, i) => {
//   cls.onclick = (e) => {
//     photoDetail[i].style.display = "none";
//     e.preventDefault();
//   };
// });

// click diluar photo detail
window.onclick = (e) => {
  photoDetail.forEach((element, i) => {
    if (e.target === element) {
      element[i].style.display = "none";
      e.preventDefault();
    }
  });
};
// window.onclick = (e) => {
//   photoDetail.forEach((element, i) => {
//     if (e.target === element) {
//       element.style.display = "none";
//       e.preventDefault();
//     }
//   });
// };



