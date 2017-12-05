chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
    //console.log('asdasd');
    //if (msg.action == 'click_popup') {
    //    alert("Message recieved!");
    //}
    if (!timerId)
        setInterval(function () { clicker(); }, 2000);           
    else {
        clearInterval(timerId);
    }   
});

var timerId = 0;
var i = 1000;
var selector = 'span';

function clicker() {
    var links = document.querySelectorAll(selector);

            var l = links[0];
            for (var link = 0; link != links.length; link++) {
                if (isHidden(links[link])) continue;
                //  if (typeof links[link] != 'object') continue;
                l = links[link];

                (function (e, ic) {
                    setTimeout(function () {
                        console.log(e.innerText + " ---- " + ic);
                        i = ic + 1000;

                        e.style.color = sixlength(ic);


                    }, ic);

                })(l, i);
             i = i + 1000;
            }
}

function sixlength(num) {
    num16 = num.toString(16);
    
    while (num16.length < 6)
        {
            num16 = num16 + "0";
        }
    
    return "#" + num16;
}


function isHidden(el) {
    return (el.offsetParent === null)
}