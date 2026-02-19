const resource =  {
    
    info: {
        title: "Wacky Workshop",
        path: "wacky-workshop",
        logo: "resource/wacky-workshop/assets/branding/reading/all/thumbnail-3rd-grade.png",
        timerLabel: "SANTA LEAVES"
    },

    challengeArray: [

        // ⭐ sir bobble
        {

            info: {
                type: 'challenge',
                title: "Action Figure Workbench",
                asset: "sir-bobble.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.8"
                    ],
                }
            },

            intro: {
                character: "Sir Bobble",
                asset: "sir-bobble.png",
                dialogue : {
                    incomplete: "I am Sir Bobble, the knight with a spring for a neck. Other toys laugh at me... They call me useless. But Santa sent ME a letter, not them! I ask you, good friend \u2014 will you read it to me?",
                    complete: "Bless you for your kindness! If you ever need me, I will stand by your side."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sir-bobble.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Sir Bobble,\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp I\'m sorry to hear you\'re feeling down. Some knights think having a spring for a neck is a bad thing. But I think it\'s useful!\
                                    <br>\
                                    &nbsp &nbsp [<u>For example: you can stretch your neck high to spot trouble.] You can duck away from swords quickly. You can even wiggle your head back and forth to scare your enemies! Oh, and by the way, red is a great color on you.\
                                    <br>\
                                    <br>\
                                    Keep your chin up,\
                                    <br>\
                                    Santa"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
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
                        title: "[<g>1.] What\'s the main idea of this letter?",
                        correctIndex: 0,
                        paragraph: [
                            "Sir Bobble\'s spring neck is usefu{l}",
                            "Sir B{o}bble\'s spring neck is a bad thing",
                            "Sir Bobble can wiggle {h}is head",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the underlined text supports the main idea.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of these lines is also a supporting detail?",
                        correctIndex: 1,
                        paragraph: [
                            "\"I\'m sorry to hear you\'re feel{i}ng down.\"",
                            "\"You can duc{k} away from swords quickly.\"",
                            "\"...red is a {g}reat color on you.\"",
                        ],
                    },
                    {
                        title: "[<g>4.] In all, how many supporting details are there?",
                        correctIndex: 2,
                        paragraph: [
                            "{O}ne",
                            "T{w}o",
                            "Thre{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "LUKE",
                    userArray: ["","","",""]
                },
            }, 

        },

        // ⭐ patchpaw
        {

            info: {
                type: 'challenge',
                title: 'Sewing Workbench',
                asset: "patchpaw.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3a",
                        "RF.3.3b",
                        "RF.3.3c",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4c",
                        "RI.3.4",
                    ],
                }
            },

            intro: {
                character: "Patchpaw",
                asset: "patchpaw.png",
                dialogue : {
                    incomplete: "I usually don\'t mind looking different, but today it\'s making me feel a little down... nobody will ever love me! Mrs. Claus wrote some notes to cheer me up, but I can\'t read. Can you help?",
                    complete: "You know, those notes were just what I needed. I can\'t wait to meet Tina! Thanks!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "patchpaw.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Striped Fabric",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your fabric with stripes is [<u>vibrant], or very bright, which makes you super fun to look at!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fuzzy Fabric",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your fuzzy fabric is [<u>comforting], like a blanket, pillow, or soft scarf.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Button Eye",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your button eye is [<u>unblinking], always open and alert.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-15%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Loose Stitches",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your stitches are loose, but that makes you [<u>flexible]. You\'ll bend, but not break!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "15%",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
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
                                align: 'left'
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
                        'A. [<u>True] or [<u>false]: \"flexible\" means [<i>able to bend, but not break.]',
                        'B. [<u>True] or [<u>false]: a pillow is an example of something that is \"comforting.\"',
                        'C. If \"un-\" means [<i>not], then \"unblinking\" means ___ blinking.',     
                        'D. Which word in the note titled "Striped Fabric" means \"very bright\"?',                    
                    ],
                    puzzle: [
                        ["(D)V","2I","B","R","4A","N","(A)T"],
                        ["0","0","0","0","0","0","R"],
                        ["0","0","0","0","0","0","U"],
                        ["0","(C)3N","0","(B)1T","R","U","E"],
                        ["0","O","0","0","0","0","0"],
                        ["0","T","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "TINA",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ seaweed sally
        {

            info: {
                type: 'challenge',
                title: "Doll Workbench",
                asset: "seaweed-sally.png",
                state: "incomplete",
                hint: {
                    text: "Read both poems, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.2",
                        "RL.3.5",
                        "RL.3.9",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Seaweed Sally",
                asset: "seaweed-sally.png",
                dialogue : {
                    incomplete: "Yeah, I\'m the doll with seaweed for hair. Everyone else gets nice curls, and I\'m stuck smelling like the ocean! Santa and Mrs. Claus wrote me some poems, but I can\'t figure them out. Can you?",
                    complete: "Huh, I never thought seaweed could be so cool. Thanks for proving me wrong."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "seaweed-sally.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Wall So Strong',
                                },
                                subtitle: {
                                    text: 'By Santa',
                                },
                                passage: {
                                    text:   "Seaweed is a wall so strong,\
                                    <br>\
                                    holding shores where they belong.\
                                    <br>\
                                    Storms may roar and tides may rise,\
                                    <br>\
                                    but seaweed guards the beach with pride.\
                                    <br>\
                                    <br>\
                                    Seaweed is a tasty treat:\
                                    <br>\
                                    crunchy, salty, fun to eat.\
                                    <br>\
                                    It wraps up sushi, nice and tight.\
                                    <br>\
                                    Seaweed makes each bite just right."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-20%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Shelter in the Sea',
                                },
                                subtitle: {
                                    text: 'By Mrs. Claus',
                                },
                                passage: {
                                    text:   "It grows in forests under the sea,\
                                    <br>\
                                    like trees beneath the waves.\
                                    <br>\
                                    Fish swim through it.\
                                    <br>\
                                    Crabs rest near its roots.\
                                    <br>\
                                    It isn\'t icky. It\'s home,\
                                    <br>\
                                    a shelter in the sea."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "30%",
                                rotate: "2deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many stanzas does \"A Wall So Strong\" have?",
                        correctIndex: 0,
                        paragraph: [
                            "{T}wo",
                            "{F}our",
                            "Ei{g}ht",
                        ],
                    },
                    {
                        title: "[<g>2.] Line six of \"A Wall So Strong\" has ___ syllables.",
                        correctIndex: 1,
                        paragraph: [
                            "Si{x}",
                            "Sev{e}n",
                            "E{i}ght",
                        ],
                    },
                    {
                        title: "[<g>3.] Both of these poems are about ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "C{r}abs",
                            "S{h}ells",
                            "{S}eaweed",
                        ],
                    },
                    {
                        title: "[<g>4.] \"Shelter in the Sea\" has the rhyme scheme ABAB. True or false?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "TESS",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ yo-yeti
        {

            info: {
                type: 'challenge',
                title: 'Yo-Yo Workbench',
                asset: "yo-yeti.png",
                state: "incomplete",
                hint: {
                    text: "Read both notes, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "L.3.3",
                        "L.3.5a",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.4"
                    ],
                }
            },

            intro: {
                character: "Yo-Yeti",
                asset: "yo-yeti.png",
                dialogue : {
                    incomplete: "Grrrr! Yo-Yeti speaks. Santa made me for power. For purpose! But his message is hidden. Hidden in strange code. Will you help?",
                    complete: "Grrrr! Rene the yeti! Peace will be made! Thank you, friend."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "yo-yeti.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Note A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The Yo-Yeti was made as a gift for a special yeti that lives nearby. [<sal>It is a bridge between two worlds], showing that Santa and the yeti can be friends."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-20%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note B",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The Yo-Yeti is not a normal toy. It\'s made from a gem known only to the most trusted elf in Santa\'s workshop. This gem is called topaz, and [<sal>it\'s as blue as the sky]!"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-5%",
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
                                translateX: "3%",
                                translateY: "0%",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
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
                        title: "[<g>1.] Is the red text in \"Note A\" a [<u>simile] or a [<u>metaphor]?",
                        word: "METAPHO[R]",
                    },
                    {
                        title: "[<g>2.] [<u>True] or [<u>false]: the red text in \"Note B\" is a simile.",
                        word: "TRU[E]",
                    },
                    {
                        title: "[<g>3.] Is the red text in \"Note A\" a literal bridge? [<u>Yes]/[<u>No]",
                        word: "[N]O",
                    },
                    {
                        title: "[<g>4.] Is the [<u>gem] or the [<u>elf] as blue as the sky?",
                        word: "G[E]M",
                    },
                ],
                code: {
                    answer: "RENE",
                    userArray: ["","","",""]
                },
            }          
            
        },

        // ⭐ mister lump
        {

            info: {
                type: 'challenge',
                title: "Crayon Workbench",
                asset: "mister-lump.png",
                state: "incomplete",
                hint: {
                    text: "Read the story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.2",
                        "RL.3.3",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Mister Lump",
                asset: "mister-lump.png",
                dialogue : {
                    incomplete: "The name\'s Mister Lump. Yes, I\'m made of melted crayons \u2014 and no, I don\'t like it. Mrs. Claus gave me a story to make me smile, but I can\'t read it. Will you help?",
                    complete: "Bah! You got me. That story was actually pretty good. Can\'t wait to meet Tony!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "mister-lump.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Gary\'s Dragon',
                                },
                                subtitle: {
                                    text: "By Mrs. Claus"
                                },
                                passage: {
                                    text:   "Gary the Goblin loved crayons more than anything. Every day, he\'d dance inside his cave and shout, \"WHO WANTS TO DRAW?!?\"\
                                    <br>\
                                    One afternoon, while eating a ham and cheese sandwich, Gary decided to draw the most perfect castle ever. At first, it was looking great. But then he pushed too hard, and CRUNCH! His purple crayon snapped in half, and a big messy line cut right across the page. The other goblins cried, \"It\'s ruined!\"\
                                    <br>\
                                    But Gary didn\'t panic. He shouted, \"That\'s not a mistake! That\'s a giant purple dragon!\" He scribbled with all his might, turning the messy line into a huge dragon with claws and wings. As soon as he finished, he nailed the picture to the wall of his cave.\
                                    <br>\
                                    Gary looked at it and smiled. He held up the crayon and said, \"See? A broken crayon doesn\'t have to ruin the picture. You can turn a mistake into something great!\"",
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "7%",
                                rotate: "-2deg",
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
                            width: "percent75",
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
                        title: "[<g>1.] What is the theme of \"Gary\'s Dragon\"?",
                        correctIndex: 2,
                        paragraph: [
                            "Gary is a g{o}blin",
                            "It is a {g}ood idea to panic",
                            "You can turn a mistake in{t}o something great",
                        ],
                    },
                    {
                        title: "[<g>2.] What problem did Gary have?",
                        correctIndex: 1,
                        paragraph: [
                            "His {c}ave was too cold and lonely",
                            "His cray{o}n snapped and made a messy line",
                            "He got {p}urple crayon all over his face",
                        ],
                    },
                    {
                        title: "[<g>3.] Where does this story take place?",
                        correctIndex: 0,
                        paragraph: [
                            "I{n}side a cave",
                            "Near {a} secret forest",
                            "In the basement o{f} a school",
                        ],
                    },
                    {
                        title: "[<g>4.] Gary the Goblin is:",
                        correctIndex: 1,
                        paragraph: [
                            "Quiet, neat, and {s}hy",
                            "Loud, mess{y}, and silly",
                            "A {h}am and cheese sandwich",
                        ],
                    },
                ],  
                code: {
                    answer: "TONY",
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