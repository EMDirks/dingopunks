const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/character-traits/thumbnail-4th-5th-grade.png",
        timerLabel: "PICKLE ARRIVES"
    },

    challengeArray: [

        // ⭐ play palace
        {

            info: {
                type: 'challenge',
                title: "Play Palace",
                asset: "king-kevin.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Identify Character Traits",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.8",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.5",
                        "RL.5.6",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "King Kevin",
                asset: "king-kevin.png",
                dialogue : {
                    incomplete: "Honk! Pickle has sent me twenty letters this week. TWENTY. If he\'s asking about being roommates again, I'm going to flip out. Anyway, I'm not reading this one. But you can. If you want.",
                    complete: "Unbelievable. The nerve of that Pickle! Go on, get out of here!"
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
                                    &nbsp; &nbsp; My home has an extra room, and I think you would be a great fit. My current roommate, Newt Garcia, is not working out. First, he can\'t be trusted. Every morning, my fish food is gone. Newt swears it wasn't him, but I've seen the crumbs on his shirt, Kevin. I have seen them.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; And get this: every single night, Newt makes up a song and sings it at full blast until he falls asleep! Last night, it was about a baked potato. SO annoying. I\'m a nervous creature, Kevin. I can\'t put up with this much longer. Will you please be my roommate? PLEASE?\
                                    <br>\
                                    <br>\
                                    Your friend,\
                                    <br>\
                                    Pickle"
                                }
                            }
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
                        title: "[<g>1.] Who is this letter mostly about?",
                        correctIndex: 1,
                        paragraph: [
                            "King Ke{v}in",
                            "Newt Ga{r}cia",
                            "Pi{c}kle",
                        ],
                    },
                    {
                        title: "[<g>2.] Newt Garcia can be described as ___ .",
                        correctIndex: 0,
                        paragraph: [
                            "Untrustw{o}rthy",
                            "S{m}art",
                            "{L}oyal",
                        ],
                    },
                    {
                        title: "[<g>3.] According to the 2nd paragraph, which character trait also describes Newt?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "At{h}letic",
                            "Caref{u}l",
                            "{S}hy",
                            "Ann{o}ying",
                        ],
                    },
                    {
                        title: "[<g>4.] Which sentence shows Pickle describing himself?",
                        correctIndex: 1,
                        paragraph: [
                            "\"I think {y}ou would be a great fit.\"",
                            "\"I a{m} a nervous creature, Kevin\"",
                            "\"Will y{o}u please be my roommate?\"",
                        ],
                    },
                ],  
                code: {
                    answer: "ROOM",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ ball pit
        {

            info: {
                type: 'challenge',
                title: "Ball Pit",
                asset: "gribba.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Infer Character Traits",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.8",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Gribba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "I'm growin\' flowers \'round this ball pit. Makes it real pretty, yeah? Pickle wrote me some tips, but... well, I can\'t read. You any good with words? Go on then, take a look!",
                    complete: "Well, alrighty then. Much obliged. Now go on; surely you got other things to do."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "gribba.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "6.png",
                                },
                            },
                            {
                                title: {
                                    text: "Moonbloom",
                                },
                                passage: {
                                    text: "My friend Zara figured out how to grow the Moonbloom, and she shared her findings right away. Just plant the seeds in soft soil, water them at night, and keep them out of direct sunlight. Zara said she hopes everyone gets to see them bloom someday!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "7.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Blazeflower",
                                },
                                passage: {
                                    text: "Scab Jones (my arch enemy) figured out how to grow the rare Blazeflower, but he charged me fifty corn dogs for the instructions. Anyway, here it is: plant the seeds in dry soil, give them full sun, and water them once a week. Scab made me promise not to tell anyone... so don't tell anyone.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "2%",
                                rotate: "1deg",
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
                        title: "[<g>1.] If Zara \"shared her findings right away,\" you can infer that she is ___ .",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Secr{e}tive",
                            "Gene{r}ous",
                            "{C}reative",
                            "Unintelli{g}ent",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: The last sentence of \"Moonbloom\" also helps reveal what kind of person Zara is.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tr{u}e",
                            "Fals{e}",                    
                        ],
                    },
                    {
                        title: "[<g>3.] Scab Jones is a(n) ___ person.",
                        correctIndex: 2,
                        paragraph: [
                            "Sm{e}lly",
                            "An{g}ry",
                            "Gree{d}y",
                        ],
                    },
                    {
                        title: "[<g>4.] Which quote reveals Scab\'s main character trait?",
                        correctIndex: 0,
                        paragraph: [
                            "\"he charged m{e} fifty corn dogs\"",
                            "\"she hopes everyone gets to see t{h}em\"",
                            "\"w{a}ter them once a week\"",
                        ],
                    },
                ],  
                code: {
                    answer: "RUDE",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Character Traits, Feelings, and Motivations",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Banana Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "I... I just woke up here, and I can\'t remember a thing! I guess this \"Pickle\" guy found a page from my manual, but it\'s all ripped up. Think you can put the pieces back together?",
                    complete: "You know, I was wondering why I felt the need to dance. Thanks, I guess."
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
                                    text: "You always want to make people smile.",
                                }, 
                                backgroundImage: {
                                    file: "1.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "You are helpful to every person you meet.",
                                }, 
                                backgroundImage: {
                                    file: "2.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Sometimes you want people to like you too much.",
                                }, 
                                backgroundImage: {
                                    file: "3.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "You feel excited when someone asks you to dance.",
                                }, 
                                backgroundImage: {
                                    file: "4.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "You are capable of taking on very hard tasks.",
                                }, 
                                backgroundImage: {
                                    file: "5.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "You feel uneasy when things get too quiet.",
                                }, 
                                backgroundImage: {
                                    file: "6.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "You feel loved, even on difficult days.",
                                }, 
                                backgroundImage: {
                                    file: "7.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "You want to bring joy to every person who sees you.",
                                }, 
                                backgroundImage: {
                                    file: "8.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "You often say sorry, even when it\'s not your fault.",
                                }, 
                                backgroundImage: {
                                    file: "9.png"
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
                        title: "[<g>1.] Every puzzle piece shows either a trait, feeling, or:",
                        correctIndex: 0,
                        paragraph: [
                            "Mo{t}ivation",
                            "P{l}ot",
                            "The{m}e",
                        ],
                    },
                    {
                        title: "[<g>2.] What does the top left puzzle piece show?",
                        correctIndex: 2,
                        paragraph: [
                            "A t{r}ait",
                            "A fee{l}ing",
                            "A mot{i}vation",
                        ],
                    },
                    {
                        title: "[<g>3.] Find the puzzle piece in the middle. What character trait does this piece reveal?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "H{o}nor",
                            "Capabi{l}ity",
                            "Recklessnes{s}",
                            "Gene{r}osity",
                        ],
                    },
                    {
                        title: "[<g>4.] In all, how many puzzle pieces are about [<i>feelings?]",
                        correctIndex: 1,
                        paragraph: [
                            "Tw{o}",
                            "{T}hree",
                            "Fo{u}r",
                        ],
                    },
                ],  
                code: {
                    answer: "TILT",
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
                    text: "Read the poems, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Compare and Contrast Character Traits",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Well, Pickle wrote me some poems. I\'m sure they\'re very nice, but I\'m busy right now. Would you mind having a look? Maybe there\'s something important in there.",
                    complete: "Anything important? No? Great. Back to swinging. You can leave if you want..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "merriwig.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Jaymo',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "Big old Jaymo, eight legs wide,\
                                    <br>\
                                    He let me sit real close beside.\
                                    <br>\
                                    He knew my name before I spoke,\
                                    <br>\
                                    And laughed so soft at every joke.\
                                    <br>\
                                    <br>\
                                    That spider looked me in the eye,\
                                    <br>\
                                    And told me how webs work and why.\
                                    <br>\
                                    I understood like half, to be fair,\
                                    <br>\
                                    But Jaymo smiled and didn't care."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "20%",
                                rotate: "-6deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Peter',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "Peter the beetle doesn\'t say much.\
                                    <br>\
                                    He just watches.\
                                    <br>\
                                    His eyes are [<i>too] still.\
                                    <br>\
                                    His eyes are [<i>too] smart.\
                                    <br>\
                                    <br>\
                                    He knows when storms are near.\
                                    <br>\
                                    He knows when earthquakes are coming.\
                                    <br>\
                                    <br>\
                                    I do not like it.\
                                    <br>\
                                    But he is right about everything."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-12%",
                                rotate: "-2deg",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Of the two bugs Pickle wrote about, which one is more friendly?',
                        'B. [<u>Right] or [<u>wrong]: both Jaymo and Peter are wise creatures.',
                        'C. Which creature makes Pickle feel uneasy?',     
                        'D. Is Jaymo [<u>chatty] or [<u>silent]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","(D)C","0","0","0"],
                        ["(B)R","3I","G","H","T","0","0"],
                        ["0","0","0","A","0","0","0"],
                        ["0","(C)1P","E","T","E","4R","0"],
                        ["0","0","0","T","0","0","0"],
                        ["0","(A)J","2A","Y","M","O","0"],
                    ]
                },  
                code: {
                    answer: "PAIR",
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