function changeFunc(){
    document.querySelector("h1").innerHTML="Good By Shubham";

}
setTimeout(function(){
    window.location.reload();
    alert("Its New again");
},5000);