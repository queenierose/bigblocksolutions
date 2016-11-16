(function($) {
    "use strict";
    var $body = $('body');
 
    $(window).resize(function() {
      
    });
    $(window).load(function() {
        
    });
    $(document).ready(function() {
        function showpanel() {
            $(".tab-slider-wrapper").fadeIn(1000).css("display", "inline-block");
        }
        setTimeout(showpanel, 2000);
        var $btn = $('.tab-slider-wrapper').find('dl');
        var $sbtn = $btn.find('.switcher');
        var $mf = $body.find('.choose-website-plan-table-mobile');
        $(".tab-slider-wrapper").on('click', function() {
            if ($btn.find('dt:first-child').hasClass('green-text')) {
                $btn.find('dt:first-child').removeClass('green-text');
                $btn.find('dt:last-child').addClass('orangeText');
                $sbtn.css({
                    'text-align': 'right',
                    'background-color': '#ff5c0c'
                });
                $('#choose-website-plan-table').addClass('finance-tab');
                $('.choose-website-plan').find('.desc').hide();
                $('.choose-website-plan').find('.desc2').show();
                if ($('#choose-website-plan-table').length > 0) {
                    $('.finance-your-website-header').hide();
                    $('.website-packages-header').show();
                }
                if ($mf.length > 0) {
                    $body.find('.mobile-finance').hide();
                    $body.find('.mobile-package').show();
                }
                midContent();
                addClassNameListener('fsForm2477762', 'fsCell45813796', function() {
                    alert('changed!');
                });
            } else if ($btn.find('dt:last-child').hasClass('orangeText')) {
                $btn.find('dt:last-child').removeClass('orangeText');
                $btn.find('dt:first-child').addClass('green-text');
                $sbtn.css({
                    'text-align': 'left',
                    'background-color': '#39b54a'
                });
                $('.choose-website-plan').find('.desc').show();
                $('.choose-website-plan').find('.desc2').hide();
                $('#choose-website-plan-table').removeClass('finance-tab');
                if ($('#choose-website-plan-table').length > 0) {
                    $('.finance-your-website-header').show();
                    $('.website-packages-header').hide();
                }
                if ($mf.length > 0) {
                    $body.find('.mobile-finance').show();
                    $body.find('.mobile-package').hide();
                }
                midContent();
                addClassNameListener('fsForm2477762', 'fsCell45813796', function() {
                    alert('changed!');
                });
            }
        });
        if ($body.find('#choose-website-plan-table').is(':visible')) {
            $body.find('.plain-btn').each(function() {
                $(this).on('click', function() {
                    $('.choose-plan-modal').find('#chosed-price').val($(this).parent().find('h3').text() + ' - ' + $(this).parent().find('> span').text());
                });
            });
        }
        if ($body.find('.choose-website-plan-table-mobile').is(':visible')) {
            $body.find('.plain-btn').each(function() {
                $(this).on('click', function() {
                    $('.choose-plan-modal').find('#chosed-price').val($(this).parent().find('h4').text() + ' - ' + $(this).parent().find('dd span').text());
                });
            });
        }
    });

})(jQuery);
