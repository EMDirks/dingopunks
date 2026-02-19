const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/math/order-of-operations/preview-5th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Solve each equation, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Equations With All Four Operations",
                    commonCore: [
                        "4.NBT.B.5",
                        "4.NBT.B.6",
                        "4.OA.B.4",
                        "5.NBT.B.5",
                        "5.NBT.B.6",
                        "5.OA.A.1",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "The queen sent some emergency shipments to the warehouse, but all the data is in secret code to \"protect it from spies.\" I'm really not in the mood to take care of this... Wanna do it for me?",
                    complete: "Eh, thanks for the help. I guess that wasn't as bad as I thought."
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
                            text: "Candles",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "33 - 5 × 6 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Flowers",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(18 + 6) × 2 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-20%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Shackles",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(32 - 5) ÷ (6 + 3) = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-18%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Crystals",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "7 + 5 × 12 ÷ 3 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Scrolls",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "9 × (4 + 3) ÷ 3 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Spatulas",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "8 + 20 ÷ 4 × 10 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "22%",
                                rotate: "0deg",
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
                                translateY: "17%",
                                rotate: "-1deg",
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
                            width: "percent30",
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
                                size: 'medium',
                                align: 'center'
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
                        title: "[<g>1.] Are there more [<u>flowers] or [<u>spatulas]? ",
                        word: "SPATULA[S]",
                    },
                    {
                        title: "[<g>2.] Which item has the same answer as \"Shackles?\"",
                        word: "C[A]NDLES",
                    },
                    {
                        title: "[<g>3.] Which item has an answer of 21?",
                        word: "SCROL[L]S",
                    },
                    {
                        title: "[<g>4.] Which item is a multiple of 9?",
                        word: "CRYS[T]ALS",
                    },
                ],
                code: {
                    answer: "SALT",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ riff wingman
        {
            info: {
                type: 'challenge',
                title: "Riff's Study",
                asset: "riff-wingman.png",
                state: "incomplete",
                hint: {
                    text: "Read and solve each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Word Problems",
                    commonCore: [
                        "4.OA.A.3",
                        "5.NBT.B.5",
                        "5.NBT.B.6",
                        "5.NBT.B.7",
                        "5.OA.A.1",
                        "5.OA.A.2",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Riff here. The hive is counting on me to keep things chill during the storm. My plan? A slam poetry night! I gotta set up the right vibe to keep the bees calm. Can you help me figure this out? ",
                    complete: "Right on, buddy. Fun fact \u2014 I once performed a poem so good, the bees forgot to buzz."
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
                                    text: "[<bwb>Seating Plan]",
                                },
                                passage: {
                                    text: "To fit the entire crowd, I plan to set up 8 rows with 22 seats each. In all, 10 seats will be reserved for the performers. The rest are for the audience. [<u>How many seats will the audience have?]",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "25%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "[<bwb>Stage Length]",
                                },
                                passage: {
                                    text: "The current stage is only 4 feet long. First, I'll add 6 more feet Then, I'll double the entire thing! And just to be certain it's long enough, I'll add another 5 feet to the very end. [<u>How long will the stage be]?",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "-8%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "[<bwb>Snow Cones]",
                                },
                                passage: {
                                    text: "To keep everyone chill, I'm handing out snow cones! I need 30 cherry snow cones, 40 banana snow cones, and 100 slug slime snow cones. Each snow cone costs $0.25 to make.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "25%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "[<bwb>Salami Refreshments]",
                                },
                                passage: {
                                    text: "Honestly, we need tons of salami. Each salami weighs 30 pounds, and must be split up into 10 equal chunks. Then, we'll remove one pound from each chunk to freeze and eat later. We'll serve up what's left.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-3%",
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
                            width: "percent40",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "spaceBetween",
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
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
                            dimension: {
                                width: "full",
                                height: "full",
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
                        title: "[<g>1.] Which equation shows the length of the stage?",
                        correctIndex: 2,
                        paragraph: [
                            "4 + 6 × 2 + 5 = 21 fe{e}t",
                            " 4 × 6 × 2 + 5 = 53 fee{t}",
                            "( 4 + 6 ) × 2 + 5 = 25 {f}eet",
                        ],
                    },
                    {
                        title: "[<g>2.] Which equation shows the seating plan?",
                        correctIndex: 1,
                        paragraph: [
                            "8 × 22 - 10 = 96 {s}eats",
                            "8 × 22 - 10 = 166 s{e}ats",
                            "8 × (22 - 10) = 166 se{a}ts",
                        ],
                    },
                    {
                        title: "[<g>3.] What will it cost to make all the snow cones?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "$42.50 {E}",
                            "$4,250 {R}",
                            "$170 {O}",
                        ],
                    },
                    {
                        title: "[<g>4.] How much salami is left in each chunk?",
                        correctIndex: 2,
                        paragraph: [
                            "3 [<f>1/3] po{u}nds",
                            "3 pound{s}",
                            "2 poun{d}s",
                        ],
                    },
                ],  
                code: {
                    answer: "FEED",
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
                    topic: "Equations With Exponents",
                    commonCore: [
                        "5.OA.A.1",
                        "5.NBT.A.2",
                        "5.NBT.B.5",
                        "5.NBT.B.6",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "The queen, in all her brilliance, gave me these impossible equations on a fragile golden tablet. And guess what? I dropped it. And it shattered. Can you help me fix it?",
                    complete: "Phew, you really saved the day! I guess my four-leaf clover is working after all."
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
                                    text: "3[<e>2] - 2 = ?",
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
                                    text: "2 + 5[<e>2] × 2 = ?",
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
                                    text: "6 × 2[<e>3] - 4 = ?",
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
                                    text: "(3 + 2)[<e>2] - 5 = ?",
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
                                    text: "4[<e>2] ÷ 2 + 3 = ?",
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
                                    text: "20 - 2[<e>3] × 1 = ?",
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
                                    text: "(5[<e>2] - 20) + 6 = ?",
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
                                    text: "3[<e>2] ÷ 3 + 7= ?",
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
                                    text: "(2 + 3)[<e>2] ÷ 5 = ?",
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
                        title: "[<g>1.] Which piece has an answer of 12?",
                        correctIndex: 2,
                        paragraph: [
                            "The top lef{t} piece",
                            "The c{e}nter piece",
                            "The piece with a sta{r}",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the answer to the top right piece?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "44 {I}",
                            "24 {P}",
                            "32 {A}",
                        ],
                    },
                    {
                        title: "[<g>3.] Which pieces both have an answer of 11?",
                        correctIndex: 1,
                        paragraph: [
                            "The botto{m} left, and the bottom middle",
                            "The bottom left, and the {c}enter",
                            "The top right, and th{e} center",
                        ],
                    },
                    {
                        title: "[<g>4.] Which pieces both have an answer < 10 ?",
                        correctIndex: 2,
                        paragraph: [
                            "The botto{m} right, and the bottom left",
                            "The center, and the piece with a {s}tar",
                            "The top left, and the bottom rig{h}t",
                        ],
                    },
                ],  
                code: {
                    answer: "RICH",
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
                    text: "Solve the equations and sort them into the correct columns. Then, answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare Equations",
                    commonCore: [
                        "5.OA.A.1",
                        "5.NBT.A.2",
                        "5.NBT.B.5",
                        "5.NBT.B.6",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "With the storm coming, I'm not leaving the nectar harvest to chance. My workers have sent in their reports, but they're a mess, as usual. I need you to sort through them \u2014 and hurry!",
                    complete: "Impressive work. If my bees showed half your efficiency, we'd have nothing to fear from Gustav."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Fields with < 50<br>oz. of nectar harvested",
                        "Fields with 50-100<br>oz. of nectar harvested",
                        "Fields with > 100<br>oz. of nectar harvested",
                    ],
                    asset: {
                        scope: "global",
                        path: "3-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "[<u>Iris] Field Harvest",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6[<e>2]+8×4+(99-15) oz.",
                                }, 
                            }
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "[<u>Rose] Field Harvest",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "126+5+24÷3+(58-12) oz.",
                                }, 
                            }
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "[<u>Petunia] Field Harvest",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "35+6×(30-23) oz.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },       
                    {
                        tag: {
                            text: "[<u>Tulip] Field Harvest",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(34-26)×3-12÷6+31 oz.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },             
                    {
                        tag: {
                            text: "[<u>Orchid] Field Harvest",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(40+14)÷6 oz.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "[<u>Thistle] Field Harvest",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "20×(14-9)+2 oz.",
                                }, 
                            }
                        ],
                        correctIndex: 2
                    },
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "sort3Width",
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
                                size: 'tiny',
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which field\'s harvest was between 100 and 150 ounces: [<u>iris], [<u>thistle], or [<u>petunia]?',
                        'B. Did the [<u>rose] or [<u>iris] field produce more nectar?',
                        'C. Which field had the smallest nectar harvest?',     
                        'D. Which field\'s harvest was > 50 but < 60 ?',                    
                    ],
                    puzzle: [
                        ["(A)T","H","I","1S","(D)T","L","2E"],
                        ["0","0","0","0","U","0","0"],
                        ["(B)R","0","0","0","L","0","0"],
                        ["(C)O","R","C","H","I","4D","0"],
                        ["S","0","0","0","P","0","0"],
                        ["3E","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "SEED",
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