const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/grammar/preview-4th-5th-grade.png",
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
                    text: "Read the official entry rules, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "I\'m hosting Topsy\'s Big Robot Battle tomorrow! I typed up the official entry rules myself, and that was DEFINITELY a mistake. I just can\'t seem to choose the rights words! Can you help me fix it?",
                    complete: "Hee hee! Thanks for helping me clean that up. See you tomorrow \u2014 try not to get zapped!"
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
                                    text: 'OFFICIAL ENTRY RULES',
                                },
                                passage: {
                                    text:   "Greetings, inventors \u2014 to join the Big Robot Battle, you [<u>can/must] follow these rules:\
                                    <br>\
                                    <br>\
                                    [<i>Rule A. Your Robot]\
                                    <br>\
                                    • Your robot must have two special features: a bubble launcher and a lightning blaster.\
                                    <br>\
                                    • [<sal>Your robot will move at high speeds.] Please make sure it has a powerful motor.\
                                    <br>\
                                    <br>\
                                    [<i>Rule B. Your Behavior]\
                                    <br>\
                                    • Feel free to dance, yell, and spin wildly [<u>when/why] the battle is happening.\
                                    <br>\
                                    • You must not bring a backpack full of bees. We had an \"incident\" last year that I\'d rather not repeat. I mean, really... [<u>whom/who] thought that was a good idea?\
                                    <br>\
                                    <br>\
                                    [<i>Rule C. Bonus Points]\
                                    <br>\
                                    • You\'ll get bonus points if your robot wears [<blu>green running tiny shoes].\
                                    <br>\
                                    • Robots with cool names like [<i>GigaBlaster 9000], [<i>The Mega Noodle], or [<i>Chungus Prime] will get EXTRA bonus points."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "3%",
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
                        title: "[<g>1.] If Topsy wants all 3 rules to be followed no matter what, what word should she use in her greeting?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "C{a}n",
                            "Mu{s}t"
                        ],
                    },
                    {
                        title: "[<g>2.] Rewrite the red sentence in a progressive tense.",
                        correctIndex: 1,
                        paragraph: [
                            "Your robot {m}oved at high speeds.",
                            "Your robot will be moving at {h}igh speeds.",
                            "Your robot will mo{v}es at high speeds.",
                        ],
                    },
                    {
                        title: "[<g>3.] Which two words should be used for Rule B?",
                        correctIndex: 0,
                        paragraph: [
                            "When and wh{o}",
                            "Wh{y} and who",
                            "Why and who{m}",
                        ],
                    },
                    {
                        title: "[<g>4.] The correct word order for the blue phrase is:",
                        correctIndex: 1,
                        paragraph: [
                            "Running tin{y} green shoes",
                            "Tiny gre{e}n running shoes",
                            "It\'{s} already in the correct order",
                        ],
                    },
                ],  
                code: {
                    answer: "SHOE",
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
                    text: "Sort each note into the correct column, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
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
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "For my upcoming raid on the Undermurk, I wrote some lines to inspire my troops. However, I penned them quickly, and I fear that my words sound foolish. I command you to fix my mistakes!",
                    complete: "Well done, Puzzle Punks. These words will truly inspire. Onward to the Undermurk!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "No Error",
                        "Punctuation Error",
                        "Capitalization Error",
                    ],
                    asset: {
                        scope: "global",
                        path: "3-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Ghost",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "it\'s never a good idea to challenge a ghost to an arm wrestle.",
                                }, 
                            }
                        ],
                        correctIndex: 2
                    }, 
                    {
                        tag: {
                            text: "Sword",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "If your sword feels too heavy, lift it with your heart.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Raccoon",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Be careful around raccoons. They have thumbs, you know",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Father",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "My father once said, Never trust a wizard with slippery hands.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Cousin",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "My cousin esther told me, \"Even the bravest warrior sometimes trips over her own cape.\"",
                                }, 
                            }
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Warrior",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Every great warrior knows how to strike a great pose.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Hero",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "A true hero never forgets his sword his shield or his sandwich.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "sort3Width",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which note is missing quotation marks: [<i>[<u>Warrior]], [<i>[<u>Father]], or [<i>[<u>Raccoon]]?',
                        'B. Which note is missing one or more commas?',
                        'C. Which word in [<i>Cousin] should be capitalized?',     
                        'D. How many of these notes should be sorted into the [<i>No Error] column?',                    
                    ],
                    puzzle: [
                        ["(A)F","2A","3T","H","(C)E","R","0"],
                        ["0","0","0","0","S","0","0"],
                        ["0","0","0","0","(D)T","W","1O"],
                        ["0","0","0","0","H","0","0"],
                        ["0","0","0","0","E","0","0"],
                        ["0","0","(B)4H","E","R","O","0"],
                    ]
                },  
                code: {
                    answer: "OATH",
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
                    text: "Read both letters, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "Oh no... I've been hearing whispering in the walls again! To be safe, I wrote two letters: one to whatever is whispering, and one to Robustus. Can you make sure they\'re written correctly?",
                    complete: "Thank you. I feel a little better already. At least my grammar isn\'t haunting me now..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-candy-cave-2.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "To the wall-whisperers,\
                                    <br>\
                                    <br>\
                                    I'm still not exactly sure where you are. Or what you are. However, I hope this letter finds you well.\
                                    <br>\
                                    <br>\
                                    The other day, I heard you whisper \"leave now\" and \"the marshmallows are watching.\" To be honest, it\'s making me nervous. [<u>Also my customers.] Gary, my assistant, is too scared to come to work.\
                                    <br>\
                                    <br>\
                                    If possible, maybe save the spooky whispers for after the store closes? Perhaps you can talk about something more fun, like gumdrops.\
                                    <br>\
                                    <br>\
                                    All the best,\
                                    <br>\
                                    Martin Shortnose"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "-10%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Robustus the Great,\
                                    <br>\
                                    <br>\
                                    My sincere apologies for the message I know you\'re a super busy guy these days.\
                                    <br>\
                                    <br>\
                                    Lately, the walls have been whispering again, and not in a friendly way. It could be ghouls from the Undermurk, or maybe just old plumbing. I truly have no idea.\
                                    <br>\
                                    <br>\
                                    If you have any advice on how to put an end to this, I would be very grateful. I\'m not sure my polite letters are working.\
                                    <br>\
                                    <br>\
                                    Respectfully,\
                                    <br>\
                                    Martin Shortnose"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "11%",
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
                        title: "[<g>1.] Which letter contains a run-on sentence?",
                        correctIndex: 1,
                        paragraph: [
                            "The letter to the {w}all-whisperers",
                            "The {l}etter to Robustus the Great",
                            "Neither lett{e}r contains a run-on sentence",
                        ],
                    },
                    {
                        title: "[<g>2.] You can use a _____ to fix that run-on sentence.",
                        correctIndex: 0,
                        paragraph: [
                            "C{o}mma",
                            "Apostro{p}he",
                            "{Q}uotation mark",
                        ],
                    },
                    {
                        title: "[<g>3.] The first paragraph of the letter to the wall-whisperers [<i>only] contains complete sentences.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>4.] Turn the underlined text into a complete sentence.",
                        correctIndex: 2,
                        paragraph: [
                            "My {c}ustomers too.",
                            "Also, my cust{o}mers.",
                            "It\'s also making my cus{t}omers nervous.",
                        ],
                    },
                ],  
                code: {
                    answer: "LOST",
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
                    text: "Read each note, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
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
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "A supplier hid secret notes in my latest fabric shipment. They say someone in this mall is a traitor working for the Undermurk! I have no time to figure out who it is \u2014 will you do it for me?",
                    complete: "So, it\'s Gary \u2014 Martin\'s assistant. Thank you for the help, Puzzle Punks. I\'ll handle it from here."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "holographia.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Note A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Prisma, someone in the Midnight Mall isn\'t who they say they are. I tried [<u>too] warn you, but you\'re always with your team. We must speak alone."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note B",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This person isn\'t actually a shopkeeper; they work for the Undermurk. [<u>They\'re] orders are to open a secret portal inside The Candy Cave."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note C",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I hid their name somewhere in these four notes, but you\'ll have to use critical thinking to find it. It\'s [<u>vary] well-hidden."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note D",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "You\'re the only one who can stop them, and there really isn\'t much time left. The portal opens [<u>in] midnight!"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent22",
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
                        title: "[<g>1.] Is the underlined word in [<i>Note A] right or wrong?",
                        word: "WRON[G]",
                    },
                    {
                        title: "[<g>2.] In [<i>Note D], what preposition should replace \"in?\"",
                        word: "[A]T",
                    },
                    {
                        title: "[<g>3.] The underlined word in [<i>Note B] should actually be:",
                        word: "THEI[R]",
                    },
                    {
                        title: "[<g>4.] Fix the spelling of \"vary\" in [<i>Note C].",
                        word: "VER[Y]",
                    },
                ],
                code: {
                    answer: "GARY",
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

  