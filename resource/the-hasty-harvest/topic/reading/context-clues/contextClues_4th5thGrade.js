const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/reading/context-clues/preview-4th-5th-grade.png",
        timerLabel: "TIME TO SUNSET"
    },

    challengeArray: [

        // ⭐ Candlewick's Cart
        {

            info: {
                type: 'challenge',
                title: "Candlewick's Cart",
                asset: "candlewicks-cart.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Examples",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.6',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.3a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            grade: [4],
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            grade: [4],
                            standard: 'RI.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.3a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            grade: [5],
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            grade: [5],
                            standard: 'RI.5.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Welcome to the farm! It's getting dark fast. Good thing I've got a cart full of candles. But there's a lot of tricky words on these labels, and I don't know what they mean. Think you can help? ",
                    complete: "Be careful around Hollow Jack, okay? He's starting to short-circuit."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "candlewicks-cart.png",
                },

                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "1.png",
                                },
                            },
                            {
                                passage: {
                                    text: "The Eternal Ember is an extraordinary candle with the power to stop time, making it one of the most [<u>esteemed] items on the farm. For example, to honor its immense worth, the candle's original owners built a thick stone wall around it, demonstrating the high regard in which they held this remarkable object.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-9%",
                                translateY: "5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "The Guardian Flame's light forms a glowing shield, keeping away danger like a fortress. This candle helps ensure wealth for the village, but it can get pretty [<u>territorial] at times. For instance, it becomes defensive when farmers try to pick the candle's protected crops, and fiercely guards the nearby area.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-4%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "3.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "The glow of the Wanderlight grants crops the ability to move on their own, guiding them to the market at midnight. This candle is quite useful, but also rather [<u>impish]! It often plays tricks on the farmers by arranging their crops into mysterious patterns. It can even mischievously hide their tools and equipment.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "13%",
                                translateY: "1%",
                                rotate: "-1deg",
                            }
                        }
                    },
                ],  

                style: { 
                    
                    block: {
                        misc: {
                            material: 'paper',
                            padding: "default"
                        },
                        dimension: {
                            width: "percent75",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        }
                    },
                    
                    contentArray: [
                        {
                            dimension: {
                                width: "percent12",
                                height: "auto",
                            }
                        },
                        {
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
                            },
                            dimension: {
                                width: "percent85",
                                height: "auto",
                            }
                        }
                    ]

                },

            },
            
            questions: {
                
                info: {
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] Using context clues, 'esteemed' means:",
                        correctIndex: 1,
                        paragraph: [
                            "My{s}terious",
                            "Highly admi{r}ed",
                            "Ancien{t}",
                        ],
                    },

                    {
                        title: "[<g>2.] Using context clues, 'territorial' means:",
                        correctIndex: 2,
                        paragraph: [
                            'B{r}ightly glowing',
                            'Strongly buil{t}',
                            'Protect{i}ve over a piece of land',
                        ]
                    },

                    {
                        title: "[<g>3.] What line reveals the meaning of 'impish?'",
                        correctIndex: 0,
                        paragraph: [
                            '\"It often {p}lays tricks on the farmers...\"',
                            '\"The glow of the Wanderli{g}ht...\"',
                            '\"...gui{d}ing them to the market at midnight.\"', 
                        ]
                    },

                    {
                        title: "[<g>4.] What else reveals the meaning of 'impish?'",
                        correctIndex: 1,
                        paragraph: [
                            '\"...grants {c}rops the ability to move...\"',
                            '\"...mischievously hides their tools and {e}quipment.\"',
                            '\"This candle is {q}uite useful...\"',
                        ]
                    },

                ],  

                code: {
                    answer: "RIPE",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ Applegrim Orchard
        {

            info: {
                type: 'challenge',
                title: "Applegrim Orchard",
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Definitions",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.6',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.3a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4b',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RF.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RF.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.3a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4b',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RL.5.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "My dearest friends, please gather near. My wisdom runs deep, there's nothing to fear. Many ignore my words, it seems \u2014 but read my poem, find out what it means!",
                    complete: "Crisp air calls as leaves take flight; enjoy this tapestry of orange delight!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "applegrim-orchard.png",
                },

                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Cider Serenade',
                                },
                                subtitle: {
                                    text: "By Stefan Sage",
                                },
                                passage: {
                                    text:   "Golden hues in autumn's care,<br> \
                                            apple cider is everywhere!<br> \
                                            Its [<u>exceptional] scent is so very nice, <br> \
                                            completely outstanding; worth any price.<br> \
                                            <br> \
                                            Give me a glass for this drink so divine,<br> \
                                            [<u>piquant] on the tongue: tangy, spicy, and fine.<br> \
                                            Cider is the essence of every apple tree,<br> \
                                            it's autumn's best gift, I truly decree! <br> \
                                            <br> \
                                            Simmering and flavorful, fall's freshest song \u2014<br> \
                                            [<u>invigorates] the body, makes it lively and strong.<br> \
                                            From Applegrim Orchard to your living room,<br> \
                                            apple cider is fully in bloom!"
                                     }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    }
                ],  

                style: { 
                    
                    block: {
                        misc: {
                            material: 'paper',
                            padding: "double"
                        },
                        dimension: {
                            width: "auto",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    },
                    
                    contentArray: [
                        {
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'small',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            dimension: {
                                width: "full",
                                height: "auto",
                            }
                        }
                    ]

                },

            },
            
            questions: {
                
                info: {
                    type: "crossword"
                },

                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Does \'exceptional\' mean [<u>awful], [<u>great], or [<u>bland]?',
                        'B. Does \'invigorate\' mean [<u>refresh] or [<u>weaken]?',
                        'C. Is \'piquant\' something you [<u>smell] or [<u>taste]?',     
                        'D. Does \'piquant\' mean tangy and spicy? (YES/NO)',
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(D)Y","0"],
                        ["0","0","0","(A)G","0","3E","0"],
                        ["(B)2R","E","F","R","E","S","H"],
                        ["0","0","0","E","0","0","0"],
                        ["0","0","0","A","0","0","0"],
                        ["(C)T","A","S","1T","4E","0","0"],
                    ]
                },  

                code: {
                    answer: "TREE",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ Camp Gnomad
        {

            info: {
                type: 'challenge',
                title: "Camp Gnomad",
                asset: "camp-gnomad.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Synonyms",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.6',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.5c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.3a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RF.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RF.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.5c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.3a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "We are NOT waiting around for those horrible Fallcrawlers to eat us. We're leaving this place! While we pack up, can you put together the pieces of our map? We follow the stars, you see. ",
                    complete: "Farewell, friend. The moon is dark tonight, so be careful out there."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "camp-gnomad.png",
                },

                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "This cheap cider is far too [<u>cloying] and sweet.",
                                }, 
                                backgroundImage: {
                                    file: "1.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The scarecrow was built last fall. ",
                                }, 
                                backgroundImage: {
                                    file: "2.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "This massive, [<u>herculean] squash is almost too large.",
                                }, 
                                backgroundImage: {
                                    file: "3.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The fragrant smoke of [<u>incense] filled the room.",
                                }, 
                                backgroundImage: {
                                    file: "4.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The small farm is busy and [<u>bustling] with activity. ",
                                }, 
                                backgroundImage: {
                                    file: "5.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The Fallcrawlers constantly anger and [<u>incense] us.",
                                }, 
                                backgroundImage: {
                                    file: "6.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The [<u>biting], cold wind hurts my face. ",
                                }, 
                                backgroundImage: {
                                    file: "7.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The crackling and [<u>rustling] of leaves is very peaceful. ",
                                }, 
                                backgroundImage: {
                                    file: "8.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>Glistening], sparkly stars are a wonder to behold. ",
                                }, 
                                backgroundImage: {
                                    file: "9.png"
                                }
                            }
                        ],
                    },
    

                ],  

                style: { 
                    block: {
                        dimension: {
                            width: "puzzleWidth",
                            height: "puzzleHeight",
                        },
                        flexbox: {
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'center',
                                puzzle: 'default'
                            },   
                            dimension: {
                                width: "full",
                                height: "full",
                            },
                            background: {
                                size: 'contain',
                                repeat: 'noRepeat'
                            },
                            flexbox: {
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            
                        } 
                    ]

                },

            },
            
            questions: {
                
                info: {
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] The underlined word in the middle piece means:",
                        correctIndex: 0,
                        paragraph: [
                            "Bu{s}y",
                            "S{m}all",
                        ],
                    },

                    {
                        title: "[<g>2.] Do all 3 bottom pieces contain context clues?",
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },

                    {
                        title: "[<g>3.] In one of the gray pieces, 'incense' means:",
                        correctIndex: 1,
                        paragraph: [
                            'Fr{a}grant smoke',
                            '{E}nrage',
                            'C{o}nstant',
                        ],
                    },

                    {
                        title: "[<g>4.] The underlined word in the top right piece means:",
                        correctIndex: 2,
                        paragraph: [
                            'Ex{t}remely cheap',
                            'Overly sw{e}et',
                            'Ve{r}y big',
                        ],
                    },

                ],  

                code: {
                    answer: "SEER",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ Frantic Factory
        {

            info: {
                type: 'challenge',
                title: "Frantic Factory",
                asset: "frantic-factory.png",
                state: "incomplete",
                hint: {
                    text: "Read each sentence, then type in the answers below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Antonyms",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.6',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.5c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.3a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RF.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RF.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.5c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.3a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Greetings. I am Hollow Jack. I put labels on boxes. But these labels are confusing. Please figure out what they mean. Thank you.",
                    complete: "Your work here is done. You are now intruding. You must leave."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "frantic-factory.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "Label 1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The [<u>luminescence] from this flashlight is quite a contrast to the the dark sky.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Label 2",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This doll's [<u>eerie] chuckling is unlike the familiar, happy laughter of other dolls.",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "-2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Label 3",
                        },
                        contentArray: [
                            {
 
                                passage: {
                                    text: "There is no mistaking these [<u>vibrant] tulips for boring, colorless ones.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-3%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Label 4",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This scarecrow [<u>sanctions] pumpkin-picking for parents only; kids are not allowed.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "-3%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                cryptogram: {
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "11%",
                                rotate: "-2deg",
                            }
                        }
                    },

                ],  

                style: { 
                    block: {
                        misc: {
                            material: 'metal',
                            padding: "default"
                        },
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent35",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
                            },
                            cryptogram: {
                                font1: {
                                    font: 'default',
                                    size: 'medium'
                                },
                                font2: {
                                    font: 'patterns',
                                    size: 'medium'
                                }
                            },
                            dimension: {
                                width: "full",
                                height: "full",
                            }
                            
                        } 
                    ]

                },

            },
            
            questions: {
                
                info: {
                    type: "decoder"
                },

                contentArray: [
                    {
                        title: "[<g>1.] Using context clues, 'luminescence' means:",
                        word: "LI[G]HT",
                    },
                    {
                        title: "[<g>2.] Using context clues, 'eerie' means:",
                        word: "C[R]EEPY",
                    },
                    {
                        title: "[<g>3.] Using context clues, 'vibrant' means:",
                        word: "COL[O]RFUL",
                    },
                    {
                        title: "[<g>4.] Using context clues, 'sanctions' means:",
                        word: "ALLO[W]S",
                    },
                ],

                code: {
                    answer: "GROW",
                    userArray: ["","","",""]
                },

            }

        },
           
        // code box
        {

            info: {
                type: "code-box",
                asset: "node-background-codeBox.png",
                title: "Code Box",
                state: "incomplete",
            },

            content: {
                codeBox: null
            }

        }

    ],

};

  