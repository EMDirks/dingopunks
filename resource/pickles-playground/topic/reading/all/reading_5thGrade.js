const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/all/thumbnail-5th-grade.png",
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
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Ideas: Compare and Contrast",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.9",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Gribba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "Found some weird notes down in the pit. Smelled like sadness, so I figured they were Pickle\'s. Can\'t read none of them, though. Words get all slippery in my brain. Think you can read \'em?",
                    complete: "Hmph. So there IS something down there. Just holler if it grabs yer leg alright?"
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
                                    text: 'Something Below',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "There\'s a strange creature living deep within the ball pit. I don\'t know what it is, but I\'m pretty sure it\'s always been there.\
                                    <br>\
                                    One time, I felt it brush against my leg. It was soft and slow, like a huge fish gliding by. I have a pet fish, so I kinda know what that feels like. His name is Carlos. He mostly hides behind the rock in his tank.\
                                    <br>\
                                    I\'ve accidentally dropped toys in the ball pit, and I never saw them again. Good thing I didn\'t drop my favorite action figure. That thing was super expensive. I didn\'t drop my trading cards either. I keep those in a sock (for safety)."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Everything\'s Quiet',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "Once, when everything was completely quiet, I heard the creature in the ball pit breathing. It sounded like it was feeling something really sad.\
                                    <br>\
                                    I feel that way sometimes too. Like no one sees me, even when I\'m right there. Anyway, I don\'t think the creature is scary. I think it\'s just lonely."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "50%",
                                rotate: "3deg",
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
                        title: "[<g>1.] The main idea of \"Something Below\" is:",
                        correctIndex: 1,
                        paragraph: [
                            "Pickle has a {p}et fish",
                            "A mysterious creature lives deep in t{h}e ball pit",
                            "The {c}reature in the ball pit loves to steal toys",
                        ],
                    },
                    {
                        title: "[<g>2.] The main idea of \"Everything\'s Quiet\" is:",
                        correctIndex: 2,
                        paragraph: [
                            "Pickl{e} heard the creature breathing",
                            "Pickle often has sad dream{s}",
                            "Both P{i}ckle and the creature are sad and lonely",
                        ],
                    },
                    {
                        title: "[<g>3.] What do both main ideas have in common?",
                        correctIndex: 1,
                        paragraph: [
                            "Both {m}ention a fish named Carlos",
                            "Both inclu{d}e the creature in the ball pit",
                            "Both have the same {r}hyme scheme",
                        ],
                    },
                    {
                        title: "[<g>4.] Which passage\'s main idea focuses on feelings?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Something {B}elow\"",
                            "\"Everything\'s Qui{e}t\"",
                            "Neithe{r} passage focuses on feelings",
                        ],
                    },
                ],  
                code: {
                    answer: "HIDE",
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
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.5b",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Oh, that poor Pickle. He left some scribbly little notes by the swing set again. I haven\'t read them though; I can\'t hold paper and swing at the same time! Will you kindly take a peek for me?",
                    complete: "Oh! I never saw puddles that way before. That\'s actually... quite lovely."
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
                                    text: 'Befriending a Puddle',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "To befriend a puddle, you must remain quiet and patient. Regardless of what\'s going on around you, just stand completely still; [<u>a tree in the wind].\
                                    <br>\
                                    And whatever you do, always remember: a puddle is like a memory from the sky. Treat it like it matters."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Finding Corn Dogs',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "Corn dogs are basically everywhere if you know where to look. With these three tips, finding one is [<u>a piece of cake]!\
                                    <br>\
                                    First, look inside abandoned lunchboxes. Then, search the soil under a slide. Finally, if neither of the previous ideas work, try checking the lost and found box. People lose all sorts of stuff on the playground.\
                                    <br>\
                                    Most importantly: never lose patience. Good things come to those who wait!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "7%",
                                rotate: "3deg",
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
                        'A. The underlined text in \"Befriending a Puddle\" is a simile. [<u>Right] or [<u>wrong]?',
                        'B. Pickle uses a simile to compare a puddle to a ____ from the sky.',
                        'C. Does the underlined idiom in \"Finding Corn Dogs\" imply that finding a corn dog is [<u>easy] or [<u>hard]?',     
                        'D. Is the last sentence in \"Finding Corn Dogs\" an [<u>idiom], [<u>proverb], or [<u>prefix]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","(B)M","0","0"],
                        ["(D)P","3R","O","V","1E","R","B"],
                        ["0","0","0","0","M","0","0"],
                        ["0","0","(A)W","R","O","3N","G"],
                        ["0","0","0","0","R","0","0"],
                        ["0","(C)E","2A","S","Y","0","0"],
                    ]
                },  
                code: {
                    answer: "EARN",
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
                        "RI.5.4",
                        "RI.5.10"
                    ],
                }
            },

            intro: {
                character: "Banana Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "My manual got torn up and hidden AGES ago. I thought it was lost forever, part of some plan to make me rust away. But Pickle found the scraps! Wanna help me put this thing back together?",
                    complete: "Well, friend, I guess I owe you one. Maybe there\'s hope for me after all."
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
                                    text: "Use [<u>pliable] (not stiff) rubber to keep your joints in good shape.",
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
                                    text: "When properly cared for, your electronics are safe, not [<u>hazardous]. ",
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
                                    text: "Never [<u>mislabel] your wires. That\'s a disaster waiting to happen.",
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
                                    text: "Your axles are thick and [<u>stout]. They will never break.",
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
                                    text: "Replace bolts with [<u>interchangeable] ones that are exactly the same.",
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
                                    text: "Your motor oil must be [<u>transparent], like water or glass.",
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
                                    text: "If you start to [<u>malfunction], power off immediately!",
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
                        title: "[<g>1.] If \"function\" means [<i>to work properly], then \"malfunction\" means:",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "To work {s}lowly",
                            "To {w}ork badly",
                        ],
                    },
                    {
                        title: "[<g>2.] The underlined word on the top left piece means:",
                        correctIndex: 1,
                        paragraph: [
                            "C{o}ndition",
                            "Fl{e}xible",
                            "Stif{f}",
                        ],
                    },
                    {
                        title: "[<g>3.] Find the underlined word on the bottom left piece. Which of these words is a synonym?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "{D}ark",
                            "Che{w}y",
                            "C{l}ear",
                            "Smell{y}",
                        ],
                    },
                    {
                        title: "[<g>4.] The underlined word on the center piece means:",
                        correctIndex: 0,
                        paragraph: [
                            "I{d}entical",
                            "E{x}pensive",
                            "Saf{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "WELD",
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
                    text: "Read both poems, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.5.3",
                        "L.5.5",
                        "L.5.5a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.4",
                        "RL.5.5",
                        "RL.5.7",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Twisted Tori",
                asset: "twisted-tori.png",
                dialogue : {
                    incomplete: "There I was, minding my own business, when a couple of notes came flying down the slide and landed in my lap! I think there\'s a secret code too, but it\'s too dark to tell. Can you take a look?",
                    complete: "Whoa... REAL pizza? I haven\'t had one in over thirty years! I hope there\'s pepperoni..."
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
                                    text: 'Slide',
                                },
                                subtitle: {
                                    text: 'An Urban Legend',
                                },
                                passage: {
                                    text:   "Tori was gone in a breath, they say \u2014\
                                    <br>\
                                    a page torn free and swept away.\
                                    <br>\
                                    She climbed the slide and slipped inside,\
                                    <br>\
                                    its open mouth so dark and wide.\
                                    <br>\
                                    <br>\
                                    They say she creeps down in the deep,\
                                    <br>\
                                    eating spiders as she weeps.\
                                    <br>\
                                    Others swear she\'ll chomp you too,\
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
                                    text:   "I don\'t believe that old urban legend.\
                                    <br>\
                                    <br>\
                                    I don\'t really think you\'d eat me,\
                                    <br>\
                                    even though I look like a pickle.\
                                    <br>\
                                    And I bet the spiders are your friends,\
                                    <br>\
                                    especially the hairy ones.\
                                    <br>\
                                    <br>\
                                    Well, if I saw you,\
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
                        title: "[<g>1.] The speaker of \"Friends\" is named:",
                        word: "PICK[L]E",
                    },
                    {
                        title: "[<g>2.] What figurative language is in line 2 of \"Slide\"?",
                        word: "METAPH[O]R",
                    },
                    {
                        title: "[<g>3.] Stanza ___ of \"Slide\" is about how Tori got lost.",
                        word: "O[N]E",
                    },
                    {
                        title: "[<g>4.] Which poem has a friendly, understanding tone?",
                        word: "FRI[E]NDS",
                    },
                ],
                code: {
                    answer: "LONE",
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
                character: "King Kevin",
                asset: "king-kevin.png",
                dialogue : {
                    incomplete: "Hmph. Some old “friend” left me a ridiculous note \u2014 probably full of whining. I haven\'t read it, and frankly, I don\'t plan to. If you\'re bored enough, go ahead. But don\'t expect it to matter.",
                    complete: "Yeah, fine. Thanks. Now leave me alone so I can eat these corn chips in peace."
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
                                    text:   "Kevin used to be just a regular old goose. He played hide-and-seek in the ball pit, shared jokes on the swing set, and was always first on the scene when someone got stuck in the tube slide. He was loud, goofy, and a really good friend.\
                                    <br>\
                                    One day, Kevin found a mysterious room behind a fake wall in the jungle gym. Inside was a massive throne, and piles of golden corn chips stacked higher than the highest monkey bars. A nearby signpost said it was \"all for the king.\" So Kevin plopped down on the throne, and the room changed in an instant. The slides twisted into terrible shapes, and the doors no longer opened to anywhere. It transformed into a horrifying maze that I couldn\'t navigate, but Kevin didn\'t notice. I called out to him, but he was too busy crunching and grinning.\
                                    <br>\
                                    Now it\'s sunset, and I\'m watching the sky turn orange over Pickle\'s Playground. Somewhere deep in his \"palace,\" Kevin is sitting all alone with his piles of corn chips. He has all the snacks he could ever want, but no one to share them with. We truly lost a great goose."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "2%",
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
                        title: "[<g>1.] What is the setting of this story\'s 3rd paragraph?",
                        correctIndex: 2,
                        paragraph: [
                            "A pile {o}f corn chips",
                            "The sky a{b}ove Kevin\'s palace",
                            "Pi{c}kle\'s Playground at sunset",
                        ],
                    },
                    {
                        title: "[<g>2.] How did Kevin\'s character change in this story?",
                        correctIndex: 1,
                        paragraph: [
                            "He changed from shy to c{o}nfident",
                            "{H}e changed from friendly to selfish",
                            "He changed fro{m} sleepy to alert",
                        ],
                    },
                    {
                        title: "[<g>3.] This story\'s main conflict is between Kevin and:",
                        correctIndex: 1,
                        paragraph: [
                            "The b{a}ll pit",
                            "H{i}s own greed",
                            "A secret {r}oom",
                        ],
                    },
                    {
                        title: "[<g>4.] The theme of \"The Corn Chip King\" is:",
                        correctIndex: 0,
                        paragraph: [
                            "Greed can lead to the loss of friendshi{p}",
                            "Kevin used to be {a} regular goose",
                            "It\'s bette{r} to have corn chips than friends",
                        ],
                    },
                ],  
                code: {
                    answer: "CHIP",
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