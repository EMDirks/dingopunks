const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/math/all-standards/thumbnail-5th-grade.png",
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
                    topic: "Multi-Step Word Problems With All Four Operations",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.B.4',
                        },
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
                            standard: '4.NBT.B.6',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.3',
                        },
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Howdy, friend! Welcome to the farm. I have so many problems to take care of, but it's almost sunset. I'm all out of time! Think you can help?",
                    complete: "Enjoy your visit to the farm! Just be careful around Hollow Jack..."
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
                                    file: "1.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Evergrow Candles]",
                                },
                                passage: {
                                    text: "Candlewick invented a new type of candle \u2014 the Evergrow Candle \u2014 that helps crops mature quickly. Every day, Candlewick places 34 of these candles in each of her 8 yam fields. Each candle produces light for 3 hours.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "0%",
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
                                title: {
                                    text: "[<u>The Midnight Mall]",
                                },
                                passage: {
                                    text: "Every Saturday evening, Candlewick spends 7 hours at the Midnight Mall selling her Evergrow Candles. Last Saturday, she sold 15 candles in the first hour, and 18 candles every hour after that.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-7%",
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
                                title: {
                                    text: "[<u>Pumpkin Storage]",
                                },
                                passage: {
                                    text: "Each of Candlewick's 3 pumpkin fields produce 50 pounds of pumpkins per week. The harvested pumpkins are then stored inside wooden compartments, each holding 5 pounds.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-10%",
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
                        dimension: {
                            width: "percent75",
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
                                width: "percent12",
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
                                width: "percent85",
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
                        title: "[<g>1.] How many combined hours of light do all the Evergrow Candles produce per day?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "24 hours of li{g}ht",
                            "272 h{o}urs of light",
                            "724 {h}ours of light",
                            "816 hours of {l}ight",
                        ],
                    },

                    {
                        title: "[<g>2.] Last Saturday, how many Evergrow Candles did Candlewick sell at the Midnight Mall?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "105 candl{e}s",
                            "123 c{a}ndles",
                            "141 cand{l}es",
                            "33 ca{n}dles"
                        ]
                    },

                    {
                        title: "[<g>3.] How many compartments are needed to pack all the pumpkins each week?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "30 co{m}partments",
                            "150 com{p}artments",
                            "50 compartm{e}nts",
                            "265 {c}ompartments",
                        ]
                    },

                    {
                        title: "[<g>4.] If each compartment of pumpkins sells for $16, what is the total value of the weekly harvest?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "$3,170 {H}",
                            "$2,400 {E}",
                            "$800 {Y}",
                            "$480 {P}" 
                        ]
                    },

                ],  

                code: {
                    answer: "LAMP",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ applegrim orchard
        {

            info: {
                type: 'challenge',
                title: 'Applegrim Orchard',
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Find the volume of each figure, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Calculate Volume",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Measurement and Data',
                            standard: '4.MD.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Measurement and Data',
                            standard: '5.MD.C.3',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Measurement and Data',
                            standard: '5.MD.C.4',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Measurement and Data',
                            standard: '5.MD.C.5',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.7',
                        },
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "In this orchard, I sit with a sigh. Candlewick's tasks are piled up high! \"Calculate volume,\" is all that she said, but all of my math skills have long since fled...",
                    complete: "There are ghouls in the orchard, hidden from sight. They haunt the shadows, avoiding the light!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "applegrim-orchard.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "Apple Crate",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "hh3_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Hay Bale Bin",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "hh3_2.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "4%",
                                rotate: "3deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Candle Box",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "hh3_3.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-10%",
                                rotate: "-6deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Flower Boxes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Candlewick plans to buy rectangular boxes to plant flowers. Each box has a length of 2 meters, a width of 3 meters, and a height of 1 meter.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "8%",
                                rotate: "4deg",
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
                                size: 'small',
                                align: 'left'
                            },
                            dimension: {
                                width: "percent70",
                                height: "full",
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
                        title: "[<g>1.] If the apple crate is a cube, what is its volume?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "484 in<sup>3</sup> {T}",
                            "10,432 in<sup>3</sup> {I}",
                            "10,648 in<sup>3</sup> {P}",
                        ],
                    },

                    {
                        title: "[<g>2.] If the hay bale bin has an area of 336 cubic yards, what is its width?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "7 yd {I}",
                            "8 yd {A}",
                            "6 yd {U}",
                            "56 yd {Z}",
                        ],
                    },

                    {
                        title: "[<g>3.] What is the volume of the candle box?",
                        correctIndex: 1,
                        paragraph: [
                            "16,700 cubic centi{m}eters",
                            "16,800 cubic ce{n}timeters",
                            "15,800 cubic {c}entimeters",
                        ],
                    },

                    {
                        title: "[<g>4.] What is the combined volume of 3 flower boxes?",
                        correctIndex: 2,
                        paragraph: [
                            "36 cubic {m}eters",
                            "6 cubic me{t}ers",
                            "18 cubic m{e}ters",
                        ],
                    },

                ],  

                code: {
                    answer: "PINE",
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
                    topic: "Add and Subtract Decimals to Hundredths",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [5],
                            category: 'Number and Operations in Base Ten',
                            standard: '5.NBT.B.7',
                        },
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "We ain't waitin' around for those Fallcrawlers to arrive... They've been feastin' on our kind for centuries! While we pack up, can you lend a hand with our map? We navigate by the stars, y'know.",
                    complete: "Thanks for all your help, partner \u2014 we're off to the next adventure. 'Til we meet again!"
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
                                    text: "8.2 + 9.9",
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
                                    text: "3.268 + 86",
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
                                    text: "3.14 + 2.09",
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
                                    text: "9.3 - 4.2",
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
                                    text: "11.4 + 61.3",
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
                                    text: "52.07 + 49.56",
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
                                    text: "7.5 - 5",
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
                                    text: "7.78 - 2.54",
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
                                    text: "43.65 - 38.42",
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
                        title: "[<g>1.] Which puzzle piece has an answer of 72.7?",
                        correctIndex: 1,
                        paragraph: [
                            "The middle {r}ight piece",
                            "The center {p}iece",
                            "The bo{t}tom right piece",
                        ],
                    },

                    {
                        title: "[<g>2.] Which pieces both have answers of 5.23?",
                        correctIndex: 0,
                        paragraph: [
                            "The top right, {a}nd the bottom right",
                            "The {b}ottom middle, and the bottom right",
                            "The top right, and the botto{m} middle",
                        ],
                    },

                    {
                        title: "[<g>3.] Solve all three pieces in the left column.",
                        correctIndex: 1,
                        paragraph: [
                            "From top to b{o}ttom: &nbsp18.1, &nbsp5, &nbspand &nbsp2.5",
                            "From {t}op to bottom: &nbsp18.1, &nbsp5.1, &nbspand &nbsp2.5",
                            "Fro{m} top to bottom: &nbsp76.8, &nbsp5.1, &nbspand &nbsp2",
                        ],
                    },

                    {
                        title: "[<g>4.] Which piece's answer is greater: the middle top, or the middle right?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "The mid{d}le top",
                            "The middle rig{h}t",
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
                    text: "Add and subtract each set of fractions and mixed numbers, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Fractions and Mixed Numbers With Like Denominators",
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
                    incomplete: "I am Hollow Jack. I put fruits and vegetables into boxes. Then I calculate their weights. But I am overworked. Too much pressure. No time left! I require your help.",
                    complete: "This factory holds an enigma. Dangerous. Many have tried. All have failed. Not safe. Leave now."
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
                            text: "Orange Box (Pounds)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/6 + 3/6",
                                },
                            }
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
                            text: "Carrot Box (Pounds)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7/8 - 5/8",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-70%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Radish Box (Pounds)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/5 + 4 2/5",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-40%",
                                rotate: "-5deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Squash Box (Pounds)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "9 4/6 - 5/6",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "11%",
                                translateY: "50%",
                                rotate: "4deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "Lychee Box (Pounds)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 2/4 - 5 1/4",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "85%",
                                rotate: "3deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "Potato Box (Pounds)",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 3/5 + 6 2/5",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-35%",
                                translateY: "-30%",
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'mediumSmall'
                                },
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
                    type: "crossword"
                },

                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which box weighs 8 [<f>5/6] pounds?',
                        'B. Which box weighs more: [<u>radish] or [<u>lychee]?',
                        'C. Which box weighs more than one pound: [<u>carrot], [<u>lychee], or [<u>orange]?',     
                        'D. Which box has a weight equivalent to a whole number?',
                        
                    ],
                    puzzle: [
                        ["(B)R","A","D","I","(A)1S","H","0"],
                        ["0","0","0","0","Q","0","0"],
                        ["0","0","0","0","U","0","0"],
                        ["0","(D)4P","O","T","A","T","3O"],
                        ["0","0","0","0","S","0","0"],
                        ["0","(C)L","Y","C","2H","E","E"],
                    ]
                },  

                code: {
                    answer: "SHOP",
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
                    text: "Look at the angles, then type in the answers below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Identify Lines and Angles",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Measurement and Data',
                            standard: '4.MD.C.5',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Measurement and Data',
                            standard: '4.MD.C.5a',
                        },
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I found some notes that the Fallcrawlers must have misplaced, which go into detail about their angles of attack! But I can't make sense of anything. Can you help me decode these things?",
                    complete: "Thanks a million for decoding those secret plans! You're a lifesaver."
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
                            text: "1st Angle of Attack",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "right-1.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "10%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "2nd Angle of Attack",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "obtuse-3.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-30%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "3rd Angle of Attack",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "straight-2.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-16%",
                                translateY: "7%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "4th Angle of Attack",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "acute-2.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-5%",
                                rotate: "-5deg",
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
                                translateY: "12%",
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
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent22",
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
                        title: "[<g>1st Angle of Attack:] Right angles are 90 ____ .",
                        word: "DEGREE[S]",
                    },
                    {
                        title: "[<g>2nd Angle of Attack:] Name this type of angle.",
                        word: "[O]BTUSE",
                    },
                    {
                        title: "[<g>3rd Angle of Attack:] A 180&deg angle is called ____ .",
                        word: "ST[R]AIGHT",
                    },
                    {
                        title: "[<g>4th Angle of Attack:] Name this type of angle.",
                        word: "ACU[T]E",
                    },
                ],

                code: {
                    answer: "SORT",
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


  