const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/math/all-standards/preview-5th-grade.png",
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
                    topic: "Multi-Step Word Problems with All Operations",
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
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.3',
                        },
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
                            standard: '4.NF.B.4c',
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
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee Hee! I'm Topsy and I sell robot pets. I need to focus on making more products, but I keep getting distracted by all sorts of random problems! Can you solve a few of them for me?",
                    complete: "You know what? The Mallcrawlers should fear ME. Hee hee!"
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
                                    file: "7.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Pollytron]",
                                },
                                passage: {
                                    text: "The Mallcrawlers have been scaring away guests lately, so Critterworks didn't do very well last month. In fact, we only sold 48 products! [<f>2/6] of those products were robot parrots called Pollytrons, each priced at $47.",
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
                                    file: "8.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Pixel Pig]",
                                },
                                passage: {
                                    text: "My latest invention is the adorable Pixel Pig! It's a high-tech robot that has one job: making cartoon drawings. It's able to make 54 drawings each day, and has made a total of 1,320 drawings so far.",
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
                                    text: "Nobody has been buying Bananatrons lately, so we have a LOT of them in storage. Right now, they are stored 12 to a box. The storage room has 39 full boxes of Bananatrons, plus two partial boxes with 8 Bananatrons each.",
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
                        title: "[<g>1.] How much money did Critterwerks make from Pollytrons last month?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "$64 {B}",
                            "$712 {A}",
                            "$348 {D}",
                            "$752 {C}",
                        ],
                    },

                    {
                        title: "[<g>2.] What's the minimum number of days it took the Pixel Pig to make all 1,320 drawings? ",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "25 {O}",
                            "24 {A}",
                            "26 {E}",
                            "23 {I}"
                        ]
                    },

                    {
                        title: "[<g>3.] How many Bananatrons are in storage?",
                        correctIndex: 1,
                        paragraph: [
                            "468 B{a}nanatrons",
                            "484 Bananat{r}ons",
                            "476 {B}ananatrons",
                        ]
                    },

                    {
                        title: "[<g>4.] If Critterwerks sells 4 Banantrons every day, how many days will it take to sell them all?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "117 da{y}s",
                            "121 {d}ays",
                            "119 day{s}",
                            "124 d{a}ys" 
                        ]
                    },

                ],  

                code: {
                    answer: "CORD",
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
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I want to sell more candy, but my shop is too small! Hopefully these new storage containers will help a bit. Can you figure out how much volume each one has?",
                    complete: "My security camera caught Zeeb poking around the shop at night..."
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
                            text: "1. Macaroon Container",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "mm3_1.png",
                                },
                            },
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
                            text: "2. Bonbon Case",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "mm3_2.png",
                                },
                            },
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
                            text: "3. Nectarine Nibbles Box",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "mm3_3.png",
                                },
                            },
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
                            text: "4. Sugar Crystal Crate",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The sugar crystal crate is 5 feet wide, 4 feet deep, and 2 feet tall.",
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

                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
                            dimension: {
                                width: "percent60",
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
                        title: "[<g>1.] What is the volume of the macaroon container?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "49 in.[<e>3] {T}",
                            "354 in.[<e>3] {Y}",
                            "343 in.[<e>3] {S}",
                        ],
                    },

                    {
                        title: "[<g>2.] What is the volume of the bonbon case?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "35 cm[<e>3] {I}",
                            "60 cm[<e>3] {O}",
                            "64 cm[<e>3] {E}",
                        ],
                    },

                    {
                        title: "[<g>3.] The volume of the Nectarine Nibbles box is 120 cubic centimeters. What is its height?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "4 centimete{r}s",
                            "5 c{e}ntimeters",
                            "6 centime{t}ers",
                            "120 centimeter{s}",
                        ],
                    },

                    {
                        title: "[<g>4.] What is the volume of the sugar crystal crate?",
                        correctIndex: 2,
                        paragraph: [
                            "30 square fee{t}",
                            "40 squ{a}re feet",
                            "40 cubic fee{t}",
                        ],
                    },

                ],  

                code: {
                    answer: "SORT",
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
                    text: "Put together the puzzle, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "Ugh, I just dropped my brand new circuit board on the floor. Can you help me put the pieces back together? This is going to be tough...",
                    complete: "Huh? You're still here? I really don't have time for this, I have work to do."
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
                                    text: "28.32 + 9.13",
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
                                    text: "19.54 + 48.74",
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
                                    text: "83.84 - 39.41",
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
                                    text: "62.97 - 51.27",
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
                                    text: "36.83 - 29.26",
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
                                    text: "65.42 - 60.96",
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
                                    text: "16.71 + 14.49",
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
                                    text: "91.84 + 23.38",
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
                                    text: "46.18 - 16.35",
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
                        title: "[<g>1.] What is the sum of the top middle piece?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "68.28 {G}",
                            "29.2 {C}",
                            "69.24 {R}",
                        ],
                    },

                    {
                        title: "[<g>2.] All four corner pieces have answers that are:",
                        correctIndex: 2,
                        paragraph: [
                            "Greater tha{n} 30",
                            "Le{s}s than 30",
                            "Both of the {a}bove",
                        ],
                    },

                    {
                        title: "[<g>3.] Solve the 3 pieces in the middle row:",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "11.7, &nbsp 7.57, &nbsp and &nbsp 4.46 {M}",
                            "11.7, &nbsp 7.54, &nbsp and &nbsp 4.54 {R}",
                            "12.1, &nbsp 7.57, &nbsp and &nbsp 4.46 {B}",
                        ],
                    },

                    {
                        title: "[<g>4.] Which piece's answer is the biggest number?",
                        correctIndex: 2,
                        paragraph: [
                            "Bo{t}tom right",
                            "T{o}p right",
                            "Bottom middl{e}",
                        ],
                    },

                ],  

                code: {
                    answer: "GAME",
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
                    text: "Add and subtract each set of fractions, then answer the questions to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions and Mixed Numbers",
                    commonCore: [
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
                            standard: '4.NF.B.3c',
                        },
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I need to measure some bits of fabric for a new clothing line, but it's such a bore. I truly can't be bothered to read the fractional measurements myself. Will you help me get the job done?",
                    complete: "I appreciate the help, Puzzle Punks. Send J.J. Crispy my warmest regards."
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
                            text: "Corduroy",
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
                            text: "Chiffon",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6/8 + 3/8",
                                },
                            }
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
                            text: "Lace",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/4 - 1/4",
                                },
                            }
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
                            text: "Velvet",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7 3/5 - 3 4/5",
                                },
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
                            text: "Silk",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/3 = 3/?",
                                },
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
                            text: "Linen",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8 3/5 + 1 2/5",
                                },
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
                        'A. What is the missing denominator for silk?',
                        'B. What\'s the sum for linen? ',
                        'C. Which cloth has a sum of 3 [<f>4/5] ?',     
                        'D. Which cloth has an answer equivalent to [<f>1/2] ?',
                        
                    ],
                    puzzle: [
                        ["0","(A)N","0","0","(D)L","0","0"],
                        ["0","3I","0","0","A","0","0"],
                        ["0","N","0","0","C","0","0"],
                        ["(C)V","E","4L","1V","E","(B)T","0"],
                        ["0","0","0","0","0","2E","0"],
                        ["0","0","0","0","0","N","0"],
                    ]
                },  

                code: {
                    answer: "VEIL",
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
                    text: "Enter the answer to each question, using the secret code if you get stuck. The yellow letters, in order, are the answer.",
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
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "For my upcoming raid on the Undermurk, I must determine the angles at which my troops will attack. I need a worthy servant to assist me. Are you up for the challenge?",
                    complete: "Well, well, well... I am impressed. You might not be as useless as I thought."
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
                            text: "1",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "right-2.svg",
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
                            text: "2",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "ray-2.svg",
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
                            text: "3",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "acute-3.svg",
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
                            text: "4",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "obtuse-1.svg",
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
                            material: 'metal',
                            padding: "default"
                        },
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'defaultNoBottom'
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
                        title: "[<g>1.] Name this type of angle.",
                        word: "[R]IGHT",
                    },
                    {
                        title: "[<g>2.] Name this type of line.",
                        word: "R[A]Y",
                    },
                    {
                        title: "[<g>3.] Name this type of angle.",
                        word: "A[C]UTE",
                    },
                    {
                        title: "[<g>4.] Name this type of angle.",
                        word: "OBTUS[E]",
                    },
                ],

                code: {
                    answer: "RACE",
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


  