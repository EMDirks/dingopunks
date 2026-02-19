const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [

        // ⭐ critterwerks
        {

            info: {
                type: 'challenge',
                title: "Critterwerks",
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Key Details",
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
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "People laugh at me because I sell robot pets. They say it\'s a weird job, but it helped me when I really needed it! I wrote a story about that day. Want to read it?",
                    complete: "Thanks! You ever hear a robot parrot squawk? It\'s the best sound EVER!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "critterwerks.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Plank and the Parrot',
                                },
                                subtitle: {
                                    text: 'By Topsy',
                                },
                                passage: {
                                    text:   "My name is Topsy. Last month, some pirates took me away on their big ship. They told me I had to walk the plank!\
                                    <br>\
                                    Then, I saw the captain\'s robot parrot. It was broken, and the pirates said no one could fix it. I asked for some tools and walked over to the parrot. I pushed a long nail into a loose part and wiggled it around. CLICK! The parrot came back to life.\
                                    <br>\
                                    The pirates were happy. They gave me some gold coins, and I didn\'t have to walk the plank!"
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
                            width: "percent55",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Where does this story take place?",
                        correctIndex: 0,
                        paragraph: [
                            "On a bi{g} pirate ship",
                            "Near a {j}ungle",
                            "{I}nside a mall",
                        ],
                    },
                    {
                        title: "[<g>2.] What did Topsy use to fix the robot parrot?",
                        correctIndex: 1,
                        paragraph: [
                            "{A}n old hammer",
                            "A l{o}ng nail",
                            "A pair of scis{s}ors",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: it was very hard for Topsy to fix the robot parrot.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>4.] After Topsy fixed the parrot, the pirates ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "Still made her walk th{e} plank",
                            "Wen{t} to bed",
                            "Gave her some gol{d} coins",
                        ],
                    },
                ],  
                code: {
                    answer: "GOLD",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ zeebplex
        {

            info: {
                type: 'challenge',
                title: "ZeebPlex",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story and look at the picture, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "RL.2.7",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.5",
                        "RL.3.7",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "I\'m sick of this arcade... I\'m selling it to someone else! I just need to leave a note for the next owner. Will you read it? Let me know if it makes sense.",
                    complete: "Thanks, I guess... This place is someone else\'s problem now, okay?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "zeeb-plex.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Claw Game',
                                },
                                subtitle: {
                                    text: 'By Zeeb',
                                },
                                passage: {
                                    text:   "Years ago, I bought a claw game that was full of prizes. Nobody could win, no matter how hard they tried.\
                                    <br>\
                                    Then, a new kid started visiting. Her name was Holly, and she never played anything. She just stood there, watching other people and learning how the claw moved. After closing time, Holly broke the lock to the arcade and snuck inside. She played for hours.\
                                    <br>\
                                    By morning, every prize was gone from the claw game. It was empty. Holly won them all, and I lost a LOT of money."
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
                                    file: "mm29_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "10%",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Who is the author of \"The Claw Game\"?",
                        correctIndex: 1,
                        paragraph: [
                            "Holl{y}",
                            "Ze{e}b",
                            "N{o}ne of the above",
                        ],
                    },
                    {
                        title: "[<g>2.] What happened at the beginning of the story?",
                        correctIndex: 1,
                        paragraph: [
                            "Holly snuck inside the ar{c}ade",
                            "Zeeb bought {a} claw game that was full of prizes",
                            "Z{e}eb lost a lot of money",
                        ],
                    },
                    {
                        title: "[<g>3.] In the end, what happened to the claw game?",
                        correctIndex: 2,
                        paragraph: [
                            "Zee{b} painted it a new color",
                            "Holly broke i{t}",
                            "Holly won every p{r}ize",
                        ],
                    },
                    {
                        title: "[<g>4.] Does the picture show the claw game at the beginning or the end of the story?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Beginn{i}ng",
                            "E{n}d",
                        ],
                    },
                ],  
                code: {
                    answer: "EARN",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ prismatica
        {

            info: {
                type: 'challenge',
                title: 'Prismatica',
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Characters",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.3",
                        "RL.2.5",
                        "RL.2.6",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.3",
                        "RL.3.5",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I hired a new worker, and it did not go well. She made me very upset. I wrote this story as a warning for my next worker. Read it and tell me if my feelings are clear.",
                    complete: "Thank you for reading. I truly hope this does not happen again."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "holographia.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Too Messy for Me',
                                },
                                subtitle: {
                                    text: 'By Prisma',
                                },
                                passage: {
                                    text:   "I am Prisma, and I need my shop to be perfect. I stack my cloth in neat piles. I keep the floor very clean. I like everything just right.\
                                    <br>\
                                    One day, a new worker named Emilia rushed around the shop. She tripped on a rug and fell into a pile of boxes. Lots of cloth fell out and got wrinkled. Emilia tried to put the cloth back, but she stepped all over it. Then she bumped into a table and spilled my tea.\
                                    <br>\
                                    I was very upset. So, I fired Emilia. Bye bye! Then I looked at the wrinkled, muddy, tea-stained cloth and threw it in the trash. After all, I am Prisma. I need my shop to be perfect."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-1deg",
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
                        'A. Is Prisma a [<u>kind] or [<u>mean] person?',
                        'B. [<u>True] or [<u>false]: in this story, Emilia is clumsy.',
                        'C. After Emilia makes a mess, does Prisma [<u>fire] her or [<u>help] her?',     
                        'D. At the end of the story, does Prisma feel [<u>sorry] for Emilia, or [<u>upset] with Emilia?',                    
                    ],
                    puzzle: [
                        ["(B)3T","0","0","0","0","0","0"],
                        ["R","0","0","(A)M","0","0","0"],
                        ["(D)U","P","4S","E","T","0","(C)F"],
                        ["E","0","0","1A","0","0","I"],
                        ["0","0","0","N","0","0","2R"],
                        ["0","0","0","0","0","0","E"],
                    ]
                },  
                code: {
                    answer: "ARTS",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ helio athletics
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Theme",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.2",
                        "RL.2.3",
                        "RL.2.5",
                        "RL.2.6",
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
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "It is I, Robustus the Great. I should be working, but I am too busy writing stories about myself. Read one of them now, and be amazed!",
                    complete: "Well done, warrior. You have strong skills, and I may call on you again."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "underworld-athletics.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Not Tough Enough',
                                },
                                subtitle: {
                                    text: 'By Robustus',
                                },
                                passage: {
                                    text:   "I am very strong. When I first started working here, I told everyone I could lift the whole mall. Yes, the WHOLE mall. No one believed me, but I did not care. I said, \"Stand back,\" and went outside to prove it. I felt powerful and brave!\
                                    <br>\
                                    I crawled under the mall to lift it from below, but it did not move. My armor got stuck, and I could not get out. I was stuck there for a long time. I had to drink from a muddy puddle and eat bugs. I was cold, tired, and unhappy.\
                                    <br>\
                                    A few days later, I yelled for help. A group of people tied a rope around my big legs and pulled me out. At first, I felt ashamed. But then, I was glad to be safe. That day, I learned that it is okay to ask for help."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "2%",
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
                            width: "percent80",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Why does Robustus need help?",
                        correctIndex: 2,
                        paragraph: [
                            "H{i}s arm hurts",
                            "He smells {b}ad",
                            "He gets stuck under the ma{l}l",
                        ],
                    },
                    {
                        title: "[<g>2.] How does Robustus feel when he gets stuck?",
                        correctIndex: 1,
                        paragraph: [
                            "He feels \"{v}ery strong\"",
                            "He feels \"cold, t{i}red, and unhappy\"",
                            "He feels \"powerful and b{r}ave\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What lesson does this story teach us?",
                        correctIndex: 0,
                        paragraph: [
                            "It is okay to ask {f}or help",
                            "{E}ating bugs makes you stronger",
                            "People are {m}ean",
                        ],
                    },
                    {
                        title: "[<g>4.] Which sentence from \"Not Tough Enough\" tells us the lesson?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "The fir{s}t sentence",
                            "{T}he last sentence",
                        ],
                    },
                ],  
                code: {
                    answer: "LIFT",
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