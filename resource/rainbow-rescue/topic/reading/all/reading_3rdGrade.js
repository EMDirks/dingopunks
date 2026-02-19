const resource =  {

    info: {
        title: "Rainbow Rescue",
        path: "rainbow-rescue",
        logo: "resource/rainbow-rescue/assets/branding/reading/all/preview-3rd-grade.png",
        timerLabel: "NOCTIS RETURNS"
    },

    challengeArray: [

        // ⭐ sir eggbert
        {

            info: {
                type: 'challenge',
                title: "Eggbert's Hall",
                asset: "sir-eggbert.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                        "L.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.8",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.5",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Sir Eggbert",
                asset: "sir-eggbert.png",
                dialogue : {
                    incomplete: "In order to bring back red to the rainbow, Noctis says I must read a story about loyalty. I\'ve been in many battles, so I know when I need help. Will you join me in this quest?",
                    complete: "Good job, friend. If you see my old boss, Robustus, tell him I haven\'t forgotten his lessons."
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
                                title: {
                                    text: 'Battle of Clover Hill',
                                },
                                subtitle: {
                                    text: 'By Soldier Oggo',
                                },
                                passage: {
                                    text:   "Let me tell you a story about my king. His name is Grob, and he\'s the worst! He led us goblins to fight the leprechauns on Clover Hill. \"We\'ll be rich!\" he said. But when the leprechauns started firing their cannons (which smelled like burnt cupcakes) guess what Grob did? He ran away like his pants were on fire! \
                                    <br> \
                                    [<u>The rest of us were left behind.] Gibby got smacked by a log, Skree fell into a muddy hole, and poor Old Bork... he got zapped by rainbow magic and ended up with sparkly eyebrows. It was the worst thing I ever saw. \
                                    <br> \
                                    One leprechaun had a hat so tall, I thought it might poke a hole in the sky. What does he keep in there? Snacks? A pet frog? An extra pair of underwear? Who knows! \
                                    <br> \
                                    And where was Grob? Probably hiding under his bed. Next time, he can fight his own battles. We goblins deserve better!"
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
                            width: "percent60",
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
                        title: "[<g>1.] What is the main idea of \"Battle of Clover Hill?\"",
                        correctIndex: 0,
                        paragraph: [
                            "Grob ran off and left his goblins to {f}ight alone",
                            "Grob wanted t{o} get rich",
                            "Old Bor{k} ended up with sparkly eyebrows",
                        ],
                    },
                    {
                        title: "[<g>2.] Which details supports this main idea?",
                        correctIndex: 2,
                        paragraph: [
                            "\"\'We\'ll be ric{h}!\' he said.\"",
                            "\"...which smelled like burnt c{u}pcakes.\"",
                            "\"He ran away l{i}ke his pants were on fire.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: the underlined sentence is another supporting detail.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "T{r}ue",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: every sentence in paragraph 3 supports the main idea.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tr{u}e",
                            "Fals{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "FIRE",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ madame mystica
        {

            info: {
                type: 'challenge',
                title: "Mystic Hideaway",
                asset: "madame-mystica.png",
                state: "incomplete",
                hint: {
                    text: "Reach both passages, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Similes and Metaphors",
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
                        "L.3.5a",
                        "L.3.6",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.4",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "To bring orange to the rainbow, Noctis wants me to face my past mistakes. I don\'t think I can do this alone. Will you help me?",
                    complete: "Thank you for helping me, young one. Now I know the truth."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "madame-mystica.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "1.png",
                                },
                            },
                            {
                                title: {
                                    text: "Rewards",
                                },
                                passage: {
                                    text: "Yesterday, Madame Mystica said, \"Tomorrow morning, the leprechauns will find a pot of gold at the end of the rainbow \u2014 [<u>as sure as a rabbit hops!]\" But instead, the leprechauns searched all day and found nothing, like fishermen casting their nets into an empty sea.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-5%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Clovers",
                                },
                                passage: {
                                    text: "Last winter, Madame Mystica said, \"In the spring, four-leaf clovers will pop up everywhere, [<u>a field full of little green stars.] You won\'t believe how many there will be!\" But when spring came, there weren\'t any four-leaf clovers to be found. The field was empty; a stage with no actors.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "2%",
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
                            dimension: {
                                width: "percent12",
                                height: "auto",
                            }
                        },
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
                                width: "percent85",
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
                        'A. Is the underlined part of \"Rewards\" a [<u>simile] or a [<u>metaphor]?',
                        'B. In all, are there [<u>one] or [<u>two] similes in \"Rewards?\"',
                        'C. [<u>True] or [<u>false]: the underlined part of \"Clovers\" is a metaphor.',     
                        'D. In \"Clovers,\" another metaphor is used to compare an empty field to a stage with no _____ .',                    
                    ],
                    puzzle: [
                        ["(D)2A","0","0","0","0","0","0"],
                        ["C","0","0","0","0","0","(B)3T"],
                        ["(C)T","R","U","4E","0","0","W"],
                        ["O","0","0","0","0","0","O"],
                        ["R","0","0","0","0","0","0"],
                        ["(A)S","I","M","I","1L","E","0"],
                    ]
                },  
                code: {
                    answer: "LATE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ sparklepants
        {

            info: {
                type: 'challenge',
                title: "Sparkle Cave",
                asset: "sparklepants.png",
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
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.2",
                        "RL.3.5",
                        "RL.3.6",
                        "RL.3.9",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Sparklepants",
                asset: "sparklepants.png",
                dialogue : {
                    incomplete: "Oh, Noctis! She says I have to do a challenge to \"learn my lesson\" and bring back yellow. What a pain! Let\'s just get it done.",
                    complete: "Well, now I\'ve got some thinking to do. Maybe I don\'t need that sparkleshirt after all..."
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
                                    text: 'Look Out',
                                },
                                subtitle: {
                                    text: 'By Noctis',
                                },
                                passage: {
                                    text:   "Sparklepants, look out! \
                                            <br> \
                                            Greed holds you back. The lesson? \
                                            <br> \
                                            Giving sets you free."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Giving',
                                },
                                subtitle: {
                                    text: 'By Noctis',
                                },
                                passage: {
                                    text:   "What\'s the point of gems so bright? \
                                    <br> \
                                    They\'ll never make your problems right. \
                                    <br> \
                                    The more you take, the more you\'ll lose. \
                                    <br> \
                                    Greed is a trap, not the path to choose. \
                                    <br> \
                                    <br> \
                                    A vase of glittering gold won\'t stay, \
                                    <br> \
                                    and greed will steal your smile away. \
                                    <br> \
                                    So let it go, and you will see, \
                                    <br> \
                                    giving brings joy endlessly!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "0%",
                                rotate: "3deg",
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
                                translateX: "7%",
                                translateY: "-2%",
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
                        title: "[<g>1.] How many syllables are in line 2 of \"Look Out?\"",
                        word: "SE[V]EN",
                    },
                    {
                        title: "[<g>2.] What is the rhyme scheme of \"Giving?\"",
                        word: "A[A]BB",
                    },
                    {
                        title: "[<g>3.] True or false: Sparklepants wrote both poems.",
                        word: "FAL[S]E",
                    },
                    {
                        title: "[<g>4.] Both poems are all about letting go of _____ .",
                        word: "GRE[E]D",
                    },
                ],
                code: {
                    answer: "VASE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ sunny snap
        {

            info: {
                type: 'challenge',
                title: "Sunny's Office",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
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
                        "RF.3.3d",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4c",
                        "RI.3.1",
                        "RI.3.4",
                        "RL.3.1",
                        "RL.3.4",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Just my luck... Noctis is back! She gave me a weird magic symbol on a piece of paper, but it\'s all torn up! To bring back the color green, we have to fix it. Can you help?",
                    complete: "Ugh, how did you make that look so easy? Thanks for the help, though."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "sunny-snap.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The pot of gold [<u>glimmered] and shined.",
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
                                    text: "Sometimes, a [<u>shamrock] (clover) has four leaves.",
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
                                    text: "Hopefully your year will be full of luck, not [<u>misfortune].",
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
                                    text: "Don\'t be so [<u>miserable]. Instead, be happy!",
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
                                    text: "The rain made my clothes all [<u>waterlogged] \u2014 they\'re so soggy!",
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
                                    text: "Leprechauns are quite [<u>diminutive], standing only two feet tall.",
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
                                    text: "This is a day of [<u>merrymaking], not boredom!",
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
                                    text: "We will build a fire on top of the [<u>hearthstone].",
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
                                    text: "The foolish leprechaun wanted to cast an [<u>untested] spell.",
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
                        title: "[<g>1.] Find the puzzle piece with the three stars. What does its underlined word mean?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "Very {l}oud",
                            "Bored and sle{e}py",
                            "Gree{n}ish-yellow",
                            "S{h}ort and small",
                        ],
                    },
                    {
                        title: "[<g>2.] Find the puzzle piece with the three moons. What is a synonym of \"shamrock?\"",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Leav{e}s",
                            "Cl{o}ver",
                            "{F}our",
                            "Pla{n}t",
                        ],
                    },
                    {
                        title: "[<g>3.] Which piece has a word that means \"soggy?\"",
                        correctIndex: 0,
                        paragraph: [
                            "The center {p}iece",
                            "The botto{m} left piece",
                            "The piece with the three rin{g}s",
                        ],
                    },
                    {
                        title: "[<g>4.] If \"un-\" means [<i>not], then \"untested\" means: ",
                        correctIndex: 0,
                        paragraph: [
                            "Not t{e}sted",
                            "Teste{d} often",
                            "Fo{o}lish",
                        ],
                    },
                ],  
                code: {
                    answer: "HOPE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ charm
        {

            info: {
                type: 'challenge',
                title: "Secret Workshop",
                asset: "charm.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Elements of a Story",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.9",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "C.H.A.R.M.",
                asset: "charm.png",
                dialogue : {
                    incomplete: "Task: Bring blue, indigo, and violet back to the rainbow. How: Read story carefully. Failure: not an option. Need help from Puzzle Punks!",
                    complete: "Task complete. Colors are back. I feel proud. Thank you for helping."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "charm.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Charming Story',
                                },
                                subtitle: {
                                    text: "By Noctis",
                                },
                                passage: {
                                    text:   "Hollow Jack wasn\'t just an old robot. He was the hardest worker on Candlewick\'s Farm. He carefully packed crops for the market, fixed broken tools, and even shooed away mice gently. The other workers made fun of how rusty he was, but Jack didn\'t care. \
                                    <br> \
                                    One evening, the ground started to shake. From the dark caves of the Undermurk, a swarm of giant slugs came out! The farm workers were scared and ran away, but Hollow Jack stayed. He set up glowing lights to guide the slugs away from the crops, saving the farm without hurting a single creature. \
                                    <br> \
                                    Candlewick was amazed by Jack\'s actions. To thank him for saving the farm, she gave him a big upgrade. That\'s how Hollow Jack became C.H.A.R.M. \u2014 [<i>the Colorful Hologram and Rainbow Machine]. His rusty body was now shiny and full of color! \"You\'ve done more for this farm than anyone,\" Candlewick said. \"But now, the world needs your light.\" \
                                    <br> \
                                    When C.H.A.R.M. left the farm for good, the workers who used to tease him shook his hand. They even called him a hero. His kindness, patience, and hard work had made him special. Now, he was ready to bring hope and light to the world!"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-2%",
                                rotate: "1deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'metal',
                            padding: "default"
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
                        title: "[<g>1.] Who is the author of \"A Charming Story?\"",
                        correctIndex: 0,
                        paragraph: [
                            "No{c}tis",
                            "Hollow {J}ack",
                            "C{a}ndlewick",
                        ],
                    },
                    {
                        title: "[<g>2.] A setting is a story's time and place. What is the [<i>place] for this story?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "An {o}ld factory",
                            "Candlewick\'s Fa{r}m",
                            "The U{n}dermurk",
                            "The entire {w}orld",
                        ],
                    },
                    {
                        title: "[<g>3.] Why did Candlewick upgrade Hollow Jack?",
                        correctIndex: 1,
                        paragraph: [
                            "To stop the other wor{k}ers from teasing him",
                            "To thank him f{o}r saving the farm",
                            "To use up some extra paint she ha{d}",
                        ],
                    },
                    {
                        title: "[<g>4.] What are C.H.A.R.M.'s character traits?",
                        correctIndex: 0,
                        paragraph: [
                            "Kind, {p}atient, and brave",
                            "Play{f}ull, silly, and loud",
                            "Greedy, ca{r}eless, and lazy",
                        ],
                    },
                ],  
                code: {
                    answer: "CROP",
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