const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/reading/grammar/thumbnail-4th-5th-grade.png",
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
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Parts of Speech",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1a",
                        "L.4.1b",
                        "L.4.1c",
                        "L.4.1d",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.1c",
                        "L.5.2",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Hey there, sugar! I wrote a plan to show my workers where to place candles \'round the farm, but I reckon I rushed it. Some of the words just feel wrong. Would ya check it real quick?",
                    complete: "Much obliged. You might\'ve just saved the whole harvest!"
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
                                title: {
                                    text: 'Candlewick\'s Candle Plan',
                                },
                                passage: {
                                    text:   "[<i>Moonlight Candles]<br>- Stick two moonlight candles at the end of every pumpkin row. If we\'re lucky, they\'ll distract the Fallcrawlers until morning, like moths to a lightbulb. I don\'t know [<u>who/whom] came up with this idea, but it\'s worth a shot.\
                                    <br>\
                                    <br>\
                                    [<i>Silversmoke Candles]<br>- Take seven silversmoke candles down to the orchard. Set them at the roots of every tree with healthy fruit, but skip the trees with [<blu>green rotten small apples]. These candles send a thick smoke into the air, so the Fallcrawlers can\'t see where the apples are growing. I tested these candles just yesterday. [<sal>The smoke curled around the branches!]\
                                    <br>\
                                    <br>\
                                    [<i>Rotwick Candles]<br>- Place three rotwick candles outside the barn doors. Light them fast and stay clear; they let out a terrible smell that will keep the Fallcrawlers from entering the barn. It\'s not completely necessary, but if you [<u>can/must], it\'s a good idea to also place rotwick candles outside the storage shed."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "3%",
                                rotate: "-3deg",
                            }
                        }
                    },
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'paper',
                            padding: "double"
                        },
                        dimension: {
                            width: "percent70",
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
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
                            dimension: {
                                width: "full",
                                height: "auto",
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
                        title: "[<g>1.] Find the underlined words in \"Rotwick Candles.\" Which one best completes the sentence?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "{C}an",
                            "Mu{s}t",
                        ],
                    },
                    {
                        title: "[<g>2.] Find the underlined words in \"Moonlight Candles.\" Which one best completes the sentence?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Wh{o}",
                            "Who{m}",
                        ],
                    },
                    {
                        title: "[<g>3.] The correct word order for the blue text is:",
                        correctIndex: 1,
                        paragraph: [
                            "Gr{e}en small rotten apples",
                            "Small {r}otten green apples",
                            "Rotten green sma{l}l apples",
                        ],
                    },
                    {
                        title: "[<g>4.] Rewrite the red sentence in the progressive tense.",
                        correctIndex: 2,
                        paragraph: [
                            "\"The {s}moke will curled around the branches!\"",
                            "\"The smoke curls aro{u}nd the branches!\"",
                            "\"The smoke was curling around the bra{n}ches!\"",
                        ],
                    },
                ],  
                code: {
                    answer: "CORN",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Camp Gnomad
        {

            info: {
                type: 'challenge',
                title: "Camp Gnomad",
                asset: "camp-gnomad.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Punctuation and Capitalization",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.2",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1f",
                        "L.4.2",
                        "L.4.2a",
                        "L.4.2b",
                        "L.4.2c",
                        "L.4.3",
                        "L.4.3b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.7",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.2",
                        "L.5.2a",
                        "L.5.2c",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "Oh mercy... a wolf went and ripped up our star map! That map\'s the only way we can escape the Fallcrawlers tonight. Please, friend, help us put it back together!",
                    complete: "Thank you kindly, friend. The stars will guide us both tonight."
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
                                    text: "Never sleep when the sun is bright hot and high in the sky.",
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
                                    text: "whenever you feel lost, just look up to the stars.",
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
                                    text: "Grandma always used to say, The moon will light your path.",
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
                                    text: "When the sun sets, it is time to hide.",
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
                                    text: "Always keep an eye on the moons of jupiter.",
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
                                    text: "Your fate is written in the stars.",
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
                                    text: "Stay quiet, and let the stars speak",
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
                                    text: "What should you do if you see a shooting star.",
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
                                    text: "Never listen to Uncle bob. He knows nothing about the sky.",
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
                                puzzle: 'default',
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. [<u>True] or [<u>false]: the top left piece is missing one or more commas.',
                        'B. Which word in the center piece should be capitalized?',
                        'C. One puzzle piece is missing quotation marks. Is this piece [<u>blue] or [<u>gray]?',     
                        'D. How many puzzle pieces have no errors?',                    
                    ],
                    puzzle: [
                        ["0","(A)T","0","0","0","0","0"],
                        ["0","3R","0","0","0","0","(C)G"],
                        ["(B)J","U","P","I","(D)T","4E","R"],
                        ["0","E","0","0","W","0","A"],
                        ["0","0","0","0","2O","0","1Y"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "YORE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ Mallow Maze
        {

            info: {
                type: 'challenge',
                title: "Mallow Maze",
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Read the letters, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Sentence Structure",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.2",
                        "CCRA.R.5",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1f",
                        "L.4.2",
                        "L.4.2c",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.3b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.2",
                        "L.5.2b",
                        "L.5.3",
                        "L.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "Oops, looks like I\'m lost again... Problem is, I have all these letters to deliver to the farm! I can\'t find my way through this maze AND proofread them. Think you can help?",
                    complete: "I\'d give you a hug but I\'m kinda sticky right now. Thanks a bunch!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "mallow-maze.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Dear Candlewick. Fog is rolling in from the marsh. Darkness will come earlier than expected. Please light your perimeter lanterns as soon as possible.\
                                    <br>\
                                    <br>\
                                    \u2014 Jessa Reed, [<i>Willow Bend Weather Station]",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "10%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Candlewick, the bridge over Mill Creek is closed for repairs please use the Corn Lane detour until Monday alert your drivers so no one gets stuck after dark.\
                                    <br>\
                                    <br>\
                                    \u2014 Foreman Pike, [<i>Gourd County Bridge Office]",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "My dearest Candlewick, a small barrel of clove potion is ready for pickup. I know you need it tonight, but I\'ll have to lock it up until next week. [<u>Unless you send someone over to collect it before nightfall.] [<sal>No other choice.]\
                                    <br>\
                                    <br>\
                                    \u2014 Sable Quill, [<i>Riverside Potion Shop]",
                                },   
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "5%",
                                rotate: "2deg",
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
                            width: "percent55",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        }
                    },                   
                    contentArray: [
                        {
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
                            dimension: {
                                width: "auto",
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
                        title: "[<g>1.] Which line from Jessa is a sentence fragment?",
                        correctIndex: 0,
                        paragraph: [
                            "\"Dear Candle{w}ick.\"",
                            "\"Fo{g} is rolling in from the marsh.\"",
                            "\"Darkness will come ear{l}ier than expected.\"",
                        ],
                    },
                    {
                        title: "[<g>2.] Whose letter is one big run-on sentence?",
                        correctIndex: 1,
                        paragraph: [
                            "Jes{s}a Reed",
                            "Forem{a}n Pike",
                            "Sable Qu{i}ll",
                        ],
                    },
                    {
                        title: "[<g>3.] The underlined text is a ____ .",
                        correctIndex: 1,
                        paragraph: [
                            "Complete senten{c}e",
                            "Sentence f{r}agment",
                            "R{u}n-on sentence",
                        ],
                    },
                    {
                        title: "[<g>4.] Turn the red text into a complete sentence.",
                        correctIndex: 2,
                        paragraph: [
                            "No {c}hoice.",
                            "No choice right no{w}.",
                            "You have {n}o other choice.",
                        ],
                    },
                ],  
                code: {
                    answer: "WARN",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Frantic Factory
        {

            info: {
                type: 'challenge',
                title: "Frantic Factory",
                asset: "frantic-factory.png",
                state: "incomplete",
                hint: {
                    text: "Read the labels, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Common Errors",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.2",
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1e",
                        "L.4.1g",
                        "L.4.2",
                        "L.4.2d",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.1a",
                        "L.5.2",
                        "L.5.2e",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Greetings. I am Hollow Jack. Too many tasks to complete. Overworked. Out of time. Must check food labels! Immediate help requested!",
                    complete: "Task complete. All labels prepared. Gratitude uploaded."
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
                            text: "Potato",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This crate contains fifty pounds of fresh potatoes. Handle with care; [<u>their] the extra large ones."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-1%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pumpkin",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This crate contains twelve pumpkins. They\'re still [<u>to] green to eat, so let them ripen in the sun until they\'re a beautiful orange color."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Avocado",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This crate contains ten ripe avocados. They must be kept cold, so keep them [<u>at] the refrigerator."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-15%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Apricot",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This crate contains twenty pounds of apricots. Make sure to put them on [<u>sail], so people buy them before they expire."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "-10%",
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
                                translateX: "-4%",
                                translateY: "14%",
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
                            width: "percent20",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        { 
                            dimension: {
                                width: "full",
                                height: "auto",
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
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
                        title: "[<g>1.] Which label\'s underlined word should be \"in\"?",
                        word: "AVO[C]ADO",
                    },
                    {
                        title: "[<g>2.] Is the underlined word in \"Potato\" [<u>right] or [<u>wrong]?",
                        word: "WR[O]NG",
                    },
                    {
                        title: "[<g>3.] The underlined word in \"Pumpkin\" should be ___ .",
                        word: "TO[O]",
                    },
                    {
                        title: "[<g>4.] Fix the underlined word in \"Apricot.\"",
                        word: "SA[L]E",
                    },
                ],
                code: {
                    answer: "COOL",
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


  