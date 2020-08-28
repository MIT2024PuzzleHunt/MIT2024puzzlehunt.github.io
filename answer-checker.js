// Code skeleton and hashing by Michael Tang, minor edits by Shuli Jones

function hashAnswer(submission) {
    const strippedSubmission = submission.toUpperCase().replace(/[^A-Z0-9]/g, "");
    var submissionHashCode = 0;
    for (var i = 0; i < strippedSubmission.length; i++) {
        const char = strippedSubmission.charCodeAt(i);
        submissionHashCode = (submissionHashCode * 2019) + char;
        submissionHashCode %= 4294967296;
    }
    return submissionHashCode;
}

function checkAnswer(puzzleId, submission) {
    const answerHashCodes = {
        'arts-1': 5,
        'arts-2': 5,
        'arts-3': 5,
        'arts-4': 5,
        'ers-1': 5,
        'ers-2': 5,
        'ers-3': 5,
        'ers-4': 5,
        'ers-5': 5,
        'ers-6': 5,
        'hum-1': 1756035409,
        'hum-2': 3962465687,
        'hum-3': 1663599289,
        'hum-35': 236660175,
        'hum-4': 2645599512,
        'int-1': 5,
        'int-2': 5,
        'int-3': 5,
        'int-4': 5,
        'int-5': 5,
        'ss-1': 5,
        'ss-2': 5,
        'ss-3': 5,
        'ss-4': 5,
        'ss-5': 5
    }    
    const answerHashCode = answerHashCodes[puzzleId];    
    if (hashAnswer(submission) == answerHashCode) {
        if (hashAnswer(submission) == 1663599289) {
            return 'Correct! Go to this link for the second part of the puzzle: https://drive.google.com/file/d/1l4rdWr75xo0DW3h2Fmgm15zkpQ4mQGMc/view?usp=sharing';
        }
        else if (hashAnswer(submission) == 236660175) {
            return 'Correct! Go here: https://drive.google.com/file/d/1i0vVxziutTmIQTD-739F1cf2LrbqLcR7/view?usp=sharing';
        } else {
            return 'Correct!';
        }
    } else {return 'Incorrect.';}
}

function check(puzzleName) {
    const answer = document.forms.namedItem(puzzleName + '--ac')[0].value;
    document.getElementById(puzzleName + '--result').innerHTML =
        checkAnswer(puzzleName, answer);
}
