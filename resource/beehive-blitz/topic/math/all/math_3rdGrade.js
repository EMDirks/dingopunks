const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/math/all/thumbnail-3rd-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ riff wingman
        {
            info: {
                type: 'challenge',
                title: "Riff's Study",
                asset: "riff-wingman.png",
                state: "incomplete",
                hint: {
                    text: "Read each problem, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplication and Division Facts",
                    commonCore: [
                        "3.OA.A.1",
                        "3.OA.A.2",
                        "3.OA.A.3",
                        "3.OA.A.4",
                        "3.OA.B.5",
                        "3.OA.C.7",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Riff Wingman here. I'm writing some new songs to inspire the hive, but the numbers just aren't adding up. Think you can look through my notes and help me solve a few problems?",
                    complete: "Thanks for the save \u2014 you're sharp, buddy! You should come to my next show."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "riff-wingman.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Notes in a scale:",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "84 ÷ 7 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "40%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Number of flutes:",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6 × 4 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Beats in my favorite song:",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "10 × 3 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-25%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Profits:",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Each of my songs sells for seven dollars. If I sell nine songs, how much money will I make?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-8%",
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
                                translateX: "-8%",
                                translateY: "0%",
                                rotate: "-2deg",
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
                            width: "percent22",
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
                                size: 'mediumSmall',
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
                        title: "[<g>1.] How many beats does Riff's favorite song have?",
                        word: "[T]HIRTY",
                    },
                    {
                        title: "[<g>2.] True or false: The answer to \"Profits\" is $63.",
                        word: "TR[U]E",
                    },
                    {
                        title: "[<g>3.] A scale has twelve _____ .",
                        word: "[N]OTES",
                    },
                    {
                        title: "[<g>4.] Riff has 24 _____ .",
                        word: "FLUT[E]S",
                    },
                ],
                code: {
                    answer: "TUNE",
                    userArray: ["","","",""]
                },
            }

        },
        
        // ⭐ basil rabbit
        {
            info: {
                type: 'challenge',
                title: "Honey Vats",
                asset: "basil-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Two Step Word Problems With Addition and Subtraction",
                    commonCore: [
                        "2.NBT.B.7",
                        "3.NBT.A.2",
                        "3.OA.D.8",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "Hey! I'm helping the bees gather nectar before the big storm hits. Problem is, we've run into some pretty tricky problems... Want to lend a hand?",
                    complete: "Hippety hop! We actually did it! Now it's time to hunker down."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "basil-rabbit.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "4.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>1. Honey]",
                                },
                                passage: {
                                    text: "Overnight, the bees created 245 units of honey. In the morning, they created 372 more. However, in the afternoon, 126 units of honey were accidentally spilled. How many units of honey are left?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-14%",
                                translateY: "3%",
                                rotate: "-2deg",
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
                                    text: "[<u>2. Pollen]",
                                },
                                passage: {
                                    text: "A storm is coming! The bees only have 3 hours to finish collecting pollen. They plan to spend 1 hour and 15 minutes in the first meadow. Then, they plan to spend 45 minutes in the second meadow.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "3%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "5.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>3. Nectar]",
                                },
                                passage: {
                                    text: "In the morning, Basil collected 12 drops of glowpetal nectar. After his lunch break, he collected 8 more drops. On his way back to the hive, he accidentally spilled some nectar. When he got to the hive, he only had 15 drops left. How much nectar did Basil spill?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-1%",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which equation can you use to solve \"Honey?\"",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "245 + 372 - 126 = ___ {S}",
                            "245 + 372 + 126 = ___ {D}",
                            "245 + 372 - ___ = 126 {R}",
                        ],
                    },
                    {
                        title: "[<g>2.] After collecting pollen from both meadows, how much time will the bees have left?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "60 minut{e}s",
                            "45 min{u}tes",
                            "60 h{o}urs",
                            "2 hou{r}s",
                        ],
                    },
                    {
                        title: "[<g>3.] Which equation can you use to solve \"Nectar?\"",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "12 - 8 + ___ = 20 {I}",
                            "12 + 8 + 15 = ___ {O}",
                            "12 + 8 - ___ = 15 {E}",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the answer to #3?",
                        correctIndex: 1,
                        paragraph: [
                            "35 drops of ne{c}tar ",
                            "5 {d}rops of nectar",
                            "16 drop{s} of nectar ",
                        ],
                    },
                ],  
                code: {
                    answer: "SEED",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Place Value and Rounding",
                    commonCore: [
                        "3.NBT.A.1",
                        "3.NBT.A.3",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Oh no… I accidentally broke Queen Bella's golden tablet! She's going to be SO upset with me. Think you can help me fix this thing?",
                    complete: "Maybe my luck's starting to turn around after all. Thanks a million!"
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
                                    text: "6 × 10",
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
                                    text: "1,718",
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
                                    text: "1,441",
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
                                    text: "753",
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
                                    text: "399",
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
                                    text: "847",
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
                                    text: "484",
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
                                    text: "425",
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
                                    text: "3 × 50",
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
                                size: 'medium',
                                align: 'center'
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
                        title: "[<g>1.] When rounding to the nearest hundred, which of these pieces rounds to 500?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{B}ottom left",
                            "{T}op left",
                            "Bott{o}m right",
                            "Top rig{h}t",
                        ],
                    },
                    {
                        title: "[<g>2.] When rounding to the nearest 10, which of the following pieces rounds up?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Middle t{o}p",
                            "Middle l{e}ft",
                            "Top r{i}ght",
                            "Bottom {l}eft",
                        ],
                    },
                    {
                        title: "[<g>3.] If you round to the nearest 100, the center piece rounds to _____ .",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Three hun{d}red",
                            "F{o}ur hundred",
                        ],
                    },
                    {
                        title: "[<g>4.] What are the products of the top left piece and the bottom right piece?",
                        columns: 2,
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "60 and 30 {T}",
                            "600 and 150 {L}",
                            "60 and 150 {K}",
                            "60 and 180 {S}",
                        ],
                    },
                ],  
                code: {
                    answer: "BOOK",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Look at each rectangle, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Area and Perimeter",
                    commonCore: [
                        "3.MD.C.5",
                        "3.MD.C.7",
                        "3.MD.C.7b",
                        "3.MD.D.8",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "Ugh... Queen Bella is making me reorganize the whole warehouse! Problem is, there's a lot of math involved \u2014 and I don't do math. How about you do it for me?",
                    complete: "Yeah, yeah, I guess you're pretty smart. Just don't start acting like you own the place, okay?"
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
                            text: "[<u>Pallet] Space",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 8,
                                        height: 6,
                                    },
                                    label: {
                                        top: "8 ft",
                                        left: "6 ft",    
                                        right: "offset"                               
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "-2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Service] Space",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 11,
                                        height: 4,
                                    },
                                    label: {
                                        top: "16 feet",
                                        left: "offset",    
                                        right: "10 feet"                               
                                    },
                                }
                            }
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
                            text: "[<u>Loading] Space",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 8,
                                        height: 5,
                                    },
                                    label: {
                                        top: "16 ft",
                                        left: "5 ft",    
                                        right: "offset"                               
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "5%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Alcove] Space",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 7,
                                        height: 3,
                                    },
                                    label: {
                                        top: "9 meters",
                                        left: "offset",    
                                        right: "8 meters"                               
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-3%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Closet] Space",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 4,
                                        height: 4,
                                    },
                                    label: {
                                        top: "5 meters",
                                        left: "offset",    
                                        right: "offset"                               
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-4%",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'defaultNoBottom'
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
                            figure: {
                                border: {
                                    width: 'default'
                                },
                                background: {
                                    color: 'gold',
                                }
                            },  
                            cell: {
                                border: {
                                    width: 'none'
                                },
                                dimension: {
                                    size: 'default',
                                }
                            }, 
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            dimension: {
                                width: "full",
                                height: "full",
                            },          
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
                        'A. Which space has an area of 48 ft[<e>2]: [<u>pallet], [<u>service], or [<u>loading]?',
                        'B. If the closet is a square, how many meters is its perimeter?',
                        'C. Which space has a perimeter of 42 feet?',     
                        'D. Which space has an area of 72 square meters?',                    
                    ],
                    puzzle: [
                        ["(A)P","(D)A","L","L","E","(B)T","0"],
                        ["0","1L","0","0","0","W","0"],
                        ["0","C","0","0","0","E","0"],
                        ["(C)L","O","2A","D","I","N","G"],
                        ["0","V","0","0","0","3T","0"],
                        ["0","4E","0","0","0","Y","0"],
                    ]
                },  
                code: {
                    answer: "LATE",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ queen bella
        {
            info: {
                type: 'challenge',
                title: "Throne Room",
                asset: "queen-bella.png",
                state: "incomplete",
                hint: {
                    text: "Sort each fraction into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions of Shapes and Number Lines",
                    commonCore: [
                        "3.NF.A.1",
                        "3.NF.A.2",
                        "3.NF.A.2a",
                        "3.NF.A.2b",
                        "3.NF.A.3",
                        "3.NF.A.3a",
                        "3.NF.A.3d",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "My dear guest, you have arrived at the perfect moment. You see, I have all these fractions that need sorting. Don't ask why \u2014 just do it.",
                    complete: "Thank you, Dingo Punks. You served your Queen well."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Less than or equal to 1",
                        "Greater than 1",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Days Left",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 8,
                                        dot: 7
                                    },
                                    label: {
                                        start: '0',
                                        end: '2',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Jars of Honey",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 4,
                                        dot: 3
                                    },
                                    label: {
                                        start: '0',
                                        end: '2',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Pink Flowers",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_2-6.svg",
                                },
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Yellow Flowers",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
                                        dot: 3
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Honeycomb Cells",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
                                        dot: 4
                                    },
                                    label: {
                                        start: '0',
                                        end: '2',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Stingers",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_4-4.svg",
                                },
                            }
                        ],
                        correctIndex: 0
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
                            align: 'center',
                            padding: 'defaultSmallContainer'
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },   
                            dimension: {
                                width: "percent50",
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
                        title: "[<g>1.] Which fraction is equivalent to [<f>1/2] ?",
                        correctIndex: 2,
                        paragraph: [
                            "Honeycomb cell{s}",
                            "Pink flowe{r}s",
                            "Yellow flo{w}ers",
                        ],
                    },
                    {
                        title: "[<g>2.] Compare the yellow flowers and pink flowers.",
                        correctIndex: 1,
                        paragraph: [
                            "Yellow flower{s} < pink flowers",
                            "Yellow flowers > p{i}nk flowers",
                            "Yello{w} flowers = pink flowers",
                        ],
                    },
                    {
                        title: "[<g>3.] How many fractions are greater than 1?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "2 {G}",
                            "3 {N}",
                            "4 {S}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which fraction is equivalent to one whole?",
                        correctIndex: 0,
                        paragraph: [
                            "Stin{g}ers",
                            "Jar{s} of honey",
                            "Da{y}s left",
                        ],
                    },
                ],  
                code: {
                    answer: "WING",
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