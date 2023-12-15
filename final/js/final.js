let validFirst=false;
let validLast=false;
let validGender=false;
let validEmail=false;
let validPhone=false;
let validPW=false;
let validConfirmPW=false;
let validDate=false;
let indexShow=0;
function makeShowList(navMode){
    // localStorage.removeItem('showList');

    if(!("showList" in localStorage)){
        $.getJSON('show.json',function(data){
            console.log(data);
            localStorage.setItem("showList",JSON.stringify(data));
        })
    }
    var showList=JSON.parse(localStorage.getItem("showList"))
    console.log(showList);
    // for(i=0;i<showList.length;i++){
    //     $('#{}')
    // }

    for(let i=0;i<5;i++)
        $(`#product${i}`).hide();

    for(let i=0;i<showList.length;i++){
        if(navMode!="Home")
            if(showList[i]['Genre']!=navMode){
                continue;
            }
        $(`#product${i}`).show();
        $(`#thumbnailMain${i}`).css('background-image',`url(${showList[i]['thumbnail']})`);
        $(`#genre${i}`).text(`: ${showList[i]['Genre']}`);
        $(`#venue${i}`).text(`: ${showList[i]['Venue']}`);
        $(`#date${i}`).text(`: ${showList[i]['start_date'].substr(0,10)} ~ ${showList[i]['end_date'].substr(0,10)}`);
        var priceStr=": ";
        for(let seat of Object.keys(showList[i]['price'])){
            priceStr=priceStr+seat+" "+showList[i]['price'][seat]+ "KRW | ";
        }
        $(`#price${i}`).text(`${priceStr}`);
        $(`#title${i+1}`).text(`${showList[i]['name']}`);
    }
    
    // var productNo=eval("#product"+1);
    // console.log(productNo);
    // $(eval('#product'+'1')).show();
}

function checkValidName(name,inputID,alertID){
    let textPrint='';
    if(inputID.indexOf('First')!=-1)
        textPrint='First';
    else
        textPrint='Last'
    if(!/[A-Z]/.test( name[0])){
        $(alertID).text(textPrint+" name should start with a capital letter!");
        $(inputID).css('border','3px solid red');
        return false;
    }
    if(/[0-9]/.test(name)){
        $(alertID).text(textPrint+" name cannot contain numbers!");
        $(inputID).css('border','3px solid red');
        return false;
    }
    if(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g.test(name)){
        $(alertID).text(textPrint+" name cannot contain special characters!");
        $(inputID).css('border','3px solid red');
        return false;
    }
    $(inputID).css('border','3px solid white');
    $(alertID).text("");
    return true;
}

