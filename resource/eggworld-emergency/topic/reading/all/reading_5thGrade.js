const resource =  {

    info: {
        title: "Eggworld Emergency",
        path: "eggworld-emergency",
        logo: "resource/eggworld-emergency/assets/branding/reading/all/thumbnail-5th-grade.png",
        timerLabel: "GIANT PAN ARRIVES"
    },

    challengeArray: [

        // ⭐ ziggy voss
        {

            info: {
                type: 'challenge',
                title: "Treasure Shop",
                asset: "ziggy-voss.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.8",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Ziggy Voss",
                asset: "ziggy-voss.png",
                dialogue : {
                    incomplete: "Oh, excellent, you\'re here! My boss put me in charge of packing up Eggworld\'s rarest artifacts before this whole place becomes an omelet. Care to lend a hand before we all end up extra crispy?",
                    complete: "You didn't touch the Crimson Pendant, did you? Anyway \u2014 thanks for the help!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "ziggy-voss.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Ziggy \u2014<br>\
                                    <br>\
                                    &nbsp &nbsp &nbsp It\'s time to pack up our massive collection of rare treasures! Just be extra careful, we\'ve got lots of priceless stuff to haul out. Every item is worth a fortune, especially Duke Dino\'s Scrambled Scepter, the Goblin Queen\'s Topaz Bracelet, and my personal favorite: the Singing Sapphire. It only knows two songs, but wow — they're catchy! That one about corn dogs is stuck in my head. So please, make sure to use tons of bubble wrap when boxing that thing up.<br>\
                                    <br>\
                                    &nbsp &nbsp &nbsp Now, a few items should be left behind. The Whispering Bracelet won\'t stop telling secrets, and honestly, I\'m tired of the drama. Melodina\'s Locket was crafted beautifully, but it leaves fingerprints on the glass... on the inside. Seriously, whose fingers are those? But whatever you do, Ziggy, leave behind the Crimson Pendant. After what happened to the last person who touched it, I still can\'t look at scrambled eggs without screaming.<br> \
                                    <br>\
                                    Good luck,<br>\
                                    Sheila Barazo"
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
                            material: 'paper',
                            padding: "default"
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
            
                            passage: {
                                font: 'default',
                                size: 'small',
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
                        title: "[<g>1.] What\'s the main idea of the first paragraph?",
                        correctIndex: 2,
                        paragraph: [
                            "Corn {d}ogs are delicious",
                            "The Sin{g}ing Sapphire knows two songs",
                            "Many valuable treasures need to {b}e packed up",
                        ],
                    },
                    {
                        title: "[<g>2.] What\'s the main idea of the second paragraph?",
                        correctIndex: 1,
                        paragraph: [
                            "Sheila Barazo is tired of dr{a}ma",
                            "Some tr{e}asures should be left behind",
                            "The {C}rimson Pendant should never be touched",
                        ],
                    },
                    {
                        title: "[<g>3.] What key detail supports the first main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "\"...we\'ve got lots of priceless stuff to h{a}ul out.\"",
                            "\"It only knows tw{o} songs...\"",
                            "\"That one about corn do{g}s is stuck in my head.\"",
                        ],
                    },
                    {
                        title: "[<g>4.] Both main ideas involve:",
                        correctIndex: 0,
                        paragraph: [
                            "{D}eciding what to do with various treasures",
                            "Givin{g} instructions on how to use bubble wrap",
                            "Explaining why some treasures are d{a}ngerous",
                        ],
                    },
                ],  
                code: {
                    answer: "BEAD",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ sir eggbert
        {

            info: {
                type: 'challenge',
                title: "Castle Eggbert",
                asset: "sir-eggbert.png",
                state: "incomplete",
                hint: {
                    text: "Read both escape plans, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
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
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.5b",
                        "L.5.6",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.4",
                        "RI.5.5",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Sir Eggbert",
                asset: "sir-eggbert.png",
                dialogue : {
                    incomplete: "Two of my knights have written escape plans, each with its own risks. This is not an easy choice \u2014 if we must flee, we must do so wisely. Please read both and share your thoughts.",
                    complete: "Thank you, Dingo Punks. I will consider your thoughts with care."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sir-eggbert.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Escape Plan #1<br>By Sir Percival<br><br>The safest path out of Eggworld is through the Tangled Woods. It\'s dark and winding, but the forest is a friend that will shelter us. Yes, the journey will take ages, but we\'ll quietly slip past the chaos in the city. A safe escape beats being scrambled by a panicked crowd.<br><br>After all, slow and steady wins the race."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-15%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Escape Plan #2<br>By Sir Flip<br><br>No more hiding in the forest; that prison will be the end of us! No, we should dash straight through the town square. It\'ll be chaos, with eggs cracking left and right, but we need speed. The quicker we run, the sooner we\'ll be safe, even if the risk is as reckless as flipping a skillet with our bare hands.<br><br>So let\'s stop talking, and start moving. Actions speak louder than words!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "10%",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Does the metaphor in the more cautious escape plan compare the forest to a [<u>friend] or a [<u>prison]?',
                        'B. Are there [<u>one] or [<u>two] similes in Escape Plan #2?',
                        'C. [<u>Right] or [<u>wrong]: Sir Percival uses a hyperbole to emphasize that the journey through the woods will take a long time.',     
                        'D. To support their claims with well-known wisdom, do both plans end with an [<u>idiom] or an [<u>adage]?'                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(D)A","0"],
                        ["(A)F","(C)R","I","E","3N","D","0"],
                        ["0","I","0","0","0","A","0"],
                        ["0","1G","0","0","0","G","0"],
                        ["0","H","0","(B)2O","N","4E","0"],
                        ["0","T","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "GONE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ shelly, sunny, and yoko
        {

            info: {
                type: 'challenge',
                title: "Cozy Coop",
                asset: "shelly-sunny-and-yoko.png",
                state: "incomplete",
                hint: {
                    text: "Read each note, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                character: "Shelly, Sunny, and Yoko",
                asset: "shelly-sunny-and-yoko.png",
                dialogue : {
                    incomplete: "Me, Shelly, and Yoko KNOW there\'s a secret escape tunnel out of Eggworld, but we CANNOT agree on where it is. We need a second opinion, right now! Can you check out our theories?",
                    complete: "Thanks \u2014 you\'re the BEST! At least now we\'ve got some sort of clue, right?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "shelly-sunny-and-yoko.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Shelly\'s Note",
                                },
                                passage: {
                                    text: "Uhhh, the tunnel? Well, I\'m pretty sure it\'s somewhere near the old [<u>confectionery] shop. You know, the store with all my favorite candies! Or wait... was it near the plant shop? Anyway, look for something big and round, because tunnels are usually round, right? Good luck!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "5%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Sunny\'s Note",
                                },
                                passage: {
                                    text: "WOW! Okay, so listen carefully. The tunnel is DEFINITELY behind Eggbert\'s statue in the park. I\'m talking about that big marble one. Just pour a little water at his feet, and when the ground [<u>absorbs] it, (soaking it all up) a hidden door will appear. BAM! Instant escape route. Just, uh... maybe bring some [<u>antibacterial] wipes. That tunnel is full of germs!",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Yoko\'s Note",
                                },
                                passage: {
                                    text: "Oh yeah, the tunnel. It\'s definitely somewhere. Maybe near the candy store? Or was it behind that ugly statue in the park? Eh, doesn\'t matter. Shelly and Sunny can try to prove one of those theories right \u2014 or, they might [<u>debunk] them completely. Either way, not my problem. I\'ve got more important things to do.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "-5%",
                                rotate: "2deg",
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
                        title: "[<g>1.] What is a synonym of \"confectionery?\"",
                        correctIndex: 0,
                        paragraph: [
                            "{C}andy",
                            "Pla{n}t",
                            "St{o}re",
                        ],
                    },
                    {
                        title: "[<g>2.] Something that is \"antibacterial\" will:",
                        correctIndex: 1,
                        paragraph: [
                            "Work with {b}acteria to make it stronger",
                            "Work against bacteria to kil{l} it",
                            "Mak{e} germs smell nice",
                        ],
                    },
                    {
                        title: "[<g>3.] To \"absorb\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "To {m}elt",
                            "To destr{o}y",
                            "To soak {u}p",
                        ],
                    },
                    {
                        title: "[<g>4.] What does \"debunk\" mean?",
                        correctIndex: 2,
                        paragraph: [
                            "T{h}eory",
                            "Pro{v}e",
                            "Disprov{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "CLUE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ e.v.a.
        {

            info: {
                type: 'challenge',
                title: "Eggworld Archives",
                asset: "eva.png",
                state: "incomplete",
                hint: {
                    text: "Read both poems, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
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
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RI.5.1",
                        "RI.5.5",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.5",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "E.V.A.",
                asset: "eva.png",
                dialogue : {
                    incomplete: "Eggworld\'s end is near, and I need your help. The frying pan didn\'t appear randomly \u2014 I found two notes with different claims. Will you read them both and help me figure out the truth?",
                    complete: "That settles it! The story of Eggworld ends today, but what comes next is a new beginning."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "eva.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Feud',
                                },
                                subtitle: {
                                    text: "By Eggerton, President of Eggworld",
                                },
                                passage: {
                                    text:   "[<tal>Eggworld and Baconworld sat side by side,<br>\
                                    but never were friendly, just full of pride.<br>\
                                    They bickered, argued, and fought for years,<br>\
                                    too stuck in their ways to face their fears.<br>\
                                    <br>\
                                    So Baconworld, with one last plan,<br>\
                                    built and launched a giant pan.<br>\
                                    Too late to talk, too late to fix \u2014<br>\
                                    Eggworld will soon be scrambled to bits!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Fall',
                                },
                                subtitle: {
                                    text: "By Hamilton, President of Baconworld",
                                },
                                passage: {
                                    text:   "Eggworld and Baconworld fought for years.<br>\
                                    I wanted to stop it.<br>\
                                    <br>\
                                    So in my barn, I built a big pan \u2014<br>\
                                    not to fight, but to unite.<br>\
                                    <br>\
                                    But the wind had other plans: it stole my creation!<br>\
                                    And now it falls, heavy with my mistake.<br>\
                                    <br>\
                                    All will shun the fool who built it."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "9%",
                                rotate: "-2deg",
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
                                translateX: "-5%",
                                translateY: "4%",
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
                                size: 'mediumSmall',
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
                                align: 'left'
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
                        title: "[<g>1.] What is the rhyme scheme of \"Feud?\"",
                        word: "AAB[B]",
                    },
                    {
                        title: "[<g>2.] [<i>Good ideas can go wrong] is the theme of:",
                        word: "F[A]LL",
                    },
                    {
                        title: "[<g>3.] \"Fall\" is written from a _____ person perspective.",
                        word: "FI[R]ST",
                    },
                    {
                        title: "[<g>4.] Both poets intend to explain the _____ of the pan.",
                        word: "ORIGI[N]",
                    },
                ],
                code: {
                    answer: "BARN",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ cornelius rabbit
        {

            info: {
                type: 'challenge',
                title: "Town Hall",
                asset: "cornelius-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Cornelius Rabbit",
                asset: "cornelius-rabbit.png",
                dialogue : {
                    incomplete: "Hey, bucko! I just finished recording the final Eggworld town hall meeting. So much happened, so much was said... it can\'t be forgotten. Please, read it and keep Eggworld's legacy alive!",
                    complete: "Eggworld\'s legacy will live on, no matter what comes next. See ya on the other side!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "cornelius-rabbit.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Poppy',
                                },
                                subtitle: {
                                    text: "Written by Cornelius Rabbit",
                                },
                                passage: {
                                    text:   "Poppy Eggwhite always dreamed of flying, but eggs don\'t fly. Everyone knew that. However, in her messy workshop on the outskirts of Eggworld, she quietly built a flying machine from scraps, springs, and bicycle parts. But the whole time, she felt afraid.\
                                    <br>\
                                    When Poppy presented the machine to the crowd at Eggworld\'s town hall, her voice shook. She could barely speak a single word. Embarrassed and full of doubt, she slipped back into her chair.\
                                    <br>\
                                    Then, disaster struck: a giant frying pan appeared in the sky, hurtling toward Eggworld! Poppy\'s eyes widened in terror, but she knew she had to act. Without hesitation, she raced to her machine, ignited the engine, and soared into the sky. And as she rescued her neighbors one by one, her doubts were left trailing behind.\
                                    <br>\
                                    When the last egg landed safely, Poppy stood tall and proud. She had proven, once and for all, that eggs really could fly. As she dusted off her jacket, she realized that courage means moving forward \u2014 even when you\'re scared."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "4%",
                                rotate: "-7deg",
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
                            width: "percent85",
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
                        title: "[<g>1.] This entire story takes place in _____ .",
                        correctIndex: 0,
                        paragraph: [
                            "Egg{w}orld",
                            "Poppy\'s worksh{o}p",
                            "The tow{n} hall",
                        ],
                    },
                    {
                        title: "[<g>2.] Which sentence of \"Poppy\" states its theme?",
                        correctIndex: 1,
                        paragraph: [
                            "The second sentence of the fi{r}st paragraph",
                            "The f{i}nal sentence of the fourth paragraph",
                            "Non{e} of the above",
                        ],
                    },
                    {
                        title: "[<g>3.] The conflict in this story is between Poppy and:",
                        correctIndex: 2,
                        paragraph: [
                            "Her mess{y} workshop",
                            "The cr{o}wd at Eggworld\'s town hall ",
                            "Her fear a{n}d self-doubt",
                        ],
                    },
                    {
                        title: "[<g>4.] At the beginning of the story, Poppy was timid & uncertain. By the end, she was:",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Fearful & {h}esitant",
                            "Prou{d} & courageous",
                        ],
                    },
                ],  
                code: {
                    answer: "WIND",
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