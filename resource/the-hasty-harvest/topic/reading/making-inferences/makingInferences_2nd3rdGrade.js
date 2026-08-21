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
                    text: "Read the passage and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Fiction",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RL.2.1",
                        "RL.2.3",
                        "RL.2.5",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Howdy! There\'s one huge turnip I\'ve never been able to pick. We even have an old legend about it. Give it a read and see what you can learn!",
                    complete: "Thank you kindly! Let\'s leave that turnip right where it is... and maybe give it some space."
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
                                title: {
                                    text: 'The Turnip that Kept Growing',
                                },
                                passage: {
                                    text:   "<br>Craig always had a big harvest. He grew pumpkins, carrots, and turnips. But one turnip gave him trouble. No matter what he did, it would not come out of the ground.\
                                    <br>\
                                    So, Craig just left it there. Time went by, and the turnip got bigger and bigger. At night, the ground made a deep sound, like a stomach rumbling.\
                                    <br>\
                                    Years later, the turnip was still there. Children slid down its sides, and a scarecrow stood nearby. But one morning, the scarecrow was gone! Only a few bits of straw were left, leading to a dark hole under the turnip."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-2%",
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
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left',
                                brSplit: 'default',
                                indent: 'default',
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
                        title: "[<g>1.] What is Craig\'s job?",
                        correctIndex: 1,
                        paragraph: [
                            "Doc{t}or",
                            "{F}armer",
                            "Teac{h}er",
                        ],
                    },
                    {
                        title: "[<g>2.] If children could slide down the turnip\'s sides, that means it had:",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Gr{o}wn huge",
                            "B{e}come mushy",
                        ],
                    },
                    {
                        title: "[<g>3.] The ground sounded \"like a stomach rumbling.\" This is a clue that the turnip was ___ .",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "H{u}ngry",
                            "De{a}d",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: in the end, the scarecrow was most likely stolen by a family of goblins.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "Fa{l}se",
                        ],
                    },
                ],  
                code: {
                    answer: "FOUL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ Frantic Factory

        {

            info: {
                type: 'challenge',
                title: 'Frantic Factory',
                asset: "frantic-factory.png",
                state: "incomplete",
                hint: {
                    text: "Read both tasks and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Nonfiction",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.1",
                        "RI.2.3",
                        "RI.2.6",
                        "RI.2.8",
                        "RI.2.9",
                        "RI.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.3",
                        "RI.3.8",
                        "RI.3.10"
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Must prepare new crops! Too much work to do. Too busy to read instructions. Read them. Tell me what they say. Thank you.",
                    complete: "Good. Message understood. I must return to work now. No time for talking. Goodbye."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "frantic-factory.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Task One",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "First, wash some cucumbers. Then, put them in salty water with vinegar and spices. Let them soak for six weeks. Finally, pack them into jars.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "-3%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Task Two",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "First, wash and peel full-size carrots. Then, cut them into small pieces. After that, use a machine to make them smooth and round. Finally, pack them into bags.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-9%",
                                translateY: "12%",
                                rotate: "2deg",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent55",
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
                                size: 'medium',
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
                        'A. Does \"Task One\" describe how to make [<u>pickles], [<u>oatmeal], or [<u>custard]?',
                        'B. [<u>True] or [<u>false]: \"Task Two\" shows how to make baby carrots.',
                        'C. Which task probably takes longer to finish: \"Task [<u>One]\" or \"Task [<u>Two]\"?',     
                        'D. [<u>Right] or [<u>wrong]: Both texts give step-by-step instructions.',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(C)O","0"],
                        ["0","(D)R","0","0","0","2N","0"],
                        ["(A)P","3I","C","K","L","E","S"],
                        ["0","G","0","0","0","0","0"],
                        ["0","H","0","0","0","0","0"],
                        ["0","(B)4T","R","1U","E","0","0"],
                    ]
                },  
                code: {
                    answer: "UNIT",
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
                    text: "Read the passage and look at the picture, then answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Visual",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.7",
                        "RL.2.1",
                        "RL.2.3",
                        "RL.2.7",
                        "RL.2.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.7",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.7",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "Oh, crumbs! I\'m trying to deliver this mail, but two of the pages got mixed up. I can\'t tell if they belong together. Can you help me figure it out?",
                    complete: "Thanks! Um... I think I might be lost in this maze again. But I\'ll be okay, right?"
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
                                passage: {
                                    text:   "Ahoy, Ms. Candlewick!\
                                    <br>\
                                    <br>\
                                    We stole these jars from another ship. They\'re packed with a chunky red mix of tomatoes and peppers. It\'s spicy, and mighty good with corn chips! I kept the jars with our treasure until we made it back to shore.\
                                    <br>\
                                    <br>\
                                    Yours truly,\
                                    <br>\
                                    Captain Fishbeard"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "10%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "hh25_1.png",
                                },
                            },
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
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left',
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
                        title: "[<g>1.] What food does the picture show?",
                        correctIndex: 2,
                        paragraph: [
                            "Pi{c}kles",
                            "{S}alsa",
                            "Strawberry {j}am",
                        ],
                    },
                    {
                        title: "[<g>2.] What food does the letter describe?",
                        correctIndex: 1,
                        paragraph: [
                            "Pickl{e}s",
                            "S{a}lsa",
                            "Strawber{r}y jam",
                        ],
                    },
                    {
                        title: "[<g>3.] We can infer that Captain Fishbeard is a ___ .",
                        correctIndex: 0,
                        paragraph: [
                            "Pi{r}ate",
                            "Ch{e}f",
                            "F{a}rmer",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the picture shows what the letter describes.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "JARS",
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
                    text: "Read the riddles and answer the questions to fill in the crossword. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
                    isUsed: false
                },
                education: {
                    topic: "Solving Riddles",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.2.4",
                        "RF.2.4a",
                        "RF.2.4b",
                        "RI.2.2",
                        "RI.2.6",
                        "RI.2.8",
                        "RI.2.10",
                        "RL.2.1",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RI.3.2",
                        "RI.3.10"
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "Four new riddles came my way... I\'ve been stuck on them all day. My roots are tired, my branches too. Now let\'s see what YOU can do.",
                    complete: "Thanks for knowing what to do. Come back again, I\'ll chat with you!"
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
                                    text: "Riddle One",
                                },
                                passage: {
                                    text: "I hoot at night\
                                    <br>\
                                    and have big eyes.\
                                    <br>\
                                    I sit in trees\
                                    <br>\
                                    from way up high.\
                                    <br>\
                                    What am I?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-10%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                                {
                                    title: {
                                        text: "Riddle Two",
                                    },
                                    passage: {
                                        text: "I\'m orange and round,\
                                        <br>\
                                        and grow on a vine.\
                                        <br>\
                                        You can make me into a pie.\
                                        <br>\
                                        What am I?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "2%",
                                rotate: "5deg",
                            }
                        }
                    },
                    {

                        contentArray: [
                            {
                                title: {
                                    text: "Riddle Three",
                                },
                                passage: {
                                    text: "I gobble and wobble\
                                    <br>\
                                    when I walk outside.\
                                    <br>\
                                    You might see me\
                                    <br>\
                                    at Thanksgiving time.\
                                    <br>\
                                    What am I?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-13%",
                                rotate: "-5deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Riddle Four",
                                },
                                passage: {
                                    text: "I was green,\
                                    <br>\
                                    but now I\'m red.\
                                    <br>\
                                    I fall from trees\
                                    <br>\
                                    when I\'m dead.\
                                    <br>\
                                    What am I?",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "10%",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'defaultNoBottom'
                        },
                        dimension: {
                            width: "percent35",
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'center',
                                padding: 'defaultNoBottom'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
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
                        'A. Is the answer to \"Riddle Three\" [<u>squash], [<u>napkin], or [<u>turkey]?',
                        'B. Read \"Riddle Four.\" Is [<u>leaf], [<u>dead], or [<u>wood] the answer?',
                        'C. Is [<i>owl] the answer to \"Riddle [<u>One]\" or \"Riddle [<u>Two]\" ?',     
                        'D. What is the answer to \"Riddle Two\" ?',                    
                    ],
                    puzzle: [
                        ["0","(A)T","0","0","0","0","(C)O"],
                        ["(D)P","U","M","1P","K","I","N"],
                        ["0","4R","0","0","0","0","2E"],
                        ["0","K","0","0","0","0","0"],
                        ["(B)L","E","3A","F","0","0","0"],
                        ["0","Y","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "PEAR",
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

  