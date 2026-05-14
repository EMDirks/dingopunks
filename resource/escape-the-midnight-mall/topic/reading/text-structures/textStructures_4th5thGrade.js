const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/text-structures/thumbnail-4th-5th-grade.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [

        // ⭐ critterwerks
        {

            info: {
                type: 'challenge',
                title: "Critterwerks",
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Look at the diagram, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.7",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.7",
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "I made two new robot pets: one flies, one jumps! I\'m showing them off tomorrow, so everything must be ready tonight. Can you help me figure out how they\'re the same and how they\'re different?",
                    complete: "Yay! Now I can show them off without any... malfunctions. Keep quiet if they act weird, okay?"
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
                                image: {
                                    type: "local",
                                    file: "mm22_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "4%",
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
                            dimension: {
                                width: "auto",
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
                        title: "[<g>1.] What text structure is shown here?",
                        correctIndex: 1,
                        paragraph: [
                            "Prob{l}em and solution",
                            "Com{p}are and contrast",
                            "Sequence / chronological or{d}er",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: this graphic organizer is called a [<i>Venn diagram].",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tr{u}e",
                            "Fals{e}",
                        ],
                    },
                    {
                        title: "[<g>3.] The bullet points in the middle represent:",
                        correctIndex: 2,
                        paragraph: [
                            "{R}andom facts about the ZipFrog [<i>only]",
                            "The Flypig\'s most annoyin{g} traits",
                            "Things the FlyPig and ZipFrog have in com{m}on",
                        ],
                    },
                    {
                        title: "[<g>4.] Name something that [<i>only] the FlyPig does.",
                        correctIndex: 1,
                        paragraph: [
                            "It enjoys jaz{z} music",
                            "It m{a}kes an annoying snorting sound",
                            "It makes a beautiful croakin{g} sound",
                        ],
                    },
                ],  
                code: {
                    answer: "PUMA",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ zeebplex
        {

            info: {
                type: 'challenge',
                title: "ZeebPlex",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Read both notes, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",                    
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.7",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                    ],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "I bought an old gumball machine, and guess what? It had TWO weird notes taped to the side. You\'ve got eyes, yeah? Read them and tell me what\'s going on. I really don\'t have time for this.",
                    complete: "Great. Mystery solved. Now go be useful somewhere else, yeah?"
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
                            text: "E",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Note 1:\
                                    <br>\
                                    <br>\
                                    I was [<i>supposed] to change out the gum from this machine every 90 days. I knew that. I really did! But then the cash register caught on fire, the ceiling caved in, and someone stole an entire barrel of jelly beans. Things got busy, so I kept putting it off. And before I knew it, 90 days had passed. And that was a [<i>very] bad thing.\
                                    <br>\
                                    <br>\
                                    - Martin, previous owner"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-8%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "N",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Note 2:\
                                    <br>\
                                    <br>\[<u>Because] I waited too long, the gumballs stuck together. All of them. It became one giant mega-gumball that jammed up the whole machine! Me and my cousin Larry spent the entire evening trying to get it out. We used pliers, lots of yelling, and even a hairdryer. It finally [<u>worked], but it was [<i>way] too much trouble.\
                                    <br>\
                                    <br>\
                                    - Martin, previous owner"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "15%",
                                rotate: "-3deg",
                            }
                        }
                    }
                ],  
                style: {              
                    block: {
                        tag: {
                                font: 'symbols',
                                size: 'large',
                                align: 'left',
                                padding: 'default'
                            },
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

                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
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
                        'A. [<u>Right] or [<u>wrong]: these two notes are structured as [<i>cause and effect].',
                        'B. Find the two underlined words on the second note. Which one is a signal word?',
                        'C. The [<i>cause] of the gumballs sticking together was that the owner didn\'t change them after 90 ____ .',     
                        'D. Does the note with the [<u>star] or the [<u>fire] explain the [<i>effect]?',                    
                    ],
                    puzzle: [
                        ["(A)1R","I","G","H","T","0","(C)4D"],
                        ["0","0","0","0","0","0","A"],
                        ["0","(D)F","0","0","0","0","Y"],
                        ["0","I","0","0","0","0","S"],
                        ["0","R","0","0","0","0","0"],
                        ["(B)B","E","C","3A","U","S","2E"],
                    ]
                },  
                code: {
                    answer: "READ",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ prismatica
        {
            
            info: {
                type: 'challenge',
                title: 'Prismatica',
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then type in the answers to the questions. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.10",
                        "RL.4.1",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.8",
                        "RI.5.10",
                        "RL.5.1",
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "Oh, just wonderful... another letter from one of my assistants. I\'m far too busy to bother with scribbles and complaints. Be a dear and read it, okay? I simply can\'t waste my time on this.",
                    complete: "Lovely. That\'s one less thing on my plate. Run along now!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "holographia.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Prisma,\
                                    <br>\
                                    <br>\
                                    Thanks to me, we avoided a total disaster. Princess Fernwiggle ordered a custom dress for her nighttime wedding, and when it arrived, it looked completely [<p>DULL] in the moonlight! Not a shimmer or sparkle. Nothing.\
                                    <br>\
                                    <br>\
                                    My [<u>solution] was to re-stitch the whole hem with [<p>SILVER] thread. You know, the kind that catches moonlight just right! Now, her dress glows like it was kissed by the stars.\
                                    <br>\
                                    <br>\
                                    Yours truly,\
                                    <br>\
                                    Amadeus"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "10%",
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
                                translateX: "7%",
                                translateY: "-5%",
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

            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] This letter is structured as a problem and ____ .",
                        word: "[S]OLUTION",
                    },
                    {
                        title: "[<g>2.] [<u>True] / [<u>false]: the underlined word is a signal word.",
                        word: "TRU[E]",
                    },
                    {
                        title: "[<g>3.] Problem: the dress looked ____ in the moonlight.",
                        word: "DUL[L]",
                    },
                    {
                        title: "[<g>4.] Solution: re-stitch the dress with ____ thread.",
                        word: "SI[L]VER",
                    },
                ],
                code: {
                    answer: "SELL",
                    userArray: ["","","",""]
                },
            }


        },

        // ⭐ helio athletics
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages and look at the figures, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.7",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.7",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.7",
                    ],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I am putting together a newsletter for my fans, filled with glorious tales and illustrations about my life. I know it\'s perfect already, but go ahead: read everything and confirm my genius.",
                    complete: "Ah, just as I thought. Flawless. You may now bask in the honor of having helped a legend."
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
                            text: "My Morning Routine",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "First, I awake at dawn and shout my name to the sky. After that, I polish my legendary helmet. Then, I eat twelve eggs and ten chunks of meat. Finally, I strike a heroic pose and whisper, \"You\'re welcome, world.\""
                                },
    
                            },
                            {
                                image: {
                                    type: "",
                                    file: "",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "1%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "My Legendary Helmet",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "My legendary helmet is made of thick steel. It has protected me in hundreds of battles. The surface is covered in marks from swords, claws, and fire \u2014 but it never breaks. Only a true hero can wear it!"
                                },
                            },
                            {
                                image: {
                                    type: "",
                                    file: "",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Graphic Organizer #1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "",
                                },
                            },
                            {
                                image: {
                                    type: "local",
                                    file: "mm22_2.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Graphic Organizer #2",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "",
                                },
                            },
                            {
                                image: {
                                    type: "local",
                                    file: "mm22_3.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "10%",
                                rotate: "-1deg",
                            }
                        }
                    },
                ],  
                style: {              
                    block: {
                        tag: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
                                padding: 'default'
                            },
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
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
                            dimension: {
                                width: "auto",
                                height: "auto",
                            }
                        },
                        {
                            dimension: {
                                width: "percent70",
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
                        title: "[<g>1.] The structure of \"My Morning Routine\" is:",
                        correctIndex: 1,
                        paragraph: [
                            "Probl{e}m and solution",
                            "Chronolo{g}ical order / sequence",
                            "Compare and contr{a}st",
                        ],
                    },
                    {
                        title: "[<g>2.] The structure of \"My Legendary Helmet\" is:",
                        correctIndex: 2,
                        paragraph: [
                            "Problem and solu{t}ion",
                            "Chr{o}nological order / sequence",
                            "Desc{r}iption",
                        ],
                    },
                    {
                        title: "[<g>3.] The text structure of \"My Legendary Helmet\" matches up with which graphic organizer?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Organ{i}zer #1",
                            "Organi{z}er #2",
                        ],
                    },
                    {
                        title: "[<g>4.] Which word from \"My Morning Routine\" is [<i>not] a signal word?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Fir{s}t",
                            "{P}olish",
                            "T{h}en",
                            "Finall{y}",
                        ],
                    },
                ],  
                code: {
                    answer: "GRIP",
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