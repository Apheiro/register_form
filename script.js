const password = document.querySelector('#password');
const password2 = document.querySelector('#confirmPassword');

function confirm() {
    if (password.value !== password2.value) {
        password.classList.add('error');
        password2.classList.add('error');
    } else {
        password.classList.remove('error')
        password2.classList.remove('error')
    }
}

password.addEventListener('change', confirm)
password2.addEventListener('change', confirm)

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);
