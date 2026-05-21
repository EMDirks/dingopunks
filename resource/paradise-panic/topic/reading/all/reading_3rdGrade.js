const resource =  {
    
    info: {
        title: "Paradise Panid",
        path: "paradise-panic",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "BOAT LEAVES"
    },

    challengeArray: [

        // ⭐ Hotel Kallisto

        {

            info: {
                type: 'challenge',
                title: "Hotel Kallisto",
                asset: "node1.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Topic and Key Details",
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
                        "RI.2.2",
                        "RI.2.6",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.8",
                        "RI.3.10"
                    ],
                }
            },

            intro: {
                character: "Demi Voss",
                asset: "character1.png",
                dialogue : {
                    incomplete: "Girl, this guest is SO demanding! I already have a whole hotel to run, and I don\'t have time for this. Can you tell me what his note is all about?",
                    complete: "Thanks, bestie. You know, you really looked like someone I could trust."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background1.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "&nbsp; &nbsp; Demi, I\'m going to be completely honest with you. I need a huge fancy boat.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; First, the boat needs a big swimming pool. Second, it needs a giant glass dining room. And third, it needs the softest chairs money can buy.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; Also, my friends say I should stop eating so many hot dogs for every meal. But why stop when it makes me feel amazing?\
                                    <br>\
                                    <br>\
                                    Yours truly,\
                                    <br>\
                                    Mateo"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "5%",
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
                        title: "[<g>1.] What is this note all about?",
                        correctIndex: 1,
                        paragraph: [
                            "Dem{i} has no friends",
                            "{M}ateo wants a huge fancy boat",
                            "Mateo wants to g{o} swimming",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the quote \"the boat needs a big swimming pool\" supports what this note is about.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tru{e}",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: \"I should stop eating so many hot dogs\" supports what this note is about.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>4.] Read the last sentence of Mateo\'s note. Does it support the main topic?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Ye{s}",
                            "{N}o",
                        ],
                    },
                ],  
                code: {
                    answer: "MEAN",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ Old Stavros's Farm

        {

            info: {
                type: 'challenge',
                title: 'Old Stavros\'s Farm',
                asset: "node2.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.2",
                        "RL.2.3",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RL.3.1",
                        "RL.3.2",
                        "RL.3.3",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Old Stavros",
                asset: "character2.png",
                dialogue : {
                    incomplete: "I've been trying to write down stories from when I was young, but I can\'t tell if this one is any good. Read it for me and tell me what you think, okay?",
                    complete: "Thanks for listening, kid. This island sure was a lot quieter back then..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background2.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Princess of the Harbor',
                                },
                                subtitle: {
                                    text: 'By Old Stavros',
                                },
                                passage: {
                                    text:   "Many summers ago, there was a goat on this island named Princess. She was always causing trouble. She ate flowers, tomato plants, and even a birthday cake cooling by a window. The villagers shouted at her all day.\
                                    <br>\
                                    One summer, a quiet girl named Alana tried something different. She gave Princess apple slices and spoke kindly to her. Soon, the goat followed Alana everywhere.\
                                    <br>\
                                    Alana tied little baskets to Princess and taught her to carry bread and letters around the village. Soon, everyone on the island loved Princess the goat.\
                                    <br>\
                                    That summer, the villagers learned something important. Being kind works better than being mean!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "5%",
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
                        title: "[<g>1.] \"Princess of the Harbor\" takes place in the ___ .",
                        correctIndex: 1,
                        paragraph: [
                            "Spri{n}g",
                            "Summe{r}",
                            "Fa{l}l",
                        ],
                    },
                    {
                        title: "[<g>2.] Why were the villagers upset with Princess?",
                        correctIndex: 0,
                        paragraph: [
                            "She was eating their plants and f{o}od",
                            "She al{w}ays smelled bad",
                            "She was mean to {A}lana",
                        ],
                    },
                    {
                        title: "[<g>3.] Who solved the villagers\' problem?",
                        correctIndex: 1,
                        paragraph: [
                            "Ol{d} Stavros",
                            "Al{a}na",
                            "None of the a{b}ove",
                        ],
                    },
                    {
                        title: "[<g>4.] Which quote shows the lesson of this story?",
                        correctIndex: 2,
                        paragraph: [
                            "\"The {v}illagers shouted at her all day\"",
                            "\"Alana tied little baskets to Pr{i}ncess\"",
                            "\"Being kind works better than being {m}ean\"",
                        ],
                    },
                ],  
                code: {
                    answer: "ROAM",
                    userArray: ["","","",""]
                },
            },            

        },

        // ⭐ Thessaly's Provisions

        {

            info: {
                type: 'challenge',
                title: "Thessaly's Provisions",
                asset: "node3.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "L.2.4c",
                        "L.2.4d",
                        "L.2.5",
                        "L.2.5b",
                        "RF.2.3",
                        "RF.2.3d",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "RI.2.10",
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.4b",
                        "L.3.4c",
                        "L.3.5",
                        "L.3.5c",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3a",
                        "RF.3.3b",
                        "RF.3.3c",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4c",
                        "RI.3.4",
                        "RI.3.10"
                    ],
                }
            },

            intro: {
                character: "Thessaly Tidewater",
                asset: "character3.png",
                dialogue : {
                    incomplete: "I\'ve been writing new labels for my products, and my brain is getting all mixed up! These words are tough. Will you tell me if everything makes sense?",
                    complete: "Ah, glad that makes sense! I think we\'re all set for next season, don\'t you think?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background3.png",
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
                                    text: "Baby Seaweed",
                                },
                                passage: {
                                    text: "This plant starts small enough to fit in your hand. But it quickly becomes [<u>enormous], growing so big it can\'t even fit in a bathtub. So watch out! It can make water [<u>overflow] onto the floor!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "-5%",
                                rotate: "-2deg",
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
                                    text: "Lemon Cones",
                                },
                                passage: {
                                    text: "These snow cones don\'t just taste good. They don\'t just taste great. They taste [<u>fantastic]! What makes them so [<u>flavorful]? Well, they\'re full of sweet syrup and fresh lemon juice.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "15%",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Read \"Baby Seaweed.\" What\'s another word for \"enormous\" \u2014 [<u>big], [<u>fit], or [<u>out]? ',
                        'B. [<u>True] or [<u>False]: \"overflow\" means [<i>when something dries up completely.] ',
                        'C. Read \"Lemon Snow Cones.\" The word \"flavorful\" means [<i>full of ___ ]. ',     
                        'D. [<u>Right] or [<u>wrong]: \"Fantastic\" is better than \"good.\"',                    
                    ],
                    puzzle: [
                        ["0","(C)F","0","0","0","0","(A)B"],
                        ["0","L","0","0","0","0","2I"],
                        ["(B)F","A","4L","S","E","0","G"],
                        ["0","V","0","0","0","0","0"],
                        ["0","O","0","0","0","0","0"],
                        ["0","(D)3R","I","1G","H","T","0"],
                    ]
                },  
                code: {
                    answer: "GIRL",
                    userArray: ["","","",""]
                },
            }    

        },

        // ⭐ Tomb of Kastor

        {
            
            info: {
                type: 'challenge',
                title: 'Tomb of Kastor',
                asset: "node4.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage and look at the map, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Text Structures",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RI.2.5",
                        "RI.2.7",
                        "RI.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.5",
                        "RI.3.7",
                        "RI.3.10"
                    ],
                }
            },

            intro: {
                character: "Kastor\'s Ghost",
                asset: "character4.png",
                dialogue : {
                    incomplete: "What is this place? I woke up to dust and silence, and nothing makes sense. These old texts are all I have left. Please, help me find out what happened!",
                    complete: "This is all so strange, but you did a great job. We make a good team, don\'t we?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background4.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Kastor the Warrior',
                                },
                                subtitle: {
                                    text: 'By Scribe Nemos',
                                },
                                passage: {
                                    text: "Kastor was a brave warrior from long ago. He sailed across stormy seas and explored dark caves. People told stories about the battles he fought and the treasures he found."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "pa2_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "9%",
                                rotate: "4deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is the title of the passage?",
                        correctIndex: 0,
                        paragraph: [
                            "\"Kastor t{h}e Warrior\"",
                            "\"Scri{b}e Nemos\"",
                            "\"Torch Roo{m}\"",
                        ],
                    },
                    {
                        title: "[<g>2.] Who is the author of \"Kastor the Warrior\"?",
                        correctIndex: 1,
                        paragraph: [
                            "A brave war{r}ior",
                            "Scribe N{e}mos",
                            "No{n}e of the above",
                        ],
                    },
                    {
                        title: "[<g>3.] How many rooms are in Kastor\'s Tomb?",
                        correctIndex: 2,
                        paragraph: [
                            "On{e}",
                            "T{w}o",
                            "Th{r}ee",
                        ],
                    },
                    {
                        title: "[<g>4.] What does the map\'s caption say?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Kas{t}or was a brave warrior from long ago.\"",
                            "\"Burial {R}oom\"",
                            "\"This map shows the rooms of Kastor\'s t{o}mb.\"",
                        ],
                    },
                ],  
                code: {
                    answer: "HERO",
                    userArray: ["","","",""]
                },
            },            

        },

        // ⭐ Shoreline

        {

            info: {
                type: 'challenge',
                title: "Shoreline",
                asset: "node5.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.2.3",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.4",
                        "RL.2.10",
                        "L.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.5",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Ned",
                asset: "character5.png",
                dialogue : {
                    incomplete: "Please don't step on me! I've been writing poems for open mic night, but I'm scared they\'re no good. Can you read them and let me know?",
                    complete: "Yay! You liked my poems... and you didn't eat me! I'd call that a win, yeah?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background5.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'My Tidepool',
                                },
                                subtitle: {
                                    text: 'By Ned',
                                },
                                passage: {
                                    text:   "I\'ve got a little tidepool here,\
                                    <br>\
                                    next to the big blue sea.\
                                    <br>\
                                    The water\'s cold and clean and clear.\
                                    <br>\
                                    It feels just right for me."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'I Want a Friend',
                                },
                                subtitle: {
                                    text: 'By Ned',
                                },
                                passage: {
                                    text:   "I want a friend to swim with me,\
                                    <br>\
                                    but no one seems to care.\
                                    <br>\
                                    They take one look, then turn and flee.\
                                    <br>\
                                    My spines are quite a scare!\
                                    <br>\
                                    <br>\
                                    A crab swam up and said, \"No way.\"\
                                    <br>\
                                    A clam just closed up tight.\
                                    <br>\
                                    I guess I'll spend another day\
                                    <br>\
                                    alone here, out of sight."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "0%",
                                rotate: "3deg",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Is the rhyme scheme of “My Tidepool” [<u>AABB], [<u>ABCD], or [<u>ABAB]?',
                        'B. Does “I Want a Friend” have [<u>one] or [<u>two] stanzas?',
                        'C. In “I Want a Friend,” what type of animal swam up to Ned?',     
                        'D. How many syllables are in the first line of “My Tidepool”? ',                    
                    ],
                    puzzle: [
                        ["0","0","(D)E","I","G","h","(B)4T"],
                        ["0","0","0","0","0","0","W"],
                        ["0","(C)C","0","0","0","0","2O"],
                        ["0","R","0","0","0","0","0"],
                        ["0","3A","0","0","0","0","0"],
                        ["(A)A","B","A","1B","0","0","0"],
                    ]
                },  
                code: {
                    answer: "BOAT",
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