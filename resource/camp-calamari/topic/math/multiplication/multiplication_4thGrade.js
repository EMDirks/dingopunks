const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/math/multiplication/preview-4th-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    challengeArray: [

        // ⭐ driftwood dan
        {

            info: {
                type: 'challenge',
                title: "Driftwood Beach",
                asset: "driftwood-dan.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplication Word Problems",
                    commonCore: [
                        "4.OA.A.1",
                        "4.OA.A.2",
                        "4.OA.A.3",
                        "4.NBT.B.5",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "Driftwood Dan here. I'm building a tower on the beach to keep an eye out for the Red Tide Pirates. Mind taking a look at my plans?",
                    complete: "Thanks, friend! With your help, we'll spot those Red Tide Pirates a mile away."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "driftwood-dan.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "2.png",
                                },
                            },
                            {
                                passage: {
                                    text: "[<u>Foundation]<br><br>The tower's foundation will have 6 legs, each made from 12 pieces of sturdy driftwood nailed together.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "2%",
                                rotate: "-1deg",
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
                                passage: {
                                    text: "[<u>Paint]<br><br>It took 3 buckets of paint to cover the entire dining hall. We'll need 8 times as much paint to cover the tower.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-3%",
                                rotate: "0deg",
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
                                passage: {
                                    text: "[<u>Kindling]<br><br>We'll need plenty of kindling to keep the tower's signal fire lit. A single bunch of kindling will burn for exactly 30 minutes.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "0%",
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
                                passage: {
                                    text: "[<u>Rope Ladder]<br><br>The tower can only be entered by climbing a 52 meter rope ladder. To be safe, we should have 2 rope ladders \u2014 just in case one goes missing.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "2deg",
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
                            width: "percent40",
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
                        title: "[<g>1.] How much driftwood will the foundation require?",
                        correctIndex: 0,
                        paragraph: [
                            "72 pieces of {d}riftwood",
                            "54 pie{c}es of driftwood",
                            "18 pieces of dr{i}ftwood",
                        ],
                    },
                    {
                        title: "[<g>2.] How many buckets of paint does the tower need?",
                        correctIndex: 1,
                        paragraph: [
                            "11 buckets of {p}aint",
                            "24 b{u}ckets of paint",
                            "32 buc{k}ets of paint",
                        ],
                    },
                    {
                        title: "[<g>3.] How much kindling is required to keep the tower's signal fire burning for 3 hours?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "6 bu{n}ches",
                            "5 bunche{s}",
                            "4 {b}unches",
                            "40 bun{c}hes",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the combined length of 2 rope ladders?",
                        correctIndex: 2,
                        paragraph: [
                            "102 me{t}ers",
                            "100 mete{r}s",
                            "104 m{e}ters",
                        ],
                    },
                ],  
                code: {
                    answer: "DUNE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ broken animatronic
        {

            info: {
                type: 'challenge',
                title: "Junk Pile",
                asset: "melodina.png",
                state: "incomplete",
                hint: {
                    text: "Solve each problem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Base Ten Multiplication",
                    commonCore: [
                        "4.NBT.B.5",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "We can hide Camp Calamari's treasure under the junk pile. No pirate would think to look here! But my calculation circuits are broken… Can you help me figure out how much treasure we have?",
                    complete: "Thank you, friend. With your help, the treasure is safe. At least for now..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "melodina.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "70 ×︎ 10",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "1deg",
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
                                    text: "100 × 70",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "0%",
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
                                    text: "50 × 9",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "E",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "500 × 6",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "1%",
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
                                    text: "4 ×︎ 50",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
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
                                    text: "6 x 400",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>A] = Jewels<br> \
                                            [<s>D] = Relics<br> \
                                            [<s>I] = Amulets",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "15%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>H] = Pearls<br> \
                                            [<s>E] = Silver Coins<br> \
                                            [<s>T] = Bronze Coins",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "10%",
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
                            passage: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which equals 700: [<u>jewels], [<u>pearls], or [<u>amulets]? ',
                        'B. Are there more [<u>bronze] or [<u>silver] coins? ',
                        'C. There are 450 _____ .',     
                        'D. Which item equals 7,000?',                    
                    ],
                    puzzle: [
                        ["0","(D)P","0","0","0","0","0"],
                        ["(A)J","E","W","E","L","3S","0"],
                        ["0","2A","0","0","0","0","0"],
                        ["0","(C)R","E","L","I","1C","S"],
                        ["0","L","0","0","0","0","0"],
                        ["0","(B)S","I","L","V","4E","R"],
                    ]
                },  
                code: {
                    answer: "CASE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ captain fishbeard
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Ship",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Solve the problems and sort them into the correct columns. Then, answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Digit Multiplication",
                    commonCore: [
                        "4.NBT.B.5",
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Ahoy, laddie! The Red Tide be comin', and we must be ready to defend the camp. I've got supplies to gather, but numbers ain't me strong suit. Can ye help me sort 'em out?",
                    complete: "Well shiver me timbers, you did it! Those Red Tide barnacle-brains don't stand a chance."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Ship Supplies that are<br>Even Numbers",
                        "Ship Supplies that are<br>Odd Numbers",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Nails",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "51 × 5 = ?",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Lemons",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "3 × 876 = ?",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Hardtack Biscuits",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "491 × 7 = ?",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Oars",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "9 × 859 = ?",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Water Barrels",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "56 × 23 = ?",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Salted Fish",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "876 × 4 = ?",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Lanterns",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "47 × 89 = ?",
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
                        title: "[<g>1.] Which of these supplies has an answer of 3,504?",
                        correctIndex: 1,
                        paragraph: [
                            "{N}ails",
                            "Salted {f}ish",
                            "Water {b}arrels",
                        ],
                    },
                    {
                        title: "[<g>2.] How many types of ship supplies should be sorted into the \"Odd Numbers\" column?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "{T}wo",
                            "Thre{e}",
                            "F{o}ur",
                            "F{i}ve",
                        ],
                    },
                    {
                        title: "[<g>3.] Are there more hardtack biscuits or lemons?",
                        correctIndex: 0,
                        paragraph: [
                            "There are more h{a}rdtack biscuits",
                            "There are {m}ore lemons",
                            "Both {q}uantities are the same",
                        ],
                    },
                    {
                        title: "[<g>4.] How many lanterns are there?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "4,183 {M}",
                            "4,000 {E}",
                            "3,653 {N}",
                        ],
                    },
                ],  
                code: {
                    answer: "FOAM",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ madame mystica
        {

            info: {
                type: 'challenge',
                title: "Mystic Hideaway",
                asset: "madame-mystica.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Factors and Multiples",
                    commonCore: [
                        "4.OA.B.4",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "Oh dear... danger looms over Camp Calamari! A wicked curse has shattered my magic mirror, leaving me blind to the pirates' next move. Will you help me put it back together?",
                    complete: "Ah, the future is clear again \u2014 all thanks to your clever hands and sharp mind!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "madame-mystica.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "8",
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
                                    text: "18",
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
                                    text: "21",
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
                                    text: "17",
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
                                    text: "14",
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
                                    text: "23",
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
                                    text: "15",
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
                                    text: "25",
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
                                    text: "32",
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
                                align: 'center',
                                puzzle: 'default',
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
                        title: "[<g>1.] Which two pieces are prime numbers?",
                        correctIndex: 2,
                        paragraph: [
                            "The top right an{d} the center",
                            "The {b}ottom left and the bottom right",
                            "The pieces with the sun and the {m}oon",
                        ],
                    },
                    {
                        title: "[<g>2.] What are the first four multiples of the bottom middle piece?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "25, 50, 75, 100 {Y}",
                            "25, 50, 70, 90 {L}",
                            "50, 75, 100, 120 {O}",
                            "50, 75, 100, 150 {X}",
                        ],
                    },
                    {
                        title: "[<g>3.] The top left piece is a factor of ______ .",
                        correctIndex: 1,
                        paragraph: [
                            "The t{o}p right piece",
                            "The bot{t}om right piece",
                            "The cent{e}r piece",
                        ],
                    },
                    {
                        title: "[<g>4.] How many pieces have 3 as a factor?",
                        correctIndex: 2,
                        paragraph: [
                            "O{n}e",
                            "T{w}o",
                            "T{h}ree",
                        ],
                    },
                ],  
                code: {
                    answer: "MYTH",
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