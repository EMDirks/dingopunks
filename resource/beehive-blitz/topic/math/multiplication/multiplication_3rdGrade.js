const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/math/multiplication/preview-3rd-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Solve each multiplication fact, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiplication Facts",
                    commonCore: [
                        "3.OA.A.1",
                        "3.OA.C.7",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "To get ready for the storm, I need to figure out how much stuff is in the warehouse. Problem is, math really isn't my thing. Maybe you can do it?",
                    complete: "Well... thanks, I guess. Now get outta here, I've got work to do."
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
                            text: "A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6 × 4",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-40%",
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
                                    text: "6 × 12",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
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
                                    text: "5 × 7",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "85%",
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
                                    text: "2 × 11",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-37%",
                                rotate: "0deg",
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
                                    text: "8 × 9",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "3deg",
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
                                    text: "3 × 8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "85%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>A] = Honey barrels<br> \
                                            [<s>D] = Juice containers<br> \
                                            [<s>I] = Medicine jars",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "40%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>C] = Snack bags<br> \
                                            [<s>H] = Glove boxes<br> \
                                            [<s>L] = Wax sheets",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "65%",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many juice containers are there?",
                        correctIndex: 0,
                        paragraph: [
                            "35 {j}uice containers",
                            "40 juice c{o}ntainers",
                            "30 j{u}ice containers",
                        ],
                    },
                    {
                        title: "[<g>2.] Which two items both equal 72?",
                        correctIndex: 2,
                        paragraph: [
                            "Snack bags and honey barr{e}ls",
                            "Juice containers and med{i}cine jars",
                            "Medicine jars and sn{a}ck bags",
                        ],
                    },
                    {
                        title: "[<g>3.] Which two items both equal 24?",
                        correctIndex: 2,
                        paragraph: [
                            "Wax sheets and glo{v}e boxes",
                            "Honey barre{l}s and juice containers",
                            "Wax sheets and honey bar{r}els",
                        ],
                    },
                    {
                        title: "[<g>4.] How many glove boxes are in the warehouse?",
                        correctIndex: 1,
                        paragraph: [
                            "24 glov{e} boxes",
                            "22 glove boxes{s}",
                            "23 glove {b}oxes",
                        ],
                    },
                ],  
                code: {
                    answer: "JARS",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Find the Unknown Number in an Equation",
                    commonCore: [
                        "3.NBT.A.3",
                        "3.OA.A.1",
                        "3.OA.A.4",
                        "3.OA.C.7",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Oh no, oh no! The queen's golden tablet is broken, and it's all my fault! Please, can you help me put the pieces back together?",
                    complete: "Do you think Grumblegrub is up to something? I don't trust him. Anyway, thanks!"
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
                                passage: {
                                    text: "9 × ? = 63",
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
                                    text: "? × 7 = 28",
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
                                    text: "6 × ? = 18",
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
                                    text: "6 × ? = 36",
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
                                    text: "? × 7 = 14",
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
                                    text: "? × 20 = 80",
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
                                    text: "9 × 11 = ?",
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
                                    text: "8 × ? = 48",
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
                                    text: "? × 7 = 84",
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What number is missing from the star piece?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "40 {H}",
                            "2 {E}",
                            "4 {D}",
                        ],
                    },
                    {
                        title: "[<g>2.] Which two pieces are missing the number six?",
                        correctIndex: 0,
                        paragraph: [
                            "The m{i}ddle left, and the middle bottom",
                            "The top left, and the top righ{t}",
                            "The middle left, {a}nd the piece with a star",
                        ],
                    },
                    {
                        title: "[<g>3.] Which piece is missing the number 12?",
                        correctIndex: 1,
                        paragraph: [
                            "The bottom le{f}t",
                            "The botto{m} right",
                            "The top {r}ight",
                        ],
                    },
                    {
                        title: "[<g>4.] How many pieces are missing an even number?",
                        correctIndex: 1,
                        paragraph: [
                            "Five pie{c}es",
                            "Six piec{e}s",
                            "Se{v}en piece",
                        ],
                    },
                ],  
                code: {
                    answer: "DIME",
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
                    topic: "Word Problems",
                    commonCore: [
                        "3.NBT.A.3",
                        "3.OA.A.1",
                        "3.OA.A.3",
                        "3.OA.C.7",
                        "3.OA.D.8",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "The hive's mood is off, but I know we can find it again! Let's put on a poetry show \u2014 something to inspire the bees during these hard times. Will you help me, buddy?",
                    complete: "Do you know my old band mate, Tater Drift? Tell that old spud I said \"hey.\" Thanks!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "riff-wingman.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "[<u>1. Lyrics]",
                                },
                                passage: {
                                    text: "I'm going to start the show with a new poem about defeating Gustav the storm cloud. It will have 5 stanzas, each with 8 lines of lyrics.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "15%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "[<u>2. Minutes]",
                                },
                                passage: {
                                    text: "I plan to read my new poem 3 times, with each reading taking 10 minutes. After that, I will spend another 15 minutes reading some older poems.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-40%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "[<u>3. Snacks]",
                                },
                                passage: {
                                    text: "Maybe we should hand out snacks? The theater has 3 sections, and each section can seat 30 bees. The show will definitely be sold out, and I want to make sure everyone has something to eat!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "35%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "[<u>4. Hours]",
                                },
                                passage: {
                                    text: "I'll end the show with a poem about sunny weather. I had to write five drafts before I settled on the final version. Each draft took me exactly twelve days to write.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-18%",
                                rotate: "-4deg",
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
                                width: "full",
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
                        title: "[<g>1.] For his new poem about defeating Gustav, how many total lines of lyrics will Riff need to write?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "13 l{i}nes",
                            "40 {l}ines",
                            "200 lin{e}s",
                            "32 line{s}",
                        ],
                    },
                    {
                        title: "[<g>2.] How many minutes, in all, will Riff spend reading?",
                        correctIndex: 2,
                        paragraph: [
                            "28 m{i}nutes",
                            "75 minu{t}es",
                            "45 minut{e}s",
                        ],
                    },
                    {
                        title: "[<g>3.] How many total snacks does Riff need?",
                        correctIndex: 0,
                        paragraph: [
                            "90 sn{a}cks",
                            "33 snack{s}",
                            "100 s{n}acks",
                        ],
                    },
                    {
                        title: "[<g>4.] In total, how many days did Riff spend writing all of his drafts?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "60 {d}ays",
                            "17 d{a}ys",
                            "36 day{s}",
                            "50 da{y}s",
                        ],
                    },
                ],  
                code: {
                    answer: "LEAD",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ basil rabbit
        {
            info: {
                type: 'challenge',
                title: "Honey Vats",
                asset: "basil-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Look at the equations and arrays, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Properties of Multiplication; Arrays",
                    commonCore: [
                        "2.OA.C.4",
                        "3.OA.A.1",
                        "3.OA.B.5",
                        "3.OA.C.7",
                        "3.OA.D.9",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "The queen hired me to gather nectar, but these multiplication problems are just slowing me down! I'm good at running and hopping, not math. Want to lend a hand?",
                    complete: "I'd be in real trouble without your help. Don't tell anyone I was fired from my last job!"
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
                            text: "Jasmine Nectar",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "7 × 5 = 5 × 7",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "20%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Sunsip Nectar",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>T T T T T T T \
                                    <br> \
                                    T T T T T T T \
                                    <br> \
                                    T T T T T T T \
                                    <br> \
                                    T T T T T T T] \
                                    ",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-35%",
                                translateY: "-25%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Orchid Nectar",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "12 × 5 = ?\
                                    <br> \
                                    (4+8) × 5 = ?\
                                    <br> \
                                    (4 × 5) + (8 × 5) = ? \
                                    <br> \
                                    20 + 40 = 60",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-45%",
                                translateY: "25%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Poppy Nectar",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "9 × 3 = 3 × 9",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-30%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Azalea Nectar",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>E E E E E E E E \
                                    <br> \
                                    E E E E E E E E \
                                    <br> \
                                    E E E E E E E E \
                                    <br> \
                                    E E E E E E E E] \
                                    ",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "30%",
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
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "auto",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. [<u>True] or [<u>false]: \"Poppy Nectar\" shows the distributive property.',
                        'B. Which array shows the multiplication fact 4 × 7: [<u>sunsip] or [<u>azalea]?',
                        'C. Which nectar has a product of 35?',     
                        'D. Which nectar shows the distributive property?',                    
                    ],
                    puzzle: [
                        ["0","0","(A)F","A","2L","(B)S","E"],
                        ["0","0","0","0","0","U","0"],
                        ["(C)J","1A","S","M","I","N","4E"],
                        ["0","0","0","0","0","S","0"],
                        ["0","(D)3O","R","C","H","I","D"],
                        ["0","0","0","0","0","P","0"],
                    ]
                },  
                code: {
                    answer: "ALOE",
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