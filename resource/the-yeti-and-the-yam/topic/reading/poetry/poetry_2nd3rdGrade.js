// NOTE: education.commonCore standards in this file were auto-added and distributed by AI and might need manual review at some future point.

const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ Tater Durant's Cell

        {

            info: {
                type: 'challenge',
                title: "Tater Durant's Cell",
                asset: "tater-drift.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Waffle Fries\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
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
                        "RF.2.3",
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
                        "RL.3.5",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "Hey, bro-tato! I just wrote the BEST poem ever! Can you read it and tell me what you think? If you do, I\'ll give you as many yams as you need.",
                    complete: "Whoa, bro! My poem is even better now! You really know your stuff, huh?"
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
                                    text: "Waffle Fries",
                                },
                                subtitle: {
                                    text: "By Tater Durant",
                                },
                                passage: {
                                    text:   "Chef Scully cried, \"Oh, what a sight!\
                                    <br>\
                                    My waffle fries are crisp and bright!\
                                    <br>\
                                    They\'re golden brown and taste so sweet,\
                                    <br>\
                                    my favorite snack, my favorite treat!\
                                    <br>\
                                    <br>\
                                    Each little fry is shaped just right.\
                                    <br>\
                                    I dream of waffle fries at night.\
                                    <br>\
                                    I love their crunch. I love their taste.\
                                    <br>\
                                    Not one small fry will go to waste!\""
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] In this poem, which word rhymes with \"sight\" ?",
                        correctIndex: 2,
                        paragraph: [
                            "S{w}eet",
                            "Ta{s}te",
                            "Brigh{t}",
                        ],
                    },
                    {
                        title: "[<g>2.] How many stanzas are in this poem?",
                        correctIndex: 0,
                        paragraph: [
                            "Tw{o}",
                            "Fo{u}r",
                            "Eigh{t}",
                        ],
                    },
                    {
                        title: "[<g>3.] There are ___ syllables in line 6 of this poem.",
                        correctIndex: 1,
                        paragraph: [
                            "Se{v}en",
                            "Eigh{t}",
                            "{N}ine",
                        ],
                    },
                    {
                        title: "[<g>4.] Who is speaking in this poem?",
                        correctIndex: 1,
                        paragraph: [
                            "Tater Du{r}ant",
                            "Chef {S}cully",
                            "A waffl{e} fry",
                        ],
                    },
                ],
                code: {
                    answer: "TOTS",
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
                    text: "Read both poems and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Comprehension",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
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
                        "RL.3.3",
                        "RL.3.5",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arrr! I found these two poems in the wreck of me ship! Help me read them, and I\'ll give ye a barrel of butter I found floating at sea. What say ye?",
                    complete: "Arrr! Thanks for helping me find out what happened, matey. This barrel of butter be yers!"
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
                                    text: "Off With His Gold",
                                },
                                subtitle: {
                                    text: "By Chef Scully",
                                },
                                passage: {
                                    text:   "A captain named Fishbeard had gold,\
                                    <br>\
                                    So his crew made a plan rather bold.\
                                    <br>\
                                    They stole it one night,\
                                    <br>\
                                    then sailed out of sight,\
                                    <br>\
                                    and left him alone in the cold!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-5%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "A Sailor's Warning",
                                },
                                subtitle: {
                                    text: "By First Mate Banzo",
                                },
                                passage: {
                                    text:   "Fishbeard, watch your crew\
                                    <br>\
                                    Not all hands will help you sail\
                                    <br>\
                                    Guard your gold at night"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "20%",
                                rotate: "2deg",
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
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. [<u>Right] or [<u>wrong]: \"Off With His Gold\" is mostly about a crew stealing their captain\'s silver coins.',
                        'B. In \"A Sailor\'s Warning,\" does First Mate Banzo warn Fishbeard to watch out for his [<u>cook] or [<u>crew]?',
                        'C. [<u>Right] or [<u>wrong]: the advice in \"A Sailor\'s Warning\" could have helped Fishbeard.',
                        'D. When did Fishbeard\'s crew steal his gold?',
                    ],
                    puzzle: [
                        ["0","(B)1C","0","0","0","0","0"],
                        ["0","R","0","0","0","(D)4N","0"],
                        ["0","E","0","0","0","I","0"],
                        ["0","(A)W","R","2O","N","G","0"],
                        ["0","0","0","0","0","H","0"],
                        ["0","(C)R","3I","G","H","T","0"],
                    ]
                },
                code: {
                    answer: "COIN",
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
                    text: "Read the poem and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Language and Vocabulary",
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
                        "L.2.4b",
                        "L.2.5",
                        "L.2.5b",
                        "L.2.6",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RL.2.4",
                        "RL.2.10",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.5",
                        "L.3.5c",
                        "L.3.6",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RL.3.4",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "The King has forgotten me... All I have left is this poem from my squire. Please read it and help me understand its words. If you can help, I\'ll share the last of my marshmallows with you.",
                    complete: "Your words have given me hope! Perhaps I have not been forgotten after all..."
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
                                    text: "A Poem for My Knight",
                                },
                                subtitle: {
                                    text: "By your loyal squire",
                                },
                                passage: {
                                    text:   "<br>\
                                    When others are afraid,\
                                    <br>\
                                    or even terrified,\
                                    <br>\
                                    you stand tall.\
                                    <br>\
                                    <br>\
                                    Your shield shines in the [<hi>sunlight].\
                                    <br>\
                                    Your sword flashes in the cold air.\
                                    <br>\
                                    You face danger with a brave heart.\
                                    <br>\
                                    <br>\
                                    When trouble comes, you do not hide.\
                                    <br>\
                                    You are [<u>fearless].\
                                    <br>\
                                    You stand as still as a mountain."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
                                rotate: "-3deg",
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
                        title: "[<g>1.] How is \"terrified\" different from \"afraid\" ?",
                        correctIndex: 1,
                        paragraph: [
                            "Terrified {m}eans a little afraid",
                            "Terrified means very afra{i}d",
                            "Terrified means no{t} afraid at all",
                        ],
                    },
                    {
                        title: "[<g>2.] The highlighted word in stanza 2 means:",
                        correctIndex: 1,
                        paragraph: [
                            "C{o}ld air",
                            "Light f{r}om the sun",
                            "Wi{t}hout fear",
                        ],
                    },
                    {
                        title: "[<g>3.] What does the underlined word mean?",
                        correctIndex: 0,
                        paragraph: [
                            "With{o}ut fear",
                            "Full of f{e}ar",
                            "No{n}e of the above",
                        ],
                    },
                    {
                        title: "[<g>4.] Is the last line of this poem an example of literal language or figurative language?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Literal langua{g}e",
                            "Figurative la{n}guage",
                        ],
                    },
                ],
                code: {
                    answer: "IRON",
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
                    text: "Read \"Advice to My Brother\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Theme and Author's Purpose",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
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
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "I\'m working on a new invention! My sister Topsy sent me a poem to cheer me on, but I don\'t understand it. Can you help? If you do, I\'ll let you use my oven to cook those yams!",
                    complete: "Thanks for the help! I think Topsy is the BEST sister ever. Now, let\'s get those yams cooking!"
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
                                    text: "Advice to My Brother",
                                },
                                subtitle: {
                                    text: "By Topsy",
                                },
                                passage: {
                                    text:   "Do you want to build something new?\
                                    <br>\
                                    Just have fun in all you do!\
                                    <br>\
                                    Try new things along the way,\
                                    <br>\
                                    and if you fail, that\'s okay!\
                                    <br>\
                                    <br>\
                                    Glue the parts and twist the springs.\
                                    <br>\
                                    See what joy your new plan brings.\
                                    <br>\
                                    If it breaks, just try once more.\
                                    <br>\
                                    You might make something great for sure!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-1deg",
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
                        title: "[<g>1.] What lesson does Topsy\'s poem teach?",
                        correctIndex: 1,
                        paragraph: [
                            "Ne{v}er make mistakes",
                            "Keep trying, eve{n} when things go wrong",
                            "Always follow the r{u}les",
                        ],
                    },
                    {
                        title: "[<g>2.] According to this poem, is it okay to fail when trying something new?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },
                    {
                        title: "[<g>3.] Why did Topsy write this poem?",
                        correctIndex: 2,
                        paragraph: [
                            "To scare her {b}rother",
                            "{T}o scold her brother",
                            "To encour{a}ge her brother",
                        ],
                    },
                    {
                        title: "[<g>4.] How does Topsy feel about her brother?",
                        correctIndex: 1,
                        paragraph: [
                            "{S}he is angry with him",
                            "She cares abou{t} him",
                            "She is tired of the trouble he caus{e}s",
                        ],
                    },
                ],
                code: {
                    answer: "NEAT",
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
