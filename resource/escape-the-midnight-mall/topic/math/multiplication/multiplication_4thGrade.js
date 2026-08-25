const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/math/multiplication/preview-4th-grade.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [


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
                    topic: "Multiplicative Comparison Word Problems",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.D.8',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.3',
                        },
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee Hee! I'm Topsy and I sell robot pets. I need to focus on inventing new products, but I keep getting distracted by all sorts of business problems! Can you help me out?",
                    complete: "Hee hee! I mean, Arrrr! Can you believe I used to be a pirate?"
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
                                    file: "1.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Owltron]",
                                },
                                passage: {
                                    text: "Last month, Critterwerks sold only 12 Owltrons. This month, Critterwerks sold 15 times as many as last month. We can barely keep up with all the new orders!",
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
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Squix-1000]",
                                },
                                passage: {
                                    text: "The Squix-1000 requires lots of fresh oil to run smoothly. In fact, it needs 5 gallons of oil every week. It will use 52 times more than that over the course of a year.",
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
                                    file: "3.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Bananamatic]",
                                },
                                passage: {
                                    text: "Here at Critterwerks, we offer nine different types of robot pets. Every day, we sell 6 times more Bananamatics than the other 8 robots combined. On Thursday, we sold 2 of each of the other robots.",
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
                        title: "[<g>1.] How many Owltrons were sold this month?",
                        correctIndex: 1,
                        paragraph: [
                            "160 O{w}ltrons",
                            "180 Owlt{r}ons",
                            "150 Owltron{s}",
                        ],
                    },

                    {
                        title: "[<g>2.] How much oil does the Squix-1000 use in a year?",
                        correctIndex: 2,
                        paragraph: [
                            "250 g{a}llons",
                            "500 ga{l}lons",
                            "260 gall{o}ns",
                        ]
                    },

                    {
                        title: "[<g>3.] How many Bananamatics were sold on Thursday?",
                        correctIndex: 2,
                        paragraph: [
                            "48 Banana{m}atics",
                            "54 Banan{a}matics",
                            "96 {B}ananamatics",
                        ]
                    },

                    {
                        title: "[<g>4.] Which number sentence can be used to solve #3?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "2 × 8 × 6 = 96 {O}",
                            "9 × 6 × 8 = 432 {M}",
                            "9 × 8  = 48 {D}",
                        ]
                    },

                ],  

                code: {
                    answer: "ROBO",
                    userArray: ["","","",""]
                },

            }

        },

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
                    topic: "Factors and Multiples",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.B.4',
                        }
                    ],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "Ugh, I just dropped my brand new circuit board on the floor. Can you help me put the pieces back together? This is gonna be tough...",
                    complete: "You can't stay here much longer, I need to lock up for the night."
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
                                    text: "12",
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
                                    text: "15",
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
                                    text: "11",
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
                                    text: "24",
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
                                    text: "3",
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
                                    text: "9",
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
                                    text: "6",
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
                                    text: "7",
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
                                    text: "16",
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
                                size: 'large',
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
                        title: "[<g>1.] What are the first five multiples of the bottom middle piece?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "7, 14, 22, 29, 36 {R}",
                            "7, 15, 21, 28, 36 {B}",
                            "7, 14, 21, 28, 35 {C}",
                            "7, 14, 20, 27, 34 {X}",
                        ],
                    },

                    {
                        title: "[<g>2.] All 3 pieces in the left column are multiples of:",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "4 {E}",
                            "3 {O}",
                            "5 {I}",
                        ],
                    },

                    {
                        
                        title: "[<g>3.] List every factor for the bottom right piece.",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "1, 2, 8, 16 {T}",
                            "1, 2, 4, 6, 8, 14, 16 {L}",
                            "1, 2, 4, 8, 16 {D}",
                        ],
                    },

                    {
                        title: "[<g>4.] Which pieces are prime factors?",
                        correctIndex: 0,
                        paragraph: [
                            "Center, middl{e} bottom, and top right",
                            "Center, middle right, and top r{i}ght",
                            "Cen{t}er, middle top, and middle bottom",
                        ],
                    },

                ],  

                code: {
                    answer: "CODE",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ prismatica
        {

            info: {
                type: 'challenge',
                title: 'Prismatica',
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Solve each multiplication problem, then answer the questions to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplication in Base Ten",
                    
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.B.5',
                        },
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I must calculate the number of gems needed for my new bejeweled clothing line, but multiplication is just so tedious. You will do it for me.",
                    complete: "If you ever need a new stylist, just stop by. There is no shop better than Prismatica."
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
                            text: "Gown",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "There are 132 gems per box. A new sparkly gown requires 40 boxes of gems.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-30%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Cape",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "14,947 gems",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "4%",
                                rotate: "3deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Gloves",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "20 × 40 = ______ gems",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-5%",
                                rotate: "-2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Tunic",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "8 × 600 = ______ gems",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "-20%",
                                rotate: "6deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Robe",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "3,000 × 2 = ______ gems",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "15%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Cloak",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "7 × 1000 = ______ gems",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "10%",
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
                        'A. Which clothing item needs 6,000 gems?',
                        'B. Which clothing item needs 5,280 gems?',
                        'C. Which clothing item needs 800 gems?',     
                        'D. For the cape, the 4 in the thousands place is one _______ times the value of the 4 in the tens place.',
                        
                    ],
                    puzzle: [
                        ["(D)H","U","4N","D","(A)R","2E","D"],
                        ["0","0","0","0","O","0","0"],
                        ["0","0","(B)G","0","B","0","0"],
                        ["(C)G","L","O","V","E","1S","0"],
                        ["0","0","3W","0","0","0","0"],
                        ["0","0","N","0","0","0","0"],
                    ]
                },  

                code: {
                    answer: "SEWN",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ helio athletics
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Solve each multiplication problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Digit Multiplication",
                    
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.B.5',
                        },
                    ],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "Consider me vexed. Why must I stand here wasting time on multiplication, when the battle against the Undermurk demands my attention? I require a capable servant to assist me.",
                    complete: "My strategy is unfolding just as planned. The Undermurk shall terrorize us no more!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "underworld-athletics.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "[<s>A]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "2,586 × 7",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-13%",
                                translateY: "-8%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>C]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "29 × 64",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>D]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "1,710 × 2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-16%",
                                translateY: "0%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>H]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "19 × 73",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "12%",
                                translateY: "10%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>I]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "384 × 8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "6%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>L]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "76 × 45",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>N]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "710 × 6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "13%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>O]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "49 × 97",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "18%",
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
                        tag: {
                            font: 'symbols',
                            size: 'medium',
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
                            passage: {
                                font: 'default',
                                size: 'medium',
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
                        title: "[<g>1.] What are the answers to [<s>A], [<s>H], and [<s>N] ?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "18,102, 1,367, and 4,260 {G}",
                            "14,586, 1,387, and 3,250 {F}",
                            "18,102, 1,387, and 4,260 {D}",
                        ],
                    },

                    {
                        title: "[<g>2.] True or false: the answer to [<s>H] is less than [<s>C].",
                        correctIndex: 0,
                        paragraph: [
                            "Tr{u}e",
                            "{F}alse",
                        ],
                    },

                    {
                        title: "[<g>3.] Are the answers to [<s>D] and [<s>L] the same?",
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },

                    {
                        title: "[<g>4.] What are the answers to [<s>O], [<s>C], and [<s>I] ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "4,353, 1,856, and 2,972 {M}",
                            "4,753, 1,856, and 3,072 {L}",
                            "4,753, 1,742, and 3,072 {D}",
                        ],
                    },

                ],  

                code: {
                    answer: "DUEL",
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


  