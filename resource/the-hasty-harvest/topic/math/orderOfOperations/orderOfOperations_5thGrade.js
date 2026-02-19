const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/math/order-of-operations/preview-5th-grade.png",
        timerLabel: "TIME TIL SUNSET"
    },

    challengeArray: [


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
                    topic: "Equations With All Four Operations",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.6',
                        },
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I need to deliver some mail to the farm, but a stray dog ripped my map to pieces! I'm hopelessly lost without this thing... Can you help me put it back together?",
                    complete: "Why did I bring a map to the cornfield? Because I didn't want to be ROASTED for getting lost again! Hehe... Corn... Roasted... Get it?"
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
                                passage: {
                                    text: "9 - 8 + 7 × 16 ",
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
                                passage: {
                                    text: "3 + 4 × 12 + 14",
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
                                passage: {
                                    text: "5 (3+4) - 8",
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
                                passage: {
                                    text: "42 ÷ 7 + 9 × 4",
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
                                passage: {
                                    text: "96 ÷ 12(8-7) + 93",
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
                                passage: {
                                    text: "3 + 12(36 ÷ 18)",
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
                                passage: {
                                    text: "4 × 4 + 12 × 8 ",
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
                                passage: {
                                    text: "22 x 2 + 18 × 2",
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
                                passage: {
                                    text: "13 +2 + (4×5)",
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
            
            questions: {
                
                info: {
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] Which piece's answer is a multiple of 3?",
                        correctIndex: 2,
                        paragraph: [
                            "The ce{n}ter piece",
                            "The top l{e}ft piece",
                            "The {m}iddle left piece",
                        ],
                    },

                    {
                        title: "[<g>2.] Which 3 pieces all have answers > 100?",
                        correctIndex: 1,
                        paragraph: [
                            "Top {l}eft, top right, and center",
                            "Top left, center, {a}nd bottom left",
                            "Center, {b}ottom left, and bottom right",
                        ],
                    },

                    {
                        title: "[<g>3.] What is the answer to the piece with the barn?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "35 {Z}",
                            "30 {D}",
                            "28 {L}",
                        ],
                    },

                    {
                        title: "[<g>4.] True or false: the top right piece has an answer greater than that of the middle left piece.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fals{e}"
                        ],
                    },

                ],  

                code: {
                    answer: "MAZE",
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
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Order of Operations Word Problems",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.6',
                        },
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "Howdy there! Those pesky Fallcrawlers are gettin' too close for comfort, so we're gonna pack up and skedaddle. Can you help us solve a few problems before we hit the trail?",
                    complete: "Well, golly \u2014 we really can't thank you enough. Come visit us on the trail any time!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "mallow-maze.png",
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
                                passage: {
                                    text: "The Gnomads need to pack up their clothing. They put everything into 6 small bags, each weighing 8 pounds, and 3 large bags, each weighing 12 pounds. They need to split the total weight of the bags evenly among the 3 of them.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-5%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "7.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "The Gnomads plan to sell 2 tables for $20 each and 8 chairs for $10 each. They also have just enough cushions to place one on each chair. They plan to sell each cushion for $2.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "11%",
                                rotate: "-2deg",
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
                                    text: "The Gnomads stocked up on lots of fresh fruits: 138 apples, 246 cherries, and 462 grapes. They divided these fruits equally among 6 trunks, then put an additional 2 melons in each trunk.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "15%",
                                rotate: "1deg",
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
                                passage: {
                                    text: "The Gnomads consist of 3 family members living together, each of them owning 7 magic seeds. All together, the Gnomads also own 12 magic flowers and 3 magic gemstones. They packed up everything except for 2 magic flowers, which they left as a gift.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "15%",
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
                        title: "[<g>1.] Each Gnomad must carry how many pounds?",
                        correctIndex: 2,
                        paragraph: [
                            "14 p{o}unds",
                            "84 poun{d}s",
                            "28 {p}ounds",
                        ],
                    },

                    {
                        title: "[<g>2.] If the Gnomads can sell every table, chair, and cushion, how much money will they make?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "$136 in tota{l}",
                            "$42 in t{o}tal",
                            "$122 in to{t}al",
                            "$102 i{n} total",
                        ]
                    },

                    {
                        title: "[<g>3.] How many fruits are in each trunk?",
                        correctIndex: 2,
                        paragraph: [
                            "141 fruit{s}",
                            "846 {f}ruits",
                            "143 fr{u}its",
                        ]
                    },

                    {
                        title: "[<g>4.] How many magic items did the Gnomads pack?",
                        correctIndex: 1,
                        paragraph: [
                            "27 m{a}gic items ",
                            "34 {m}agic items",
                            "36 magic {i}tems",
                        ]
                    },

                ],  

                code: {
                    answer: "PLUM",
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
                    text: "Solve the equations, sort them into the correct columns, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare Order of Operations Equations",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.5',
                        },
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Many crates to fill before sunset. Urgent help required. Solve these complicated equations. Sort by quantity. Time is critical!",
                    complete: "Intruder detected! No trespassing on my watch. Reporting to Candlewick immediately."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Less than 50",
                        "Between 50 and 100",
                        "More than 100"
                    ],
                    asset: {
                        scope: "global",
                        path: "3-column-stone.png"
                    }
                },
    
                blockArray: [
                    {
                        tag: {
                            text: "Pounds of Cabbages",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6 × (5 + 4) - 3",
                                },  
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Pounds of Yams",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(6 + 2 + 6 × 3) × 3 ",
                                },  
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Pounds of Tomatoes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "96 ÷ (20 - 8) + 100",
                                },   
                            }
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Pounds of Mushrooms",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "2 x 7 + 5 - 4",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Pounds of Cucumbers",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "12 - 3 + 8 x 9",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Pounds of Pumpkins",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "15 + 6 × 7 - 6",
                                },  
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Pounds of Potatoes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "11 (32 ÷ 4) + 50",
                                }, 
                            }
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Pounds of Watercress",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "2 + (6 × 3) × (6 × 4)",
                                },  
                            }
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Pounds of Apples",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(1 + 17) ÷ (6 + 4 - 4)",
                                }, 
                            },
                        ],
                        correctIndex: 0
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
            
            questions: {
                
                info: {
                    type: "multiple-choice"
                },
    
                contentArray: [
    
                    {
                        title: "[<g>1.] Which food item has the biggest answer?",
                        correctIndex: 0,
                        paragraph: [
                            "{W}atercress",
                            "Toma{t}oes",
                            "Potatoe{s}",
                        ],
                    },
    
                    {
                        title: "[<g>2.] How many of these equations have answers between 50 and 100?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "Tw{o}",
                            "T{h}ree",
                            "Fou{r}",
                            "Fiv{e}",
                        ],
                    },
    
                    {
                        title: "[<g>3.] If you remove the parentheses from the yams equation, what is the answer?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "54 {Q}",
                            "58 {J}",
                            "62 {A}",
                            "78 {E}",
                        ],
                    },
    
                    {
                        title: "[<g>4.] How many pounds of pumpkins are there?",
                        correctIndex: 0,
                        paragraph: [
                            "51 {p}ounds",
                            "141 pou{n}ds",
                            "21 poun{d}s",
                        ],
                    },
    
                ],  
    
                code: {
                    answer: "WRAP",
                    userArray: ["","","",""]
                },
    
            }

        },

        // ⭐ applegrim orchard
        {

            info: {
                type: 'challenge',
                title: "Applegrim Orchard",
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Solve each equation, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Order of Operations With Exponents",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Operations and Algebraic Thinking',
                            standard: '5.OA.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.6',
                        },
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "This is not an hour of play... I have a counting task today. The orchard trees, so tall and free, need a tally \u2014 please help me!",
                    complete: "Your help was a gift, and I am at ease. Now leave me alone, to have my peace."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "applegrim-orchard.png",
                },

                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                subtitle: {
                                    text: "[<u>Number of Spruce Trees]",
                                },
                                passage: {
                                    text: "4<sup>3</sup> - 15 × 6 ÷ (32 - 23) = ?",
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
                        contentArray: [
                            {
                                subtitle: {
                                    text: "[<u>Number of Orange Trees]",
                                },
                                passage: {
                                    text: "10<sup>2</sup>  × (9 + 12 - 2<sup>3</sup> ) ÷ 4 = ?",
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
                        contentArray: [
                            {
                                subtitle: {
                                    text: "[<u>Number of Poplar Trees]",
                                },
                                passage: {
                                    text: "(12 + 12 - 3<sup>2</sup> ) × 4 - 23 = ?",
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
                        contentArray: [
                            {
                                subtitle: {
                                    text: "[<u>Number of Walnut Trees]",
                                },
                                passage: {
                                    text: "10<sup>2</sup>  × 9 + 12 - 2<sup>3</sup>  ÷ 4 = ?",
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
                        contentArray: [
                            {
                                subtitle: {
                                    text: "[<u>Number of Maple Trees]",
                                },
                                passage: {
                                    text: "(5<sup>3</sup>  - 4) ÷ 11 = ?",
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
                        contentArray: [
                            {
                                subtitle: {
                                    text: "[<u>Number of Laurel Trees]",
                                },
                                passage: {
                                    text: "10<sup>2</sup>  - 9 × 6 - 3 × 2 = ?",
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
                            padding: "double"
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
                            subtitle: {
                                font: 'default',
                                size: 'small',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
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
                        'A. There are 40 ______ trees.',
                        'B. There are 11 ______ trees.',
                        'C. There are 54 ______ trees.',     
                        'D. Are there more [<u>orange] or [<u>walnut] trees?',
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","(C)1S","0","0"],
                        ["0","0","(B)4M","A","P","L","E"],
                        ["0","0","0","0","R","0","0"],
                        ["(D)W","A","L","N","U","2T","0"],
                        ["0","0","0","0","C","0","0"],
                        ["(A)L","A","U","R","3E","L","0"],
                    ]
                },  

                code: {
                    answer: "STEM",
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


  