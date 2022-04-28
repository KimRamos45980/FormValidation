window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}

/**
 * Resets all the spans back to the default text
 */
function resetErrorMessages():void {
    let allSpans = document.querySelectorAll("form span");
    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = <HTMLElement>allSpans[i];
        if(currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            // Some practice testing
            // if(currSpan.hasAttribute("data-default-error")) {
            //     let msg = currSpan.getAttribute("data-default-error");
            //     currSpan.innerText = msg;
            // }
            // else {
            //     currSpan.innerText = "";
            // }
            currSpan.innerText = "";
        }
    }
}

/**
 * Returns true if the textbox with the given id has some text inside it
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of the textbox
 * @returns true/false if there are no errors/errors are present
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtbox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtbox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLSpanElement>txtbox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
