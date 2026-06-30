const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "TIME TO SUNSET"
    },

    challengeArray: [

        // ⭐ Candlewick's Cart

        {

            info: {
                type: 'challenge',
                title: "Candlewick's Cart",
                asset: "candlewicks-cart.png",
                state: "incomplete",
                hint: {
                    text: "Read all three passages and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Definitions",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "L.2.4",
                        "L.2.4a",
                        "L.2.5",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3b",
                        "RF.2.3c",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "L.3.3",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.5",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RI.3.4"
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Well, howdy there! These candles are the secret to my farm, but I can never remember which one does what! Can you help me figure it out?",
                    complete: "We've got no time to waste \u2014 the sun is almost down. Go help the others!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "candlewicks-cart.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "1.png",
                                },
                            },
                            {
                                title: {
                                    text: "Ever Ember",
                                },
                                passage: {
                                    text: "The Ever Ember is a magic candle with a flame that never goes out. Its glow is [<u>eternal]. It lasts forever!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "7%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Wander Light",
                                },
                                passage: {
                                    text: "The Wander Light makes crops move all on their own. It causes them to [<u>stroll] \u2014 to walk slowly and easily \u2014 all the way down the path. [<sal>It\'s quite a sight!]",
                                },  
                            }
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
                        contentArray: [
                            {
                                image: {
                                    file: "3.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Guard Flame",
                                },
                                passage: {
                                    text: "The Guard Flame uses magic to keep crops safe. It creates a [<u>fortress] around them: a strong, safe place that keeps enemies out. This is a candle that only burns for twenty minutes, so use it wisely.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-6%",
                                rotate: "4deg",
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
                            width: "percent75",
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
                                width: "percent12",
                                height: "auto",
                            }
                        },
                        {
                            title: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
                            dimension: {
                                width: "percent85",
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
                        title: "[<g>1.] What does \"eternal\" mean?",
                        correctIndex: 2,
                        paragraph: [
                            "{B}urning brightly",
                            "Glowi{n}g softly",
                            "Lasting {f}orever",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the red sentence in \"Wander Light\" tells us the meaning of \"stroll.\"",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] What is a \"fortress\" ?",
                        correctIndex: 2,
                        paragraph: [
                            "\"a candle that only burns for t{w}enty minutes\"",
                            "\"magic that keeps crops {s}afe\"",
                            "\"a strong, safe p{l}ace that keeps enemies out\"",
                        ],
                    },
                    {
                        title: "[<g>4.] A ___ is an example of a \"fortress.\"",
                        correctIndex: 0,
                        paragraph: [
                            "Cast{l}e",
                            "Soccer {f}ield",
                            "Small {t}ree",
                        ],
                    },
                ],  
                code: {
                    answer: "FALL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Applegrim Orchard

        {

            info: {
                type: 'challenge',
                title: 'Applegrim Orchard',
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Listen Close\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Compound Words and Shades of Meaning",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "L.2.4",
                        "L.2.4d",
                        "L.2.5",
                        "L.2.5b",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3a",
                        "RF.2.3b",
                        "RF.2.3c",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "RL.2.10",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.5",
                        "L.3.5c",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RI.3.4"
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "I wrote a poem the other day. I must make sure it sounds okay! Read it through, if you don\'t mind. Then tell me all the things you find!",
                    complete: "You\'ve read my words, now off you go. There\'s more to do; the sun is low!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "applegrim-orchard.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Listen Close',
                                },
                                subtitle: {
                                    text: 'By Stefan Sage',
                                },
                                passage: {
                                    text:   "Never lend your boots to an eel,<br>\
                                            or ask a turnip how it feels.<br>\
                                            That [<u>arrowhead] beneath the mud?<br>\
                                            Leave it there, or expect a flood!<br>\
                                            <br>\
                                            Stay out of the [<u>hayloft] at the barn,<br>\
                                            and [<u>leap] across a bit of yarn.<br>\
                                            If you see an owl, just walk away,<br>\
                                            then make a mushroom out of clay.<br>\
                                            <br>\
                                            Now listen close, I\'ll tell you plain:<br>\
                                            [<i>Pretty] fades like autumn rain.<br>\
                                            [<i>Beautiful] is better; that\'s a start.<br>\
                                            But something [<u>gorgeous] fills your heart!"                        
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
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
                            width: "percent50",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] If \"loft\" means [<i>upper floor], then a \"hayloft\" is:",
                        correctIndex: 2,
                        paragraph: [
                            "A pile of {h}ay on the ground",
                            "Th{e} upper floor of a house",
                            "An uppe{r} floor where hay is stored",
                        ],
                    },
                    {
                        title: "[<g>2.] A \"hop\" is smaller and shorter than a ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "Lea{p}",
                            "J{u}mp",
                            "Both of the ab{o}ve",
                        ],
                    },
                    {
                        title: "[<g>3.] What is an \"arrowhead\" ?",
                        correctIndex: 1,
                        paragraph: [
                            "A t{y}pe of bow used for hunting",
                            "The p{o}inted tip of an arrow",
                            "A long woo{d}en stick",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: \"gorgeous\" describes something more amazing than \"pretty\" or \"beautiful.\"",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{T}rue",
                            "{F}alse",
                        ],
                    },
                ],  
                code: {
                    answer: "ROOT",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Frantic Factory

        {

            info: {
                type: 'challenge',
                title: 'Frantic Factory',
                asset: "frantic-factory.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Examples",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "L.2.4",
                        "L.2.4a",
                        "L.2.5",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3e",
                        "RF.2.3f",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.5",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3d",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RI.3.4"
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Attention! Attention! Two letters from the boss. No time to read. Crops to pack. You there. Read them for me. Report back when done.",
                    complete: "Letters read. Good work. Now leave. Factory closes at dark. Move along."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "frantic-factory.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Letter A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Hollow Jack,<br>\
                                            <br>\
                                            &nbsp; &nbsp; All debris must be cleared from the factory floor before sundown. This includes things like broken crates, fallen stems, and spilled seeds. Also, any [<u>intruders], (like robbers or uninvited guests) must be removed at once.<br>\
                                            <br>\
                                            Your boss,<br>\
                                            Candlewick"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "15%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Letter B",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Hollow Jack,<br>\
                                            <br>\
                                            &nbsp; &nbsp; The factory must be closed at night. Many [<u>nocturnal] animals will come out at that time: owls, bats, Fallcrawlers, and worse. It\'s important that you do not allow ANYTHING to [<u>lurk] near the entrance. Wolves, thieves, and other sneaky creatures are known to live near the farm.<br>\
                                            <br>\
                                            Your boss,<br>\
                                            Candlewick"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-5%",
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
                        'A. [<u>True] or [<u>false]: an \"intruder\" is someone who enters a place without permission.',
                        'B. [<u>Right] or [<u>wrong]: a \"nocturnal\" animal only comes out during the day.',
                        'C. Does \"lurk\" mean [<u>sneak] or [<u>think]?',     
                        'D. Which word in \"Letter A\" means [<i>pieces of trash left behind] ?',                    
                    ],
                    puzzle: [
                        ["0","0","(D)D","0","0","0","(B)W"],
                        ["(C)S","4N","E","A","K","0","1R"],
                        ["0","0","B","0","0","0","O"],
                        ["0","(A)T","R","2U","E","0","N"],
                        ["0","0","3I","0","0","0","G"],
                        ["0","0","S","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "RUIN",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ Mallow Maze

        {

            info: {
                type: 'challenge',
                title: "Mallow Maze",
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Roots, Prefixes, and Suffixes",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "L.2.4",
                        "L.2.4b",
                        "L.3.4c",
                        "L.2.5",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.3a",
                        "RF.2.3b",
                        "RF.2.3c",
                        "RF.2.3d",
                        "RF.2.3e",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "L.3.3",
                        "L.3.4",
                        "L.3.4b",
                        "L.3.4c",
                        "L.3.5",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3a",
                        "RF.3.3b",
                        "RF.3.3c",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RF.3.4c",
                        "RI.3.4"
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "Oh no! A dog got into my bag and shredded my map! I can\'t find the farm without it. Can you help me put the pieces back together?",
                    complete: "You put it back together! I knew you could do it. Let\'s keep moving, okay?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "camp-gnomad.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The pumpkin fields went on forever.",
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
                                passage: {
                                    text: "The sun was high in the sky.",
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
                                passage: {
                                    text: "The corn maze had no exit.",
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
                                passage: {
                                    text: "The corn grew extremely tall.",
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
                                passage: {
                                    text: "She was a brave [<blu>explorer].",
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
                                passage: {
                                    text: "Make sure you do not [<u>misread] the map.",
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
                                passage: {
                                    text: "The map had unmarked trails.",
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
                                passage: {
                                    text: "After the forest, the path curved to the left.",
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
                                passage: {
                                    text: "The corn field was [<u>pathless].",
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
                        title: "[<g>1.] Find the puzzle piece that has a red barn. What does its underlined word mean?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{W}ithout a path",
                            "Full of {p}aths",
                            "Easy t{o} walk",
                            "Co{v}ered in leaves",
                        ],
                    },
                    {
                        title: "[<g>2.] Find the blue word. What does it mean?",
                        correctIndex: 2,
                        paragraph: [
                            "Someone wh{o} studies animals",
                            "A person who builds roads in {a} forest",
                            "Som{e}one who travels to discover new places",
                        ],
                    },
                    {
                        title: "[<g>3.] If \"mis-\" means [<i>wrong,] then \"misread\" means:",
                        correctIndex: 1,
                        paragraph: [
                            "To read ve{r}y slowly",
                            "To read {s}omething wrong",
                            "To choose {t}he wrong book",
                        ],
                    },
                    {
                        title: "[<g>4.] Which piece has a word meaning \"not marked\" ?",
                        correctIndex: 2,
                        paragraph: [
                            "T{h}e piece on the top left",
                            "The piece i{n} the center",
                            "The piece with {t}he most trees",
                        ],
                    },
                ],  
                code: {
                    answer: "WEST",
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


  