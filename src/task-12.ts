function sendDoneStatus(callback: (text: string) => void) {
    callback("done");
}


sendDoneStatus((text: string) => {
    console.log("Callback received:", text);
});