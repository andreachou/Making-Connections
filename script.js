console.log("page loaded...");

// Change to Keven Howard
function edit() {
    document.querySelector("#user").innerText = "Kevin Howard";
}


/* Change to Mark Andreson
function edit(id) {
    document.getElementById(id).innerText = "Mark Anderson";
}
*/


// click either button will remove the user from the request list
var post = ["post-1", "post-2" ]

function request(id) {
    document.getElementById(post[id]).remove();

    // either button decreases the "Connection Requests" number
    document.querySelector(".badge").innerText--;
}


// the accept button also increases the "Your Connections" number
function accept(id) {
    document.getElementById(id).innerText++;
}


