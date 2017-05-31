'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "First Trimester Baby Development Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "At 5 weeks pregnant, your baby looks more like a tadpole than a baby and is made up of three layers, the ectoderm, mesoderm and endoderm. These will later form all of her organs.",
    "At 6 weeks pregnant, your baby's heart starts to beat and can be seen in an early ultrasound at around 8 weeks.",
    "At 7 weeks pregnant, your baby's brain, hands and feet are beginning to develop. He also has eyes, eyelids, a nose, an appendix and a pancreas.",
    "At 8 weeks pregnant, your baby's fingers and toes are developing. Her eyelids almost cover her eyes. Her neural pathways are beginning to form from her developing brain.",
    "At 9 weeks pregnant, your baby's essential body parts are all formed. This week, his heart finishes dividing into 4 chambers with primitive valves, his external sex organs develop and his teeth begin to form.",
    "At 10 weeks pregnant, your baby's most critical time of development has completed, and she's ready to grow. Her kidneys, intestines, brain and liver are beginning to function and she can bend her developed limbs.",
    "At 11 weeks pregnant, your baby's bones are starting to harden. He's developing small tooth buds, and he is able to open and close his fists.",
    "At 12 weeks pregnant, your baby is developing reflexes including the ability to make sucking movements. Her nerve cells are expanding and are creating synapses in her brain.",
    "At 13 weeks pregnant, your baby's fingerprints are forming. If she's a girl, her eggs have developed in her ovaries.",
    "At 14 weeks pregnant, your baby's brain impulses allow him to squint, grimace and suck his thumb. His kidneys are now producing urine, which he is able to pee out."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};