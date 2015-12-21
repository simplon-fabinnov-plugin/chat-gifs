'use strict';

/*global chrome:false*/

chrome.browserAction.setBadgeText({text: '(:/)'});
chrome.browserAction.setBadgeBackgroundColor({color: '#eae'});

chrome.browserAction.onClicked.addListener(function(aTab) {
    chrome.tabs.query({'url': 'http://chilloutandwatchsomecatgifs.com/'}, (tabs)=> {
        if (tabs.length === 0) {
            //il n'y a pas d'onglet catgif d'ouvert
            chrome.tabs.create({'url': 'http://chilloutandwatchsomecatgifs.com/', 'active': true});
        } else {
            // quoi faire ?
    chrome.tabs.query({'url': 'http://chilloutandwatchsomecatgifs.com/', 'active': true}, (active) => {
        if (active.length === 0) {
                chrome.tabs.update(tabs[0].id, {'active': true});
            }
            });
    }
        });
});
