if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});
$.include('js/superfish.js')
$.include('js/coin-slider.js')
$.include('js/tabs.js')
$.include('js/FF-cash.js')
$.include('js/jquery.easing.1.3.js')
$.include('js/jquery.cycle.all.min.js')
$.include('js/jquery.color.js')
$.include('js/jquery.backgroundPosition.js')
$.include('js/jquery.jcarousel.js')
$(function(){
	if($('.fixedtip').length||$('.clicktip').length||$('.normaltip').length)$.include('js/jquery.atooltip.pack.js')
	if($('#contact-form').length||$('#newsletter-alt-form').length||$('#newsletter-form').length)$.include('js/forms.js')
	if($('.top1').length||$('.layouts-nav li a').length)$.include('js/scrollTop.js')
	if($('.kwicks').length)$.include('js/kwicks-1.5.1.pack.js')
	if($("#thumbs").length)$.include('js/jquery.galleriffic.js')
	if($(".lightbox-image").length)$.include('js/jquery.photo.js')
	if($("#twitter").length)$.include('js/jquery.twitter.js')
	if($('#countdown_dashboard').length)$.include('js/jquery.lwtCountdown-1.0.js')
	$('.top1').click(function(e){$('html,body').animate({scrollTop:'0px'},800);return false})
	$('.layouts-nav li a').click(function(){var offset=$($(this).attr('href')).offset();$('html,body').animate({scrollTop:offset.top},800);return false})
	$("#accordion dt").click(function(){$(this).next("#accordion dd").slideToggle("slow").siblings("#accordion dd:visible").slideUp("slow");$(this).toggleClass("active");$(this).siblings("#accordion dt").removeClass("active");return false})
	$(".slideDown dt").click(function(){$(this).toggleClass("active").parent(".slideDown").find("dd").slideToggle()})
	$(".code a.code-icon").toggle(function(){$(this).find("i").text("-");$(this).next("div.grabber").slideDown()},function(){$(this).find("i").text("+");$(this).next("div.grabber").slideUp()})
	$('.list-1>li').prepend('<span><span></span></span>').find('>a').wrap('<div></div>').hover(function(){$(this).parent().prev().animate({height:0,marginTop:10,backgroundColor:'#fafafa'},100,function(){$(this).animate({height:15,marginTop:0,backgroundColor:'#fff'},100)})},function(){$(this).parent().prev().stop().animate({height:0,marginTop:10,backgroundColor:'#fafafa'},100,function(){$(this).animate({height:15,marginTop:0,backgroundColor:'#f5f5f5'},100)})})
	$('.icons li a').hover(function(){$(this).stop().animate({backgroundColor:'#9e9e9e'})},function(){$(this).stop().animate({backgroundColor:'#d2d2d2'})})
	$('.block,.jcarousel-skin-tango_2 li,.jcarousel-skin-tango_3 li').hover(function(){$(this).find('>h3').addClass('hover');Cufon.refresh()},function(){$(this).find('>h3').removeClass('hover');Cufon.refresh()})
	$('.jcarousel-skin-tango_3 li a').hover(function(){$(this).find('h4').addClass('hover');Cufon.refresh()},function(){$(this).find('h4').removeClass('hover');Cufon.refresh()})
	$('.jcarousel-skin-tango li a').hover(function(){$(this).stop().animate({backgroundColor:'#d5d5d5'})},function(){$(this).stop().animate({backgroundColor:'#9e9e9e'})})
	$('.drop').hover(function(){$(this).find('.dropcap').addClass('hover')},function(){$(this).find('.dropcap').removeClass('hover')})
	$('.hover-image').hover(function(){$(this).stop().animate({backgroundColor:'#d5d5d5'})},function(){$(this).stop().animate({backgroundColor:'#9e9e9e'})})
	$('.hover-image2').prepend('<span></span>').hover(function(){$(this).find('>img').stop().animate({opacity:.5})},function(){$(this).find('>img').stop().animate({opacity:1})})
})
function onAfter(curr, next, opts, fwd){var $ht=$(this).height();$(this).parent().animate({height:$ht})}