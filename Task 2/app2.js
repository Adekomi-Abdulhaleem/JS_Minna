// All functions embedded in a mother function 
function allTasks2() {
    
///////////////////////////////////////////////
// the function that replaces a certain string for another one in a word
    function replaceString(word) {
        var res = word.replace(/e/g, "f");
        console.log(res)
        return word;
    }    
    replaceString("abdulhaleem");

///////////////////////////////////////////////
// the function that changes the case of a sentence with respect to the case input
    function changeCase(sentence, caseStyle) {
        if (caseStyle.toUpperCase() === "UPPER") {
            var finalCase = sentence.toUpperCase()
        } 
        else if (caseStyle.toUpperCase() === "LOWER") {
                 var finalCase = sentence.toLowerCase()
        }
        document.write(finalCase)
    }
    changeCase("BatkGHNJSJSjsaxba", "lower")

///////////////////////////////////////////////


///////////////////////////////////////////////
// the function that trims the edges of a word
function trimEdges(sentence) {
    var trimmed = sentence.trim();
    console.log(trimmed)
}
trimEdges("    I want to buy something now     ")

///////////////////////////////////////////////


///////////////////////////////////////////////
// this function only gets the first letters of the words in a sentence and converts it to uppercase  
    function getInitials(name) {
        var splited = name.split(' ')
        for (i = 0; i < splited.length; i++) {
            document.write(splited[i][0].toUpperCase())
        }
    }
    getInitials("hardek baba")

}

// call the mother function
allTasks2()