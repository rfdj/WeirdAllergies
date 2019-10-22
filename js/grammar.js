var grammarData = {
    "origin": ["#intro# #sentence#", "#sentence#", "#sentence#", "#sentence# #outro#"],

    "intro": ["You know what's #weird#?", "It's #weird#.", "Is it just me?", "That's #weird#."],
    "outro": ["#weird.capitalize#, right?", "Isn't that #weird#?", "How about that?", "It's #weird#!", "Sometimes it lasts for #timespan#.", "It happened just #lastWeek#.", "I can't help it.", "That's just how it is...", "Nothing to do about that.", "I just found that out.", "That's a new one for me.", "Oh well..."],

    "sentence": [
        "Whenever #IDoSomething#, #IReactThisWay#.",
        "#sometimes.capitalize# when #IDoSomething#, #IReactThisWay# #immediately-comp#.",
        "#sometimes.capitalize# #IReactThisWay#, but only when #IDoSomething#.",
        "To me, #foodItem.s# #really# smell like #animal.s#.",
        "#sometimes.capitalize# #IDoSomething# and #aLittleLater# #IReactThisWay#.",
        "I #really# can't stand #animal.s#. They make my #bodyPart# #swell#.",
        "#animal.s.capitalize# make my #bodyPart# #swell#.",
        "Only #animal.s# make my #bodyPart# #swell#.",
        "Specifically, #color# #animal.s# make my #bodyPart# #swell#."
    ],

    // ALLERGIC CONDITION
    "IDoSomething": ["I hit my #bodyPart#", "I smell #someSmell#", "I touch #someObject.a#", "I eat #foodItem.a#", "I drink #liquid#", "I just think of #foodItem.a#", "I see #someObject.a#", "it's my birthday", "the moon is out", "it's cold outside", "someone kicks me", "someone touches my #bodyPart#"],

    "bodyPart": ["elbow", "nose", "knee", "head", "back", "belly", "chin", "finger", "hip", "tongue"],
    "bodyPartIHaveTwoOf": ["elbow", "knee", "ankle", "foot", "shoulder", "arm", "eyelashes", "eyebrow", "ear", "leg", "hand", "eye", "nostril", "wrist"],
    "someSmell": ["stinky feet", "#foodItem.s#", "#animal.a#", "gas", "people"],
    "someObject": ["#foodItem#", "#animal#", "animal", "#otherObject#"],

    // Objects
    "foodItem": ["chocolate bar", "peanut", "potato", "pizza", "#fruit#"],
    "liquid": ["gasoline", "water", "coffee", "tea", "alcohol", "fruit juice"],
    "fruit": ["apple", "banana", "coconut", "grapefruit", "kiwi", "mango", "orange", "peach", "pineapple", "watermelon"],
    "otherObject": ["syringe", "smartphone", "spoon", "fork"],

    // ALLERGIC REACTION
    "IReactThisWay": ["I sneeze", "my #leftRight# eye pops out", "my #leftRight# #bodyPartIHaveTwoOf# #tickles#", "my #bodyPart# #tickles#", "I have to scratch my #bodyPart#", "I get the urge to scratch my #bodyPart#"],
    "tickles": ["tickles", "itches", "hurts", "starts swelling", "starts turning #color#", "starts feeling numb"],
    "swell": ["swell", "itch", "hurt", "tickle", "turn #color#", "turn numb"],

    "color": ["blue", "green", "purple", "red", "white"],
    "animal": ["alligator", "alpaca", "ant", "armadillo", "baboon", "badger", "bear", "bird", "camel", "cat", "cow", "crab", "dog", "donkey", "elephant", "gorilla", "horse", "kangaroo", "koala", "monkey", "otter", "panda", "pig", "polar bear", "tiger", "snake", "spider", "zebra"],

    // Adjectives and similar phrases
    "immediately-comp": ["immediately", "extremely", "for at least #timespan#"],
    "weird": ["weird", "odd", "strange", "fantastic", "great", "unusual", "extraordinary", "annoying"],
    "sometimes": ["sometimes", "often", "frequently", "quite often", "more often than not"],
    "really": ["really", "absolutely", "totally", "", "", ""], //Empty fields to reduce the chances. Double spaces generated due to this being empty are automatically removed by Tracery.


    // Time
    "timespan": ["10 minutes", "half an hour", "three hours", "a day", "two weeks"],
    "lastWeek": ["last week", "yesterday", "this morning", "last #day#"],
    "aLittleLater": ["a little later", "afterwards", "right afterwards", "after a while", "then"],
    "day": ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
    
    "leftRight": ["left", "right"]
}
