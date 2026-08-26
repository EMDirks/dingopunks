const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/the-hasty-harvest/assets/branding/math/fractions/preview-3rd-grade.png",
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
                    text: "Look at the number lines, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions on Number Lines",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2a',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3a',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3b',
                        },
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Howdy, I'm Candlewick! I need to figure out how full these boxes of candles are, but my assistant gave me all the data on number lines. I can't read these things! Can you help?",
                    complete: "Enjoy your visit to the farm. Just remember: be careful who you trust. "
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
                            text: "The box of [<u>Wiz Candles]<br> is this full:",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 5,
                                        dot: 4
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
                                translateY: "-60%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "The box of [<u>Star Candles]<br> is this full:",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 8,
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
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-30%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "The box of [<u>Hex Candles]<br> is this full:",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
                                        dot: 4
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
                                translateX: "-5%",
                                translateY: "35%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "The box of [<u>Soul Candles]<br> is this full:",
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
                                translateX: "5%",
                                translateY: "5%",
                                rotate: "-2deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "The box of [<u>Love Candles]<br> is this full:",
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
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "80%",
                                rotate: "3deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "The box of [<u>Moon Candles]<br> is this full:",
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
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "48%",
                                rotate: "-3deg",
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
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            dimension: {
                                width: "percent70",
                                height: "full",
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
                        title: "[<g>1.] How full is the box of Hex Candles?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "[<f>5/6] {H}",
                            "[<f>4/5] {Y}",
                            "[<f>4/6] {R}",
                        ],
                    },

                    {
                        title: "[<g>2.] Which box has a denominator of 2?",
                        correctIndex: 0,
                        paragraph: [
                            "The box of So{u}l Candles",
                            "The b{o}x of Star Candles",
                            "The box of Moon Candl{e}s",
                        ]
                    },

                    {
                        title: "[<g>3.] Which two boxes both have a numerator of 3?",
                        correctIndex: 1,
                        paragraph: [
                            "Star {C}andles and Moon Candles",
                            "Star Candles and Love Ca{n}dles",
                            "So{u}l Candles and Wiz Candles",
                        ]
                    },

                    {
                        title: "[<g>4.] Which two boxes are equally full?",
                        correctIndex: 2,
                        paragraph: [
                            "Soul Candles and Star Ca{n}dles",
                            "Love Candles and Wi{z} Candles",
                            "H{e}x Candles and Moon Candles",
                        ]
                    },

                ],  

                code: {
                    answer: "RUNE",
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
                    topic: "Compare Fractions",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3a',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3c',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3d',
                        }
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "We\'re not waiting around for those Fallcrawlers to show up \u2014 we're getting out of here! While we pack our things, can you put together the pieces of our star chart?",
                    complete: "Just remember, the farm isn't as peaceful as it seems... Stay sharp!"
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
                                    text: "3/6 [<bgl>&nbsp?&nbsp] 5/6",
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
                                    text: "1/5 [<bgl>&nbsp?&nbsp] 1/3",
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
                                    text: "3/8 [<bgl>&nbsp?&nbsp] 3/4",
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
                                    text: "2/2 [<bgl>&nbsp?&nbsp] 2/4",
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
                                    text: "7/8 [<bgl>&nbsp?&nbsp] 6/8",
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
                                    text: "1/2 [<bgl>&nbsp?&nbsp] 1/4",
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
                                    text: "3/5 [<bgl>&nbsp?&nbsp] 1/5",
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
                                    text: "4/8 [<bgl>&nbsp?&nbsp] 1/2",
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
                                    text: "4/4 [<bgl>&nbsp?&nbsp] 3/3",
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
                        title: "[<g>1.] Which 2 pieces are compared with an equals sign?",
                        correctIndex: 0,
                        paragraph: [
                            "Bottom middl{e}, and bottom right",
                            "Bott{o}m middle, and top right",
                            "Top left, and to{p} right",
                        ],
                    },

                    {
                        title: "[<g>2.] Which three pieces all need the \"&nbsp<&nbsp\" symbol?",
                        correctIndex: 2,
                        paragraph: [
                            "All three piece{s} in the bottom row",
                            "All three piec{e}s in the middle row",
                            "{A}ll three pieces in the top row",
                        ],
                    },

                    {
                        title: "[<g>3.] True or false: The piece on the bottom left can be compared with a \"greater than\" sign.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{T}rue",
                            "Fal{s}e",
                        ],
                    },

                    {
                        title: "[<g>4.] Which symbol would you use to compare the fractions in the middle piece?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "< {M}",
                            "> {S}",
                            "= {E}",
                            "- {L}"
                        ],
                    },

                ],  

                code: {
                    answer: "EATS",
                    userArray: ["","","",""]
                },

            }


        },

        // ⭐ mallow maze
        {

            info: {
                type: 'challenge',
                title: "Mallow Maze",
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Find the missing number for each fraction, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Whole Numbers as Fractions",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2a',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3a',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3c',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3d',
                        },
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I'm just a mail carrier, but Candlewick needs me to make secret calculations about the harvest. I'm supposed to turn these fractions into whole numbers, but I don't know how. Help!",
                    complete: "Wow, thanks! Couldn't have done it without you. Now I can get back to delivering mail."
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
                            text: "[<s>A]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/2 = 3/?",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>L]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 = 3/?",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>E]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "?/6 = 1",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "7%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>G]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/4 = ?",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "20%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>Y]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "?/1 = 8",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "35%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>C]",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 5,
                                        dot: 5
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            },
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 2,
                                        dot: 2
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                },
                            },
                            
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "40%",
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
                            size: 'medium',
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
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            dimension: {
                                width: "percent70",
                                height: "full",
                            },
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'mediumSmall'
                                },
                            },
                        }, 
                        { 
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            dimension: {
                                width: "full",
                                height: "full",
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
                        title: "[<g>1.] What are the answers to [<s>A], [<s>E], and [<s>Y] ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "1, 6, and 8 {S}",
                            "3, 6, and 8 {M}",
                            "3, 6, and 1 {P}",
                        ],
                    },

                    {
                        title: "[<g>2.] The missing numbers for [<s>G] and [<s>L] are:",
                        correctIndex: 0,
                        paragraph: [
                            "The s{a}me",
                            "D{i}fferent",
                        ],
                    },

                    {
                        title: "[<g>3.] Are the fractions in [<s>C] equal or not equal?",
                        correctIndex: 0,
                        paragraph: [
                            "The fract{i}ons are equal",
                            "The fractions are not e{q}ual"
                        ],
                    },

                    {
                        title: "[<g>4.] Look at [<s>C]. Which two fractions are shown on the number lines?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "[<f>5/5] and [<f>1/2] {D}",
                            "[<f>5/6] and [<f>2/2] {R}",
                            "[<f>6/6] and [<f>1/2] {T}",
                            "[<f>5/5] and [<f>2/2] {L}",
                        ],
                    },

                ],  

                code: {
                    answer: "MAIL",
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
                    text: "Look at the fractions, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Equivalent Fractions",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3a',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3d',
                        },
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "I am Hollow Jack. I pack fruits and veggies into crates. Each crate needs a specific fraction. I have no time. You will help. Understood?",
                    complete: "Thank you for the help. Now, leave! It is not safe. Not after dark."
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
                            text: "Fraction of Potatoes",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6/8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "100%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fraction of Cabbages",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_3-6.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "15%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fraction of Tomatoes",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/5",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "-1%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fraction of Pumpkins",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 3,
                                        dot: 1
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "75%",
                                translateY: "0%",
                                rotate: "-2deg",
                            },
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
                                translateX: "-6%",
                                translateY: "0%",
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
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
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
                                height: "auto",
                            },
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'medium'
                                },
                            }, 
                            misc: {
                                padding: "default"
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
                        },  
                    ]

                },

            },
            
            questions: {
                
                info: {
                    type: "decoder"
                },

                contentArray: [
                    {
                        title: "[<g>1.] Which food item is equal to [<f>3/4] ?",
                        word: "POTA[T]OES",
                    },
                    {
                        title: "[<g>2.] Which food item is equivalent to [<f>1/2] ?",
                        word: "CABB[A]GES",
                    },
                    {
                        title: "[<g>3.] Which food item is equivalent to [<f>2/6] ?",
                        word: "PUM[P]KINS",
                    },
                    {
                        title: "[<g>4.] Which food item is equivalent to [<f>4/10] ?",
                        word: "TOMATO[E]S",
                    },
                ],

                code: {
                    answer: "TAPE",
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


  