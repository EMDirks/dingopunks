const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/math/fractions/preview-4th-grade.png",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Fractions With Like Denominators",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations Fractions",
                            standard: "4.NF.B.3",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations Fractions",
                            standard: "4.NF.B.3a",
                        },
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "I need to fix my crashed plane so I can fly out of this place, but my blueprint got all torn up! If you can put the pieces back together, I'll bake those yams for you. What do you say, friend?",
                    complete: "You're pretty good at fixing blueprints! If you're ever looking for more work, just stop by."
                },
            },

            // puzzle + fraction (9x)
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
                                fraction: {
                                    text: "2/7 + 4/7",
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
                                fraction: {
                                    text: "2/3 + 1/3",
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
                                fraction: {
                                    text: "3/5 + 3/5",
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
                                fraction: {
                                    text: "14/8 - 7/8",
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
                                fraction: {
                                    text: "8/10 - 3/10",
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
                                fraction: {
                                    text: "4/6 + 2/6",
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
                                fraction: {
                                    text: "12/5 - 7/5",
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
                                fraction: {
                                    text: "3/8 + 4/8",
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
                                fraction: {
                                    text: "10/8 - 4/8",
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'mediumSmall'
                                },
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
                        title: "[<g>1.] Which piece has a sum of [<f>7/8] ?",
                        correctIndex: 1,
                        paragraph: [
                            "The to{p} left piece",
                            "The {b}ottom middle piece",
                            "The bottom {r}ight piece",
                        ],
                    },
                    {
                        title: "[<g>2.] Which pieces all have sums equal to one whole?",
                        correctIndex: 2,
                        paragraph: [
                            "All three pieces in the {b}ottom row",
                            "All three pieces in the top ro{w}",
                            "Middle t{o}p, middle right, and bottom left",
                        ],
                    },
                    {
                        title: "[<g>3.] In the simplest form, find the difference of the center piece.",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "[<f>6/10] {S}",
                            "[<f>2/3] {A}",
                            "[<f>5/10] {N}",
                            "[<f>1/2] {L}",
                        ],
                    },
                    {
                        title: "[<g>4.] Calculate each corner piece in the simplest form:",
                        correctIndex: 2,
                        paragraph: [
                            "Clockw{i}se from top left: &nbsp[<f>6/14], &nbsp[<f>6/10], &nbsp[<f>5/5], &nbsp[<f>6/8]",
                            "Cloc{k}wise from top left: &nbsp[<f>6/7], &nbsp[<f>6/5], &nbsp[<f>5/5], &nbsp[<f>6/8]",
                            "Clockwise from {t}op left: &nbsp[<f>6/7], &nbsp1 [<f>1/5], &nbsp[<f>3/4], &nbsp1",
                        ],
                    },
                ],  
                code: {
                    answer: "BOLT",
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
                    text: "Add or subtract each set of mixed numbers, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Mixed Numbers With Like Denominators",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations Fractions",
                            standard: "4.NF.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations Fractions",
                            standard: "4.NF.B.3",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations Fractions",
                            standard: "4.NF.B.3a",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations Fractions",
                            standard: "4.NF.B.3c",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "Man, I've got a serious problem \u2014 I can't figure out how many pounds of potatoes I have! Math's just not my jam. I'll totally give you some yams if you help me, bro.",
                    complete: "Thanks a million, my potato pal. You're a real \"mash-ter\" of numbers. Haha!"
                },
            },

            // cryptogram + fraction (6x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [  
                    {
                        tag: {
                            text: "Pounds of [<u>Curly] Fries",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4 + 1 2/3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-7%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Wedge] Fries",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8 2/6 - 3 4/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "4%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Russet] Potatoes",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1 3/5 + 4 4/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-9%",
                                translateY: "-4%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Sweet] Potatoes",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2 1/6 + 4 2/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "6%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Mashed] Potatoes",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 - 3 1/2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Baked] Potatoes",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "10 3/5 - 8 4/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "10%",
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
                                translateX: "-8%",
                                translateY: "7%",
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
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            dimension: {
                                width: "full",
                                height: "full",
                            },
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'large',
                                    fraction: 'medium'
                                },
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
                        title: "[<g>1.] Which type of fry weigh more: curly or wedge?",
                        word: "CURL[Y]",
                    },
                    {
                        title: "[<g>2.] Which group of potatoes weighs the least?",
                        word: "B[A]KED",
                    },
                    {
                        title: "[<g>3.] Which group of potatoes equals 2 [<f>1/2] ? ",
                        word: "[M]ASHED",
                    },
                    {
                        title: "[<g>4.] Which group of potatoes equals 6 [<f>2/5] ? ",
                        word: "RUS[S]ET",
                    },
                ],
                code: {
                    answer: "YAMS",
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
                    text: "Compare each set of fractions, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare Fractions With Different Numerators and Denominators",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations Fractions",
                            standard: "4.NF.A.2",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I've been experimenting with different flavor syrups in my snow cones, but I just don't have time to compare these fractions! If you help me, I'll give you some sugar for those yams.",
                    complete: "Thanks a bunch for your help! I hope those yams turn out as sweet as a snow cone."
                },
            },

            // fractions [tag] (6x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [  
                    {
                        tag: {
                            text: "[<u>Lime] Syrup",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/3 [<bgl>&nbsp?&nbsp] 3/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-15%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Date] Syrup",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/2 [<bgl>&nbsp?&nbsp] 5/8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Mango] Syrup",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/4 [<bgl>&nbsp?&nbsp] 2/4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "-5%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Guava] Syrup",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/8 [<bgl>&nbsp?&nbsp] 3/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "40%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Grape] Syrup",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/4 [<bgl>&nbsp?&nbsp] 1/2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-10%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Vanilla] Syrup",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/10 [<bgl>&nbsp?&nbsp] 2/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Currant] Syrup",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/4 [<bgl>&nbsp?&nbsp] 4/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "-7%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Apple] Syrup",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "9/6 [<bgl>&nbsp?&nbsp] 7/4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "50%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Lemon] Syrup",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7/8 [<bgl>&nbsp?&nbsp] 7/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-0%",
                                translateY: "1%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Orange] Syrup",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/6 [<bgl>&nbsp?&nbsp] 3/3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "8%",
                                rotate: "-deg",
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
                            width: "percent20",
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
                                align: 'left'
                            },
                            dimension: {
                                width: "full",
                                height: "full",
                            },
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'large',
                                    fraction: 'medium'
                                },
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
                        'A. Which of these syrups should be compared with a <em>less than</em> symbol (<): [<u>lime] or [<u>date]?',
                        'B. Which flavor syrup needs an equals sign?',
                        'C. Which flavor syrup can be compared using the strategy of <em>like numerators</em>?',     
                        'D. [<u>True] or [<u>false]: the apple syrup fractions should be compared with a > symbol.',                    
                    ],
                    puzzle: [
                        ["0","(A)D","0","0","0","0","(D)F"],
                        ["(B)V","A","N","2I","(C)L","1L","A"],
                        ["0","T","0","0","E","0","L"],
                        ["0","E","0","0","3M","0","S"],
                        ["0","0","0","0","O","0","4E"],
                        ["0","0","0","0","N","0","0"],
                    ]
                },  
                code: {
                    answer: "LIME",
                    userArray: ["","","",""]
                },
            }   

        },

        // ⭐ fishbeard's cell
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Solve the fractions and sort them into the correct columns, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiply Fractions by Whole Numbers",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations Fractions",
                            standard: "4.NF.B.4",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations Fractions",
                            standard: "4.NF.B.4a",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations Fractions",
                            standard: "4.NF.B.4b",
                        },
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Ahoy, matey \u2014 I need help scavenging pieces from me terrible shipwreck! If ye help me sort through these supplies, I might even share a bit o' butter for those yams. What say ye, landlubber?",
                    complete: "You\'ve done it, again matey! Me thinks a life of piracy is in your future..."
                },
            },

            // sort-3-column + fractions (9x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Supplies that are < 1",
                        "Supplies that = 1",
                        "Supplies that are > 1"
                    ],
                    asset: {
                        scope: "global",
                        path: "3-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Cannons",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/8 × 2",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Sails",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 × 2/8",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Boots",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5 × 1/6",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Flags",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5 × 2/10",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Paddles",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/4 × 2",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Barrels",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 × 4/10",
                                }, 
                            },
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Ropes",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/4 × 8",
                                }, 
                            },
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Maps",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 × 2/4",
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'mediumSmall'
                                },
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
                        title: "[<g>1.] Is there a larger fraction of barrels or ropes?",
                        correctIndex: 1,
                        paragraph: [
                            "Bar{r}els",
                            "Rope{s}",
                            "Both are e{q}ual",
                        ],
                    },
                    {
                        title: "[<g>2.] How many different types of supplies are < 1 ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "2 {L}",
                            "3 {H}",
                            "4 {I}",
                        ],
                    },
                    {
                        title: "[<g>3.] Find the fractions for sails and boots:",
                        correctIndex: 1,
                        paragraph: [
                            "Sails = [<f>6/8], &nbsp b{o}ots = [<f>5/30]",
                            "Sa{i}ls = [<f>3/4], &nbsp boots = [<f>5/6]",
                            "Sails = [<f>6/24], &nbsp {b}oots = [<f>5/6]",
                        ],
                    },
                    {
                        title: "[<g>4.] In the simplest form, how many maps are there?",
                        correctIndex: 0,
                        paragraph: [
                            "3 ma{p}s",
                            "2 map{s}",
                            "12 {m}aps",
                        ],
                    },
                ],  
                code: {
                    answer: "SHIP",
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