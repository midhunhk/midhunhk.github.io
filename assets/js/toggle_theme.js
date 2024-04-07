// <button id="toggle-theme-button">Toggle Theme</button>

const toggleTheme = () => {
    const body = document.querySelector('body');
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
};

// Example: Toggle theme on button click
const toggleButton = document.getElementById('toggle-theme-button');
toggleButton.addEventListener('click', toggleTheme);