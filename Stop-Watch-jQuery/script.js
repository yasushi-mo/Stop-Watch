var passSec = 0;
var passId;

function showPassage() {
    passSec++;
    var msg = "ボタンを押してから " + passSec + " 秒が経過しました。";
    $("#passageArea").text(msg);
}

function startShowing() {
    console.log("startShowing()");

    passId = setInterval("showPassage()", 1000);
    $("#btnStart").prop("disabled", true);
    $("#btnStop").prop("disabled", false);
    $("#btnReset").prop("disabled", true);
}

function stopShowing() {
    console.log("stopShowing()");
    clearInterval(passId);
    $("#btnStart").prop("disabled", false);
    $("#btnStop").prop("disabled", true);
    $("#btnReset").prop("disabled", false);
}

function resetShowing() {
    console.log("resetShowing()");
    passSec = 0;
}