const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/math/fractions/preview-4th-grade.png",
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
                    text: "Look at each problem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Fractions With Like Denominators",
                    commonCore: [
                        "3.NF.A.3c",
                        "4.NF.A.2",
                        "4.NF.B.3",
                        "4.NF.B.3a",
                        "4.NF.B.3d",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "Hey there, I'm Basil. I finished collecting all these jars of nectar, but I'm just too scatterbrained to add everything up. I don't want to bees to think I'm a total disaster! Think you can help?",
                    complete: "Thanks for the help! Maybe now everyone will forget about the \"carrot incident.\""
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "basil-rabbit.png",
                },
                blockArray: [  
                    {
                        tag: {
                            text: "[<u>Clover] Nectar",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "11/4 + 7/4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "-12%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Jasmine] Nectar",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6/10 - 3/10",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "-2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Rose] Nectar",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/5 + 2/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "130%",
                                rotate: "11deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Ragwort] Nectar",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "12/8 - 5/8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "2%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Lily] Nectar",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/3 + 1/3",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "8%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Azalea] Nectar",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8/6 - 3/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-55%",
                                translateY: "150%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Verbena] Nectar",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The hive has one vat of verbena nectar, split equally into 8 compartments. On Monday, Basil filled up [<f>3/8] of the compartments with nectar. On Tuesday, he filled up [<f>2/8] more. How many compartments are still empty?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-70%",
                                translateY: "20%",
                                rotate: "-1deg",
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
                                size: 'small',
                                align: 'left'
                            },
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'mediumSmall'
                                },
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
                        'A. Which nectar equals a whole number: [<u>lily] or [<u>rose]?',
                        'B. Is there more [<u>ragwort] or [<u>azalea] nectar?',
                        'C. In the simplest form, which nectar has an answer of 4 [<f>1/2] ?',     
                        'D. Which nectar has an answer of [<f>3/8] ?',                    
                    ],
                    puzzle: [
                        ["(C)C","0","0","0","(A)R","0","0"],
                        ["L","0","0","0","3O","0","0"],
                        ["O","0","0","0","S","0","0"],
                        ["(D)V","E","2R","B","E","N","A"],
                        ["E","0","0","0","0","0","0"],
                        ["(B)R","A","1G","4W","O","R","T"],
                    ]
                },  
                code: {
                    answer: "GROW",
                    userArray: ["","","",""]
                },
            }            
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Add or subtract each set of mixed numbers, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Mixed Numbers With Like Denominators",
                    commonCore: [
                        "4.NF.A.2",
                        "4.NF.B.3c",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "Yeah, I'm the warehouse manager \u2014 not that I asked for this job. Anyway, a bunch of crates just arrived, and now I'm stuck adding everything up. You're here, so why don't you handle it?",
                    complete: "Thanks, I guess. And, uh... if you saw anything \"glowing\" in those crates, best to forget it."
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
                            text: "E",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2 1/4 + 1 2/4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "U",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 4/5 - 1 2/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "S",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4 2/6 + 2 4/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "-30%",
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
                                fraction: {
                                    text: "5 5/8 - 4/8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "0%",
                                rotate: "2deg",
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
                                    text: "6 8/10 + 4 3/10",
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
                        tag: {
                            text: "L",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7 3/7 - 3 6/7",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "3%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>E] = Jars of almonds<br> \
                                            [<s>S] = Crates of honeycombs<br> \
                                            [<s>I] = Units of wax",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "13%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>U] = Boxes of flowers<br> \
                                            [<s>C] = Bottles of resin<br> \
                                            [<s>L] = Bundles of scrolls",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "15%",
                                rotate: "-3deg",
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'large',
                                    fraction: 'medium'
                                },
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
                        title: "[<g>1.] How many bundles of scrolls are there?",
                        correctIndex: 1,
                        paragraph: [
                            "4 [<f>3/7] b{u}ndles",
                            "3 [<f>4/7] {b}undles",
                            "4 bundle{s}",
                        ],
                    },
                    {
                        title: "[<g>2.] How many units of wax are there?",
                        correctIndex: 2,
                        paragraph: [
                            "11 u{n}its",
                            "11 [<f>2/10] uni{t}s",
                            "11 [<f>1/10] un{i}ts",
                        ],
                    },
                    {
                        title: "[<g>3.] There are exactly 7 ______ .",
                        correctIndex: 0,
                        paragraph: [
                            "Crates of ho{n}eycombs",
                            "Boxes of flow{e}rs",
                            "Jars {o}f almonds",
                        ],
                    },
                    {
                        title: "[<g>4.] Which of these 3 items has the largest answer?",
                        correctIndex: 1,
                        paragraph: [
                            "Bun{d}les of scrolls",
                            "Jars of almond{s}",
                            "Boxes of flo{w}ers",
                        ],
                    },
                ],  
                code: {
                    answer: "BINS",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ sunny snap
        {
            info: {
                type: 'challenge',
                title: "Accounting Dept.",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare Fractions",
                    commonCore: [
                        "4.NF.A.1",
                        "4.NF.A.2",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "I'm SUPER busy, and the Queen just gave me this golden puzzle to solve \u2014 because I guess that's important right now. It's just busywork, and I don't have time. Can you handle it?",
                    complete: "Grumblegrub's up to something, right? I just don't trust him. You shouldn't either."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "sunny-snap.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/4 [<bn>&nbsp?&nbsp] 1/2",
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
                                    text: "1/5 [<bn>&nbsp?&nbsp] 1/3",
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
                                    text: "2 1/3 [<bn>&nbsp?&nbsp] 1 7/8",
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
                                    text: "7/12 [<bn>&nbsp?&nbsp] 5/8",
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
                                    text: "6 1/2 [<bn>&nbsp?&nbsp] 6 6/10",
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
                                    text: "4/6 [<bn>&nbsp?&nbsp] 2/3",
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
                                    text: "3/2 [<bn>&nbsp?&nbsp] 2/2",
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
                                    text: "4 2/3 [<bn>&nbsp?&nbsp] 5 1/2",
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
                                    text: "9/4 [<bn>&nbsp?&nbsp] 2 1/4",
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
                        title: "[<g>1.] How many puzzle pieces need the < symbol?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "3 {S}",
                            "4 {D}",
                            "5 {L}",
                        ],
                    },
                    {
                        title: "[<g>2.] What symbol does the piece in the center need?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "= {S}",
                            "> {A}",
                            "< {E}",
                        ],
                    },
                    {
                        title: "[<g>3.] Which pieces require the \"greater than\" symbol?",
                        correctIndex: 0,
                        paragraph: [
                            "The top right, and the {b}ottom left",
                            "The bottom {l}eft, and the middle right",
                            "The top right, and the top lef{t}",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the piece with a star can be compared with an equal sign.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{T}rue",
                            "F{a}lse",
                        ],
                    },
                ],  
                code: {
                    answer: "DEBT",
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
                    text: "Read each word problem, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fraction Word Problems With Whole Numbers",
                    commonCore: [
                        "4.NF.B.3d",
                        "4.NF.B.4",
                        "4.NF.B.4b",
                        "4.NF.B.4c",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "Greetings, friend. The hive is busier than ever as we prepare for the storm! I need your help reviewing my plans. What say you?",
                    complete: "Just as thought \u2014 everything checks out. Now, back to work!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "queen-bella.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "[<u>Drone] Plan",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "We must quickly send all of our 18 drones to the clover fields. Sadly, I expect [<f>1/3] of them will be lost to the storm. How many drones will not make it back?"
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
                        tag: {
                            text: "[<u>Safety] Plan",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Only two-thirds of the hive's 300 bees are safe inside the hive. The rest are still out in the fields. How many bees are safe inside?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "8%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Runes] Plan",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "We have 15 magic runes, but only [<f>1/5] of them are at full power. How many is that?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "12%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Gustav] Plan",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "We expect Gustav to destroy [<f>1/4] of the flowers in each of our 8 fields. If each field had 40 flowers to begin with, how many flowers will we lose in all?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
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
                                translateX: "8%",
                                translateY: "5%",
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
                            align: 'center',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent45",
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
                        title: "[<g>1.] Which plan has an answer of 200?",
                        word: "[S]AFETY",
                    },
                    {
                        title: "[<g>2.] [<u>True] or [<u>false]: Gustav will destroy 90 flowers.",
                        word: "FALS[E]",
                    },
                    {
                        title: "[<g>3.] Which plan has an answer of 3?",
                        word: "RU[N]ES",
                    },
                    {
                        title: "[<g>4.] Which plan has an answer of six?",
                        word: "[D]RONE",
                    },
                ],
                code: {
                    answer: "SEND",
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