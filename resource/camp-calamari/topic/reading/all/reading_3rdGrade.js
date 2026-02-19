const resource =  {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/reading/all/preview-3rd-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    activityArray: [
        /* Driftwood Beach */
        {
            title: "Driftwood Beach",
            characterName: "Driftwood Dan",
            topic: "Main Idea and Supporting Details",
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
                incomplete: "Hey, friend! I'm Driftwood Dan, and I collect... well, driftwood. I'm in charge of fixing up the camp's fences before the pirates get here, but I need to gather some wood first. Want to help?",
                complete: "I'm just a piece of driftwood, gathering pieces of... uh, myself? It's a weird job, but hey \u2014 gotta do what it takes."
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
                                        Problem is, it's too twisty to be useful! So keep it on the beach. We'll find better pieces to fix up our fences.",
                            transform: {
                                translateX: "0%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "Stumpwood",
                            paragraph:  "Ah... Stumpwood. It's like bringing a whole tree to the party! Great for making strong fences, \n\
                                        but way too heavy to move on your own. These huge pieces of wood can only be carried by four or five people, and we just don't have the time. \n\
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
                            paragraph:  "Keep your eyes open for Plankwood. It's super useful, and also super rare! \n\
                                        Plankwood comes from old shipwrecks, made with skill and tested by the waves.\n\
                                        It's really good for fixing up fences, so grab as many pieces as you can carry. Just watch out for nails!",
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
                            "The sea can bend and twist [w]ood",
                            "Twi[s]twood is too twisty to be useful",
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of Stumpwood?",
                        correctIndex: 0,
                        paragraph: [
                            "Stumpwood is too he[a]vy to be useful",
                            "Stumpwood takes f[o]ur or five people to carry",
                            "Trees like to part[y]",
                        ]
                    },
                    {
                        title: "{3.} What is the main idea of Plankwood?",
                        correctIndex: 0,
                        paragraph: [
                            "Pla[n]kwood is super useful",
                            "Plankwood is made with s[k]ill",
                            "Plankwood can [h]ave nails",
                        ]
                    },
                    {
                        title: "{4.} What supports Plankwood's main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"...[a]nd also super rare!\"",
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
            assets: {
                nodeBackground: "chef-gumbo.png",
                characterShopkeeper: "chef-gumbo.png",
                activityBackground: "chef-gumbo.png",
            },
            code: "TIDE",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Listen here, you! We're making a slime that'll have those pirates slipping and sliding all over. Problem is, this recipe from my old boss is too confusing... Can you figure it out for me?",
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
                        title:     "Slick Slime",
                        author:    "By Chef Scully Squidlo",
                        paragraph: [
                            [
                                'In a heavy pot, with both your hands,',
                                'add some flour from distant lands.',
                                'Pour in some oil, smooth and fine,',
                                'and a bit of glitter for extra shine.',
                            ],
                            [
                                'Squeeze a lemon to make it sour.',
                                'Keep on stirring for at least an hour.',
                                'Let it cook until it\'s right,',
                                'a slimy brew, ready for the fight!'
                            ]
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "6%",
                            rotate: "2deg",
                        }
                    }
                },
                crossword: {
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. Do lines 5 and 6 rhyme? (YES/NO)', 
                        'B. What is the author\'s last name?',
                        'C. How many lines are in this poem?',
                        'D. How many syllables are in line 4?',


                        
                    ],
                    puzzle: [
                        ["(A)Y","0","0","0","0","0","0"],
                        ["4E","0","0","(C)E","0","0","0"],
                        ["(B)S","Q","U","2I","3D","L","O"],
                        ["0","0","0","G","0","0","0"],
                        ["0","0","0","H","0","0","0"],
                        ["0","0","0","(D)1T","E","N","0"],
                    ]
                }
            },
        },
        /* Mystic Hideaway */
        {
            title: "Mystic Hideaway",
            characterName: "Madame Mystica",
            topic: "Similes and Metaphors",
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
                incomplete: "Oh, my stars! I don\'t get many visitors... Well, while you're here, maybe you can fix up my magic mirror? I can use it to look into the future and see the pirates' plans.",
                complete: "Return any time, young one, and I'll read your fortune."
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
                        { text: "Sometimes you must be as brave as a lion.", image: "1.png" }, 
                        { text: "Dreams are windows to other worlds.", image: "2.png" },     
                        { text: "This potion is as blue as the sea.", image: "3.png" },                     
                        { text: "The sun is like a huge golden coin.", image: "4.png" },
                        { text: "Magic is a key to unlocking wonder.", image: "5.png" }, 
                        { text: "The moon glows brightly at night.", image: "6.png" }, 
                        { text: "Dreams are windows to other worlds.", image: "7.png" },               
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
                                paragraph: "1. Clean [filthy] metal parts with soap and water."
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
                                paragraph: "2. Use a crane to [haul] up missing pieces from beneath the water."
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
                                paragraph: "3. Speed up [sluggish] gears with some fresh oil."
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
                                paragraph: "4. Putting in new motors will also help you move at a [rapid] speed."
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
                        title: "{1.} Using context clues, 'filthy' means:",
                        word: "DI[R]TY",
                    },
                    {
                        title: "{2.} Using context clues, 'haul' means:",
                        word: "P[U]LL",
                    },
                    {
                        title: "{3.} Using context clues, 'sluggish' means:",
                        word: "[S]LOW",
                    },
                    {
                        title: "{4.} Using context clues, 'rapid' means:",
                        word: "FAS[T]",
                    },

                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "I used to love singing, but I'm too rusty now. Luckily I found some old labels with tips to fix me up. Can you decode them? Once I'm back to normal, I can sing a song to enchant the pirates!",
                complete: "You know I used to be in a band? It was a little pizza place at the mall... Maybe some day you can help me return."
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
        },
        /* Fishbeard's Ship */
        {
            title: "Fishbeard's Ship",
            characterName: "Captain Fishbeard",
            topic: "Elements of a Story",
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
                incomplete: "Arr! Yes, I'm pirate, but I'm on your side now. I think you should read a tale from my own life; a look inside the mind of pirates. Use it to prepare for the Red Tide's arrival.",
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
                                There, on the beach, was an old chest buried in the sand.',

                                'With dreams of gold and silver twinkling in our eyes, we carried the chest aboard our ship. \n\
                                I told First Mate Topsy to crack it open, as he was our smartest pirate. He could open any lock. \n\
                                However, inside was not gold or silver \u2014 but hundreds of shrimp, alive and wiggling! \n\
                                Each time we shut the lid and opened it again, there was a fresh batch, as if by magic.',

                                'We quickly began to fight over the tasty shrimp. Friend turned against friend, each pirate planning to steal the chest for himself! \n\
                                We lost trust in each other as our ship became a place of greed, so we stayed on the island and hid. \n\
                                It was then that I, Captain Fishbeard, yelled, "Arrr! What good is a chest full of shrimp if we have no ship to sail?"',

                                'My words were simple and true. Though we were friends, greed had nearly torn the entire crew apart!\n\
                                So, from that moment on, we decided to share the wiggly treasure. We sold shrimp at every beach we visited, spreading tasty food across the Seven Seas.',

                                'In the end, working together led to much more success than being greedy.\n\
                                Thanks to sharing and teamwork, our friendship grew stronger than ever before.',                
                               
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
                            "The pir[a]tes found some shrimp",
                            "Shrimp is worth more [t]han gold",
                            "Sharing is [m]ore powerful than greed",
                        ],
                    }, 
                    {
                        title: "{2.} What is the setting?",
                        correctIndex: 0,
                        paragraph: [
                            "An isl[a]nd and a ship",
                            "[C]amp Calamari",
                            "A sunny da[y]",
                        ],
                    }, 
                    {
                        title: "{3.} From whose point of view is this story told?",
                        correctIndex: 1,
                        paragraph: [
                            "Fi[r]st Mate Topsy",
                            "Captain Fi[s]hbeard",
                            "The s[h]rimp",
                        ],
                    },    
                    {
                        title: "{4.} What trait describes First Mate Topsy?",
                        correctIndex: 2,
                        paragraph: [
                            "Joy[f]ul",
                            "Mea[n]",
                            "Smar[t]",
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

