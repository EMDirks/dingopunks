const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/math/all-standards/thumbnail-3rd-grade.png",
        timerLabel: "TIME TO SUNSET"
    },

    challengeArray: [


        // ⭐ candlewick's cart
        {

            info: {
                type: 'challenge',
                title: "Candlewick's Cart",
                asset: "candlewicks-cart.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Step Word Problems With Addition and Subtraction",
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
                            category: 'Number and Operations in Base Ten',
                            standard: '3.NBT.A.3',
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
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Howdy, friend! Welcome to the farm. It's getting dark fast, but I still have a bunch of tasks to complete. Think you can help?",
                    complete: "Enjoy your visit to the farm! Feel free to take a look around, but don't linger after sunset..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "candlewicks-cart.png",
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
                                    text: "[<u>1. Candles]",
                                },
                                passage: {
                                    text: "Candlewick needs to store candles in 3 different cabinets. In the first cabinet, she can store 125 candles. In the second cabinet, she can store 75 candles. In the third cabinet, she can store 60 fewer candles than the first.",
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
                                    file: "5.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>2. Giant Pumpkins]",
                                },
                                passage: {
                                    text: "Candlewick's workers harvested 480 giant pumpkins from the fields this season. She sold 300 of these pumpkins at the local market, then gave 50 back to her workers as a gift.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-6%",
                                rotate: "2deg",
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
                                    text: "[<u>3. Payday]",
                                },
                                passage: {
                                    text: "It's payday on the farm, and Candlewick must pay her workers for last week's work. She owes Hollow Jack $179, Stefan Sage $86, and the Gnomads $354. Mabel, the farm's messenger, is owed $63 more than Stefan Sage.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-12%",
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
                        title: "[<g>1.] How many total candles can Candlewick put in all three cabinets?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "265 {c}andles",
                            "385 cand{l}es",
                            "260 ca{n}dles",
                            "155 candle{s}",
                        ],
                    },

                    {
                        title: "[<g>2.] How many giant pumpkins are left?",
                        correctIndex: 0,
                        paragraph: [
                            "130 gi{a}nt pumpkins",
                            "830 giant {p}umpkins",
                            "230 {g}iant pumpkins"                        
                        ]
                    },

                    {
                        title: "[<g>3.] How much money does Candlewick owe Mabel?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "$682 {M}",
                            "$149 {S}",
                            "$159 {N}",
                        ]
                    },

                    {
                        title: "[<g>4.] All together, how much money does Candlewick owe her workers?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "$682 {T}",
                            "$782 {D}",
                            "$668 {P}",
                            "$768 {H}",
                        ]
                    },

                ],  

                code: {
                    answer: "CASH",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ applegrim orchard
        {

            info: {
                type: 'challenge',
                title: 'Applegrim Orchard',
                asset: "applegrim-orchard.png",
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
                            standard: '3.OA.C.7',
                        },
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "Candlewick gave me problems to learn, but multiplication is twisted and turned! Division's no better, makes no sense to me. So I ask of you, can you please help me?",
                    complete: "In the forest deep, secrets softly sleep. The shadows whisper. The old trees weep..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "applegrim-orchard.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "[<s>A]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "5 × 9",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-16%",
                                rotate: "4deg",
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
                                    text: "63 ÷ 7",
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
                            text: "[<s>D]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "9 × 7",
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
                            text: "[<s>H]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "77 ÷ 11",
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
                                    text: "6 × 6",
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
                            text: "[<s>L]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "64 ÷ 8",
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
                                    text: "3 × 11",
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
                            text: "[<s>O]",
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
                            width: "full",
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
                            "40,  63,  30, and 33 {B}",
                            "45,  64,  36, and 36 {R}",
                            "45,  63,  36, and 33 {C}",
                        ],
                    },

                    {
                        title: "[<g>2.] Is the answer to [<s>L] less than the answer to [<s>H] ?",
                        correctIndex: 1,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                            "Both {a}nswers are the same"
                        ],
                    },

                    {
                        title: "[<g>3.] What are the answers to  [<s>C], [<s>H], [<s>L], and [<s>O] ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "8,  7,  9, and 5 {I}",
                            "9,  7,  8, and 4 {R}",
                            "9,  6,  8, and 3 {A}",
                        ],
                    },



                    {
                        title: "[<g>4.] Which two multiplication and division facts are related?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "[<s>A] and [<s>H] {K}",
                            "[<s>A] and [<s>L] {X}",
                            "[<s>D] and [<s>C] {E}",
                            "[<s>N] and [<s>O] {P}",
                        ],
                    },

                ],   

                code: {
                    answer: "CORE",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ camp gnomad
        {

            info: {
                type: 'challenge',
                title: "Camp Gnomad",
                asset: "camp-gnomad.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "We ain't waiting for those Fallcrawlers to come around... They might eat us! While we pack up, can you put together the pieces of our map? We follow the stars, you know.",
                    complete: "Thanks for the help, friends. Perhaps our paths will cross again. Follow the North Star!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "camp-gnomad.png",
                },

                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "463",
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
                                    text: "2,394",
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
                                    text: "412",
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
                                    text: "1,736",
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
                                    text: "936",
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
                                    text: "854",
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
                                    text: "386",
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
                                    text: "769",
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
                                    text: "291",
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
                        correctIndex: 2,
                        paragraph: [
                            "900 {G}",
                            "40 {F}",
                            "940 {Y}",
                        ],
                    },

                    {
                        title: "[<g>2.] Round the piece without a star to the nearest 100.",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "2,400 {U}",
                            "2,300 {O}",
                            "2,390 {E}",
                        ],
                    },

                    {
                        
                        title: "[<g>3.] Round the three gray pieces to the nearest 10. Do they all round down or up?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "They all {r}ound down",
                            "T{h}ey all round up",
                        ],
                    },

                    {
                        title: "[<g>4.] Which two pieces are best rounded to 400?",
                        correctIndex: 1,
                        paragraph: [
                            "The top right, and the t{o}p left",
                            "The bottom lef{t}, and the top right",
                            "The mi{d}dle top, and the middle bottom",
                        ],
                    },

                ],  

                code: {
                    answer: "YURT",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ frantic factory
        {

            info: {
                type: 'challenge',
                title: 'Frantic Factory',
                asset: "frantic-factory.png",
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
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "I am Hollow Jack. I put fruits and veggies into crates. I must measure each crate. Make sure they fit on truck. But I have no time. You must help me.",
                    complete: "No trespassing after dark. No trespassing after dark. No trespassing after dark."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "frantic-factory.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "Length of a [<u>pumpkin crate].",
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
                                translateX: "-15%",
                                translateY: "-15%",
                                rotate: "-5deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Length of a [<u>dragonfruit crate].",
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
                                translateX: "-15%",
                                translateY: "-15%",
                                rotate: "-2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Length of a [<u>corn crate].",
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
                                translateX: "-8%",
                                translateY: "0%",
                                rotate: "-3deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Length of a [<u>tomato crate].",
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
                                translateX: "7%",
                                translateY: "10%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Length of an [<u>apple crate].",
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
                                translateX: "-4%",
                                translateY: "20%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Length of a [<u>gourd crate].",
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
                                translateX: "18%",
                                translateY: "25%",
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
                        title: "[<g>1.] What is the length of the longest crate?",
                        correctIndex: 1,
                        paragraph: [
                            "9 {u}nits",
                            "10 unit{s}",
                            "8 uni{t}s",
                        ],
                    },

                    {
                        title: "[<g>2.] Which two crates are the same length?",
                        correctIndex: 2,
                        paragraph: [
                            "The corn crat{e} and gourd crate",
                            "The pumpkin crate and {a}pple crate",
                            "The apple crate and drag{o}nfruit crate",
                        ],
                    },

                    {
                        title: "[<g>3.] How much shorter is the pumpkin crate than the gourd crate?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "2 units sho{r}ter",
                            "5 {u}nits shorter",
                            "4 uni{t}s shorter",
                            "3 units {s}horter",
                        ],
                    },

                    {
                        title: "[<g>4.] Which crate has the smallest length?",
                        correctIndex: 1,
                        paragraph: [
                            "A{p}ple",
                            "Toma{t}o",
                            "Gou{r}d",
                        ],
                    },

                ],  

                code: {
                    answer: "SORT",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ mallow maze
        {

            info: {
                type: 'challenge',
                title: "Mallow Maze",
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Look at the shapes and number line, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions of Shapes and Number Lines",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2a',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3c',
                        },
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I'm fixing up a scarecrow, and I need to add more straw. But my instructions are just these weird shapes and lines... I really don't get it! Think you can help?",
                    complete: "Hey, uh. Tell me if you ever see any Fallcrawlers around. Not because I'm scared or anything..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "mallow-maze.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "Straw needed for the [<u>arms].",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_4-5.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "20%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Straw needed for the [<u>hands].",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_3-3.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "10%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Straw needed for the [<u>head].",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 3,
                                        dot: 1
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "15%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Straw needed for the [<u>torso].",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_3-5.svg",
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
                        'A. Is [<u>four] or [<u>five] the numerator for the arms?',
                        'B. The torso is divided into _____ .',
                        'C. Is [<f>1/3] the fraction shown for the head? (YES/NO)',     
                        'D. Which scarecrow part shows one whole?',
                        
                    ],
                    puzzle: [
                        ["0","0","(B)F","0","0","0","0"],
                        ["0","0","3I","0","0","0","0"],
                        ["0","0","(A)F","O","U","4R","0"],
                        ["0","0","T","0","0","0","0"],
                        ["0","0","(D)1H","2A","N","D","S"],
                        ["(C)Y","E","S","0","0","0","0"],
                    ]
                },  

                code: {
                    answer: "HAIR",
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


  