function add_user(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    pass=document.getElementById("pass").value;
    if(pass=="",user_name==""){
        document.getElementById("pass").placeholder="please enter password!"
        document.getElementById("user_name").placeholder="please enter User Name!"
    }
    else{
        window.location="kwitter_room.html";  
    }
}