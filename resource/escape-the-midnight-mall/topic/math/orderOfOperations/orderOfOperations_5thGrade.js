const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/math/order-of-operations/preview-5th-grade.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [


        // ⭐ zeebplex
        {

            info: {
                type: 'challenge',
                title: "ZeebPlex",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Equations With All Four Operations",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.6',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.1',
                        },
                    ],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "I spent all day attempting to assemble the circuit board for a new arcade game, but I can't figure out how the pieces go together! You can try if you want, but I doubt you're smart enough.",
                    complete: "Why are you still here? I'm too busy to entertain you..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "zeeb-plex.png",
                },

                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "(8+1+2+4) ÷ (7-2)",
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
                                    text: "3 + 5 - 6",
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
                                    text: "9 × 2 + 7",
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
                                    text: "(8+2)(10-6)",
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
                                    text: "(12÷4) + 9 - (5-2)",
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
                                    text: "(6-3) + (5-3)",
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
                                    text: "5 × (3+7) - 4 ÷ 2",
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
                                    text: "5(7+1)",
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
                                    text: "56 ÷ 2 - 4",
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
                        title: "[<g>1.] The answers to the pieces on the top row are:",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "3, 2, and 25 {P}",
                            "2, 8, and 126 {C}",
                            "2, -2, and 27 {D}",
                        ],
                    },

                    {
                        title: "[<g>2.] Which pieces both have an answer of 40?",
                        correctIndex: 2,
                        paragraph: [
                            "{T}he two yellow pieces",
                            "The middle left piece, and {b}ottom right piece",
                            "The middle left piece, and middle b{o}ttom piece",
                        ],
                    },

                    {
                        title: "[<g>3.] What is the answer to the bottom left piece?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "46 {W}",
                            "23 {L}",
                            "48 {R}",
                        ],
                    },

                    {
                        title: "[<g>4.] True or false: The bottom right piece is greater than the center piece.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{T}rue",
                            "Fal{s}e"
                        ],
                    },

                ],  

                code: {
                    answer: "PORT",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ critterwerks
        {

            info: {
                type: 'challenge',
                title: "Critterwerks",
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Word Problems",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.2',
                        },
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee hee, I'm Topsy! I need to figure out how much money I made today, but I'm just so bad at math. Can you help me?",
                    complete: "Hee Hee! Did you know I'm great at breaking locks? Don't tell anyone!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "critterwerks.png",
                },

                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "7.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Pollytron]",
                                },
                                passage: {
                                    text: "Here at Critterwerks, we sell the Pollytron for $50. Today, a customer bought 3 Pollytrons, plus 2 extra motors. Each spare motor costs $15.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "6.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Spare Parts]",
                                },
                                passage: {
                                    text: "A box of spare parts costs $60. Today, a customer named Basil bought 4 boxes of spare parts, plus a single can of oil priced at $20. At checkout, he handed over a coupon for 10% off his total purchase.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-6%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "8.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Pixel Pig]",
                                },
                                passage: {
                                    text: "Our Pixel Pig is the finest pig-shaped printer money can buy! Each one costs $45, and a set of special printer paper costs $12. Today, a customer bought 5 Pixel Pigs and 4 sets of special printer paper. They then used a $30 gift card towards their  total purchase.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-12%",
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
                        title: "[<g>1.] Find the cost of 3 Pollytrons and 2 extra motors.",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "( 3 × 50 ) + ( 2 × 15 ) = $195 {R}",
                            "3 × ( 50 + 2 ) × 15 = $2,340 {P}",
                            "3 × 50 + 2 × 15 = $180 {B}",
                        ],
                    },

                    {
                        title: "[<g>2.] How much money did Basil spend in total?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "$236 {I}",
                            "$26 {U}",
                            "$234 {O}",
                        ]
                    },

                    {
                        title: "[<g>3.] How much money did the customer pay for their order of Pixel Pigs and special printer paper?",
                        answerType: "numerals",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "$243 {T}",
                            "$273 {P}",
                            "$225 {B}",
                            "$303 {N}",
                        ]
                    },

                    {
                        title: "[<g>4.] What acronym is used to represent the order of operations?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "PE{D}MAS",
                            "PEMDA{S}",
                            "{M}ASPED",
                            "{P}EMDSA",
                        ]
                    },

                ],  

                code: {
                    answer: "BOTS",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ the candy cave
        {

            info: {
                type: 'challenge',
                title: "The Candy Cave",
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Sort each equation as either true or false, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Sort Equations as True or False",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.6',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.1',
                        },
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I'm trying to fill a bunch of orders before midnight, but I think I did some of the math wrong. Can you help me sort these equations as either true or false?",
                    complete: "I heard Zeeb whisper something about a secret tunnel inside this cave..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "TRUE Equations",
                        "FALSE Equations",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },
    
                blockArray: [
                    
                    {
                        tag: {
                            text: "Rock Candy Sticks",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "15 + 19 × 9 = 186",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Chocolate Bars",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "( 15 + 15 - 2 ) ÷ 7 = 4",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Gumdrop Pieces",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "10 × 4 ( 8 + 6 ) = 560",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Taffy Chunks",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "( 4 + 6 ) × 2 = 16",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Gummy Packs",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "12 × 20 ÷ 2 + 6 = 124",
                                },  
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Fudge Blocks",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "3 × 3 × 6 - 19 = 35",
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
                                size: 'mediumSmall',
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
                        title: "[<g>1.] How many equations are true?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "2 {B}",
                            "3 {T}",
                            "4 {C}",
                        ],
                    },
    
                    {
                        title: "[<g>2.] The correct answer for the gummy packs is 125.",
                        correctIndex: 1,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
    
                    {
                        title: "[<g>3.] Are the taffy chunks calculated correctly?",
                        correctIndex: 0,
                        paragraph: [
                            "{N}o",
                            "{Y}es",
                        ],
                    },
    
                    {
                        title: "[<g>4.] If the 'chocolate bars' equation was changed to <nobr>( 19 + 18 - 2 ) ÷ 7</nobr>, what would the answer be?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "4 {D}",
                            "6 {T}",
                            "5 {E}",
                            "4.5 {P}",
                        ],
                    },
    
                ],  
    
                code: {
                    answer: "CANE",
                    userArray: ["","","",""]
                },
    
            }

        },

        // ⭐ prismatica
        {

            info: {
                type: 'challenge',
                title: "Prismatica",
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Solve each problem, then answer the questions to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Equations With Exponents",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.6',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.1',
                        },
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I must calculate how much fabric is needed for my new clothing collection. But it's such a tedious task... I cannot be bothered to do it myself. Perhaps you will help?",
                    complete: "While I am delighted to have you in my shop, I am far too busy to engage in conversation."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "holographia.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "Yards of Cotton",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "2<sup>2</sup> × ( 4 + 6 ) - 5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-10%",
                                rotate: "-5deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Satin",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "5( 6 - 2 ) + 4<sup>3</sup> ÷ 2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-3%",
                                rotate: "8deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Lace",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "( 10 - 4 ) ÷ 2 + 5<sup>2</sup> × 3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "8%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Velvet",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: " 18 ÷ ( 3 × 2 ) + 4<sup>2</sup>",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "-5%",
                                rotate: "-6deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Silk",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "24 ÷ ( 3 + 1<sup>4</sup> ) + 5 - 2",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "5%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Linen",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "9<sup>2</sup> + 2<sup>3</sup> + 5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "12%",
                                rotate: "-3deg",
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
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
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
                        'A. Which material requires 94 yards?',
                        'B. Which material requires 78 yards?',
                        'C. Which material requires 19 yards?',     
                        'D. Does silk or cotton require more yards?',
                        
                    ],
                    puzzle: [
                        ["0","0","0","(C)V","0","0","0"],
                        ["(B)L","3A","1C","E","0","(A)L","0"],
                        ["0","0","0","L","0","I","0"],
                        ["0","0","0","V","0","N","0"],
                        ["0","0","0","E","0","E","0"],
                        ["(D)C","O","4T","T","2O","N","0"],
                    ]
                },  

                code: {
                    answer: "COAT",
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

    ],

};


  