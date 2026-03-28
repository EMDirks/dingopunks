const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/making-inferences/thumbnail-2nd-3rd-grade.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [

        // ⭐ prismatica
        {
            info: {
                type: 'challenge',
                title: "Prismatica",
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter and look at the picture. Then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences From a Visual",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.9",
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
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.5",
                        "RL.3.7",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "Oh! A letter for me? I want to know what it says, but I\'m too busy getting ready for my fashion show tomorrow. Can you read it for me?",
                    complete: "Thank you, Puzzle Punks. What a lovely letter to read."
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
                                    &nbsp; &nbsp; I always wear gray clothes. I like to blend\
                                    in. But for my birthday, you gave me a\
                                    bright red scarf.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; So, I wore it to school. People smiled at me.\
                                    I even raised my hand in class. I felt brave!\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; That night, I carefully folded the scarf and\
                                    put it in my backpack for the next day.\
                                    <br>\
                                    <br>\
                                    From,\
                                    <br>\
                                    Glen"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-3%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "mm32_1.png",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "7%",
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
                                size: 'mediumSmall',
                                align: 'left',
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
                        title: "[<g>1.] Read the letter and look at the picture. Are they about the same thing?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "{Y}es",
                            "N{o}",
                        ],
                    },
                    {
                        title: "[<g>2.] In the picture, Glen is feeling ___.",
                        correctIndex: 1,
                        paragraph: [
                            "Sa{d}",
                            "H{a}ppy",
                            "Hu{n}gry",
                        ],
                    },
                    {
                        title: "[<g>3.] Does the picture show Glen [<i>before] or [<i>after] he got the bright red scarf?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Be{f}ore",
                            "Afte{r}",
                        ],
                    },
                    {
                        title: "[<g>4.] Why did Glen put the scarf in his backpack?",
                        correctIndex: 0,
                        paragraph: [
                            "He wa{n}ted to wear it again",
                            "He wanted to hid{e} it",
                            "He {w}as sad his birthday was over",
                        ],
                    },
                ],
                code: {
                    answer: "YARN",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ critterwerks
        {
            info: {
                type: 'challenge',
                title: "Critterwerks",
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Read the story, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences From Fiction",
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
                        "RL.2.5",
                        "RL.2.6",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Did you know I sell robots? I just built the Storytron 6400 \u2014 a robot that writes stories! Can you read what it wrote and see if it's good?",
                    complete: "Yay, it works! If you\'re free tomorrow, you should stop by my shop!"
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
                                    text: "Leo's Throne",
                                },
                                subtitle: {
                                    text: "By Storytron 6400",
                                },
                                passage: {
                                    text:   "Leo did not like recess. It was too loud, so he hid in the lost and found room. He stacked coats into a throne and wore a lunchbox lid like a crown. He pretended to be the king of all the lost things!\
                                    <br>\
                                    One day, a girl named Jaya came in. She looked at Leo\'s head. \"That\'s my sister\'s lid,\" she said. Leo froze. He didn\'t know what to do.\
                                    Jaya looked sad. \"My sister cried when she lost it,\" she said.\
                                    <br>\
                                    [<sal>Leo\'s chest felt tight.] Slowly, he gave her the lid. Then he sat back down on his throne of coats. He was still the king."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-1%",
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
                                size: 'large',
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. Does Leo like the lost and found room because it is [<u>quiet] or [<u>cold]?',
                        'B. [<u>True] or [<u>false]: the red sentence shows that Leo felt bad about keeping the lid.',
                        'C. [<u>True] or [<u>false]: Jaya does not care about her sister.',
                        'D. Is Leo [<u>kind] or [<u>mean]?',
                    ],
                    puzzle: [
                        ["(C)F","0","0","0","0","0","0"],
                        ["A","0","0","0","(D)K","0","0"],
                        ["1L","0","(A)Q","U","I","E","(B)T"],
                        ["S","0","0","0","3N","0","R"],
                        ["E","0","0","0","4D","0","U"],
                        ["0","0","0","0","0","0","2E"],
                    ]
                },
                code: {
                    answer: "LEND",
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
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences From Nonfiction",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RI.2.3",
                        "RI.2.8",
                        "RI.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.3",
                        "RI.3.8",
                        "RI.3.10"
                    ],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "I'm selling this arcade. I left a note for the next owner so they don't mess it up. Can you read it and make sure it makes sense?",
                    complete: "Yeah, that seems good enough. Thanks for the help, I guess..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "zeeb-plex-2.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Circuit Boards",
                                },
                                subtitle: {
                                    text: "By Zeeb",
                                },
                                passage: {
                                    text:   "Inside every arcade game is something called a circuit board. Most people do not see it. But without it, the game will not work.\
                                    <br>\
                                    A circuit board has many tiny parts. These parts are connected by thin lines, like little roads. Electricity moves along these lines.\
                                    <br>\
                                    If the tiny parts and lines are not broken, the game works just right. But if something is broken, the game can stop or act funny."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "4%",
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
                                size: 'large',
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
                        title: "[<g>1.] Why don't most people think about circuit boards?",
                        correctIndex: 0,
                        paragraph: [
                            "{T}hey are hidden inside arcade games",
                            "The{y} are the color red",
                            "They co{s}t a lot of money",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: a circuit board needs electricity in order to work.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] To fix a circuit board, you must be:",
                        correctIndex: 1,
                        paragraph: [
                            "Laz{y}",
                            "Ca{r}eful",
                            "S{t}rong",
                        ],
                    },
                    {
                        title: "[<g>4.] An arcade game might stop working if:",
                        correctIndex: 2,
                        paragraph: [
                            "The room is to{o} cold",
                            "The li{g}hts are too bright",
                            "Its circuit board is broke{n}",
                        ],
                    },
                ],
                code: {
                    answer: "TURN",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the candy cave
        {
            info: {
                type: 'challenge',
                title: "The Candy Cave",
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Read each riddle, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Solving Riddles",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.2",
                        "RI.2.6",
                        "RI.2.8",
                        "RI.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RI.3.2",
                        "RI.3.10"
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I wrote some riddles for my grand opening tomorrow. They're all about candy. I hope they're not too hard! Can you try to solve them?",
                    complete: "Thank you so very much! I really hope people love my riddles."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-candy-cave.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Riddle #1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I look like a bug you find in the dirt.<br>I'm long, chewy, and sweet as dessert.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "60%",
                                translateY: "-100%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Riddle #2",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I am red and white and sweet.<br>At winter time, I am a treat.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-22%",
                                translateY: "35%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Riddle #3",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I'm soft and white, and puffy too.<br>Roast me on a fire? I hope you do!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-45%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Riddle #4",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "My job is to make your breath nice.<br>My taste is cool, just like ice.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-40%",
                                translateY: "80%",
                                rotate: "2deg",
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
                            dimension: {
                                width: "full",
                                height: "auto",
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
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
                        title: "[<g>1.] What candy is \"Riddle #1\"?",
                        correctIndex: 0,
                        paragraph: [
                            "A gum{m}y worm",
                            "A cand{y} corn",
                            "A piece of cotton ca{n}dy",
                        ],
                    },
                    {
                        title: "[<g>2.] What candy is \"Riddle #2\"?",
                        correctIndex: 1,
                        paragraph: [
                            "A stic{k} of gum",
                            "A candy can{e}",
                            "A c{h}ocolate bar",
                        ],
                    },
                    {
                        title: "[<g>3.] \"Riddle #3\" is describing ___.",
                        correctIndex: 2,
                        paragraph: [
                            "A jelly be{a}n",
                            "A g{u}mdrop",
                            "A marshmal{l}ow",
                        ],
                    },
                    {
                        title: "[<g>4.] What candy is \"Riddle #4\" talking about?",
                        correctIndex: 1,
                        paragraph: [
                            "A g{u}mmy bear",
                            "A min{t}",
                            "A c{h}ocolate bar",
                        ],
                    },
                ],
                code: {
                    answer: "MELT",
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
