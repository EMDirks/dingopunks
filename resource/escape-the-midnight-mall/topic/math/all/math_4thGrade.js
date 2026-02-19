const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/math/all-standards/preview-4th-grade.png",
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
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Step Word Problems with Addition, Subtraction, and Multiplication",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations in Base Ten',
                            standard: '3.NBT.A.2',
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
                            standard: '4.OA.A.3',
                        }
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee Hee! I'm Topsy and I sell robot pets. I want to focus on making more products, but I keep getting distracted by all sorts of random business problems! Can you solve a few for me?",
                    complete: "Hee hee! Thanks for the help! Can you believe I used to be a pirate?"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "critterwerks.png",
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
                                    text: "[<u>Plush-O-Matic]",
                                },
                                passage: {
                                    text: "Every day, the Plush-O-Matic produces toys that need to be packaged and ready to sell before Friday. The Plush-O-Matic produced 200 toys on Monday, 135 on Tuesday, and 428 on Wednesday. On Thursday, it produced 100 more toys than it did on Tuesday.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "0%",
                                rotate: "-1deg",
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
                                    text: "[<u>Oil Cans and Gearboxes]",
                                },
                                passage: {
                                    text: "Many of our pets require fresh oil cans and updated gearboxes to run smoothly. We made a total of $356,291 from both of these products last month, and $43,721 of that was from oil cans.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-6%",
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
                                title: {
                                    text: "[<u>Bananatron]",
                                },
                                passage: {
                                    text: "The Bananatron is designed to clean apartments. Under ideal conditions, it can clean 4 apartments every hour. On Monday, it cleaned for 3 hours in the morning and 2 hours in the afternoon. On Tuesday, it cleaned for 4 hours in the morning and 1 hour in the afternoon.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-12%",
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
                                size: 'small',
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
                        title: "[<g>1.] How many total toys need to be packaged for sale?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "863 {R}",
                            "998 {B}",
                            "798 {C}",
                        ],
                    },

                    {
                        title: "[<g>2.] How much money did Critterwerks make from gearboxes last month?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "$312,570 {E}",
                            "$400,012 {L}",
                            "$313,570 {O}",
                            "$787,012 {A}"
                        ]
                    },

                    {
                        title: "[<g>3.] On both Monday and Tuesday, how many apartments did the Bananatron clean?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "14 {a}partments",
                            "40 apartm{e}nts",
                            "24 a{p}artments",
                            "30 apartmen{t}s"  
                        ]
                    },

                    {
                        title: "[<g>4.] If the Bananatron cleans for 2 more hours, how many total apartments can it clean? ",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "48 a{p}artments",
                            "42 apartment{s}",
                            "46 apa{r}tments",
                            "50 {a}partments" 
                        ]
                    },

                ],  

                code: {
                    answer: "BEEP",
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
                    text: "Find the area and perimeter of each figure, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Area and Perimeter",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Measurement and Data',
                            standard: '3.MD.C.5',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Measurement and Data',
                            standard: '3.MD.C.7',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Measurement and Data',
                            standard: '3.MD.C.7b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Measurement and Data',
                            standard: '3.MD.D.8',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Measurement and Data',
                            standard: '4.MD.A.3',
                        }
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I need to sell more candy, but my shop is too small! Maybe I should rethink the seating zone, countertop, and storage closet. Can you help me figure out how much space I have to work with?",
                    complete: "Did you hear that? I think there's something in the walls..."
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
                            text: "Seating Zone",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 9,
                                        height: 6,
                                    },
                                    label: {
                                        top: "9 ft",
                                        left: "6 ft",    
                                        right: "offset"                               
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "-22%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Countertop",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 10,
                                        height: 5,
                                    },
                                    label: {
                                        top: '42 in.',
                                        right: '24 in.',
                                        left: 'offset'
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "4%",
                                rotate: "-1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Storage Closet",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 7,
                                        height: 7,
                                    },
                                    label: {
                                        top: '7 feet',
                                        left: '7 feet',
                                        right: 'offset'
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-19%",
                                rotate: "-2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Advertising Plan",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I want to create an advertisement leading shoppers to the Candy Cave. I was thinking about making a poster two yards long and one yard tall.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-19%",
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
                            figure: {
                                border: {
                                    width: 'default'
                                },
                                background: {
                                    color: 'gold',
                                }
                            },  
                            cell: {
                                border: {
                                    width: 'none'
                                },
                                dimension: {
                                    size: 'default',
                                }
                            }, 
                            label: {
                                font: 'default',
                                size: 'tiny'
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
                        title: "[<g>1.] What is the area of the seating zone?",
                        correctIndex: 2,
                        paragraph: [
                            "30 square fee{t}",
                            "52 squ{a}re feet",
                            "54 square {f}eet",
                        ],
                    },

                    {
                        title: "[<g>2.] What is the perimeter of the countertop?",
                        correctIndex: 0,
                        paragraph: [
                            "132 {i}nches",
                            "129 inch{e}s",
                            "400 in{c}hes<sup>2</sup>",
                        ],
                    },

                    {
                        title: "[<g>3.] Find the area and perimeter of the storage closet.",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "Area = 49 ft<sup>2</sup>,&nbsp Perimeter = 35 ft {L}",
                            "Area = 28 ft<sup>2</sup>,&nbsp Perimeter = 49 ft {T}",
                            "Area = 49 ft<sup>2</sup>,&nbsp Perimeter = 28 ft {Z}",
                        ],
                    },

                    {
                        title: "[<g>4.] What is the area of the advertisement that Martin wants to make?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "4 yd<sup>2</sup> {K}",
                            "2 yd<sup>2</sup> {Z}",
                            "1 yd<sup>2</sup> {X}",
                            "2 yd {D}",
                        ],
                    },

                ],  

                code: {
                    answer: "FIZZ",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ zeebplex
        {

            info: {
                type: 'challenge',
                title: "ZeebPlex",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Put together the pieces of the puzzle, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Place Value and Rounding",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations in Base Ten',
                            standard: '3.NBT.A.1',
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
                            standard: '4.NBT.A.3',
                        }
                    ],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "Ugh, I just dropped my brand new circuit board on the floor! Can you help me put the pieces back together? This is gonna be tough.",
                    complete: "Huh? You're still here? Go away, I have lots of work to do."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "zeeb-plex.png",
                },

                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "82,721",
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
                                    text: "1,538,603",
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
                                    text: "59,600",
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
                                    text: "62,145",
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
                                    text: "964,103",
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
                                    text: "4,476",
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
                                    text: "843,012",
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
                                    text: "135",
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
                                    text: "27,091",
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
                        title: "[<g>1.] Round the middle piece to the nearest 10,000.",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "60,000 {L}",
                            "960,103 {H}",
                            "960,000 {Z}",
                        ],
                    },

                    {
                        title: "[<g>2.] Which two pieces are best rounded to 60,000?",
                        correctIndex: 2,
                        paragraph: [
                            "Bottom left and top r{i}ght",
                            "Bot{t}om left and top left",
                            "T{o}p right and middle left",
                        ],
                    },

                    {
                        title: "[<g>3.] Round the purple pieces to the nearest 1,000. Do both round up or down?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "U{p}",
                            "Dow{n}",
                        ],
                    },

                    {
                        title: "[<g>4.] Round the bottom yellow piece to the nearest 100, then divide by 10. What is the answer?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "84,300 {E}",
                            "8,430,120 {K}",
                            "84,030 {Y}",
                            "84,000 {A}",
                        ],
                    },

                ],  

                code: {
                    answer: "ZONE",
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
                    text: "Look at the shapes and number lines, then answer the questions to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions of Shapes and Number Lines",
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
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.A.1',
                        },
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I need to measure some bits of fabric for a new clothing line, but it's such a bore. I truly can't be bothered to read the fractional measurements myself. Will you help me get the job done?",
                    complete: "I must admit, I am grateful for your help. Send J.J. Crispy my regards."
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
                            text: "Tunic",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_2-8.svg",
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
                            text: "Mantle",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_1-4.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Cape",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_2-3.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-20%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Leggings",
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
                                translateX: "11%",
                                translateY: "-3%",
                                rotate: "-2deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "Robe",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 8,
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
                                translateX: "15%",
                                translateY: "65%",
                                rotate: "3deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "Slippers",
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
                    type: "crossword"
                },

                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. What is the denominator for the tunic and robe?',
                        'B. The mantle is divided into _______ .',
                        'C. Does the tunic show the fraction [<f>2/6] ? (YES/NO)',     
                        'D. Which clothing item shows the fraction [<f>2/3] ?',
                        
                    ],
                    puzzle: [
                        ["0","(D)C","2A","P","(A)E","0","0"],
                        ["0","0","0","0","I","0","0"],
                        ["0","0","0","0","G","0","0"],
                        ["0","(C)N","0","0","1H","0","0"],
                        ["(B)F","O","U","R","3T","H","4S"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  

                code: {
                    answer: "HATS",
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
                    text: "Solve the math problems, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    subject: "Math",
                    topic: "Computation: Addition, Subtraction, Multiplication, and Division",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.B.4',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.C.7',
                        },
                    ],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I cannot believe I am wasting time on math, when I should be preparing to fight the Undermurk! Will you help me get some work done so I can start planning my next raid?",
                    complete: "Consider me impressed. Perhaps I will require your skills again in the future."
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
                            text: "[<s>A]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "9 × 8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-13%",
                                translateY: "-8%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>C]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "55 ÷ 5",
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
                            text: "[<s>D]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "264,821 + 5,265",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-16%",
                                translateY: "0%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>H]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "30,000 - 1,492",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "12%",
                                translateY: "10%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>I]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "4 × 6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "6%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>L]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "48 ÷ 12",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>N]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6,468 - 2,731",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "13%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<s>O]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "20 × 100",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "18%",
                                translateY: "15%",
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
                            font: 'symbols',
                            size: 'medium',
                            align: 'left',
                            padding: 'defaultNoBottom'
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
                                size: 'medium',
                                align: 'center'
                            },   
                            dimension: {
                                width: "full",
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
                        title: "[<g>1.] What are the answers to  [<s>A], [<s>I], and [<s>O] ?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "72,  24, and 2,000 {W}",
                            "72,  24, and 200 {L}",
                            "64,  24, and 2,000 {P}",
                        ],
                    },

                    {
                        title: "[<g>2.] What are the answers to  [<s>D], [<s>H], and [<s>N] ?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "270,086,  29,618, and 4,337 {O}",
                            "259,556,  28,508, and 3,731 {E}",
                            "270,086,  28,508, and 3,737 {A}",
                        ],
                    },

                    {
                        title: "[<g>3.] What are the answers to  [<s>C] and [<s>L] ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "12 and 4 {A}",
                            "11 and 4 {R}",
                            "11 and 5 {E}",
                        ],
                    },

                    {
                        title: "[<g>4.] Is the answer to  [<s>O] less than the answer to [<s>N] ?",
                        correctIndex: 0,
                        paragraph: [
                            "Ye{s}",
                            "{N}o",
                            "They are {t}he same",
                        ],
                    },

                ],  

                code: {
                    answer: "WARS",
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


  