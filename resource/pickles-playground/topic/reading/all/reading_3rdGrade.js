const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/all/thumbnail-3rd-grade.png",
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
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.2",
                        "RL.3.1",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Gribba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "I found a note down in the ball pit! But I never learned how to read, so I don\'t know what it says. Can you tell me what it\'s all about?",
                    complete: "So there IS something down there! Just yell if it grabs your leg, okay?"
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
                                    text:   "Something lives at the bottom of the ball pit. Nobody knows what it is.\
                                            <br>\
                                            One time, I felt it touch my leg. It was soft and slow, like a fish swimming by. I have a pet fish, so I know what that feels like. His name is Carlos. He likes to hide behind rocks.\
                                            <br>\
                                            I\'ve lost many toys in the ball pit: a spinning top, a stuffed bear, and a hula hoop. I never saw them again. But I didn\'t lose my favorite doll. [<u>It cost a lot of money.] I didn\'t lose my trading cards either. I hide them in a sock to keep them safe.\
                                            <br>\
                                            One day, when it was really quiet, I heard something breathing way down deep. It sounded sad.\
                                            <br>\
                                            I don\'t know what lives at the bottom of the ball pit, but I don\'t think it\'s mean. I think it\'s just lonely."
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
                            "Pickle has a pet f{i}sh",
                            "Something lonely {l}ives deep in the ball pit",
                            "Dolls {c}ost a lot of money",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these details supports the main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "\"...I felt something t{o}uch my leg.\"",
                            "\"I have a pet {f}ish...\"",
                            "\"H{e} likes to hide behind rocks.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] The underlined sentence also supports the main idea. True or false?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "{T}rue",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>4.] What\'s another supporting detail?",
                        correctIndex: 2,
                        paragraph: [
                            "\"His {n}ame is Carlos.\"",
                            "\"I hide the{m} in a sock to keep them safe.\"",
                            "\"I think i{t}\'s just lonely.\"",
                        ],
                    },
                ],  
                code: {
                    answer: "LOST",
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
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.5a",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.4",
                        "RL.3.1",
                        "RL.3.4",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Oh, poor Pickle. He left some little notes by the swing set, but I haven\'t read them. I can\'t hold paper and swing at the same time, of course! Will you read them for me?",
                    complete: "Oh! I never saw puddles that way before. That\'s actually... really sweet."
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
                                    text: 'Puddle Friends',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "To make friends with a puddle, you must be patient. Stand still, [<u>like a tree].\
                                    <br>\
                                    And always remember: a puddle is a gift from the sky. Treat it with love and respect."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
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
                                    text:   "Trust me, corn dogs are everywhere. They\'re like little treasures waiting to be found.\
                                    <br>\
                                    First, look inside old lunchboxes. If that doesn\'t work, search the soil under the slide or check the lost and found box.\
                                    <br>\
                                    No matter what, never give up \u2014 just hurry! I\'m so hungry, I could eat a hippo."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "12%",
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
                        'A. Find the underlined text in \"Puddle Friends.\" Is this a [<u>simile] or a [<u>metaphor]?',
                        'B. In \"Puddle Friends,\" Pickle uses a metaphor to compare a puddle to a ____ from the sky.',
                        'C. [<u>True] or [<u>false]: \"They\'re like little treasures\" is a simile.',     
                        'D. [<u>True] or [<u>false]: The last sentence of \"Where to Find Corn Dogs\" is an example of [<i>literal] language.',                    
                    ],
                    puzzle: [
                        ["(D)F","0","0","0","0","(C)4T","0"],
                        ["A","0","0","0","0","R","0"],
                        ["L","0","0","(B)G","0","U","0"],
                        ["(A)S","I","M","I","3L","E","0"],
                        ["2E","0","0","1F","0","0","0"],
                        ["0","0","0","T","0","0","0"],
                    ]
                },  
                code: {
                    answer: "FELT",
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
                        "CCRA.L.5",
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
                        "L.3.5c",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3a",
                        "RF.3.3c",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4c",
                        "RI.3.4",
                        "RI.3.10",
                    ],
                }
            },

            intro: {
                character: "Banana Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "Years ago, I lost my instruction manual. I thought it was gone forever. But Pickle found the scraps! Can you help me put it back together?",
                    complete: "I can\'t believe it, my instruction manual is complete again. Thanks, Puzzle Punks!"
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
                                    text: "Your gears are very [<u>durable]. They won\'t break easily.",
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
                                    text: "If you feel [<u>uncomfortable], something is probably broken.",
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
                                    text: "Use a big wrench for your toes, and an [<u>enormous] wrench for your legs.",
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
                                    text: "It\'s okay if your engine gets a little hot. Just don\'t let it get [<u>scorching]!",
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
                                    text: "Make sure to store this manual somewhere safe and [<u>secure].",
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
                                    text: "Never [<u>mislabel] your wires. That can cause lots of trouble.",
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
                        title: "[<g>1.] Find the puzzle piece in the very center. The definition of “scorching” is:",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "A li{t}tle hot",
                            "Very {h}ot",
                        ],
                    },
                    {
                        title: "[<g>2.] Find the piece on the top left. What does its underlined word mean?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "W{e}ak",
                            "Bre{a}k",
                            "Str{o}ng",
                            "{F}ast",
                        ],
                    },
                    {
                        title: "[<g>3.] The word \"secure\" on the bottom left piece means:",
                        correctIndex: 2,
                        paragraph: [
                            "Stor{e}",
                            "Ma{n}ual",
                            "{S}afe",
                        ],
                    },
                    {
                        title: "[<g>4.] Find the piece on the top right. If \"un-\" means [<i>not], then \"uncomfortable\" means:",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Not comfortabl{e}",
                            "{V}ery comfortable",
                            "Bro{k}en",
                            "Proba{b}ly",
                        ],
                    },
                ],  
                code: {
                    answer: "HOSE",
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
                    text: "Read the passage, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.5",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Twisted Tori",
                asset: "twisted-tori.png",
                dialogue : {
                    incomplete: "There I was, just hanging out in my slide, when a poem landed in my lap! Very cool. I think there\'s a secret code too, but it\'s too dark in here for me to read it. Can you take a look?",
                    complete: "Whoa... cheese? I haven\'t had cheese in over thirty years. Pickle\'s pretty cool, I guess."
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
                                    text: 'Maybe Cheese',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "I thought you were so strange and wild,\
                                    <br>\
                                    until you looked at me and smiled.\
                                    <br>\
                                    With twisty hair and eyes so bright.\
                                    <br>\
                                    I don't think you'd ever bite.\
                                    <br>\
                                    <br>\
                                    I'd bring you snacks \u2014 maybe cheese?\
                                    <br>\
                                    We'd sit and talk beneath the trees.\
                                    <br>\
                                    We\'d share a slice and swing our feet,\
                                    <br>\
                                    and make that scary slide feel sweet!"
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
                                cryptogram: {
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "12%",
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
                        title: "[<g>1.] Who wrote this poem?",
                        word: "PIC[K]LE",
                    },
                    {
                        title: "[<g>2.] [<u>True] or [<u>false]: this poem\'s rhyme scheme is ABAB.",
                        word: "FALS[E]",
                    },
                    {
                        title: "[<g>3.] This poem rhymes \"feet\" with ____ .",
                        word: "SWE[E]T",
                    },
                    {
                        title: "[<g>4.] In \"Maybe Cheese,\" line 4 has ____ syllables.",
                        word: "SEVE[N]",
                    },
                ],
                code: {
                    answer: "KEEN",
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
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.2",
                        "RL.3.3",
                        "RL.3.5",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "King Kevin",
                asset: "king-kevin.png",
                dialogue : {
                    incomplete: "Some old \"friend\" wrote a story about me. I haven\'t read it, and I don\'t plan to. If you\'re bored enough, go ahead... I won\'t stop you.",
                    complete: "You\'re still here? Leave me alone so I can eat my corn chips in peace."
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
                                    text:   "Kevin used to be the friendliest goose on the playground. He played hide-and-seek in the ball pit, shared jokes on the swing set, and was always the first to help when someone got stuck in the  slide. He was happy, loud, and silly. He was my friend.\
                                    <br>\
                                    One day, Kevin found a secret room behind a wall in the jungle gym. Inside was a shiny golden throne and a huge pile of corn chips. Right away, everything changed. The lights turned off. The slides twisted into weird shapes. The doors locked. I called Kevin\'s name, but he didn\'t answer. He just kept eating his chips, smiling like nothing was wrong.\
                                    <br>\
                                    Now, Kevin lives all alone. He has lots of corn chips, but no one to share them with. Because of greed, he lost all his friends."
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
                        title: "[<g>1.] Where does this story take place?",
                        correctIndex: 1,
                        paragraph: [
                            "A {f}orest",
                            "A {p}layground",
                            "A scho{o}l",
                        ],
                    },
                    {
                        title: "[<g>2.] Who is the main character of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Pickl{e}",
                            "Kev{i}n",
                            "N{o}ne of the above",
                        ],
                    },
                    {
                        title: "[<g>3.] In the first paragraph, Kevin is described as:",
                        correctIndex: 0,
                        paragraph: [
                            "\"happy, loud, and sil{l}y\"",
                            "\"smilin{g} like nothing was wrong\"",
                            "\"{a}ll alone\"",
                        ],
                    },
                    {
                        title: "[<g>4.] The theme of \"The Corn Chip King\" is:",
                        correctIndex: 0,
                        paragraph: [
                            "Gr{e}ed can make you lose friends",
                            "Everyone needs a bi{g} pile of corn chips",
                            "{K}evin was loud and silly",
                        ],
                    },
                ],  
                code: {
                    answer: "PILE",
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