chrome.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url;
    var result = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
    if (result == "www.google.com" || result == "www.google.co.jp") {
        window.open(url+'&lr=lang_en');
    }
});

