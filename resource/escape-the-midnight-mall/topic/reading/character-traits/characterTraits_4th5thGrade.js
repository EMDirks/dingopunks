const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/character-traits/thumbnail-4th-5th-grade.png",
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
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Identify Character Traits",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee hee! I was in the newspaper again — something about sparks and a corn dog. I didn\'t really read it, though... reading\'s not exactly my thing. Mind taking a look for me?",
                    complete: "Yay! You just earned one spark-free corn dog. And a high-five. Hee hee!"
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
                                    text: 'The Midnight Mall Goes Dark',
                                },
                                subtitle: {
                                    text: 'By Chet Waffles, Contributing Reporter',
                                },
                                passage: {
                                    text:   "Last night, the Midnight Mall lost power for two hours, leaving customers in the dark. The outage began near Critterwerks, a shop run by local inventor Topsy.\
                                    <br>\
                                    Witnesses say sparks flew after the careless inventor jammed a corn dog into an electrical panel \"just to see what would happen.\" When the lights went out, she sprinted to the electrical panel with some jumper cables.\
                                    <br>\
                                    \"This is exactly the kind of emergency I trained for,\" said Topsy, clearly overconfident as she tied the cables to the burned panel and flipped a switch.\
                                    <br>\
                                    The lights did not come back on. Instead, the popcorn stand caught on fire."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "2deg",
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
                            width: "percent60",
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
                                brSplit: 'default',
                                
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
                        title: "[<g>1.] Who is the main character in this story?",
                        correctIndex: 2,
                        paragraph: [
                            "Chet Waffl{e}s",
                            "T{h}e mall\'s customers",
                            "To{p}sy",
                        ],
                    },
                    {
                        title: "[<g>2.] The trait that best describes Topsy when she \"jammed a corn dog into an electrical panel\" is:",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "C{a}reless",
                            "Sma{r}t",
                            "Th{o}ughtful",
                            "Bori{n}g",
                        ],
                    },
                    {
                        title: "[<g>3.] What other character trait does Topsy have?",
                        correctIndex: 1,
                        paragraph: [
                            "S{e}riousness",
                            "Ove{r}confidence",
                            "{C}aution",
                        ],
                    },
                    {
                        title: "[<g>4.] Which line reveals this other character trait?",
                        correctIndex: 2,
                        paragraph: [
                            "\"The out{a}ge began near Critterwerks...\"",
                            "\"...she sp{r}inted to the electrical panel...\"",
                            "\"...clearly overconfiden{t} as she tied the cables...\"",
                        ],
                    },
                ],  
                code: {
                    answer: "PART",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ prismatica
        {
            
            info: {
                type: 'challenge',
                title: 'Prismatica',
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Infer Character Traits",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.8",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.8",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "Oh my, another letter from someone who wants a job here. I don\'t read these things; they\'re too dull and completely lacking in sparkle. Be a darling and skim it for me, will you?",
                    complete: "How thoughtful of you. I do love when someone else handles the boring parts."
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
                                passage: {
                                    text:   "Dear Prisma,\
                                    <br>\
                                    <br>\
                                    I would like to apply for the assistant job at your shop. I always get things right the first time, and I don\'t ask unnecessary questions.\
                                    <br>\
                                    <br>\
                                    I pay close attention to instructions, even small ones. I keep things tidy, stay quiet, and only add glitter if I\'ve been told to.\
                                    <br>\
                                    <br>\
                                    Thank you for your time. I\'m ready to begin whenever you are.\
                                    <br>\
                                    <br>\
                                    Yours truly,\
                                    <br>\
                                    Wren Wexley"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-2deg",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Does \"I always get things right the first time\" allow us to infer that Wren is [<u>careful] or [<u>clumsy]?',
                        'B. Is Wren a [<u>good] or [<u>bad] listener?',
                        'C. [<u>True] or [<u>false]: The first sentence of this letter shows that Wren is an organized person.',     
                        'D. Based on Wren\'s tone, which of these character traits best fits him: [<u>fearful], [<u>serious], or [<u>anxious]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","(B)G","O","O","4D"],
                        ["0","F","0","0","0","0","0"],
                        ["(A)C","A","R","E","1F","U","3L"],
                        ["0","L","0","0","0","0","0"],
                        ["0","S","0","0","0","0","0"],
                        ["(D)S","E","R","I","2O","U","S"],
                    ]
                },  
                code: {
                    answer: "FOLD",
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
                    text: "Figure out if each review shows a character trait, feeling, or motivation \u2014 then sort them into the correct columns. Finally, answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Character Traits, Feelings, and Motivations",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.4",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.2",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.9",
                        "RL.4.10",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.7",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I MUST read these reviews before closing for the night! I\'m supposed to sort each one as a trait, feeling, or motivation... but I don\'t really know the difference! Can you help me?",
                    complete: "Oh, thank you! You really saved me. I think I can breathe again now."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Reviews That<br>Show TRAITS",
                        "Reviews That<br>Show FEELINGS",
                        "Reviews That<br>Show MOTIVATIONS",
                    ],
                    asset: {
                        scope: "global",
                        path: "3-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "E",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I always toss my candy wrappers on the floor. It\'s just how I am.\
                                    <br>\
                                    <br>\
                                    - Denton Brigg",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "EEEEE",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I felt SO excited when I saw they brought back the sour slime ropes!\
                                    <br>\
                                    <br>\
                                    - Huxley Jones",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "EEEE",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I come here every day, but I\'ve never spoken to a single soul.\
                                    <br>\
                                    <br>\
                                    - Reba Ruiz",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "EE",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I came here to prove that no candy place could beat my grandma\'s taffy. I was right.\
                                    <br>\
                                    <br>\
                                    - Ophelia Larkspur",
                                }, 
                            }
                        ],
                        correctIndex: 2
                    }, 
                    {
                        tag: {
                            text: "EEEEE",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I giggled the whole time. I'm so happy here!\
                                    <br>\
                                    <br>\
                                    - Agnes Moor",
                                }, 
                            }
                        ],
                        correctIndex: 1
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
                            font: 'symbols',
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
                        title: "[<g>1.] What emotion did Huxley Jones feel?",
                        correctIndex: 2,
                        paragraph: [
                            "An{g}er",
                            "Sour{n}ess",
                            "Excite{m}ent",
                        ],
                    },
                    {
                        title: "[<g>2.] What is Denton Brigg\'s main character trait?",
                        correctIndex: 1,
                        paragraph: [
                            "Cleanline{s}s",
                            "Disresp{e}ct",
                            "In{t}elligence",
                        ],
                    },
                    {
                        title: "[<g>3.] Ophelia\'s motivation was to steal the shop\'s taffy recipe. True or false?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>4.] Which column should have the fewest reviews?",
                        correctIndex: 2,
                        paragraph: [
                            "Trait{s}",
                            "Feelin{g}s",
                            "Motivatio{n}s",
                        ],
                    },
                ],  
                code: {
                    answer: "MEAN",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ zeebplex
        {

            info: {
                type: 'challenge',
                title: "ZeebPlex",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Compare and Contrast Character Traits",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "Two kids have been acting strange in my arcade. One follows every rule, and the other breaks them all. I don\'t trust either, and I need you to figure out what they\'re up to. Be quick about it!",
                    complete: "Great, thanks. Now get out of the way. I\'ve got machines to fix."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "zeeb-plex.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Kid One',
                                },
                                subtitle: {
                                    text: 'By Zeeb',
                                },
                                passage: {
                                    text:   "This kid follows every rule like it\'s his job. He speaks politely and cleans up after himself. He asks permission for everything, even taking a napkin!\
                                    <br>\
                                    I don\'t know if he\'s just super responsible or trying to look too perfect on purpose. Anyway, I\'m suspicious. What\'s he trying to hide?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Kid Two',
                                },
                                subtitle: {
                                    text: 'By Zeeb',
                                },
                                passage: {
                                    text:   "This kid breaks every rule and thinks it\'s hilarious. She loves banging on the walls and stealing quarters from the machines. She\'s always up to something, but never tries to hide it.\
                                    <br>\
                                    I have a feeling it\'s all a distraction. While I\'m watching her, maybe someone else is pulling off something bigger..."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "5%",
                                rotate: "3deg",
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
                                translateY: "-5%",
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
                                size: 'small',
                                align: 'left',
                                indent: 'default',
                                brSplit: 'default',
                            },
                            dimension: {
                                width: "full",
                                height: "auto",
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
                        title: "[<g>1.] Is Kid [<u>One] or Kid [<u>Two] more careful?",
                        word: "O[N]E",
                    },
                    {
                        title: "[<g>2.] Which kid's character traits are more wild?",
                        word: "TW[O]",
                    },
                    {
                        title: "[<g>3.] [<u>Right] or [<u>wrong]: Zeeb is a suspicious person.",
                        word: "RIGH[T]",
                    },
                    {
                        title: "[<g>4.] Both kids have different attitudes about the ___ .",
                        word: "RUL[E]S",
                    },
                ],
                code: {
                    answer: "NOTE",
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