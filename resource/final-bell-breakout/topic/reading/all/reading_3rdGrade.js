
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
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.3",
                        "RI.3.8",
                        "RI.3.10",
                    ],
                }
            },

            intro: {
                character: "Student Mystica",
                asset: "character-1.png",
                dialogue : {
                    incomplete: "Oh, you\'re just in time! I've been so busy making this jellyfish cake that I haven't read my teacher\'s tips. Can you tell me what she\'s trying to say?",
                    complete: "Mm, yes. I knew it would work out. Now, back to my cake!"
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
                                    text: 'Jellyfish Cake Tips',
                                },
                                subtitle: {
                                    text: "By Chef Marina",
                                },
                                passage: {
                                    text:   "Making a jellyfish cake is tricky! [<sal>First, it\'s hard to get the taffy tentacles just right.] They get tangled super easily. You must keep each one perfectly straight.\
                                    <br>\
                                    Frosting the cake can be hard too. It needs to be smooth and round, or it won\'t look like a jellyfish. By the way, did you know that there are more than 2,000 species of jellyfish?\
                                    <br>\
                                    Even though it\'s hard to make, this cake always tastes great. [<blu>I like other cakes too.] Chocolate is pretty good!"
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
                            width: "percent55",
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
                        title: "[<g>1.] What is the main idea of \"Jellyfish Cake Tips\"?",
                        correctIndex: 0,
                        paragraph: [
                            "{M}aking a jellyfish cake is tricky",
                            "Long {s}trips of taffy are hard to find",
                            "Chef Marina loves c{o}oking",
                        ],
                    },
                    {
                        title: "[<g>2.] Read the red sentence in the first paragraph. Is this sentence a key detail?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "{N}o",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of these quotes is another key detail?",
                        correctIndex: 0,
                        paragraph: [
                            "\"Fro{s}ting the cake can be hard too\"",
                            "\"There are {m}ore than 2,000 species of jellyfish\"",
                            "\"Chocolate is prett{y} good\"",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the blue sentence also supports the main idea.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tr{u}e",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "MESS",
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
                    topic: "Context Clues and Vocabulary",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
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
                        "L.3.5",
                        "L.3.5c",
                        "RF.3.3",
                        "RF.3.3a",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4c",
                        "RI.3.4",
                        "RI.3.10",
                    ],
                }
            },

            intro: {
                character: "Student Pippo",
                asset: "character-2.png",
                dialogue : {
                    incomplete: "Oh boy! There are SO many cool tools in here! My teacher said I have to read the warning labels first, but some of these words are really hard. Can you help me figure them out?",
                    complete: "Woohoo, let\'s go! Thanks for the help. I already want to try that laser cutter!"
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
                                    text: "This tool sparks, spins, and makes wild noises. It looks and sounds so weird and [<u>wacky] \u2014 like nothing you've ever seen before!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "4%",
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
                                    text: "This tool spins fast to make metal smooth and shiny. It often falls apart, so make sure to [<u>rebuild] it before you use it.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
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
                                    text: "The blaster gets really hot. Actually, it gets more than hot. It gets [<u>scorching]! You need to be very careful around this tool.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "18%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Laser Cutter",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "NEVER go near the laser cutter when it is on. This tool is even brighter than [<u>sunlight]. It can hurt your eyes really bad!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-2%",
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
                            padding: 'default'
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
                        title: "[<g>1.] The underlined word in \"Laser Cutter\" means ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "A dangerous t{o}ol",
                            "Dar{k} orange",
                            "Light from the {s}un",
                        ],
                    },
                    {
                        title: "[<g>2.] The underlined word in \"Blaster\" means ___ .",
                        correctIndex: 1,
                        paragraph: [
                            "A little h{o}t",
                            "Su{p}er hot",
                            "{C}areful",
                        ],
                    },
                    {
                        title: "[<g>3.] Read \"Gear Cruncher.\" What is another word for \"wacky\"?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{o}ol",
                            "We{i}rd",
                            "Sound{s}",
                            "Se{e}n",
                        ],
                    },
                    {
                        title: "[<g>4.] Read \"Polisher.\" If \"re-\" means [<i>again], then the underlined word means ___ .",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Build agai{n}",
                            "Build {j}ust once",
                            "Fal{l} apart",
                            "Spin f{a}st",
                        ],
                    },
                ],  
                code: {
                    answer: "SPIN",
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
                    text: "Read the passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.3.3",
                        "L.3.5a",
                        "L.3.6",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.4",
                    ],
                }
            },

            intro: {
                character: "Student Robustus",
                asset: "character-3.png",
                dialogue : {
                    incomplete: "I, Robustus, have been asked to check some recess passes. This job is way too small for someone as great as me. Can you take care of it?",
                    complete: "Hmph. Good job, I guess. Now move aside! Great things await me."
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
                                    text: "Recess Pass One",
                                },
                                passage: {
                                    text: "Want this recess pass? [<u>Be like a cheetah] and zoom quickly through your work! If you\'re as busy as a bee, you'll earn this pass in no time.",
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
                                    text: "Recess Pass Two",
                                },
                                passage: {
                                    text: "You think you deserve recess? Getting this pass is [<u>like lifting a mountain.] So don\'t get your hopes up. To get it, [<sal>you must be a robot]: work without stopping, don\'t make a single mistake, and always do exactly what you're told.",
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
                        'A. Is the underlined text in \"Recess Pass One\" a [<u>simile] or a [<u>metaphor]?',
                        'B. In all, are there [<u>one], [<u>two], or [<u>three] similes in \"Recess Pass One\"?',
                        'C. Does the underlined text in \"Recess Pass Two\" mean that getting this pass is [<u>hard] or [<u>easy]?',     
                        'D. [<u>True] or [<u>false]: the red text in \"Recess Pass Two\" is a metaphor.',                    
                    ],
                    puzzle: [
                        ["(B)1T","0","0","0","0","0","0"],
                        ["W","0","0","0","0","(D)T","0"],
                        ["O","0","0","(C)H","2A","R","D"],
                        ["0","0","0","0","0","U","0"],
                        ["(A)S","I","3M","I","L","4E","0"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "TAME",
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
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.3.3",
                        "L.3.5",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.5",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Student Mabel",
                asset: "character-4.png",
                dialogue : {
                    incomplete: "There\'s so much weird stuff in this science lab! My teacher wants me to read about something called a \"goo monster,\" but I need your help figuring it out. Can you take a look?",
                    complete: "Oh, that makes sense. Thanks! I\'ll be extra careful from now on!"
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
                                    text: 'Mixing Goo',
                                },
                                subtitle: {
                                    text: 'By Keith',
                                },
                                passage: {
                                    text:   "I put red goo in a big glass cup,\
                                    <br>\
                                    then added green goo to make it new.\
                                    <br>\
                                    The mix got hot and bubbled all up,\
                                    <br>\
                                    and out came a monster, made out of goo!\
                                    <br>\
                                    <br>\
                                    The slimy monster rolled down the hall,\
                                    <br>\
                                    sticking to desks and chairs so tight.\
                                    <br>\
                                    I stopped it before it could get us all,\
                                    <br>\
                                    but the room was a mess. Oh what a night!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "8%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Think Before You Act',
                                },
                                subtitle: {
                                    text: 'By Blake',
                                },
                                passage: {
                                    text:   "Keith mixed with no care\
                                    <br>\
                                    Out came a sticky monster\
                                    <br>\
                                    Think before you act"
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
                                translateY: "4%",
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
                                size: 'mediumSmall',
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
                        title: "[<g>1.] \"Think Before You Act\" has ___ syllables in line 3.",
                        word: "[F]IVE",
                    },
                    {
                        title: "[<g>2.] How many stanzas does \"Mixing Goo\" have?",
                        word: "TW[O]",
                    },
                    {
                        title: "[<g>3.] In \"Mixing Goo,\" line two rhymes with line ___ .",
                        word: "FO[U]R",
                    },
                    {
                        title: "[<g>4.] Which poet wrote \"Think Before You Act\"?",
                        word: "B[L]AKE",
                    },
                ],
                code: {
                    answer: "FOUL",
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
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.2",
                        "RL.3.3",
                        "RL.3.5",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Student Kevin",
                asset: "character-5.png",
                dialogue : {
                    incomplete: "HONK! My teacher wants me to turn this story into a play. But I am NOT going to read it! Just tell me what it\'s about, okay?",
                    complete: "Fine. HONK. No, I am not saying thank you. Now leave me alone."
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
                                    text: 'Amy\'s Sneakers',
                                },
                                passage: {
                                    text:   "Amy was the slowest runner in gym class. She didn\'t care. She never practiced and never tried. Then one day, she found magic sneakers under a bench. When she put them on, her feet moved so fast she won every race!\
                                    <br>\
                                    The next day, Amy wore the sneakers again. She won easily. In fact, she kept winning race after race. But something felt wrong. Winning this way wasn\'t fun. She thought about her friend Zara, who worked hard every day to get faster on her own.\
                                    <br>\
                                    A few weeks later, Amy\'s sneakers fell apart. She ran without them and came in last. But as she ran, she learned something important. [<u>Real success comes from hard work, not shortcuts.] So, she threw the sneakers away and started to practice. Every day she got a little faster. Every win felt real."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "0deg",
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
                                align: 'left'
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
                        title: "[<g>1.] At the beginning of the story, does Amy care about running?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Y{e}s",
                            "{N}o",
                        ],
                    },
                    {
                        title: "[<g>2.] Who is this story mostly about?",
                        correctIndex: 0,
                        paragraph: [
                            "{A}my",
                            "Za{r}a",
                            "None of t{h}e above",
                        ],
                    },
                    {
                        title: "[<g>3.] Where does \"Amy\'s Sneakers\" take place?",
                        correctIndex: 1,
                        paragraph: [
                            "A {s}mall park",
                            "Gy{m} class",
                            "Summe{r} camp",
                        ],
                    },
                    {
                        title: "[<g>4.] Does the underlined sentence tell us the theme of this story?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },
                ],  
                code: {
                    answer: "NAME",
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
