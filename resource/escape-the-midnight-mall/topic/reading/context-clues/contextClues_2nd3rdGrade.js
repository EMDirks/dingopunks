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
                    text: "Read the tags, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Definitions",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "L.2.4",
                        "L.2.4a",
                        "L.2.5",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3b",
                        "RF.2.3c",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.5",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RI.3.4"
                    ]
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Topsy here! I just built some new robot pets. Each one has a warning tag, but I think the words are too hard. Can you check if they make sense?",
                    complete: "Be careful out there, okay? The mall isn\'t safe after dark. Hee hee!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "critterwerks.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Robot Sloth",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The robot sloth is [<u>drowsy]. It\'s so sleepy!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "-18%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Robot Kitten",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The robot kitten is [<u>fragile], which means it breaks easily.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Robot Gecko",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The Robot Gecko is [<u>speedy], or super fast.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-2%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Robot Beetle",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The [<u>tiny] Robot Beetle is very small. You can keep it in a thimble!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "18%",
                                rotate: "-3deg",
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
                        tag: {
                            font: 'default',
                            size: 'mediumSmall',
                            align: 'left',
                            padding: 'double'
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
                            dimension: {
                                width: "full",
                                height: "full",
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            misc: {
                                padding: "default"
                            },
                        }, 
                    ]
                },
            },

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What does \"drowsy\" mean?",
                        correctIndex: 0,
                        paragraph: [
                            "Slee{p}y",
                            "An{i}mal",
                            "Good at dr{a}wing",
                        ],
                    },
                    {
                        title: "[<g>2.] The word \"fragile\" means ___ .",
                        correctIndex: 1,
                        paragraph: [
                            "Baby {c}at",
                            "Breaks {e}asily",
                            "{V}ery strong",
                        ],
                    },
                    {
                        title: "[<g>3.] If the robot gecko is \"speedy,\" that means it is:",
                        correctIndex: 2,
                        paragraph: [
                            "S{m}all",
                            "Dark gr{e}en",
                            "Super fas{t}",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the meaning of the word \"tiny\"?",
                        correctIndex: 0,
                        paragraph: [
                            "Very {s}mall",
                            "Shaped li{k}e a thimble",
                            "A ki{n}d of bug",
                        ],
                    },
                ],  
                code: {
                    answer: "PETS",
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
                    text: "Put together the puzzle, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Roots, Prefixes, and Suffixes",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "L.2.4",
                        "L.2.4b",
                        "L.3.4c",
                        "L.2.5",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3a",
                        "RF.2.3b",
                        "RF.2.3c",
                        "RF.2.3d",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.4b",
                        "L.3.5",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3a",
                        "RF.3.3b",
                        "RF.3.3c",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RI.3.4"
                    ]
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "Oh no... I like to solve puzzles when I\'m having a bad day, but I can\'t seem to put this one together. It\'s making my day even worse! Can you help?",
                    complete: "Aw, thanks! I feel much better now. Time to make some taffy!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "the-candy-cave-2.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "#1. Lime taffy should always be a [<u>greenish] color.",
                                }, 
                                backgroundImage: {
                                    file: "10.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "#2. Make sure to [<u>unlock] all the kitchen cabinets.",
                                }, 
                                backgroundImage: {
                                    file: "11.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "#3. If you can\'t do something alone, find a [<u>helper].",
                                }, 
                                backgroundImage: {
                                    file: "12.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "#4. A mop is very [<u>useful] for cleaning up spills.",
                                }, 
                                backgroundImage: {
                                    file: "13.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "#5. If you mess up baking a cake, just [<u>redo] it.",
                                }, 
                                backgroundImage: {
                                    file: "14.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "#6. Be [<u>careful] when eating sour candy.",
                                }, 
                                backgroundImage: {
                                    file: "15.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "#7. It\'s okay to [<u>disagree] with someone.",
                                }, 
                                backgroundImage: {
                                    file: "16.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "#8. If you [<u>misplace] a tool, just keep looking.",
                                }, 
                                backgroundImage: {
                                    file: "17.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "#9. Don\'t be [<u>careless] when you are cooking.",
                                }, 
                                backgroundImage: {
                                    file: "18.png"
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
                        'A. Read puzzle piece #7. [<u>True] or [<u>false]: \"Disagree\" means [<i>not agree].',
                        'B. Does puzzle piece [<u>six] or puzzle piece [<u>nine] have a word that means \"full of care\"?',
                        'C. Find the puzzle piece in the middle. \"Re-\" means [<i>again], so \"redo\" means [<i>do] ____ .',     
                        'D. Read puzzle piece #1. If \"-ish\" means [<i>a little], then \"greenish\" means [<i>a little] ____ .',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(B)4S","0"],
                        ["0","0","(C)A","(D)G","2A","I","N"],
                        ["0","0","0","R","0","X","0"],
                        ["0","0","0","1E","0","0","0"],
                        ["(A)3T","R","U","E","0","0","0"],
                        ["0","0","0","N","0","0","0"],
                    ]
                },  
                code: {
                    answer: "EATS",
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
                    text: "Read the passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Compound Words and Shades of Meaning",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "L.2.4",
                        "L.2.4d",
                        "L.2.5",
                        "L.2.5b",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3a",
                        "RF.2.3b",
                        "RF.2.3c",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.5",
                        "L.3.5c",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RI.3.4"
                    ]
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "My job is to write about new products. I work all night, and I do not enjoy it. Now check my work so I can go home!",
                    complete: "At last, my work is done. I shall go home and rest my strong arms."
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
                                image: {
                                    type: "theme",
                                    file: "13.png",
                                },
                            },
                            {
                                title: {
                                    text: "Jackets",
                                },
                                subtitle: {
                                    text: "By Robustus",
                                },
                                passage: {
                                    text: "I never get cold! Other people must run in circles to warm up, because they are weak. Some might stand by an indoor [<u>fireplace]. Others prefer a warm jacket, just like this one.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "9%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "14.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Bags",
                                },
                                subtitle: {
                                    text: "By Robustus",
                                },
                                passage: {
                                    text: "I, Robustus, never need help! Other people, who are weaker than me, must use teamwork to get things done. Luckily, these [<u>large] bags can carry all the tools a team needs to win.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "0%",
                                rotate: "3deg",
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
                            subtitle: {
                                font: 'default',
                                size: 'small',
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
                        title: "[<g>1.] What does the underlined word in \"Jackets\" mean?",
                        correctIndex: 2,
                        paragraph: [
                            "A special oven for ba{k}ing cakes",
                            "A hous{e} painted red",
                            "A safe place {t}o make a fire indoors",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these words is [<i>slower] than \"run\"?",
                        correctIndex: 1,
                        paragraph: [
                            "S{p}rint",
                            "J{o}g",
                            "Da{s}h",
                        ],
                    },
                    {
                        title: "[<g>3.] Which word means [<i>working as a team]?",
                        correctIndex: 0,
                        paragraph: [
                            "{T}eamwork",
                            "W{e}aker",
                            "Tool{s}",
                        ],
                    },
                    {
                        title: "[<g>4.] Find the underlined word in \"Bags.\" Which of these words is bigger?",
                        correctIndex: 3,
                        columns: 2,
                        paragraph: [
                            "T{i}ny",
                            "{L}ittle",
                            "S{m}all",
                            "Hug{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "TOTE",
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
                    text: "Read the letter, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Examples",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "L.2.4",
                        "L.2.4a",
                        "L.2.5",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3a",
                        "RF.2.3b",
                        "RF.2.3c",
                        "RF.2.3e",
                        "RF.2.3f",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.5",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3d",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RI.3.4"
                    ]
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "Yes, I am Prisma, the famous dressmaker. I ordered cloth to make new dresses, but it was no good. So, I wrote a letter to the seller. Read it and tell me if my message is clear.",
                    complete: "That is all I need. You may leave now. I have dresses to make."
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
                                    text:   "Dear cloth seller,\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; I have been [<u>patient] with you. For example, I waited many weeks for your box to show up. When it finally came, the cloth inside was not smooth at all. It was [<u>rough], like a scratchy towel or an itchy sweater!\
                                    <br>\
                                    &nbsp; &nbsp; This is not a [<u>tricky] thing to do, like making a fancy dress for a queen. Your job is easy. You just need to send me smooth cloth.\
                                    <br>\
                                    <br>\
                                    \u2014 Prisma"
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
                                translateY: "8%",
                                rotate: "-2deg",
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
                        title: "[<g>1.] Which word means [<i>hard to do]: [<u>rough] or [<u>tricky] ?",
                        word: "T[R]ICKY",
                    },
                    {
                        title: "[<g>2.] What word means [<i>able to wait calmly] ?",
                        word: "P[A]TIENT",
                    },
                    {
                        title: "[<g>3.] The word ____ means [<i>scratchy and not smooth.]",
                        word: "ROU[G]H",
                    },
                    {
                        title: "[<g>4.] [<u>True] or [<u>false]: a glass marble is rough.",
                        word: "FALS[E]",
                    },
                ],
                code: {
                    answer: "RAGE",
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