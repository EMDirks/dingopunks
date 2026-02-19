const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/math/fractions/preview-5th-grade.png",
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
                    text: "Solve each problem, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Fractions and Mixed Numbers With Unlike Denominators",
                    commonCore: [
                        "5.NF.A.1",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "The camp's fence is in bad shape, so I'm patching it up with planks of wood. It needs to be sturdy to keep the pirates out! Think you can help me with some calculations? Math's not my thing.",
                    complete: "Thanks a ton, friend! I really hope we can win this thing."
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
                            text: "Planks Needed for the North Wall",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4 1/2 + 1 3/4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "20%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the East Wall",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/3 + 5/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the South Wall",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/8 + 1/4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "30%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the West Wall",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 1/5 - 2 4/8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "25%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the Main Gate",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/3 - 2/10",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the Side Gate",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/5 - 1/3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "30%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Planks Needed for the Watchtower",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/4 - 3/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many planks are needed for the watchtower?",
                        correctIndex: 2,
                        paragraph: [
                            "2 [<f>1/4] p{l}anks",
                            "[<f>2/3] of a pla{n}k",
                            "[<f>1/4] of a {p}lank",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of the camp's four walls requires the most planks?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "The n{o}rth wall",
                            "The eas{t} wall",
                            "Th{e} south wall",
                            "The we{s}t wall",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: The east wall needs fewer planks than the south wall.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>4.] Which of the following needs [<f>7/15] of a plank?",
                        correctIndex: 1,
                        paragraph: [
                            "The si{d}e gate",
                            "{T}he main gate",
                            "The wat{c}htower",
                        ],
                    },
                ],  
                code: {
                    answer: "POST",
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
                    text: "Solve each problem, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiply Fractions and Whole Numbers",
                    commonCore: [
                        "5.NF.B.4",
                        "5.NF.B.4a",
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "The Red Tide be closin' in, and this camp's weaker than a soggy biscuit! I'm takin' matters into me own hands, and settin' sail to face 'em head-on. Can ye help me count some supplies?",
                    complete: "Much obliged, matey! When this all blows over, ye'd make a fine addition to me crew!"
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
                            text: "Number of [<u>Cannons]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8/4 × 4",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "-2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Number of [<u>Buckets]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "10 × 4/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Yards of [<u>Rope]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7/3 × 6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "1%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Nails]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1 × 5/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "-2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Mainsail] Fix",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "All of the ship's 9 mainsails are damaged. To fix them, each mainsail needs a small patch of wool [<f>1/3] of a yard long."
                                }
                            }
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
                            text: "[<u>Headsail] Fix",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "The ship's three headsails are also damaged. To fix them, each headsail needs a small patch of wool half a yard long."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
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
                                translateX: "-10%",
                                translateY: "4%",
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
                        title: "[<g>1.] There are an equal number of cannons and _____ .",
                        word: "[B]UCKETS",
                    },
                    {
                        title: "[<g>2.] How many yards of rope are there?",
                        word: "FOURTE[E]N",
                    },
                    {
                        title: "[<g>3.] Which item has the smallest product?",
                        word: "N[A]ILS",
                    },
                    {
                        title: "[<g>4.] Which fix needs more wool: [<u>mainsail] or [<u>headsail]?",
                        word: "[M]AINSAIL",
                    },
                ],
                code: {
                    answer: "BEAM",
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
                    topic: "Divide Unit Fractions and Whole Numbers",
                    commonCore: [
                        "5.NF.B.7",
                        "5.NF.B.7a",
                        "5.NF.B.7b",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "Oh, the fates are cruel... I shattered my crystal mirror this morning. Without it, I am unable to glimpse the pirates' plans. Please, help me fix it! We haven't much time.",
                    complete: "Thank you, dear traveler. With my mirror restored, victory is within sight."
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
                                    text: "3 ÷ 1/4",
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
                                    text: "1/3 ÷ 4",
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
                                    text: "1/8 ÷ 3",
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
                                    text: "3 ÷ 1/6",
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
                                    text: "1 ÷ 1/9",
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
                                    text: "4 ÷ 1/5",
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
                                    text: "1/9 ÷ 3",
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
                                    text: "1/7 ÷ 2",
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
                                    text: "1/2 ÷ 6",
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
                        'A. Does the piece with the [<u>sun] or the [<u>moon] have a greater quotient?',
                        'B. Look at the three pieces in the bottom row. Which one has an answer of [<f>1/14]: the [<u>left], [<u>middle], or [<u>right]?',
                        'C. What is the answer to the top left piece?',     
                        'D. What is the answer to the center piece?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(C)T","0"],
                        ["(A)1M","O","O","N","0","W","0"],
                        ["0","0","0","0","0","E","0"],
                        ["(D)N","I","N","2E","0","3L","0"],
                        ["0","0","0","0","0","V","0"],
                        ["(B)M","I","D","4D","L","E","0"],
                    ]
                },  
                code: {
                    answer: "MELD",
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
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fraction Word Problems With All Four Operations",
                    commonCore: [
                        "5.NF.A.1",
                        "5.NF.A.2",
                        "5.NF.B.3",
                        "5.NF.B.4",
                        "5.NF.B.4a",
                        "5.NF.B.7",
                        "5.NF.B.7c",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "The sea creatures are my allies, and they'll help us defend the shore \u2014 but only if I feed 'em right. So, I need ya to look over these recipes and make sure they ain't nonsense. Now get to work!",
                    complete: "Right on, laddie! You didn't mess it all up, but don't let it get your head."
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
                                image: {
                                    file: "8.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "[<u>Glowseeds]<br><br>Seagulls love glowseeds, and they're easy to make. Just mix sunflower seeds with hex dust! And remember, hex dust comes in two types: pixie dust and goblin dust. For this recipe, we'll need [<f>1/6] of a pound of pixie dust and 1 [<f>2/4] pounds of goblin dust.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
                                rotate: "-3deg",
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
                                    text: "[<u>Fish Sludge]<br><br>We must prepare some fish sludge for our dolphin friends. To make this delicacy, simply fill three-fourths of a barrel with old stinky fish. Let it sit out in the sun for a few days until one-fourth of it rots away. Then, serve up what's left.",
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
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "7.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "[<u>Chunks of Mystery Meat]<br><br>The sharks aren't picky eaters, all they need are chunks of mystery meat. We have half a bin of mystery meat left, which must be split evenly among 4 sharks.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "9.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "[<u>Cheesy Potatoes]<br><br>Believe it or not, crabs love cheesy potatoes. Each crab needs [<f>1/8] of a cheesy potato, and there are 80 crabs to feed.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
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
                        title: "[<g>1.] How much hex dust is needed for the glowseeds?",
                        correctIndex: 2,
                        paragraph: [
                            "1 [<f>1/2] pou{n}ds",
                            "1 [<f>3/4] {p}ounds",
                            "1 [<f>2/3] pound{s}",
                        ],
                    },
                    {
                        title: "[<g>2.] How many cheesy potatoes are needed to feed all the crabs?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "64 cheesy p{o}tatoes",
                            "10 cheesy pota{t}oes",
                            "640 cheesy potato{e}s",
                            "8 cheesy {p}otatoes",
                        ],
                    },
                    {
                        title: "[<g>3.] How much mystery meat will each shark get?",
                        correctIndex: 1,
                        paragraph: [
                            "[<f>1/2] of a {b}in",
                            "[<f>1/8] of a b{i}n",
                            "[<f>1/4] of a bi{n}",
                        ],
                    },
                    {
                        title: "[<g>4.] How much fish sludge will be left to serve up?",
                        correctIndex: 0,
                        paragraph: [
                            "[<f>1/2] of a ba{r}rel",
                            "[<f>1/4] of a barr{e}l",
                            "1 ful{l} barrel",
                        ],
                    },
                ],  
                code: {
                    answer: "STIR",
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