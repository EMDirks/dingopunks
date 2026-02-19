const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/reading/poetry/preview-4th-5th-grade.png",
        timerLabel: "TIME TO SUNSET"
    },
    challengeArray: [

        // ⭐ Applegrim Orchard
        {

            info: {
                type: 'challenge',
                title: "Applegrim Orchard",
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Poetic Elements",
                    commonCore: [
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
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RL.4.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
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
                character: "Stefan the Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "Gather 'round and lend an ear. Beneath my roots, treasure is near! Hidden from moonlight, it's quite a sight \u2014 can you find the riches bright?",
                    complete: "Taste the echoes of the past. Ensure that ancient memories last!"
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
                                    text: 'Secrets in the Soil',
                                },
                                subtitle: {
                                    text: "By Stefan",
                                },
                                passage: {
                                    text:   "Beneath my roots and heavy lumber,<br> \
                                            exists a tomb where riches slumber.<br> \
                                            Gold and gems, untouched by day,<br> \
                                            sleep in the soil where secrets stay.<br> \
                                            <br> \
                                            Every once in fleeting time, when the moon is nice and bright,<br> \
                                            apples plucked from branches can reveal a golden sight:<br> \
                                            coins from days of yore, concealed within my fruits \u2014<br> \
                                            relics from the tomb below, brought up by my roots!<br> \
                                            <br> \
                                            So taste the echoes of the past,<br> \
                                            ensure that ancient memories last:<br> \
                                            a golden coin from a long-lost age,<br> \
                                            and wisdom from me, Stefan the sage."
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
                        'A. Which line has alliteration: [<u>four], [<u>five], or [<u>nine]?',
                        'B. How many stanzas are in this poem?',
                        'C. Who is the speaker of \"Secrets in the Soil?\"',     
                        'D. Is the rhyme scheme of this poem ABAB? (YES/NO)',
                        
                    ],
                    puzzle: [
                        ["0","0","0","(B)T","0","0","0"],
                        ["0","0","0","H","0","0","0"],
                        ["(A)F","3O","U","1R","0","0","0"],
                        ["0","0","0","E","0","0","0"],
                        ["0","(C)S","4T","E","F","A","(D)N"],
                        ["0","0","0","0","0","0","2O"],
                    ]
                },  

                code: {
                    answer: "ROOT",
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
                    text: "Read each poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Reading Comprehension",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'CCRA.R.6',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'CCRA.R.8',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'CCRA.R.9',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            standard: 'L.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            standard: 'L.4.5b',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RI.4.9',
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
                            standard: 'L.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Language',
                            standard: 'L.5.5b',
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
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RI.5.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RI.5.8',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RI.5.9',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.4',
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
                    incomplete: "Mabel here! I'm in a bit of pickle. I have important mail to deliver to the farm, but I keep getting lost in this corn maze. Can you take care of these letters for me?",
                    complete: "Whew, you really saved me. Thanks a bunch for helping with those letters!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "mallow-maze.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text:   "To: Gila Goose <br>\
                                    From: Farmer Bramble "
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Lay your golden eggs <br>\
                                            By the old oak near the stream <br>\
                                            Where shadows bring peace"
                                }   
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "12%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text:   "To: The Scarecrow <br>\
                                    From: Captain Fishbeard "
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Stand watch in the dark <br>\
                                            Wave your arms to scare off harm <br>\
                                            'Til morning brings light"
                                }   
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "15%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text:   "To: Ivy the Spider <br>\
                                    From: Marty Shortnose "
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Follow ancient roots <br>\
                                            To the maze's hidden heart <br>\
                                            Treasure lies within"
                                }   
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "30%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text:   "To: Hollow Jack <br>\
                                    From: Topsy "
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Hide the harvest key <br>\
                                            In the barn's secret hayloft <br>\
                                            Where no eyes can see"
                                }   
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "33%",
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
                                height: "auto",
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
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] Why should Gila Goose lay eggs by the old oak?",
                        correctIndex: 1,
                        paragraph: [
                            "The stream will keep her eggs h{y}drated",
                            "Shadows will kee{p} her eggs hidden and safe",
                            "There'{s} plenty of room under the tree",
                        ],
                    },

                    {
                        title: "[<g>2.] When can the Scarecrow stop waving his arms?",
                        correctIndex: 0,
                        paragraph: [
                            'M{o}rning',
                            'Midnigh{t}',
                            'Ne{v}er',
                        ]
                    },

                    {
                        title: "[<g>3.] What is meant by \"the maze's hidden heart?\"",
                        correctIndex: 2,
                        paragraph: [
                            'The maze\'s his{t}orical origins',
                            'The maze\'s unknown dang{e}rs',
                            'The maze\'s central or innermo{s}t area', 
                        ]
                    },

                    {
                        title: "[<g>4.] What do all four haikus have in common?",
                        correctIndex: 1,
                        paragraph: [
                            'They eac{h} involve nighttime',
                            '{T}hey each give an instruction',
                            'The{y} each contain a warning',
                        ]
                    },

                ],  

                code: {
                    answer: "POST",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ Candlewick's Cart
        {

            info: {
                type: 'challenge',
                title: "Candlewick's Cart",
                asset: "candlewicks-cart.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.L.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
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
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.5',
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
                            standard: 'L.4.5a',
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
                            standard: 'RL.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
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
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Howdy! Nightfall is coming, and I've just received a delivery of 'Sneezy Spark Candles.' Problem is, I'm not really sure what they're supposed to do... Can you take a look and let me know?",
                    complete: "Ahhhhh-choo! Thanks a million for figuring out those candles! You're a real lifesaver."
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
                                    text: 'Sneezy Spark Candles',
                                },
                                passage: {
                                    text:   "Its fire flickers softly, [<u>like a spell upon the unsuspecting];<br> \
                                            a playful spirit of light and whimsy, where calmness once lingered.<br> \
                                            The flame dances and laughs \u2014 it's a clown's cheer in the night!<br> \
                                            <br> \
                                            Light this wick with cautious hands, for its power is profound and surprising.<br> \
                                            Its glow tickles noses with unseen fingers, spreading sneezes far and wide,<br> \
                                            swiftly sweeping through the room.<br> \
                                            <br> \
                                            Boom! Laughter erupts like a volcano \u2014<br> \
                                            peace replaced with whimsy and surprise!"
                                }
                                 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
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
                            justifyContent: "spaceBetween",
                            alignItems: "center"
                        }
                    },
                    
                    contentArray: [
                        {
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'left'
                            },
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
                        title: "[<g>1.] Which of the following is personification?",
                        correctIndex: 2,
                        paragraph: [
                            "\"The flame dances and laug{h}s...\"",
                            "\"Its glo{w} tickles noses...\"",
                            "Both of t{h}e above",
                        ],
                    },

                    {
                        title: "[<g>2.] The underlined text in line 1 is a(n):",
                        correctIndex: 1,
                        paragraph: [
                            'Meta{p}hor',
                            'Simil{e}',
                            'O{n}omatopoeia',
                        ]
                    },

                    {
                        title: "[<g>3.] Line 3 compares a candle's flame to \"a clown\'s cheer in the night.\" This is a(n):",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            'S{i}mile',
                            'Hyperbo{l}e',
                            'Met{a}phor', 
                            '{O}nomatopoeia',
                        ]
                    },

                    {
                        title: "[<g>4.] True or false: The third stanza contains both hyperbole and a simile.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            '{T}rue',
                            'Fal{s}e',
                        ]
                    },

                ],  

                code: {
                    answer: "HEAT",
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
                    text: "Read each poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
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
                            standard: 'CCRA.R.8',
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
                            standard: 'RL.4.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.8',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.10',
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
                            standard: 'RI.5.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.8',
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
                            standard: 'RL.5.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.9',
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
                    incomplete: "Attention! Attention! This is Hollow Jack. Unknown produce labels found on factory floor. Immediate identification required. Proceed now.",
                    complete: "Produce identified. Problem solved. Back to work. You must leave."
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
                            text: "Label #84",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Pick one of these fruits, round and bright.<br> \
                                            Use a marker, and sketch it right!<br> \
                                            Make a cut 'round the top for a lid.<br> \
                                            Pull out the seeds; the insides you'll rid.<br> \
                                            Keep very steady, and carve with care.<br> \
                                            Inscribe a face with a spooky stare.<br> \
                                            Now place a candle to make it glow.<br> \
                                            Set it outside for all to know!"
                                }
                                 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "-15%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Label #192",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "As a farmer, all I do is grow.<br> \
                                            Veggies and fruits are all that I know.<br> \
                                            Of my harvest, one fruit shines bright.<br> \
                                            Creamy in texture, with a taste to delight.<br> \
                                            Antioxidants to boost your body's defense.<br> \
                                            Delicious and green, they just makes sense.<br> \
                                            Omega-3s for a balanced meal.<br> \
                                            Supporting wellness, they're the real deal."
                                }
                                
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "15%",
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
                            width: "auto",
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
                                size: 'small'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
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
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] The author's purpose of Label #84 is to:",
                        correctIndex: 0,
                        paragraph: [
                            'Give instructions on making a ja{c}k-o-lantern',
                            'Of{f}er advice on how to pick a pumpkin',
                            'Suggest the best location to grow {p}umpkins',
                        ],
                    },

                    {
                        title: "[<g>2.] The first letter of every line in Label #84 spells \"PUMPKINS.\" This type of poem is called a(n):",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            'H{a}iku',
                            'Simil{e}',
                            'Acr{o}stic',
                            'Ba{l}lad',
                        ]
                    },

                    {
                        title: "[<g>3.] What is the author's intent of Label #192? ",
                        correctIndex: 0,
                        paragraph: [
                            'To desc{r}ibe the health benefits of avocados',
                            'To describe the heal{t}h benefits of potatoes',
                            'To explain the process of growing fru{i}ts', 
                        ]
                    },

                    {
                        title: "[<g>4.] Which line supports the intent of Label #192?",
                        correctIndex: 2,
                        paragraph: [
                            '\"I\'m a farmer; all I do is grow.\"',
                            '\"Sharing fresh fruit is all that I know.\"',
                            '\"Supporting well{n}ess, they\'re the real deal.\"',
                        ]
                    },

                ],  

                code: {
                    answer: "CORN",
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

  