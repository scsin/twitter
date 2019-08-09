let post;
let btn = document.getElementById("button");

btn.addEventListener("click", text);

function text() {
    post = document.getElementById("tweet").value;
    document.getElementById("post").innerHTML = post;
}

function count() {
    document.getElementById("count").className = "zero";
    post = document.getElementById("tweet").value;
    var count = (140 - post.length);
    document.getElementById("count").innerHTML = count;
    if(post.length == 0 || post.length > 140) {
        document.getElementById("button").disabled = true;
    }
    else{
        document.getElementById("button").disabled = false;
    }
    if(count < 30 && count >= 20) {
        document.getElementById("count").className = "hundtw";
    }
    if(count < 20 && count >= 0) {
        document.getElementById("count").className = "hundth";
    }
}

function resize() {
    resTextArea = document.getElementById("tweet");
    while(resTextArea.scrollHeight > resTextArea.offsetHeight) {
        resTextArea.rows += 1;
    }
}
