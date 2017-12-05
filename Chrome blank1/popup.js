document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('tmp-clipboard').onclick = function () {
        //chrome.tabs.executeScript(null, {
        //    file: "script.js"
        //});
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "click_popup" }, function (response) { });
        });
    }
});