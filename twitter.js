let post;

document.getElementById("button").disabled = true;

function text() {
    post = document.getElementById("tweet").value;
    document.getElementById("post").innerHTML = post;
}

function count() {
    post = document.getElementById("tweet").value;
    let count = (140 - post.length);
    document.getElementById("count").innerHTML = count;
    if(post.length == 0) {
        document.getElementById("button").disabled = true;
    }
    else{
        document.getElementById("button").disabled = false;
    }
}
