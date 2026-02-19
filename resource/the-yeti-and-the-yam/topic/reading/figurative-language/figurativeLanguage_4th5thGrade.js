const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/reading/figurative-language/preview-4th-5th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ tater durant's cell
        {

            info: {
                type: 'challenge',
                title: "Tater Durant's Cell",
                asset: "tater-drift.png",
                state: "incomplete",
                hint: {
                    text: "Sort each piece of fan mail into the correct column, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Similes and Metaphors",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.3",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.5",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.9",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.5",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.5a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.5",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.5a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "I'm bored out of my mind in here! There's nothing to do but play old tunes and read through fan mail. I'll tell you what \u2014 if you help me sort through this pile, I'll give you some of my yams. Sound good?",
                    complete: "Thanks, bro! Remember, life's always better when you have potatoes."
                },
            },

            // sort-2-column + text (6x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Fan Mail With a [<u>Simile]",
                        "Fan Mail With a [<u>Metaphor]",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "From: Bernie",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your voice is like a waffle fry, crispy and perfect.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "From: Harper",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your melodies are as irresistible as potato chips.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "From: Nathan",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your lyrics are gravy to my soul.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "From: Felton",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your lyrics are as smooth as mashed potatoes.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "From: Vivian",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Listening to your music is like diving into a basket of fries.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "From: Jasper",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your melodies are a cozy blanket on lonely nights.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "From: Samuel",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your music is a big, fluffy baked potato of joy!",
                                }, 
                            }
                        ],
                        correctIndex: 1
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

            // crossword (7x6)
            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which fan uses a metaphor to describe their love of Tater Durant\'s lyrics?',
                        'B. Which fan uses a simile to praise Tater Durant\'s melodies?',
                        'C. How many pieces of fan mail contain metaphors?',     
                        'D. [<u>True] or [<u>false]: Felton used a simile in his letter.',                    
                    ],
                    puzzle: [
                        ["(A)N","A","1T","(B)H","A","3N","0"],
                        ["0","0","0","A","0","0","0"],
                        ["0","0","0","R","0","(D)T","0"],
                        ["0","0","0","P","0","R","0"],
                        ["0","0","0","E","0","2U","0"],
                        ["0","(C)T","H","R","4E","E","0"],
                    ]
                },  
                code: {
                    answer: "TUNE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ dr. seraphina's cell
        {

            info: {
                type: 'challenge',
                title: "Dr. Seraphina's Cell",
                asset: "dr-seraphina.png",
                state: "incomplete",
                hint: {
                    text: "Read the recipe, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Hyperbole and Onomatopoeia",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.3",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.5",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.5",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Text",
                            standard: "RI.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Text",
                            standard: "RI.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.5",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Text",
                            standard: "RI.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Text",
                            standard: "RI.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "You're trying to make candied yams? That could work... but I'm placing my trust in snow cones. Either way, I'll lend you some extra sugar if you read my recipe. Let me know if it makes sense.",
                    complete: "Thanks a ton! Although now that I think about it, maybe we should use spiders instead of slugs..."
                },
            },

            // passage-medium + title (1x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Dr. Seraphina\'s Snow Cone Recipe',
                                },
                                passage: {
                                    text:   "Step 1: Wait for a large icicle to fall from the ceiling. Then, smash it with a heavy rock. Crunch it into tiny pieces!\
                                    <br>\
                                    <br>\
                                    Step 2: Mix one cup of slug slime with two tablespoons of yeti sweat. I'll say this a million times: it's not as gross as you might think.\
                                    <br>\
                                    <br>\
                                    Step 3: Pour this liquid atop three or four bunches of cave moss \u2014 there's plenty of this stuff around. It spreads faster than wildfire!\
                                    <br>\
                                    <br>\
                                    Step 4: Smack it with a sturdy stick to really mix things up.\
                                    <br>\
                                    <br>\
                                    Step 5: Spoon the mixture into a paper cone. Don't be shy; keep stacking those scoops until it's [<u>a mile high]!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-3%",
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
                                size: 'mediumSmall',
                                align: 'left'
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many examples of onomatopoeia are in step 1?",
                        correctIndex: 1,
                        paragraph: [
                            "O{n}e",
                            "{T}wo",
                            "Th{r}ee",
                        ],
                    },
                    {
                        title: "[<g>2.] Steps 2 and 3 both contain examples of:",
                        correctIndex: 1,
                        paragraph: [
                            "Onom{a}topoeia",
                            "Hyperbol{e}",
                            "None of the abo{v}e",
                        ],
                    },
                    {
                        title: "[<g>3.] In step 4, which word is an onomatopoeia?",
                        correctIndex: 0,
                        paragraph: [
                            "{S}mack",
                            "Stur{d}y",
                            "{R}eally",
                        ],
                    },
                    {
                        title: "[<g>4.] The underlined hyperbole in step 5 means:",
                        correctIndex: 2,
                        paragraph: [
                            "S{u}per cold",
                            "Extre{m}ely unstable",
                            "Very {t}all",
                        ],
                    },
                ],  
                code: {
                    answer: "TEST",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ fishbeard' cell
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Decode the secret letter, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Personification",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.3",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.5",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.5",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.5",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Ahoy, Captain Fishbeard here! An old crewmate smuggled me a secret letter, along with some marshmallows as a snack. Help me decode it, and I'll share these tasty treats. What say ye?",
                    complete: "Enjoy those marshmallows, matey. May our paths cross again on the high seas!"
                },
            },

            // cryptogram + passage-long (1x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    asset: "fishbeard.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "A Secret Letter",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "THE &nbspWAY &nbspTO &nbspFREEDOM<br>\
                                            IS &nbspWHERE &nbspWIND &nbspHOWLS<br>\
                                            AND &nbspSHADOWS &nbspDANCE<br>\
                                            WE &nbspARRIVE &nbspAT &nbspDAWN"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "-1%",
                                rotate: "1deg",
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
                                translateX: "-6%",
                                translateY: "0%",
                                rotate: "2deg",
                            }
                        }
                    },
                ],  
                style: {              
                    block: {
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
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
                            passage: {
                                font: 'patterns',
                                size: 'medium',
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] True or false: the first line of this secret letter contains personification.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "{T}rue",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>2.] There is no personification in:",
                        correctIndex: 2,
                        paragraph: [
                            "L{i}ne two",
                            "Line thr{e}e",
                            "Line f{o}ur",
                        ],
                    },
                    {
                        title: "[<g>3.] What does the personification in line 2 mean?",
                        correctIndex: 2,
                        paragraph: [
                            "The wind carries a sweet scen{t}",
                            "The wind makes a {s}oft, pleasant sound",
                            "The wind makes a loud, sca{r}y noise",
                        ],
                    },
                    {
                        title: "[<g>4.] All together, this letter's use of personification creates what kind of mood for the reader?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{E}erie & mysterious",
                            "Cal{m} & relaxed",
                            "Comedi{c} & silly",
                            "Festive & exci{t}ing",
                        ],
                    },
                ],  
                code: {
                    answer: "LORE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the knight's cell
        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Read each scrap of metal, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Idioms, Adages, and Proverbs",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.3",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.5",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "ALanguage",
                            standard: "L.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.5",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.5b",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.5",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.5b",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "My rations are running low, but I believe in you. I will share my last bits of butter if you read the words inscribed on these old scraps of metal. They hold powerful words of motivation.",
                    complete: "Your determination has rekindled my hope. May we both find freedom soon!"
                },
            },

            // passage-short [tag] (4x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Scrap 1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Be grateful for what you have. [<u>The grass is always greener on the other side].",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-4%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Scrap 2",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "In the quest for excellence, avoid [<u>cutting corners]. True greatness is achieved by doing things the right way.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "3%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Scrap 3",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Even when things don't go as planned, never despair! Sometimes a setback can be a [<u>blessing in disguise].",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "8%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Scrap 4",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>Never assume success before it happens]. Plan carefully, and your hard work will pay off in time.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "10%",
                                rotate: "1deg",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] The scrap 1 adage means that other people's lives... ",
                        correctIndex: 2,
                        paragraph: [
                            "...are wo{r}th comparing to your own",
                            "...are often full of healt{h}y, green lawns",
                            "...can seem better than y{o}urs, even if they aren't",
                        ],
                    },
                    {
                        title: "[<g>2.] The underlined phrase in scrap 2 is:",
                        correctIndex: 0,
                        paragraph: [
                            "{A}n idiom",
                            "An a{d}age",
                            "A prove{r}b",
                        ],
                    },
                    {
                        title: "[<g>3.] What does the idiom \"blessing in disguise\" mean?",
                        correctIndex: 1,
                        paragraph: [
                            "Somet{h}ing that is neither good nor bad",
                            "Some{t}hing that seems bad, but turns out good",
                            "Something that doesn't m{a}tter at all",
                        ],
                    },
                    {
                        title: "[<g>4.] Which proverb can replace the phrase in scrap 4?",
                        correctIndex: 0,
                        paragraph: [
                            "Never count your chickens before they {h}atch.",
                            "An apple a day keeps the doctor a{w}ay.",
                            "A penny {s}aved is a penny earned.",
                        ],
                    },
                ],  
                code: {
                    answer: "OATH",
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