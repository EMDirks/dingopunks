const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/math/fractions/preview-3rd-grade.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [


        // ⭐ critterwerks
        {

            info: {
                type: 'challenge',
                title: "Critterwerks",
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Find the fraction shown on each number line, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions on a Number Line",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2a',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2b',
                        },
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee hee! I'm Topsy and I sell robot pets. I need to use different metals to build my latest invention, but all the measurements are on number lines. I can't read them... Help!",
                    complete: "Hee hee! Did you know I'm a wanted criminal? Don't tell anyone!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "critterwerks.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "Tin",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 8,
                                        dot: 2
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-60%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Silver",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
                                        dot: 4
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-30%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Copper",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 3,
                                        dot: 1
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "35%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Steel",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 4,
                                        dot: 2
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "30%",
                                translateY: "20%",
                                rotate: "-2deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "Iron",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 2,
                                        dot: 1
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "100%",
                                rotate: "3deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "Brass",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 5,
                                        dot: 2
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "40%",
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
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            dimension: {
                                width: "percent70",
                                height: "full",
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
                        title: "[<g>1.] Tin and brass both have a numerator of:",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "8 {R}",
                            "5 {D}",
                            "2 {B}",
                        ],
                    },

                    {
                        title: "[<g>2.] What fraction of steel is shown?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "[<f>2/5] {A}",
                            "[<f>2/4] {O}",
                            "[<f>3/5] {I}",
                        ]
                    },

                    {
                        title: "[<g>3.] What fraction of iron is shown?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "[<f>2/4] {S}",
                            "[<f>1/2] {T}",
                            "[<f>2/3] {M}",
                        ]
                    },

                    {
                        title: "[<g>4.] The number line for silver shows the fraction:",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "[<f>4/6] {S}",
                            "[<f>5/6] {Y}",
                            "[<f>4/8] {M}",
                        ]
                    },

                ],  

                code: {
                    answer: "BOTS",
                    userArray: ["","","",""]
                },

            }


        },

        // ⭐ the candy cave
        {

            info: {
                type: 'challenge',
                title: 'The Candy Cave',
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Type in the answer to each question, using the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Equivalent Fractions",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3a',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3b',
                        }
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I'm trying to measure out a new order of candy, but I'm really struggling. It's almost midnight! Can you help me find the equivalent fractions so I can get this order filled?",
                    complete: "I don't trust Zeeb. I don't think you should either... He's acting weird, right?"
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
                                cryptogram: {
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-24%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Bonbons",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/6 cups",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "25%",
                                translateY: "-40%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Wafers",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_2-5.svg",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "40%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Gummies",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/4 cups"
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-25%",
                                translateY: "-40%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Nougat",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/6 cups"
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-55%",
                                translateY: "5%",
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
                        tag: {
                            font: 'default',
                            size: 'small',
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'mediumSmall'
                                },
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
                        title: "[<g>1.] Which candy is equivalent to [<f>6/8] ?",
                        word: "GUMMIE[S]",
                    },
                    {
                        title: "[<g>2.] Which candy is equal to one-half?",
                        word: "BONB[O]NS",
                    },
                    {
                        title: "[<g>3.] Which candy is equal to [<f>1/3] ?",
                        word: "NO[U]GAT",
                    },
                    {
                        title: "[<g>4.] Which candy is equivalent to four-tenths?",
                        word: "WAFE[R]S",
                    },
                ],

                code: {
                    answer: "SOUR",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ zeebplex
        {

            info: {
                type: 'challenge',
                title: "ZeebPlex",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare Fractions With Like Numerators and Denominators",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3d',
                        },
                    ],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "Ugh, I just dropped my brand new circuit board on the floor! Can you help me put the pieces back together? This is going to be tough...",
                    complete: "Did Martin send you here to bother me? Go away, I have work to do."
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
                                fraction: {
                                    text: "1/8 [<bgl>&nbsp?&nbsp] 1/4",
                                },
                                backgroundImage: {
                                    file: "19.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/3 [<bgl>&nbsp?&nbsp] 2/3",
                                },
                                backgroundImage: {
                                    file: "20.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/3 [<bgl>&nbsp?&nbsp] 1/3",
                                },
                                backgroundImage: {
                                    file: "21.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/3 [<bgl>&nbsp?&nbsp] 3/3",
                                },
                                backgroundImage: {
                                    file: "22.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "5/5 [<bgl>&nbsp?&nbsp] 4/5",
                                },
                                backgroundImage: {
                                    file: "23.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/3 [<bgl>&nbsp?&nbsp] 2/4",
                                },
                                backgroundImage: {
                                    file: "24.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/8 [<bgl>&nbsp?&nbsp] 4/8",
                                },
                                backgroundImage: {
                                    file: "25.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/2 [<bgl>&nbsp?&nbsp] 1/2",
                                },
                                backgroundImage: {
                                    file: "26.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/7 [<bgl>&nbsp?&nbsp] 2/9",
                                },
                                backgroundImage: {
                                    file: "27.png"
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
                        title: "[<g>1.] Which symbol would you use to compare all three sets of fractions in the yellow pieces?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "< {C}",
                            "> {O}",
                            "= {U}",
                            "+ {A}",
                        ],
                    },

                    {
                        title: "[<g>2.] Which symbol would you use to compare the fractions in the center piece?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "< {P}",
                            "> {O}",
                            "= {D}",
                            "- {A}",
                        ],
                    },

                    {
                        title: "[<g>3.] Which symbol would you use to compare the fractions in the top right piece?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "< {Z}",
                            "> {I}",
                            "= {L}",
                            "- {K}",
                        ],
                    },

                    {
                        title: "[<g>4.] Which pieces both need an [<u>equals sign]?",
                        correctIndex: 2,
                        paragraph: [
                            "The middle top, and the bottom l{e}ft",
                            "All thre{e} purple pieces",
                            "The middle top, a{n}d the middle bottom"
                        ],
                    },

                ],  

                code: {
                    answer: "COIN",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ prismatica
        {

            info: {
                type: 'challenge',
                title: "Prismatica",
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Find each missing number, then solve the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Whole Numbers as Fractions",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3c',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3d',
                        },
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I'm designing some clothes for a new customer, and I need to make sure every fraction is a nice, clean, whole number. I can't be bothered to do this myself, it's such a bore. You will do it for me!",
                    complete: "If you're ever looking for a glow-up, come to Prismatica first."
                },
            },


            activity: {

                info: {
                    type: "dynamic",
                    asset: "holographia.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "A",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6/6 = 3/?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "9%",
                                translateY: "-35%",
                                rotate: "-4deg",
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
                                    text: "8 = ?/1",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-5%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "E",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "?/4 = 1",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-25%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "G",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/3 = ?",
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "11%",
                                translateY: "-8%",
                                rotate: "-2deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "Y",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "?/1 = 5",
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "60%",
                                rotate: "3deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "M",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 4,
                                        dot: 4
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                }
                            },
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 1,
                                        dot: 1
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-2%",
                                rotate: "0deg",
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'mediumSmall'
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
            
            questions: {
                
                info: {
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] What are the missing numbers in [<s>A], [<s>E], and [<s>Y] ?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "3, 4, and 1 {B}",
                            "3, 4, and 5 {S}",
                            "6, 4, and 1 {C}",
                        ],
                    },

                    {
                        title: "[<g>2.] Are the fractions in [<s>M] equal or unequal?",
                        correctIndex: 0,
                        paragraph: [
                            "Eq{u}al",
                            "Un{e}qual",
                        ],
                    },

                    {
                        title: "[<g>3.] The missing numbers for [<s>G] and [<s>L] are:",
                        correctIndex: 1,
                        paragraph: [
                            "{T}he same",
                            "D{i}fferent",
                        ],
                    },

                    {
                        title: "[<g>4.] What two whole numbers are shown on the number lines?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "1 and 1 {T}",
                            "[<f>4/4] and [<f>1/1] {R}",
                            "4 and 1 {V}",
                            "[<f>5/5] and [<f>1/1] {A}",
                        ],
                    },

                ],  

                code: {
                    answer: "SUIT",
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


  