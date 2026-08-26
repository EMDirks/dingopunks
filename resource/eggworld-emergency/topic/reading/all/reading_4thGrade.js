const resource =  {

    info: {
        title: "Eggworld Emergency",
        path: "eggworld-emergency",
        logo: "resource/eggworld-emergency/assets/branding/reading/all/thumbnail-4th-grade.png",
        timerLabel: "GIANT PAN ARRIVES"
    },

    challengeArray: [

        // ⭐ ziggy voss
        {

            info: {
                type: 'challenge',
                title: "Jewelry Shop",
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
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.5",
                        "RI.4.9",
                        "RI.4.10",
                    ],
                }
            },

            intro: {
                character: "Ziggy Voss",
                asset: "ziggy-voss.png",
                dialogue : {
                    incomplete: "Oh, you're here! My friends put me in charge of packing up Eggworld's most expensive jewelry before this whole place becomes an omelet. Want to lend a hand?",
                    complete: "You didn't touch the Crimson Pendant, did you? Anyway \u2014 thanks for the help!"
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
                                    text:   "Okay, Ziggy \u2014 go pack our huge collection of rare jewelry. Some of the most important and valuable items are Duke Dino\'s Scrambled Scepter, the Goblin Queen\'s Topaz Bracelet, and my personal favorite: the Singing Sapphire. It only knows two songs, but wow, they\'re catchy! That one about corn dogs is stuck in my head. So be very careful with it, and use lots of bubble wrap.<br>\
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
                                    text:   "Ziggy, a few pieces of jewelry should be left behind. They might be worth lots of money, but they\'re not worth the trouble. The Whispering Bracelet won\'t stop sharing secrets, and I\'m done with all that drama. Melodina\'s Locket is pretty, but somehow it gets fingerprints on the glass… from the inside. And whatever you do, don\'t even touch the Crimson Pendant. Let\'s just say the last person who touched it had a really bad day, and I\'d rather not risk it again.<br>\
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
                        correctIndex: 1,
                        paragraph: [
                            "Don\'t was{t}e any bubble wrap",
                            "Lots of imp{o}rtant jewelry must be packed up",
                            "The Sin{g}ing Sapphire is Sheila\'s favorite",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail supports Sheila\'s main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "\"...go {p}ack our huge collection of rare jewelry.\"",
                            "\"It only knows tw{o} songs...\"",
                            "\"That one about corn do{g}s is stuck in my head.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What\'s the main idea of Jake Junior\'s note?",
                        correctIndex: 0,
                        paragraph: [
                            "{A} few pieces of jewelry should be left behind",
                            "The Whispering Bracel{e}t should be packed up",
                            "Jake Jun{i}or thinks Melodina\'s Locket is pretty",
                        ],
                    },
                    {
                        title: "[<g>4.] Both main ideas involve:",
                        correctIndex: 0,
                        paragraph: [
                            "Deciding what jewe{l}ry to take or leave",
                            "The dangers of the Crimson Pendan{t}",
                            "Sheila Bara{z}o\'s taste in music",
                        ],
                    },
                ],  
                code: {
                    answer: "OPAL",
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
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.5b",
                        "L.4.6",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                    ],
                }
            },

            intro: {
                character: "Sir Eggbert",
                asset: "sir-eggbert.png",
                dialogue : {
                    incomplete: "Two of my knights have written escape plans, each with its own risks. This is not an easy choice \u2014 if we must flee, we must do so wisely. Please read both and share your thoughts.",
                    complete: "Thank you, Dingo Punks. I will consider your thoughts with care."
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
                                    text:   "Escape Plan #1<br>By Sir Enzo<br><br>The best way out of Eggworld is through the Tangled Woods. It\'s dark and twisty, but the forest is a friend that will protect us. Yes, it will take a long time, but we can sneak away safely. A careful, silent escape beats being scrambled by a dangerous crowd.<br><br>After all, slow and steady wins the race."
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
                                    text:   "Escape Plan #2<br>By Sir Flip<br><br>No more hiding in the forest; that prison will only bring us doom! No, we need to run right  through the town square. It\'ll be wild, with eggs cracking left and right, but speed is what matters most. The faster we go, the sooner we'll be safe, even if it\'s [<u>as risky as flipping a hot pancake with our bare hands.]<br><br>So let\'s move \u2014 and hey, break a leg!"
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
                        'B. Find the underlined phrase in Escape Plan #2. What type of figurative language is this?',
                        'C. Which author uses an idiom to wish the reader good luck: Sir [<u>Enzo] or Sir [<u>Flip]?',     
                        'D. [<u>True] or [<u>false]: Sir Enzo uses an adage to support his claim that a careful escape is the right plan.',                    
                    ],
                    puzzle: [
                        ["(A)P","3R","I","(B)S","O","N","0"],
                        ["0","0","0","2I","0","0","0"],
                        ["0","0","0","M","0","0","0"],
                        ["0","(C)F","L","I","P","0","0"],
                        ["0","0","0","L","0","0","0"],
                        ["(D)1T","R","U","4E","0","0","0"],
                    ]
                },  
                code: {
                    answer: "TIRE",
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
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                    ],
                }
            },

            intro: {
                character: "Shelly, Sunny, and Yoko",
                asset: "shelly-sunny-and-yoko.png",
                dialogue : {
                    incomplete: "Me, Shelly, and Yoko know there\'s a secret tunnel to escape Eggworld, but we can't agree on where it is. We need your opinion, right now! What do you say?",
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
                                    text: "Uh... the tunnel? Well, I think it\'s somewhere near the old [<u>sapling] shop. You know, the store with all those young trees. Or wait… was it by the burger restaurant? Anyway, just look for something big and round, because tunnels are round, right? Hope that helps!",
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
                                    text: "WOW! Okay, listen up! The tunnel is DEFINITELY behind Eggbert\'s [<u>monument]: that big statue in the park. Just pour a little water at its feet, and POOF! A secret door appears. Really, it\'s all about [<u>geology]. The ground here is full of caves and cracks!",
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
                                    text: "Oh yeah, the tunnel. It\'s somewhere. Maybe near the sapling shop? Or was it behind that ugly statue in the park? Whatever. Shelly and Sunny can figure it out, they\'re [<u>fearless] when it comes to weird stuff like this. I'd rather not take the chance.",
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
                        title: "[<g>1.] A \"sapling\" is a:",
                        correctIndex: 1,
                        paragraph: [
                            "{S}tore",
                            "Young {t}ree",
                            "Bur{g}er",
                        ],
                    },
                    {
                        title: "[<g>2.] If \"geo\" means [<i>ground] or [<i>land], \"geology\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "A huge cav{e}",
                            "The {s}tudy of lakes and oceans",
                            "The study of {r}ocks, soil, and land",
                        ],
                    },
                    {
                        title: "[<g>3.] Which word is a synonym of \"monument?\"",
                        correctIndex: 2,
                        paragraph: [
                            "Pa{r}k",
                            "B{i}g",
                            "Statu{e}",
                        ],
                    },
                    {
                        title: "[<g>4.] What does \"fearless\" mean?",
                        correctIndex: 0,
                        paragraph: [
                            "Without f{e}ar",
                            "Extremel{y} scared",
                            "We{i}rd",
                        ],
                    },
                ],  
                code: {
                    answer: "TREE",
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
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.5",
                        "RL.4.6",
                        "RL.4.10",
                    ],
                }
            },

            intro: {
                character: "E.V.A.",
                asset: "eva.png",
                dialogue : {
                    incomplete: "Eggworld\'s end is near, and I need your help. The frying pan didn\'t appear randomly \u2014 I found two notes with different claims. Will you read them both and help me figure out the truth?",
                    complete: "That settles it! The story of Eggworld ends today, but what comes next is a new beginning."
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
                                    text: 'Feud',
                                },
                                subtitle: {
                                    text: "By Eggerton, President of Eggworld",
                                },
                                passage: {
                                    text:   "[<tal>Eggworld and Fryworld sat side by side,<br>\
                                    but never were friends, just full of pride.<br>\
                                    They argued, shouted, and fought for years,<br>\
                                    too stubborn to face their biggest fears.<br>\
                                    <br>\
                                    So Fryworld, with one last plan,<br>\
                                    built and sent a giant pan.<br>\
                                    Too late to talk, too late to fix \u2014<br>\
                                    Eggworld will soon be scrambled to bits!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Fool',
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
                                    But the wind had other plans: it stole my creation!<br>\
                                    And now it falls, heavy with my mistake.<br>\
                                    <br>\
                                    Fryworld is not to blame. I am. The fool."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "9%",
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
                                translateY: "4%",
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
                        title: "[<g>1.] Which poem does not have any rhyme scheme?",
                        word: "FOO[L]",
                    },
                    {
                        title: "[<g>2.] [<u>True] or [<u>false]: line 4 of \"Feud\" has eight syllables.",
                        word: "F[A]LSE",
                    },
                    {
                        title: "[<g>3.] \"Fool\" is written from a ___ person perspective.",
                        word: "FIRS[T]",
                    },
                    {
                        title: "[<g>4.] Which poet blames Fryworld for sending the pan?",
                        word: "EGG[E]RTON",
                    },
                ],
                code: {
                    answer: "LATE",
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
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.10",
                    ],
                }
            },

            intro: {
                character: "Cornelius Rabbit",
                asset: "cornelius-rabbit.png",
                dialogue : {
                    incomplete: "I just finished writing down everything that happened at the last Eggworld town hall meeting. It\'s an important story, and we can\'t forget anything! Want to read about it?",
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
                                    text: 'Eggs Don\'t Fly',
                                },
                                subtitle: {
                                    text: "Written by Cornelius Rabbit",
                                },
                                passage: {
                                    text:   "Poppy Eggwhite always wanted to fly, but eggs don't fly. Everyone knew that. However, in her messy workshop on the edge of Eggworld, she quietly built a flying machine from scraps, springs, and bicycle parts. But deep down, she was afraid. \
                                    <br>\
                                    When Poppy showed the machine to her fellow eggs at Eggworld\'s town hall meeting, her hands shook. She tried to speak, but couldn\'t get any words out. Nervous and full of doubt, she sat back down.\
                                    <br>\
                                    Then, disaster struck: a giant frying pan appeared in the sky, falling toward Eggworld! Poppy was afraid, but doing nothing wasn\'t an option. She jumped into her flying machine, started the engine, and took off into the sky. One by one, she rescued her neighbors, flying them to safety.\
                                    <br>\
                                    When the last egg was safe, Poppy stood tall. She had proven that eggs really could fly! As she dusted off her jacket, she realized that being brave means trying \u2014 even when you\'re scared."
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
                        title: "[<g>1.] This whole story takes place in _____ .",
                        correctIndex: 2,
                        paragraph: [
                            "The tow{n} hall",
                            "Poppy\'s worksh{o}p",
                            "Eggwor{l}d",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: the last sentence of the fourth paragraph states the theme of this story.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] Poppy rescued all her neighbors, even though:",
                        correctIndex: 1,
                        paragraph: [
                            "The eg{g}s at town hall laughed at her",
                            "She was still a{f}raid",
                            "Her flying machin{e} was broken",
                        ],
                    },
                    {
                        title: "[<g>4.] Which statement describes Poppy\'s character?",
                        correctIndex: 0,
                        paragraph: [
                            "A nervous bu{t} clever dreamer",
                            "A {s}elfish and greedy inventor",
                            "A loud and fearless ris{k}-taker",
                        ],
                    },
                ],  
                code: {
                    answer: "LEFT",
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