function showModal() {
    var username = document.getElementById('username-field').value.trim();
    var password = document.getElementById('password-field').value.trim();
    
    if (username.startsWith('@')) {
    
        console.log("Username:", username);
        console.log("Password:", password);
        document.getElementById('username-field').value = '';
        document.getElementById('password-field').value = '';
        
        var message = "Congratulations. You have successfully logged in!";
        alert(message);
    } else {
        alert("Username must start with '@'. Please try again.");
    }
}
