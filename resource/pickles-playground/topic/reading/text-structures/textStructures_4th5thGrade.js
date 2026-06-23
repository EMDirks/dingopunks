const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/text-structures/thumbnail-4th-5th-grade.png",
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
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.10",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.8",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Gribba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "That Pickle fella left me a pile o\' moldy corn dogs and a note! I reckon he\'s tryin\' to tell me somethin\' important, but I ain\'t much of a reader. Will ya let me know what this is all about?",
                    complete: "Huh. Now I know what that odd little critter was tryin\' to say. Let's keep movin\', yeah?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "gribba.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Hi Gribba, this is Pickle. I am the one who runs this playground. You may have seen me around.\
                                    <br>\
                                    I wanted to welcome you with some flowers, but all I had was corn dogs. I arranged them nicely and left them on the counter for four days. I did not put them in the refrigerator. Nobody likes cold corn dogs, after all.\
                                    <br>\
                                    Due to this, they turned green. Not a nice green. More like a fuzzy, unhappy green that I had never seen before. Oh, and they got pretty smelly. I hope you still enjoy them!"
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
                            width: "percent70",
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
                                size: 'medium',
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
                        title: "[<g>1.] This passage uses the structure [<i>cause and ___ .]",
                        correctIndex: 2,
                        paragraph: [
                            "Proble{m}",
                            "S{o}lution",
                            "Ef{f}ect",
                        ],
                    },
                    {
                        title: "[<g>2.] Which paragraph explains the \"cause\"?",
                        correctIndex: 1,
                        paragraph: [
                            "The first paragra{p}h",
                            "The sec{o}nd paragraph",
                            "The th{i}rd paragraph",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of the following words is a [<i>signal word?]",
                        correctIndex: 2,
                        paragraph: [
                            "H{i}",
                            "Wa{n}ted",
                            "D{u}e",
                        ],
                    },
                    {
                        title: "[<g>4.] Why did the corn dogs turn green and smelly?",
                        correctIndex: 1,
                        paragraph: [
                            "Pickle\'s refrig{e}rator was broken",
                            "Pick{l}e left them sitting out for four days",
                            "Pickle used green food coloring on t{h}em",
                        ],
                    },
                ],  
                code: {
                    answer: "FOUL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ swing set
        {

            info: {
                type: 'challenge',
                title: 'Swing Set',
                asset: "merriwig.png",
                state: "incomplete",
                hint: {
                    text: "Look at the diagram, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.7",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.7",
                    ],
                }
            },
            
            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Pickle left me another one of his little drawings. I think this one is about the tire swing... he does seem awfully keen on me trying it. Will you take a look and tell me what he's getting at?",
                    complete: "Oh, how lovely... but I\'m not really convinced. Shall we carry on?"
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
                                image: {
                                    type: "local",
                                    file: "pp14_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "2%",
                                rotate: "-2deg",
                            }
                        }
                    },
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
                            dimension: {
                                width: "auto",
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
                        title: "[<g>1.] How is this text structured?",
                        correctIndex: 1,
                        paragraph: [
                            "Problem and soluti{o}n",
                            "Comp{a}re and contrast",
                            "Chronological or{d}er",
                        ],
                    },
                    {
                        title: "[<g>2.] According to the Venn diagram, which type of swing has a flimsy seat [<i>and] can only fit one person?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "A no{r}mal swing",
                            "A {t}ire swing",
                        ],
                    },
                    {
                        title: "[<g>3.] What do both swings have in common?",
                        correctIndex: 2,
                        paragraph: [
                            "Both have a flimsy seat a{n}d spin in all directions",
                            "Bot{h} are made from tires and can fit two people",
                            "Both can swing high and are held up by {c}hains",
                        ],
                    },
                    {
                        title: "[<g>4.] Which would fit the \"Tire Swing\" section [<i>only?]",
                        correctIndex: 0,
                        paragraph: [
                            "{H}as three chains",
                            "Has metal {p}arts",
                            "Can be found on a playgro{u}nd",
                        ],
                    },
                ],  
                code: {
                    answer: "ARCH",
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
                    text: "Sort the slips of paper into the correct sequence. Then, answer the questions below to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.7",
                        "RI.5.9",
                        "RI.5.10"
                    ],
                }
            },

            intro: {
                character: "Banana Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "I\'ve been really stressed out, and I don't know what to do! Pickle wrote me some tips for cheering up this week, but they\'re all out of order. Can you put them in the right sequence?",
                    complete: "Oh. Huh. I can\'t really say this makes me feel any better at all. But thanks, I guess..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Sort the slips of paper into the correct sequence.",
                    ],
                    asset: {
                        scope: "global",
                        path: "1-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Monday: The first thing you should do is find a quiet spot and sit super still for an hour.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },  
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Tuesday: Next, you will need to find six very smooth rocks and line them up by size.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Wednesday: After that, it\'s time to roll around in some squishy moss for twenty minutes.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Thursday: Finally, write down one thing that scared you this week, then fold the paper into a small square and put it under a mushroom.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "sort1Width",
                            height: "auto",
                        },
                        misc: {
                            material: 'paper',
                            padding: "default"
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
                                size: 'mediumSmall',
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. This text structure is called chronological ___ .',
                        'B. Which slip of paper comes [<i>second] in the sequence: [<u>Monday] or [<u>Tuesday]?',
                        'C. What signal word does the \"Monday\" slip of paper contain?',     
                        'D. [<u>Right] or [<u>wrong]: based on the text, you should find six smooth rocks [<i>before] rolling around in moss.',                    
                    ],
                    puzzle: [
                        ["(C)F","0","0","0","0","0","0"],
                        ["I","0","(A)O","0","0","0","0"],
                        ["R","0","(D)R","I","G","4H","T"],
                        ["3S","0","D","0","0","0","0"],
                        ["(B)T","2U","E","S","D","A","Y"],
                        ["0","0","1R","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "RUSH",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ tunnel slide
        {

            info: {
                type: 'challenge',
                title: 'Tunnel Slide',
                asset: "twisted-tori.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",      
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Twisted Tori",
                asset: "twisted-tori.png",
                dialogue : {
                    incomplete: "Interesting... Pickle dropped off an \"emergency\" letter today. He was clearly freaking out, but he was trying to act like he wasn\'t. It was a lot, honestly. Can you check this thing out for me?",
                    complete: "Hmm. I'm a ghost, so none of this really concerns me. Thanks anyway!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "twisted-tori.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Hey Tori, we have a problem: spiders have moved out of my barn and into your slide. Not just any spiders... I\'m talking big, angry ones with long fangs and glowing red eyes.\
                                    <br>\
                                    <br>\
                                    Luckily, I have a plan to [<u>solve] this. It's pretty simple: make some spider friends! Introduce yourself to each spider and learn its name. Once they all know you, they won\'t bother you. Probably. They\'re just looking for a dark (and slightly damp) place to live, which is something I think you understand.\
                                    <br>\
                                    <br>\
                                    \u2014 Pickle"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "8%",
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
                                translateX: "-5%",
                                translateY: "12%",
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
                        dimension: {
                            width: "percent85",
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
                        title: "[<g>1.] This text structure is called [<i>___ and solution.]",
                        word: "PRO[B]LEM",
                    },
                    {
                        title: "[<g>2.] The underlined word in paragraph 2 is a ___ word.",
                        word: "SIGN[A]L",
                    },
                    {
                        title: "[<g>3.] The [<i>problem] is that ___ have moved into the slide.",
                        word: "SPIDE[R]S",
                    },
                    {
                        title: "[<g>4.] The ___ is to make friends with the spiders.",
                        word: "SOLUTIO[N]",
                    },
                ],
                code: {
                    answer: "BARN",
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