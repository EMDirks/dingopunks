const resource =  {

    info: {
        title: "Cupid's Countdown",
        path: "cupids-countdown",
        logo: "resource/cupids-countdown/assets/branding/reading/all/preview-3rd-grade.png",
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
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.7",
                        "RI.3.8",
                        "RL.3.1",
                        "RL.3.5",
                        "RL.3.7",
                        "RL.3.10",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "broken-animatronic.png",
                dialogue : {
                    incomplete: "Wow! I went from being thrown into a junk pile to being on a TV show. I can't believe it! Are you ready to help me find my secret admirer?",
                    complete: "Ahh... Theo! Doesn't it have such a lovely sound? Thank you, Dingo Punks \u2014 thank you!"
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
                                    &nbsp &nbsp Remember Pippo's Pizza Palace? I used to be a chef there, but deep down, I always wanted to be in the animatronic band. Their singing, their dancing... I saw them in a way no other human could. However, the other chefs just laughed. \
                                    <br> \
                                    &nbsp &nbsp They didn't get it. I was serious! I even made my own costume with a tin foil hat, wires on my arms, and a radio on my belly. But when I joined the band on stage, not one human clapped. They just laughed even more. I felt so ashamed. \
                                    <br> \
                                    &nbsp &nbsp That's when you came up to me and said, “Nice moves,” as you wiped the dust off my hat and shut down. My work was over, so I went back home, smiling the entire time. \
                                    <br> \
                                    &nbsp &nbsp I knew it! I didn't belong with humans. I belonged with animatronics, who saw the <em>real</em> me all along. Being a robot isn't just about metal and wires, it's about what's in your heart. \
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
                        title: "[<g>1.] Main Idea: The chef felt more connected with animatronics than with humans.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "{T}rue",
                            "Fals{e}",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these details supports the main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Remember {P}ippo's Pizza Palace?\"",
                            "\"T{h}ey didn't get it. I was serious!\"",
                            "\"My work was over, so I {w}ent back home...\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the theme of this letter?",
                        correctIndex: 2,
                        paragraph: [
                            "Being a pizza chef is hard {w}ork",
                            "It takes a lot of s{k}ill to be in a band",
                            "It's important to be true to yours{e}lf",
                        ],
                    },
                    {
                        title: "[<g>4.] Which paragraph is shown in the picture?",
                        correctIndex: 1,
                        paragraph: [
                            "P{a}ragraph one",
                            "Paragraph tw{o}",
                            "Paragraph fou{r}",
                        ],
                    },
                ],  
                code: {
                    answer: "THEO",
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
                    text: "Read each note, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "RL.3.1",
                        "RL.3.4",
                        "RL.3.10",
                        "RI.3.1",
                        "RI.3.4",
                        "L.3.3",
                        "L.3.5",
                        "L.3.5a",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-durant.png",
                dialogue : {
                    incomplete: "I'm so happy to be here! Potatoes are my greatest joy \u2014 mashed, fried, baked, you name it. Maybe my secret admirer loves them as much as I do. Want to help me figure out who it is?",
                    complete: "Mila, the famous potato farmer, is my admirer? This is the best day of my life! Thank you!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-durant.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Note #31",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your hair is a pile of hash browns: greasy, golden, and perfect.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-30%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note #29",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I can't wait to teach you all the different ways to grow potatoes.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "11%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note #62",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "My love for you is as warm as a fresh potato curry.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "50%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note #23",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Oh, Tater Durant \u2014 loving you feels like digging up a treasure chest full of baked potatoes!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-15%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note #45",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "When I'm feeling sad, I love listening to your voice.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "9%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note #52",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "On our first date, let's go out for fries!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "42%",
                                rotate: "0deg",
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
                            width: "percent30",
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
                                size: 'mediumSmall',
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
                        'A. Does note #23 contain a [<u>simile] or a [<u>metaphor]?',
                        'B. [<u>True] or [<u>false]: note #31 uses a metaphor to describe what Tater Durant\'s hair looks like.',
                        'C. In note #62, the secret admirer uses a simile to compare their love to a fresh potato _____ .',     
                        'D. [<u>True] or [<u>false]: note #45 uses a metaphor to show the secret admirer\'s sadness.',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","0"],
                        ["(D)F","0","0","0","0","(B)T","0"],
                        ["4A","0","(C)C","U","R","R","Y"],
                        ["3L","0","0","0","0","U","0"],
                        ["(A)S","I","1M","2I","L","E","0"],
                        ["E","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "MILA",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ stefan sage
        {
            info: {
                type: 'challenge',
                title: "Contestant #3",
                asset: "stefan-sage.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4b",
                        "RI.3.1",
                        "RI.3.2",
                        "RI.3.3",
                        "RI.3.8",
                        "RI.3.9",
                        "RI.3.10",
                        "RL.3.1",
                        "RL.3.5",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "stefan-sage.png",
                dialogue : {
                    incomplete: "Oh my, what's this? A game to play? I'm old and tired, but I'll try anyway. I suppose my admirer could bring some cheer. Will you help me find out who they are, my dear?",
                    complete: "My admirer is Beth? Well, what a delight! Thank you, my day feels so much more bright!"
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
                                    text: 'Meant to Be',
                                },
                                subtitle: {
                                    text: 'By Stefan\'s secret admirer',
                                },
                                passage: {
                                    text:   "[<tal>Love starts with a seed, deep in the ground, \
                                    <br> \
                                    then sprouts with a smile, and a friend is found. \
                                    <br> \
                                    Its roots grow strong with laughter and cheer, \
                                    <br> \
                                    and suddenly it blooms, all bright and clear! \
                                    <br> \
                                    <br> \
                                    You might share a story, a donut, a leaf, \
                                    <br> \
                                    and find in each other the sweetest relief. \
                                    <br> \
                                    It's a feeling that grows like a tall, mighty tree. \
                                    <br> \
                                    Love is a forest, and it's just meant to be!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-15%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Steps to Fall in Love',
                                },
                                subtitle: {
                                    text: 'By Stefan\'s secret admirer',
                                },
                                passage: {
                                    text:   "A. First, meet someone special. This is someone who makes you smile. \
                                        <br> \
                                        <br> \
                                        B. Then, get to know them. You can spend time talking and discovering what makes them amazing. \
                                        <br> \
                                        <br> \
                                        C. Next, build a connection. Try to discover things you both like, and enjoy the time you spend together. \
                                        <br> \
                                        <br> \
                                        D. Finally, show that you care. You can grow closer by being kind and making each other happy."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "8%",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is the rhyme scheme of \"Meant to Be?\"",
                        correctIndex: 1,
                        paragraph: [
                            "{A}BAB",
                            "AA{B}B",
                            "ABCAB{C}",
                        ],
                    },
                    {
                        title: "[<g>2.] How many syllables are in line 5 of the poem?",
                        correctIndex: 0,
                        paragraph: [
                            "Elev{e}n",
                            "Twe{l}ve",
                            "T{h}irteen",
                        ],
                    },
                    {
                        title: "[<g>3.] Step A comes before step B because you must:",
                        correctIndex: 0,
                        paragraph: [
                            "Meet someone before get{t}ing to know them",
                            "Smile before a {f}irst date",
                            "Buy gift{s} that cost a lot of money",
                        ],
                    },
                    {
                        title: "[<g>4.] What are both of these passages about?",
                        correctIndex: 2,
                        paragraph: [
                            "How a tree grows from a se{e}d",
                            "The importance of sh{a}ring donuts",
                            "{H}ow love begins and grows over time",
                        ],
                    },
                ],  
                code: {
                    answer: "BETH",
                    userArray: ["","","",""]
                },
            },
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
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.3.3",
                        "L.3.4",
                        "L.3.4a",
                        "L.3.4b",
                        "L.3.4c",
                        "L.3.6",
                        "RF.3.3",
                        "RF.3.3a",
                        "RF.3.4",
                        "RF.3.4a",
                        "RF.3.4c",
                        "RL.3.1",
                        "RL.3.4",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue : {
                    incomplete: "Ugh, what a waste of time. On my ONE day off, I'm stuck here on this silly show. Let's just get this over with. Nobody would bother admiring me anyway. You ready?",
                    complete: "So it's Gena? Well, I didn't see that coming. Gena and Grumblegrub... Got a nice ring to it, yeah?"
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
                                    text: "1. Grumblegrub, don't be [<u>somber]. You're too cute to be gloomy!"
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
                                    text: "2. I don't care what kind of [<u>organism] you are. You could be a worm, a tree, a cactus, or even a giraffe, and I'd still love you."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "3. I love how you're never [<u>uncomfortable] with yourself."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "-20%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "4. I have dreams of you flying across beautiful green [<u>grasslands], without a care in the world."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "0%",
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
                                rotate: "0deg",
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
                        title: "[<g>1.] What does somber mean?",
                        word: "[G]LOOMY",
                    },
                    {
                        title: "[<g>2.] True or false: an organism is a type of candy.",
                        word: "FALS[E]",
                    },
                    {
                        title: "[<g>3.] Uncomfortable means \"___ comfortable.\" ",
                        word: "[N]OT",
                    },
                    {
                        title: "[<g>4.] A grassland is a large open area covered in ____ .",
                        word: "GR[A]SS",
                    },
                ],
                code: {
                    answer: "GENA",
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
                        "CCRA.R.3",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.3.4",
                        "RF.3.4a",
                        "RI.3.1",
                        "RI.3.6",
                        "RL.3.1",
                        "RL.3.3",
                        "RL.3.6",
                        "RL.3.9",
                        "RL.3.10"
                    ],
                }
            },

            intro: {
                character: "Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee hee, a game show! This is so fun, and a little scary! What if my secret admirer thinks I'm too weird? Everyone thinks I'm too weird! Oh well. Ready to get started?",
                    complete: "Bobo? The clown? Hee hee! Well, that's a surprise. Thanks for helping me figure it out!"
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
                                    text:   "&nbsp &nbsp Topsy loved fixing things, but when the floating city of Port Mechana hired her for repairs, things went very wrong. Instead of fixing things, she broke a bunch of stuff \u2014 causing the entire town to sink into the ocean. \
                                    <br> \
                                    &nbsp &nbsp During the disaster, Topsy escaped on the pirate ship <em>Storm Breaker</em>. Using her skills, she was able to unlock tricky treasure chests for the crew, helping them all get rich and famous. \
                                    <br> \
                                    &nbsp &nbsp Topsy might claim the sinking was an accident, but trouble always follows her. Her current location is not known, and anyone who turns her in will receive a great reward. \
                                    <br> \
                                    <br> \
                                    - By Bodelia Cog, mayor of New Mechana"
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
                                    text:   "&nbsp &nbsp You know, I always loved Topsy. I heard she sank Port Mechana (an entire town) and escaped on a pirate ship! I wanted that kind of freedom too. Doodle Circus was my prison. Every night, they made me paint my nose red, even though I hated it. \"A clown without a red nose isn't a clown,\" they'd say. \
                                    <br> \
                                    &nbsp &nbsp So at midnight, after everyone was asleep, I grabbed some keys and unlocked the animal cages. The animals were my friends, and they roared in happiness as they broke free. And me? I rode out on Butterscotch the bear, my best friend of all. Together, we left Doodle Circus behind and never looked back. \
                                    <br> \
                                    &nbsp &nbsp I\'m not Topsy, but I get her. She and I just want to live free, without anyone holding us down."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
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
                        title: "[<g>1.] \"WANTED: TOPSY\" is written from which character's point of view?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "To{p}sy",
                            "Th{e} pirates",
                            "The reade{r}",
                            "{B}odelia Cog",
                        ],
                    },
                    {
                        title: "[<g>2.] [<i>Setting] is the time and place of a story. What is the place for \"A Clown's Tale?\"",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "An animal c{a}ge",
                            "Do{o}dle Circus",
                            "Port Mecha{n}a",
                            "Tops{y}'s house"
                        ],
                    },
                    {
                        title: "[<g>3.] Which character traits best describe the clown?",
                        correctIndex: 0,
                        paragraph: [
                            "{B}rave and independent",
                            "Sca{r}ed and shy",
                            "Cruel and s{m}elly",
                        ],
                    },
                    {
                        title: "[<g>4.] What do both story's plots have in common?",
                        correctIndex: 2,
                        paragraph: [
                            "Both were written by the same autho{r}",
                            "Both have {c}ircus animals",
                            "B{o}th include an escape to freedom",
                        ],
                    },
                ],  
                code: {
                    answer: "BOBO",
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