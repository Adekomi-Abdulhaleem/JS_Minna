// the sentence we will be working with throughout the task
var theSentence = ('I am a boy with a gOod maNners ecause i am not a marlian, set awon no mannaz');

var theArray = []

///////////////////////////////////////////////
// the mother function
function allTasks() {

    
///////////////////////////////////////////////
// The function that converts cases to the opposite of the normal case
function convertCase() {
    for (i = 0; i < theSentence.length; i++) {
        if (theSentence[i] == theSentence[i].toUpperCase()) {
            var reversedText = theSentence[i].toLowerCase()
        }
        else if (theSentence[i] == theSentence[i].toLowerCase()) {
                 var reversedText = theSentence[i].toUpperCase()
        }
        // document.write(reversedText)
        theArray.push(reversedText)
    }     
}
convertCase()

///////////////////////////////////////////////


///////////////////////////////////////////////
// the function now changes the first letter of each words in the sentence
function capitalFirstLetter() {
    var capitaliseString = (str) => str[0].toUpperCase() +
                                    str.slice(1).toLowerCase();
    var words = theSentence.split(' ').map(capitaliseString)
    var capitaliseSentence = words.join(' ');
    // document.write (capitaliseSentence)  
    theArray.push(capitaliseSentence)  
    return capitaliseSentence
} 
capitalFirstLetter()

///////////////////////////////////////////////


///////////////////////////////////////////////
// this function then adds the 'ING' at the back of each words
function addING() {
    var passING = (str) => str + 'ING';
    var split = theSentence.split(' ').map(passING)
    var joinString = split.join(' ');
    // document.write(joinString)
    theArray.push(joinString)
    return joinString
}
addING()

///////////////////////////////////////////////

}

allTasks()


document.write(theArray)