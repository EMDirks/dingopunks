// NOTE: education.commonCore standards in this file were auto-distributed by AI and might need manual review at some future point.

const resource =  {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/reading/all/thumbnail-5th-grade.png",
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
                "RF.5.4",
                "RF.5.4a",
                "RF.5.4b",
                "RI.5.1",
                "RI.5.2",
                "RI.5.5",
                "RI.5.8",
                "RI.5.9",
                "RI.5.10",
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
                incomplete: "Hey, friend! I'm Driftwood Dan, Camp Calamari's finest collector of... well, driftwood. I guess I gotta shore up the camp's fences before the pirates get here. Wanna help?",
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
                            paragraph:  "The salty sea can bend and twist wood in all sorts of unfortunate ways. \n\
                                        We call this stuff Twistwood, since it's all twisted up like a pretzel. \n\
                                        Problem is, it's much too tangled to be of any help! So keep it on the beach. We'll find better pieces to patch up our fences.",
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
                                        but way too heavy to move. These massive stumps require an entire crew to carry, and we just don't have the time. \n\
                                        When you encounter Stumpwood on the beach, move on.",
                            transform: {
                                translateX: "10%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Plankwood",
                            paragraph:  "Keep your eyes peeled for finely-carved Plankwood \u2014 it's more useful than treasure, and almost as rare! \n\
                                        Plankwood comes from old shipwrecks, crafted with skill and tested by the mighty waves.\n\
                                        It's perfect for rebuilding old fences, so grab as many as you can carry. Just watch out for nails!",
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
                        correctIndex: 1,
                        paragraph: [
                            "The sea c[a]n cause wood to twist",
                            "Twi[s]twood is too tangled to be useful",
                            "Twis[t]wood is shaped like a pretzel",
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of Stumpwood?",
                        correctIndex: 2,
                        paragraph: [
                            "Stump[w]ood makes sturdy fences",
                            "Stumpwood re[q]uires an entire crew to carry",
                            "Stumpwood is too he[a]vy to be useful",
                        ]
                    },
                    {
                        title: "{3.} What is the main idea of Plankwood?",
                        correctIndex: 0,
                        paragraph: [
                            "Pla[n]kwood is extremely useful",
                            "Plankwood is crafted with s[k]ill",
                            "Plankwood c[a]n contain nails",
                        ]
                    },
                    {
                        title: "{4.} What supports Plankwood's main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Plankwood comes from old s[h]ipwrecks...\"",
                            "\"It's perfect for rebuil[d]ing old fences...\"",
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
                "L.5.5",
                "L.5.5a",
                "RL.5.1",
                "RL.5.4",
                "RL.5.5",
                "RL.5.6",
                "RL.5.10",
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
                incomplete: "Listen here, landlubber! We're brewing up a slime that'll have those pirates slipping and sliding all over. Problem is, this recipe from my old boss is real confusing... Can you make any sense of it?",
                complete: "Appreciate the help, matey. This slime will have those pirates slipping and sliding like eels on a buttered deck!"
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
                                'Today, we brew slime \u2014 slippery and thick!',
                                'Some key ingredients will do the trick.'
                            ],
                            [
                                'In a hefty pot, with careful hands,',
                                'add some flour from distant lands.',
                                'Pour in some oil, slick and fine,',
                                'and a pinch of glitter for style and shine.',
                            ],
                            [
                                'Pulverize a lemon; toss the zest!',
                                'Adding some salt is probably best.',
                                'Stir and simmer, \'til it looks just right,',
                                'a greasy brew, ready for the fight!'
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
                "CCRA.R.3",
                "CCRA.R.4",
                "CCRA.R.7",
                "CCRA.R.9",
                "RL.5.2",
                "RL.5.3",
                "RL.5.4",
                "RL.5.7",
                "RL.5.10",
                "L.5.4",
                "L.5.4a",
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
                incomplete: "Oh, my stars! A visitor... how unexpected. Well, while you're here, perhaps you can fix my shattered crystal mirror? We can use it to peer into the future; to see the pirates' plan of attack!",
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
                        { text: "Stars are a symphony of lights.", image: "1.png" }, 
                        { text: "Love is like a candle in the darkness.", image: "2.png" },     
                        { text: "This elixir is as blue as the sea.", image: "3.png" },                     
                        { text: "The sun is like a huge golden coin.", image: "4.png" },
                        { text: "Her magic spell zoomed across the field.", image: "5.png" }, 
                        { text: "The moon danced among the stars.", image: "6.png" }, 
                        { text: "Dreams are windows to other realms.", image: "7.png" },               
                        { text: "Life is a puzzle made of countless pieces.", image: "8.png" },
                        { text: "Fate is a river filled with twists and turns.", image: "9.png" },   
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the puzzle piece with the sun?",
                        correctIndex: 0,
                        paragraph: [
                            "[S]imile",
                            "Metaph[o]r",
                            "Hype[r]bole",
                        ],
                    },
                    {
                        title: "{2.} What is the puzzle piece in the middle?",
                        correctIndex: 2,
                        paragraph: [
                            "Simi[l]e",
                            "Metaph[o]r",
                            "Onomo[t]opoeia",
                        ],
                    },
                    {
                        title: "{3.} What is the puzzle piece with the moon?",
                        correctIndex: 0,
                        paragraph: [
                            "Personific[a]tion",
                            "[S]imile",
                            "Allus[i]on",
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
                "CCRA.L.4",
                "CCRA.L.6",
                "CCRA.R.4",
                "CCRA.R.8",
                "RF.5.3",
                "RF.5.4",
                "RF.5.4a",
                "RF.5.4b",
                "RF.5.4c",
                "RI.5.10",
                ]
            },
            characterName: "Broken Animatronic",
            assets: {
                nodeBackground: "melodina.png",
                characterShopkeeper: "melodina.png",
                activityBackground: "melodina.png",
            },
            code: "NODE",
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
                                paragraph: "1. Old motors require [perpetual] maintenance every single day."
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
                                paragraph: "2. You can speed up [sluggish] gears with some fresh oil."
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
                                paragraph: "3. If you get [bewildered] easily, just follow the instructions."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-8%",
                                translateY: "5%",
                                rotate: "-1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "4. You should scrub grimy metal parts until they\'re [speckless]."
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
                        title: "{1.} Using context clues, 'perpetual' means:",
                        word: "CONSTA[N]T",
                    },
                    {
                        title: "{2.} Using context clues, 'sluggish' means:",
                        word: "SL[O]W",
                    },
                    {
                        title: "{3.} Using context clues, 'bewildered' means:",
                        word: "CONFUSE[D]",
                    },
                    {
                        title: "{4.} Using context clues, 'speckless' means:",
                        word: "CL[E]AN",
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
                "RF.5.4a",
                "RI.5.3",
                "RL.5.1",
                "RL.5.2",
                "RL.5.3",
                "RL.5.6",
                "RL.5.10",
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
                incomplete: "Arr! Yes, I'm a pirate... but I'm on yer side. I need ye to read a tale from me own life; a look inside the mind of pirates. Use its knowledge to fend off those Red Tide scallywags once and for all!",
                complete: "Keep up that sharp mind, and perhaps ye will sail with me crew one day."
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
                            
                                'One sunny morn, after setting sail from Camp Calamari, I led my crew of pirates to a small island in the middle of the sea. \n\
                                There, upon the beach, was an old chest half-buried in the sand.',

                                'With dreams of gold and silver twinkling in our eyes, we hauled the chest aboard our ship. \n\
                                I instructed First Mate Topsy to crack it open, as he was an expert in breaking locks. \n\
                                However, inside was not gold or silver \u2014 but hundreds of shrimp, alive and wiggling! \n\
                                Each time we shut the lid and opened it again, there was a fresh batch, as if by magic.',

                                'We quickly began to fight over the endless shrimp. Friend turned against friend, each pirate plotting to steal the chest for himself! \n\
                                Our ship became a place of greed and distrust, so we stayed on the island, hiding in the dunes. \n\
                                It was then that I, Captain Fishbeard, hollered, "Arrr! What good is a chest full o\' shrimp if we have no ship to sail?"',

                                'My words, simple and true, rang loud across the beach. Though we were friends, greed had nearly ripped us apart!\n\
                                So from that moment on, instead of plotting against each other, I devised a plan for my crew to share the wiggly treasure with everyone. We traded shrimp at every port we visited, spreading food and wealth across the Seven Seas.',

                                'Thus, we came to understand the terrible power of greed, and the even greater power of working together.\n\
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
                            "The pir[a]tes found a chest of endless shrimp",
                            "Shrimp is worth more [t]han gold or silver",
                            "Sharing is [m]ore powerful than greed",
                        ],
                    }, 
                    {
                        title: "{2.} What is the conflict?",
                        correctIndex: 1,
                        paragraph: [
                            "The chest did not conta[i]n gold or silver",
                            "The pir[a]tes' friendship was threatened by greed",
                            "T[h]e pirates had lots of shrimp to trade",
                        ],
                    },    
                    {
                        title: "{3.} What character trait does Capt. Fishbeard have?",
                        correctIndex: 2,
                        paragraph: [
                            "Fea[r]fulness",
                            "Ignora[n]ce",
                            "Leader[s]hip",
                        ],
                    }, 
                    {
                        title: "{4.} From what point of view is this story told?",
                        correctIndex: 0,
                        paragraph: [
                            "Firs[t] Person",
                            "S[e]cond Person",
                            "Third Pers[o]n",
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


  