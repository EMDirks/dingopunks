const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/reading/poetry/preview-4th5th-grade.png",
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
                    text: "Read both poems, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Elements and Structure",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.5",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RI.5.5",
                        "RI.5.7",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "I have a pair of old shanties me captain used to sing, with recipes for hungry sailors. I'd like to cook 'em up \u2014 the campers need some grub to face the pirates! Will ye lend a hand?",
                    complete: "Har har! You've got the heart of a true sailor! Thanks for helpin' me bring these ol' recipes back."
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
                                    text: 'Bucket O\' Beans',
                                },
                                subtitle: {
                                    text: 'By Captain Fishbeard',
                                },
                                passage: {
                                    text:   "In your biggest bucket, the butter shall plop<br> \
                                    with onions and garlic that sizzle and sing.<br> \
                                    Splash in some broth, and a bay leaf on top,<br> \
                                    with tomatoes so red \u2014 aye, what a thing!<br> \
                                    <br> \
                                    Now dump in those beans, and stir with a grin,<br> \
                                    plus a handful of salt (don\'t measure, just toss).<br> \
                                    Served up with a pie, the feast can begin.<br> \
                                    So enjoy every bite, don't brush and don't floss!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "13%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Salty Sea Pie',
                                },
                                subtitle: {
                                    text: 'By Captain Fishbeard',
                                },
                                passage: {
                                    text:   "Take flour and butter, then slice with a flair.<br> \
                                    Roll up the crust without any care.<br> \
                                    Fish and potatoes? Stack 'em up high.<br> \
                                    Throw in some thyme, then shout to the sky!<br> \
                                    <br> \
                                    Kiss the crust, then brush it with egg.<br> \
                                    Sprinkle the top with a bit o' nutmeg.<br> \
                                    This salty sea pie will make you spin \u2014<br> \
                                    a dance of joy from deep within!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-9%",
                                rotate: "-3deg",
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
                        title: "[<g>1.] Who is the author of both poems?",
                        correctIndex: 1,
                        paragraph: [
                            "Che{f} Gumbo",
                            "Captain Fish{b}eard",
                            "None of the abo{v}e",
                        ],
                    },
                    {
                        title: "[<g>2.] Both poems have the same number of stanzas, but different _____ .",
                        correctIndex: 2,
                        columns: 2,
                        paragraph: [
                            "A{u}thors",
                            "{R}eaders",
                            "Rhyme sch{e}mes",
                            "To{n}es",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the rhyme scheme of \"Salty Sea Pie?\"",
                        correctIndex: 0,
                        paragraph: [
                            "A{A}BB",
                            "ABA{B}",
                            "AB{C}ABC",
                        ],
                    },
                    {
                        title: "[<g>4.] Both poems are structured in a way that:",
                        correctIndex: 1,
                        paragraph: [
                            "Describes a sailor's daily {t}asks",
                            "Provides step-by-step instructio{n}s to the reader",
                            "Expl{a}ins the steps you can take to eat healthy",
                        ],
                    },
                ],  
                code: {
                    answer: "BEAN",
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
                    text: "Read the poem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Theme and Key Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.5",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.6",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "Hey there! I took a break from walking the beach to write a little poem for the counselors. Just something to lift their spirits. Can you read it and let me know if it makes sense?",
                    complete: "Aw, thanks for the help! I'm gonna deliver this to the other counselors right now."
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
                                    text: 'Simple as That',
                                },
                                subtitle: {
                                    text: 'By Driftwood Dan',
                                },
                                passage: {
                                    text:   "The pirates are coming.<br> \
                                    I can feel it in the air,<br> \
                                    like a storm rolling in.<br> \
                                    Their black sails darken the horizon.<br> \
                                    <br> \
                                    But this camp isn't just cabins and trails.<br> \
                                    It's us, the counselors \u2014 every one of us,<br> \
                                    working together as a team.<br> \
                                    <br> \
                                    If you can build, then build.<br> \
                                    If you can fight, then fight.<br> \
                                    When we each do our part, we can handle anything.<br> \
                                    Stick together, and we'll send those pirates packing.<br> \
                                    <br> \
                                    Simple as that."
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
                        'A. The theme of \"Simple as That\" is that by working together as a _____ , you can handle big problems.',
                        'B. Does line [<u>one], [<u>two], or [<u>ten] contain key details that support this theme?',
                        'C. [<u>True] or [<u>false]: the counselors will have a better chance of defeating the pirates if they act alone.',     
                        'D. The last line of the poem shows that the speaker believes the theme is _____ , not complicated.',                    
                    ],
                    puzzle: [
                        ["0","(C)1F","A","L","(D)S","E","0"],
                        ["0","0","0","0","I","0","0"],
                        ["(B)T","0","0","0","M","0","0"],
                        ["2E","0","0","0","P","0","0"],
                        ["N","0","0","0","4L","0","0"],
                        ["0","0","0","(A)T","3E","A","M"],
                    ]
                },  
                code: {
                    answer: "FEEL",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ madame mystica
        {

            info: {
                type: 'challenge',
                title: "Mystic Hideaway",
                asset: "madame-mystica.png",
                state: "incomplete",
                hint: {
                    text: "Sort each vision into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.5b",
                        "L.4.6",
                        "RF.4.4",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.5b",
                        "L.5.6",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "Ah, you're here! This morning, my magic mirror showed me some strange visions. I wrote them all down, but I need help sorting and interpreting them. Are you up to the task?",
                    complete: "Ah, the pieces are coming together now \u2014 all thanks to your clever mind!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Visions With<br>Figurative Language",
                        "Visions Without<br>Figurative Language",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Vision: \"Flames\"",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "With visions as clear<br> \
                                    as a warm sunny day,<br> \
                                    a ship burns bright \u2014<br> \
                                    flames hiss in the bay!",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Vision: \"Ships\"",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Their ships are near.<br> \
                                    Their sails are black.<br> \
                                    The pirates jeer,<br> \
                                    ready to attack.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Vision: \"Treasure\"",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The early bird catches the worm.<br> \
                                    And so, I wake up early.<br> \
                                    In my mirror, I see gemstones:<br> \
                                    colorful stars glimmering in the dark.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Vision: \"Footsteps\"",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Footsteps in the sand<br> \
                                    Pirates landing at midnight<br> \
                                    This is what I saw",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Vision: \"Nothing\"",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I look in the mirror, but see nothing.<br> \
                                    So I listen, and hear nothing.<br> \
                                    I walk away, terrified.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Vision: \"Song of Sadness\"",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "My mirror sings a song of sadness.<br> \
                                    Pirates will bring a ton of madness.",
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
                                size: 'tiny',
                                align: 'center'
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
                        title: "[<g>1.] Identify the figurative language in \"Treasure.\"",
                        correctIndex: 0,
                        paragraph: [
                            "{L}ine 1 has a proverb; line 4 has a metaphor",
                            "Line 1 has a s{i}mile; line 4 has a metaphor",
                            "Line 2 has a metapho{r}; line 5 has an idiom",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of these visions contains hyperbole?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Foo{t}steps\"",
                            "\"Ship{s}\"",
                            "\"S{o}ng of Sadness\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the purpose of the simile in \"Flames?\"",
                        correctIndex: 1,
                        paragraph: [
                            "It shows how hot it is outsi{d}e",
                            "It shows how clea{r} the visions are",
                            "There is no {s}imile in \"Flames\"",
                        ],
                    },
                    {
                        title: "[<g>4.] How many visions do not contain figurative language?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "T{w}o",
                            "Thre{e}",
                            "Fo{u}r",
                            "{F}ive",
                        ],
                    },
                ],  
                code: {
                    answer: "LORE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ captain fishbeard
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Ship",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Read each poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Author's Purpose and Point of View",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.6",
                        "RL.4.9",
                        "RL.4.10",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arr! I was a pirate once, but I'm on yer side now. I've got a chest full o' tiny poems, each with a mighty secret that can help us in the fight ahead. It's a special honor to read these. What say ye?",
                    complete: "Thank ye for takin' the time, with so much goin' on. Ye've got the makings of a fine sailor!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "fishbeard.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "The Desert",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The desert is wide<br> \
                                    But in the heat, you'll find strength<br> \
                                    Let patience be your guide",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Hold Tight",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Clouds drift above you<br> \
                                    Rain will come, as will the sun<br> \
                                    Hold tight through the storm",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "30%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Endless Dark",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "If you lose your path<br> \
                                    Look up at the many stars<br> \
                                    Their glow never fades",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Wisdom",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Speak less, listen more<br> \
                                    Wisdom hides in quiet words<br> \
                                    Noise cannot teach you",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "30%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Brighter",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Treasure shines in chests<br> \
                                    But your friends will shine brighter<br> \
                                    They're worth more than gold",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "10%",
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
                            dimension: {
                                width: "full",
                                height: "full",
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] All of these haikus are written from a:",
                        correctIndex: 1,
                        paragraph: [
                            "{F}irst person point of view",
                            "Second {p}erson point of view",
                            "Third person point of {v}iew",
                        ],
                    },
                    {
                        title: "[<g>2.] Why does the author use this point of view?",
                        correctIndex: 2,
                        paragraph: [
                            "To clearl{y} describe historical events",
                            "To share their o{w}n personal experience ",
                            "To speak directly t{o} the reader",
                        ],
                    },
                    {
                        title: "[<g>3.] The author's purpose of “Brighter” is to show:",
                        correctIndex: 2,
                        paragraph: [
                            "How wealth is t{h}e key to happiness",
                            "How gems don't shine as brigh{t}ly as gold",
                            "How friendship is more valuable than t{r}easure",
                        ],
                    },
                    {
                        title: "[<g>4.] These haikus contain vivid imagery in order to:",
                        correctIndex: 0,
                        paragraph: [
                            "Make the advice powerful and easy {t}o picture",
                            "Make the advic{e} seem less important",
                            "Confu{s}e the reader with too much information",
                        ],
                    },
                ],  
                code: {
                    answer: "PORT",
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
        
    ]

}