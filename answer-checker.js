// Code skeleton and hashing by Michael Tang, minor edits by Shuli Jones

function hashAnswerReal(submission) {
    const strippedSubmission = submission.toUpperCase().replace(/[^A-Z0-9]/g, "");
    var submissionHashCode = 0;
    for (var i = 0; i < strippedSubmission.length; i++) {
        const char = strippedSubmission.charCodeAt(i);
        submissionHashCode = (submissionHashCode * 2019) + char;
        submissionHashCode %= 4294967296;
    }
    return submissionHashCode;
}

function hashAnswerTest(submission) {
    return submission;
}

function checkAnswer(puzzleId, submission) {
    const answerHashCodes = {
        'arts-1': 5,
    }    
    const answerHashCode = answerHashCodes[puzzleId];    
    if (hashAnswerTest(submission) == answerHashCode) {
        return 'Correct!';
    } else {return 'Incorrect.';}
}

function check(puzzleName) {
    const answer = document.forms.namedItem(puzzleName + '--ac')[0].value;
    document.getElementById(puzzleName + '--result').innerHTML =
        checkAnswer(puzzleName, answer);
}
