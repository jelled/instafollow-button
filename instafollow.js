/*Set the following variables*/
var instaUserName       = "USERNAME";
var instaUserID         = "NUMERIC_USER_ID";    //Lookup your numeric user id here: http://jelled.com/instagram/lookup-user-id
var instaClientID       = "CLIENT_ID";          //Obtain an instagram client ID from http://instagram.com/developer/
var instaRedirectURI    = "REDIRECT_URI";       //Should point to the location of "instagram-follow-redirect-uri.html"


$(function(){
$("#instaFollow").click(function(){instaFollowClick(instaClientID, instaRedirectURI);});
});

function instaFollowClick(id, uri){
    window.open ("https://instagram.com/oauth/authorize/?client_id="+id+"&redirect_uri="+uri+"&response_type=token&scope=relationships","mywindow","menubar=1,resizable=1,width=500,height=400");
}

function instaFollowRequest(id, username){
    if(window.location.hash) {
        $('#response').html('<h4>You are now following '+username+'!</h4>');
        var hash = window.location.hash.substring(1);
        var regexp = /=(.*)/g;
        var token = regexp.exec(hash);
        $.post("https://api.instagram.com/v1/users/"+id+"/relationship?callback=?",{action: 'follow',access_token:token[1]}, "json");
    }
}