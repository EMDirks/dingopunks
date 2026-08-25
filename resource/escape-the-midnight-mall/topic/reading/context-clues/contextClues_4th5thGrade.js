// NOTE: education.commonCore standards in this file were auto-distributed by AI and might need manual review at some future point.

const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/context-clues/preview-4th-5th-grade.png",
        path: "escape-the-midnight-mall",
        timerLabel: "TIME TIL MIDNIGHT",
        timeLimit: ['30 min', '40 min', '50 min', 'No limit'],
    },

    activityArray: [
        /* critterwerks */
        {
            title: "Critterwerks",
            characterName: "Terrible Topsy",
            topic: "Context Clues as Examples",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.4",
                "CCRA.L.6",
                "CCRA.R.1",
                "CCRA.R.4",
                "CCRA.R.7",
                "CCRA.R.10",
                "L.4.3",
                "L.4.3a",
                "L.4.4",
                "L.4.4a",
                "L.4.6",
                "RF.4.3",
                "RF.4.4",
                "RF.4.4a",
                "RF.4.4c",
                "RI.4.1",
                "RI.4.4",
                "RL.4.1",
                "RL.4.4",
                "RL.4.10",
                "L.5.3",
                "L.5.3a",
                "L.5.4",
                "L.5.4a",
                "L.5.6",
                "RF.5.3",
                "RF.5.4",
                "RF.5.4a",
                "RF.5.4c",
                "RI.5.1",
                "RI.5.4",
                "RL.5.1",
                "RL.5.4",
                "RL.5.10",
                ]
            },
            assets: {
                nodeBackground: "critterwerks.png",
                characterShopkeeper: "topsy.png",
                activityBackground: "critterwerks.png"
            },
            code: "TIME",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read each passage, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Hee hee! I'm Topsy, your trusty seller of robot pets! Every single one of my creations comes with a set of super important instructions. Can you read them and answer some questions?",
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
                            title:      "1. Owl-O-Matic",
                            paragraph:  "Make sure to keep your new Owl-O-Matic away from magnets, \n\
                                        as they can cause it to act in an extremely [frenetic] way. For example, it might flip around in a violent frenzy. \n\
                                        Not good! Or, it might spin uncontrollably until it explodes. That's even worse!",
                            transform: {
                                translateX: "-10%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "2. Squix-1000",
                            paragraph:  "Choosing the Squix-1000 was a great choice. \n\
                                        I'm quite proud of creating such an [indefectible] pet. \n\
                                        For instance, its gears are the best in the business. They're perfectly-designed and spin beautifully.\n\
                                        In fact, they're so well-made, I guarantee your Squix-1000 will never break!",
                            transform: {
                                translateX: "10%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "3. Bananatron",
                            paragraph:  "Congratulations on buying a Bananatron! That was probably a bad decision. \n\
                                        Why? Well, be prepared for its [maladroit] behavior. This includes \n\
                                        awkwardly bumbling around, clumsily bumping into walls, slipping on nothing, and falling over ALL the time. \n\
                                        But hey, at least it's cute.",
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
                        title: "{1.} Using context clues, 'frenetic' means:",
                        correctIndex: 2,
                        paragraph: [
                            "Ra[r]e and expensive",
                            "Modern an[d] high-tech",
                            "Wild and unpredic[t]able",
                        ],
                    },
                    {
                        title: "{2.} Using context clues, 'indefectible' means:",
                        correctIndex: 2,
                        paragraph: [
                            "Extremely fragile [a]nd delicate",
                            "Havin[g] a fishy smell",
                            "W[i]thout flaws",
                        ]
                    },
                    {
                        title: "{3.} What line reveals the meaning of 'maladroit?'",
                        correctIndex: 1,
                        paragraph: [
                            "\"Con[g]ratulations on buying a Bananatron!\"",
                            "\"This includes awkwardly bu[m]bling around...\"",
                            "\"But hey, at leas[t] it's cute.\"",  
                        ]
                    },
                    {
                        title: "{4.} What else reveals the meaning of 'maladroit?'",
                        correctIndex: 2,
                        paragraph: [
                            "\"...clumsily bum[p]ing into walls...\"",
                            "\"...slip[p]ing on nothing...\"",
                            "Both of the abov[e]",
                        ]
                    },
                ],
                
            }                     
        },
        /* the candy cave */
        {
            title: "The Candy Cave",
            characterName: "Martin Shortnose",
            topic: "Context Clues as Definitions",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.4",
                "CCRA.L.6",
                "CCRA.R.1",
                "CCRA.R.4",
                "CCRA.R.7",
                "CCRA.R.10",
                "L.4.3",
                "L.4.3a",
                "L.4.4",
                "L.4.4a",
                "L.4.6",
                "RF.4.3",
                "RF.4.4",
                "RF.4.4a",
                "RF.4.4c",
                "RI.4.1",
                "RI.4.4",
                "RL.4.1",
                "RL.4.4",
                "RL.4.10",
                "L.5.3",
                "L.5.3a",
                "L.5.4",
                "L.5.4a",
                "L.5.6",
                "RF.5.3",
                "RF.5.4",
                "RF.5.4a",
                "RF.5.4c",
                "RI.5.1",
                "RI.5.4",
                "RL.5.1",
                "RL.5.4",
                "RL.5.10",
                ]
            },
            assets: {
                nodeBackground: "the-candy-cave.png",
                characterShopkeeper: "noah-shortnose.png",
                activityBackground: "the-candy-cave.png",
            },
            code: "PIES",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I'd love to make more candy, but my shop is too small. I'm pretty frustrated... but writing poetry sometimes helps me feel better. Would you like to read my latest poem? I could use some feedback.",
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
                        title:     "The Candymaker",
                        author:    "By Martin Shortnose",
                        paragraph: [
                            [
                                'My dreams are filled with plenty of candy,',
                                'all of them deliciously [piquant]!',
                                'That means spicy, peppery, tangy \u2014',
                                'such great flavors; better than decent!',
                                              
                            ],
                            [
                                'But sadly, my shop is a [minuscule] place,',
                                'it\'s a tiny old cave with such little space.',
                                'I need more room, a store so wide,',
                                'to craft my candy treats with pride.'
                            ]
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "5%",
                            rotate: "-2deg",
                        }
                    }
                },
                crossword: {
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. Does \'piquant\' mean SPICY or PLENTY?', //spicy
                        'B. Does \'minuscule\' mean WIDE or LITTLE?', //little  
                        'C. Does \'peppery\' also mean piquant? (YES/NO)', //yes                          
                        'D. Does \'tiny\' also mean minuscule? (YES/NO)', //yes
                        
                    ],
                    puzzle: [
                        ["0","0","(A)S","0","0","0","0"],
                        ["0","0","1P","0","0","0","(D)Y"],
                        ["0","(B)L","2I","T","T","L","E"],
                        ["0","0","C","0","0","0","4S"],
                        ["0","0","(C)Y","3E","S","0","0"],
                        ["0","0","0","0","0","0","0"],
                    ]
                }
            },
        },
                /* zeebplex */
                {
                    title: "ZeebPlex",
                    characterName: "Zeeb",
                    topic: "Context Clues as Synonyms",
                    education: {
                        commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5c",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.5c",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.1",
                        "RI.5.4",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                        ]
                    },
                    assets: {
                        nodeBackground: "zeeb-plex.png",
                        characterShopkeeper: "zeeb.png",
                        activityBackground: "zeeb-plex.png",
                    },
                    code: "SYNC",
                    userCode: ["","","",""],
                    state: "incomplete",
                    hint: "Put together the puzzle, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
                    isHintUsed: false,
                    dialogue : {
                        incomplete: "Ugh... I just can't figure out how the pieces of this circuit board fit together. You really think you can do it? Hah! We\'ll see about that.",
                        complete: "Why are you still here? Go away, I'm too busy to chat..."
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
                                { text: "He couldn't win that [enigmatic], mysterious game.", image: "1.png" }, 
                                { text: "Her passion and [zeal] for gaming was obvious.", image: "2.png" },      
                                { text: "She played the game in an orderly, [methodical] way.", image: "3.png" },                     
                                { text: "The game featured a [labyrinth], a complex maze.", image: "4.png" }, 
                                { text: "Beating this game requires a lot of skill and [prowess].", image: "5.png" },
                                { text: "You'll lose if you play in a careless, [slapdash] way.", image: "6.png" },
                                { text: "To win, you have to follow the patterns and [paradigms].", image: "7.png" },                                          
                                { text: "Virtual reality is such a new, [novel] concept.", image: "8.png" },
                                { text: "Players [lauded] and praised the game's controls.", image: "9.png" },          
                            ],
                        },
                        multipleChoice: [
                            {
                                title: "{1.} The underlined word in the middle piece means:",
                                correctIndex: 1,
                                paragraph: [
                                    "F[e]ar",
                                    "[S]kill", 
                                ],
                            },
                            {
                                title: "{2.} Do all 3 pieces at the top contain context clues?",
                                correctIndex: 0,
                                paragraph: [
                                    "[Y]es",
                                    "N[o]",
                                ],
                            },
                            {
                                title: "{3.} In one of the yellow pieces, 'paradigms' means:",
                                correctIndex: 2,
                                paragraph: [
                                    "Game[s]",
                                    "Tow[e]rs",
                                    "Patter[n]s",
                                ],
                            },
                            {
                                title: "{4.} In one of the purple pieces, 'slapdash' means:",
                                correctIndex: 1,
                                paragraph: [
                                    "Strat[e]gy",
                                    "[C]areless",
                                    "Smar[t]"
                                ],
                            },
                        ],
                    }
                },
        /* holographia */
        {
            type: "cryptogram",
            title: "Prismatica",
            topic: "Context Clues as Antonyms",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.4",
                "CCRA.L.6",
                "CCRA.R.1",
                "CCRA.R.4",
                "CCRA.R.7",
                "CCRA.R.10",
                "L.4.3",
                "L.4.3a",
                "L.4.4",
                "L.4.4a",
                "L.4.5c",
                "L.4.6",
                "RF.4.3",
                "RF.4.4",
                "RF.4.4a",
                "RF.4.4c",
                "RI.4.1",
                "RI.4.4",
                "RL.4.1",
                "RL.4.4",
                "RL.4.10",
                "L.5.3",
                "L.5.3a",
                "L.5.4",
                "L.5.4a",
                "L.5.5c",
                "L.5.6",
                "RF.5.3",
                "RF.5.4",
                "RF.5.4a",
                "RF.5.4c",
                "RI.5.1",
                "RI.5.4",
                "RL.5.1",
                "RL.5.4",
                "RL.5.10",
                ]
            },
            characterName: "Prisma",
            assets: {
                nodeBackground: "holographia.png",
                characterShopkeeper: "prisma.png",
                activityBackground: "holographia.png",
            },
            code: "MESH",
            userCode: ["","","",""],
            state: "incomplete",
            content: {
                cryptogram: {
                    style: {
                        material: "style-material--gold",
                        text: "style-text--gold-bold"
                    },
                    transform: {
                        translateX: "0%",
                        translateY: "18%",
                        rotate: "-1deg",
                    },
                    passage: [
                        {
                            text: {
                                paragraph: "1. This [capacious] handbag is definitely not cramped on the inside."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "1%",
                                translateY: "15%",
                                rotate: "0deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "2. It is absolutely impossible for this [electrifying] dress to be boring."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-4%",
                                translateY: "6%",
                                rotate: "-1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "3. These [ostentatious] boots are the exact opposite of low-key."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-8%",
                                translateY: "25%",
                                rotate: "1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "4. Our [modish] leather jackets are never unfashionable."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "7%",
                                translateY: "22%",
                                rotate: "1deg",
                            },
                        },
                    ]
                },
                decoder: [
                    {
                        title: "{1.} Using context clues, 'capacious' means...",
                        word: "ROO[M]Y",
                    },
                    {
                        title: "{2.} Using context clues, 'electrifying' means...",
                        word: "[E]XCITING",
                    },
                    {
                        title: "{3.} Using context clues, 'ostentatious' means...",
                        word: "[S]HOWY",
                    },
                    {
                        title: "{4.} Using context clues, 'modish' means...",
                        word: "STYLIS[H]",
                    },
                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "I wrote some notes for my upcoming fashion show, but my assistant said some of the words are too \"fancy.\" I require a second opinion... Such work is beneath me.",
                complete: "So, J.J. Dingo sent you? I have not heard that name in a long time... Perhaps you can send him my regards."
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
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
