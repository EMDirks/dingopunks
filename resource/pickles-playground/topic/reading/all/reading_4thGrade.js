const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/all/thumbnail-4th-grade.png",
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
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.8",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Gribba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "Found this weird note down in the pit. Smelled like old peanut butter and sadness, so I figured it was Pickle\'s. Can\'t read none of it, though. Words get all slippery in my brain. Think you can read it?",
                    complete: "Hmph. So there IS something down there. Just holler if it grabs your leg alright?"
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
                                    text: 'Something Lives Below',
                                },
                                subtitle: {
                                    text: "By Pickle",
                                },
                                passage: {
                                    text:   "There\'s something living at the bottom of the ball pit. I don\'t know what it is, but I think it\'s always been there.\
                                    <br>\
                                    One time, I felt something brush against my leg. It was soft and slow, like a fish gliding by. I have a pet fish, actually, so I know what that feels like. His name is Carlos. He mostly hides behind the rock in his tank.\
                                    <br>\
                                    I\'ve accidentally dropped toys in the ball pit: a spinning top, a stuffed bear, even a hula hoop. I never saw them again. Good thing I didn\'t drop my favorite action figure. [<u>It\'s really expensive.] Or my trading cards. I keep those in a sock, for safety.\
                                    <br>\
                                    Once, I heard something breathing way down deep. The sound was low and calm, like it was coming from something having a sad dream. I would know; I dream about sad things all the time. Like moldy corn dogs.\
                                    <br>\
                                    Anyway, I don\'t think it\'s dangerous. I think it\'s just lonely."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
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
                        title: "[<g>1.] The main idea of \"Something Lives Below\" is:",
                        correctIndex: 1,
                        paragraph: [
                            "Pickle felt something brush against his l{e}g",
                            "A sad, lonely {c}reature lives deep in the ball pit",
                            "The ball {p}it is extremely dangerous",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these details supports the main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "\"...I felt s{o}mething brush against my leg.\"",
                            "\"{I} have a pet fish, actually...\"",
                            "\"His name i{s} Carlos.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] The underlined sentence also supports the main idea. True or false?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>4.] What\'s another supporting detail?",
                        correctIndex: 1,
                        paragraph: [
                            "\"I keep those in a sock, for {s}afety.\"",
                            "\"...it was {d}reaming about something sad.\"",
                            "\"Like m{o}ldy corn dogs.\"",
                        ],
                    },
                ],  
                code: {
                    answer: "COLD",
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
                    text: "Read both passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.5b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Oh, that poor Pickle. He left some scribbly little notes by the swing set again. I haven\'t read them yet; I can\'t read and swing at the same time, of course! Will you take a peek for me?",
                    complete: "Oh! I never thought of puddles that way before. That\'s actually... sort of beautiful."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "merriwig.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'How to Befriend a Puddle',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "To make friends with a puddle, you must be quiet and patient. Stand still, [<u>like a statue in a museum].\
                                    <br>\
                                    And whatever you do, always remember: a puddle is a memory from the sky. Treat it like it matters."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "-18%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Where to Find Corn Dogs',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "Corn dogs are everywhere if you know where to look. As long as you put in the effort, you\'ll strike gold soon enough.\
                                    <br>\
                                    First, look inside abandoned lunchboxes. If that doesn\'t work, search the mulch under the slide or check the lost and found box. You never know.\
                                    <br>\
                                    Most importantly: never give up the hunt. If at first you don\'t succeed, try, try again."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "10%",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Read the underlined text in \"How to Befriend a Puddle.\" What kind of figurative language is this?',
                        'B. Pickle uses a metaphor to compare a puddle to a ____ from the sky.',
                        'C. Is \"strike gold\" an [<u>idiom] or a [<u>simile]?',     
                        'D. [<u>Right] or [<u>wrong]: The last sentence of \"Where to Find Corn Dogs\" is a proverb.',                    
                    ],
                    puzzle: [
                        ["(D)R","(C)I","G","H","4T","0","0"],
                        ["0","D","0","0","0","0","0"],
                        ["(A)3S","I","M","I","1L","E","0"],
                        ["0","O","0","0","0","0","0"],
                        ["0","(B)M","E","M","2O","R","Y"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "LOST",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
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
                        "RI.4.4",
                        "RI.4.10",
                        "RL.4.4"
                    ],
                }
            },

            intro: {
                character: "Banana Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "My manual got torn up and hidden YEARS ago. I thought it was gone forever, all part of some plan to make me rust away. But Pickle found the scraps! Can you help me put it back together?",
                    complete: "Well, I owe you one. Just be careful out there, okay?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "banana-gunk-jr.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Your gear box is quite [<u>durable]. It won\'t break anytime soon.",
                                }, 
                                backgroundImage: {
                                    file: "1.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Replace bolts with [<u>identical] ones that are exactly the same.",
                                }, 
                                backgroundImage: {
                                    file: "2.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Never [<u>mislabel] your wires. That can lead to disaster!",
                                }, 
                                backgroundImage: {
                                    file: "3.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Use [<u>pliable] (not stiff) rubber to keep your joints in good shape.",
                                }, 
                                backgroundImage: {
                                    file: "4.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "If properly cared for, your wiring is safe, not [<u>hazardous].",
                                }, 
                                backgroundImage: {
                                    file: "5.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Never let [<u>debris], or bits of trash, get inside your gear box.",
                                }, 
                                backgroundImage: {
                                    file: "6.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Your grease should be [<u>viscous] \u2014 like glue, syrup, or tree sap.",
                                }, 
                                backgroundImage: {
                                    file: "7.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "All of your [<u>removable] panels can easily be taken off.",
                                }, 
                                backgroundImage: {
                                    file: "8.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "If you [<u>malfunction], or stop working right, shut down ASAP!",
                                }, 
                                backgroundImage: {
                                    file: "9.png"
                                }
                            }
                        ],
                    },
                ],  
                style: { 
                    block: {
                        dimension: {
                            width: "puzzleWidth",
                            height: "puzzleHeight",
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
                                size: 'tiny',
                                align: 'center',
                                puzzle: 'default',
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
                        title: "[<g>1.] The underlined word in the middle piece means:",
                        correctIndex: 0,
                        paragraph: [
                            "Dangero{u}s",
                            "{C}areful",
                            "Ver{y} safe",
                        ],
                    },
                    {
                        title: "[<g>2.] What does the underlined word on the bottom left piece mean?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "Thin and r{u}nny",
                            "S{m}all and fragile",
                            "Old and crust{y}",
                            "Thick a{n}d sticky",
                        ],
                    },
                    {
                        title: "[<g>3.] Find the top left piece. What is an antonym for its underlined word?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "S{t}rong",
                            "Brea{k}",
                            "Del{i}cate",
                            "Fa{s}t",
                        ],
                    },
                    {
                        title: "[<g>4.] The underlined word on the top right piece means:",
                        correctIndex: 1,
                        paragraph: [
                            "To label corre{c}tly",
                            "{T}o label wrongly",
                            "None o{f} the above",
                        ],
                    },
                ],  
                code: {
                    answer: "UNIT",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ tunnel slide
        {

            info: {
                type: 'challenge',
                title: 'Tunnel Slide',
                asset: "twisted-tori.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.5",
                        "L.4.5a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.5",
                        "RL.4.6",
                        "RL.4.9",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Twisted Tori",
                asset: "twisted-tori.png",
                dialogue : {
                    incomplete: "There I was, minding my own business, when a couple of notes landed in my lap! Very interesting. I think there\'s a secret code too, but it\'s too dark to tell. Can you take a look for me?",
                    complete: "Whoa... REAL pizza? I haven\'t had one in over thirty years! Thanks dude!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "twisted-tori.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Legends',
                                },
                                subtitle: {
                                    text: 'A Nursery Rhyme',
                                },
                                passage: {
                                    text:   "Tori slid too fast one day,\
                                    <br>\
                                    and vanished in a swirly way.\
                                    <br>\
                                    And now she hides down in the dark,\
                                    <br>\
                                    lurking, hunting, like a shark.\
                                    <br>\
                                    <br>\
                                    They say she creeps down in the deep,\
                                    <br>\
                                    eating spiders as she weeps.\
                                    <br>\
                                    Others swear she\'ll eat you too,\
                                    <br>\
                                    if you come into her view."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Friends',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "I don\'t believe that nursery rhyme.\
                                    <br>\
                                    <br>\
                                    I don\'t really think you\'d eat me,\
                                    <br>\
                                    even though I look like a pickle.\
                                    <br>\
                                    And I bet the spiders are your friends,\
                                    <br>\
                                    even the hairy ones.\
                                    <br>\
                                    Anyway, if I saw you,\
                                    <br>\
                                    I\'d bring a gift. Like pizza.\
                                    <br>\
                                    <br>\
                                    And maybe I could be your friend too."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "4%",
                                rotate: "-4deg",
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
                                translateX: "2%",
                                translateY: "9%",
                                rotate: "-2deg",
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
                        title: "[<g>1.] In \"Friends,\" line 2 has ____ syllables.",
                        word: "EI[G]HT",
                    },
                    {
                        title: "[<g>2.] \"Legends\" uses a ____ to compare Tori to a shark.",
                        word: "SIM[I]LE",
                    },
                    {
                        title: "[<g>3.] Which poem is about choosing kindness over fear?",
                        word: "[F]RIENDS",
                    },
                    {
                        title: "[<g>4.] [<u>Right] or [<u>wrong]: \"Legends\" has a creepy tone.",
                        word: "RIGH[T]",
                    },
                ],
                code: {
                    answer: "GIFT",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ play palace
        {

            info: {
                type: 'challenge',
                title: "Play Palace",
                asset: "king-kevin.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "King Kevin",
                asset: "king-kevin.png",
                dialogue : {
                    incomplete: "Hmph. Some old “friend” left me a note. It's probably full of whining. I haven\'t read it, and I don\'t plan to. If you\'re bored enough, go ahead. But don\'t expect it to matter.",
                    complete: "Fine. Thanks, I guess. Now leave me alone so I can eat these corn chips in peace."
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
                                    text: 'The Corn Chip King',
                                },
                                subtitle: {
                                    text: "By Pickle",
                                },
                                passage: {
                                    text:   "Kevin used to be just a normal goose. He played hide-and-seek in the ball pit, shared jokes on the swing set, and was always the first to help when someone got stuck in the tube slide. He was loud, silly, and a friend.\
                                    <br>\
                                    One day, Kevin found a secret room behind a wall in the jungle gym. Inside was a huge throne, and piles of golden corn chips stacked higher than the highest monkey bars. A nearby sign said it was all for the king. So Kevin sat down, and the room changed. The slides twisted into strange shapes, and the doors led nowhere. It turned into a terrible maze. I couldn\'t get in, but Kevin didn\'t notice. I called for him, but he was too busy snacking and grinning.\
                                    <br>\
                                    Now, Kevin lives alone in his so-called \"palace.\" He has all the chips in the world, but no one to share them with. Pickle\'s Playground has lost a great man \u2014 uh, goose."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
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
                        title: "[<g>1.] At the beginning of the story, Kevin\'s main character trait was:",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Brave{r}y",
                            "Frien{d}liness",
                            "{C}reativity",
                            "Selfis{h}ness",
                        ],
                    },
                    {
                        title: "[<g>2.] Where does this story take place?",
                        correctIndex: 2,
                        paragraph: [
                            "At {n}ight time",
                            "Beneath a huge sli{d}e",
                            "In Pickle\'s Playgro{u}nd",
                        ],
                    },
                    {
                        title: "[<g>3.] This story\'s main conflict is between Kevin and:",
                        correctIndex: 1,
                        paragraph: [
                            "The b{a}ll pit",
                            "Hi{s} own greed",
                            "A door that leads to nowher{e}",
                        ],
                    },
                    {
                        title: "[<g>4.] The theme of \"The Corn Chip King\" is:",
                        correctIndex: 0,
                        paragraph: [
                            "Greed can cause you {t}o lose friends",
                            "Corn chips are {w}orth more than friendship",
                            "Kevin lives alone in the Play {P}alace",
                        ],
                    },
                ],  
                code: {
                    answer: "DUST",
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