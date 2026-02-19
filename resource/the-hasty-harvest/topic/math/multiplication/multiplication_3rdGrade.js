const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/the-hasty-harvest/assets/branding/math/multiplication/preview-3rd-grade.png",
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
                    text: "Solve each multiplication fact, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplication Facts",
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
                            standard: '3.OA.C.7',
                        }
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Hello! My cart is filled with special candles, but the numbers showing how many I have are hidden with secret symbols. Can you crack the code and help me count these candles up?",
                    complete: "Enjoy your visit to the farm, but don't hang around too long. The shadows are starting to stir..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "candlewicks-cart.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "H",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "12 × 11",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "9%",
                                translateY: "-20%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "L",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "3 × 7",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-10%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "D",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "11 × 9",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-35%",
                                translateY: "-25%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "M",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "8 × 8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "11%",
                                translateY: "-8%",
                                rotate: "-2deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "J",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "4 × 6",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "35%",
                                rotate: "3deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "N",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "7 × 6",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-2%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>H] = Enigma Candle<br> \
                                            [<s>D] = Plasma Candle<br> \
                                            [<s>J] = Celestial Candle",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "35%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>L] = Phantom Candle<br> \
                                            [<s>N] = Dragon Candle<br> \
                                            [<s>M] = Moon Candle",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "48%",
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
                            dimension: {
                                width: "full",
                                height: "full",
                            },
                            passage: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
                            },
                            misc: {
                                padding: "default"
                            },
                        }, 
                        { 
                            dimension: {
                                width: "full",
                                height: "full",
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
                        title: "[<g>1.] How many Plasma and Moon Candles are there?",
                        correctIndex: 0,
                        paragraph: [
                            "99 {P}lasma Candles, and 64 Moon Candles",
                            "99 Plasma Candles, and 88 {M}oon Candles",
                            "90 Plasm{a} Candles, and 64 Moon Candles",
                        ],
                    },

                    {
                        title: "[<g>2.] True or false: There are more Phantom Candles than Celestial Candles.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fa{l}se",
                        ],
                    },

                    {
                        title: "[<g>3.] What are the answers to [<s>N] and [<s>H] ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "56 and 132 {R}",
                            "42 and 132 {O}",
                            "42 and 120 {H}",
                        ],
                    },

                    {
                        title: "[<g>4.] The Phantom Candle can also be calculated as: ",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "7 + 7 + 7 + 7 + 7 + 7 + 7 {N}",
                            "3 + 3 + 3 {Y}",
                            "7 × 3 {W}",
                        ],
                    },

                ],  

                code: {
                    answer: "PLOW",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ camp gnomad
        {

            info: {
                type: 'challenge',
                title: 'Camp Gnomad',
                asset: "camp-gnomad.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Determine the Unknown Number in a Multiplication Equation",
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
                            standard: '3.OA.A.4',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.C.7',
                        }
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "The clouds are coming in fast... They'll block our view of the stars! While we're packing up, can you put together the pieces of our star chart?",
                    complete: "Farewell, traveler. The shadows hide more than you think..."
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
                                    text: "5 × ? = 15",
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
                                    text: "10 × ? = 70",
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
                                    text: "8 × ? = 48",
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
                                    text: "? × 3 = 24",
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
                                    text: "9 × ? = 18",
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
                                    text: "? × 7 = 35",
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
                                    text: "6 × ? = 36",
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
                                    text: "9 × ? = 72",
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
                                    text: "? × 3 = 27",
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
                        title: "[<g>1.] What number is missing from the center piece?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "2 {T}",
                            "3 {C}",
                            "9 {P}",
                        ],
                    },

                    {
                        title: "[<g>2.] Which piece is missing the number 9?",
                        correctIndex: 2,
                        paragraph: [
                            "The top ri{g}ht piece",
                            "The bottom le{f}t piece",
                            "The bottom {r}ight piece",
                        ],
                    },

                    {           
                        title: "[<g>3.] Which two pieces are missing the number 6?",
                        correctIndex: 0,
                        paragraph: [
                            "The bottom l{e}ft, and the top right",
                            "The bottom left, a{n}d the middle right",
                            "The middle {l}eft, and the middle right",
                        ],
                    },
 
                    {
                        title: "[<g>4.] Only one puzzle piece is missing a star. What is the related division fact for this piece?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "10 ÷ 70 = ? {A}",
                            "70 ÷ 10 = ? {K}",
                            "10 ÷ 7 = ? {I}",
                            "? × 10 = 70 {O}"
                        ],
                    },



                ],  

                code: {
                    answer: "TREK",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ frantic factory
        {

            info: {
                type: 'challenge',
                title: "Frantic Factory",
                asset: "frantic-factory.png",
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
                            standard: '3.OA.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.C.7',
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
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Hollow Jack here. New instructions received. No time to read. Too busy! You must read for me. Tell me important information. Act quickly!",
                    complete: "You should not be here. Something unknown controls the factory. Leave quickly!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "frantic-factory.png",
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
                                    text: "[<u>1. Instructions for Packing Pumpkins]",
                                },
                                passage: {
                                    text: "Hollow Jack, it is time to pack pumpkins into boxes. Each box can hold 6 pumpkins, and we need to fill 8 boxes. The pumpkins are important for the festival tonight, so make sure they are packed neatly.",
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
                                    text: "[<u>2. Instructions for Collecting Jackets]",
                                },
                                passage: {
                                    text: "Hollow Jack, go into the storage room where we keep the extra flannel jackets. Take 3 baskets, and fill each one with 7 jackets. Do this as quickly as possible, as your time is needed back at the factory.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
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
                                    text: "[<u>3. Instructions for Arranging Candles]",
                                },
                                passage: {
                                    text: "Hollow Jack, we need to check the quality of our latest shipment of candles. Lay them out in 9 rows, with 4 candles in each row. Do not mess this up! These candles are important for lighting up the farmhouse.",
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
                        title: "[<g>1.] How many pumpkins must Hollow Jack pack in all?",
                        correctIndex: 1,
                        paragraph: [
                            "42 pu{m}pkins",
                            "48 {p}umpkins",
                            "45 pump{k}ins",
                        ],
                    },

                    {
                        title: "[<g>2.] How many total jackets must Hollow Jack collect?",
                        correctIndex: 1,
                        paragraph: [
                            "28 jacke{t}s",
                            "21 j{a}ckets",
                            "24 jacket{s}", 
                        ]
                    },

                    {
                        title: "[<g>3.] How many total candles must Jack arrange?",
                        correctIndex: 0,
                        paragraph: [
                            "36 {c}andles",
                            "40 candl{e}s",
                            "32 cand{l}es",
                        ]
                    },

                    {
                        title: "[<g>4.] Hollow Jack must also pack 5 crates, each with 11 potatoes. Which math fact shows this?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "11 ÷ 5 {Y}",
                            "66 ÷ 5 {R}",
                            "10 × 5 {N}",
                            "5 × 11 {K}" 
                        ]
                    },

                ],  

                code: {
                    answer: "PACK",
                    userArray: ["","","",""]
                },

            }

        },
        
        // ⭐ mallow maze
        {

            info: {
                type: 'challenge',
                title: 'Mallow Maze',
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Look at the slips of paper, then answer each question to solve the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Properties of Multiplication; Arrays",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '2.OA.C.4',
                        },
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
                            standard: '3.OA.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.C.7',
                        }
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I'm trying to deliver mail to the farm, but a troll is blocking the bridge! He gave me these slips of paper and a crossword puzzle, saying he'll only let me through if I solve it. How ridiculous... Help!",
                    complete: "Appreciate the help! Thanks to you, I can get this mail to the farm before sunset."
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
                            text: "Slip One",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6 × 4 &nbsp=&nbsp 4 × 6"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "130%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Slip Two",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "5 × 8 =<br>\
                                            5 × (3 + 5) =<br>\
                                            (5 × 3) + (5 × 5) =<br>\
                                            <br>\
                                            15 + 25 = 40"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Slip Three",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>T T T T T T<br>\
                                            T T T T T T<br>\
                                            T T T T T T]",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "50%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Slip Four",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>U U U U U U U <br>\
                                            U U U U U U U <br>\
                                            U U U U U U U <br>\
                                            U U U U U U U]"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "40%",
                                translateY: "2%",
                                rotate: "6deg",
                            }
                        }
                    },

                ],  

                style: { 
                    block: {
                        misc: {
                            material: 'paper',
                            padding: "double"
                        },
                        tag: {
                            font: 'default',
                            size: 'mediumSmall',
                            align: 'left',
                            padding: 'double'
                        },
                        dimension: {
                            width: "auto",
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
                        'A. Which slip of paper shows the commutative property: [<u>one] or [<u>two]?',
                        'B. [<u>True] or [<u>false]: Slip two shows the distributive property.',
                        'C. [<u>True] or [<u>false]: The distributive property uses both multiplication and addition.',
                        'D. Which slip shows the array 3 × 6 = 18?',     
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","0"],
                        ["0","0","0","0","0","(A)O","0"],
                        ["0","0","0","(C)T","0","4N","0"],
                        ["0","(D)1T","H","R","E","E","0"],
                        ["0","0","0","U","0","0","0"],
                        ["(B)T","3R","2U","E","0","0","0"],
                    ]
                },  

                code: {
                    answer: "TURN",
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


  