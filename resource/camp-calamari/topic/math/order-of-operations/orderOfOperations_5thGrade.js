const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/math/order-of-operations/preview-5th-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    challengeArray: [

        // ⭐ broken animatronic
        {

            info: {
                type: 'challenge',
                title: "Junk Pile",
                asset: "melodina.png",
                state: "incomplete",
                hint: {
                    text: "Solve each problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Computation With All Four Operations",
                    commonCore: [
                        "5.OA.A.1",
                        "5.NBT.B.5",
                        "5.NBT.B.6",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "Oh, I know how to defeat those pirates! I'll sing a haunting tune to lure them to their doom. I just need to fix my voice box first. Can you help me figure out how many parts I need?",
                    complete: "Oh my, you did it! I can't wait to start singing once again. Just remember to cover your ears."
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
                            text: "A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "5 × (3+2) = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "2%",
                                rotate: "-1deg",
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
                                    text: "6×4 - (8÷2) = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "1%",
                                rotate: "2deg",
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
                                    text: "(22×2) - 22 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "0%",
                                rotate: "-1deg",
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
                                    text: "35 + (20-5) = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "1%",
                                rotate: "1deg",
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
                                    text: "(22+10) ÷ 2 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "-2deg",
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
                                    text: "(30-5) × 1 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>A] = Gears needed<br> \
                                            [<s>D] = Bolts needed<br> \
                                            [<s>I] = Batteries needed",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>C] = Capacitors needed<br> \
                                            [<s>H] = Fuses needed<br> \
                                            [<s>L] = Transistors needed",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "15%",
                                rotate: "3deg",
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
                        title: "[<g>1.] How many capacitors are needed?",
                        correctIndex: 2,
                        paragraph: [
                            "18 capaci{t}ors",
                            "19 {c}apacitors",
                            "20 ca{p}acitors",
                        ],
                    },
                    {
                        title: "[<g>2.] There are 16 _____ needed.",
                        correctIndex: 1,
                        paragraph: [
                            "Tra{n}sistors",
                            "B{a}tteries",
                            "{F}uses",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of the following parts does the Broken Animatronic need the greatest number of?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Fu{s}es",
                            "{B}olts",
                            "Bat{t}eries",
                            "{G}ears",
                        ],
                    },
                    {
                        title: "[<g>4.] Which two parts have the same quantity?",
                        correctIndex: 1,
                        paragraph: [
                            "Capacitors a{n}d bolts",
                            "Gears and {t}ransistors",
                            "Batteri{e}s and transistors",
                        ],
                    },
                ],  
                code: {
                    answer: "PAST",
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
                    text: "Solve each problem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Equations With Exponents",
                    commonCore: [
                        "5.OA.A.1",
                        "5.NBT.A.2",
                        "5.NBT.B.5",
                        "5.NBT.B.6",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "We're outta potatoes, so I mashed some fish \u2014 and blimey, it reeks like an ogre's underwear! A big batch might scare off the pirates, though. Will ye help me scale up the recipe?",
                    complete: "Bless yer soul, matey! This slop's so rancid, even the seagulls be refusin' a bite."
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
                            text: "Pounds of [<u>Grease]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "3<sup>4</sup> + 50 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "-60%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Salt]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6<sup>2</sup> ÷ (3+3) = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "30%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Fish]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(7<sup>2</sup>+5) × 4 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "60%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Spice]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "(5+3)<sup>2</sup> - 4 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "40%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Sludge]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "5 × 4<sup>3</sup> - 20 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-25%",
                                translateY: "70%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Eggs]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "2<sup>3</sup> + 5 = ?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "60%",
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
                        'A. Which weighs 216 pounds: [<u>salt], [<u>fish], or [<u>eggs]?',
                        'B. Is there less [<u>grease] or [<u>sludge]?',
                        'C. Which ingredient weighs 13 pounds?',     
                        'D. Which ingredient weighs the most?',                    
                    ],
                    puzzle: [
                        ["(A)F","0","0","0","0","0","0"],
                        ["2I","0","0","0","0","0","0"],
                        ["(D)S","L","U","1D","G","(C)E","0"],
                        ["H","0","0","0","0","G","0"],
                        ["0","0","0","0","0","G","0"],
                        ["0","(B)G","3R","E","A","S","4E"],
                    ]
                },  
                code: {
                    answer: "DIRE",
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
                    topic: "Equations With Decimals",
                    commonCore: [
                        "5.OA.A.1",
                        "5.NBT.A.1",
                        "5.NBT.A.3",
                        "5.NBT.A.3a",
                        "5.NBT.A.3b",
                        "5.NBT.B.7",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "I gave every counselor a magic mirror to stay connected, but fate is cruel... I dropped mine, and it shattered! I can't let the others know I was so careless. Think you can put it back together?",
                    complete: "With my mirror restored, no one shall ever know of my… unfortunate mishap. Thank you, truly."
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
                                    text: "4.5 + 2.1 × 2",
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
                                    text: "(4.2 - 1.2) ÷ 1.5",
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
                                    text: "2.5 × 100 + 1.8",
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
                                    text: "5.1 - 2.4 + 3.6",
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
                                    text: "10.2 - (3.6 + 1.2)",
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
                                    text: "(6.5 + 2.5) × 0.5",
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
                                    text: "7.2 ÷ (2.4 - 0.8)",
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
                                    text: "(8.4 − 4.2) + 2.5",
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
                                    text: "3.3 + 1.2 × 4.5",
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
                        title: "[<g>1.] Find the answer to the piece with the red sun.",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "6.5 {L}",
                            "6.3 {M}",
                            "6.7 {A}",
                        ],
                    },
                    {
                        title: "[<g>2.] Which piece has the largest answer?",
                        correctIndex: 1,
                        paragraph: [
                            "The {c}enter",
                            "The top r{i}ght",
                            "The top l{e}ft",
                        ],
                    },
                    {
                        title: "[<g>3.] Solve two pieces: the one with the red moon, and the one on the bottom left. Do both equal 4.5?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Ye{s}",
                            "N{o}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which piece has an answer > 5 but < 6 ?",
                        correctIndex: 2,
                        paragraph: [
                            "The botto{m} left",
                            "The {b}ottom right",
                            "The cen{t}er",
                        ],
                    },
                ],  
                code: {
                    answer: "MIST",
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
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Word Problems With All Four Operations",
                    commonCore: [
                        "5.OA.A.1",
                        "5.OA.A.2",
                        "5.NBT.B.5",
                        "5.NBT.B.6",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "I've been setting up traps to keep the pirates off the beach, and I want to be extra sure everything checks out. It's just a lot of numbers, and I could use a second set of eyes. Mind taking a look?",
                    complete: "Appreciate it, mate! If the pirates come sneaking around, they'll be in for a real surprise."
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
                                    text: "[<u>Trip Traps]",
                                },
                                passage: {
                                    text: "I've been scattering a bunch of driftwood “trip traps” across the sand to trip any sneaky pirates. Last week, I placed 5 traps, then added 10 more yesterday. I placed 7 more traps this morning \u2014 but later, I had to remove 3 that were too rotten to use. How many trip traps are left on the beach?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "0%",
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
                                title: {
                                    text: "[<u>Sticky Barrels]",
                                },
                                passage: {
                                    text: "For my sticky barrel traps, I thought about building 20 barrels. Instead, I built triple that number to make sure we had enough. After that, believe it or not, I found 271 more barrels on the beach, washed up from an old shipwreck!",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "0deg",
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
                                    text: "[<u>Cliff Traps]",
                                },
                                passage: {
                                    text: "I collected 100 rocks to roll down the cliffs and block the pirates' path. But after testing, I had to remove 10 small rocks that wouldn't roll properly. Then, I took away 14 more that were too heavy. Now, I need to split the remaining rocks evenly between two cliffs.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "-10%",
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
                        title: "[<g>1.] Which equation can be used to solve “Trip Traps?”",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "5 x 10 + 7 - 3 = ___ {Z}",
                            "5 + 10 + 7 + 3 = ___ {P}",
                            "5 + 10 + 7 - 3 = ___ {L}",
                        ],
                    },
                    {
                        title: "[<g>2.] How many barrels does Driftwood Dan have now?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "291 {E}",
                            "294 {R}",
                            "331 {U}",
                        ],
                    },
                    {
                        title: "[<g>3.] How many rocks will each cliff get?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "38 {R}",
                            "76 {X}",
                            "114 {S}",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: If the rocks were split evenly between four cliffs, each cliff would get 18 rocks.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tr{u}e",
                            "Fals{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "LURE",
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