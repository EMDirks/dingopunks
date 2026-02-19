const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/poetry/thumbnail-4th-5th-grade.png",
        timerLabel: "PICKLE ARRIVES"
    },

    challengeArray: [

        // ⭐ ball pit
        {

            info: {
                type: 'challenge',
                title: "Ball Pit",
                asset: "gribba.png",
                state: "incomplete",
                hint: {
                    text: "Read both poems, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Elements and Structure",
                    commonCore: [
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.5",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.5",
                        "RL.5.9",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Gribba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "Was huntin\' for flowers to brighten up me ball pit, but they don\'t grow easy \'round here. Then outta nowhere, Pickle dropped a couple notes at me feet! Trouble is, I can\'t read. Mind takin\' a look?",
                    complete: "Hmph. Didn\'t think I\'d say it, but... thanks. I guess them poems meant more than I thought."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "gribba.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Silent Pond',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "I found a pond where the frogs are silent.\
                                    <br>\
                                    Where the water is still.\
                                    <br>\
                                    Like it doesn\'t want to be seen.\
                                    <br>\
                                    And then I saw something.\
                                    <br>\
                                    A flower.\
                                    <br>\
                                    Just floating.\
                                    <br>\
                                    No stem.\
                                    <br>\
                                    No roots.\
                                    <br>\
                                    Just... there."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-15%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Petal Worth Your Time',
                                },
                                subtitle: {
                                    text: 'By George Goblin',
                                },
                                passage: {
                                    text:   "I\'ll tell you something cool and true:\
                                    <br>\
                                    a special flower\'s waiting for you.\
                                    <br>\
                                    It\'s up a hill, past rocks and grime,\
                                    <br>\
                                    you\'ll hike and crawl; it takes some time.\
                                    <br>\
                                    <br>\
                                    But when at last that bloom is found,\
                                    <br>\
                                    its scent will knock you off the ground:\
                                    <br>\
                                    like cozy socks, all warm and clean \u2014\
                                    <br>\
                                    a smell so rare, and like a dream.\
                                    <br>\
                                    <br>\
                                    Yes, you\'ll sweat, and scrape, and climb.\
                                    <br>\
                                    But do not worry. It\'s worth your time!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "13%",
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
                        title: "[<g>1.] George Goblin is the poet of:",
                        correctIndex: 1,
                        paragraph: [
                            "\"{A} Silent Pond\"",
                            "\"A Petal {W}orth Your Time\"",
                            "None of t{h}e above",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the rhyme scheme of \"A Silent Pond\"?",
                        correctIndex: 2,
                        paragraph: [
                            "AA{B}B",
                            "ABCAB{C}",
                            "It has no {r}hyme scheme",
                        ],
                    },
                    {
                        title: "[<g>3.] Which poem has a greater number of stanzas?",
                        correctIndex: 1,
                        paragraph: [
                            "\"A Sile{n}t Pond\"",
                            "\"A Pet{a}l Worth Your Time”\"",
                            "Both poems have the same numbe{r} of stanzas",
                        ],
                    },
                    {
                        title: "[<g>4.] Which poet used a creepier tone?",
                        correctIndex: 0,
                        paragraph: [
                            "{P}ickle",
                            "George {G}oblin",
                            "Both poets used equally cre{e}py tones",
                        ],
                    },
                ],  
                code: {
                    answer: "WRAP",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ swing set
        {

            info: {
                type: 'challenge',
                title: 'Swing Set',
                asset: "merriwig.png",
                state: "incomplete",
                hint: {
                    text: "Sort each poem into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Topic, Theme, and Key Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.5",
                        "RL.4.9",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.5",
                        "RL.5.9",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Oh, hello there. Pickle left some odd little poems by the swingset... again. Would you help me sort them based on what they\'re all about?",
                    complete: "Oh, thank you. Did you know I once wore a crown of fireflies? Those days are long gone..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Poems About Nature",
                        "Poems About Playgrounds",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Patience",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "A seed doesn\'t rush\
                                    <br>\
                                    It simply waits quietly\
                                    <br>\
                                    Then becomes a tree",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Many Ways",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The jungle gym\
                                    <br>\
                                    has slides, ropes, bars \u2014\
                                    <br>\
                                    so many places to start.\
                                    <br>\
                                    <br>\
                                    I don\'t know where they lead,\
                                    <br>\
                                    or which one\'s best.\
                                    <br>\
                                    <br>\
                                    But I pick a spot anyway,\
                                    <br>\
                                    and begin to climb.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Plans",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "A little sprout\
                                    <br>\
                                    grew by the stream.\
                                    <br>\
                                    <br>\
                                    It bloomed and swayed\
                                    <br>\
                                    just like a dream.\
                                    <br>\
                                    <br>\
                                    Until a goat\
                                    <br>\
                                    came trampling through.\
                                    <br>\
                                    <br>\
                                    Some plans don\'t go\
                                    <br>\
                                    how we want them to.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Slides",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Always wait your turn\
                                    <br>\
                                    If we all slide down at once\
                                    <br>\
                                    We\'ll get stuck halfway",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "sort2Width",
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
                                align: 'center'
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
                        title: "[<g>1.] How many poems should be sorted into the \"Poems About Playgrounds\" column?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "On{e}",
                            "{T}wo",
                            "T{h}ree",
                            "Fo{u}r",
                        ],
                    },
                    {
                        title: "[<g>2.] Which stanza of \"Plans\" states its theme?",
                        correctIndex: 2,
                        paragraph: [
                            "Stanza O{n}e",
                            "Stan{z}a Two",
                            "Stanza Fou{r}",
                        ],
                    },
                    {
                        title: "[<g>3.] \"Patience\" belongs in the first column because:",
                        correctIndex: 2,
                        paragraph: [
                            "It\'s {a} haiku",
                            "It\'s impor{t}ant to be patient",
                            "\"Seed\" and \"tre{e}\" show that its topic is nature",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the theme of \"Many Ways\" is that jungle gyms have slides, ropes, and bars.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "Fals{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "TREE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ play palace
        {

            info: {
                type: 'challenge',
                title: "Play Palace",
                asset: "king-kevin.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.5b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.4",
                        "RL.4.5",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.5b",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.4",
                        "RL.5.5",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "King Kevin",
                asset: "king-kevin.png",
                dialogue : {
                    incomplete: "Let me be clear: I do not take visitors. And yet, Pickle dared to write me a letter... a threat, no doubt. Read it, and prove me right!",
                    complete: "Hmph. Fine. I suppose you\'ve done your part. Now leave me be!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "king-kevin.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'When You Fall',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "Your eyes glow, like a flame against the night!\
                                    <br>\
                                    A gaze that cuts through the darkest storm,\
                                    <br>\
                                    as if nothing could ever touch you.\
                                    <br>\
                                    <br>\
                                    Your beak honks, a trumpet in the morning!\
                                    <br>\
                                    Not to encourage, but to command.\
                                    <br>\
                                    You expect the world to listen.\
                                    <br>\
                                    <br>\
                                    Kevin, greed walks by your side each day.\
                                    <br>\
                                    You\'ve become a wolf in sheep\'s clothing.\
                                    <br>\
                                    And you\'ll reap what you sow.\
                                    <br>\
                                    <br>\
                                    When you put yourself above everyone else,\
                                    <br>\
                                    there\'s no one left to catch you\
                                    <br>\
                                    when you fall."
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
                                size: 'tiny',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
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
                        'A. \"When You Fall\" uses a simile to compare glowing eyes to a ____ .',
                        'B. Pickle uses a metaphor in stanza 2 to compare King Kevin\'s honk to a trumpet. [<u>Right] or [<u>wrong]?',
                        'C. Does the [<u>first] or [<u>third] stanza have personification that shows Kevin is always greedy?',     
                        'D. Which line uses an idiom that means [<i>someone who seems harmless, but is actually dangerous]: line [<u>seven], [<u>eight], or [<u>twelve]?',                    
                    ],
                    puzzle: [
                        ["0","(D)E","0","0","0","0","0"],
                        ["(B)R","2I","G","H","(C)T","0","(A)3F"],
                        ["0","G","0","0","H","0","L"],
                        ["0","H","0","0","I","0","A"],
                        ["0","4T","0","0","1R","0","M"],
                        ["0","0","0","0","D","0","E"],
                    ]
                },  
                code: {
                    answer: "RIFT",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ monkey bars 
        {

            info: {
                type: 'challenge',
                title: "Monkey Bars",
                asset: "banana-gunk-jr.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Author\'s Purpose and Point of View",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.6",
                        "RL.4.9",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RI.5.3",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Banana Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "Hey! You won\'t believe this \u2014 Pickle found scraps from my manual! At last! But my eye sensors are too rusted to read such small text. Can you do it for me?",
                    complete: "Th-thank you... really. You kept me from falling apart, at least for today."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "banana-gunk-jr.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "scrap one",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'Oil',
                                },
                                passage: {
                                    text: "It\'s easy to forget your oil.\
                                    <br>\
                                    You\'ll still dance...\
                                    <br>\
                                    for a while.\
                                    <br>\
                                    <br>\
                                    But without fresh oil,\
                                    <br>\
                                    your gears will slow.\
                                    <br>\
                                    Your music will die.\
                                    <br>\
                                    <br>\
                                    So don\'t wait. Keep it fresh.\
                                    <br>\
                                    It\'s the one thing you can\'t skip."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "scrap two",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'How I\'ll Start the Music',
                                },
                                passage: {
                                    text: "I\'ll flip the switch & pick a song,\
                                    <br>\
                                    then ensure the mic is strong.\
                                    <br>\
                                    I\'ll press my chest to set the key,\
                                    <br>\
                                    then I\'ll sing. Watch and see."
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
                        tag: {
                            text: "scrap three",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'A Warning',
                                },
                                passage: {
                                    text: "A tinkerer, careless and free\
                                    <br>\
                                    built a mad monkey, you see.\
                                    <br>\
                                    She skipped every rule,\
                                    <br>\
                                    \'twas reckless, not cool \u2014\
                                    <br>\
                                    a hazard to all, most agree."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "15%",
                                rotate: "5deg",
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
                                translateX: "3%",
                                translateY: "0%",
                                rotate: "-3deg",
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
                            width: "percent32",
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
                            title: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'center'
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
                        title: "[<g>1.] Is the purpose of \"Oil\" to [<u>entertain] or [<u>persuade?]",
                        word: "PER[S]UADE",
                    },
                    {
                        title: "[<g>2.] Is scrap [<u>one] or [<u>two] written in first person?",
                        word: "TW[O]",
                    },
                    {
                        title: "[<g>3.] \"A Warning\" has a negative, judgemental ___ .",
                        word: "TO[N]E",
                    },
                    {
                        title: "[<g>4.] [<u>Right] or [<u>wrong]: scrap two intends to [<i>inform].",
                        word: "RI[G]HT",
                    },
                ],
                code: {
                    answer: "SONG",
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