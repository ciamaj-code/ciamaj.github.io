// Change navbar background color when scrolling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#001a35';
    } else {
        nav.style.backgroundColor = '#001f3f';
    }
});

// Validate contact form inputs
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if(name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}