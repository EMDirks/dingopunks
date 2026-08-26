const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/math/all-standards/thumbnail-5th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ dr. seraphina's cell
        {

            info: {
                type: 'challenge',
                title: "Dr. Seraphina's Cell",
                asset: "dr-seraphina.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Step Word Problems With All Four Operations",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations in Base Ten",
                            standard: "4.NBT.B.4",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations in Base Ten",
                            standard: "4.NBT.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations in Base Ten",
                            standard: "4.NBT.B.6",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Operations and Algebraic Thinking",
                            standard: "4.OA.A.3",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.B.6",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "Yams are chill, but I'm convinced that snow cones are the key to distracting the yeti. Tell you what \u2014 if you help me with a few problems, I'll give you some sugar for your efforts. Deal?",
                    complete: "Hopefully, at least one of us can escape this ridiculous place. Good luck!"
                },
            },

            // text + image (3x)
            activity: {

                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
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
                                    text: "[<u>1. Snow Cones in January]",
                                },
                                passage: {
                                    text: "Dr. Seraphina makes snow cones in 15 different flavors: cherry, lemon, cave moss, and more! In December, she made 236 snow cones for each of the fifteen flavors. By January, she had to throw away 593 in total due to melting.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "10%",
                                rotate: "-3deg",
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
                                    text: "[<u>2 & 3. Snow Cone Time]",
                                },
                                passage: {
                                    text: "On Mondays, it takes Dr. Seraphina 4 minutes to make a single snow cone. On Tuesdays, she's a bit more tired, so it takes her 5 minutes per cone. She doesn't make snow cones any other day of the week. Last week, she made 250 snow cones on Monday and 76 on Tuesday.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "6.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>4. Flavor Syrup]",
                                },
                                passage: {
                                    text: "Dr. Seraphina is designing a new snow cone, with plans to start manufacturing the flavor syrup soon after she escapes. To store a total of 438 gallons of syrup, she's decided to use barrels \u2014 each with a capacity of 36 gallons.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-10%",
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
            
            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] By January, how many snow cones were left?",
                        correctIndex: 0,
                        paragraph: [
                            "2,947 snow {c}ones",
                            "3,540 sno{w} cones",
                            "2,893 snow cone{s}",
                        ],
                    },
                    {
                        title: "[<g>2.] How long did Dr. Seraphina spend making snow cones last week?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "1,000 minu{t}es",
                            "1,373 {m}inutes",
                            "23 h{o}urs",
                            "24 {h}ours",
                        ],
                    },
                    {
                        title: "[<g>3.] If she continues at the same rate for 10 weeks, how long in total will she spend making snow cones?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "161 ho{u}rs",
                            "230 h{o}urs",
                            "13,835 {m}inutes",
                            "23 hou{r}s",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the minimum number of barrels Dr. Seraphina needs to store all her syrup?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "11 ba{r}rels",
                            "12 {b}arrels",
                            "13 barre{l}s",
                            "14 barr{e}ls",
                        ],
                    },
                ],  
                code: {
                    answer: "COOL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ tater durant's cell
        {

            info: {
                type: 'challenge',
                title: "Tater Durant's Cell",
                asset: "tater-drift.png",
                state: "incomplete",
                hint: {
                    text: "Find the volume of each figure, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Calculate Volume",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Measurement and Data",
                            standard: "4.MD.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Measurement and Data",
                            standard: "5.MD.C.3",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Measurement and Data",
                            standard: "5.MD.C.3a",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Measurement and Data",
                            standard: "5.MD.C.3b",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Measurement and Data",
                            standard: "5.MD.C.4",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Measurement and Data",
                            standard: "5.MD.C.5",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Measurement and Data",
                            standard: "5.MD.C.5a",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Measurement and Data",
                            standard: "5.MD.C.5b",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "I just want to eat potatoes all day! Problem is, I have so little storage space in this cell. Want to help me figure out how much volume my boxes take up? If you do, I'll give you some yams.",
                    complete: "Fun fact: the average person eats 124 pounds of potatoes per year."
                },
            },

            // tag + figure-volume (3x) + word-problem (1x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [        
                    {
                        tag: {
                            text: "Tater Tot Box",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "yy3_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-16%",
                                translateY: "-10%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Mashed Potato Box",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "yy3_2.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Curly Fries Box",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "yy3_3.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "3%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Storage Alcove Dimensions",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Tater Durant stores raw potatoes in a large alcove at the back of his cell. The alcove has a volume of 126 feet<sup>3</sup>. Its length is 6 feet and its height is 7 feet.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "12%",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is the volume of the tater tot box?",
                        correctIndex: 0,
                        paragraph: [
                            "120 cubic centimeter{s}",
                            "110 cub{i}c centimeters",
                            "54 cu{b}ic centimeters",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the volume of 4 mashed potato boxes?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "48 in.<sup>3</sup> {H}",
                            "192 in.<sup>3</sup> {P}",
                            "144 in.<sup>3</sup> {O}",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the volume of the curly fries box?",
                        correctIndex: 2,
                        paragraph: [
                            "16 uni{t}s",
                            "64 u{n}its",
                            "64 c{u}bic units",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the width of the storage alcove?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "4 ft {T}",
                            "3 ft<sup>2</sup> {R}",
                            "3 ft {D}",
                        ],
                    },
                ],  
                code: {
                    answer: "SPUD",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ fishbeard's cell
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Decimal Computation With All Four Operations",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.A.3",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.A.3a",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations in Base Ten",
                            standard: "5.NBT.B.7",
                        },
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arrr! Me map is ripped to shreds, and with these old eyes, I can't fix it. Help me put the pieces together, and I'll reward you with a whole barrel o' butter from me ship. Are ye up to the challenge?",
                    complete: "We will escape, I'm sure of it.... and we will have our revenge. See ye on the seven seas!"
                },
            },

            // puzzle (9x)
            activity: {
                info: {
                type: "dynamic",
                functionality: "drag-and-drop",
                asset: "fishbeard.png",
                },
                blockArray: [              
                {
                contentArray: [
                    {
                        passage: {
                            text: "22.6 + 9.84",
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
                            text: "61.47 + 231.046",
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
                            text: "1 - 0.73",
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
                            text: "83.29 - 24.35",
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
                            text: "4.6 × 7.2",
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
                            text: "13.16 × 2.5",
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
                            text: "132.82 × 10",
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
                            text: "32.5 ÷ 0.5",
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
                            text: "10.6 ÷ 5",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Solve the three puzzle pieces in the left column.",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "From top to bottom:&nbsp 32.44 &nbsp/&nbsp 61.14 &nbsp/&nbsp 1,328.2 {F}",
                            "From top to bottom:&nbsp 32.34 &nbsp/&nbsp 58.9 &nbsp/&nbsp 1,320.82 {P}",
                            "From top to bottom:&nbsp 32.44 &nbsp/&nbsp 58.94 &nbsp/&nbsp 1,328.2 {H}",
                        ],
                    },
                    {
                        title: "[<g>2.] Which piece's answer is less than one whole?",
                        correctIndex: 0,
                        paragraph: [
                            "The fully-bl{u}e piece",
                            "The bottom r{i}ght piece",
                            "The b{o}ttom middle piece",
                        ],
                    },
                    {
                        title: "[<g>3.] Which piece has an answer of 65?",
                        correctIndex: 2,
                        paragraph: [
                            "The middle right pie{c}e",
                            "{T}he middle top piece",
                            "The midd{l}e bottom piece",
                        ],
                    },
                    {
                        title: "[<g>4.] Which piece has a product of 32.9?",
                        correctIndex: 1,
                        paragraph: [
                            "The center piec{e}",
                            "The midd{l}e right piece",
                            "The {b}ottom left piece",
                        ],
                    },
                ],  
                code: {
                    answer: "HULL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ pippo's cell
        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Add or subtract each set of fractions and mixed numbers, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Fractions and Mixed Numbers",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.A.1",
                        },
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "To build my escape machine, I need to refine some metal ingots. But I'm having trouble with all the calculations... If you help me, I'll make you an oven to bake those yams. Okay?",
                    complete: "My escape device is nearly ready \u2014 couldn't have done it without your help. Cheers!"
                },
            },

            // fractions [tag] (6x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "pippo-fizzlepop.png",
                },
                blockArray: [  
                    {
                        tag: {
                            text: "[<u>Silver] Ingot",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/6 + 5/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-10%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Nickel] Ingot",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/4 - 1/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "1%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Uranium] Ingot",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/12 + 4 2/3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "-30%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Osmium] Ingot",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7 6/9 - 8/9",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "15%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Zinc] Ingot",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "10 8/9 - 1/3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Lead] Ingot",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 1/2 + 6 2/8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "8%",
                                rotate: "-4deg",
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

            // crossword (7x6)
            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which ingot has an answer > 6 but < 7 ?',
                        'B. Which ingot equals 1 [<f>1/6] ?',
                        'C. Which ingot equals 9 [<f>3/4] ?',     
                        'D. Which ingot equals a whole number?',                    
                    ],
                    puzzle: [
                        ["(A)3O","(B)S","M","I","U","M","0"],
                        ["0","1I","0","0","0","0","0"],
                        ["0","(C)L","E","A","D","0","0"],
                        ["0","V","0","0","0","0","0"],
                        ["0","E","0","0","0","0","0"],
                        ["(D)U","2R","A","4N","I","U","M"],
                    ]
                },  
                code: {
                    answer: "IRON",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ the knight's cell
        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Look at the lines and angles, then type in the answer to each question. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Identify Lines and Angles",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Geometry",
                            standard: "4.G.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Measurement and Data",
                            standard: "4.MD.C.5",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Measurement and Data",
                            standard: "4.MD.C.5a",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Measurement and Data",
                            standard: "4.MD.C.5b",
                        },
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "I've discovered hidden escape tunnels beneath the snow, and I need your help analyzing them. Assist me, and I'll reward you with some of my cinnamon rations. Shall we get started?",
                    complete: "May this cinnamon be helpful in your quest for candied yams! Avoid large footprints in the snow..."
                },
            },

            // cryptogram + angles (4x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [               
                    {
                        tag: {
                            text: "1st Tunnel",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "segment-2.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-11%",
                                translateY: "2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "2nd Tunnel",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "right-3.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "7%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "3rd Tunnel",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "ray-3.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "-8%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "4th Tunnel",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "acute-1.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "12%",
                                translateY: "1%",
                                rotate: "2deg",
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

            // decoder (4x)
            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1st Tunnel:] This is called a line _____ .",
                        word: "[S]EGMENT",
                    },
                    {
                        title: "[<g>2nd Tunnel:] Name the type of angle.",
                        word: "R[I]GHT",
                    },
                    {
                        title: "[<g>3rd Tunnel:] What is this type of line called?",
                        word: "[R]AY",
                    },
                    {
                        title: "[<g>4th Tunnel:] This acute angle is less than 90 _____ .",
                        word: "DEGRE[E]S",
                    },
                ],
                code: {
                    answer: "SIRE",
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
