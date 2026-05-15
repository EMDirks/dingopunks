const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/math/all-standards/thumbnail-4th-grade.png",
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
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.A.3",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.D.8",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Operations and Algebraic Thinking",
                            standard: "4.NBT.B.4",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Operations and Algebraic Thinking",
                            standard: "4.NBT.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Operations and Algebraic Thinking",
                            standard: "4.OA.A.3",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I admire your love of yams, but I'm convinced that snow cones are the key to distracting the yeti. Tell you what \u2014 if you help me with a few problems, I'll give you some sugar for your efforts. Okay?",
                    complete: "Hopefully, at least one of us can escape this icy prison. Good luck!"
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
                                    text: "[<u>1. Blueberry Snow Cones]",
                                },
                                passage: {
                                    text: "Dr. Seraphina is experimenting with new snow cone flavors. For a single batch of her special blueberry snow cones, she needs 3 cups of blueberries, 2 cups of sugar, and 1 cup of lemon juice.",
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
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>2. Mineral Water]",
                                },
                                passage: {
                                    text: "Dr. Seraphina collected 1,580 ounces of mineral water from the cave, then accidentally spilled 40 ounces. She wants to use all of the remaining ounces to make 4 massive snow cones, each with an equal amount of mineral water.",
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
                                    file: "3.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>3 & 4. New Recipes]",
                                },
                                passage: {
                                    text: "Dr. Seraphina invented three new snow cone recipes: <br>\
                                    - Recipe A requires 3,794 tablespoons of ice, and 42 cups of slug slime <br>\
                                    - Recipe B requires 4,261 tablespoons of ice, and 70 cups of yeti sweat <br>\
                                    - Recipe C requires 6,432 tablespoons of ice, and 99 cups of cave moss",
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
                        title: "[<g>1.] How many total cups of ingredients are needed to make 7 batches of blueberry snow cones?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "13 cup{s}",
                            "43 cu{p}s",
                            "35 c{u}ps",
                            "42 {c}ups",
                        ],
                    },
                    {
                        title: "[<g>2.] How many ounces of mineral water will be in each of the massive snow cones?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "355 o{u}nces",
                            "385 {o}unces",
                            "395 ounc{e}s",
                            "6,160 ounce{s}",
                        ],
                    },
                    {
                        title: "[<g>3.] How much ice is required for all 3 new recipes?",
                        correctIndex: 1,
                        paragraph: [
                            "13,387 {t}ablespoons",
                            "14,487 tablespoo{n}s",
                            "14,847 tables{p}oons",
                        ],
                    },
                    {
                        title: "[<g>4.] Compared to recipe B, how many more combined tablespoons of ice do recipes A and C require?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "10,226 more t{b}sp",
                            "6,045 more tbs{p}",
                            "5,965 mor{e} tbsp",
                            "2,638 {m}ore tbsp",
                        ],
                    },
                ],  
                code: {
                    answer: "CONE",
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
                    text: "Find the area of each figure, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Area and Perimeter of Rectangular Figures",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Measurement and Data",
                            standard: "3.MD.C.5",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Measurement and Data",
                            standard: "3.MD.C.5b",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Measurement and Data",
                            standard: "3.MD.C.7",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Measurement and Data",
                            standard: "3.MD.C.7a",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Measurement and Data",
                            standard: "3.MD.C.7b",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Measurement and Data",
                            standard: "3.MD.D.8",
                        },
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Measurement and Data",
                            standard: "4.MD.A.3",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "I just want to eat potatoes all day! Problem is, I have such little storage space. Want to help me figure out how much room my boxes take up? If you do, I'll give you some yams.",
                    complete: "Let me tell you something: I love potatoes, and potatoes love me. Peace out!"
                },
            },

            // cryptogram + tag + figure-rectangle (3x) + word-problem (1x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [               
                    {
                        tag: {
                            text: "Box of [<u>Grilled] Potatoes",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 7,
                                        height: 3,
                                    },
                                    label: {
                                        top: "7 in.",
                                        left: "3 in.",    
                                        right: "offset"                               
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "9%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Box of [<u>Curried] Potatoes",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 5,
                                        height: 5,
                                    },
                                    label: {
                                        top: "17 in.",
                                        left: "offset",                              
                                        right: "17 in.",    
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "17%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Box of [<u>Poached] Potatoes",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 2,
                                        height: 4,
                                    },
                                    label: {
                                        top: "13 in.",
                                        left: "22 in.",    
                                        right: "offset"                               
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "18%",
                                translateY: "6%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Box of [<u>Smashed] Potatoes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Smashed potatoes are my favorite. I just wish I had a bigger box! The base only has an area of 72 square inches, with a length of 9 inches.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "25%",
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
                                translateX: "-8%",
                                translateY: "-8%",
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
                        title: "[<g>1.] Which box has a perimeter of 68 inches?",
                        word: "[C]URRIED",
                    },
                    {
                        title: "[<g>2.] Which box has a length of 8 inches?",
                        word: "SMAS[H]ED",
                    },
                    {
                        title: "[<g>3.] Which box has a perimeter of 20 inches?",
                        word: "GR[I]LLED",
                    },
                    {
                        title: "[<g>4.] Which box has an area of 286 in<sup>2</sup> ?",
                        word: "[P]OACHED",
                    },
                ],
                code: {
                    answer: "CHIP",
                    userArray: ["","","",""]
                },
            }

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
                    topic: "Round to Any Place",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [4],
                            category: "Number and Operations in Base Ten",
                            standard: "4.NBT.A.3",
                        },
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arrr! Me map is ripped to shreds, and with these old eyes, I can't fix it. Help me put the pieces together, and I'll reward you with a barrel o' butter from me ship. Are ye up for the challenge?",
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
                            text: "[<u>6]83",
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
                            text: "617,624",
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
                            text: "9,515",
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
                            text: "1,[<u>9]46,002",
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
                            text: "386,429",
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
                            text: "1,436,649",
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
                            text: "5[<u>9],811",
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
                            text: "36,299",
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
                            text: "1,436,482",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Round the center piece to the nearest 10,000.",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "380,000 {I}",
                            "390,000 {L}",
                            "90,000 {A}",
                        ],
                    },
                    {
                        title: "[<g>2.] Round the three pieces in the top row to the nearest 1000. All of them:",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "R{o}und up",
                            "{R}ound down",
                        ],
                    },
                    {
                        title: "[<g>3.] Which puzzle piece equals 1,436,500 when rounded to the nearest hundred?",
                        correctIndex: 3,
                        columns: 2,
                        paragraph: [
                            "Middle {r}ight",
                            "To{p} left",
                            "Midd{l}e left",
                            "B{o}ttom right",
                        ],
                    },
                    {
                        title: "[<g>4.] Round the left column to the underlined values. ",
                        correctIndex: 2,
                        paragraph: [
                            "Top to botto{m}: &nbsp600 &nbsp/&nbsp 1,900,000 &nbsp/&nbsp 59,000",
                            "Top t{o} bottom: &nbsp700 &nbsp/&nbsp 900,000 &nbsp/&nbsp 59,800",
                            "{T}op to bottom: &nbsp700 &nbsp/&nbsp 1,900,000 &nbsp/&nbsp 60,000",
                        ],
                    },
                ],  
                code: {
                    answer: "LOOT",
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
                    text: "Find the fraction of each shape and number line, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Identify Fractions of Shapes and Number Lines",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.2a",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.2b",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3a",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations Fractions",
                            standard: "3.NF.A.3b",
                        },
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "I'm building a machine to escape! But I'm having trouble keeping track of how much I've repaired each part. Help me figure out these fractions, and I'll bake those yams for you. Deal?",
                    complete: "My escape device is nearly ready \u2014 couldn't have done it without your help. Cheers!"
                },
            },

            // number-line (2x) + image (4x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    asset: "pippo-fizzlepop.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Engine",
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
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "8%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Gasket",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_4-5.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "2%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Rudder",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_3-4.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "-2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Battery",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_1-3.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "0%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Throttle",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
                                        dot: 3
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "3%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Turbine",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_6-8.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "5%",
                                rotate: "4deg",
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
                            dimension: {
                                width: "percent80",
                                height: "full",
                            },
                        }, 
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
                        'A. Which machine part is equal to [<f>2/5] + [<f>2/5] ?',
                        'B. [<u>True] or [<u>false]: the battery and throttle are equivalent fractions.',
                        'C. A <em>unit fraction</em> has a numerator of 1. Which machine part shows a unit fraction?',     
                        'D. Which machine part has a fraction of [<f>6/8] ?',                    
                    ],
                    puzzle: [
                        ["(A)G","0","(B)F","A","L","S","(C)E"],
                        ["A","0","0","0","0","0","3N"],
                        ["S","0","0","0","0","0","G"],
                        ["K","0","0","0","0","0","I"],
                        ["2E","0","0","0","0","0","N"],
                        ["(D)4T","U","R","1B","I","N","E"],
                    ]
                },  
                code: {
                    answer: "BENT",
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
                    text: "Solve each math problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Computation With All Four Operations",
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
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "I just uncovered a secret stash of loot hidden in this cave, and I need help counting it up before I escape! If you lend me a hand, I'll give you some gold coins and cinnamon. What do you say?",
                    complete: "It was an honor working with you, Dingo Punks. I bid you farewell, and good luck!"
                },
            },

            // text [tag] (8x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Grains of Goblin Dust",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "987,394 + 345,090",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "3%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Grains of Fairy Dust",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "1,382,194 - 34,578",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "-8%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Grains of Dragon Dust",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "900,000 - 217,282",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "7%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Gold Coins",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "96 × 52",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Bronze Coins",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6 × 800",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "-5%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Silver Coins",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "514 × 7",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "-8%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Boxes of Silk",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "96 ÷ 4",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "13%",
                                translateY: "-2%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Boxes of Spice",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "110 ÷ 5",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "12%",
                                translateY: "0%",
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
                                size: 'medium',
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which group of coins has the greatest product?",
                        correctIndex: 0,
                        paragraph: [
                            "Gol{d} coins",
                            "{B}ronze coins",
                            "Silver c{o}ins",
                        ],
                    },
                    {
                        title: "[<g>2.] How many grains of dragon dust are there?",
                        correctIndex: 1,
                        paragraph: [
                            "682,218 grains of {d}ragon dust",
                            "682,718 grains of dragon d{u}st",
                            "717,282 grai{n}s of dragon dust",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: the quotient for the boxes of silk is 25, and the quotient for the boxes of spice is 22.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fals{e}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which item has an answer of 1,332,484?",
                        correctIndex: 2,
                        paragraph: [
                            "{F}airy dust",
                            "Dra{g}on dust",
                            "Gob{l}in dust",
                        ],
                    },
                ],  
                code: {
                    answer: "DUEL",
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
