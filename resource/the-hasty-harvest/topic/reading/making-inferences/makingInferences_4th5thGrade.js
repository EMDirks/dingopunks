const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/reading/making-inferences/thumbnail-4th-5th-grade.png",
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
                    text: "Read the story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Fictional Story",
                    commonCore: [    
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",     
                        "RF.4.4",  
                        "RF.4.4a", 
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.10"
                    ]
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Well, howdy friend! I\'ll cut right to it: a strange note came with my latest candle delivery. No name, no sender, nothing. See if there\'s anything in there worth worrying about, would ya?",
                    complete: "I always wondered about that growling hill out past the west field. Thanks for reading!"
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
                                    text: 'The Turnip That Wouldn\'t Rot',
                                },
                                passage: {
                                    text:   "Farmer Craig once planted a turnip that refused to come up. He tugged, pulled, and even hitched his donkey to it, but the turnip stayed put.\
                                    <br>\
                                    Craig had already harvested every other row of turnips that day, his wagon piled high with perfect vegetables. So he left it. Seasons passed and winters froze, but the turnip stayed fresh. Strangely, the ground made a rumbling sound at night, like a giant stomach growling.\
                                    <br>\
                                    Nearly a hundred years later, the turnip had swelled into a hill with leafy green “hair.” Children slid down its sides, and birds circled above. But when the sun dipped low, villagers hurried indoors. No one could explain what happened to the village\'s new scarecrow… only that its hat was found near the hole where the turnip\'s roots twist and curl."
                                }
                                 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "2deg",
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
                            width: "percent65",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "spaceBetween",
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
                                size: 'mediumSmall',
                                align: 'left',
                                indent: 'default',
                                brSplit: 'default'
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
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] Based on the ground \"rumbling\" and \"growling,\" we can infer that the turnip was hungry. True or false?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "F{a}lse",
                        ],
                    },

                    {
                        title: "[<g>2.] Which line shows that Craig is a skillful farmer?",
                        correctIndex: 0,
                        paragraph: [
                            '\"...his wag{o}n piled high with perfect vegetables.\"',
                            '\"Seasons pas{s}ed and winters froze...\"',
                            '\"...villagers hurr{i}ed indoors.\"',
                        ]
                    },

                    {
                        title: "[<g>3.] Why do the villagers hurry indoors at sunset?",
                        correctIndex: 2,
                        paragraph: [
                            'They ha{v}e lots of work to do the next day',
                            'They\'re not allowed to stay up p{a}st their bedtime',
                            'They\'re worried the turnip will eat {t}hem', 
                        ]
                    },

                    {
                        title: "[<g>4.] True or false: the new scarecrow was most likely stolen by a family of cave trolls.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            'Tr{u}e',
                            'Fal{s}e',
                        ]
                    },

                ],  

                code: {
                    answer: "ROTS",
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
                    text: "Read the passage, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Nonfiction Text",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.10",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.8",
                        "RI.5.10",
                    ]
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Attention! Attention! Candlewick instructed me to write a report about my daily activities. Please read it. Check if it makes sense. Begin now.",
                    complete: "Report submitted. Thank you. For your own safety, stay away from \"Weird Things.\""
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "frantic-factory.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'My Day',
                                },
                                subtitle: {
                                    text: "By Hollow Jack",
                                },
                                passage: {
                                    text:   "At 4:00 a.m. I am switched on. My job is to run the factory. I do not need snacks. I do not need sleep. I do need to pack 500 vegetables per hour.\
                                    <br>\
                                    First, I check the bins. Sometimes I find pumpkins. Sometimes I find gourds. Sometimes I find weird things, like carrots with tiny faces. I must immediately sort weird things into the \"Weird Things\" bin. \
                                    <br>\
                                    At 12:00 p.m. I inspect the machines. The pumpkin peeler should screech. This is normal. The gourd grinder should hiss steam. Also normal.\
                                    <br>\
                                    At 7:00 p.m. I leave the factory. I lock the doors. That is the rule. No one is allowed in the factory after dark. Not even me. Candlewick is strict.\
                                    <br>\
                                    Sometimes I hear noises after dark. Scratching. Whispering. I do not check. I cannot ask questions. I must power down and wait for morning."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "-1deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'metal',
                            padding: "double"
                        },
                        dimension: {
                            width: "percent75",
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
                                align: 'left',
                                indent: 'default',
                                brSplit: 'default'
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
                        'A. Based on this passage, can we infer that Hollow Jack is a [<u>robot] or a [<u>human]?',
                        'B. [<u>True] or [<u>false]: Hollow Jack would likely sort [<i>radishes with ears] into the \"Weird Things\" bin.',
                        'C. Based on the third paragraph of \"My Day,\" can we assume that the factory is [<u>quiet] or [<u>noisy]?',     
                        'D. Does Candlewick want to [<u>hide] or [<u>show] what happens in the factory after dark?',                    
                    ],
                    puzzle: [
                        ["0","(C)N","0","0","0","0","0"],
                        ["(A)3R","O","B","O","(B)T","0","0"],
                        ["0","I","0","0","R","0","(D)H"],
                        ["0","1S","0","0","2U","0","I"],
                        ["0","Y","0","0","E","0","D"],
                        ["0","0","0","0","0","0","4E"],
                    ]
                },  
                code: {
                    answer: "SURE",
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
                    text: "Put together Tom's letter and Frederick's letter. Each is made from 2 pieces. Then, answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Related Texts",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.6",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                    ]
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I\'m the mail carrier around here. I was trying to deliver a couple letters, but a goblin ripped them in half! Now I don\'t know which piece goes with which! Can you put them back together?",
                    complete: "Phew! Thanks a bunch. With your help, these letters are back in one piece. And so is my job!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Tom\'s Letter",
                        "Frederick\'s Letter",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "To Candlewick,\
                                    <br>\
                                    <br>\
                                    Dude. I\'m like, SO sorry! I was making your order of kettle corn like I always do, but then a bat flew right into the pot. SPLAT! Now the whole batch smells like a stinky bat.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "My dearest Candlewick,\
                                    <br>\
                                    <br>\
                                    Please do not worry about the strange smell in your kettle corn. I personally instructed my best worker, Tom, to add a special ingredient to make it more... [<i>magical.]",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "It\'s SUPER gross, dude. I know I messed up, and I\'ll take all the blame.\
                                    <br>\
                                    <br>\
                                    From,\
                                    <br>\
                                    Tom",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "I think you\'ll find the flavor to be quite interesting, if you keep an open mind.\
                                    <br>\
                                    <br>\
                                    Your dearest friend,\
                                    <br>\
                                    Frederick",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "sort2Width",
                            height: "auto",
                        },
                        misc: {
                            material: 'paper',
                            padding: "default"
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
                                align: 'left'
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
                        title: "[<g>1.] True or false: based on these letters, we can infer that Frederick is Tom\'s boss.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "{T}rue",
                            "Fal{s}e",
                        ],
                    },

                    {
                        title: "[<g>2.] True or false: these letters are talking about two different events.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            'T{r}ue',
                            'Fals{e}',
                        ]
                    },

                    {
                        title: "[<g>3.] Is this the first time Tom has made kettle corn for Candlewick?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            'Ye{s}',
                            '{N}o',
                        ]
                    },

                    {
                        title: "[<g>4.] Which author feels more shame and regret?",
                        correctIndex: 0,
                        paragraph: [
                            '{T}om',
                            'Frederic{k}',
                            'Neith{e}r author feels shame and regret',
                        ]
                    },

                ],  

                code: {
                    answer: "TENT",
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
                    text: "Read the riddles, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Solving Riddles",
                    commonCore: [
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.4a",
                        "L.4.5",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.10",
                        "L.5.4a",
                        "L.5.5",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.10",
                    ]
                }
            },

            intro: {
                character: "Stefan the Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "I\'m Stefan Sage, the talking tree. I\'ve been in this orchard since 1603. Nobody visits, I\'m lonely and bored. So answer my riddles, or I\'ll talk to a gourd!",
                    complete: "You solved them all, oh what a delight! Come back and let\'s chat with the ghouls tonight."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "applegrim-orchard.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Riddle One",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I\'m orange and bumpy, and grow on a vine.\
                                    <br>\
                                    I\'m never on pizza, but great in a pie.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "4%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Riddle Two",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I hoot in the night and blink with big eyes.\
                                    <br>\
                                    I perch in the trees and am full of surprise.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "10%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Riddle Three",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I gobble and wobble and puff out my chest.\
                                    <br>\
                                    At Thanksgiving dinner, I\'m not at my best.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-4%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Riddle Four",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I used to be green, but now I\'m quite red.\
                                    <br>\
                                    Soon I\'ll fall down and land on your head.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "0%",
                                rotate: "2deg",
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
                                translateX: "0%",
                                translateY: "5%",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent40",
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
                        title: "[<g>1.] The answer to \"Riddle One\" is a ____ .",
                        word: "PUMPKI[N]",
                    },
                    {
                        title: "[<g>2.] The answer to \"Riddle Two\" is an ____ .",
                        word: "[O]WL",
                    },
                    {
                        title: "[<g>3.] The answer to \"Riddle Three\" is a ____ .",
                        word: "[T]URKEY",
                    },
                    {
                        title: "[<g>4.] The answer to \"Riddle Four\" is a ____ .",
                        word: "L[E]AF",
                    },
                ],
                code: {
                    answer: "NOTE",
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

  