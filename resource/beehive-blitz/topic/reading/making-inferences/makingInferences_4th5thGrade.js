const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/reading/making-inferences/thumbnail-4th-5th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ grumblegrub
        {

            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Read the report, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About an Informational Text",
                    commonCore: [
                        "CCRA.R.1",
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
                        "RI.4.3",
                        "RI.4.4",
                        "RI.4.5",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.8",
                        "RI.5.10"
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "The Queen\'s got me writing a report about how honey is made. She says I need to prove I understand my own job. Ha! Read it over and tell me if it makes sense, will ya?",
                    complete: "Hmph! Glad that\'s over with. Don\'t tell the Queen you helped, got it?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "grumblegrub.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Report: How Honey is Made',
                                },
                                subtitle: {
                                    text: 'By Grumblegrub',
                                },
                                passage: {
                                    text:   "The Queen says I need to prove that I understand our own product, so here we go.\
                                            <br>\
                                            Nectar starts as a sugary juice inside flowers. Forager bees sip it up and bring it home, passing it off to another group of bees who add special enzymes. The sugars inside the nectar start to break down, turning sweeter. Then it gets stored in a honeycomb.\
                                            <br>\
                                            To finish the job, worker bees flap their wings to thicken it up. That\'s honey. When the job\'s all done, they seal it with wax. Then we can use it whenever we want.\
                                            <br>\
                                            There you go. I\'ve explained it. Can I go back to doing my [<i>actual] work now?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "2deg",
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
                        title: "[<g>1.] We can infer that Grumblegrub:",
                        correctIndex: 1,
                        paragraph: [
                            "Was super excited to write this rep{o}rt",
                            "{D}idn\'t really want to write this report",
                            "Often fal{l}s asleep on the job",
                        ],
                    },
                    {
                        title: "[<g>2.] Which quote supports the answer to question #1?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Nectar starts as a sugary juice inside flo{w}ers.\"",
                            "\"Then it gets store{d} in a honeycomb.\"",
                            "\"Can I go back to doing my actual wo{r}k now?\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What causes the sugars in nectar to break down?",
                        correctIndex: 0,
                        paragraph: [
                            "Spec{i}al enzymes",
                            "{F}orager bees",
                            "Hon{e}ycombs",
                        ],
                    },
                    {
                        title: "[<g>4.] Why might bees seal their honey with wax?",
                        correctIndex: 1,
                        paragraph: [
                            "To make it c{o}mpletely unusable",
                            "To kee{p} it clean, fresh, and safe",
                            "To {m}ake it look cool",
                        ],
                    },
                ],  
                code: {
                    answer: "DRIP",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ riff wingman
        {

            info: {
                type: 'challenge',
                title: "Riff's Study",
                asset: "riff-wingman.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Fictional Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
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
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Name\'s Riff Wingman. I\'m sure you\'ve heard of me. Anyway, the Queen\'s got me writing some kind of \"motivational story,\" so give it a read. Tell me if it still buzzes, okay?",
                    complete: "Yeah! Still got it. Maybe the hive\'s not done with Riff Wingman just yet."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "riff-wingman.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Tilda Took Five',
                                },
                                subtitle: {
                                    text: 'By Riff Wingman',
                                },
                                passage: {
                                    text:   "Tilda was a normal worker bee. She buzzed from flower to flower, busy but forgettable \u2014 just another hum in the hive\'s endless song. Then one Saturday, while everyone was racing through the fields, she landed on a clover and closed her eyes.\
                                    <br>\
                                    When she woke up five minutes later, the other workers were exhausted. They\'d mixed up pollen, spilled nectar, and even dropped a whole jar. Feeling rested, Tilda cleaned it up in seconds. Her tiny break had given her the energy and focus they\'d all lost.\
                                    <br>\
                                    From then on, no one teased her for \"taking five.\" When the hive worked too hard, they\'d look toward Tilda resting on her clover, ready to start again fresh."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "4%",
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
                        title: "[<g>1.] How do we know the bees were busy on Saturday?",
                        correctIndex: 2,
                        paragraph: [
                            "\"...every{o}ne was racing through the fields...\"",
                            "\"...the other workers were e{x}haused.\"",
                            "Both of the abov{e}",
                        ],
                    },
                    {
                        title: "[<g>2.] The title of this story is a reference to:",
                        correctIndex: 0,
                        paragraph: [
                            "The number of minutes Tild{a} napped",
                            "The numb{e}r of bees working on Saturday",
                            "The types of flowers tha{t} produce good nectar",
                        ],
                    },
                    {
                        title: "[<g>3.] We can infer that the theme of this story is:",
                        correctIndex: 1,
                        paragraph: [
                            "It\'s important to never take brea{k}s",
                            "Taking a break can help you do your be{s}t work",
                            "{W}orker bees gather nectar from flowers",
                        ],
                    },
                    {
                        title: "[<g>4.] Which quote supports the theme?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Tilda was a normal worker {b}ee.\"",
                            "\"F{e}eling rested, Tilda cleaned it up in seconds.\"",
                            "\"She buzzed from flower t{o} flower...\"",
                        ],
                    },
                ],  
                code: {
                    answer: "EASE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ basil rabbit
        {

            info: {
                type: 'challenge',
                title: "Honey Vats",
                asset: "basil-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Read each report, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Multiple Related Texts",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.6",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.6",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.8",
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
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "Basil Rabbit here: the bees\' best helper! I\'ve got a few reports to deliver to the queen, but I need you to check them first. Just make sure nothing sounds like a total disaster, all right?",
                    complete: "Phew, you\'re a lifesaver! I hope I don\'t get fired this time..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "basil-rabbit.png",
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
                                    text: "Rose Report",
                                },
                                subtitle: {
                                    text: 'By Basil Rabbit',
                                },
                                passage: {
                                    text: "I tried to help collect rose nectar this morning, but it was a disaster! The thorns grabbed my fur, my jars fell, and it all shattered into a sticky mess!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-12%",
                                translateY: "7%",
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
                                    text: "Sunflower Report",
                                },
                                subtitle: {
                                    text: 'By Buzzy Watkins (Worker Bee #67)',
                                },
                                passage: {
                                    text: "I gathered nectar from sunflowers this morning. Everything went smoothly. A rabbit offered to help, but I told him I had it handled.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "3.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Clover Report",
                                },
                                subtitle: {
                                    text: 'By Polly Jorgenstein (Worker Bee #928)',
                                },
                                passage: {
                                    text: "This morning\'s clover run went fine. Of course, Basil Rabbit dropped his jars again, and our team had to clean it up. We\'re sticky, but it wasn\'t a big deal.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "-7%",
                                rotate: "2deg",
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
                        'A. Who caused the most trouble when collecting nectar: [<u>Basil], [<u>Buzzy], or [<u>Polly]?',
                        'B. [<u>Right] or [<u>wrong]: all three reports are most likely about the same morning.',
                        'C. [<u>Right] or [<u>wrong]: this morning is not the only time Basil has dropped his jars.',     
                        'D. In \"Clover Report,\" we can infer that the bees are sticky with ____ .',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","(C)R"],
                        ["0","0","0","(B)1R","0","0","I"],
                        ["(A)B","2A","S","I","L","0","G"],
                        ["0","0","0","G","0","0","H"],
                        ["0","0","0","H","0","0","3T"],
                        ["(D)N","4E","C","T","A","R","0"],
                    ]
                },  
                code: {
                    answer: "RATE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ sunny snap
        {

            info: {
                type: 'challenge',
                title: "Accounting Dept.",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Look at both documents, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Visual",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.4",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.4",
                        "RI.4.5",
                        "RI.4.6",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "L.5.4",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.4",
                        "RI.5.5",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Ohhh, this can\'t be happening! Two documents showed up on my desk this morning, and they don\'t match at all. Please, help me figure out what\'s going on before the Queen finds out!",
                    complete: "Oh, thank goodness! You might\'ve saved me from a royal meltdown. Literally!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sunny-snap.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "DOCUMENT ONE",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "To my accountant,\
                                    <br>\
                                    <br>\
                                    I hope you are doing well on this fine Friday evening. As of right now, the three cabinets in our treasury are safe and sound. Every crystal, chalice, and coin is right where it should be.\
                                    <br>\
                                    <br>\
                                    Sincerely,\
                                    <br>\
                                    Queen Bella"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "DOCUMENT TWO",
                        },
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "bb18_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "7%",
                                rotate: "4deg",
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
                                translateX: "4%",
                                translateY: "4%",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent35",
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
                                align: 'left',
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
                        title: "[<u>Right] or [<u>wrong]: the photo depicts the treasury.",
                        word: "[R]IGHT",
                    },
                    {
                        title: "We can infer that two ____ were stolen.",
                        word: "CHAL[I]CES",
                    },
                    {
                        title: "Was document [<u>one] or [<u>two] created first?",
                        word: "O[N]E",
                    },
                    {
                        title: "[<u>Right] or [<u>wrong]: Queen Bella is aware of the theft.",
                        word: "WRON[G]",
                    },
                ],
                code: {
                    answer: "RING",
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
        
    ]

}