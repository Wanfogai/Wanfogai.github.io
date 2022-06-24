let friend = document.getElementById("cout");

function fuck(){
    if (hashCode(friend.value) == "47917752") {
        document.location.href = hashCode(document.title)+".html";
    }
}

let script = document.createElement("script");
script.onload = function () {};
document.head.appendChild(script);
script.src="/js/scroll.js";


