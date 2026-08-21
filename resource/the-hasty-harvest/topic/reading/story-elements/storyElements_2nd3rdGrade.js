const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "assets/branding/placeholder/need-image.png",
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
                    text: "Read the short story and look at the picture, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.3",
                        "RL.2.7",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.5",
                        "RL.3.7",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Welcome to my farm! I got a box with a note inside, but I have no time to read it. Please tell me what it says, and hurry!",
                    complete: "Thank you kindly! Just stay away from the Frantic Factory after dark. Got it?"
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
                                    text: 'Magic Candles',
                                },
                                subtitle: {
                                    text: 'By Farmer Jeremy',
                                },
                                passage: {
                                    text:   "I\'m Farmer Jeremy, and last year, my pumpkin patch was in big trouble. Halloween was one day away, but my pumpkins were still small and green! So, I set these magic candles down in the patch. They glowed all night long. By morning, the pumpkins were big, orange, and ready to pick!\
                                    <br>\
                                    I gathered the candles and put them in a box. They have helped me many times since then. Now, I want you to have them."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "hh23_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "9%",
                                rotate: "-5deg",
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
                            width: "percent45",
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
                        'A. [<u>True] or [<u>false]: Farmer Jeremy has only used the magic candles once.',
                        'B. Was Farmer Jeremy in trouble because his pumpkins were small and [<u>green], or because they were big and [<u>orange]?',
                        'C. This story takes place in a pumpkin ___ .',     
                        'D. Does the picture show what the pumpkin patch looked like [<u>before] or [<u>after] the magic candles?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","(B)G","0","0"],
                        ["0","(C)P","0","0","R","0","(D)A"],
                        ["(A)F","3A","L","S","E","0","F"],
                        ["0","T","0","0","2E","0","T"],
                        ["0","C","0","0","N","0","E"],
                        ["0","1H","0","0","0","0","4R"],
                    ]
                },  
                code: {
                    answer: "HEAR",
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
                    text: "Read both short stories, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Characters",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.3",
                        "RL.2.9",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "We need help with the harvest! Two goblins want the job, but we don\'t know who to pick. Read about both, then tell us who works the hardest.",
                    complete: "Arya it is! Thanks for the help, Dingo Punks. See ya on the road."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "camp-gnomad.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Big Radish',
                                },
                                passage: {
                                    text:   "Goblin Arya wanted to grow a big radish. So every day, she woke up early and got to work. She watered it, gave it food, and even pulled weeds that grew too close.\
                                    <br>\
                                    On harvest day, Goblin Arya\'s radish was the biggest she\'d ever seen. \"Hard work pays off!\" she said with a grin."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Back to Bed',
                                },
                                passage: {
                                    text:   "Goblin Dave loved his bed more than anything. He slept all day, every day. He was too lazy to lift a finger, let alone a shovel.\
                                    <br>\
                                    On harvest day, Goblin Dave woke up and saw Arya's giant radish. \"That\'s not fair!\" he said. But he never planted a single seed."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "-2%",
                                rotate: "4deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'paper',
                            padding: "default"
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
                                size: 'mediumSmall',
                                align: 'left',
                                brSplit: 'default',
                                indent: 'default',
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
                        title: "[<g>1.] Which character grows a big onion?",
                        correctIndex: 2,
                        paragraph: [
                            "Goblin Ar{y}a",
                            "{G}oblin Dave",
                            "Neither char{a}cter grew a big onion",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: Goblin Arya is someone who works very hard.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "T{r}ue",
                            "Fals{e}",
                        ],
                    },
                    {
                        title: "[<g>3.] Which word best describes Goblin Dave?",
                        correctIndex: 2,
                        paragraph: [
                            "S{t}rong",
                            "Ser{i}ous",
                            "Laz{y}",
                        ],
                    },
                    {
                        title: "[<g>4.] Who loves to sleep?",
                        correctIndex: 1,
                        paragraph: [
                            "Go{b}lin Arya",
                            "Goblin D{a}ve",
                            "Neither goblin love{s} to sleep",
                        ],
                    },
                ],  
                code: {
                    answer: "ARYA",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Mallow Maze

        {

            info: {
                type: 'challenge',
                title: "Mallow Maze",
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Read the story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Structure",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
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
                        "RL.3.5",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I have a drink to deliver to the farm. It can help everyone feel happy and full of energy! But I don\'t know what it actually is. Will you read the label?",
                    complete: "Thanks so much! Now let\'s get out of here... I don\'t want the Fallcrawlers to eat me!"
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
                                title: {
                                    text: "Ms. Clove\'s No-Apple Cider",
                                },
                                subtitle: {
                                    text: "By Mabel Mallow",
                                },
                                passage: {
                                    text: "Everyone loved Ms. Clove's apple cider. But one year, frost killed all her apple trees. She had no apples left! Ms. Clove had a big problem. How could she make cider with no apples?\
                                    <br>\
                                    Ms. Clove didn\'t give up. She tried making cider with pears, plums, and peaches. She tried until she found the perfect mix. On festival day, everyone came to taste it. Ms. Clove gave the mayor the first cup. He took a sip and stopped...\
                                    <br>\
                                    His face lit up with a huge smile! Everyone cheered. Ms. Clove\'s \"no-apple\" cider was a big hit! They all lined up for a cup. What started as a big problem turned into her best cider yet.\
                                    <br>\
                                    <br>\
                                    [<tcs>200 calories per serving | 4 servings per bottle]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "4%",
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
                                brSplit: 'default',
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
                        title: "[<g>1.] What is the title of this story?",
                        correctIndex: 0,
                        paragraph: [
                            "\"Ms. Clove\'s No-Ap{p}le Cider\"",
                            "\"By Ma{b}el Mallow\"",
                            "\"200 calories per serv{i}ng\"",
                        ],
                    },
                    {
                        title: "[<g>2.] What problem did Ms. Clove have?",
                        correctIndex: 1,
                        paragraph: [
                            "The t{o}wn hated her cider",
                            "Sh{e} had no apples to make her cider",
                            "The {m}ayor tried to shut down her orchard",
                        ],
                    },
                    {
                        title: "[<g>3.] What happened at the beginning of the story?",
                        correctIndex: 0,
                        paragraph: [
                            "Frost killed Ms. Clove\'s {a}pple trees",
                            "The mayor tasted Ms. Clove\'s cid{e}r",
                            "Ms. Clove ga{v}e up and quit",
                        ],
                    },
                    {
                        title: "[<g>4.] What happened at the end of the story?",
                        correctIndex: 1,
                        paragraph: [
                            "Ms. C{l}ove cried and went to bed",
                            "Ms. Clove\'s \"no-apple\" cide{r} was a big hit",
                            "E{v}eryone hated the taste of Ms. Clove\'s cider",
                        ],
                    },
                ],  
                code: {
                    answer: "PEAR",
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
                    text: "Read the story, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Theme",
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
                        "RL.2.2",
                        "RL.2.3",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.2",
                        "RL.3.3",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Candlewick left story. Thinks I work too hard. Thinks I need help. I do not agree. I command you: read story now! Then leave factory!",
                    complete: "Story: complete. Opinion: unchanged. Help: not needed. You must leave now."
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
                                    text: "Gourd Smashin\'",
                                },
                                subtitle: {
                                    text: "By Candlewick",
                                },
                                passage: {
                                    text: "Mia loved her garden. But one day, her best gourd looked sad and droopy. Mia asked her neighbor, Lena, for help. Together, they gave it extra water and covered it with blankets on cold nights. Soon, the gourd was happy again!\
                                    <br>\
                                    Later, Mia's friend Jack was building a catapult, but he could never get it to work. It made him feel sad. Mia remembered how Lena helped save her gourd, so she decided to help Jack too. Mia even let Jack use her best gourd to test it. It flew through the sky and smashed right through a window in Goblin Ezra\'s house!\
                                    <br>\
                                    From that day on, Mia learned that help from a friend can make a hard problem easier to solve."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-4deg",
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
                                brSplit: 'default',
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
                        'A. [<u>Right] or [<u>wrong]: Jack needs help building a catapult.',
                        'B. How does Jack feel when his catapult doesn\'t work?',
                        'C. Who helped Mia when her favorite gourd looked sad and droopy: [<u>Lena] or [<u>Ezra]?',     
                        'D. Mia learned that \"help from a friend can make a hard ___ easier to solve.\"',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(C)L","0"],
                        ["(D)P","(A)R","O","B","L","2E","4M"],
                        ["0","I","0","0","0","N","0"],
                        ["0","G","0","0","(B)S","3A","D"],
                        ["0","H","0","0","0","0","0"],
                        ["0","1T","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "TEAM",
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


  