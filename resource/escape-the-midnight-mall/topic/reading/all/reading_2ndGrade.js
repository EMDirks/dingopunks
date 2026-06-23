const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/all/thumbnail-2nd-grade-ela-mem.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [

        // ⭐ critterwerks
        {

            info: {
                type: 'challenge',
                title: "Robot Pet Shop",
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Robot Squid\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
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
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hi! I just made a new robot pet! It comes with a note, but I don\'t know if my writing makes sense. Can you read it and tell me the main idea?",
                    complete: "Hee hee! Thanks for checking my note. Come back and say hi any time!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "critterwerks.png",
                },
                blockArray: [
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
                                    text: "Robot Squid",
                                },
                                passage: {
                                    text: "A robot squid needs special care. You can trust me! First, keep it in a tank of oil, not water. Also, only feed it tiny metal screws. And most importantly, don\'t forget to check its battery every day. If you don\'t do that, the robot squid will fall asleep. Anyway, I hope you like your new pet! It was super fun to make.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "5%",
                                rotate: "4deg",
                            }
                        }
                    },
                ],  
                style: {                   
                    block: {
                        misc: {
                            material: 'metal',
                            padding: "double"
                        },
                        dimension: {
                            width: "percent70",
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
                                width: "percent15",
                                height: "auto",
                            }
                        },
                        {
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            dimension: {
                                width: "percent80",
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
                        title: "[<g>1.] What is the main idea of this text?",
                        correctIndex: 0,
                        paragraph: [
                            "\"A ro{b}ot squid needs special care.\"",
                            "\"Also, only feed it tiny me{t}al screws.\"",
                            "\"Anyway, I hop{e} you like your new pet!\"",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail helps explain the main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"You can tru{s}t me!\"",
                            "\"First, ke{e}p it in a tank of oil, not water.\"",
                            "\"It was super fun to {m}ake.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: \"Also, only feed it tiny metal screws\" is another key detail.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>4.] Why should you check the robot squid\'s battery?",
                        correctIndex: 2,
                        paragraph: [
                            "The robot squid {c}osts a lot of money",
                            "Its battery is fun to lo{o}k at",
                            "If you don\'t, the robot squid will fall aslee{p}",
                        ],
                    },
                ],  
                code: {
                    answer: "BEEP",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ helio athletics
        {

            info: {
                type: 'challenge',
                title: "Sporting Goods Store",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Read \"The Sweaty Troll\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
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
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.2",
                        "RL.2.3",
                        "RL.2.5",
                        "RL.2.10",
                    ],
                }
            },

            intro: {
                character: "Sir Robb the Brave",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I am Sir Robb the Brave. I fear nothing... not even the Mallcrawlers! Don\'t believe me? Read my wild story and see for yourself. I dare you!",
                    complete: "Well done. I may need your help again someday, Dingo Punks."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "underworld-athletics.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Sweaty Troll',
                                },
                                subtitle: {
                                    text: "By Sir Robb",
                                },
                                passage: {
                                    text:   "One day, I was picking flowers. Then I smelled something awful. I looked up and saw a sweaty troll picking flowers too! I bragged that I could pick more flowers than him. He just smiled and said, \"Fine! Let\'s see who wins.\"\
                                    <br>\
                                    So, we started our flower battle. I picked ones that smelled nice. The troll picked every flower he could see. He moved fast. I moved smart. But when the field was empty, I knew I had lost. My tiny pile looked silly next to his big one.\
                                    <br>\
                                    Then the troll said, \"Good job! Want to be friends?\" I was surprised, but I said yes. The troll showed me how to pick flowers fast, and I showed him how to pick ones that smelled nice. When we picked as a team, we got the best flowers.\
                                    <br>\
                                    We can do great things by working together!"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
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
                            width: "percent85",
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
                        title: "[<g>1.] What lesson does this story teach us?",
                        correctIndex: 1,
                        paragraph: [
                            "It is e{a}sy to pick flowers",
                            "We can do g{r}eat things by working together",
                            "Trolls can get {v}ery sweaty",
                        ],
                    },
                    {
                        title: "[<g>2.] At the beginning of the story, Sir Robb was ___ .",
                        correctIndex: 0,
                        paragraph: [
                            "Picking fl{o}wers",
                            "Picking his no{s}e",
                            "Slee{p}ing in a field",
                        ],
                    },
                    {
                        title: "[<g>3.] Who lost the flower battle?",
                        correctIndex: 0,
                        paragraph: [
                            "{S}ir Robb",
                            "T{h}e troll",
                            "None of the a{b}ove",
                        ],
                    },
                    {
                        title: "[<g>4.] When the troll won, what did he do?",
                        correctIndex: 1,
                        paragraph: [
                            "He bragged about his sk{i}lls",
                            "He asked Sir Robb to b{e} his friend",
                            "He {r}an away",
                        ],
                    },
                ],  
                code: {
                    answer: "ROSE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ zeebplex
        {

            info: {
                type: 'challenge',
                title: "Zeke\'s Arcade",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues and Vocabulary",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "L.2.4",
                        "L.2.4a",
                        "L.2.4b",
                        "L.2.4c",
                        "L.2.4d",
                        "L.2.5",
                        "L.2.5b",
                        "L.2.6",
                        "RF.2.3",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                    ],
                }
            },

            intro: {
                character: "Zeke",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "The computer board in one of my games broke! I\'m too busy to fix it. I need you to put the pieces back together, okay?",
                    complete: "Fine... Thanks. I didn\'t think you could do it, but you proved me wrong."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "zeeb-plex.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "A. I am [<u>unable] to beat this game.",
                                }, 
                                backgroundImage: {
                                    file: "19.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "B. I hope I win a big toy!",
                                }, 
                                backgroundImage: {
                                    file: "20.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "C. The screen was [<u>dim], or not bright.",
                                }, 
                                backgroundImage: {
                                    file: "21.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "D. This game plays loud music.",
                                }, 
                                backgroundImage: {
                                    file: "22.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "E. He won a [<u>big] prize.",
                                }, 
                                backgroundImage: {
                                    file: "23.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "F. These gumballs are colorful.",
                                }, 
                                backgroundImage: {
                                    file: "24.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "G. I want one more turn.",
                                }, 
                                backgroundImage: {
                                    file: "25.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "H. She wrote her high score in her [<u>notebook].",
                                }, 
                                backgroundImage: {
                                    file: "26.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "I. My friend got twenty tickets.",
                                }, 
                                backgroundImage: {
                                    file: "27.png"
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
                        title: "[<g>1.] The underlined word on puzzle piece C means:",
                        correctIndex: 0,
                        paragraph: [
                            "Not bri{g}ht",
                            "Sou{r}",
                            "Soft {a}nd fuzzy",
                        ],
                    },
                    {
                        title: "[<g>2.] The underlined word on puzzle piece H means:",
                        correctIndex: 1,
                        paragraph: [
                            "A box f{u}ll of stickers",
                            "{A} book to write notes",
                            "A loud son{g}",
                        ],
                    },
                    {
                        title: "[<g>3.] Find the underlined word in the middle piece. Which of these words is bigger?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Sma{l}l",
                            "{M}assive",
                        ],
                    },
                    {
                        title: "[<g>4.] Find the underlined word in the top yellow puzzle piece. If \"un-\" means [<i>not], then \"unable\" means ___ .",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Not abl{e}",
                            "Ver{y} happy",
                        ],
                    },
                ],  
                code: {
                    answer: "GAME",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ prismatica
        {

            info: {
                type: 'challenge',
                title: 'Clothing Shop',
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Text Features",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.2.4",
                        "L.2.4e",
                        "RF.2.3",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RF.2.4c",
                        "RI.2.4",
                        "RI.2.5",
                        "RI.2.7",
                        "RI.2.10"
                    ],
                }
            },

            intro: {
                character: "Paula",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I gathered some pages for my new clothing show tomorrow, and they MUST be perfect. Check them for me, please. I have no time for mistakes!",
                    complete: "Very nice work. You know, J.J. Dingo is an old friend. Tell him I said hi."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "holographia.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Moon Cloth',
                                },
                                subtitle: {
                                    text: 'By Paula',
                                },
                                passage: {
                                    text:   "<br>&nbsp; &nbsp; There is a new kind of cloth that glows in the moonlight. In the day, it has a dull color. But on some nights, it can glimmer.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; You can see the glow from far away. It helps people stay safe and look trendy at the same time."
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
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Glossary',
                                },
                                passage: {
                                    text:   "<br>[<u>Dull]: plain and not bright\
                                    <br>\
                                    <br>\
                                    [<u>Glimmer]: shine softly\
                                    <br>\
                                    <br>\
                                    [<u>Moonlight]: light that comes from the moon\
                                    <br>\
                                    <br>\
                                    [<u>Trendy]: new and popular"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "mm25_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "3%",
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
                        dimension: {
                            width: "percent30",
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
                        title: "[<g>1.] What is the title of the passage written by Paula?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Mo{o}nlight\"",
                            "\"Moon {C}loth\"",
                            "\"Glossar{y}\"",
                        ],
                    },
                    {
                        title: "[<g>2.] Based on the glossary, \"trendy\" means ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "Plain and not bri{g}ht",
                            "Light th{a}t comes from the moon",
                            "New and p{o}pular",
                        ],
                    },
                    {
                        title: "[<g>3.] What does \"glimmer\" mean?",
                        correctIndex: 0,
                        paragraph: [
                            "Shine s{o}ftly",
                            "A new kind of clot{h}",
                            "Light {t}hat comes from the moon",
                        ],
                    },
                    {
                        title: "[<g>4.] What does the picture show?",
                        correctIndex: 2,
                        paragraph: [
                            "A dress made from dirty s{c}raps of cloth",
                            "A ne{w} pair of pants",
                            "A dress made from moon c{l}oth",
                        ],
                    },
                ],  
                code: {
                    answer: "COOL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the candy cave
        {

            info: {
                type: 'challenge',
                title: 'Candy Cave',
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Read both poems and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.5",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RL.2.1",
                        "RL.2.4",
                        "RL.2.9",
                        "RL.2.10",
                    ],
                }
            },

            intro: {
                character: "Martin",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "Hi... I\'m Martin. I\'m feeling stressed, so I wrote a couple of poems to calm down. Will you read them to me? Thanks so much!",
                    complete: "Thanks... You know, that really helped me feel better. Good luck out there!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-candy-cave.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'My Cave',
                                },
                                subtitle: {
                                    text: 'By Martin',
                                },
                                passage: {
                                    text:   "My cave is too small. I don\'t have much space.\
                                    <br>\
                                    Big boxes and bags are all over the place.\
                                    <br>\
                                    Oh, how I dream to make something new.\
                                    <br>\
                                    So many candies for me and for you!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'More, More, More',
                                },
                                subtitle: {
                                    text: 'By Martin',
                                },
                                passage: {
                                    text:   "Piles of candy block the door.\
                                    <br>\
                                    There\'s no more space on the floor.\
                                    <br>\
                                    I need a cave with more, more, more!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-6%",
                                rotate: "3deg",
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
                            width: "percent50",
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
                        title: "[<g>1.] In \"My Cave,\" which word rhymes with \"space\"?",
                        correctIndex: 2,
                        paragraph: [
                            "Ca{v}e",
                            "N{e}w",
                            "Pla{c}e",
                        ],
                    },
                    {
                        title: "[<g>2.] Which quote has alliteration?",
                        correctIndex: 1,
                        paragraph: [
                            "\"My cave is {t}oo small\"",
                            "\"Big boxes and b{a}gs\"",
                            "\"Oh, h{o}w I dream\"",
                        ],
                    },
                    {
                        title: "[<g>3.] In \"More, More, More,\" what\'s blocking the door?",
                        correctIndex: 2,
                        paragraph: [
                            "A shoe r{a}ck",
                            "Bo{x}es and bags",
                            "None of the abo{v}e",
                        ],
                    },
                    {
                        title: "[<g>4.] Both of these poems are about ___ .",
                        correctIndex: 0,
                        paragraph: [
                            "A candy cav{e} that\'s too small",
                            "A cave full of ani{m}als",
                            "A can{d}y maker who wants more money",
                        ],
                    },
                ],  
                code: {
                    answer: "CAVE",
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