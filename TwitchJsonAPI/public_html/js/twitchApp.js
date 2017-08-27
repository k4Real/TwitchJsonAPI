/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * Search for Users see if they are online or offline.
 * 
 * ALL offline,online tabs
 * 
 * icon, name, symbol for offline and online, stream description when online
 * searhcbar
 * 
 */
var streamer="" ;
var temp;
var name ;
var link;
var status ;
var game;
var icon ;
var thumbnail ;
var streamerList = ["reckful", "OgamingSC2", "cretetion", "freecodecamp", "noopkat", "awkwards_travel", "RobotCaleb", "pokket"] ;
var twitchAPI = "https://wind-bow.gomix.me/twitch-api/streams/" ;
var arrayStreamer= [] ;



//*************************

function onlineList (response){
    

   
    if(response.stream !== null)
        
    {
        
    
    
    var divAppend;
    
    
  game =response.stream.game;
  thumbnail=response.stream.preview.medium;
  status = response.stream.channel.status ;
  name =response.stream.channel.display_name  ;
  icon = response.stream.channel.logo ;
  link =response.stream.channel.url ;
  
  divAppend= "<div class='streamer'><img src="+icon +" class='streamerIcon' alt='streamer Icon'>  <a href="+link+" class='streamerName'>"+name+"</a><img src="+thumbnail+ " class='previewPic' alt='PreviewPic'><p class='streamerDescription'>"+status+"</p><p class='game'>"+game+"</p><p class='status'>online  <span class='onlineIcon'></span></p></div>";
  
  $("#streamerList").append(divAppend);
    }
    
};

 //*****************************************
 
 function offlineList (response){
    

   
  
        
    
    
    var divAppend;
    
    
  game =response.game;
  
  status = response.status ;
  name =response.display_name  ;
  icon = response.logo ;
  link =response.url ;
  
  divAppend= "<div class='streamer'><img src="+icon +" class='streamerIcon' alt='streamer Icon'>  <a href="+link+" class='streamerName'>"+name+"</a><p class='status'>offline  <span class='offlineIcon'></span></p></div>";
  
  $("#streamerList").append(divAppend);
    
    
};
 
//*******************************************

function allList (response){
    

   
    if(response.stream !== null)
        
    {
        
    
    
    var divAppend;
    
    
  game =response.stream.game;
  thumbnail=response.stream.preview.medium;
  status = response.stream.channel.status ;
  name =response.stream.channel.display_name  ;
  icon = response.stream.channel.logo ;
  link =response.stream.channel.url ;
  
  divAppend= "<div class='streamer'><img src="+icon +" class='streamerIcon' alt='streamer Icon'>  <a href="+link+" class='streamerName'>"+name+"</a><img src="+thumbnail+ " class='previewPic' alt='PreviewPic'><p class='streamerDescription'>"+status+"</p><p class='game'>"+game+"</p><p class='status'>online  <span class='onlineIcon'></span></p></div>";
  
  $("#streamerList").append(divAppend);
    }
   
    else {
           temp =response._links.channel ;
        streamer= temp.replace('https://api.twitch.tv/kraken/channels/', '');
        let twitchAPI = "https://wind-bow.gomix.me/twitch-api/channels/" ;
        twitchAPI += streamer+"?callback=?" ;
        
        jQuery.getJSON( twitchAPI  ,offlineList  ) ;
        
    }
    
    
};




//***************************************


function updateOnline() {
    
    //https://forum.freecodecamp.org/t/twitch-tv-api-challenge-cross-origin-issue/66217/2
       $("#streamerList").empty(); 
    
    for( let i= 0; i<streamerList.length; i++) {
   
        let twitchAPI = "https://wind-bow.gomix.me/twitch-api/streams/" ;
        twitchAPI += streamerList[i]+"?callback=?" ;
        
        jQuery.getJSON( twitchAPI  , onlineList  ) ;
    }
    
    


//$.ajax({
//      
//   method: "GET",
//   success: streamerListSet ,
//   url: twitchAPI ,
//   dataType:"json" 
//
//   
//        
//        
//        
//});

}

function updateAll() {
    
    //https://forum.freecodecamp.org/t/twitch-tv-api-challenge-cross-origin-issue/66217/2
       $("#streamerList").empty(); 
    
    for( let i= 0; i<streamerList.length; i++) {
               
               
        let twitchAPI = "https://wind-bow.gomix.me/twitch-api/streams/" ;
        twitchAPI += streamerList[i]+"?callback=?" ;
        
        jQuery.getJSON( twitchAPI  ,allList  ) ;
        
    }
    
}
//***************************************************

function updateOffline () {
    
    
    $("#streamerList").empty(); 
    
    for( let i= 0; i<streamerList.length; i++) {
               
               
        let twitchAPI = "https://wind-bow.gomix.me/twitch-api/streams/" ;
        twitchAPI += streamerList[i]+"?callback=?" ;
        
        jQuery.getJSON( twitchAPI  ,offlineOnly  ) ;
        
    }
    
    
    
    
}
//****************************************************

function offlineOnly (response) {
    
    
        
    if(response.stream === null)
        
    {
        
      temp =response._links.channel ;
        streamer= temp.replace('https://api.twitch.tv/kraken/channels/', '');
        let twitchAPI = "https://wind-bow.gomix.me/twitch-api/channels/" ;
        twitchAPI += streamer+"?callback=?" ;
        
        jQuery.getJSON( twitchAPI  ,offlineList  ) ;
    }
   
  
    
    
    
}







//*****************************************



$('#online').on('click',updateOnline);
$('#all').on('click',updateAll);
$('#offline').on('click',updateOffline);


 $("#searchBox").keypress(function(event){
     $("#streamerList").empty(); 
    if (event.key==='Enter')
    {
         searchText = this.value;
         
          let twitchAPI = "https://wind-bow.gomix.me/twitch-api/streams/" ;
        twitchAPI += searchText+"?callback=?" ;
        
        jQuery.getJSON( twitchAPI  ,allList  ) ;
        
         
      
  }
  
 }) ;


 
 