$(function () {
    $("#Detail").hide();
    $("#btn").click(function () {
        var mob = $('#txtMobNo');
        var email = $('#txtEmail');
        var error = $("#lblError");
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

       
        //Validation for Mobile no.
        if (mob.val() === "") {
            error.html("Number is required.").css("color", "red");
            mob.css("border-color", "red");
            return;
        }
        else if (mob.val().length < 10 || mob.val().length > 10) {
            error.html("Please enter 10 digit number.").css("color", "red");
            mob.css("border-color", "red");
            return;
        }
        else if ($.isNumeric(mob.val()) === false) {
            error.html("Please enter a number.").css("color", "red");
            mob.css("border-color", "red");
            return;
        }
        else {
            error.html("Phone number is saved.").css("color", "green");
            mob.css("border-color", "");
            

        }

        //Validation for Email id.
        if (email.val() === "") {
            error.html('Email is required').css({ "color": "red" });
            email.css({ "border-color": "red" });
            return;
        }
        else if (!emailReg.test(email.val())) {
            error.html('Please enter valid email').css({ "color": "red" });
            email.css({ "border-color": "red" });

        }

        else {
            $("#Register").hide();
            $("#Detail").show();
            $("#lblMobNo").html(mob.val());
            $("#lblEmail").html(email.val());
            $("#lblDetail").html('Thank you for your valid email and mobile number.').css({ "color": "green" });
           
        }

    });
});