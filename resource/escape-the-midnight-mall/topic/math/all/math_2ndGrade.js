const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/math/all-standards/thumbnail-2nd-grade-math-mem.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [

        // ⭐ critterwerks
        {

            info: {
                type: 'challenge',
                title: "Robot Pet Shop",
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Solve the math facts and answer the questions below. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Within 20",
                    commonCore: [
                        "2.OA.B.2"
                    ],
                }
            },

            intro: {
                character: "Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hi, I\'m Topsy! I built a bunch of robot pets today, and I need to count up how many I have. I\'m just SUPER bad at math. Want to help me?",
                    complete: "Hee hee! Thanks a lot. It all makes sense now... I think!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "critterwerks.png",
                },
                blockArray: [                 
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Number of [<u>robot dogs]",
                                },
                                passage: {
                                    text: "3 + 7",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-15%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Number of [<u>robot cats]",
                                },
                                passage: {
                                    text: "19 - 4",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "25%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {

                        contentArray: [
                            {
                                title: {
                                    text: "Number of [<u>robot owls]",
                                },
                                passage: {
                                    text: "9 + 9",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "40%",
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'large',
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
                        title: "[<g>1.] How many robot dogs are there?",
                        correctIndex: 1,
                        answerType: 'numerals',
                        paragraph: [
                            "4 {C}",
                            "10 {T}",
                            "37 {K}",
                        ],
                    },
                    {
                        title: "[<g>2.] How many robot cats are there?",
                        correctIndex: 0,
                        answerType: 'numerals',
                        paragraph: [
                            "15 {A}",
                            "126 {E}",
                            "6 {Y}",
                        ],
                    },
                    {
                        title: "[<g>3.] There are ___ robot owls.",
                        correctIndex: 2,
                        answerType: 'numerals',
                        paragraph: [
                            "24 {Z}",
                            "23 {U}",
                            "18 {I}",
                        ],
                    },
                    {
                        title: "[<g>4.] How many more owls are there than cats?",
                        correctIndex: 1,
                        paragraph: [
                            "There are 2 m{o}re owls",
                            "There are 3 more ow{l}s",
                            "There is an e{q}ual number of owls and cats",
                        ],
                    },
                ],  
                code: {
                    answer: "TAIL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the candy cave
        {

            info: {
                type: 'challenge',
                title: 'Candy Cave',
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Solve the math problems and answer the questions below. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Within 100",
                    commonCore: [
                        "2.NBT.B.5",
                        "2.NBT.B.6",
                        "2.NBT.B.8"
                    ],
                }
            },

            intro: {
                character: "Martin",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "Hey... I\'m Martin. I need to make some more candy before my shop opens in the morning. I just don\'t know how much! Can you help me find out?",
                    complete: "You know, that helped quite a bit. Thank you. I feel better already."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-candy-cave.png",
                },
                blockArray: [                 
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Pounds of Taffy",
                                },
                                passage: {
                                    text: "48 + 14",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "60%",
                                translateY: "-30%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Sticks of Gum",
                                },
                                passage: {
                                    text: "70 + 20",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "50%",
                                translateY: "0%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Pounds of Jelly Beans",
                                },
                                passage: {
                                    text: "35 - 13",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-170%",
                                translateY: "107%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Boxes of<br>Peanut Butter Bars",
                                },
                                passage: {
                                    text: "52 - 27",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "43%",
                                translateY: "30%",
                                rotate: "4deg",
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
                            title: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'large',
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
                        title: "[<g>1.] How many sticks of gum are there?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "48 {O}",
                            "80 {H}",
                            "90 {C}",
                        ],
                    },
                    {
                        title: "[<g>2.] There are 22 pounds of ___ .",
                        correctIndex: 1,
                        paragraph: [
                            "Ta{f}fy",
                            "Jelly be{a}ns",
                            "None of the abo{v}e",
                        ],
                    },
                    {
                        title: "[<g>3.] There are ___ pounds of taffy.",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "62 {K}",
                            "54 {F}",
                            "58 {O}",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: there are 20 boxes of peanut butter bars.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fals{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "CAKE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ zeebplex
        {

            info: {
                type: 'challenge',
                title: "Zeke\'s Arcade",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces and answer the questions below. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Place Value",
                    commonCore: [
                        "2.NBT.A.1",
                        "2.NBT.A.1a",
                        "2.NBT.A.1b",
                        "2.NBT.A.2",
                        "2.NBT.A.3",
                        "2.NBT.A.4"
                    ],
                }
            },

            intro: {
                character: "Zeke",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "The computer board in one of my games broke! Of course, I\'m too busy to fix it. I need you to put the pieces back together, okay?",
                    complete: "Okay, fine. I guess you fixed it. Thanks for taking the time to help."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "zeeb-plex.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<fsms>A.]&nbsp; 162",
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
                                    text: "[<fsms>B.]&nbsp; 429",
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
                                    text: "[<fsms>C.]&nbsp; 482",
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
                                    text: "[<fsms>D.]&nbsp; 106",
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
                                    text: "[<fsms>E.]&nbsp; 370",
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
                                    text: "[<fsms>F.]&nbsp; 643",
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
                                    text: "[<fsms>G.]&nbsp; 559",
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
                                    text: "[<fsms>H.]&nbsp; 777",
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
                                    text: "[<fsms>I.]&nbsp; 903",
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
                                size: 'large',
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
                        title: "[<g>1.] Find puzzle piece C. Which number is in the ones place?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "4 {D}",
                            "8 {A}",
                            "2 {W}",
                            "0 {Z}",
                        ],
                    },
                    {
                        title: "[<g>2.] Write the number on puzzle piece G in words.",
                        correctIndex: 0,
                        paragraph: [
                            "Five hundred f{i}fty-nine",
                            "Fifty-nin{e} and five hundreds",
                            "500 + 50 + ni{n}e",
                        ],
                    },
                    {
                        title: "[<g>3.] Find the puzzle piece in the middle. If you skip count by ten, what are the next 3 numbers?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "470, 570, 670 {D}",
                            "380, 390, 400 {N}",
                            "371, 372, 373 {C}",
                            "350, 330, 310 {I}",
                        ],
                    },
                    {
                        title: "[<g>4.] Compare the numbers on puzzle pieces D and F.",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "106 = 643 {Q}",
                            "106 > 643 {P}",
                            "106 < 643 {S}",
                        ],
                    },
                ],  
                code: {
                    answer: "WINS",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ prismatica
        {

            info: {
                type: 'challenge',
                title: 'Clothing Shop',
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Read the word problems and answer the questions below. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Word Problems With Addition and Subtraction",
                    commonCore: [
                        "2.NBT.B.5",
                        "2.NBT.B.6",
                        "2.OA.A.1",
                    ],
                }
            },

            intro: {
                character: "Paula",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I have a couple of problems, but I don\'t have time to solve them. You will do it for me. And don\'t make any mistakes.",
                    complete: "Well done, Dingo Punks. I must say, everything looks perfect now."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "holographia.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "13.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Word Problem A]",
                                },
                                passage: {
                                    text: "<br>Yesterday, I had 75 jackets in my store. Today, I sold 44 jackets. How many jackets are left?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "0%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "14.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Word Problem B]",
                                },
                                passage: {
                                    text: "<br>Sam has 30 coins. Ashley has 35 coins. Luna has 2 coins. How many coins do they have in all?",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "5%",
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
                        title: "[<g>1.] Which number sentence matches word problem A?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "75 - 44 = ___ {T}",
                            "75 + 44 = ___ {A}",
                            "70 - 5 + 44 = ___ {I}",
                        ],
                    },
                    {
                        title: "[<g>2.] Solve word problem A.",
                        correctIndex: 1,
                        paragraph: [
                            "129 {j}ackets",
                            "31 j{a}ckets",
                            "0 jack{e}ts",
                        ],
                    },
                    {
                        title: "[<g>3.] Which equation matches word problem B?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "30 - 35 - 2 = ___ {F}",
                            "30 + 35 + 2 = ___ {G}",
                            "30 + 35 = ___ {O}",
                        ],
                    },
                    {
                        title: "[<g>4.] Solve word problem B.",
                        correctIndex: 2,
                        paragraph: [
                            "7 coi{n}s",
                            "63 co{i}ns",
                            "67 coin{s}",
                        ],
                    },
                ],  
                code: {
                    answer: "TAGS",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ helio athletics
        {

            info: {
                type: 'challenge',
                title: "Sporting Goods Store",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Look at the images and answer the questions below. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Length and Shapes",
                    commonCore: [
                        "2.MD.D.9",
                        "2.MD.A.1",
                        "2.MD.A.4",
                        "2.G.A.1"
                    ],
                }
            },

            intro: {
                character: "Sir Robb the Brave",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I am Sir Robb the Brave, the greatest hero of them all. I have many jobs to do, but I\'d rather eat pizza. I dare you to help me with my work!",
                    complete: "You did that job bravely. I may need your skills again in the future."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "underworld-athletics.png",
                },
                blockArray: [        
                    {
                        tag: {
                            text: "Length of a [<u>fishing rod]",
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
                                translateX: "-5%",
                                translateY: "-1%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Length of a [<u>bat]",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 3,
                                        height: 1,
                                    },
                                    label: {
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "20%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Shape of a [<u>pizza slice]",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape",
                                    file: "triangle-1.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "5%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Shape of a [<u>paper plate]",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_1-1.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "20%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Shape of a [<u>tissue box]",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape",
                                    file: "cube-1.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "12%",
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
                            size: 'mediumSmall',
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
                                    size: 'large',
                                }
                            }, 
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
                            dimension: {
                                width: "percent60",
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
                        title: "[<g>1.] What is the length of a fishing rod?",
                        correctIndex: 1,
                        paragraph: [
                            "5 un{i}ts",
                            "7 uni{t}s",
                            "14 u{n}its",
                        ],
                    },
                    {
                        title: "[<g>2.] A fishing rod is ___ units longer than a bat.",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "4 {A}",
                            "10 {E}",
                            "3 {J}",
                        ],
                    },
                    {
                        title: "[<g>3.] What makes the pizza slice a triangle?",
                        correctIndex: 1,
                        paragraph: [
                            "It points to the ri{g}ht",
                            "It has 3 {c}orners and 3 sides",
                            "It has 4 corners an{d} 4 sides",
                        ],
                    },
                    {
                        title: "[<g>4.] Which item has the shape of a cube?",
                        correctIndex: 2,
                        paragraph: [
                            "A pi{z}za slice",
                            "A paper plat{e}",
                            "A tissue b{o}x",
                        ],
                    },
                ],  
                code: {
                    answer: "TACO",
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
