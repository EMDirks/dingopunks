const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/math/all-standards/thumbnail-3rd-grade-math-mem.png",
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
                    topic: "Multi-Step Word Problems with Addition and Subtraction",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations in Base Ten',
                            standard: '3.NBT.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.D.8',
                        },
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hello! I'm Topsy, and I sell robot pets. I want to work on some new inventions, but I have so many orders to manage first! Can you help me?",
                    complete: "Hee hee! Thanks for the help. Can you believe I used to be a pirate?"
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
                                    file: "5.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>1. Spare Parts]",
                                },
                                passage: {
                                    text: "Topsy had 250 spare parts delivered in the morning. In the afternoon, she received an additional 375 spare parts. By the end of the day, she had sold 190 of these spare parts to customers.",
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
                                    file: "3.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>2. Bananatrons]",
                                },
                                passage: {
                                    text: "Topsy started the month with 500 Bananatrons in storage. She sold 180 Bananatrons in the first half of the month, and 145 Bananatrons in the second half of the month.",
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
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>3. Squidlies]",
                                },
                                passage: {
                                    text: "Last month, Topsy sold 450 Squidlies. This month, she sold 300 more Squidlies than last month. Unfortunately, 175 of the ones sold this month were returned due to defects. ",
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
                        title: "[<g>1.] How many spare parts does Topsy have left?",
                        correctIndex: 0,
                        paragraph: [
                            "435 spare part{s}",
                            "815 spare p{a}rts",
                            "315 spare {p}arts",
                        ],
                    },

                    {
                        title: "[<g>2.] How many Bananatrons does Topsy have left?",
                        correctIndex: 1,
                        paragraph: [
                            "825 Ba{n}anatrons",
                            "175 Ban{a}natrons",
                            "325 Bananatron{s}"                        
                        ]
                    },

                    {
                        title: "[<g>3.] After subtracting the 175 returns, how many Squidlies did Topsy sell this month?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "575 Squid{l}ies",
                            "325 S{q}uidlies",
                        ]
                    },

                    {
                        title: "[<g>4.] After subtracting the 175 returns, how many more squidlies than banantrons did Topsy sell this month?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "900 {m}ore",
                            "300 mo{r}e",
                            "350 m{o}re",
                            "250 mor{e}" 
                        ]
                    },

                ],  

                code: {
                    answer: "SALE",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ the candy cave
        {

            info: {
                type: 'challenge',
                title: 'The Candy Cave',
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Solve each math fact, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplication and Division Facts",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.C.7',
                        },
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "Oh no... Did you hear that? I think the Mallcrawlers are hiding somewhere nearby. I really can't deal with this right now. I still have so many candies to count. Help!",
                    complete: "Did you hear that? There's definitely something in the walls..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "the-candy-cave.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "[<scs>A]",
                            transform: {
                                translateX: "3%",
                                translateY: "1%",
                                rotate: "1deg",
                            }
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "5 × 7",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "-8%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<scg>C]",
                            transform: {
                                translateX: "-3%",
                                translateY: "-20%",
                                rotate: "-6deg",
                            }
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "28 ÷ 7",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-25%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<sct>D]",
                            transform: {
                                translateX: "2%",
                                translateY: "-6%",
                                rotate: "9deg",
                            }
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "9 × 3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-16%",
                                translateY: "-65%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<scb>H]",
                            transform: {
                                translateX: "1%",
                                translateY: "4%",
                                rotate: "-5deg",
                            }
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "35 ÷ 5",
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
                            text: "[<scp>I]",
                            transform: {
                                translateX: "2%",
                                translateY: "15%",
                                rotate: "12deg",
                            }
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6 × 4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "-25%",
                                rotate: "-5deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<scg>L]",
                            transform: {
                                translateX: "3%",
                                translateY: "3%",
                                rotate: "2deg",
                            }
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "16 ÷ 2",
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
                            text: "[<sct>N]",
                            transform: {
                                translateX: "3%",
                                translateY: "-2%",
                                rotate: "-10deg",
                            }
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "2 × 8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "25%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<scs>O]",
                            transform: {
                                translateX: "-6%",
                                translateY: "-8%",
                                rotate: "7deg",
                            }
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "54 ÷ 9",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "18%",
                                translateY: "60%",
                                rotate: "2deg",
                            }
                        }
                    },


                ],  

                style: { 
                    container: {
                        dimension: {
                            width: "percent60",
                            height: "full",
                        },
                    },
                    block: {
                        misc: {
                            material: 'paper',
                            padding: "default"
                        },
                        tag: {
                            font: 'symbols',
                            size: 'medium',
                            align: 'left',
                            padding: 'defaultNoBottom'
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
                        title: "[<g>1.] What are the answers to  [<s>A], [<s>D], [<s>I], and [<s>N] ?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "30,  27,  24, and 14 {B}",
                            "35,  29,  20, and 16 {R}",
                            "35,  27,  24, and 16 {M}",
                        ],
                    },

                    {
                        title: "[<g>2.] What are the answers to  [<s>C], [<s>H], [<s>L], and [<s>O] ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "4,  7,  9, and 8 {O}",
                            "4,  7,  8, and 6 {I}",
                            "3,  6,  8, and 7 {E}",
                        ],
                    },

                    {
                        title: "[<g>3.] Which of the following is true?",
                        correctIndex: 1,
                        paragraph: [
                            "The answer to [<s>L] is {l}ess than the answer to [<s>H]",
                            "The answer to [<s>L] is greater tha{n} the answer to [<s>H]",
                            "The ans{w}er to [<s>L] is equal to the answer to [<s>H]",
                        ],
                    },

                    {
                        title: "[<g>4.] Which two multiplication and division facts are related?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "[<s>I] and [<s>C] {L}",
                            "[<s>A] and [<s>L] {E}",
                            "[<s>A] and [<s>H] {T}",
                            "[<s>N] and [<s>O] {A}",
                        ],
                    },

                ],   

                code: {
                    answer: "MINT",
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
                    text: "Put together the pieces of the puzzle, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Round to the Nearest 10 or 100",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations in Base Ten',
                            standard: '3.NBT.A.1',
                        },
                    ],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "Ugh... I spent the whole day trying to build a new circuit board for my game, but I can't figure out how the pieces go together. You won't be able to do it either, but I guess you can try.",
                    complete: "Uh, why are you still here? Don't you have better things to do?"
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
                                    text: "64",
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
                                    text: "98",
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
                                    text: "325",
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
                                    text: "407",
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
                                    text: "457",
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
                                    text: "205",
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
                                    text: "153",
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
                                    text: "296",
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
                                    text: "867",
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
                        title: "[<g>1.] Round the middle piece to the nearest 10.",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "500 {P}",
                            "460 {G}",
                            "50 {F}",
                        ],
                    },

                    {
                        title: "[<g>2.] Round the purple pieces to the nearest 10. Do both pieces round down or up?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Both r{o}und down",
                            "Both {r}ound up",
                        ],
                    },

                    {
                        
                        title: "[<g>3.] Which two pieces are best rounded to 300?",
                        correctIndex: 1,
                        paragraph: [
                            "Top right and top {l}eft",
                            "Top r{i}ght and middle bottom",
                            "Bot{h} yellow pieces",
                        ],
                    },

                    {
                        title: "[<g>4.] Round the 3 pieces in the left column to the nearest 100.",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "300,  400,  200 {L}",
                            "100,  400,  100 {Z}",
                            "100,  400,  200 {D}",
                            "0,  400,  200 {A}",
                        ],
                    },

                ],  

                code: {
                    answer: "GRID",
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
                    text: "Find the length of each figure, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Measure and Compare Length in Units",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [2],
                            category: 'Measurement and Data',
                            standard: '2.MD.A.4',
                        },
                        {
                            subject: 'Math',
                            grade: [2],
                            category: 'Measurement and Data',
                            standard: '2.MD.D.9',
                        },
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I need to order some fabric for a fashion show next week. Can you check my measurements and answer some questions?",
                    complete: "Perhaps you're not as useless as I thought. Come back again sometime, okay?"
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
                            text: "Length of fabric needed for a [<u>tunic].",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 9,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "-15%",
                                rotate: "-5deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Length of fabric needed for a [<u>dress].",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 8,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "3%",
                                rotate: "-2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Length of fabric needed for a [<u>cape].",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 6,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "0%",
                                rotate: "-3deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Length of fabric needed for [<u>leggings].",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 5,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "10%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Length of fabric needed for [<u>gloves].",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 3,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "15%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Length of fabric needed for a [<u>robe].",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 10,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "12%",
                                translateY: "15%",
                                rotate: "3deg",
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
                            alignItems: "center",
                        },
                    },
                    contentArray: [
                        {
                            figure: {
                                border: {
                                    width: 'thin'
                                },
                                background: {
                                    color: 'gold',
                                }
                            },   
                            cell: {
                                border: {
                                    width: 'thin'
                                },
                                dimension: {
                                    size: 'large',
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
                            misc: {
                                padding: "default"
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
                        title: "[<g>1.] Which item uses the shortest piece of fabric?",
                        correctIndex: 1,
                        paragraph: [
                            "Leg{g}ings",
                            "Glo{v}es",
                            "C{a}pe",
                        ],
                    },

                    {
                        title: "[<g>2.] Find the longest piece of fabric. Does it have a length of 10 units?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },

                    {
                        title: "[<g>3.] How much longer is the dress than the leggings?",
                        correctIndex: 1,
                        paragraph: [
                            "2 uni{t}s",
                            "3 unit{s}",
                            "4 u{n}its",
                        ],
                    },

                    {
                        title: "[<g>4.] How much shorter is the cape than the robe?",
                        correctIndex: 2,
                        paragraph: [
                            "6 {u}nits",
                            "5 un{i}ts",
                            "4 uni{t}s",
                        ],
                    },

                ],  

                code: {
                    answer: "VEST",
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
                    text: "Look at the shapes, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions of Shapes",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                    ],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I would much prefer to plan an attack on the Undermurk \u2014 but instead, I have been tasked with drawing logos for a new line of shoes. Perhaps you can help me in this quest.",
                    complete: "Well, I am certainly impressed. Perhaps I will require your skills again in the future."
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
                            text: "[<u>Booster] Logo",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "mm1_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "9%",
                                translateY: "-30%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>SlamSprint] Logo",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "mm1_2.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Run-Z] Logo",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "mm1_3.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-20%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Flex] Logo",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "mm1_4.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "20%",
                                rotate: "4deg",
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
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            dimension: {
                                width: "percent70",
                                height: "full",
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
                        'A. What is the denominator for SlamSprint?',
                        'B. Booster is divided into _______ .',
                        'C. Does Run-Z show the fraction [<f>3/5] ? (YES/NO)',     
                        'D. Which shoe shows the fraction [<f>2/3] ?',
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","0"],
                        ["0","0","(D)F","4L","(A)3E","X","0"],
                        ["0","0","0","0","I","0","0"],
                        ["0","0","0","0","G","0","(C)Y"],
                        ["0","0","0","0","H","0","2E"],
                        ["(B)F","O","U","R","T","1H","S"],
                    ]
                },  

                code: {
                    answer: "HEEL",
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


  