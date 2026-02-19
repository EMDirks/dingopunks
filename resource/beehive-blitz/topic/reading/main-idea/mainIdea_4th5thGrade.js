const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/reading/main-idea/preview-4th-5th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ sunny snap
        {
            info: {
                type: 'challenge',
                title: "History Department",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Ideas and Supporting Details of Short Stories",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.7",
                        "RL.5.1",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Oh no! I'm the hive's historian, and this storm is ruining everything! I have SO many documents to read, but absolutely no time. Can you help?",
                    complete: "Thanks for your help! Now, if I can just stop spilling nectar all over myself, we'll call it a win."
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
                            text: "Mad Mathematician",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Deep within Bumbleburg Hive worked Thistle Scribe, the bee in charge of our nectar supplies. During an unusually dry season, Thistle refused to give out emergency nectar until every bee turned in a signed receipt for what they'd already eaten. When one jar was short by half a drop, he spent days re-checking everything. He even locked himself inside his office to write an 85-page report on nectar evaporation, complete with diagrams. \
                                    <br> \
                                    Thankfully, his hard work saved the hive. The bees still tell stories about the \"Mad Mathematician\" who once counted every drop like their lives depended on it \u2014 because they did!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "10%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Basil's Adventure",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "While attempting to deliver a barrel of nectar, Basil Rabbit got lost in the hive's library. In his confusion, he knocked over a pile of old books, revealing a hidden trap door. Below, he found a single rune carved into the floor, glowing with a mysterious, terrifying light. And that's how Basil's simple delivery turned into a discovery that filled him with dread.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "15%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Gustav's Visit of 2019",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "A deep rumble shook Bumbleburg Hive when Gustav arrived. Dark clouds swallowed the sun, and fierce winds tore through the valley, ripping flowers from their roots. Inside, the bees huddled together, but the hive couldn't stand up to Gustav's fury. By morning, it was reduced to rubble, with barely anything left to rebuild.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "-2%",
                                rotate: "4deg",
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
                            width: "percent45",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
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
                        title: "[<g>1.] What's the main idea of \"Mad Mathematician?\"",
                        correctIndex: 1,
                        paragraph: [
                            "Thi{s}tle owned many perfectly-labeled jars",
                            "T{h}istle saved the hive by checking every detail",
                            "Thistle lost track of {t}he hive's nectar",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail supports the main idea from #1?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Deep wi{t}hin Bumbleburg hive...\"",
                            "\"During an unusually {d}ry season...\"",
                            "\"...he spent d{a}ys re-checking everything.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What's the main idea of \"Basil's Adventure?\"",
                        correctIndex: 1,
                        paragraph: [
                            "Basil knocked over a pile of {b}ooks",
                            "Bas{i}l accidentally discovered a mysterious rune",
                            "Basil successfully delivered a barre{l} of nectar",
                        ],
                    },
                    {
                        title: "[<g>4.] What is \"Gustav's Visit of 2019\" mostly about?",
                        correctIndex: 0,
                        paragraph: [
                            "Gustav destroying the val{l}ey and the hive",
                            "The bees huddling together durin{g} a storm",
                            "Gustav lea{v}ing the bees alone",
                        ],
                    },
                ],  
                code: {
                    answer: "HAIL",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ queen bella
        {
            info: {
                type: 'challenge',
                title: "Throne Room",
                asset: "queen-bella.png",
                state: "incomplete",
                hint: {
                    text: "Read the report, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details of an Informational Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.8",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "Ah, finally... the long-awaited Lavender Report has arrived. This document is of extreme importance to the hive. Study it well, and deliver its key truths to me at once!",
                    complete: "Your help is appreciated more than you know. I see why J.J. Crispy speaks so highly of you."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "queen-bella.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "FOR IMMEDIATE RELEASE",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: "The Lavender Report",
                                },
                                subtitle: {
                                    text: "By Head Bee Lily",
                                },
                                passage: {
                                    text: "The lavender field near Bumbleburg Hive is having an incredible season, Your Majesty. Every day, our bees gather nectar from the beautiful blooms. The lavender is taller and healthier than last year, and even the flower pixies have joined in, making this season's harvest truly remarkable! \
                                    <br> \
                                    However, there was a small threat when a sneaky goblin tried to destroy the field with an evil curse. Luckily, our leprechaun allies knew exactly how to defeat this magic. They acted immediately, protecting the lavender without a single bloom being lost. Their swift action saved the field from total destruction. \
                                    <br> \
                                    With that danger now behind us, I recommend wrapping up the harvest as quickly as possible before the storm arrives. It is important to gather every last drop of nectar, making sure none of the harvest goes to waste."
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'double'
                        },
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
                        title: "[<g>1.] What is the central idea of this report?",
                        correctIndex: 2,
                        paragraph: [
                            "A goblin tried to ruin t{h}e harvest",
                            "Head Bee {L}ily wrote it",
                            "The lavende{r} field is thriving this season",
                        ],
                    },
                    {
                        title: "[<g>2.] What evidence supports this central idea?",
                        correctIndex: 2,
                        paragraph: [
                            "The plants are taller than last ye{a}r",
                            "The {g}oblin failed to destroy even a single bloom",
                            "Both of the {a}bove",
                        ],
                    },
                    {
                        title: "[<g>3.] How did leprechauns affect the lavender field?",
                        correctIndex: 0,
                        paragraph: [
                            "They saved it by defeating the gobl{i}n's curse",
                            "They funded its harvest wi{t}h a pot of gold",
                            "They helped g{a}ther nectar from its flowers",
                        ],
                    },
                    {
                        title: "[<g>4.] What is Head Bee Lily's recommendation?",
                        correctIndex: 2,
                        paragraph: [
                            "To seek more help from the lep{r}echauns",
                            "To {p}lant a new lavender field next year",
                            "To fi{n}ish the harvest before the storm arrives",
                        ],
                    },
                ],  
                code: {
                    answer: "RAIN",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Read the job description, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multiple Main Ideas",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.8",
                        "RL.4.1",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.8",
                        "RL.5.1",
                    ],
                }
            },

            intro: {
                character: "Grubb",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "The Queen thinks I'm slacking, so she's making me write out my job description. Ugh... running this warehouse during a storm is hard enough! Can you read it and tell me if it makes sense?",
                    complete: "Yeah, yeah, thanks or whatever. Now get outta here! I've got, uh, \"warehouse things\" to do."
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
                                    text: "My Job Description",
                                },
                                subtitle: {
                                    text: "Written By Warehouse Manager Grubb",
                                },
                                passage: {
                                    text: "Being the warehouse manager of Bumbleburg Hive is no picnic, let me tell you. This place is overflowing with supplies: jars of honey, piles of pollen, blocks of wax \u2014 and somehow it's my job to keep track of it all. Nothing is supposed to go missing. Yeah, right! I had a notebook to keep everything on record, but of course, I lost that too. Figures, doesn't it? \
                                    <br> \
                                    What else do I do? Uhh... let me think. I guess “planning ahead” is an important part of the job, or whatever. During the winter season, we need tons of wax. And when the rainy days come, we better have enough nectar. It's pretty simple: just make sure we don't run out of stuff. Nothing fancy. Also, my back's been killing me lately. Don't know how much longer I can keep this up."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "0%",
                                rotate: "-2deg",
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
                        title: "[<g>1.] What is the main idea of the first paragraph?",
                        correctIndex: 2,
                        paragraph: [
                            "{G}rubb finds his work highly rewarding",
                            "Grubb is the {w}arehouse manager",
                            "Grubb struggles to ma{n}age the warehouse",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: this first main idea is supported by the fact that Grubb lost his notebook.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tru{e}",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the main idea of the second paragraph?",
                        correctIndex: 0,
                        paragraph: [
                            "Planning {a}head is an important part of the job",
                            "The hive needs lots of wa{x} for the winter season",
                            "Long-term preparation is not nece{s}sary",
                        ],
                    },
                    {
                        title: "[<g>4.] What detail supports this second main idea? ",
                        correctIndex: 1,
                        paragraph: [
                            "\"What else do I do? U{h}h... let me think.\"",
                            "\"...just make sure we don'{t} run out of stuff.\"",
                            "\"...my bac{k}'s been killing me lately.\"",
                        ],
                    },
                ],  
                code: {
                    answer: "NEAT",
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
                    text: "Read the two poems, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare and Contrast Main Ideas",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.5",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Riff Wingman here. I'm the hive's original slam poet, here to perform live over the intercom to inspire everyone during the storm. I've got a few poems ready; want to help me make them perfect?",
                    complete: "Thanks, kid. You've got a good eye. Now, stand back and let a legend work his magic!"
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
                                    text: 'The Old Bees Speak',
                                },
                                subtitle: {
                                    text: 'by Riff Wingman',
                                },
                                passage: {
                                    text: "Within the hive's halls, beneath wax and shade, \
                                    <br> \
                                    the old bees speak \u2014 don't let their words fade! \
                                    <br> \
                                    Stories of battles, of hives torn and built, \
                                    <br> \
                                    wisdom from elders, of truth and of guilt. \
                                    <br> \
                                    <br> \
                                    They speak of hard times, when nectar ran dry, \
                                    <br> \
                                    of dangers they faced, and through unity, survived. \
                                    <br> \
                                    Listen up, you bees, their tales aren't just talk! \
                                    <br> \
                                    Wisdom keeps us together, unafraid of the dark."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-2%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Wobbly Paths',
                                },
                                subtitle: {
                                    text: 'by Riff Wingman',
                                },
                                passage: {
                                    text: "Hear the hum of busy bees! \
                                    <br> \
                                    The hive stays strong beneath the trees. \
                                    <br> \
                                    The young bees learn with every flight, \
                                    <br> \
                                    with wobbly paths, they see the light. \
                                    <br> \
                                    <br> \
                                    Patience is key as they stumble and grow, \
                                    <br> \
                                    so teach them lovingly, guiding them slow. \
                                    <br> \
                                    Their small mistakes help build our bond, \
                                    <br> \
                                    together we thrive, united we're strong!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "10%",
                                rotate: "2deg",
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
                        'A. The central idea of \"The Old Bees Speak\" is that listening to the ______ of elders keeps the hive together.',
                        'B. Does line [<u>one] or [<u>two] support that central idea?',
                        'C. [<u>True] or [<u>false]: the central idea of \"Wobbly Paths\" also involves elder bees.',     
                        'D. Are both poems about [<u>guilt], [<u>unity], or [<u>honor]?',                    
                    ],
                    puzzle: [
                        ["0","0","(B)T","(A)1W","O","0","0"],
                        ["0","0","0","I","0","0","(D)U"],
                        ["(C)F","2A","L","S","E","0","N"],
                        ["0","0","0","D","0","0","3I"],
                        ["0","0","0","O","0","0","4T"],
                        ["0","0","0","M","0","0","Y"],
                    ]
                },  
                code: {
                    answer: "WAIT",
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