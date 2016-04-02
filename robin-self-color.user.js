// ==UserScript==
// @name         robin-self-color
// @namespace    https://relatively.me
// @version      0.2
// @description  Instead of your username being black, it can be your color.
// @author       /u/FNCxPro
// @match        https://www.reddit.com/robin*
// @require      https://code.jquery.com/jquery-2.2.2.min.js
// @grant        none
// ==/UserScript==
'use strict';
var username = $("span.user").find("a").first().text();
function getColor() {
    var colors = ["#e50000", "#db8e00", "#ccc100", "#02be01", "#0083c7", "#820080"];
    var e = username.toLowerCase(),
    t = e.replace(/[^a-z0-9]/g, ""),
    n = parseInt(t, 36) % 6;
    return colors[n];
}
var color = getColor();
$("#robinChatMessageList").bind("DOMNodeInserted", function(){
    var x = $("#robinChatMessageList .robin--user-class--self").last();
    x.removeClass("robin--user-class--self");
    x.addClass("robin--user-class--user");
    var y = x.find(".robin--username");
    //userinelement.css("color: "+color+";text-shadow: 0px 0px 5px "+color+";");
    y.css("color", color);
    y.css("text-shadow", "0px 0px 5px "+color);
});
