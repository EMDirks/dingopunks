const resource =  {
    
    info: {
        title: "Paradise Panid",
        path: "paradise-panic",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "FERRY LEAVES"
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
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Demi Voss",
                asset: "character1.png",
                dialogue : {
                    incomplete: "This guest keeps making the weirdest demands! I already have a hotel to run, and I don\'t have time for this. Can you figure out what his note says?",
                    complete: "Thanks, sweetie. I knew you were someone I could trust."
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
                                    &nbsp; &nbsp; Also, my friends say I should stop eating steak for every meal. But it makes me feel amazing.\
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
                                translateX: "0%",
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
                        title: "[<g>1.] What is the main idea of this note?",
                        correctIndex: 1,
                        paragraph: [
                            "Dem{i} has no friends",
                            "{M}ateo needs a huge fancy boat",
                            "Mateo wants to g{o} swimming",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the sentence \"First, the boat needs a big swimming pool\" is a key detail.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tru{e}",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>3.] Which paragraph does not have any key details?",
                        correctIndex: 2,
                        paragraph: [
                            "Para{g}raph one",
                            "Paragra{p}h two",
                            "Par{a}graph three",
                        ],
                    },
                    {
                        title: "[<g>4.] Read the last sentence of Brantly\'s note. Is this sentence a supporting detail?",
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
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Old Stavros",
                asset: "character2.png",
                dialogue : {
                    incomplete: "I've been trying to write down stories from when I was young, but I can\'t tell if this one makes sense. Read it for me and tell me what you think.",
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
                                    text:   "Long ago, there was a goat on the island named Princess. She was always causing trouble. She ate flowers, tomato plants, and even a birthday cake cooling by a window. The villagers shouted at her all day.\
                                    <br>\
                                    One summer, a quiet girl named Alana tried something different. She gave Princess apple slices and spoke kindly to her. Soon, the goat followed Alana everywhere.\
                                    <br>\
                                    Alana tied little baskets to Princess and taught her to carry bread and letters around the village. Soon, everyone on the island knew Princess the goat.\
                                    <br>\
                                    That summer, the villagers learned something important. Being kind works better than being mean."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
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
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Thessaly Tidewater",
                asset: "character3.png",
                dialogue : {
                    incomplete: "I\'ve been writing new labels for my products, and my brain is getting mixed up. Some of these words might be too big! Will you take a look for me?",
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
                    text: "Read the passage and look at the image, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Kastor\'s Ghost",
                asset: "character4.png",
                dialogue : {
                    incomplete: "What is this place? I woke up to dust and silence, and nothing makes sense... These old texts are all I have left. Please, help me find out what happened!",
                    complete: "This is very strange, but you did a great job, friend. We make a good team, don\'t we?"
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
                                    file: "pa2_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
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
                        title: "[<g>1.] What is the title of this short passage?",
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
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Ned",
                asset: "character5.png",
                dialogue : {
                    incomplete: "Please don't step on me! I've been writing poems for open mic night, but I'm scared they\'re no good. Can you read them and let me know?",
                    complete: "Yay! You liked them... and you didn't eat me! I'd call that a win, yeah?"
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
                        'A. Only one of these poems has a rhyme scheme. Which poem is it?',
                        'B. Does \"Friend\" have [<u>three] or [<u>eight] stanzas?',
                        'C. [<u>Right] or [<u>wrong]: \"Urchin\" and \"Spikes\" share a similar topic.',     
                        'D. How many syllables are in line three of \"Urchin\"? ',                    
                    ],
                    puzzle: [
                        ["0","0","(D)E","I","G","H","(B)4T"],
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