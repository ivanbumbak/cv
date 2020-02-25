//Smooth scrolling on clik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Toggle visibility project description on mouseover
function toggleVisibility(id, visibility) {
    document.getElementById(id).style.display = visibility;
}