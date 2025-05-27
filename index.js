//create first function shout as required by the test assertion
function shout(string){
    return string.toUpperCase();
}
//second assertion
function whisper(string){
    return string.toLowerCase();
}
//third function
function logShout(string){
    console.log(string.toUpperCase());
}
//function that logs string in lower case
function logWhisper(string){
    console.log(string.toLowerCase());
}
//function say hello
function sayHiToHeadphonedRoommate(string){
    //return (string === string.toLowerCase()) ? "I can't hear you!" : "YES INDEED!";
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    } else if (string === "Let's have dinner together!") {
        return "I would love to!"
    } else {
        return "YES INDEED!"
    }
}
