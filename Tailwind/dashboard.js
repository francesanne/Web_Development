document.addEventListener('DOMContentLoaded', function () {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const firstName = storedUser ? storedUser.firstName : '';

    const today = new Date();
    const hour = today.getHours();
    let greeting = '';
    if (hour < 12) {
        greeting = 'good morning';
    } else if (hour < 18) {
        greeting = 'good afternoon';
    } else {
        greeting = 'good evening';
    }
    document.getElementById('greeting').innerText = `Hello ${firstName}, ${greeting}!`;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.toggle('dark-theme', currentTheme === 'dark');
    }


    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme'); 
        const isDarkMode = document.body.classList.contains('dark-theme'); 
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });


    const profileIcon = document.getElementById('profileIcon');
    const dropdownContent = document.querySelector('.dropdown-content');
    profileIcon.addEventListener('click', function () {
        dropdownContent.classList.toggle('show');
    });

    const iframe = document.querySelector('iframe');
    iframe.addEventListener('load', function () {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const buttons = iframeDoc.querySelectorAll('.sidebar button');
        buttons.forEach(button => {
            button.addEventListener('click', function (event) {
                event.preventDefault(); 
                const filename = `${button.id}.html`; 
                console.log('Button clicked. Filename:', filename); 
                window.location.href = filename;
            });
        });
    });
});

window.onload = function() {
    const buttons = document.querySelectorAll('.sidebar button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
};


