const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/reading/all/thumbnail-4th-grade.png",
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
                incomplete: "Howdy, welcome to the farm. It's getting dark fast! Luckily, I just got a new shipment of candles. Can you tell me the main idea of each type?",
                complete: "Enjoy your stay at the farm! Just don't spend too much time inside the Frantic Factory. That place freaks me out at night..."
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
                            paragraph:  "Running late on the harvest this year? No problem! All you need are a few Harglow Candles. \n\
                                        Just stick them in the ground next to any crops that aren't finished growing, light them up, and wait. \n\
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
                                        These Applecrisp Candles are made from the freshest apples we could find, mixed with spicy cinnamon.\n\
                                        They're certain to help you stay calm during the stress of harvest time.",
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
                                        An early frost will kill your crops, unless you have a ton of Frostwick Candles!\n\
                                        Much like the Harglow Candles, all you need to do is stick these in the ground next to your plants.\n\
                                        Their magical warmth will keep even the coldest frost away.",
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
                            "Harglow Candles m[u]st be stuck in the ground",
                            "Harglow Candles take five m[i]nutes to work"
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of Applecrisp Candles?",
                        correctIndex: 1,
                        paragraph: [
                            "A[p]plecrisp Candles contain cinnamon",
                            "Applecr[i]sp Candles help you relax",
                            "Applecrisp Candles will [s]tress you out"
                        ]
                    },
                    {
                        title: "{3.} What is the main idea of Frostwick Candles?",
                        correctIndex: 1,
                        paragraph: [
                            "Frostwick Candles are ma[g]ic",
                            "Frostwick Candles prote[c]t crops from frost",  
                            "F[r]ostwick Candles will kill your crops"
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
            code: "LEAF",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "My dear, sweet friends \u2014 please, gather 'round. For many years I've grown from this ground. My wisdom is often ignored, it's true. But read my poem, it might help you!",
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
                        author:    "By Stefan Sage",
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
                        'A. What is the author\'s first name?',
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
                incomplete: "We ain't waiting around for those Fallcrawlers to arrive... They'll gobble us up for sure! While we pack up, can you put together the pieces of our map? We follow the stars, you see.",
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
                        { text: "The fire glowed like a beautiful sunset.", image: "1.png" },
                        { text: "The comet zoomed across the night sky.", image: "2.png" },      
                        { text: "Galaxies are shimmering quilts of stars.", image: "3.png" },                     
                        { text: "Her knowledge was as vast as space.", image: "4.png" },
                        { text: "Stars are like diamonds in the sky.", image: "5.png" },
                        { text: "Space is a glittering ocean of discovery.", image: "6.png" }, 
                        { text: "Planets are colorful jewels in space.", image: "7.png" },                                         
                        { text: "The night sky is a canvas full of stars.", image: "8.png" },
                        { text: "Astronomy is a window to ancient knowledge.", image: "9.png" },          
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
                        title: "{2.} The puzzle piece without a star is a:",
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
                        rotate: "-2deg"
                    },
                    passage: [
                        {
                            
                            text: {
                                paragraph: "1. These [gargantuan] pumpkins do not fit inside the small bins."
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
                                paragraph: "2. These rotten tomatoes are so [rank], you'll have to hold your nose."
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
                                paragraph: "3. This [delectable] corn is bursting with amazing flavor."
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
                                paragraph: "4. The weird shape of this squash makes it [cumbersome] to carry."
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
                        title: "{1.} Using context clues, 'gargantuan' means:",
                        word: "HU[G]E",
                    },
                    {
                        title: "{2.} Using context clues, 'rank' means:",
                        word: "SM[E]LLY",
                    },
                    {
                        title: "{3.} Using context clues, 'delectable' means:",
                        word: "T[A]STY",
                    },
                    {
                        title: "{4.} sing context clues, 'delectable' means:",
                        word: "AWKWA[R]D",
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
 
                            'On a quiet farm surrounded by fields of corn, young Sadie faced a difficult challenge. \n\
                            Crows would swoop down to nibble on her family\'s precious vegetables! But this year, \n\
                            Sadie\'s father hurt his leg and couldn\'t build a scarecrow as usual. \n\
                            Determined to help, Sadie decided to build one herself.'
                            ,
                            'First, she asked her mother for a pile of old clothes. \n\
                            Then, she wandered the garden looking for a pumpkin to use as a head. \n\
                            She picked a nice lumpy one, with a twisted stem that looked just like a nose. \n\
                            After finding a sturdy stick to hold the scarecrow together, she headed out into the cornfield.'
                            ,
                            'Sadie had never built a scarecrow before, but she refused to give up. \n\
                            As day turned to night, she worked tirelessly under the moonlight. \n\
                            Strange sounds echoed across the fields, and scary shadows danced around her. \n\
                            Sadie continued despite her fears, knowing she had to finish. \n\
                            Eventually, she did \u2014 and she set up her new creation in the middle of the field.'
                            ,
                            'Sadie then rushed back to the porch and turned on the light, revealing that the scary shadows \n\
                            were just friendly owls rustling in the trees. \n\
                            She went to bed exhausted, but proud of her work.'
                            ,
                            'The next morning, Sadie saw that not a single ear of corn had been eaten. \n\
                            Her scarecrow had worked; the crows were nowhere to be seen! \n\
                            It was then that she realized something. \n\
                            When you work hard and never give up, \n\
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
                        title: "{1.} What is the setting of this story?",
                        correctIndex: 0,
                        paragraph: [
                            "A [c]orn farm",
                            "A dark fo[r]est",
                            "A tiny [v]illage",
                        ],
                    }, 
                    {
                        title: "{2.} What character trait best describes Sadie?",
                        correctIndex: 1,
                        paragraph: [
                            "L[a]zy",
                            "Dete[r]mined",
                            "Angr[y]",
                        ],
                    }, 
                    {
                        title: "{3.} What did the scary shadows turn out to be?",
                        correctIndex: 2,
                        paragraph: [
                            "Pum[p]kins",
                            "Other scarecrow[s]",
                            "[O]wls",
                        ],
                    }, 
                    {
                        title: "{4.} What is the theme of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Crows love eating ve[g]etables",
                            "Challenges can be overcome with hard [w]ork",
                            "Old clothes are perfect for maki[n]g scarecrows"
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

  