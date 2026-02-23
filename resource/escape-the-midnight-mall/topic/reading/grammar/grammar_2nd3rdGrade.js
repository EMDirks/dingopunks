const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [

        // ⭐ critterwerks - parts of speech
        {

            info: {
                type: 'challenge',
                title: 'Critterwerks',
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Read the rules, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Parts of Speech",
                    commonCore: [],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "The Big Robot Battle is tomorrow! I wrote the rules by myself, but that was a bad idea... I don\'t think I picked the right words. Can you help me fix this?",
                    complete: "Hee hee! Thanks for helping my fix it the rules!"
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
                                    text: "Rules for the Big Robot Battle",
                                },
                                passage: {
                                    text: "If you want to enter the Big Robot Battle, your robot must follow these four rules.<br><br>[<sal>Rule A]: Your robot must be able to [<u>spray] slime.<br><br>[<sal>Rule B]: Your robot must wear orange shoes.<br><br>[<sal>Rule C]: Your robot must not [<u>wearing] roller skates.<br><br>[<sal>Rule D]: If your robot falls down, [<u>your robot] must stand back up."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
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
                                size: 'large',
                                align: 'left'
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
                        title: "[<g>1.] In Rule A, the underlined word is a ___ .",
                        correctIndex: 1,
                        paragraph: [
                            "No{u}n",
                            "Ver{b}",
                            "C{o}mma",
                        ],
                    },
                    {
                        title: "[<g>2.] Which word in Rule B is an adjective?",
                        correctIndex: 1,
                        paragraph: [
                            "Robo{t}",
                            "{O}range",
                            "S{h}oes",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: the underlined word in Rule C should be [<i>wore].",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>4.] Read Rule D. What pronoun can replace the underlined words?",
                        correctIndex: 3,
                        columns: 2,
                        paragraph: [
                            "He{r}",
                            "Hi{m}self",
                            "{U}s",
                            "I{t}",
                        ],
                    },
                ],  
                code: {
                    answer: "BOLT",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ helio athletics - capitalization and punctuation
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Read the tips, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Capitalization and Punctuation",
                    commonCore: [],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I spent all month getting ready for battle! I wrote some tips for my team, but I wrote them too fast. I need you to fix them so I don\'t look silly!",
                    complete: "Good work. I may call on you again, brave helper!"
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
                            text: "Tip A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "A real hero never forgets his sword his shield or his sandwich."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "-16%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Tip B",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "When something feels scary, will you try to be brave"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "-3%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Tip C",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "You must always try your best!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "6%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Tip D",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "it is not a good idea to arm wrestle a ghost."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "25%",
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
                        tag: {
                            font: 'default',
                            size: 'mediumSmall',
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
                        }
                    },                   
                    contentArray: [
                        {
                            passage: {
                                font: 'default',
                                size: 'medium',
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
                        title: "[<g>1.] Which word in \"Tip D\" needs a capital letter?",
                        correctIndex: 0,
                        paragraph: [
                            "{I}t",
                            "Ar{m}",
                            "G{h}ost",
                        ],
                    },
                    {
                        title: "[<g>2.] Which tip needs commas?",
                        correctIndex: 0,
                        paragraph: [
                            "\"{T}ip A\"",
                            "\"Tip {C}\"",
                            "\"Ti{p} D\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What is wrong with \"Tip C\"?",
                        correctIndex: 2,
                        paragraph: [
                            "It needs a {c}omma between \"your\" and \"best\"",
                            "\"Try\" should have {a} capital letter",
                            "Ther{e} is nothing wrong with \"Tip C\"",
                        ],
                    },
                    {
                        title: "[<g>4.] What end punctuation does \"Tip B\" need?",
                        correctIndex: 1,
                        paragraph: [
                            "A pe{r}iod ( . )",
                            "A question {m}ark ( ? )",
                            "An e{x}clamation point ( ! )",
                        ],
                    },
                ],  
                code: {
                    answer: "ITEM",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the candy cave - sentence structure
        {

            info: {
                type: 'challenge',
                title: "The Candy Cave",
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Read the notes, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Sentence Structure",
                    commonCore: [],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "Oh no... the frogs are back! I wrote two notes. One is for the frogs, and one is for my friend Robustus. Can you make sure they are written well?",
                    complete: "Thank you. I feel a little better now."
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
                                passage: {
                                    text: "To: The frogs<br>From: Martin Shortnose<br><br>This note is for the frogs that live nearby. [<sal>I don\'t like how loud you croak. I don\'t like how you eat all my candy.] Can you go somewhere else?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "-2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "To: Robustus<br>From: Martin Shortnose<br><br>Robustus, I\'m sorry to bother you. The frogs are back. They are scaring people away. [<u>Not happy about it.] I don\'t know what to do. Can you help?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "5%",
                                rotate: "2deg",
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
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. [<u>True] or [<u>false]: the underlined text is a full sentence.',
                        'B. In the sentence "The frogs are back," what is the subject: [<u>frogs] or [<u>back]?',
                        'C. [<u>True] or [<u>false]: Martin\'s note to the frogs has no errors.',
                        'D. Which word can you use to join the two red sentences: [<u>and] or [<u>how]?',
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","(C)T"],
                        ["(B)F","R","O","G","1S","0","R"],
                        ["0","0","0","0","0","0","U"],
                        ["0","0","(A)F","(D)A","L","S","2E"],
                        ["0","0","0","3N","0","0","0"],
                        ["0","0","0","4D","0","0","0"],
                    ]
                },  
                code: {
                    answer: "SEND",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ zeeb-plex - frequently confused words
        {

            info: {
                type: 'challenge',
                title: "ZeebPlex",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle and answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Frequently Confused Words",
                    commonCore: [],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "Someone tore my computer board to pieces! I REALLY don\'t have time to fix this mess. Can you put the pieces back together for me?",
                    complete: "Fine. You fixed it. I guess that was helpful."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "zeeb-plex.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "A. The games [<u>was] not turned on.",
                                }, 
                                backgroundImage: {
                                    file: "19.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "B. The girls has two quarters.",
                                }, 
                                backgroundImage: {
                                    file: "20.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "C. It is [<u>you\'re] turn to play.",
                                }, 
                                backgroundImage: {
                                    file: "21.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "D. Are those your tickets?",
                                }, 
                                backgroundImage: {
                                    file: "22.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "E. The game room was [<u>to] loud.",
                                }, 
                                backgroundImage: {
                                    file: "23.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "F. They\'re fixing the broken game.",
                                }, 
                                backgroundImage: {
                                    file: "24.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "G. The prize booth is over [<u>their].",
                                }, 
                                backgroundImage: {
                                    file: "25.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "H. This ride was very slow.",
                                }, 
                                backgroundImage: {
                                    file: "26.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "I. Do you want to play right now?",
                                }, 
                                backgroundImage: {
                                    file: "27.png"
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] On puzzle piece G, the underlined word [<i>should] be:",
                        correctIndex: 1,
                        paragraph: [
                            "The{y}\'re",
                            "{T}here",
                            "None of th{e} above",
                        ],
                    },
                    {
                        title: "[<g>2.] On puzzle piece C, the underlined word [<i>should] be:",
                        correctIndex: 0,
                        paragraph: [
                            "Y{o}ur",
                            "Yo{r}e",
                            "None of the abo{v}e",
                        ],
                    },
                    {
                        title: "[<g>3.] On the top yellow piece, \"was\" [<i>should] be ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "{I}s",
                            "W{a}sn\'t",
                            "We{r}e",
                        ],
                    },
                    {
                        title: "[<g>4.] Find the green puzzle piece in the middle. Is its underlined word right or wrong?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Ri{g}ht",
                            "Wro{n}g",
                        ],
                    },
                ],  
                code: {
                    answer: "TORN",
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
