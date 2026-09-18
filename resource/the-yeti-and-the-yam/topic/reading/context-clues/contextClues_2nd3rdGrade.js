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
                    text: "Read each label, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "L.3.4",
                        "L.3.4a",
                        "L.3.5",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RI.3.4",
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue: {
                    incomplete: "Need an oven to bake those yams? No problem! I can build anything. But first, I need help reading the labels on these old parts. Think you can help?",
                    complete: "Thanks for the help! If you see my sister Topsy, tell her I miss her."
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
                                    text: "Latch",
                                },
                                passage: {
                                    text: "When you finish taking money out of the safe, make sure to close the [<hi>latch]: a small part that keeps a door shut.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "-4%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Spring",
                                },
                                passage: {
                                    text: "Check the [<hi>spring], a curly piece of metal that can stretch and bounce, before you press the button.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "-2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Axle",
                                },
                                passage: {
                                    text: "You must always check that the axle is straight. An [<hi>axle] is a rod that connects two wheels.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "4%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Crank",
                                },
                                passage: {
                                    text: "Turn the [<hi>crank] (a handle that moves in a circle) to start the machine. Keep turning until you hear a click.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "6%",
                                rotate: "-1deg",
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
                            width: "percent40",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
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
                                width: "full",
                                height: "auto",
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
                        title: "[<g>1.] What does the word \"latch\" mean?",
                        correctIndex: 1,
                        paragraph: [
                            "A very str{o}ng safe",
                            "A smal{l} part that keeps a door shut",
                            "A small part that is alway{s} easy to break",
                        ],
                    },
                    {
                        title: "[<g>2.] A \"spring\" is:",
                        correctIndex: 2,
                        paragraph: [
                            "A straight piece of {m}etal",
                            "A sm{a}ll plastic button",
                            "None of the ab{o}ve",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of these items would have an axle?",
                        correctIndex: 0,
                        paragraph: [
                            "A {c}ar",
                            "A p{h}one",
                            "A windo{w}",
                        ],
                    },
                    {
                        title: "[<g>4.] \"A handle that moves in a circle\" is called a ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "L{a}tch",
                            "Sp{r}ing",
                            "Cran{k}",
                        ],
                    },
                ],
                code: {
                    answer: "LOCK",
                    userArray: ["", "", "", ""]
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
                    text: "Read the letter from King Kevin, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Compound Words and Shades of Meaning",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.4",
                        "L.2.4a",
                        "L.2.5",
                        "L.2.5b",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3d",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.4",
                        "L.3.3",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.5",
                        "L.3.5c",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.4",
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue: {
                    incomplete: "Need some marshmallows for those candied yams? I\'ve got some! But first, help me read this secret letter. Some of these words are giving me trouble.",
                    complete: "If you happen to get out of here, tell King Kevin we still need help!"
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
                                passage: {
                                    text:   "Dear Frozen Knight,\
                                    <br>\
                                    <br>\
                                    &nbsp;&nbsp; I still remember the day you marched over the [<hi>hillside] to catch that yeti. You were very brave then, and you are still brave now. Do not give up!\
                                    <br>\
                                    <br>\
                                    &nbsp;&nbsp; I hope you and the others can make a [<sal>campfire] soon. It may be cold in the cave, but I bet it feels [<hi>freezing] at night!\
                                    <br>\
                                    <br>\
                                    &nbsp;&nbsp; Everyone in the kingdom is waiting for you to come home. Some people whisper about your return, some speak about it, and some [<hi>shout] from the rooftops!\
                                    <br>\
                                    <br>\
                                    Your friend,\
                                    <br>\
                                    King Kevin"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "2%",
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
                                translateX: "4%",
                                translateY: "6%",
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
                            width: "percent80",
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
                            dimension: {
                                width: "full",
                                height: "auto",
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
                        title: "[<g>1.] True or false: \"freezing\" is colder than \"cold.\"",
                        word: "T[R]UE",
                    },
                    {
                        title: "[<g>2.] The red word is made from 2 words: ___ and fire.",
                        word: "C[A]MP",
                    },
                    {
                        title: "[<g>3.] Which word means \"the side of a hill\"?",
                        word: "H[I]LLSIDE",
                    },
                    {
                        title: "[<g>4.] Right or wrong: \"speak\" is louder than \"shout.\"",
                        word: "WRO[N]G",
                    },
                ],
                code: {
                    answer: "RAIN",
                    userArray: ["", "", "", ""]
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
                    text: "Read \"My French Fry\" and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
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
                        "L.2.4",
                        "L.2.4a",
                        "L.2.5",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3e",
                        "RF.2.3f",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RL.2.4",
                        "L.3.3",
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
                        "RL.3.4",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue: {
                    incomplete: "Dude! I think I just wrote the best poem ever. I\'m really excited, but I want someone else to read it. If you help me out, I\'ll give you some yams.",
                    complete: "Dude! Thanks for the help! Take good care of those yams, okay?"
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
                                    text: "My French Fry",
                                },
                                subtitle: {
                                    text: "By Tater Durant",
                                },
                                passage: {
                                    text:   "I was very [<u>fortunate] at lunch that day —\
                                    <br>\
                                    I found an extra fry on my tray!\
                                    <br>\
                                    <br>\
                                    I felt so [<u>cheery], from morning till night.\
                                    <br>\
                                    I sang with joy and I danced with delight!\
                                    <br>\
                                    <br>\
                                    That greasy fry [<u>gleamed], a wonderful sight,\
                                    <br>\
                                    like a shiny gold coin catching bright rays of light.\
                                    <br>\
                                    <br>\
                                    Then it fell to the floor in a [<u>swift] sort of way.\
                                    <br>\
                                    It hit the ground in seconds... I ate it anyway!"
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
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. [<u>True] or [<u>false]: the word \"fortunate\" means [<i>lucky].',
                        'B. Which word means [<i>full of joy and happiness]: [<u>cheery] or [<u>gleamed]?',
                        'C. What is another word for \"swift\" — [<u>fast] or [<u>slow]?',
                        'D. Which word in this poem means [<i>shined brightly]?',
                    ],
                    puzzle: [
                        ["0","0","0","(C)F","0","0","0"],
                        ["0","(D)G","3L","E","2A","M","D"],
                        ["0","0","0","S","0","0","0"],
                        ["0","0","0","(A)1T","R","U","E"],
                        ["0","0","0","0","0","0","0"],
                        ["(B)C","H","E","4E","R","Y","0"],
                    ]
                },
                code: {
                    answer: "TALE",
                    userArray: ["", "", "", ""]
                },
            },

        },

        // ⭐ Dr. Sera's Cell

        {

            info: {
                type: 'challenge',
                title: "Dr. Sera's Cell",
                asset: "dr-seraphina.png",
                state: "incomplete",
                hint: {
                    text: "Read \"The Secret to Sweetness\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
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
                        "L.3.4",
                        "L.3.4b",
                        "L.3.4c",
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
                        "RI.3.4",
                    ],
                }
            },

            intro: {
                character: "Dr. Sera",
                asset: "dr-seraphina.png",
                dialogue: {
                    incomplete: "I\'m trying to make the perfect snow cone, but I have way too much to read! If you read one paper for me, I\'ll give you some butter. Deal?",
                    complete: "Thanks a lot! You saved me from reading all day. Now I can get back to my snow cones!"
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
                                title: {
                                    text: "The Secret to Sweetness",
                                },
                                subtitle: {
                                    text: "By Professor Gordie Banzo",
                                },
                                passage: {
                                    text:   "Long ago, goblins made snow cones [<u>underground]. I searched for proof, but after a long time, I felt [<u>hopeless]. I had not found anything at all!\
                                    <br>\
                                    Then one day, deep inside this cave, I found an old carving with a snow cone recipe on it. The carving was written in the goblin language. It said:\
                                    <br>\
                                    [<i>\"Too little sugar can make a goblin [<u>unhappy]. Too much sugar can taste bad too. The best snow cone has just the right amount of sweetness. It can make even the saddest goblin feel [<u>joyful]!\"]"
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
                        title: "[<g>1.] What does the word \"unhappy\" mean?",
                        correctIndex: 1,
                        paragraph: [
                            "Very h{a}ppy",
                            "{N}ot happy",
                            "To fee{l} happy underground",
                        ],
                    },
                    {
                        title: "[<g>2.] If \"-less\" means [<i>without], then \"hopeless\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "A lit{t}le hope",
                            "Lots of h{o}pe",
                            "W{i}thout hope",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of these places is usually \"underground\" ?",
                        correctIndex: 1,
                        paragraph: [
                            "A {n} ocean",
                            "A {c}ave",
                            "A moun{t}ain",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the word \"joyful\" means the same thing as \"unhappy.\"",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tr{u}e",
                            "Fals{e}",
                        ],
                    },
                ],
                code: {
                    answer: "NICE",
                    userArray: ["", "", "", ""]
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
