// NOTE: education.commonCore standards in this file were auto-distributed by AI and might need manual review at some future point.

const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/reading/all/thumbnail-5th-grade.png",
        timerLabel: "TIME TO SUNSET"
    },

    activityArray: [
        // passages
        {
            title: "Candlewick's Cart",
            characterName: "Candlewick",
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
                incomplete: "Howdy, welcome to the farm. It's getting dark fast! Luckily, I just got a new shipment of candles. I need you to read the labels and answer some questions... think ya can handle that?",
                complete: "Enjoy your stay here! Just don't spend too much time inside the Frantic Factory.. that place freaks me out after dark."
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
                            title:      "Harglow Candles",
                            paragraph:  "Running late on the harvest this year? No problem! All you need are a few Harglow Candles; they're incredibly strong. \n\
                                        Just stick them in the ground next to any crops that aren't quite finished growing, light them up, and wait. \n\
                                        In about five minutes, your fruits and veggies will be ripe and ready to pick! Just don't leave these candles lit for too long, \n\
                                        otherwise your crops will become overripe and might start to rot.",
                            transform: {
                                translateX: "-10%",
                                translateY: "-1%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Frostwick Candles",
                            paragraph:  "It's the fall, and that means it can get pretty cold outside. Unfortunately, you can't put a sweater on your crops, \n\
                                        but you can use a bunch of Frostwick candles! They're the perfect way to prevent an early frost from killing your harvest.\n\
                                        However, these candles are very weak, so you'll need at least a hundred to cover an entire field. \n\
                                        Just spread them out evenly, stick them in the ground, and light them. \n\
                                        Their magical warmth will keep even the coldest frost away.",
                            transform: {
                                translateX: "7%",
                                translateY: "-8%",
                                rotate: "-3deg",
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
                            "Harglow Candles must be stuck [i]n the ground",
                            "Harglow Candles t[a]ke 5 minutes to work"
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of Frostwick Candles?",
                        correctIndex: 1,
                        paragraph: [
                            "Frostwick Candles are [v]ery weak",
                            "Frostw[i]ck Candles protect crops from frost",  
                            "Frostwick [C]andles are magic"
                        ]
                    },
                    {
                        title: "{3.} What do both candles have in common?",
                        correctIndex: 2,
                        paragraph: [
                            "Both candles are v[e]ry weak",
                            "Both ca[n]dles can cause your crops to rot",  
                            "Both candles [c]an help your harvest"
                        ]
                    },
                    {
                        title: "{4.} Both of these passages are:",
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
                nodeBackground: "applegrim-orchard.png",
                characterShopkeeper: "crispin-the-cider-sage.png",
                activityBackground: "applegrim-orchard.png",
            },
            code: "LEAF",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "My dear, sweet friends \u2014 please, gather 'round! For countless years I've grown from this ground. My wisdom is often ignored, it's true. But read my poem, it might help you!",
                complete: "The blue raccoon, with her polka-dot spoon, sipped sunlight soup beneath the moon!"
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
                        author:    "By Stefan",
                        paragraph: [
                            [
                                'Beneath my branches, tangled and wise,',
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
                        'A. Who is the speaker of this poem?',
                        'B. What is the rhyme scheme of stanza 2?',
                        'C. How many syllables are in line 5?',
                        'D. What color raccoon should you never dance with?',     
                        
                        
                    ],
                    puzzle: [
                        ["(A)S","T","E","4F","A","(C)N","0"],
                        ["0","0","0","0","0","I","0"],
                        ["0","0","(B)A","0","0","N","0"],
                        ["0","0","(D)B","1L","U","2E","0"],
                        ["0","0","3A","0","0","0","0"],
                        ["0","0","B","0","0","0","0"],
                    ]
                }
            },
        },
        // puzzle
        {
            title: "Camp Gnomad",
            characterName: "The Gnomads",
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
                incomplete: "We ain't waiting around for them Fallcrawlers to arrive... They'll eat us up for sure! While we pack our things, can you put together the pieces of our map? We follow the stars, you see.",
                complete: "Thanks for the help, friends. Perhaps our paths will cross again. Just follow the stars!"
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
                        { text: "The fire burned like a beautiful sunset.", image: "1.png" },
                        { text: "We waited forever to see a shooting star.", image: "2.png" },      
                        { text: "A meteor whooshed across the sky", image: "3.png" },                     
                        { text: "Her knowledge was as vast as space.", image: "4.png" },
                        { text: "Stars are like diamonds in the sky.", image: "5.png" },
                        { text: "The glowing comet soon fizzled away.", image: "6.png" }, 
                        { text: "Planets are colorful jewels in space.", image: "7.png" },                                         
                        { text: "The night sky is a canvas full of stars.", image: "8.png" },
                        { text: "Thousands of tiny stars twinkled above.", image: "9.png" },          
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} The three gray puzzle pieces are all:",
                        correctIndex: 2,
                        paragraph: [
                            "Simil[e]s",
                            "Met[a]phors",
                            "Ono[m]atopoeia",
                        ],
                    },
                    {
                        title: "{2.} The puzzle piece on the bottom left is:",
                        correctIndex: 2,
                        paragraph: [
                            "An idio[m]",
                            "An al[l]usion",
                            "A met[a]phor",
                        ],
                    },
                    {
                        title: "{3.} The puzzle piece without a star is a:",
                        correctIndex: 1,
                        paragraph: [           
                            "[A]llusion", 
                            "Hype[r]bole",
                            "S[i]mile"         
                        ],
                    },
                    {
                        title: "{4.} The puzzle piece in the middle is a:",
                        correctIndex: 0,
                        paragraph: [
                            "[S]imile",
                            "H[y]perbole",
                            "Met[a]phor",                     
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
            characterName: "Hollow Jack",
            assets: {
                nodeBackground: "frantic-factory.png",
                characterShopkeeper: "hollow-jack.png",
                activityBackground: "frantic-factory.png",
            },
            code: "HAUL",
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
                                paragraph: "1. This [colossal] squash will not fit inside a small bin."
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
                                paragraph: "2. This [delectable] corn is bursting with fabulous flavor."
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
                                paragraph: "3. Carrying these massive pumpkins is an [onerous] task."
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
                                paragraph: "4. These rotten tomatoes are so [fetid], you'll have to hold your nose."
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
                        title: "{1.} Using context clues, 'colossal' means:",
                        word: "[H]UGE",
                    },
                    {
                        title: "{2.} Using context clues, 'delectable' means:",
                        word: "T[A]STY",
                    },
                    {
                        title: "{3.} Using context clues, 'onerous' means:",
                        word: "DIFFIC[U]LT",
                    },
                    {
                        title: "{4.} Using context clues, 'fetid' means:",
                        word: "SME[L]LY",
                    },
                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "Everyone is lazy. Except me. I work. I work hard. I put crops into packages. I put labels on the packages. The labels are too confusing. Use context clues. Find simpler words. Thank you.",
                complete: "The factory is off limits after dark. Please leave. Thank you."
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
        },
        // short story
        {
            title: "Mallow Maze",
            characterName: "Mabel the Messenger",
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
                nodeBackground: "mallow-maze.png",
                characterShopkeeper: "mabel-mallow.png",
                activityBackground: "mallow-maze.png",
            },
            code: "RIPE",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the short story, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "You know what might scare those Fallcrawlers away? A scarecrow! I have a story about one; wanna read it and tell me what you think? I need to deliver it to the farm.",
                complete: "Hey, uh. Tell me if you ever see those Fallcrawlers around. I mean, I'm not afraid of them or anything! I'm just curious..."
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
 
                            'On a serene farm surrounded by fields of corn, young Sadie faced quite a challenge. \n\
                            Crows would swoop down to nibble on her family\'s precious vegetables! But this year, \n\
                            Sadie\'s father injured his leg and couldn\'t build a scarecrow as usual. \n\
                            Determined to help, Sadie decided to make one herself.'
                            ,
                            'First, she asked her mother for a heap of old clothes. \n\
                            Then, she wandered the garden looking for a pumpkin to use as a head. \n\
                            She picked a nice lumpy one, with a gnarled stem that looked just like a nose. \n\
                            After finding a sturdy stick to hold the scarecrow together, Sadie headed out into the cornfield.'
                            ,
                            'Sadie had never assembled a scarecrow before, but she refused to give up. \n\
                            As day turned to night, she worked tirelessly under the moonlight. \n\
                            Strange sounds echoed across the fields, and haunting shadows danced around her. \n\
                            Sadie persisted despite her fears, knowing she had to finish. \n\
                            Eventually, she did \u2014 and she set up her new creation in the middle of the field.'
                            ,
                            'Sadie sprinted back to the porch and turned on the light, revealing that the haunting shadows \n\
                            were just friendly owls rustling in the trees. \n\
                            She went to bed exhausted, but proud of her work.'
                            ,
                            'When she woke at dawn, Sadie noticed that not a single ear of corn had been eaten. \n\
                            Her scarecrow had worked; the crows were nowhere to be seen! \n\
                            It was then that she realized something: \n\
                            when you work hard and persevere, \n\
                            you can overcome even the hardest challenges.'

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
                        title: "{1.} What is the theme of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Crows love eating ve[g]etables",
                            "Challenges can be ove[r]come with perseverance",
                            "Old clothes are perfect for making scare[c]rows"
                        ],
                    }, 
                    {
                        title: "{2.} What character trait best describes Sadie?",
                        correctIndex: 1,
                        paragraph: [
                            "L[a]zy",
                            "Determ[i]ned",
                            "Angr[y]",
                        ],
                    }, 
                    {
                        title: "{3.} What line best demonstrates the trait from #2?",
                        correctIndex: 2,
                        paragraph: [                   
                            "\"Sadie\'s f[a]ther injured his leg...\"",
                            "\"Strange sound[s] echoed across the fields...\"",
                            "\"She [p]ersisted despite her fears...\"",
                        ],
                    }, 
                    {
                        title: "{4.} From what point of view is this story told?",
                        correctIndex: 2,
                        paragraph: [
                            "Fi[r]st person",
                            "Second pers[o]n",
                            "Third p[e]rson",
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
