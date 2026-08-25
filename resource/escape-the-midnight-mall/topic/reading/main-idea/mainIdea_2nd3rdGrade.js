const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/main-idea/thumbnail-2nd-3rd-grade.png",
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
                    text: "Read the passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.6",
                        "RI.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.8",
                        "RI.3.10"
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee hee! I\'m Topsy, and I make robot pets! I just built two new ones and wrote tags for them. Can you help me find the main idea of each?",
                    complete: "Hee hee! Thanks for the help! Don\'t worry, I\'ll take it from here."
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
                                image: {
                                    type: "theme",
                                    file: "3.png",
                                },
                            },
                            {
                                title: {
                                    text: "Banana Bot",
                                },
                                passage: {
                                    text: "The Banana Bot is clumsy. It always slams into tables and runs into walls. Sometimes, it even slips on its own peel!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "-2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "8.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Pixel Pig",
                                },
                                passage: {
                                    text: "The Pixel Pig\'s skin is made from expensive metal. Its nose is made from expensive glass. And its eyes? They are the MOST expensive part! In all, the Pixel Pig\'s parts cost a lot of money.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "2%",
                                rotate: "3deg",
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
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
                        title: "[<g>1.] What is the main idea of \"Banana Bot\"?",
                        correctIndex: 2,
                        paragraph: [
                            "The Ban{a}na Bot costs a lot of money",
                            "The Banana {B}ot has a yellow peel",
                            "The Banana Bot is {c}lumsy",
                        ],
                    },
                    {
                        title: "[<g>2.] Sentence __ of \"Banana Bot\" shows its main idea.",
                        correctIndex: 0,
                        paragraph: [
                            "{O}ne",
                            "T{w}o",
                            "Thre{e}",
                        ],
                    },
                    {
                        title: "[<g>3.] The main idea of \"Pixel Pig\" is ___ .",
                        correctIndex: 1,
                        paragraph: [
                            "The Pixel Pig has eyes m{a}de from metal",
                            "The Pixel Pig is made of expen{s}ive parts",
                            "The Pixel Pi{g} is a robot",
                        ],
                    },
                    {
                        title: "[<g>4.] Which sentence from \"Pixel Pig\" states the main idea?",
                        correctIndex: 3,
                        columns: 2,
                        paragraph: [
                            "S{e}ntence two",
                            "Sente{n}ce three",
                            "Sentence {f}our",
                            "Sen{t}ence five",
                        ],
                    },
                ],  
                code: {
                    answer: "COST",
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
                    text: "Read the letter, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Details of a One-Paragraph Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RI.2.6",
                        "RI.2.8",
                        "RI.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.8",
                        "RI.3.10"
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "Someone sent me a letter, but I do not have time to read it. You will read it for me and report back. That\'s why you\'re here, right?",
                    complete: "That is all, Dingo Punks. I am no longer in need of your skills. You may leave now."
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
                                passage: {
                                    text:   "Dear Prisma,\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; Your clothes help me feel comfortable being different. The bright colors make me feel proud instead of shy. And I love the smooth fabrics, which make me feel relaxed even when people are mean to me. Also, I have a fish named Mr. Gummy!\
                                    <br>\
                                    <br>\
                                    Yours truly,\
                                    <br>\
                                    Sunny Snap"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
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
                            width: "percent65",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    },                   
                    contentArray: [
                        {
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Does the [<u>first], [<u>second], or [<u>third] sentence of this letter state the central idea?',
                        'B. [<u>True] or [<u>false]: \"The bright colors make me feel proud instead of shy\" is a supporting detail.',
                        'C. [<u>True] or [<u>false]: \"Also, I have a fish named Mr. Gummy\" is another supporting detail.',     
                        'D. In all, are there [<u>one] or [<u>two] key details?',                    
                    ],
                    puzzle: [
                        ["0","0","(B)3T","0","0","0","0"],
                        ["(A)F","2I","R","4S","(D)T","0","(C)1F"],
                        ["0","0","U","0","W","0","A"],
                        ["0","0","E","0","O","0","L"],
                        ["0","0","0","0","0","0","S"],
                        ["0","0","0","0","0","0","E"],
                    ]
                },  
                code: {
                    answer: "FITS",
                    userArray: ["","","",""]
                },
            }

        },


        // ⭐ the candy cave
        {

            info: {
                type: 'challenge',
                title: 'The Candy Cave',
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Details of Multiple Texts",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RI.2.5",
                        "RI.2.6",
                        "RI.2.8",
                        "RI.2.10",
                        "RL.2.1",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.5",
                        "RI.3.8",
                        "RI.3.10",
                        "RL.3.1",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "Working here has been hard. I\'ve been feeling a lot of stress. So, I wrote a poem and a story to share my thoughts. Want to read them?",
                    complete: "I really hope I can find out who this thief is. Take care, okay?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-candy-cave.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Gum',
                                },
                                passage: {
                                    text:   "[<tal>Making gum is hard to do.\
                                    <br>\
                                    It sticks to hands, and tables too.\
                                    <br>\
                                    It stains my clothes pink. Yes, every day.\
                                    <br>\
                                    Then it clogs the sink, and won\'t wash away!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-17%",
                                translateY: "-15%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Taffy Thief',
                                },
                                passage: {
                                    text:   "Martin smiled as he filled the candy jar with taffy and set it on the shelf. But the next morning, one piece was missing. The day after that, another piece was gone. Martin looked around, and found taffy wrappers near a crack in the wall. Someone was sneaking in to steal it!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-8%",
                                rotate: "-2deg",
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
                            width: "percent50",
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
                        title: "[<g>1.] In the poem titled \"Gum,\" the line \"Making gum is hard to do\" is ___ .",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "{T}he main idea",
                            "A supp{o}rting detail",
                        ],
                    },
                    {
                        title: "[<g>2.] Which line(s) from \"Gum\" show a key detail?",
                        correctIndex: 2,
                        paragraph: [
                            "\"It sticks to hands, and {t}ables too.\"",
                            "\"{I}t stains my clothes pink. Yes, every day.\"",
                            "Both of the {a}bove",
                        ],
                    },
                    {
                        title: "[<g>3.] What\'s the main idea of \"Taffy Thief\"?",
                        correctIndex: 1,
                        paragraph: [
                            "Martin {e}njoys making taffy",
                            "Someone {k}eeps sneaking in and stealing taffy",
                            "Martin caught the thie{f}",
                        ],
                    },
                    {
                        title: "[<g>4.] This quote from \"Taffy Thief\" is [<i>not] a key detail:",
                        correctIndex: 0,
                        paragraph: [
                            "\"Martin smiled as he filled th{e} candy jar\"",
                            "\"The ne{x}t morning, one piece was missing.\"",
                            "\"The day after that, another p{i}ece was gone.\"",
                        ],
                    },
                ],  
                code: {
                    answer: "TAKE",
                    userArray: ["","","",""]
                },
            },

        },


        // ⭐ helio athletics
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Topic and the Focus of Specific Paragraphs",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RI.2.2",
                        "RI.2.3",
                        "RI.2.6",
                        "RI.2.8",
                        "RI.2.10",
                        "RL.2.1",
                        "RL.2.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.3",
                        "RI.3.8",
                        "RI.3.10",
                        "RL.3.1",
                        "RL.3.5",
                    ],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "It is I, Robustus. I am sure you know my name. After all, I am good at many things. Read about what I can do, and be amazed!",
                    complete: "Thank you for reading. You may now admire my greatness."
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
                                    text: "Things I Am Good At",
                                },
                                subtitle: {
                                    text: "By Robustus",
                                },
                                passage: {
                                    text: "I am good at keeping watch. I stand by the door all night long. I scare away trouble just by looking at it. When I turn my head, my helmet sometimes squeaks.\
                                    <br>\
                                    I am also good at lifting heavy things. Every day, I lift boxes that other people cannot move. Did you know all the boxes have my face printed on them? They do! Last week, I moved all the shelves without breaking a sweat."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "1%",
                                rotate: "5deg",
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
                            width: "percent65",
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
                        title: "[<g>1.] What is this whole text mainly about?",
                        correctIndex: 1,
                        paragraph: [
                            "Ho{w} Robustus treats his friends",
                            "The things Ro{b}ustus is good at",
                            "When Robustus st{a}rted his job",
                        ],
                    },
                    {
                        title: "[<g>2.] Paragraph one is about how:",
                        correctIndex: 0,
                        paragraph: [
                            "R{o}bustus is good at keeping watch",
                            "Robustus is ver{y} strong",
                            "Robustus needs lots of hel{p}",
                        ],
                    },
                    {
                        title: "[<g>3.] Which detail supports paragraph one\'s main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "\"I stand by the door a{l}l night long.\"",
                            "\"When I {t}urn my head, my helmet squeaks.\"",
                            "None of the abov{e}",
                        ],
                    },
                    {
                        title: "[<g>4.] Paragraph two is about how:",
                        correctIndex: 2,
                        paragraph: [
                            "Robustus's face is printed on e{v}ery box",
                            "{R}obustus is bored with his job",
                            "Robustus is goo{d} at lifting heavy things",
                        ],
                    },
                ],  
                code: {
                    answer: "BOLD",
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
