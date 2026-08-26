const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/reading/poetry/preview-4th-5th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ basil rabbit
        {
            info: {
                type: 'challenge',
                title: "Honey Vats",
                asset: "basil-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Read both poems, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Poetic Elements and Structure",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "CCRA.L.5",
                        "L.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.5",
                        "RL.4.10",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "I'm here to help the bees gather nectar! Queen Bella gave me some instructions, but I can't make sense of anything. Can you help me figure out what these notes are trying to say?",
                    complete: "Thanks a million, pal! Now I can finally get to work \u2014 hopefully it's not too late."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "basil-rabbit.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Basil\'s Task',
                                },
                                subtitle: {
                                    text: 'By Queen Bella',
                                },
                                passage: {
                                    text:   " <br> \
                                    Basil &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Rabbit \
                                    <br> \
                                    you must &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp move fast \
                                    <br> \
                                    through &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp the land \
                                    <br> \
                                    of many &nbsp &nbsp &nbsp &nbsp flowers. \
                                    <br> \
                                    Lead the bees, \
                                    <br> \
                                    guiding them swiftly \
                                    <br> \
                                    with ease. Nectar here, \
                                    <br> \
                                    nectar there, gathering \
                                    <br> \
                                    sweet gold everywhere. \
                                    <br> \
                                    Bunny on a mission. \
                                    <br> \
                                    Let\'s go now!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-30%",
                                translateY: "-10%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Choosing Flowers',
                                },
                                subtitle: {
                                    text: 'By Queen Bella',
                                },
                                passage: {
                                    text:   "<br> \
                                    Basil Rabbit, listen here, \
                                    <br> \
                                    some blossoms aren't for you, I fear. \
                                    <br> \
                                    Avoid the ones with petals red, \
                                    <br> \
                                    their pollen's poison \u2014 or so I've read. \
                                    <br> \
                                    <br> \
                                    Stay away from thistles tall, \
                                    <br> \
                                    just hop away; avoid the gloom. \
                                    <br> \
                                    Their prickly stems can make you fall, \
                                    <br> \
                                    and nightshade's bloom means certain doom. \
                                    <br> \
                                    <br> \
                                    Stick to fields of golden sun, \
                                    <br> \
                                    with daisies bright where bees have fun. \
                                    <br> \
                                    Basil Rabbit, heed this plea, \
                                    <br> \
                                    make sure your work is trouble-free!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-25%",
                                translateY: "5%",
                                rotate: "-4deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] In a concrete poem, words are arranged to form a shape. Is \"Basil's Task\" an example of this?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{Y}es",
                            "N{o}",
                        ],
                    },
                    {
                        title: "[<g>2.] Who is the author of both poems?",
                        correctIndex: 1,
                        paragraph: [
                            "Bas{i}l Rabbit",
                            "Queen B{e}lla",
                            "None o{f} the above",
                        ],
                    },
                    {
                        title: "[<g>3.] Look at \"Choosing Flowers.\" What is the rhyme scheme of the second stanza?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "AB{A}B",
                            "ABCAB{C}",
                            "AA{B}B",
                            "ABC{D}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which of the following lines from \"Choosing Flowers\" uses alliteration?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "Line thr{e}e",
                            "Line si{x}",
                            "Line fou{r}",
                            "Li{n}e twelve",
                        ],
                    },
                ],  
                code: {
                    answer: "YEAR",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ riff wingman
        {
            info: {
                type: 'challenge',
                title: "Riff's Study",
                asset: "riff-wingman.png",
                state: "incomplete",
                hint: {
                    text: "Read each poem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Theme and Key Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.9",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.7",
                        "RL.5.9",
                        "RL.5.10",
                    ]
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Riff Wingman here. The storm can wait; art comes first! You see, I wrote some new poems, and I need them to hit right. Let me know if these verses are vibing.",
                    complete: "Yeah, cool. I knew these poems were gonna hit just right. Thanks!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "riff-wingman.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Fury",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Dark clouds drift closer \
                                    <br> \
                                    Tall grasses sway in the wind \
                                    <br> \
                                    Roots keep them grounded",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "3%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Bend",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Trees bend but don't break \
                                    <br> \
                                    Wings beat against the storm's howl \
                                    <br> \
                                    Nature holds its ground",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "-10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Rust",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Metal gears may halt \
                                    <br> \
                                    One loose bolt and all is lost \
                                    <br> \
                                    Machines crumble fast",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Rise",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Flowers rise up strong \
                                    <br> \
                                    Petals paint the fields with life \
                                    <br> \
                                    Spring commands the Earth",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "3%",
                                rotate: "1deg",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'defaultNoBottom'
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
                            dimension: {
                                width: "full",
                                height: "full",
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. [<u>True] or [<u>false]: the theme of \"Bend\" is that nature stays strong and keeps going. ',
                        'B. [<u>True] or [<u>false]: in \"Bend,\" only lines 2 and 3 support this theme.',
                        'C. Which of these four poems does <em>not</em> have a similar theme?',     
                        'D. Are all of these poems [<u>haikus], [<u>sonnets], or [<u>ballads]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(A)T","0"],
                        ["0","0","(B)1F","0","0","R","0"],
                        ["0","(D)H","2A","I","K","U","S"],
                        ["0","0","L","0","0","4E","0"],
                        ["(C)R","U","S","3T","0","0","0"],
                        ["0","0","E","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "FATE",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.4",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.6",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.4",
                        "RL.4.5",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.6",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.4",
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "Someone left a poem about me on my desk \u2014 real clever, huh? Problem is, it's got all these fancy words, and I'm too busy for that nonsense. Why don't you just let me know what it says?",
                    complete: "Thanks, or whatever. Now I can get back to, you know, actual work. Or maybe a nap."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "grumblegrub.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Ode to the Warehouse Keeper',
                                },
                                subtitle: {
                                    text: 'By Your Secret Admirer',
                                },
                                passage: {
                                    text:   "Grumblegrub, you are a shadow \
                                    <br> \
                                    in the hive's chaos, \
                                    <br> \
                                    quiet and calm, like a storm waiting to break. \
                                    <br> \
                                    <br> \
                                    The warehouse sighs \
                                    <br> \
                                    whenever you enter, \
                                    <br> \
                                    dust and cobwebs dancing in delight. \
                                    <br> \
                                    <br> \
                                    Your laughter is a drum, \
                                    <br> \
                                    [<u>a thundering echo] in these dusty halls. \
                                    <br> \
                                    I promise, if I had wings, \
                                    <br> \
                                    <br> \
                                    I'd fly across ten thousand fields just to hear it."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-4deg",
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
                        title: "[<g>1.] Which of these lines contains personification?",
                        correctIndex: 1,
                        paragraph: [
                            "L{i}ne one",
                            "{L}ine four",
                            "Line t{e}n",
                        ],
                    },
                    {
                        title: "[<g>2.] The speaker of this poem uses imagery to express their intense _____ of Grumblegrub.",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "Hatre{d}",
                            "Resentme{n}t",
                            "{F}ear",
                            "Admirati{o}n",
                        ],
                    },
                    {
                        title: "[<g>3.] What's the underlined phrase, and why is it used?",
                        correctIndex: 0,
                        paragraph: [
                            "It's {a} metaphor to show the laughter's strength",
                            "It's a simile to show {t}he laughter's strength",
                            "It's a metaphor to show t{h}e hall's dustiness",
                        ],
                    },
                    {
                        title: "[<g>4.] Line ten's hyperbole means the speaker would:",
                        correctIndex: 2,
                        paragraph: [
                            "Try to invent {w}ings in order to fly",
                            "Avoid {G}rumblegrub's laughter at all costs",
                            "{D}o a lot just to hear Grumblegrub laugh",
                        ],
                    },
                ],  
                code: {
                    answer: "LOAD",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ queen bella
        {
            info: {
                type: 'challenge',
                title: "Throne Room",
                asset: "queen-bella.png",
                state: "incomplete",
                hint: {
                    text: "Read both poems, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Author's Purpose and Point of View",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.6",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "Greetings, Dingo Punks. I've written some couplets to inspire the hive, and I need a second set of eyes to review my work. Tell me, are you up to the challenge?",
                    complete: "We shall face every storm with unwavering strength! Many thanks, Dingo Punks."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "queen-bella.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Lead',
                                },
                                subtitle: {
                                    text: 'By Queen Bella',
                                },
                                passage: {
                                    text:   "I stand tall to guard the hive, \
                                    <br> \
                                    ensuring my bees will always thrive. \
                                    <br> \
                                    <br> \
                                    Through storms and trials, I won't bend, \
                                    <br> \
                                    Bumbleburg I will always defend."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-15%",
                                rotate: "-6deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Unity',
                                },
                                subtitle: {
                                    text: 'By Queen Bella',
                                },
                                passage: {
                                    text:   "The hive hums with purpose, each bee in sync, \
                                    <br> \
                                    from nectar to wax, the bees never blink. \
                                    <br> \
                                    <br> \
                                    Together they thrive, through shadows and storms, \
                                    <br> \
                                    a family united, their bond transforms."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "15%",
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
                        title: "[<g>1.] From what point of view is \"Unity\" told?",
                        correctIndex: 2,
                        paragraph: [
                            "First per{s}on",
                            "Seco{n}d person",
                            "T{h}ird person",
                        ],
                    },
                    {
                        title: "[<g>2.] \"Lead\" was likely written in first person to show:",
                        correctIndex: 1,
                        paragraph: [
                            "How the hive c{a}n grow and thrive",
                            "Queen Bella's personal dedicati{o}n",
                            "The strength of the bees' tea{m}work",
                        ],
                    },
                    {
                        title: "[<g>3.] The author of both poems intends to:",
                        correctIndex: 0,
                        paragraph: [
                            "Ins{p}ire the bees in times of trouble",
                            "Instruct the {b}ees on what work must be done",
                            "Insult the bees for sla{c}king off",
                        ],
                    },
                    {
                        title: "[<g>4.] \"Lead\" focuses on Bella, while \"Unity\" focuses on:",
                        correctIndex: 1,
                        paragraph: [
                            "The s{t}orm",
                            "The bees of the hiv{e}",
                            "None of the abo{v}e",
                        ],
                    },
                ],  
                code: {
                    answer: "HOPE",
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
        
    ]

}