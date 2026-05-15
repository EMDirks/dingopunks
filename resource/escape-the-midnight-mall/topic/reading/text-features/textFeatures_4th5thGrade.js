const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/text-features/preview-4th-5th-grade.png",
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
                    text: "Read the newsletter, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Print Features",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Topsy here. I sell robot pets! I wrote a totally official newsletter for my customers, full of all sorts of cool stuff. I want to send it out tomorrow, but can you give it a quick read first?",
                    complete: "Thanks for reading my newsletter! I think we\'re ready to send it. Hee hee!"
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
                                    text: 'Critterwerks Times',
                                },
                                subtitle: {
                                    text: 'From Topsy\'s Brain to Your Eyeballs',
                                },
                                passage: {
                                    text:   "<br>[<fsms>It Was [<i>Supposed] to Eat Ants]\
                                    <br>\
                                    [<fss>Sniffles the Anteater-Bot is a failure.]\
                                    <br>\
                                    <br>\
                                    Sniffles was built to eat ants, but now all it wants is burgers! Yesterday, it took five from the snack cart, plus a plastic ketchup bottle. It does not seem to like mustard.\
                                    <br>\
                                    <br>\
                                    [<fsms>Security Alert]\
                                    <br>\
                                    [<fss>Shoplifters, you WILL be punished.]\
                                    <br>\
                                    <br>\
                                    1. First offense: untangle 19 feet of wire.\
                                    <br>\
                                    2. Second offense: clean the snack cannon.\
                                    <br>\
                                    3. Third offense: go on slime patrol. All day.\
                                    <br>\
                                    <br>\
                                    [<fsms>Topsy\'s Tip-Top Tips]\
                                    <br>\
                                    [<fss>Follow these awesome tips for a happy life.]\
                                    <br>\
                                    <br>\
                                    • Always keep a snack in your pocket.\
                                    <br>\
                                    • Don\'t trust a machine with too many blinking lights.\
                                    <br>\
                                    • Say “thank you” to robots. They always remember."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "4%",
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
                                size: 'large',
                                align: 'left'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'left'
                            },
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
                        title: "[<g>1.] [<i>Critterwerks Times] is the ___ of this newsletter.",
                        correctIndex: 0,
                        paragraph: [
                            "{T}itle",
                            "Subt{i}tle",
                            "Sideba{r}",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the subheading for [<i>Security Alert]?",
                        correctIndex: 0,
                        paragraph: [
                            "\"Sh{o}plifters, you WILL be punished.\"",
                            "\"First of{f}ense: untangle 19 feet of wire.\"",
                            "\"Topsy's Ti{p}-Top Tips\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Which statement is true?",
                        correctIndex: 0,
                        paragraph: [
                            "One of the headings c{o}ntains italic text",
                            "[<i>Security Alert] is the subtitle of {t}his newsletter",
                            "The numbered list has four l{e}vels of offenses",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the first bullet point under [<i>Topsy\'s Tip-Top Tips] contains bold text.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tr{u}e",
                            "Fa{l}se",
                        ],
                    },
                ],  
                code: {
                    answer: "TOOL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the candy cave
        {
            
            info: {
                type: 'challenge',
                title: 'The Candy Cave',
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Look at the map and photograph, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Image Features",
                    commonCore: [
                        "CCRA.R.7",
                        "RI.4.7",
                        "RL.4.7",
                        "RI.5.7",
                        "RL.5.7",
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I\'ve been told my shop is... a bit confusing. So I took a photo! And I drew a map! Would you mind looking this stuff over and letting me know if it all makes sense? I really tried my best.",
                    complete: "Thank you ever so much for helping. I feel a little less twisty already. Come again soon!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-candy-cave-2.png",
                },
                blockArray: [
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "mm21_2.png",
                                },
                            },
                            {},
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [ 
                            {},
                            {
                                image: {
                                    type: "local",
                                    file: "mm21_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "4deg",
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
                            dimension: {
                                width: "percent65",
                                height: "auto",
                            }
                        },
                        {
                            dimension: {
                                width: "full",
                                height: "auto",
                            }
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
                        title: "[<g>1.] The map\'s bottom-right illustration suggests:",
                        correctIndex: 1,
                        paragraph: [
                            "The Nougat Nook is o{f}f-limits",
                            "There {a}re lollipops in the Swirl Room",
                            "The {S}wirl Room is dark and scary",
                        ],
                    },
                    {
                        title: "[<g>2.] To reach the Nougat Nook from the entrance:",
                        correctIndex: 2,
                        paragraph: [
                            "You must first ea{t} a lollipop",
                            "You must first go through the {S}wirl Room",
                            "You must first go through the Gumd{r}op Gallery",
                        ],
                    },
                    {
                        title: "[<g>3.] Based on the photo\'s caption, who ate a gumdrop?",
                        correctIndex: 2,
                        paragraph: [
                            "Terrible {T}opsy",
                            "Martin Shortn{o}se",
                            "The photo\'s caption does not t{e}ll us",
                        ],
                    },
                    {
                        title: "[<g>4.] Both the photograph and the map:",
                        correctIndex: 0,
                        paragraph: [
                            "Show The C{a}ndy Cave\'s entrance",
                            "Have labe{l}s that say \"Gumdrop Gallery\"",
                            "Contain a colorful lollipo{p}",
                        ],
                    },
                ],  
                code: {
                    answer: "AREA",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ prismatica
        {

            info: {
                type: 'challenge',
                title: 'Prismatica',
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Look at the table of contents, glossary, and index, then answer the questions to fill in the crossword. The yellow letters, order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Navigation Features",
                    commonCore: [
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.4c",
                        "L.5.4c",
                    ],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "My runway show is almost here, and everything must be flawless. I wrote a table of contents, a glossary, and an index \u2014 all quite fabulous! Will you make sure they\'re clear and correct?",
                    complete: "Lovely work, Dingo Punks. Send J.J. Dingo my regards, will you?"
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
                                title: {
                                    text: 'Table of Contents',
                                },
                                passage: {
                                    text:   "<br>[<taj>Chapter 1: Moonlight Begins . . . . . . 1]\
                                    <br>\
                                    [<taj>Chapter 2: Glowing Blossoms . . . . . 3]\
                                    <br>\
                                    [<taj>Chapter 3: Petals in the Dark . . . . . 8]\
                                    <br>\
                                    [<taj>Chapter 4: Thorns and Sparkles . . . 13]\
                                    <br>\
                                    [<taj>Chapter 5: Glitter in the Garden . . 19]\
                                    <br>\
                                    [<taj>Chapter 6: Roots and Whispers . . 22]\
                                    <br>\
                                    [<taj>Chapter 7: The Midnight Rose . . . 27]\
                                    <br>\
                                    <br>\
                                    [<taj>Glossary . . . . . . . . . . . . . . . . . . . . . 32]\
                                    <br>\
                                    [<taj>Index . . . . . . . . . . . . . . . . . . . . . . . . 33]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "3%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Glossary',
                                },
                                passage: {
                                    text:   "<br>Glowthread: a special thread that lights up softly.\
                                    <br>\
                                    <br>\
                                    Lyralace: a magical fabric that sings when worn.\
                                    <br>\
                                    <br>\
                                    Midnight Bloom: a flower that only opens at night.\
                                    <br>\
                                    <br>\
                                    Petalfall: a slow, graceful walk where petals drop behind the model.\
                                    <br>\
                                    <br>\
                                    Thornwork: a sharp, spiky stitching style used to show beauty and power."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "6%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Index',
                                },
                                passage: {
                                    text:   "<br>crystal heels \u2014 2\
                                    <br>\
                                    enchanted roses \u2014 3, 27\
                                    <br>\
                                    floating vines \u2014 19, 22\
                                    <br>\
                                    glowthread \u2014 4, 6, 13, 24\
                                    <br>\
                                    midnight bloom \u2014 1, 3\
                                    <br>\
                                    petalfall \u2014 8, 19, 27\
                                    <br>\
                                    silent sparkles \u2014 15\
                                    <br>\
                                    thornwork design \u2014 13"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "11%",
                                rotate: "2deg",
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
                            width: "percent32",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. What is the last word of chapter 7\'s title?',
                        'B. How many words are defined in the glossary?',
                        'C. What do you call a page that contains an alphabetical list of topics and the pages they\'re on?',     
                        'D. [<u>True] or [<u>false]: you can find information about floating vines on pages 19 and 22.',                    
                    ],
                    puzzle: [
                        ["0","0","0","(D)1T","0","0","0"],
                        ["0","0","0","(A)3R","2O","S","E"],
                        ["(B)F","0","0","U","0","0","0"],
                        ["(C)I","4N","D","E","X","0","0"],
                        ["V","0","0","0","0","0","0"],
                        ["E","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "TORN",
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
                    text: "Look at the images, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Data Display Features",
                    commonCore: [
                        "CCRA.R.7",
                        "RI.4.7",
                        "RI.5.7",
                    ],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "Behold \u2014 I have created a glorious guide to my greatest deeds! It includes a timeline of my thrilling triumphs, and a graph showing my superior strength. Study both, and be amazed!",
                    complete: "You\'ve studied my guide. Well done. Just by being near my greatness, you are stronger!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "underworld-athletics.png",
                },
                blockArray: [
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "mm21_3.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "12%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [ 
                            {
                                image: {
                                    type: "local",
                                    file: "mm21_4.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "5%",
                                rotate: "2deg",
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
                            width: "percent70",
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
                        title: "[<g>1.] The diagram on the top is called a _____ .",
                        correctIndex: 1,
                        paragraph: [
                            "B{a}r graph",
                            "Ti{m}eline",
                            "Tab{l}e",
                        ],
                    },
                    {
                        title: "[<g>2.] Which great deed did Robustus do first?",
                        correctIndex: 0,
                        paragraph: [
                            "Lifting a wag{o}n to rescue a cat",
                            "Sneaking intro the Fort{r}ess of Fog",
                            "Pulling a whole tree from the groun{d}",
                        ],
                    },
                    {
                        title: "[<g>3.] On the graph, the labels under each bar tell you:",
                        correctIndex: 2,
                        paragraph: [
                            "The different streng{t}h levels",
                            "The {f}avorite color of each hero",
                            "The n{a}mes of each hero",
                        ],
                    },
                    {
                        title: "[<g>4.] What is Lady Lightning\'s strength level?",
                        correctIndex: 1,
                        paragraph: [
                            "F{i}fty",
                            "For{t}y",
                            "Thirt{y}",
                        ],
                    },
                ],  
                code: {
                    answer: "MOAT",
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

  