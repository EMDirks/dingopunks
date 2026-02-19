const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/math/fractions/preview-5th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ basil rabbit
        {
            info: {
                type: 'challenge',
                title: "Honey Vats",
                asset: "basil-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Fractions With Unlike Denominators",
                    commonCore: [
                        "4.NF.A.2",
                        "5.NF.A.1"
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "I'm the quickest hare in the hive! Or, at least I was \u2014 until my map got torn up by some jealous bees. Without it, I can't gather any nectar! Can you help me put it back together?",
                    complete: "Thanks a million! Hopefully I can prove to the bees that I'm not just another carrot thief."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "basil-rabbit-2.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "7/4 + 1",
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
                                    text: "8/7 + 2/5",
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
                                    text: "50/5 - 2/3",
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
                                    text: "3/4 + 1/3",
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
                                    text: "8 1/6 - 3 2/4",
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
                                    text: "8/8 - 1/2",
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
                                    text: "2 2/5 + 2 5/6",
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
                                    text: "2/6 + 1/12",
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
                                    text: "2/3 - 2/7",
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which piece has an answer of [<f>8/21] ?",
                        correctIndex: 2,
                        paragraph: [
                            "The bottom {l}eft piece",
                            "The top right {p}iece",
                            "The piece with the beehi{v}e",
                        ],
                    },
                    {
                        title: "[<g>2.] Which 3 pieces all have a like denominator of 12?",
                        correctIndex: 2,
                        paragraph: [
                            "Middle l{e}ft, top right, and center",
                            "Middle right, middle bott{o}m, and center",
                            "M{i}ddle left, middle bottom, and center",
                        ],
                    },
                    {
                        title: "[<g>3.] In the simplest form, find the difference of the center piece.",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "5 [<f>4/12] {W}",
                            "5 [<f>1/3] {V}",
                            "4 [<f>2/3] {N}",
                            "4 [<f>9/12] {D}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which piece has the greatest answer?",
                        correctIndex: 0,
                        paragraph: [
                            "Th{e} top right piece",
                            "The top left pie{c}e",
                            "The bottom mi{d}dle piece",
                        ],
                    },
                ],  
                code: {
                    answer: "VINE",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ riff wingman
        {
            info: {
                type: 'challenge',
                title: "Riff's Study",
                asset: "riff-wingman.png",
                state: "incomplete",
                hint: {
                    text: "Solve the problems and sort them into the correct columns. Then, answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiply Fractions and Whole Numbers",
                    commonCore: [
                        "4.NF.A.2",
                        "4.NF.B.4c",
                        "5.NF.B.4",
                        "5.NF.B.6",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Riff here, the hive's hottest spoken-word artist. I've got some poems to read during the storm, a little something to inspire the bees. I just need help sorting them by length. You in?",
                    complete: "Nice work, kid. The hive's gonna love this \u2014 Riff Wingman saves the day again!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Poems < [<f>1/2] minute",
                        "Poems > [<f>1/2] minute",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "\"Buzzwords\" length (minutes)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2 × 2/9",
                                }, 
                            },
                        ], 
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "\"Drone Alone\" length (minutes)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/3 × 7/9",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "\"Flight Risk\" length (minutes)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7/8 × 3/4",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "\"Wing It\" length (minutes)",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "one fourth × five sixths",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "\"Pollen & Pain\" length (minutes)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/3 × 1/2",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "\"Hivebeats\" length (minutes)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/2 × 2/3",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "\"Golden Fields\" length (minutes)",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "six eighths × five",
                                }, 
                            },
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'mediumSmall',
                                    fraction: 'small'
                                },
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
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
                        title: "[<g>1.] How many poems have a product greater than [<f>1/2] ?",
                        correctIndex: 2,
                        paragraph: [
                            "{T}wo",
                            "Th{r}ee",
                            "{F}our",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these is the shortest in length?",
                        correctIndex: 0,
                        paragraph: [
                            "\"Drone A{l}one\"",
                            "\"G{o}lden Fields\"",
                            "\"Flig{h}t Risk\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Which poem has an answer of [<f>2/3] ?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Hivebe{a}ts\"",
                            "\"P{o}llen & Pain\"",
                            "\"Flight {R}isk\"",
                        ],
                    },
                    {
                        title: "[<g>4.] Which of these has the greatest product?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Hivebea{t}s\"",
                            "\"Buzz{w}ords\"",
                            "\"Wing {I}t\"",
                        ],
                    },
                ],  
                code: {
                    answer: "FLOW",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Solve each problem, then answer the questions below to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Divide Unit Fractions and Whole Numbers",
                    commonCore: [
                        "5.NF.B.7",
                        "5.NF.B.7a",
                        "5.NF.B.7b",
                        "5.NF.B.7c",
                    ],
                }
            },
        
            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "Yeah, I'm the warehouse manager. I need to figure out how full these crates are \u2014 pollen, honey, resin, the usual mess. Nobody else bothered, so now it's on me. You helping?",
                    complete: "Thanks, I guess. Now get out of my warehouse before you break something."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "grumblegrub.png",
                },
                blockArray: [  
                    {
                        tag: {
                            text: "[<u>Nectar] Crate",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 ÷ 1/4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-15%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Candle] Crate",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/4 ÷ 2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Resin] Crate",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4 ÷ 1/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "30%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Pollen] Crate",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/8 ÷ 3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "30%",
                                translateY: "70%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Water] Crate",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/3 ÷ 5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "7%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Honey] Crate",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "We just received 3 pounds of honey, but our crate only holds [<f>1/6] of a pound. How many crates do we need to store all of it?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "50%",
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'large',
                                    fraction: 'medium'
                                },
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
                        'A. Which crate has an answer with a denominator of 24: [<u>nectar], [<u>resin], or [<u>pollen]?',
                        'B. Which crate has a quotient of 18?',
                        'C. This crate has an answer of 12.',     
                        'D. [<u>True] or [<u>false]: the water crate has a smaller quotient than the candle crate.',                    
                    ],
                    puzzle: [
                        ["0","(A)P","O","3L","L","E","(C)N"],
                        ["0","0","0","0","0","0","4E"],
                        ["0","0","0","(D)T","0","0","C"],
                        ["0","0","0","1R","0","0","T"],
                        ["0","0","0","U","0","0","A"],
                        ["(B)H","2O","N","E","Y","0","R"],
                    ]
                },  
                code: {
                    answer: "ROLE",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ queen bella
        {
            info: {
                type: 'challenge',
                title: "Throne Room",
                asset: "queen-bella.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Word Problems With All Four Operations",
                    commonCore: [
                        "4.NF.B.3d",
                        "4.NF.B.4c",
                        "5.NF.B.3",
                        "5.NF.B.4",
                        "5.NF.B.6",
                        "5.NF.B.7c",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "My bees have been slacking, so I brought in some leprechauns to help manage the hive. I gave them detailed instructions, but I need you to double-check everything. Our survival depends on it!",
                    complete: "Well done! You've proven quite reliable. If only the bees had your work ethic."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "queen-bella.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "4.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Clover Honey]",
                                },
                                passage: {
                                    text: "The warehouse has 8 full barrels of clover honey, which I want to split evenly among my 5 most loyal drones.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-10%",
                                rotate: "-4deg",
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
                                    text: "[<u>Prison Cells]",
                                },
                                passage: {
                                    text: "We have 12 prison cells for holding all the traitors to the hive. At the moment, each cell is only [<f>3/4] full.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "0%",
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
                                    text: "[<u>Ancient Protectors]",
                                },
                                passage: {
                                    text: "Two ancient protectors will arise to guard the hive during the storm. One can guard for two-fifths of the night, and the other can guard for two-sixths of the night.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "8%",
                                rotate: "1deg",
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
                                    text: "[<u>Crystal Shards]",
                                },
                                passage: {
                                    text: "The basement holds [<f>7/8] of the crystal shards needed to build the Queen's scepter, while the attic contains [<f>1/4] of the needed shards.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "3%",
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How much clover honey does each drone get?",
                        correctIndex: 0,
                        paragraph: [
                            "1 [<f>3/5] barrel{s}",
                            "1 [<f>3/8] barr{e}ls",
                            "[<f>9/5] {b}arrels",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the minimum number of prison cells needed to hold all the traitors to the hive?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "12 {C}",
                            "9 {U}",
                            "4 {A}",
                            "36 {T}",
                        ],
                    },
                    {
                        title: "[<g>3.] Together, what fraction of the night can the two ancient protectors guard for?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "[<f>4/5] {D}",
                            "[<f>2/3] {E}",
                            "[<f>11/15] {M}",
                            "[<f>4/11] {M}",
                        ],
                    },
                    {
                        title: "[<g>4.] Between the basement and the attic, are there enough crystal shards to build the Queen's scepter?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Ye{s}",
                            "{N}o",
                        ],
                    },
                ],  
                code: {
                    answer: "SUMS",
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
        
    ]

}