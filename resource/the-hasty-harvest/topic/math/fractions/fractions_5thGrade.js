const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/math/fractions/preview-5th-grade.png",
        timerLabel: "TIME TO SUNSET"
    },

    challengeArray: [

        // ⭐ frantic factory
        {

            info: {
                type: 'challenge',
                title: "Frantic Factory",
                asset: "frantic-factory.png",
                state: "incomplete",
                hint: {
                    text: "Add or subtract each set of fractions and mixed numbers, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Fractions and Mixed Numbers With Unlike Denominators",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.A.1',
                        },
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Warning! Many products still left to pack. Spies reported in factory. Supplies coded to confuse them. Need help solving. Begin now!",
                    complete: "You accomplished the task. Why have you returned? Leave now."
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
                            text: "T",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/5 + 3/10",
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
                            text: "U",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 3/6 + 2 2/5",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "I",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5/8 + 2/3",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "-1%",
                                rotate: "-2deg",
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
                                    text: "4/6 - 2/9",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "1deg",
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
                                    text: "9/10 - 2/5",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "0%",
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
                                fraction: {
                                    text: "12 1/4 - 5 3/8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "2%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>T] = yards of tape<br> \
                                            [<s>I] = yards of twine<br> \
                                            [<s>N] = tons of staples",
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
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>U] = pounds of cardboard<br> \
                                            [<s>S] = tons of labels<br> \
                                            [<s>L] = feet of bubble wrap",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "2%",
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
                        title: "[<g>1.] Are there more tons of staples or labels?",
                        correctIndex: 0,
                        paragraph: [
                            "Staple{s}",
                            "Lab{e}ls",
                            "Both are equal in we{i}ght",
                        ],
                    },

                    {
                        title: "[<g>2.] How much bubble wrap is in the factory?",
                        correctIndex: 2,
                        paragraph: [
                            "7 [<f>7/8] feet of b{u}bble wrap",
                            "7 [<f>2/4] feet of {b}ubble wrap",
                            "6 [<f>7/8] feet of bubbl{e} wrap",
                        ],
                    },

                    {
                        title: "[<g>3.] How many yards of tape and twine are there?",
                        correctIndex: 0,
                        paragraph: [
                            "[<f>11/10] yards of tape, and [<f>31/24] y{a}rds of twine",
                            "[<f>7/15] yards of tape, a{n}d [<f>7/11] yards of twine",
                            "[<f>12/50] yards of tape, and [<f>10/24] yar{d}s of twine"
                        ],
                    },

                    {
                        title: "[<g>4.] True or false: The factory has exactly 9 pounds of cardboard.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "{T}rue",
                            "Fa{l}se",
                        ],
                    },

                ],  

                code: {
                    answer: "SEAL",
                    userArray: ["","","",""]
                },

            }
        },

        // ⭐ candlewick's cart
        {

            info: {
                type: 'challenge',
                title: "Candlewick's Cart",
                asset: "candlewicks-cart.png",
                state: "incomplete",
                hint: {
                    text: "Multiply each set of fractions and mixed numbers, then fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiply Fractions, Mixed Numbers, and Whole Numbers",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.4',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.6',
                        },
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "We've got tons of yummy fruits and veggies ready to pack up! But first, we need to figure out their weights. Time is ticking \u2014 think you can help?",
                    complete: "Thanks for the help. We're all set now. Couldn't have done it without you!"
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
                            text: "Potato Weight (kg)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/2 × 2/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-10%",
                                rotate: "-4deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Turnip Weight (kg)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/3 × 3/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "-2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Squash Weight (kg)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7/8 × 4/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-1%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Radish Weight (kg)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2 3/4 × 2 1/2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Tomato Weight (kg)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 1/2 × 3 2/3",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "3%",
                                rotate: "-1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Pepper Weight (kg)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 × 3 4/6",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "11%",
                                translateY: "8%",
                                rotate: "3deg",
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
            
            questions: {
                
                info: {
                    type: "crossword"
                },

                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which food item\'s weight is a whole number?',
                        'B. Which food item weighs 6 [<f>7/8] kilograms?',
                        'C. Which weighs more: [<u>potato] or [<u>turnip]?',     
                        'D. The _______ weighs [<f>7/10] kilograms.',
                        
                    ],
                    puzzle: [
                        ["(A)P","E","P","P","E","(B)R","0"],
                        ["0","0","0","0","0","A","0"],
                        ["0","0","0","0","0","1D","0"],
                        ["0","(C)T","U","R","N","I","P"],
                        ["0","0","0","0","0","S","0"],
                        ["(D)3S","Q","U","2A","S","4H","0"],
                    ]
                },  

                code: {
                    answer: "DASH",
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
                    topic: "Divide Unit Fractions and Whole Numbers",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.7',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.7a',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.7b',
                        },
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "We've been foraging all day, and now we gotta skedaddle \u2014 but our star chart got torn to pieces! Think you can put it back together? It's almost sunset, so hurry now.",
                    complete: "We thank you kindly. The stars are showin' good fortune in your future."
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
                                fraction: {
                                    text: "5 ÷ 1/3",
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
                                fraction: {
                                    text: "3 ÷ 1/4",
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
                                fraction: {
                                    text: "1/3 ÷ 7",
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
                                fraction: {
                                    text: "1/5 ÷ 2",
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
                                fraction: {
                                    text: "6 ÷ 1/2",
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
                                fraction: {
                                    text: "4 ÷ 1/2",
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
                                fraction: {
                                    text: "8 ÷ 1/3",
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
                                fraction: {
                                    text: "1/2 ÷ 4",
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
                                fraction: {
                                    text: "1/10 ÷ 2",
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
                        title: "[<g>1.] Which puzzle pieces all have an answer of 12?",
                        correctIndex: 2,
                        paragraph: [
                            "All three gray {p}ieces",
                            "The to{p} left piece, and the top right piece",
                            "The cente{r} piece, and the piece without a star"
                        ],
                    },

                    {
                        title: "[<g>2.] Which piece has an answer with a denominator greater than 20?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "T{o}p right",
                            "Middl{e} left",
                            "Ce{n}ter",
                            "Top le{f}t",
                        ]
                    },

                    {
                        title: "[<g>3.] What are the answers to the middle left piece & the middle bottom piece?",
                        answerType: 'numerals',
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "[<f>1/10] and [<f>1/8] {V}",
                            "[<f>2/10] and [<f>2/8] {A}",
                            "10 and 8 {M}",
                            "[<f>1/5] and [<f>1/2] {L}",
                        ]
                    },

                    {
                        title: "[<g>4.] Which piece's answer is a whole number < 10?",
                        correctIndex: 2,
                        paragraph: [
                            "{B}ottom left",
                            "Bottom rig{h}t",
                            "Middl{e} right",
                        ]
                    },

                ],  

                code: {
                    answer: "ROVE",
                    userArray: ["","","",""]
                },

            },

        },

        // ⭐ mallow maze
        {

            info: {
                type: 'challenge',
                title: "Mallow Maze",
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Solve each word problem, then type in the answers below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fraction Word Problems With All Four Operations",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.3',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.4',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.6',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.7',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.7a',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.7b',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations Fractions',
                            standard: '5.NF.B.7c',
                        },
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I have TONS of letters to deliver to the farm before nightfall. But my boss gave me all these performance reviews to read first. I'm so busy, I just don't have the time... Can you help?",
                    complete: "Thanks a bunch! Good luck with everything else you've got to do. You're doing great!"
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
                            text: "Performance Review",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: "[<bwb>LETTERS]"
                                },
                                passage: {
                                    text: "<br>Mabel was given 95 letters this week, but was only able to deliver [<f>3/5] of them. [<u>Find how many letters were delivered.]"
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "10%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Performance Review",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: "[<bwb>TRAVELS]"
                                },
                                passage: {
                                    text: "<br>In the morning, Mabel traveled [<f>2/3] of the way to the farm. It rained for [<f>7/8] of the morning. She finished her walk in the afternoon, when it was sunny. [<u>Find what fraction of the total walk it rained.]"
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "35%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Performance Review",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: "[<bwb>BISCUIT]"
                                },
                                passage: {
                                    text: "<br>Mabel ate half a biscuit after getting lost in a cornfield for 3 hours. She gave the other half to two friendly shrews to share equally. [<u>Find the portion of the biscuit each shrew got.]"
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Performance Review",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: "[<bwb>PARCELS]"
                                },
                                passage: {
                                    text: "<br>Mabel lost her old bag, and was given a new one. 5 parcels fill up [<f>1/4] of her new bag. [<u>Find how many parcels her new bag can hold.]"
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "23%",
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
                            size: 'tiny',
                            align: 'right',
                            padding: 'defaultNoBottom'
                        },
                        dimension: {
                            width: "percent45",
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
                            
                        } 
                    ]

                },

            },
            
            questions: {
                
                info: {
                    type: "decoder",
                    functionality: "noCode"
                },

                contentArray: [
                    {
                        title: "[<g>1.] Which performance review's answer is 20?",
                        word: "[P]ARCELS",
                    },
                    {
                        title: "[<g>2.] Which performance review's answer is [<f>7/12] ?",
                        word: "TR[A]VELS",
                    },
                    {
                        title: "[<g>3.] Which performance review's answer is [<f>1/4] ?",
                        word: "BIS[C]UIT",
                    },
                    {
                        title: "[<g>4.] Which performance review's answer is 57?",
                        word: "LETT[E]RS",
                    },
                ],

                code: {
                    answer: "PACE",
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


  