const resource = {

    info: {
        title: "Pickle's Playground",
        path: "pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/making-inferences/thumbnail-4th-5th-grade.png",
        timerLabel: "PICKLE ARRIVES"
    },

    challengeArray: [

        // ⭐ swing set
        {

            info: {
                type: 'challenge',
                title: 'Swing Set',
                asset: "merriwig.png",
                state: "incomplete",
                hint: {
                    text: "Read the story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Fictional Story",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
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
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Oh… hello there. Pickle left another note by the swing set again. He\'s always scribbling weird little stories. I don\'t feel like reading it today, though. Perhaps you can do it for me?",
                    complete: "Thanks, dear. Pickle always writes about peanut butter. Every single time..."
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
                                    text: 'Cornelius and the Peanut Butter World',
                                },
                                subtitle: {
                                    text: "By Pickle",
                                },
                                passage: {
                                    text:   "Cornelius was a worm with a big name and a big dream. He wanted to live in a world made only of peanut butter. He dreamed of peanut butter trees, peanut butter clouds, and peanut butter rain.\
                                    <br>\
                                    It all came true when he saw a giant jar of unopened peanut butter sitting by the trash. Without thinking twice, he wiggled inside and shouted, \"Finally! Home sweet home!\" At first, it was perfect.\
                                    <br>\
                                    But the peanut butter was thick, and the walls felt sticky and heavy. It stuck to Cornelius like glue, making it hard to move even an inch. He said to himself, \"Maybe this wasn\'t such a bright idea.\" Then he rested a bit, right in the middle of his peanut butter world, thinking of fresh air and dirt."
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
                            material: 'paper',
                            padding: "double"
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
                        title: "[<g>1.] What does Cornelius\'s dream show about him?",
                        correctIndex: 0,
                        paragraph: [
                            "{H}e\'s foolish and has a big imagination",
                            "He hates {b}eing a worm",
                            "He\'s jealous of people with short{e}r names ",
                        ],
                    },
                    {
                        title: "[<g>2.] We can infer the idiom \"a bright idea\" means:",
                        correctIndex: 1,
                        paragraph: [
                            "A diffic{u}lt challenge",
                            "A go{o}d plan",
                            "A confusing {g}oal",
                        ],
                    },
                    {
                        title: "[<g>3.] Why did Cornelius rest instead of escaping?",
                        correctIndex: 1,
                        paragraph: [
                            "The sticky peanut butte{r} felt good",
                            "Moving in the thick peanut butter tired hi{m} out",
                            "He was too col{d} and wanted to warm up",
                        ],
                    },
                    {
                        title: "[<g>4.] Why was he \"thinking of fresh air and dirt\"?",
                        correctIndex: 2,
                        paragraph: [
                            "He got bore{d} of the peanut butter",
                            "He wanted to see {h}is friends again",
                            "H{e} realized he liked the outside better",
                        ],
                    },
                ],  
                code: {
                    answer: "HOME",
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
                    text: "Sort the steps into the correct sequence, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Nonfiction Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.8",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Banana Gunk Jr.",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "I thought my \"Dance Mode\" manual was lost for good, but I just found it this morning! Only problem is... it\'s been torn into three pieces. Think you can sort them into the right order?",
                    complete: "Hmmm... Is it just me, or did those manual scraps smell kind of like peanut butter?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Sort the Steps in Order:",
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
                                title: {
                                    text: "Step [<s>C]"
                                },
                                passage: {
                                    text: "First, press and hold the green button on your chest. If the light blinks twice, it means your battery has enough charge to enter Dance Mode.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    }, 
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Step [<s>L]"
                                },
                                passage: {
                                    text: "Next, tap your toes. Make sure to do it with both feet! It helps your rhythm sensors warm up, so you don\'t lose the beat once the music starts.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    }, 
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Step [<s>D]"
                                },
                                passage: {
                                    text: "Finally, shout \"Dance Mode: Go!\" As long as there\'s music playing, you\'ll automatically start dancing to the beat.",
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
                        title: "[<g>1.] What is the correct order to do these steps?",
                        correctIndex: 2,
                        paragraph: [
                            "Ste{p} [<s>L], Step [<s>D], Step [<s>C]",
                            "Step [<s>C], St{e}p [<s>D], Step [<s>L]",
                            "Step [<s>C], Step [<s>L], {S}tep [<s>D]",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these words lets you know that \"Step [<s>D]\" is the last step?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "\"Finall{y}\"",
                            "\"R{a}ise\"",
                            "\"Sho{u}t\"",
                            "\"{M}usic\"",
                        ],
                    },
                    {
                        title: "[<g>3.] If the light blinks just once, does the battery have enough charge to enter Dance Mode?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Ye{s}",
                            "{N}o",
                        ],
                    },
                    {
                        title: "[<g>4.] What might happen if \"Step [<s>L]\" is skipped? ",
                        correctIndex: 2,
                        paragraph: [
                            "You might tota{l}ly fall apart",
                            "You mi{g}ht catch on fire",
                            "You might dan{c}e out of rhythm",
                        ],
                    },
                ],  
                code: {
                    answer: "SYNC",
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
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Related Texts",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.6",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
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
                character: "Twisted Tori",
                asset: "twisted-tori.png",
                dialogue : {
                    incomplete: "I got some notes from Pickle and Banana Gunk Jr., and now I don\'t know who to believe! Pickle\'s being all friendly, but Banana says he\'s trouble. Wanna help me figure out who\'s telling the truth?",
                    complete: "Thanks for the help. I still don\'t trust either of them, but at least now I\'ve got the facts."
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
                                    text: 'Why I Make a Good Friend',
                                },
                                subtitle: {
                                    text: 'by Pickle',
                                },
                                passage: {
                                    text:   "[<tal>I can spot a puddle from fifty feet away,\
                                    <br>\
                                    and I know which ones are best for splashing.\
                                    <br>\
                                    <br>\
                                    I always try to fix things,\
                                    <br>\
                                    even if I don\'t know how.\
                                    <br>\
                                    <br>\
                                    I can eat four jars of peanut butter \u2014\
                                    <br>\
                                    in ONE minute!\
                                    <br>\
                                    <br>\
                                    And I love to laugh,\
                                    <br>\
                                    usually at the right time.]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "15%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Twisted Tori,\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp Something\'s not right with Pickle. He keeps smiling, but it\'s the kind of smile that hides things. He told everyone my instruction manual \"blew away,\" but I know he tore it up. When I found the scraps, they smelled like peanut butter! Tell me, Tori, who else smells like peanut butter around here?\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp And remember when he \"fixed\" your slide? Now it tilts sideways and shakes in the wind, like it\'s going to collapse. That\'s not safe at all!\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp Anyway, I think he\'s up to no good. I can never tell what\'s going on in his brain, so just be careful.\
                                    <br>\
                                    <br>\
                                    Your friend,\
                                    <br>\
                                    Banana Gunk Jr."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "-2deg",
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
                                size: 'mediumSmall',
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
                        title: "[<g>1.] Which character smells like peanut butter?",
                        correctIndex: 0,
                        paragraph: [
                            "{P}ickle",
                            "T{w}isted Tori",
                            "Banana Gu{n}k Jr.",
                        ],
                    },
                    {
                        title: "[<g>2.] Which two lines from Pickle\'s poem connect to Banana Gunk Jr.\'s story about the broken slide?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Lin{e}s 1 and 2",
                            "Lines 3 {a}nd 4",
                            "Line{s} 5 and 6",
                            "{L}ines 7 and 8",
                        ],
                    },
                    {
                        title: "[<g>3.] How does Pickle see himself?",
                        correctIndex: 2,
                        paragraph: [
                            "Pickle thinks he\'s a teacher, not a {f}riend",
                            "Pickle thinks he\'s shy and b{a}d at everything",
                            "Pick{l}e thinks he\'s fun, helpful, and impressive",
                        ],
                    },
                    {
                        title: "[<g>4.] How does Banana Gunk Jr. feel about Pickle?",
                        correctIndex: 0,
                        paragraph: [
                            "He thinks Pickle is {s}neaky and untrustworthy",
                            "He t{h}inks Pickle is just misunderstood",
                            "He thinks Pickle is clumsy, but not dan{g}erous",
                        ],
                    },
                ],  
                code: {
                    answer: "PALS",
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
                    text: "Read each riddle, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Solving Riddles",
                    commonCore: [
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.4a",
                        "L.4.5",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.10",
                        "L.5.4a",
                        "L.5.5",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "King Kevin",
                asset: "king-kevin.png",
                dialogue : {
                    incomplete: "That pesky Pickle has cluttered my royal halls with riddles again! I am far too important to waste my time on such foolish scribbles. You there, read them for me at once! Honk! ",
                    complete: "At last, some peace and quiet. Now be gone before you get mud on my marble floors!"
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
                                title: {
                                    text: 'Riddle One',
                                },
                                passage: {
                                    text:   "I\'m full of air but light as fluff.\
                                    <br>\
                                    I float until I\'ve had enough.\
                                    <br>\
                                    When I\'m here, I\'m bright and clean,\
                                    <br>\
                                    then POP! I vanish. What a scene!\
                                    <br>\
                                    <br>\
                                    What am I?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Riddle Two',
                                },
                                passage: {
                                    text:   "I\'m pale and round, and sleep in the day.\
                                    <br>\
                                    I only wake up when stars come to play.\
                                    <br>\
                                    <br>\
                                    What am I?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Riddle Three',
                                },
                                passage: {
                                    text:   "I spin my web, then crawl on the floor,\
                                    <br>\
                                    with eight little feet, and not one more.\
                                    <br>\
                                    <br>\
                                    What am I?"
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
                                    text: 'Riddle Four',
                                },
                                passage: {
                                    text:   "I\'m made of glass. I keep out rain.\
                                    <br>\
                                    I keep you dry again, again!\
                                    <br>\
                                    But if I break, don\'t stand too near.\
                                    <br>\
                                    I\'ll need a fix, that\'s crystal clear.\
                                    <br>\
                                    <br>\
                                    What am I?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
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
                            padding: "default"
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
                            title: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
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
                        'A. Is the answer to \"Riddle Four\" a [<u>window] or a [<u>shingle]?',
                        'B. Is [<i>the Moon] the answer to \"Riddle [<u>One]\" or \"Riddle [<u>Two]\"? ',
                        'C. The answer to \"Riddle ___ \" is [<i>a bubble].',     
                        'D. What is the answer to \"Riddle Three\"?',                    
                    ],
                    puzzle: [
                        ["0","0","(D)S","0","0","0","0"],
                        ["0","0","P","0","0","0","(B)T"],
                        ["0","(A)1W","I","N","4D","O","W"],
                        ["0","0","D","0","0","0","2O"],
                        ["(C)O","N","E","0","0","0","0"],
                        ["0","0","3R","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "WORD",
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