$(document).ready(function() {

    var SN;
    var clickedDate
    var Vt;
    var Rt;
    var St;
    var At;
    var Vp;
    var Rp;
    var Sp;
    var Ap;
    var selectv;
    var selectr;
    var selects;
    var selecta;
   
    // var showList=[];
    // showList.push(showInfoJson);
    // localStorage.setItem("showinfo",JSON.stringify(showList));

    makeShowList("Home");
    var Listshow = localStorage.getItem("showList");
    Listshow = JSON.parse(Listshow);
    console.log("111111");
    console.log(Listshow);
    // console.log(Listshow[0][1]['remainSeatV'][0]['seatV']);
    // console.log(Listshow[0][1]['showInfo']);
    console.log("11111");

    

    

    if("currentUser" in localStorage){
        $('#headerSignUp').hide();
        $('#headerLogin').text("Logout");
        $('#headermp').show();
    }else{
        $('#headerSignUp').show();
        $('#headerLogin').text("Login");
        $('#headermp').hide();
    }

    $('#inputSignUpFirst').on({
    keyup:function(){
        var firstName=$('#inputSignUpFirst').val();
        validFirst=checkValidName(firstName,'#inputSignUpFirst','#alertFirst');
    },
    });
    $('#inputSignUpLast').on({
        keyup:function(){
            var firstName=$('#inputSignUpLast').val();
            validLast=checkValidName(firstName,'#inputSignUpLast','#alertLast');
        },
    });

    $('input[name=gender]').change(function(){
        // $('#genderAlert').hide();
        // $('#genderInput').css('background-image','url(./assets/checkIcon.png)');
        $('#alertGender').text("");
        validGender=true;
    });

    $('#inputSignUpAge').on({
        change:function(){
            var birthDate=$(this).val();
            if(new Date(birthDate) instanceof Date && birthDate){
                $(this).css('border','3px solid white');
                $('#alertAge').text("");
                validDate=true;

            }else{
                $('#alertAge').text("Your date is invalid!");
                $(this).css('border','3px solid red');
                validDate=false;
            }
        },
    });

    $('#inputSignUpEmail').on({
        keyup:function(){
            var email=$(this).val();
            if(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)){
                $(this).css('border','3px solid white');
                $('#alertEmail').text("");
                validEmail=true;

            }else{
                $('#alertEmail').text("Your email address is invalid!");
                $(this).css('border','3px solid red');
                validEmail=false;
            }
        },
    });
 
    $('#inputSignUpPW').on({
        keyup:function(){
            var passwd=$(this).val();
            var confirmPasswd=$('#inputSignUpPW2').val();
            var lengthDet=passwd.length>=6;
            var specialDet=/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g.test(passwd);
            var numDet=/[0-9]/.test(passwd);
            var capitalDet=/[A-Z]/.test( passwd);
            var lowerDet=/[a-z]/.test( passwd);
            if(lengthDet&&numDet&&specialDet&&capitalDet&&lowerDet){
                $(this).css('border','3px solid white');
                $('#alertPW').text("");
                validPW=true;
            }else{
                $('#alertPW').text("Requirement: at least 6 characters, one capital letter,\n one lowercase letter, at least one digit and one special character!");
                $(this).css('border','3px solid red');
                validPW=false;
            }
            if(passwd==confirmPasswd){
                validConfirmPW=true;
            }else{
                validConfirmPW=false;
            }
        },
    });

    $('#inputSignUpPW2').on({
        keyup:function(){
            var passwd1=$('#inputSignUpPW').val();
            var confirmPasswd=$(this).val();
            if(passwd1==confirmPasswd){
                $(this).css('border','3px solid white');
                $('#alertPW2').text("");
                validConfirmPW=true;
            }else{
                $('#alertPW2').text("Password does not match!");
                $(this).css('border','3px solid red');
                validConfirmPW=false;
            }
        },
    });

    $('#inputSignUpPhone').on({
        keyup:function(){
            var phone=$(this).val();
            if(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/i.test(phone)){
                $(this).css('border','3px solid white');
                $('#alertPhone').text("");
                validPhone=true;

            }else{
                $('#alertPhone').text("Your phone number is invalid! format : 010-0000-0000");
                $(this).css('border','3px solid red');
                validPhone=false;
            }
        },
    });

    $('#emailLogin').on({
        keyup:function(){
            var email=$(this).val();
            if(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)){
                $(this).css('border','3px outset green');
                $('#alertLoginEmail').text("");
            }else{
                $('#alertLoginEmail').text("Your email address is invalid!");
                $(this).css('border','3px outset red');
            }
        },
    });
    $('#pwLogin').on({
        keyup:function(){
            var passwd=$(this).val();
            if(passwd.length>0){
                $(this).css('border','3px outset green');
                $('#alertLoginPW').text("");
            }else{
                $('#alertLoginPW').text("Please enter your password!");
                $(this).css('border','3px outset red');
            }
        },
        focus:function(){
            var passwd=$(this).val();
            if(passwd.length>0){
                $(this).css('border','3px outset green');
                $('#alertLoginPW').text("");
            }else{
                $('#alertLoginPW').text("Please enter your password!");
                $(this).css('border','3px outset red');
            }
        },
    });

    $('#btnSubmitSignUp').click(function(){
    var firstName=$('#inputSignUpFirst').val();
    var lastName=$('#inputSignUpLast').val();
    var gender=$('input[name=gender]:checked').val();
    var isGender=$('input[name=gender]').is(':checked');
    var email=$('#inputSignUpEmail').val();
    var passWD=$('#inputSignUpPW').val();
    var confirmPw=$('#inputSignUpPW2').val();
    var birthDate=$('#inputSignUpAge').val();
    var phoneNo=$('#inputSignUpPhone').val();
    var isAgreeTerm=$('input[name=agreeTerm]:checked').val();
    var isNew=true;
    if(firstName.length==0){
        $('#alertFirst').text("Please enter your first name!");
        $('#inputSignUpFirst').css('border','3px solid red');
    }
    if(lastName.length==0){
        $('#alertLast').text("Please enter your last name!");
        $('#inputSignUpLast').css('border','3px solid red');
    }
    if(!isGender){
        $('#alertGender').text("Please select your gender!");
    }
    if(email.length==0){
        $('#alertEmail').text("Please enter your email!");
        $('#inputSignUpEmail').css('border','3px solid red');
    }
    if(passWD.length==0){
        $('#alertPW').text("Please enter your password!");
        $('#inputSignUpPW').css('border','3px solid red');
    }
    if(confirmPw.length==0){
        $('#alertPW2').text("Please re-enter your password!");
        $('#inputSignUpPW2').css('border','3px solid red');
    }
    if(phoneNo.length==0){
        $('#alertPhone').text("Please enter your phone number!");
        $('#inputSignUpPhone').css('border','3px solid red');
    }
    if(birthDate.length==0){
        $('#alertAge').text("Please select your birth date!");
        $('#inputSignUpAge').css('border','3px solid red');
    }
    if(!isAgreeTerm){
        $('#alertTerm').text("You cannot sign up if you do not agree terms!");
    }

    if(validFirst&&validLast&&validGender&&validEmail&&validPW&&validConfirmPW&&validPhone&&isAgreeTerm){
        console.log(firstName,lastName,gender,email,passWD,confirmPw,birthDate,phoneNo);
        
        userInfo={
            "firstName":firstName,
            "LastName":lastName,
            "birthDate":birthDate,
            "gender":gender,
            "phone":phoneNo,
            "email":email,
            "password":passWD,
            "card":[
            ],
            "reserv":[
            ]
        };
        var newList=[];
        if("userInfo" in localStorage){
            newList=JSON.parse(localStorage.getItem("userInfo"));
        }
        for(let tempList of newList){
            console.log(tempList);
            if(tempList['email']==email){
                $('#alertSubmit').text("you are already registered in!");
                isNew=false;
            }
        }
        if(isNew){
            newList.push(userInfo);
            localStorage.setItem("userInfo",JSON.stringify(newList));
            $('#loginBoard').hide();
            $('#registeredMSG').show();
        }

        console.log(JSON.parse(localStorage.getItem("userInfo")));
        // $('#signUpBody').hide();
        // $('#signUpGuide').hide();
        // $('#signUpSubject').text('You are signed up.');
    }

    });

    $('#btnSubmitLogin').click(function(){
        var email=$('#emailLogin').val();
        var passwd=$('#pwLogin').val();
        var isLogin=false;
        newList=JSON.parse(localStorage.getItem("userInfo"));
        for(let tempList of newList){
            if(tempList['email']==email){
                if(tempList['password']==passwd){
                    isLogin=true;
                }
            }
        }
        console.log(email,passwd)

        if(isLogin){
            console.log("login!!");
            localStorage.setItem('currentUser',email);
            opener.location.reload();
            window.close();
        }else{
            $('#alertLogin').text("Please check your ID/PW!")
        }

    });



    $("#headerSignUp").on("click",function(){
        var options = 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no,scrollbars=yes';
        window.open("./signUp.html",'signUp',options);
    });

    $("#headerLogin").on("click",function(){

        if($("#headerLogin").text()=="Login"){
            var options = 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no,scrollbars=yes';
            window.open("./login.html",'Login',options);
        }else{
            localStorage.removeItem('currentUser');
            location.reload(true);
        }

    });

    // main 
    var CU = localStorage.getItem('currentUser');
    console.log(CU);
    var Listuser=[];
    var ULindex;
    Listuser = localStorage.getItem('userInfo');
    Listuser = JSON.parse(Listuser);
    console.log(Listuser[1]);
    $.each(Listuser,function(index,value){
        if(CU==value['email']){
            console.log(index);
            ULindex=index;
        }
    })


    $(".ticketBtn").on("click", function() {
        console.log($(this).parent().parent().parent().find('span').text());
        $('#main_section').css('display', 'none');
        $('#detail_section').css('display', 'block');
        var a = $('#title1').text();
        var a = $(this).parent().parent().parent().find('span').text();
        SN =a;
        console.log(a,Listshow);
        $.each(Listshow, function(index, value) {
            // console.log(index);
            console.log(value);
            if(a==value['name']){
                indexShow=index;
                console.log(value['price']['VIP']);
                $("#VP").text(value['price']['VIP']);
                $("#RP").text(value['price']['R']);
                $("#SP").text(value['price']['S']);
                $("#AP").text(value['price']['A']);
                $("#De_Genre").text(value['Genre']);
                $("#De_Venue").text(value['Venue']);
                $("#De_Date").text(value['start_date'] + "~" + value['end_date']);
                $("#De_RT").text(value['runningTime']);

                $("#pVP").text(value['price']['VIP']);
                $("#pRP").text(value['price']['R']);
                $("#pSP").text(value['price']['S']);
                $("#pAP").text(value['price']['A']);

                $("#detailTitle").text(a);
                $("#detailImg").attr("src", value['thumbnail']);

                Vp = value['price']['VIP'];
                Rp = value['price']['R'];
                Sp = value['price']['S'];
                Ap = value['price']['A'];
                $("#show_info").text("");
                $.each(value['showInfo'], function(index, sentence){
                    $("#show_info").append(sentence +"<br><br>");
                });
            }
            //console.log(a);
            //console.log(index);
            //console.log(value['name']);
            // 리스트 아이템 생성 var listItem = $("<li>").text(value);
            // 리스트 아이템을 ul 요소에 추가 $("#listContainer").append(listItem);
        });
    });

    $(".calendar-date").on("click", function() {
        // 클릭한 td의 text를 가져와서 출력
        clickedDate = $(this).text();
        //console.log(clickedDate);
        $(".calendar-date").css('background-color',"white");
        $(this).css('background-color',"green");
        console.log(Listshow[indexShow]['remainSeatV'][0]);
        Vt = Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatV'];
        Rt = Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatR'];
        St = Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatS'];
        At = Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatA'];
        $("#left_seat").text("VIP : " + Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatV'] + "  R : " + Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatR'] + "  S : " + Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatS'] + "  A : " + Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatA']);
        $("#pleft_seats").text("VIP : " + Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatV'] + "  R : " + Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatR'] + "  S : " + Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatS'] + "  A : " + Listshow[indexShow]['remainSeatV'][clickedDate-1]['seatA']);
    
    });

    $("#Buy_Show").on("click", function() {
        /*
        if we don't login
        window.location.href = 'login.html';
        */
        var totalv=0;
        var totalr=0;
        var totals=0;
        var totala=0;
        var total;
        $('#detail_section').css('display', 'none');
        $('#pay_section').css('display', 'block');
        $("#SV").empty();
        $("#SR").empty();
        $("#SS").empty();
        $("#SA").empty();
        for (var i = 0; i <= Vt; i++) {
            $("#SV").append("<option value='" + i + "'>" + i + "</option>");
        }
        for (var i = 0; i <= Rt; i++) {
            $("#SR").append("<option value='" + i + "'>" + i + "</option>");
        }
        for (var i = 0; i <= St; i++) {
            $("#SS").append("<option value='" + i + "'>" + i + "</option>");
        }
        for (var i = 0; i <= At; i++) {
            $("#SA").append("<option value='" + i + "'>" + i + "</option>");
        }
        
        $("#SV").on("change", function(){
            selectv = $("#SV").val();
            totalv = selectv * Vp;
            total = totalv + totalr + totals + totala;
            $("#totalv").text(total);
        });
        $("#SR").on("change", function(){
            selectr = $("#SR").val();
            totalr = selectr * Rp;
            total = totalv + totalr + totals + totala;
            $("#totalv").text(total);
        });
        $("#SS").on("change", function(){
            selects = $("#SS").val();
            totals = selects * Sp;
            total = totalv + totalr + totals + totala;
            $("#totalv").text(total);
        });
        $("#SA").on("change", function(){
            selecta = $("#SA").val();
            totala = selecta * Ap;
            total = totalv + totalr + totals + totala;
            $("#totalv").text(total);
        });
        
        console.log(Listuser[ULindex]['card']);
        $("#Card").empty();
        for (var i = 0; i < Listuser[ULindex]['card'].length; i++) {        
            $("#Card").append("<option value='" + Listuser[ULindex]['card'][i] + "'>" + Listuser[ULindex]['card'][i] + "</option>");
        }

    });


    $("#headermp").on("click", function() {
        
        
        $('#main_section').css('display', 'none');
        $('#detail_section').css('display', 'none');
        $('#pay_section').css('display', 'none');
        $('#mp_section').css('display', 'block');
        

        $('#mpId').text(Listuser[ULindex]['email']);
        $('#mpPh').text(Listuser[ULindex]['phone']);
        $('#mpCa').text("");
        $.each(Listuser[ULindex]['card'], function(index, sentence){
            $("#mpCa").append(sentence +"<br>");
        });
        console.log(Listuser[ULindex]['reserv'][2]);
        $('#mpRI').text("");
        $.each(Listuser[ULindex]['reserv'], function(index, sentence){
            $("#mpRI").append("Show : " + sentence['showId'] + "   Date : " + sentence['date'] + "<br>");
        });
        
    });

    $("#AddCard").on("click", function() {
        
        var CardN;
        CardN = $("#CardText").val();
        if (/^\d{14}$/.test(CardN)) {
            // 14자리 숫자일 때만 출력
            console.log(Listuser[ULindex]['card'])
            Listuser[ULindex].card.push(CardN);
            $('#mpCa').text("");
            $.each(Listuser[ULindex]['card'], function(index, sentence){
                $("#mpCa").append(sentence +"<br>");
            });
            localStorage.setItem("userInfo", JSON.stringify(Listuser));
            console.log(CardN)
        } else {
            alert("Check your card number");
        }
        
        
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

        var NewReser = {
            "showId": SN,
            "date":"2023-12-" + clickedDate,
            "seatV":selectv,
            "seatR":selectr,
            "seatS":selects,
            "seatA":selecta
        }
        console.log(Listuser[ULindex].reserv);
        Listuser[ULindex].reserv.push(NewReser);
        localStorage.setItem("userInfo", JSON.stringify(Listuser));
        console.log(Listuser[ULindex].reserv);

    });

    $(".navBtn").on("click", function() {
        navMode=$(this).text();
        $('#main_section').css('display', 'block');
        $('#detail_section').css('display', 'none');
        $('#pay_section').css('display', 'none');
        $('#mp_section').css('display', 'none');
        makeShowList(navMode);
    });

});