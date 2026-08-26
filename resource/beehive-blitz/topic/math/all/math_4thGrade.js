const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/math/all/thumbnail-4th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },
    
    challengeArray: [

        // ⭐ basil rabbit
        {
            info: {
                type: 'challenge',
                title: "Honey Vats",
                asset: "basil-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Place Value and Rounding",
                    commonCore: [
                        "4.NBT.A.1",
                        "4.NBT.A.3",
                        "4.NBT.B.5",
                        "4.NBT.B.6",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "Oh my! Queen Bella trusted me to help the bees collect nectar, but my map blew away and ripped to pieces! I'm such a mess... I'm always letting everyone down. Can you help me fix this?",
                    complete: "Oh my, thank you \u2014 thank you! I can't ever break Queen Bella's trust again."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "basil-rabbit-2.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "4 ×︎ 845",
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
                                    text: "1,503,099",
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
                                    text: "3 ×︎ 562",
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
                                    text: "20,000 x 10",
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
                                    text: "1,360,928",
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
                                    text: "90 ×︎ 20",
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
                                    text: "48 ×︎ 36",
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
                                    text: "7,195 ×︎ 4",
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
                                    text: "388 ÷︎ 5",
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
                        title: "[<g>1.] When rounding to the nearest 100, how many pieces have an answer of 1,700?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "1 {N}",
                            "3 {R}",
                            "2 {P}",
                            "4 {F}",
                        ],
                    },
                    {
                        title: "[<g>2.] Look at the piece with the hive. If you round 388 to the nearest 100, what is the estimated quotient?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "8 {I}",
                            "77 {H}",
                            "50 {E}",
                            "80 {A}",
                        ],
                    },
                    {
                        title: "[<g>3.] When rounding to the nearest 10,000, the ______ piece rounds to thirty thousand.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Middle bo{t}tom",
                            "Bott{o}m left",
                            "Mi{d}dle right",
                            "Top le{f}t",
                        ],
                    },
                    {
                        title: "[<g>4.] Which piece can be rounded to one million?",
                        correctIndex: 1,
                        paragraph: [
                            "The mi{d}dle top piece",
                            "T{h}e center piece",
                            "None of the abov{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "PATH",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ riff wingman
        {
            info: {
                type: 'challenge',
                title: "Riff's Study",
                asset: "riff-wingman.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Area and Perimeter",
                    commonCore: [
                        "3.MD.D.8",
                        "4.MD.A.1",
                        "4.MD.A.2",
                        "4.MD.A.3",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "I'm sure you've heard of me \u2014 Riff Wingman, famous poet. Looks like we've got a storm blowing in, and the hive could use some encouragement. Want to help me set up a show?",
                    complete: "You've got the rhythm to keep this hive alive! Just don't let Gustav throw you off your groove."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "riff-wingman.png",
                },
                blockArray: [    
                    {
                        tag: {
                            text: "Carpet",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Riff is laying down some carpet, perfectly sized for his eager audience. The carpet is a square with an area of 100 ft[<e>2].",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "40%",
                                rotate: "-4deg",
                            }
                        }
                    },             
                    {
                        tag: {
                            text: "Stage",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "For his big show, Riff is setting up a rectangular stage buzzing with neon lights. The stage measures thirty-five feet long and nineteen feet wide.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "7%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Poster",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Riff is designing a rectangular poster to promote his latest poetry slam, \"Buzzwords and Rhymes.\" The poster is 24 inches long and 60 inches wide, and is decorated with way too much glitter.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fence",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Riff will enclose the theater with a rectangular fence to keep out dangerous gusts. The length of this fence is 15 yards, and its perimeter is 50 yards.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Spotlight Zones",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Riff has two spotlight zones ready to dazzle the crowd. The first zone is a rectangle measuring 10 feet by 7 feet. The second zone is a square, with each side measuring 8 feet.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "-6%",
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
                            dimension: {
                                width: "full",
                                height: "full",
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
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
                        title: "[<g>1.] Which spotlight zone is bigger, and by how much?",
                        correctIndex: 0,
                        paragraph: [
                            "The first zon{e} is bigger by 6 ft[<e>2]",
                            "The {s}econd zone is bigger by 6 ft[<e>2]",
                            "The first zone is {b}igger by 8 ft[<e>2]",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the width of the fence?",
                        correctIndex: 2,
                        paragraph: [
                            "10 fee{t}",
                            "35 y{a}rds",
                            "10 yar{d}s",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of the following has a perimeter of 108 ft?",
                        correctIndex: 1,
                        paragraph: [
                            "{P}oster",
                            "Sta{g}e",
                            "Ca{r}pet",
                        ],
                    },
                    {
                        title: "[<g>4.] How long is each side of Riff's carpet?",
                        correctIndex: 0,
                        paragraph: [
                            "120 inch{e}s",
                            "100 fee{t}",
                            "1,200 in{c}hes",
                        ],
                    },
                ],  
                code: {
                    answer: "EDGE",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Look at the lines and angles, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Identify Lines and Angles",
                    commonCore: [
                        "4.MD.C.5",
                        "4.MD.C.5a",
                        "4.MD.C.5b",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "I ain't here to chitchat. I've got a whole warehouse to manage. Just help me figure out some of these lines and angles, alright? And don't go pokin' around any boxes.",
                    complete: "Yeah, yeah, thanks for the help. And again \u2014 don't go snoopin' around those boxes."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "grumblegrub.png",
                },
                blockArray: [               
                    {
                        tag: {
                            text: "Angle to Unload [<u>Crates]",
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
                                translateX: "-13%",
                                translateY: "70%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Angle to Unload [<u>Trunks]",
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
                                translateX: "-11%",
                                translateY: "7%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Direction for [<u>Deliveries]",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "ray-1.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "15%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Angle for the [<u>Closet]",
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
                                translateX: "-1%",
                                translateY: "50%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Angle for the [<u>Locker]",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "obtuse-2.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-10%",
                                rotate: "3deg",
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
                                translateY: "-5%",
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
                            size: 'tiny',
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
                        title: "[<g>1.] Which space has a right angle: [<u>closet] or [<u>locker]?",
                        word: "C[L]OSET",
                    },
                    {
                        title: "[<g>2.] How many degrees are in a right angle?",
                        word: "N[I]NETY",
                    },
                    {
                        title: "[<g>3.] Which angle is acute?",
                        word: "TRU[N]KS",
                    },
                    {
                        title: "[<g>4.] The angle to unload crates is an ______ angle.",
                        word: "OBTUS[E]",
                    },
                ],
                code: {
                    answer: "LINE",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ sunny snap
        {
            info: {
                type: 'challenge',
                title: "Accounting Dept.",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Solve each problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions and Mixed Numbers",
                    commonCore: [
                        "4.NF.A.2",
                        "4.NF.B.3",
                        "4.NF.B.3a",
                        "4.NF.B.3c",
                        "4.NF.B.4",
                        "4.NF.B.4a",
                        "4.NF.B.4b",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Queen Bella hired me to keep track of this year's nectar collection, but all the data is in fractions. I can't figure anything out... I must be the unluckiest leprechaun ever. Help!",
                    complete: "I wonder if Gustav is as bad as they say. I mean, nothing's wrong with a little rain, right?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sunny-snap.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "A",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2 3/8 + 6 5/8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "-15%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "C",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1 2/4 + 5 3/4",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "D",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5/6 - 2/6",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "5%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "H",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5 1/3 - 3 2/3",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "I",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 × 2/3",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "4%",
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
                                fraction: {
                                    text: "3/4 × 7",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "20%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>A] = Honey sales<br> \
                                            [<s>D] = Wax usage<br> \
                                            [<s>I] = Queen's fund",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-9%",
                                translateY: "9%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>C] = Pollen exports<br> \
                                            [<s>h] = Remaining fields<br> \
                                            [<s>L] = Delivery costs",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'large',
                                    fraction: 'medium'
                                },
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
                        title: "[<g>1.] Which problem has an answer of 5 [<f>1/4] ?",
                        correctIndex: 2,
                        paragraph: [
                            "{P}ollen exports",
                            "Honey sa{l}es",
                            "Delivery {c}osts",
                        ],
                    },
                    {
                        title: "[<g>2.] Solve all six problems. How many answers are whole numbers?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "On{e}",
                            "Tw{o}",
                            "Th{r}ee",
                            "Fo{u}r",
                        ],
                    },
                    {
                        title: "[<g>3.] Which problem has an answer of 1 [<f>2/3] ?",
                        correctIndex: 0,
                        paragraph: [
                            "Rema{i}ning fields",
                            "Wax usa{g}e",
                            "Quee{n}'s fund",
                        ],
                    },
                    {
                        title: "[<g>4.] Which item has an answer > 8?",
                        correctIndex: 1,
                        paragraph: [
                            "Delivery cost{s}",
                            "Ho{n}ey sales",
                            "Queen's fun{d}",
                        ],
                    },
                ],  
                code: {
                    answer: "COIN",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ queen bella
        {
            info: {
                type: 'challenge',
                title: "Throne Room",
                asset: "queen-bella.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Step Word Problems With All Four Operations",
                    commonCore: [
                        "3.OA.D.8",
                        "4.OA.A.3",
                        "4.NBT.B.4",
                        "4.NBT.B.5",
                        "4.NBT.B.6",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "I will not let Gustav destroy this hive again. He may have taken everything from us once, but this time, we'll be ready. Take a look at my plans, and let me know what you think.",
                    complete: "The hive is stronger thanks to you. Now be on your guard! The storm is closer than it seems..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "queen-bella.png",
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
                                title: {
                                    text: "[<u>Panels]",
                                },
                                passage: {
                                    text: "To keep my precious nectar safe, I plan to build a huge honeycomb. This honeycomb will have 6 walls, with each wall needing 13 panels of wax. Luckily, I already have 64 panels in storage. How many more panels do I need?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "5%",
                                rotate: "-2deg",
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
                                    text: "[<u>Barrels of Honey]",
                                },
                                passage: {
                                    text: "In total, we have 300 barrels of honey. Luckily, we only need 248 barrels to make it through the storm. I plan to share the rest of the barrels equally among my 8 most loyal worker bees. Any remainder will be given to the prisoners \u2014 they haven't eaten in a long while.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "6%",
                                rotate: "-4deg",
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
                                    text: "[<u>Guards]",
                                },
                                passage: {
                                    text: "I will place one guard at each of the hive's 4 entrances. Each guard will serve for 30 hours. All together, how many hours will these guards serve?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-5%",
                                rotate: "2deg",
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
                                    text: "[<u>Teams]",
                                },
                                passage: {
                                    text: "Team Drone needs to collect 235,475 units of nectar in the first hour, and twice that amount in the second hour. 15,600 units will get spilled. \
                                    <br> \
                                    <br> \
                                    Team Necta must gather a total of 315,600 units of nectar over both hours. They'll lose 78,900 units due to strong winds.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "0%",
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
                                width: "percent75",
                                height: "auto",
                            }
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
                        'A. Which team will gather more units of nectar: [<u>Drone] or [<u>Necta]?',
                        'B. How many barrels of honey will remain for the prisoners?',
                        'C. Which word problem has an answer of 14: [<u>Guards] or [<u>Panels]?',     
                        'D. Which word problem has an answer of 120?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(C)P","0"],
                        ["0","0","0","0","0","A","0"],
                        ["0","0","0","(B)F","0","N","0"],
                        ["0","(A)D","R","O","N","4E","0"],
                        ["0","0","0","U","0","3L","0"],
                        ["(D)G","2U","A","1R","D","S","0"],
                    ]
                },  
                code: {
                    answer: "RULE",
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