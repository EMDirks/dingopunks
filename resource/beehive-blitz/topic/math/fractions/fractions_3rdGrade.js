const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/math/fractions/preview-3rd-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ sunny snap
        {
            info: {
                type: 'challenge',
                title: "Accounting Dept.",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Look at each number line, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions on a Number Line",
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
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Oh no... Queen Bella asked me to find how full our flower crates are, but I'm just too busy! Think you can help me?",
                    complete: "I still have so much to do... I really hope my luck turns around. Anyway, thanks for the help!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sunny-snap.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Crate of [<u>Petunias]",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 6,
                                        dot: 5
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
                                translateX: "-15%",
                                translateY: "-20%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Crate of [<u>Orchids]",
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
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Crate of [<u>Tulips]",
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
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Crate of [<u>Daisies]",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 3,
                                        dot: 0
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
                                translateX: "3%",
                                translateY: "2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Crate of [<u>Azaleas]",
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
                                    },
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Crate of [<u>Violets]",
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
                                    },
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "12%",
                                translateY: "15%",
                                rotate: "4deg",
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
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            dimension: {
                                width: "percent80",
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
                        title: "[<g>1.] Which crate is [<f>3/8] full?",
                        correctIndex: 2,
                        paragraph: [
                            "Pe{t}unias",
                            "Daisie{s}",
                            "Vio{l}ets",
                        ],
                    },
                    {
                        title: "[<g>2.] Which crate is [<f>2/5] full?",
                        correctIndex: 0,
                        paragraph: [
                            "Tul{i}ps",
                            "Azale{a}s",
                            "N{o}ne of the above",
                        ],
                    },
                    {
                        title: "[<g>3.] Which crate has a denominator of six?",
                        correctIndex: 1,
                        paragraph: [
                            "Or{c}hids",
                            "Petunia{s}",
                            "Viole{t}s",
                        ],
                    },
                    {
                        title: "[<g>4.] True/false: the crate of azaleas and the crate of orchids are equivalent.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{T}rue",
                            "F{a}lse",
                        ],
                    },
                ],  
                code: {
                    answer: "LIST",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Equivalent Fractions",
                    commonCore: [
                        "3.NF.A.3",
                        "3.NF.A.3a",
                        "3.NF.A.b",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "Oh man... My map of the valley got all torn up, and now I can't help the bees gather nectar! Can you help me put this thing back together?",
                    complete: "Thanks, thanks, thanks! You really saved my tail. Time to hop along!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "basil-rabbit-2.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/4",
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
                                    text: "1/3",
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
                                    text: "2/5",
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
                                    text: "4/6",
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
                                    text: "4/8",
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
                                    text: "3/4",
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
                                    text: "2/8",
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
                                    text: "5/6",
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
                                    text: "3/6",
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
                        title: "[<g>1.] True or false: the piece with the yellow beehive is equivalent to the piece in the center.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{T}rue",
                            "Fals{e}",
                        ],
                    },
                    {
                        title: "[<g>2.] Which other piece is equal to [<f>1/2] ?",
                        correctIndex: 1,
                        paragraph: [
                            "The top ri{g}ht piece",
                            "The top l{e}ft piece",
                            "T{h}e bottom left piece",
                        ],
                    },
                    {
                        title: "[<g>3.] The bottom left piece is equivalent to:",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "[<f>1/6] {F}",
                            "[<f>1/8] {K}",
                            "[<f>1/4] {A}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which piece is equal to [<f>6/8] ?",
                        correctIndex: 0,
                        paragraph: [
                            "The middle {r}ight piece",
                            "The middle {l}eft piece",
                            "The piece with the yellow beehi{v}e",
                        ],
                    },
                ],  
                code: {
                    answer: "TEAR",
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
                    text: "Find the missing number for each fraction, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions as Whole Numbers",
                    commonCore: [
                        "3.NF.A.3c",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Riff here. Queen Bella needs me to figure out how much wax we have \u2014 but it's all in code! I don't have the brains for this. Want to help me?",
                    complete: "Thanks, my dude. Without you, this would've been a total flop."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "riff-wingman.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "U",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 5,
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
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "75%",
                                rotate: "-3deg",
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
                                    text: "1 = ?/4",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "4%",
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
                                    text: "2/2 = ?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-4%",
                                rotate: "-1deg",
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
                                    text: "10/? = 10",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "70%",
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
                                fraction: {
                                    text: "3/3 = 8/?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "T",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 = ?/1",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-3%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>U] = Golden wax<br> \
                                            [<s>L] = Crystal wax<br> \
                                            [<s>D] = Icy wax",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "40%",
                                rotate: "-5deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>M] = Shadow wax<br> \
                                            [<s>S] = Danger wax<br> \
                                            [<s>T] = Gloom wax",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "8%",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which wax is missing the number 1: [<u>shadow] or [<u>crystal]?',
                        'B. Does [<u>golden] wax or [<u>danger] wax show [<f>5/5] = 1 ?',
                        'C. [<u>True] or [<u>false]: the \"shadow wax\" fraction is missing a numerator of 5.',     
                        'D. Which wax is missing the number 8?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","(B)G"],
                        ["(D)I","0","0","0","0","0","2O"],
                        ["(A)C","1R","Y","S","T","A","L"],
                        ["4Y","0","0","0","0","0","D"],
                        ["0","0","(C)F","A","L","3S","E"],
                        ["0","0","0","0","0","0","N"],
                    ]
                },  
                code: {
                    answer: "ROSY",
                    userArray: ["","","",""]
                },
            }
            
        },

        // ⭐ queen bella
        {
            info: {
                type: 'challenge',
                title: "Throne Room",
                asset: "queen-bella.png",
                state: "incomplete",
                hint: {
                    text: "Sort each fraction into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
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
                        "3.NF.A.3c",
                        "3.NF.A.3d",
                        "3.G.A.2",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "Our survival depends on harvesting nectar from the flower fields. As such, I must sort each field based on how much nectar has been harvested. Will you help me?",
                    complete: "Well done, Puzzle Punks. Send J.J. Crispy my thanks."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Fields Less Than [<f>1/2] Harvested",
                        "Fields More Than [<f>1/2] Harvested",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Zinnia Field",
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
                            text: "Sunflower Field",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/8",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Coneflower Field",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5/5",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Daisy Field",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "One sixth",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Clover Field",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/8",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Bluebell Field",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/6",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Snapdragon Field",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_7-8.svg",
                                },
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
                            padding: 'defaultSmallContainer'
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
                                width: "percent80",
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
                        title: "[<g>1.] Which field has the smallest fraction?",
                        correctIndex: 2,
                        paragraph: [
                            "Sna{p}dragon field",
                            "Zinnia {f}ield",
                            "Sunflower fie{l}d",
                        ],
                    },
                    {
                        title: "[<g>2.] What symbol would you use to compare the sunflower field to the clover field?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "< {A}",
                            "> {I}",
                            "= {E}",
                            "+ {O}",
                        ],
                    },
                    {
                        title: "[<g>3.] Which field has a fraction greater than the snapdragon field?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Dais{y} field",
                            "Coneflower fiel{d}",
                            "{Z}innia field",
                            "{C}lover field",
                        ],
                    },
                    {
                        title: "[<g>4.] The bluebell field is equal to which other field?",
                        correctIndex: 2,
                        paragraph: [
                            "{S}unflower field",
                            "Clov{e}r field",
                            "Dais{y} field",
                        ],
                    },
                ],  
                code: {
                    answer: "LADY",
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