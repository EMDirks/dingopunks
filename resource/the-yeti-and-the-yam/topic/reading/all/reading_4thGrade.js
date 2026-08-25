// NOTE: education.commonCore standards in this file were auto-distributed by AI and might need manual review at some future point.

const resource =  {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/reading/all/thumbnail-4th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    activityArray: [
        // passages
        {
            title: "Dr. Seraphina's Cell",
            characterName: "Dr. Seraphina",
            topic: "Main Idea",
            education: {
                commonCore: [
                "CCRA.R.2",
                "CCRA.R.5",
                "CCRA.R.6",
                "CCRA.R.7",
                "CCRA.R.10",
                "RF.4.4",
                "RF.4.4a",
                "RF.4.4b",
                "RI.4.2",
                "RI.4.6",
                "RI.4.10",
                ]
            },
            assets: {
                nodeBackground: "dr-seraphina.png",
                characterShopkeeper: "dr-seraphina.png",
                activityBackground: "dr-seraphina.png"
            },
            code: "MELT",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read each passage, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I can lend you some sugar for those candied yams, but only if you help me first. You see, I'm trying to make the perfect flavor of snow cone. Can you read my notes and tell me if they make sense?",
                complete: "Did I accidentally turn my hair into a snow cone? Yes. Do I know how to fix it? No... Let me know if you have any ideas."
            },
            content: {
                passage: {
                    style: {
                        material: "style-material--paper",
                        text: {
                            title: "style-text--printingPress-bold",
                            paragraph: "style-text--printingPress-normal",
                        }
                    },
                    item: [
                        {
                            image:      "1.png",
                            title:      "Lime Snow Cone",
                            paragraph:  "This lime snow cone is fresh, bold, and most importantly, super sour! \n\
                                        It has a bright green color and an extremely strong taste that will really get you going in the morning.\n\
                                        Just don't eat it too fast, or the sourness might give you a headache.",
                            transform: {
                                translateX: "-10%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "Pitaya Snow Cone",
                            paragraph:  "If you like your dessert to have a mild flavor, then this pitaya snow cone is just for you.\n\
                                        Pitaya (also called dragonfruit) tastes quite refreshing, with just a little bit of sweetness.\n\
                                        However, prepare to be disappointed if you prefer stronger flavors.\n\
                                        ",
                            transform: {
                                translateX: "0%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Berry Snow Cone",
                            paragraph:  "This berry snow cone is a beautiful pale blue color with a wonderful mixture of flavors.\n\
                                        Made with only the freshest blueberries and gooseberries (which are very hard to get here), it's both sour and sweet.\n\
                                        Eat it slowly so you can enjoy the perfectly balanced taste!",
                            transform: {
                                translateX: "-2%",
                                translateY: "-42%",
                                rotate: "-2deg",
                            }
                        },
                    ],  
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the main idea of the lime snow cone?",
                        correctIndex: 1,
                        paragraph: [
                            "The lime snow cone is a bright gre[e]n color",
                            "The li[m]e snow cone has a very sour flavor",
                            "The lime snow cone should not be eaten too fa[s]t"
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of the pitaya snow cone?",
                        correctIndex: 2,
                        paragraph: [
                            "Pitaya is a disappointing flav[o]r",
                            "A pita[y]a is also called a dragonfruit",
                            "The pitaya snow con[e] tastes mildly sweet"
                        ]
                    },
                    {
                        title: "{3.} What is the main idea of the berry snow cone?",
                        correctIndex: 0,
                        paragraph: [
                            "Its f[l]avor is both sour and sweet",
                            "It has a beautif[u]l pale blue color",
                            "It is made with blueberr[i]es and gooseberries"
                        ]
                    },
                    {
                        title: "{4.} All three of these passages are:",
                        correctIndex: 1,
                        paragraph: [
                            "Instructions on how to make snow cones",
                            "Descriptions of how snow cones tas[t]e",
                            "Reasons to avoid eating snow cones"
                        ]
                    },
                ],
                
            }                     
        },
        // poetry
        {
            title: "Tater Durant's Cell",
            characterName: "Tater Durant",
            topic: "Poetry",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.5",
                "CCRA.R.5",
                "CCRA.R.6",
                "CCRA.R.7",
                "CCRA.R.10",
                "RF.4.4",
                "RF.4.4a",
                "RF.4.4b",
                "RL.4.1",
                "RL.4.5",
                "RL.4.6",
                "RL.4.10",
                ]
            },
            assets: {
                nodeBackground: "tater-drift.png",
                characterShopkeeper: "tater-drift.png",
                activityBackground: "tater-drift.png",
            },
            code: "SPUD",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "You need yams? Well, buddy, they don't call me Tater Durant for nothing! If you give me advice on some lyrics, I'll give you as many yams as you need.",
                complete: "Potatoes are life. Potatoes are love."
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
                        title:     "An Ode to the Potato",
                        author:    "By Tater Durant",
                        paragraph: [
                            [
                                'In the soil, where plants grow strong,',
                                'potatoes hide, a buried treat.',
                                'Mashed or fried, you can\'t go wrong!',
                                'They make your taste buds dance, so sweet.',
                                
                            ],
                            [
                                'Baked or boiled, cubed or sliced \u2014',
                                'Potatoes taste so good with spice.',
                                'From the ground, they grow and thrive.',
                                'Potatoes keep my soul alive!'
                            ]
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "7%",
                            rotate: "-2deg",
                        }
                    }
                },
                crossword: {
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. Potatoes taste so good with what?',
                        'B. How many syllables are in line 4?',
                        'C. What is the rhyme pattern of stanza 1?',
                        'D. What is the author\'s last name?', 
                    ],
                    puzzle: [
                        ["0","(A)1S","2P","I","C","(B)E","0"],
                        ["0","0","0","0","0","I","0"],
                        ["0","0","0","(C)A","0","G","0"],
                        ["0","0","0","B","0","H","0"],
                        ["(D)4D","3U","R","A","N","T","0"],
                        ["0","0","0","B","0","0","0"],
                    ]
                }
            },
        },
        // puzzle
        {
            title: "Fishbeard's Cell",
            characterName: "Fishbeard",
            topic: "Similes and Metaphors",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.5",
                "CCRA.L.6",
                "CCRA.R.4",
                "CCRA.R.7",
                "CCRA.R.10",
                "RF.4.4",
                "RF.4.4a",
                "RL.4.1",
                "RL.4.4",
                "RL.4.10",
                ]
            },
            assets: {
                nodeBackground: "fishbeard.png",
                characterShopkeeper: "fishbeard.png",
                activityBackground: "fishbeard.png",
            },
            code: "SAIL",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Put together the puzzle, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Arg! You're lucky I have whole barrel o' butter on my ship. It's all yours... if you can put together the pieces of my map.",
                complete: "If you're ever lookin' to join a pirate crew, come find me."
            }, 
            content: {
                puzzle: {
                    style: {
                        material: "style-material--pcb",
                        text: {
                            puzzle: "style-text--pcb",
                        }
                    },
                    piece: [
                        { text: "The gold coins sparkled like stars.", image: "1.png" }, 
                        { text: "The ship was a graceful dancer on the waves.", image: "2.png" },  
                        { text: "The old map is a silent storyteller.", image: "3.png" },                     
                        { text: "The ocean waves roared like a lion.", image: "4.png" }, 
                        { text: "The pirate's heart beat as loud as a drum.", image: "5.png" }, 
                        { text: "Courage is a compass through difficult times.", image: "6.png" },    
                        { text: "The ship rocked gently like a cradle.", image: "7.png" },                                         
                        { text: "The cave was as dark as a moonless night.", image: "8.png" }, 
                        { text: "The map was as wrinkled as an old man's face.", image: "9.png" },            
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} The three fully-green puzzle pieces are:",
                        correctIndex: 0,
                        paragraph: [
                            "[S]imiles",
                            "Met[a]phors",
                            "None of t[h]e above",
                        ],
                    },
                    {
                        title: "{2.} The puzzle piece without any green is a:",
                        correctIndex: 1,
                        paragraph: [
                            "S[i]mile",
                            "Met[a]phor",
                            "None of the a[b]ove",
                        ],
                    },
                    {
                        title: "{3.} The three puzzle pieces on the bottom are all:",
                        correctIndex: 0,
                        paragraph: [
                            "S[i]miles",
                            "Metapho[r]s",
                            "N[o]ne of the above",
                        ],
                    },
                    {
                        title: "{4.} The puzzle piece in the middle is a:",
                        correctIndex: 0,
                        paragraph: [
                            "Simi[l]e",
                            "Met[a]phor",
                            "None [o]f the above",
                        ],
                    },

                ],
            }
        },
        // cryptogram
        {
            type: "cryptogram",
            title: "Pippo's Cell",
            topic: "Context Clues",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.4",
                "CCRA.L.6",
                "CCRA.R.4",
                "CCRA.R.7",
                "CCRA.R.10",
                "L.4.4",
                "L.4.4a",
                "RF.4.3",
                "RF.4.4",
                "RF.4.4a",
                "RF.4.4b",
                "RF.4.4c",
                "RI.4.10",
                ]
            },
            characterName: "Pippo Fizzlepop",
            assets: {
                nodeBackground: "pippo-fizzlepop.png",
                characterShopkeeper: "pippo-fizzlepop.png",
                activityBackground: "pippo-fizzlepop.png",
            },
            code: "BOLT",
            userCode: ["","","",""],
            state: "incomplete",
            content: {
                cryptogram: {
                    style: {
                        material: "style-material--metal",
                        text: "style-text--handwritten"
                    },
                    transform: {
                        translateX: "0%",
                        translateY: "21%",
                        rotate: "-2deg",
                    },
                    passage: [
                        {
                            
                            text: {
                                paragraph: "1. The [luminous] glow of these lightbulbs can light up an entire room."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "2. This oil brings [ancient] gears back to life, even if they haven't spun in years."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "10%",
                                translateY: "2%",
                                rotate: "1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "3. Keep this liquid out of [frigid] temperatures, or it might freeze."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "-1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "4. These [minuscule] screws are so small, you can barely see them."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "10%",
                                translateY: "12%",
                                rotate: "1deg",
                            },
                        }
                    ]
                },
                decoder: [
                    {
                        title: "{1.} Using context clues, 'luminous' means:",
                        word: "[B]RIGHT",
                    },
                    {
                        title: "{2.} Using context clues, 'ancient' means:",
                        word: "[O]LD",
                    },
                    {
                        title: "{3.} Using context clues, 'frigid' means:",
                        word: "CO[L]D",
                    },
                    {
                        title: "{4.} Using context clues, 'minuscule' means:",
                        word: "LIT[T]LE",
                    },

                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "Hee hee, I'm Pippo Fizzlepop! I can build anything, even an oven to bake those yams. I have all these boxes of parts, I just can't read the labels... some of the words are way too hard. Help me!",
                complete: "If you ever see my sister Topsy around, let me know! I'm worried about her. Hee hee!"
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
        },
        // short story
        {
            title: "The Knight's Cell",
            characterName: "The Frozen Knight",
            topic: "Elements of a Story",
            education: {
                commonCore: [
                "CCRA.R.2",
                "CCRA.R.3",
                "CCRA.R.5",
                "CCRA.R.6",
                "CCRA.R.7",
                "CCRA.R.10",
                "RF.4.4",
                "RF.4.4a",
                "RF.4.4b",
                "RL.4.1",
                "RL.4.2",
                "RL.4.3",
                "RL.4.5",
                "RL.4.6",
                "RL.4.10",
                ]
            },
            assets: {
                nodeBackground: "the-frozen-knight.png",
                characterShopkeeper: "the-frozen-knight.png",
                activityBackground: "the-frozen-knight.png",
            },
            code: "EPIC",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the short story, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Need some marshmallows for those candied yams? I only have a few left, but I'll share them with you... if you read my story.",
                complete: "If you manage to escape, send word to the King. We need help!"
            }, 
            content: {
                story: {
                    style: {
                        material: "style-material--paper",
                        text: {
                            title: "style-text--printingPress-bold",
                            author: "style-text--printingPress-normal",
                            paragraph: "style-text--printingPress-normal",
                        }
                    },
                    item: {
                        title:     "The Tale of the Frozen Knight",
                        author:    null,
                        paragraph: [
 
                            'I am the Frozen Knight, and this is my story. \n\
                            Earlier this winter, the King sent me on a quest to capture a pesky yeti. \n\
                            This yeti stomped on houses, stole crops, and snored far too loudly at night! Of course, she had to be stopped. \n\
                            So I left the castle to find her, setting off on a journey deep into the wilderness.'
                            ,
                            'Unfortunately, due to my pride, I became lost in the forest. \n\
                            The yeti snuck up on me, quickly throwing me into a giant sack slung over her shoulder. \n\
                            She carried me deep into this ice cave, dumping me out into a cold, lonely cell. \n\
                            I found myself surrounded by all sorts of strange creatures \u2014 prisoners of the yeti too.'
                            ,
                            'These creatures were certainly beneath me: a mad scientist, a lazy musician, a fishy pirate, and a creepy little elf. \n\
                            So I kept my distance. I was a knight, after all... on a mission from the King!\n\
                            But as the nights grew colder and more lonely, I realized I had no choice. I swallowed my pride and reluctantly joined the crew of misfits.'
                            ,
                            'Turns out, they knew all the good survival tricks: finding food, staying warm, and keeping busy. \n\
                            From slippery floors to freezing toes, we faced every challenge together. \n\
                            Dare I say it, we even became friends.'
                            ,
                            'Though we still remain prisoners of the yeti, locked inside this icy cave, we are a team. \n\
                            Everyone needs help sometimes, even a knight like me.'

                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "10%",
                            rotate: "1deg",
                        }
                    }
                },
                multipleChoice: [
                    {
                        title: "{1.} What challenge did the prisoners overcome?",
                        correctIndex: 2,
                        paragraph: [
                            "Sleepless ni[g]hts",
                            "Chappe[d] lips",
                            "Freezing to[e]s",
                        ],
                    }, 
                    {
                        title: "{2.} What trait best describes the Frozen Knight?",
                        correctIndex: 1,
                        paragraph: [
                            "Bashfu[l]",
                            "[P]rideful",
                            "C[r]eative",
                        ],
                    }, 
                    {
                        title: "{3.} What is the theme of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Slip[p]ery floors are dangerous",
                            "Everyone needs help somet[i]mes",
                            "Pesky [y]etis must be stopped",
                        ],
                    }, 
                    {
                        title: "{4.} For most of this story, the setting is...",
                        correctIndex: 0,
                        paragraph: [
                            "An i[c]e cave",
                            "The King's c[a]stle",
                            "A [f]orest",
                        ],
                    },                                             
                ],
            },
            
        },
        // code box
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

  