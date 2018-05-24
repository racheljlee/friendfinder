var friends = require("../data/friends.js");

function apiRoutes(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;

        var bestFriend;
        var smallestDiff = Infinity;

        // For Loop for "friends" array
        friends.forEach(friend => { // can call "friend" whatever we want
            var totalDiff = 0;
            for (var i = 0; i < friend.scores.length; i++) {
                // Math.abs turns all values positive and adding to totalDiff (which was set to 0 initially); so new difference = total difference
                totalDiff =+ Math.abs(parseInt(friend.scores[i]) - parseInt(newFriend.scores[i]));
            }
            if (totalDiff < smallestDiff) { // new totalDiff needto be less than smallestDiff
                smallestDiff = totalDiff; // new smallestDiff is now totalDiff
                bestFriend = friend;
            }
        });
        friends.push(newFriend);
        res.json(bestFriend); // sending object that contains bestFriend selected back to front-end
    });
}

module.exports = apiRoutes;