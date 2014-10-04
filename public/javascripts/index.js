$(document).ready(function() {

    var imgSrc = "";

    $('.image').on('click', function() {
        var that = this;
        $('.image').css('border', '0px');
        $(that).css('border', "5px solid green");
        imgSrc = $(that).attr('src');
    });

//    $("#submit").on('click', function () {
////        var myEmail = $("#myEmail").val();
//        var theirEmail = $("#theirEmail").val();
//        var message = $("#message").val();
//
////        console.log("Image: "+ imgSrc);
////        console.log("Email: "+ myEmail);
//        console.log("toEmail: "+ theirEmail);
//        console.log("Messgae: "+ message);
//
//        if(theirEmail === '' || message ==='' ) {
//            alert("you must complete the form");
//            return;
//        } else {
//            alert("ok to proceed with ajax"); //ajax code in else statement
//
//            $.ajax({
//                url: '/sendMail',
//                type: 'POST',
//                data: {'messgae': message, 'theirEmail': theirEmail},
//                dataType: 'json'
//            }).done(function () {
//                alert("done");
//            });
//        }
//    });
});
//
////    /' + theirEmail + '/' +  message