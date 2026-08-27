// NOTE: education.commonCore standards in this file were auto-distributed by AI and might need manual review at some future point.

const resource =  {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/reading/all/thumbnail-4th-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    activityArray: [
        /* Driftwood Beach */
        {
            title: "Driftwood Beach",
            characterName: "Driftwood Dan",
            topic: "Main Idea and Supporting Details",
            education: {
                commonCore: [
                "CCRA.R.1",
                "CCRA.R.2",
                "CCRA.R.5",
                "CCRA.R.7",
                "CCRA.R.8",
                "CCRA.R.10",
                "RF.4.4",
                "RF.4.4a",
                "RF.4.4b",
                "RI.4.1",
                "RI.4.2",
                "RI.4.7",
                "RI.4.8",
                "RI.4.10",
                "RL.4.1",
                ]
            },
            assets: {
                nodeBackground: "driftwood-dan.png",
                characterShopkeeper: "driftwood-dan.png",
                activityBackground: "driftwood-dan.png"
            },
            code: "SAND",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read each passage, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Hey! I'm Driftwood Dan, Camp Calamari's finest collector of... well, driftwood. I'm in charge of fixing up the camp's fences before the pirates get here. Want to help?",
                complete: "I'm just a piece of driftwood, gathering pieces of... uh, myself? It's a weird gig, but hey \u2014 gotta do what it takes, right? "
            },
            content: {
                passage: {
                    style: {
                        material: "style-material--paper",
                        text: {
                            title: "style-text--printingPress-normal",
                            paragraph: "style-text--printingPress-normal",
                        }
                    },
                    item: [
                        {
                            image:      "1.png",
                            title:      "Twistwood",
                            paragraph:  "The salty sea can bend and twist wood in all sorts of funny ways. \n\
                                        We call this stuff Twistwood, since it's all twisted up like a pretzel. \n\
                                        Unfortunately, it's much too tangled to be of any help! So keep it on the beach. We'll find better pieces to patch up our fences.",
                            transform: {
                                translateX: "0%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "Stumpwood",
                            paragraph:  "Ah... Stumpwood. It's like bringing a whole tree to the party! Great for making sturdy fences, \n\
                                        but way too heavy to move. These huge stumps need an entire crew to carry, and we just don't have the time. \n\
                                        When you find Stumpwood on the beach, move on.",
                            transform: {
                                translateX: "10%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Plankwood",
                            paragraph:  "Keep your eyes peeled for perfectly-shaped Plankwood \u2014 it's more useful than treasure, and almost as rare! \n\
                                        Plankwood comes from old shipwrecks, crafted with skill and tested by the mighty waves.\n\
                                        It's really good for fixing up fences, so grab as many as you can carry. Just watch out for nails!",
                            transform: {
                                translateX: "-7%",
                                translateY: "-42%",
                                rotate: "-1deg",
                            }
                        },
                    ],  
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the main idea of Twistwood?",
                        correctIndex: 2,
                        paragraph: [
                            "The sea is sa[l]ty",
                            "Twis[t]wood is shaped like a pretzel",
                            "Twi[s]twood is too tangled to be useful",
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of Stumpwood?",
                        correctIndex: 1,
                        paragraph: [
                            "Stump[w]ood makes sturdy fences",
                            "Stumpwood is too he[a]vy to be useful",
                            "Trees like to part[y]",
                        ]
                    },
                    {
                        title: "{3.} What is the main idea of Plankwood?",
                        correctIndex: 0,
                        paragraph: [
                            "Pla[n]kwood is extremely useful",
                            "Plankwood is crafted with s[k]ill",
                            "Plankwood can conta[i]n nails",
                        ]
                    },
                    {
                        title: "{4.} What supports Plankwood's main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"...[a]nd almost as rare!\"",
                            "\"It's really goo[d] for fixing up fences...\"",
                            "\"Just watch out for nai[l]s!\"",
                        ]
                    },
                ],
                
            }                     
        },
        /* Dining Hall */
        {
            title: "Dining Hall",
            characterName: "Chef Gumbo",
            topic: "Poetry",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.5",
                "CCRA.R.4",
                "CCRA.R.5",
                "CCRA.R.6",
                "CCRA.R.7",
                "CCRA.R.10",
                "RF.4.4",
                "RF.4.4a",
                "RF.4.4b",
                "RF.4.4c",
                "L.4.5",
                "RL.4.1",
                "RL.4.4",
                "RL.4.5",
                "RL.4.10",
                ]
            },
            assets: {
                nodeBackground: "chef-gumbo.png",
                characterShopkeeper: "chef-gumbo.png",
                activityBackground: "chef-gumbo.png",
            },
            code: "SEAR",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Listen here, landlubber! We're making a slime that'll have those pirates slipping and sliding all over. Problem is, this recipe from my old boss is all sorts of confusing... Can you make any sense of it?",
                complete: "This slime will have those pirates slipping and sliding like eels on a buttered deck! Thanks for the help, matey."
            }, 
            content: {
                poem: {
                    style: {
                        material: "style-material--metal",
                        text: {
                            title: "style-text--handwritten",
                            author: "style-text--handwritten",
                            paragraph: "style-text--handwritten",
                        }
                    },
                    item: {
                        title:     "Slickslime",
                        author:    "By Chef Scully Saltman",
                        paragraph: [
                            [
                                'Today, we make slime \u2014 slippery and thick!',
                                'Some key ingredients will do the trick.'
                            ],
                            [
                                'In a heavy pot, with careful hands,',
                                'add some flour from distant lands.',
                                'Pour in some oil, smooth and fine,',
                                'and a pinch of glitter for extra shine.',
                            ],
                            [
                                'Squeeze a lemon, and mix the zest.',
                                'Adding some salt is probably best.',
                                'Stir and simmer, \'til it\'s just right,',
                                'a slimy brew, ready for the fight!'
                            ]
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "10%",
                            rotate: "2deg",
                        }
                    }
                },
                crossword: {
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. What is the author\'s last name?',
                        'B. How many stanzas are in this poem?',
                        'C. How many lines are in this poem?',
                        'D. What is the rhyme scheme of stanzas 2 and 3?',   

                        
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(D)3A","0"],
                        ["(A)1S","A","L","(B)T","M","A","N"],
                        ["0","0","0","H","0","B","0"],
                        ["0","0","0","4R","0","B","0"],
                        ["0","0","0","E","0","0","0"],
                        ["0","0","(C)T","2E","N","0","0"],
                    ]
                }
            },
        },
        /* Mystic Hideaway */
        {
            title: "Mystic Hideaway",
            characterName: "Madame Mystica",
            topic: "Similes and Metaphors",
            education: {
                commonCore: [
                "CCRA.L.5",
                "CCRA.L.6",
                "CCRA.R.1",
                "CCRA.R.4",
                "CCRA.R.7",
                "CCRA.R.9",
                "CCRA.R.10",
                "L.4.5a",
                "RL.4.2",
                "RL.4.3",
                "RL.4.4",
                "RL.4.10",
                ]
            },
            assets: {
                nodeBackground: "madame-mystica.png",
                characterShopkeeper: "madame-mystica.png",
                activityBackground: "madame-mystica.png",
            },
            code: "STAR",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Put together the puzzle, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Oh, my stars! A visitor... how unexpected. Well, while you're here, perhaps you can fix my broken crystal mirror? We can use it to look into the future; to see the pirates' plan of attack!",
                complete: "Return any time, young one, and I'll read your fortune. Your destiny may stir your soul..."
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
                        { text: "Dreams are windows to other worlds.", image: "1.png" }, 
                        { text: "Love is like a candle in the darkness.", image: "2.png" },     
                        { text: "This potion is as blue as the sea.", image: "3.png" },                     
                        { text: "The sun is like a huge golden coin.", image: "4.png" },
                        { text: "Magic is a key to unlocking wonder.", image: "5.png" }, 
                        { text: "The moon glows brightly at night.", image: "6.png" }, 
                        { text: "Stars are a symphony of lights.", image: "7.png" },               
                        { text: "Life is a puzzle made of many pieces.", image: "8.png" },
                        { text: "Fate is a river filled with twists and turns.", image: "9.png" },   
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} Is the piece with the sun a simile?",
                        correctIndex: 0,
                        paragraph: [
                            "Ye[s]",
                            "N[o]",
                        ],
                    },
                    {
                        title: "{2.} The puzzle piece in the middle is a:",
                        correctIndex: 1,
                        paragraph: [
                            "Simi[l]e",
                            "Me[t]aphor",
                        ],
                    },
                    {
                        title: "{3.} What is the piece with the moon?",
                        correctIndex: 2,
                        paragraph: [
                            "[S]imile",
                            "Me[t]aphor",
                            "None of the [a]bove",
                        ],
                    },
                    {
                        title: "{4.} What are all three pieces at the bottom?",
                        correctIndex: 1,
                        paragraph: [
                            "Simile[s]",
                            "Metapho[r]s",
                            "No[n]e of the above",
                        ],
                    },

                ],
            }
        },
        /* Junk Pile */
        {
            type: "cryptogram",
            title: "Junk Pile",
            topic: "Context Clues",
            education: {
                commonCore: [
                "CCRA.L.3",
                "CCRA.L.4",
                "CCRA.L.6",
                "CCRA.R.3",
                "CCRA.R.4",
                "CCRA.R.8",
                "L.4.3",
                "L.4.4",
                "L.4.4a",
                "RF.4.3",
                "RF.4.3a",
                "RF.4.4",
                "RF.4.4a",
                "RF.4.4b",
                "RF.4.4c",
                "RI.4.10",
                ]
            },
            characterName: "Broken Animatronic",
            assets: {
                nodeBackground: "melodina.png",
                characterShopkeeper: "melodina.png",
                activityBackground: "melodina.png",
            },
            code: "RUST",
            userCode: ["","","",""],
            state: "incomplete",
            content: {
                cryptogram: {
                    style: {
                        material: "style-material--metal",
                        text: "style-text--gold-bold"
                    },
                    transform: {
                        translateX: "5%",
                        translateY: "19%",
                        rotate: "3deg",
                    },
                    passage: [
                        {
                            text: {
                                paragraph: "1. You should clean [grimy] metal parts with soap and water."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-1%",
                                translateY: "12%",
                                rotate: "3deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "2. Saltwater has a damaging, [pernicious] effect on delicate circuits."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "3%",
                                translateY: "1%",
                                rotate: "1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "3. You can speed up [sluggish] gears with some fresh oil."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-7%",
                                translateY: "-2%",
                                rotate: "-2deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "4. Old motors require [ceaseless] cleaning every single day."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-10%",
                                translateY: "8%",
                                rotate: "-1deg",
                            },
                        },
                    ]
                },
                decoder: [
                    {
                        title: "{1.} Using context clues, 'grimy' means:",
                        word: "DI[R]TY",
                    },
                    {
                        title: "{2.} Using context clues, 'pernicious' means:",
                        word: "HARMF[U]L",
                    },
                    {
                        title: "{3.} Using context clues, 'sluggish' means:",
                        word: "[S]LOW",
                    },
                    {
                        title: "{4.} Using context clues, 'ceaseless' means:",
                        word: "CONS[T]ANT",
                    },

                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "I used to love singing, but I'm too rusty now... Luckily I found some old labels with tips to fix me up. Can you decode them? Once I'm back to normal, I can sing a song to enchant the pirates!",
                complete: "You know I used to be in a band? It was a little pizza place at the mall... Maybe some day you can help me return."
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
        },
        /* Fishbeard's Ship */
        {
            title: "Fishbeard's Ship",
            characterName: "Captain Fishbeard",
            topic: "Elements of a Story",
            education: {
                commonCore: [
                "CCRA.R.2",
                "CCRA.R.3",
                "CCRA.R.5",
                "CCRA.R.6",
                "CCRA.R.7",
                "CCRA.R.8",
                "CCRA.R.9",
                "CCRA.R.10",
                "RF.4.4a",
                "RI.4.3",
                "RL.4.1",
                "RL.4.2",
                "RL.4.3",
                "RL.4.10",
                ]
            },
            assets: {
                nodeBackground: "fishbeard.png",
                characterShopkeeper: "fishbeard.png",
                activityBackground: "fishbeard.png",
            },
            code: "MAST",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the short story, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Arr! Yes, I'm a pirate... but I'm on your side now. I need you to read a tale from my own life; a look inside the mind of pirates. Use this knowledge to fend off those Red Tide scallywags!",
                complete: "Keep up that sharp mind, and perhaps you will sail with my crew one day."
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
                        title:     "The Shrimp Chest",
                        author:    "By Captain Fishbeard",
                        paragraph: [
                            
                                'One sunny day, after setting sail from Camp Calamari, I led my crew of pirates to a small island in the middle of the sea. \n\
                                There, on the beach, was an old chest half-buried in the sand.',

                                'With dreams of gold and silver twinkling in our eyes, we hauled the chest aboard our ship. \n\
                                I told First Mate Topsy to crack it open, as he was an expert in breaking locks. \n\
                                However, inside was not gold or silver \u2014 but hundreds of shrimp, alive and wiggling! \n\
                                Each time we shut the lid and opened it again, there was a fresh batch, as if by magic.',

                                'We quickly began to fight over the tasty, endless shrimp. Friend turned against friend, each pirate plotting to steal the chest for himself! \n\
                                Our ship became a place of greed and distrust, so we stayed on the island, hiding in the sand dunes. \n\
                                It was then that I, Captain Fishbeard, yelled, "Arrr! What good is a chest full of shrimp if we have no ship to sail?"',

                                'My words, simple and true, cooled our anger. Though we were friends, greed had nearly torn the entire crew apart!\n\
                                So from that moment on, instead of plotting against each other, we decided to share the wiggly treasure. We traded shrimp at every port we visited, spreading food and wealth across the Seven Seas.',

                                'Thus, we came to understand the power of greed, and the even greater power of working together.\n\
                                Through sharing and teamwork, our friendship grew stronger than ever before.',                
                               
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "5%",
                            rotate: "1deg",
                        }
                    }
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the theme of this story?",
                        correctIndex: 2,
                        paragraph: [
                            "The pir[a]tes found a chest full of shrimp",
                            "Shrimp is worth more [t]han gold or silver",
                            "Sharing is [m]ore powerful than greed",
                        ],
                    }, 
                    {
                        title: "{2.} What is the conflict?",
                        correctIndex: 1,
                        paragraph: [
                            "The pirates hid in the island\'s du[n]es",
                            "The pir[a]tes' friendship was threatened by greed",
                            "T[h]e pirates had lots of shrimp to trade",
                        ],
                    },    
                    {
                        title: "{3.} What is the setting?",
                        correctIndex: 0,
                        paragraph: [
                            "An island and a [s]hip",
                            "[C]amp Calamari",
                            "A sunny da[y]",
                        ],
                    }, 
                    {
                        title: "{4.} From whose point of view is this story told?",
                        correctIndex: 2,
                        paragraph: [
                            "Fir[s]t Mate Topsy",
                            "The s[h]rimp",
                            "Cap[t]ain Fishbeard",
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


  