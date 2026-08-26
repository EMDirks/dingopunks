const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/math/order-of-operations/preview-5th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ fishbeard's cell
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Computation With All Four Operations",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Operations and Algebraic Thinking",
                            standard: "5.OA.A.1",
                        },
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arrr! I have a map of this cursed island, but the yeti tore it to bits! Help me piece it back together, and I'll give ye a whole slab o' butter \u2014 perfect for those yams ye be cooking. How 'bout it, matey?",
                    complete: "Ye did it, matey! Take yer butter, and remember: the cold keeps secrets better than any vault."
                },
            },

            // puzzle (9x)
            activity: {
                info: {
                type: "dynamic",
                functionality: "drag-and-drop",
                asset: "fishbeard.png",
                },
                blockArray: [              
                {
                contentArray: [
                    {
                        passage: {
                            text: "(14+10) × 2 ÷ (18-12)",
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
                            text: "12 - (2×5)",
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
                            text: "(30-12) × (20÷10)",
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
                            text: "27 ÷ (81÷9)",
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
                            text: "50 - (4×9)",
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
                            text: "4(18+7) ÷ (62-12)",
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
                            text: "(45÷3) × 3 + 4",
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
                            text: "30 ÷ 3 + 4",
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
                            text: "(9×6) - 42",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many pieces have an answer greater than 10 but less than 20?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "T{w}o",
                            "Fou{r}",
                            "T{h}ree",
                            "{F}ive",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these pieces has a greater answer?",
                        correctIndex: 2,
                        paragraph: [
                            "The middle t{o}p piece",
                            "The middle r{i}ght piece",
                            "Both answers are eq{u}al",
                        ],
                    },
                    {
                        title: "[<g>3.] Which two pieces both equal 14?",
                        correctIndex: 1,
                        paragraph: [
                            "The center piece, a{n}d the middle left piece",
                            "The center piece, and the midd{l}e bottom piece",
                            "The top right piece, and the bottom right pie{c}e",
                        ],
                    },
                    {
                        title: "[<g>4.] Which piece has an answer of 49?",
                        correctIndex: 1,
                        paragraph: [
                            "The botto{m} right piece",
                            "The bottom {l}eft piece",
                            "The top right piec{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "HULL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ dr. seraphina's cell
        {

            info: {
                type: 'challenge',
                title: "Dr. Seraphina's Cell",
                asset: "dr-seraphina.png",
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
                            grade: [4],
                            category: "Measurement and Data",
                            standard: "4.MD.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Measurement and Data",
                            standard: "4.MD.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Measurement and Data",
                            standard: "5.MD.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Operations and Algebraic Thinking",
                            standard: "4.OA.A.3",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Operations and Algebraic Thinking",
                            standard: "5.OA.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Operations and Algebraic Thinking",
                            standard: "5.OA.A.2",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I admire your escape efforts, but I'm convinced that snow cones will distract the yeti much better than yams. Tell you what \u2014 if you help me with a few problems, I'll lend you some sugar. Deal?",
                    complete: "I'm hoping at least one of us can escape this ridiculous place... Good luck!"
                },
            },

            // text + image (4x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "6.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>1. Batches of Flavor Syrup]",
                                },
                                passage: {
                                    text: "I made 3 batches of syrup for each of these flavors: cherry, lime, strawberry, and apricot. Unfortunately, 5 of the batches spilled out! I then divided the remaining batches into 7 equal groups.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-10%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "4.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>2. Snow Cone Storage]",
                                },
                                passage: {
                                    text: "In October, I had 25 snow cones in storage. In November, I made 8 more of each flavor: cherry, raspberry, and lemon. In December, I had to throw away 12 contaminated snow cones.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "16%",
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
                                    text: "[<u>3. Red and Blue Snow Cones]",
                                },
                                passage: {
                                    text: "Yesterday, I made 120 red snow cones and 50 blue snow cones. The red ones each took 3 minutes to make, while the blue ones each took 6 minutes to make.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "12%",
                                translateY: "20%",
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
                                    text: "[<u>4. Extra-Special Snow Cones]",
                                },
                                passage: {
                                    text: "I want to create some extra-special snow cones! Each will have 12 drops of lime syrup and 6 drops of slug syrup.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "8%",
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
                        title: "[<g>1.] How many batches of syrup are in each group?",
                        correctIndex: 0,
                        paragraph: [
                            "1 batc{h}",
                            "7 batch{e}s",
                            "12 {b}atches",
                        ],
                    },
                    {
                        title: "[<g>2.] After throwing away all the contaminated snow cones, how many does Dr. Seraphina have left?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "49 snow {c}ones",
                            "37 snow c{o}nes",
                            "61 {s}now cones",
                            "21 sno{w} cones",
                        ],
                    },
                    {
                        title: "[<g>3.] How long did it take Dr. Seraphina to make all the red and blue snow cones?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "660 hour{s}",
                            "12 {h}ours",
                            "10 hou{r}s",
                            "11 ho{u}rs",
                        ],
                    },
                    {
                        title: "[<g>4.] To make 12 extra-special snow cones, how many drops of syrup are needed in all?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "18 dro{p}s",
                            "54 {d}rops",
                            "216 d{r}ops",
                            "316 drop{s}",
                        ],
                    },
                ],  
                code: {
                    answer: "HOUR",
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
                    text: "Solve each equation, then enter the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Equations With Exponents",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Operations and Algebraic Thinking",
                            standard: "5.OA.A.1",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "Man, I've got a real problem \u2014 I can't figure out how many pounds of potatoes I have! Math's just not my jam. If you can help me out, I'll totally give you a few yams.",
                    complete: "Thanks a million, my potato pal. You're a real \"mash-ter\" of numbers. Hahaha!"
                },
            },

            // cryptogram + tag + text (6x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Pounds of [<u>Hazelnut] Potatoes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "20 ÷ 2<sup>2</sup> × 20 ÷ (16-6+10)"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-8%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Pimiento] Potatoes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "26 - 4<sup>2</sup> - (15-7-5)"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-5%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Rosemary] Potatoes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "5 × (4-2) × 2<sup>2</sup>"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "4%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Barbecue] Potatoes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "3<sup>2</sup> × (1+5) - 4"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "7%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Turmeric] Potatoes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "( 6<sup>2</sup> + (38÷2) ) ÷ 5"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "12%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Scallion] Potatoes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(5<sup>3</sup>-4) ÷ 11"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "4%",
                                rotate: "1deg",
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
                                translateY: "14%",
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
                        title: "[<g>1.] Do [<u>rosemary] or [<u>pimiento] potatoes weigh more?",
                        word: "RO[S]EMARY",
                    },
                    {
                        title: "[<g>2.] There are fifty pounds of _____ potatoes.",
                        word: "B[A]RBECUE",
                    },
                    {
                        title: "[<g>3.] The turmeric potatoes weigh _____ pounds.",
                        word: "E[L]EVEN",
                    },
                    {
                        title: "[<g>4.] Which type of potato has the lowest weight?",
                        word: "HAZELNU[T]",
                    },
                ],
                code: {
                    answer: "SALT",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ the knight's cell
        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Sort each equation as either true or false, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Evaluate True or False",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.B.6",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Operations and Algebraic Thinking",
                            standard: "5.OA.A.1",
                        },
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "The King's men smuggled me some safe escape routes! But they're encoded as equations that must be sorted as either true or false. Assist me, and I'll give you a pan for those yams. Deal?",
                    complete: "Thanks to you, my escape route has been secured. Fare thee well, Dingo Punks!"
                },
            },

            // sort-2-column + text (6x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Equations that are TRUE",
                        "Equations that are FALSE",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Bridge",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "7 × (4+3<sup>2</sup>) - 10 = 81",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Lagoon",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "8 + (5×3) - 12 ÷ 4 = 20",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Tunnel",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(40-14) × 3 - 4 ÷ 2 = 75",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },

                    {
                        tag: {
                            text: "Grotto",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(8+2×3)- 7 + 10 ÷ 5 = 12",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Temple",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "9 + 6 × (8-2) ÷ 3 = 21",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },                 
                    {
                        tag: {
                            text: "Canyon",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "5<sup>2</sup> - (13+5-9) ÷ 3 = 110",
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
                            size: 'small',
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

            // crossword (7x6)
            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which equation <em>actually</em> has an answer of 9?',
                        'B. Which equation <em>actually</em> has an answer of 76?',
                        'C. Which has a smaller answer: [<u>canyon] or [<u>bridge]? ',     
                        'D. The <em>true</em> equations show the safe escape routes. How many are there?',                    
                    ],
                    puzzle: [
                        ["(A)1G","R","O","(B)T","T","O","0"],
                        ["0","0","0","U","0","0","0"],
                        ["0","(C)C","A","N","Y","2O","N"],
                        ["0","0","0","3N","0","0","0"],
                        ["(D)T","H","R","E","4E","0","0"],
                        ["0","0","0","L","0","0","0"],
                    ]
                },  
                code: {
                    answer: "GONE",
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