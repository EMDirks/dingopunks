const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/math/multiplication/preview-4th-grade.png",
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
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplicative Comparison Word Problems",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.D.8',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.3',
                        }
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "We're falling behind! There are so many seeds, fruits, and veggies to harvest \u2014 but such little time. Can you help me make a few calculations? ",
                    complete: "Glad you could make it to the farm! Come back to visit any time, alright?"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "candlewicks-cart.png",
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
                                passage: {
                                    text: "There are 6 flax plants in the garden. Last year, each plant produced only 9 seeds. This year, each plant produced 12 times as many seeds.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-17%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "Harglow Candles are magic candles that help crops grow faster. A field with Harglow Candles only takes 9 days to produce crops, which is 17 times faster than a normal field.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "-12%",
                                rotate: "3deg",
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
                                    text: "Frostwick Candles protect crops from freezing. Last year, our 3 yam fields each produced only 15 yams. This year, thanks to Frostwick Candles, each field produced 4 times as many!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
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
                                    text: "Every year, we plant 140 melons, 300 turnips, 225 cucumbers, and 150 cabbages. This year, we planted 4 times as many pumpkins as melons.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "15%",
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
                                width: "percent25",
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
                                width: "percent70",
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
                        title: "[<g>1.] How many flax seeds were produced this year?",
                        correctIndex: 2,
                        paragraph: [
                            "72 flax se{e}ds",
                            "162 {f}lax seeds",
                            "648 f{l}ax seeds",
                        ],
                    },

                    {
                        title: "[<g>2.] How many days does it take a normal field to produce crops?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "170 {d}ays",
                            "26 da{y}s",
                            "153 d{a}ys",
                            "97 day{s}",
                        ]
                    },

                    {
                        title: "[<g>3.] How many yams were produced this year?",
                        correctIndex: 1,
                        paragraph: [
                            "60 {y}ams",
                            "180 ya{m}s",
                            "170 yam{s}",
                        ]
                    },

                    {
                        title: "[<g>4.] How many pumpkins were planted this year?",
                        correctIndex: 0,
                        paragraph: [
                            "560 pum{p}kins",
                            "1,200 pumpki{n}s",
                            "35 pu{m}pkins",
                        ]
                    },

                ],  

                code: {
                    answer: "LAMP",
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
                    text: "Read each equation and word problem, then answer the questions to solve the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplication in Base Ten; Understand Place Value",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.A.2',
                        }
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "We're on the run from an evil sorcerer, and we're feeling a bit rattled! We need to start preparing for our next encounter. Can you lend a hand?",
                    complete: "Whew, you really saved us! Now go help the others, and use the stars to guide your path."
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
                            text: "Area of the Prairie",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "30 × 60  =  _____ feet<sup>2</sup>",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "30%",
                                rotate: "-3deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Area of the Shelter",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "40 × 40  =  _____ feet<sup>2</sup>",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "9%",
                                rotate: "2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Runes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Eighty hundred runes is the same as _____ thousand runes.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "5%",
                                rotate: "4deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Magic Stones",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "We plan to place a ring of magic stones around our shelter. We only have 2 stones right now, and we need 700 times that!",
                                }, 
                            }
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
                            text: "Shrub",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "A shrub grows beside our shelter, hiding us from unwelcome eyes. We estimate it has 74,458 leaves, but they've started to fall. Soon, we'll no longer be hidden!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "10%",
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
                        'A. Which location has an area of 1,600 square feet: [<u>prairie] or [<u>shelter]?',     
                        'B . [<u>True] or [<u>false:] The Gnomads need 1,400 magic stones to place around their shelter.',
                        'C. Look at the shrub\'s number of leaves. The left 4 is how many times greater than the right 4?',
                        'D. For \'Runes,\' what number belongs in the underlined space?',
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","(B)T"],
                        ["(A)1S","H","(D)E","L","3T","E","R"],
                        ["0","0","2I","0","0","0","U"],
                        ["0","0","G","0","0","0","4E"],
                        ["0","0","H","0","0","0","0"],
                        ["0","0","(C)T","E","N","0","0"],
                    ]
                },  

                code: {
                    answer: "SITE",
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
                    text: "Put together the puzzle pieces, then answer the questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Factors and Multiples",
                    
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.B.4',
                        },
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I need to deliver some mail to the farm, but a stray dog tore up my map! Luckily, I think there's a chance we can put it back together. Want to help?",
                    complete: "I think I just saw a coyote... or was it a Fallcrawler? Eeek! I gotta get out of here!"
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
                                    text: "3",
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
                                    text: "24",
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
                                    text: "7",
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
                                    text: "2",
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
                                    text: "8",
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
                                    text: "16",
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
                                    text: "13",
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
                                    text: "9",
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
                                    text: "4",
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
                                size: 'medium',
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
                        title: "[<g>1.] The three map pieces with trees are all:",
                        correctIndex: 0,
                        paragraph: [
                            "{P}rime factors",
                            "{C}omposite numbers",
                            "None of {t}he above",
                        ],
                    },

                    {
                        title: "[<g>2.] What are the factors of the top middle piece?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "1, 2, 3, 4, 5, 6, 8, 12, 24 {K}",
                            "1, 2, 3, 4, 6, 8, 12, 24 {A}",
                            "1, 2, 4, 6, 8, 12, 24 {D}",
                        ],
                    },

                    {
                        title: "[<g>3.] Which 3 pieces have a common multiple of 36?",
                        correctIndex: 0,
                        paragraph: [
                            "The barn, top lef{t}, and bottom middle",
                            "The b{a}rn, top right, and bottom middle",
                            "The bar{n}, top left, and bottom left"
                        ],
                    },

                    {
                        title: "[<g>4.] What are 5 multiples of the center piece?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "8, 16, 24, 33, 40 {M}",
                            "16, 24, 32, 40, 49 {P}",
                            "16, 24, 32, 40, 48 {H}",
                        ],
                    },

                ],  

                code: {
                    answer: "PATH",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ frantic factory
        {

            info: {
                type: 'challenge',
                title: 'Frantic Factory',
                asset: "frantic-factory.png",
                state: "incomplete",
                hint: {
                    text: "Solve each multiplication problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Muti-Digit Multiplication",
                    
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.NBT.B.5',
                        },
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "I am Hollow Jack. I must make calculations. Pounds of fruits. Pounds of vegetables. Bunches of carrots. Pallets of pumpkins. Too much work! No time! Help!",
                    complete: "No time to chat. Overworked. Busy with tasks. Move along. Thank you."
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
                            text: "A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "256 × 8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "9%",
                                translateY: "-30%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "C",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "2,653 × 5",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-10%",
                                rotate: "1deg",
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
                                    text: "94 × 23",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-25%",
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
                                    text: "19 × 8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "11%",
                                translateY: "-8%",
                                rotate: "-2deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "I",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "58 × 25",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "35%",
                                rotate: "3deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "L",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "4 × 127",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-30%",
                                translateY: "-2%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>A] = pounds of apples<br> \
                                            [<s>D] = pallets of pumpkins<br> \
                                            [<s>I] = pallets of oranges",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "40%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>C] = pounds of potatoes<br> \
                                            [<s>H] = bunches of carrots<br> \
                                            [<s>L] = number of storage bins",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "55%",
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

            questions: {
                
                info: {
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] How many bunches of carrots are there?",
                        correctIndex: 2,
                        paragraph: [
                            "144 bunches of carro{t}s",
                            "160 bunches of carr{o}ts",
                            "152 bunches of {c}arrots"
                        ],
                    },

                    {
                        title: "[<g>2.] How many pounds of apples & potatoes are there?",
                        correctIndex: 0,
                        paragraph: [
                            "2,048 lbs of {a}pples, and 13,265 lbs of potatoes",
                            "2,048 l{b}s of apples, and 13,135 lbs of potatoes",
                            "1,960 lbs of app{l}es, and 13,265 lbs of potatoes",
                        ],
                    },

                    {
                        title: "[<g>3.] How many storage bins are there?",
                        correctIndex: 1,
                        paragraph: [
                            "404 storage b{i}ns",
                            "508 {s}torage bins",
                            "427 st{o}rage bins",
                        ],
                    },

                    {
                        title: "[<g>4.] Are there more pallets of oranges or pumpkins?",
                        correctIndex: 1,
                        paragraph: [
                            "There are more pallets of o{r}angess",
                            "Ther{e} are more pallets of pumpkins",
                            "There are e{q}ual pallets of both",
                        ],
                    },

                ],  

                code: {
                    answer: "CASE",
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


  