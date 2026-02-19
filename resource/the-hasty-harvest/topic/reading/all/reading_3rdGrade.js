const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/preview-3rd-grade.png",
        timerLabel: "TIME TO SUNSET"
    },

    activityArray: [
        // passages
        {
            title: "Candlewick's Cart",
            characterName: "Candlewick",
            topic: "Main Idea",
            assets: {
                nodeBackground: "candlewicks-cart.png",
                characterShopkeeper: "candlewick.png",
                activityBackground: "candlewicks-cart.png"
            },
            code: "WICK",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read each passage, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Howdy, welcome to the farm. It's getting dark fast! Good thing I have a whole cart full of candles. Can you look over these and tell me the main idea of each type?",
                complete: "Enjoy your time at the farm! Just stay away from the Frantic Factory at night..."
            },
            content: {
                passage: {
                    style: {
                        material: "style-material--paper",
                        text: {
                            title: "style-text--printingPress-normals",
                            paragraph: "style-text--printingPress-normal",
                        }
                    },
                    item: [
                        {
                            image:      "1.png",
                            title:      "Harglow Candles",
                            paragraph:  "Running late on the harvest this year? No problem! All you need are a few Harglow Candles. \n\
                                        Just stick them in the ground next to any crops that aren't finished growing, and wait. \n\
                                        Five minutes later, your fruits and veggies will be ripe and ready to pick!",
                            transform: {
                                translateX: "-10%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "Applecrisp Candles",
                            paragraph:  "Autumn is often a very busy time of year. Even so, it's important to take some time to relax.\n\
                                        These Applecrisp Candles are made from super fresh apples, mixed with very special spices.\n\
                                        They will help you stay calm during the stress of harvest time.",
                            transform: {
                                translateX: "-3%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Frostwick Candles",
                            paragraph:  "It's the fall, and that means it can get pretty cold outside. \n\
                                        An early frost will kill your crops, unless you have a lot of Frostwick Candles!\n\
                                        All you have to do is stick them in the ground next to your plants.\n\
                                        Their magic heat will keep even the coldest frost away.",
                            transform: {
                                translateX: "7%",
                                translateY: "-42%",
                                rotate: "-2deg",
                            }
                        },
                    ],  
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the main idea of Harglow Candles?",
                        correctIndex: 0,
                        paragraph: [
                            "Harglo[w] Candles make crops grow faster",
                            "Harglow Candl[e]s must be stuck in the ground",
                            "Harglow Candles take five mi[n]utes to work"
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of Applecrisp Candles?",
                        correctIndex: 1,
                        paragraph: [
                            "A[p]plecrisp Candles contain spices",
                            "Applecr[i]sp Candles help you relax",
                            "Applecrisp Candles will [s]tress you out"
                        ]
                    },
                    {
                        title: "{3.} What is the main idea of Frostwick Candles",
                        correctIndex: 1,
                        paragraph: [
                            "Frostwick Can[d]les are magic",
                            "Frostwick Candles protect [c]rops from frost",  
                            "Frostwick Can[d]les are useless in cold weather"
                        ]
                    },
                    {
                        title: "{4.} All three of these passages are:",
                        correctIndex: 1,
                        paragraph: [
                            "R[e]asons to avoid using these candles",
                            "Descriptions of how these candles wor[k]",
                            "Tips on how to make these candles last lon[g]er"
                        ]
                    },
                ],
                
            }                     
        },
        // poetry
        {
            title: "Applegrim Orchard",
            characterName: "Stefan Sage",
            topic: "Poetry",
            assets: {
                nodeBackground: "applegrim-orchard.png",
                characterShopkeeper: "crispin-the-cider-sage.png",
                activityBackground: "applegrim-orchard.png",
            },
            code: "RAIN",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "My dear, sweet friends \u2014 please, gather around! For many years I've grown from this ground. Some people ignore my words, it's true. But read my poem, it might help you!",
                complete: "The blue raccoon, with her silver spoon, sipped sunlight soup beneath the moon!"
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
                        title:     "Some Advice",
                        author:    "By Stefan Sage",
                        paragraph: [
                            [
                                'Under my branches, old and wise,',
                                'the seasons pass before my eyes.',
                                'I have advice for the harvest this year \u2014',
                                'the best advice you\'ll ever hear.',
                                
                            ],
                            [
                                'Plant carrots by the light of the moon,',
                                'and count your beans at dawn.',
                                'Never dance with a blue raccoon,',
                                'or sing to a purple swan!'
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
                        'A. What is the author\'s first name?',
                        'B. What is the last word in line 4?',
                        'C. How many syllables are in line 5?',
                        'D. Do lines 1 and 2 rhyme? (YES/NO)',     
                        
                        
                    ],
                    puzzle: [
                        ["0","0","(B)H","0","0","0","0"],
                        ["(A)S","T","E","F","2A","(C)N","0"],
                        ["0","0","A","0","0","3I","0"],
                        ["0","0","1R","0","0","4N","0"],
                        ["0","0","0","0","(D)Y","E","S"],
                        ["0","0","0","0","0","0","0"],
                    ]
                }
            },
        },
        // puzzle
        {
            title: "Camp Gnomad",
            characterName: "The Gnomads",
            topic: "Similes and Metaphors",
            assets: {
                nodeBackground: "camp-gnomad.png",
                characterShopkeeper: "the-gnomads.png",
                activityBackground: "camp-gnomad.png",
            },
            code: "MARS",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Put together the puzzle, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "We are NOT waiting around for those Fallcrawlers to eat us. We're leaving this place! While we pack up, can you put together the pieces of our map? We follow the stars, you see.",
                complete: "Thanks for the help, friends. Maybe our paths will cross again. Just follow the stars!"
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
                        { text: "The fire glowed like a pretty sunset.", image: "1.png" },
                        { text: "The comet zoomed across the sky.", image: "2.png" },      
                        { text: "The Milky Way is a river of stars.", image: "3.png" },                     
                        { text: "Her brain was as big as space.", image: "4.png" },
                        { text: "Stars are like diamonds in the sky.", image: "5.png" },
                        { text: "Space is a sparkly ocean.", image: "6.png" }, 
                        { text: "Planets are colorful jewels in space.", image: "7.png" },                                         
                        { text: "The night sky is a painting full of stars.", image: "8.png" },
                        { text: "The moon is a silver coin in the sky.", image: "9.png" },          
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} The three gray puzzle pieces are all:",
                        correctIndex: 1,
                        paragraph: [
                            "Simil[e]s",
                            "[M]etaphors",
                            "None of t[h]e above",
                        ],
                    },
                    {
                        title: "{2.} The only puzzle piece without a star is a:",
                        correctIndex: 2,
                        paragraph: [
                            "S[i]mile",
                            "Metapho[r]",
                            "None of the [a]bove",
                        ],
                    },
                    {
                        title: "{3.} The three puzzle pieces on the bottom are all:",
                        correctIndex: 1,
                        paragraph: [
                            "[S]imiles",
                            "Metapho[r]s",
                            "N[o]ne of the above",
                        ],
                    },
                    {
                        title: "{4.} The puzzle piece in the middle is a:",
                        correctIndex: 0,
                        paragraph: [
                            "[S]imile",
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
            title: "Frantic Factory",
            topic: "Context Clues",
            characterName: "Hollow Jack",
            assets: {
                nodeBackground: "frantic-factory.png",
                characterShopkeeper: "hollow-jack.png",
                activityBackground: "frantic-factory.png",
            },
            code: "GEAR",
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
                                paragraph: "1. These [enormous] pumpkins do not fit inside the small boxes."
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
                                paragraph: "2. The [scent] of these rotten tomatoes is so bad, your nose will hurt."
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
                                paragraph: "3. This [scrumptious] corn has an amazing flavor."
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
                                paragraph: "4. These potatos are [grimy] and need to be cleaned."
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
                        title: "{1.} Using context clues, 'enormous' means:",
                        word: "BI[G]",
                    },
                    {
                        title: "{2.} Using context clues, 'scent' means:",
                        word: "SM[E]LL",
                    },
                    {
                        title: "{3.} Using context clues, 'scrumptious' means:",
                        word: "T[A]STY",
                    },
                    {
                        title: "{4.} Using context clues, 'grimy' means:",
                        word: "DI[R]TY",
                    },

                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "I am Hollow Jack. I put fruits and veggies into boxes. I put labels on the boxes. But the words on the labels are too hard. Use context clues. Find simpler words. Thank you.",
                complete: "The factory is closed at night. Please leave. Thank you."
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
        },
        // short story
        {
            title: "Mallow Maze",
            characterName: "Mabel the Messenger",
            topic: "Elements of a Story",
            assets: {
                nodeBackground: "mallow-maze.png",
                characterShopkeeper: "mabel-mallow.png",
                activityBackground: "mallow-maze.png",
            },
            code: "CROW",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the short story, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "You know what might scare those Fallcrawlers away? A scarecrow! In fact, I just read a story about making one. Want to read it too? I just need to deliver it to the farm before sunset.",
                complete: "Hey, uh. Tell me if you ever see those Fallcrawlers around..."
            }, 
            content: {
                story: {
                    style: {
                        material: "style-material--paper",
                        text: {
                            title: "style-text--printingPress-normal",
                            author: "style-text--printingPress-normal",
                            paragraph: "style-text--printingPress-normal",
                        }
                    },
                    item: {
                        title:     "Sadie and the Scarecrow",
                        author:    null,
                        paragraph: [
 
                            'On a quiet little corn farm, young Sadie had a hard job to do. \n\
                            Crows would fly down and eat her family\'s crops! But this year, \n\
                            Sadie\'s father hurt his leg and couldn\'t build a scarecrow as usual. \n\
                            So, Sadie decided to build one herself.'
                            ,
                            'First, she asked her mother for a pile of old clothes. \n\
                            Then, she walked through the garden looking for a pumpkin to use as a head. \n\
                            She picked a nice lumpy one, with a long stem that looked just like a nose. \n\
                            After finding a big stick to hold the scarecrow together, Sadie headed out into the cornfield.'
                            ,
                            'Sadie had never built a scarecrow before, but she didn\'t gave up. \n\
                            Even after the sun set, she worked under the light of the moon. \n\
                            She heard strange sounds in the fields, and dark shadows danced all around her. \n\
                            Sadie was scared, but she knew she had to build the scarecrow before morning. \n\
                            When she finally finished it, she set it up in the middle of the field.'
                            ,
                            'Sadie ran back to the porch and turned on the light, showing that the dark shadows \n\
                            were just friendly owls sitting in the trees. \n\
                            She went to bed tired, but proud of her work.'
                            ,
                            'The next morning, Sadie saw that not a single piece of corn had been eaten. \n\
                            Her scarecrow had worked, and the crows were nowhere to be seen! \n\
                            She had learned an important lesson that day. \n\
                            When you work hard and never give up, \n\
                            you can defeat even the hardest challenges.'

                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "10%",
                            rotate: "-2deg",
                        }
                    }
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the setting of this story?",
                        correctIndex: 0,
                        paragraph: [
                            "A [c]orn farm",
                            "A dark fo[r]est",
                            "A tiny [v]illage",
                        ],
                    }, 
                    {
                        title: "{2.} Which of these words best describes Sadie?",
                        correctIndex: 1,
                        paragraph: [
                            "L[a]zy",
                            "Dete[r]mined",
                            "Angr[y]",
                        ],
                    }, 
                    {
                        title: "{3.} What did the pumpkin's stem look like?",
                        correctIndex: 2,
                        paragraph: [
                            "A nec[k]",
                            "A [m]outh",
                            "A n[o]se",
                        ],
                    }, 
                    {
                        title: "{4.} What is the theme of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Crows love to eat ve[g]gies",
                            "You can defeat challenges with hard [w]ork",
                            "Old clothes are great for maki[n]g scarecrows"
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
