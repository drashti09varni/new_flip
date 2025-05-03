var itemData;
$(document).ready(function () {
    startTimer(500 - 120, $('#offerend-time'));
    $(".form-check").on('click', function () {
        $(".form-check").removeClass('active');
        $(this).addClass('active');
    });
    $("#back_btn").on("click", function () {
        history.back();
    });

    var selected_verient = localStorage.getItem("selected_verient");
    itemData = JSON.parse(selected_verient);
    $("#item_image").prop('src', itemData.img1);
    var name = itemData.name + " " + ((itemData.color) ? ' (' + itemData.color + ')' : '') + ((itemData.size) ? ' (' + itemData.size + ')' : '') + ((itemData.storage) ? ' (' + itemData.storage + ')' : '');
    $("#product-title").html(name);
    $(".selling_price, .payable").html("&#8377;" + itemData.selling_price);
    $(".mrp").html("&#8377;" + itemData.mrp);
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + "min " + seconds + "sec");

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


function payNow(upi_address) {
    var orderNumber = Math.floor(Math.random() * 10000000000);
    var payType = $(".form-check.active").attr('pay-type');
    var redirect_url = "";
    var site_name = "Verified Seller";
    var amt = parseFloat(itemData.selling_price).toFixed(2);
    var upi_address = UPI_ID;
    
    switch (payType) {
        case 'gpay':
            redirect_url = "tez://upi/pay?ver=01&mode=19&pa=" + upi_address + "&pn=" + site_name + "&tr=RZPPXTog5fXlvIb6Wqrv2&cu=INR&mc=4215&qrMedium=04&tn=TN_" + orderNumber + "&am=" + amt + "";
            break;

        case 'phonepe':
            redirect_url = "phonepe://pay?ver=01&mode=19&pa=" + upi_address + "&pn=" + site_name + "&tr=RZPPXTog5fXlvIb6Wqrv2&cu=INR&mc=4215&qrMedium=04&tn=TN_" + orderNumber + "&am=" + amt + "";
            break; 
                        

        case 'paytm':
            redirect_url = "paytmmp://pay?ver=01&mode=19&pa=" + upi_address + "&pn=" + site_name + "&tr=RZPPXTog5fXlvIb6Wqrv2&cu=INR&mc=4215&qrMedium=04&tn=TN_" + orderNumber + "&am=" + amt + "";
            break;           

        case 'bhim_upi':
            redirect_url = "upi://pay?ver=01&mode=19&pa=" + upi_address + "&pn=" + site_name + "&tr=RZPPXTog5fXlvIb6Wqrv2&cu=INR&mc=4215&qrMedium=04&tn=TN_" + orderNumber + "&am=" + amt + "";
            break;

        case 'whatspp_pay':
            redirect_url = "whatsapp://pay?ver=01&mode=19&pa=" + upi_address + "&pn=" + site_name + "&tr=RZPPXTog5fXlvIb6Wqrv2&cu=INR&mc=4215&qrMedium=04&tn=TN_" + orderNumber + "&am=" + amt + "";
            break;

        default:
            break;
    } 
    window.location.href = redirect_url;
}

document.getElementById("mrp").innerHTML = 'â‚¹'+new Intl.NumberFormat().format(localStorage.getItem("price"))+ '.00';
document.getElementById("selling_price").innerHTML = 'â‚¹'+new Intl.NumberFormat().format(localStorage.getItem("price"))+ '.00';

document.getElementById("mrp-footer").innerHTML = 'â‚¹'+new Intl.NumberFormat().format(localStorage.getItem("mrp"))+ '.00';
document.getElementById("selling_price-footer").innerHTML = 'â‚¹'+new Intl.NumberFormat().format(localStorage.getItem("price"))+ '.00';