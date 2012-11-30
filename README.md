# Instafollow Button
====================

A button for your website allowing users to quickly follow you on instagram

Demo:
---------------------
You can check out a working demo here: http://jelled.com/instagram/instafollow

Setup:
---------------------
1. You must create an instagram api client. This can be done at http://instagram.com/developer/
2. When setting up a new client you should point the REDIRECT URI to the locaton of the "instafollow-redirect-uri.html" file
3. Create a button in your html markup with an id of "instaFollow"
4. Include the file "instafollow.js" in your html

Variables:
---------------------
Set the following variables in "instafollow.js"

1. instaUserName: set to your instagram username
2. instaUserID: set to your instagram numeric id. You can look it up here: http://instagram.com/developer/
3. instaClientID: the client id of the api client you registered above in step 1.
4. instaRedirectURI: set to the location of the "instafollow-redirect-uri.html" file. For example: http://www.yoursite.com/instafollow-redirect-uri.html

Application Flow:
---------------------
To give you an idea of what's going on here is a summary of the application flow:

1. When the instaFollow is clicked an instagram authentication window will open asking your user whether they will allow access to your api client.
2. Assuming access is granted by the user, the popup window will be redirected to your REDIRECT URI which should be "instafollow-redirect-uri.html".
3. The redirect uri will be appended with an instagram api access token.
4. The access token is then passed to a second api request along with your instagram numeric user id and the follow relationship is complete.