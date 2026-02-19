const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/math/fractions/preview-4th-grade.png",
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
                    text: "Read each word problem, the answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fraction Word Problems With Addition and Subtraction",
                    commonCore: [
                        "4.NF.B.3",
                        "4.NF.B.3a",
                        "4.NF.B.3d",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "To prepare for the pirates, I've been fixing things around camp. You'd be surprised what driftwood can patch up! I'm just worried that my measurements are a bit off. Can you check?",
                    complete: "Thanks, mate! With your help, everything's looking pretty sturdy."
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
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "[<u>Inspirational Stump]<br><br>By the camp's main gate, there's a thick tree stump. We use it as a platform to give inspirational speeches. Problem is, the stump should be [<f>2/3] of a yard tall \u2014 but beavers chewed off [<f>1/3] of a yard!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "1%",
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
                                    text: "[<u>Cheese Barrels]<br><br>We used to have lots of cheese barrels, until a storm swept them out to sea. Luckily, a couple broken barrels washed back up on the beach. One barrel is [<f>4/5] complete, and the other is [<f>2/5] complete.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-25%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "1.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "[<u>Twisty Driftwood Traps]<br><br>I'm covering the beach with twisty driftwood traps to trip the pirates. Last night, I covered [<f>2/7] of the beach. This morning, I covered [<f>3/7] more.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "10%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "3.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "[<u>The Camp's Fence]<br><br>My most difficult task is fixing up the camp's fence. Only one-eighth of it is in good shape. The rest needs to be replaced.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-37%",
                                rotate: "-3deg",
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
                        title: "[<g>1.] How much of the inspirational stump is left?",
                        correctIndex: 1,
                        paragraph: [
                            "[<f>2/3] of a {y}ard",
                            "[<f>1/3] of a ya{r}d",
                            "1 yar{d}",
                        ],
                    },
                    {
                        title: "[<g>2.] If combined, both broken cheese barrels are enough to make at least one complete barrel.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tru{e}",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>3.] What fraction of the beach is covered in twisty driftwood traps?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "[<f>1/7] {D}",
                            "[<f>5/7] {E}",
                            "[<f>6/7] {T}",
                            "[<f>2/7] {S}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which equation shows the fraction of the camp's fence that needs to be replaced?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "[<f>1/8] + [<f>7/8] = 1 {D}",
                            "[<f>1/8] + [<f>1/8] = [<f>2/8] {S}",
                            "1 + [<f>1/8] = [<f>9/8] {Z}",
                            "1 - [<f>1/8] = [<f>7/8] {F}",
                        ],
                    },
                ],  
                code: {
                    answer: "REEF",
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
                    topic: "Add and Subtract Mixed Numbers",
                    commonCore: [
                        "4.NF.B.3",
                        "4.NF.B.3a",
                        "4.NF.B.3c",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "I've cooked up a recipe so foul, its stench will send the Red Tide Pirates running! But my cutting board is broken, and I can't chop a thing without it. Can you fix it while I prep the ingredients?",
                    complete: "Nice work, lad. Now get outta here before I put you to work scrubbin' pots and pans!"
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
                                    text: "8 3/6 - 4 2/6",
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
                                    text: "2 3/8 + 1 5/8",
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
                                    text: "7 3/4 + 2 2/4",
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
                                    text: "9 1/4 - 7 3/4",
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
                                    text: "6 5/12 + 1 4/12",
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
                                    text: "5 6/8 - 2 3/8",
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
                                    text: "1 2/5 + 2 4/5",
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
                                    text: "11 2/5 - 7 3/5",
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
                                    text: "1 1/2 + 2 1/2",
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
            
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which piece has an answer of 4 [<f>1/5]?",
                        correctIndex: 2,
                        paragraph: [
                            "The top left piec{e}",
                            "The {b}ottom middle piece",
                            "The bottom le{f}t piece",
                        ],
                    },
                    {
                        title: "[<g>2.] Which two pieces both have an answer of 4?",
                        correctIndex: 0,
                        paragraph: [
                            "The m{i}ddle top, and the bottom right",
                            "The middle bott{o}m, and the top right",
                            "The bottom ri{g}ht, and the top left",
                        ],
                    },
                    {
                        title: "[<g>3.] Find the sum of the fractions in the center piece.",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "8 [<f>9/12] {M}",
                            "7 [<f>3/4] {S}",
                            "7 [<f>1/3] {T}",
                        ],
                    },
                    {
                        title: "[<g>4.] In the simplest form, which piece's answer is 1 [<f>1/2]?",
                        correctIndex: 0,
                        paragraph: [
                            "T{h}e middle left piece",
                            "The top left piec{e}",
                            "The middle right {p}iece",
                        ],
                    },
                ],  
                code: {
                    answer: "FISH",
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
                    text: "Sort each fraction into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare Fractions",
                    commonCore: [
                        "4.NF.B.3",
                        "4.NF.B.3a",
                        "4.NF.A.1",
                        "4.NF.A.2",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "I've got all these boxes of junk, which Driftwood Dan will use to build his traps. There's just one problem: my motors are too rusty to sort through everything! Can you lend a hand?",
                    complete: "Well, I really couldn't have done it without you. Guess I'm just another piece of junk in the pile..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Less than [<f>1/2]",
                        "Equal to [<f>1/2]",
                        "Greater than [<f>1/2]",
                    ],
                    asset: {
                        scope: "global",
                        path: "3-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Box of Steel Wool",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/8",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Box of Gears",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/12 + 4/12",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Box of Scrap Metal",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/6",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Box of Screws",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "8/12",
                                }, 
                            },
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Box of Springlocks",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "5/10",
                                }, 
                            },
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Box of Nails",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "7/8 - 1/8",
                                }, 
                            },
                        ],
                        correctIndex: 2
                    },
                    {
                        tag: {
                            text: "Box of Pipes",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/3",
                                }, 
                            },
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Box of Wires",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/3",
                                }, 
                            },
                        ],
                        correctIndex: 2
                    },
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "sort3Width",
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which box has the smallest fraction?",
                        correctIndex: 0,
                        paragraph: [
                            "Box of p{i}pes",
                            "Box of gea{r}s",
                            "Box of springl{o}cks",
                        ],
                    },
                    {
                        title: "[<g>2.] How many boxes are equivalent to [<f>1/2] ?",
                        correctIndex: 1,
                        paragraph: [
                            "Tw{o}",
                            "Th{r}ee",
                            "Fo{u}r",
                        ],
                    },
                    {
                        title: "[<g>3.] Which box has the largest fraction?",
                        correctIndex: 2,
                        paragraph: [
                            "Box of wir{e}s",
                            "Box of steel {w}ool",
                            "B{o}x of nails",
                        ],
                    },
                    {
                        title: "[<g>4.] Which two boxes have equivalent fractions?",
                        correctIndex: 2,
                        paragraph: [
                            "The bo{x} of gears, and the box of springlocks",
                            "The box of pipes, and the box of scr{e}ws",
                            "The box of wires, a{n}d the box of screws",
                        ],
                    },
                ],  
                code: {
                    answer: "IRON",
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
                    text: "Solve each problem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiply Fractions by Whole Numbers",
                    commonCore: [
                        "4.NF.B.4",
                        "4.NF.B.4a",
                        "4.NF.B.4b",
                        "4.NF.B.4c",
                    ],
                }
            },
            
            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "The Red Tide Pirates are coming, lad \u2014 but ol' Fishbeard has a plan! I'll gather loot and hire a crew to fight back. Can ye do the math to see if I have enough treasure?",
                    complete: "Thank ye! Now, let's hoist the sails \u2014 just as soon as I find where the parrot hid me spyglass."
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
                            text: "[<u>Pearls]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 × 1/2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "0%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Yards of [<u>Silk]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/4 × 5",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "40%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pounds of [<u>Silver]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4/5 × 2",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "[<u>Rubies]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "4 × 2/4",
                                }, 
                            }
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
                            text: "Ounces of [<u>Gold]",
                        },
                        contentArray: [
                            {
                                fraction: {
                                    text: "2/6 × 7",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                     {
                        tag: {
                            text: "Barrels of [<u>Honey]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "I just got a shipment of honey from the bees of Bumbleburg Hive, but they tricked me! They sent 5 barrels, but each one's only two-fifths full. Once this mess with the Red Tide Pirates is done, I'll sail over and take the rest myself. \
                                    <br> \
                                    <br> \
                                    Signed, \
                                    <br> \
                                    Captain Fishbeard"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "5%",
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'large',
                                    fraction: 'medium'
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
                        'A. Are there more [<u>pearls] or [<u>rubies]?',
                        'B. [<u>True] or [<u>false]: the product for \"Ounces of Gold\" is a whole number.',
                        'C. Which item of loot has a product of 1 [<f>3/5] ?',     
                        'D. Which item of loot has an answer of 3 [<f>3/4] ?',                    
                    ],
                    puzzle: [
                        ["(A)P","4E","A","R","L","(C)S","0"],
                        ["0","0","0","0","0","I","0"],
                        ["0","0","0","(D)S","1I","3L","K"],
                        ["0","0","0","0","0","V","0"],
                        ["0","(B)F","A","L","2S","E","0"],
                        ["0","0","0","0","0","R","0"],
                    ]
                },  
                code: {
                    answer: "ISLE",
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