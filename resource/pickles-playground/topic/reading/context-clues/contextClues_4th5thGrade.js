const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/context-clues/thumbnail-4th-5th-grade.png",
        timerLabel: "PICKLE ARRIVES"
    },

    challengeArray: [

        // ⭐ ball pit
        {

            info: {
                type: 'challenge',
                title: "Ball Pit",
                asset: "gribba.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Definitions and Examples",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.5",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RF.5.4c",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Gribba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "Found a bunch of creepy little poems. Bet it was that Pickle boy \u2014 always tryin\' real hard to be spooky. Or maybe just tryin\' to impress me. Hmph. Take a look and tell me what they say, yeah?",
                    complete: "Huh. Well... guess that wasn\'t half bad. Thanks, kid. You\'re alright."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "gribba.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Books",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>Impeccable] means perfect;\
                                    <br>\
                                    not one thing out of line.\
                                    <br>\
                                    Her books were stacked in the same way,\
                                    <br>\
                                    each title on the spine.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-10%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Warrior",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The warrior faced [<u>adversity] \u2014\
                                    <br>\
                                    a night with no moon,\
                                    <br>\
                                    a map that caught fire,\
                                    <br>\
                                    and a beast that arrived too soon.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Spider",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The spider began\
                                    <br>\
                                    to [<u>descend], moving downward\
                                    <br>\
                                    on her thread of silk",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "10%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Ghost",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The ghost was quite [<u>eloquent],\
                                    <br>\
                                    his words clear and smooth.\
                                    <br>\
                                    He told his tale with so much power\
                                    <br>\
                                    it made the lanterns swoon.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "30%",
                                rotate: "3deg",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'defaultNoBottom'
                        },
                        dimension: {
                            width: "percent45",
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
                        'A. Which poem has an underlined word meaning [<i>to move downward]: \"Spider\" or \"Warrior\"?',
                        'B. Which poem\'s underlined word means [<i>a time when things are really hard?]',
                        'C. Does \"Books\" or \"Ghost\" contain a word meaning [<i>speaking in a way that is clear and powerful?]',     
                        'D. This poem contains a word meaning [<i>something so neat, that there\'s nothing wrong with it.]',                    
                    ],
                    puzzle: [
                        ["0","0","B(D)","O","2O","K","(A)S"],
                        ["0","0","0","0","0","0","P"],
                        ["(C)G","H","3O","S","T","0","I"],
                        ["0","0","0","0","0","0","1D"],
                        ["0","0","0","0","0","0","E"],
                        ["(B)W","A","R","4R","I","O","R"],
                    ]
                },  
                code: {
                    answer: "DOOR",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ swing set
        {

            info: {
                type: 'challenge',
                title: 'Swing Set',
                asset: "merriwig.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Synonyms and Antonyms",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5c",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.5c",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RL.5.1",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Oh no, another note from Pickle... I haven\'t peeked, but I\'m guessing it\'s about friendship troubles. It usually is. I can\'t handle drama today, though. Would you read it for me? ",
                    complete: "Lovely. Heartbreak and mulch \u2014 the classics. Thank you, darling."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "merriwig.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Merriwig,\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp Lately, my raccoon roommate Jojo has been spending a lot of time with a new friend: a purple toad. They laugh together, eat together, and even dig holes together. They dug like ten of them near the [<u>frontier], or border, of where the mulch ends and the woods begin. That used to be [<i>our] spot!\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp I\'m trying to act cool, but honestly, it hurts. I\'m not just a little sad, I\'m talking full-on [<u>agony], the kind of pain that makes your nose run for no reason.\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp I want to talk about it, but I keep telling myself it\'s not a big deal. It\'s silly, not something [<u>critical] like a broken ankle. And don\'t even get me started on how toads are [<i>everywhere]. They\'re not [<u>scarce], they\'re pretty common! But there\'s only one ME. Right?\
                                    <br>\
                                    <br>\
                                    Your friend,\
                                    <br>\
                                    Pickle"
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
                            width: "percent75",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] One synonym of \"frontier\" is ____ .",
                        correctIndex: 1,
                        paragraph: [
                            "H{o}le",
                            "{B}order",
                            "Mu{l}ch",
                        ],
                    },
                    {
                        title: "[<g>2.] In this letter\'s context, what does \"critical\" mean?",
                        correctIndex: 1,
                        paragraph: [
                            "Sill{y}",
                            "Se{r}ious",
                            "Rar{e}",
                        ],
                    },
                    {
                        title: "[<g>3.] Which word is an antonym of \"scarce\"?",
                        correctIndex: 2,
                        paragraph: [
                            "Pret{t}y",
                            "{R}are",
                            "Comm{o}n",
                        ],
                    },
                    {
                        title: "[<g>4.] \"Pain\" is a ____ of \"agony.\"",
                        correctIndex: 0,
                        paragraph: [
                            "{S}ynonym",
                            "Anton{y}m",
                            "Si{m}ile",
                        ],
                    },
                ],  
                code: {
                    answer: "BROS",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ monkey bars 
        {

            info: {
                type: 'challenge',
                title: "Monkey Bars",
                asset: "banana-gunk-jr.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Affixes",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4b",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.7",
                        "RI.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.4",
                        "L.5.4b",
                        "L.5.6",
                        "RI.5.1",
                        "RI.5.4",
                        "RI.5.7",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Banana Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "Someone ripped up my repair notes. Pickle says it was a raccoon, and for once, I believe him. That little critter\'s been watching me. Help me put these pieces together before it comes back!",
                    complete: "Okay. My systems are stable, thanks! But keep your eyes open \u2014 it\'s never just ONE raccoon."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "banana-gunk-jr.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Keep your oil fresh, and you\'ll move [<u>flawlessly].",
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
                                    text: "To reduce [<u>dizziness], press the red button on your head.",
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
                                    text: "Never [<u>overload] your storage container.",
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
                                    text: "For maximum [<u>flexibility], always clean rust off your joints.",
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
                                    text: "Make sure to [<u>reinstall] your software every month.",
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
                                    text: "Never skip nap time, or your circuits will [<u>overheat].",
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
                                    text: "Dance hard for [<u>endless] compliments!",
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
                                    text: "Always replace old parts with new, [<u>unused] ones.",
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
                                    text: "Never [<u>overtighten] your bolts; keep them loose.",
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
                        title: "[<g>1.] Which piece has a word meaning [<i>to install again?] ",
                        correctIndex: 2,
                        paragraph: [
                            "T{h}e top right piece",
                            "The bottom left piec{e}",
                            "The cen{t}er piece",
                        ],
                    },
                    {
                        title: "[<g>2.] The underlined word on the top left piece means:",
                        correctIndex: 1,
                        paragraph: [
                            "With many fla{w}s",
                            "With{o}ut flaws",
                            "None o{f} the above",
                        ],
                    },
                    {
                        title: "[<g>3.] All 3 red pieces have a word with the prefix \"over.\" This prefix shows that something is done ___ .",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "To{o} much",
                            "Too littl{e}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which word means [<i>the ability to flex or bend?]",
                        correctIndex: 0,
                        paragraph: [
                            "F{l}exibility",
                            "Unus{e}d",
                            "O{v}erload",
                        ],
                    },
                ],  
                code: {
                    answer: "TOOL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ play palace
        {

            info: {
                type: 'challenge',
                title: "Play Palace",
                asset: "king-kevin.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Root Words",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4b",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.7",
                        "RI.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.4",
                        "L.5.4b",
                        "L.5.6",
                        "RI.5.1",
                        "RI.5.4",
                        "RI.5.7",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "King Kevin",
                asset: "king-kevin.png",
                dialogue : {
                    incomplete: "Somehow, that meddling Pickle slipped some notes into my royal palace. And not just notes\... a secret code too! I will not be toyed with. You there, decode these scribbles at once. That\'s an order!",
                    complete: "Very well. I suppose that was\... acceptable. You may carry on."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "king-kevin.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Hey Kevin, I made you a gift. It\'s a [<u>manuscript] about all of our adventures! I wrote it myself, you know. It took me forever, because I felt pretty [<u>sluggish] today. But I still finished it, because you\'re worth it.\
                                    <br>\
                                    <br>\
                                    \u2014 Pickle"
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
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Kevin, you should visit my cave a couple miles east of here. Just look for the big [<u>triangular] flag near the sand dunes. The other [<u>resident] of the cave (a raccoon named Jojo) would love to meet you. It\'ll be fun, I promise.\
                                    <br>\
                                    <br>\
                                    \u2014 Pickle"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "0%",
                                rotate: "4deg",
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
                                translateX: "-4%",
                                translateY: "0%",
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
                            width: "percent35",
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
                                size: 'small',
                                align: 'left'
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
                        title: "[<g>1.] A \"manuscript\" is a document written by ____ .",
                        word: "HAN[D]",
                    },
                    {
                        title: "[<g>2.] Which underlined word means [<i>lacking in energy?]",
                        word: "SL[U]GGISH",
                    },
                    {
                        title: "[<g>3.] A ____ is [<i>someone who lives in a certain place.]",
                        word: "RESIDE[N]T",
                    },
                    {
                        title: "[<g>4.] How many sides does a \"triangular\" flag have?",
                        word: "THRE[E]",
                    },
                ],
                code: {
                    answer: "DUNE",
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