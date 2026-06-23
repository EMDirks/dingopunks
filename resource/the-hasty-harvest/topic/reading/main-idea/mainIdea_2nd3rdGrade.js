const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/reading/figurative-language/preview-4th-5th-grade.png",
        timerLabel: "TIME TO SUNSET"
    },

    challengeArray: [

        // ⭐ Candlewick's Cart

        {

            info: {
                type: 'challenge',
                title: "Candlewick's Cart",
                asset: "candlewicks-cart.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Welcome to my farm! I just got a box full of magic items, but I haven\'t had time to look through it. Can you help me find out what I have?",
                    complete: "Well done! These will come in handy. Now let\'s keep moving, okay?"
                },
            },

        },

        // ⭐ Applegrim Orchard

        {

            info: {
                type: 'challenge',
                title: 'Applegrim Orchard',
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Advice for Fall\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "Oh, hello there! Oh, what a day! I have so many things to say. No one listens, and it\'s not fair. Will you stay for a while? I have much to share!",
                    complete: "My words have found a home at last! Now off you go... but just go fast!"
                },
            },

        },

        // ⭐ Camp Gnomad

        {

            info: {
                type: 'challenge',
                title: "Camp Gnomad",
                asset: "camp-gnomad.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Details of Multiple Texts",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "The Fallcrawlers are coming and we don\'t have time to run! We need to hide somewhere on the farm. Can you help us figure out where?",
                    complete: "Good! Now stay low and don\'t make a sound. They\'re closer than you think."
                },
            },

        },

        // ⭐ Mallow Maze

        {

            info: {
                type: 'challenge',
                title: "Mallow Maze",
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Night of the Goblins\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Details of a Story",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mallow-maze.png",
                dialogue : {
                    incomplete: "I have a story to deliver! Someone said it could help the farm. Can you read it first and make sure it all makes sense?",
                    complete: "Great! I just really hope Fallcrawlers don\'t eat marshmallows. Wish me luck!"
                },
            },

        },

        // code box
        {

            info: {
                type: "code-box",
                asset: "node-background-codeBox.png",
                title: "Code Box",
                state: "incomplete",
            },

            content: {
                codeBox: null
            }

        }

    ],

};


  