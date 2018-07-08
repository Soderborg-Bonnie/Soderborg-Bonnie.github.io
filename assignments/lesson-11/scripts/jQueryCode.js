$(function () {
    //all jQuery code here

    //from lessons 2-3
    $('#alcoveLogo').css('opacity', 0.4);
    $('.servicesBtn').css('color', '#FFF');
    $('input[name$="Val"]').css('border', '1px solid red');

    //from lesson 4
    //toggle form color
    toggleStyle = function () {
        var inputFields = $('input[type="text"]');
        if (inputFields.css('background-color') === 'rgb(255, 0, 0)') {
            // Set background color to white
            inputFields.css('background-color', 'rgb(255, 255, 255)');
        } else {
            // Set backgrounnd color to red
            inputFields.css('background-color', 'rgb(255, 0, 0)');
        }
    }
    $('#ReqAQuoteBtn').click(toggleStyle);

    //adding content
    $('.coreValues').prepend("<li><strong>This is brand new!!</strong></li>");
    $("<li><strong>This is also great!!</strong></li>").prependTo('.coreValues');

    //inserting text in form
    var nameVal = $('input[name="nameVal"]');

    function fillEmpty() {
        if (nameVal.val() == '') {
            nameVal.val('John Doe');
        }
    }
    $('#ReqAQuoteBtn').click(fillEmpty);


    //insertHTML page
    var box1 = $('.box1');
    var box2 = $('.box2');

    function leftToRight() {
        if (box2.html() == '') {
            //get content from box1 & put into box2
            //empty box1
            box2.html(box1.html());
            box1.html('');
        }
    }
    $('#leftToRight').click(leftToRight);

    function rightToLeft() {
        if (box1.html() == '') {
            //get content from box2 & put into box1
            //empty box2
            box1.html(box2.html());
            box2.html('');
        }
    }
    $('#rightToLeft').click(rightToLeft);

    //animate menu page
    $('.navigation > li').hover(function () {
        //code executes when mouse pointer is over the list item
        $(this).addClass('openSesame');
    }, function () {
        //code executes when mouse ponter leaves the item list
        $(this).removeClass('openSesame');
    });

    //toggle button page
    $('.toggleBtn').click(function () {
        $(this).toggleClass("toggleOn");
    });

    //drop down menu page
    //            $('.dropDownMenu >li').hover(function(){
    //                //mouse over
    //                $(this).children("ul").slideDown(200);
    //            },function(){
    //                //mouse out
    //                 $(this).children("ul").slideUp(200);
    //            })
    //            
    $('.dropDownMenu > li').hover(function () {
        $(this).children("ul").slideToggle(200);
    })

    //fruit basket page
    var fruitBasket = [{
            title: 'Apples',
            quantity: 20
        },
        {
            title: 'Oranges',
            quantity: 25
        },
        {
            title: 'Kiwis',
            quantity: 50
        },
        {
            title: 'Strawberries',
            quantity: 45
        },
        {
            title: 'Bananas',
            quantity: 10
        },
        {
            title: 'Mangoes',
            quantity: 5
        },
        {
            title: 'Tomatoes',
            quantity: 30
        }];

    $.each(fruitBasket, function (index, element) {
        $('.fruits').append('<li>We have ' + element.quantity + " " + element.title + '</ li>');
    });
    $('.fruits > li').each(function (index, element) {
        $(element).css('background-color', 'rgb(100,200,0)');
    })


})
