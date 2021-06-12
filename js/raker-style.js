const sectionOne = document.querySelector("#section2 > h1");
const sections = document.querySelectorAll("div.lhome > h1");

const options = {
    root: null, // it is the viewport
    threshold: 0,
    rootMargin: "-50px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('bismillah');
            return;
        }
        console.log(entry.target);
        entry.target.classList.add('bismillah');
    });
}, options);

// fungsi untuk satu seksi/selektor saja //
// observer.observe(sectionOne);
// end //

// fungsi dibawah dipakai untuk setiap seksi2 yang ada //
// mohon untuk dibuatkan fungsi forEach untuk const document.querySelectorAll(); >>> sections.forEach(sections => {};) //
sections.forEach(section => {
    observer.observe(section);
});
// end //