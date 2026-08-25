const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/math/multiplication/preview-3rd-grade.png",
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
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "I'm Topsy and I sell robot pets. I'm trying to fix some of the broken ones, but that means solving all these tricky equations first. I'm just so bad at this! Can you help me?",
                    complete: "Hee hee! I'm a master at cracking locks. It's the reason the pirates never made me walk the plank!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "critterwerks.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "[<s>A]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6 × 3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-20%",
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
                                    text: "7 × 8",
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
                            text: "[<s>D]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "5 × 8",
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
                                    text: "4 × 9",
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
                                    text: "2 × 7",
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
                                    text: "6 × 6",
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
                                    text: "8 × 4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
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
                                    text: "9 × 3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "25%",
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
                        title: "[<g>1.] What are the answers to  [<s>A], [<s>H], and [<s>N] ?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "18,  35, and 32 {B}",
                            "18,  36, and 36 {O}",
                            "18, 36, and 32 {F}",
                        ],
                    },

                    {
                        title: "[<g>2.] What are the answers to  [<s>O], [<s>C], and [<s>I] ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "25, 56, and 14 {D}",
                            "27, 56, and 14 {U}",
                            "28, 56, and 16 {R}",
                        ],
                    },

                    {
                        title: "[<g>3.] The answer to [<s>D] is the same as the answer to [<s>L].",
                        correctIndex: 1,
                        paragraph: [
                            "Tr{u}e",
                            "Fal{s}e",
                        ],
                    },

                    {
                        title: "[<g>4.] Is the answer to [<s>H] less than the answer to [<s>C] ?",
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },

                ],   

                code: {
                    answer: "FUSE",
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
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "Oh no... I was trying out a new rock candy recipe, but when I tried to break up the pieces, I broke my countertop instead! Can you help me put it back together?",
                    complete: "Did you hear that? I think there's something in the walls..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "the-candy-cave-2.png",
                },

                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "8 × ? = 48",
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
                                    text: "3 × ? = 24",
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
                                    text: "? × 9 = 54",
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
                                    text: "4 × ? = 28",
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
                                    text: "6 × ? = 12",
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
                                    text: "? × 7 = 42",
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
                                    text: "? × 5 = 30",
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
                                    text: "5 × ? = 55",
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
                                    text: "7 × ? = 42",
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
                        title: "[<g>1.] Which piece is missing the number 11?",
                        correctIndex: 2,
                        paragraph: [
                            "The top {r}ight piece",
                            "The b{o}ttom left piece",
                            "The bottom {m}iddle piece",
                        ],
                    },

                    {
                        title: "[<g>2.] What number is missing from all 4 corner pieces?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "8 {B}",
                            "7 {D}",
                            "6 {I}",
                        ],
                    },

                    {
                        
                        title: "[<g>3.] What number is missing from the center piece?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "3 {A}",
                            "2 {N}",
                            "4 {U}",
                        ],
                    },

                    {
                        title: "[<g>4.] Which division fact relates to both of the yellow pieces?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "42 ÷ 7 = ? {T}",
                            "7 ÷ ? = 42 {Y}",
                            "7 ÷ 42 = ? {M}",
                            "42 ÷ 2 = ? {P}",
                        ],
                    },

                ],  

                code: {
                    answer: "MINT",
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
                    text: "Enter the answer to each question, using the secret code if you get stuck. The yellow letters, in order, are the answer.",
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
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I need to measure some fabric for a fashion show next week. Can you check my calculations and answer some questions?",
                    complete: "Well, well, well... consider me impressed. If you're ever looking for a new job, come here first."
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
                            text: "Lace",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "8 × 4 &nbsp=&nbsp 4 × 8"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "75%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Velvet",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "3 × 9 =<br>\
                                            3 × (4 + 5) =<br>\
                                            (3 × 4) + (3 × 5) =<br>\
                                            12 + 15 = 27"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-30%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Silk",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>C C C C C C C <br>\
                                            C C C C C C C <br>\
                                            C C C C C C C <br>\
                                            C C C C C C C ]",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "7%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Linen",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>E E E E E E E <br>\
                                            E E E E E E E <br>\
                                            E E E E E E E]"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-25%",
                                rotate: "-5deg",
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
                                translateX: "-3%",
                                translateY: "30%",
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
                            width: "percent24",
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
            
            questions: {
                
                info: {
                    type: "decoder"
                },

                contentArray: [
                    {
                        title: "[<g>1.]  The commutative property changes the order of:",
                        word: "FACTOR[S]",
                    },
                    {
                        title: "[<g>2.]  Which fabric shows the commutative property?",
                        word: "L[A]CE",
                    },
                    {
                        title: "[<g>3.]  Which fabric shows the array 3 × 7 = 21 ?",
                        word: "[L]INEN",
                    },
                    {
                        title: "[<g>4.]  Which fabric shows the distributive property?",
                        word: "V[E]LVET",
                    },
                ],

                code: {
                    answer: "SALE",
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
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Step Word Problems with Addition, Subtraction, and Multiplication",
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
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "It's WAY too late for all these kids to still be at the mall... especially in my arcade! Can you keep an eye on them? Make sure they're getting the right prizes when they win.",
                    complete: "You're really still here? Ugh... I really can't talk, I have work to do."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "zeeb-plex.png",
                },

                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "9.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>1. Mars Patrol]",
                                },
                                passage: {
                                    text: "The game Mars Patrol gives out 5 tickets for each win. Isabella played the game 4 times, winning every time.  Afterward, she earned another 12 tickets at a different game.",
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
                                    file: "10.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>2. Mystic Rings]",
                                },
                                passage: {
                                    text: "Whenever you play the game Mystic Rings, it gives out 4 plastic rings as a reward. Samuel played 6 times. A friend then stole 8 of his rings.",
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
                                    file: "11.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>3. Unicorn Quest]",
                                },
                                passage: {
                                    text: "In the game Unicorn Quest, each completed quest awards 5 star points. Aval completed 7 quests, then used 20 star points to unlock a special unicorn.",
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
                        title: "[<g>1.] How many tickets did Isabella collect in all?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "32 {W}",
                            "20 {Y}",
                            "8 {Z}",
                        ],
                    },

                    {
                        title: "[<g>2.] How many rings does Samuel have left after his friend stole 8 of them?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "24 {S}",
                            "16 {I}",
                            "32 {R}",
                            "18 {N}"
                        ]
                    },

                    {
                        title: "[<g>3.] How many star points does Aval have left?",
                        correctIndex: 2,
                        paragraph: [
                            "55 s{t}ar points",
                            "35 star {p}oints",
                            "15 star poi{n}ts", 
                        ]
                    },

                    {
                        title: "[<g>4.] The arcade is laid out in 3 rows, each with 9 games. What's the total number of games?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "9 ÷ 3 = [<u>3 g{a}mes]",
                            "27 ÷ 3 = [<u>9 {g}ames]",
                            "3 × 9 = [<u>27 game{s}]",
                            "9 × 3 = [<u>28 gam{e}]s" 
                        ]
                    },

                ],  

                code: {
                    answer: "WINS",
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


  