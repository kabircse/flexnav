// Generated by CoffeeScript 1.4.0

/*
	FlexNav.js 0.4.3

	Copyright 2013, Jason Weaver http://jasonweaver.name
	Released under the WTFPL license
	http://sam.zoy.org/wtfpl/

//
*/


(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $.fn.flexNav = function(options) {
    var $this, is_touch_device, resizer, settings;
    settings = $.extend({
      'breakpoint': '800',
      'animationSpeed': 'fast'
    }, options, $this = $(this), resizer = function() {
      if ($(window).width() <= settings.breakpoint) {
        $("body").removeClass("lg-screen").addClass("sm-screen");
      } else {
        $("body").removeClass("sm-screen").addClass("lg-screen");
      }
      $('.lg-screen #nav, .lg-screen #nav ul').fadeIn();
      return $('.sm-screen #nav, .sm-screen #nav ul').hide();
    }, is_touch_device = function() {
      return !!(__indexOf.call(window, 'ontouchstart') >= 0);
    }, is_touch_device() ? $('html').addClass('flexNav-touch') : $('html').addClass('flexNav-no-touch'), $(this).find("li").each(function() {
      if ($(this).has("ul").length) {
        return $(this).addClass("item-with-ul");
      }
    }), $('.menu-button').on('click', function() {
      return $this.slideToggle(settings.animationSpeed);
    }), $('.menu-button, .item-with-ul').append('<span class="touch-button"><i class="navicon">&#9660;</i></span>'), $('.touch-button').on('click', function() {
      return $(this).parent('.item-with-ul').find('>.sub-menu').slideToggle(settings.animationSpeed);
    }), $('.item-with-ul *').focus(function() {
      $(this).parent('.item-with-ul').parent().find(".open").not(this).removeClass("open");
      return $(this).parent('.item-with-ul').find('>.sub-menu').addClass("open");
    }));
    resizer();
    return $(window).on('resize', resizer);
  };

}).call(this);
