const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/math/all-standards/thumbnail-3rd-grade.png",
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
                    topic: "Two-Step Word Problems With Addition and Subtraction",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.D.8",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations in Base Ten",
                            standard: "3.NBT.A.2",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "It's cool you're cooking yams, but I think snow cones will distract the yeti much better! Tell you what \u2014 if you help me with a few problems, I'll lend you some sugar. Deal?",
                    complete: "Thank you! Together, maybe we'll find a way out of this horrible cave."
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
                                    file: "4.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>1. The Icebox]",
                                },
                                passage: {
                                    text: "Yesterday, Dr. Seraphina had exactly 500 snow cones in her icebox. Unfortunately, 180 snow cones melted overnight. Today, she replaced them with 220 more.",
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
                                    file: "5.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>2. Crushed Ice]",
                                },
                                passage: {
                                    text: "Dr. Seraphina had 750 cups of crushed ice. While trying to come up with the perfect snow cone recipe, she used 230 cups of ice in the morning and 180 cups in the afternoon.",
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
                                    file: "1.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>3 & 4. Snow Cone Flavors]",
                                },
                                passage: {
                                    text: "Dr. Seraphina made 325 snow cones on Monday. She took a break on Tuesday, but made 178 more on Wednesday. 250 of the total snow cones are orange-flavored, and the rest are blue raspberry.",
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
                        title: "[<g>1.] How many snow cones are now in the icebox?",
                        correctIndex: 2,
                        paragraph: [
                            "900 s{n}ow cones",
                            "200 sno{w} cones",
                            "540 snow {c}ones",
                        ],
                    },
                    {
                        title: "[<g>2.] How many cups of crushed ice are left?",
                        correctIndex: 1,
                        paragraph: [
                            "410 c{u}ps of crushed ice",
                            "340 cups {o}f crushed ice",
                            "1,160 cups of crushed {i}ce",
                        ],
                    },
                    {
                        title: "[<g>3.] How many snow cones are blue raspberry?",
                        correctIndex: 0,
                        paragraph: [
                            "253 are b{l}ue raspberry",
                            "753 are {b}lue raspberry",
                            "397 are blue {r}aspberry",
                        ],
                    },
                    {
                        title: "[<g>4.] If the yeti eats 120 of the blue raspberry snow cones, how many will be left?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "277 {y}",
                            "633 {e}",
                            "133 {d}",
                            "373 {t}",
                        ],
                    },
                ],  
                code: {
                    answer: "COLD",
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
                    text: "Solve each multiplication or division fact, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplication and Division Facts",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.A.4",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.B.5",
                        },
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Operations and Algebraic Thinking",
                            standard: "3.OA.C.7",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "I just want to write songs tonight, but I'm stuck sorting through all these potatoes. What a bore! How about this: if you help me out, I'll share some yams with you. Sound good?",
                    complete: "I like potatoes, and potatoes like me. If you like potatoes, I'll like you too!"
                },
            },

            // text + symbol tag + symbol key (6x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6 × 8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "-3%",
                                rotate: "1deg",
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
                                    text: "108 ÷ 9",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "3%",
                                rotate: "-2deg",
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
                                    text: "7 × 4",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-2%",
                                rotate: "0deg",
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
                                    text: "49 ÷ 7",
                                },
                            },
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
                            text: "I",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "9 × 9",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "L",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "56 ÷ 2",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "-2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>A] = cups of steak fries<br> \
                                            [<s>D] = pans of tater tots<br> \
                                            [<s>I] = bags of hash browns",
                                },
                            },
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
                                passage: {
                                    text:   "[<s>C] = boxes of baked potatoes<br> \
                                            [<s>H] = boxes of curly fries<br> \
                                            [<s>L] = pans of sweet potatoes",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "3%",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many bags of hash browns are there?",
                        correctIndex: 1,
                        paragraph: [
                            "72 {b}ags",
                            "81 bag{s}",
                            "82 ba{g}s",
                        ],
                    },
                    {
                        title: "[<g>2.] Which two items have the same answer?",
                        correctIndex: 2,
                        paragraph: [
                            "Tater {t}ots and hash browns",
                            "Steak fries and b{a}ked potatoes",
                            "Tater tots and sweet {p}otatoes",
                        ],
                    },
                    {
                        title: "[<g>3.] How many cups of steak fries are there?",
                        correctIndex: 0,
                        paragraph: [
                            "48 c{u}ps",
                            "40 cup{s}",
                            "46 cu{p}s",
                        ],
                    },
                    {
                        title: "[<g>4.] Does Tater Durant have more boxes of baked potatoes or curly fries?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "{C}urly fries",
                            "Bake{d} potatoes",
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
                    topic: "Round to the Nearest 10 or 100",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Number and Operations in Base Ten",
                            standard: "3.NBT.A.1",
                        },
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "My map is ripped to shreds! With these old eyes, I can't fix it. Help me put the pieces together, and I'll reward you with a whole barrel of butter from my ship. Are you up for it?",
                    complete: "Aye, well done! As promised, here's a barrel of butter for your yams."
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
                                text: "750",
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
                                text: "861",
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
                                text: "549",
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
                                text: "3,281",
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
                                text: "1,463",
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
                                text: "832",
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
                                text: "449",
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
                                text: "529",
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
                                text: "572",
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
                        title: "[<g>1.] Which two pieces are best rounded to 800?",
                        correctIndex: 2,
                        paragraph: [
                            "Bottom left and top le{f}t",
                            "{M}iddle right and top right",
                            "Top left and middle ri{g}ht",
                        ],
                    },
                    {
                        title: "[<g>2.] Round the 3 fully-green pieces to the nearest 100.",
                        correctIndex: 1,
                        paragraph: [
                            "From to{p} to bottom: &nbsp750 &nbsp/&nbsp 3,300 &nbsp/&nbsp 500",
                            "From t{o}p to bottom: &nbsp800 &nbsp/&nbsp 3,300 &nbsp/&nbsp 400",
                            "From top to bot{t}om: &nbsp700 &nbsp/&nbsp 3,000 &nbsp/&nbsp 400",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: when rounding to the nearest hundred, the top right piece rounds to 600.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>4.] When rounding to the nearest 10, which piece rounds to 530?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Bottom mi{d}dle",
                            "Bottom ri{g}ht",
                            "Top {r}ight",
                            "Bottom {l}eft",
                        ],
                    },
                ],  
                code: {
                    answer: "GOLD",
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
                    text: "Measure the length of each figure, then type in the answers to the questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Measure and Compare Length in Units",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [2],
                            category: "Measurement and Data",
                            standard: "2.MD.D.9",
                        },
                        {
                            subject: "Math",
                            grade: [2],
                            category: "Measurement and Data",
                            standard: "2.MD.A.4",
                        },
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "I'm building a machine to escape this place, but I'm SO bad at keeping track of all these parts! If you help me measure them, I'll build you an oven to bake those yams. Sound like a plan?",
                    complete: "My escape device is nearly ready! Couldn't have done it without your help."
                },
            },

            // cryptogram + tag + figure-line (6x) 
            activity: {
                info: {
                    type: "dynamic",
                    asset: "pippo-fizzlepop.png",
                },
                blockArray: [                
                    {
                        tag: {
                            text: "Battery",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 10,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "2%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Gearbox",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 6,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Sprocket",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 9,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "2%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Circuit",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 7,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-1%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Turbine",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 8,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-1%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Radiator",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 11,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "12%",
                                translateY: "-3%",
                                rotate: "1deg",
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
                                translateX: "-2%",
                                translateY: "2%",
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
                            width: "percent35",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center",
                        },
                    },
                    contentArray: [
                        {
                            figure: {
                                border: {
                                    width: 'thin'
                                },
                                background: {
                                    color: 'gold',
                                }
                            },   
                            cell: {
                                border: {
                                    width: 'thin'
                                },
                                dimension: {
                                    size: 'large',
                                }
                            },
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            dimension: {
                                width: "full",
                                height: "full",
                            },
                            misc: {
                                padding: "default"
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
                        title: "[<g>1.] What machine part is 7 units long?",
                        word: "CI[R]CUIT",
                    },
                    {
                        title: "[<g>2.] What machine part is the longest?",
                        word: "RAD[I]ATOR",
                    },
                    {
                        title: "[<g>3.] What part is two units shorter than the turbine?",
                        word: "[G]EARBOX",
                    },
                    {
                        title: "[<g>4.] What part is two units longer than the circuit?",
                        word: "[S]PROCKET",
                    },
                ],
                code: {
                    answer: "RIGS",
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
                    text: "Find the fraction shown on each shape and number line, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Identify Fractions of Shapes and Number Lines",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [3],
                            category: "Geometry",
                            standard: "3.G.A.2",
                        },
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
                            standard: "3.NF.A.3d",
                        },
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "I must escape soon, but I need to count my supplies first. I'm willing to share some cinnamon if you lend a hand. Will you help me, friend?",
                    complete: "It was an honor working with you, Dingo Punks. I bid you farewell, and good luck!"
                },
            },

            // number-line (2x) + image (4x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Cups of [<u>butter]",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 8,
                                        dot: 5
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
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Loaves of [<u>brioche]",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_3-6.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Length of [<u>candle] (ft)",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 4,
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
                                translateX: "2%",
                                translateY: "15%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Barrel of [<u>nails]",
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
                                translateX: "3%",
                                translateY: "7%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Jar of [<u>cinnamon]",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_7-8.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "4%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Length of [<u>spade] (yd)",
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
                                translateY: "15%",
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
                        'A. Which fraction shows [<f>5/8]: &nbsp[<u>butter] or [<u>candle]?',
                        'B. How many of these fractions have a denominator of 4?',
                        'C. Which fraction shows [<f>2/3] ?',     
                        'D. Which fraction is equivalent to [<f>1/2] ?',                    
                    ],
                    puzzle: [
                        ["0","(A)B","0","0","0","0","0"],
                        ["0","U","0","0","0","0","(C)S"],
                        ["0","T","0","0","0","0","3P"],
                        ["0","(B)T","W","2O","0","0","A"],
                        ["0","4E","0","0","0","0","D"],
                        ["(D)B","R","I","O","C","1H","E"],
                    ]
                },  
                code: {
                    answer: "HOPE",
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