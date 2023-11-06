

function register() {
    document.querySelector('#register-form').classList.remove('program22');
    document.querySelector('#login-form').classList.add('program22');
    document.querySelector('#login-form').classList.remove('program11');
    document.querySelector('#register-form').classList.add('program11');
}

function login() {
    document.querySelector('#register-form').classList.add('program22');
    document.querySelector('#login-form').classList.remove('program22');
    document.querySelector('#login-form').classList.add('program11');
    document.querySelector('#register-form').classList.remove('program11');
}

{
    const toggleButton = document.querySelector('#toggle-button');
const hideText = document.querySelector('#hide-text');

toggleButton.addEventListener('click', function() {
    if (hideText.style.display === 'none') {
        hideText.style.display = 'block';
    } else {
        hideText.style.display = 'none';
    }
});

}
{
    const toggleButton = document.querySelector('#toggle-button1');
const hideText = document.querySelector('#hide-text1');

toggleButton.addEventListener('click', function() {
    if (hideText.style.display === 'none') {
        hideText.style.display = 'block';
    } else {
        hideText.style.display = 'none';
    }
});

}