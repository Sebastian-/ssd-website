$(document).ready(function () {

    $('#myform').validate({ // initialize the plugin
        rules: {
            firstname: {
                required: true,
                minlength:2
            },
            lastname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                minlength: 5
            },
            message: {
                required: true,
                minlength:5
            }
        },
        submitHandler: function() {
            window.location.replace("thanks.html");
        }
    });
    
});