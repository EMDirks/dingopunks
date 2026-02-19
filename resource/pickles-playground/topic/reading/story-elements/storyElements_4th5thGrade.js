const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/story-elements/thumbnail-4th-5th-grade.png",
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
                    topic: "Theme and Key Details",
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
                        "RL.4.1",
                        "RL.4.2",
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
                character: "King Kevin",
                asset: "king-kevin.png",
                dialogue : {
                    incomplete: "A letter showed up in my mailbox... Smells like socks, so it\'s definitely from Pickle. Obviously, I have better things to do than read his silly note. That\'s your job, peasant. Honk!",
                    complete: "Pfft. Friends are useless. These corn chips are all I\'ll ever need. Honk!"
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
                                    &nbsp&nbsp&nbsp I stopped by your palace this morning to say hello, but you locked yourself inside. I heard you crunching away at some corn chips. I stood there for a while and waved, but you didn\'t look up.\
                                    <br>\
                                    <br>\
                                    &nbsp&nbsp&nbsp I know we haven\'t talked much. But sometimes, even small things can help bring people closer. So here\'s my offer: I\'ll trade you one of my best socks for one of your corn chips. I know your palace is freezing, and putting on this sock will warm you up for sure. I\'m a sock expert, so trust me when I say this: it\'s the warmest sock on the playground. No doubt about it.\
                                    <br>\
                                    <br>\
                                    &nbsp&nbsp&nbsp I hope we can start with that. And maybe we can build something beautiful together. I\'m a big fan of beautiful things, like beetles and frogs.\
                                    <br>\
                                    <br>\
                                    Your future friend,\
                                    <br>\
                                    \u2014 Pickle"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is the theme of Pickle\'s letter?",
                        correctIndex: 0,
                        paragraph: [
                            "Friendships start from small a{c}ts of kindness",
                            "Corn chip{s} are bad for your health",
                            "King {K}evin doesn\'t have any friends",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail supports the theme?",
                        correctIndex: 1,
                        paragraph: [
                            "\"I heard you crunching away a{t} some corn chips.\"",
                            "\"...even small things can {h}elp bring people closer.\"",
                            "\"I\'m a so{c}k expert...\"",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: the last sentence of the third paragraph also supports the theme.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>4.] What small act of kindness does Pickle suggest?",
                        correctIndex: 2,
                        paragraph: [
                            "Eating corn chips tog{e}ther",
                            "Keeping {b}eetles and frogs as pets",
                            "Trading his best sock for a corn chi{p}",
                        ],
                    },
                ],  
                code: {
                    answer: "CHAP",
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
                    text: "Read the short story, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Characters and Point of View",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Griba",
                asset: "gribba.png",
                dialogue : {
                    incomplete: "I keep the pit clean. Real clean. So when I found a crumpled note down there, I knew somethin\' was off. Problem is, I never learned to read! You wanna start tellin\' me what it says?",
                    complete: "Hah. Knew you had a good brain in that head. Don\'t go braggin\' about it, though."
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
                                title: {
                                    text: 'Old and Cold',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "Griba acts like a busted lawnmower: old, cranky, and full of dirt. But more than once, she rescued me from the ball pit, or handed me a free juice box. I\'ve even seen her stitch up a ripped backpack using her own hair. She scowls a lot, but she also likes to water the flowers.\
                                    <br>\
                                    King Kevin looks nice and fancy on the outside: clean clothes, soft feathers, the whole act. But once, I asked him for help opening a stuck door. He just said, \"Doors open for [<i>me], not the other way around.\" I\'ll never forget that. On the inside, he\'s as cold as a day-old sandwich."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "2deg",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which character is gruff and cranky on the outside, but secretly kind and helpful?',
                        'B. [<u>Right] or [<u>wrong]: the last sentence of \"Old and Cold\" shows Griba\'s character traits.',
                        'C. King Kevin looks nice on the outside, but is ___ on the inside.',     
                        '4. Which character does Pickle think [<i>less] highly of: [<u>Griba] or [<u>Kevin]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","(D)1K"],
                        ["0","(B)W","0","0","0","0","E"],
                        ["0","R","0","0","0","0","V"],
                        ["(C)C","O","L","4D","0","0","I"],
                        ["0","3N","0","0","0","0","N"],
                        ["0","(A)G","R","2I","B","A","0"],
                    ]
                },  
                code: {
                    answer: "KIND",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ swing set
        {

            info: {
                type: 'challenge',
                title: 'Swing Set',
                asset: "merriwig.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Setting",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.9",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.7",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.9",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Two mysterious scraps of paper floated into my lap while I was swinging. You know what? I bet they\'re from Pickle! Will you read them to me?",
                    complete: "You\'ve been kind to me.  If the wind ever comes back, I\'ll try to follow it. Will you?"
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
                                    text: 'The Butterfly',
                                },
                                subtitle: {
                                    text: 'By Pickle'
                                },
                                passage: {
                                    text:   "This morning, the sun came up over Pickle\'s Playground like a big ol\' flashlight! The mulch was steaming, the slides were glowing, and everything smelled like warm tires.\
                                    <br>\
                                    That\'s when I spotted a butterfly, flapping around without a care in the world. It did a little loop, bonked into the monkey bars, and just kept going.\
                                    <br>\
                                    I waved, but it flew away. I hope it comes back tomorrow."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-8%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The UFO',
                                },
                                subtitle: {
                                    text: 'By Pickle',
                                },
                                passage: {
                                    text:   "I couldn\'t sleep, so I wandered. Moonlight cast shadows over the playground, swings swayed in the chilly breeze, and electric lights buzzed with a maddening hum.\
                                    <br>\
                                    And that\'s when I saw it: a UFO. It flew high above the monkey bars, slow and steady. Then it circled the swing set twice, like it was looking for something... or someone. I hope it never returns to Pickle\'s Playground again."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "10%",
                                rotate: "-1deg",
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
                        title: "[<g>1.] \"The Butterfly\" takes place during the ___ .",
                        correctIndex: 0,
                        paragraph: [
                            "Mo{r}ning",
                            "Afternoo{n}",
                            "Ni{g}ht",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail from \"The UFO\" shows its setting?",
                        correctIndex: 0,
                        paragraph: [
                            "\"Moonl{i}ght cast shadows over the playground...\"",
                            "\"...it was loo{k}ing for something...\"",
                            "\"I hop{e} it never returns...\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Where do both of these stories take place?",
                        correctIndex: 2,
                        paragraph: [
                            "Ben{e}ath the swing set",
                            "Inside a UF{O}",
                            "At Pickle\'{s} Playground",
                        ],
                    },
                    {
                        title: "[<g>4.] Which story\'s setting creates a creepy mood?",
                        correctIndex: 1,
                        paragraph: [
                            "\"The Butterfl{y}\"",
                            "\"Th{e} UFO\"",
                            "Neither story has a c{r}eepy mood",
                        ],
                    },
                ],  
                code: {
                    answer: "RISE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ tunnel slide
        {

            info: {
                type: 'challenge',
                title: 'Tunnel Slide',
                asset: "twisted-tori.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Plot, Conflict, and Events",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Twisted Tori",
                asset: "twisted-tori.png",
                dialogue : {
                    incomplete: "A jack-in-the-box just landed at the bottom of my slide! It popped open and tossed out a newspaper article. I think it\'s from Pickle... that guy loves starting trouble. Wanna take a look?",
                    complete: "Oh great, just what I wanted... a creepy jack-in-the-box. Let Pickle know I\'m gonna get him back!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "twisted-tori.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Peanut Panic at Pickle\'s Playground',
                                },
                                subtitle: {
                                    text: 'By Scoop McGee, Playground Reporter',
                                },
                                passage: {
                                    text:   "Pickle liked things a certain way. Swings were for swinging. Slides were for sliding. No surprises, and [<i>certainly] no nonsense. So when someone stole Pickle's peanut butter sandwich, he started a full search of the playground.\
                                    <br>\
                                    That\'s when he noticed a toy he\'d never seen before: a jack-in-the-box! It was sitting on top of the monkey bars, looking suspicious. He chased it for weeks, but it kept hopping away.\
                                    <br>\
                                    Finally, it got stuck in some mud, and opened with a pop! Inside was a half-eaten peanut butter sandwich. It was pretty moldy, and a little damp. Pickle ate it anyway."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "3%",
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
                                translateX: "5%",
                                translateY: "10%",
                                rotate: "-2deg",
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
                                size: 'small',
                                align: 'left',
                                brSplit: 'default',
                                indent: 'default'
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
                        title: "[<g>1.] The conflict is between the jack-in-the-box and:",
                        word: "PI[C]KLE",
                    },
                    {
                        title: "[<g>2.] Pickle solves his problem by starting a full ___ .",
                        word: "SE[A]RCH",
                    },
                    {
                        title: "[<g>3.] [<u>Right] or [<u>wrong]: Pickle caught the thief quickly.",
                        word: "W[R]ONG",
                    },
                    {
                        title: "[<g>4.] The story ended when Pickle ___ the sandwich.",
                        word: "AT[E]",
                    },
                ],
                code: {
                    answer: "CARE",
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