const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/reading/story-elements/preview-4th-5th-grade.png",
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
                    text: "Read each passage, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Setting",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
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
                    incomplete: "It's getting dark fast! Would you mind reading about these two new candles I just received? Knowing their origins will help me greatly.",
                    complete: "Old Hollow Jack is starting to short-circuit. Best if you keep your distance, okay?"
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
                                    file: "2.png",
                                },
                            },
                            {
                                title: {
                                    text: '[<u>Lumina]',
                                },
                                passage: {
                                    text: "Outside a quiet village, Lumina sat half-buried in an old farmer's field. On the first night of fall, this mischievous candle flickered to life, enchanting the land around it. Crops uprooted themselves, then moved through the dewy fields to settle down in new spots. Lumina arranged these crops into strange formations, leaving the old farmer scratching his head in confusion.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-9%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "1.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: '[<u>Eternal Ember]',
                                },
                                passage: {
                                    text: "Deep within moss-covered ruins laid the Eternal Ember, a magical candle that paused time when lit. It remained forgotten until autumn, when it lured a hiker into its misty den. The second it was lit, everything around the hiker froze in place! Even the sounds of the wilderness stopped. The candle's flame reflected off the ruin's walls, revealing symbols written in a forgotten language.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "8%",
                                translateY: "5%",
                                rotate: "-3deg",
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
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        }
                    },
                    
                    contentArray: [
                        {
                            dimension: {
                                width: "percent13",
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
                                align: 'left',
                            },
                            dimension: {
                                width: "percent84",
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
                        'A. Setting typically refers to a story\'s environment, time, and _____ .',
                        'B. For \'Lumina,\' is "On the first night of fall..." part of the setting? (YES/NO)',
                        'C. Is the <em>place</em> for \'Eternal Ember\' the [<u>hiker], the [<u>ruins], or the [<u>flame]?',
                        'D. What is the <em>time</em> for \'Eternal Ember?\'',     
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","(C)R"],
                        ["0","(A)P","0","0","0","0","U"],
                        ["0","L","0","0","0","0","2I"],
                        ["0","(D)A","U","4T","U","1M","N"],
                        ["0","C","0","0","0","0","S"],
                        ["(B)Y","E","3S","0","0","0","0"],
                    ]
                },  

                code: {
                    answer: "MIST",
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
                    topic: "Characters",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4b',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4b',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.2',
                        },
                        {
                            subject: 'ELA',
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
                    incomplete: "My dearest of friends, please gather near! My wisdom runs deep, so there's nothing to fear. To conquer this night, a poem you must know. Are you ready to read about old Goblin Jo?",
                    complete: "\"Farewell, farewell,\" says this old tree. Much thanks from Stefan Sage; that's me!"
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
                                    text: 'Goblin Jo',
                                },
                                subtitle: {
                                    text: "By Stefan Sage",
                                },
                                passage: {
                                    text:   "In golden fields, where corn grew tall,<br> \
                                             stood Goblin Jo, both kind and small.<br> \
                                             With steady hands and a heart so true,<br> \
                                             she gathered crops beneath skies blue.<br> \
                                             <br> \
                                             But one dark night, a troll stomped in,<br> \
                                             with heavy feet and a wicked grin.<br> \
                                             The crops lay crushed! Hope seemed thin!<br> \
                                             Goblin Jo faced trouble again.<br> \
                                             <br> \
                                             Yet, with some cheer and spirit bright,<br> \
                                             the farmer toiled from dawn to night.<br> \
                                             With hard work, she restored each field,<br> \
                                             in autumn's glow, the crops were healed."
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
                        title: "[<g>1.] Who is the main character of this poem?",
                        correctIndex: 1,
                        paragraph: [
                            "Stefan {S}age",
                            "{G}oblin Jo",
                            "Th{e} troll"
                        ],
                    },

                    {
                        title: "[<g>2.] What are Goblin Jo's character traits?",
                        correctIndex: 1,
                        paragraph: [
                            "Small, {w}ith shaky hands",
                            "Dete{r}mined and optimistic",
                            "Troubled and hopel{e}ss"
                        ],
                    },

                    {
                        title: "[<g>3.] Which line reveals Goblin Jo's character traits?",
                        correctIndex: 2,
                        paragraph: [
                            '"But one dark night, a t{r}oll stomped in..."',
                            '"Goblin {J}o faced trouble again."',
                            '"Yet, with some cheer and spir{i}t bright..."',
                        ],
                    },

                    {
                        title: "[<g>4.] What motivated Jo to toil \"from dawn to night\"?",
                        correctIndex: 0,
                        paragraph: [
                            'A {t}roll trampled her crops',
                            'Harvest {d}ay was coming soon',
                            'Her hands were st{e}ady',
                        ],
                    },

                ],  

                code: {
                    answer: "GRIT",
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
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Conflict and Plot",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.5',
                        },
                        {
                            subject: 'ELA',
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
                    incomplete: "Greetings. New cider shipment arrived. Each box needs label. Label must explain cider's backstory. I lack time to verify. Urgent help required!",
                    complete: "Your work here is done. You are now intruding. You must leave."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "frantic-factory.png",
                },

                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Ms. Clove's Famous \"Apple-Free\" Apple Cider",
                                },
                                passage: {
                                    text:   "In the bustling village of Maplewood, everyone looked forward to Ms. Clove's apple cider at the fall festival. However, a sudden frost killed all her trees, leaving her without a single apple. Determined to not disappoint the town, Ms. Clove faced a huge challenge: creating her famous cider without any apples. \
                                     <br> \
                                    Immediately, Ms. Clove began experimenting with different fruits: pears, plums, peaches, guavas, and more. After hours of taste-testing, she finally settled on a secret blend. On the day of the festival, the villagers gathered, whispering and wondering about the cider. With a deep breath, Ms. Clove served the first cup to the mayor. He took a sip, paused, and then... \
                                    <br> \
                                    His face broke into a wide grin! The crowd cheered, and everyone eagerly lined up to try the new drink. Ms. Clove was extremely relieved, and the festival ended on a high note, with everyone agreeing it was her best cider yet. What began as a disaster turned into a new tradition for the village, starting a yearly celebration of this unique \"Apple-Free\" apple cider.<br>"
                                },
                                
                            },
                            {
                                passage: {
                                    text: "<br>200 calories per serving | 4 servings per bottle | Contains preservatives",
                                },
                                
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
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
                                size: 'medium',
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
                        },
                        {
                            passage: {
                                font: 'default',
                                size: 'tiny',
                                align: 'center',
                                indent: 'none',
                                brSplit: 'none',
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
                        title: "[<g>1.] The conflict of this story is Ms. Clove's...",
                        correctIndex: 1,
                        paragraph: [
                            "...despair that her apple trees were kille{d}.",
                            "...struggle to make cider without any ap{p}les.",
                            "...desir{e} to start a new tradition.",
                        ],
                    },

                    {
                        title: "[<g>2.] The rising action of this story is when Ms. Clove:",
                        correctIndex: 0,
                        paragraph: [
                            '"...began exp{e}rimenting with different fruits."',
                            '"...served the first cu{p} to the mayor."',
                            '"...was extremely relieved, as ever{y}one loved it."',
                        ]
                    },

                    {
                        title: "[<g>3.] What is the climax of this story?",
                        correctIndex: 2,
                        paragraph: [
                            'When the frost killed Ms. Clove\'s ap{p}le trees',
                            'When Ms. Clove settled on a secret {b}lend',
                            'When Ms. Clove served her cider to the m{a}yor',
                        ]
                    },

                    {
                        title: "[<g>4.] What is the resolution of this story?",
                        correctIndex: 1,
                        paragraph: [
                            'The m{a}yor smiled when he tasted the cider',
                            'The cide{r}\'s success started a new tradition',
                            'There are 4 servings of cider per {b}ottle',  
                        ]
                    },

                ],  

                code: {
                    answer: "PEAR",
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
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Theme and Supporting Details",
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
                            standard: 'CCRA.R.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RF.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RF.4.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RF.4.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RF.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.3',
                        },
                        {
                            subject: 'ELA',
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
                    incomplete: "Oh shucks... I was supposed to deliver a story to Candlewick, but I got lost in this corn maze! While I figure out my map, can you read through the story? Its message might really help the farm.",
                    complete: "Bye now! The moon's looking dark tonight, so be careful out there."
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
                                    text: "Smashing Pumpkins",
                                },
                                passage: {
                                    text:   "Mia loved her garden, especially in the fall when the leaves turned red and the air grew crisp. Every day after school, she would admire the pumpkins growing big and round. \
                                    <br> \
                                    One day, she noticed her favorite pumpkin withering. Worried, she asked her neighbor Mrs. Meadows for advice. Mrs. Meadows revealed that she saw a devious imp sprinkling salt in the garden at midnight. So she and Mia watched the plant closely, giving it extra water and covering it with blankets on chilly autumn nights. Weeks passed, and sure enough, the pumpkin started thriving again! \
                                    <br> \
                                    Later that month, Mia's friend Jack came by. He was building a pumpkin-launching catapult for the upcoming science fair, but he was feeling down about it. The competition was next week, and his invention couldn't even fling a baby pumpkin more than a couple yards. \
                                    <br> \
                                    Remembering her own struggles, Mia offered to help. With two minds working on the project (and after tinkering all day), the catapult worked flawlessly! Mia was so proud of their creation, she even gave Jack her favorite pumpkin to launch as a test. It soared through the sky, smashing into a massive tree all the way in Applegrim Orchard. The trees in the orchard were understandably angry, but Jack had never smiled so wide! \
                                    <br> \
                                    From that day on, Mia made it a priority to always be there for her friends \u2014 knowing that sometimes, a little extra help can make all the difference."
                                }
                                                        
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "5%",
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
                        title: "[<g>1.] What is the theme of \"Smashing Pumpkins?\"",
                        correctIndex: 2,
                        paragraph: [
                            "Making friend{s} takes lots of work",
                            "Taking care of {a} garden can be rewarding",
                            "Ex{t}ra care and support can lead to success",
                        ],
                    },

                    {
                        title: "[<g>2.] This theme is revealed in both Mia's struggle with her pumpkin, and Jack's struggle with his catapult.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            'Tru{e}',
                            'F{a}lse',
                        ]
                    },

                    {
                        title: "[<g>3.] What line supports this theme?",
                        correctIndex: 1,
                        paragraph: [
                            '"{M}ia loved her garden, especially in the fall..."',
                            '"...a little extra help can make {a}ll the difference."',
                            '"Later th{a}t month, Mia\'s friend Jack came by."',
                        ]
                    },

                    {
                        title: "[<g>4.] Why did Mia help Jack?",
                        correctIndex: 1,
                        paragraph: [
                            'She want{e}d him to win the science fair',
                            'She remembered how Mrs. {M}eadows helped her',
                            'S{h}e wanted revenge on Applegrim Orchard',  
                        ]
                    },

                ],  

                code: {
                    answer: "TEAM",
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

  