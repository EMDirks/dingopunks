const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/math/multiplication/preview-4th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ pippo's cell
        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzles pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Factors and Multiples",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Operations and Algebraic Thinking",
                            standard: "4.OA.B.4",
                        },
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "Hi, friend! I need to fix my crashed plane so I can fly out of this place, but my blueprint is all mixed up. If you can put the pieces back together, I'll bake those yams for you. Sound like a plan?",
                    complete: "I feel like we should tape this blueprint up. Well, anyway... Thanks and good luck!"
                },
            },

            // puzzle (9x)
            activity: {
                info: {
                type: "dynamic",
                functionality: "drag-and-drop",
                asset: "pippo-fizzlepop-2.png",
                },
                blockArray: [              
                {
                contentArray: [
                    {
                        passage: {
                            text: "11",
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
                            text: "30",
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
                            text: "5",
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
                            text: "7",
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
                            text: "9",
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
                            text: "24",
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
                            text: "3",
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
                            text: "10",
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
                            text: "36",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What are the factors for the bottom right piece?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "1, 2, 3, 4, 6, 9, 12, 16, 18, 36 {P}",
                            "1, 3, 6, 9, 12, 18, 36 {S}",
                            "1, 2, 3, 4, 6, 9, 12, 18, 36 {W}",
                        ],
                    },
                    {
                        title: "[<g>2.] The piece in the center is a ______ number.",
                        correctIndex: 1,
                        paragraph: [
                            "Prim{e}",
                            "Compos{i}te",
                            "F{a}ctor",
                        ],
                    },
                    {
                        title: "[<g>3.] The 3 pieces in the left column are all:",
                        correctIndex: 2,
                        paragraph: [
                            "{M}ultiples of 6",
                            "Facto{r}s of 24",
                            "Prime {n}umbers ",
                        ],
                    },
                    {
                        title: "[<g>4.] Which two pieces are factors of 20?",
                        correctIndex: 0,
                        paragraph: [
                            "The top ri{g}ht, and the bottom middle",
                            "The top right, and the bot{t}om left",
                            "Both pieces with t{h}e red battery",
                        ],
                    },
                ],  
                code: {
                    answer: "WING",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ tater durant's cell
        {

            info: {
                type: 'challenge',
                title: "Tater Durant's Cell",
                asset: "tater-drift.png",
                state: "incomplete",
                hint: {
                    text: "Solve each multiplication problem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Base Ten Multiplication",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations in Base Ten",
                            standard: "4.NBT.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations in Base Ten",
                            standard: "4.NBT.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations in Base Ten",
                            standard: "4.NBT.B.6",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "Man... I just want to jam out and eat spuds all day. But I've run into some potato problems I can't seem to solve. Think you can help me out? I'll totally lend you some yams if you do!",
                    complete: "Thanks dude, you totally saved me from my potato problems! Let's go out for french fries soon."
                },
            },

            // text [tag] (5x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Potato Pancake Nook",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "700 in. × 20 in.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-1%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Mashed Potatoes Nook",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "200 mm × 60 mm",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Potato Chips",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "30 hundred potato chips is the same as _____ thousand potato chips.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-15%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Boiled Potatoes Nook",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Man, this nook is WAY too small... It's only 30 mm long and 40 mm wide. I can't even fit a single potato in here!",
                                },
                            },
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
                            text: "New Lyrics",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I've been writing new lyrics every day. So far, I'm at 23,639 words \u2014 but that's not nearly enough! My goal is 50,000.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-6%",
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
                                size: 'mediumSmall',
                                align: 'left'
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

            // crossword (7x6)
            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Compare the two 3s in \'New Lyrics.\' The left 3 is one _____ times greater than the right 3.',
                        'B. Which potato nook has an area of 12,000 square millimeters: [<u>mashed] or [<u>boiled]?',
                        'C. What number is missing from the \'Potato Chips\' problem?',     
                        'D. Does the area of the potato pancake nook equal 1,400 square inches? (YES/NO)',                    
                    ],
                    puzzle: [
                        ["0","0","0","(B)M","0","0","0"],
                        ["0","0","0","A","0","(C)1T","0"],
                        ["0","(D)N","0","S","0","H","0"],
                        ["0","2O","0","H","0","R","0"],
                        ["0","0","0","E","0","4E","0"],
                        ["(A)H","U","3N","D","R","E","D"],
                    ]
                },  
                code: {
                    answer: "TONE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ dr. seraphina's cell
        {

            info: {
                type: 'challenge',
                title: "Dr. Seraphina's Cell",
                asset: "dr-seraphina.png",
                state: "incomplete",
                hint: {
                    text: "Solve each multiplication problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Digit Multiplication",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations in Base Ten",
                            standard: "3.NBT.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations in Base Ten",
                            standard: "4.NBT.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations in Base Ten",
                            standard: "4.NBT.A.3",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I've been making snow cones from ingredients smuggled into my cell, but all the quantities are in secret code to keep the details safe. Help me decode them, and I'll lend you some sugar!",
                    complete: "Maybe I should try some kind of strawberry flavor next... Well, anyway \u2014 thanks for the help!"
                },
            },

            // text + symbol tag + symbol key (6x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "R",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "13 × 100",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-17%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "C",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "317 × 8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-39%",
                                translateY: "13%",
                                rotate: "-3deg",
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
                                    text: "1,848 × 3",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "25%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "J",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6 × 27",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "12%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "T",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "85 × 9",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-15%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "O",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "264 × 5",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "40%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>R] = lemon snow cones<br> \
                                            [<s>O] = cherry snow cones<br> \
                                            [<s>T] = orange snow cones",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "12%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>C] = melon snow cones<br> \
                                            [<s>J] = berry snow cones<br> \
                                            [<s>D] = paper cups",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "35%",
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
                            font: 'symbols',
                            size: 'medium',
                            align: 'left',
                            padding: 'defaultNoBottom'
                        },
                        dimension: {
                            width: "percent28",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many paper cups does Dr. Seraphina have?",
                        correctIndex: 1,
                        paragraph: [
                            "5,494 pa{p}er cups",
                            "5,544 paper cup{s}",
                            "3,384 paper {c}ups",
                        ],
                    },
                    {
                        title: "[<g>2.] When rounding to the nearest hundred, which two snow cone flavors round to 1,300?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Lemo{n} and cherry",
                            "Lemon and b{e}rry",
                            "Oran{g}e and melon",
                            "Melon and ber{r}y",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of the following flavors does Dr. Seraphina have the most of?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Mel{o}n",
                            "Cherr{y}",
                            "B{e}rry",
                            "Oran{g}e",
                        ],
                    },
                    {
                        title: "[<g>4.] How many orange snow cones are there?",
                        correctIndex: 2,
                        paragraph: [
                            "841 orange snow cone{s}",
                            "685 orange s{n}ow cones",
                            "765 orange sno{w} cones",
                        ],
                    },
                ],  
                code: {
                    answer: "SNOW",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the knight's cell
        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplicative Comparison Word Problems",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Operations and Algebraic Thinking",
                            standard: "4.NBT.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Operations and Algebraic Thinking",
                            standard: "4.OA.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Operations and Algebraic Thinking",
                            standard: "4.OA.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Operations and Algebraic Thinking",
                            standard: "4.OA.A.3",
                        },
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "I cannot spend one more day in this freezing prison... I must break free! Will you read my escape plan and let me know what you think? If you do, I'll lend you a pan to cook those yams.",
                    complete: "Farewell, Puzzle Punks! Watch your step, and beware of large footprints in the snow."
                },
            },

            // text + image (4x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "10.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>1. Melting the Walls]",
                                },
                                passage: {
                                    text: "Using a candle, I can melt through 4 centimeters of ice every hour. To break free, I need to melt through a wall that is 6 times deeper than that.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-10%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "1.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>2. Staying Alert]",
                                },
                                passage: {
                                    text: "One of my fellow prisoners makes snow cones. Eating them is a fantastic way to stay alert! Last week, I collected only 5 snow cones. This week, I collected 3 times as many.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "12%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "11.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>3. Climbing the Cliff]",
                                },
                                passage: {
                                    text: "When I break out of this cell, I must climb down a cliff with a rope. My rope, however, measures just 8 feet. The cliff is 14 times taller.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "1deg",
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
                                    text: "[<u>4. Breaking The Ice]",
                                },
                                passage: {
                                    text: "To break through a big clump of ice, I must swing a hammer 24 times. That's 3 times the hits required to break a small clump! Today, I managed to break 3 big clumps and 2 small clumps.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "12%",
                                rotate: "-3deg",
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
            
            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] In order to escape, how many centimeters of ice must the Frozen Knight melt?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "28 centimeter{s}",
                            "14 centime{t}ers",
                            "24 centi{m}eters",
                            "10 centim{e}ters",
                        ],
                    },
                    {
                        title: "[<g>2.] How many snow cones did she collect this week?",
                        correctIndex: 0,
                        paragraph: [
                            "15 sn{o}w cones",
                            "18 snow con{e}s",
                            "8 snow {c}ones",
                        ],
                    },
                    {
                        title: "[<g>3.] How tall is the cliff?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "111 ft {L}",
                            "112 ft {V}",
                            "113 ft {G}",
                        ],
                    },
                    {
                        title: "[<g>4.] To break through today's clumps of ice, how many times did the Frozen Knight swing the hammer?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "30 time{s}",
                            "120 ti{m}es",
                            "88 tim{e}s",
                            "72 {t}imes",
                        ],
                    },
                ],  
                code: {
                    answer: "MOVE",
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