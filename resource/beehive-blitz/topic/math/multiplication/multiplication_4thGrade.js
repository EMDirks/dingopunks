const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/math/multiplication/preview-4th-grade.png",
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
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Word Problems",
                    commonCore: [
                        "3.OA.D.8",
                        "4.MD.A.1",
                        "4.MD.A.2",
                        "4.MD.A.3",
                        "4.NBT.B.5",
                        "4.OA.A.1",
                        "4.OA.A.2",
                        "4.OA.A.3",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Oh no, oh no \u2014 I'm running out of time! The storm's almost here, and I still have so much to do. Can you help me look over these plans?",
                    complete: "I really hope Gustav decides to call it quits... I'm freaking out!"
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
                                image: {
                                    type: "theme",
                                    file: "1.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>1. Flowerbloom Stew Ingredients]",
                                },
                                passage: {
                                    text: "In the afternoon, the hive's chef must make 7 pots of flowerbloom stew. Each pot needs $6 of ingredients. In the evening, the chef must make 2 more pots of stew, each containing only $5 of ingredients.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-1%",
                                rotate: "0deg",
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
                                    text: "[<u>2. Starflower Gift Baskets]",
                                },
                                passage: {
                                    text: "Two worker bees have been assigned to create gift baskets for the busy drones. Last year, they made only 3 baskets \u2014 each one containing 2 starflowers. This year, they plan to make six times as many baskets, each containing 2 starflowers as well.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "9.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>3. Piles of Gems]",
                                },
                                passage: {
                                    text: "Right now, there are 3 shelves in the Queen's vault, each fully-stocked with 12 piles of gems. Soon, we plan to expand the vault to a total of 18 shelves.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "7.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>4. Flag Cleaning]",
                                },
                                passage: {
                                    text: "It's important to keep our flags in tip-top shape! That means cleaning them every day. There are 3 flags in all \u2014 each with a length of 6 inches and a width of 8 inches.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "15%",
                                rotate: "2deg",
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
                            width: "percent45",
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
                                width: "percent20",
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
                                width: "percent75",
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
                        title: "[<g>1.] How much will the ingredients cost in all?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "$52.00 {C}",
                            "$42.00 {H}",
                            "$52.50 {W}",
                        ],
                    },
                    {
                        title: "[<g>2.] In all, how many starflowers are needed for the gift baskets this year?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "36 st{a}rflowers",
                            "13 {s}tarflowers",
                            "32 starflo{w}ers",
                            "6 starflowe{r}s",
                        ],
                    },
                    {
                        title: "[<g>3.] How many piles of gems can fit on 18 shelves?",
                        correctIndex: 2,
                        paragraph: [
                            "54 piles o{f} gems",
                            "36 {p}iles of gems",
                            "216 pile{s} of gems",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the total area of flags that must be cleaned every day?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "48 square inch{e}s",
                            "84 squ{a}re inches",
                            "17 squar{e} inches",
                            "144 square inc{h}es",
                        ],
                    },
                ],  
                code: {
                    answer: "CASH",
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
                    text: "Solve each problem, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Base Ten Multiplication",
                    commonCore: [
                        "4.NBT.A.1",
                        "4.NBT.A.2",
                        "4.NBT.B.5",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "The name's Grumblegrub. I keep the warehouse in order, and I can always use an extra hand. Just don't ask questions, don't poke around, and don't turn on the lights. Now get to work!",
                    complete: "Alright, alright. You did a good enough job, I guess... Now get outta here!"
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
                            text: "Label: Quarts of [<u>Nectar]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "600 × 4 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-10%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Label: Quarts of [<u>Honey]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "20 × 30 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Label: Ounces of [<u>Pollen]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "3,000 x 9 = ?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "25%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Task: [<u>Barrels]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Right now, we have 8 barrels, each containing 300 yards of tape. We must unpack all of it! How many yards of tape is that?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Task: [<u>Pallets]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "A single pallet contains 800 boxes to fold. If we receive 10 pallets, how many total boxes will we need to fold?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "15%",
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
                                translateY: "15%",
                                rotate: "0deg",
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
                                size: 'small',
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
                        title: "[<g>1.] There are twenty-seven _____ ounces of pollen.",
                        word: "THOUS[A]ND",
                    },
                    {
                        title: "[<g>2.] There are 2,400 quarts of _____ .",
                        word: "NECTA[R]",
                    },
                    {
                        title: "[<g>3.] Which label has an answer of 600?",
                        word: "HON[E]Y",
                    },
                    {
                        title: "[<g>4.] Which task has an answer of 8,000?",
                        word: "P[A]LLETS",
                    },
                ],
                code: {
                    answer: "AREA",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Digit Multiplication",
                    commonCore: [
                        "4.NBT.B.5",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "I'm just trying to help collect nectar, but I don't think the bees like me very much. I mean, they gave me a ripped-up map! I think they're jealous. Think you can help me put the pieces together?",
                    complete: "You steal a carrot once, and people treat you like a criminal forever! Anyway, thanks again."
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
                                    text: "4,327 × 6",
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
                                    text: "216 × 8",
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
                                    text: "22 × 27",
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
                                    text: "1,325 × 7",
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
                                    text: "189 × 3 ",
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
                                    text: "11 × 84",
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
                                    text: "132 × 7",
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
                                    text: "92 × 36",
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
                                    text: "58 × 64",
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
                        title: "[<g>1.] Which two pieces have the same product?",
                        correctIndex: 2,
                        paragraph: [
                            "The {b}ottom left, and the top right",
                            "The top {l}eft, and the top right",
                            "The botto{m} left, and the middle right",
                        ],
                    },
                    {
                        title: "[<g>2.] Which piece has an answer of 20,884?",
                        correctIndex: 2,
                        paragraph: [
                            "The middle righ{t}",
                            "The to{p} left",
                            "None of the {a}bove",
                        ],
                    },
                    {
                        title: "[<g>3.] Which piece has a product of 3,712?",
                        correctIndex: 1,
                        paragraph: [
                            "The fully-gree{n} piece",
                            "The {p}iece with the yellow beehive",
                            "The middle right pie{c}e",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the product of the center piece?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "567 {S}",
                            "459 {R}",
                            "387 {N}",
                        ],
                    },
                ],  
                code: {
                    answer: "MAPS",
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
                    text: "Sort each number into the correct column, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Factors and Multiples",
                    commonCore: [
                        "4.OA.B.4",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "Welcome, Dingo Punks. A great storm is coming! I must count all my bees, but they're a mess right now. Sort them into categories so I may know how many forces we have.",
                    complete: "Well done, Dingo Punks. Do not delay a second more. Help whoever you can!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "[<u>FACTORS OF 32]<br>\"Workers\"",
                        "[<u>FACTORS OF 25]<br>\"Keepers\"",
                        "[<u>FACTORS OF 21]<br>\"Infants\"",
                    ],
                    asset: {
                        scope: "global",
                        path: "3-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Scouts",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "4",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Butlers",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "5",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Foragers",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "16",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Eggs",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "21",
                                }, 
                            },
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Drones",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "32",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Guards",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "25",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Cleaners",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "2",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Larvae",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "7",
                                }, 
                            },
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
                            justifyContent: "center",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which category contains the foragers: [<u>Workers], [<u>Keepers], or [<u>Infants]?',
                        'B. [<u>True] or [<u>false]: 8 is a multiple of the scouts.',
                        'C. How many groups did you sort into the \"Infants\" column?',     
                        'D. [<u>True] or [<u>false]: The number 14 could also be added to the \"Infants\" column.',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","(B)T","0","(D)1F"],
                        ["0","0","0","0","R","0","2A"],
                        ["(C)3T","0","0","0","U","0","L"],
                        ["(A)W","O","R","K","4E","R","S"],
                        ["O","0","0","0","0","0","E"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "FATE",
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