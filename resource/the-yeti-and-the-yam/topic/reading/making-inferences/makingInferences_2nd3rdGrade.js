// NOTE: education.commonCore standards in this file were auto-added and distributed by AI and might need manual review at some future point.

const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ tater durant's cell
        {

            info: {
                type: 'challenge',
                title: "Tater Durant's Cell",
                asset: "tater-drift.png",
                state: "incomplete",
                hint: {
                    text: "Read the story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Fiction",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RL.2.1",
                        "RL.2.3",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "I came here looking for a magic lantern, but I ended up in the yeti\'s cave! Maybe I got the story wrong. Can you read it for me? If you do, I\'ll give you a couple of yams.",
                    complete: "Cool, buddy! I guess the lantern is just a ghost story after all. Let me grab those yams for you!"
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
                                    text: "A Strange Light",
                                },
                                passage: {
                                    text: "On Frostbite Island, people tell stories about a strange light that shows up during snowstorms. It looks like a golden lantern moving through the dark forest.\
                                    <br>\
                                    People say the lantern is magical. If you follow it, it will lead you to what you want most. Some people say they found lost pets. Others say they found chests filled with gold and jewels.\
                                    <br>\
                                    But no one has ever proved that the lantern is real. Still, every winter, people look out their windows, hoping to see a golden light moving through the snowy woods."
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
                        title: "[<g>1.] What kind of plants grow on Frostbite Island?",
                        correctIndex: 2,
                        paragraph: [
                            "F{l}owers",
                            "C{a}cti",
                            "Tree{s}",
                        ],
                    },
                    {
                        title: "[<g>2.] Why might someone follow the lantern?",
                        correctIndex: 1,
                        paragraph: [
                            "To escape a wild a{n}imal",
                            "T{o} find something they want",
                            "To watch the fallin{g} snow",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: the “strange light” and the “golden lantern” are the same thing.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>4.] What can we guess about the lantern?",
                        correctIndex: 0,
                        paragraph: [
                            "It may be magica{l}",
                            "It is carried by a kin{g}",
                            "It is just a {t}oy",
                        ],
                    },
                ],
                code: {
                    answer: "SOUL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ dr. seraphina's cell
        {

            info: {
                type: 'challenge',
                title: "Dr. Seraphina's Cell",
                asset: "dr-seraphina.png",
                state: "incomplete",
                hint: {
                    text: "Read Dr. Seraphina\'s notes, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Nonfiction",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.6",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RI.2.1",
                        "RI.2.3",
                        "RI.2.6",
                        "RI.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.3",
                        "RI.3.8",
                        "RI.3.10",
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I came here looking for a rare sugar beet, and I found one! Can you check my notes to see if they make sense? As thanks, I\'d be happy to share some sugar with you.",
                    complete: "Perfect. I knew my notes looked good! Here\'s some sugar for all your help."
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
                                    text: "Turning Beets into Sugar",
                                },
                                subtitle: {
                                    text: "By Dr. Seraphina",
                                },
                                passage: {
                                    text: "Sugar beets are large, pale vegetables that grow underground. You can make sugar from them, and here\'s how!\
                                    <br>\
                                    [<hi>First, pull the beets up from the ground and wash them.] Then, cut them into small pieces and toss them in water to boil. This helps bring out the juice.\
                                    <br>\
                                    Next, pour the juice through a cloth to remove any pieces of beet. Boil the juice again until it becomes thick and sticky.\
                                    <br>\
                                    Finally, let the juice cool. Soon, little crystals will begin to form! Just remember: if your sugar tastes like dirt, you need to wash the beets better next time."
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
                            material: 'metal',
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. Is Dr. Seraphina trying to [<u>teach] or [<u>scold] the reader?',
                        'B. Read the highlighted sentence. What can you infer must be washed off the beets: [<u>snow] or [<u>dirt]?',
                        'C. Which word from paragraph four lets us know that this is the last step: [<u>first], [<u>next], or [<u>finally]?',
                        'D. [<u>Yes] or [<u>no]: the “little crystals” in the last paragraph are actually sugar.',
                    ],
                    puzzle: [
                        ["0","0","0","(A)T","0","0","0"],
                        ["0","(B)2D","0","E","0","0","0"],
                        ["(C)F","1I","N","4A","L","L","(D)Y"],
                        ["0","R","0","C","0","0","3E"],
                        ["0","T","0","H","0","0","S"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },
                code: {
                    answer: "IDEA",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ pippo's cell
        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Read the journal entry and the letter, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Related Texts",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.6",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RL.2.1",
                        "RL.2.3",
                        "RL.2.6",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.6",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "Oops! I crashed my plane on this island! Now I\'m stuck here with a yeti, and I can\'t tell if she\'s friendly or hungry. Can you help me figure it out? I\'ll cook those yams for you!",
                    complete: "Wait... the yeti wants to EAT me?! Yikes! That can\'t be right!"
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
                                    text: "Journal Entry #1",
                                },
                                subtitle: {
                                    text: "By Pippo Fizzlepop",
                                },
                                passage: {
                                    text: "<br>\
                                    &nbsp;&nbsp; I flew into a snowstorm and crashed my plane on Frostbite Island. Now I\'m stuck here... and there\'s a yeti, too!\
                                    <br>\
                                    <br>\
                                    &nbsp;&nbsp; Yesterday, the yeti put salt and pepper on my head. Then she gave a loud roar. She was probably just saying hello.\
                                    <br>\
                                    <br>\
                                    &nbsp;&nbsp; Anyway, I need to fix my plane so I can fly home. I hope it doesn\'t take too long."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Dear Pippo,\
                                    <br>\
                                    <br>\
                                    &nbsp;&nbsp; Please do NOT fly over Frostbite Island. A yeti lives there!\
                                    <br>\
                                    <br>\
                                    &nbsp;&nbsp; People say the yeti roars when she is hungry. In fact, the last person who heard her roar never came home.\
                                    <br>\
                                    <br>\
                                    &nbsp;&nbsp; Please be careful, Pippo!\
                                    <br>\
                                    <br>\
                                    Yours truly,\
                                    <br>\
                                    Amelia Fizzlepop"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
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
                            width: "percent38",
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
                        title: "[<g>1.] True or false: Pippo and Amelia are most likely writing about the same yeti.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "{T}rue",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>2.] Which clue suggests the yeti wants to eat Pippo?",
                        correctIndex: 0,
                        paragraph: [
                            "She puts salt and pepper on his h{e}ad",
                            "She lives {i}n a cave",
                            "Sh{e} broke Pippo\'s plane",
                        ],
                    },
                    {
                        title: "[<g>3.] Who seems more worried about the yeti: Pippo or Amelia?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "{P}ippo",
                            "Ameli{a}",
                        ],
                    },
                    {
                        title: "[<g>4.] How can you tell Pippo and Amelia might be family?",
                        correctIndex: 2,
                        paragraph: [
                            "They bo{t}h know about the yeti",
                            "They both wrote letter{s}",
                            "They both have the sa{m}e last name",
                        ],
                    },
                ],
                code: {
                    answer: "TEAM",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the knight's cell
        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Read the riddles, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Solving Riddles",
                    commonCore: [
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.10",
                        "L.2.5",
                        "L.2.5a",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.4",
                        "RL.2.10",
                        "L.3.5",
                        "L.3.5b",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "Greetings, brave hero! I came here to hunt the yeti, but now I\'m trapped in this cave. Solve my four riddles, and I\'ll reward you with marshmallows!",
                    complete: "Great work; you solved all four riddles. Take these marshmallows as your reward."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Riddle #1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "A knight holds me tight. I help keep them safe.\
                                    <br>\
                                    When a sword comes close, I get in its way.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
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
                                    text: "I shine in the sky, and make the day bright.\
                                    <br>\
                                    I warm up the snow after every cold night.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "-1deg",
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
                                    text: "I hang on the wall. Look at me and see\
                                    <br>\
                                    a face that smiles when you smile at me.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "2deg",
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
                                    text: "I stand in the forest. My roots are down low.\
                                    <br>\
                                    My branches reach high, as they grow and grow!\
                                    <br>\
                                    What am I?"
                                },
                            },
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
                                translateX: "0%",
                                translateY: "3%",
                                rotate: "-1deg",
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
                            size: 'medium',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "auto",
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
                                size: 'mediumSmall',
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
                        title: "[<g>1.] [<u>Right] or [<u>wrong]: the answer to Riddle #1 is a shield.",
                        word: "RIG[H]T",
                    },
                    {
                        title: "[<g>2.] The answer to Riddle #2 is the ___ .",
                        word: "S[U]N",
                    },
                    {
                        title: "[<g>3.] [<u>Right] or [<u>wrong]: the answer to Riddle #3 is a curtain.",
                        word: "WRO[N]G",
                    },
                    {
                        title: "[<g>4.] The answer to Riddle #4 is a ___ .",
                        word: "[T]REE",
                    },
                ],
                code: {
                    answer: "HUNT",
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
