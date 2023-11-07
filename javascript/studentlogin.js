

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
document.getElementById('toggle-button').addEventListener("click", function () {
    let a = document.getElementById('toggle-button').innerText;
    document.getElementById('hide-text').classList.toggle('show');
    if (a == "See More . . .") {
        document.getElementById('toggle-button').innerText = "Show Less . . .";
    }
    else {

        document.getElementById('toggle-button').innerText = "See More . . .";
    }
})
document.getElementById('toggle-button1').addEventListener("click", function () {
    let a = document.getElementById('toggle-button1').innerText;
    document.getElementById('hide-text1').classList.toggle('show');
    if (a == "See More . . .") {
        document.getElementById('toggle-button1').innerText = "Show Less . . .";
    }
    else {

        document.getElementById('toggle-button1').innerText = "See More . . .";
    }
})

function checkScreenOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        document.querySelector('.web-link').innerHTML = " Sudhir College "
    } else if (window.matchMedia("(orientation: landscape)").matches) {
        document.querySelector('.web-link').innerHTML = "Sudhir College Of Education "
    }
}
function Arrow() {
    if (window.scrollY >= 200) {
        document.getElementById('arrow').style.display = "block";
    }
    else {
        document.getElementById('arrow').style.display = "none";
    }
}
document.getElementById('arrow').addEventListener("click",function()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
})