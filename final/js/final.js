$(document).ready(function() {

    $("#ticketBtn").on("click", function() {
        $('#main_section').css('display', 'none');
        $('#detail_section').css('display', 'block');

    });

    $("#Buy_Show").on("click", function() {
        /*
        if we don't login
        window.location.href = 'login.html';
        */
        
        $('#detail_section').css('display', 'none');
        $('#pay_section').css('display', 'block');

    });


    $("#headermp").on("click", function() {
        
        
        $('#main_section').css('display', 'none');
        $('#detail_section').css('display', 'none');
        $('#pay_section').css('display', 'none');
        $('#mp_section').css('display', 'block');
        
    });

    $("#subject").on("click", function() {
                
        
        $('#main_section').css('display', 'block');
        $('#detail_section').css('display', 'none');
        $('#pay_section').css('display', 'none');
        $('#mp_section').css('display', 'none');
    });

    $("#buy_now").on("click", function() {
                
        alert("Congratulations on your successful purchase. Check your my page")

        $('#main_section').css('display', 'block');
        $('#detail_section').css('display', 'none');
        $('#pay_section').css('display', 'none');
        $('#mp_section').css('display', 'none');
    });


});