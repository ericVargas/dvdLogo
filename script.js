//function bounce() {
//    let logo = document.querySelector(".logo");
//    let pos = 0;
//    let id = setInterval(frame, 10);
//    function frame() {
//        if (pos == 450) {
//            clearInterval(id);
//        } else {
//            pos++;
//            logo.style.top = pos + "px";
//            logo.style.left = pos + "px";
//        }
//    }
//}



var parent = document.getElementById('container'); 
var mover = document.querySelector('.logo');
var dir = 1;
var dist = 10;

var intervalId = setInterval(function() {
    
    var posX = parseInt(mover.style.left.replace(/px$/, '')) || 0;
    var posY = parseInt(mover.style.top.replace(/px$/, '')) || 0;
    
    posX += dir * dist;
    posY += dir * dist;
    
    if (dir == 1 && posX + mover.offsetWidth > parent.offsetWidth || posY + mover.offsetHeight > parent.offsetHeight) {
        
        posX -= posX + mover.offsetWidth - parent.offsetWidth;
        posY -= posY + mover.offsetHeight - parent.offsetHeight;
        
        dir *= -1
    
    } else if (dir == -1 && posX < 0 || posY < 0) {
        
        posX = 0;
        posY = 0;
        
        dir *= -1;
    }
    
    mover.style.left = posX + "px";
    mover.style.top = posY + "px";
    ///////////////////////////////////////////////////////////
}, 100);







//(function ($, window, undefined) {
//	$.fn.marqueeify = function (options) {
//		var settings = $.extend({
//			horizontal: true,
//			vertical: true,
//			speed: 100, // In pixels per second
//			container: $(this).parent(),
//			bumpEdge: function () {}
//		}, options);
//		
//		return this.each(function () {
//			var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
//				$el = $(this);
//
//			getSizes = function () {
//				containerWidth = settings.container.outerWidth();
//				containerHeight = settings.container.outerHeight();
//				elWidth = $el.outerWidth();
//				elHeight = $el.outerHeight();
//			};
//
//			move = {
//				right: function () {
//					$el.animate({left: (containerWidth - elWidth)}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
//						settings.bumpEdge();
//						move.left();
//					}});
//				},
//				left: function () {
//					$el.animate({left: 0}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
//						settings.bumpEdge();
//						move.right();
//					}});
//				},
//				down: function () {
//					$el.animate({top: (containerHeight - elHeight)}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
//						settings.bumpEdge();
//						move.up();
//					}});
//				},
//				up: function () {
//					$el.animate({top: 0}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
//						settings.bumpEdge();
//						move.down();
//					}});
//				}
//			};
//
//			getSizes();
//
//			if (settings.horizontal) {
//				move.right();
//			}
//			if (settings.vertical) {
//				move.down();
//			}
//
//      // Make that shit responsive!
//      $(window).resize( function() {
//        getSizes();
//      });
//		});
//	};
//})(jQuery, window);
//
//$(document).ready( function() {
//
//	$('.marquee').marqueeify({
//		speed: 300,
//		bumpEdge: function () {
//			var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
//			$('.marquee .logo').css('fill', newColor);
//		}
//	});
//});
//
//
//
