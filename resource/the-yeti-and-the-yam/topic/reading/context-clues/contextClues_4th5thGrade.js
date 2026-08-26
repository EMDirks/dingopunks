const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/reading/context-clues/preview-4th-5th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ pippo's cell
        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Definitions",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.3",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.6",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.6",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4c",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Text",
                            standard: "RI.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Text",
                            standard: "RI.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Text",
                            standard: "RI.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.6",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4c",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Text",
                            standard: "RI.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Text",
                            standard: "RI.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Text",
                            standard: "RI.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "Need an oven to bake those yams? No sweat. I can build anything! But you gotta help me sort through some old parts first. Reading these labels? Not my thing. I'd rather tinker than squint at tiny text!",
                    complete: "Let me know if you see my sister Topsy around \u2014 I miss her... Anyway, thanks for the help!"
                },
            },

            // passage [tag] (4x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "pippo-fizzlepop.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "1. Conduit",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Make sure that this conduit, a protective tube for holding electrical wires, isn't bent out of shape. The wires inside might spark!",
                                },
                            },
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
                        tag: {
                            text: "2. Valve",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This valve is useless! It's a mechanical device that controls the flow of liquids, but this particular one is stuck in the 'closed' position.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "-5%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "3. Relay",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This relay (a switch that turns circuits on and off) will help your machine work perfectly. It's brand new!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "4. Solenoid",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This solenoid, a coil that converts electricity into movement, can sometimes be used to control the position of a valve.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "4%",
                                rotate: "-1deg",
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
                            width: "percent40",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Using context clues, what does 'conduit' mean?",
                        correctIndex: 1,
                        paragraph: [
                            "A tube that's bent out o{f} shape",
                            "A {p}rotective tube for holding electrical wires",
                            "A bundle {o}f electrical wires",
                        ],
                    },
                    {
                        title: "[<g>2.] What is a valve?",
                        correctIndex: 2,
                        paragraph: [
                            "A useles{s} mechanical device",
                            "A device that's stuck in the 'cl{o}sed' position",
                            "A device that controls the flow of {l}iquids",
                        ],
                    },
                    {
                        title: "[<g>3.] In this example, what is the definition of 'relay?'",
                        correctIndex: 2,
                        paragraph: [
                            "A race bet{w}een teams of runners",
                            "A brand new electrical {p}art",
                            "A switch that opens and closes circ{u}its",
                        ],
                    },
                    {
                        title: "[<g>4.] What is a solenoid?",
                        correctIndex: 0,
                        paragraph: [
                            "A coil that turns electrical ener{g}y into motion",
                            "A coil that {a}lways controls a valve",
                            "A valve that converts el{e}ctricity into motion",
                        ],
                    },
                ],  
                code: {
                    answer: "PLUG",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the knight's cell
        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Synonyms and Antonyms",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.3",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.5c",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4c",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.5c",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4c",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "At last, a glimmer of hope \u2014 a letter from the King! I'm too exhausted to decode his message, but it might hold the key to my escape. If you help, I'll share some of my sugar rations with you.",
                    complete: "Thank you, traveler. Your help means more to me than you know."
                },
            },

            // cryptogram + passage-long (1x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "A letter for my most faithful knight,<br>\
                                    <br>\
                                    You have remained steadfast and loyal in the face of extreme danger. You inspire us all. Though your journey has been daunting and certainly not easy, rest assured \u2014 help is on the way. I am raising an army to liberate you: to free you from your icy cell!<br>\
                                    <br>\
                                    Stay strong, for the kingdom stands with you. It is my hope that this letter provides you with consolation, not distress.<br>\
                                    <br>\
                                    We will see you soon,<br>\
                                    King Kevin"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-12%",
                                translateY: "14%",
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
                                translateX: "9%",
                                translateY: "-8%",
                                rotate: "-4deg",
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

            // decoder (4x)
            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is a synonym of 'liberate?'",
                        word: "F[R]EE",
                    },
                    {
                        title: "[<g>2.] What is an antonym of 'consolation?'",
                        word: "DISTR[E]SS",
                    },
                    {
                        title: "[<g>3.] Using context clues, 'steadfast' means:",
                        word: "LOY[A]L",
                    },
                    {
                        title: "[<g>4.] Using context clues, 'daunting' means:",
                        word: "HAR[D]",
                    },
                ],
                code: {
                    answer: "READ",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ tater durant's cell
        {

            info: {
                type: 'challenge',
                title: "Tater Durant's Cell",
                asset: "tater-drift.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Examples",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.3",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4b",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4c",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.5",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4b",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4c",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "Dude! I'm pretty sure I just wrote the greatest love song of all time. I'm super stoked, but I'd love a fresh set of eyes on these lyrics. If you give it a read, I'll give you some yams.",
                    complete: "Dude! Thanks for the help! Make sure to take good care of those yams, okay?"
                },
            },

            // passage-medium + title (1x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'My Heart Belongs to a Potato',
                                },
                                subtitle: {
                                    text: 'By Tater Durant',
                                },
                                passage: {
                                    text:   "In the humble potato, I found [<u>serendipity],<br>\
                                            like uncovering treasure where none seemed to be.<br>\
                                            Its simple embrace brought moments of [<u>felicity],<br>\
                                            for example, I couldn't stop smiling with glee.<br>\
                                            <br>\
                                            The potato's charm was [<u>resplendent], it's true \u2014<br>\
                                            like morning's first light on a world bright and new.<br>\
                                            Its flawless skin more [<u>aureate] than I'd seen,<br>\
                                            for instance, outshining a coin's brilliant gleam."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-3%",
                                rotate: "-3deg",
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

            // crossword (7x6)
            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Does \'aureate\' mean [<u>golden], [<u>silent], or [<u>simple]?',                    
                        'B. Does \'felicity\' mean [<u>joy] or [<u>woe]?',
                        'C. Does \'serendipity\' mean [<u>good] luck or [<u>bad] luck?',
                        'D. Does \'resplendent\' mean [<u>missing], [<u>massive], or [<u>glowing]?',     
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(A)1G","0"],
                        ["0","0","0","0","(B)J","O","Y"],
                        ["0","0","0","0","0","L","0"],
                        ["0","0","(C)G","O","O","4D","0"],
                        ["0","0","0","0","0","E","0"],
                        ["(D)G","3L","O","W","2I","N","G"],
                    ]
                },  
                code: {
                    answer: "GILD",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ dr. seraphina's cell
        {

            info: {
                type: 'challenge',
                title: "Dr. Seraphina's Cell",
                asset: "dr-seraphina.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Prefixes and Suffixes",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.3",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Language",
                            standard: "CCRA.L.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.4",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.4b",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.3a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4c",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Text",
                            standard: "RI.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Text",
                            standard: "RI.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.4b",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.3a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4c",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Text",
                            standard: "RI.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Text",
                            standard: "RI.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I'm trying to design the perfect snow cone, but these research papers are endless! If you read one for me, I'll give you some marshmallows and butter for those candied yams. Deal?",
                    complete: "Thanks a million. You've saved me from drowning in data... Now I can finally focus!"
                },
            },

            // passage-long + title + subtitle (1x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Secret to Sweetness: A Scientific Study',
                                },
                                subtitle: {
                                    text: "By Professor Gordie Banzo",
                                },
                                passage: {
                                    text:   "We found strong evidence that goblins invented snow cones over 2,000 years ago, deep in the subterranean caverns beneath Sugarspire Mountain. There, my research assistant discovered an ancient carving: runes that seemed to be a recipe for the perfect snow cone. Instead of needing to uncover boundless secrets, hidden within thousands of carvings and miles of tunnels, we learned everything we needed from this single passage:<br>\
                                    \"Too little sweetness,\" the runes warned, \"and the treat becomes as bitter as a troll, leaving even the happiest goblin discontent. But too much sweetness, and it feels like you've swallowed a sunbeam \u2014 blinding and overpowering.\"<br>\
                                    That was the secret we'd been searching for! The perfect snow cone is all about balancing sweetness, bringing a mirthful sparkle to the eyes of anyone lucky enough to taste it."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "8%",
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
                            width: "percent80",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] <em>Sub</em> means 'under' and <em>terra</em> means 'ground,' so subterranean means:",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "Under{w}ater",
                            "Above gro{u}nd",
                            "M{o}untain",
                            "Unde{r}ground",
                        ],
                    },
                    {
                        title: "[<g>2.] If <em>bound</em> means 'limit,' then boundless means:",
                        correctIndex: 0,
                        paragraph: [
                            "Witho{u}t limits",
                            "{W}ith many limits",
                            "Containing se{c}rets",
                        ],
                    },
                    {
                        title: "[<g>3.] What does discontent mean?",
                        correctIndex: 1,
                        paragraph: [
                            "Extremely {h}appy",
                            "{N}ot satisfied",
                            "So{m}ewhat scared",
                        ],
                    },
                    {
                        title: "[<g>4.] <em>Mirth</em> means 'glee,' so a mirthful person is:",
                        correctIndex: 1,
                        paragraph: [
                            "Gl{u}m and full of sadness",
                            "Happy and full of ch{e}er",
                            "H{a}ppy but quiet",
                        ],
                    },
                ],  
                code: {
                    answer: "RUNE",
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

}