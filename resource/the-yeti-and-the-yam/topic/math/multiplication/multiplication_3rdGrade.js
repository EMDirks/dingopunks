const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/math/multiplication/preview-3rd-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ dr. seraphina's cell
        {

            info: {
                type: 'challenge',
                title: "Dr. Seraphina's Cell",
                asset: "dr-seraphina.png",
                state: "incomplete",
                hint: {
                    text: "Solve each multiplication fact, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplication Facts",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.C.7",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I've been making snow cones from ingredients I found in this cave, but the amounts are in secret code to keep the details safe. Help me decode them, and I'll lend you some sugar!",
                    complete: "If you ever want to try some of these new flavors, just let me know. Thanks for the help!"
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
                            text: "A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "12 × 6",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "-8%",
                                rotate: "-2deg",
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
                                    text: "9 × 7",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "3%",
                                rotate: "-1deg",
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
                                    text: "6 × 3",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-30%",
                                translateY: "-12%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "H",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "4 × 12",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "I",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "8 × 6",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "9%",
                                translateY: "-6%",
                                rotate: "2deg",
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
                                    text: "7 × 7",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "14%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>A] = Snowshroom<br> \
                                            [<s>D] = Dragonfruit<br> \
                                            [<s>I] = Slug Slime",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "15%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>C] = Cave Moss<br> \
                                            [<s>H] = Yeti Sweat<br> \
                                            [<s>L] = Icegrass",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "18%",
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
                            font: 'symbols',
                            size: 'medium',
                            align: 'left',
                            padding: 'defaultNoBottom'
                        },
                        dimension: {
                            width: "percent25",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which two flavors both have an answer of 48?",
                        correctIndex: 2,
                        paragraph: [
                            "Snowshroom and drago{n}fruit",
                            "Slug slime and sno{w}shroom",
                            "Yeti sweat and slug s{l}ime",
                        ],
                    },
                    {
                        title: "[<g>2.] Which product is greater: icegrass or slug slime?",
                        correctIndex: 0,
                        paragraph: [
                            "{I}cegrass",
                            "Slug s{l}ime",
                            "B{o}th products are the same",
                        ],
                    },
                    {
                        title: "[<g>3.] List the products of [<s>A], [<s>C], and [<s>H]:",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "72, 62, and 48 {L}",
                            "72, 63, and 48 {M}",
                            "66, 72, and 88 {V}",
                        ],
                    },
                    {
                        title: "[<g>4.] What is dragonfruit's product?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "24 {T}",
                            "18 {E}",
                            "21 {F}",
                        ],
                    },
                ],  
                code: {
                    answer: "LIME",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ pippo's cell
        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Determine the Unknown Number in an Equation",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.A.4",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.C.7",
                        },
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "I was building airplane to escape this place, but the blueprint for my engine got all torn up! If you help me put it back together, I'll help you bake some yams. Deal?",
                    complete: "Oh my, oh my \u2014 there's still so much work to do. Thanks a million!"
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
                                    text: "7 × ? = 28",
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
                                    text: "? × 8 = 32",
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
                                    text: "3 × ? = 12",
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
                                    text: "? × 11 = 33",
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
                                    text: "8 × 9 = ?",
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
                                    text: "6 × ? = 30",
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
                                    text: "9 × ? = 45",
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
                                    text: "? × 3 = 21",
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
                                    text: "8 × ? = 64",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] All 3 pieces in the top row are missing the number:",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "6 {H}",
                            "5 {S}",
                            "4 {F}",
                        ],
                    },
                    {
                        title: "[<g>2.] Which two pieces are missing the number 5?",
                        correctIndex: 0,
                        paragraph: [
                            "The bottom {l}eft, and the middle right",
                            "The b{o}ttom left, and the top right",
                            "The bottom {m}iddle, and the top right",
                        ],
                    },
                    {
                        title: "[<g>3.] Which one of these division facts relates to the bottom middle piece?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "3 ÷ 21 = ? {L}",
                            "? ÷ 3 = 21 {S}",
                            "21 ÷ 3 = ? {A}",
                            "? ÷ 21 = 3 {O}",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the product of the center piece?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "72 {P}",
                            "81 {T}",
                            "64 {D}",
                        ],
                    },
                ],  
                code: {
                    answer: "FLAP",
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
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Word Problems",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Measurement and Data",
                            standard: "3.MD.C.5",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Measurement and Data",
                            standard: "3.MD.C.7",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Measurement and Data",
                            standard: "3.MD.C.7b",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.A.3",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.C.7",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "I love writing songs about potatoes! If you help me figure out how to write my songs faster, I'll give you some tasty yams. What do you say?",
                    complete: "Thanks for the help, spuddy! Get it? Spuddy... Spud... Buddy... Hahaha!"
                },
            },

            // text + image (3x)
            activity: {

                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
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
                                    text: "[<u>1. Cheesy Potatoes]",
                                },
                                passage: {
                                    text: "Tater Durant wrote a song about cheesy potatoes, which he then titled \"Cheesy Potatoes.\" To avoid getting sad and lonely, he used to sing this song 5 times a day. He did this every day for an entire week!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "5%",
                                rotate: "2deg",
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
                                    text: "[<u>2. The Icy Cell]",
                                },
                                passage: {
                                    text: "Despite being locked up in a cold prison, Tater Durant never stops writing songs about potatoes. In fact, he comes up with his best lyrics while walking laps around his icy cell. The cell is 6 feet wide and 8 feet long.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "2%",
                                rotate: "3deg",
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
                                    text: "[<u>3 & 4. New Verses]",
                                },
                                passage: {
                                    text: "Tater Durant stayed up late adding new verses to some of his old songs. Before he went to bed, he worked on seven different songs about french fries. Each song got three new verses.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
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
            
            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many times did Tater sing \"Cheesy Potatoes?\"",
                        correctIndex: 1,
                        paragraph: [
                            "40 tim{e}s",
                            "35 {t}imes",
                            "42 t{i}mes",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the area of Tater Durant's icy cell?",
                        correctIndex: 1,
                        paragraph: [
                            "42 square fee{t}",
                            "48 sq{u}are feet",
                            "14 squar{e} feet",
                        ],
                    },
                    {
                        title: "[<g>3.] Before going to bed, how many new verses did Tater Durant write?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "14 new {v}erses",
                            "10 ne{w} verses",
                            "21 {n}ew verses",
                            "7 new ve{r}ses",
                        ],
                    },
                    {
                        title: "[<g>4.] If each song got 4 new verses instead of just 3, how many verses would Tater Durant have written?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "28 new vers{e}s",
                            "12 new {v}erses",
                            "25 new ver{s}es",
                            "30 new ve{r}ses",
                        ],
                    },
                ],  
                code: {
                    answer: "TUNE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ fishbeard's cell
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Look at the four clues, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Properties of Multiplication; Arrays",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [2],
                            category: "Operations and Algebraic Thinking",
                            standard: "2.OA.C.4",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.C.7",
                        },
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arrr! These old scraps of paper have a clue that leads to buried treasure, but I can't figure it out. If you help me, I'll give you a whole barrel of butter from my ship.",
                    complete: "You're a genius, lad \u2014 I'm sure of it. If you ever want to join my pirate crew, I'd welcome you!"
                },
            },

            // cryptogram + tag + text (4x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "fishbeard.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "[<u>First] Clue",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "7 × 3 = 3 × 7"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Second] Clue",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>HHHHHHHHH<br>\
                                            HHHHHHHHH<br>\
                                            HHHHHHHHH<br>\
                                            HHHHHHHHH<br>\
                                            HHHHHHHHH<br>\
                                            HHHHHHHHH<br>\
                                            HHHHHHHHH]"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Third] Clue",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "5 × 5 = ?<br>\
                                            (2+3) × 4 = ?<br>\
                                            (2×4) + (3×4) = ?<br>\
                                            8 + 12 = 20"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Fourth] Clue",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>EEEEEE<br>\
                                            EEEEEE<br>\
                                            EEEEEE<br>\
                                            EEEEEE<br>\
                                            EEEEEE]"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "-7%",
                                rotate: "3deg",
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
                                translateX: "-2%",
                                translateY: "6%",
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
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'defaultSmallContainer'
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

            // decoder (4x)
            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] The first clue shows the commutative ______ .",
                        word: "PRO[P]ERTY",
                    },
                    {
                        title: "[<g>2.] Which clue has the largest array?",
                        word: "SEC[O]ND",
                    },
                    {
                        title: "[<g>3.] [<u>True] or [<u>false]: Clue #3 is the distributive property.",
                        word: "T[R]UE",
                    },
                    {
                        title: "[<g>4.] The fourth clue shows 5×6. What is the product?",
                        word: "THIR[T]Y",
                    },
                ],
                code: {
                    answer: "PORT",
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