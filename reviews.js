(function(window){var jQuery;if(window.jQuery===undefined||window.jQuery.fn.jquery!=='3.2.4'){var script_tag=document.createElement('script');script_tag.setAttribute("type","text/javascript");script_tag.setAttribute("src","//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.4/jquery.min.js");if(script_tag.readyState){script_tag.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){scriptLoadHandler();}};}else{script_tag.onload=scriptLoadHandler;}(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(script_tag);}else{jQuery=window.jQuery.noConflict(true);main();}function scriptLoadHandler(){jQuery=window.jQuery.noConflict(true);main();}function main(){jQuery(document).ready(function($){if(!window.jQuery){window.jQuery=jQuery;}$('head').append('<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />');$('head').append('<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css" />');var swiperDeferred=jQuery.Deferred();var swiperUrl="//cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js";if(location.href.substring(0,4)!='http'){swiperUrl='https:'+swiperUrl;}$.getScript(swiperUrl,function(data,textStatus,jqxhr){swiperDeferred.resolve();});var reviewDataArray;if(window.review_token&&window.review_target){reviewDataArray=[{'container':window.review_target,'token':window.review_token}];}else{reviewDataArray=window.reviewData;}if(!reviewDataArray){if(console){console.warn('Review widget: `reviewData` varible is missing, no widget will be inserted into page');}}else if(Object.prototype.toString.call(reviewDataArray)!=='[object Array]'){reviewDataArray=[reviewDataArray];}var deferredArray=[];jQuery.each(reviewDataArray,function(i,widgetConfig){var widgetDeffered=jQuery.Deferred();$.get("https://reviewsonmywebsite.com/embed/"+widgetConfig.token,function(data){widgetDeffered.resolve({'data':data,'container':widgetConfig.container});});deferredArray.push(widgetDeffered);});deferredArray.push(swiperDeferred);jQuery.when.apply(jQuery,deferredArray).then(function(){var data=arguments;jQuery.each(data,function(i,widgetConfig){if(widgetConfig){$('#'+widgetConfig.container).html(widgetConfig.data);}});});});}})(window);
