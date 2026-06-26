const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "TIME TO SUNSET"
    },

    challengeArray: [

        // ⭐ Candlewick's Cart

        {

            info: {
                type: 'challenge',
                title: "Candlewick's Cart",
                asset: "candlewicks-cart.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Fall Flame\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Welcome to my farm! I just got a new box of candles, but I\'m too busy to look at the note that came with it. Can you tell me what it\'s all about?",
                    complete: "Great work! Now I know exactly what these candles can do."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "candlewicks-cart.png",
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
                                    text: "Fall Flame",
                                },
                                passage: {
                                    text: "The Fall Flame is a magic candle with three special powers. First, it helps crops grow faster. Second, it scares away bugs that would eat the crops. Third, its flame never goes out, even in the rain!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        }
                    },
                ],  
                style: {                   
                    block: {
                        misc: {
                            material: 'paper',
                            padding: "double"
                        },
                        dimension: {
                            width: "percent60",
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
                                size: 'medium',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
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
                        title: "[<g>1.] What is this note mostly about?",
                        correctIndex: 1,
                        paragraph: [
                            "Why rain is bad for fa{r}ms",
                            "A {m}agic candle with three special powers",
                            "The type{s} of bugs that eat crops",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: \"it helps crops grow faster\" is a key detail.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tru{e}",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>3.] How many key details are in this note?",
                        correctIndex: 2,
                        paragraph: [
                            "On{e} key detail",
                            "Two key {d}etails",
                            "Three key detai{l}s",
                        ],
                    },
                    {
                        title: "[<g>4.] What is [<i>not] a special power of the Fall Flame?",
                        correctIndex: 2,
                        paragraph: [
                            "It sca{r}es away bugs",
                            "Its flame {n}ever goes out",
                            "I{t} makes crops taste better",
                        ],
                    },
                ],  
                code: {
                    answer: "MELT",
                    userArray: ["","","",""]
                },
            },     

        },

        // ⭐ Applegrim Orchard

        {
            
            info: {
                type: 'challenge',
                title: 'Applegrim Orchard',
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Advice\" and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Silas Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "Hello, hello! Oh, what a day! I have so much advice to say. Nobody listens, and it's not fair. Will you hear me? I have much to share!",
                    complete: "My words have found a home at last! Now off you go... and please go fast!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "applegrim-orchard.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Advice',
                                },
                                subtitle: {
                                    text: 'By Silas Sage',
                                },
                                passage: {
                                    text:   "Never sneeze on a sleepy snail,\
                                    <br>\
                                    or try to eat a rusty nail.\
                                    <br>\
                                    This will keep you safe and sound,\
                                    <br>\
                                    for every season all year round.\
                                    <br>\
                                    <br>\
                                    [<blu>Never lend your scarf to a bee,]\
                                    <br>\
                                    or pour your soup into a tree.\
                                    <br>\
                                    With my advice, you\'ll be just fine.\
                                    <br>\
                                    Now off you go \u2014 it\'s time to shine!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'paper',
                            padding: "double"
                        },
                        dimension: {
                            width: "percent50",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    },                   
                    contentArray: [
                        {
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'small',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which word rhymes with bee: [<u>nail], [<u>fine], or [<u>tree]?',
                        'B. Is the title of this poem \"[<u>Advice]\" or \"[<u>Silas]\"?',
                        'C. Read the blue text. Does it have [<u>seven] or [<u>eight] syllables?',     
                        'D. What is the poet\'s first name?',                    
                    ],
                    puzzle: [
                        ["(D)S","I","L","(B)A","1S","0","0"],
                        ["0","0","0","4D","0","0","0"],
                        ["0","0","0","V","0","0","0"],
                        ["0","0","(C)2E","I","G","H","T"],
                        ["0","0","0","C","0","0","0"],
                        ["(A)T","R","3E","E","0","0","0"],
                    ]
                },  
                code: {
                    answer: "SEED",
                    userArray: ["","","",""]
                },
            }            
            
        },

        // ⭐ Camp Gnomad

        {

            info: {
                type: 'challenge',
                title: "Camp Gnomad",
                asset: "camp-gnomad.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues and Vocabulary",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "You have to help us! The Fallcrawlers are coming and we need to get out of here. But our star map is torn to pieces! Can you put it back together?",
                    complete: "Oh thank you, thank you! Maybe we\'ll cross paths again one day."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "camp-gnomad.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "A. She used her compass to find a way home.",
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
                                    text: "B. Stars are not just big. They are [<u>gigantic]!",
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
                                    text: "C. The many stars in the sky twinkle and [<u>shimmer].",
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
                                    text: "D. The falling meteor made a huge crater.",
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
                                    text: "E. We can see the moon through a telescope.",
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
                                    text: "F. This galaxy holds billions of stars.",
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
                                    text: "G. You must read the map to find the right path.",
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
                                    text: "H. If you stand outside too long, you can get a [<u>sunburn]!",
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
                                    text: "I. If this map gets old and [<u>ragged], get a new one.",
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
                        title: "[<g>1.] Find the puzzle piece without a star. What does its underlined word mean?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Very sm{a}ll",
                            "Very bi{g}",
                        ],
                    },
                    {
                        title: "[<g>2.] Read puzzle piece C. What is another word for \"shimmer\"?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "S{t}ars",
                            "Sk{y}",
                            "Twink{l}e",
                            "{M}any",
                        ],
                    },
                    {
                        title: "[<g>3.] The underlined word on puzzle piece H means:",
                        correctIndex: 0,
                        paragraph: [
                            "A burn y{o}u get from the sun",
                            "Pain from touchin{g} something hot",
                            "Feeli{n}g too cold",
                        ],
                    },
                    {
                        title: "[<g>4.] If something is \"ragged\", that means it is ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "Really b{i}g",
                            "Clea{n} and new",
                            "Torn and {w}orn out",
                        ],
                    },
                ],  
                code: {
                    answer: "GLOW",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ Frantic Factory

        {

            info: {
                type: 'challenge',
                title: 'Frantic Factory',
                asset: "frantic-factory.png",
                state: "incomplete",
                hint: {
                    text: "Read \"The Pumpkin Packer\" and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Text Features",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "The factory has a new machine. I do not understand it. I cannot stop to read about it. Will you find out how it works?",
                    complete: "Good work. Do not come back after dark. I repeat: do not come back after dark."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "frantic-factory.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Pumpkin Packer',
                                },
                                subtitle: {
                                    text: 'By Candlewick',
                                },
                                passage: {
                                    text:   "The Pumpkin Packer runs all day and night. First, pumpkins roll onto the belt one by one. Then, the belt moves them to a big gear that [<hi>spins] fast. Finally, the pumpkin drops down and lands in a crate. Put on a lid, and the crate is ready to ship!"
                                }
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
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "hh20_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "12%",
                                rotate: "-5deg",
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
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    },                   
                    contentArray: [
                        {
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'small',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left',
                                indent: 'default',
                                brSplit: 'default'
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. [<u>True] or [<u>false]: the passage and the picture show the same thing.',
                        'B. The title of the passage is \"The Pumpkin ____ .\"',
                        'C. Does the picture have [<u>two], [<u>three], or [<u>four] labels?',     
                        'D. Which word in \"The Pumpkin Packer\" is highlighted?',                    
                    ],
                    puzzle: [
                        ["(D)S","0","0","0","0","(A)T","0"],
                        ["(B)P","A","C","K","E","1R","0"],
                        ["I","0","0","0","0","2U","0"],
                        ["N","0","(C)4T","H","R","E","E"],
                        ["3S","0","0","0","0","0","0"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "RUST",
                    userArray: ["","","",""]
                },
            }            

        },

        // ⭐ Mallow Maze

        {

            info: {
                type: 'challenge',
                title: "Mallow Maze",
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Sadie and the Scarecrow\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I\'m delivering mail! But this story fell right out of my bag. It has a lesson that could really help the farm... Can you help me find out what it says?",
                    complete: "That\'s the lesson! Now I can deliver it. Wait... Which way is the farm?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "mallow-maze.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Sadie and the Scarecrow',
                                },
                                passage: {
                                    text:   "Sadie lived on a corn farm. Every year, crows would fly down and eat the crops. This year, Sadie wanted to do something about it. She decided to build a scarecrow.\
                                    <br>\
                                    Sadie got some old clothes from her dad. Then she found a big pumpkin to use as a head. Its long stem looked just like a nose. She grabbed a stick to hold it all together, and headed to the cornfield.\
                                    <br>\
                                    Sadie had never built a scarecrow before. It was hard work. The sun went down, but she kept working. Strange sounds came from the dark fields. Sadie was scared, but she did not give up. Finally, she finished the scarecrow and set it up in the middle of the field.\
                                    <br>\
                                    The next morning, the corn was safe. Not a single plant had been eaten. Sadie smiled. When you work hard, you can do hard things!"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
                                rotate: "-4deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'paper',
                            padding: "double"
                        },
                        dimension: {
                            width: "percent75",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    },                   
                    contentArray: [
                        {
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left',
                                indent: 'default',
                                brSplit: 'default'
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
                        title: "[<g>1.] Where does Sadie live?",
                        correctIndex: 0,
                        paragraph: [
                            "On a co{r}n farm",
                            "In a pum{p}kin patch",
                            "In {a} small town",
                        ],
                    },
                    {
                        title: "[<g>2.] How does Sadie keep the crows away?",
                        correctIndex: 1,
                        paragraph: [
                            "She yells at th{e}m",
                            "She makes a scarecr{o}w",
                            "She a{s}ks her mom for help",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: at the end of this story, crows ate every single corn plant.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>4.] What lesson does this story teach us?",
                        correctIndex: 2,
                        paragraph: [
                            "Crows live on far{m}s",
                            "Sad{i}e was bad at making a scarecrow",
                            "When you work har{d}, you can do hard things",
                        ],
                    },
                ],  
                code: {
                    answer: "ROAD",
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


  