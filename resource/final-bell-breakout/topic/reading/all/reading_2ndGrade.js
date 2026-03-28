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
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RI.2.2",
                        "RI.2.6",
                        "RI.2.8",
                        "RI.2.10",
                        "RL.2.1",                      
                    ],
                }
            },

            intro: {
                character: "Student Mystica",
                asset: "character-1.png",
                dialogue : {
                    incomplete: "Oh, you are just in time! I am making a jellyfish cake. But I have not read my teacher's note yet. Can you help me?",
                    complete: "Great! I knew you could help! Now, back to making this tasty cake."
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
                                    text: 'Jellyfish Cake',
                                },
                                subtitle: {
                                    text: "By Chef Marina",
                                },
                                passage: {
                                    text:   "&nbsp; &nbsp; It is hard to make a jellyfish cake! [<sal>First, it is hard to make the cake the right shape.] It needs to be smooth and round, just like a jellyfish. [<blu>Also, it is hard to keep the taffy tentacles from getting messy.] They must be neat! Finally, it is hard to make the frosting. You have to mix blue and white very slowly."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
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
                                size: 'large',
                                align: 'center'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'medium',
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
                        title: "[<g>1.] What is this text mostly about?",
                        correctIndex: 2,
                        paragraph: [
                            "Jell{y}fish are round",
                            "Jellyfish cake tastes g{o}od",
                            "It is hard to {m}ake a jellyfish cake",
                        ],
                    },
                    {
                        title: "[<g>2.] Read the red sentence. Is it a key detail that helps support the main idea?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "{N}o",
                        ],
                    },
                    {
                        title: "[<g>3.] Read the blue sentence. This sentence is a ___ .",
                        correctIndex: 0,
                        paragraph: [
                            "Key detai{l}",
                            "Qu{e}stion mark",
                            "{P}oem",
                        ],
                    },
                    {
                        title: "[<g>4.] Which two colors must you mix for the frosting?",
                        correctIndex: 1,
                        paragraph: [
                            "Re{d} and blue",
                            "Blue and whi{t}e",
                            "White and g{r}een",
                        ],
                    },
                ],  
                code: {
                    answer: "MELT",
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
                       "L.2.3",
                       "L.2.4",
                       "L.2.4a",
                       "L.2.4d",
                       "L.2.5",
                       "L.2.5b",
                       "L.2.6",
                       "RF.2.3",
                       "RF.2.4",
                       "RF.2.4a",
                       "RF.2.4b",
                       "RF.2.4c",
                       "RF.2.1",
                       "RI.2.4",
                       "RI.2.10",
                    ],
                }
            },

            intro: {
                character: "Student Pippo",
                asset: "character-2.png",
                dialogue : {
                    incomplete: "There are SO many cool tools in here! But my teacher says I have to read the warning labels. Some of the words are really hard. Want to help?",
                    complete: "Woohoo! Thanks for the help! I really want to try that laser cutter!"
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
                                    text: "This tool sparks and makes wild noises. It looks and sounds so [<u>wacky] and silly!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Spinner",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This tool cleans dirty pieces of metal. When you are done, the pieces look [<u>polished] \u2014 smooth and shiny!",
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
                                    text: "The blaster does not get [<u>warm]. It gets HOT! So just be very careful, and do not touch it.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "12%",
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
                                    text: "NEVER go near the laser cutter when it is on. It is even brighter than [<u>sunlight]. It can hurt your eyes!",
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
                        title: "[<g>1.] What does the underlined word in \"Blaster\" mean?",
                        correctIndex: 0,
                        paragraph: [
                            "A lit{t}le hot",
                            "Ve{r}y hot",
                            "C{a}reful",
                        ],
                    },
                    {
                        title: "[<g>2.] The underlined word in \"Laser Cutter\" means:",
                        correctIndex: 1,
                        paragraph: [
                            "Th{e} color yellow",
                            "Light f{r}om the sun",
                            "A silly sou{n}d",
                        ],
                    },
                    {
                        title: "[<g>3.] Read \"Gear Cruncher.\" What is another word for \"wacky\"?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "To{o}l",
                            "{H}ot",
                            "S{i}lly",
                            "Care{f}ul",
                        ],
                    },
                    {
                        title: "[<g>4.] Read \"Spinner.\" What does \"polished\" mean?",
                        correctIndex: 1,
                        paragraph: [
                            "Dirt{y} and rusty",
                            "S{m}ooth and shiny",
                            "Soft and s{q}uishy",
                        ],
                    },
                ],  
                code: {
                    answer: "TRIM",
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
                    text: "Read the passage and look at the picture, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Text Features",
                    commonCore: [
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RI.2.2",
                        "RI.2.3",
                        "RI.2.5",
                        "RI.2.6",
                        "RI.2.7",
                        "RI.2.9",
                        "RI.2.10",
                        "RL.2.1",
                        "RL.2.7",                  
                    ],
                }
            },

            intro: {
                character: "Student Robustus",
                asset: "character-3.png",
                dialogue : {
                    incomplete: "They call me Robustus. My teacher says I have to read some rules about recess. Rules about recess! Ugh! Can you just read them for me?",
                    complete: "Hmph. You did a good job. Now move on! I have important work to do."
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
                                title: {
                                    text: 'Recess',
                                },
                                subtitle: {
                                    text: 'By Sadie',
                                },
                                passage: {
                                    text: "Recess is fun, but there are a few rules! Stay where teachers can see you. Take turns and be kind. When the bell rings, line up right away.\
                                    <br>\
                                    If you break the rules, you lose recess. You will have to sit inside and watch a video about cheese. It is not a good video. It is boring."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "fbb_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "5%",
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
                            width: "percent43",
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
                            subtitle: {
                                font: 'default',
                                size: 'small',
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Is the title of this text \"[<u>Recess]\" or \"[<u>Rules]\"?',
                        'B. What is the author\'s name?',
                        'C. [<u>True] or [<u>false]: the picture shows the boring cheese video.',     
                        'D. Read the label under the picture. Was this picture taken on [<u>Monday] or [<u>Tuesday]?',                    
                    ],
                    puzzle: [
                        ["(A)R","E","C","E","(B)S","3S","0"],
                        ["0","0","0","0","A","0","0"],
                        ["0","(D)M","O","N","1D","A","Y"],
                        ["0","0","0","0","I","0","0"],
                        ["0","(C)4T","R","2U","E","0","0"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "DUST",
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
                    text: "Read the poem, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "L.2.5",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.3",
                        "RL.2.4",
                        "RL.2.10"
                    ],
                }
            },

            intro: {
                character: "Student Mabel",
                asset: "character-4.png",
                dialogue : {
                    incomplete: "This science lab is so weird! My teacher wants me to read about a goo monster. I don't get it. Can you help me?",
                    complete: "Oh, that makes sense! Thanks! I will be really careful now."
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
                                    text: 'Monster',
                                },
                                subtitle: {
                                    text: 'By Keith',
                                },
                                passage: {
                                    text:   "I put red goo in a big glass cup,\
                                    <br>\
                                    then added green goo to make it new.\
                                    <br>\
                                    The mix got hot and then bubbled up,\
                                    <br>\
                                    and out came a monster, made out of goo!\
                                    <br>\
                                    <br>\
                                    The slimy monster rolled down the hall,\
                                    <br>\
                                    sticking to desks and chairs in its way.\
                                    <br>\
                                    I stopped it before it could get us all,\
                                    <br>\
                                    but the room was a mess. Oh what a day!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "6%",
                                rotate: "3deg",
                            }
                        },
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
                                translateY: "5%",
                                rotate: "-4deg",
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
                        },
                    ]
                },
            },

            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is the title of the poem?",
                        word: "MO[N]STER",
                    },
                    {
                        title: "[<g>2.] Which word in this poem rhymes with \"new\"?",
                        word: "GO[O]",
                    },
                    {
                        title: "[<g>3.] How many syllables are in line 4 of this poem?",
                        word: "[T]EN",
                    },
                    {
                        title: "[<g>4.] In this poem, Keith mixed red and ___ goo.",
                        word: "GRE[E]N",
                    },
                ],
                code: {
                    answer: "NOTE",
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
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RL.2.1",
                        "RL.2.2",
                        "RL.2.3",
                        "RL.2.5",
                        "RL.2.10"
                    ],
                }
            },

            intro: {
                character: "Student Kevin",
                asset: "character-5.png",
                dialogue : {
                    incomplete: "HONK! My teacher wants me to turn this story into a play. I am NOT going to do it! You read it, and tell me what it says. Okay?",
                    complete: "Fine. HONK. No, I am not saying thank you. Leave me alone."
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
                                    text: 'Amy\'s Shoes',
                                },
                                passage: {
                                    text:   "Amy was the slowest runner in gym class. She did not care. She never tried. Then one day, she found magic shoes under a bench.\
                                    <br>\
                                    When she put the magic shoes on, she won every race! She even beat her best friend Zara, who practiced for many hours every week. But it did not feel right. She knew the shoes were doing all the work, not her.\
                                    <br>\
                                    Then one day, the shoes broke. Amy ran without them and came in last. So, she started to try harder. Every day she got a little faster. Every win felt real.\
                                    <br>\
                                    That is when she learned something important. [<u>Cheating will not make you better. You have to work hard!]"
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
                        title: "[<g>1.] True or false: the underlined sentence tells us the lesson of the story.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "T{r}ue",
                            "Fals{e}",
                        ],
                    },
                    {
                        title: "[<g>2.] When Amy started to try harder, what happened?",
                        correctIndex: 2,
                        paragraph: [
                            "She hurt he{r}self",
                            "S{h}e got slower",
                            "She got fast{e}r",
                        ],
                    },
                    {
                        title: "[<g>3.] Who is this story mostly about?",
                        correctIndex: 0,
                        paragraph: [
                            "{A}my",
                            "Za{r}a",
                            "None of t{h}e above",
                        ],
                    },
                    {
                        title: "[<g>4.] Where does \"Amy\'s Shoes\" take place?",
                        correctIndex: 1,
                        paragraph: [
                            "A s{m}all park",
                            "Gym c{l}ass",
                            "S{u}mmer camp",
                        ],
                    },
                ],  
                code: {
                    answer: "REAL",
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
