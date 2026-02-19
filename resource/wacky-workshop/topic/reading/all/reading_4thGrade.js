const resource =  {
    
    info: {
        title: "Wacky Workshop",
        path: "wacky-workshop",
        logo: "resource/wacky-workshop/assets/branding/reading/all/thumbnail-4th-grade.png",
        timerLabel: "SANTA LEAVES"
    },

    challengeArray: [

        // ⭐ sir bobble
        {

            info: {
                type: 'challenge',
                title: "Action Figure Workbench",
                asset: "sir-bobble.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.8",
                        "RI.4.10",
                    ],
                }
            },

            intro: {
                character: "Sir Bobble",
                asset: "sir-bobble.png",
                dialogue : {
                    incomplete: "I am Sir Bobble, the knight with a spring for a neck. Other toys mock me... indeed, they call me useless. And yet, Santa sent ME a letter, not they! I beg you, fair friend \u2014 will you read it aloud?",
                    complete: "Bless thee for such noble kindness! Should you ever need me, you shall find me right by your side."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sir-bobble.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Sir Bobble,\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp I\'m sorry to hear you\'re feeling upset. Some knights might think a spring for a neck is a problem, but I think it\'s actually quite useful!\
                                    <br>\
                                    &nbsp &nbsp Why? Well, you can duck away from danger in a flash. You can stretch your neck up high to look out for trouble. You can easily peek around corners. And best of all, you can wobble your head to confuse your enemies! Oh, and just so you know, red looks fantastic on you. It\'s my favorite color too.\
                                    <br>\
                                    <br>\
                                    Keep your chin up,\
                                    <br>\
                                    Santa"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "8%",
                                rotate: "-4deg",
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
                        title: "[<g>1.] What\'s the main idea of this letter?",
                        correctIndex: 0,
                        paragraph: [
                            "Sir Bobble\'s spring neck is ac{t}ually useful",
                            "Sir B{o}bble\'s spring neck is a bad thing",
                            "Sir Bobble can wiggle {h}is head",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these lines supports the main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"I\'m sorry to hear you\'re feel{i}ng upset.\"",
                            "\"You can duck away from danger in a flas{h}.\"",
                            "\"...red {l}ooks fantastic on you.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] The third sentence of the second paragraph is another supporting detail. True or false?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>4.] In all, how many supporting details are there?",
                        correctIndex: 2,
                        paragraph: [
                            "T{w}o",
                            "Thr{e}e",
                            "F{o}ur",
                        ],
                    },
                ],  
                code: {
                    answer: "THEO",
                    userArray: ["","","",""]
                },
            }, 

        },

        // ⭐ patchpaw
        {

            info: {
                type: 'challenge',
                title: 'Sewing Workbench',
                asset: "patchpaw.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.4b",
                        "L.4.4c",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RL.4.4"
                    ],
                }
            },

            intro: {
                character: "Patchpaw",
                asset: "patchpaw.png",
                dialogue : {
                    incomplete: "Usually I don\'t mind looking a lil\' different, but today I\'m feeling pretty down. Nobody could love a bear like me! I guess Mrs. Claus wrote some notes to cheer me up, but I can\'t read. Can you?",
                    complete: "You know, those notes were just what I needed. I can\'t wait to meet Rori! Thanks!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "patchpaw.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Striped Fabric",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your striped fabric is extremely interesting. It makes me feel [<u>exhilarated], never bored, when I look at it!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fuzzy Fabric",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your fuzzy fabric is [<u>luxurious]. It's like a super soft blanket, or the inside of an expensive new slipper.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Button Eye",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your button-eye is unblinking; always [<u>vigilant] and watchful. You\'ll never miss a thing.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-15%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Loose Stitches",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your stitches may be loose, but that makes you flexible! In all [<u>frankness], that\'s a gift. You\'ll bend, but never break.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "15%",
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

            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. If [<i>frank] means [<i>honest], then \"frankness\" means [<i>a state of being honest]. [<u>True] or [<u>false]?',
                        'B. [<u>Right] or [<u>wrong]: \"watchful\" is a synonym of \"vigilant.\"',
                        'C. Which word from \"Striped Fabric\" is an antonym of \"exhilarated\"?',     
                        'D. Which of these items is \"luxurious\": a plush [<u>couch] or a hard [<u>chair]?',                    
                    ],
                    puzzle: [
                        ["0","0","(C)B","O","(B)3R","E","D"],
                        ["0","0","0","0","4I","0","0"],
                        ["0","0","0","0","G","0","(A)T"],
                        ["(D)C","2O","U","C","H","0","1R"],
                        ["0","0","0","0","T","0","U"],
                        ["0","0","0","0","0","0","E"],
                    ]
                },  
                code: {
                    answer: "RORI",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ seaweed sally
        {

            info: {
                type: 'challenge',
                title: "Doll Workbench",
                asset: "seaweed-sally.png",
                state: "incomplete",
                hint: {
                    text: "Read both poems, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.5a",
                        "L.4.5b",
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
                character: "Seaweed Sally",
                asset: "seaweed-sally.png",
                dialogue : {
                    incomplete: "Yup, I\'m the doll with seaweed hair. Everyone else gets nice curls, and I\'m stuck here with a crab in my bangs! Santa and Mrs. Claus wrote me some poems, but I can\'t figure them out. Can you?",
                    complete: "Huh, I never thought seaweed could be cool. I still don\'t like this crab, but hey \u2014 one thing at a time!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "seaweed-sally.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Wall So Strong',
                                },
                                subtitle: {
                                    text: 'By Santa',
                                },
                                passage: {
                                    text:   "Seaweed is a wall so strong,\
                                    <br>\
                                    holding shores where they belong.\
                                    <br>\
                                    Though storms may rage and tides may rise,\
                                    <br>\
                                    it guards the beach with silent pride.\
                                    <br>\
                                    <br>\
                                    Seaweed sways in ocean light,\
                                    <br>\
                                    a home for fish both day and night.\
                                    <br>\
                                    Turtles nibble, shrimp dart through \u2014\
                                    <br>\
                                    its tangled strands protect them too.\
                                    <br>\
                                    <br>\
                                    Seaweed is a clever treat:\
                                    <br>\
                                    crunchy, salty, fun to eat.\
                                    <br>\
                                    It wraps up sushi, nice and tight.\
                                    <br>\
                                    Seaweed makes each bite just right!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "0%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Shelter in the Deep',
                                },
                                subtitle: {
                                    text: 'By Mrs. Claus',
                                },
                                passage: {
                                    text:   "Fish swim through green arms\
                                    <br>\
                                    Crabs curl at the tangled roots\
                                    <br>\
                                    Shelter in the deep"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "23%",
                                translateY: "50%",
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
                        title: "[<g>1.] Both poems are about:",
                        correctIndex: 2,
                        paragraph: [
                            "Cra{b}s",
                            "Sus{h}i",
                            "{S}eaweed",
                        ],
                    },
                    {
                        title: "[<g>2.] What kind of figurative language is in the first line of \"A Wall So Strong\"?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "A met{a}phor",
                            "An {i}diom",
                            "A simil{e}",
                            "A stan{z}a",
                        ],
                    },
                    {
                        title: "[<g>3.] Which poem\'s rhyme scheme is ABCABC?",
                        correctIndex: 2,
                        paragraph: [
                            "\"A Wall S{o} Strong\"",
                            "\"Shelter in the Dee{p}\"",
                            "Neither poem has this {r}hyme scheme",
                        ],
                    },
                    {
                        title: "[<g>4.] Which poet wrote a haiku?",
                        correctIndex: 1,
                        paragraph: [
                            "Sa{n}ta",
                            "Mrs. Cl{a}us",
                            "Neithe{r} poet wrote a haiku",
                        ],
                    },
                ],  
                code: {
                    answer: "SARA",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ yo-yeti
        {

            info: {
                type: 'challenge',
                title: 'Yo-Yo Workbench',
                asset: "yo-yeti.png",
                state: "incomplete",
                hint: {
                    text: "Read the notes, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.5b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.4"
                    ],
                }
            },

            intro: {
                character: "Yo-Yeti",
                asset: "yo-yeti.png",
                dialogue : {
                    incomplete: "Grrrr! The Yo-Yeti speaks. Santa built me for power. For purpose! But his message is hidden. Hidden in strange symbols. You will help! Yes?",
                    complete: "Grrrr! Wren the Yeti!  Peace will be made! My people call, and I will answer. Thank you, friend."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "yo-yeti.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Note A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "They say [<sal>time heals all wounds.] But up here, where winter never ends, it takes more than time. It takes a Yo-Yeti."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-20%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note B",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The Yo-Yeti was made as a peace offering for a dangerous yeti that lives near Santa\'s workshop. It\'s not just a toy; [<blu>it\'s a bridge between two worlds.]"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note C",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The Yo-Yeti is made from a secret gem known only to the most trusted elf in Santa\'s workshop. It\'s tough like a diamond and [<i>as blue as the sky!]"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-5%",
                                rotate: "-4deg",
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
                                translateX: "3%",
                                translateY: "0%",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent30",
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
                        title: "[<g>1.] The last sentence of \"Note C\" contains ___ similes.",
                        word: "T[W]O",
                    },
                    {
                        title: "[<g>2.] The italic simile in \"Note C\" shows the gem\'s ___ .",
                        word: "COLO[R]",
                    },
                    {
                        title: "[<g>3.] Is the red text an [<u>adage] or a [<u>metaphor]?",
                        word: "ADAG[E]",
                    },
                    {
                        title: "[<g>4.] [<u>Right] or [<u>wrong]: the blue text is a proverb.",
                        word: "WRO[N]G",
                    },
                ],
                code: {
                    answer: "WREN",
                    userArray: ["","","",""]
                },
            }          
            
        },

        // ⭐ mister lump
        {

            info: {
                type: 'challenge',
                title: "Crayon Workbench",
                asset: "mister-lump.png",
                state: "incomplete",
                hint: {
                    text: "Read the story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Mister Lump",
                asset: "mister-lump.png",
                dialogue : {
                    incomplete: "Name\'s Mister Lump. Yes, I\'m made of melted crayons \u2014 and no, nobody will ever love me. Mrs. Claus gave me a story to make me smile, but I can only read Gnomish, not English! Will you help?",
                    complete: "Carl? Huh... Maybe someone out there DOES like a gnome made from melted crayons. Thanks!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "mister-lump.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Gary\'s Dragon',
                                },
                                subtitle: {
                                    text: "By Mrs. Claus"
                                },
                                passage: {
                                    text:   "Gary the Goblin was wild about crayons. Every day, he\'d shout, \"WHO WANTS TO DRAW?!\" His best friend, Felix, preferred neat sketches and clean lines. But Gary loved to scribble with every color he could find.\
                                    <br>\
                                    One afternoon, while munching a ham sandwich in his cave, Gary decided to draw the perfect castle. At first, everything was going smoothly. But then, CRACK! His crayon snapped in half, and a messy purple line slashed across the page. Felix gasped, \"It\'s ruined!\"\
                                    <br>\
                                    But Gary didn\'t flinch. He grabbed a bunch of purple crayons and shouted, \"That\'s not a mistake, that\'s a purple fire-breathing dragon!\" He scribbled with purpose, turning the messy line into a massive dragon with wings, teeth, and flames.\
                                    <br>\
                                    When he finished, he proudly pinned it to the cave wall. With a grin (and purple wax smudged across his nose), he held up his crayon and said, \"See? A broken crayon doesn\'t wreck the picture. Sometimes, you can turn a mistake into something great!\"",
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
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
                            subtitle: {
                                font: 'default',
                                size: 'small',
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
                        title: "[<g>1.] What is the theme of \"Gary\'s Dragon\"?",
                        correctIndex: 2,
                        paragraph: [
                            "Gary is a go{b}lin who loves crayons",
                            "Gary drew a {p}urple dragon",
                            "You {c}an turn a mistake into something great",
                        ],
                    },
                    {
                        title: "[<g>2.] What\'s the setting of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Inside Gary\'s cave at nigh{t}",
                            "Inside G{a}ry\'s cave in the afternoon",
                            "In the base{m}ent under the art room",
                        ],
                    },
                    {
                        title: "[<g>3.] How did Gary solve his problem?",
                        correctIndex: 0,
                        paragraph: [
                            "He turned the messy purple line into a d{r}agon",
                            "He kicked Feli{x} out of the cave",
                            "He di{d}n\'t solve his problem",
                        ],
                    },
                    {
                        title: "[<g>4.] How is Felix different from Gary?",
                        correctIndex: 1,
                        paragraph: [
                            "Felix is not a {g}oblin, he\'s a troll",
                            "Felix {l}ikes neat, careful drawings",
                            "Felix is much more positive and hop{e}ful",
                        ],
                    },
                ],  
                code: {
                    answer: "CARL",
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