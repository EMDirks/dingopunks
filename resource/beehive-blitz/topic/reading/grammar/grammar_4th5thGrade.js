const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/reading/grammar/thumbnail-4th-5th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ sunny snap
        {

            info: {
                type: 'challenge',
                title: "Accounting Dept.",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Read the report, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Oh, this is bad... really bad! I have to give the Queen my report about some missing gold coins, and if there are ANY mistakes, I\'ll be fired for sure! Please, can you look over it for me?",
                    complete: "I don\'t trust Grumblegrub. He\'s been grumbling even more than usual. Keep an eye on him, okay?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sunny-snap.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Treasury Report',
                                },
                                subtitle: {
                                    text: 'By Sunny Snap, Hive Accountant',
                                },
                                passage: {
                                    text:   "Your Majesty we were supposed to have 1,000 gold coins ready to pay the worker bees. However, the count keeps coming up short. Somehow, nearly a third of our treasure is just... gone.\
                                    <br>\
                                    I checked our warehouse and spoke with the manager Grumblegrub, but he only waved a pile of papers at me and mumbled, \"That\'s not my problem. Stuff goes missing all the time.\"\
                                    <br>\
                                    That being said, there\'s absolutely no reason to panic \u2014 nope, none at all! [<i>I sent drones to search the flower fields for any clues I even ordered the emergency response team to sweep every nook of the supply tunnels.]\
                                    <br>\
                                    And you know what? Even if we don\'t find those Coins soon, well, I\'m sure everything will be fine. Everything will be perfectly fine..."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "3%",
                                rotate: "1deg",
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
                            width: "percent85",
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
                                brSplit: 'default',
                                indent: 'default'
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
                        title: "[<g>1.] Which paragraph has an example of incorrect capitalization?",
                        correctIndex: 3,
                        columns: 2,
                        paragraph: [
                            "Paragraph on{e}",
                            "Para{g}raph two",
                            "Paragr{a}ph three",
                            "Paragraph fou{r}",
                        ],
                    },
                    {
                        title: "[<g>2.] The dialogue in the second paragraph has proper punctuation. True or false?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>3.] Describe the error in the italic text.",
                        correctIndex: 1,
                        paragraph: [
                            "It\'s missing a {q}uestion mark at the end",
                            "It\'{s} missing a period after \"clues\"",
                            "The word \"drones\" should be cap{i}talized",
                        ],
                    },
                    {
                        title: "[<g>4.] In the first sentence, there should be a comma:",
                        correctIndex: 0,
                        paragraph: [
                            "Between t{h}e words \"Majesty\" and \"we\"",
                            "Betwee{n} the words \"to\" and \"have\"",
                            "Between the words \"pa{y}\" and \"the\"",
                        ],
                    },
                ],  
                code: {
                    answer: "RUSH",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ riff wingman
        {

            info: {
                type: 'challenge',
                title: "Riff's Study",
                asset: "riff-wingman.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
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
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Hey, nerd. The Queen asked me to come up with \"Four Pillars of Survival\" for our hive. I made them stylish, sharp, and way too cool for the average bee. Your job? Make sure the vibe is right.",
                    complete: "Nice work, rookie. I owe ya one... just don\'t expect me to share my sunglasses."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "riff-wingman.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Pillar One: [<u>Style]',
                                },
                                subtitle: {
                                    text: 'By Riff Wingman',
                                },
                                passage: {
                                    text:   "Bravery isn\'t about [<i>not] being scared. It\'s about looking awesome and stylish [<i>while] you\'re scared."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "21%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Pillar Two: [<u>Flair]',
                                },
                                subtitle: {
                                    text: 'By Riff Wingman',
                                },
                                passage: {
                                    text:   "You don\'t need to have all the answers. You just need confidence, flair, and cool sunglasses ___ make people think you have a lot of money."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "0%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Pillar Three: [<u>Trust]',
                                },
                                subtitle: {
                                    text: 'By Riff Wingman',
                                },
                                passage: {
                                    text:   "If you ever feel lost, just try to remember: everyone gets lost sometimes. You ___ always find your way back."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-30%",
                                translateY: "20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Pillar Four: [<u>Focus]',
                                },
                                subtitle: {
                                    text: 'By Riff Wingman',
                                },
                                passage: {
                                    text:   "Stay focused and never give up, unless you are doing something boring. Then, absolutely give up."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "2%",
                                rotate: "3deg",
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
                            width: "percent35",
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
                        'A. Which relative pronoun should fill in the blank on \"Pillar Two\": [<u>that], [<u>whom], or [<u>when]?',
                        'B. Which pillar \u2014 \"[<u>Focus],\" \"[<u>Flair],\"  or \"[<u>Trust]\" \u2014 has a verb in the present progressive tense?',
                        'C. If the blank space in \"Pillar Three\" is meant to show [<i>ability] instead of [<i>permission], should it be filled with [<u>may] or [<u>can]?',     
                        'D. [<u>Right] or [<u>wrong]: the conjunction in \"Pillar One\" should be [<i>either], not \"while.\"',                    
                    ],
                    puzzle: [
                        ["0","0","(B)1F","0","0","0","0"],
                        ["(D)W","R","O","N","G","0","0"],
                        ["0","0","3C","0","0","(A)T","0"],
                        ["0","0","U","0","0","H","0"],
                        ["0","0","S","0","(C)C","2A","N"],
                        ["0","0","0","0","0","4T","0"],
                    ]
                },  
                code: {
                    answer: "FACT",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ grumblegrub
        {

            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
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
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "Ugh, great... another storm, and another weird day at the warehouse. This note came with the latest pollen shipment, and it doesn\'t smell right. I don\'t have time for nonsense... but you do!",
                    complete: "What are you lookin\' at me for? It\'s just extra pollen, okay!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "grumblegrub.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'TOP SECRET SHIPMENT',
                                },
                                passage: {
                                    text:   "Grumblegrub, do not let the Queen find out about this shipment! I\'m talking about the [<i>wooden purple] box in the back corner. It MUST stay sealed until further notice. In fact, there are exactly three things you must avoid doing at all costs: do not touch it, do not think about it, ___ absolutely do not peek inside it. If anyone asks, just say it\'s \"extra pollen\" and change the subject quickly. Simple as that."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-2%",
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
                                translateY: "18%",
                                rotate: "-2deg",
                            }
                        }
                    },
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'metal',
                            padding: "double"
                        },
                        dimension: {
                            width: "percent85",
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
                        title: "[<g>1.] Which italic word should come first?",
                        word: "PUR[P]LE",
                    },
                    {
                        title: "[<g>2.] Should the blank space have the word [<u>and] or [<u>but]?",
                        word: "[A]ND",
                    },
                    {
                        title: "[<g>3.] Is the first sentence [<u>complete] or a [<u>fragment]?",
                        word: "[C]OMPLETE",
                    },
                    {
                        title: "[<g>4.] [<u>Right] or [<u>wrong]: the last sentence is a fragment.",
                        word: "RIGH[T]",
                    },
                ],
                code: {
                    answer: "PACT",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ queen bella
        {

            info: {
                type: 'challenge',
                title: "Throne Room",
                asset: "queen-bella.png",
                state: "incomplete",
                hint: {
                    text: "Sort each report into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word",
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
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "I have received several reports from around the hive, and many of them are quite unacceptable. I command you to sort them! There is no room for even a single mistake in my royal records.",
                    complete: "Excellent work, Dingo Punks. We shall endure this storm together."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Reports WITH errors",
                        "Reports WITHOUT errors",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                     {
                        tag: {
                            text: "Report A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "We stored our honey hear in the hive, where it\'s safe from the wind.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Report B",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Based on my calculations, the hive can withstand eight lightning strikes.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Report C",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The drones cannot collect any more nectar. They\'re feeling too exhausted.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Report D",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Yesterday, I patched up the tunnel walls and check for leaks.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Report E",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The guards have been training to stay awake all night.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Report F",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "We will gather either gold and silver to pay the worker bees.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    }
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
                        title: "[<g>1.] How many reports have at least one error?",
                        correctIndex: 2,
                        paragraph: [
                            "On{e} report",
                            "Two re{p}orts",
                            "T{h}ree reports",
                        ],
                    },
                    {
                        title: "[<g>2.] \"Report D\" has a ____ error.",
                        correctIndex: 1,
                        paragraph: [
                            "{C}orrelative conjunction",
                            "Verb tens{e}",
                            "Spell{i}ng",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the error in \"Report A\"?",
                        correctIndex: 1,
                        paragraph: [
                            "The word \"our\" should be chan{g}ed to \"hour\"",
                            "The word \"hear\" shou{l}d be changed to \"here\"",
                            "\"Report {A}\" has no errors",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the error in \"Report C\"?",
                        correctIndex: 2,
                        paragraph: [
                            "The word \"they\'re\" should be ch{a}nged to \"their\"",
                            "\"Canno{t}\" is not a real word",
                            "\"Re{p}ort C\" has no errors",
                        ],
                    },
                ],  
                code: {
                    answer: "HELP",
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
        
    ]

}