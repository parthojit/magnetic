var ws = new WebSocket("ws://127.0.0.1:5678/");
ws.onmessage = function (event)
{
    recv = JSON.parse(event.data);
    console.log(recv)
};