$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                pwcheck:true
            },
            confirm_password:{
                required:true,
                equalTo:"#pass"
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            first:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 characters"
            },
            sname:{
                required:"Enter surname name",
                minlength:"Enter atleast 4 characters"
            },
            emailAddress:{
                email: "The email should be in the format: abc@domain.tld"
            },
            first:{
                required:"Select atleast one gender"
            },
            password:{
                pwcheck:"Password should contain atleast one digit, a lower-case charecter, a uppercase-charecter and a special charecter"
            }
        }
    });
    $.validator.addMethod("pwcheck",function(value, element) {
                            return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
                            && /[a-z]/.test(value) // has a lowercase letter
                            && /\d/.test(value) // has a digit
                            && /[A-Z]/.test(value) //has a uppercase letter
                            && /[$&+,:;=?@#|'<>.^*()%!-]/.test(value) //has a special charecter
    });
})