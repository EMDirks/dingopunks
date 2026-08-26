const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/reading/making-inferences/thumbnail-4th-5th-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    challengeArray: [

        // ⭐ chef gumbo
        {

            info: {
                type: 'challenge',
                title: "Dining Hall",
                asset: "chef-gumbo.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About an Informational Text",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.6",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.4",
                        "RL.4.10",
                        "L.5.4",
                        "L.5.6",
                        "RF.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RF.5.4c",
                        "RI.5.1",
                        "RI.5.4",
                        "RI.5.8",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.6",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "Us counselors need our strength if we\'re gonna fight off them pirates, so I\'m cookin\' up me old friend\'s shrimp stew! Help me make sense of this recipe, will ye?",
                    complete: "Ha! I knew me recipe made sense. I never doubted it for a second. Thanks fer helpin\' me prove it!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "chef-gumbo.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Mr. Bart\'s Shrimp Stew',
                                },
                                subtitle: {
                                    text: 'Transcribed by First Mate Topsy',
                                },
                                passage: {
                                    text:   "\"I ain\'t no cook, but I know my way around a ship\'s galley! So gather up yer ingredients, landlubber: oil, flour, onion, celery, tomatoes, shrimp, saltwater, and whatever washed ashore today.\
                                    <br>\
                                    First, mix oil and flour in a pot, then cook till it\'s brown as old driftwood. No burnin\' it, matey, or I\'ll feed ye to the gulls! Then toss in some chopped onions and celery. Use the good stuff, not those slimy scraps from the bilge.\
                                    <br>\
                                    Finally, finish with a flair! Sprinkle in whatever treasures ye found on the beach: a pickle, a peanut, even a bit o\' seaweed will do. Serve over rice... or don\'t. I ain\'t yer mother.\""
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-2deg",
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
                            width: "percent50",
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
                                align: 'left'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
                                brSplit: 'default',
                                indent: 'default'
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
                        title: "[<g>1.] We can infer that Mr. Bart is a ___ .",
                        correctIndex: 1,
                        paragraph: [
                            "Coo{k}",
                            "{S}ailor",
                            "Lifeg{u}ard",
                        ],
                    },
                    {
                        title: "[<g>2.] Which clue helps reveal Mr. Bart\'s job?",
                        correctIndex: 1,
                        paragraph: [
                            "He enjoys {v}egetables like \"onions and celery\"",
                            "{H}e uses slang like \"landlubber\" and \"matey\"",
                            "He instructs the reader to \"fin{i}sh with a flair\""
                        ],
                    },
                    {
                        title: "[<g>3.] Which quote shows that Mr. Bart is sarcastic?",
                        correctIndex: 2,
                        paragraph: [
                            "\"So gather up yer ingre{d}ients...\"",
                            "\"Then tos{s} in some chopped onions and celery.\"",
                            "\"I a{i}n\'t yer mother.\"",
                        ],
                    },
                    {
                        title: "[<g>4.] Use context clues to infer the meaning of \"galley.\"",
                        correctIndex: 0,
                        paragraph: [
                            "A shi{p}\'s kitchen",
                            "A roo{m} filled with paintings",
                            "An empty ha{r}bor",
                        ],
                    },
                ],  
                code: {
                    answer: "SHIP",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ driftwood dan
        {

            info: {
                type: 'challenge',
                title: "Driftwood Beach",
                asset: "driftwood-dan.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Fictional Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.6",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "Hey dude! I found a message in a bottle with a secret code! Who knows... maybe it has something to do with the pirate invasion. Wanna take a look?",
                    complete: "Oh... so the note had nothing to do with the pirates. Bummer, bro!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "driftwood-dan.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Beast of the Beach',
                                },
                                passage: {
                                    text:   "It was dusk, and the shadows stretched long across the beach. Duke, a nervous seagull, began his nightly patrol along the walls of his sand castle. He watched the shoreline with nervous eyes, certain a creeping horror would wash in with the tide, even though nothing scary ever had. But Duke\'s imagination loved to fool him. And then... it happened.\
                                    <br>\
                                    From the wet sand came a flat, rubbery shape with five wiggly arms reaching in every direction. Duke squawked as it crawled toward his castle. The sand crumbled, but only because sand always crumbles. Still, Duke\'s mind turned every wiggle into a huge, frightening attack.\
                                    <br>\
                                    By morning, the sand castle was in ruins. And when the tide rolled back, the beast was nowhere to be seen. What was it, you ask? Well, look at the clues. It\'s up to you to find out."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "3deg",
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
                                translateX: "2%",
                                translateY: "8%",
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
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
                                brSplit: 'default',
                                indent: 'default'
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

            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] This story\'s theme is [<i>imagination can ___ you.]",
                        word: "FOO[L]",
                    },
                    {
                        title: "[<g>2.] Is Duke fearless, obedient, or paranoid?",
                        word: "PARAN[O]ID",
                    },
                    {
                        title: "[<g>3.] This \"beast\" is actually just a:",
                        word: "STARFI[S]H",
                    },
                    {
                        title: "[<g>4.] Paragraph __ has the most clues about the beast.",
                        word: "[T]WO",
                    },
                ],
                code: {
                    answer: "LOST",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ broken animatronic
        {

            info: {
                type: 'challenge',
                title: "Junk Pile",
                asset: "melodina.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter and look at the diagram, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Visual",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.4",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.4",
                        "RI.4.5",
                        "RI.4.6",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "L.5.4",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.4",
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
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "Oh, hello. Looks like the counselors want me to build a trap to stop the pirates. This is my chance to be noticed; I don\'t want to mess anything up! Will you help me get this right?",
                    complete: "I knew I still had some spark left in me. I\'m ready to get to work!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "melodina.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Dear broken animatronic,\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; A trap is a good way to catch greedy, treasure-obsessed pirates. Let\'s take inspiration from a rat trap! It won\'t hurt the pirates, but it\'ll keep them stuck as long as it\'s made from a strong material. Driftwood might be common, but it\'s a bad choice.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; Think you can build something like that? Just keep in mind, we don\'t have much time. You\'ll need to work quickly.\
                                    <br>\
                                    <br>\
                                    - Your fellow camp counselors"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "6%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "cc18_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "11%",
                                rotate: "4deg",
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
                                translateX: "4%",
                                translateY: "6%",
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
                        dimension: {
                            width: "percent40",
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Why are there gold coins inside the trap?",
                        correctIndex: 2,
                        paragraph: [
                            "Gold is the same color {a}s cheese",
                            "Gold w{i}ll make the trap much heavier",
                            "Greedy pirate{s} love gold",
                        ],
                    },
                    {
                        title: "[<g>2.] Based on the diagram, would this trap also work for catching rats?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Ye{s}",
                            "{N}o",
                        ],
                    },
                    {
                        title: "[<g>3.] How do you know the diagram was drawn fast?",
                        correctIndex: 0,
                        paragraph: [
                            "The lines are messy {a}nd uneven",
                            "The lines are drawn in blac{k} ink",
                            "The coi{n}s look too shiny",
                        ],
                    },
                    {
                        title: "[<g>4.] Why is driftwood a bad choice for the trap?",
                        correctIndex: 1,
                        paragraph: [
                            "It\'s too heavy to li{f}t",
                            "It\'s weak and mi{g}ht break",
                            "The c{o}unselors need it for firewood",
                        ],
                    },
                ],  
                code: {
                    answer: "SNAG",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ madame mystica
        {

            info: {
                type: 'challenge',
                title: "Mystic Hideaway",
                asset: "madame-mystica.png",
                state: "incomplete",
                hint: {
                    text: "Sort each vision into the correct column, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Multiple Related Texts",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.6",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.6",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.9",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "This morning, I saw swirling visions of danger and destiny! I wrote them all down, but everything is mixed up like tangled seaweed. Will you sort them, traveler?",
                    complete: "Yes! YES! My visions sing and sparkle with truth. You have helped the universe speak to me!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Visions About Pirates",
                        "Visions About Camp Counselors",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Paths",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Far from the beach, I sensed boots and peg legs creeping along hidden paths.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Ocean",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I saw the ocean reaching out for our friend, Driftwood Dan, carrying him away from the camp. As he floated out to sea, he didn\'t even seem surprised.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Skies",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I saw swords gleaming in red skies, with cannons booming as the daylight faded.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Shore",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "In my mind, I caught a glimpse of ships with black flags dropping their anchors near the shore.",
                                }, 
                            }
                        ],
                        correctIndex: 0
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. How many of these visions are about pirates?',
                        'B. Do the pirates plan to fire their cannons at [<u>dawn], [<u>noon], or [<u>dusk]?',
                        'C. [<u>Right] or [<u>wrong]: in \"Paths,\" the quote \"boots and peg legs\" shows that this fortune is about the camp counselors.',     
                        'D. Does \"Ocean\" allow us to infer that Driftwood Dan is easy-going and [<u>chill], or anxious and [<u>tense]?',                    
                    ],
                    puzzle: [
                        ["0","(A)4T","0","0","0","0","(D)C"],
                        ["0","H","0","0","0","0","1H"],
                        ["(C)W","R","O","3N","G","0","I"],
                        ["0","E","0","0","0","0","L"],
                        ["0","E","0","0","0","0","L"],
                        ["0","0","(B)D","2U","S","K","0"],
                    ]
                },  
                code: {
                    answer: "HUNT",
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