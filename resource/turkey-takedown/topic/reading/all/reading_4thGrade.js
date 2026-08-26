const resource =  {
    
    info: {
        title: "Turkey Takedown",
        path: "turkey-takedown",
        logo: "resource/turkey-takedown/assets/branding/reading/all/thumbnail-4th-grade.png",
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
                    text: "Read the radio message, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.8",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Bix Gribble",
                asset: "bix-gribble.png",
                dialogue : {
                    incomplete: "I picked up a message on my radio, and I think it\'s bad. Like, REALLY bad... I need another brain on this. Can you read it and help me figure out what\'s going on?",
                    complete: "Oh no... so it\'s true? I knew it! This goes deeper than I thought. We have lots of work to do."
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
                                    text:   "[<i>--- BEGIN RADIO MESSAGE ---]\
                                    <br>\
                                    <br>\
                                    This is Wendell Bradford speaking. Here at ThanksCorp, we are proud to turn turkeys into tasty treats! Our hard-working team just packed 400 turkey pies today. We also shipped out a big batch of roasted turkey legs. And we\'ve just started production on our latest hit: turkey chips, now with extra salt.\
                                    <br>\
                                    <br>\
                                    So keep up the good work. Don\'t forget to clock in on time. Happy Thanksgiving!\
                                    <br>\
                                    <br>\
                                    [<i>--- END RADIO MESSAGE ---]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "5%",
                                rotate: "2deg",
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
                            width: "percent50",
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
                        title: "[<g>1.] What is the main idea of this radio message?",
                        correctIndex: 2,
                        paragraph: [
                            "Wendell Bradford is sp{e}aking",
                            "The turkey snack sticks no{w} have extra salt",
                            "ThanksCor{p} turns turkeys into food",
                        ],
                    },
                    {
                        title: "[<g>2.] Which sentence is a supporting detail?",
                        correctIndex: 1,
                        paragraph: [
                            "\"This is Wendell {B}radford speaking.\"",
                            "\"Our team just packed 400 turkey p{i}es today.\"",
                            "\"Don\'t {f}orget to clock in on time.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What three food items does ThanksCorp make?",
                        correctIndex: 0,
                        paragraph: [
                            "Turk{e}y pies, turkey legs, and turkey chips",
                            "T{u}rkey pies, turkey legs, and turkey salt",
                            "Turkey pies, turkey chips, and turkey cloc{k}s",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the last sentence of this radio message also supports the main idea.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "PIES",
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
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.4b",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.4",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.4"
                    ],
                }
            },

            intro: {
                character: "Dale",
                asset: "dale.png",
                dialogue : {
                    incomplete: "I snuck into the main office and found two notes that describe the factory\'s weaknesses. Each one uses tricky words, and I\'d explain them, but I have important calculations to run. You\'re up.",
                    complete: "Acceptable work. You understood the clues and didn\'t mess anything up."
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
                                    text:   "There is a button hidden behind the filing cabinet that will [<u>deactivate] every lock in the ThanksCorp factory.\
                                    <br>\
                                    However, it should never be pressed except in cases of extreme [<u>crisis], like a fire or a flood. Unless we have no other choice, we can\'t allow these turkeys to escape."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
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
                                    text:   "Not many people know this, but the ThanksCorp factory has a basement level. It\'s full of [<u>hazards] and dangers, so keep out!\
                                    <br>\
                                    Somewhere down there is a small tunnel that leads outside. But only a [<u>clueless] person, unaware of the risks, would dare travel through it."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "20%",
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
                            padding: 'default'
                        },
                        misc: {
                            material: 'paper',
                            padding: "default"
                        },
                        dimension: {
                            width: "percent35",
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
                                size: 'small',
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
                        'A. [<u>Right] or [<u>wrong]: \"deactivate\" means [<i>to turn off or disconnect.]',
                        'B. Which word from these two documents means [<i>an emergency], like a fire or a flood?',
                        'C. [<u>Right] or [<u>wrong]: a \"clueless\" person is someone who is aware.',     
                        'D. Is [<u>secret] or [<u>danger] a synonym of \"hazard\"?',                    
                    ],
                    puzzle: [
                        ["0","(B)C","0","0","0","0","(D)D"],
                        ["(C)1W","R","O","3N","G","0","A"],
                        ["0","I","0","0","0","0","N"],
                        ["0","S","0","0","0","0","4G"],
                        ["(A)R","2I","G","H","T","0","E"],
                        ["0","S","0","0","0","0","R"],
                    ]
                },  
                code: {
                    answer: "WING",
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
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.5",
                        "L.4.5a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RL.4.1",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Ched Muckley",
                asset: "ched-muckley.png",
                dialogue : {
                    incomplete: "Listen, not every turkey breaks out through some big, fancy plan. Me? I got tossed out with the garbage. Best thing that ever happened. If you\'re curious, I\'ll show ya how.",
                    complete: "You\'re disgusting! I\'m proud of you. Now go roll in something sticky and wait by the bushes."
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
                                    text:   "If you wanna get tossed out of here like I did, you gotta act like you belong in the garbage. Slump over like a soggy sandwich. Smell as musty as a week-old bucket of gravy. Wobble around like a busted shopping cart. That kind of thing.\
                                    <br>\
                                    Just repeat after me: [<u>I am trash]. My feathers are old napkins. My head is an empty soup can. My shadow is a puddle of pickle juice. If you wanna escape, you gotta BE the garbage. Be the smell. Be the mess. Be free."
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
                        title: "[<g>1.] \"Slump over like a soggy sandwich\" is a ____ .",
                        correctIndex: 0,
                        paragraph: [
                            "{S}imile",
                            "Meta{p}hor",
                            "Stan{z}a",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these sentences is a simile?",
                        correctIndex: 0,
                        paragraph: [
                            "\"Smell as {m}usty as a week-old bucket of gravy.\"",
                            "\"That kin{d} of thing.\"",
                            "\"My feathers are old na{p}kins.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the underlined text?",
                        correctIndex: 1,
                        paragraph: [
                            "A simil{e}",
                            "A metaph{o}r",
                            "A {s}peaker",
                        ],
                    },
                    {
                        title: "[<g>4.] Which paragraph does NOT have any similes?",
                        correctIndex: 1,
                        paragraph: [
                            "Paragrap{h} one",
                            "Para{g}raph two",
                            "Neither pa{r}agraph has any similes",
                        ],
                    },
                ],  
                code: {
                    answer: "SMOG",
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
                    text: "Read both poems, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
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
                        "RL.4.5",
                        "RL.4.6",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Lady Thistledown",
                asset: "lady-thistledown.png",
                dialogue : {
                    incomplete: "Oh gracious... I was sent to scout for clues on how to shut down these dreadful machines. I\'ve found some odd little poems on metal plates that seem important. Will you decode them for me?",
                    complete: "Well. That was terrible. But thanks to your help, we can shut down these machines for good."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "lady-thistledown.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "SHUTDOWN INSTRUCTIONS",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'Chip Machine',
                                },
                                subtitle: {
                                    text: 'Written by Wendell Bradford',
                                },
                                passage: {
                                    text:   "Turn the top gear once\
                                    <br>\
                                    Wipe off the dripping green oil\
                                    <br>\
                                    Flip the red switch twice"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-12%",
                                translateY: "-10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "SHUTDOWN INSTRUCTIONS",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'Pies Machine',
                                },
                                subtitle: {
                                    text: 'Written by Wendell Bradford',
                                },
                                passage: {
                                    text:   "Press the button near the dough.\
                                    <br>\
                                    Ignore the hiss \u2014 let it go.\
                                    <br>\
                                    Ease the hatch and check the seal.\
                                    <br>\
                                    Shut the oven with your heel."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
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
                                translateX: "5%",
                                translateY: "14%",
                                rotate: "3deg",
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
                        title: "[<g>1.] For both poems, the poet\'s last name is ____ .",
                        word: "BRADFOR[D]",
                    },
                    {
                        title: "[<g>2.] Is \"[<u>Chip] Machine\" or \"[<u>Pies] Machine\" a haiku?",
                        word: "CH[I]P",
                    },
                    {
                        title: "[<g>3.] [<u>Right] or [<u>wrong]: both poems are instructions.",
                        word: "[R]IGHT",
                    },
                    {
                        title: "[<g>4.] Each line in \"Pies Machine\" has ____ syllables.",
                        word: "SEV[E]N",
                    },
                ],
                code: {
                    answer: "DIRE",
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
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Sparklepants",
                asset: "sparklepants.png",
                dialogue : {
                    incomplete: "I\'m helping my turkey friends break out, so I\'ll be causing a little chaos in the gift shop \u2014 a distraction to cover their escape. Trust me, I\'ve done this sort of thing before. See for yourself!",
                    complete: "Alright bucko, this gift shop is gonna be in shambles. See ya on the other side!"
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
                                    text: "It all started when my old rival, Sparklesocks, opened a sock shop. I knew it wasn\'t a normal store; it [<i>had] to be something evil. And I was right: her socks were cursed! Customers walked in happy, but walked out chanting, \"Down with pants! Long live socks!\" Unforgivable.\
                                    <br>\
                                    So I made a plan. One afternoon, I snuck into her shop disguised as a pair of cowboy boots. Once inside, I decided to cast my greatest spell: [<i>Sockus Insulticus.] Suddenly, the socks came to life and started shouting things like, \"Your feet smell like moldy waffles!\" and \"I refuse to go on such crusty toes!\" Everyone in the shop screamed, cried, and took off running.\
                                    <br>\
                                    Sparklesocks shrieked, \"You meddling menace!\" But the damage was done. Her enchanted socks were too rude to wear, and her customers disappeared faster than a sneeze in a breeze. She tried to stop me, but I slipped through an air vent riding a stocking like a flying carpet."
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
                        title: "[<g>1.] Which traits best describe Sparklepants?",
                        correctIndex: 2,
                        paragraph: [
                            "Calm, ca{r}eful, and serious",
                            "Boring, laz{y}, and forgetful",
                            "{C}lever, mischievous, and bold",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the conflict in this story is between Sparklepants and the customers in the store.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] The climax of \"Sock Shop Showdown\" is when:",
                        correctIndex: 1,
                        paragraph: [
                            "Sparklesocks opene{d} her sock shop",
                            "Sparklepants made the sock{s} come to life",
                            "Spark{l}epants escaped through an air vent",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the setting of this story?",
                        correctIndex: 0,
                        paragraph: [
                            "Inside a sock shop in the af{t}ernoon",
                            "Inside {a} sock shop at night",
                            "Inside an air {v}ent",
                        ],
                    },
                ],  
                code: {
                    answer: "CAST",
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