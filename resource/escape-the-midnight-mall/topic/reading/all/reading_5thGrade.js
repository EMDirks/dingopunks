// NOTE: education.commonCore standards in this file were auto-distributed by AI and might need manual review at some future point.

const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/all/thumbnail-5th-grade-ela-mem.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    activityArray: [
        /* critterwerks */
        {
            title: "Critterwerks",
            characterName: "Terrible Topsy",
            topic: "Main Idea",
            education: {
                commonCore: [
                "CCRA.R.2",
                "CCRA.R.5",
                "CCRA.R.6",
                "CCRA.R.7",
                "CCRA.R.10",
                "RF.5.4",
                "RF.5.4a",
                "RF.5.4b",
                "RI.5.2",
                "RI.5.6",
                "RI.5.10",
                ]
            },
            assets: {
                nodeBackground: "critterwerks.png",
                characterShopkeeper: "topsy.png",
                activityBackground: "critterwerks.png"
            },
            code: "COGS",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read each passage, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Hee hee! I'm Topsy, and I sell robot pets. Every pet comes with instructions, but I'm really bad at writing. I just get distracted too easily! Can you read each passage and answer some questions?",
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
                            image:      "2.png",
                            title:      "Squix-1000",
                            paragraph:  "The Squix-1000 is soooo easy to take care of! I like to think of it as the perfect pet for people who don't like pets. \n\
                                        You really just have to do one thing for your robot squid: keep it in a tank filled with oil, not water. \n\
                                        That will keep all of its gears turning smoothly for years and years and years! \n\
                                        You don't have to feed it, you don't have to give it medicine, you don't even have to look at it. \n\
                                        The Squix-1000 is perfectly happy just swimming around, doing its own thing.",
                            transform: {
                                translateX: "6%",
                                translateY: "-10%",
                                rotate: "-3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Bananatron",
                            paragraph:  "You actually bought a Bananatron? Nobody buys a Bananatron! \n\
                                        That might be because this robot fruit is a bit... clumsy. \n\
                                        It will slip on itself every few seconds, and slipping is really bad for its delicate gears.\n\
                                        So basically, you have to ALWAYS keep an eye on your Bananatron. You can NEVER look away \u2014 it requires constant attention, care, and love.\n\
                                        It just falls all the time... Oh, my poor awkward Bananatron.",
                            transform: {
                                translateX: "-1%",
                                translateY: "-22%",
                                rotate: "2deg",
                            }
                        },
                    ],  
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the main idea of the Squix-1000?",
                        correctIndex: 2,
                        paragraph: [
                            "The S[q]uix-1000 is perfectly happy",
                            "The Squix-1000 [h]as gears",
                            "The Squix-1000 is easy to take [c]are of"
                        ]
                    },
                    {
                        title: "{2.} Which pet is harder to take care of?",
                        correctIndex: 1,
                        paragraph: [
                            "The [S]quix-1000",
                            "The Bananatr[o]n",
                            "Both ar[e] equally difficult",
                        ]
                    },
                    {
                        title: "{3.} What do both pets have in common?",
                        correctIndex: 2,
                        paragraph: [
                            "Both [p]ets must live in a tank of oil",
                            "Both pets require constant attentio[n]",
                            "Both pets contain [g]ears",  
                        ]
                    },
                    {
                        title: "{4.} Both of these passages are:",
                        correctIndex: 1,
                        paragraph: [
                            "Guides on h[o]w to build robot pets",
                            "Care instruction[s] for robot pets",
                            "Reasons to buy robot pe[t]s",  
                        ]
                    },
                ],
                
            }                     
        },
        /* the candy cave */
        {
            title: "The Candy Cave",
            characterName: "Martin Shortnose",
            topic: "Poetry",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.5",
                "CCRA.R.5",
                "CCRA.R.6",
                "CCRA.R.7",
                "CCRA.R.10",
                "RF.5.4",
                "RF.5.4a",
                "RF.5.4b",
                "RL.5.1",
                "RL.5.5",
                "RL.5.6",
                "RL.5.10",
                ]
            },
            assets: {
                nodeBackground: "the-candy-cave.png",
                characterShopkeeper: "noah-shortnose.png",
                activityBackground: "the-candy-cave.png",
            },
            code: "TART",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I need to make more candy, but my shop is too small! You know, when I get frustrated like this, I sometimes like to write poetry. Can you read one of my poems and tell me what you think?",
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
                                'Martin said to himself, "What should I make?',
                                'My cave is too tiny \u2014 I need more space!',
                                'I\'m at my limit. I\'m about to break.',
                                'Such little candy is such a disgrace.',
                            ],
                            [
                                'If I could expand, I would make something new.',
                                'So many treats, for me and for you!',
                                'But deep in the cave lies a darkness unseen,',
                                'a warning of danger; a warning to heed."'
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
                        'A. Who is the speaker of this poem?',
                        'B. What is the rhyme pattern of stanza 1?',
                        'C. How many lines are in this poem?',     
                        'D. Martin is upset that his cave is too... ?',
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","(A)M","0","0"],
                        ["0","0","(B)2A","B","A","B","0"],
                        ["0","0","0","0","3R","0","0"],
                        ["(C)E","I","G","H","1T","0","0"],
                        ["0","0","0","0","I","0","0"],
                        ["0","0","(D)4T","I","N","Y","0"],
                    ]
                }
            },
        },
        /* zeebplex */
        {
            title: "ZeebPlex",
            characterName: "Zeeb",
            topic: "Figurative Language",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.5",
                "CCRA.L.6",
                "CCRA.R.4",
                "CCRA.R.5",
                "CCRA.R.7",
                "CCRA.R.10",
                "L.5.5",
                "L.5.5a",
                "RF.5.4",
                "RF.5.4a",
                "RL.5.1",
                "RL.5.4",
                "RL.5.5",
                "RL.5.10",
                ]
            },
            assets: {
                nodeBackground: "zeeb-plex.png",
                characterShopkeeper: "zeeb.png",
                activityBackground: "zeeb-plex.png",
            },
            code: "AMPS",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Put together the puzzle, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Ugh... I spent all week trying to make a new circuit board for one of my arcade machines, but I can't figure out how to put the pieces together. I really doubt you can do it, but you can try.",
                complete: "Why are you still here? Go away, I'm too busy to chat!"
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
                        { text: "I waited a million years for my turn to play.", image: "1.png" },
                        { text: "It took forever to beat the game.", image: "2.png" },      
                        { text: "This bag full of prizes weighs a ton.", image: "3.png" },                     
                        { text: "A pixel is a tiny piece of a bigger puzzle.", image: "4.png" }, 
                        { text: "The space ship zoomed across the screen.", image: "5.png" },
                        { text: "A password is like a secret key.", image: "6.png" },   
                        { text: "The arcade was a bustling beehive.", image: "7.png" }, 
                        { text: "The computer virus spread like a wildfire.", image: "8.png" },
                        { text: "The sound quality was as clear as a crystal.", image: "9.png" },                    
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} The puzzle piece in the middle is a:",
                        correctIndex: 2,
                        paragraph: [
                            "S[i]mile",
                            "[M]etaphor",
                            "Onom[a]topoeia",
                        ],
                    },
                    {
                        title: "{2.} The two yellow puzzle pieces are:",
                        correctIndex: 1,
                        paragraph: [
                            "Simil[e]s",
                            "[M]etaphors",
                            "I[d]ioms",
                        ],
                    },
                    {
                        title: "{3.} The three puzzle pieces on the top are:",
                        correctIndex: 2,
                        paragraph: [
                            "Simil[e]s",
                            "Metaph[o]rs",
                            "Hy[p]erbole",
                        ],
                    },
                    {
                        title: "{4.} The two purple puzzle pieces are:",
                        correctIndex: 0,
                        paragraph: [
                            "[S]imiles",
                            "Meta[p]hors",
                            "A[l]lusions",
                        ],
                    },
                ],
            }
        },
        /* holographia */
        {
            type: "cryptogram",
            title: "Prismatica",
            topic: "Context Clues",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.4",
                "CCRA.L.6",
                "CCRA.R.4",
                "CCRA.R.7",
                "CCRA.R.10",
                "L.5.4",
                "L.5.4a",
                "RF.5.3",
                "RF.5.4",
                "RF.5.4a",
                "RF.5.4b",
                "RF.5.4c",
                "RI.5.10",
                ]
            },
            characterName: "Prisma",
            assets: {
                nodeBackground: "holographia.png",
                characterShopkeeper: "prisma.png",
                activityBackground: "holographia.png",
            },
            code: "GLAM",
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
                                paragraph: "1. These boots are so [prodigious] in size, they\'ll fit only the largest feet."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-8%",
                                translateY: "20%",
                                rotate: "1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "2. The color of this [ultramarine] dye is like a sapphire or the deep ocean."
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
                                paragraph: "3. Diamonds this big are so [seldom] found, you may never see one again."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-4%",
                                translateY: "11%",
                                rotate: "-1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "4. To see the [diminutive] gems in this delicate ring, you must look closely."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "7%",
                                translateY: "25%",
                                rotate: "1deg",
                            },
                        },
                    ]
                },
                decoder: [
                    {
                        title: "{1.} Using context clues, 'prodigious' means:",
                        word: "BI[G]",
                    },
                    {
                        title: "{2.} Using context clues, 'ultramarine' means:",
                        word: "B[L]UE",
                    },
                    {
                        title: "{3.} Using context clues, 'seldom' means:",
                        word: "R[A]RELY",
                    },       
                    {
                        title: "{4.} Using context clues, 'diminutive' means:",
                        word: "S[M]ALL",
                    },
                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "I wrote some notes for a new clothing line, but my assistant thinks some of the words are too... \"fancy.\" So, I need you to use context clues to find simpler words. Such work is beneath me.",
                complete: "So, J.J. Dingo sent you? I have not heard that name in a long time... Perhaps you can send him my regards."
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
        },
        /* underworld athletics */
        {
            title: "Helio Athletics",
            characterName: "Robustus the Great",
            topic: "Elements of a Story",
            education: {
                commonCore: [
                "CCRA.R.2",
                "CCRA.R.3",
                "CCRA.R.5",
                "CCRA.R.6",
                "CCRA.R.7",
                "CCRA.R.10",
                "RF.5.4",
                "RF.5.4a",
                "RF.5.4b",
                "RL.5.1",
                "RL.5.2",
                "RL.5.3",
                "RL.5.5",
                "RL.5.6",
                "RL.5.10",
                ]
            },
            assets: {
                nodeBackground: "underworld-athletics.png",
                characterShopkeeper: "robustus-the-great.png",
                activityBackground: "underworld-athletics.png",
            },
            code: "HERO",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the short story, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I do not fear the Mallcrawlers. In fact, I am saving up to conquer their kingdom, the Undermurk. Don't believe me? See for yourself! I dare you to read a tale of my greatest adventure.",
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
                        title:     "The Smelly Ogre",
                        author:    null,
                        paragraph: [
                            
                                'Be warned, this is a frightening story. I advise you to leave now, to run away and never look back! \n\
                                Only the fearless (or the foolish) should read on.',
                                  
                                'It all started one sunny day in the field just outside Lady Fresno\'s fortress. \n\
                                I was picking wildflowers for the Lady\'s birthday feast, when I smelled something wretched. \n\
                                I looked up, and standing there was an ogre. \n\
                                He was twice as tall as me, and twice as sweaty. His foul odor drifted across the fields. \n\
                                He was picking flowers too, and he had an armful of them already. But I did not fear him. \n\
                                Instead, I dared the smelly beast to pick more flowers than me! \n\
                                The ogre kneeled before me, grinned, and confidently accepted my challenge.', 

                                'So we began picking, but I quickly fell behind as the ogre plucked flowers left and right.\n\
                                He was just gathering them randomly,\n\
                                paying no attention to their beauty or fragrance.\n\
                                I, however, chose only the prettiest flowers \u2014 those that would look and smell the best for Lady Fresno\'s feast. \n\
                                But when the competition ended, and I had lost, something strange happened.', 
                                
                                'The ogre turned to me and said, "Well done, warrior! Despite my victory, you have proven yourself to be a worthy flower-picker. Shall we be friends?"',                
                   
                                'From that day on, the ogre and I picked flowers together every spring.\n\
                                He showed me how to collect them quickly, and I showed him how to find the ones that smelled sweet. \n\
                                We discovered, that by working together, we could create the most amazing bouquets the kingdom had ever seen.',                           
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
                        title: "{1.} What is the theme of this story?",
                        correctIndex: 2,
                        paragraph: [
                            "Smelly ogres are go[o]d at picking flowers",
                            "Robustus [t]he Great lost the competition",
                            "Great things are ac[h]ieved by working together",
                        ],
                    }, 
                    {
                        title: "{2.} What trait do Robustus and the ogre share?",
                        correctIndex: 0,
                        paragraph: [
                            "Comp[e]titiveness",
                            "Sh[y]ness",
                            "Lazine[s]s",
                        ],
                    }, 
                    {
                        title: "{3.} From whose point of view is the story told?",
                        correctIndex: 1,
                        paragraph: [
                            "The O[g]re",
                            "Robustus the G[r]eat",
                            "L[a]dy Fresno",
                        ],
                    },                                       
                    {
                        title: "{4.} What line supports why the ogre won?",
                        correctIndex: 2,
                        paragraph: [
                            "\"The ogre kneeled before [m]e...\"",
                            "\"His foul o[d]or drifted across the fields.\"",
                            "\"He was just gathering them rand[o]mly...\"",
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

  