const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/poetry/preview-4th-5th-grade.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },
    challengeArray: [

        // ⭐ The Candy Cave
        {

            info: {
                type: 'challenge',
                title: "The Candy Cave",
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Read each poem, then answer the questions to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Reading Comprehension",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.9',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            standard: 'L.4.5',
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
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            standard: 'L.5.5',
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
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.9',
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
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "Oh, hi there. I'm having a rough time with my taffy... My latest batch is a bitter disaster. Luckily, writing poetry helps me cope. Want to read a few of my poems and tell me what you think?",
                    complete: "Thanks for spending some time with me. I really needed that!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "the-candy-cave.png",
                },

                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                title: {
                                    text:   "Taffy Troubles"
                                },
                                passage: {
                                    text:   "Twists of missing hope <br>\
                                            Sweetness lost in tangled strands <br>\
                                            Bitterness remains"
                                }   
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-25%",
                                rotate: "-5deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text:   "Ghostly Gumdrops"
                                },
                                passage: {
                                    text:   "Gumdrops lose their shape <br>\
                                            Sugary mess, failed dreams <br>\
                                            Frustration prevails"
                                }   
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-17%",
                                translateY: "25%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text:   "Chocolate Crisis"
                                },
                                passage: {
                                    text:   "Cocoa dreams collapse <br>\
                                            A bitter mix with no joy <br>\
                                            Failure coats the spoon"
                                }   
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "34%",
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            
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
                        'A. Which candy\'s sweetness is lost in tangled strands?',
                        'B. What kind of mess resulted from the failed gumdrops?',
                        'C. What kind of dreams collapse in \"Chocolate Crisis?\"',     
                        'D. All three poems have a pattern of 5, 7, and 5 syllables. What is this type of poem called?',
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(B)S","0"],
                        ["0","(D)1H","A","I","K","2U","0"],
                        ["0","0","0","0","0","G","0"],
                        ["0","(C)C","O","C","O","A","0"],
                        ["0","0","0","0","0","3R","0"],
                        ["0","(A)4T","A","F","F","Y","0"],
                    ]
                },  

                code: {
                    answer: "HURT",
                    userArray: ["","","",""]
                },

            }

        },      

        // ⭐ Helio Athletics
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Read each poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Language',
                            standard: 'CCRA.L.5',
                        },
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
                            standard: 'CCRA.R.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.6',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.9',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            standard: 'L.4.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            standard: 'L.4.5a',
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
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.9',
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
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            standard: 'L.5.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            standard: 'L.5.5a',
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
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4c',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.6',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.9',
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
                            standard: 'RL.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.6',
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
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I intercepted some secret letters from messengers of the Undermurk, but they are filled with too much flowery language... I cannot make sense of anything! You will interpret them for me.",
                    complete: "I see... The Undermurk's battle plans have been set. We must remain vigilant!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "underworld-athletics.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text:   "Bunbear's Letter"
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "In twilight's embrace, we hide like shadows,<br> \
                                            with cautious movement, soft as meadows.<br> \
                                            We glide like whispers through nighttime's veil,<br> \
                                            avoiding the storm; shunning the gale.<br> \
                                            <br> \
                                            Our strength is a feather's silent flight,<br> \
                                            a plan like a seed that sprouts in the night.<br> \
                                            Together, we unite at the quiet moon's light,<br> \
                                            for a sneaky battle \u2014 oh what a fright!"
                                }
                                   
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-25%",
                                rotate: "-5deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text:   "Grommen's Letter"
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Under the sun, banners blaze like fire.<br> \
                                            With roaring cries, we rise up higher.<br> \
                                            Fear is a ghost! So onward we ride,<br> \
                                            marching through fields; a booming stride.<br> \
                                            <br> \
                                            Our strength is a storm! Our foes? Brittle clay.<br> \
                                            Blazing with force, we enter the fray.<br> \
                                            Strong as lions made of iron and steel,<br> \
                                            we battle for victory, and never shall kneel."
                                }
                                   
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "25%",
                                rotate: "4deg",
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
                            dimension: {
                                width: "full",
                                height: "auto",
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'center'
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
                        title: "[<g>1.] In which line did Grommen include onomatopoeia?",
                        correctIndex: 1,
                        paragraph: [
                            "Line th{r}ee",
                            "Line {f}our",
                            "Li{n}e seven",
                        ],
                    },

                    {
                        title: "[<g>2.] Line 1 of Bunbear\'s letter contains a(n):",
                        correctIndex: 0,
                        paragraph: [
                            'Sim{i}le',
                            'Metaph{o}r',
                            'O{n}omatopoeia',
                        ]
                    },

                    {
                        title: "[<g>3.] Line 5 of Bunbear\'s letter contains a(n):",
                        correctIndex: 2,
                        paragraph: [
                            'All{u}sion',
                            'Si{m}ile',
                            'Metapho{r}', 
                        ]
                    },

                    {
                        title: "[<g>4.] Whose letter is more aggressive in tone?",
                        correctIndex: 1,
                        paragraph: [
                            'Bun{b}ear\'s letter',
                            'Grommen\'s l{e}tter',
                            'Bo{t}h are equally aggressive',
                        ]
                    },

                ],  

                code: {
                    answer: "FIRE",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ ZeebPlex
        {

            info: {
                type: 'challenge',
                title: "ZeebPlex",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Decode the note using the secret code, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Poetic Elements",
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
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
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
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "I've been fixing up an old, broken game, and I found a coded note inside. I need to know what it says, but I'm swamped trying to close up for the night. Want to decode it for me?",
                    complete: "Well, that was strange... Let's just pretend we never found that note, okay?"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "zeeb-plex.png",
                },

                blockArray: [
                    {
                        tag: {
                            text: "Coded Note:",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "WHEN &nbspTHE &nbspSHADOWS &nbspSLEEP<br> \
                                            LOOK &nbspAROUND &nbspWITH &nbspA &nbspPEEP<br> \
                                            NEVER &nbspLET &nbspTHE &nbspDARKNESS &nbspCREEP"
                                }
                                                              
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-10%",
                                rotate: "1deg",
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'default'
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
                            passage: {
                                font: 'patterns',
                                size: 'mediumSmall',
                                align: 'center',
                            },
                            cryptogram: {
                                font1: {
                                    font: 'default',
                                    size: 'medium'
                                },
                                font2: {
                                    font: 'patterns',
                                    size: 'medium'
                                },
                                style: {
                                    dimension: {
                                        width: "percent75",
                                        height: "auto",
                                    },
                                }
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
                        title: "[<g>1.] How many stanzas are in this poem?",
                        correctIndex: 2,
                        paragraph: [
                            "Si{x}",
                            "Fift{e}en",
                            "{O}ne",
                        ],
                    },

                    {
                        title: "[<g>2.] What part of a poem involves the rhythmic structure of stressed and unstressed syllables?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            'R{h}yme',
                            '{V}erse',
                            '{M}eter',
                            'To{n}e',
                        ]
                    },

                    {
                        title: "[<g>3.] The first line of this poem has ___ syllables.",
                        correctIndex: 1,
                        paragraph: [
                            'Fo{u}r',
                            'Fiv{e}',
                            'Si{x}',
                        ]
                    },

                    {
                        title: "[<g>4.] Which line of this poem contains alliteration?",
                        correctIndex: 0,
                        paragraph: [
                            'Li{n}e 1',
                            'L{i}ne 2',
                            '{L}ine 3', 
                        ]
                    },


                ],  

                code: {
                    answer: "OMEN",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ Critterwerks
        {

            info: {
                type: 'challenge',
                title: "Critterwerks",
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Author's Purpose",
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
                            standard: 'CCRA.R.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.6',
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
                            standard: 'RL.4.2',
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
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Oh, hey there! I got a weird poem in the mail. Not my thing, poems... although this one does seem pretty important. But what's it about? An order, I think? Help me out here!",
                    complete: "I can't wait to get started on that mechanical cat. Thanks for stopping by!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "critterwerks.png",
                },

                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Request',
                                },
                                subtitle: {
                                    text: "By Tater Drift",
                                },
                                passage: {
                                    text:  "Dearest Topsy, maker of machines,<br> \
                                           craft me a robot, with skills so keen.<br> \
                                           I require precision in every detail,<br> \
                                           perfection in design, without any fail.<br> \
                                           <br> \
                                           To balance work with restful grace,<br> \
                                           it's important to move at a mindful pace.<br> \
                                           In this busy world of constant strife,<br> \
                                           rest is the essence of a well-lived life.<br> \
                                           <br> \
                                           And so, this machine must excel in one thing:<br> \
                                           A master of napping \u2014 yes, that's what I need.<br> \
                                           For in my pursuit of restful art,<br> \
                                           A mechanical cat will play the part!"
                                }
                                                               
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
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
                        title: "[<g>1.] What is the author's purpose of this poem?",
                        correctIndex: 1,
                        paragraph: [
                            "It's impor{t}ant to take naps",
                            "Tater Drift wants Topsy to {m}ake a robot cat",
                            "Tops{y} is a skilled maker of mechanical pets",
                        ],
                    },

                    {
                        title: "[<g>2.] What is the theme?",
                        correctIndex: 0,
                        paragraph: [
                            'It\'s important to balance work with r{e}st',
                            'Pre{c}ision is required when designing robots',
                            'Cats are masters of na{p}ping',
                        ]
                    },

                    {
                        title: "[<g>3.] Which word does [<u>not] describe the speaker's tone?",
                        correctIndex: 2,
                        paragraph: [
                            'R{e}spectful',
                            'Preci{s}e',
                            'Fo{o}lish', 
                        ]
                    },

                    {
                        title: "[<g>4.] The mood of this poem is:",
                        correctIndex: 1,
                        paragraph: [
                            'Extremely seriou{s}',
                            'Unexpectedly {w}himsical',
                            'Dist{u}rbingly gloomy',
                        ]
                    },

                ],  

                code: {
                    answer: "MEOW",
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

  