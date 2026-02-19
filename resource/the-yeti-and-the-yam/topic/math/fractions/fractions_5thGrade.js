const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/math/fractions/preview-5th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ dr. seraphina's cell
        {

            info: {
                type: 'challenge',
                title: "Dr. Seraphina's Cell",
                asset: "dr-seraphina.png",
                state: "incomplete",
                hint: {
                    text: "Add or subtract each set of fractions and mixed numbers, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Add and Subtract Fractions With Unlike Denominators",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.A.1",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I admire your plan, but I bet snow cones will distract the yeti much better than yams. Tell you what \u2014 if you help me with a few problems, I'll lend you some extra sugar. Deal?",
                    complete: "I'm hoping at least one of us can escape this ridiculous place... Good luck!"
                },
            },

            // fraction + symbol tag + symbol key (6x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "A",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/6 + 4/8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-20%",
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
                                    text: "1 1/4 + 2/3",
                                },
                            },
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
                            text: "M",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1 1/3 + 1 4/5",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "50%",
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
                                fraction: {
                                    text: "8/10 - 3/6",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "-18%",
                                rotate: "-3deg",
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
                                    text: "5/8 - 2/6",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "0%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "O",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7 1/2 - 2 3/4",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "48%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>A] = cups of grape syrup<br> \
                                            [<s>M] = cups of plum syrup<br> \
                                            [<s>S] = cups of snail syrup",
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
                                    text:   "[<s>C] = cups of berry syrup<br> \
                                            [<s>H] = cups of cherry syrup<br> \
                                            [<s>O] = cups of rambutan syrup",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "35%",
                                rotate: "-4deg",
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
                        { 
                            dimension: {
                                width: "full",
                                height: "full",
                            }, 
                            misc: {
                                padding: "default"
                            },
                        }, 
                    ]
                },
            },

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many more cups of berry syrup are there than snail syrup?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "[<f>40/24] more c{u}ps",
                            "1 [<f>5/8] {m}ore cups",
                            "[<f>16/12] m{o}re cups",
                            "1 [<f>1/4] more cu{p}s",
                        ],
                    },
                    {
                        title: "[<g>2.] How many cups of grape syrup are there?",
                        correctIndex: 2,
                        paragraph: [
                            "[<f>3/4] cups of grape syru{p}",
                            "1 [<f>1/6] cups o{f} grape syrup",
                            "[<f>5/6] cups of gr{a}pe syrup",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of these syrups is > 3 cups?",
                        correctIndex: 0,
                        paragraph: [
                            "P{l}um",
                            "Che{r}ry",
                            "Sna{i}l",
                        ],
                    },
                    {
                        title: "[<g>4.] Which syrup has the greatest answer?",
                        correctIndex: 1,
                        paragraph: [
                            "{B}erry syrup",
                            "Rambu{t}an syrup",
                            "{C}herry syrup",
                        ],
                    },
                ],  
                code: {
                    answer: "MALT",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ pippo's cell
        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiply Fractions and Mixed Numbers",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.4",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.6",
                        },
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "I'm building an escape pod to teleport out of this freezing place, but my blueprint got all torn up! If you can put the pieces back together, I'll bake those yams for you. What do you say, friend?",
                    complete: "Oh boy... I really hope this thing works! Anyway, best of luck with those yams."
                },
            },

            // puzzle (9x)
            activity: {
                info: {
                type: "dynamic",
                functionality: "drag-and-drop",
                asset: "pippo-fizzlepop-2.png",
                },
                blockArray: [              
                {
                contentArray: [
                    {
                        fraction: {
                            text: "2/6 × 3/4",
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
                        fraction: {
                            text: "1/8 × 3/5",
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
                        fraction: {
                            text: "2/3 × 4/6",
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
                        fraction: {
                            text: "6 × 2 1/2",
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
                        fraction: {
                            text: "5/6 × 1/3",
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
                        fraction: {
                            text: "1/7 × 3/8",
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
                        fraction: {
                            text: "1 1/3 × 2 2/3",
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
                        fraction: {
                            text: "3 2/6 × 3 2/6",
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
                        fraction: {
                            text: "7 1/3 × 2 1/4",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which puzzle piece has an answer of [<f>5/18]?",
                        correctIndex: 0,
                        paragraph: [
                            "The {c}enter piece",
                            "The top lef{t} piece",
                            "The bottom right piec{e}",
                        ],
                    },
                    {
                        title: "[<g>2.] Which puzzle piece has the greatest product?",
                        correctIndex: 2,
                        paragraph: [
                            "The bottom le{f}t piece",
                            "The bottom {m}iddle piece",
                            "The b{o}ttom right piece",
                        ],
                    },
                    {
                        title: "[<g>3.] Find the products of the 3 pieces in the top row.",
                        correctIndex: 1,
                        paragraph: [
                            "From righ{t} to left: &nbsp[<f>3/56], &nbsp[<f>3/40], &nbsp[<f>4/9]",
                            "From r{i}ght to left: &nbsp[<f>1/4], &nbsp[<f>3/40], &nbsp[<f>4/9]",
                            "From {r}ight to left: &nbsp[<f>6/24], &nbsp[<f>3/40], &nbsp[<f>9/18]",
                        ],
                    },
                    {
                        title: "[<g>4.] The ______ piece has a product of 15.",
                        correctIndex: 0,
                        paragraph: [
                            "Middle {l}eft",
                            "Middle righ{t}",
                            "To{p} right",
                        ],
                    },
                ],  
                code: {
                    answer: "COIL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ fishbeard' cell
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Divide each set of fractions and whole numbers, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Divide Unit Fractions and Whole Numbers",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.7",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.7a",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.7b",
                        },
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arrr! I need help scavenging pieces from me terrible shipwreck. If ye help me count up some supplies, I might even share a bit o' butter for yer yams. Do we have a deal, landlubber?",
                    complete: "You've done it, again matey! Me thinks a life of piracy is in your future..."
                },
            },

            // fractions [tag] (6x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "fishbeard.png",
                },
                blockArray: [  
                    {
                        tag: {
                            text: "Anchors",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2 ÷ 1/4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-12%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Flares",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/3 ÷ 5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "-25%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Maps",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3 ÷ 1/8",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "-10%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Chests",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/9 ÷ 4",
                                }, 
                            }
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
                            text: "Planks",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 ÷ 1/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "40%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Nets",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/10 ÷ 2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "15%",
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
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
                            },
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

            // crossword (7x6)
            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which item is equal to 8?',
                        'B. Which has a smaller quotient: [<u>maps] or [<u>nets]? ',
                        'C. Which item is equal to [<f>1/36]?',     
                        'D. [<u>True] or [<u>false]: the planks are > the flares.',                    
                    ],
                    puzzle: [
                        ["0","0","0","(C)C","0","0","0"],
                        ["(A)2A","(B)N","C","H","1O","R","S"],
                        ["0","E","0","E","0","0","0"],
                        ["0","T","0","S","0","0","0"],
                        ["0","4S","0","(D)T","3R","U","E"],
                        ["0","0","0","S","0","0","0"],
                    ]
                },  
                code: {
                    answer: "OARS",
                    userArray: ["","","",""]
                },
            }

        },
        
        // ⭐ the knight's cell
        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fraction Word Problems With All Four Operations",
                    commonCore: [
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.A.1",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.A.2",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.4",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.6",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.7",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.7a",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.7b",
                        },
                        {
                            subject: "Math",
                            grade: [5],
                            category: "Number and Operations Fractions",
                            standard: "5.NF.B.7c",
                        },
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "I cannot spend one more day in this dreadful prison... I must be free! Will you read my escape plans and provide me with feedback? If you assist me, I'll lend you a pan to cook those yams.",
                    complete: "See you on the other side! Watch your step, and beware of large footprints in the snow..."
                },
            },

            // cryptogram + tag + text (4x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Plan: [<u>Supplies]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<f>2/3] of my supplies are potions, and [<f>2/9] of my supplies are armor. I must determine what fraction of my total supplies are potions and armor."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "6%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Plan: [<u>Rations]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Unfortunately, I only have [<f>1/4] of a bread loaf. I must split this equally between two days."
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
                            text: "Plan: [<u>Practice]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I must practice fighting for a total of 12 hours. Yesterday, I practiced for [<f>2/3] of the total time. Today, I completed the rest."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "7%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Plan: [<u>Duration]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I spend [<f>5/12] of the day exercising, and [<f>1/4] of the day meditating. I must find the difference between the time I spend exercising and the time I spend meditating."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "12%",
                                translateY: "-3%",
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
                                translateX: "2%",
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

            // decoder (4x)
            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which plan uses the equation [<f>6/9] + [<f>2/9] = [<f>8/9] ?",
                        word: "SUPPLIE[S]",
                    },
                    {
                        title: "[<g>2.] Which plan uses the equation [<f>5/12 ]- [<f>3/12] = [<f>1/6] ?",
                        word: "DURATI[O]N",
                    },
                    {
                        title: "[<g>3.] Today, the knight practiced fighting for ___ hours.",
                        word: "FOU[R]",
                    },
                    {
                        title: "[<g>4.] She can eat one _____ of a bread loaf each day.",
                        word: "[E]IGHTH",
                    },
                ],
                code: {
                    answer: "SORE",
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

    ],

};