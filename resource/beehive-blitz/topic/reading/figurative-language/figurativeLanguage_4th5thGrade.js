const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/reading/figurative-language/preview-4th-5th-grade.png",
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
                    text: "Read each passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Similes and Metaphors",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.4",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.6",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.6",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "Hey! Basil Rabbit checking in. The bees need me to help gather nectar from certain flowers, but I just can't make sense of their instructions. I really don't want to let the hive down! Can you help?",
                    complete: "Thanks a million, pal. I definitely didn't wanna mess up this time!"
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
                            text: "Lavender",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Stems of purple lavender stand as tall as towers. Gather their nectar before the storm's fury!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "0%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Aster",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Collect plenty of nectar from asters: those fallen stars that dot the fields.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-2%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Coneflower",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "In even the lightest breeze, coneflowers sway as elegantly as dancers. Harvest their nectar with care.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "2%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Foxglove",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Harvesting foxglove nectar is like flipping an hourglass. Once plucked, its sweetness starts to slip away.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Marigold",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Standing like guardians of old, marigolds defy the storm's power, inviting you to gather their nectar.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "2%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Verbena",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Verbena fills the valley — a vast purple sea. When collecting its nectar, you'll feel like a captain racing against the storm!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "3%",
                                rotate: "1deg",
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
                            padding: 'defaultNoBottom'
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
                                height: "full",
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
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
                        title: "[<g>1.] What is the meaning of the aster metaphor?",
                        correctIndex: 1,
                        paragraph: [
                            "Asters are actual sta{r}s that fell to Earth",
                            "Asters are small, brig{h}t, and scattered",
                            "Asters are hard to spot in the fiel{d}s",
                        ],
                    },
                    {
                        title: "[<g>2.] What do the foxglove instructions suggest?",
                        correctIndex: 2,
                        paragraph: [
                            "F{o}xglove blooms tell time like a clock",
                            "Foxglove blooms are shaped l{i}ke hourglasses",
                            "Foxglove nect{a}r loses sweetness over time",
                        ],
                    },
                    {
                        title: "[<g>3.] What does the coneflower simile mean?",
                        correctIndex: 0,
                        paragraph: [
                            "Coneflowers move g{r}acefully in the wind",
                            "Coneflo{w}ers perform a specific dance routine",
                            "Bees enjoy dancing near co{n}eflowers",
                        ],
                    },
                    {
                        title: "[<g>4.] What does the verbena metaphor imply?",
                        correctIndex: 1,
                        paragraph: [
                            "It grows only in pur{p}le seas",
                            "It fills the vall{e}y with color",
                            "Collecti{n}g its nectar will turn you into a pirate",
                        ],
                    },
                ],  
                code: {
                    answer: "HARE",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Sort each instruction into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Hyperbole and Personification",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.4",
                        "L.4.5",
                        "L.4.6",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.5",
                        "L.5.6",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "I'm Grumblegrub, the manager here. I like it dark and quiet, and the Queen's new orders are making that impossible. Just help me sort a few things out, okay? And don't expect any thanks.",
                    complete: "Huh... you actually did it. Just don't confuse my surprise for gratitude."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Instructions With<br>[<u>Hyperbole]",
                        "Instructions With<br>[<u>Personification]",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                     {
                        tag: {
                            text: "Instruction #12: Honey Jars",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "There are a million honey jars to sort; better get started now.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Instruction #31: Boxes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Explain the purpose of those mysterious boxes sulking in the corner. I don't remember ordering them.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Instruction #34: Warehouse",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This warehouse is bursting at the seams! Reorganize it immediately.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Instruction #82: Conveyor Belt",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The conveyor belt is moving faster than lightning. Slow it down!",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Instruction #57: Crates",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Why are these lazy crates just lounging around? Stack them neatly before they cause any trouble.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Instruction #64: Lightbulbs",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Install some new lightbulbs! The shadows are playing tricks on you.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Instruction #99: Gold Bars",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "My gold bars weigh a ton, so be careful when handling them.",
                                }, 
                            }
                        ],
                        correctIndex: 0
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
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
                            passage: {
                                font: 'default',
                                size: 'tiny',
                                align: 'left'
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
                        title: "[<g>1.] Compare #31 and #34. Which is focused on the warehouse running out of space?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Ins{t}ruction #31",
                            "In{s}truction #34",
                        ],
                    },
                    {
                        title: "[<g>2.] How many instructions contain hyperbole?",
                        correctIndex: 1,
                        paragraph: [
                            "Thr{e}e",
                            "F{o}ur",
                            "{F}ive",
                        ],
                    },
                    {
                        title: "[<g>3.] What does the figurative language in #64 mean?",
                        correctIndex: 1,
                        paragraph: [
                            "The bees enjoy playing {p}ractical jokes",
                            "The dim light makes things look st{r}ange",
                            "The sh{a}dows are hiding in the corners",
                        ],
                    },
                    {
                        title: "[<g>4.] What makes instruction #82 a hyperbole?",
                        correctIndex: 2,
                        paragraph: [
                            "It contains a complicated descript{i}on",
                            "Lightning is always used {f}or hyperbole",
                            "A conveyor bel{t} can't possibly move that fast",
                        ],
                    },
                ],  
                code: {
                    answer: "SORT",
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
                    topic: "Onomatopoeia and Alliteration",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.4",
                        "L.4.5",
                        "L.4.6",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.5",
                        "L.5.6",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Oh no... How is it that a leprechaun like me ends up with all the bad luck? The Queen's special golden tablet is in pieces, and I've tried everything to fix it! Can you help me put it back together?",
                    complete: "Thanks for your help. Unlike Gustav, I believe in building things up, not tearing them down!"
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
                                    text: "Stormy skies stirred swiftly.",
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
                                    text: "Thunder cracked across the sky.",
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
                                    text: "Busy bees flew between blooming blossoms.",
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
                                    text: "The flower's purple petals peeked out.",
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
                                    text: "Golden globs of gleaming honey dripped down.",
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
                                    text: "The huge storm rumbled in the distance.",
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
                                    text: "The bee's wings whirred in the wind.",
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
                                    text: "Nectar fell with a soft plop into the storage jar.",
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
                                    text: "The storm's wind whooshed through the valley.",
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
                                puzzle: 'default'
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
                        title: "[<g>1.] The bottom left piece contains:",
                        correctIndex: 2,
                        paragraph: [
                            "Only onomato{p}oeia",
                            "Only alliter{a}tion",
                            "{B}oth onomatopoeia and alliteration",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the top right piece uses alliteration to highlight the fast-paced energy of the bees.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tr{u}e",
                            "Fals{e}",
                        ],
                    },
                    {
                        title: "[<g>3.] In the piece with a star, onomatopoeia is used to:",
                        correctIndex: 2,
                        paragraph: [
                            "Descri{b}e the storm's exact location",
                            "Illustrate the peaceful natur{e} of the storm",
                            "Hint at the storm's {d}istant yet threatening power",
                        ],
                    },
                    {
                        title: "[<g>4.] In the center piece, alliteration is used to:",
                        correctIndex: 1,
                        paragraph: [
                            "Create {a} sense of harshness for the reader",
                            "Use rhythm to highlight honey's vi{s}ual appeal",
                            "{D}escribe the sweet smell of fresh honey",
                        ],
                    },
                ],  
                code: {
                    answer: "BUDS",
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
                    text: "Read the poem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Idioms, Adages, and Proverbs",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.4",
                        "L.4.5",
                        "L.4.5b",
                        "L.4.6",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.5",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.5",
                        "L.5.5b",
                        "L.5.6",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Yeah, I'm Riff Wingman. The name speaks for itself. My latest slam poem just isn't hitting right, and I need some help figuring out why. What do you say \u2014 want to give it a read?",
                    complete: "I guess even legends need a little help sometimes. Let's get this hive buzzing like the old days!"
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
                                    text: 'Buzz Now, Rest Later',
                                },
                                subtitle: {
                                    text: 'By Riff Wingman',
                                },
                                passage: {
                                    text:   "Time waits for no bee, and this storm is our sign. \
                                    <br> \
                                    So let's make hay while the sun still shines. \
                                    <br> \
                                    Every cloud has a silver lining, they say. \
                                    <br> \
                                    But not this time. It's almost too late. \
                                    <br> \
                                    <br> \
                                    So strike while the iron is hot! \
                                    <br> \
                                    One chance is all that we've got! \
                                    <br> \
                                    <br> \
                                    When the going gets tough, the tough get buzzing. \
                                    <br> \
                                    [<u>We're in the same boat]; no room for fussing. \
                                    <br> \
                                    A stitch in time saves nine, you know. \
                                    <br> \
                                    Let's get nectar now \u2014 don't wait, just go!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "5%",
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
                            width: "auto",
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
                        'A. [<u>True] or [<u>false]: lines 2 and 5 are proverbs that both mean \"to take advantage of good opportunities while they last.\"',
                        'B. Which line contains an idiom meaning \"the good side of a bad situation:\" line [<u>three] or line [<u>seven]?',
                        'C. Which line means \"fixing a small problem now will prevent bigger problems later?\"',     
                        'D. Is the underlined phrase in line 8 best described as an [<u>idiom], [<u>adage], or [<u>proverb]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","(A)1T","0","(B)T","0"],
                        ["0","(D)I","0","R","0","H","0"],
                        ["0","D","0","U","0","R","0"],
                        ["(C)N","I","3N","E","0","E","0"],
                        ["0","2O","0","0","0","4E","0"],
                        ["0","M","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "TONE",
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