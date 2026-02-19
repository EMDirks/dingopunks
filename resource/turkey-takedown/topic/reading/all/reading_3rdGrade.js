const resource =  {
    
    info: {
        title: "Turkey Takedown",
        path: "turkey-takedown",
        logo: "resource/turkey-takedown/assets/branding/reading/all/thumbnail-3rd-grade.png",
        timerLabel: "FACTORY OPENS"
    },

    challengeArray: [

        // ⭐ bix's hideout
        {

            info: {
                type: 'challenge',
                title: "Bix's Hideout",
                asset: "bix-gribble.png",
                state: "incomplete",
                hint: {
                    text: "Read the radio report, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.2",
                        "RL.3.1",
                        "RL.3.5",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Bix Gribble",
                asset: "bix-gribble.png",
                dialogue : {
                    incomplete: "I heard something on my radio, and I think it\'s bad. Like, REALLY bad... I need your help. Can you help me understand what\'s going on?",
                    complete: "Oh no... it\'s true? I knew it! This is bigger than I thought. We have lots of work to do."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "bix-gribble.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<i>--- BEGIN RADIO REPORT ---]\
                                    <br>\
                                    <br>\
                                    This is your boss, Wendell Bradford. Here at ThanksCorp, we turn turkeys into yummy food.\
                                    <br>\
                                    <br>\
                                    Today, our team baked 400 turkey pies. We also cooked a big box of turkey legs. [<u>And we just started making our newest snack: turkey chips.]\
                                    <br>\
                                    <br>\
                                    Keep up the good work, and have a happy Thanksgiving. Thank you for listening!\
                                    <br>\
                                    <br>\
                                    [<i>--- END RADIO REPORT ---]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "2%",
                                rotate: "-2deg",
                            }
                        }
                    },
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
                        title: "[<g>1.] What is the main idea of this radio report?",
                        correctIndex: 0,
                        paragraph: [
                            "ThanksCorp turns turkeys into yu{m}my food",
                            "Turkey chi{p}s taste better with extra salt",
                            "It\'s important to have a h{a}ppy Thanksgiving",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail supports the main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"This {i}s your boss, Wendell Bradford.\"",
                            "\"Today, our team baked 400 turkey pi{e}s.\"",
                            "\"...have a {h}appy Thanksgiving.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What is another supporting detail?",
                        correctIndex: 0,
                        paragraph: [
                            "\"We also cooked {a} big box of turkey legs.\"",
                            "\"Thank you {f}or listening!\"",
                            "None of the abo{v}e",
                        ],
                    },
                    {
                        title: "[<g>4.] The underlined sentence is a third supporting detail. True or false?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "{T}rue",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "MEAT",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ main office
        {

            info: {
                type: 'challenge',
                title: 'Main Office',
                asset: "dale.png",
                state: "incomplete",
                hint: {
                    text: "Read both notes, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.4b",
                        "L.3.4c",
                        "L.3.5",
                        "RF.3.3",
                        "RF.3.3a",
                        "RF.3.3b",
                        "RF.3.4a",
                        "RF.3.4c",
                        "RI.3.4",
                        "RL.3.4"
                    ],
                }
            },

            intro: {
                character: "Dale",
                asset: "dale.png",
                dialogue : {
                    incomplete: "I snuck into the main office and found two notes about the factory\'s weak spots. They use some tricky words, and I have no time to explain. It\'s your job now.",
                    complete: "Well, you figured out the clues and didn\'t mess it up. Nice job. "
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "dale.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "TOP SECRET",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'Button',
                                },
                                passage: {
                                    text:   "There\'s a secret button behind the desk. If you press it, it will [<u>unlock] every door in the ThanksCorp factory.\
                                    <br>\
                                    You should only press it during a big [<u>disaster], like a fire or flood. We can\'t let any turkeys escape unless we have no other choice."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-18%",
                                translateY: "-5%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "TOP SECRET",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'Tunnel',
                                },
                                passage: {
                                    text:   "Most people don\'t know this, but the factory has a basement. There are many [<u>hazards] down there, so keep out!\
                                    <br>\
                                    Somewhere in the basement, there\'s a small tunnel that leads outside. It\'s a little wet and [<u>damp], with puddles on the floor."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "17%",
                                rotate: "5deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'double'
                        },
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left',
                                indent: 'default',
                                brSplit: 'default'
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
                        'A. If you \"unlock\" a door, will it [<u>open] or [<u>close]?',
                        'B. \"Disaster\" means [<i>something good that happens]. [<u>True] or [<u>false]?',
                        'C. Which word is a synonym of \"hazards\": [<u>parties], [<u>dangers], or [<u>forests]?',     
                        'D. Which underlined word means \"a little wet\"?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","(A)O","0","0"],
                        ["0","(D)4D","0","0","P","0","0"],
                        ["(C)D","A","N","G","E","R","1S"],
                        ["0","M","0","0","3N","0","0"],
                        ["0","P","0","0","0","0","0"],
                        ["0","0","(B)F","A","L","S","2E"],
                    ]
                },  
                code: {
                    answer: "SEND",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ dumpster
        {

            info: {
                type: 'challenge',
                title: "Dumpster",
                asset: "ched-muckley.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.3.3",
                        "L.3.5a",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.4"
                    ],
                }
            },

            intro: {
                character: "Ched Muckley",
                asset: "ched-muckley.png",
                dialogue : {
                    incomplete: "Not every turkey escapes with a big, fancy plan. Me? I got thrown out with the trash. Best thing that ever happened! Want to see how I did it?",
                    complete: "Gross! I\'m proud of you. Now go roll in something sticky and wait by the bushes."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "ched-muckley.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'How to Get Thrown in the Dumpster',
                                },
                                subtitle: {
                                    text: "By Ched Muckley",
                                },
                                passage: {
                                    text:   "If you want to get thrown in the trash, just do what I did. Sit like a soggy sandwich. Wobble like a broken shopping cart. Be as smelly as old gravy.\
                                    <br>\
                                    [<u>Just repeat after me: I am trash.] My feathers are old napkins. My head is an empty soup can. My shadow is a puddle of pickle juice. If you want to escape, you must BE the garbage. Be the smell. Be the mess. Be free."
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
                                indent: 'default',
                                brSplit: 'default'
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
                        title: "[<g>1.] \"Sit like a soggy sandwich\" is a ____ .",
                        correctIndex: 0,
                        paragraph: [
                            "{S}imile",
                            "Me{t}aphor",
                            "Para{g}raph",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these sentences has a metaphor?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Wobble l{i}ke a broken shopping cart.\"",
                            "\"Be as smelly as old grav{y}.\"",
                            "\"My feathers are o{l}d napkins.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Read the underlined sentence. What figurative language does it have?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "A simil{e}",
                            "A metaph{o}r",
                        ],
                    },
                    {
                        title: "[<g>4.] Which paragraph has three similes?",
                        correctIndex: 0,
                        paragraph: [
                            "The first {p}aragraph",
                            "The se{c}ond paragraph",
                            "Neither paragraph has three {s}imiles",
                        ],
                    },
                ],  
                code: {
                    answer: "SLOP",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ machine room
        {

            info: {
                type: 'challenge',
                title: 'Machine Room',
                asset: "lady-thistledown.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.5",
                        "RL.3.6",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Lady Thistledown",
                asset: "lady-thistledown.png",
                dialogue : {
                    incomplete: "Oh dear... I was sent to look for clues to stop these awful machines. I found a strange little poem, and it seems important. Can you help me figure out what it means?",
                    complete: "Thanks to you, Puzzle Punks, we can stop these machines for good."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "lady-thistledown.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'How to Turn Off the Factory',
                                },
                                subtitle: {
                                    text: 'Written by Wendell Bradford',
                                },
                                passage: {
                                    text:   "<br>Push the red button nice and slow.\
                                    <br>\
                                    If it beeps, then you\'ll know. \
                                    <br>\
                                    Every gear will come to a stop.\
                                    <br>\
                                    Silence means the machines are off."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "8%",
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
                                translateX: "5%",
                                translateY: "12%",
                                rotate: "3deg",
                            }
                        }
                    },
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'metal',
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
                        title: "[<g>1.] The poet\'s name is Wendell ____ .",
                        word: "BRAD[F]ORD",
                    },
                    {
                        title: "[<g>2.] True or false: this poem has one stanza.",
                        word: "T[R]UE",
                    },
                    {
                        title: "[<g>3.] How many syllables does the fourth line have?",
                        word: "[E]IGHT",
                    },
                    {
                        title: "[<g>4.] The first letter of every line spells out ____ .",
                        word: "PI[E]S",
                    },
                ],
                code: {
                    answer: "FREE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ gift shop
        {

            info: {
                type: 'challenge',
                title: "Gift Shop",
                asset: "sparklepants.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.6",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Sparklepants",
                asset: "sparklepants.png",
                dialogue : {
                    incomplete: "To help my turkey friends escape, I\'m gonna cause some trouble in the gift shop. Don\'t worry, I\'ve done stuff like this before. See for yourself!",
                    complete: "Alright, buddy, this gift shop\'s about to be a mess. See you later!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sparklepants.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Sock Shop Showdown",
                                },
                                subtitle: {
                                    text: "By Sparklepants",
                                },
                                passage: {
                                    text: "It all started when my old rival, Miss Snizzle, opened a sock shop. But it wasn\'t a normal store. I could tell something strange was going on. And I was right — her socks were cursed! People walked in smiling, but walked out shouting, \"No more pants! Only socks!\" It was terrible.\
                                    <br>\
                                    So I made a plan. One afternoon, I sneaked into her shop dressed like a pair of cowboy boots. Once I was inside, I used my best spell: [<i>Sockus Insulticus.] Right away, the socks jumped up and started yelling things like, \"Your feet stink like old waffles!\" and \"I\'m not going on those gross toes!\"\
                                    <br>\
                                    Everyone screamed and ran out of the store. Miss Snizzle screamed, \"You troublemaker!\" But it was too late. Her socks were way too rude now, and no one wanted them. She tried to catch me, but I zoomed out through the air vent, riding a long stocking like a flying carpet!"
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
                        title: "[<g>1.] Who is the narrator of \"Sock Shop Showdown\"?",
                        correctIndex: 0,
                        paragraph: [
                            "Sparklepan{t}s",
                            "Miss Sni{z}zle",
                            "So{c}kus Insulticus",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the setting of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "A school classroom in t{h}e morning",
                            "A sock sh{o}p in the afternoon",
                            "A {m}agic castle at night ",
                        ],
                    },
                    {
                        title: "[<g>3.] What was strange about Miss Snizzle\'s socks?",
                        correctIndex: 2,
                        paragraph: [
                            "They we{r}e too small",
                            "They were shaped like anima{l}s",
                            "They were curs{e}d",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: Sparklepants is quiet and shy, and doesn\'t like to cause trouble.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "TOES",
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