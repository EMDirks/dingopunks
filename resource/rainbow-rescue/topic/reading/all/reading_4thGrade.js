const resource =  {

    info: {
        title: "Rainbow Rescue",
        path: "rainbow-rescue",
        logo: "resource/rainbow-rescue/assets/branding/reading/all/preview-4th-grade.png",
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
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.6",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.5",
                        "RL.4.10",
                    ],
                }
            },

            intro: {
                character: "Sir Eggbert",
                asset: "sir-eggbert.png",
                dialogue : {
                    incomplete: "Noctis wants me to read two tales of loyalty, to prove that I'm worthy of restoring red to the rainbow. I've been in many battles, so I know when I need help. Will you lend a hand?",
                    complete: "Well done, soldier. If you see my old boss, Robustus, tell him I still remember his lessons."
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
                                    text: 'Written By Commander Grob',
                                },
                                passage: {
                                    text:   "&nbsp &nbsp &nbsp Ah, the Battle of Clover Hill. That day, I made a very smart choice. As the leader of the goblin army, I decided to run away when things got tough. It wasn\'t because I was scared \u2014 no, it was because I was smart. My goblins were strong, but the leprechauns had powerful cannons, and we couldn\'t win that fight. \
                                    <br> \
                                    <br> \
                                    &nbsp &nbsp &nbsp I decided to save myself so I could fight again another day. Winning a war means making hard choices. So if anyone says I left my soldiers behind, let me remind you: wars aren\'t won by being brave. They\'re won by being smart. And I\'m very smart. Now, where\'s my supper?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-5%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Betrayal',
                                },
                                subtitle: {
                                    text: 'Spoken by Commander Grob\'s soldiers',
                                },
                                passage: {
                                    text:   "[<u>Soldier Oggo:] \"The Battle of Clover Hill? Worst day ever! Grob ran away and left us stuck in the mud. He shouted somethin\' about a \'smart choice,\' then took off runnin' with his pals. Me and the rest of the boys were fightin\' all alone.\" \
                                    <br> \
                                    <br> \
                                    [<u>Soldier Gibby:] \"Commander Grob says runnin\' away was smart, but what\'s so smart about leavin\' us behind? If he stayed and helped, we could have smashed our way out of there. No doubt about it.\" \
                                    <br> \
                                    <br> \
                                    [<u>Soldier Skree:] \"Commander Grob don\'t care about us goblins, not one bit. Not me, not Oggo, not Gibby, not even Old Bork. He ran off and left us all alone \u2014 all he cares about is savin\' himself. I ain\'t fightin\' for Grob ever again!\""
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
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
                                align: 'left',
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
                        correctIndex: 2,
                        paragraph: [
                            "The lepre{c}hauns had powerful cannons",
                            "Grob wasn\'t scare{d} of fighting",
                            "Grob defends running aw{a}y as a smart choice",
                        ],
                    },
                    {
                        title: "[<g>2.] Which details supports Grob\'s claim?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Ah, the Battle of Clover {H}ill.\"",
                            "\"That day, I made a ve{r}y smart choice.\"",
                            "\"Now, wher{e}\'s my supper?\"",
                        ],
                    },
                    {
                        title: "[<g>3.] The main idea of \"Betrayal\" is that the soldiers:",
                        correctIndex: 0,
                        paragraph: [
                            "Claim that Grob ran off and left the{m} behind",
                            "Were named {O}ggo, Gibby, and Old Bork",
                            "Got stuck in the m{u}d",
                        ],
                    },
                    {
                        title: "[<g>4.] What do both main ideas have in common?",
                        correctIndex: 1,
                        paragraph: [
                            "Both say {g}ood things about Grob",
                            "Both involve Grob running awa{y}",
                            "Bo{t}h focus on how dangerous cannons are",
                        ],
                    },
                ],  
                code: {
                    answer: "ARMY",
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
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.5b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "To bring back orange to the rainbow, Noctis is making me face my past mistakes. I can't do this alone; I need you by my side. Will you stay?",
                    complete: "Thank you, young one \u2014 I'm grateful for your help. Now, I know the truth. "
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
                                    text: "Yesterday, Madame Mystica shouted, \"As sure as the sun rises in the morning, the leprechauns will find [<i>two] pots of gold at the end of the rainbow!\" But when the rainbow appeared, there wasn\'t a single pot of gold to be found. Her words were like a path that led to nowhere.",
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
                                    text: "Fields",
                                },
                                passage: {
                                    text: "During the winter, Madame Mystica said, \"In the spring, four-leaf clovers will grow in great numbers. They\'ll cover the entire planet!\" But when spring came, very few four-leaf clovers sprouted from the dirt. The fields were nearly empty; a reminder to [<u>not count your chickens before they hatch.]",
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
                        'A. Which passage contains [<i>only] similes: [<u>Rewards] or [<u>Fields]?',
                        'B. Is the underlined sentence in \"Fields\" a [<u>proverb] or a [<u>simile]?',
                        'C. Is the following statement [<u>right] or [<u>wrong]? [<i>\"Rewards\" uses a metaphor to show how true Madame Mystica\'s words were.]',     
                        'D. Are there [<u>one] or [<u>two] hyperboles in \"Fields?\"',                    
                    ],
                    puzzle: [
                        ["(A)R","E","(C)4W","A","R","D","S"],
                        ["0","0","R","0","0","0","0"],
                        ["(B)P","R","O","V","E","2R","B"],
                        ["0","0","N","0","0","0","0"],
                        ["0","0","1G","0","0","0","0"],
                        ["0","0","0","0","(D)3O","N","E"],
                    ]
                },  
                code: {
                    answer: "GROW",
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
                    text: "Read each poem, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
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
                        "L.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.5",
                        "RL.4.9",
                        "RL.4.10",
                    ],
                }
            },

            intro: {
                character: "Sparklepants",
                asset: "sparklepants.png",
                dialogue : {
                    incomplete: "Oh, that Noctis! She wants me to do some sort of challenge to \"learn my lesson\" and save the color yellow... What an insult. Let's just get this over with.",
                    complete: "Well, I got some things to think about now. Maybe I don\'t need that sparkleshirt after all."
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
                                    text: 'Giving',
                                },
                                subtitle: {
                                    text: 'By Noctis',
                                },
                                passage: {
                                    text:   "[<tal>Sparklepants, watch out! \
                                            <br> \
                                            Gold weighs you down. The lesson? \
                                            <br> \
                                            Giving sets you free.]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Quest',
                                },
                                subtitle: {
                                    text: 'By Noctis',
                                },
                                passage: {
                                    text:   "[<tal>Oh Sparklepants, with gems that glow \u2014 \
                                    <br> \
                                    you think they\'ll cure your every woe. \
                                    <br> \
                                    The more you take, the more you\'ll need, \
                                    <br> \
                                    a terrible quest of hopeless greed. \
                                    <br> \
                                    <br> \
                                    A chest of gold is a heavy load; \
                                    <br> \
                                    its shining light will block your road. \
                                    <br> \
                                    So let it go, set yourself free. \
                                    <br> \
                                    Brave and bold is the way to be!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Soar',
                                },
                                subtitle: {
                                    text: 'By Noctis',
                                },
                                passage: {
                                    text:   "You\'ll fill your pockets with treasure. \
                                    <br> \
                                    Each coin will feel like a dream. \
                                    <br> \
                                    <br> \
                                    You\'ll think, \"If I get more, I\'ll feel better.\" \
                                    <br> \
                                    But Sparklepants \u2014 the more you carry, \
                                    <br> \
                                    the harder it will be to keep walking. \
                                    <br> \
                                    <br> \
                                    Here\'s my lesson for you: \
                                    <br> \
                                    let go of greed, and be a giver. \
                                    <br> \
                                    It feels like flying. \
                                    <br> \
                                    And everyone around you? \
                                    <br> \
                                    <br> \
                                    They\'ll soar, too."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
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
                                translateY: "5%",
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
                                size: 'tiny',
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
                        title: "[<g>1.] \"Soar\" claims that giving \"feels like ____ .\"",
                        word: "[F]LYING",
                    },
                    {
                        title: "[<g>2.] Stanza 2 of \"The Quest\" has the rhyme scheme:",
                        word: "A[A]BB",
                    },
                    {
                        title: "[<g>3.] Who is the poet of all three poems?",
                        word: "NOC[T]IS",
                    },
                    {
                        title: "[<g>4.] All three poems are all about letting go of _____ .",
                        word: "GRE[E]D",
                    },
                ],
                code: {
                    answer: "FATE",
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
                        "CCRA.L.5",
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
                        "L.4.5c",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.4",
                        "RL.4.4",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Just my luck... Noctis is back! She gave me a weird magic symbol written on a piece of paper, but it's all ripped up! To bring back the color green, I guess we have to fix it. Can you help?",
                    complete: "Oh man, thank you SO much! Words really aren't my thing."
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
                                    text: "The leprechauns were very rich and [<u>affluent].",
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
                                    text: "Hopefully your year will be full of luck, not [<u>misfortune].",
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
                                    text: "Sometimes, a [<u>shamrock] (clover) has four leaves.",
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
                                    text: "St. Patrick [<u>banished] snakes from Ireland, sending them away.",
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
                                    text: "Rainbows are extremely [<u>vivid]; they're very colorful!",
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
                                    text: "Don\'t be so [<u>mournful]. Be happy on St. Patrick\'s day!",
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
                                    text: "When does the [<u>revelry] begin? Leprechauns are great at partying.",
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
                                    text: "The foolish leprechaun decided to cast an [<u>untested] spell.",
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
                        title: "[<g>1.] Find the piece with the three moons. What does \"misfortune\" mean?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Good lu{c}k",
                            "Ba{d} luck",
                        ],
                    },
                    {
                        title: "[<g>2.] Look at the underlined word on the top left piece. Which of the following words is a synonym?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "Leprechau{n}",
                            "Extre{m}ely",
                            "Po{o}r",
                            "R{i}ch",
                        ],
                    },
                    {
                        title: "[<g>3.] Which piece has a word that means \"colorful?\"",
                        correctIndex: 2,
                        paragraph: [
                            "The {b}ottom left piece",
                            "The pie{c}e with three stars",
                            "The cente{r} piece",
                        ],
                    },
                    {
                        title: "[<g>4.] If \"un-\" means [<i>not], then \"untested\" means:",
                        correctIndex: 0,
                        paragraph: [
                            "Not tes{t}ed",
                            "Ra{r}ely tested",
                            "Fre{q}uently tested",
                        ],
                    },
                ],  
                code: {
                    answer: "DIRT",
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
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                    ],
                }
            },

            intro: {
                character: "C.H.A.R.M.",
                asset: "charm.png",
                dialogue : {
                    incomplete: "Task: Bring blue, indigo, and violet back to the rainbow. How: Read story closely. Failure: not an option. Requesting help from Puzzle Punks!",
                    complete: "Task complete. Colors restored. Self-worth found. Thank you for the help."
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
                                    text:   "Hollow Jack wasn\'t just an old robot. He was the hardest worker on Candlewick\'s Farm, where he carefully packed up crops for the market. The other workers teased him, but Jack didn\'t let it bother him. He even fixed their tools and cleaned up their messes. \
                                    <br> \
                                    One evening, the ground started to shake. From the dark caves of the Undermurk, a swarm of giant slugs came out, leaving behind slimy trails and eating all the crops. The other workers ran away in fear, but Hollow Jack stayed. He set up special glowing lights to guide the slugs away from the crops. One by one, he carefully led them back to the Undermurk, saving the farm without harming a single creature. \
                                    <br> \
                                    Candlewick was amazed by Hollow Jack\'s bravery, so she rewarded him with a big upgrade. After some intense tinkering in the farm\'s workshop, Jack became C.H.A.R.M. \u2014 the [<i>Chromatic Hologram and Rainbow Mechanism]. His rusty body was now shiny and colorful. \"You\'ve done more for this farm than anyone,\" Candlewick said. \"But now, the world needs your light.\" \
                                    <br> \
                                    When C.H.A.R.M. left the farm for good, the workers who once teased him shook his hand, calling him a hero. C.H.A.R.M. didn't speak a single word, but the gentle glow in his eyes said it all. His kindness, patience, and hard work had turned him into something special. Now, he was ready to bring hope and light to the rest of the world."
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
                        title: "[<g>1.] This story is told from a _____ point of view.",
                        correctIndex: 2,
                        paragraph: [
                            "Fir{s}t person",
                            "Second p{e}rson",
                            "{T}hird person",
                        ],
                    },
                    {
                        title: "[<g>2.] What was C.H.A.R.M. originally named?",
                        correctIndex: 1,
                        paragraph: [
                            "Candlewick\'s Fa{r}m",
                            "Hollow J{a}ck",
                            "{N}octis",
                        ],
                    },
                    {
                        title: "[<g>3.] A setting is a story's time and place. What is the [<i>place] for \"A Charming Story?\"",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "An {o}ld factory",
                            "Candlewick\'{s} Farm",
                            "The U{n}dermurk",
                            "The entire wo{r}ld",
                        ],
                    },
                    {
                        title: "[<g>4.] What are C.H.A.R.M.'s character traits?",
                        correctIndex: 2,
                        paragraph: [
                            "Lazy, greedy, and ca{r}eless",
                            "Sill{y}, playful, and talkative",
                            "{K}ind, hard-working, and brave",
                        ],
                    },
                ],  
                code: {
                    answer: "TASK",
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