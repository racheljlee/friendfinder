var potentialMatches = [            // existing possible matches for user
    {
        name: "joe",
        answers: [1,3,2,4,1]
    },
    {
        name: "rick",
        answers: [4,1,4,2,3]
    },
    {
        name: "lou",
        answers: [1,1,4,5,2]
    }
]

//after quiz is over, user answers are recorded for comparison
userAnswers = [2,4,3,2,1]

/*
    run loop to find best potential match for user
*/

var bestFriend = "";
var difference = Infinity;                       // largest score is NOT a match. we don't a match right off the bat.

var score = 0;
for (var i = 0; i < potentialMatches.length; i++){  // iterate 3 potential matches
    for (var j=0; j < userAnswers.length; j++){     // iterate through answers array
        score += userAnswers[j] - potentialMatches[i].answers[j];
        if (score < difference){
            difference = score; 
            bestFriend = potentialMatch[i]
        }  
    }
}


// need to create a function and scope for when it runs so you can call it when needed