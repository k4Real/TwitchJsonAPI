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
var status ;
var game;
var icon ;
var thumbnail ;
var streamerList = ["barnacules", "OgamingSC2", "cretetion", "freecodecamp", "cohhcarnage", "habathcx", "RobotCaleb", "pokket"] ;
var twitchAPI = "https://wind-bow.gomix.me/twitch-api/streams/" ;



//*************************

function streamerList (response){
    
  game =response.stream.game;
  thumbnail=response.preview.medium;
  status = response.channel.status ;
  name =response.channel.display_Name  ;
  icon = response.channel.logo ;
    
};

 function toHTML (){
     
     
     
     
     
 } ;





//***************************************
$.ajax({
      
   method: "GET",
   success: function(){} ,
   url: twitchAPI 

   
        
        
        
});