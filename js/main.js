window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}
function isTextPresent(id, errMsg) {
    var txtbox = document.getElementById(id);
    var txtBoxValue = txtbox.value;
    if (txtBoxValue == "") {
        var errSpan = txtbox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
