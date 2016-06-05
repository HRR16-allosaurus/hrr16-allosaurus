var nextImage = function(data){
              var rand_index = Math.floor(Math.random()*data.images.length);
             $('.back').animate({
               opacity: 0.60},
               1000, 
               function(){
                  $(this).css({
                    "background-image":"url('" + data.images[rand_index].display_sizes[0].uri + "')",
                    "-webkit-background-size": "cover",
                    "-moz-background-size": "cover",
                    "-o-background-size": "cover",
                    "background-size": "cover",
                  });
                }).animate({opacity:1.0},1000);
       }; 
        
var apiKey = 'sr6nkrp3uqx993kvuu8zb8n4';



$(function(){
      
      setInterval(function(){
            $.ajax(
                {
                  type:'GET',
                  url:"https://api.gettyimages.com/v3/search/images/creative?phrase=hiking",
                  beforeSend: function (request){
                            request.setRequestHeader("Api-Key", apiKey);
                        }
                })
                .done(function(data){
                    nextImage(data);
                })
                .fail(function(data){
                    console.log(data);
                })
              }, 6000);
 
});