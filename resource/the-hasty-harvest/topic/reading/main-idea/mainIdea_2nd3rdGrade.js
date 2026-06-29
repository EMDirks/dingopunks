const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "TIME TO SUNSET"
    },

    challengeArray: [

        // ⭐ Candlewick's Cart

        {

            info: {
                type: 'challenge',
                title: "Candlewick's Cart",
                asset: "candlewicks-cart.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Welcome to my farm! I just got a box full of magic items, but I haven\'t had time to look through it. Can you help me find out what I have?",
                    complete: "Well done! These will come in handy. Now let\'s keep moving, okay?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "candlewicks-cart.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "4.png",
                                },
                            },
                            {
                                title: {
                                    text: "Magic Seed",
                                },
                                passage: {
                                    text: "This is a special seed that grows very fast. If you plant it at night, it will be a full-grown apple tree by morning! It grows faster than any other plant on the farm.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "2%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "5.png",
                                },
                            },
                            {
                                title: {
                                    text: "Magic Pumpkin",
                                },
                                passage: {
                                    text: "The Magic Pumpkin is not like other pumpkins. [<sal>It grows VERY big.] It starts out small, but it never stops growing. In a few months, it can be as big as a barn!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
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
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        }
                    },                   
                    contentArray: [
                        {
                            dimension: {
                                width: "percent20",
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
                                width: "percent75",
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
                        title: "[<g>1.] What is \"Magic Seed\" all about?",
                        correctIndex: 1,
                        paragraph: [
                            "A rare seed {t}hat grants wishes",
                            "A {s}pecial seed that grows very fast",
                            "A small seed that grows slowl{y}",
                        ],
                    },
                    {
                        title: "[<g>2.] Read the first sentence of \"Magic Seed.\" Does it tell you what the passage is all about?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the main idea of \"Magic Pumpkin\" ?",
                        correctIndex: 2,
                        paragraph: [
                            "The Magic Pumpkin {t}astes sweet",
                            "The Ma{g}ic Pumpkin glows in the dark",
                            "The Magic Pumpki{n} grows very big",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the red text in \"Magic Pumpkin\" tells you the main idea.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{T}rue",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "SENT",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Applegrim Orchard

        {

            info: {
                type: 'challenge',
                title: 'Applegrim Orchard',
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Advice for Fall\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "Hello, hello! Oh, what a day! I have so many things to say. No one listens, and it\'s not fair. Will you stay for a while? I have much to share!",
                    complete: "My words have found a home at last! Now off you go... and please go fast!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "applegrim-orchard.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Advice for Fall',
                                },
                                subtitle: {
                                    text: "By Stefan Sage",
                                },
                                passage: {
                                    text:   "&nbsp; &nbsp; Fall is special because it does not last. Allow me to explain. First, the leaves turn red and then fall off the trees. [<blu>Second, the crops grow big and beautiful, and then they get picked.] Third, the cool air gets colder every day, until it\'s too cold to go outside."
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
                            width: "percent55",
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
                        title: "[<g>1.] What\'s the main idea of this passage?",
                        correctIndex: 0,
                        paragraph: [
                            "{F}all is special because it does not last",
                            "Crops gro{w} big in the fall",
                            "Fall is {a} good time to pick pumpkins",
                        ],
                    },
                    {
                        title: "[<g>2.] Does the quote \"the leaves turn red and then fall off the trees\" support the main idea?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the blue sentence?",
                        correctIndex: 1,
                        paragraph: [
                            "T{h}e main idea",
                            "A key detai{l}",
                            "{A} poem",
                        ],
                    },
                    {
                        title: "[<g>4.] How many key details are in \"Advice for Fall\" ?",
                        correctIndex: 2,
                        paragraph: [
                            "One key de{t}ail",
                            "Two key {d}etails",
                            "Three key detai{l}s",
                        ],
                    },
                ],  
                code: {
                    answer: "FELL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Camp Gnomad

        {

            info: {
                type: 'challenge',
                title: "Camp Gnomad",
                asset: "camp-gnomad.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Details of Multiple Texts",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "The Fallcrawlers are coming and we don\'t have time to run! We need to hide somewhere on the farm. Can you help us figure out where?",
                    complete: "Good! Now stay low and don\'t make a sound. They\'re closer than you think."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "camp-gnomad.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Where to Hide',
                                },
                                subtitle: {
                                    text: 'By Gnomad Gerald',
                                },
                                passage: {
                                    text:   "There are two good hiding places on this farm. The cornfields are tall and thick, which makes them easy to hide in. And the old shed near the gate has a dark corner that nobody ever checks."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Fallcrawlers',
                                },
                                subtitle: {
                                    text: 'By Gnomad Gena',
                                },
                                passage: {
                                    text:   "[<tal>The Fallcrawlers are quite a fright.\
                                    <br>\
                                    They only come out in the darkest night.\
                                    <br>\
                                    They drool and they creep.\
                                    <br>\
                                    They moan and they weep.\
                                    <br>\
                                    And they always stay just out of sight.]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "5%",
                                rotate: "4deg",
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
                        'A. [<u>True] or [<u>false]: the first sentence of \"Where to Hide\" states the main idea.',
                        'B. Does \"Where to Hide\" have [<u>one], [<u>two], or [<u>three] supporting details?',
                        'C. [<u>Right] or [<u>wrong]: [<i>the Fallcrawlers make creepy sounds] is the main idea of the poem.',     
                        'D. Read \"The Fallcrawlers.\" Does the [<u>first], [<u>third], or [<u>fourth] line state the main idea?',                    
                    ],
                    puzzle: [
                        ["0","0","(C)W","0","0","0","0"],
                        ["(D)F","3I","1R","S","(B)T","0","0"],
                        ["0","0","O","0","W","0","(A)T"],
                        ["0","0","4N","0","O","0","R"],
                        ["0","0","G","0","0","0","2U"],
                        ["0","0","0","0","0","0","E"],
                    ]
                },  
                code: {
                    answer: "RUIN",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ Mallow Maze

        {

            info: {
                type: 'challenge',
                title: "Mallow Maze",
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Read \"Night of the Goblins\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Details of a Story",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I have a story to deliver to the farm! Someone said it might help. Can you read it first and make sure it all makes sense?",
                    complete: "Great! I just really hope Fallcrawlers don\'t eat marshmallows. Wish me luck!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "mallow-maze.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Night of the Goblins",
                                },
                                passage: {
                                    text: "The Watcher was a magical scarecrow that protected the village. It had glowing eyes and could control the wind. Even goblins were afraid of it.\
                                    <br>\
                                    One night, a group of goblins crept toward the village crops. They wanted to eat everything. [<sal>Goblins are very hungry creatures, after all.]\
                                    <br>\
                                    But the Watcher was ready to fight. [<blu>It called up a huge gust of wind, which swept through the fields and blew the goblins away.]\
                                    <br>\
                                    The next morning, the villagers woke up and cheered. Their crops were safe! They cleaned up the Watcher and fixed its torn clothing to say thank you. The Watcher had done its job."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
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
                        title: "[<g>1.] What is the main idea of \"Night of the Goblins\" ?",
                        correctIndex: 1,
                        paragraph: [
                            "Goblins co{m}e out at night",
                            "The Watcher protect{e}d the village",
                            "The Watcher has g{l}owing eyes",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail supports the main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "\"the Watcher was read{y} to fight\"",
                            "\"the villagers w{o}ke up\"",
                            "\"goblins are very hungry creatur{e}s\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Read the red sentence and the blue sentence. Which one is a supporting detail?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "The red {s}entence",
                            "The blue s{e}ntence",
                        ],
                    },
                    {
                        title: "[<g>4.] Why did the villagers clean the Watcher?",
                        correctIndex: 0,
                        paragraph: [
                            "To show their thank{s}",
                            "Because they were {b}ored",
                            "Beca{u}se the Watcher was covered in rust",
                        ],
                    },
                ],  
                code: {
                    answer: "EYES",
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


  