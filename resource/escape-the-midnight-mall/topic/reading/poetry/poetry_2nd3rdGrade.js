const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/poetry/thumbnail-2nd-3rd-grade.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [

        // ⭐ the candy cave
        {

            info: {
                type: 'challenge',
                title: "The Candy Cave",
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "RL.3.1",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I write poems when I feel stressed. It helps me sort out my feelings. And right now, I have a problem... I need you to read about it! Will you?",
                    complete: "Thanks for reading my poem, Puzzle Punks. Come back anytime!"
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
                                    text: "Frogs in the Cave",
                                },
                                subtitle: {
                                    text: "By Martin Shortnose",
                                },
                                passage: {
                                    text: "[<tal>I run the Candy Cave with pride,\
                                    <br>\
                                    with candies stacked up far and wide.\
                                    <br>\
                                    But frogs hop in with sticky feet,\
                                    <br>\
                                    and gulp my gummies as a treat!]"
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many lines are in this poem?",
                        correctIndex: 1,
                        paragraph: [
                            "T{h}ree lines",
                            "{F}our lines",
                            "Five li{n}es",
                        ],
                    },
                    {
                        title: "[<g>2.] How many syllables are in line three?",
                        correctIndex: 0,
                        paragraph: [
                            "{E}ight syllables",
                            "Nine {s}yllables",
                            "Te{n} syllables",
                        ],
                    },
                    {
                        title: "[<g>3.] Which word rhymes with \"pride\"?",
                        correctIndex: 2,
                        paragraph: [
                            "Ca{v}e",
                            "S{t}icky",
                            "Wid{e}",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the author of \"Frogs in the Cave\" is named Martin Shortnose.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "{T}rue",
                            "F{a}lse",
                        ],
                    },
                ],  
                code: {
                    answer: "FEET",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ critterwerks
        {

            info: {
                type: 'challenge',
                title: 'Critterwerks',
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Oh dear! A customer wrote me a letter! I want to read it, but my shop is a mess. I need to clean up first! Can you read it for me?",
                    complete: "The robot hamster escapes every time? Wow, that's pretty awesome!"
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
                                    text: "My Robot Hamster",
                                },
                                passage: {
                                    text: "<br>My name is Carl. And in my house,\
                                    <br>\
                                    my robot hamster keeps escaping.\
                                    <br>\
                                    <br>\
                                    At first, I put her in the closet.\
                                    <br>\
                                    I closed it tight. I locked the door.\
                                    <br>\
                                    But every morning, she was gone \u2014\
                                    <br>\
                                    eating cheese in the kitchen.\
                                    <br>\
                                    <br>\
                                    So I bought a metal box.\
                                    <br>\
                                    I closed it tight. I locked the door.\
                                    <br>\
                                    But this morning, she was gone \u2014\
                                    <br>\
                                    eating cheese in the bedroom.\
                                    <br>\
                                    <br>\
                                    She keeps escaping!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
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
                        title: "[<g>1.] What is this poem mostly about?",
                        correctIndex: 2,
                        paragraph: [
                            "{A} dirty kitchen",
                            "A stron{g} metal box",
                            "A robot hamst{e}r that keeps escaping",
                        ],
                    },
                    {
                        title: "[<g>2.] Who is Carl?",
                        correctIndex: 1,
                        paragraph: [
                            "The ro{b}ot hamster",
                            "The robot h{a}mster\'s owner",
                            "A ch{e}f",
                        ],
                    },
                    {
                        title: "[<g>3.] After escaping the metal box, where did the robot hamster eat cheese?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "The kit{c}hen",
                            "{T}he bedroom",
                        ],
                    },
                    {
                        title: "[<g>4.] This poem takes place in a ___ .",
                        correctIndex: 0,
                        paragraph: [
                            "Hou{s}e",
                            "Fiel{d}",
                            "W{o}rkshop",
                        ],
                    },
                ],  
                code: {
                    answer: "EATS",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ prismatica - dress, boots, scarf
        {

            info: {
                type: 'challenge',
                title: 'Prismatica',
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Vocabulary and Word Meaning",
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
                        "L.2.5",
                        "L.2.5b",
                        "RF.2.3",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.5c",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RL.3.1",
                        "RL.3.4",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I wrote some tags for my new clothes. They are, of course, amazing. But I need you to read them. Just make sure they make sense. Now get to work!",
                    complete: "Very good. I did not think you could handle it. You may go now."
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
                                    text: "Dress",
                                },
                                subtitle: {
                                    text: "By Prisma",
                                },
                                passage: {
                                    text: "[<tal>This dress feels so light\
                                    <br>\
                                    It twirls when you turn around\
                                    <br>\
                                    It spins with each step]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-12%",
                                translateY: "1%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Boots",
                                },
                                subtitle: {
                                    text: "By Prisma",
                                },
                                passage: {
                                    text: "[<tal>These boots are cool\
                                    <br>\
                                    You\'ll [<u>walk] proudly out the door\
                                    <br>\
                                    See them? That is style]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-10%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Scarf",
                                },
                                subtitle: {
                                    text: "By Prisma",
                                },
                                passage: {
                                    text: "[<tal>This scarf is cozy\
                                    <br>\
                                    It\'s just like a gentle hug\
                                    <br>\
                                    Soft against your neck]"
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
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. Which word means the same thing as "twirls" — [<u>spins] or [<u>feels]?',
                        'B. [<u>True] or [<u>false]: In the poem "Dress," the word "light" means [<i>not heavy.]',
                        'C. Find the underlined word in "Boots." Which of these words is louder: [<u>tiptoe] or [<u>stomp]?',     
                        'D. Which poem uses the word "like" to compare two things: "[<u>Dress]" or "[<u>Scarf]"?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","(D)S"],
                        ["0","(C)S","0","0","0","0","C"],
                        ["0","(B)3T","2R","U","E","0","1A"],
                        ["0","O","0","0","0","0","R"],
                        ["0","M","0","0","0","0","F"],
                        ["(A)S","P","I","N","4S","0","0"],
                    ]
                },  
                code: {
                    answer: "ARTS",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ helio athletics - honesty and cleaning
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "CCRA.R.8",
                        "CCRA.R.9",
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
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I had work to do today, but that sounded boring. So I wrote some battle cries instead! Read them and tell me if they make you feel brave.",
                    complete: "Very fine work, Puzzle Punks. I will remember your skills forever."
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
                                    text: "Honesty",
                                },
                                subtitle: {
                                    text: "By Robustus",
                                },
                                passage: {
                                    text: "There once was a warrior named Me,\
                                    <br>\
                                    as brave as a hero could be.\
                                    <br>\
                                    I could lie to look cool,\
                                    <br>\
                                    but I'm not a fool.\
                                    <br>\
                                    Being honest is good, you see!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-12%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Cleaning",
                                },
                                subtitle: {
                                    text: "By Robustus",
                                },
                                passage: {
                                    text: "Crumbs slipped from my hands as I ate,\
                                    <br>\
                                    and rolled far away from my plate.\
                                    <br>\
                                    All my friends use this table,\
                                    <br>\
                                    as much as they\'re able.\
                                    <br>\
                                    So I cleaned up my mess and felt great!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "20%",
                                rotate: "2deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is the main message of \"Honesty\"?",
                        correctIndex: 1,
                        paragraph: [
                            "It i{s} fun to lie",
                            "I{t} is a good idea to be honest",
                            "Warriors m{u}st always be cool",
                        ],
                    },
                    {
                        title: "[<g>2.] Line ___ of \"Honesty\" shows the main message.",
                        correctIndex: 2,
                        paragraph: [
                            "O{n}e",
                            "Tw{o}",
                            "F{i}ve",
                        ],
                    },
                    {
                        title: "[<g>3.] In \"Cleaning,\" the poet cleans his mess because:",
                        correctIndex: 2,
                        paragraph: [
                            "He feels bo{r}ed",
                            "Crumbs can get {i}tchy",
                            "His frien{d}s use the table too",
                        ],
                    },
                    {
                        title: "[<g>4.] What lesson does \"Cleaning\" teach us?",
                        correctIndex: 0,
                        paragraph: [
                            "It is important to clean up {y}our own mess",
                            "Sharin{g} food is a nice thing to do",
                            "You should always eat with a pla{t}e",
                        ],
                    },
                ],  
                code: {
                    answer: "TIDY",
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
