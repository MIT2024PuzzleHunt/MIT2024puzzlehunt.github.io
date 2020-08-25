// Code skeleton by Michael Tang, edits by Shuli Jones

function hashAnswer(submission) {
    var strippedSubmission = submission.toUpperCase().replace(/[^A-Z0-9]/g, "");
    var submissionHashCode = 0;
    for (var i = 0; i < strippedSubmission.length; i++) {
        var char = strippedSubmission.charCodeAt(i);
        submissionHashCode = (submissionHashCode * 2019) + char;
        submissionHashCode %= 4294967296;
    }
    return submissionHashCode;
}

function checkAnswer(puzzleId, submission) {
    var answerHashCodes = {
        // put answers and their hashes here in the form
        // "PUZZLEID": HASH OF ANSWER,
        // "ANOTHER PUZZLEID": ANOTHER HASH OF ANSWER        
        // you can write the hash function above in a web browser console and run it
        // on your actual answers to compute the hashes to put here
    }    
    var answerHashCode = answerHashCodes[puzzleId];    
    if (hashAnswer(submission) == answerHashCode) {
        return 'Correct!';
    } else {return 'Incorrect.';}
}

function check() {
    document.getElementById('result').innerHTML = 
        checkAnswer(document.getElementById('title').innerHTML, 
            document.getElementById('answer-textfield').value).message;
    // change these id's as necessary to suit the website
}
