const resource =  {
    
    info: {
        title: "Turkey Takedown",
        path: "turkey-takedown",
        logo: "resource/turkey-takedown/assets/branding/reading/all/thumbnail-5th-grade.png",
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
                    text: "Read both radio signals, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.3",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Bix Gribble",
                asset: "bix-gribble.png",
                dialogue : {
                    incomplete: "I picked up a couple signals on my radio, and I think they\'re bad. Like, REALLY bad... I need another brain on this. Can you read them and help me figure out what\'s going on?",
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
                                    text:   "[<i>--- RADIO SIGNAL A ---]\
                                    <br>\
                                    <br>\
                                    This is Wendell Bradford speaking. Here at ThanksCorp, we are proud to turn turkeys into tasty treats! In fact, our team packed 400 turkey legs today. We also shipped out a big batch of turkey pies. And we\'ve just started production on our latest hit: turkey chips, now with extra salt. So keep up the good work, everyone. Don\'t forget to clock in on time."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "10%",
                                rotate: "-5deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<i>--- RADIO SIGNAL B ---]\
                                    <br>\
                                    <br>\
                                    This is Wendell Bradford speaking. I have an important announcement: ThanksCorp will soon begin producing chicken snacks alongside our regular turkey items! Production starts on Monday, with chicken chips and roasted chicken bites."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "15%",
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
                        title: "[<g>1.] What\'s the main idea of Signal A?",
                        correctIndex: 1,
                        paragraph: [
                            "It\'s important to cl{o}ck in on time",
                            "Thank{s}Corp turns turkeys into food",
                            "Wendell {B}radford is the boss",
                        ],
                    },
                    {
                        title: "[<g>2.] What\'s the main idea of Signal B?",
                        correctIndex: 0,
                        paragraph: [
                            "ThanksCorp will start m{a}king chicken snacks",
                            "Pro{d}uction of turkey items will stop",
                            "Chicken chips are a {t}asty snack",
                        ],
                    },
                    {
                        title: "[<g>3.] Which line supports the main idea of Signal A?",
                        correctIndex: 1,
                        paragraph: [
                            "\"This is {W}endell Bradford speaking.\"",
                            "\"...our team packed 400 turkey {l}egs today.\"",
                            "\"Don\'t forget to clock i{n} on time.\"",
                        ],
                    },
                    {
                        title: "[<g>4.] How do these two main ideas differ?",
                        correctIndex: 2,
                        paragraph: [
                            "Both are spo{k}en by Wendell Bradford",
                            "Only one of them menti{o}ns food",
                            "One involves {t}urkey; the other involves chicken",
                        ],
                    },
                ],  
                code: {
                    answer: "SALT",
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
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.4b",
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
                character: "Dale",
                asset: "dale.png",
                dialogue : {
                    incomplete: "I snuck into the main office and found two notes that describe the factory\'s weaknesses. Each one uses difficult words, and I\'d explain them, but I have important calculations to run. You\'re up.",
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
                                    text:   "There is a [<u>clandestine] button hidden behind the filing cabinet that will deactivate every lock in the ThanksCorp factory.\
                                    <br>\
                                    Please be advised: it should never be pressed unless we experience an extreme [<u>calamity], like a fire or an earthquake. We can\'t allow our turkeys to escape unless we have no other choice."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
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
                                    text:   "Not many people know about it, but this factory has a basement level. A map of it does exist, but it\'s [<u>inaccurate] and not to be trusted.\
                                    <br>\
                                    Somewhere in the basement is a small tunnel that leads out of the factory. If you are [<u>ignorant] of the risks, do not attempt to find it. Only the knowledgeable will succeed."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
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
                        'A. Is [<u>flimsy] or [<u>secret] a synonym of \"clandestine\"?',
                        'B. What\'s another example of a \"calamity\": a [<u>rally], a [<u>flood], or a [<u>party]?',
                        'C. Does \"inaccurate\" mean [<u>not] accurate or [<u>very] accurate?',     
                        'D. [<u>Right] or [<u>wrong]: \"knowledgeable\" is an antonym of \"ignorant.\"',                    
                    ],
                    puzzle: [
                        ["0","0","(A)S","0","0","0","0"],
                        ["(B)F","0","E","0","0","0","(C)3N"],
                        ["L","0","C","0","0","0","O"],
                        ["2O","0","(D)R","I","1G","H","T"],
                        ["O","0","4E","0","0","0","0"],
                        ["D","0","T","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "GONE",
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
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.5.3",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.5b",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.4"
                    ],
                }
            },

            intro: {
                character: "Ched Muckley",
                asset: "ched-muckley.png",
                dialogue : {
                    incomplete: "Listen, nerd, not every turkey breaks outta here with some big, hot-shot plan. Me? I got tossed out with the garbage. Best thing that ever happened. If you wanna ride the trash train, I\'ll show ya how.",
                    complete: "You\'re disgusting! I\'m proud of you. Now go roll in something sticky and wait by the bins."
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
                                    text:   "Look, this factory probably has a billion locks. The alarm system will scream at you the second you break one. So don\'t even try to escape that way. My suggestion is to get thrown in the dumpster.\
                                    <br>\
                                    How, you ask? Well, you gotta act like you belong in the trash. Slump over like a soggy sandwich. [<u>Smell as musty as a week-old bucket of gravy.] Wobble around like a busted shopping cart. That kind of thing.\
                                    <br>\
                                    Just repeat after me: I am trash. My feathers are old napkins. My head is an empty soup can. My shadow is a puddle of pickle juice. If you wanna escape, you gotta BE the garbage. Actions speak louder than words!"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
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
                        title: "[<g>1.] Which line is an example of personification?",
                        correctIndex: 0,
                        paragraph: [
                            "\"The alarm {s}ystem will scream at you...\"",
                            "\"Well, {y}ou gotta act like you belong in the trash.\"",
                            "\"My shadow is a puddle of pickle j{u}ice.\"",
                        ],
                    },
                    {
                        title: "[<g>2.] The first sentence of this passage contains a:",
                        correctIndex: 2,
                        paragraph: [
                            "{S}imile",
                            "{A}dage",
                            "Hyperbo{l}e",
                        ],
                    },
                    {
                        title: "[<g>3.] What does the underlined simile mean?",
                        correctIndex: 1,
                        paragraph: [
                            "You must act ti{r}ed",
                            "Y{o}u must try to smell really bad",
                            "You mus{t} stay hidden in the shadows",
                        ],
                    },
                    {
                        title: "[<g>4.] The last sentence of this passage is a:",
                        correctIndex: 0,
                        paragraph: [
                            "{P}roverb",
                            "Si{m}ile",
                            "Metap{h}or",
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
                    text: "Read both poems, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.5",
                        "RL.5.7",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Lady Thistledown",
                asset: "lady-thistledown.png",
                dialogue : {
                    incomplete: "I was sent to scout for clues on how to shut these dreadful machines down... oh, gracious me. Luckily, I uncovered some odd little poems that seem important. Will you kindly decode them?",
                    complete: "Oh my... how terrible. Now, more than ever, we must carry on!"
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
                            text: "MACHINE SHUTDOWN GUIDE",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'Tacos',
                                },
                                passage: {
                                    text:   "First, wear goggles \u2014 trust me, friend.\
                                    <br>\
                                    Salsa will fly from every end!\
                                    <br>\
                                    Then turn the crank that smells like feet,\
                                    <br>\
                                    and hope it\'s not clogged up with meat.\
                                    <br>\
                                    <br>\
                                    Empty the tank of hot sauce too,\
                                    <br>\
                                    and celebrate with a big kazoo.\
                                    <br>\
                                    Then finally, unplug the core,\
                                    <br>\
                                    and tacos will be made no more."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-12%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "MACHINE SHUTDOWN GUIDE",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'Chips',
                                },
                                passage: {
                                    text:   "Flip the glowing switch\
                                    <br>\
                                    Red-hot gears crumble to dust\
                                    <br>\
                                    The machine goes dark"
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
                                translateY: "0%",
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
                            passage: {
                                font: 'default',
                                size: 'small',
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
                        title: "[<g>1.] Line three of \"Chips\" has ___ syllables.",
                        word: "[F]IVE",
                    },
                    {
                        title: "[<g>2.] Which poem has an AABB rhyme scheme?",
                        word: "T[A]COS",
                    },
                    {
                        title: "[<g>3.] Which poem\'s tone is sillier: \"Tacos\" or \"Chips\"?",
                        word: "TACO[S]",
                    },
                    {
                        title: "[<g>4.] Both poems are ____ guides for machines.",
                        word: "SHU[T]DOWN",
                    },
                ],
                code: {
                    answer: "FAST",
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
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Sparklepants",
                asset: "sparklepants.png",
                dialogue : {
                    incomplete: "I\'m helping my turkey buddies break out! The plan: a big ol\' distraction in the gift shop to cover their escape. Trust me, I\'ve done this kinda thing before. See for yourself, bucko!",
                    complete: "Alright bucko, this gift shop is gonna be in shambles. See ya on the other side. Yahoo!!!"
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
                                    text: "It all started when my old rival, Sparklesocks, opened up a sock shop. Now let me tell you, ol\' Sparklesocks is quiet. Careful. Smiles like a sweet grandma, but don\'t let that fool you. Last year, she cursed my shoelaces to tie themselves together. I fell flat on my face for weeks!\
                                    <br>\
                                    So when she opened up that new sock shop, I knew it had to be something wicked. And I was right: her socks were cursed! Customers walked in happy, but walked out chanting, \"Down with pants! Long live socks!\" Unforgivable.\
                                    <br>\
                                    So, I plotted my revenge. One morning, I snuck into her shop disguised as a pair of purple high-heeled cowboy boots. Then, I cast my greatest spell: [<i>Sockus Insulticus.] The socks came to life and started yelling things like, \"I refuse to go on such crusty toes!\" Shoppers screamed, cried, and ran for the door.\
                                    <br>\
                                    Sparklesocks shrieked, \"You meddling menace!\" But it was too late. Her shop was ruined, and I was proud... until the next day. No one wore socks at all, and they blamed me. The gym stank. The hallway stank. The park stank. Even I stank.\
                                    <br>\
                                    Huh. Maybe revenge isn\'t worth the stink."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "5%",
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
                            width: "percent70",
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
                        title: "[<g>1.] What is the setting of the third paragraph?",
                        correctIndex: 2,
                        paragraph: [
                            "Inside an ai{r} vent",
                            "Inside {a} sock shop at night",
                            "Inside a sock shop in the {m}orning",
                        ],
                    },
                    {
                        title: "[<g>2.] The theme of \"Sock Shop Showdown\" is:",
                        correctIndex: 1,
                        paragraph: [
                            "It\'s difficult to run a successfu{l} sock shop",
                            "R{e}venge can backfire",
                            "Socks prevent peo{p}le from getting stinky",
                        ],
                    },
                    {
                        title: "[<g>3.] Which character is bold and chaotic?",
                        correctIndex: 0,
                        paragraph: [
                            "Sparklepant{s}",
                            "Spark{l}esocks",
                            "No{n}e of the above",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the conflict in this story is between Sparklepants and the customers in the store.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "MESS",
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