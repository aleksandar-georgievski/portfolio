$(document).ready(function () {

    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        autoStart: true,
        delay: 60
    });

    typewriter.typeString(" <h1 class='display-4'>  Hi,</h1>")
        .pauseFor(700)
        .typeString(" <h1 class='display-4'> I'm <span id='myName'>Aleksandar</span></h1>")
        .pauseFor(1500)
        .typeString("I'm a full stack web designer,")
        .pauseFor(500)
        .deleteChars(10)
        .pauseFor(800)
        .typeString("<strong class='display-5' style='color: #E1253B;'> developer</strong>, and I'm currently looking for <strong class='display-5' style='color: #E1253B;'>job</strong>")
        .pauseFor(500)
        .deleteChars(4)
        .typeString("<strong class='display-5' style='color: #E1253B;'> internship</strong>")
        .pauseFor(500)
        .typeString("<strong class='display-5' style='color: #E1253B;'> . . .</strong>")
        .start();

    function showButton() {

        let btnHead = document.getElementsByClassName('.btn-head');
        $('.btn-head').css('display', 'block');
    }
    setTimeout(showButton, 16000);


    $('.uxDesign').click(function () {
        $('.hidden-text').html(" <strong class='bold-text'>UI/UX Design</strong> <p class='text-appear'>User scenario, sitemap, wireframes and interactive prototypes. All steps used to design outstanding visual web project to create intuitive digital experience.</p>");
    });

    $('.webDev').click(function () {
        $('.hidden-text').html(" <strong class='bold-text'>Web Developing</strong> <p class='text-appear'>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>");
    });

    $('.wordpress').click(function () {
        $('.hidden-text').html(" <strong class='bold-text'>Wordpress</strong> <p class='text-appear'>I create Wordpress Websites, and the reason is simple: YOU can easily update every piece of content, turn sections on or off and so much more.</p>");
    });

    $('.gameFood').click(function () {
        $('.hidden-text').html(" <strong class='bold-text'>Game & Food</strong> <p class='text-appear'>I like #hashtags, because they look like waffles</p>");
    });


    // Adding Active class
    $('.skill-items').click(function () {
        $('.skill-items').removeClass('active');
        $(this).addClass('active');
    });


    AOS.init({
        duration: 1200,
    })


    //RELLAX
    var rellax = new Rellax('.rellax', {
        callback: function (position) {

        }
    });



    


});