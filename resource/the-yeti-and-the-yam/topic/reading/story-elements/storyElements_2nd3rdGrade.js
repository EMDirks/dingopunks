// NOTE: education.commonCore standards in this file were auto-added and distributed by AI and might need manual review at some future point.

const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ Pippo's Cell

        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Read the wanted poster, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Topic and Details",
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
                        "RI.2.6",
                        "RI.2.8",
                        "RI.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.8",
                        "RI.3.10",
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue: {
                    incomplete: "Hey, look! A poster just blew in! But I\'m too busy fixing my plane to read it. Can you let me know what it\'s all about? If you do, I\'ll use my engine to bake those yams.",
                    complete: "Well, that\'s not good. Anyway... let me turn on this engine. Those yams won\'t bake themselves!"
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
                                    text: "WANTED: PIPPO FIZZLEPOP",
                                },
                                subtitle: {
                                    text: "$100,000 REWARD",
                                },
                                passage: {
                                    text:   "[<tal>-------------------------------]\
                                    <br>\
                                    Pippo Fizzlepop is wanted by the police. Why? He stole every single clock in the city!\
                                    <br>\
                                    Pippo flew away in an airplane before anyone could catch him. And just last week, a broken piece of his airplane was found near a snowy cave.\
                                    <br>\
                                    Some folks think Pippo is hiding in the cave. Others think he left the piece there to trick people into looking for him in the wrong place.\
                                    <br>\
                                    If you see Pippo Fizzlepop, tell the police right away. Help us catch him!"
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
                        title: "[<g>1.] What is this passage mostly about?",
                        correctIndex: 1,
                        paragraph: [
                            "How im{p}ortant clocks are",
                            "Pippo Fizzlepop\'{s} crime and escape",
                            "The best co{l}or to paint an airplane",
                        ],
                    },
                    {
                        title: "[<g>2.] What was Pippo\'s crime?",
                        correctIndex: 0,
                        paragraph: [
                            "He stole {a}ll the clocks in the city",
                            "Going to scho{o}l late",
                            "Flying a broken ai{r}plane",
                        ],
                    },
                    {
                        title: "[<g>3.] After stealing the clocks, Pippo:",
                        correctIndex: 1,
                        paragraph: [
                            "Woke up earl{y}",
                            "{F}lew away in an airplane",
                            "Turned him{s}elf in",
                        ],
                    },
                    {
                        title: "[<g>4.] Who is this wanted poster written for?",
                        correctIndex: 0,
                        paragraph: [
                            "People who might see Pippo and h{e}lp catch him",
                            "People who wan{t} to buy an airplane",
                            "Pippo Fiz{z}lepop himself",
                        ],
                    },
                ],
                code: {
                    answer: "SAFE",
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
                    text: "Read \"Pam\'s Silver Blanket\" and answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Characters",
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
                        "RL.2.9",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue: {
                    incomplete: "Hey, dude! I wrote a poem about potatoes! Read it and tell me what you think, okay? As thanks, I\'ll give you some yams. I\'ve always got yams.",
                    complete: "Thanks, bro-tato! Glad you liked my poem. Here are those yams, as promised."
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
                                    text: "Pam\'s Silver Blanket",
                                },
                                passage: {
                                    text:   "<br>\
                                    Potato Pam lay wrapped in a blanket of foil.\
                                    <br>\
                                    She had planned for winter and felt safe.\
                                    <br>\
                                    Nearby, Potato Tim shivered.\
                                    <br>\
                                    He was too worried to make a plan.\
                                    <br>\
                                    <br>\
                                    Then, a great storm shook the earth!\
                                    <br>\
                                    Icy rain reached deep underground.\
                                    <br>\
                                    Tim froze with fear.\
                                    <br>\
                                    <br>\
                                    But Pam stayed calm and cozy.\
                                    <br>\
                                    She lifted her silver blanket, making room for one more.\
                                    <br>\
                                    <br>\
                                    Together, they waited for spring."
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
                                size: 'medium',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center',
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
                        'A. Which potato is calm and prepared: [<u>Pam] or [<u>Tim]?',
                        'B. Is Potato Tim [<u>happy] or [<u>afraid]?',
                        'C. [<u>Right] or [<u>wrong]: Pam and Tim feel the same way when the storm begins.',
                        'D. Which word best describes Potato Pam when she helps Potato Tim: [<u>kind] or [<u>mean]?',
                    ],
                    puzzle: [
                        ["0","(B)A","0","(D)K","0","0","(A)P"],
                        ["0","F","0","3I","0","0","2A"],
                        ["(C)W","1R","O","4N","G","0","M"],
                        ["0","A","0","D","0","0","0"],
                        ["0","I","0","0","0","0","0"],
                        ["0","D","0","0","0","0","0"],
                    ]
                },
                code: {
                    answer: "RAIN",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Fishbeard's Cell

        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Put the puzzle together, read the story, and answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.5",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue: {
                    incomplete: "Arrr, matey! I found an old story written on a map, but it\'s torn to pieces! Can ye put it back together? I\'ll give ye some butter as thanks!",
                    complete: "Har har! Ye did it, matey! The story\'s back together! Here\'s that barrel o\' butter I promised."
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
                                    text: "A. Last year, trolls stole the Snow King\'s crown.",
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
                                    text: "B. Without it, the Snow King could not make snow!",
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
                                    text: "C. Luckily, a pirate said she could find the crown.",
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
                                    text: "D. She followed the trolls\' tracks into a dark cave.",
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
                                    text: "E. Inside, the trolls stood guard over the crown.",
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
                                    text: "F. The pirate ran right at the trolls, scaring them off!",
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
                                    text: "G. So she picked up the crown and went home.",
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
                                    text: "H. The Snow King could finally make snow again.",
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
                                    text: "I. Snowflakes fell as everyone cheered!",
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
                        title: "[<g>1.] What happens at the beginning of the story?",
                        correctIndex: 0,
                        paragraph: [
                            "Trolls steal the {S}now King\'s crown",
                            "The pira{t}e finds trolls in a cave",
                            "None of the a{b}ove",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the story ends with the Snow King making snow again.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tru{e}",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the main problem of the story?",
                        correctIndex: 1,
                        paragraph: [
                            "The trolls c{a}n\'t find a lightbulb",
                            "The Snow King can\'t mak{e} snow",
                            "The pi{r}ate gets lost in a cave",
                        ],
                    },
                    {
                        title: "[<g>4.] How is the story\'s problem solved?",
                        correctIndex: 2,
                        paragraph: [
                            "It never snow{s} again",
                            "The trolls and the pirate become frien{d}s",
                            "The pirate brings back the Snow {K}ing\'s crown",
                        ],
                    },
                ],
                code: {
                    answer: "SEEK",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ The Knight's Cell

        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Read both stories, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Theme",
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
                        "RL.2.2",
                        "RL.2.3",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.2",
                        "RL.3.3",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue: {
                    incomplete: "King Kevin sent me to hunt the yeti, but now I fear my quest was wrong! Read both our stories. What can we learn from them? Help me, and I shall share my sugar rations!",
                    complete: "Perhaps we both made mistakes. Thank you for helping me think for myself."
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
                                    text: "The Knight\'s Story",
                                },
                                passage: {
                                    text:   "King Kevin ordered me to hunt the yeti. I did not ask why. A good knight always follows the King\'s orders.\
                                    <br>\
                                    But it all went wrong! I got lost and fell into a deep hole hidden under the snow.\
                                    <br>\
                                    Now I am trapped. The yeti was only protecting her home, and had done nothing wrong. I now know that following orders isn\'t always right. I should have thought for myself!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-12%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "The Yeti\'s Story",
                                },
                                passage: {
                                    text:   "Yeti live alone in cave. Yeti big. Yeti hairy. Yeti different. But Yeti not bad!\
                                    <br>\
                                    People come to hunt Yeti. People come to take pictures. Yeti just want peace!\
                                    <br>\
                                    One day, shiny knight come with sword. Too proud. Too loud. Yeti dig deep hole and cover with snow. Knight fall in!\
                                    <br>\
                                    Yeti not monster. Yeti not bad. Yeti just want to be left alone!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "15%",
                                rotate: "4deg",
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
                            title: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
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
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. The knight learned this lesson: following orders isn\'t always ___.',
                        'B. Who did the knight listen to without thinking for herself: the [<u>king] or the [<u>yeti]?',
                        'C. [<u>True] or [<u>false]: the yeti believes that being different makes her bad.',
                        'D. Does the yeti want [<u>peace] or [<u>glory]?',
                    ],
                    puzzle: [
                        ["0","(B)K","0","0","0","0","0"],
                        ["(A)1R","2I","G","H","T","0","(C)F"],
                        ["0","N","0","0","0","0","A"],
                        ["0","G","0","0","0","0","L"],
                        ["0","0","0","0","0","0","3S"],
                        ["0","0","(D)P","4E","A","C","E"],
                    ]
                },
                code: {
                    answer: "RISE",
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
