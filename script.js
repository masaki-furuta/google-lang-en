chrome.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url;
    window.open(url+'&lr=lang_en');
});

