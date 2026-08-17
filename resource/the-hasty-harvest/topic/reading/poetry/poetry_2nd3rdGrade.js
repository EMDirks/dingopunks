const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "TIME TO SUNSET"
    },

    challengeArray: [

        // ⭐ Applegrim Orchard

        {

            info: {
                type: 'challenge',
                title: 'Applegrim Orchard',
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Elements and Structure",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.2.3",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.4",
                        "RL.2.5",
                        "RL.2.10",
                        "L.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "I have a secret, real and true... I just hope I can trust you. Will you listen? Please, say yes! Your help can save us from this mess.",
                    complete: "Thank you, thank you, my dear friend! Please stay safe when daylight ends."
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
                                    text: 'Secrets in the Soil',
                                },
                                subtitle: {
                                    text: 'By Stefan Sage',
                                },
                                passage: {
                                    text:   "Under my roots, deep in the ground,\
                                    <br>\
                                    a chest of gold can still be found.\
                                    <br>\
                                    It\'s buried deep, all tucked away,\
                                    <br>\
                                    but should my secret stay that way?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-2deg",
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
                                size: 'large',
                                align: 'center'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'medium',
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
                        'A. Are there [<u>four], [<u>six], or [<u>nine] lines in Stefan Sage\'s poem?',
                        'B. [<u>Right] or [<u>wrong]: every line of this poem has seven syllables.',
                        'C. In this poem, which word rhymes with \"found\" ?',     
                        'D. \"Secrets in the ___\" is the title of this poem.',                    
                    ],
                    puzzle: [
                        ["0","0","0","(A)F","0","0","0"],
                        ["0","(B)W","0","2O","0","0","0"],
                        ["(C)G","R","O","U","N","4D","0"],
                        ["0","O","0","R","0","0","0"],
                        ["0","N","0","0","0","0","0"],
                        ["0","1G","0","(D)S","O","I","3L"],
                    ]
                },  
                code: {
                    answer: "GOLD",
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
                    text: "Read both poems and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Comprehension",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.3",
                        "RL.2.5",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.5",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "Well, hey there! I have some important letters to deliver to the farm. Can you help me figure out what they\'re all about?",
                    complete: "Thanks a bunch! Now let's get out of this corn maze before those Fallcrawlers show up."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "mallow-maze.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Letter #1",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'To: Scarecrow Sam',
                                },
                                passage: {
                                    text:   "<br>Watch the yams all night\
                                    <br>\
                                    Wave your arms to scare things off\
                                    <br>\
                                    Stop right at sunrise"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-45%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Letter #2",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'To: Hollow Jack',
                                },
                                passage: {
                                    text:   "<br>Hide the silver key\
                                    <br>\
                                    In the old wooden stable\
                                    <br>\
                                    Under the gray rug"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "62%",
                                rotate: "1deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        tag: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
                                padding: 'default'
                            },
                        misc: {
                            material: 'paper',
                            padding: "default"
                        },
                        dimension: {
                            width: "percent40",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] True or false: \"Letter #1\" is mostly about how Scarecrow Sam must watch the yams all night.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>2.] What is \"Letter #2\" mostly about?",
                        correctIndex: 1,
                        paragraph: [
                            "When H{o}llow Jack should go to bed",
                            "How Hollow Jack should hide a silv{e}r key",
                            "None of the {a}bove",
                        ],
                    },
                    {
                        title: "[<g>3.] When can Scarecrow Sam stop working?",
                        correctIndex: 1,
                        paragraph: [
                            "At nigh{t}",
                            "At sunri{s}e",
                            "N{e}ver",
                        ],
                    },
                    {
                        title: "[<g>4.] Hollow Jack must hide the key in a ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "Hous{e}",
                            "Fiel{d}",
                            "S{t}able",
                        ],
                    },
                ],  
                code: {
                    answer: "REST",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ Candlewick's Cart

        {

            info: {
                type: 'challenge',
                title: "Candlewick's Cart",
                asset: "candlewicks-cart.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Language and Vocabulary",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "L.2.4",
                        "L.2.4a",
                        "L.2.4b",
                        "L.2.5",
                        "L.2.5b",
                        "L.2.6",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "RL.2.4",
                        "RL.2.10",
                        "L.3.3",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.5",
                        "L.3.5c",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RL.3.4",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Howdy! I just got a brand new candle, and something about it feels... different. Can you help me figure out what\'s so special about it?",
                    complete: "Thanks, sweetie! Just stay away from the factory after dark. Trust me on this one."
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
                                    text: 'The Sneezy Spark Candle',
                                },
                                passage: {
                                    text:   "<br>\
                                    The [<hi>candlelight] flickers\
                                    <br>\
                                    It glows in the night\
                                    <br>\
                                    Not dim, but as bright as the sun!\
                                    <br>\
                                    <br>\
                                    Its glow tickles your nose\
                                    <br>\
                                    Causing you to sneeze\
                                    <br>\
                                    [<u>Unable] to stop!\
                                    <br>\
                                    <br>\
                                    You\'ll giggle and chuckle\
                                    <br>\
                                    Until the candle burns out\
                                    <br>\
                                    Then back to silence."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "0%",
                                rotate: "-3deg",
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
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
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
                        title: "[<g>1.] In this poem, the highlighted word means ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "Darkne{s}s",
                            "Brig{h}t blue glow",
                            "Ligh{t} from a candle",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: a \"dim\" candle glows more than a \"bright\" candle.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] Which word means the same thing as \"giggle\" ?",
                        correctIndex: 0,
                        paragraph: [
                            "Chuck{l}e",
                            "Bo{o}m",
                            "Sile{n}ce",
                        ],
                    },
                    {
                        title: "[<g>4.] The underlined word in stanza two means ___ .",
                        correctIndex: 1,
                        paragraph: [
                            "Tic{k}lish",
                            "Not abl{e}",
                            "N{o} sound",
                        ],
                    },
                ],  
                code: {
                    answer: "TALE",
                    userArray: ["","","",""]
                },
            },          

        },

        // ⭐ Frantic Factory

        {

            info: {
                type: 'challenge',
                title: 'Frantic Factory',
                asset: "frantic-factory.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Central Message or Lesson",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.2",
                        "RL.2.3",
                        "RL.2.5",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.2",
                        "RL.3.3",
                        "RL.3.5",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Beep boop. Greetings. Jack is busy. Jack has letter. Jack has no time to read letter. Jack needs help. What does letter say?",
                    complete: "Beep Boop. Thank you. Help no longer needed. Please leave factory."
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
                                    text: 'Clank On',
                                },
                                subtitle: {
                                    text: 'By Candlewick',
                                },
                                passage: {
                                    text:   "<br>\
                                    Jack the robot, don't hide your clank!\
                                    <br>\
                                    Your wobbly walk is just so YOU.\
                                    <br>\
                                    No need to copy, no need to change,\
                                    <br>\
                                    your silly beeps are special too.\
                                    <br>\
                                    <br>\
                                    So clank on, dude, and beep with pride.\
                                    <br>\
                                    Your gears and wires? A beautiful sight.\
                                    <br>\
                                    My good friend Jack, please listen to me.\
                                    <br>\
                                    Just be yourself. Yep, that\'s the key!"
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
                    }
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'metal',
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
                        'A. [<u>Right] or [<u>wrong]: the lesson of \"Clank On\" is that robots have gears and wires.',
                        'B. [<u>Right] or [<u>wrong]: the lesson of \"Clank On\" is that it\'s important to be yourself.',
                        'C. Does line [<u>seven] or [<u>eight] state this lesson?',     
                        'D. This poem is written for a robot named ____ .',                    
                    ],
                    puzzle: [
                        ["0","(A)W","(B)R","O","1N","G","0"],
                        ["0","0","2I","0","0","0","0"],
                        ["(C)4E","I","G","H","T","0","(D)J"],
                        ["0","0","H","0","0","0","A"],
                        ["0","0","T","0","0","0","3C"],
                        ["0","0","0","0","0","0","K"],
                    ]
                },  
                code: {
                    answer: "NICE",
                    userArray: ["","","",""]
                },
            },

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


  