const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/authors-purpose/thumbnail-4th-5th-grade.png",
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
                    text: "Read each review, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "PIE: Persuade, Inform, and Entertain",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.7",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.3",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee hee! The reviews are in for my latest invention: the Pollytron! Can you help me figure out the point of each one? Reading isn\'t exactly my thing...",
                    complete: "Thanks a ton! I knew I could count on your brain. Mine\'s too full of sparks."
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
                                    text: "EEEE",
                                },
                                passage: {
                                    text: "Last night, my Pollytron squawked, \"THE CHEESE IS ALIIIIIVE\" as it flew across the room. Grandma screamed, the dog fainted, and now Polly\'s grounded.\
                                    <br>\
                                    <br>\
                                    - Ziggy Zap",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "12%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "EEE",
                                },
                                passage: {
                                    text: "The Pollytron is a robot parrot that copies your voice, flaps its wings, and stores up to 50 different phrases. Sometimes its gears get stuck, and the battery lasts only two hours.\
                                    <br>\
                                    <br>\
                                    - Mira Seraphina",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "EEEEE",
                                },
                                passage: {
                                    text: "I\'ve tested over twenty robots from Critterwerks, and nothing comes close to the Pollytron. It\'s SO full of personality. If you\'re only buying one robot this year, make it this one!\
                                    <br>\
                                    <br>\
                                    - Pippo Fizzlepop",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-13%",
                                rotate: "-4deg",
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
                            title: {
                                font: 'symbols',
                                size: 'medium',
                                align: 'left'
                            },
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
                        title: "[<g>1.] Which author wrote to [<i>persuade] the reader?",
                        correctIndex: 2,
                        paragraph: [
                            "Zi{g}gy Zap",
                            "Mira Seraphi{n}a",
                            "Pippo F{i}zzlepop",
                        ],
                    },
                    {
                        title: "[<g>2.] Which author wants to [<i>inform] the reader?",
                        correctIndex: 1,
                        paragraph: [
                            "Zig{g}y Zap",
                            "Mira Seraphi{n}a",
                            "Pippo {F}izzlepop",
                        ],
                    },
                    {
                        title: "[<g>3.] Which review is meant to [<i>entertain]?",
                        correctIndex: 1,
                        paragraph: [
                            "The three-sta{r} review",
                            "The {f}our-star review",
                            "The five-star revie{w}",
                        ],
                    },
                    {
                        title: "[<g>4.] Pippo is trying to persuade the reader to:",
                        correctIndex: 0,
                        paragraph: [
                            "Buy a Pollytr{o}n",
                            "Test twent{y} robots",
                            "Ste{a}l from Critterwerks",
                        ],
                    },
                ],  
                code: {
                    answer: "INFO",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the candy cave
        {

            info: {
                type: 'challenge',
                title: 'The Candy Cave',
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Sort each note into the correct column, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "ED: Explain and Describe",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.7",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.3",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I\'ve been trying to organize my old shop notes, but everything\'s a mess. Some explain how candy is made, others just describe how it looks and tastes! Can you help me sort them into two groups?",
                    complete: "Oh my, thank you! I\'m so sorry, I really was losing it back there. I owe you big time."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "If a note EXPLAINS how a<br>candy is made, place it here.",
                        "If a note DESCRIBES what a<br>candy is like, place it here.",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Note: [<u>Caramel]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Caramel is made by heating sugar slowly until it melts and turns golden brown.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Note: [<u>Gumdrop]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "A gumdrop is soft, chewy, covered in sugar, and bursting with fruity flavor.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Note: [<u>Taffy]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Taffy is stretchy and soft, with bright colors. It sticks to your teeth in a fun way.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Note: [<u>Fudge]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "To make fudge, you must heat sugar, butter, and milk. Then, mix it together as it cools.",
                                }, 
                            }
                        ],
                        correctIndex: 0
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
                        tag: {
                            font: 'default',
                            size: 'tiny',
                            align: 'left',
                            padding: 'defaultSmallContainer'
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
                                size: 'mediumSmall',
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Is the author\'s purpose of \"Caramel\" to [<u>explain] or [<u>describe]?',
                        'B. [<u>True] or [<u>false]: the author\'s purpose of \"Gumdrop\" is to describe.',
                        'C. Which note is a description: [<u>\"Taffy\"] or [<u>\"Fudge\"]?',     
                        'D. How many notes should be in each column?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","(C)T","0","0"],
                        ["(A)E","X","3P","L","A","I","N"],
                        ["0","0","0","0","F","0","0"],
                        ["0","0","0","0","F","0","(D)1T"],
                        ["0","0","0","0","2Y","0","W"],
                        ["(B)T","R","U","4E","0","0","O"],
                    ]
                },  
                code: {
                    answer: "TYPE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ prismatica
        {

            info: {
                type: 'challenge',
                title: 'Prismatica',
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Reasons, Evidence, and Audience",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.8",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.8",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.6",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I\'m trying to persuade a friend that mooncloth is the best fabric for making purses. I\'ve written a fabulous letter, but I can\'t tell if it\'s actually convincing. Be a dear and proofread it for me.",
                    complete: "I suppose I needed that second opinion. Let\'s just hope Leo has the sense to listen."
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
                                    text:   "Dear Leo Fenn,\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp I absolutely [<i>must] convince you: mooncloth is obviously the best fabric for making purses. Deep down, you know I\'m right.\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp First, it\'s super lightweight, so it\'s easy and comfortable to carry. Some customers even say they forget they\'re wearing it, which I doubt anyone has ever said about your heavy designs.\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp Second, it\'s easy to clean. I spilled a berry smoothie on my purse once (yes, that actually happened), and it wiped off like magic. No stains at all. Can your fabric do that?\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp Third, it never falls apart. My cousin still uses her mooncloth purse from twenty years ago! It looks brand new, unlike certain bags I\'ve seen lately.\
                                    <br>\
                                    <br>\
                                    With far better taste,\
                                    <br>\
                                    Prisma"
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
                            passage: {
                                font: 'default',
                                size: 'small',
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
                        title: "[<g>1.] Who is the author of this letter?",
                        correctIndex: 1,
                        paragraph: [
                            "Leo Fe{n}n",
                            "{P}risma",
                            "Moonc{l}oth",
                        ],
                    },
                    {
                        title: "[<g>2.] Who is the audience of this letter?",
                        correctIndex: 0,
                        paragraph: [
                            "Leo F{e}nn",
                            "Pri{s}ma\'s customers",
                            "Prisma\'s {c}ousin",
                        ],
                    },
                    {
                        title: "[<g>3.] The author\'s purpose is to persuade Leo that:",
                        correctIndex: 1,
                        paragraph: [
                            "Making purse{s} is a waste of time",
                            "Moonc{l}oth is the best fabric for making purses",
                            "Berry smoothies are delicio{u}s",
                        ],
                    },
                    {
                        title: "[<g>4.] To support her opinion, how many reasons does Prisma provide?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "O{n}e",
                            "T{w}o",
                            "{T}hree",
                            "Fo{u}r",
                        ],
                    },
                ],  
                code: {
                    answer: "PELT",
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
                    text: "Read both reports, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Compare and Contrast",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.6",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.6",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.5",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.2",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "My work at the register is legendary, even if my manager disagrees. We both wrote reports: one bold, one boring. Read them and tell me which one sounds true to you!",
                    complete: "You have the eyes of a true witness. My legend grows stronger thanks to you."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "underworld-athletics.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Work Report: Robustus\'s Version",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Ah yes, the register \u2014 my mighty station of scanning and destiny! There, I have battled broken barcodes and tamed wild coupons. Customers look at me in awe, or perhaps fear. Though my true quest lies beyond this counter, for now, I shall rule this shop with honor."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "-5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Work Report: Manager\'s Version",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Robustus arrives at work on time, but he often gets distracted while working the register. He talks to customers about his \"epic battles\" instead of focusing on scanning items quickly, and he always forgets to give receipts. Though he never gets tired, he struggles to stay on task and follow basic store procedures."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "12%",
                                rotate: "3deg",
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
                                translateX: "2%",
                                translateY: "12%",
                                rotate: "-2deg",
                            }
                        }
                    },
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
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            dimension: {
                                width: "full",
                                height: "auto",
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
                        title: "[<g>1.] [<u>True] / [<u>false]: Robustus mostly wants to [<i>entertain]. ",
                        word: "[T]RUE",
                    },
                    {
                        title: "[<g>2.] Is the manager\'s purpose to inform or persuade?",
                        word: "[I]NFORM",
                    },
                    {
                        title: "[<g>3.] Both reports are about Robustus working the:",
                        word: "REGISTE[R]",
                    },
                    {
                        title: "[<g>4.] Whose report tells the facts more clearly?",
                        word: "MANAG[E]R",
                    },
                ],
                code: {
                    answer: "TIRE",
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