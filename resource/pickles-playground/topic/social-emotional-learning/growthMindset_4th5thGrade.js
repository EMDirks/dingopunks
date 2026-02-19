const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/social-emotional-learning/growth-mindset/thumbnail-4th-5th-grade.png",
        timerLabel: "PICKLE ARRIVES"
    },

    challengeArray: [

        // ⭐ swing set
        {

            info: {
                type: 'challenge',
                title: 'Swing Set',
                asset: "merriwig.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Growth Mindset vs. Fixed Mindset",
                    commonCore: [],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "I\'m so sad... My magic doesn\'t work here. Pickle keeps sending me weird little notes to cheer me up, but I\'m tired of reading them over and over. Will you read them for me?",
                    complete: "Thank you for listening, friend. You know... I think I feel a bit lighter now."
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
                                title: {
                                    text: 'The Swings',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "When I felt sad this morning, I chose to go to the swings instead of crying alone. I wanted to see if I could swing higher than yesterday. Try it some time!"
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
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Loneliness',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "You probably feel lonely in here, and that won\'t ever change. You\'ll never make friends in a place like this."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "15%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Your Magic',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "If your magic doesn\'t work here, that means it\'s lost forever."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Keep Practicing',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "I know you\'ve been having a hard time learning how to fly. But if you keep practicing, you\'ll be soaring soon. I just know it!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "15%",
                                rotate: "2deg",
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
                            subtitle: {
                                font: 'default',
                                size: 'tiny',
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which of these notes shows a growth mindset?",
                        correctIndex: 0,
                        paragraph: [
                            "\"Keep Prac{t}icing\"",
                            "\"Lon{e}liness\"",
                            "\"Yo{u}r Magic\"",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the note \"Loneliness\" is written with a growth mindset.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tr{u}e",
                            "Fals{e}",
                        ],
                    },
                    {
                        title: "[<g>3.] In all, how many notes have a fixed mindset?",
                        correctIndex: 1,
                        paragraph: [
                            "{O}ne note",
                            "Two note{s}",
                            "Thre{e} notes",
                        ],
                    },
                    {
                        title: "[<g>4.] Rewrite \"Your Magic\" to show a growth mindset.",
                        correctIndex: 2,
                        paragraph: [
                            "Your magic is gone forever, so j{u}st give up.",
                            "Your magic is not im{p}ortant. I\'m glad it\'s gone.",
                            "Your magic might not work yet, bu{t} keep trying.",
                        ],
                    },
                ],  
                code: {
                    answer: "TEST",
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
                    text: "Read both plans, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "The Power of Yet",
                    commonCore: [],
                }
            },

            intro: {
                character: "Banana Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "I REALLY need to escape this place before I fall apart for good! Pickle gave me two plans, but they both feel wrong. Honestly, I don\'t trust either of them. Can you take a look?",
                    complete: "Hey... thanks for helping. I\'m going down into the cave. Wish me luck!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "banana-gunk-jr.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "1.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Plan One: [<u>Across the Deep Dark Canyon]",
                                },
                                subtitle: {
                                    text: "By Pickle",
                                },
                                passage: {
                                    text: "You can\'t cross the Deep Dark Canyon yet, but that\'s okay. I have a plan for you: just build a bridge from old planks! However, will you allow me to be honest? I don\'t think you\'re strong enough.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "2%",
                                rotate: "1deg",
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
                                    text: "Plan Two: [<u>Into the Mystery Cave]",
                                },
                                subtitle: {
                                    text: "By Pickle",
                                },
                                passage: {
                                    text: "You\'re not ready to enter the Mystery Cave. You don\'t know what\'s down there, you don\'t know how to tie ropes, and you don\'t know how to climb. I\'m just telling you how it is.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "-8%",
                                rotate: "-1deg",
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
                            width: "percent70",
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
                                width: "percent15",
                                height: "auto",
                            }
                        },
                        {
                            title: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'tiny',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
                            dimension: {
                                width: "percent80",
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
                        'A. [<u>Right] or [<u>wrong]: the [<i>Power of Yet] means something isn\'t possible now, but can be later.',  
                        'B. Which escape plan doesn\'t use the [<i>Power of Yet] at all: \"Plan [<u>One]\" or \"Plan [<u>Two]\"?',
                        'C. Which sentence in \"Plan One\" needs \"yet\" to show a growth mindset: the [<u>third] or [<u>fourth]?',
                        'D. [<u>Right] or [<u>wrong]: when Pickle says \"You\'re not ready to enter the Mystery Cave,\" he is showing a growth mindset.',                       
                    ],
                    puzzle: [
                        ["0","0","0","(C)F","0","0","0"],
                        ["0","(B)T","4W","3O","0","0","0"],
                        ["0","0","0","U","0","0","0"],
                        ["0","0","(D)W","R","O","N","1G"],
                        ["0","0","0","T","0","0","0"],
                        ["(A)2R","I","G","H","T","0","0"],
                    ]
                },  
                code: {
                    answer: "GROW",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ ball pit
        {

            info: {
                type: 'challenge',
                title: "Ball Pit",
                asset: "gribba.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Learning from Mistakes and Failure",
                    commonCore: [],
                }
            },

            intro: {
                character: "Gribba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "Name\'s Gribba. Pickle loves leavin\' me letters. I love ignorin\' them. This one\'s different though \u2014 it\'s got some sorta secret code. I never learned to read, but you can, yeah? Get on it!",
                    complete: "Hmph. A flower that smells like peanut butter is worth a look, don\'t ya think?"
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
                                    text: "Dear Gribba,\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; I know you like collecting flowers, so I wanted to tell you about some rare ones that grow here. They smell like peanut butter, so I named them peanutflowers.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; The first time I looked, I only checked sunny places. All I got was a sunburn. The second time, I ran around too quickly and tripped over a rock. My lunchbox fell, my corn dog rolled through some mud, and I went home hungry. But the third time, I looked in shady places. I also moved with care, so I didn\'t drop my lunch. When I got hungry, I was actually able to eat my corn dog. Soon after that, I smelled peanut butter \u2014 and sure enough, a peanutflower was growing nearby!\
                                    <br>\
                                    <br>\
                                    Hope you can find one too,\
                                    <br>\
                                    Pickle"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "-1deg",
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
                                translateX: "8%",
                                translateY: "-5%",
                                rotate: "-4deg",
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
                            width: "percent80",
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
                        title: "[<g>1.] Did Pickle have [<u>one] or [<u>two] failures?",
                        word: "T[W]O",
                    },
                    {
                        title: "[<g>2.] [<u>Right] or [<u>wrong]: Pickle learned from his failures.",
                        word: "R[I]GHT",
                    },
                    {
                        title: "[<g>3.] Pickle fixed his mistakes in the ___ paragraph.",
                        word: "SECON[D]",
                    },
                    {
                        title: "[<g>4.] To fix his second mistake, Pickle moved with ___ .",
                        word: "CAR[E]",
                    },
                ],
                code: {
                    answer: "WIDE",
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
                    text: "Sort each note into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Reframing Negative Self-Talk",
                    commonCore: [],
                }
            },

            intro: {
                character: "Twisted Tori",
                asset: "twisted-tori.png",
                dialogue : {
                    incomplete: "Pickle keeps sliding notes down here, and they\'re all pretty gloomy. I joke a lot, but I\'m worried about him. I think he could use some help reframing his negative thoughts. You in?",
                    complete: "Hey, thanks. Nice. Now, the only thing haunting this slide is me. Mwa-ha-ha!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Place [<u>NEGATIVE Self-Talk] Here",
                        "Place [<u>POSITIVE Self-Talk] Here",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Light",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Light hurts my eyes. I\'ll never be able to go in the sun!",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Love",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Nobody could love someone who looks like a pickle.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Corn Dogs",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I\'m really proud of my ability to make tasty corn dogs.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Friends",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "None of the raccoons in the sandbox want to be my friend.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Swim",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I\'ll never be able to swim.",
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
                                size: 'small',
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
                        title: "[<g>1.] How many examples of negative self-talk are here?",
                        correctIndex: 2,
                        paragraph: [
                            "Two e{x}amples",
                            "Three exam{p}les",
                            "{F}our examples",
                        ],
                    },
                    {
                        title: "[<g>2.] How can Pickle reframe \"Swim\" to be positive?",
                        correctIndex: 0,
                        paragraph: [
                            "If I practice, I can l{e}arn how to swim.",
                            "For {m}e, swimming is just not possible.",
                            "S{w}imming is for losers, anyway.",
                        ],
                    },
                    {
                        title: "[<g>3.] Pickle can turn the information from \"Light\" into something useful by:",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "Cr{y}ing about it",
                            "Blaming hi{m}self",
                            "Buying sungl{a}sses",
                            "Compla{i}ning more",
                        ],
                    },
                    {
                        title: "[<g>4.] How can Pickle learn from \"Friends\"?",
                        correctIndex: 2,
                        paragraph: [
                            "He can sto{p} looking for friends entirely",
                            "He can kick the raccoons out of t{h}e sandbox",
                            "He can t{r}y looking for friends somewhere else",
                        ],
                    },
                ],  
                code: {
                    answer: "FEAR",
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

  