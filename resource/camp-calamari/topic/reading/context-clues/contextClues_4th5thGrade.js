const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/reading/context-clues/preview-4th5th-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    challengeArray: [

        // ⭐ driftwood dan
        {
            info: {
                type: 'challenge',
                title: "Driftwood Beach",
                asset: "driftwood-dan.png",
                state: "incomplete",
                hint: {
                    text: "Read both messages, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Definitions and Examples",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RL.4.1",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.1",
                        "RI.5.4",
                        "RL.5.1",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "Hey, friend. I was out hunting for driftwood to fix up our fence, but instead, I found two messages in a bottle! This looks like pirate stuff, maybe even from the Red Tide. Want to take a peek?",
                    complete: "Oh man, we need to let the other counselors know about these messages. I'm glad I ran into you! "
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "driftwood-dan.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Message #1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "&nbsp &nbsp &nbsp Well, well, well... Seems the little campers think they've been clever, hiding their treasure beneath that pile of junk on the beach. \
                                    <br> \
                                    <br> \
                                    &nbsp &nbsp &nbsp Pathetic, really. Did you think we wouldn't notice? We've been watching your every move, and your so-called “secret” is about as hidden as a whale in a puddle. \
                                    <br> \
                                    <br> \
                                    &nbsp &nbsp &nbsp When the next [<u>tempest] rolls in, a terrible storm with crashing waves and [<u>shrieking] winds, it'll [<u>scatter] your little defenses like driftwood in a hurricane. And that's when we'll strike. \
                                    <br> \
                                    <br> \
                                    &nbsp &nbsp &nbsp Keep planning, keep [<u>scheming], it won't matter. Your treasure will be ours, and there's not a thing you can do to stop our [<u>trajectory]. It's the path we're taking, and you better accept it. \
                                    <br> \
                                    <br> \
                                    Yours truly, <br> \
                                    Captain Plank"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Message #2",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<i>At Driftwood Beach, the Red Tide Pirates arrive ashore, ready to claim their prize.] \
                                    <br> \
                                    <br> \
                                    Captain Plank: \"Seize the beach, lads! The treasure is within our grasp!\" \
                                    <br> \
                                    <br> \
                                    First Mate Banzo: \"Aye, Captain! But what about that silly-looking piece o' driftwood?\" \
                                    <br> \
                                    <br> \
                                    Driftwood Dan: \"You can throw me out to sea, but I'm as [<u>steadfast] as the tide. I refuse to give up!\" \
                                    <br> \
                                    <br> \
                                    Captain Plank: \"Ha! We'll see about that. Toss him out where he belongs!\" \
                                    <br> \
                                    <br> \
                                    [<i>The pirates hurl Dan into the waves. He flops around dramatically as he floats off into the distance.] \
                                    <br> \
                                    <br> \
                                    First Mate Banzo: \"Captain, the beach is ours. Just us, and a few [<u>crustaceans]: crabs, lobsters, and shrimp. Nothing that can fight back. Let us claim the treasure!\""
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
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
                        }
                    },                   
                    contentArray: [
                        {
                            passage: {
                                font: 'default',
                                size: 'tiny',
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
                        title: "[<g>1.] Which word means \"violent storm?\"",
                        correctIndex: 0,
                        paragraph: [
                            "Tem{p}est",
                            "Sca{t}ter",
                            "S{h}rieking",
                        ],
                    },
                    {
                        title: "[<g>2.] \"Steadfast\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "Sitting do{w}n",
                            "Going the wr{o}ng way",
                            "Staying strong and not giv{i}ng up",
                        ],
                    },
                    {
                        title: "[<g>3.] Is a \"crustacean\" an animal that usually lives in water, with a hard shell and jointed legs?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which one of these two words means \"the path something takes as it moves?\"",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Schemi{n}g",
                            "T{r}ajectory",
                        ],
                    },
                ],  
                code: {
                    answer: "PIER",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ chef gumbo
        {

            info: {
                type: 'challenge',
                title: "Dining Hall",
                asset: "chef-gumbo.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Synonyms and Antonyms",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5c",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.5c",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.1",
                        "RI.5.4",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "Ahoy \u2014 we've got a crisis in the kitchen! Me cuttin' board's smashed to bits, and I can't cook a thing without it. If ye can't fix this mess, we'll all go hungry. Now get to work!",
                    complete: "Well, it's about time. Don't expect a pat on the back... I've got meals to make!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "chef-gumbo-2.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Today, I'd like to cook up a [<u>scrumptious], delicious stew.",
                                }, 
                                backgroundImage: {
                                    file: "10.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "It'll give us strength to fight the [<u>menacing], dangerous pirates.",
                                }, 
                                backgroundImage: {
                                    file: "11.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The stew will be [<u>fragrant], not odorless.",
                                }, 
                                backgroundImage: {
                                    file: "12.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "And don't get [<u>ornery], or angry, if you don't like it.",
                                }, 
                                backgroundImage: {
                                    file: "13.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "At the very least, it will be quite [<u>gratifying] \u2014 extremely enjoyable.",
                                }, 
                                backgroundImage: {
                                    file: "14.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "It'll put us in a [<u>jovial] mood instead of a sad one.",
                                }, 
                                backgroundImage: {
                                    file: "15.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "So prepare for the most [<u>tangy], zesty flavors of all time.",
                                }, 
                                backgroundImage: {
                                    file: "16.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "And prepare to no longer be [<u>peckish], but full of food.",
                                }, 
                                backgroundImage: {
                                    file: "17.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>Bivalves], such as clams, are the secret ingredient!",
                                }, 
                                backgroundImage: {
                                    file: "18.png"
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
                                size: 'tiny',
                                align: 'center',
                                puzzle: 'default',
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
                        title: "[<g>1.] Which piece contains an underlined word that's a synonym for \"angry?\"",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "T{o}p left",
                            "Mid{d}le left",
                            "To{p} right",
                            "{M}iddle right",
                        ],
                    },
                    {
                        title: "[<g>2.] Clams are a type of _____ .",
                        correctIndex: 2,
                        paragraph: [
                            "Secret t{r}easure",
                            "Sil{v}erware",
                            "Biv{a}lve",
                        ],
                    },
                    {
                        title: "[<g>3.] What is an antonym for \"jovial?\"",
                        correctIndex: 1,
                        paragraph: [
                            "Happ{y}",
                            "{S}ad",
                            "M{o}od",
                        ],
                    },
                    {
                        title: "[<g>4.] Look at the bottom middle piece. What is the meaning of its underlined word?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "{H}ungry",
                            "Odorl{e}ss",
                            "Ha{p}py",
                            "Prepare{d}",
                        ],
                    },
                ],  
                code: {
                    answer: "DASH",
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
                    text: "Read the poem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Roots and Affixes",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.4b",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.4b",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RF.5.4c",
                        "RI.5.1",
                        "RI.5.4",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "Ah, there you are! My mirror just revealed a strange and mysterious message, but its meaning eludes me. I need your help unraveling its secrets before it's too late!",
                    complete: "Thank you, traveller. I must warn the other counselors at once! My crystal mirror never lies..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "madame-mystica-2.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'What I Saw in the Mirror',
                                },
                                passage: {
                                    text:   "I saw the pirates plan and spy.<br> \
                                    The truth was worthless, so they lied,<br> \
                                    \"Send a message, let the camp prepare,<br> \
                                    for Driftwood Beach, we'll strike them there.\"<br> \
                                    <br> \
                                    They imagined campers taking the bait,<br> \
                                    rushing to guard the beach's gate.<br> \
                                    'Twas all for nothing, through and through \u2014<br> \
                                    a total waste of time, it's true.<br> \
                                    <br> \
                                    My mirror showed their real plan:<br> \
                                    an attack from the forest, not the sand.<br> \
                                    Within the hour, they'll make their move.<br> \
                                    If we don't reassess our plans, we'll lose.<br> \
                                    <br> \
                                    They'll misbehave with no remorse,<br> \
                                    taking what they want with force!"
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
                        misc: {
                            material: 'metal',
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
                        'A. \"Worthless\" means [<i>without] _____ .',
                        'B. Does the word \"misbehave\" mean to behave [<u>badly] or to behave [<u>nicely]?',
                        'C. [<u>True] or [<u>false]: if \"assess\" means [<i>consider], then \"reassess\" means [<i>consider again].',     
                        'D. If something is \"repairable,\" that means it is ____ to be repaired.',                    
                    ],
                    puzzle: [
                        ["(A)W","0","(B)B","(D)2A","D","3L","Y"],
                        ["O","0","0","B","0","0","0"],
                        ["R","0","0","L","0","0","0"],
                        ["(C)1T","R","U","4E","0","0","0"],
                        ["H","0","0","0","0","0","0"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "TALE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ captain fishbeard
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Ship",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, using the code to figure out the secret words. Then, answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues as Causes and Effects",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.10",
                        "L.5.3",
                        "L.5.3a",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.1",
                        "RI.5.4",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Captain Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Captain Fishbeard here, tryin' to make a deal with the Red Tide Pirates to save the camp. I've written a letter to send, but I need yer sharp eyes to make sure it's right. Can ye give it a look?",
                    complete: "Matey, ye've done it. I just hope ol' Captain Plank is willin' to listen!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "fishbeard.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "To Captain Plank of the Red Tide Pirates,<br> \
                                    <br> \
                                   &nbsp &nbsp &nbsp I'm writing to offer you a phenomenal deal. Therefore, you will want to listen, as you will &nbsp[<p>BENEFIT]&nbsp greatly from this agreement. I know that your crew yearns for treasure, since they're willing to do &nbsp[<p>ANYTHING]&nbsp for it \u2014 but this camp is not worth the trouble!<br> \
                                    <br> \
                                    &nbsp &nbsp &nbsp Allow me to say this plainly, so I don't waste your time with unnecessary &nbsp[<p>DETAILS].&nbsp I'm willing to give up my entire ship if you promise to leave the camp alone and call off the attack. Since I am a candid man, you can trust that my word is &nbsp[<p>TRUE].&nbsp <br> \
                                    <br> \
                                    &nbsp &nbsp &nbsp I know you'll see this as a fair trade. The camp's innocent, and I'm asking you to spare them. This is my final offer. Let's settle this without any trouble.<br> \
                                    <br> \
                                    Your old friend,<br> \
                                    Captain Fishbeard"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "10%",
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
                                translateX: "4%",
                                translateY: "-11%",
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
                        title: "[<g>1.] To \"yearn\" means to:",
                        correctIndex: 1,
                        paragraph: [
                            "Sle{e}p",
                            "{D}esire",
                            "Fea{r}",
                        ],
                    },
                    {
                        title: "[<g>2.] A \"candid\" person is:",
                        correctIndex: 0,
                        paragraph: [
                            "Op{e}n and honest",
                            "Mea{n} and unpredictable",
                            "Creative an{d} clever",
                        ],
                    },
                    {
                        title: "[<g>3.] What is another word for \"phenomenal?\"",
                        correctIndex: 2,
                        paragraph: [
                            "Terr{i}ble",
                            "Impossi{b}le",
                            "Am{a}zing",
                        ],
                    },
                    {
                        title: "[<g>4.] In this context, what does \"plainly\" mean?",
                        correctIndex: 1,
                        paragraph: [
                            "In an unnecessarily detaile{d} way",
                            "In a simp{l}e and easily-understood way",
                            "In a highl{y}-educated way",
                        ],
                    },
                ],  
                code: {
                    answer: "DEAL",
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