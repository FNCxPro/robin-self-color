// ==UserScript==
// @name         robin-self-color
// @namespace    https://relatively.me
// @version      0.1
// @description  Instead of your username being black, it can be your color.
// @author       /u/FNCxPro
// @match        https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==
'use strict';
$("#robinChatMessageList").bind("DOMNodeInserted", function(){
    var x = $("#robinChatMessageList .robin--user-class--self").last();
    x.removeClass("robin--user-class--self");
    x.addClass("robin--user-class--user");
});
