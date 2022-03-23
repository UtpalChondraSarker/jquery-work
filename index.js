$(document).ready(function(){
    $('.title').click(function(){
        $('.utpal').show();
    })
   
    $('.box-button').click(function(){
        $('.box') .toggle('show');
    })

    $('.shakib').click(function(){
        $('.virat').hide();
        $('.shakib-vai').show('show')
        
    })
    $('.virat').click(function(){
        $('.shakib').hide();
        $('.virat-vai').show('show')
        
    })

    // callback function

    $('.callback').click(function(){
        $('p').hide('show',function(){
            alert('the pragraph is no hidden')
        })
    })

    //qurey selector
    $('.button').click(function(){
        $('ul li:first').hide();
    });
    $('.button').click(function(){
        $('ul li:first-child').hide();
    });

    // login

    // $('#loginButton').click(function(){
    //     var password1 =$('#pass1').val();
    //     var password2 =$('#pass2').val();

    //     if(password1!= "" && password2 != ""){
    //         if(password1==password2){
    //             alert('Successfully Login')
    //         }
    //         else{
    //             alert('Password mismatch')
    //         }

    //     }
    //     else{
    //         alert('Please enter password')
    //     }


    // })
    $('#loginButton').click(function(){
        var password1 =$('#pass1').val();
        var password2 =$('#pass2').val();

        if(password1 != "" && password2 != ""){
            if(password1=password2){
                alert('Successfully Login')
            }
            else{
                alert('Worng password' )
            }
        }
        else{
            alert('Please enter password')
        }

    })

    $('.button-title').click(function(){
        var num1=parseInt($('.first-field').val());
        var num2=parseInt($('.second-field').val());
        
         $('.Result').text(num1+sum2);
    });



});

