const resource =  {
    
    info: {
        title: "Paradise Panic",
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
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.8",
                        "RI.3.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.10"
                    ],
                }
            },

            intro: {
                character: "Demi Voss",
                asset: "character1.png",
                dialogue : {
                    incomplete: "This guest is driving me insane with his strange requests! I already have an entire hotel to manage, and I seriously don\'t have time for this. Can you do me a favor and find out what his note is about?",
                    complete: "Thanks, love. You know, you looked like someone I could count on."
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
                                    text:   "&nbsp; &nbsp; Demi, this is simple. I need a boat that makes me look rich and important.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; First, it needs a pool built from fine blocks of marble. Also, it needs a helicopter pad made of pure silver.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; Most importantly, there must be a huge glass dining room that hangs over the ocean, with dishes carved from giant emeralds.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; Also, my assistant says I should stop eating so many hot dogs for dinner. She finds it \"deeply upsetting.\" But it makes me feel amazing.\
                                    <br>\
                                    <br>\
                                    Brantly Vantor\
                                    <br>\
                                    Founder and CEO\
                                    <br>\
                                    UltraHustle Vision Media"
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
                        title: "[<g>1.] What\'s the main idea of this note?",
                        correctIndex: 1,
                        paragraph: [
                            "Brantly has lots of m{o}ney",
                            "{B}rantly wants a very expensive, fancy boat",
                            "Dem{i} is an expert on sailing",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the 3rd paragraph of Brantly\'s note supports the main idea.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>3.] Which quote is a supporting detail?",
                        correctIndex: 0,
                        paragraph: [
                            "\"it needs a pool built from fine blocks of m{a}rble\"",
                            "\"I should sto{p} eating so many hot dogs\"",
                            "\"But it makes {m}e feel amazing\"",
                        ],
                    },
                    {
                        title: "[<g>4.] Which paragraph does [<i>not] have any key details?",
                        correctIndex: 2,
                        paragraph: [
                            "Paragraph tw{o}",
                            "Paragraph thr{e}e",
                            "Para{g}raph four",
                        ],
                    },
                ],  
                code: {
                    answer: "BRAG",
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
                        "RL.3.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Old Stavros",
                asset: "character2.png",
                dialogue : {
                    incomplete: "Hmph... got a minute? I\'ve been tryin\' to write down tales from my younger days, but I can\'t tell if this one makes sense. Read it for me and tell me what you think, all right?",
                    complete: "Hmph. Thanks for hearin\' an old man out. Back then, this island was a quieter place..."
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
                                    text:   "Many years ago, when people still called me \"Young Stavros,\" there was a goat on this island named Princess. That animal was pure trouble. No fence could stop her. She ate tomato plants, flower gardens, fishing nets, and even a birthday cake left out to cool. The villagers spent all day yelling at that goat.\
                                    <br>\
                                    But then, a quiet little girl named Eleni did something surprising. Instead of chasing Princess away, she fed the goat apples and spoke to her kindly. Before long, Princess followed Eleni everywhere. Eleni tied little baskets to the goat\'s sides and trained her to carry bread, olives, and letters between homes.\
                                    <br>\
                                    By the end of summer, Princess had become a local legend. Children drew pictures of her, and old men told stories that got bigger every year. I still say that goat once carried twenty watermelons up a hill without stopping! But the lesson is true enough. Anger made the problem worse, but kindness solved it."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "2%",
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
                        title: "[<g>1.] What is the [<i>problem] in \"Princess of the Harbor\"?",
                        correctIndex: 1,
                        paragraph: [
                            "A goat eats all of Eleni\'s appl{e}s",
                            "A goat keeps causing t{r}ouble around the village",
                            "The {v}illagers need help carrying watermelons",
                        ],
                    },
                    {
                        title: "[<g>2.] To solve this problem, Eleni:",
                        correctIndex: 1,
                        paragraph: [
                            "\"spe{n}t all day yelling at that goat\"",
                            "\"fed the g{o}at apples and spoke to her kindly\"",
                            "\"drew pictures of {h}er\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Where does this story take place?",
                        correctIndex: 0,
                        paragraph: [
                            "On an isl{a}nd",
                            "In a {l}arge city",
                            "Near a villa{g}e in the desert",
                        ],
                    },
                    {
                        title: "[<g>4.] The last sentence of this story reveals the ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "Main charac{t}er",
                            "Ma{i}n idea",
                            "The{m}e",
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
                title: "Thessaly's Shop",
                asset: "node3.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
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
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3",
                        "RF.3.3c",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4c",
                        "RI.3.1",
                        "RI.3.4",
                        "RI.3.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.4b",
                        "L.4.5c",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4c",
                        "RI.4.4",
                        "RI.4.10"
                    ],
                }
            },

            intro: {
                character: "Thessaly Tidewater",
                asset: "character3.png",
                dialogue : {
                    incomplete: "I\'m writing new labels for my products, but after such a long summer, my brain feels like sea foam! I\'m worried that some of these words are a bit too fancy. Will you take a look for me?",
                    complete: "Ah, glad it makes sense. I think we\'re all set for next season, don\'t you?"
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
                                    text: "Plop it in water, and watch it grow! This [<u>pocket-sized] seaweed starts small enough to fit in your hand. Then after a few days, it becomes huge! The curly, coiled strands may even spill over the sides of the bowl.",
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
                                    text: "Each snow cone is made with just a few simple components: crushed ice, sugar syrup, and fresh lemon juice. That\'s it! It\'ll make you feel [<u>renewed] \u2014 making it the perfect treat to enjoy on a hot summer day.",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Which word is a synonym of \"coiled\"?",
                        correctIndex: 0,
                        paragraph: [
                            "{C}urly",
                            "Stra{i}ght",
                            "Point{y}",
                        ],
                    },
                    {
                        title: "[<g>2.] The underlined text in \"Baby Seaweed\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "Shap{e}d like a pocket",
                            "Too big to fit inside a {p}ocket",
                            "Small en{o}ugh to fit inside a pocket",
                        ],
                    },
                    {
                        title: "[<g>3.] Read \"Lemon Cones.\" What is another word for \"components\"?",
                        correctIndex: 3,
                        columns: 2,
                        paragraph: [
                            "Too{l}s",
                            "Decoration{s}",
                            "{R}ecipes",
                            "Ingredie{n}ts",
                        ],
                    },
                    {
                        title: "[<g>4.] The underlined word in \"Lemon Cones\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "Feeling tired fro{m} the heat",
                            "Feeli{n}g a little bit sleepy",
                            "Feeling n{e}w again",
                        ],
                    },
                ],  
                code: {
                    answer: "CONE",
                    userArray: ["","","",""]
                },
            },        

        },

        // ⭐ Tomb of Kastor

        {
            
            info: {
                type: 'challenge',
                title: 'Tomb of Kastor',
                asset: "node4.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.3.3",
                        "L.3.5",
                        "L.3.5a",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.4",
                        "RL.3.10",
                        "L.4.3",
                        "L.4.5",
                        "L.4.5a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Kastor\'s Ghost",
                asset: "character4.png",
                dialogue : {
                    incomplete: "W-what is this place? I have awoken to dust, silence, and a world I do not understand. These ancient texts are all I have left... Please, help me uncover what happened here!",
                    complete: "Hmmm. This is most disturbing, but you\'ve done well. We make a fine team, yes?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background4.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Grave",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Here is the grave of Kastor of Argos, a great warrior."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "0%",
                                rotate: "-6deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Shore",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "As the last waves of summer crash like drums on the shore, the warrior opens his eyes."
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
                    },
                    {
                        tag: {
                            text: "Torch",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The rising sun is the warrior\'s torch, lighting his path through the underworld."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "10%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Awake",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The ancient tomb groans. The warrior awakens at last!"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "20%",
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
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "3deg",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent20",
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
                                height: "auto",
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
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
                        title: "[<g>1.] Does \"Shore\" or \"Torch\" contain a simile?",
                        word: "S[H]ORE",
                    },
                    {
                        title: "[<g>2.] Which passage contains literal language [<i>only?]",
                        word: "GRAV[E]",
                    },
                    {
                        title: "[<g>3.] Right or wrong: \"Awake\" uses figurative language.",
                        word: "[R]IGHT",
                    },
                    {
                        title: "[<g>4.] What type of figurative language is in \"Torch\"?",
                        word: "METAPH[O]R",
                    },
                ],
                code: {
                    answer: "HERO",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ Shoreline

        {

            info: {
                type: 'challenge',
                title: "Tidepool Beach",
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
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.3.3",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.5",
                        "RL.3.9",
                        "RL.3.10",
                        "L.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.5",
                        "RL.4.9",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Ned",
                asset: "character5.png",
                dialogue : {
                    incomplete: "Oh, hi! Don\'t step on me, please! I\'ve been writing some poems for open mic night, but I\'m worried they might be kind of... well, bad. Will you tell me if they\'re any good?",
                    complete: "Yay! You liked my poems... and you didn\'t eat me! Let\'s consider this a win, yeah?"
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
                                    text: 'Urchin',
                                },
                                subtitle: {
                                    text: 'By Ned',
                                },
                                passage: {
                                    text:   "There once was an urchin named Ned,\
                                    <br>\
                                    who lived on the sandy seabed.\
                                    <br>\
                                    \"I\'m covered in spikes.\
                                    <br>\
                                    For lunch, I\'m not nice!\
                                    <br>\
                                    You\'re much better off eating bread.\""
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Friend',
                                },
                                subtitle: {
                                    text: 'By Ned',
                                },
                                passage: {
                                    text:   "Nobody hugs sea urchins.\
                                    <br>\
                                    Probably because it hurts too much.\
                                    <br>\
                                    <br>\
                                    I tried waving at a crab once.\
                                    <br>\
                                    He screamed and ran away.\
                                    <br>\
                                    <br>\
                                    Sometimes I sit alone\
                                    <br>\
                                    beside a wet rock\
                                    <br>\
                                    and wish I were shaped\
                                    <br>\
                                    like a starfish."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Spikes',
                                },
                                subtitle: {
                                    text: 'By Ned',
                                },
                                passage: {
                                    text:   "Long spikes in the sand\
                                    <br>\
                                    Please do not eat me for lunch\
                                    <br>\
                                    I am very sharp"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-60%",
                                translateY: "-30%",
                                rotate: "-5deg",
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
                        'D. How many syllables are in line three of \"Urchin\"?',                    
                    ],
                    puzzle: [
                        ["0","(A)U","0","0","0","0","0"],
                        ["0","(C)R","2I","G","H","T","0"],
                        ["0","3C","0","0","0","0","(D)F"],
                        ["(B)T","H","R","E","E","0","I"],
                        ["0","I","0","0","0","0","V"],
                        ["0","1N","0","0","0","0","4E"],
                    ]
                },  
                code: {
                    answer: "NICE",
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