$().ready(function () {
    // jQuery UI Features
    $("#accordion").accordion();

    $("#form-area").dialog({
        autoOpen: false,
        width: 400,
        show: {
            effect: "puff",
            duration: 500,
        },
        hide: {
            effect: "fold",
            duration: 500,
        },
        modal: true,
    });

    $("#use").on("click", function (e) {
        $("#form-area").dialog("open");
        e.preventDefault();
    });

    $("#form-area").validate({
        rules: {
            fullname: "required",
            email: {
                required: true,
                email: true,
            },
            url: {
                url: true,
            },
            password: {
                required: true,
                min: 6,
                max: 24,
            },
            confirm_password: {
                equalTo: "#password",
            },
            phone: {
                required: true,
                number: true,
            },
        },
        messages: {
            fullname: " You need to enter your full name",
            email: {
                required: " Please input your email address",
                email: "Please check your email format",
            },
            url: " Please enter a valid URL",
            password: " Please enter a password",
            confirm_password: " Please confirm password",
            phone: {
                required: " Please enter your phone number",
                number: " Enter a valid phone number",
            },
        },
    });
});
