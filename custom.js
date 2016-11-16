(function($) {
    "use strict";
    var $body = $('body');
    var viewportWidth = $(window).width();
    var map = null;
    var menuLeft = document.getElementById('cbp-spmenu-s1'),
        showLeft = document.getElementById('showLeft'),
        body = document.body;
    var $hpBanner = $body.find('.slider-banner-wrapper .hp-form-handler');
    var $inBanner = $body.find('.inner-header .hp-form-handler');
    $(window).resize(function() {
        midContent();
        $body.find('.slider-banner-wrapper ul.slick-dots li button').empty();
        if (viewportWidth < 799) {
            $("#chat-bubble").hide();
        }
        if (viewportWidth < 991) {}
    });
    $(window).load(function() {
        $('.before-after-wrapper').find('.frame').twentytwenty();
        setTimeout(function() {
            $('.hp-testimonials .frame dl dt ul li, .page-testimonials dl.frame dt.child-3').find('.dotWrap').fadeIn();
            $('.blog .post').find('h4').fadeIn();
            $('.page-testimonials dl.frame dt.child-3').find('.dotWrap').fadeIn();
            $('.home-content .service-pakages-wrapper .content').fadeIn('p').fadeIn();
            $('.hp-testimonials .frame dl dt ul li, .page-testimonials dl.frame dt.child-3').find('.dotWrap').dotdotdot({
                ellipsis: '...',
                height: 58,
                width: 322,
                watch: "window"
            });
            $('.blog .post').find('h4').dotdotdot({
                ellipsis: '...',
                height: 38,
                watch: "window"
            });
            $('.page-testimonials dl.frame dt.child-3').find('.dotWrap').dotdotdot({
                ellipsis: '...',
                height: 108,
                watch: "window"
            });
            $('.home-content .service-pakages-wrapper .content').find('p').dotdotdot({
                ellipsis: '...',
                height: 160,
                watch: "window"
            });
            $body.find('.slider-banner-wrapper .slider-banner').fadeTo('700', 1);
        }, 500);
        $body.find('.slider-banner-wrapper ul.slick-dots li button').empty();
        if ($('#demoLightbox').length) {
            $('.close-btn').on('click', function() {
                $('#demoLightbox, .modal-backdrop').removeClass('in').hide();
                $('body').removeClass('lightbox-open');
            });
        }
        if (viewportWidth < 799) {
            $("#chat-bubble").hide();
        }
        if (viewportWidth < 1199) {
            addClassNameListener('fsForm2477762', 'fsCell45813796', function() {
                alert('changed!');
            });
        }
        pageLoaded = true;
    });
    $(document).ready(function() {
        function showpanel() {
            $(".tab-slider-wrapper").fadeIn(1000).css("display", "inline-block");;
        }
        setTimeout(showpanel, 2000)
        $("#cbp-spmenu-s1 ul li:not(:first-child)").find(".sub-menu").parent().css("position", "relative");
        $("#cbp-spmenu-s1 ul li:not(:first-child)").find(".sub-menu").parent().append("<i class='fa fa-plus' aria-hidden='true' style='position: absolute;right: 0px;top: 3px;color: #fff;padding:1em;cursor:pointer;'></i>");
        addClassNameListener('fsForm2477762', 'fsCell45813796', function() {
            alert('changed!');
        });
        $("#cbp-spmenu-s1 ul li:not(:first-child)").find(".sub-menu").parent().find("i").click(function() {
            var displayed = $(this).parent().find(".sub-menu").css("display");
            if (displayed == 'none') {
                var display = {
                    height: "100%",
                    opacity: "1",
                    display: "block",
                };
                $(this).parent().find(".sub-menu").css(display);
            } else {
                var display = {
                    height: "0",
                    opacity: "0",
                    display: "none",
                };
                $(this).parent().find(".sub-menu").css(display);
            }
        });
        midContent();
        $('.hp-testimonials .frame dl dt ul li, .page-testimonials dl.frame dt.child-3').find('.dotWrap').hide();
        $body.find('.acf-map').each(function() {
            map = new_map($(this));
        });
        checkSize();
        $body.find('#form-type-close').on('click', function() {
            if ($body.find('.menu-form-toggle').is(':visible')) {
                $body.find('.menu-form-toggle').fadeOut('500');
                setTimeout(function() {
                    $body.find('.mobile-form').fadeIn('500');
                }, 600);
            }
        });
        $body.find('#form-type-close2').on('click', function() {
            if ($body.find('#form-type-close2').is(':visible')) {
                $body.find('.mobile-form').fadeOut('500');
                setTimeout(function() {
                    $body.find('.menu-form-toggle').fadeIn('500');
                }, 600);
            }
        });
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

    function checkSize() {
        if (($hpBanner.css("display") == "none") || ($inBanner.css("display") == "none")) {
            $body.find('.hp-mobile-form').append($body.find('.hp-form-handler > div').detach());
        } else {
            $body.find('.hp-form-handler').append($body.find('.hp-mobile-form > div').detach());
        }
    }

    function choosePlanSize() {
        var $mlp = $('.mobile-package.finance-last-item');
        var $dlp = $('#choose-website-plan-table');
        if ($dlp.css("display") == "none") {
            $mlp.append($dlp.find('.finance-last-item').detach());
        } else {
            $dlp.find('.finance-last-item').append($mlp.detach());
        }
    }
    var toggles = document.querySelectorAll("#showLeft");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            if (this.classList.contains("is-active") === true) {
                this.classList.remove("is-active");
                $('div.body-overlay').fadeOut('10');
            } else {
                this.classList.add("is-active");
                $('div.body-overlay').fadeIn('10');
            }
            classie.toggle(this, 'active');
            classie.toggle(menuLeft, 'cbp-spmenu-open');
            disableOther('showLeft');
        });
    }

    function midContent() {
        var $item = $body.find('.mid-content');
        $item.each(function() {
            var $itemParent = $(this).parent();
            var $midItem = ($itemParent.height() - $(this).height()) / 2 + 'px';
            $(this).css({
                'padding-top': $midItem
            });
        });
    }

    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName, i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
    $body.find('.slider-banner').slick({
        dots: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 5000,
        fade: true,
        slidesToShow: 1,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $body.find('.hp-testimonials .frame').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 4000,
        fade: true,
        slidesToShow: 1,
        cssEase: 'linear',
        arrows: false,
        autoplay: true
    });
    $body.find('.image-scroll-display').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.image-scroll-wrapper'
    });
    $body.find('.image-scroll-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.image-scroll-display',
        dots: false,
        centerMode: true,
        arrows: false,
        focusOnSelect: true,
        respondTo: 'window',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $body.find('.testi-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 10000,
        fade: true,
        slidesToShow: 1,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        adaptiveHeight: true
    });
    if ($('.page-testimonials').length) {
        var $size = $body.find(".testimonials").size();
        var x = 8;
        $body.find('.testimonials:lt(' + x + ')').show();
        $body.find('#loadMore').click(function() {
            x = (x + 8 <= $size) ? x + 8 : $size;
            $body.find('.testimonials:lt(' + x + ')').show();
        });
    }
    $('.hp-testimonials').find('.close-ico').click(function() {
        $body.find('.hp-testimonials').fadeOut();
    });
    var menuWebDesign = $('.menu-web-design');
    var meetTheTeam = $('.meet-the-team-menu');
    var startUpProjects = $('.start-up-projects');
    var timeout = 0;
    var hovering = false;
    startUpProjects.fadeOut('10');
    menuWebDesign.fadeOut('10');
    meetTheTeam.fadeOut('10');
    $('#site-navigation').find('.menu-item-13 > a').on("mouseenter", function() {
        meetTheTeam.fadeOut('10');
        startUpProjects.fadeOut('10');
        hovering = true;
        menuWebDesign.stop(true, true).fadeIn('10');
        $('div.body-overlay').fadeIn('10');
        if (timeout > 0) {
            clearTimeout(timeout);
        }
    }).on("mouseleave", function() {
        resetHover();
    });
    $('#site-navigation').find('.menu-item-1233 > a').on("mouseenter", function() {
        menuWebDesign.fadeOut('10');
        meetTheTeam.fadeOut('10');
        hovering = true;
        startUpProjects.stop(true, true).fadeIn('10');
        $('div.body-overlay').fadeIn('10');
        if (timeout > 0) {
            clearTimeout(timeout);
        }
    }).on("mouseleave", function() {
        resetHover();
    });
    $('#site-navigation').find('.menu-item-28 > a').on("mouseenter", function() {
        menuWebDesign.fadeOut('10');
        startUpProjects.fadeOut('10');
        hovering = true;
        meetTheTeam.stop(true, true).fadeIn('10');
        $('div.body-overlay').fadeIn('10');
        if (timeout > 0) {
            clearTimeout(timeout);
        }
    }).on("mouseleave", function() {
        resetHover();
    });
    menuWebDesign.on("mouseenter", function() {
        hovering = true;
        startTimeout();
    }).on("mouseleave", function() {
        resetHover();
    });
    startUpProjects.on("mouseenter", function() {
        hovering = true;
        startTimeout();
    }).on("mouseleave", function() {
        resetHover();
    });
    meetTheTeam.on("mouseenter", function() {
        hovering = true;
        startTimeout();
    }).on("mouseleave", function() {
        resetHover();
    });

    function startTimeout() {
        timeout = setTimeout(function() {
            closeMenu();
        }, 500);
    }

    function closeMenu() {
        if (!hovering) {
            menuWebDesign.stop(true, true).fadeOut('10');
            meetTheTeam.stop(true, true).fadeOut('10');
            startUpProjects.stop(true, true).fadeOut('10');
            $('div.body-overlay').fadeOut('10');
        }
    }

    function resetHover() {
        hovering = false;
        startTimeout();
    }
    var $webDesign = $('.menu-web-design dl > dt').html();
    var $webDesign2 = $('.start-up-projects dl > dt').html();
    var $meetTheTeam = $('.meet-the-team-menu dl > dt').html();
    if ($('.mobile-menu').length) {
        $('.cbp-spmenu').find('#menu-item-13').append('<div class="sub-menu">' + $webDesign + '</div>');
        $('.cbp-spmenu').find('#menu-item-1233').append('<div class="sub-menu">' + $webDesign2 + '</div>');
        $('.cbp-spmenu').find('#menu-item-28').append('<div class="sub-menu">' + $meetTheTeam + '</div>');
    }
    var $tab = $body.find('#mt-tabbed');
    $tab.find('li:first-child').addClass('active');
    $('.tab-content > div:first-child').addClass('active in');
    $tab.find('a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
        setTimeout(function() {
            $(".slick-slider").slick("refresh");
        }, 200);
    });
    $body.find('#a99-instant-quote').submit(function(e) {
        var email = $(this).find('input[name="email"]').val();
        var emailvalid = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ($.trim(email) === '' || emailvalid.test($.trim(email)) === false) {
            e.preventDefault();
            $(this).find('input[name="email"]').attr('style', 'border: 1px solid red; color: red;');
        }
    });
    $body.find('#a99-instant-quote input[name="email"]').on('click', function() {
        $(this).removeAttr('style');
    });

    function new_map($el) {
        var $markers = $el.find('.marker');
        var args = {
            zoom: 16,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($el[0], args);
        map.markers = [];
        $markers.each(function() {
            add_marker($(this), map);
        });
        center_map(map);
        return map;
    }

    function add_marker($marker, map) {
        var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
        var marker = new google.maps.Marker({
            position: latlng,
            map: map
        });
        map.markers.push(marker);
        if ($marker.html()) {
            var infowindow = new google.maps.InfoWindow({
                content: $marker.html()
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }
    }

    function center_map(map) {
        var bounds = new google.maps.LatLngBounds();
        $.each(map.markers, function(i, marker) {
            var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
            bounds.extend(latlng);
        });
        if (map.markers.length == 1) {
            map.setCenter(bounds.getCenter());
            map.setZoom(16);
        } else {
            map.fitBounds(bounds);
        }
    }
    window._chatlio = window._chatlio || [];
    ! function() {
        var t = document.getElementById("chatlio-widget-embed");
        if (t && window.React && _chatlio.init) return void _chatlio.init(t, React);
        for (var e = function(t) {
                return function() {
                    _chatlio.push([t].concat(arguments))
                }
            }, i = ["configure", "identify", "track", "show", "hide", "isShown", "isOnline"], a = 0; a < i.length; a++) _chatlio[i[a]] || (_chatlio[i[a]] = e(i[a]));
        var n = document.createElement("script"),
            c = document.getElementsByTagName("script")[0];
        n.id = "chatlio-widget-embed", n.src = "https://w.chatlio.com/w.chatlio-widget.js", n.async = !0, n.setAttribute("data-embed-version", "2.0");
        n.setAttribute("data-widget-id", "deafcfc6-7cfb-4eb8-4d74-72c23b578071");
        n.setAttribute("data-start-hidden", false);
        c.parentNode.insertBefore(n, c);
        document.addEventListener('chatlio.ready', function(e) {
            var chatlioNode = e.target;
            var a99email = '';
            var a99name = '';
            var a99phone = '';
            var phoneField = document.createElement('input');
            phoneField.setAttribute('type', 'text');
            phoneField.setAttribute('name', 'phone');
            phoneField.setAttribute('placeholder', 'Phone');
            var offline = chatlioNode.getElementsByClassName("chatlio-offline-message-container")[0];
            if (typeof offline != 'undefined') {
                offline.insertBefore(phoneField, offline.childNodes[3]);
                offline.children[1].addEventListener('input', function(e) {
                    a99email = this.value;
                });
                offline.children[2].addEventListener('input', function(e) {
                    a99name = this.value;
                });
                offline.children[3].addEventListener('input', function(e) {
                    a99phone = this.value;
                });
                offline.children[4].addEventListener('click', function() {
                    _chatlio.identify(a99email, {
                        name: a99name,
                        email: a99email,
                        phone: a99phone
                    });
                });
            }
        });
    }();
    var myIntervalFunc = [];
    var myLoopData = [];
    var formChild = [];
    var submitUrl = '';
    var pageLoaded = false;
    addClassNameListener('fsForm2398147', 'fsCell43398150', function() {
        alert('changed!');
    });
    addClassNameListener('fsForm2477762', 'fsCell45813796', function() {
        alert('changed!');
    });

    function addClassNameListener(formId, elemId, callback) {
        var myInterval2 = setInterval(function() {
            if (typeof window[formId] != 'undefined') {
                clearInterval(myInterval2);
                submitUrl = window[formId].action;
                window[formId].action = '';
            }
        }, 10);
        var myInterval = setInterval(function() {
            if (typeof window[formId] != 'undefined' && typeof jQuery != 'undefined') {
                clearInterval(myInterval);
                console.log('Initializing FormStack customization..');
                var $form = jQuery('#' + formId);
                console.log('OnClick event initialized..');
                $form.find('div.fsSubmit input[type="submit"]').on('click', function() {
                    console.log('Submit Button clicked.. Setting up events..');
                    if (pageLoaded) {
                        $form.attr('action', submitUrl);
                    }
                    $form.find('.fsPage input, .fsPage textarea').each(function(k, v) {
                        myIntervalFunc[k] = function(field, k) {
                            var $field = jQuery(field);
                            return function() {
                                if ($field.closest('div').hasClass('fsValidationError')) {
                                    var closestDiv = $field.closest('div');
                                    closestDiv.find('.glyphicon-exclamation-sign').remove();
                                    closestDiv.removeClass('fieldError');
                                    closestDiv.removeClass('fsValidationError');
                                    closestDiv.addClass('fieldError');
                                } else {
                                    setTimeout(myIntervalFunc[k], 10);
                                }
                            };
                        }(this, k);
                        setTimeout(myIntervalFunc[k], 10);
                        $(this).off('click');
                        $(this).on('click', function() {
                            $(this).closest('div').find('.glyphicon-exclamation-sign').remove();
                            $(this).closest('div').removeClass('fieldError');
                            $(this).closest('div').removeClass('fsValidationError');
                        });
                    });
                });
            }
        }, 10);
    }
})(jQuery);