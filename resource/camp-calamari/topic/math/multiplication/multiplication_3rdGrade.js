const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/math/multiplication/preview-3rd-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    challengeArray: [

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
                    topic: "Multiplication Facts",
                    commonCore: [
                        "3.OA.A.1",
                        "3.OA.C.7",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "Oh no, my magic mirror is broken! It lets me look into the future, and without it, I can't see the pirates' plans. Can you help me put the pieces back together?",
                    complete: "Ah, you've done it! My mirror is whole, and the future is clear."
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
                                    text: "3 × 7",
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
                                    text: "4 × 9",
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
                                    text: "11 × 10",
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
                                    text: "2 × 4",
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
                                    text: "5 × 12",
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
                                    text: "8 × 3",
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
                                    text: "9 × 6",
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
                                    text: "7 × 11",
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
                                    text: "6 × 6",
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
                        title: "[<g>1.] What is the answer to the bottom right piece?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "54 {R}",
                            "36 {T}",
                            "24 {D}",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the product of the top right piece?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "110 {I}",
                            "111 {H}",
                            "101 {E}",
                        ],
                    },
                    {
                        title: "[<g>3.] Solve the piece with the red sun, and the piece with the red moon. Both products are:",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Od{d} numbers",
                            "Even nu{m}bers",
                        ],
                    },
                    {
                        title: "[<g>4.] Which piece has an answer of 60?",
                        correctIndex: 2,
                        paragraph: [
                            "The bottom left pie{c}e",
                            "The {t}op left piece",
                            "The cent{e}r piece",
                        ],
                    },
                ],  
                code: {
                    answer: "TIME",
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
                    text: "Solve each problem, then use the secret code to answer the questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Determine the Unknown Number in an Equation",
                    commonCore: [
                        "3.OA.A.1",
                        "3.OA.A.4",
                        "3.OA.C.7",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "I need to collect ingredients so the camp doesn't go hungry, but everything is in code. You better start cracking these clues before we all go hungry!",
                    complete: "Well, lad, you ain't as useless as I thought \u2014 you've got a real brain on ya. Thanks for the help!"
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
                            text: "Gallons of &nbsp[<p>MILK]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "4 × ? = 36"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "30%",
                                translateY: "40%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Cartons of &nbsp[<p>EGGS]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "? × 7 = 56"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-52%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Jars of &nbsp[<p>HONEY]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "9 × ? = 72"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-33%",
                                translateY: "25%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Bags of &nbsp[<p>FLOUR]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "? × 6 = 42"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "18%",
                                translateY: "90%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Boxes of &nbsp[<p>TOFU]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "11 × ? = 66"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "10%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Containers of &nbsp[<p>SALT]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "? × 12 = 120"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-25%",
                                translateY: "60%",
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
                                translateX: "-5%",
                                translateY: "37%",
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
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent25",
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
                                size: 'medium',
                                align: 'center'
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which ingredient is missing the number 7?",
                        correctIndex: 0,
                        paragraph: [
                            "{F}lour",
                            "Eg{g}s",
                            "S{a}lt",
                        ],
                    },
                    {
                        title: "[<g>2.] Which ingredient is missing the largest number?",
                        correctIndex: 2,
                        paragraph: [
                            "{M}ilk",
                            "Tof{u}",
                            "Sa{l}t",
                        ],
                    },
                    {
                        title: "[<g>3.] What number is missing from the boxes of tofu?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "11 {Z}",
                            "6 {A}",
                            "5 {B}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which of the following ingredients shares the same missing number as the cartons of eggs?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "{S}alt",
                            "M{i}lk",
                            "Ho{n}ey",
                            "Flo{u}r",
                        ],
                    },
                ],  
                code: {
                    answer: "FLAN",
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
                    text: "Read each note, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Word Problems",
                    commonCore: [
                        "3.OA.A.1",
                        "3.OA.A.2",
                        "3.OA.A.3",
                        "3.OA.A.4",
                        "3.OA.C.7",
                        "3.OA.D.8",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "I've got a great plan to scare off the pirates. I'll build fake people out of driftwood and set them up on the beach. That way, it'll look like we have a huge army! Want to check over my notes?",
                    complete: "I've seen lots of driftwood, but never found one quite like me... Well, anyway \u2014 thanks!"
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
                                title: {
                                    text: '[<bwb>Note A: Wooden Knights]',
                                },
                                passage: {
                                    text:   "<br>I plan to make 5 wooden knights. Each knight will be made from 4 pieces of driftwood."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "1%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: '[<bwb>Note B: Wooden Samurai]',
                                },
                                passage: {
                                    text:   "<br>It will take ten pieces of driftwood to make a single wooden samurai. In all, I need to make eight wooden samurai."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-10%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: '[<bwb>Note C: Wooden Vikings]',
                                },
                                passage: {
                                    text:   "<br>With 8 pieces of driftwood, I can make 2 wooden vikings."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "3%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: '[<bwb>Note D: Wooden Gladiators]',
                                },
                                passage: {
                                    text:   "<br>There are 25 pieces of driftwood behind the shed, which I will use to build some wooden gladiators. I want to make 7 of these gladiators. Each one needs 3 pieces of driftwood."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-3%",
                                rotate: "-3deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'paper',
                            padding: "default"
                        },
                        dimension: {
                            width: "percent40",
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
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
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
                        title: "[<g>1.] How many pieces of driftwood are needed to make all 5 wooden knights?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "9 p{i}eces",
                            "25 pi{e}ces",
                            "20 pie{c}es",
                            "15 piece{s}",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: it will take fifty pieces of driftwood to make eight wooden samurai.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] If you double the pieces of driftwood in \"Note C,\" how many wooden vikings can you make?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "2 wo{o}den vikings",
                            "16 wooden vikin{g}s",
                            "4 wooden {v}ikings",
                            "8 wooden vi{k}ings",
                        ],
                    },
                    {
                        title: "[<g>4.] Are there enough pieces of driftwood behind the shed to make all seven gladiators?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },
                ],  
                code: {
                    answer: "CAVE",
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
                    text: "Look at each array and problem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Properties of Multiplication; Arrays",
                    commonCore: [
                        "3.OA.A.1",
                        "3.OA.A.2",
                        "3.OA.B.5",
                        "3.OA.C.7",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "Oh... you're here! I've been searching through this junk to build some traps, but my circuits are fried from all the salt water. Can you help me count up what I've found?",
                    complete: "Aw, thanks so much! Maybe if I'm useful enough, someone will finally fix me..."
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
                            text: "Number of [<u>Springs]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>D D D D D D<br> \
                                    D D D D D D<br> \
                                    D D D D D D<br> \
                                    D D D D D D<br> \
                                    D D D D D D<br> \
                                    D D D D D D]",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-1%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Number of [<u>Pulleys]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "13 × 7 =<br> \
                                    (5+8) × 7 =<br> \
                                    (5×7) + (8×7) =<br> \
                                    35 + 56 =",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Number of [<u>Wires]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>U U U U U<br> \
                                    U U U U U<br> \
                                    U U U U U<br> \
                                    U U U U U<br> \
                                    U U U U U<br> \
                                    U U U U U]",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Number of [<u>Motors]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "6 × 4 = 4 × 6",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Number of [<u>Fuses]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>C C C C<br> \
                                    C C C C]",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Number of [<u>Valves]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "14 × 3 =<br> \
                                    (10+4) × 3 =<br> \
                                    (10×3) + (4×3) =<br> \
                                    30 + 12 =",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
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
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'defaultSmallContainer'
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Are there more [<u>springs] or [<u>wires]?',
                        'B. [<u>True] or [<u>false]: “Number of Pulleys” shows the associative property.',
                        'C. Which item shows the array 2 × 4 = 8 ?',     
                        'D. Which item shows the commutative property: [<u>motors] or [<u>valves]?',                    
                    ],
                    puzzle: [
                        ["(C)F","0","(D)M","0","0","0","0"],
                        ["U","0","O","0","0","0","(B)F"],
                        ["4S","0","3T","0","0","0","2A"],
                        ["E","0","O","0","0","0","L"],
                        ["(A)S","P","1R","I","N","G","S"],
                        ["0","0","S","0","0","0","E"],
                    ]
                },  
                code: {
                    answer: "RATS",
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