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

var name ;
var link;
var status ;
var game;
var icon ;
var thumbnail ;
var streamerList = ["OgamingSC2", "OgamingSC2", "cretetion", "freecodecamp", "cohhcarnage", "awkwards_travel", "RobotCaleb", "pokket"] ;
var twitchAPI = "https://wind-bow.gomix.me/twitch-api/streams/" ;
var arrayStreamer= [] ;



//*************************

function streamerListSet (response){
    var divAppend;
  game =response.stream.game;
  thumbnail=response.stream.preview.medium;
  status = response.stream.channel.status ;
  name =response.stream.channel.display_name  ;
  icon = response.stream.channel.logo ;
  link =response.stream.channel.url ;
  
  divAppend= "<div class='streamer'><img src="+icon +" class='streamerIcon' alt='streamer Icon'>  <a href="+link+" class='streamerName'>"+name+"</a></div>";
  
  $("#streamerList").append(divAppend);
  
    
};

 function toHTML (){
     
     
     
     
     
 } ;





//***************************************


function updateAll() {
    
    //https://forum.freecodecamp.org/t/twitch-tv-api-challenge-cross-origin-issue/66217/2
    
    for( let i= 0; i<2; i++) {
        
        let twitchAPI = "https://wind-bow.gomix.me/twitch-api/streams/" ;
        twitchAPI += streamerList[i]+"?callback=?" ;
        
        jQuery.getJSON( twitchAPI  ,streamerListSet  ) ;
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

//*****************************************

 updateAll() ;