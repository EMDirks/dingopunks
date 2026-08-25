const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/main-idea/thumbnail-4th-5th-grade.png",
        timerLabel: "PICKLE ARRIVES"
    },

    challengeArray: [

        // ⭐ ball pit
        {

            info: {
                type: 'challenge',
                title: "Ball Pit",
                asset: "gribba.png",
                state: "incomplete",
                hint: {
                    text: "Read both journal entries, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Compare and Contrast Two Main Ideas",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.2",
                        "RI.4.9",
                        "RI.4.10",        
                        "RL.4.6",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.3",
                        "RI.5.7",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Gribba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "Name\'s Gribba. Found a couple crumpled pages in the ball pit. Looks like they\'re from Pickle\'s old journal. I ain\'t got time to read \'em proper, so take a look and tell me what you find.",
                    complete: "Alright, punk. You did good. Don\'t let Pickle get in your head, yeah?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "gribba.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Journal Entry #18",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Want to know how I got here? Well, I was just trying to go home when I walked through a playground I\'d never seen before. The air felt thick, the sounds of the world disappeared, and the exit signs began to blur and melt. I tried to leave, but there was no gate. That was a long time ago. I\'ve been trapped in this playground ever since, and no matter how hard I try, there\'s no way out. I guess it\'s my new home.\
                                    <br>\
                                    <br>\
                                    \u2014 Pickle"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-10%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Journal Entry #39",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "This playground is strange. The jungle gyms stretch too high, the slides twist in endless circles, and some swings never stop moving... even when nobody is on them. The equipment is always changing. One day there\'s a merry-go-round, the next day it\'s gone, replaced by a set of monkey bars.\
                                    <br>\
                                    <br>\
                                    \u2014 Pickle"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "10%",
                                rotate: "2deg",
                            }
                        }
                    }
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
                        title: "[<g>1.] What is the main idea of \"Journal Entry #18\"?",
                        correctIndex: 1,
                        paragraph: [
                            "Try not to get lost when wal{k}ing home",
                            "Pickle is trapped inside a strange {p}layground",
                            "The exit signs began to {b}lur and melt",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the main idea of \"Journal Entry #39\"?",
                        correctIndex: 0,
                        paragraph: [
                            "The p{l}ayground isn\'t normal",
                            "The playground\'s slide{s} twist in endless circles",
                            "Sometimes the playground has monke{y} bars",
                        ],
                    },
                    {
                        title: "[<g>3.] One [<i>similarity] between these main ideas is:",
                        correctIndex: 2,
                        paragraph: [
                            "Both are about walking {h}ome",
                            "Both include a me{r}ry-go-round",
                            "Both involve a mysterious pl{a}yground",
                        ],
                    },
                    {
                        title: "[<g>4.] One [<i>difference] between these journal entries is:",
                        correctIndex: 1,
                        paragraph: [
                            "Only one of them was written by Pickl{e}",
                            "One is a personal stor{y}, the other states facts",
                            "One has a {h}appy tone, the other has a sad tone",
                        ],
                    },
                ],  
                code: {
                    answer: "PLAY",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ swing set
        {

            info: {
                type: 'challenge',
                title: 'Swing Set',
                asset: "merriwig.png",
                state: "incomplete",
                hint: {
                    text: "Sort the notes into the correct sequence, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details of an Informational Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10"
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Swings are fine, but seesaws bring me true joy! Pickle gave me some notes on fixing them, but everything's all mixed up. Can you sort these steps into the right order?",
                    complete: "Thank you, kind stranger. Your help shall carry me closer to the sky..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "How to Fix Seesaws",
                    ],
                    asset: {
                        scope: "global",
                        path: "1-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>A] &nbspThe seesaws on Pickle\'s Playground are in bad shape. They\'re always falling apart, so here\'s how to keep them working!",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },                      {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>C]  &nbspFirst, check for rotten boards or rusty hinges. Those are usually the first two things to go bad.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    }, 
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>D]  &nbspNext, patch them up with whatever you can find: string, glue, or even abandoned lunch trays. Just scrape off any old food.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    }, 
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>E]  &nbspFinally, give each seesaw a little test bounce. Then step back and watch. If it moves freely, without snapping in half \u2014 you did it! Now go celebrate with some cupcakes.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "sort1Width",
                            height: "auto",
                        },
                        misc: {
                            material: 'paper',
                            padding: "default"
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] The central idea of \"How to Fix Seesaws\" is:",
                        correctIndex: 1,
                        paragraph: [
                            "Provi{d}ing instructions to fix broken swing sets",
                            "Providing instructions to fix broken seesaw{s}",
                            "Describing how to tes{t} a newly-fixed seesaw",
                        ],
                    },
                    {
                        title: "[<g>2.] Which line of text is a key detail?",
                        correctIndex: 0,
                        paragraph: [
                            "\"...so here\'s how to keep them {w}orking!\"",
                            "\"Just scrape off any {o}ld food.\"",
                            "\"Now go {c}elebrate with some cupcakes.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Why do the seesaws need fixing?",
                        correctIndex: 1,
                        paragraph: [
                            "Pickle is trying to impress his {g}irlfriend",
                            "They\'re in b{a}d shape, and falling apart",
                            "{T}heir screws get rusted easily",
                        ],
                    },
                    {
                        title: "[<g>4.] The 3rd step is marked with the symbol:",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "[<s>C] {R}",
                            "[<s>D] {X}",
                            "[<s>E] {Y}",
                        ],
                    },
                ],  
                code: {
                    answer: "SWAY",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ monkey bars 
        {

            info: {
                type: 'challenge',
                title: "Monkey Bars",
                asset: "banana-gunk-jr.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, read the story, then answer the multiple-choice questions. The yellow letters, in-order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details of a Narrative Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "Gunk Jr. here \u2014 what\'s left of me, anyway. Pickle found a page from my lost manual, all torn up under a seesaw. Mind helping me put the pieces back together?",
                    complete: "Thanks, friend. That helped more than a fresh can of grease. Anyway, see you around..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "banana-gunk-jr.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Gunk Jr. was built by Interactive Systems Inc.",
                                }, 
                                backgroundImage: {
                                    file: "10.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "He was designed to bring joy through dance.",
                                }, 
                                backgroundImage: {
                                    file: "11.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "He knew over 300 different grooves to cheer people up.",
                                }, 
                                backgroundImage: {
                                    file: "12.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "One day, a birthday boy sat alone and sad,",
                                }, 
                                backgroundImage: {
                                    file: "13.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "so Gunk Jr. rolled into the room.",
                                }, 
                                backgroundImage: {
                                    file: "14.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "He looked at the lonely boy and started to dance,",
                                }, 
                                backgroundImage: {
                                    file: "15.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "putting in as much effort as his gears could take.",
                                }, 
                                backgroundImage: {
                                    file: "16.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The boy laughed so hard he cried, then danced too.",
                                }, 
                                backgroundImage: {
                                    file: "17.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "It was the best party either had ever known!",
                                }, 
                                backgroundImage: {
                                    file: "18.png"
                                }
                            }
                        ],
                    },
                ],  
                style: { 
                    block: {
                        dimension: {
                            width: "puzzleWidth",
                            height: "puzzleHeight",
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
                                align: 'center',
                                puzzle: 'default',
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Read the entire passage. What\'s it mostly about?",
                        correctIndex: 1,
                        paragraph: [
                            "Inside {G}unk Jr. is a secret switch",
                            "Gunk Jr. danced to save a lonely kid\'s {b}irthday",
                            "Gunk Jr. is falling apar{t}",
                        ],
                    },
                    {
                        title: "[<g>2.] The ____ does [<i>not] contain a supporting detail.",
                        correctIndex: 1,
                        paragraph: [
                            "Middle right puz{z}le piece",
                            "Top left puzzle pi{e}ce",
                            "Bott{o}m right puzzle piece",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: all three puzzle pieces in the right column support the main idea.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tru{e}",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>4.] In which piece did the boy start to cheer up?",
                        correctIndex: 2,
                        paragraph: [
                            "The top left p{i}ece",
                            "The center {p}iece",
                            "The bottom middle {p}iece",
                        ],
                    },
                ],  
                code: {
                    answer: "BEEP",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ play palace
        {

            info: {
                type: 'challenge',
                title: "Play Palace",
                asset: "king-kevin.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Two Main Ideas in a Single Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.3",
                        "RI.5.8",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "King Kevin",
                asset: "king-kevin.png",
                dialogue : {
                    incomplete: "Ahem. It seems I received a letter from Pickle. You shall read it to me at once. And try to sound important while you do it.",
                    complete: "Yes, yes, very good. That will do. You\'re free to leave, so quit standing there."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "king-kevin.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear King Kevin,\
                                    <br>\
                                    <br>\
                                    &nbsp&nbsp If you ever feel a strange desire to wander, try turning your throne to face the western wall of the play palace at [<i>exactly] noon. The shadow it casts will crawl across the floor and stop at a single, crooked bolt. Twist it, and a hidden door will open. I won\'t say what\'s behind the door... only that it\'s been waiting a long time.\
                                    <br>\
                                    <br>\
                                    &nbsp&nbsp Also, your corn chips are getting kind of stale. To keep them fresh, you can\'t just leave them outside like some snack goblin. Rain is the enemy of crunch! Tuck them somewhere cool and dry, like a proper chip king.\
                                    <br>\
                                    <br>\
                                    With respect,\
                                    <br>\
                                    Pickle"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
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
                                translateX: "0%",
                                translateY: "9%",
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

            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] The first main idea is about revealing a secret ___. ",
                        word: "[D]OOR",
                    },
                    {
                        title: "[<g>2.] The second main idea is about keeping chips ___.",
                        word: "FR[E]SH",
                    },
                    {
                        title: "[<g>3.] Is the first main idea's tone [<u>creepy] or [<u>silly]?",
                        word: "CRE[E]PY",
                    },
                    {
                        title: "[<g>4.] Pickle\'s intent with both main ideas is to give ___.",
                        word: "A[D]VICE",
                    },
                ],
                code: {
                    answer: "DEED",
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