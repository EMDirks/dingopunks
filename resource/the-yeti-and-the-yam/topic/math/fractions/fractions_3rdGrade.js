const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/math/fractions/preview-3rd-grade.png",
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
                    text: "Find the fraction shown on each number line, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions on Number Lines",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.2a",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.2b",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3d",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I've been inventing LOTS of different snow cones lately, and I think my flavor syrups are running low. If you can figure out how full each jug is, I'll give you some sugar for those yams. Got it?",
                    complete: "Whew... My research can continue now. Thanks for the help!"
                },
            },

            // cryptogram + number-line (6x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Jug of Lime Syrup",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 3,
                                        dot: 2
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
                                translateX: "-15%",
                                translateY: "-8%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Jug of Salamander Syrup",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
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
                                translateX: "-15%",
                                translateY: "-3%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Jug of Cave Moss Syrup",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 8,
                                        dot: 7
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
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Jug of Eel Syrup",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
                                        dot: 2
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
                                translateX: "1%",
                                translateY: "1%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Jug of Dragonfruit Syrup",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 4,
                                        dot: 3
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
                                translateX: "1%",
                                translateY: "0%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Jug of Cucumber Syrup",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 2,
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
                                translateX: "8%",
                                translateY: "8%",
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
                                width: "percent80",
                                height: "full",
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
                        title: "[<g>1.] Which jug has the smallest fraction of syrup?",
                        correctIndex: 0,
                        paragraph: [
                            "Sala{m}ander",
                            "Dragonfr{u}it",
                            "E{e}l",
                        ],
                    },
                    {
                        title: "[<g>2.] Which jug is [<f>7/8] full?",
                        correctIndex: 0,
                        paragraph: [
                            "Cave M{o}ss",
                            "L{i}me",
                            "Sala{m}ander",
                        ],
                    },
                    {
                        title: "[<g>3.] Which jug shows the fraction [<f>2/6] ?",
                        correctIndex: 2,
                        paragraph: [
                            "C{a}ve Moss",
                            "Cucum{b}er",
                            "Ee{l}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which jug has a denominator of 4?",
                        correctIndex: 1,
                        paragraph: [
                            "Lim{e}",
                            "{D}ragonfruit",
                            "Cucu{m}ber",
                        ],
                    },
                ],  
                code: {
                    answer: "MOLD",
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
                    text: "Sort each fraction into the correct column, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Equivalent Fractions",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Geometry",
                            standard: "3.G.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.2a",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.2b",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3a",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3b",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3c",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3d",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "Bro, I'm having a hard time writing my latest album \u2014 most of the songs are only partly done! Help me sort these tracks by how finished they are, and I'll hook you up with some yams. Deal?",
                    complete: "Whoa, thanks a ton. I'm stoked to finally wrap up these masterpieces!"
                },
            },

            // sort-3-column + fractions, shapes, text, number lines [tag]
            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Equal to [<f>1/3]",
                        "Equal to [<f>1/2]",
                        "Equal to 1"
                    ],
                    asset: {
                        scope: "global",
                        path: "3-column-stone.png"
                    }
                },   
                blockArray: [

                    // number line
                    {
                        tag: {
                            text: "\"Tater Tango\"",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
                                        dot: 3
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        correctIndex: 1
                    }, 
                    // shape
                    {
                        tag: {
                            text: "\"Gravy Train\"",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_2-6.svg",
                                },
                            }
                        ],
                        correctIndex: 0
                    },                 
                    // number line
                    {
                        tag: {
                            text: "\"Spudtown USA\"",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 4,
                                        dot: 2
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        correctIndex: 1
                    },  
                    // shape
                    {
                        tag: {
                            text: "\"The Curly Fry Song\"",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_1-3.svg",
                                },
                            }
                        ],
                        correctIndex: 0
                    }, 
                    // number line
                    {
                        tag: {
                            text: "\"Happy Hash Brown\"",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 3,
                                        dot: 3
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        correctIndex: 2
                    },  
                    // fraction
                    {
                        tag: {
                            text: "\"A Mashed Melody\"",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/4",
                                }, 
                            },
                        ],
                        correctIndex: 2
                    },
                     // fraction
                     {
                        tag: {
                            text: "\"Sweet Potato Swing\"",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5/10",
                                }, 
                            },
                        ],
                        correctIndex: 1
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
                        title: "[<g>1.] Which of these songs is equal to one whole?",
                        correctIndex: 0,
                        paragraph: [
                            "\"A {M}ashed Melody\"",
                            "\"The Curly {F}ry Song\"",
                            "\"Tater Tan{g}o\"",
                        ],
                    },
                    {
                        title: "[<g>2.] How many songs are half-finished?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "2 {I}",
                            "3 {U}",
                            "4 {A}",
                        ],
                    },
                    {
                        title: "[<g>3.] How many songs are [<f>1/3] finished? ",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "2 {S}",
                            "3 {B}",
                            "4 {N}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which two songs are <em>both</em> equal to [<f>1/2] ?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Grav{y} Train\" and \"A Mashed Melody\"",
                            "\"Spudtown USA\" and \"Tat{e}r Tango\"",
                            "\"Sweet Potato Swing\" and \"Happy Ha{s}h Brown\"",
                        ],
                    },
                ],  
                code: {
                    answer: "MUSE",
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
                    text: "Find each missing number, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions as Whole Numbers",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3b",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3c",
                        },
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "The King sent me a secret shipment of supplies, but all the labels are in code. If you help me figure out what I have here, I'll gladly share some butter with you. Do we have a deal?",
                    complete: "Farewell, Puzzle Punks! Watch your step, and beware of large footprints in the snow..."
                },
            },

            // fraction + symbol tag + symbol key (6x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Z",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5 = ?/1",
                                }, 
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "0%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "S",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1 = ?/8",
                                }, 
                            },
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
                            text: "E",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/3 = ?",
                                }, 
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "12%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "N",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/? = 6/6",
                                }, 
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "1%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "T",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/? = 4",
                                }, 
                            },
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
                            text: "M",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 7,
                                        dot: 7
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-4%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>Z] = Torch<br> \
                                            [<s>E] = Bread<br> \
                                            [<s>T] = Shield",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>S] = Pickaxe<br> \
                                            [<s>N] = Lantern<br> \
                                            [<s>M] = Socks",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "15%",
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'mediumSmall'
                                },
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

            // crossword (7x6)
            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which item is missing the number 1: [<u>torch], [<u>bread], or [<u>lantern]?',
                        'B. Which item shows [<f>7/7] = 1 ?',
                        'C. Which item is missing the number 8?',     
                        'D. Does the [<u>shield] or the [<u>lantern] have a denominator of one?',                    
                    ],
                    puzzle: [
                        ["0","0","(B)3S","O","C","K","(D)S"],
                        ["0","0","0","0","0","0","H"],
                        ["0","0","0","0","0","0","2I"],
                        ["(C)P","I","C","4K","A","X","E"],
                        ["0","0","0","0","0","0","L"],
                        ["0","0","(A)B","1R","E","A","D"],
                    ]
                },  
                code: {
                    answer: "RISK",
                    userArray: ["","","",""]
                },
            }

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
                    topic: "Compare Fractions",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3d",
                        },
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "Hi, friend! I'm trying to build an escape machine, but my blueprint got all mixed up. Can you put the pieces back together? I'll bake those yams while you do it!",
                    complete: "I feel like we should tape this blueprint up. Well, anyway... Thanks and good luck!"
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
                                    text: "2/3 [<bbl>&nbsp?&nbsp] 2/4",
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
                                    text: "5/8 [<bbl>&nbsp?&nbsp] 7/8",
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
                                    text: "2/4 [<bbl>&nbsp?&nbsp] 3/6",
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
                                    text: "5/5 [<bbl>&nbsp?&nbsp] 4/5",
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
                                    text: "3/6 [<bbl>&nbsp?&nbsp] 4/6",
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
                                    text: "4/4 [<bbl>&nbsp?&nbsp] 3/3",
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
                                    text: "3/4 [<bbl>&nbsp?&nbsp] 2/4",
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
                                    text: "1/2 [<bbl>&nbsp?&nbsp] 1/8",
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
                                    text: "6/8 [<bbl>&nbsp?&nbsp] 3/4",
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
                        title: "[<g>1.] True or false: the fractions in the center piece should be compared with a > symbol.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>2.] Which symbol would you use to compare the fractions in the top left piece?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "< {B}",
                            "= {E}",
                            "> {X}",
                            "+ {A}",
                        ],
                    },
                    {
                        title: "[<g>3.] Which three pieces all need the = symbol?",
                        correctIndex: 2,
                        paragraph: [
                            "All three p{i}eces in the left column",
                            "All three pieces in the {m}iddle column",
                            "All three pieces in the right co{l}umn",
                        ],
                    },
                    {
                        title: "[<g>4.] Which two pieces need a 'greater than' symbol?",
                        correctIndex: 0,
                        paragraph: [
                            "The middle l{e}ft, and the bottom left",
                            "The midd{l}e left, and the top right",
                            "The bottom left, and the bottom ri{g}ht",
                        ],
                    },
                ],  
                code: {
                    answer: "AXLE",
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