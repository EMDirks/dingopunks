const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/reading/grammar/thumbnail-4th-5th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ the knight's cell
        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Read both notes, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Parts of Speech",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1a",
                        "L.4.1b",
                        "L.4.1c",
                        "L.4.1d",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.1c",
                        "L.5.2",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "I came to hunt the yeti, with notes from the King and a witch to guide me! But I only read the King\'s, and that was not wise. Read them both to me, and I shall share my marshmallows.",
                    complete: "Your words have brought me wisdom and warmth. Take these marshmallows, brave friend."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "A Note from the King",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "&nbsp &nbsp My bravest knight, you [<u>may/must] carry the pride of our entire kingdom! You have no other choice. The yeti is strong, but you are stronger. The yeti is smart, but you are smarter. No storm can stop a heart as loyal as yours.\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp Now, go show the world what true courage looks like! When you return, the people will cheer your name, [<sal>and I welcoming you with honor]."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-8%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "A Note from a Witch",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "&nbsp &nbsp I have seen the future, and I see danger ahead! Beware the yeti: that [<blu>woolly old huge] creature. It lives in a cave, and it\'s waiting for you. It knows these frozen lands much better than you.\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp My advice is to stay humble at all times, even [<u>where] you think you know best. An open mind will protect you better than any armor."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "17%",
                                rotate: "-2deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        tag: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
                                padding: 'default'
                            },
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
                        title: "[<g>1.] In the King\'s note, which underlined word is the correct one?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Mu{s}t",
                            "{M}ay",
                        ],
                    },
                    {
                        title: "[<g>2.] The underlined word in the witch\'s note should be changed to ____ .",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Whe{n}",
                            "Wh{y}",
                        ],
                    },
                    {
                        title: "[<g>3.] Fix the red text in \"A Note from the King.\"",
                        correctIndex: 1,
                        paragraph: [
                            "\"and I {w}elcome you with honor\"",
                            "\"and I will welcome you with h{o}nor\"",
                            "\"and I welcom{e}d you with honor\"",
                        ],
                    },
                    {
                        title: "[<g>4.] What\'s the correct word order of the blue text?",
                        correctIndex: 2,
                        paragraph: [
                            "Woolly old hug{e}",
                            "Ol{d} huge woolly",
                            "Huge old {w}oolly",
                        ],
                    },
                ],  
                code: {
                    answer: "SNOW",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ tater durant's cell
        {

            info: {
                type: 'challenge',
                title: "Tater Durant's Cell",
                asset: "tater-drift.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Punctuation and Capitalization",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.2",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1f",
                        "L.4.2",
                        "L.4.2a",
                        "L.4.2b",
                        "L.4.2c",
                        "L.4.3",
                        "L.4.3b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.7",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.2",
                        "L.5.2a",
                        "L.5.2c",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "I\'ve been stuck here so long, I\'ve written like fifty songs. Maybe more! The notes for my latest batch are a total mash, though. Help me clean \'em up, and I\'ll trade you one of my extra-special yams!",
                    complete: "Aw, you really fixed \'em up nice! Guess I owe you a yam... but treat it gentle. It\'s one of my best."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Mashed and Proud',
                                },
                                passage: {
                                    text:   "This song will be about staying strong when life smushes you. The beat will sound like a potato getting mashed in perfect rhythm and it should make you want to dance."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Couch Potato Blues',
                                },
                                passage: {
                                    text:   "My mom always said, Tater, you\'re lazier than a sack of spuds. Well, I finally decided to make a song about it. It\'s going to be a sleepy tune about being too lazy to move."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Hash Brown Heart',
                                },
                                passage: {
                                    text:   "I\'ll probably write a breakup song next monday. I think it\'ll be about love that\'s crispy on the outside, but cold in the middle. Is that a good idea."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "5%",
                                rotate: "2deg",
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
                            width: "percent65",
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
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
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
                        'A. [<u>Right] or [<u>wrong]: the last sentence of \"Hash Brown Heart\" should end in an exclamation point.',
                        'B. In \"Mashed and Proud,\" a comma should go after the word ____ .',
                        'C. Which word in \"Hash Brown Heart\" should be capitalized?',     
                        'D. [<u>Yes] or [<u>no]: \"Couch Potato Blues\" is missing a set of quotation marks.',                    
                    ],
                    puzzle: [
                        ["(A)4W","(B)R","O","N","G","0","0"],
                        ["0","H","0","0","0","0","0"],
                        ["0","(D)Y","E","S","0","0","0"],
                        ["0","1T","0","0","0","0","0"],
                        ["0","2H","0","0","0","0","0"],
                        ["0","(C)M","O","N","D","3A","Y"],
                    ]
                },  
                code: {
                    answer: "THAW",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ pippo's cell
        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Sentence Structure",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.2",
                        "CCRA.R.5",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1f",
                        "L.4.2",
                        "L.4.2c",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.3b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.2",
                        "L.5.2b",
                        "L.5.3",
                        "L.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "So... I kinda crashed my plane right into this yeti\'s cave! Luckily, I\'ve got some instructions that might get it flying again. If you help me figure \'em out, I\'ll bake your candied yams in my jet engine!",
                    complete: "With your help, this old plane might actually fly again. Thanks a bunch, pal!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "pippo-fizzlepop.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Step One",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Smack the control panel three times make sure to hit each button at least once yank every lever that looks important."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Step Two",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Fill up the fuel tank. Make sure to use high-quality jet fuel. [<blu>Or orange soda.] Surprisingly, that works too."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Step Three",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Put on your helmet and your goggles. Most importantly. Don\'t be afraid. It\'s time to take off down the runway!"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "-2deg",
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
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "2deg",
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

            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which step contains a run-on sentence?",
                        word: "O[N]E",
                    },
                    {
                        title: "[<g>2.] \"Step One\" can be fixed by adding two ___ .",
                        word: "PERI[O]DS",
                    },
                    {
                        title: "[<g>3.] The blue text in \"Step Two\" is a sentence ___ .",
                        word: "FRAGMEN[T]",
                    },
                    {
                        title: "[<g>4.] True/false: \"Step Three\" has a sentence fragment.",
                        word: "TRU[E]",
                    },
                ],
                code: {
                    answer: "NOTE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ fishbeard's cell
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Common Errors",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.2",
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1e",
                        "L.4.1g",
                        "L.4.2",
                        "L.4.2d",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.1a",
                        "L.5.2",
                        "L.5.2e",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Oi, what ye starin\' at? I\'d have escaped already if that blasted yeti hadn\'t torn me map to bits! Help me patch it back together, and maybe I\'ll toss ye a pat of me finest butter \u2014 if ye\'ve earned it.",
                    complete: "Ye did it, landlubber! I reckon ye\'ve got the guts to join me crew, if yer bold enough."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "fishbeard.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Gold is pretty, but [<u>it\'s] also heavy.",
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
                                    text: "The sea tests every dreamer.",
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
                                    text: "Tomorrow, we will sailed home.",
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
                                    text: "Trust your compass, not the crowd.",
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
                                    text: "Always try to follow ____ heart.",
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
                                    text: "Dream big. Fly your flag high!",
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
                                    text: "Courage is the greatest treasure of all.",
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
                                    text: "You will find yourself by seeking adventure.",
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
                                    text: "We are going too found the treasure soon!",
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
                        title: "[<g>1.] What word is missing from the center piece?",
                        correctIndex: 1,
                        paragraph: [
                            "{Y}ou\'re",
                            "You{r}",
                            "Yor{e}",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the underlined word on the top left puzzle piece should be [<i>its] .",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] Find the fully-blue piece. Fix its verb tense.",
                        correctIndex: 1,
                        paragraph: [
                            "\"T{o}morrow, we will be sailed home.\"",
                            "\"Tomor{r}ow, we will sail home.\"",
                            "\"Tomorrow, we saili{n}g home.\"",
                        ],
                    },
                    {
                        title: "[<g>4.] The bottom right piece has ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "No error{s}",
                            "{O}ne error",
                            "Two {e}rrors",
                        ],
                    },
                ],  
                code: {
                    answer: "RARE",
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