const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/math/all/preview-3rd-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    challengeArray: [

        // ⭐ driftwood dan
        {

            info: {
                type: 'challenge',
                title: "Driftwood Beach",
                asset: "driftwood-dan.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Two-Step Word Problems With Addition and Subtraction",
                    commonCore: [
                        "3.OA.D.8",
                        "3.NBT.A.2",
                        "3.MD.A.1",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "Hi there, I'm Driftwood Dan! My job is to protect the beach from the pirates, and I came up with some plans. Will you double-check them for me?",
                    complete: "With your smarts, we've got a real shot at winning. Thanks for helping out! "
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "driftwood-dan.png",
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
                                    text: "#1. Collect Driftwood",
                                },
                                passage: {
                                    text: "I'll start collecting driftwood at 6:30 in the morning. It will take 2 hours to search the east beach, and 3 hours to search the north beach.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "0%",
                                rotate: "-2deg",
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
                                    text: "#2. Build a Fence",
                                },
                                passage: {
                                    text: "Then, it's time build a sturdy fence. To do this, I need a total of 50 pieces of driftwood. I already have 22 pieces in the barn, and 10 pieces in the shed.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "4.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "#3. Cover in Tar",
                                },
                                passage: {
                                    text: "Finally, we'll cover the fence in tar to protect it from seawater. We have three barrels of tar in storage: one with 4 gallons of tar, one with 20 gallons of tar, and one with 25 gallons of tar. How much tar do we have?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
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
                        title: "[<g>1.] What time will Driftwood Dan finish collecting driftwood from both beaches?",
                        answerType: "numerals",
                        correctIndex: 2,
                        columns: 2,
                        paragraph: [
                            "8:30 a.m. {K}",
                            "1:00 p.m. {S}",
                            "11:30 a.m. {T}",
                            "11:00 a.m. {C}",
                        ],
                    },
                    {
                        title: "[<g>2.] How many [<i>more] pieces of driftwood does Driftwood Dan needs to build the fence?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "40 piece{s}",
                            "18 p{i}eces",
                            "12 {p}ieces",
                            "32 pie{c}es",
                        ],
                    },
                    {
                        title: "[<g>3.] Which equation is used to solve \"Cover in Tar?\"",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "4 + 20 + ___ = 25 {A}",
                            "4 + 20 + 25 = ___ {D}",
                            "3 + 4 + 20 + 25 = ___ {R}",
                        ],
                    },
                    {
                        title: "[<g>4.] If 40 gallons of tar are needed to cover the whole fence, is there enough?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Y{e}s",
                            "{N}o",
                        ],
                    },
                ],  
                code: {
                    answer: "TIDE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ chef gumbo
        {

            info: {
                type: 'challenge',
                title: "Dining Hall",
                asset: "chef-gumbo.png",
                state: "incomplete",
                hint: {
                    text: "Solve each problem, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplication and Division Facts",
                    commonCore: [
                        "3.OA.A.1",
                        "3.OA.A.2",
                        "3.OA.B.5",
                        "3.OA.C.7",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "Ahoy, mate! I'm cooking up a special dinner for everyone at camp, and I need your help. Can you figure out how much food we need?",
                    complete: "Thanks, matey! Just wait 'til you try my famous fish bone chowder."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "chef-gumbo.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "[<u>Muffins] Needed",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "7 × 7"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "150%",
                                translateY: "-70%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Kabobs] Needed",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "8 × 3"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "50%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Carrots] Needed",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "63 ÷ 9"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "50%",
                                translateY: "75%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Shrimps] Needed",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "72 ÷ 12"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-50%",
                                translateY: "-50%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Biscuits] Needed",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "5 × 8"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "75%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Livers] Needed",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "75  ÷ 3"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-120%",
                                translateY: "-75%",
                                rotate: "-1deg",
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
                                translateY: "50%",
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
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
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
                        title: "[<g>1.] Which food item has a quotient of 6?",
                        word: "S[H]RIMPS",
                    },
                    {
                        title: "[<g>2.] True or false: 48 muffins are needed.",
                        word: "FALS[E]",
                    },
                    {
                        title: "[<g>3.] How many biscuits are needed?",
                        word: "FO[R]TY",
                    },
                    {
                        title: "[<g>4.] Which food item has a product of twenty four?",
                        word: "KABO[B]S",
                    },
                ],
                code: {
                    answer: "HERB",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ madame mystica
        {

            info: {
                type: 'challenge',
                title: "Mystic Hideaway",
                asset: "madame-mystica.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Place Value and Rounding",
                    commonCore: [
                        "3.NBT.A.1",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "Greetings, Dingo Punks. My magic mirror can show when the Red Tide pirates will attack, but it's broken to pieces! Do you think you can put it back together?",
                    complete: "Ah, my clever friend, your help has been a lighthouse in the fog. Farewell, and good luck!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "madame-mystica.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "94",
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
                                    text: "499",
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
                                    text: "360",
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
                                    text: "6,447",
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
                                    text: "6,521",
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
                                    text: "650",
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
                                    text: "23",
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
                                    text: "189",
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
                                    text: "349",
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
                                align: 'center',
                                puzzle: 'default',
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
                        title: "[<g>1.] When rounding to the nearest ten, how many puzzle pieces round to a number less than 200?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "On{e} piece",
                            "Three {p}ieces",
                            "Five {p}ieces",
                            "Ni{n}e pieces",
                        ],
                    },
                    {
                        title: "[<g>2.] When rounding to the nearest hundred, which piece rounds to 400?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Th{e} top right",
                            "The top le{f}t",
                            "T{h}e bottom right",
                            "The cen{t}er",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: when rounding to the nearest 100, the bottom left piece rounds up.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "Fals{e}",
                        ],
                    },
                    {
                        title: "[<g>4.] Rounded to the nearest 100, the _____ is 6,500.",
                        correctIndex: 2,
                        paragraph: [
                            "Pie{c}e with the red sun",
                            "Piece with the red moo{n}",
                            "Cente{r} piece",
                        ],
                    },
                ],  
                code: {
                    answer: "PEER",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ broken animatronic
        {

            info: {
                type: 'challenge',
                title: "Junk Pile",
                asset: "melodina.png",
                state: "incomplete",
                hint: {
                    text: "Find the area of the rectangles, sort them into the correct columns, and answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Area and Perimeter",
                    commonCore: [
                        "3.MD.C.5",
                        "3.MD.C.5a",
                        "3.MD.C.5b",
                        "3.MD.C.6",
                        "3.MD.C.7",
                        "3.MD.C.7a",
                        "3.MD.C.7b",
                        "3.MD.D.8",
                    ],
                }
            },
            
            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "To plan our defenses, I must find the area and perimeter of the camp's buildings \u2014 but the saltwater has fried my circuits! Will you help me finish the job?",
                    complete: "Oh, thank you! My mind feels clearer now, like a song I can almost remember..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Area Less Than 40",
                        "Area Greater Than 40",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    
                    {
                        tag: {
                            text: "Cabin #1",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 7,
                                        height: 5,
                                    },
                                    label: {
                                        top: "",
                                        left: "",    
                                        right: ""                               
                                    },
                                }
                            },
                            {
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Lookout Post",
                        },
                        contentArray: [
                            {
                            },
                            {
                                figure: {
                                    measurement: {
                                        width: 3,
                                        height: 2,
                                    },
                                    label: {
                                        top: "6 meters",
                                        left: "4 meters",    
                                        bottom: "offset",  
                                        right: "offset"                               
                                    },
                                }
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Dining Hall",
                        },
                        contentArray: [
                            {
                            },
                            {
                                figure: {
                                    measurement: {
                                        width: 5,
                                        height: 5,
                                    },
                                    label: {
                                        top: "9 meters",
                                        left: "offset",    
                                        bottom: "offset",  
                                        right: "9 meters"                             
                                    },
                                }
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Cabin #3",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 11,
                                        height: 6,
                                    },
                                    label: {
                                        top: "",
                                        left: "",    
                                        right: ""                               
                                    },
                                }
                            },
                            {
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Cabin #2",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 9,
                                        height: 3,
                                    },
                                    label: {
                                        top: "",
                                        left: "",    
                                        right: ""                               
                                    },
                                }
                            },
                            {
                            },
                        ],
                        correctIndex: 0
                    },
                    
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "sort2Width",
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
                                    width: 'thin'
                                },
                                dimension: {
                                    size: 'default',
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
                        },
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
                                    width: 'default'
                                },
                                dimension: {
                                    size: 'default',
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
                        title: "[<g>1.] Which building has a perimeter of 20 meters?",
                        correctIndex: 1,
                        paragraph: [
                            "Th{e} dining hall",
                            "The lookout po{s}t",
                            "None of the a{b}ove",
                        ],
                    },
                    {
                        title: "[<g>2.] Which cabin has an area of 35 units<sup>2</sup> ?",
                        correctIndex: 0,
                        paragraph: [
                            "C{a}bin #1",
                            "Cabi{n} #2",
                            "Ca{b}in #3",
                        ],
                    },
                    {
                        title: "[<g>3.] Which cabin has a perimeter of 24 units?",
                        correctIndex: 1,
                        paragraph: [
                            "Cab{i}n #1",
                            "Cabi{n} #2",
                            "Ca{b}in #3",
                        ],
                    },
                    {
                        title: "[<g>4.] How many buildings have an area > 40 ?",
                        correctIndex: 0,
                        paragraph: [
                            "Two buil{d}ings",
                            "T{h}ree buildings",
                            "Four {b}uildings",
                        ],
                    },
                ],  
                code: {
                    answer: "SAND",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ captain fishbeard
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Ship",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Look at the fractions, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions of Shapes and Number Lines",
                    commonCore: [
                        "3.NF.A.1",
                        "3.NF.A.2",
                        "3.NF.A.2a",
                        "3.NF.A.2b",
                        "3.NF.A.3",
                        "3.NF.A.3a",
                        "3.NF.A.3b",
                        "3.NF.A.3c",
                        "3.NF.A.3d",
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arrrr! Yes, I'm a pirate \u2014 but don't worry, I'm on your side. My ship is in bad shape, and I need it fixed up to fight the Red Tide. Can I count on you to make the repairs?",
                    complete: "Thanks, lad! After all this blows over, I'm thinking of setting sail again. Care to join my new crew?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "fishbeard.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Fraction of the [<u>anchor] repaired:",
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
                                translateX: "-1%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fraction of the [<u>hatches] repaired:",
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
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fraction of the [<u>cabins] repaired:",
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
                                translateX: "1%",
                                translateY: "-2%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fraction of the [<u>deck] repaired:",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_6-8.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "1%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fraction of the [<u>masts] repaired:",
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
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fraction of the [<u>rudder] repaired:",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 5,
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
                                translateX: "2%",
                                translateY: "1%",
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

            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which item has a fraction equivalent to [<f>1/2]: [<u>cabins], [<u>hatches], or [<u>rudder]?',
                        'B. Are the [<u>cabins] or [<u>masts] equal to the deck?',
                        'C. Which has a greater fraction: [<u>anchor] or [<u>masts]?',     
                        'D. Which item is a whole number?',                    
                    ],
                    puzzle: [
                        ["(A)H","(C)A","4T","C","H","E","S"],
                        ["0","N","0","0","0","0","0"],
                        ["0","(B)C","3A","1B","I","N","S"],
                        ["0","H","0","0","0","0","0"],
                        ["0","2O","0","0","0","0","0"],
                        ["0","(D)R","U","D","D","E","R"],
                    ]
                },  
                code: {
                    answer: "BOAT",
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
        
    ]

}