const Button = document.getElementById('search');
const Input = document.getElementById('input');

Button.addEventListener('click', () => {
    window.location.href = `https://www.google.com/search?q=${Input.value}`;
}
);
