const elements = document.querySelectorAll(
'.features, .courses, .teachers, .testimonials, .contact, .about');

elements.forEach(el=>{
    el.classList.add('fade-up');
});

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
    threshold:0.15
});

elements.forEach(el=>{
    observer.observe(el);
});