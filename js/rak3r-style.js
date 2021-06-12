const containers = document.querySelector("#section2 , #section3");
const observeThis = document.querySelectorAll(".sections");
const changeThis = document.querySelectorAll(".navbar-item");

const options = {
    root: null, // it is the viewport
    threshold: 0,
    rootMargin: "-50px"
};

const observer = new IntersectionObserver(
  
  function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.id == "section1") {
          // untuk milih semua array di changeThis
          var i;
          for (i = 0; i < changeThis.length; i++) {
          changeThis[i].classList.remove("active");
      }
        }
        // pake if entry.target.id == section 2 dan 3, secara manual membuat salah satu navbar-item diatas aktif
        // console.log("IYA nomor ...") buat tes, fungsi atau tidak
        if (entry.target.id == "section2") {
          console.log("IYA nomor 2");
          // bisa atau tidak
          // console.log(changeThis[0].id);

          // tambah class active pada sectiom2
          changeThis[0].classList.add("active");

          // remove class active di section3
          changeThis[1].classList.remove("active");
          return;
        }
        if (entry.target.id == "section3") {
          console.log("IYA nomor 3");
          // bisa atau tidak
          // console.log(changeThis[1].id);
          
          // menambahkan class active pada section3
          changeThis[1].classList.add("active");

          // remove class active di section2
          changeThis[0].classList.remove("active");
          return;
        }
      }
      // buat liat, fungsi if diatas berfungsi atau tidak
      console.log(entry.target.id);
      
      
      // untuk milih semua array di changeThis
      // var i;
      // for (i = 0; i < changeThis.length; i++) {
      // changeThis[i].classList.remove("active");
      // }
    });
});

observeThis.forEach(section => {
  observer.observe(section)
});
