const resource =  {

    info: {
        title: "Cupid's Countdown",
        path: "cupids-countdown",
        logo: "resource/cupids-countdown/assets/branding/reading/all/preview-5th-grade.png",
        timerLabel: "SHOW ENDS"
    },

    challengeArray: [

        // ⭐ broken animatronic
        {
            info: {
                type: 'challenge',
                title: "Contestant #1",
                asset: "broken-animatronic.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage and look at the picture, then answer the questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Two Main Ideas and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RL.5.1",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "broken-animatronic.png",
                dialogue : {
                    incomplete: "I spent ages in a junk pile, all rusty and forgotten, trying to remember who I once was \u2014 and now I'm on a TV show! I can't believe it! Are you ready to help me find my secret admirer?",
                    complete: "Ryan? Wait... I... I remember Ryan! Oh, thank you, Dingo Punks \u2014 thank you!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "broken-animatronic.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "To my favorite animatronic, \
                                    <br> \
                                    <br> \
                                    &nbsp &nbsp Remember Pippo's Pizza Palace? You know, that old pizza place we both worked at. I was a chef, but I longed to be in the animatronic band. They weren't just robots \u2014 to me, they were magic. \
                                    <br> \
                                    &nbsp &nbsp The other chefs laughed, \"You're a man, not a machine.\" But I was serious. I built a costume with a tin foil hat, wires wrapped around my arms, and a speaker strapped across my chest. However, when I finally got on stage, everyone just laughed even harder. I felt so small. \
                                    <br> \
                                    &nbsp &nbsp That's when you said \"Nice moves,\" as you wiped a tear from my face. It was then that I knew: I belonged with the animatronics, especially you. \
                                    <br> \
                                    &nbsp &nbsp Melodina. You were the band's lead singer before your voice box cracked. You filled the room with music that melted away every worry. When the band shut down for the last time, I cried beside your motionless frame. Even then, you weren't just a broken animatronic. You were Melodina, just waiting to sing again. \
                                    <br> \
                                    <br> \
                                    <br> \
                                    \u2014 Your secret admirer"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "3%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "cu_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "7%",
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
                            width: "percent43",
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
                                align: 'left',
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
                        title: "[<g>1.] The first main idea is that the narrator feels:",
                        correctIndex: 1,
                        paragraph: [
                            "That the other {c}hefs treated him unfairly",
                            "That he belonged with animat{r}onics, not humans",
                            "That hi{s} costume was very well-made"
                        ],
                    },
                    {
                        title: "[<g>2.] The second main idea is that Melodina was a(n):",
                        correctIndex: 2,
                        paragraph: [
                            "Robot {t}hat would soon be forgotten",
                            "Animatronic whose voice box b{r}oke",
                            "Talented singer who deepl{y} mattered",
                        ],
                    },
                    {
                        title: "[<g>3.] Which line supports the second main idea?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Remember Pippo's Pi{z}za Palace?\"",
                            "\"When the band was shut of{f}...\"",
                            "\"...you weren't just {a} broken animatronic.\"",
                        ],
                    },
                    {
                        title: "[<g>4.] Which main idea is shown in the picture?",
                        correctIndex: 0,
                        paragraph: [
                            "The first mai{n} idea",
                            "The second main ide{a}",
                            "The {p}icture doesn't show either main idea",
                        ],
                    },
                ],  
                code: {
                    answer: "RYAN",
                    userArray: ["","","",""]
                },
            },     
        },

        // ⭐ tater durant
        {
            info: {
                type: 'challenge',
                title: "Contestant #2",
                asset: "tater-durant.png",
                state: "incomplete",
                hint: {
                    text: "Sort each passage into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
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
                        "CCRA.R.10",
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
                character: "Tater Durant",
                asset: "tater-durant.png",
                dialogue : {
                    incomplete: "Oh man, I'm thrilled to be here! Potatoes are my greatest joy \u2014 mashed, fried, you name it! I wonder if my secret admirer loves 'em as much as I do. Wanna help me figure out who it is?",
                    complete: "It's Tara? Wow! This is the second greatest day ever! The first was when I tried my first potato."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Similes, Metaphors,<br>and Hyperbole",
                        "Idioms, Adages,<br>and Proverbs",
                    ],
                    columHeader: 'color-pink-light',
                    asset: {
                        scope: "local",
                        path: "cu_2.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Love Note #31",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your hair is a bucket of fries: greasy, golden, and absolutely delightful.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Love Note #45",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I'm not going to [<u>beat around the bush] \u2014 I'm just going to say it. Will you be mine?",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Love Note #29",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Two heads are better than one, especially when it's you and me!",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Love Note #62",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "There are a billion things I want to to say to you!",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Love Note #23",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Oh, Tater Durant! Loving you feels like opening a treasure chest full of steamy potato pancakes.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Love Note #15",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Honesty is the best policy, and I honestly love you.",
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
                                align: 'left'
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
                        title: "[<g>1.] The simile in love note #23 means:",
                        correctIndex: 2,
                        paragraph: [
                            "Loving Tater {D}urant takes a lot of hard work",
                            "It's exciting to open a t{r}easure chest",
                            "Loving {T}ater Durant feels exciting & comforting",
                        ],
                    },
                    {
                        title: "[<g>2.] Explain the figurative language in note #62.",
                        correctIndex: 0,
                        paragraph: [
                            "\"{A} billion\" is a hyperbole that means \"a lot\"",
                            "\"{A} billion\" is a metaphor that means \"a lot\"",
                            "There is no figura{t}ive language in note #62",
                        ],
                    },
                    {
                        title: "[<g>3.] How many of these love notes contain an idiom, adage, or proverb?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tw{o}",
                            "Th{r}ee",
                            "{F}our",
                            "Fi{v}e",
                        ],
                    },
                    {
                        title: "[<g>4.] The underlined text in note #45 is a(n):",
                        correctIndex: 1,
                        paragraph: [
                            "Adage t{h}at means \"to quickly hide\"",
                            "Idiom that means \"to not s{a}y something directly\"",
                            "Simile that means \"to kill a {p}lant\"",
                        ],
                    },
                ],  
                code: {
                    answer: "TARA",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ stefan sage
        {
            info: {
                type: 'challenge',
                title: "Contestant #3",
                asset: "stefan-sage.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry and Informational Text",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.4",
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
                        "RI.5.1",
                        "RI.5.5",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "stefan-sage.png",
                dialogue : {
                    incomplete: "Oh joy, look at this! A game, you say? I'm old and brittle, but I'll play today. Perhaps my admirer will bring some cheer. Shall we find out their name, my dear?",
                    complete: "My admirer is Tess? What a lovely surprise! Thank you \u2014 my day feels brighter than the skies!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "stefan-sage.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Upward',
                                },
                                subtitle: {
                                    text: 'By Stefan\'s secret admirer',
                                },
                                passage: {
                                    text:   "[<tal>It begins with a seed, \
                                    <br> \
                                    small and full of promise, \
                                    <br> \
                                    breaking through the soil, \
                                    <br> \
                                    reaching for light. \
                                    <br> \
                                    <br> \
                                    Rain splashes! \
                                    <br> \
                                    Winds whoosh! \
                                    <br> \
                                    Snow crunches! \
                                    <br> \
                                    Hail clatters! \
                                    <br> \
                                    <br> \
                                    Through every storm, it grows stronger, \
                                    <br> \
                                    roots digging deep, branches stretching wide. \
                                    <br> \
                                    Over time, it stands tall, \
                                    <br> \
                                    offering shelter and connection. \
                                    <br> \
                                    <br> \
                                    Love, like a tree, grows and thrives, \
                                    <br> \
                                    built on care, understanding, and time.]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'How to Love',
                                },
                                subtitle: {
                                    text: 'By Stefan\'s secret admirer',
                                },
                                passage: {
                                    text:   "First, meet someone special. Love begins when you find someone who brings you joy and makes you feel appreciated. \
                                    <br> \
                                    <br> \
                                    Then, spend time getting to know them. By listening carefully, you can learn what makes them unique and special. \
                                    <br> \
                                    <br> \
                                    Next, start building a connection. Find things you both enjoy and share experiences that help you grow closer. \
                                    <br> \
                                    <br> \
                                    Finally, show that you care. Be thoughtful and kind, doing little things that bring happiness to each other."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
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
                        'A. To compare love to a tree, what type of figurative language does line 13 of \"Upward\" use?',
                        'B. The theme of both passages is that _____ grows with care and time.',
                        'C. In contrast to the poem, does \"How to Love\" show this theme in a way that\'s more [<u>clever] or [<u>direct]?',     
                        'D. The author of \"How to Love\" used a _____-person point of view to make the steps feel more personal, like they\'re written just for the reader.',                    
                    ],
                    puzzle: [
                        ["0","(A)3S","0","0","0","0","0"],
                        ["(C)D","I","R","E","C","1T","0"],
                        ["0","M","0","0","0","0","0"],
                        ["0","I","0","(B)L","O","V","2E"],
                        ["0","L","0","0","0","0","0"],
                        ["(D)4S","E","C","O","N","D","0"],
                    ]
                },  
                code: {
                    answer: "TESS",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "Contestant #4",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
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
                        "RI.5.10",
                        "RL.5.1",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue : {
                    incomplete: "Man, what a waste of time! On my ONE day off work, I'm stuck here on this ridiculous game show. Ugh... let's just get it over with. Nobody would bother admiring me anyway. You ready?",
                    complete: "Wait \u2014 it's Eryn from the warehouse? You sure? Oh no... Thanks for nothing, buddy."
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
                                passage: {
                                    text: "My dear Grumblegrub, you don't need to be [<u>affable] for me to love you. The fact that you're so grouchy is quite charming!"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-6%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "I used to know very little about insects. So, I became an expert in [<u>entomology] just to understand you better."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Oh Grumblegrub, your enormous [<u>thorax] must hold an even bigger heart!"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "-15%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "With my [<u>hyperawareness], I see what others miss: your warmth, your wit, and the light you bring to every shadow."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "7%",
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
                                translateX: "0%",
                                translateY: "6%",
                                rotate: "-1deg",
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
                            width: "percent35",
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
                        title: "[<g>1.] What is a synonym for thorax?",
                        word: "CH[E]ST",
                    },
                    {
                        title: "[<g>2.] What is an antonym for affable?",
                        word: "G[R]OUCHY",
                    },
                    {
                        title: "[<g>3.] Someone with hyperawareness is ____ aware.",
                        word: "VER[Y]",
                    },
                    {
                        title: "[<g>4.] “Ento” = insect, so entomology is the study of:",
                        word: "I[N]SECTS",
                    },
                ],
                code: {
                    answer: "ERYN",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ terrible topsy
        {
            info: {
                type: 'challenge',
                title: "Contestant #5",
                asset: "topsy.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Elements of a Story",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.5",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.9",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee hee, a game show! This is so exciting, and a little bit terrifying! What if my secret admirer thinks I'm a weirdo? Everyone does! Oh well. Ready to get started?",
                    complete: "Dodo the clown? Oh my, what a thrill. Thanks for helping me figure it out! Hee hee!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "topsy.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'WANTED: TOPSY',
                                },
                                subtitle: {
                                    text: '------ REWARD: $1,000,000 ------ ',
                                },
                                passage: {
                                    text:   "&nbsp &nbsp Topsy was completely reckless. When the floating city of Port Mechana hired her to make some repairs, she ignored safety warnings and tested risky ideas just to prove she was the smartest. This caused the whole floatation system to break, and the entire city sank into the sea. \
                                    <br> \
                                    &nbsp &nbsp Topsy didn't stick around to face the mess she made; she escaped on the pirate ship <em>Storm Breaker</em>. Her sneaky gadgets helped make the pirates unstoppable. So, while the victims of Port Mechana worked hard to rebuild, Topsy was off getting rich and famous. \
                                    <br> \
                                    &nbsp &nbsp Now, there's a big reward for anyone who can bring her back \u2014 dead or alive. \
                                    <br> \
                                    <br> \
                                    - Issued by Bodelia Cog, mayor of New Mechana"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "8%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Clown\'s Tale',
                                },
                                subtitle: {
                                    text: 'By Topsy\'s secret admirer',
                                },
                                passage: {
                                    text:   "&nbsp &nbsp I always liked Topsy. Folks say she's a villain, but they don't know the truth. Port Mechana was already sinking, she just got the blame. People always need someone to point a finger at. \
                                    <br> \
                                    &nbsp &nbsp I get it. I used to work at Dizzydoodle Circus. That place was my prison. Every night, they made me paint my nose red. “A clown without a red nose isn't a clown,” they'd say. A clown <em>with</em> a red nose <em>isn't happy</em>, I'd think. \
                                    <br> \
                                    &nbsp &nbsp One night, I'd had enough. I waited until everyone was snoring, stole the keys, and let all the animals out of their cages. I jumped on Butterscotch the bear and rode into the night. Never looked back! \
                                    <br> \
                                    &nbsp &nbsp I'm no Topsy, but I get her. Sometimes you just have to escape a sinking ship, even if no one else understands why."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "-1deg",
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
                                size: 'small',
                                align: 'left',
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
                        title: "[<g>1.] Which author describes Topsy in a kinder tone?",
                        correctIndex: 1,
                        paragraph: [
                            "Bodelia Co{g}",
                            "Topsy's secret a{d}mirer",
                            "Both auth{o}rs describe her in the same way",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the theme of \"A Clown's Tale?\"",
                        correctIndex: 2,
                        paragraph: [
                            "Animals shoul{d} always be set free",
                            "You can solve your proble{m}s by blaming others",
                            "Sometimes you must escape unfair situati{o}ns",
                        ],
                    },
                    {
                        title: "[<g>3.] How did Topsy respond to Port Mechana sinking?",
                        correctIndex: 2,
                        paragraph: [
                            "She ignored {s}afety warnings",
                            "She became the captain of a pirate sh{i}p",
                            "She escaped aboar{d} a pirate ship",
                        ],
                    },
                    {
                        title: "[<g>4.] Which passage's setting is a circus at night?",
                        correctIndex: 1,
                        paragraph: [
                            "\"WANTED: {T}OPSY\"",
                            "\"A Cl{o}wn's Tale\"",
                            "Neither passa{g}e has that setting",
                        ],
                    },
                ],  
                code: {
                    answer: "DODO",
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