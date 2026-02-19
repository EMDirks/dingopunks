const resource =  {
    
    info: {
        title: "Funhouse Fright",
        path: "funhouse-fright",
        logo: "resource/funhouse-fright/assets/branding/reading/all/preview-3rd-grade.png",
        timerLabel: "DOORS LOCK"
    },

    challengeArray: [

        // ⭐ ticket booth
        {

            info: {
                type: 'challenge',
                title: "Ticket Booth",
                asset: "miss-tally.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.10",
                        "RL.3.1",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Miss Tally",
                asset: "miss-tally.png",
                dialogue : {
                    incomplete: "Oh, hi. You have to read this \"Important Warning\" before you enter the funhouse. I don\'t know what it says, I\'m just supposed to hand it out...",
                    complete: "Great, you read it. Nice job. Now let me get back to doing nothing."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "miss-tally.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Important Warning<br>',
                                },
                                passage: {
                                    text:   "Happy Halloween! Yes, it\'s already that time of year. Just so you know, Frederick\'s Funhouse is scary. Like, really scary. There are lots of creepy rooms inside.\
                                    <br>\
                                    The Terror Tunnel is super dark. The Boiler Room is filled with hot steam. The Hall of Mirrors has a mean vampire. A creepy puppet hides under the Ringmaster\'s Stage. Even the ticket booth has spooky secrets.\
                                    <br>\
                                    Anyway, we hope you have fun. [<u>Make sure to try our candy corn!] It\'s made fresh every day."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
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
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left',
                                indent: 'default',
                                brSplit: 'default'
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
                        title: "[<g>1.] The main idea of \"Important Warning\" is:",
                        correctIndex: 2,
                        paragraph: [
                            "Hal{l}oween is a happy holiday",
                            "Candy corn is yu{m}my",
                            "{F}rederick\'s Funhouse is scary",
                        ],
                    },
                    {
                        title: "[<g>2.] The underlined sentence supports the main idea. True or false?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tr{u}e",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>3.] Which sentence supports the main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Happ{y} Halloween!\"",
                            "\"There are lots of creepy rooms insid{e}.\"",
                            "\"Anyway, {w}e hope you have fun.\"",
                        ],
                    },
                    {
                        title: "[<g>4.] What\'s another supporting detail?",
                        correctIndex: 0,
                        paragraph: [
                            "\"The T{e}rror Tunnel is super dark.\"",
                            "\"Make sure to try our candy {c}orn!\"",
                            "\"It\'s made {f}resh every day.\"",
                        ],
                    },
                ],  
                code: {
                    answer: "FLEE",
                    userArray: ["","","",""]
                },
            },
               
        },

        // ⭐ ringmaster's stage
        {

            info: {
                type: 'challenge',
                title: 'Ringmaster\'s Stage',
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.5a",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.4",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Ringmaster Pippo",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "I got to write a play for the funhouse, but I\'m not sure if it\'s any good. Can you read my boss\'s rules, then read my play? Let me know if it makes sense!",
                    complete: "Yay! Thanks! If the play turns out great, maybe I\'ll finally earn enough to finish my secret project."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "pippo-fizzlepop.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Ringmaster Pippo,\
                                    <br>\
                                    <br>\
                                    This is your boss, Frederick.\
                                    <br>\
                                    <br>\
                                    You must write a play that\'s full of BIG feelings. In fact, I need this play to be a volcano of emotions! I need drama. I need fear. I need friendship. Make our guests cry, cheer, and faint.\
                                    <br>\
                                    <br>\
                                    And if you can add something about jellybeans, that would be perfect. [<u>I love jellybeans.]\
                                    <br>\
                                    <br>\
                                    Good luck,\
                                    <br>\
                                    Frederick"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "20%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Jellybean Friends',
                                },
                                subtitle: {
                                    text: 'Written By Ringmaster Pippo',
                                },
                                passage: {
                                    text:   "[<i>Scene: Count Visage stands in the Hall of Mirrors. Boiler Belle walks in, looking angry.]\
                                    <br>\
                                    <br>\
                                    BOILER BELLE: You ate the last lime jellybean! You\'re as sneaky as a fox.\
                                    <br>\
                                    <br>\
                                    COUNT VISAGE: And you\'re like a grumpy grandpa.\
                                    <br>\
                                    <br>\
                                    [<i>There\'s a long pause. Count Visage pulls out a green jellybean from his sleeve.]\
                                    <br>\
                                    <br>\
                                    BOILER BELLE: Is that... lime?\
                                    <br>\
                                    <br>\
                                    COUNT VISAGE: Maybe. Want to be friends again?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "15%",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. In his letter to Pippo, Frederick uses a metaphor to compare a play to a ____ of emotions.',
                        'B. [<u>Yes] or [<u>no]: the underlined sentence in Frederick\'s letter is a simile.',
                        'C. In \"Jellybean Friends,\" Boiler Belle said Count Visage was \"as sneaky as a fox.\" Is this a [<u>simile] or a [<u>metaphor]?',     
                        'D. Does \"Jellybean Friends\" have [<u>one] or [<u>two] similes?',                    
                    ],
                    puzzle: [
                        ["0","0","(C)1S","0","0","0","0"],
                        ["0","0","I","0","0","0","0"],
                        ["0","0","M","0","0","0","(D)T"],
                        ["0","0","I","0","0","0","W"],
                        ["(A)V","O","3L","C","A","(B)N","4O"],
                        ["0","0","E","0","0","2O","0"],
                    ]
                },  
                code: {
                    answer: "SOLO",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ terror tunnel
        {

            info: {
                type: 'challenge',
                title: "Terror Tunnel",
                asset: "plucky-the-clown.png",
                state: "incomplete",
                hint: {
                    text: "Read both notes, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.4b",
                        "L.3.4c",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3a",
                        "RF.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4c",
                    ],
                }
            },

            intro: {
                character: "Plucky the Clown",
                asset: "plucky-the-clown.png",
                dialogue : {
                    incomplete: "I don\'t feel good... I need to quit this yucky tunnel job! I wrote some notes about it, but the words I used might be too hard. Can you check everything for me? My brain feels fuzzy.",
                    complete: "Oh wow... thanks a bunch! Maybe now I can go back to the stage. I just need a little break..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "plucky-the-clown.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Note A",
                                },
                                passage: {
                                    text: "This new job makes me [<u>uncomfortable]. The tunnel is super loud, it spins way too fast, and something about it just feels wrong. I miss being on stage with my rubber chickens.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-13%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Note B",
                                },
                                passage: {
                                    text: "Lately, I\'ve been feeling really sad and [<u>glum]. I try to smile, but I [<u>despise] working in the Terror Tunnel. I just really hate it. I want to feel happy again!",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "10%",
                                rotate: "1deg",
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
                            width: "percent55",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        }
                    },                   
                    contentArray: [
                        {
                            title: {
                                font: 'default',
                                size: 'medium',
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
                        title: "[<g>1.] What does the prefix \"un-\" mean?",
                        correctIndex: 1,
                        paragraph: [
                            "{V}ery",
                            "{N}ot",
                            "Betw{e}en",
                        ],
                    },
                    {
                        title: "[<g>2.] In Note A, what does \"uncomfortable\" mean?",
                        correctIndex: 1,
                        paragraph: [
                            "Ver{y} comfortable",
                            "Not c{o}mfortable",
                            "None of the abo{v}e",
                        ],
                    },
                    {
                        title: "[<g>3.] Read Note B. One synonym of \"glum\" is:",
                        correctIndex: 0,
                        paragraph: [
                            "{S}ad",
                            "Excite{d}",
                            "Bo{r}ed",
                        ],
                    },
                    {
                        title: "[<g>4.] In Note B, the word \"despise\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "Hap{p}y",
                            "L{o}ve",
                            "Hat{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "NOSE",
                    userArray: ["","","",""]
                },
            },      

        },

        // ⭐ hall of mirrors
        {

            info: {
                type: 'challenge',
                title: 'Hall of Mirrors',
                asset: "count-visage.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.5",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Count Visage",
                asset: "count-visage.png",
                dialogue : {
                    incomplete: "Oh no, don\'t judge me so fast! I wear a cape and walk at night, but that doesn\'t mean I\'m bad. I wrote a poem to show I\'m good \u2014 will you read it?",
                    complete: "Thank you so much! I hope you always have great taste."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "count-visage.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'I\'m Not Mean',
                                },
                                subtitle: {
                                    text: 'By Count Visage',
                                },
                                passage: {
                                    text:   "I like gold rings and soft red capes,\
                                    <br>\
                                    big long curtains and spooky shapes.\
                                    <br>\
                                    People scream when they see me,\
                                    <br>\
                                    but I just like cool stuff, you see!\
                                    <br>\
                                    <br>\
                                    I drink grape juice from a shiny cup,\
                                    <br>\
                                    with candles bright and all lit up.\
                                    <br>\
                                    I\'m not a bad guy, no, not at all.\
                                    <br>\
                                    I\'m just fancy. That\'s my call!"
                                }
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
                                align: 'center'
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
                        title: "[<g>1.] The rhyme scheme of \"I\'m Not Mean\" is:",
                        word: "AAB[B]",
                    },
                    {
                        title: "[<g>2.] [<u>True] or [<u>false]: this poem has three stanzas.",
                        word: "F[A]LSE",
                    },
                    {
                        title: "[<g>3.] How many syllables are in line five?",
                        word: "NI[N]E",
                    },
                    {
                        title: "[<g>4.] The poet\'s name is Count ____ .",
                        word: "VISAG[E]",
                    },
                ],
                code: {
                    answer: "BANE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ boiler room
        {

            info: {
                type: 'challenge',
                title: "Boiler Room",
                asset: "boiler-belle.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",

                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.10"
                    ],
                }
            },

            intro: {

                character: "Boiler Belle",
                asset: "boiler-belle.png",
                dialogue : {
                    incomplete: "Huh. Someone wrote a story about me, since I\'m the employee of the month. That\'s cool, but I don\'t have time to read it. I\'ve got a boiler to fix! Can you tell me what it says?",
                    complete: "Thanks for reading that. Now if you\'ll excuse me, I\'ve got work to do."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "boiler-belle.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Employee of the Month: Boiler Belle',
                                },
                                passage: {
                                    text:   "On Boiler Belle\'s first night working at Frederick\'s Funhouse, she came with a big smile and a shiny wrench. She was ready to help, but her boss, Frederick, didn\'t seem to care. \"Just stay out of the way,\" he said.\
                                    <br>\
                                    An hour later, alarms went off! Sticky steam filled the halls. The mirrors got foggy, and guests started screaming. Frederick ran into the boiler room, waving his arms. \"King Pumpkin is coming to visit!\" he yelled. \"If he sees this mess, we\'re in big trouble!\"\
                                    <br>\
                                    Frederick walked in circles. \"I bet it\'s that sad clown\'s fault. What\'s his name? Plucky? He\'s always whining and causing trouble.\"\
                                    <br>\
                                    But Belle saw the real problem: a broken pipe leaking steam and purple goo. She didn\'t wait. She grabbed her shiny wrench and fixed the pipe, then \u2014 POP! The steam stopped. The lights came back on. The goo dried up.\
                                    <br>\
                                    King Pumpkin walked in just after. He looked around, smiled, and said, \"What a lovely funhouse!\" Frederick looked at Belle. \"You fixed it?\"\
                                    <br>\
                                    Belle didn\'t say anything. She just kept working."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "4%",
                                rotate: "-2deg",
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
                                indent: 'default',
                                brSplit: 'default'
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
                        title: "[<g>1.] Boiler Belle is:",
                        correctIndex: 1,
                        paragraph: [
                            "Sneaky an{d} rude",
                            "{H}ardworking and brave",
                            "Lazy and sill{y}",
                        ],
                    },
                    {
                        title: "[<g>2.] How did Belle stop the steam from leaking?",
                        correctIndex: 0,
                        paragraph: [
                            "She fixed the brok{e}n pipe",
                            "She walked {i}n circles",
                            "She staye{d} out of the way",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the setting of this story?",
                        correctIndex: 0,
                        paragraph: [
                            "Frederick\'s Funhouse {a}t night",
                            "Frederick\'s Funhouse during the da{y}",
                            "King P{u}mpkin\'s castle",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the theme of this story?",
                        correctIndex: 2,
                        paragraph: [
                            "King Pumpkin visited the fun{h}ouse",
                            "Boiler {B}elle is the employee of the month",
                            "Don\'t judge someone jus{t} because they\'re new",
                        ],
                    },
                ],  
                code: {
                    answer: "HEAT",
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