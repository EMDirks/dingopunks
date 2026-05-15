const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/math/fractions/preview-5th-grade.png",
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
                    text: "Add or subtract each set of fractions and mixed numbers, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Fractions and Mixed Numbers With Unlike Denominators",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.B.3',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.B.3a',
                        },
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
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "I'm Topsy and I sell robot pets! I want to work on my latest invention, but I need to count up all these scraps of metal first. Think you can help?",
                    complete: "I was banished from my hometown... Don't tell anyone. Hee hee!"
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
                            text: "Ounces of Tin",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/2 + 2/3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-12%",
                                translateY: "-15%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Ounces of Iron",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/4 + 6/8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "3deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Ounces of Silver",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5 8/10 + 3 2/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Pounds of Copper",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/8 - 1/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "-5%",
                                rotate: "6deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Ounces of Lead",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1 3/9 - 2/5",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "15%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Ounces of Chromium",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7 2/6 - 2 1/2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "10%",
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
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] How much silver does Topsy have?",
                        correctIndex: 0,
                        paragraph: [
                            "9 [<f>1/5] oun{c}es",
                            "9 ounce{s}",
                            "8 [<f>1/5] {o}unces",
                        ],
                    },

                    {
                        title: "[<g>2.] How much lead and chromium does Topsy have?",
                        correctIndex: 1,
                        paragraph: [
                            "1 [<f>15/14] oz. {l}ead, and 4 [<f>5/6] oz. chromium",
                            "[<f>14/15] oz. lead, and 4 [<f>5/6] oz. c{h}romium",
                            "[<f>14/15] oz. lead, and 5 [<f>11/6] oz. chromiu{m}",
                        ]
                    },

                    {
                        title: "[<g>3.] Does Topsy have more tin or iron?",
                        correctIndex: 1,
                        paragraph: [
                            "She has more {t}in",
                            "She has more {i}ron",
                            "She has equal a{m}ounts of both",
                        ]
                    },

                    {
                        title: "[<g>4.] How much copper does Topsy have?",
                        correctIndex: 2,
                        paragraph: [
                            "[<f>3/2] p{o}unds",
                            "[<f>9/24] poun{d}s",
                            "[<f>1/3] {p}ound",
                        ]
                    },

                ],  

                code: {
                    answer: "CHIP",
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
                    text: "Multiply each set of fractions and mixed numbers, then answer the questions to solve the crossword puzzle. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiply Fractions, Mixed Numbers, and Whole Numbers",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.A.2',
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
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I'm trying to figure out how much candy I have left in stock, but my assistant played a prank on me. He gave me all the measurements in fractions! I'm so confused. Can you help?",
                    complete: "Get home safely, okay? The Midnight Mall is a dangerous place after dark."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "the-candy-cave.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "Caramel",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6/8 × 3/12",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Taffy",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/5 × 1/4",
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
                            text: "Fudge",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8/1 × 4/10",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "1%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Gummies",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2 2/4 × 3 6/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Bonbons",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4 1/2 × 3 1/2",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-1%",
                                rotate: "-1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Mochi",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8 × 1 2/5",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "3%",
                                rotate: "0deg",
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
                        'A. Which candy equals [<f>3/16] ?',
                        'B. Which candy equals 11 [<f>1/5] ?',
                        'C. Which candy equals a whole number?',     
                        'D. [<u>True] or [<u>false]: There is more fudge than taffy.',
                        
                    ],
                    puzzle: [
                        ["(A)C","A","4R","A","(B)M","E","L"],
                        ["0","0","0","0","2O","0","0"],
                        ["0","(D)T","0","0","C","0","0"],
                        ["0","R","0","0","H","0","0"],
                        ["(C)G","3U","M","M","I","E","1S"],
                        ["0","E","0","0","0","0","0"],
                    ]
                },  

                code: {
                    answer: "SOUR",
                    userArray: ["","","",""]
                },

            }
        },

        // ⭐ prismatica
        {

            info: {
                type: 'challenge',
                title: "Prismatica",
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Divide each set of fractions and whole numbers, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I must determine the yards of fabric needed for a new set of garments, but dividing these fractions is such a tedious task. I truly can't be bothered, so you will do it for me.",
                    complete: "Consider me impressed, Dingo Punks. Next time you visit the mall, say hello."
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
                            text: "Yards of Corduroy",
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
                                translateX: "-12%",
                                translateY: "-15%",
                                rotate: "-3deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Chiffon",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/4 ÷ 4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "3deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Lace",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/5 ÷ 6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Cashmere",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8 ÷ 1/3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "-5%",
                                rotate: "-6deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Silk",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "9 ÷ 1/3",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "20%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Linen",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/6 ÷ 2",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "10%",
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
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] Does Prisma need more linen or silk?",
                        correctIndex: 1,
                        paragraph: [
                            "{L}inen",
                            "{S}ilk",
                            "She needs t{h}e same amount of both",
                        ],
                    },

                    {
                        title: "[<g>2.] How much corduroy does Prisma require?",
                        correctIndex: 0,
                        paragraph: [
                            "24 y{a}rds",
                            "20 yar{d}s",
                            "[<f>1/24] {y}ards",
                        ]
                    },

                    {
                        title: "[<g>3.] Which equation is another way of showing how many yards of chiffon is needed?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "4 × 1 {N}",
                            "4 × 4 {W}",
                            "[<f>1/4] × [<f>4/1] {R}",
                            "[<f>1/4] × [<f>1/4] {S}",
                        ]
                    },

                    {
                        title: "[<g>4.] How much lace and cashmere does Prisma need?",
                        correctIndex: 1,
                        paragraph: [
                            "30 y{a}rds of lace, 24 yards of cashmere",
                            "[<f>1/30] yards of lace, 24 yards of cas{h}mere",
                            "[<f>1/30]  yards of lace, [<f>1/24] {y}ards of cashmere",
                        ]
                    },

                ],  

                code: {
                    answer: "SASH",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ helio athletics
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Solve each word problem, then enter the answers below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fraction Word Problems With All Four Operations",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.B.4',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.B.4b',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.B.4c',
                        },
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
                            standard: '5.NF.B.4a',
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
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I am distraught! The fight against the Undermurk commands my attention, yet I must stand here taking inventory for this cursed athletic store. I request your assistance.",
                    complete: "Well done, Dingo Punks. You might not be as useless as I thought."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "underworld-athletics.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "Cleats",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Helio Athletics has 240 pairs of cleats. [<f>1/4] are red cleats, and [<f>1/6] are blue cleats. [<u>Find how many cleats are neither red nor blue.]"
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "1%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Shorts",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The shelf of shorts was [<f>5/8] full. Robustus sold [<f>1/4] of these shorts. [<u>Find how full the shelf is now.]"
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "10%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Cheese",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Helio Athletics sells protein-packed cheese. It comes shipped in boxes, each containing 2 pounds of cheese. Today, a customer bought [<f>1/4] of a pound. [<u>Find what fraction of the cheese box was bought.]"
                                }
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
                        tag: {
                            text: "Towels",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Yesterday, Helio Athletics offered a discount of [<f>1/4] off all towels, each of which normally costs $80. We sold [<f>2/3] of our 150 towels at this discounted price. [<u>Find how much money we made.]"
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-1%",
                                rotate: "-2deg",
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
                                translateX: "2%",
                                translateY: "3%",
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
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
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
                        title: "[<g>1.] Which item has an answer of [<f>15/32] ?",
                        word: "[S]HORTS",
                    },
                    {
                        title: "[<g>2.] Which item has an answer of 140?",
                        word: "CLE[A]TS",
                    },
                    {
                        title: "[<g>3.] Which item has an answer of $6,000?",
                        word: "TOWE[L]S",
                    },
                    {
                        title: "[<g>4.] Which item has an answer of [<f>1/8] ?",
                        word: "CHEES[E]",
                    },
                ],

                code: {
                    answer: "SALE",
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


  