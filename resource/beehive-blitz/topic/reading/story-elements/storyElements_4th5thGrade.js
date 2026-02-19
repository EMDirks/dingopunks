const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/reading/story-elements/preview-4th-5th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ basil rabbit
        {
            info: {
                type: 'challenge',
                title: "Honey Vats",
                asset: "basil-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle, then read the story, using it to answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Setting",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "Oh no! I'm supposed to help the bees collect nectar, but my map of the valley got torn to bits. I've been trying to put it back together, but it's too confusing. Can you help me? We need to hurry!",
                    complete: "Oh, thank you! Your help means the hive won't fall apart, and neither will I... hopefully."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "basil-rabbit-2.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Bees darted through the valley.",
                                }, 
                                backgroundImage: {
                                    file: "10.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Each moved quickly, gathering nectar.",
                                }, 
                                backgroundImage: {
                                    file: "11.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Soon, dark clouds crept into the evening sky.",
                                }, 
                                backgroundImage: {
                                    file: "12.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The air grew thick as the horizon swallowed the sun.",
                                }, 
                                backgroundImage: {
                                    file: "13.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Just then, a young bee rested on a daisy.",
                                }, 
                                backgroundImage: {
                                    file: "14.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "\"Keep going,\" an older bee buzzed.",
                                }, 
                                backgroundImage: {
                                    file: "15.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "They hurried back toward the hive as raindrops fell.",
                                }, 
                                backgroundImage: {
                                    file: "16.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "And the valley grew quiet...",
                                }, 
                                backgroundImage: {
                                    file: "17.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "...waiting for the storm to unleash its fury.",
                                }, 
                                backgroundImage: {
                                    file: "18.png"
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
                                size: 'small',
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
                        title: "[<g>1.] What is the <em>time</em> of this story?",
                        correctIndex: 2,
                        paragraph: [
                            "Mo{r}ning",
                            "Afterno{o}n",
                            "Evenin{g}",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the <em>place</em> of this story?",
                        correctIndex: 0,
                        paragraph: [
                            "A v{a}lley of flowers",
                            "A storm cloud in the s{k}y",
                            "Inside t{h}e mind of an old bee",
                        ],
                    },
                    {
                        title: "[<g>3.] Given your answers to #1 and #2, which of these things would most likely <em>not</em> exist in this setting?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "Sw{a}ying grasses",
                            "Cree{p}ing shadows",
                            "Bright sun{l}ight",
                            "Dar{k} skies",
                        ],
                    },
                    {
                        title: "[<g>4.] This story's environment creates a ______ mood.",
                        correctIndex: 0,
                        paragraph: [
                            "Nervous and urg{e}nt",
                            "Pea{c}eful and calm",
                            "{S}illy and lighthearted",
                        ],
                    },
                ],  
                code: {
                    answer: "GALE",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ riff wingman
        {
            info: {
                type: 'challenge',
                title: "Riff's Study",
                asset: "riff-wingman.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Theme and Key Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.5",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "My old professor, Dr. Mandible, just got an article published in the paper. And now she's acting like the biggest bee in the hive! Pfft. My poem's way better. Don't believe me? Take a look.",
                    complete: "Huh. I'm impressed you could comprehend my complex composition. Nice one."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "riff-wingman.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Bees Before the Storm',
                                },
                                subtitle: {
                                    text: 'by Riff Wingman',
                                },
                                passage: {
                                    text: "Zeebo buzzed from flower to flower, \
                                    <br> \
                                    flying fast with all her power. \
                                    <br> \
                                    Nimbus was slow — cautious and sweet, \
                                    <br> \
                                    prepared for every clover she'd meet. \
                                    <br> \
                                    <br> \
                                    \"The storm is close,\" said Nimbus, shy, \
                                    <br> \
                                    as Zeebo zoomed across the sky. \
                                    <br> \
                                    The wind grew strong \u2014 Zeebo was tired! \
                                    <br> \
                                    And Nimbus was safe, just as desired."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'How Bees Prepare',
                                },
                                subtitle: {
                                    text: 'by Dr. Mandible',
                                },
                                passage: {
                                    text: "&nbsp &nbsp &nbsp Bees have a knack for sensing when a storm is on the way. When the air gets heavy or humid, they pick up the pace, gathering nectar as quickly as possible. Flying in bad weather is tough, so they'll stock up before the storm hits. \
                                    <br> \
                                    &nbsp &nbsp &nbsp Once back at the hive, bees use their special stomachs to turn nectar into nutritious honey. That way, when the storm rolls in, the bees can huddle safely inside. They rely on their honey stores to keep the colony going until it's safe to fly again. Preparation is the key to safety!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "-10%",
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
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'small',
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
                        title: "[<g>1.] What is the theme of Riff Wingman's poem?",
                        correctIndex: 1,
                        paragraph: [
                            "Moving quic{k}ly is always the best idea",
                            "Being ca{r}eful and patient can keep you safe",
                            "Two bees collecte{d} nectar",
                        ],
                    },
                    {
                        title: "[<g>2.] Which line from the poem supports this theme?",
                        correctIndex: 2,
                        paragraph: [
                            "Line o{n}e",
                            "{L}ine five",
                            "L{i}ne eight",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the theme of Dr. Mandible's article?",
                        correctIndex: 2,
                        paragraph: [
                            "Na{t}ure is extremely beautiful",
                            "Bees fly fa{s}ter in bad weather",
                            "In or{d}er to stay safe, it's important to prepare",
                        ],
                    },
                    {
                        title: "[<g>4.] How are these two themes similar?",
                        correctIndex: 0,
                        paragraph: [
                            "Both describe ways to stay saf{e}",
                            "Both f{o}cus on the importance of flowers",
                            "Bo{t}h take place in the outdoors",
                        ],
                    },
                ],  
                code: {
                    answer: "RIDE",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ sunny snap
        {
            info: {
                type: 'challenge',
                title: "Accounting Dept.",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, using the secret code to figure out the mystery words. Then, answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Plot, Conflict, and Events",
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
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "I'm Sunny Snap, the hive's accountant. I've got money to count and documents to organize, but this one's full of some weird secret code. I'm WAY too busy to figure it out \u2014 can you help?",
                    complete: "Grumblegrub's gonna hate me, but that's the job. May you be as lucky as a leprechaun!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sunny-snap.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Grumblegrub, the grumpiest warehouse manager in the hive, was in distress. His &nbsp[<p>KEYS] were missing, and without them, the hive's operations had ground to a halt! Just then, a mischievous laugh rang out, and Grumblegrub spotted a small creature darting away, the &nbsp[<p>KEYS] jingling in his hands. \
                                    <br> \
                                    Determined to reclaim them, Grumblegrub chased after the thief through clover fields and mushroom groves. After a long pursuit, Grumblegrub cornered him. It was a &nbsp[<p>LEPRECHAUN]! And with a swift toss of honey, Grumblegrub trapped him in a sticky mess. Defeated, the creature reluctantly handed over what he had stolen. Curious &nbsp[<p>BEES] buzzed with delight, mocking his shameful fate. \
                                    <br> \
                                    As Grumblegrub prepared to leave, something shiny caught his eye. A pot of &nbsp[<p>GOLD] sat nearby! With a sly grin, he hauled it back to the warehouse, hiding it behind barrels of honey. With the the hive back in action, Grumblegrub chuckled \u2014 while the &nbsp[<p>LEPRECHAUN] plotted revenge."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
                                rotate: "1deg",
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
                                translateX: "8%",
                                translateY: "0%",
                                rotate: "-3deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What caused Grumblegrub to be \"in distress?\"",
                        correctIndex: 1,
                        paragraph: [
                            "He woke up {g}rumpy",
                            "His keys were s{t}olen",
                            "{H}e didn't feel like working",
                        ],
                    },
                    {
                        title: "[<g>2.] During the story's climax, who was defeated?",
                        correctIndex: 2,
                        paragraph: [
                            "Gr{u}mblegrub",
                            "Curious be{e}s",
                            "A lep{r}echaun",
                        ],
                    },
                    {
                        title: "[<g>3.] During the falling action, what did Grumblegrub steal in return?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "{K}eys",
                            "Hon{e}y",
                            "{A} pot of gold",
                            "A pot of {m}old",
                        ],
                    },
                    {
                        title: "[<g>4.] The conflict in this story is between:",
                        correctIndex: 2,
                        paragraph: [
                            "The warehous{e} and the hive",
                            "Grumble{g}rub and his own internal fears",
                            "Grumblegrub and a pesky le{p}rechaun",
                        ],
                    },
                ],  
                code: {
                    answer: "TRAP",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ queen bella
        {
            info: {
                type: 'challenge',
                title: "Throne Room",
                asset: "queen-bella.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Character Traits and Point of View",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
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
                        "RL.4.3",
                        "RL.4.6",
                        "RL.4.9",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "I received a letter from Gustav the storm cloud. He wants peace, but I do not trust him. Read his letter, then compare it with my own experience. Help me decide what's best for my bees.",
                    complete: "I will do whatever it takes to keep my hive safe, even if that means making difficult choices."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "queen-bella.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Dear Queen Bella, \
                                    <br> \
                                    <br> \
                                    &nbsp &nbsp &nbspI hover at the edge of the horizon, watching the bees scramble below, and I feel fear in the air. Why do you hate me so much? Without rain, flowers cannot grow. Without flowers, there is no nectar. Without nectar, you have no honey. \
                                    <br> \
                                    &nbsp &nbsp &nbspI am no threat. My rain brings renewal. But I know your grudge is too deep, and any chance of peace seems as distant as thunder. \
                                    <br> \
                                    <br> \
                                    Yours truly, \
                                    <br> \
                                    Gustav the Storm Cloud"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-8%",
                                rotate: "-5deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Bella\'s First Encounter With Gustav',
                                },
                                subtitle: {
                                    text: 'By Hive Historian Rita Stinger',
                                },
                                passage: {
                                    text: "&nbsp &nbsp &nbspQueen Bella will never forget the fateful day when Gustav first attacked Bumbleburg Hive. As a young bee, she saw his lightning tear through the sky and smash the hive's delicate walls, leaving her home in ruins. \
                                    <br> \
                                    &nbsp &nbsp &nbspThat terrible experience made her into the queen she is today. Now, she enforces strict training for all her bees, preparing them for every threat. \
                                    <br> \
                                    &nbsp &nbsp &nbspOne thing is for sure: she'll do whatever it takes to keep the hive safe. Her rules leave no room for error, and that's what she believes is best for the hive!"
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
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'small',
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which of these character traits best describes Queen Bella: [<u>clever], [<u>strict], or [<u>humble]?',
                        'B. Gustav\'s letter to Queen Bella is written from a _____ person perspective. ',
                        'C. [<u>True] or [<u>false]: in these two passages, only Queen Bella claims to be doing what\'s best for the hive.',     
                        'D. Despite the bees\' fears, Gustav believes that his rain will bring _____ .',                    
                    ],
                    puzzle: [
                        ["(A)S","0","0","0","0","0","0"],
                        ["T","0","0","0","0","(C)F","0"],
                        ["(D)R","3E","N","E","W","A","4L"],
                        ["I","0","0","0","0","L","0"],
                        ["C","0","(B)1F","I","R","S","T"],
                        ["T","0","0","0","0","2E","0"],
                    ]
                },  
                code: {
                    answer: "FEEL",
                    userArray: ["","","",""]
                },
            }
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
        
    ]

}