const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/math/fractions/preview-4th-grade.png",
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
                    text: "Add or subtract each set of fractions, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Fractions With Like Denominators",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.B.3a',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.B.3d',
                        },
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "I'm Topsy and I sell robot pets! I want to work on my latest invention, but I need to add up all these scraps of metal first. Think you can help?",
                    complete: "I was banished from my hometown... Hee hee! But I won't talk about it, okay?"
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
                                    text: "2/7 + 6/7",
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
                                    text: "3/5 + 4/5",
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
                                    text: "7/4 - 3/4",
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
                            text: "Ounces of Copper",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/3 + 2/3",
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
                            text: "Ounces of Aluminum",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/6 - 3/6",
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
                            text: "Precious Metal",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "My safe is full of precious metal. Right now, it's [<f>1/5] silver and [<f>2/5] platinum. The rest is gold.",
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
                        title: "[<g>1.] Which two metals both equal one whole?",
                        correctIndex: 0,
                        paragraph: [
                            "Silver and cop{p}er",
                            "Sil{v}er and aluminum",
                            "{T}in and copper",
                        ],
                    },

                    {
                        title: "[<g>2.] How much aluminum does Topsy have?",
                        correctIndex: 2,
                        paragraph: [
                            "[<f>2/5] {o}unces",
                            "[<f>1/5] ou{n}ce",
                            "[<f>1/6] ounc{e}",
                        ]
                    },

                    {
                        title: "[<g>3.] How much tin and iron does Topsy have?",
                        correctIndex: 1,
                        paragraph: [
                            "[<f>4/7] ounces of tin, and [<f>7/5] ounces of i{r}on",
                            "[<f>8/7] ounces of {t}in, and [<f>7/5] ounces of iron",
                            "1 [<f>1/7] ounces of ti{n}, and 2 [<f>2/5] ounces of iron",
                        ]
                    },

                    {
                        title: "[<g>4.] What fraction of the precious metal is gold?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "[<f>1/5] {G}",
                            "[<f>2/5] {S}",
                            "[<f>5/5] {Y}",
                        ]
                    },

                ],  

                code: {
                    answer: "PETS",
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
                    text: "Sort the receipts into the columns, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare Fractions With Unlike Denominators",
                    commonCore: [
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
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.A.2',
                        },
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I'm trying to organize today's receipts, but I have such little time! Can you help me sort them into the correct columns?",
                    complete: "Did you hear that? There's definitely something in the walls..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Less than [<f>1/2]",
                        "Equal to [<f>1/2]",
                        "Greater than [<f>1/2]"
                    ],
                    asset: {
                        scope: "global",
                        path: "3-column-stone.png"
                    }
                },
    
                blockArray: [
                    
                    {
                        tag: {
                            text: "Receipt #233",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/3",
                                }, 
                            }
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Receipt #229",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/8",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Receipt #227",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/4",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Receipt #231",
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
                    {
                        tag: {
                            text: "Receipt #228",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Five-tenths",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Receipt #230",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_7-8.svg",
                                },  
                            }
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Receipt #232",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/6",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Receipt #234",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Four-fifths",
                                }, 
                            }
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
            
            questions: {
                
                info: {
                    type: "multiple-choice"
                },
    
                contentArray: [
    
                    {
                        title: "[<g>1.] How many receipts are less than [<f>1/2] ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "1 {S}",
                            "2 {C}",
                            "3 {G}",
                        ],
                    },
    
                    {
                        title: "[<g>2.] How many receipts are equal to [<f>1/2] ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "2 {R}",
                            "3 {H}",
                            "4 {A}",
                        ],
                    },
    
                    {
                        title: "[<g>3.] How many receipts are greater than [<f>1/2] ?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "3 {E}",
                            "4 {U}",
                            "5 {N}",
                        ],
                    },
    
                    {
                        title: "[<g>4.] Which receipt shows one whole ?",
                        correctIndex: 2,
                        paragraph: [
                            "Recei{p}t #234",
                            "Re{c}eipt #231",
                            "No receipts sho{w} one whole",
                        ],
                    },
    
                ],  
    
                code: {
                    answer: "CHEW",
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
                    text: "Add or subtract each set of mixed numbers, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Mixed Numbers",
                    commonCore: [
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
                            standard: '4.NF.B.3c',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.B.3d',
                        },
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I need to determine how much fabric to order for next week, but it's such a tedious chore. I truly cannot be bothered to do it myself. Will you take on this task?",
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
                                    text: "7 3/6 + 8 2/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-10%",
                                rotate: "-5deg",
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
                                    text: "1 1/2 + 7 1/2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-3%",
                                rotate: "8deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Leather",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5 1/3 - 2 2/3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "8%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Yards of Velvet",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7 - 3 4/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
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
                                    text: "12 7/8 - 9 3/8",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "5%",
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
                                passage: {
                                    text: "I started with 4 [<f>5/8] yards of linen fabric. I then used up 2 [<f>7/8] yards of this fabric for a cloak. I will use the rest of it for a bonnet.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
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
                        title: "[<g>1.] How many yards of silk does Prisma need?",
                        correctIndex: 2,
                        paragraph: [
                            "2 [<f>12/8] yar{d}s of silk",
                            "3 [<f>5/8] yards of s{i}lk",
                            "3 [<f>1/2] yards of si{l}k"
                        ],
                    },

                    {
                        title: "[<g>2.] How much leather and velvet does Prisma need?",
                        correctIndex: 2,
                        paragraph: [
                            "3 [<f>2/3] yards of leather, and 4 [<f>1/5] {y}ards of velvet",
                            "3 [<f>1/3] yards of leat{h}er, and 4 [<f>4/5] yards of velvet",
                            "2 [<f>2/3] y{a}rds of leather, and 3 [<f>1/5] yards of velvet",
                        ]
                    },

                    {
                        title: "[<g>3.] Which material equals 15 [<f>5/6] ?",
                        correctIndex: 1,
                        paragraph: [
                            "C{h}iffon",
                            "{C}orduroy",
                            "Vel{v}et",
                        ]
                    },

                    {
                        title: "[<g>4.] How much linen was left for the bonnet?",
                        correctIndex: 0,
                        paragraph: [
                            "1 [<f>3/4] yards of lin{e}n",
                            "2 [<f>6/8] yar{d}s of linen",
                            "7 [<f>1/2] yards of line{n}"
                        ]
                    },

                ],  

                code: {
                    answer: "LACE",
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
                    text: "Multiply each set of fractions and mixed numbers, then answer the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiply Fractions by Whole Numbers",
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
                            standard: '4.NF.B.4a',
                        }, 
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.B.4b',
                        },
                    ],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I have no patience for silly activities like taking inventory. You will do it for me, but be warned! Our products arrive in fractional pieces, so these calculations might be too much for you to handle.",
                    complete: "Well met. Perhaps I will require your skills again in the future."
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
                            text: "SwiftFit",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7 × 5/10",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "25%",
                                translateY: "-40%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Flextech",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/2 × 9",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Sprinter",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 × 2/5"
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-18%",
                                translateY: "-35%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "WaveLite",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/4 × 4"
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-22%",
                                translateY: "15%",
                                rotate: "5deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Boost300",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 × 1/4"
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-35%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "GripsPro",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/3 × 5"
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "20%",
                                rotate: "4deg",
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
                                translateX: "0%",
                                translateY: "30%",
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
                            width: "percent15",
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
                                    fraction: 'mediumSmall'
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
            
            questions: {
                
                info: {
                    type: "decoder"
                },
    
                contentArray: [
                    {
                        title: "[<g>1.] Which product equals 4 [<f>1/2] ?",
                        word: "F[L]EXTECH",
                    },
                    {
                        title: "[<g>2.] Which product equals 3 [<f>1/3] ?",
                        word: "GR[I]PSPRO",
                    },
                    {
                        title: "[<g>3.] Which product equals 3 [<f>1/2] ?",
                        word: "SWI[F]TFIT",
                    },
                    {
                        title: "[<g>4.] Which product is equal to one whole?",
                        word: "WAVELI[T]E",
                    },
                ],
    
                code: {
                    answer: "LIFT",
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


  