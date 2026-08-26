const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/math/fractions/preview-3rd-grade.png",
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
                    text: "Sort each fraction into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions on Number Lines",
                    commonCore: [
                        "3.NF.A.1",
                        "3.NF.A.2",
                        "3.NF.A.2a",
                        "3.NF.A.2b",
                        "3.NF.A.3",
                        "3.NF.A.3a",
                        "3.NF.A.3b",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "I'm building a wooden fence to keep the Red Tide Pirates away, but the pieces are all different lengths. Want to help me sort them?",
                    complete: "You did it! This fence will hold off those pirates for sure. Couldn't have done it without ya."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Less than [<f>1/2]",
                        "Equal to or greater than [<f>1/2]",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Silverwood",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
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
                        correctIndex: 0
                    },  
                    {
                        tag: {
                            text: "Charwood",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 8,
                                        dot: 5
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
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Ironwood",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 8,
                                        dot: 3
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
                        correctIndex: 0
                    }, 
                    {
                        tag: {
                            text: "Thornwood",
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
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Ripplewood",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 4,
                                        dot: 3
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
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Stormwood",
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
                        correctIndex: 0
                    }, 
                    {
                        tag: {
                            text: "Twigwood",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
                                        dot: 3
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
                            padding: 'defaultNoBottomSmallContainer'
                        },
                        flexbox: {
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
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
                        title: "[<g>1.] Which type of wood equals [<f>3/4] ?",
                        correctIndex: 0,
                        paragraph: [
                            "Ri{p}plewood",
                            "Tw{i}gwood",
                            "Ironwoo{d}",
                        ],
                    },
                    {
                        title: "[<g>2.] Which two woods both have a denominator of 8?",
                        correctIndex: 1,
                        paragraph: [
                            "Silverwood {a}nd charwood",
                            "{I}ronwood and charwood",
                            "Ch{a}rwood and stormwood",
                        ],
                    },
                    {
                        title: "[<g>3.] Which two woods both equal one-half?",
                        correctIndex: 2,
                        paragraph: [
                            "{T}hornwood and stormwood",
                            "Ripp{l}ewood and ironwood",
                            "Thor{n}wood and twigwood",
                        ],
                    },
                    {
                        title: "[<g>4.] How many types of wood have a numerator of 1?",
                        correctIndex: 2,
                        paragraph: [
                            "O{n}e",
                            "{T}wo",
                            "Thre{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "PINE",
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
                    text: "Look at each fraction, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Equivalent Fractions",
                    commonCore: [
                        "3.NF.A.1",
                        "3.NF.A.2",
                        "3.NF.A.2a",
                        "3.NF.A.2b",
                        "3.NF.A.3",
                        "3.NF.A.3a",
                        "3.NF.A.3b",
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Yes, I'm a pirate \u2014 but a good one. I'm counting my supplies to see if I'm ready for the fight, but fractions make no sense to me. Think you can figure them out?",
                    complete: "If you ever wish to join a crew, come find me. I've heard whispers of a yeti's lair full of loot!"
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
                            text: "Barrel of Salted Fish",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
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
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "-1deg",
                            }
                        },
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Box of Whole Wheat Biscuits",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 3,
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
                                translateX: "1%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        },
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Jar of Pickles",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_1-4.svg",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        },
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Crate of Ropes",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
                                        dot: 3
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
                                translateX: "-2%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        },
                        correctIndex: 1
                    },  
                    {
                        tag: {
                            text: "Jug of Fresh Water",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_5-6.svg",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "1%",
                                rotate: "-1deg",
                            }
                        },
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Bucket of Nails",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_6-8.svg",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        },
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Container of Dried Fruit",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_2-8.svg",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
                                rotate: "1deg",
                            }
                        },
                        correctIndex: 0
                    },
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "percent22",
                            height: "auto",
                        },
                        misc: {
                            material: 'paper',
                            padding: "default"
                        },
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'defaultSmallContainer'
                        },
                        flexbox: {
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
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
                        title: "[<g>1.] True or false: the box of whole wheat biscuits is equal to [<f>1/2] .",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "{F}alse",
                        ],
                    },
                    {
                        title: "[<g>2.] Which item is equivalent to the jar of pickles?",
                        correctIndex: 2,
                        paragraph: [
                            "B{a}rrel of salted fish",
                            "Bo{x} of whole wheat biscuits",
                            "Container of dried fr{u}it",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of these items is equal to one-half?",
                        correctIndex: 1,
                        paragraph: [
                            "Bucket of na{i}ls",
                            "Crate of {r}opes",
                            "Neither of these i{t}ems is equal to one-half",
                        ],
                    },
                    {
                        title: "[<g>4.] Which item is equivalent to [<f>3/4] ?",
                        correctIndex: 0,
                        paragraph: [
                            "Bucket of nai{l}s",
                            "Barrel of {s}alted fish",
                            "Ju{g} of fresh water",
                        ],
                    },
                ],  
                code: {
                    answer: "FURL",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions as Whole Numbers",
                    commonCore: [
                        "3.NF.A.1",
                        "3.NF.A.3c",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "I need to make some sticky seaweed slime to trap the pirates, but my cutting board's all broken. I can't chop the seaweed without it, so hurry up and help me fix this mess!",
                    complete: "Yes... perfect! This slime's gonna be even stickier than I planned. I guess I owe you a thank you."
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
                                fraction: {
                                    text: "9 = ?/1",
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
                                    text: "6 = 6/?",
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
                                    text: "?/1 = 4",
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
                                    text: "2 = 2/?",
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
                                    text: "?/1 = 3",
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
                                    text: "8 = 8/?",
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
                                    text: "2/2 = 3/?",
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
                                    text: "7/? = 7",
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
                                    text: "1 = ?/1",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What number is missing from both gray pieces?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "8 {Y}",
                            "1 {D}",
                            "4 {T}",
                        ],
                    },
                    {
                        title: "[<g>2.] The top left piece is missing the number:",
                        correctIndex: 0,
                        paragraph: [
                            "N{i}ne",
                            "O{n}e",
                            "Thre{e}",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: the top right piece is missing the number [<i>one].",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>4.] Which two pieces are missing the number 3?",
                        correctIndex: 0,
                        paragraph: [
                            "The center and t{h}e bottom left",
                            "The cente{r} and top left",
                            "The bottom left and the bottom righ{t}",
                        ],
                    },
                ],  
                code: {
                    answer: "DISH",
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
                    text: "Look at each fraction, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare Fractions",
                    commonCore: [
                        "3.NF.A.1",
                        "3.NF.A.2",
                        "3.NF.A.2a",
                        "3.NF.A.2b",
                        "3.NF.A.3",
                        "3.NF.A.3a",
                        "3.NF.A.3b",
                        "3.NF.A.3d",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "I can't stay in this junk pile forever, I need to get out there and help defend the camp! Luckily, I can fix myself with different types of scrap metal. Think you can lend a hand?",
                    complete: "Oh, thank you! Thank you! Maybe I'm not as broken as I once thought."
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
                            text: "Lead",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Silver",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "1%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Iron",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/6",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
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
                                fraction: {
                                    text: "1/4",
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
                    {
                        tag: {
                            text: "Steel",
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
                                translateX: "1%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        },
                        correctIndex: 1
                    },  
                    {
                        tag: {
                            text: "Nickel",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_2-6.svg",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
                                rotate: "-2deg",
                            }
                        },
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Bronze",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_3-6.svg",
                                },
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        },
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Cobalt",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 3,
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
                                translateY: "1%",
                                rotate: "-1deg",
                            }
                        },
                        correctIndex: 1
                    },  
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "percent20",
                            height: "auto",
                        },
                        misc: {
                            material: 'metal',
                            padding: "default"
                        },
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'defaultSmallContainer'
                        },
                        flexbox: {
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which metal has a larger fraction: [<u>cobalt] or [<u>steel]?',
                        'B. Which metal has a smaller fraction: [<u>lead] or [<u>iron]?',
                        'C. [<u>True] or [<u>false]: bronze > nickel.',     
                        'D. Does [<u>silver] or [<u>cobalt] have the same numerator as copper?',                    
                    ],
                    puzzle: [
                        ["0","(B)I","0","0","(D)3S","0","0"],
                        ["0","1R","0","0","I","0","0"],
                        ["(A)C","O","B","A","L","4T","0"],
                        ["0","N","0","0","V","0","0"],
                        ["0","0","0","0","E","0","0"],
                        ["0","0","0","(C)T","R","2U","E"],
                    ]
                },  
                code: {
                    answer: "RUST",
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