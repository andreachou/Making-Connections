console.log("page loaded...");


var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");

function accept(id) {
    document.querySelector(id).remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;

}


function ignore(id) {
    document.querySelector(id).remove();
    requestSpan.innerText--;
}