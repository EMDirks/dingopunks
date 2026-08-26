const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/reading/main-idea/preview-4th-5th-grade.png",
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
                    text: "Read each paragraph, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Ideas and Supporting Details of Paragraphs",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.2',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.2',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4b',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Literature',
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Welcome to the farm! It's getting dark fast. I'm sorting through a bunch of old supplies, and I need help identifying some of the things I found. Got a few minutes?",
                    complete: "Just a heads up, you might want to stay away from the Frantic Factory at night..."
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
                                    text: "[<u>Harvest Pip]",
                                },
                                passage: {
                                    text: "The Harvest Pip is a magical apple seed, so try to keep it away from squirrels. Legend says, if you plant it during the autumn season, it will sprout into a fully-grown tree by morning. Not only that, but the tree's apples can grant wishes to anyone who takes a bite. Sounds like a great idea for a pie!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "5.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Summer Pumpkin]",
                                },
                                passage: {
                                    text: "As fall nears and the air gets cold, it's important to protect your crops. Say hello to Summer Pumpkins! Place one of these special fruits anywhere in your field to spread summer warmth, protecting your precious harvest from freezing overnight.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "-4%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "6.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Everflame Flannel]",
                                },
                                passage: {
                                    text: "There are many tasks to be done at harvest time. Not only will this flannel keep you warm while doing them, but it can also teleport you anywhere on Candlewick's Farm. It can take you to the barn, the farmhouse, or even the cornfields! Just remember, though \u2014 you can only use it on the farm.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "1%",
                                rotate: "-1deg",
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
                                size: 'small',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
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
                        title: "[<g>1.] What's the main idea of the Harvest Pip?",
                        correctIndex: 1,
                        paragraph: [
                            "The {H}arvest Pip must be planted in autumn",
                            "The Harvest Pip is a magi{c}al apple seed ",
                            "The Harvest Pip sparkle{s} during fall",
                        ],
                    },

                    {
                        title: "[<g>2.] What's the main idea of the Summer Pumpkin?",
                        correctIndex: 0,
                        paragraph: [
                            "The Summe{r} Pumpkin protects crops",
                            "The air g{e}ts cold in the fall",
                            "The Summer Pumpkin can gl{o}w in the dark ",
                        ]
                    },

                    {
                        title: "[<g>3.] What's the main idea of the Everflame Flannel?",
                        correctIndex: 2,
                        paragraph: [
                            "During autumn, it's chill{y} on the farm",
                            "Autum{n} is a busy time of year",
                            "The Everflame Flannel allows you to telep{o}rt",  
                        ]
                    },

                    {
                        title: "[<g>4.] What's a supporting detail for the Harvest Pip?",
                        correctIndex: 1,
                        paragraph: [
                            '\"...so keep it away from squirr{e}ls.\"',
                            '\"...the tree\'s ap{p}les can grant wishes...\"',
                            '\"Sounds like a great i{d}ea for a pie!\"',
                        ]
                    },

                ],  

                code: {
                    answer: "CROP",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ Applegrim Orchard
        {

            info: {
                type: 'challenge',
                title: "Applegrim Orchard",
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details of a Poem",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4b',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.2',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Literature',
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "Oh, visitors? Hello, hello! I have so much advice to share, but so few friends to share it with. Would you care to listen to a poem of mine? Its wisdom might just help you on your quest.",
                    complete: "Beware the restless roots beneath Applegrim's cursed soil."
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
                                    text: 'The Feeling of Fall',
                                },
                                subtitle: {
                                    text: "By Stefan Sage",
                                },
                                passage: {
                                    text:   "Gold and red, you can\'t complain.<br> \
                                            Fall's visit is short, but it's here again!<br> \
                                            Pumpkins glow in fields so bright,<br> \
                                            crisp air whispers, but soon takes flight.<br> \
                                            <br> \
                                            Apples, cherries, all so sweet \u2014<br> \
                                            pick this fruit before fall is complete!<br> \
                                            Bonfires crackle, warm and high,<br> \
                                            as stars light up the autumn sky.<br> \
                                            <br> \
                                            Sing, laugh, dance, and cheer!<br> \
                                            Embrace these moments, fleeting and dear,<br> \
                                            for autumn's beauty is unique each year."
                                     }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "0%",
                                rotate: "-1deg",
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
                            width: "auto",
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
                        title: "[<g>1.] What is the central idea of this poem?",
                        correctIndex: 1,
                        paragraph: [
                            "The importance of prep{a}ring for winter",
                            "To appreciate the beauty of fall w{h}ile it lasts",
                            "{P}icking fruit is an important part of autumn",
                        ],
                    },

                    {
                        title: "[<g>2.] Supporting detail #1:",
                        correctIndex: 1,
                        paragraph: [
                            '\"Gold and re{d}, you can\'t complain.\"',
                            '\"Fall\'s visit is short, b{u}t it\'s here again!\"',
                            '\"Pumpkins glow in fields so brigh{t}...\"',
                        ]
                    },

                    {
                        title: "[<g>3.] Supporting detail #2:",
                        correctIndex: 0,
                        paragraph: [
                            '\"...crisp air whispers, but soon tak{e}s flight.\"',
                            '\"Bonfires cr{a}ckle, warm and high...\"',
                            '\"As stars light up the a{u}tumn sky.\"',
                        ]
                    },

                    {
                        title: "[<g>4.] Supporting detail #3:",
                        correctIndex: 2,
                        paragraph: [
                            '\"Sing, {l}augh, dance, and cheer!\"',
                            '\"Apples, cherri{e}s, all so sweet...\"',
                            '\"...pick this fruit before fall i{s} complete!\"',  
                        ]
                    },

                ],  

                code: {
                    answer: "HUES",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ Frantic Factory
        {

            info: {
                type: 'challenge',
                title: "Frantic Factory",
                asset: "frantic-factory.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then type in the answers to each question. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details of an Informational Text",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.2',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.2',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Literature',
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Greetings. I am Hollow Jack. I package up products. Then I label them. But this label? Too long. Too boring. No time to read! You will read it for me. Understand?",
                    complete: "Leave now. Leave now. Leave now. Leave now. LEAVE! NOW!"
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
                            text: "Label #926",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Costumes are a fun and spooky part of Halloween that evolved from ancient traditions. The tale goes something like this: thousands of years ago, during the festival of Samhain, the Celtic people wore disguises to scare off evil spirits. Over time, these simple outfits evolved into elaborate costumes of many different characters and creatures. This tradition was brought to America by Irish immigrants, where it blended with local customs to become an important part of every Halloween celebration. Today, modern Halloween costumes come in a wide variety of styles, inspiring people to be creative and express their unique interests.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "-9%",
                                rotate: "-1deg",
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
                                translateX: "-6%",
                                translateY: "9%",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
                        },
                        dimension: {
                            width: "percent70",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
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
                            dimension: {
                                width: "full",
                                height: "full",
                            }
                            
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
                        title: "[<g>1.] What is the topic of Label #926?",
                        word: "COS[T]UMES",
                    },
                    {
                        title: "[<g>2.] Main idea: costumes evolved from ___ traditions.",
                        word: "[A]NCIENT",
                    },
                    {
                        title: "[<g>3.] What group of people started this tradition?",
                        word: "CE[L]TIC",
                    },
                    {
                        title: "[<g>4.] What do modern costumes inspire people to be?",
                        word: "CREATIV[E]",
                    },
                ],

                code: {
                    answer: "TALE",
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
                    text: "Read the short story, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details of a Short Story",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.2',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [4],
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.2',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            grade: [5],
                            category: 'Reading: Literature',
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "You know what might scare those Fallcrawlers away? A scarecrow! I have a story about one that I need to deliver to the farm. Can you read it and tell me what you think?",
                    complete: "Just so you're aware, I'm not afraid of ghouls or anything..."
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
                                    text: 'Night of the Creeping Ghouls',
                                },
                                passage: {
                                    text:   "In a field outside the village of Eldergrove stood the Watcher, a magical scarecrow summoned from the spirit of the first pumpkin ever grown. But the Watcher wasn't a normal scarecrow; it had the power to control wind and protect the village, its watchful eyes shining like fiery coals in the dark. Not even goblins dared to steal a single carrot. \
                                    <br> \
                                    On the first day of autumn, a dark chill spread across Eldergrove. Fearless ghouls, envious of the village's plentiful harvest, crept towards the ripe crops. They moved in silence, intending to poison the fields and send the village into a winter of starvation. \
                                    <br> \
                                    But the Watcher was always alert. Feeling the presence of evil, it sprang to life! With burning eyes and a commanding wave, it called up a fierce wind. A mighty gust roared through the fields, sweeping the ghouls away. Howling in terror, they fled into the forest. \
                                    <br> \
                                    The next morning, peace had returned to Eldergrove. The villagers gathered around the Watcher, grateful that their fields remained lush and green. To show their appreciation, the villagers carefully cleaned their protector and fixed its torn clothing. They even gave it a new flannel shirt. \
                                    <br> \
                                    The Watcher stood silent once more, its duty fulfilled. Tales of that night became legend, recounted by elders to wide-eyed children. Some say that on the darkest of nights, the Watcher's eyes still glow, ever-watching."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
                                rotate: "1deg",
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
                            width: "percent90",
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
                        title: "[<g>1.] What is the main idea of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "The {W}atcher was summoned from a pumpkin",
                            "The Watcher protected El{d}ergrove",
                            "The ghou{l}s were fearless",
                        ],
                    },

                    {
                        title: "[<g>2.] What detail supports this main idea?",
                        correctIndex: 2,
                        paragraph: [
                            '\"The villagers ga{t}hered around...\"',
                            '\"...a da{r}k chill spread across Eldergrove.\"',
                            '\"Feeling the presence of evil, it spr{a}ng to life!\"',
                        ]
                    },

                    {
                        title: "[<g>3.] What's another supporting detail?",
                        correctIndex: 1,
                        paragraph: [
                            '\"On the first {d}ay of autumn...\"',
                            '\"Not even goblins da{r}ed to steal a single carrot.\"',
                            '\"They even gave it a new flann{e}l shirt.\"',
                        ]
                    },

                    {
                        title: "[<g>4.] Why did the villagers clean up the Watcher?",
                        correctIndex: 0,
                        paragraph: [
                            'To show their than{k}s for its protection',
                            'Because its torn clothing wa{s} unattractive',
                            'Because t{h}ey had nothing better to do',  
                        ]
                    },

                ],  

                code: {
                    answer: "DARK",
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


  