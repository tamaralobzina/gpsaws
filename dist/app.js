'use strict';

$(document).ready(function () {
    $('#submitBtn').click(function () {
        usernameValidate();
        emailValidate();
        var pwd = passwordValidate();
        confirmPasswordValidate(pwd);
    });

    function usernameValidate() {
        var username = $('#username').val();
        if (username === "") {
            $('#usernameError').html("Username is required");
        }

        if ($('#username').val().length < 3) {
            $('#usernameError').html("Username is required to be at least 3 characters");
        }
        console.log(username);
    }

    function emailValidate() {
        var email = $('#email').val();
        if (email === "") {
            $('#emailError').html("Email is required");
        }
        if (!validateEmail(email)) {
            $('#emailError').html("Valid Email address is required");
        }
        console.log(email);
    }

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    function passwordValidate() {
        var password = $('#password').val();
        if (password === "") {
            $('#passwordError').html("Password is required");
        }
        // console.log(password);
        return password;
    }

    function confirmPasswordValidate(password) {
        var passwordConfirm = $('#confirmPassword').val();
        if (password !== passwordConfirm) {
            $('#confirmPasswordError').html("Password does not match");
        } else if (password === passwordConfirm) {
            return false;
        }
        console.log(password);
        console.log(passwordConfirm);
    }
});

//Form currency select

var currency = $('#currency');
var currencyArr = [{
    id: 'hryvna',
    name: 'Hryvna'
}, {
    id: 'nzd',
    name: 'NZD'
}, {
    id: 'aud',
    name: 'AUD'
}];

function chooseCurrency() {
    for (var i = 0; i < currencyArr.length; i++) {
        var child = document.createElement('option'); //the dropdown
        child.setAttribute('value', currencyArr[i].id);
        child.innerHTML = currencyArr[i].name;
        currency.append(child);
    }
}

$('#changeMeBtn').click(function () {
    console.log(currency.selected);
});

chooseCurrency();