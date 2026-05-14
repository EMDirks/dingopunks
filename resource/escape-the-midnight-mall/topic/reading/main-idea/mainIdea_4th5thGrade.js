const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/main-idea/preview-4th-5th-grade.png",
        path: "escape-the-midnight-mall",
        timerLabel: "TIME TIL MIDNIGHT",
        timeLimit: ['30 min', '40 min', '50 min', 'No limit'],
    },

    activityArray: [
        /* critterwerks */
        {
            title: "Critterwerks",
            characterName: "Terrible Topsy",
            topic: "Main Ideas and Supporting Details of Short Passages",
            assets: {
                nodeBackground: "critterwerks.png",
                characterShopkeeper: "topsy.png",
                activityBackground: "critterwerks.png"
            },
            code: "BOLT",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read each paragraph, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Hee hee! I'm Topsy, and I sell robot pets. They all come with instructions, but I'm really bad at writing. I just get distracted too easily! Can you help me find the main idea of each passage?",
                complete: "Hee hee! Did you know I was banished from my hometown? I'm not supposed to talk about it!"
            },
            content: {
                passage: {
                    style: {
                        material: "style-material--metal",
                        text: {
                            title: "style-text--metal-bold",
                            paragraph: "style-text--metal-normal",
                        }
                    },
                    item: [
                        {
                            image:      "1.png",
                            title:      "Owl-O-Matic",
                            paragraph:  "Congratulations! You are now the proud owner of a genuine Critterwerks Owl-O-Matic. \n\
                                        Just make sure to keep it away from magnets, or it might end up stuck in a spin cycle  \n\
                                        \u2014 and trust me, you don't want that. So just remember: small magnets, medium magnets, big magnets... all very, very bad!",
                            transform: {
                                translateX: "-10%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "Squix-1000",
                            paragraph:  "Your new Squix-1000 requires a little more care than a real squid.\n\
                                        First off, it must live in a special tank, but not any old fish tank will do.\n\
                                        No, no, NO! Regular fish tanks are no good. Your Squix-1000 must live in tank filled with oil \n\
                                        to prevent its tiny, fragile motors from rusting.",
                            transform: {
                                translateX: "10%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Bananatron",
                            paragraph:  "You actually bought a Bananatron? Nobody buys a Bananatron! \n\
                                        It might be because your new robot fruit is a bit... clumsy.\n\
                                        It will slip on itself every few seconds, so keep it away from stairs or other high places.\n\
                                        It just falls all the time. I can't seem to figure it out! But hey, at least it\'s cute.",
                            transform: {
                                translateX: "0%",
                                translateY: "-42%",
                                rotate: "-2deg",
                            }
                        },
                    ],  
                },
                multipleChoice: [
                    {
                        title: "{1.} The main idea of the Owl-O-Matic is:",
                        correctIndex: 1,
                        paragraph: [
                            "A [s]pinning Owl-O-Matic is very dangerous",
                            "Magnets are [b]ad for the Owl-O-Matic",
                            "A spinning Owl-O-Matic is hard to fi[x]",
                        ],
                    },
                    {
                        title: "{2.} The main idea of the Squix-1000 is:",
                        correctIndex: 2,
                        paragraph: [
                            "The Squix-1000 ha[s] delicate motors",
                            "The Squi[x]-1000 is not a real squid",
                            "The Squix-1000 can't live in a n[o]rmal fish tank",
                        ]
                    },
                    {
                        title: "{3.} The main idea of the Bananatron is:",
                        correctIndex: 2,
                        paragraph: [
                            "The Bananatron i[s] a very popular pet",
                            "Stairs are one example of a hi[g]h place",  
                            "The Bananatron is c[l]umsy",
                        ]
                    },
                    {
                        title: "{4.} What line supports the Bananatron's main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Nobody buys a Bana[n]atron!\"",
                            "\"I[t] will slip on itself every few seconds...\"",
                            "\"But [h]ey, at least it\'s cute.\"",  
                        ]
                    },
                ],
                
            }                     
        },
        /* the candy cave */
        {
            title: "The Candy Cave",
            characterName: "Martin Shortnose",
            topic: "Main Idea and Supporting Details of a Poem",
            assets: {
                nodeBackground: "the-candy-cave.png",
                characterShopkeeper: "noah-shortnose.png",
                activityBackground: "the-candy-cave.png",
            },
            code: "CAKE",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I want to sell more candy, but my shop is too small! You know, when I get frustrated like this, I like to write poetry. Can you read one of my poems and tell me what you think?",
                complete: "I heard Zeeb whispering earlier \u2014 something about a secret entrance to the Undermurk deep in this very cave..."
            }, 
            content: {
                poem: {
                    style: {
                        material: "style-material--paper",
                        text: {
                            title: "style-text--handwritten",
                            author: "style-text--handwritten",
                            paragraph: "style-text--handwritten",
                        }
                    },
                    item: {
                        title:     "The Candy Cave",
                        author:    "By Martin Shortnose",
                        paragraph: [
                            [
                                'I thought to myself, "What can I make?',
                                'This cave is so small; I need more space!',
                                'Writing this poem is my saving grace...',
                                'I\'m just so frustrated. I\'m about to break!',
                            ],
                            [
                                'Maybe some day, I\'ll make something new.',
                                'Gumdrops and taffy, for me and for you.',
                                'Lollipops, donuts, and all of the rest \u2014',
                                'but not in this tiny old cave I detest."'
                            ],

                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "5%",
                            rotate: "-2deg",
                        }
                    }
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the main idea of this poem?",
                        correctIndex: 1,
                        paragraph: [
                            "Martin doesn't k[n]ow what he should make next",
                            "Martin is upset that his [c]ave is so tiny",
                            "Martin desires more cus[t]omers in his store",
                        ],
                    },
                    {
                        title: "{2.} Supporting detail #1:",
                        correctIndex: 1,
                        paragraph: [
                            "\"I thought to m[y]self, \"What can I make?\"",
                            "\"This cave is so sm[a]ll; I need more space!\"",
                            "\"Writing this poem is my [s]aving grace...\"",
                        ]
                    },
                    {
                        title: "{3.} Supporting detail #2:",
                        correctIndex: 0,
                        paragraph: [
                           "\"I\'m just so frustrated. I\'m about to brea[k]!\"",
                           "\"Maybe some day, I\'ll m[a]ke something new.\"",
                           "\"Gumdr[o]ps and taffy, for me and for you!\"",
                        ]
                    },
                    {
                        title: "{4.} Supporting detail #3:",
                        correctIndex: 2,
                        paragraph: [
                            "\"Gumdrops and ta[f]fy, for me and for you!\"",
                            "\"Lollipops, donuts, and [a]ll of the rest...\"",
                            "\"...but not in this tiny old cave I d[e]test.\"",
                        ]
                    },
                ],
            },
        },
        /* zeebplex */
        {
            title: "ZeebPlex",
            characterName: "Zeeb",
            topic: "Main Ideas and Supporting Details of Informational Texts; Topic",
            assets: {
                nodeBackground: "zeeb-plex.png",
                characterShopkeeper: "zeeb.png",
                activityBackground: "zeeb-plex.png",
            },
            code: "NODE",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Put together the puzzle, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Ugh... I spent all week trying to make a new circuit board for one of my games, but I can't figure out how to put the pieces together. I doubt you can do it, but you can try.",
                complete: "Why are you still here? Go away, I'm too busy to chat!"
            }, 
            content: {
                puzzle: {
                    style: {
                        material: "style-material--pcb",
                        text: {
                            puzzle: "style-text--pcb",
                        },
                        arrangement: "3-vertical-rows",
                    },
                    piece: [
                        { text: "Diodes are like one-way streets.", image: "1.png" },
                        { text: "It\'s important to protect circuits from damage.", image: "2.png" },      
                        { text: "Batteries are a major part of many circuits.", image: "3.png" },                     
                        { text: "They let electricity flow in a single direction.", image: "4.png" },
                        { text: "For this, we use safety switches called fuses.", image: "5.png" },
                        { text: "They store and release electricity to power a circuit.", image: "6.png" },   
                        { text: "They\'re a necessary part of many circuits.", image: "7.png" },                  
                        { text: "If too much electricity flows, fuses will stop it.", image: "8.png" },
                        { text: "Without batteries, many electronics won\'t work at all.", image: "9.png" },          
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the main idea of the yellow pieces?",
                        correctIndex: 1,
                        paragraph: [
                            "Diodes are found in m[a]ny circuits",
                            "Diodes let electricity flow in one directio[n]",
                            "Dio[d]es are always necessary",
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of the green pieces?",
                        correctIndex: 0,
                        paragraph: [
                            "Fuses are safety devices that pr[o]tect circuits",
                            "Fuses con[t]ain electricity",
                            "Fuses are i[m]portant"
                        ],
                    },
                    {
                        title: "{3.} What is the main idea of the purple pieces?",
                        correctIndex: 2,
                        paragraph: [
                            "Batteries are found in many circui[t]s",
                            "Batt[e]ries aren\'t always required",
                            "Batteries provi[d]e power to circuits"
                        ],
                    },
                    {
                        title: "{4.} What is the topic of all three colors?",
                        correctIndex: 1,
                        paragraph: [
                            "The importance o[f] fuses",
                            "Th[e] parts of a circuit",
                            "The dan[g]ers of electricity"
                        ],
                    },
                ],
            }
        },
        /* underworld athletics */
        {
            title: "Helio Athletics",
            characterName: "Robustus the Great",
            topic: "Main Idea and Supporting Details of a Short Story",
            assets: {
                nodeBackground: "underworld-athletics.png",
                characterShopkeeper: "robustus-the-great.png",
                activityBackground: "underworld-athletics.png",
            },
            code: "LILY",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the short story, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I do not fear the Mallcrawlers. In fact, I am saving up to attack their kingdom, the Undermurk. If you don't believe me, see for yourself! I dare you to read a tale of my greatest adventure.",
                complete: "Consider me impressed. You are not as weak as I first thought. I may require your skills in the future."
            }, 
            content: {
                story: {
                    style: {
                        material: "style-material--metal",
                        text: {
                            title: "style-text--printingPress-bold",
                            author: "style-text--printingPress-normal",
                            paragraph: "style-text--printingPress-normal",
                        }
                    },
                    item: {
                        title:    "The Smelly Ogre",
                        author:   "By Robustus the Great",
                        paragraph: [                        
                                'Be warned, this is a frightening story. I advise you to leave now, to run away and never look back! \n\
                                Only the fearless (or the foolish) should read on.',
                                  
                                'It all started one sunny day in the field just outside Lady Fresno\'s castle. \n\
                                I was picking wildflowers for the Lady\'s birthday feast, when I smelled something terrible. \n\
                                I looked up, and standing there was an ogre. \n\
                                He was twice as tall as me, and twice as sweaty. \n\
                                He was picking flowers too, and he had an armful of them already. But I did not fear him. \n\
                                Instead, I dared the stinking beast to pick more flowers than me! \n\
                                The ogre grinned and accepted my challenge.', 

                                'So we began picking, but I quickly fell behind as the ogre plucked flowers left and right.\n\
                                He was just picking them randomly,\n\
                                paying no attention to their beauty or scent.\n\
                                I, however, chose only the prettiest flowers \u2014 those that would look and smell the best for Lady Fresno\'s feast. \n\
                                But when the competition ended, and I had lost, something strange happened. The ogre turned to me and said,', 
                                
                                '"Despite my victory, you have proven yourself to be a fabulous flower-picker! Well done, warrior. Shall we be friends?"',                
                   
                                'From that day on, every spring, the ogre and I picked flowers together.\n\
                                He showed me how to collect them quickly, and I showed him how to find the ones that smelled sweet. \n\
                                We discovered, that by working together, we could create the most amazing flower displays the kingdom had ever seen.',                           
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "7.5%",
                            rotate: "1deg",
                        }
                    }
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the central idea of this story?",
                        correctIndex: 2,
                        paragraph: [
                            "S[m]elly ogres are good at picking flowers",
                            "It was a bea[u]tiful, sunny day",
                            "Competition with an ogre [l]ed to friendship",
                        ],
                    },                                      
                    {
                        title: "{2.} What line supports the central idea?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Be warned, this is a frightening [s]tory.\"",
                            "\"It all started one su[n]ny day...\"",
                            "\"The ogre gr[i]nned and accepted my challenge.\"",
                        ],
                    }, 
                    {
                        title: "{3.} What other line supports the central idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"I, howe[v]er, chose only the prettiest flowers...\"",
                            "\"We[l]l done, warrior. Shall we be friends?\"",
                            "\"...standing there w[a]s an ogre.\"",
                        ],
                    }, 
                    {
                        title: "{4.} What final line supports the central idea?",
                        correctIndex: 0,
                        paragraph: [
                            "...\"ever[y] spring, we picked flowers together.\"",
                            "\"He was twice [a]s tall as me...\"",
                            "\"But I did not fear hi[m].\""
                        ],
                    },                       
                ],
            },
            
        },
        /* code box */
        {
            type: "code-box",
            title: "Code Box",
            state: "incomplete",
            assets: {
                nodeBackground: "node-background-codeBox.png",
                activityBackground: "activity-background-codeBox.png"
            },
            content: {
                codeBox: null
            }
        }
    ],

};
