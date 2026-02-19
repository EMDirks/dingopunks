const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/figurative-language/thumbnail-4th-5th-grade.png",
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
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Similes and Metaphors",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.5",
                        "L.4.5a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.5",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.5",
                        "L.5.5a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10"
                    ],
                }
            },
            
            intro: {
                character: "Gribba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "Found this weird poem stuck to the bottom of the pit. It ain\'t mine, but it feels familiar... like someone\'s been watchin\' me. It knows too much. Read it and let me know what ya think, yeah?",
                    complete: "Hmm. Seems like the work of Pickle. Weird little dude. You keep an eye out for him, okay?"
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
                                title: {
                                    text: 'The Florist',
                                },
                                subtitle: {
                                    text: 'By ???',
                                },
                                passage: {
                                    text:   "She once arranged flowers like notes in a song.\
                                    <br>\
                                    Her laughter was summer, so warm and strong.\
                                    <br>\
                                    Until she got lost in a playground, they say,\
                                    <br>\
                                    and now lives in a pit, day after day.\
                                    <br>\
                                    <br>\
                                    Now she\'s a queen with no crown,\
                                    <br>\
                                    who sits in the pit feeling down.\
                                    <br>\
                                    Her laughter sounds like a creaky old door \u2014\
                                    <br>\
                                    in this dark place, flowers grow no more."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-4%",
                                rotate: "-3deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which line from \"The Florist\" is a simile?",
                        correctIndex: 0,
                        paragraph: [
                            "\"She once ar{r}anged flowers like notes in a song\"",
                            "\"Her laughter was sum{m}er, so warm and strong\"",
                            "\"N{o}w she\'s a queen with no crown\"",
                        ],
                    },
                    {
                        title: "[<g>2.] \"Her laughter was summer\" most likely means:",
                        correctIndex: 2,
                        paragraph: [
                            "Her laughter was weird and {c}reepy",
                            "She only {l}aughed in the daytime",
                            "Her laughter was warm and j{o}yful",
                        ],
                    },
                    {
                        title: "[<g>3.] What does the simile in line seven mean?",
                        correctIndex: 1,
                        paragraph: [
                            "H{e}r laughter sounds sweet and relaxing",
                            "Her laughter {s}ounds old and tired",
                            "None of t{h}e above",
                        ],
                    },
                    {
                        title: "[<g>4.] Which of these lines contains a metaphor?",
                        correctIndex: 1,
                        paragraph: [
                            "Li{n}e three",
                            "Line fiv{e}",
                            "Line ei{g}ht",
                        ],
                    },
                ],  
                code: {
                    answer: "ROSE",
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
                    topic: "Hyperbole and Personification",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.5",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "L.5.3",
                        "L.5.5",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.4",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.4"
                    ],
                }
            },

            intro: {
                character: "Banana Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "Pickle found a page from my manual! I thought it was lost for good, but it was just jammed inside a seesaw. It\'s all ripped to shreds, though. Think you can put it back together, friend?",
                    complete: "Oh man, thanks for the help. I was always scared of Pickle, but maybe he\'s not such a bad guy..."
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
                                    text: "Every few days, your motor will beg for oil. Keep it filled up.",
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
                                    text: "Cameras love you, so always smile as big as you can.",
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
                                    text: "Don’t let fear claw at your heart. Get on the dance floor!",
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
                                    text: "Dance your hardest, and you\'ll have people dying of laughter.",
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
                                    text: "Keep your gears well-oiled, and you\'ll run for a million years.",
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
                                    text: "Stop and rest if your leg supports start to groan.",
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
                                    text: "Keep your engine cool, or you\'ll get hotter than the sun.",
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
                                    text: "You can handle a little rain, but not if it\'s raining cats and dogs.",
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
                                    text: "If your engine coughs and sputters, shut down immediately!",
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
                                size: 'tiny',
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
                        title: "[<g>1.] The ____ contains a hyperbole.",
                        correctIndex: 1,
                        paragraph: [
                            "Bot{t}om right puzzle piece",
                            "Middle left puzzle pie{c}e",
                            "Top le{f}t puzzle piece",
                        ],
                    },
                    {
                        title: "[<g>2.] What does the center piece\'s hyperbole suggest?",
                        correctIndex: 0,
                        paragraph: [
                            "Well-oiled gears will {h}elp you run for a long time",
                            "Well-oiled {g}ears will last for a million years",
                            "It\'s not important to put oil on you{r} gears",
                        ],
                    },
                    {
                        title: "[<g>3.] \"Start to groan\" is an example of ____ .",
                        correctIndex: 1,
                        paragraph: [
                            "Hyperbol{e}",
                            "Person{i}fication",
                            "No{n}e of the above",
                        ],
                    },
                    {
                        title: "[<g>4.] The three puzzle pieces in the top row are:",
                        correctIndex: 0,
                        paragraph: [
                            "All {p}ersonification",
                            "All hyperbo{l}e",
                            "A mi{x}ture of personification and hyperbole",
                        ],
                    },
                ],  
                code: {
                    answer: "CHIP",
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
                    text: "Read the notes, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Onomatopoeia and Alliteration ",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.5",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.8",
                        "RI.4.9",
                        "RL.4.1",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.5",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.7",
                        "RI.5.10"
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "I saw some papers by the swing set... probably Pickle\'s. Poor little guy leaves notes everywhere. Read them for me, will you?",
                    complete: "Thank you, kind one. Pickle\'s notes are really something, aren\'t they?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "merriwig.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Note One",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "<br>Sometimes I whisper wishes into the wind. Most of them are about you.\
                                    <br>\
                                    <br>\
                                    \u2014 Pickle",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-3%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note Two",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "<br>Last night, the lightning flashed with a sudden BOOM! It said \"hi\" way louder than you ever have...\
                                    <br>\
                                    <br>\
                                    \u2014 Pickle",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "10%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note Three",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "<br>I packed a pocketful of pretzels, peanuts, and peaches \u2014 just in case a possible pal passes by. Please?\
                                    <br>\
                                    <br>\
                                    \u2014 Pickle",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note Four",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "<br>Clink. I grab the cold metal ladder.\
                                    <br>\
                                    Creak. I climb to the roof.\
                                    <br>\
                                    Thud. I sit alone.\
                                    <br>\
                                    <br>\
                                    \u2014 Pickle",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "18%",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Does \"Note [<u>One]\" or \"Note [<u>Two]\" have alliteration?',
                        'B. [<u>Right] or [<u>wrong]: the figurative language in \"Note Two\" is meant to make the lightning feel soft and distant.',
                        'C. [<u>Right] or [<u>wrong]: \"Note Three\" has alliteration.',     
                        'D. How many examples of onomatopoeia are in \"Note Four\"?',                    
                    ],
                    puzzle: [
                        ["(B)W","(C)R","2O","N","G","0","0"],
                        ["0","I","0","0","0","0","0"],
                        ["0","1G","0","0","0","0","0"],
                        ["0","H","0","0","0","0","(A)O"],
                        ["0","T","0","0","0","0","3N"],
                        ["0","0","(D)T","H","R","4E","E"],
                    ]
                },  
                code: {
                    answer: "GONE",
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
                    text: "Read the letter, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Idioms, Adages, and Proverbs",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.5",
                        "L.4.5b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.5",
                        "L.5.5b",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.5",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Twisted Tori",
                asset: "twisted-tori.png",
                dialogue : {
                    incomplete: "Hah. Look what slid into my tunnel: a message from Pickle! It's probably a trap. Or a joke. Mind helping me figure out what this thing is all about?",
                    complete: "Thanks for the help. Now, slide fast! If you hear giggling behind you… that\'s me."
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
                                    text: "Dear Tori,\
                                    <br>\
                                    <br>\
                                    &nbsp&nbsp I was wondering if you\'d want to hang out sometime. Nothing huge, just snacks. And maybe a little hide-and-seek (if you\'re not too busy). I\'d really like it if you said yes. I\'m keeping my fingers crossed, just in case.\
                                    <br>\
                                    <br>\
                                    &nbsp&nbsp People say to \"never judge a book by its cover,\" and I think that fits me pretty well. Most folks move right past me, and they\'re missing out.\
                                    <br>\
                                    <br>\
                                    &nbsp&nbsp Anyway, birds of a feather flock together, and... well, we have a lot in common. For example, we\'re all stuck here on this playground. Forever! So maybe we can be friends?\
                                    <br>\
                                    <br>\
                                    Yours truly,\
                                    <br>\
                                    Pickle"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        misc: {
                            material: 'metal',
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
                                size: 'mediumSmall',
                                align: 'left',
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
                        title: "[<g>1.] \"Keeping my fingers crossed\" is a(n):",
                        correctIndex: 0,
                        paragraph: [
                            "Idio{m}",
                            "A{d}age",
                            "Pr{o}verb",
                        ],
                    },
                    {
                        title: "[<g>2.] \"Keeping my fingers crossed\" means Pickle is:",
                        correctIndex: 1,
                        paragraph: [
                            "Tryin{g} to improve his flexibility",
                            "Hoping for go{o}d luck",
                            "Giving u{p} all hope",
                        ],
                    },
                    {
                        title: "[<g>3.] \"Never judge a book by its cover\" is a(n)",
                        correctIndex: 1,
                        paragraph: [
                            "Si{m}ile",
                            "Pro{v}erb",
                            "None of {t}he above",
                        ],
                    },
                    {
                        title: "[<g>4.] What type of figurative language does the first sentence of the last paragraph contain?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "An onom{a}topoeia",
                            "An adag{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "MOVE",
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