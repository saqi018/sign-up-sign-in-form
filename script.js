// Redirect to Signup page
function goToSignup() {
    window.location.href = 'signup.html';
}

// Redirect to Signin page
function goToSignin() {
    window.location.href = 'signin.html';
}

// Add event listeners to the buttons and links
document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('signup-btn');
    const signinBtn = document.getElementById('signin-btn');
    const signupLink = document.getElementById('signup-link');
    const signinLink = document.getElementById('signin-link');

    if (signupBtn) {
        signupBtn.addEventListener('click', goToSignup);
    }

    if (signinBtn) {
        signinBtn.addEventListener('click', goToSignin);
    }

    if (signupLink) {
        signupLink.addEventListener('click', function(event) {
            event.preventDefault();
            goToSignup();
        });
    }

    if (signinLink) {
        signinLink.addEventListener('click', function(event) {
            event.preventDefault();
            goToSignin();
        });
    }
});
