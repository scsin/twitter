let post;

function disab() {
    if(post == "") {
    document.getElementById("button").disabled = true;
    }
    else if (post != "") {
        document.getElementById("button").disabled = false;
    }
}

function text() {
    post = document.getElementById("tweet").value;
    document.getElementById("post").innerHTML = post;
}
