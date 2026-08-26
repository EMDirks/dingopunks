const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/math/all/thumbnail-5th-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    challengeArray: [

        // ⭐ captain fishbeard
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Ship",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Step Word Problems With All Four Operations",
                    commonCore: [
                        "5.OA.A.1",
                        "5.OA.A.2",
                        "5.NBT.B.5",
                        "5.NBT.B.6",
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "The Red Tide be stirrin' on the horizon! I've left me pirate ways behind and started doin' good \u2014 but I'll never turn away from a fight. Ready to help me count and plan, matey?",
                    complete: "Ye've done me good. I hear that ol' animatronic knows where the treasure lies..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "fishbeard.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "3.png",
                                },
                            },
                            {
                                passage: {
                                    text: "Captain Fishbeard has been collecting wooden planks to fix up his ship. He has 18 piles of planks, with 325 planks in each pile. He needs 6,500 planks to completely repair his ship.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-5%",
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
                                passage: {
                                    text: "This morning, there was 2,760 feet of rope in storage. Captain Fishbeard planned to use it to reinforce the dock's beams; each beam requiring 45 feet. However, Driftwood Dan took 200 feet for his own uses.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-2%",
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
                                passage: {
                                    text: "Captain Fishbeard wants to build some traps to slow down the pirates. First, he'll build 5 net traps, each costing $35. Then, he'll build 4 spike traps, each costing $50.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "-1deg",
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
                                passage: {
                                    text: "Captain Fishbeard received a shipment of 5 barrels of honey, with each barrel holding 100 servings. He also has 2 smaller barrels hidden in the woods, each with 50 servings. There are currently 12 people at Camp Calamari, and each person needs 5 servings of honey per week. ",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "3%",
                                rotate: "2deg",
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
                        title: "[<g>1.] To completely repair his ship, how many more planks does Captain Fishbeard need?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "650 {m}ore planks",
                            "5,850 m{o}re planks",
                            "3,575 more plank{s}",
                            "0 mo{r}e planks",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the maximum number of beams that Fishbeard can reinforce?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "57 b{e}ams",
                            "61 {b}eams",
                            "56 be{a}ms",
                            "50 be{a}ms",
                        ],
                    },
                    {
                        title: "[<g>3.] Which equation represents the cost of the traps?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "(5 + 4) × (35 + 50) = $765 {S}",
                            "5 × (35 + 4 × 50) = $1,175 {F}",
                            "(5 × 35) + (4 × 50) = $375 {T}",
                        ],
                    },
                    {
                        title: "[<g>4.] How many weeks will the honey last?",
                        correctIndex: 2,
                        paragraph: [
                            "8 wee{k}s",
                            "50 week{s}",
                            "10 we{e}ks",
                        ],
                    },
                ],  
                code: {
                    answer: "MATE",
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
                    text: "Find the volume of each figure, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Volume",
                    commonCore: [
                        "5.MD.A.1",
                        "5.MD.C.3",
                        "5.MD.C.5",
                        "5.MD.C.5a",
                        "5.MD.C.5b",
                        "5.MD.C.5c",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "Oh, I know what I can do! I can build some traps to stop the pirates! Problem is, my circuits aren't working very well. These dimensions might be too hard to calculate... unless you can help?",
                    complete: "Oh, thank you! Not that I know where the treasure is... but who'd check a junk pile?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "melodina.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "[<u>Clamp] Dimensions",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "cc3_1.png",
                                },
                            },
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
                        tag: {
                            text: "[<u>Spike] Dimensions",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The spike trap is 48 inches long, 36 inches wide, and 12 inches high.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Pitfall] Dimensions",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The pitfall trap is a hole shaped like a rectangular prism. It's 5 feet long, 5 feet wide, and 25 feet deep.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "7%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Tangler] Dimensions",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "cc3_2.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Snare] Dimensions",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "cc3_3.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "7%",
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
                            width: "percent25",
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
                                size: 'small',
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which trap has a smaller volume: [<u>clamp] or [<u>spike]?',
                        'B. Is the tangler\'s volume [<u>more] or [<u>less] than five hundred cubic feet?',
                        'C. Which trap has a volume of 625 ft<sup>3</sup> ?',     
                        'D. The volume of the _____ trap is one hundred eleven cubic feet.',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","(D)S","0","0"],
                        ["(A)S","0","0","0","N","0","0"],
                        ["(C)4P","I","1T","F","3A","L","(B)L"],
                        ["I","0","0","0","2R","0","E"],
                        ["K","0","0","0","E","0","S"],
                        ["E","0","0","0","0","0","S"],
                    ]
                },  
                code: {
                    answer: "TRAP",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ chef gumbo
        {

            info: {
                type: 'challenge',
                title: "Dining Hall",
                asset: "chef-gumbo.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Decimal Computation With All Four Operations",
                    commonCore: [
                        "5.NBT.A.1",
                        "5.NBT.A.3",
                        "5.NBT.A.3a",
                        "5.NBT.A.3b",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "Disaster in the dining hall, matey! Me cutting board's been smashed to bits, and without it, I can't whip up the grub this camp needs to stay strong! Will ye lend me a hand fixin' it?",
                    complete: "Yer smarter than ye look, lad. With you in tow, those Red Tide scallywags don't stand a chance!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "chef-gumbo-2.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Oz. of Potatoes:<br>22.68 x 9.4",
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
                                    text: "Oz. of Trout:<br>18.74 + 7.891",
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
                                    text: "Oz. of Carrots:<br>4.1 + 6.05",
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
                                    text: "Oz. of Rosemary:<br>2.40 oz ÷ 4 oz",
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
                                    text: "Oz. of Salt:<br>8 x 0.125",
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
                                    text: "Oz. of Broth:<br>16 - 5.62",
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
                                    text: "Oz. of Oil:<br>3 ÷ 0.25",
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
                                    text: "Oz. of Corn Meal:<br>2.57 x 3.5",
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
                                    text: "Oz. of Coffee:<br>7.16 + 8.84",
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
                        title: "[<g>1.] Which of these ingredients weighs the least?",
                        correctIndex: 1,
                        paragraph: [
                            "Corn mea{l}",
                            "Rose{m}ary",
                            "Ca{r}rots",
                        ],
                    },
                    {
                        title: "[<g>2.] Look at the ingredients on the two fully-metal pieces. What is the difference in their weight?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "6.72 {o}unces",
                            "5.62 ounc{e}s",
                            "6.62 o{u}nces",
                            "5.52 ou{n}ces",
                        ],
                    },
                    {
                        title: "[<g>3.] Look at the piece in the top left corner. Round its weight to the nearest hundredth of an ounce.",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "213.192 oz. {L}",
                            "213.18 oz. {T}",
                            "213.20 oz. {E}",
                            "213.19 oz. {A}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which piece is equal to one pound (16 oz.) ?",
                        correctIndex: 0,
                        paragraph: [
                            "The bo{t}tom right piece",
                            "The center pi{e}ce",
                            "The {b}ottom left piece",
                        ],
                    },
                ],  
                code: {
                    answer: "MEAT",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ driftwood dan
        {

            info: {
                type: 'challenge',
                title: "Driftwood Beach",
                asset: "driftwood-dan.png",
                state: "incomplete",
                hint: {
                    text: "Look at each problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fraction and Mixed Number Computation With All Four Operations",
                    commonCore: [
                        "5.NF.A.1",
                        "5.NF.A.2",
                        "5.NF.B.3",
                        "5.NF.B.4",
                        "5.NF.B.6",
                        "5.NF.B.7",
                        "5.NF.B.7a",
                        "5.NF.B.7b",
                        "5.NF.B.7c",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "Howdy! I'm building some wooden fences to keep those Red Tide Pirates out, but all the pieces have odd, fractional lengths. I'm just no good with this kind of stuff \u2014 think you can help?",
                    complete: "A piece of wood building a fence out of wood \u2014 that's me. Life's funny. Thanks for the help!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "driftwood-dan.png",
                },
                blockArray: [  
                    {
                        tag: {
                            text: "Planks Needed for the Dining Hall Fence",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 ÷ 1/2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-4%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the Waterfront Fence",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2 6/5 x 4/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-3%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the Harbor Fence",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8 1/3 - 5 4/8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "1%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the Boat House Fence",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/4 ÷ 4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-2%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the Cabin Fence",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "The cabin fence is already in great shape, it just needs a little reinforcement.<br><br>Driftwood Dan plans to use [<f>2/3] of a plank to reinforce the eastern part of the fence, and [<f>3/4] of a plank to reinforce the western part of the fence."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-16%",
                                translateY: "15%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the Inspirational Sculpture",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Driftwood Dan doesn't just want to make fences, he also wants to build a sculpture to inspire the other counselors.<br><br>He'll start with a piece of wood that is [<f>5/6] of a full plank. He plans to use half of it to build his sculpture, and will discard the rest."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-14%",
                                translateY: "0%",
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
                            width: "percent40",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'mediumSmall'
                                },
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
                        title: "[<g>1.] Which fence has an answer of 12?",
                        correctIndex: 0,
                        paragraph: [
                            "The dining hal{l} fence",
                            "The {w}aterfront fence",
                            "The boat house {f}ence",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these fences requires fewer planks?",
                        correctIndex: 1,
                        paragraph: [
                            "The dining hall fen{c}e",
                            "The harb{o}r fence",
                            "Bot{h} require the same number of planks",
                        ],
                    },
                    {
                        title: "[<g>3.] What fraction of a full plank will Driftwood Dan use to build his inspirational sculpture?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "[<f>5/24] {L}",
                            "[<f>5/18] {K}",
                            "[<f>5/36] {D}",
                            "[<f>5/12] {G}",
                        ],
                    },
                    {
                        title: "[<g>4.] How many planks are needed for the cabin fence?",
                        correctIndex: 2,
                        paragraph: [
                            "1 [<f>2/3] plan{k}s",
                            "1 [<f>1/4]  pl{a}nks",
                            "1 [<f>5/12] plank{s}",
                        ],
                    },
                ],  
                code: {
                    answer: "LOGS",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ madame mystica
        {

            info: {
                type: 'challenge',
                title: "Mystic Hideaway",
                asset: "madame-mystica.png",
                state: "incomplete",
                hint: {
                    text: "Look at the coordinate plane, then use the secret code to type in the answers below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Graph on a Coordinate Plane",
                    commonCore: [
                        "5.G.A.1",
                        "5.G.A.2",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "I've gazed into my orb and seen the pirates' fleet on the move! I've plotted the exact coordinates of four ships, but I need you to make sense of my findings. Will you take a look?",
                    complete: "Well done, Dingo Punks. Sometimes, what's been thrown away holds the greatest value..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "madame-mystica-2.png",
                },
                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                coordinatePlane: {
                                    key: [
                                        {
                                            color: 'salmon',
                                            image: '',
                                            text: 'BANSHEE',
                                            coordinate: [1,3]
                                        },
                                        {
                                            color: 'gold',
                                            image: '',
                                            text: 'PHANTOM',
                                            coordinate: [4,1]
                                        },
                                        {
                                            color: 'teal',
                                            image: '',
                                            text: 'BREAKER',
                                            coordinate: [6,7]
                                        },
                                        {
                                            color: 'blue',
                                            image: '',
                                            text: 'SEABORN',
                                            coordinate: [2,6]
                                        }
                                    ]
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
                                cryptogram: {
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
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
                            width: "percent50",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        
                    },
                    contentArray: [
                        {
                            key: {
                                font: 'patterns',
                                size: 'tiny',
                                align: 'left',
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
                            dimension: {
                                width: "full",
                                height: "full",
                            }
                            
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
                        title: "[<g>1.] Which ship is at (2,6)?",
                        word: "SEABO[R]N",
                    },
                    {
                        title: "[<g>2.] Which ship is at (4,1)?",
                        word: "PHANT[O]M",
                    },
                    {
                        title: "[<g>3.] Which ship is at (6,7)?",
                        word: "[B]REAKER",
                    },
                    {
                        title: "[<g>4.] Which ship is at (1,3)?",
                        word: "BANSHE[E]",
                    },
                ],
                code: {
                    answer: "ROBE",
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
