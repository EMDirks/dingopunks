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
                    text: "Read \"Fixing a Crashed Plane\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
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
                    incomplete: "My plane crashed, and now I\'m stuck here! I found a page that might help me fix it, but I don\'t understand what it says. Help me out, and you can use my jet engine to bake those yams.",
                    complete: "You did it! Now I know just what I need to fix my plane. Thanks a bunch!"
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
                                    text: "Fixing a Crashed Plane",
                                },
                                subtitle: {
                                    text: "By Engineer Topsy",
                                },
                                passage: {
                                    text: "A crashed plane must be fixed before it can fly. First, fix any cracks in the wings. Next, make sure the engine starts. Finally, check that the wheels are not broken. Planes can be painted many different colors. My favorite color is purple!"
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
                        title: "[<g>1.] What is the main idea of this passage?",
                        correctIndex: 0,
                        paragraph: [
                            "A crashed plane mus{t} be fixed before it can fly",
                            "Planes can be painte{d} many different colors",
                            "Engineer Topsy\'s favorite color is purpl{e}",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail supports the main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "\"First, fix any cracks in th{e} wings.\"",
                            "\"My favorite color is purpl{e}.\"",
                            "\"Planes can be painted many different colo{r}s.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Read the sentence that starts with \"Next.\" Does this sentence also support the main idea?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Ye{s}",
                            "N{o}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which detail does NOT support the main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "Planes can be pain{t}ed many different colors.",
                            "First, fix any cracks in the wi{n}gs.",
                            "Finally, check that the wheels are not bro{k}en.",
                        ],
                    },
                ],
                code: {
                    answer: "TEST",
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
                    text: "Read \"Cold Potato\" and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Details of a Story",
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
                        "RL.2.1",
                        "RL.2.2",
                        "RL.2.3",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.2",
                        "RL.3.5",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue: {
                    incomplete: "I just wrote a fresh new story! Give it a read and tell me what you think. I know you\'ll love it. Do that, and I\'ll hook you up with some yams!",
                    complete: "See? I knew you\'d love it! Thanks for reading my masterpiece."
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
                                    text: "Cold Potato",
                                },
                                subtitle: {
                                    text: "By Tater Durant",
                                },
                                passage: {
                                    text: "There once was a little potato riding in a cart. When the cart hit a bump, the little potato fell off and landed in the snow. He felt cold, and he shivered every time the wind blew. So he rolled through the snow, looking for somewhere warm.\
                                    <br>\
                                    First, the little potato hid under a tree, but the cold wind still found him. [<hi>Then he hid under a sock, but the sock was full of snow.] \"There has to be a warmer place!\" he cried.\
                                    <br>\
                                    At last, the little potato spotted a campfire. A big pot of stew bubbled over the flames. The potato grinned. \"Perfect!\" he shouted. And with one happy hop, he jumped right into the pot."
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
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Is this story mostly about a potato looking for [<u>warmth] or [<u>friends]?',
                        'B. Where did the potato hide first? Under a [<u>sock], [<u>tree], or [<u>tent]?',
                        'C. [<u>True] or [<u>false]: the highlighted sentence supports the main idea.',
                        'D. At the end of the story, the potato jumped into a pot of ___.',
                    ],
                    puzzle: [
                        ["(D)S", "4T", "E", "(A)W", "0", "0", "0"],
                        ["0", "0", "0", "3A", "0", "0", "0"],
                        ["0", "0", "(C)T", "R", "U", "E", "0"],
                        ["0", "0", "0", "M", "0", "0", "0"],
                        ["0", "0", "0", "(B)T", "R", "E", "2E"],
                        ["0", "0", "0", "1H", "0", "0", "0"],
                    ]
                },
                code: {
                    answer: "HEAT",
                    userArray: ["", "", "", ""]
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
                    text: "Read \"How to Find Buried Treasure\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Multiple Main Ideas",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
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
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue: {
                    incomplete: "Arr! I got captured while hunting for gold, but I\'m not giving up yet! I made a new plan for finding treasure. Read it over and tell me what ye think!",
                    complete: "Aye, you\'re a sharp one! Take the butter, and remember ol\' Fishbeard if ye find gold!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "fishbeard.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "How to Find Buried Treasure",
                                },
                                subtitle: {
                                    text: "By Captain Fishbeard",
                                },
                                passage: {
                                    text: "A good pirate never gives up on gold! The way I see it, there are two smart ways to look for treasure.\
                                    <br>\
                                    One way is to search on the ground. Look for footprints, strange rocks, or an X in the sand. Dig where the clues point, and keep digging until you find the treasure! [<hi>I named my favorite shovel Kevin.]\
                                    <br>\
                                    Another way is to search from the air. From a high place, you can see more of the land at once. Look for secret paths, old buildings, or places where the ground looks different. That gold has to be somewhere!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "-1deg",
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
                        title: "[<g>1.] What is the main idea of paragraph two?",
                        correctIndex: 0,
                        paragraph: [
                            "You can {s}earch for treasure on the ground",
                            "Th{e}re are footprints in the sand",
                            "Pirates love gol{d}",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the highlighted text supports the main idea of paragraph two.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the main idea of the third paragraph?",
                        correctIndex: 0,
                        paragraph: [
                            "You ca{n} search for treasure from the air",
                            "Captain Fishb{e}ard named his shovel Kevin",
                            "There is always {t}reasure in old buildings",
                        ],
                    },
                    {
                        title: "[<g>4.] This whole passage is mostly about:",
                        correctIndex: 1,
                        paragraph: [
                            "How to sail a pira{t}e ship",
                            "The {d}ifferent ways to look for treasure",
                            "How to di{g} a deep hole",
                        ],
                    },
                ],
                code: {
                    answer: "SAND",
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
                    text: "Read the two passages, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea of and Details of Multiple Texts",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
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
                character: "Dr. Sera",
                asset: "dr-seraphina.png",
                dialogue: {
                    incomplete: "I can give you some sugar for those yams, but I need your help first. I\'m trying to make the perfect snow cone. Will you read over my notes?",
                    complete: "Yes, I turned my hair into a snow cone. No, I don\'t know how to fix it. Let\'s move on, okay?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Cone A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This snow cone is very sticky. It\'s made from fresh cave goop, so it\'s super thick. In fact, it\'s so gooey, it\'s hard to eat!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-4%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Cone B",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This snow cone tastes salty. It\'s made from salt mined here in the cave. [<sal>When you eat it, tiny bits of salt crunch between your teeth!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "4deg",
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
                                translateY: "20%",
                                rotate: "-1deg",
                            }
                        }
                    },
                ],
                style: {
                    block: {
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        misc: {
                            material: 'metal',
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
                        title: "[<g>1.] Is Cone A [<u>sticky] or [<u>salty]?",
                        word: "S[T]ICKY",
                    },
                    {
                        title: "[<g>2.] The main idea of Cone B is that it tastes ___.",
                        word: "S[A]LTY",
                    },
                    {
                        title: "[<g>3.] [<u>Right] or [<u>wrong]: the red text is a key detail.",
                        word: "RI[G]HT",
                    },
                    {
                        title: "[<g>4.] Both main ideas are about ___ cones.",
                        word: "[S]NOW",
                    },
                ],
                code: {
                    answer: "TAGS",
                    userArray: ["", "", "", ""]
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
