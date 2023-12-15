let validFirst=false;
let validLast=false;
let validGender=false;
let validEmail=false;
let validPhone=false;
let validPW=false;
let validConfirmPW=false;
let validDate=false;

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

    var showInfoJson =[
        {
            "showId":"12345",
            "name":"IL TENORE",
            "Genre":"Musical",
            "thumbnail":"./img/pst_1025.jpg",
            "Venue":"SKKU ConcertHall",
            "start_date":"2023-12-19",
            "end_date":"2023-12-31",
            "remainSeatV":[
                {
                    "seatV":25,
                    "seatR":1,
                    "seatS":1,
                    "seatA":123
                },
                {
    
                }
            ],
            "price":{
                "VIP":160000,
                "R":130000,
                "S":123123,
                "A":80000
            },
            "rating":"19",
            "runningTime":"160min",
            "score":9.0,
            "showInfo":[
                " [공연시간 정보]\n ",
                " 2023년 12월 19일(화) ~ 2024년 02월 25일(일) ",
                " ※ 극장, 공연제작사 및 관계사의 협의에 따라 일부 좌석이 마감되었습니다.",
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                " The release date got pushed back to early 2014",
                " You're getting far too cheeky!",
                " What's remote? - Like this? What's remote?",
                " The“ym” returns the number of remaining months past the last full year",
                " Their number remains unclear.",
                " with a valid social security number and credit card history.",
                " address and credit card number."

            ]
        },
        {
            "showId":"123452",
            "name":"IL TENORE2",
            "Genre":"Musical",
            "thumbnail":"./img/concert_bol4.png",
            "Venue":"SKKU ConcertHall",
            "start_date":"2023-04-04T00:00:00",
            "end_date":"2023-04-04T00:00:00",
            "remainSeatV":[
                {
                    "seatV":21,
                    "seatR":121,
                    "seatS":121,
                    "seatA":131
                },
                {
                    "seatV":22,
                    "seatR":122,
                    "seatS":122,
                    "seatA":132
                },{
                    "seatV":23,
                    "seatR":123,
                    "seatS":123,
                    "seatA":133
                },{
                    "seatV":24,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":25,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":26,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":27,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":28,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":29,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":20,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":211,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },
                {
                    "seatV":21,
                    "seatR":121,
                    "seatS":121,
                    "seatA":131
                },
                {
                    "seatV":22,
                    "seatR":122,
                    "seatS":122,
                    "seatA":132
                },{
                    "seatV":23,
                    "seatR":123,
                    "seatS":123,
                    "seatA":133
                },{
                    "seatV":24,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":25,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":26,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":27,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":28,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":29,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":20,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":211,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":21,
                    "seatR":121,
                    "seatS":121,
                    "seatA":131
                },
                {
                    "seatV":22,
                    "seatR":122,
                    "seatS":122,
                    "seatA":132
                },{
                    "seatV":23,
                    "seatR":123,
                    "seatS":123,
                    "seatA":133
                },{
                    "seatV":24,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":25,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":26,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":27,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":28,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                },{
                    "seatV":29,
                    "seatR":12,
                    "seatS":12,
                    "seatA":13
                }
            ],
            "price":{
                "VIP":160000,
                "R":130000,
                "S":123123,
                "A":80000
            },
            "rating":"19",
            "runningTime":"160min",
            "score":9.0,
            "showInfo": [
                " [공연시간 정보] ",
                " 2023년 12월 19일(화) ~ 2024년 02월 25일(일) "
            ]
        }
    ];
    
    var showList=[];
    showList.push(showInfoJson);
    localStorage.setItem("showinfo",JSON.stringify(showList));
    
    var Listshow = localStorage.getItem("showinfo");
    Listshow = JSON.parse(Listshow);
    console.log("111111");
    console.log(Listshow[0][1]['remainSeatV'][0]['seatV']);
    console.log(Listshow[0][1]['showInfo']);
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


    $("#ticketBtn").on("click", function() {
        $('#main_section').css('display', 'none');
        $('#detail_section').css('display', 'block');
        var a = $('#title1').text();
        SN = $('#title1').text();
        $.each(Listshow[0], function(index, value) {
            if(a==value['name']){
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
        //console.log(Listshow[0][1]['remainSeatV'][0]);
        Vt = Listshow[0][1]['remainSeatV'][clickedDate-1]['seatV'];
        Rt = Listshow[0][1]['remainSeatV'][clickedDate-1]['seatR'];
        St = Listshow[0][1]['remainSeatV'][clickedDate-1]['seatS'];
        At = Listshow[0][1]['remainSeatV'][clickedDate-1]['seatA'];
        $("#left_seat").text("VIP : " + Listshow[0][1]['remainSeatV'][clickedDate-1]['seatV'] + "  R : " + Listshow[0][1]['remainSeatV'][clickedDate-1]['seatR'] + "  S : " + Listshow[0][1]['remainSeatV'][clickedDate-1]['seatS'] + "  A : " + Listshow[0][1]['remainSeatV'][clickedDate-1]['seatA']);
        $("#pleft_seats").text("VIP : " + Listshow[0][1]['remainSeatV'][clickedDate-1]['seatV'] + "  R : " + Listshow[0][1]['remainSeatV'][clickedDate-1]['seatR'] + "  S : " + Listshow[0][1]['remainSeatV'][clickedDate-1]['seatS'] + "  A : " + Listshow[0][1]['remainSeatV'][clickedDate-1]['seatA']);
    
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

    $("#homeBtn").on("click", function() {
        $('#main_section').css('display', 'block');
        $('#detail_section').css('display', 'none');
        $('#pay_section').css('display', 'none');
        $('#mp_section').css('display', 'none');
    });

});