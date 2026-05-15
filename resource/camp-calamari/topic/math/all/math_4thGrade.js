const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/math/all/thumbnail-4th-grade.png",
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
                    text: "Solve each problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Place Value and Rounding",
                    commonCore: [
                        "4.NBT.A.1",
                        "4.NBT.A.2",
                        "4.NBT.A.3",
                        "4.NBT.B.4",
                        "4.NBT.B.5",
                        "4.NBT.B.6",
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Aye, I'm a pirate \u2014 but one o' the good ones! I'm gatherin' a crew to set sail and stop the Red Tide, but our supplies are in code to fool spies. Can I count on ye to crack these numbers?",
                    complete: "Thanks, matey! If yer ever lookin' for a job, come find ol' Fishbeard. I'll save ye a spot on me crew."
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
                            text: "A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "7 ×︎ 254 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "1%",
                                rotate: "2deg",
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
                                    text: "2,400 ÷︎ 8 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-1%",
                                rotate: "0deg",
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
                                    text: "504 × 3 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-10%",
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
                                    text: "30,000 - 19,672 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "5%",
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
                                passage: {
                                    text: "62 ×︎ 28 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-1%",
                                rotate: "0deg",
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
                                    text: "309 ÷︎ 3 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>A] = Nails<br> \
                                            [<s>D] = Extra Ropes<br> \
                                            [<s>I] = Food Crates",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "12%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>C] = Doubloons<br> \
                                            [<s>H] = Fish Heads<br> \
                                            [<s>L] = Medicine Kits",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
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
                    ]
                },
            },

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] When rounded to the nearest 10, which of these items has the smallest answer?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "Extra rop{e}s",
                            "F{i}sh heads",
                            "Doubloo{n}s",
                            "{M}edicine kits",
                        ],
                    },
                    {
                        title: "[<g>2.] When rounded to the nearest hundred, which of these items rounds to 1,700?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Food cr{a}tes",
                            "Nai{l}s",
                            "Fis{h} heads",
                            "Dou{b}loons",
                        ],
                    },
                    {
                        title: "[<g>3.] How many nails are there? Round your answer to the nearest 1000.",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "1,700 n{a}ils",
                            "1,778 {n}ails",
                            "2,000 nail{s}",
                            "1,800 nai{l}s",
                        ],
                    },
                    {
                        title: "[<g>4.] [<i>Estimate] the product of the extra ropes.",
                        correctIndex: 1,
                        paragraph: [
                            "1,000 extra ro{p}es",
                            "1,500 ex{t}ra ropes",
                            "2,000 {e}xtra ropes",
                        ],
                    },
                ],  
                code: {
                    answer: "MAST",
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
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Step Word Problems With All Four Operations",
                    commonCore: [
                        "4.OA.A.1",
                        "4.OA.A.2",
                        "4.OA.A.3",
                        "4.NF.B.3c",
                        "4.NF.B.3d",
                        "4.NBT.B.4",
                        "4.NBT.B.5",
                        "4.NBT.B.6",
                        "4.MD.A.2",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "The camp needs me to keep their bellies full so they can fight off the pirates, but these blasted recipes make no sense! Math's never been my thing. Think you can help me?",
                    complete: "Thanks to you, the camp's ready to feast! What do you say \u2014 ready for a bowl of stew?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "chef-gumbo.png",
                },
                blockArray: [                 
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>Batches of Biscuits]: A small batch contains 10 biscuits, and takes 15 minutes to bake. A large batch contains 20 biscuits, and takes twice as long as a small batch to bake.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "20%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {           
                                passage: {
                                    text: "[<u>Energy-Boosting Pancakes]: These special pancakes pack a punch! Each one needs the perfect mixture of flour. This mix contains [<f>1/5] white flour and [<f>2/5] wheat flour. The rest is Dr. Zeeb's Power Flour.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "10%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>Roasted Veggie Wraps]: To make one wrap, place 3 handfuls of roasted veggies on a piece of flatbread. There are 20 handfuls of roasted veggies in the fridge, and another 12 handfuls of roasted veggies under the sink. We have 54 flatbreads in the pantry.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "10%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>Sea Goo Stew]: This stuff is gross, but quite healthy! To make it, put exactly 81 liters of fresh sea goo into a pot. 7 liters will boil away, and 22 liters will bubble over and spill onto the floor. What's left in the pot is ready to serve!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "0%",
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
                            width: "percent60",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many minutes will it take to cook both a small batch and a large batch of biscuits?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "45 {m}inutes",
                            "75 minu{t}es",
                            "15 mi{n}utes",
                            "50 minute{s}",
                        ],
                    },
                    {
                        title: "[<g>2.] Dr. Zeeb's Power Flour makes up what fraction of the energy-boosting pancake mix?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "[<f>3/5] {P}",
                            "[<f>5/5] {Z}",
                            "[<f>1/5] {W}",
                            "[<f>2/5] {E}",
                        ],
                    },
                    {
                        title: "[<g>3.] How many [<i>complete] roasted veggie wraps can be made?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "54 complete wrap{s}",
                            "10 complete wr{a}ps",
                            "11 complete {w}raps",
                            "35 complete w{r}aps",
                        ],
                    },
                    {
                        title: "[<g>4.] How much sea goo will be left in the pot?",
                        correctIndex: 1,
                        paragraph: [
                            "110 lit{e}rs",
                            "52 {l}iters",
                            "66 lite{r}s",
                        ],
                    },
                ],  
                code: {
                    answer: "MEAL",
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
                    text: "Look at each figure and word problem, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Area and Perimeter",
                    commonCore: [
                        "4.MD.A.1",
                        "4.MD.A.2",
                        "4.MD.A.3",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "I need to search the different zones of this junk pile for things we can use to fight the pirates. But first, we should figure out the size of the job. Think you can lend a hand?",
                    complete: "Thank you! It seems all that thinking loosened up my gears \u2014 maybe I'm not as broken as I thought."
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
                            text: "[<u>Scrapway] Zone",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "cc2_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-30%",
                                translateY: "70%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Radiation] Zone",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The Radiation Zone is a rectangular section of the junk pile with a length of 10 feet, and a perimeter of 36 feet. Don't search through it without the proper safety equipment."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-25%",
                                translateY: "35%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Rustbelt] Zone",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 9,
                                        height: 1,
                                    },
                                    label: {
                                        top: "20 feet",
                                        left: "24 in.",  
                                        right: "offset"                               
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-25%",
                                translateY: "10%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Wreckage] Zone",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The Wreckage Zone contains pieces of old ships. Its area is 90 yards<sup>2</sup>, and its length is 9 yards."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "120%",
                                translateY: "-4%",
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
                                translateX: "-2%",
                                translateY: "-7%",
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
                                height: "auto",
                            },
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
                        title: "[<g>1.] Which zone has a width of 10 yards?",
                        word: "[W]RECKAGE",
                    },
                    {
                        title: "[<g>2.] The Radiation Zone is _____ feet wide.",
                        word: "E[I]GHT",
                    },
                    {
                        title: "[<g>3.] Which zone has the smallest area?",
                        word: "[R]USTBELT",
                    },
                    {
                        title: "[<g>4.] The area of the Scrapway Zone is one ______ ft<sup>2</sup>.",
                        word: "HUNDR[E]D",
                    },
                ],
                code: {
                    answer: "WIRE",
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
                    text: "Put together the puzzle pieces, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions and Mixed Numbers with Addition, Subtraction, & Multiplication",
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
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "Greetings, young one! A Red Tide witch shattered my magic mirror, leaving me blind to the pirates' wicked plans. Are you clever enough to put the pieces back together?",
                    complete: "Thank you for your help, seeker. If we stick together, I am certain we can defeat the Red Tide."
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
                                fraction: {
                                    text: "3/6 + 5/6",
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
                                fraction: {
                                    text: "6 3/4 - 2 3/4",
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
                                fraction: {
                                    text: "2/7 + 3/7",
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
                                fraction: {
                                    text: "9/5 - 5/5",
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
                                fraction: {
                                    text: "8 × 3/4",
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
                                fraction: {
                                    text: "1/4 × 4",
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
                                fraction: {
                                    text: "2 1/3 + 4 2/3",
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
                                fraction: {
                                    text: "10/8 + 12/8",
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
                                fraction: {
                                    text: "7 2/5 - 6 2/5",
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'large',
                                    fraction: 'medium'
                                },
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Does the piece with the [<u>sun] or the [<u>moon] have an answer of [<f>4/5]?',
                        'B. Solve the top right piece. Is the answer\'s numerator [<u>four], [<u>five], or [<u>nine]?',
                        'C. In the simplest form, is the answer to the center piece a [<u>whole] number or a [<u>mixed] number?',     
                        'D. Which piece on the bottom row has the smallest answer: [<u>left], [<u>middle], or [<u>right]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","(A)3S"],
                        ["0","0","0","(C)1W","0","0","U"],
                        ["(D)R","2I","G","4H","T","0","N"],
                        ["0","0","0","O","0","0","0"],
                        ["0","0","0","L","0","0","0"],
                        ["(B)F","I","V","E","0","0","0"],
                    ]
                },  
                code: {
                    answer: "WISH",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ driftwood dan
        {

            info: {
                type: 'challenge',
                title: "Driftwood Beach",
                asset: "driftwood-dan.png",
                state: "incomplete",
                hint: {
                    text: "Sort each picture into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
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
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "Hey there! I'm in charge of building driftwood fences all around camp. I've drawn up some plans \u2014 just lines and angles, really. Can you take a quick look and tell me if they'll hold up? ",
                    complete: "Thanks a ton, friend. I owe you one. Maybe I'll name a piece of driftwood after you!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Lines, Segments, & Rays",
                        "Angles",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [                 
                    {
                        tag: {
                            text: "Boathouse Fence",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "segment-1.svg",
                                },
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Greenhouse Fence",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "right-2.svg",
                                },
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Fire Pit Fence",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "ray-3.svg",
                                },
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Trailhead Fence",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "straight-1.svg",
                                },
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Beach Fence",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "ray-1.svg",
                                },
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Campsite Fence",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "angle",
                                    file: "acute-1.svg",
                                },
                            },
                        ],
                        correctIndex: 1
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
                            justifyContent: "center",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
                            dimension: {
                                width: "percent55",
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
                        title: "[<g>1.] How many rays are there?",
                        correctIndex: 1,
                        paragraph: [
                            "O{n}e",
                            "T{w}o",
                            "{T}hree",
                        ],
                    },
                    {
                        title: "[<g>2.] The campsite fence is a(n):",
                        correctIndex: 0,
                        paragraph: [
                            "Acute {a}ngle",
                            "Rig{h}t Angle",
                            "Obt{u}se Angle",
                        ],
                    },
                    {
                        title: "[<g>3.] Which fence is a straight angle?",
                        correctIndex: 2,
                        paragraph: [
                            "The {b}oathouse fence",
                            "The fire pit {f}ence",
                            "The trailhea{d} fence",
                        ],
                    },
                    {
                        title: "[<g>4.] In all, how many fences should be sorted into the \"angles\" column?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "O{n}e",
                            "{T}wo",
                            "Thre{e}",
                            "F{o}ur",
                        ],
                    },
                ],  
                code: {
                    answer: "WADE",
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
        
    ]

}