const resource =  {

    info: {
        title: "Cupid's Countdown",
        path: "cupids-countdown",
        logo: "resource/cupids-countdown/assets/branding/reading/all/thumbnail-4th-grade.png",
        timerLabel: "SHOW ENDS"
    },

    challengeArray: [

        // ⭐ broken animatronic
        {
            info: {
                type: 'challenge',
                title: "Contestant #1",
                asset: "broken-animatronic.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage and look at the picture, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea, Theme, and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.7",
                        "RL.4.10",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "broken-animatronic.png",
                dialogue : {
                    incomplete: "I spent years in a junk pile, all forgotten, trying to remember who I was \u2014 and now I'm on a TV show! I can't believe it! Are you ready to help me find my secret admirer?",
                    complete: "Ahh... Noah! Don't you think that name has such a beautiful ring to it?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "broken-animatronic.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "To my favorite animatronic, \
                                    <br> \
                                    <br> \
                                    &nbsp &nbsp Remember Pippo's Pizza Palace? I used to work there as a chef, but deep inside, I always wanted to be in the animatronic band. I saw them in a way no other human could. Usually, the other chefs just laughed, \"You're a man, not a robot.\" \
                                    <br> \
                                    &nbsp &nbsp They didn't understand. I was serious! I even built my own costume: a tin foil hat, wires wrapped around my arms, and a speaker strapped to my belly. But when I finally got on stage with the band, not a single person clapped. They just laughed louder. I felt so ashamed. \
                                    <br> \
                                    &nbsp &nbsp Then you said to me, \"Nice moves,\" before wiping the dust from my hat and powering down for the night. I went home that evening, feeling strange. \
                                    <br> \
                                    &nbsp &nbsp As I sat there in bed, it hit me \u2014 I didn't belong with humans. I belonged with you and the other animatronics, who saw who I [<i>truly] was. Being a robot isn't just about wires and metal, it's about what's in your heart. \
                                    <br> \
                                    <br> \
                                    <br> \
                                    \u2014 Your secret admirer"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "2%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "cu_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "5%",
                                rotate: "4deg",
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
                            width: "percent43",
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
                        title: "[<g>1.] This letter's main idea is that the chef feels:",
                        correctIndex: 1,
                        paragraph: [
                            "Embarassed {t}hat the other chefs laughed",
                            "That he belongs with animatronics, {n}ot humans",
                            "That his costume wa{s} actually pretty good"
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these details supports the main idea?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Remember Pippo's Pizza {P}alace?\"",
                            "\"I used to {w}ork there as a chef...\"",
                            "\"They didn't understand. I was seri{o}us!\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the theme of this passage?",
                        correctIndex: 0,
                        paragraph: [
                            "It's import{a}nt to be true to yourself",
                            "Some chefs get along bette{r} with animatronics",
                            "To become a ro{b}ot, you must make a costume",
                        ],
                    },
                    {
                        title: "[<g>4.] How does the picture support this theme?",
                        correctIndex: 0,
                        paragraph: [
                            "It shows the chef trying to be {h}imself",
                            "It proves {t}hat the chef is a great inventor",
                            "It shows that the chef wants to b{e} famous",
                        ],
                    },
                ],  
                code: {
                    answer: "NOAH",
                    userArray: ["","","",""]
                },
            },     
        },

        // ⭐ tater durant
        {
            info: {
                type: 'challenge',
                title: "Contestant #2",
                asset: "tater-durant.png",
                state: "incomplete",
                hint: {
                    text: "Sort each passage into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.5b",
                        "RL.4.1",
                        "RL.4.4",
                        "RL.4.10",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-durant.png",
                dialogue : {
                    incomplete: "Oh man, I'm thrilled to be here! Potatoes are my greatest joy \u2014 mashed, fried, baked, you name it! I wonder if my secret admirer loves them as much as I do. Wanna help me figure out who it is?",
                    complete: "It's Nora? Wow! This is the second best day of my life! The first was when I ate my first potato."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Figurative Language",
                        "Literal Language",
                    ],
                    columHeader: 'color-pink-light',
                    asset: {
                        scope: "local",
                        path: "cu_2.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Love Note #31",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your hair is a basket of fries: greasy, golden, and absolutely perfect.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Love Note #45",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I always cheer up when I hear your voice.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Love Note #29",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I can't wait for our first date! I think we should go to a potato farm.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Love Note #62",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I'm so nervous to finally meet you. I hope I don't get cold feet!",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Love Note #23",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Oh, Tater Durant! Loving you feels like opening a treasure chest full of steamy baked potatoes.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Love Note #15",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your latest album is my absolute favorite.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "sort2Width",
                            height: "auto",
                        },
                        misc: {
                            material: 'paper',
                            padding: "default"
                        },
                        tag: {
                            font: 'default',
                            size: 'tiny',
                            align: 'left',
                            padding: 'defaultSmallContainer'
                        },
                        flexbox: {
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        },
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
                        title: "[<g>1.] The simile in love note #23 means:",
                        correctIndex: 1,
                        paragraph: [
                            "Loving {T}ater Durant takes a lot of hard work",
                            "Loving Tater Dura{n}t feels exciting & comforting",
                            "Treasure chests often contain ba{k}ed potatoes",
                        ],
                    },
                    {
                        title: "[<g>2.] In note #62, “cold feet” is an example of a(n):",
                        correctIndex: 2,
                        paragraph: [
                            "Si{m}ile",
                            "Metapho{r}",
                            "Idi{o}m",
                        ],
                    },
                    {
                        title: "[<g>3.] How many love notes belong in the “Figurative Language” column?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tw{o}",
                            "Th{r}ee",
                            "{F}our",
                            "Fi{v}e",
                        ],
                    },
                    {
                        title: "[<g>4.] How could you rewrite #45 as a metaphor?",
                        correctIndex: 1,
                        paragraph: [
                            "Your beauti{f}ul voice fills me with tons of joy!",
                            "Your voice is {a} hug that makes me feel better.",
                            "Your voice is as interesti{n}g as curly fries.",
                        ],
                    },
                ],  
                code: {
                    answer: "NORA",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ stefan sage
        {
            info: {
                type: 'challenge',
                title: "Contestant #3",
                asset: "stefan-sage.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry and Informational Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.5",
                        "RL.4.9",
                        "RL.4.10",
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "stefan-sage.png",
                dialogue : {
                    incomplete: "Oh my, what's this? A game, you say? I'm old and confused, but I'll play today. Perhaps my admirer will bring some cheer. Will you help me discover their name, my dear?",
                    complete: "My admirer is Tess? What a great surprise! Thank you \u2014 my day feels brighter than the skies."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "stefan-sage.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Trees',
                                },
                                subtitle: {
                                    text: 'By Stefan\'s secret admirer',
                                },
                                passage: {
                                    text:   "<br> \
                                    [<tal>A seed in the soil \
                                    <br> \
                                    Watered with trust, love will bloom \
                                    <br> \
                                    Grows into a tree]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "0%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Steps',
                                },
                                subtitle: {
                                    text: 'By Stefan\'s secret admirer',
                                },
                                passage: {
                                    text:   "<br> \
                                    [<u>Step one:] First, meet someone special. Love starts when you find someone who makes you feel happy or excited inside. \
                                    <br> \
                                    <br> \
                                    [<u>Step two:] Then, get to know them. By learning how to listen, you can start to understand what makes them amazing. \
                                    <br> \
                                    <br> \
                                    [<u>Step three:] Next, it's time to build a connection. Discover things you both enjoy, allowing you to feel closer as you share them. \
                                    <br> \
                                    <br> \
                                    [<u>Step four:] Finally, show that you care. Be kind and do thoughtful things to make each other happy."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "3%",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Is \"Trees\" a [<u>haiku], [<u>elegy], or [<u>sonnet]?',
                        'B. In \"Steps,\" [<i>step two] comes after [<i>step one] because you must first _____ someone before getting to know them.',
                        'C. Which passage shows its theme in a more detailed way?',                    
                        'D. [<u>True] or [<u>false]: the theme of both passages is that a seed will eventually grow into a tree.',     
                    ],
                    puzzle: [
                        ["(C)S","0","0","0","0","0","0"],
                        ["T","0","0","(D)F","0","0","0"],
                        ["E","0","(A)H","A","I","K","U"],
                        ["P","0","0","L","0","0","0"],
                        ["4S","0","0","3S","0","0","0"],
                        ["0","0","(B)M","E","2E","1T","0"],
                    ]
                },  
                code: {
                    answer: "TESS",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "Contestant #4",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Read each sentence, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
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
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.4b",
                        "L.4.5c",
                        "L.4.6",
                        "RL.4.1",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue : {
                    incomplete: "Man, what a waste of time. On my ONE day off, I'm stuck here on this ridiculous game show. So let's just get it over with \u2014 nobody would bother admiring me anyway. You ready?",
                    complete: "Wait \u2014 it's Rose from the warehouse? Oh no... Thanks for nothing."
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
                                passage: {
                                    text: "Oh Grumblegrub, don't be so [<u>irritable]. You're too cute to be cranky."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-6%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "I'm helpless against your [<u>magnetism]. Just like a magnet pulling things close, you attract my attention."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "I hope I'm not coming off as [<u>overzealous] \u2014 I just want to spend every single minute of my life next to you."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "-15%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Your enormous [<u>thorax] must hold an even bigger heart!"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "7%",
                                rotate: "2deg",
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
                                translateX: "0%",
                                translateY: "3%",
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
                                height: "auto",
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
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
                        title: "[<g>1.] What does irritable mean?",
                        word: "C[R]ANKY",
                    },
                    {
                        title: "[<g>2.] If zealous = eager, then overzealous = ____ eager.",
                        word: "TO[O]",
                    },
                    {
                        title: "[<g>3.] Someone with magnetism _____ others to them.",
                        word: "ATTRACT[S]",
                    },
                    {
                        title: "[<g>4.] What is a synonym for thorax?",
                        word: "CH[E]ST",
                    },
                ],
                code: {
                    answer: "ROSE",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ terrible topsy
        {
            info: {
                type: 'challenge',
                title: "Contestant #5",
                asset: "topsy.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Elements of a Story",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.6",
                        "RI.4.9",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.6",
                        "RL.4.9",
                        "RL.4.10",
                    ],
                }
            },

            intro: {
                character: "Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee hee, a game show! This is so exciting, and a little bit terrifying! What if my secret admirer thinks I'm a weirdo? Everyone does! Oh well. Ready to get started?",
                    complete: "Coco the clown? Oh my, what a surprise. Thanks for helping me figure that out! Hee hee!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "topsy.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'WANTED: TOPSY',
                                },
                                subtitle: {
                                    text: '------ REWARD: $1,000,000 ------ ',
                                },
                                passage: {
                                    text:   "&nbsp &nbsp Topsy loved to tinker with machines, and she was always full of big ideas. When the floating city of Port Mechana hired her to make some repairs, she jumped right in without making any safety checks. Unfortunately, the whole system broke, and the entire city sank into the sea. \
                                    <br> \
                                    &nbsp &nbsp Topsy escaped aboard the pirate ship <em>Storm Breaker</em>. Her curiosity and clever hands made her a favorite among the crew. She helped them unlock treasure chests and build gadgets, and soon they were all rich and famous. \
                                    <br> \
                                    &nbsp &nbsp Now, there's a big reward for anyone who can bring her back to us \u2014 dead or alive. \
                                    <br> \
                                    <br> \
                                    - Issued by Bodelia Cog, mayor of New Mechana"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "8%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Clown\'s Tale',
                                },
                                subtitle: {
                                    text: 'By Topsy\'s secret admirer',
                                },
                                passage: {
                                    text:   "&nbsp &nbsp I always admired Topsy. She sank Port Mechana and escaped on a pirate ship! That's the dream.\
                                    <br>\
                                    &nbsp &nbsp But Dizzydoodle Circus? That place was my nightmare. Every night, they made me paint my nose red. \"A clown without a red nose isn't a clown,\" they'd say. A clown <em>with</em> a red nose <em>isn't happy,</em> I'd think. \
                                    <br> \
                                    &nbsp &nbsp At midnight, I'd had enough. While everyone snored in their bunks, I stole some keys and let all the animals out of their cages. My only friends roared with joy as they stampeded to freedom. As for me? I rode out on Butterscotch the bear, my partner in crime, and left the circus forever. \
                                    <br> \
                                    &nbsp &nbsp I'm no Topsy, but I get her. We both know what it's like to escape a sinking ship \u2014 even if mine smelled like face paint and regret."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
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
                                size: 'small',
                                align: 'left',
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
                        title: "[<g>1.] Which passage is written in first person?",
                        correctIndex: 1,
                        paragraph: [
                            "\"WANTE{D}: TOPSY\"",
                            "\"A {C}lown's Tale\"",
                            "Neither passage is {w}ritten in first person",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the setting of \"A Clown's Tale?\"",
                        correctIndex: 2,
                        paragraph: [
                            "Ins{i}de an animal cage",
                            "Dizzydoodle Circus {d}uring the day",
                            "Dizzydo{o}dle Circus at night",
                        ],
                    },
                    {
                        title: "[<g>3.] Which character traits best describe Topsy?",
                        correctIndex: 1,
                        paragraph: [
                            "Mean bu{t} creative",
                            "Curious but re{c}kless",
                            "{B}ored and anxious",
                        ],
                    },
                    {
                        title: "[<g>4.] What do both passages have in common?",
                        correctIndex: 0,
                        paragraph: [
                            "Both plots involve an escape to freed{o}m",
                            "Both are writt{e}n from the same point of view",
                            "Both have very simi{l}ar settings",
                        ],
                    },
                ],  
                code: {
                    answer: "COCO",
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