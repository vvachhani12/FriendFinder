const express = require('express');

const router = express.Router();

const friendsData = require('./../data/friends').peopleData;

router.get('/friends', (req, res) => {
    return res.json(friendsData);
});

router.post('/friends', (req, res) => {
    
    var newPeopleScore = req.body.scores;
    console.log(newPeopleScore);
    var totalDifference = [];
    var match = 0;
    for (let i = 0; i < friendsData.length; i++) {
        console.log(friendsData[i].scores);
        var scoreDifference = 0;
        for(let j = 0; j<newPeopleScore.length; j++){
            console.log("Friends: "+friendsData[i].scores[j]);
            scoreDifference += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newPeopleScore[j])));
        }
        
        totalDifference.push(scoreDifference);
    }
    console.log(totalDifference);

    for(let i = 0; i<totalDifference.length; i++){
        console.log("total difference: "+totalDifference[i]);
        console.log("total difference best match: "+totalDifference[match]);

        if(totalDifference[i] <= totalDifference[match]){
            match = i;
        }
    }

    res.json(friendsData[match]);

    friendsData.push(req.body);
});

module.exports = router;