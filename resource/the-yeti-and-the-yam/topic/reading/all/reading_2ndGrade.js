// NOTE: education.commonCore standards in this file were auto-added and distributed by AI and might need manual review at some future point.

const resource =  {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ Dr. Sera's Cell

        {

            info: {
                type: 'challenge',
                title: "Dr. Sera's Cell",
                asset: "dr-seraphina.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Lime Snow Cones\" and \"Banana Snow Cones\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RI.2.2",
                        "RI.2.6",
                        "RI.2.8",
                        "RI.2.10",
                    ],
                }
            },

            intro: {
                character: "Dr. Sera",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I\'ll give you some sugar for those yams, but I need your help first! You see, I\'m trying to make the perfect snow cone. Can you read my notes?",
                    complete: "Did I turn my hair into a snow cone? Yep. Do I know how to fix it? Nope!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "1.png",
                                },
                            },
                            {
                                title: {
                                    text: "Lime Snow Cones",
                                },
                                passage: {
                                    text: "Lime snow cones have a strong, sour taste. Even with a little sugar, they still taste very sour. [<blu>They can make your mouth hurt!]",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-6%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "2.png",
                                },
                            },
                            {
                                title: {
                                    text: "Banana Snow Cones",
                                },
                                passage: {
                                    text: "Banana snow cones have a light, sweet taste. They are quite mild. They are a good choice for people who do not like sour treats. Bananas are often eaten at breakfast.",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "6%",
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
                        dimension: {
                            width: "percent65",
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
                        title: "[<g>1.] What is the main idea of \"Lime Snow Cones\" ?",
                        correctIndex: 0,
                        paragraph: [
                            "Li{m}e snow cones have a strong, sour taste",
                            "Lime snow cones are made wi{t}h sugar",
                            "Lim{e} snow cones are green",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the blue sentence in \"Lime Snow Cones\" supports the main idea.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] The main idea of \"Banana Snow Cones\" is:",
                        correctIndex: 1,
                        paragraph: [
                            "Banana snow cones are ye{l}low",
                            "Banana snow cones have a light, sweet t{a}ste",
                            "Bana{n}as are often eaten at breakfast",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the last sentence in \"Banana Snow Cones\" supports the main idea.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "{T}rue",
                            "Fa{l}se",
                        ],
                    },
                ],
                code: {
                    answer: "MEAL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Tater Durant's Cell

        {

            info: {
                type: 'challenge',
                title: "Tater Durant's Cell",
                asset: "tater-drift.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Cooking Potatoes\" and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.2.3",
                        "RF.2.3a",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.2",
                        "RL.2.4",
                        "RL.2.10",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "You need yams? Well, buddy, you came to the right guy! Just read my poem about potatoes, and I\'ll give you all the yams you need.",
                    complete: "Potatoes are life. Potatoes are love. Don\'t you ever forget that, kid."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Cooking Potatoes",
                                },
                                subtitle: {
                                    text: "By Tater Durant",
                                },
                                passage: {
                                    text:   "Potatoes grow down in the ground,\
                                    <br>\
                                    round and brown, they can be found.\
                                    <br>\
                                    Bake them hot or mash them right,\
                                    <br>\
                                    crispy, crunchy fries all night!\
                                    <br>\
                                    <br>\
                                    Potatoes make a tasty treat,\
                                    <br>\
                                    warm and soft and good to eat.\
                                    <br>\
                                    I could have them every day,\
                                    <br>\
                                    cooked in almost every way!"
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which word begins with the same sound as \"crispy\": [<u>crunchy], [<u>brown], or [<u>tasty]?',
                        'B. In this poem, what word rhymes with \"treat\"?',
                        'C. Do potatoes grow in the [<u>ground] or in a [<u>swamp]?',
                        'D. [<u>True] or [<u>false]: this poem is mostly about the different ways to cook potatoes.',
                    ],
                    puzzle: [
                        ["0","0","(C)G","0","0","0","0"],
                        ["0","(D)T","R","3U","E","0","0"],
                        ["0","0","2O","0","0","0","0"],
                        ["(A)C","4R","U","N","C","H","Y"],
                        ["0","0","N","0","0","0","0"],
                        ["0","0","D","0","(B)E","A","1T"],
                    ]
                },
                code: {
                    answer: "TOUR",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ Fishbeard's Cell

        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues and Vocabulary",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "L.2.4",
                        "L.2.4a",
                        "L.2.4b",
                        "L.2.4d",
                        "L.2.5",
                        "L.2.5b",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3d",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RL.2.4",
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arrr, lad! You need butter for those candied yams? I\'ve got plenty! But first, help me read the clues on my map.",
                    complete: "Nice work! Take the butter. And if you find any treasure, remember who helped you!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "fishbeard.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "A. The wind was cold and [<hi>chilly]!",
                                },
                                backgroundImage: {
                                    file: "1.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "B. The man was unhappy when he lost his hat.",
                                },
                                backgroundImage: {
                                    file: "2.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "C. The cave was so dark, nobody could see a thing.",
                                },
                                backgroundImage: {
                                    file: "3.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "D. The girl saw a [<hi>sailboat] in the water.",
                                },
                                backgroundImage: {
                                    file: "4.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "E. The icy stairs are [<hi>unsafe]. You could slip and fall.",
                                },
                                backgroundImage: {
                                    file: "5.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "F. A huge snowball rolled down the hill.",
                                },
                                backgroundImage: {
                                    file: "6.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "G. The captain saw a lighthouse on the island.",
                                },
                                backgroundImage: {
                                    file: "7.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "H. The boy found a seashell buried in the sand.",
                                },
                                backgroundImage: {
                                    file: "8.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "I. The angry pirate [<hi>stomps] across the deck.",
                                },
                                backgroundImage: {
                                    file: "9.png"
                                }
                            },
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
                        title: "[<g>1.] Read puzzle piece A. What is another word for \"chilly\" ?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Wi{n}d",
                            "Co{l}d",
                        ],
                    },
                    {
                        title: "[<g>2.] \"Un\" means [<i>not,] so \"unsafe\" means ___ .",
                        correctIndex: 0,
                        paragraph: [
                            "Not s{a}fe",
                            "{V}ery safe",
                            "Under t{h}e water",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of these puzzle pieces has a word that means \"a boat with sails\" ?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Puzzle {p}iece I",
                            "Puzzle piece {D}",
                        ],
                    },
                    {
                        title: "[<g>4.] Read puzzle piece I. Is the highlighted word stronger than \"walks\" ?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Ye{s}",
                            "{N}o",
                        ],
                    },
                ],
                code: {
                    answer: "LADS",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Pippo's Cell

        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Look at the passage, glossary, and picture, and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Text Features",
                    commonCore: [
                        "CCRA.L.4",
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.2.4",
                        "L.2.4e",
                        "RF.2.3",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.1",
                        "RI.2.5",
                        "RI.2.7",
                        "RI.2.10",
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "I must fix my crashed plane! I found these papers in the wreck, but I can\'t read all the words. If you help, I\'ll build you an oven for those yams!",
                    complete: "If you ever see my sister Topsy, let her know I\'m doing okay!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "pippo-fizzlepop.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Airplane Needs",
                                },
                                subtitle: {
                                    text: "By Pilot Topsy",
                                },
                                passage: {
                                    text: "An airplane needs many parts to fly. The engine gives it power. The propeller helps move it forward. The wings help keep it in the air. An airplane also needs fuel to keep the engine running."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Glossary",
                                },
                                passage: {
                                    text:   "[<u>engine:] the part that gives an airplane power\
                                    <br>\
                                    <br>\
                                    <br>\
                                    [<u>propeller:] blades that spin to move an airplane\
                                    <br>\
                                    <br>\
                                    <br>\
                                    [<u>fuel:] what an airplane uses for energy"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-1%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "yy20_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "5%",
                                rotate: "6deg",
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
                            width: "percent30",
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
                                align: 'left'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'tiny',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left',
                                brSplit: 'default'
                            },
                            dimension: {
                                width: "full",
                                height: "auto",
                            }
                        },
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
                        'A. [<u>True] or [<u>false]: the title of the passage is \"By Pilot Topsy.\"',
                        'B. Read the glossary. Do propellers have blades that [<u>roll], [<u>spin], or [<u>flap]?',
                        'C. Look at the picture. Is the propeller in the [<u>front] or the [<u>back] of the airplane?',
                        'D. The caption says the plane is named [<i>The ____ .]',
                    ],
                    puzzle: [
                        ["(A)F","A","1L","(D)S","E","0","0"],
                        ["0","0","0","W","0","0","0"],
                        ["0","(C)3F","R","O","N","4T","0"],
                        ["0","0","0","O","0","0","0"],
                        ["0","0","(B)S","P","2I","N","0"],
                    ]
                },
                code: {
                    answer: "LIFT",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ The Knight's Cell

        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Read \"The Tale of the Frozen Knight\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
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
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "Need some marshmallows for those candied yams? I only have a few left, but I\'ll share them with you if you read my story.",
                    complete: "If you get out of here alive, tell the King to send us help!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "The Tale of the Frozen Knight",
                                },
                                subtitle: {
                                    text: "By The Frozen Knight",
                                },
                                passage: {
                                    text:   "One winter, the King sent me out to catch a yeti. I thought I could do it alone, but I got lost. The yeti found me, stuffed me in a bag, and took me to her freezing ice cave.\
                                    <br>\
                                    Other people were trapped in the cave too. At first, I did not want their help. But soon, I found out that working together made life in the cave easier.\
                                    <br>\
                                    We are still trapped, but now we are a team. I learned that everyone needs help sometimes. Even a knight like me!"
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
                        title: "[<g>1.] Where does most of the story take place?",
                        correctIndex: 2,
                        paragraph: [
                            "A cr{a}shed airplane",
                            "The {K}ing\'s castle",
                            "A {f}reezing ice cave",
                        ],
                    },
                    {
                        title: "[<g>2.] What problem does the Frozen Knight have?",
                        correctIndex: 0,
                        paragraph: [
                            "She is t{r}apped in the yeti\'s cave",
                            "Sh{e} has no money left",
                            "She is bored with her {j}ob",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: at first, the Frozen Knight does not want anyone else to help her.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tru{e}",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>4.] What lesson does the Frozen Knight learn?",
                        correctIndex: 1,
                        paragraph: [
                            "Not eve{r}y yeti is mean",
                            "{E}veryone needs help sometimes",
                            "The King hates win{t}er",
                        ],
                    },
                ],
                code: {
                    answer: "FREE",
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
