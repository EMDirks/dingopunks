const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/reading/poetry/preview-4th-5th-grade.png",
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
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Poetic Elements",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.10",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.5",
                        "RL.5.6",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "Hey, spud squad! I just wrote the ultimate potato song. It's pure genius, but I need your help making it flawless. Give me some feedback, and I'll give you as many yams as you need. Sound good?",
                    complete: "Whoa, my brilliance just hit new heights! Appreciate you, spud squad."
                },
            },

            // passage-medium + title + subtitle (1x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Waffle Fries',
                                },
                                subtitle: {
                                    text: 'By Tater Durant',
                                },
                                passage: {
                                    text:   "Chef Scully cried, \"Such crispy bliss!<br>\
                                    Each waffle woven to perfection \u2014<br>\
                                    a crunchy kingdom on my plate.<br>\
                                    No humble fry compares to this.<br>\
                                    Its texture calls for deep reflection,<br>\
                                    a spud made new, a twist of fate.<br>\
                                    <br>\
                                    With every bite, I smile and hum<br>\
                                    a salty song of pure delight,<br>\
                                    as flavors dance and twist and spin.<br>\
                                    Oh, waffle fry, you've made me numb.<br>\
                                    Your perfect shape, a dazzling sight \u2014<br>\
                                    your grandest journey will soon begin!\""
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-3%",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Who is the speaker of \"Waffle Fries?\"",
                        correctIndex: 1,
                        paragraph: [
                            "Tater {D}urant",
                            "Chef {S}cully",
                            "A {w}affle fry",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the rhyme scheme of this poem?",
                        correctIndex: 1,
                        paragraph: [
                            "A{B}AB",
                            "{A}BCABC",
                            "ABCD{E}F",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: <em>rhythm and meter</em> refers to the repetition of similar sounds in two or more words.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>4.] How many stanzas and lines are in this poem?",
                        correctIndex: 0,
                        paragraph: [
                            "There are 2 s{t}anzas and 12 lines",
                            "There are 2 {s}tanzas and 6 lines",
                            "There are 6 stanzas and 12 lin{e}s",
                        ],
                    },
                ],  
                code: {
                    answer: "SALT",
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
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5",
                        "L.5.4a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.5",
                        "L.5.5a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.4",
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "I fear the King has forgotten me... All I have is this lone poem, written by my squire. Please read it aloud to remind me of my purpose. In return, I'll share my remaining sugar rations.",
                    complete: "Your words have brightened my spirit. Take this sugar, brave soul \u2014 we will not be forgotten!"
                },
            },

            // passage-medium + title (1x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Poem for My Knight',
                                },
                                passage: {
                                    text:   "The weight of the world presses down, but you stand strong,<br>\
                                    like steel forged in fire, holding up your duty.<br>\
                                    The cries of the weak float through the air,<br>\
                                    like whispers asking for help, pulling at your heart.<br>\
                                    <br>\
                                    Your purpose is a river that never stops flowing,<br>\
                                    moving forward, carving its path no matter what.<br>\
                                    <br>\
                                    [<u>Evil stands tall], but you are the storm,<br>\
                                    bringing justice like booming thunder!<br>\
                                    <br>\
                                    Your strength is felt in the ground, steady beneath your feet,<br>\
                                    and the wind carries your name, a quiet hope for those who need you.<br>\
                                    Rise, Knight of Honor, [<u>like a flame in the darkest night].<br>\
                                    <br>\
                                    Let your light guide those who are lost and alone.<br>\
                                    <br>\
                                    \u2014 Your loyal squire"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-3%",
                                rotate: "1deg",
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
                        title: "[<g>1.] Which of these lines contains a metaphor?",
                        correctIndex: 2,
                        paragraph: [
                            "Li{n}e 2",
                            "Lin{e} 3",
                            "{L}ine 5",
                        ],
                    },
                    {
                        title: "[<g>2.] The purpose of the onomatopoeia in line 8 is:",
                        correctIndex: 0,
                        paragraph: [
                            "To show the p{o}wer of the knight's justice",
                            "To descri{b}e how loudly the knight talks",
                            "To explain how quickly the knig{h}t moves",
                        ],
                    },
                    {
                        title: "[<g>3.] The underlined text in line 7 is an example of:",
                        correctIndex: 2,
                        paragraph: [
                            "Hy{p}erbole",
                            "Onomatopo{e}ia",
                            "Per{s}onification",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: line 12 states the meaning of the underlined simile in line 11.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{T}rue",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "LOST",
                    userArray: ["","","",""]
                },
            },

        },
        
        // ⭐ fishbeard's cell
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry Comprehension",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RF.4.4c",
                        "RI.4.9",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.5",
                        "RL.4.6",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RF.5.4c",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.9",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Fishbeard needs yer eyes! I salvaged some scraps from me shipwreck, but I can't read 'em. Help an old captain out, and I'll trade ye a barrel o' butter I fished from the sea. What say ye?",
                    complete: "Arrr, traitors aboard me own ship?! Ye saved me, matey \u2014 much abliged. This butter be all yers!"
                },
            },

            // passage-short+ title + subtitle (3x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "fishbeard.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Off With His Loot',
                                },
                                subtitle: {
                                    text: 'By Scully Saltman',
                                },
                                passage: {
                                    text:   "There once was a plot set at night:<br>\
                                    leave Fishbeard alone in a fright!<br>\
                                    With treasure in tow,<br>\
                                    to the lifeboats we'd go,<br>\
                                    a [<u>mutiny] before the first light.<br>\
                                    <br>\
                                    The crew did whisper and scheme<br>\
                                    of riches far greater than dreamed.<br>\
                                    While Fishbeard snored,<br>\
                                    he crashed on the shore,<br>\
                                    and off with his loot we beamed!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-10%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Words from a Sailor',
                                },
                                subtitle: {
                                    text: 'Transcribed by First Mate Banzo',
                                },
                                passage: {
                                    text:   "\"Us sailors had enough of Fishbeard's ramblin' ways, so we met below deck in secret. The plan was simple: grab the captain's treasure while he was sleepin', steer the ship toward Yeti Isle, then slip away on lifeboats at the last minute!  The other lads think it's foolproof, but I've got me doubts.\""
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Great Mutiny',
                                },
                                subtitle: {
                                    text: 'Written by Quartermaster Iris',
                                },
                                passage: {
                                    text:   "Scene: The deck of a pirate ship<br>\
                                    <em>( waves are crashing as a worried crew whispers among themselves )</em><br>\
                                    <br>\
                                    Sailor: The loot is aboard the lifeboats, sir.<br>\
                                    <br>\
                                    First Mate Banzo: Well done, me lads! Time to go!<br>\
                                    <br>\
                                    Helmsman Jim: I'm sorry, Captain...<br>\
                                    <em>( jumps into the last lifeboat, slipping away into the night )</em>"
                                    
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "10%",
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
                            width: "percent32",
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
                                width: "full",
                                height: "auto",
                            }
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
                        'A. [<u>True] or [<u>false]: all three passages are describing different events.',
                        'B. Is \"Words from a Sailor\" an example of [<u>poetry], [<u>prose], or [<u>drama]?',
                        'C. Does the underlined word in \"Off With His Loot\" mean [<u>revolt], [<u>parade], or [<u>rescue]?',     
                        'D. What time of day did the mutiny take place?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","(C)R","0","0"],
                        ["(A)3F","A","L","S","E","0","0"],
                        ["0","0","0","0","V","0","0"],
                        ["0","0","(B)P","1R","O","S","E"],
                        ["0","0","0","0","L","0","0"],
                        ["(D)N","2I","G","H","4T","0","0"],
                    ]
                },  
                code: {
                    answer: "RIFT",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ pippo's cell
        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then type in the answers below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Author's Purpose",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.6",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.6",
                        "RL.5.9",
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "I'm building an escape device! I got some plans from my sister Topsy, but I also have this boring manual... Ugh. Which should I trust? Help me, and I'll lend you a pan for those yams.",
                    complete: "Thanks for the help, but I'm going with Topsy's plan \u2014 it's WAY more fun. Haha!"
                },
            },

            // cryptogram + passage-medium (2x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    asset: "pippo-fizzlepop.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Topsy's Plan for Pippo",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Got something to build? Just have fun!<br>\
                                    Forget the rules, there are none.<br>\
                                    It's tricky getting ideas to pop,<br>\
                                    but with some fun, ideas don't stop!<br>\
                                    <br>\
                                    Glue the booster, hope it sticks.<br>\
                                    Close your eyes \u2014 wow, what a fix!<br>\
                                    Twist the springs and cross your toes.<br>\
                                    Will it work? Who really knows?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "10%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "The Official Manual's Plan for Pippo",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Safety first.<br>\
                                    Inspect each part. Tighten every bolt.<br>\
                                    Wear protective gear: gloves, helmet, goggles.<br>\
                                    <br>\
                                    Just in case.<br>\
                                    <br>\
                                    Turn the dial slowly.<br>\
                                    Observe each reaction. If something feels off,<br>\
                                    Pause. Adjust. Proceed with caution.<br>\
                                    <br>\
                                    Safety first."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "3%",
                                rotate: "-2deg",
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
                                translateY: "5%",
                                rotate: "-1deg",
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

            // decoder (4x)
            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] The authors of both plans intend to ____ Pippo.",
                        word: "[I]NSTRUCT",
                    },
                    {
                        title: "[<g>2.] Topsy claims the best way to build is by having:",
                        word: "[F]UN",
                    },
                    {
                        title: "[<g>3.] Topsy provides evidence for this claim in line:",
                        word: "[F]OUR",
                    },
                    {
                        title: "[<g>4.] What does the author of the manual prioritize?",
                        word: "SAFET[Y]",
                    },
                ],
                code: {
                    answer: "IFFY",
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