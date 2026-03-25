const resource =  {
    
    info: {
        title: "Final Bell Breakout",
        path: "final-bell-breakout",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "TIME TIL THE BELL"
    },

    challengeArray: [

        // ⭐ cooking class
        {

            info: {
                type: 'challenge',
                title: "Baking Class",
                asset: "node-1.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [],
                }
            },

            intro: {
                character: "Student Mystica",
                asset: "character-1.png",
                dialogue : {
                    incomplete: "Ah, just in time! I've been so busy gathering ingredients for this jellyfish cake... I simply haven't had a moment to read my instructor\'s advice. Would you let me know she\'s trying to say?",
                    complete: "Mm, yes. Somehow I knew it would all work out... Now, back to my cake."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background-1.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Jellyfish Cake Advice',
                                },
                                subtitle: {
                                    text: "By Chef Marina Bubbles",
                                },
                                passage: {
                                    text:   "Jellyfish cakes are tricky to get right! Licorice strips can become tangled very easily, but they make fantastic tentacles. You just have to keep each one separate and dangly.\
                                    <br>\
                                    Shaping the cake can also be a challenge. The body needs to be  smooth and round, or it simply won\'t look like a jellyfish. Did you know that real jellyfish have existed for millions of years?\
                                    <br>\
                                    Oh, I almost forgot \u2014 choosing the right frosting color is tough too! You'll need to mix your colors carefully to achieve the perfect pale blue or white glow.\
                                    <br>\
                                    Even though there is a lot of patience and skill required, this cake is totally delicious. It's my personal favorite!"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
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
                        title: "[<g>1.] What\'s the main idea of \"Jellyfish Cake Advice\"?",
                        correctIndex: 2,
                        paragraph: [
                            "Chef {M}arina Bubbles loves to cook",
                            "Frosting a jelly{f}ish cake is challenging",
                            "It is difficult to make a jel{l}yfish cake",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the first sentence of the second paragraph supports the main idea.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tr{u}e",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of the following quotes is a key detail?",
                        correctIndex: 0,
                        paragraph: [
                            "\"Lico{r}ice strips can become tangled very easily\"",
                            "\"Jellyfish have existed on for {m}illions of years\"",
                            "\"It's m{y} personal favorite\"",
                        ],
                    },
                    {
                        title: "[<g>4.] Which quote is [<i>not] a supporting detail?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Shaping the cake can also be {a} challenge\"",
                            "\"C{h}oosing the right frosting color is tough\"",
                            "\"This cak{e} is totally delicious\"",
                        ],
                    },
                ],  
                code: {
                    answer: "LURE",
                    userArray: ["","","",""]
                },
            },
               
        },

        // ⭐ machine shop
        {

            info: {
                type: 'challenge',
                title: "Machine Shop",
                asset: "node-2.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues",
                    commonCore: [],
                }
            },

            intro: {
                character: "Student Pippo",
                asset: "character-2.png",
                dialogue : {
                    incomplete: "There are SO many cool tools in this class! My instructor said I have to read some warning labels first, but these words are super tricky. Wanna help me figure out what they mean?",
                    complete: "Woohoo, let\'s go! Thanks for the help \u2014 I\'ve already got my eye on the gear crusher!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background-2.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Gear Cruncher",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This [<u>extraordinary] tool sparks, spins, and makes wild noises. It\'s like something from a dream or a fantasy world, not real life!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Polisher",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This tool rotates fast to make rusty metal shiny and smooth. Be sure to reattach the safety guard before you switch it on.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-25%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Blaster",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The blaster breaks apart pieces of old metal. It\'s easy to make mistakes with this tool, so it takes a [<u>proficient] person to use.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "5%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Slammer",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "NEVER go near the slammer when it is turned on. Unlike the other major tools in this room, which are perfectly safe, this one is [<u>hazardous].",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    }
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
                            width: "percent35",
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
                        title: "[<g>1.] The underlined word in \"Gear Cruncher\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "Extre{m}ely well-known and popular",
                            "Likely to ca{u}se injury",
                            "{F}ar beyond what is normal or expected",
                        ],
                    },
                    {
                        title: "[<g>2.] In \"Slammer,\" __ is an antonym of \"hazardous.\"",
                        correctIndex: 1,
                        paragraph: [
                            "Ma{j}or",
                            "S{a}fe",
                            "Perfe{c}t",
                        ],
                    },
                    {
                        title: "[<g>3.] Find the underlined word in \"Blaster.\" Which of the following words is a synonym?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{S}killed",
                            "Artisti{c}",
                            "Car{e}less",
                            "{Q}uick",
                        ],
                    },
                    {
                        title: "[<g>4.] Which word in \"Polisher\" means [<i>to connect something back to where it was before]?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "{R}otates",
                            "S{w}itch",
                            "Reat{t}ach",
                            "G{u}ard",
                        ],
                    },
                ],  
                code: {
                    answer: "FAST",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ recess
        {

            info: {
                type: 'challenge',
                title: "Recess",
                asset: "node-3.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [],
                }
            },

            intro: {
                character: "Student Robustus",
                asset: "character-3.png",
                dialogue : {
                    incomplete: "I, Robustus, have been tasked with reviewing a pair of recess passes \u2014 a job far beneath my abilities. I refuse to waste my time on such tiny matters. Will you take care of them for me?",
                    complete: "Hmph. Fair work, I suppose. Now stand aside! I have greater things to accomplish."
                },
            },   
            
            activity: {
                info: {
                    type: "dynamic",
                    asset: "background-3.png",
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
                                    text: "Recess Pass: Version One",
                                },
                                passage: {
                                    text: "To earn this recess pass, all you need to do is stay focused and finish your work. [<u>There are a million things trying to distract you,] but don't let them! Just keep your eyes on the prize.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "-5%",
                                rotate: "-2deg",
                            }
                        }
                    },
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
                                    text: "Recess Pass: Version Two",
                                },
                                passage: {
                                    text: "Think you deserve recess? Think again! This pass won\'t hand itself over without a fight. You must be a machine: working without stopping, never getting tired, never making mistakes, and always doing what you\'re told.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "10%",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Is the underlined text in \"Recess Pass: Version One\" an [<u>idiom] or a [<u>simile]?',
                        'B. [<u>Right] or [<u>wrong]: the phrase \"the early bird catches the worm\" is an example of [<i>literal language.]',
                        'C. [<u>Right] or [<u>wrong]: the underlined text in \"Recess Pass: Version Two\" is a metaphor.',     
                        'D. Does \"Recess Pass [<u>One]\" or \"Recess Pass [<u>Two]\" contain a simile?',                    
                    ],
                    puzzle: [
                        ["0","(B)T","0","0","0","0","0"],
                        ["0","H","0","0","(C)R","0","0"],
                        ["0","3I","0","0","I","0","0"],
                        ["(A)W","R","O","N","4G","0","(D)T"],
                        ["0","D","0","0","H","0","2W"],
                        ["0","0","0","0","1T","0","O"],
                    ]
                },  
                code: {
                    answer: "TWIG",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ science lab
        {

            info: {
                type: 'challenge',
                title: "Science Lab",
                asset: "node-4.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [],
                }
            },

            intro: {
                character: "Student Mabel",
                asset: "character-4.png",
                dialogue : {
                    incomplete: "Oh, hi! There's so much overwhelming stuff in this science lab... My instructor wants me to read about something called a \"goo monster,\" but I can\'t make any sense of it. Can you take a look?",
                    complete: "Oh, that actually makes a lot of sense. Thanks! I\'ll definitely be careful from here on out."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background-4.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Mix',
                                },
                                subtitle: {
                                    text: 'By Quinn',
                                },
                                passage: {
                                    text:   "I poured red goo in a massive glass cup,\
                                    <br>\
                                    then added green goo to make it new.\
                                    <br>\
                                    The thick sludge boiled and bubbled all up,\
                                    <br>\
                                    and out popped a monster, made out of goo!\
                                    <br>\
                                    <br>\
                                    The dreadful creature slinked down the hall,\
                                    <br>\
                                    sticking to desks impossibly tight.\
                                    <br>\
                                    When I managed to stop it, once and for all,\
                                    <br>\
                                    the room was SO sticky... oh, what a night!"
                                }
                            }
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
                        contentArray: [
                            {
                                title: {
                                    text: 'Think Things Through',
                                },
                                subtitle: {
                                    text: 'By Blake',
                                },
                                passage: {
                                    text:   "Quinn mixed without thought\
                                    <br>\
                                    The goo became a monster\
                                    <br>\
                                    Always think things through"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "25%",
                                rotate: "4deg",
                            }
                        }
                    }
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
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] There are ___ syllables in line 7 of \"Goo Monster.\"",
                        word: "E[L]EVEN",
                    },
                    {
                        title: "[<g>2.] [<u>Right] or [<u>wrong]: both poems show the same event.",
                        word: "R[I]GHT",
                    },
                    {
                        title: "[<g>3.] What type of poem is \"Think Things Through?\"",
                        word: "HAI[K]U",
                    },
                    {
                        title: "[<g>4.] Which poet wrote a poem with a single stanza?",
                        word: "BLAK[E]",
                    },
                ],
                code: {
                    answer: "LIKE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ theater
        {

            info: {
                type: 'challenge',
                title: "Theater",
                asset: "node-5.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [],
                }
            },

            intro: {
                character: "Student Kevin",
                asset: "character-5.png",
                dialogue : {
                    incomplete: "HONK! My instructor wants me to see if this short story can be adapted into a play. Well, I\'m not going to even read it! Just tell me what it\'s all about, okay? HONK!",
                    complete: "Fine. HONK. Don\'t expect any gratitude. Now leave me alone."
                },
            },  
            
            activity: {
                info: {
                    type: "dynamic",
                    asset: "background-5.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Maya\'s Magic Sneakers',
                                },
                                passage: {
                                    text:   "Maya was the slowest runner in gym class, and she couldn\'t have cared less. She never practiced and never pushed herself. Then one day, she discovered a pair of shiny sneakers tucked beneath a bench. The moment she laced them up, something changed. Her feet moved like they had a mind of their own, and suddenly she was crossing every finish line first!\
                                    <br>\
                                    Maya wore them again the next day. And the day after that. The victories piled up easily \u2014 but somewhere along the way, the thrill began to fade. Each win began to feel unsatisfying in a way she couldn\'t quite explain. She found herself watching her friend Zara, who showed up early every morning and tried her hardest. She\'d been getting quietly getting faster for months.\
                                    <br>\
                                    Then one afternoon, the sneakers gave out entirely. The seams split, the soles cracked; they were done. Maya ran the next race without them and finished last. But somewhere in those final strides, something clicked. She picked up the ruined sneakers, dropped them in the trash, and showed up to gym early the next day.\
                                    <br>\
                                    The wins that followed took longer to earn. But for the first time, they actually meant something."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-1%",
                                rotate: "-1deg",
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'left'
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
                        title: "[<g>1.] What point of view is this story told from?",
                        correctIndex: 1,
                        paragraph: [
                            "F{i}rst person",
                            "Thi{r}d person",
                            "Gym {c}lass",
                        ],
                    },
                    {
                        title: "[<g>2.] The conflict in this story is between:",
                        correctIndex: 0,
                        paragraph: [
                            "M{a}ya and herself",
                            "Maya and {Z}ara",
                            "Zara a{n}d the gym teacher",
                        ],
                    },
                    {
                        title: "[<g>3.] How does Maya grow throughout this story?",
                        correctIndex: 2,
                        paragraph: [
                            "From q{u}iet to confident",
                            "From shy and fearful to bold and co{m}petitive",
                            "From {c}areless and lazy to hardworking",
                        ],
                    },
                    {
                        title: "[<g>4.] What\'s the theme of \"Maya\'s Magic Sneakers\"?",
                        correctIndex: 1,
                        paragraph: [
                            "Maya found magic sneakers un{d}er a bench",
                            "Succ{e}ss comes from hard work, not shortcuts",
                            "It\'s important to show up early for gym clas{s}",
                        ],
                    },
                ],  
                code: {
                    answer: "RACE",
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

