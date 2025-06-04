document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on load
    if (currentTheme === 'light') {
        document.body.classList.add('light');
        toggle.checked = true;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        }
    });
});
