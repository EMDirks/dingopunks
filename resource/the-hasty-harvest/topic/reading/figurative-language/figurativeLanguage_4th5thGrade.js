const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/reading/figurative-language/preview-4th-5th-grade.png",
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
                    text: "Read each passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Similes",
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
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.5a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            grade: [4],
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            grade: [4],
                            standard: 'RI.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.5a',
                        },   
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4',
                        },   
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4a',
                        },   
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            grade: [5],
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            grade: [5],
                            standard: 'RI.5.10',
                        },            
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.1',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.4',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.10',
                        }, 
                        
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Welcome to the farm. It's getting dark fast! Good thing I've got a whole cart full of candles. Would you look through this pile of supplies and figure out what I have?",
                    complete: "Might wanna avoid the Frantic Factory after dark, okay?"
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
                                    file: "1.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Eternal Ember]",
                                },
                                passage: {
                                    text: "The Eternal Ember pauses time when lit, freezing the world around it like a picture. This treasured candle lets everyone enjoy the glow of harvest time for much longer, like capturing fireflies in a jar. However, its power is often misused, so it's been hidden away for decades.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Guardian Flame]",
                                },
                                passage: {
                                    text: "Years ago, a traveling wizard gifted a young farmer the Guardian Flame, a candle that protects crops like a fortress shields a kingdom. Thanks to its powerful magic, the farmer's fields thrived, ensuring prosperity for the entire village. If only it could protect us from the Fallcrawlers!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "-4%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "3.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Wanderlight]",
                                },
                                passage: {
                                    text: "Last autumn, the Wanderlight mysteriously appeared in the village square. This strange candle gives crops the ability to pick themselves and move on their own. It's incredible to watch those tiny pilgrims march to the market! Because of this, we have fresh crops every morning, as reliable as the sunrise.",
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
                        title: "[<g>1.] How many similes are in the Eternal Ember?",
                        correctIndex: 1,
                        paragraph: [
                            "O{n}e",
                            "{T}wo",
                            "Th{r}ee",
                        ],
                    },

                    {
                        title: "[<g>2.] What is a simile in the Guardian Flame?",
                        correctIndex: 1,
                        paragraph: [
                            '\"...a tra{v}eling wizard...\"',
                            '\"...like a fo{r}tress shields a kingdom.\"',
                            '\"...the farm{e}r\'s fields thrived...\"',

                        ]
                    },

                    {
                        title: "[<g>3.] What is a simile in the Wanderlight?",
                        correctIndex: 2,
                        paragraph: [
                            '\"...the Wan{d}erlight mysteriously appeared...\"', 
                            '\"...those tiny pilgri{m}s..."',
                            '\"...as reliabl{e} as the sunrise.\"',
                        ]
                    },

                    {
                        title: "[<g>4.] What does the Wanderlight's simile mean?",
                        correctIndex: 0,
                        paragraph: [
                            'Dep{e}ndably and consistently',
                            'S{l}owly and cautiously',
                            'Brightly and lo{u}dly',
                        ]
                    },

                ],  

                code: {
                    answer: "TREE",
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
                    text: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Metaphors",
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
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.5a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4b',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.5',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.5a',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4',
                        },   
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4a',
                        },  
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4b',
                        },  
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.1',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.4',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.5',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.10',
                        }, 
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "Oh? Visitors? Hello, hello! I have so much wisdom to share, but no friends to share it with. Did you know I just wrote a new poem? Maybe you can read it for me and tell me what you think!",
                    complete: "Something stirs beneath my roots... Leave now, and save yourself!"
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
                                    text: 'Flickering Faces',
                                },
                                subtitle: {
                                    text: "By Stefan Sage",
                                },
                                passage: {
                                    text:   "In fields like fire, their candles shine \u2014<br> \
                                            jack-o-lanterns that we design!<br> \
                                            By day, they\'re suns with toothy delight.<br> \
                                            At night, they\'re moons that glow so bright.<br> \
                                            <br> \
                                            Their eyes are stars in twilight\'s hand,<br> \
                                            mouths like caves where darkness stands.<br> \
                                            Candles flicker and shadows dance; <br> \
                                            with a glow, the spirits prance.<br> \
                                            <br> \
                                            Scaring off evil with grinning lights,<br> \
                                            they keep us safe on autumn nights!<br>"
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
                    type: "crossword"
                },

                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which stanza contains two metaphors: [<u>first], [<u>second], or [<u>third]?',
                        'B. Does line 4 have a metaphor? (YES/NO)',
                        'C. What are jack-o-lanterns compared to in line 3?',     
                        'D. The metaphor in line 5 compares eyes to:',
                        
                    ],
                    puzzle: [
                        ["0","(B)Y","4E","(D)S","0","0","0"],
                        ["0","0","0","T","0","0","(A)F"],
                        ["0","0","0","A","0","0","2I"],
                        ["0","0","0","1R","0","0","R"],
                        ["0","0","0","(C)S","U","N","3S"],
                        ["0","0","0","0","0","0","T"],
                    ]
                },  

                code: {
                    answer: "RISE",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ Camp Gnomad
        {

            info: {
                type: 'challenge',
                title: "Camp Gnomad",
                asset: "camp-gnomad.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Personification",
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
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.5',
                        },  
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4',
                        },   
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.1',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.4',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.10',
                        }, 
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "We ain't waiting around for those Fallcrawlers to eat us. We're leavin' this creepy place! While we pack up, can you put together the pieces of our star chart?",
                    complete: "Farewell, farewell. We will miss you, new friend. See you on the other side!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "camp-gnomad.png",
                },

                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Apples jumped from the trees.",
                                }, 
                                backgroundImage: {
                                    file: "1.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The crops need to be watered.",
                                }, 
                                backgroundImage: {
                                    file: "2.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "We couldn't get through the corn maze.",
                                }, 
                                backgroundImage: {
                                    file: "3.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The cider smelled as delicious as freshly-baked pie.",
                                }, 
                                backgroundImage: {
                                    file: "4.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The hay bales huddled together in the corner.",
                                }, 
                                backgroundImage: {
                                    file: "5.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The sunset last night was stunning.",
                                }, 
                                backgroundImage: {
                                    file: "6.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The pumpkins patiently waited to be picked.",
                                }, 
                                backgroundImage: {
                                    file: "7.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The wind howled through the forest.",
                                }, 
                                backgroundImage: {
                                    file: "8.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The frost tiptoed across the field.",
                                }, 
                                backgroundImage: {
                                    file: "9.png"
                                }
                            }
                        ],
                    },
    

                ],  

                style: { 
                    block: {
                        dimension: {
                            width: "puzzleWidth",
                            height: "puzzleHeight",
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
                                align: 'center',
                                puzzle: 'default'
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
                        title: "[<g>1.] How many puzzle pieces contain personification?",
                        correctIndex: 1,
                        paragraph: [
                            "Fo{u}r",
                            "{F}ive",
                            "{S}ix",
                        ],
                    },

                    {
                        title: "[<g>2.] What does the top left puzzle piece mean?",
                        correctIndex: 0,
                        paragraph: [
                            "Apples fe{l}l from the trees.",
                            "Someo{n}e picked the apples.",
                            "Apples were growing rapi{d}ly.",
                        ],
                    },

                    {
                        title: "[<g>3.] The piece without a star could be personified as:",
                        correctIndex: 1,
                        paragraph: [
                            '\"The crops {n}eed water like bees need flowers.\"',
                            '\"Th{e} crops are thirsty.\"',
                            '\"Hurry! The crops are ready to {h}arvest.\"',
                        ],
                    },

                    {
                        title: "[<g>4.] Which puzzle piece is NOT personification?",
                        correctIndex: 2,
                        paragraph: [
                            'The {b}ottom left piece',
                            'The {m}iddle piece',
                            'The top right pi{e}ce',
                        ],
                    },

                ],  

                code: {
                    answer: "FLEE",
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
                    text: "Read each label, then type in the answers below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Hyperbole",
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
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [4],
                            standard: 'L.4.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [4],
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [4],
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            grade: [5],
                            standard: 'L.5.5',
                        },  
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4',
                        },   
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            grade: [5],
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.1',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.4',
                        }, 
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            grade: [5],
                            standard: 'RL.5.10',
                        }, 
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "Greetings. I am Hollow Jack. I put labels on boxes. But these new labels don't make sense. You must read them. Help them make sense. Got it?",
                    complete: "Attention! For your own health and safety, you must leave now."
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
                            text: "Label 1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This pile of peppers could [<u>touch the sky].",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "2%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Label 2",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This massive pumpkin [<u>weighs a ton].",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Label 3",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This pecan pie can [<u>feed an entire village].",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "2%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Label 4",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "It would [<u>take a lifetime] to find a way out of this corn maze!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "-1%",
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
                        title: "[<g>1.] 'Touch the sky' means the pile of peppers is:",
                        word: "[T]ALL",
                    },
                    {
                        title: "[<g>2.] 'Weighs a ton' means the pumpkin is extremely:",
                        word: "HE[A]VY",
                    },
                    {
                        title: "[<g>3.] 'Feed an entire village' implies the pecan pie is:",
                        word: "LA[R]GE",
                    },
                    {
                        title: "[<g>4.] 'Take a lifetime' means something will take very:",
                        word: "L[O]NG",
                    },
                ],

                code: {
                    answer: "TARO",
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


  