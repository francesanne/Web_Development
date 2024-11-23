document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    localStorage.setItem('user', JSON.stringify({ firstName, lastName, email, password }));

    alert('Account created successfully. Redirecting to dashboard.');

    window.location.href = 'dashboard.html';
});
