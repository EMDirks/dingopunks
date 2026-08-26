const resource =  {

    info: {
        title: "Eggworld Emergency",
        path: "eggworld-emergency",
        logo: "resource/eggworld-emergency/assets/branding/reading/all/thumbnail-3rd-grade.png",
        timerLabel: "GIANT PAN ARRIVES"
    },

    challengeArray: [

        // ⭐ ziggy voss
        {

            info: {
                type: 'challenge',
                title: "Treasure Shop",
                asset: "ziggy-voss.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.8",
                        "RI.3.9",
                        "RI.3.10",
                    ],
                }
            },

            intro: {
                character: "Ziggy Voss",
                asset: "ziggy-voss.png",
                dialogue : {
                    incomplete: "Oh, hello! My friends want me to pack up some rare treasures before this whole place becomes an omelet. They left me instructions \u2014 will you give them a read?",
                    complete: "You didn't touch the Ruby Ring, did you? Anyway \u2014 thanks for the help!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "ziggy-voss.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Hey, Ziggy, it\'s time to pack up our rare treasures. There are lots of them in this shop, so please move quickly! Some of the most important items are Duke Dino\'s Ring, the Goblin Bracelet, and my favorite: the Singing Sapphire. It only knows two songs, but they\'re super catchy. That one about corn dogs is stuck in my head! So be very careful with it, and use lots of bubble wrap.<br>\
                                    <br>\
                                    Good luck,<br>\
                                    Sheila Barazo"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Ziggy, some treasures in this shop must be left behind. They may be worth lots of money, but they cause too much trouble. For example, the Whispering Bracelet tells too many secrets, and I don\'t need more drama. Melodina\'s Locket is pretty, but I think it\'s haunted. And please, do [<i>not] touch the Ruby Ring. It only causes bad luck, and we really don\'t need that right now!<br>\
                                    <br>\
                                    All the best,<br>\
                                    Jake Junior"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "4%",
                                rotate: "1deg",
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
                        title: "[<g>1.] What\'s the main idea of Sheila Barazo\'s note?",
                        correctIndex: 2,
                        paragraph: [
                            "There is too much bubbl{e} wrap",
                            "The Goblin {B}racelet is very important",
                            "Lots of rare {t}reasures must be packed up",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail supports Sheila\'s main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "\"...it\'s time to pack up our r{a}re treasures.\"",
                            "\"It only kn{o}ws two songs...\"",
                            "\"That one about corn dogs is stu{c}k in my head!\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What\'s the main idea of Jake Junior\'s note?",
                        correctIndex: 1,
                        paragraph: [
                            "Melo{d}ina\'s locket is pretty",
                            "Some treasures must be {l}eft behind",
                            "Jake Junior is {u}nlucky",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: both notes are about telling Ziggy what to do with the shop\'s treasures.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                ],  
                code: {
                    answer: "TALE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ sir eggbert
        {

            info: {
                type: 'challenge',
                title: "Castle Eggbert",
                asset: "sir-eggbert.png",
                state: "incomplete",
                hint: {
                    text: "Read both escape plans, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Similes and Metaphors",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.3.3",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.5a",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RL.3.1",
                        "RL.3.4",
                    ],
                }
            },

            intro: {
                character: "Sir Eggbert",
                asset: "sir-eggbert.png",
                dialogue : {
                    incomplete: "Two of my knights gave me escape plans, but each one has its risks. I need you to read both and tell me what you think.",
                    complete: "Thank you, Dingo Punks. I will think about your advice carefully."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sir-eggbert.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Escape Plan #1<br>By Sir Enzo<br><br>The best way out of Eggworld is through the Tangled Woods. It\'s dark and twisty, but [<u>the forest is a friend] that will keep us safe. Yes, it will take a long time, but we can sneak away without being seen. A quiet escape, [<u>like a mouse], is the best plan."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-15%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Escape Plan #2<br>By Sir Flip<br><br>No more hiding in the forest, [<u>that place is a prison!] We\'ll get stuck there forever. No, we must run right through the town. The faster we run, the sooner we\'ll be safe \u2014 even if it\'s [<u>as risky as flipping a hot pancake with our bare hands.]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "10%",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Does the metaphor in Sir Flip\'s escape plan compare the forest to a [<u>friend] or a [<u>prison]?',
                        'B. What kind of figurative language does Sir Enzo use in the last sentence of his note: a [<u>simile] or a [<u>metaphor]?',
                        'C. Does the [<u>first] or [<u>last] sentence in Sir Flip\'s note have a simile?',     
                        'D. [<u>True] or [<u>false]: Sir Enzo thinks the forest is safe.',                    
                    ],
                    puzzle: [
                        ["(A)4P","R","I","(B)S","O","N","0"],
                        ["0","0","0","3I","0","0","0"],
                        ["0","0","0","M","0","0","0"],
                        ["0","0","0","I","0","0","0"],
                        ["0","0","0","(C)L","A","S","1T"],
                        ["(D)T","2R","U","E","0","0","0"],
                    ]
                },  
                code: {
                    answer: "TRIP",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ shelly, sunny, and yoko
        {

            info: {
                type: 'challenge',
                title: "Cozy Coop",
                asset: "shelly-sunny-and-yoko.png",
                state: "incomplete",
                hint: {
                    text: "Read each note, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                        "L.3.3",
                        "L.3.3a",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.4b",
                        "L.3.4c",
                        "L.3.5",
                        "L.3.5c",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3a",
                        "RF.3.3c",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4c",
                        "RI.3.1",
                        "RI.3.4",
                        "RL.3.1",
                        "RL.3.4",
                    ],
                }
            },

            intro: {
                character: "Shelly, Sunny, and Yoko",
                asset: "shelly-sunny-and-yoko.png",
                dialogue : {
                    incomplete: "Me, Shelly, and Yoko know there's a secret tunnel to escape Eggworld, but we can't agree on where it is. We need your help, right now!",
                    complete: "Thanks \u2014 you\'re the BEST! At least now we have some sort of clue, right?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "shelly-sunny-and-yoko.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Shelly\'s Note",
                                },
                                passage: {
                                    text: "Uh... the tunnel? I think it\'s near the pet shop with all the cute baby birds! I love to [<u>observe] them, looking at them carefully as they hatch from their eggs. Or wait… maybe the tunnel is by the burger place? Anyway, just look for something big and round. Tunnels are round, right?",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "0%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Sunny\'s Note",
                                },
                                passage: {
                                    text: "Okay, the tunnel is DEFINITELY behind Eggbert\'s statue in the park. Just pour some water at its feet, and POOF! A secret door will open. It\'s a little dark and scary down there, but don\'t worry, it\'s not [<u>terrifying]. It\'s just an old tunnel, not a monster\'s lair!",
                                },  
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
                                    text: "Yoko\'s Note",
                                },
                                passage: {
                                    text: "Oh yeah, the tunnel. It\'s... somewhere. Maybe by the pet shop? Or was it behind that ugly statue in the park? Whatever. Sunny will love to [<u>investigate] this; she has lots of fun looking for clues and solving mysteries. But not me. I really [<u>dislike] having to put in that much effort.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "-5%",
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] In Shelly\'s note, what does \"observe\" mean?",
                        correctIndex: 2,
                        paragraph: [
                            "To e{a}t eggs",
                            "To di{g} a tunnel",
                            "To look at {s}omething carefully",
                        ],
                    },
                    {
                        title: "[<g>2.] The word \"terrifying\" means:",
                        correctIndex: 1,
                        paragraph: [
                            "A little bi{t} scary",
                            "Very sc{a}ry",
                            "B{o}ring",
                        ],
                    },
                    {
                        title: "[<g>3.] If Sunny likes to \"investigate,\" it means she enjoys:",
                        correctIndex: 0,
                        paragraph: [
                            "Looking {f}or clues and solving mysteries",
                            "Taking care of bab{y} birds",
                            "{S}leeping in the park",
                        ],
                    },
                    {
                        title: "[<g>4.] If \"dis-\" means [<i>not], then to \"dislike\" means:",
                        correctIndex: 1,
                        paragraph: [
                            "To li{k}e a lot",
                            "To not lik{e}",
                            "To {s}leep",
                        ],
                    },
                ],  
                code: {
                    answer: "SAFE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ e.v.a.
        {

            info: {
                type: 'challenge',
                title: "Eggworld Archives",
                asset: "eva.png",
                state: "incomplete",
                hint: {
                    text: "Read both poems, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RL.3.1",
                        "RL.3.5",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "E.V.A.",
                asset: "eva.png",
                dialogue : {
                    incomplete: "Eggworld\'s end is near, but we still don\'t know where the giant frying pan came from. I have two notes with different stories \u2014 will you read them and help me find the truth?",
                    complete: "Well, that\'s it! The story of Eggworld ends today, but what comes next is a new beginning."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "eva.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Fryworld\'s Plan',
                                },
                                subtitle: {
                                    text: "By Eggerton, President of Eggworld",
                                },
                                passage: {
                                    text:   "[<tal>Eggworld and Fryworld sat side by side,<br>\
                                    but never were friends, too full of pride.<br>\
                                    They argued, yelled, and fought for years,<br>\
                                    too angry to face their biggest fears.<br>\
                                    <br>\
                                    So Fryworld made one last plan:<br>\
                                    they built and sent a giant pan.<br>\
                                    Too late to talk or call it quits \u2014<br>\
                                    Eggworld will soon be scrambled to bits!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Fool',
                                },
                                subtitle: {
                                    text: "By Hamilton, President of Fryworld",
                                },
                                passage: {
                                    text:   "Eggworld and Fryworld fought for years.<br>\
                                    I wanted to stop it.<br>\
                                    <br>\
                                    So in my barn, I built a big pan \u2014<br>\
                                    not for cooking, but to bring us together!<br>\
                                    <br>\
                                    But the wind had other plans. It swept up my pan!<br>\
                                    And now it falls, heavy with my mistake.<br>\
                                    <br>\
                                    Nobody is to blame, but me: the fool."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "8%",
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
                                translateX: "-5%",
                                translateY: "6%",
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
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'tiny',
                                align: 'center'
                            },
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
                        title: "[<g>1.] \"Fryworld's Plan\" has the rhyme scheme:",
                        word: "AAB[B]",
                    },
                    {
                        title: "[<g>2.] Who is the poet of \"The Fool?\"",
                        word: "HAM[I]LTON",
                    },
                    {
                        title: "[<g>3.] How many stanzas does \"Fryworld\'s Plan\" have?",
                        word: "[T]WO",
                    },
                    {
                        title: "[<g>4.] How many syllables are in line 4 of \"The Fool?\"",
                        word: "ELEV[E]N",
                    },
                ],
                code: {
                    answer: "BITE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ cornelius rabbit
        {

            info: {
                type: 'challenge',
                title: "Town Hall",
                asset: "cornelius-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                    ],
                }
            },

            intro: {
                character: "Cornelius Rabbit",
                asset: "cornelius-rabbit.png",
                dialogue : {
                    incomplete: "I just finished writing down everything that happened at the last Eggworld town hall meeting. It\'s an important story that we can\'t forget! Want to read about it?",
                    complete: "Eggworld\'s story will live on, no matter what comes next. See you later, bucko!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "cornelius-rabbit.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Eggs Can\'t Fly',
                                },
                                subtitle: {
                                    text: "Written by Cornelius Rabbit",
                                },
                                passage: {
                                    text:   "Poppy Eggwhite always wanted to fly. In her messy workshop on the edge of Eggworld, she worked quietly, building a flying machine from scraps, springs, and bicycle parts. But deep down, she felt worried. Eggs don't fly, and everyone knew that.\
                                    <br>\
                                    When Poppy brought the machine to Eggworld\'s town hall meeting, her hands shook. She wanted to show off her creation to the other eggs, but she was too nervous, and no words came out. Feeling unsure of herself, she sat back down.\
                                    <br>\
                                    Then, something terrible happened. A giant frying pan appeared in the sky, falling toward Eggworld! Poppy felt scared, but she knew she had to do something. So, she jumped into her flying machine, started the engine, and took off. One by one, she saved her neighbors, flying them to safety.\
                                    <br>\
                                    When the last egg was safe, Poppy smiled. She learned how important it is to be brave, even when you\'re scared. She proved that eggs really [<i>could] fly!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "2%",
                                rotate: "-7deg",
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
                                size: 'small',
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
                        title: "[<g>1.] The lesson of this story is that it\'s important to:",
                        correctIndex: 1,
                        paragraph: [
                            "Go t{o} town hall meetings",
                            "Be brave, even when you\'re scare{d}",
                            "Build a fl{y}ing machine",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: The setting of \"Eggs Can\'t Fly\" is an egg named Poppy Eggwhite.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] What did Poppy save her neighbors from?",
                        correctIndex: 0,
                        paragraph: [
                            "A giant f{r}ying pan",
                            "A boring town hall {m}eeting",
                            "{A} messy workshop",
                        ],
                    },
                    {
                        title: "[<g>4.] At the beginning of the story, Poppy was worried and nervous. By the end of the story, she was:",
                        correctIndex: 3,
                        columns: 2,
                        paragraph: [
                            "Sleep{y}",
                            "Bo{r}ed",
                            "H{u}ngry",
                            "Brav{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "DARE",
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