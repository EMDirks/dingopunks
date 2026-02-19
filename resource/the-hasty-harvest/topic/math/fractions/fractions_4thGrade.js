const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/math/fractions/preview-4th-grade.png",
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
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.B.3d',
                        },
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Welcome to the farm! I'm growing a bunch of herbs to add into my latest batch of candles. Can you help me figure out how much I picked today?",
                    complete: "Thanks for helpin' with those herbs! Go see if anyone else needs a hand."
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
                            text: "Ounces of Moonshade Collected",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/5 + 1/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Ounces of Windleaf Collected",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/8 + 5/8",
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
                            text: "Ounces of Sunflare Collected",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/6 - 1/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "2%",
                                rotate: "-3deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Ounces of Shadowfern Collected",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8/10 - 4/10",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "3%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Ounces of Mistbloom Collected",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "18/3 - 2/3",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-10%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Candles",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "My candles are known for lasting a long time \u2014 yep, every single one of them. Seriously, just pick one! You can walk a loop around the entire farm, and only [<f>1/3] of it will burn away.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "3%",
                                rotate: "1deg",
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
                        title: "[<g>1.] How much Mistbloom did Candlewick collect?",
                        correctIndex: 0,
                        paragraph: [
                            "5 [<f>1/3] ounce{s}",
                            "4 [<f>1/3] o{u}nces",
                            "4 [<f>2/3] ounc{e}s",
                        ],
                    },

                    {
                        title: "[<g>2.] Did Candlewick collect more Shadowfern or Moonshade?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Sh{a}dowfern",
                            "Mo{o}nshade",
                        ]
                    },

                    {
                        title: "[<g>3.] How much Sunflare & Windleaf were collected?",
                        correctIndex: 2,
                        paragraph: [
                            "[<f>3/6] ounces of Sunfla{r}e, [<f>8/16] ounces of Windleaf",
                            "[<f>2/6] ounces of Sunf{l}are, [<f>8/8] ounces of Windleaf",
                            "[<f>1/2] ounce of Sunflare, 1 ounce of W{i}ndleaf",
                        ]
                    },

                    {
                        title: "[<g>4.] If you walk 2 loops around the entire farm, what fraction of a candle will be left?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "[<f>2/3] of {a} candle",
                            "[<f>1/3] of a cand{l}e",
                            "[<f>1/6] of a candl{e}",
                            "[<f>4/6] of the {c}andle",
                        ]
                    },

                ],  

                code: {
                    answer: "SOIL",
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
                    text: "Sort each fraction into the correct column, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare Fractions",
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
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "We're counting up our belongings, but oh boy \u2014 it's a lot of work! We still need to sort through a bunch of supplies, and we're running out of time. Care to help?",
                    complete: "Wow, you've got a knack for this! Come visit us on the road!"
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
                            text: "Hats",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/4",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Rope",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/8",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Matches",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Two sixths",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Candles",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Four tenths",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Beans",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_3-6.svg",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Backpack",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/8",
                                },  
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Rice",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/5",
                                }, 
                            }
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Dried Fish",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/4",
                                },  
                            }
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Lantern",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_6-6.svg",
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
                        title: "[<g>1.] Which item is equal to [<f>2/8] ?",
                        correctIndex: 0,
                        paragraph: [
                            "{H}ats",
                            "Ro{p}e",
                            "{B}ackpack",
                        ],
                    },
    
                    {
                        title: "[<g>2.] How many items are less than [<f>1/2] ?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "2 {U}",
                            "3 {S}",
                            "4 {I}",
                        ],
                    },
    
                    {
                        title: "[<g>3.] How many items are equal to one half?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "1 {V}",
                            "2 {K}",
                            "3 {S}",
                        ],
                    },
    
                    {
                        title: "[<g>4.] Which item is equal to one whole?",
                        correctIndex: 2,
                        paragraph: [
                            "Dried Fis{h}",
                            "{R}ice",
                            "Lant{e}rn",
                        ],
                    },
    
                ],  
    
                code: {
                    answer: "HIKE",
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
                    text: "Add or subtract each set of mixed numbers, then type in the answers below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Mixed Numbers With Like Denominators",
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
                            standard: '4.NF.B.3c',
                        },
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Welcome to Frantic Factory. Still have many boxes to fill. Many calculations to make. But no time. Candlewick will be upset. Will punish me. Help!",
                    complete: "Task complete. No trip to junkyard for me. Much thanks. Farewell."
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
                            text: "Boxes of Parsnips",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7 5/8 + 2 2/8",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "3%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Boxes of Pumpkins",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 4/6 + 5 2/6",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Boxes of Tomatoes",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "10 8/9 - 5 3/9"
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-3%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Boxes of Cabbages",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8 1/3 - 3 2/3"
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Boxes of Currants",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4 1/8 + 5 2/8"
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "3%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Boxes of Tangelos",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7 - 5 1/2"
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
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
                                translateX: "-5%",
                                translateY: "15%",
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
                        title: "[<g>1.] Which food has an answer of 1 [<f>1/2] ?",
                        word: "[T]ANGELOS",
                    },
                    {
                        title: "[<g>2.] Which is greater: cabbages or tomatoes?",
                        word: "TOM[A]TOES",
                    },
                    {
                        title: "[<g>3.] Which food has an answer of 9 [<f>7/8] ?",
                        word: "PAR[S]NIPS",
                    },
                    {
                        title: "[<g>4.] Which food has an answer of a whole number?",
                        word: "PUMP[K]INS",
                    },
                ],
    
                code: {
                    answer: "TASK",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "Oh, how I hate this corn maze! Something always goes wrong... This time, some goblins stole my map. I got it back, but now it's shredded to pieces. Can you help me put it back together?",
                    complete: "Thanks for the help! Be careful on your way back to the farm \u2014 goblins are hiding in this maze."
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
                                    text: "5 × 4/10",
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
                                    text: "6 × 2/8",
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
                                    text: "1/2 × 6",
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
                                    text: "3 × 2/3",
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
                                    text: "1/2 × 4",
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
                                    text: "1/6 × 9",
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
                                    text: "3/4 × 8",
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
                                    text: "9 × 1/5",
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
                                    text: "6 × 2/5",
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
                        title: "[<g>1.] Solve the pieces with trees. All 3 answers are:",
                        correctIndex: 0,
                        paragraph: [
                            "Whole number{s}",
                            "Mixed numb{e}rs",
                            "Fractions less tha{n} [<f>1/2]"
                        ],
                    },

                    {
                        title: "[<g>2.] Which piece has an answer of [<f>9/5] ?",
                        correctIndex: 0,
                        paragraph: [
                            "The b{o}ttom middle piece",
                            "The top l{e}ft piece",
                            "The p{i}ece with the red barn",
                        ]
                    },

                    {
                        title: "[<g>3.] The answer to the 3 pieces in the top row are:",
                        correctIndex: 2,
                        paragraph: [
                            "Fro{m} left to right: &nbsp[<f>20/10], &nbsp[<f>12/8], &nbsp[<f>6/3]",
                            "From lef{t} to right: &nbsp[<f>16/10], &nbsp1 [<f>1/2], &nbsp[<f>6/2]",
                            "From left to {r}ight: &nbsp2, &nbsp1 [<f>1/2], &nbsp3",
                        ]
                    },

                    {
                        title: "[<g>4.] Which two pieces have an answer > 2?",
                        correctIndex: 1,
                        paragraph: [
                            "The top right, and the midd{l}e right",
                            "The top righ{t}, and the bottom left",
                            "The top l{e}ft, and the bottom left"
                        ]
                    },

                ],  

                code: {
                    answer: "SORT",
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


  