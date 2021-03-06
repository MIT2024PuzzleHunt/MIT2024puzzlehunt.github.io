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
        'arts-1': 196228335,
        'arts-2': 90937717,
        'arts-3': 2802225914,
        'arts-4': 3148885935,
        'ers-1': 5,
        'ers-2': 1452048857,
        'ers-3': 5,
        'ers-4': 2174049706,
        'ers-5': 5,
        'ers-6': 5,
        'hum-1': 1756035409,
        'hum-2': 3962465687,
        'hum-3': 1663599289,
        'hum-35': 3171606428,
        'hum-4': 2645599512,
        'int-1': 3838127781,
        'int-2': 5,
        'int-3': 1204530106,
        'int-4': 1736300460,
        'int-5': 5,
        'ss-1': 2313900431,
        'ss-2': 1946263056,
        'ss-3': 1525674401,
        'ss-4': 25073752,
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
