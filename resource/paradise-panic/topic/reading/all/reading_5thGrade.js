const resource =  {
    
    info: {
        title: "Paradise Panic",
        path: "paradise-panic",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "BOAT LEAVES"
    },

    challengeArray: [

        // ⭐ Hotel Kallisto

        {

            info: {
                type: 'challenge',
                title: "Hotel Kallisto",
                asset: "node1.png",
                state: "incomplete",
                hint: {
                    text: "Read the note, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.8",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.8",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Demi Voss",
                asset: "character1.png",
                dialogue : {
                    incomplete: "A guest is driving me insane with his requests! I have an entire hotel to manage, so I seriously don\'t have time for this. Will you do me a favor and figure out what his note is about?",
                    complete: "Thanks, bestie. You know, you looked like someone I could count on."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background1.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Demi,\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; I have a few requirements for the yacht we discussed. I expect all three of them to be met.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; First, it must have a pool built from blocks of marble. The expensive kind, obviously. Also, I need a helicopter pad made of pure silver. [<u>Most importantly, I require a glass-walled dining room, with dishes carved from solid emerald.]\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; On another note, my assistant has requested that I stop eating so many hot dogs for dinner. She finds it \"deeply upsetting.\" I, however, find it deeply delicious.\
                                    <br>\
                                    <br>\
                                    Brantly Vantor\
                                    <br>\
                                    Founder and CEO\
                                    <br>\
                                    UltraHustle Vision Media"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
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
                        title: "[<g>1.] What\'s the main idea of Brantly\'s note?",
                        correctIndex: 1,
                        paragraph: [
                            "Brant{l}y wants a pool made of marble",
                            "Brantly wants a very expensive, fan{c}y yacht",
                            "Demi is tired o{f} Brantly\'s demands",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the underlined sentence is a key detail that supports the main idea.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] Read the third paragraph of Brantly\'s note. How many supporting details does it have?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Z{e}ro",
                            "O{n}e",
                            "{T}wo",
                            "Th{r}ee",
                        ],
                    },
                    {
                        title: "[<g>4.] Which quote is [<i>not] a supporting detail?",
                        correctIndex: 2,
                        paragraph: [
                            "\"it must have a p{o}ol built from blocks of marble\"",
                            "\"I need a helicopter {p}ad made of pure silver\"",
                            "\"I, ho{w}ever, find it deeply delicious\"",
                        ],
                    },
                ],  
                code: {
                    answer: "CREW",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ Old Stavros's Farm

        {

            info: {
                type: 'challenge',
                title: 'Old Stavros\'s Farm',
                asset: "node2.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Old Stavros",
                asset: "character2.png",
                dialogue : {
                    incomplete: "Hmph... got a minute? I\'ve been tryin\' to write down tales from my younger days, but I can\'t tell if this one makes sense anymore. Read it for me and tell me what ya think, alright?",
                    complete: "Hmph. Thanks for hearin\' an old man out. Back then, this island was a simpler place..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background2.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Princess of Mykos',
                                },
                                subtitle: {
                                    text: 'By Old Stavros',
                                },
                                passage: {
                                    text:   "Many years ago, the evenings just outside the village of Mykos had a certain rhythm. The sun would dip behind the hills, the air would cool, and somewhere in the shadows between the olive trees, Princess would appear. Nobody could say exactly where she came from. But every evening, without fail, there she was.\
                                    <br>\
                                    Did I mention Princess was a goat? I should have led with that.\
                                    <br>\
                                    Anyway, that animal was pure trouble. No fence could contain her. She devoured tomato plants, flowers, and even a birthday cake left out to cool. More evenings than I can count, I chased Princess with a broom, hollering till my voice gave out.\
                                    <br>\
                                    But then one evening, a quiet little girl named Eleni did something that baffled me. Instead of scaring Princess away, she fed the goat and spoke to her kindly. Before long, Princess followed Eleni everywhere. She even fastened little baskets to the goat's sides and trained her to carry bread, olives, and letters between homes.\
                                    <br>\
                                    From that day forward, Princess never caused another moment of trouble."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
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
                                size: 'small',
                                align: 'left',
                                indent: 'default',
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
                        title: "[<g>1.] Which quote reveals the setting of this story?",
                        correctIndex: 0,
                        paragraph: [
                            "\"the evenings just ou{t}side the village of Mykos\"",
                            "\"Nobo{d}y could say exactly where she came from\"",
                            "\"hollering till my voice gave {o}ut\"",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the [<i>problem] in \"Princess of Mykos\"?",
                        correctIndex: 2,
                        paragraph: [
                            "Old Sta{v}ros has a hard time catching a goat",
                            "The town has a shorta{g}e of bread and olives",
                            "A go{a}t keeps causing trouble in Mykos",
                        ],
                    },
                    {
                        title: "[<g>3.] How is this story\'s problem resolved?",
                        correctIndex: 1,
                        paragraph: [
                            "Old Stavros \"chased Princess with a bro{o}m\"",
                            "E{l}eni \"fed the goat and spoke to her kindly\"",
                            "None of the abov{e}",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the theme of \"Princess of Mykos\"?",
                        correctIndex: 2,
                        paragraph: [
                            "Goats make great delive{r}y animals",
                            "Kindness {m}akes problems easier to ignore",
                            "Kindness solves what ang{e}r cannot",
                        ],
                    },
                ],  
                code: {
                    answer: "TALE",
                    userArray: ["","","",""]
                },
            },            

        },

        // ⭐ Thessaly's Provisions

        {

            info: {
                type: 'challenge',
                title: "Thessaly's Shop",
                asset: "node3.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.4b",
                        "L.4.5c",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.4b",
                        "L.5.5c",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.1",
                        "RI.5.4",
                        "RI.5.7",
                        "RI.5.10",                   
                    ],
                }
            },

            intro: {
                character: "Thessaly Tidewater",
                asset: "character3.png",
                dialogue : {
                    incomplete: "I\'m updating the labels for my products, but after such a long summer, my brain feels like sea foam! I\'m worried some of these words are too tough for my customers. Would you mind taking a look?",
                    complete: "Ah, wonderful! Glad it makes sense. I think we\'re well prepared for next summer, don\'t you?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background3.png",
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
                                    text: "Baby Seaweed",
                                },
                                passage: {
                                    text: "This plant arrives [<u>dormant], appearing dry and lifeless. But don\'t let that fool you. Once it hits the water, everything changes! Soon, this [<u>translucent] plant begins to stretch, the light glowing softly through its nearly see-through leaves. Like all [<u>aquatic] plants, seaweed must live in water to thrive!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "-5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Lemon Snow Cones",
                                },
                                passage: {
                                    text: "Fresh lemon juice. Crushed ice. A drizzle of sugar syrup. That\'s it. Take one bite on a hot summer day, and you'll thrive, not struggle. You'll be back on your feet, ready for whatever the afternoon throws at you!",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "15%",
                                rotate: "4deg",
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
                            width: "percent75",
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
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
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
                        title: "[<g>1.] What does \"dormant\" mean?",
                        correctIndex: 2,
                        paragraph: [
                            "Someth{i}ng that is soft and easy to bend",
                            "A type of plant that gro{w}s slowly",
                            "Somethin{g} that is alive, but not yet active",
                        ],
                    },
                    {
                        title: "[<g>2.] Which quote means \"translucent\"?",
                        correctIndex: 1,
                        paragraph: [
                            "\"stre{t}ch and unfurl\"",
                            "\"nearly see-thro{u}gh\"",
                            "\"glowing softl{y}\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of the following words is an antonym of \"thrive\"?",
                        correctIndex: 3,
                        columns: 2,
                        paragraph: [
                            "H{o}t",
                            "Re{a}dy",
                            "Succee{d}",
                            "Strugg{l}e",
                        ],
                    },
                    {
                        title: "[<g>4.] Which of the following is an \"aquatic\" plant?",
                        correctIndex: 0,
                        paragraph: [
                            "Kel{p}",
                            "Ca{c}tus",
                            "Oak tr{e}e",
                        ],
                    },
                ],  
                code: {
                    answer: "GULP",
                    userArray: ["","","",""]
                },
            },        

        },

        // ⭐ Tomb of Kastor

        {
            
            info: {
                type: 'challenge',
                title: 'Tomb of Kastor',
                asset: "node4.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.5b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.5b",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Kastor\'s Ghost",
                asset: "character4.png",
                dialogue : {
                    incomplete: "W-what is this place...? I have awoken to dust and silence. The world I once knew is gone. These ancient texts are all that remain... Please, help me uncover what became of me!",
                    complete: "This is most disturbing... and yet, you have served me well. We make a fine team, do we not?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background4.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Tomb",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Here lies Kastor of Argos. In the blink of an eye, a great warrior was gone."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-6deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Eyes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "As the last waves of summer crash like cymbals, Kastor opens his eyes."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Key",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The rising sun is a golden key, unlocking the darkness that held Kastor for a thousand years."
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
                            text: "Fortune",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Soon, Kastor will rise! Glory and revenge are near \u2014 and fortune favors the bold. Go claim it, Kastor."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "3deg",
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
                                translateY: "8%",
                                rotate: "3deg",
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
                        title: "[<g>1.] Does \"Eyes\" contain a [<u>simile] or an [<u>idiom]?",
                        word: "SIMI[L]E",
                    },
                    {
                        title: "[<g>2.] [<u>Right] or [<u>wrong]: \"Tomb\" has only literal language.",
                        word: "WR[O]NG",
                    },
                    {
                        title: "[<g>3.] \"Key\" uses a ___ to compare the sun to a key.",
                        word: "METAPHO[R]",
                    },
                    {
                        title: "[<g>4.] What type of figurative language is in \"Fortune\"?",
                        word: "PROV[E]RB",
                    },
                ],
                code: {
                    answer: "LORE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ Shoreline

        {

            info: {
                type: 'challenge',
                title: "Tidepool Beach",
                asset: "node5.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.5",
                        "L.4.5a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.5",
                        "RL.4.9",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.5",
                        "L.5.5a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.4",
                        "RL.5.9",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Ned",
                asset: "character5.png",
                dialogue : {
                    incomplete: "Oh my! Don\'t step on me, please! I penned some poems for open mic night at the coffee shop, but I\'m worried nobody will like them. Will you tell me if they\'re any good?",
                    complete: "Yay! You liked them... and you didn\'t eat me! I think we can consider that a win \u2014 don\'t you?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background5.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Urchin',
                                },
                                subtitle: {
                                    text: 'By Ned',
                                },
                                passage: {
                                    text:   "There once was an urchin named Ned,\
                                    <br>\
                                    who dwelled on the cold ocean bed.\
                                    <br>\
                                    \"My spines are a warning:\
                                    <br>\
                                    don\'t eat me this morning!\
                                    <br>\
                                    You\'re much better off with some bread.\""
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Friend',
                                },
                                subtitle: {
                                    text: 'By Ned',
                                },
                                passage: {
                                    text:   "Nobody hugs an urchin.\
                                    <br>\
                                    Nobody wants the pain.\
                                    <br>\
                                    <br>\
                                    I waved at a crab once.\
                                    <br>\
                                    He scurried into the deep.\
                                    <br>\
                                    <br>\
                                    Some days\
                                    <br>\
                                    I sit somewhere silent\
                                    <br>\
                                    and wish I were shaped\
                                    <br>\
                                    like a starfish."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "13%",
                                translateY: "10%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Spines',
                                },
                                subtitle: {
                                    text: 'By Ned',
                                },
                                passage: {
                                    text:   "Sharp and numerous\
                                    <br>\
                                    My spines leave no room for doubt\
                                    <br>\
                                    I\'m no good to eat"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-30%",
                                translateY: "-25%",
                                rotate: "-5deg",
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
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Only one of these poems has a rhyme scheme. Which poem is it?',
                        'B. The poems \"Urchin\" and \"_____\" both have similar main ideas.',
                        'C. How many stanzas does \"Urchin\" have?',     
                        'D. [<u>Right] or [<u>wrong]: line 6 of \"Friend\" contains a metaphor.',                    
                    ],
                    puzzle: [
                        ["0","0","(A)U","0","(C)O","0","0"],
                        ["0","(D)W","R","2O","N","G","0"],
                        ["0","0","1C","0","4E","0","0"],
                        ["0","0","H","0","0","0","0"],
                        ["(B)S","3P","I","N","E","S","0"],
                        ["0","0","N","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "COPE",
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