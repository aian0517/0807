let login = 0
let shoptext = 'shop'

$(window).scroll((e) => {
        var win_y = $(window).scrollTop()
        $('.carousel-item').css('transform', 'translateY(' + win_y * 0.6 + 'px)')
        if (win_y > 0) {
            $('nav').addClass('nav-scroll navbar-light nav-bg')
            $('nav').removeClass('navbar-dark')
        } else {
            $('nav').removeClass('nav-scroll navbar-light nav-bg')
            $('nav').addClass('navbar-dark')
        }
})
$(window).mousemove((e) => {
    var pax = e.clientX - window.innerWidth / 2
    var pay = e.clientY - window.innerHeight / 2
    $('.carousel').css('transform', 'translate(' + pax * -0.00035 + '% ,' + pay * -0.00035 + '%)')
})



var owl = $('#head-mincaruo')
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 1700,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
            margin: 2,
            dots: false,
        },
        1280: {
            items: 3
        },
    }
})

var body4owl = $('.body4-owl>.owl-carousel')
body4owl.owlCarousel({
    items: 2,
    loop: false,
    margin: 2,
    responsive: {
        0: {
            items: 1,
        },
        1080: {
            items: 2,
        }
    }
})

var body5owl = $('.body5-owl>.owl-carousel')
body5owl.owlCarousel({
    items: 3,
    loop: true,
    center: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
        1080: {
            items: 3,
        },
    }
})

$('.prev').click(function () {
    body4owl.trigger('prev.owl.carousel')
})
$('.next').click(function () {
    body4owl.trigger('next.owl.carousel')
})


$('.sun-btn').click(() => {
    $('body').toggleClass('body')
})




$('.shop1').click(() => {
    shoptext = 'shop1'
})
$('.shop2').click(() => {
    shoptext = 'shop2'
})
$('.shop3').click(() => {
    shoptext = 'shop3'
})

$('.nav-btn').click(()=>{
    if(login != 1){
        $('#login').modal('show')
    }else{
        $('#login-yes').modal('show')
    }
})

$('.login-button').click(() => {
    login = 1
    $('.nav-btn').text('會員資訊')
    $('.login-input').val('')
    $('.shop1').attr('data-bs-target','#shop1')
    $('.shop2').attr('data-bs-target','#shop2')
    $('.shop3').attr('data-bs-target','#shop3')
    $('#'+shoptext).modal('show')
    if(shoptext == 'shop'){
        $('#login-yes').modal('show')
    }
})
function shop() {
    if (login != 1) {
        $('#login').modal('show')
    }
}
$('.logout').click(() => {
    $('.nav-btn').text('會員登入')
    $('.nav-btn').attr('data-bs-target', '#login')
})


$('.shop1-submit').click(function(){
    $(this).text('您已報名此課程')
    $(this).attr('disabled','disabled')
    $('#shop-submit').modal('show')
    $('.shop-cart').append(`
    <div class="d-flex justify-content-between mb-2">
        <h5 class="shop-cart-title">詐管會-教你如何詐騙講座</h5>
        <h5>免費報名</h5>
    </div>
    `)
})

let ss = 0
$('.shop2-coruse').click(function(){
    shop2 = $(this).text()
    $('.shop2-item-btn').text(shop2)
    $('.shop2-submit').attr('data-bs-dismiss','modal')
    ss = 1
})
$('.shop2-submit').click(function(){
    if(ss != 1){
        alert('請選擇訂購方案')
    }else{
        $(this).attr('disabled','disabled')
        $('.shop2-item-btn').attr('disabled','disabled')
        $('#shop-submit').modal('show')
        $('.shop-cart').append(`
        <div class="d-flex justify-content-between mb-2">
            <h5 class="shop-cart-title">「金融被詐你活該」特訓營</h5>
            <h5>${shop2}</h5>
        </div>
        `)
    }
})

let ss2 = 0
$('.shop3-coruse').click(function(){
    shop3 = $(this).text()
    $('.shop3-item-btn').text(shop3)
    $('.shop3-submit').attr('data-bs-dismiss','modal')
    ss2 = 1
})
$('.shop3-submit').click(function(){
    if(ss2 != 1){
        alert('請選擇訂購方案')
    }else{
        $(this).attr('disabled','disabled')
        $('.shop3-item-btn').attr('disabled','disabled')
        $('#shop-submit').modal('show')
        $('.shop-cart').append(`
        <div class="d-flex justify-content-between mb-2">
            <h5 class="shop-cart-title">「媒體辨識易把肇」上課囉!</h5>
            <h5>${shop3}</h5>
        </div>
        `)
    }
})










$('.robot-btn').click(() => {
    $('.robot').toggleClass('robot-click')
})

$('.robot-submit').click(() => {
    if ($('.robot-input').val() != '') {
        $('.robot-body').append(`
        <div class="robot-content2">
            <span class="robot-text2">
                ${$('.robot-input').val()}
            </span>
        </div>
        `)
        $('.message').append(`
            <p class="message-text">${$('.robot-input').val()}</p>
        `)
        setTimeout(() => {
            $('.robot-body').append(`
        <div class="robot-content">
            <span class="robot-text">
                感謝您的詢問問題已送到留言處 
                <span class="col-org" onclick="login== 1 ?$('#login-yes').modal('show') : $('#login').modal('show')" style="cursor: pointer;">點集查看留言</span>
            </span>
        </div>
        `)
            $('.robot-body').animate({ scrollTop: $('.robot-body')[0].scrollHeight }, 'slow');
        }, 1000);
    }
    $('.robot-input').val('')

})
$('.robot-input').keypress((e) => {
    if (e.key === 'Enter') {
        $('.robot-submit').click()
    }
})

$('.body4-btn3').click(()=>{
    navigator.clipboard.writeText('http://127.0.0.1:5500/')
    $('#cc').modal('show')
})

let love1 = 0
$('.body4-btn2').click(function(){
    $(this).toggleClass('love')
    if(love1!= 1){
        $(this).find('img').attr('src','./img/love2.png')
        love1 = 1
    }else{
        $(this).find('img').attr('src','./img/愛心.png')
        love1 = 0
    }
})



let cation = 0
$('.head-icon').click(()=>{
    if('Notification' in window){
        Notification.requestPermission().then(function(permission){
            if(permission === 'granted'){
                if(cation === 0){
                    var cc = new Notification('您有新訊息',{
                        body:'感謝您~，有任何消息將通知您',
                        icon:'./img/head-icon2.png'
                    })
                    cation = 1
                }
            }
        })
    }
})