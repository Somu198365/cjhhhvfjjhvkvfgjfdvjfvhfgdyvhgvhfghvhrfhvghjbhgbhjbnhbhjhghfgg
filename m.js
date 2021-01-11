function yes(){
    localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location="index.html";
}
function no(){
    window.location="kwitter_room.html";
}