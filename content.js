

const imageURL = chrome.extension.getURL('JustDoit.gif')
const imageTag = `<img src="${imageURL}" width="100" height="100">`;

var cElement = document.getElementsByClassName("css-9pa8cd");
var tag = document.getElementsByTagName('img');

for(var i = 0; i < tag.length; i++){
    tag[i].src = imageURL;
    tag[i].width = 300;
    tag[i].height = 200;
}