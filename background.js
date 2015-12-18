'use strict';

/*global chrome:false*/

chrome.browserAction.setBadgeText({text: '(:/)'});
chrome.browserAction.setBadgeBackgroundColor({color: '#eae'});

chrome.browserAction.onClicked.addlistener(function(aTab) {
    chrome.tabs.create({'url': 'http://chilloutandwatchsomecatgifs.com/', 'active': true});
});
