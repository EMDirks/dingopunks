const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/reading/context-clues/preview-4th-5th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ sunny snap
        {
            info: {
                type: 'challenge',
                title: "Accounting Dept.",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Definitions and Examples",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.1",
                        "RI.5.4",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Oh no... the Queen's golden tablet is broken! Why does she always send her messages on such fancy things? It's gonna be tricky to fix, but I can't do my job without it. Think you can help?",
                    complete: "Whew \u2014 thanks for the help! Now I can get back to my busy schedule."
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
                                    text: "It's time to run an [<u>audit], or detailed check.",
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
                                    text: "Keep track of the hive's [<u>inventory]: our stock of goods.",
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
                                    text: "If the numbers don't match, that's a [<u>discrepancy].",
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
                                    text: "We have a [<u>deficit] of honey. We're eight jars short.",
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
                                    text: "What's the [<u>quota] (required amount) of nectar?",
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
                                    text: "Our [<u>prediction] was accurate \u2014 we guessed right!",
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
                                    text: "Please track our [<u>reserves], like the emergency honey.",
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
                                    text: "Our nectar storage [<u>fluctuates], changing daily.",
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
                                    text: "[<u>Observing] the hive means watching the bees closely.",
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
                                size: 'small',
                                align: 'center',
                                puzzle: 'default'
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
                        title: "[<g>1.] On the piece with a star, \"prediction\" means:",
                        correctIndex: 1,
                        paragraph: [
                            "Ru{l}e",
                            "{G}uess",
                            "{M}eal",
                        ],
                    },
                    {
                        title: "[<g>2.] Which puzzle piece contains an underlined word meaning \"something that doesn't match?\"",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Top le{f}t",
                            "T{o}p right",
                            "Bo{t}tom left",
                            "Bottom r{i}ght",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: the underlined word on the middle left piece means \"a tool used to build honeycombs.\"",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>4.] Define the underlined word on the center piece.",
                        correctIndex: 0,
                        paragraph: [
                            "Require{d} amount",
                            "Wei{g}ht",
                            "D{a}ily task",
                        ],
                    },
                ],  
                code: {
                    answer: "GOLD",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ basil rabbit
        {
            info: {
                type: 'challenge',
                title: "Honey Vats",
                asset: "basil-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Read each instruction, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Synonyms and Antonyms",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5c",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.5c",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.1",
                        "RI.5.4",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "Oh no, I'm gonna mess up again! The Queen hired me to deliver instructions to the bees, but I just don't understand any of these words. I really can't lose this job! Think you can help?",
                    complete: "Oh man, you really saved my skin! I think it's time for a carrot break."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "basil-rabbit.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "INSTRUCTION A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Store the nectar in a large [<u>receptacle], or container.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-12%",
                                translateY: "-10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "INSTRUCTION B",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "When collecting nectar, be [<u>dexterous] and never clumsy.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "-3%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "INSTRUCTION C",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Be [<u>vigilant] and watchful for any signs of predators.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "INSTRUCTION D",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "To finish every task, you must move at a [<u>rapid], fast pace.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "INSTRUCTION E",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Never give up \u2014 even when your work is [<u>arduous], not easy.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "8%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "INSTRUCTION F",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Only fly to [<u>vivid] flowers. Ignore the colorless ones.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "5%",
                                rotate: "1deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What synonym is used to describe \"vigilant?\"",
                        correctIndex: 0,
                        paragraph: [
                            "Watc{h}ful",
                            "Si{g}ns",
                            "Pre{d}ators",
                        ],
                    },
                    {
                        title: "[<g>2.] What does \"vivid\" mean?",
                        correctIndex: 2,
                        paragraph: [
                            "{H}uge",
                            "Bor{i}ng",
                            "Col{o}rful",
                        ],
                    },
                    {
                        title: "[<g>3.] What is a \"receptacle?\"",
                        correctIndex: 1,
                        paragraph: [
                            "A jar of n{e}ctar",
                            "A contai{n}er",
                            "A sa{f}ety device",
                        ],
                    },
                    {
                        title: "[<g>4.] A dexterous bee is extremely ______ .",
                        correctIndex: 2,
                        paragraph: [
                            "La{z}y",
                            "{C}lumsy",
                            "Skill{e}d",
                        ],
                    },
                ],  
                code: {
                    answer: "HONE",
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
                    text: "Read the poem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Affixes",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
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
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.4b",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RF.5.4c",
                        "RI.5.1",
                        "RI.5.4",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Riff Wingman here, about to hit the stage. I've got a new poem to perform; a little somethin' to inspire the hive in this difficult time. Want to give it a read? Let's make sure it's ready to shine.",
                    complete: "Thanks for giving my masterpiece a read. You've got a real knack for this, buddy."
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
                                    text: 'Rise of the Hive',
                                },
                                passage: {
                                    text:   "We cut through the day, no time for breathing, \
                                    <br> \
                                    our [<u>endless] labor never finished.  \
                                    <br> \
                                    <br> \
                                    My old poems don't matter now. \
                                    <br> \
                                    It's [<u>inconceivable] they ever did \u2014 \
                                    <br> \
                                    my work is just another forgotten voice in the swarm.  \
                                    <br> \
                                    We build and break and rebuild, our wings never stopping. \
                                    <br> \
                                    <br> \
                                    Survival isn't pretty, it's just instinct. \
                                    <br> \
                                    Move. Work. Repeat. \
                                    <br> \
                                    Build the hive. No space for [<u>malformed] honeycombs. \
                                    <br> \
                                    No room for stories or memories. \
                                    <br> \
                                    The hive eats dreams and spits out survival. \
                                    <br> \
                                    <br> \
                                    May all who oppose us be stricken with [<u>insectophobia]. \
                                    <br> \
                                    As a group, we are to be feared! \
                                    <br> \
                                    Alone, I'm just another pair of wings."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
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
                        'A. What underlined word in this poem means \"without end?\"',
                        'B. [<u>True] or [<u>false]: if \"conceivable\" means <em>believable</em>, then \"inconceivable\" means <em>not believable</em>.',
                        'C. Does the word \"malformed\" mean <em>[<u>badly]-formed</em> or <em>[<u>nicely]-formed</em>?',     
                        'D. If \"phobia\" means <em>fear</em>, then someone with \"insectophobia\" would fear an ______ .',                    
                    ],
                    puzzle: [
                        ["(D)2I","0","0","0","(B)T","0","0"],
                        ["N","0","(C)B","0","1R","0","0"],
                        ["S","0","A","0","U","0","0"],
                        ["(A)E","N","D","L","4E","S","3S"],
                        ["C","0","L","0","0","0","0"],
                        ["T","0","Y","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "RISE",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Root Words",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
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
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.3a",
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
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "You see these newspaper clippings? Someone nailed 'em to my door this morning. Must be important. Problem is, I can't read. What do these squiggles even mean?",
                    complete: "Yeah, alright, thanks. Don't think this means I owe you anything, though."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "grumblegrub.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "THE DAILY BUZZ",
                        },
                        contentArray: [
                            {                             
                                title: {
                                    text: 'Storm Watch',
                                },
                                subtitle: {
                                    text: 'By Mitch Waxley',
                                },
                                passage: {
                                    text: "The storm cloud Gustav has been spotted on the horizon, stirring up concern among the residents of Bumbleburg Hive. Known for his persistent attacks of rain, hail, and wind, Gustav poses a serious threat to both the hive and the fields. \
                                    <br> \
                                    Worker bees are already busy fortifying the hive's defenses, strengthening its honeycomb walls to ensure they remain strong in even the most powerful winds. \
                                    <br> \
                                    In addition, the Queen issued an urgent command to all the other bees: finish collecting nectar immediately!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "BUMBLEBURG CHRONICLE",
                        },
                        contentArray: [                 
                            {
                                title: {
                                    text: 'Warehouse Woes',
                                },
                                subtitle: {
                                    text: 'By April Pottsgold',
                                },
                                passage: {
                                    text: "Despite an amazing nectar collection this season, the hive faces challenges due to problems in the warehouse. While the workers report a plentiful harvest, rumors of messy storage conditions have caused concern. \
                                    <br> \
                                    Grumblegrub, the hive's warehouse manager, says he's happy with how things are running — but others say the nectar isn't being stored properly. The Queen's strategic farming plan helped grow healthy flowers and produce lots of nectar, but without better organization, the hive might run out of supplies during the storm."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "8%",
                                rotate: "-3deg",
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
                        title: "[<g>1.] What does \"fortifying\" the hive's defenses mean?",
                        correctIndex: 2,
                        paragraph: [
                            "To {w}eaken or break apart the walls",
                            "To c{l}ean the hive, tidying it up perfectly",
                            "To make the hive stro{n}ger, like a fort",
                        ],
                    },
                    {
                        title: "[<g>2.] What does \"persistent\" tell us about Gustav?",
                        correctIndex: 2,
                        paragraph: [
                            "He tries to be cal{m}, with a forgiving attitude ",
                            "He moves {s}lowly and carefully",
                            "He continues for a long time, nev{e}r giving up",
                        ],
                    },
                    {
                        title: "[<g>3.] In Warehouse Woes, a \"plentiful\" harvest means:",
                        correctIndex: 0,
                        paragraph: [
                            "The {w}orkers harvested plenty of nectar ",
                            "The nectar supply is smal{l} or limited",
                            "The nect{a}r is difficult to gather",
                        ],
                    },
                    {
                        title: "[<g>4.] A \"strategic\" farming plan is most likely:",
                        correctIndex: 1,
                        paragraph: [
                            "Chaotic and u{n}planned",
                            "Based on a clever {s}trategy",
                            "U{n}tested and uncertain",
                        ],
                    },
                ],  
                code: {
                    answer: "NEWS",
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
        
    ]

}