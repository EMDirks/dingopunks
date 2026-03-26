const resource =  {
    
    info: {
        title: "Final Bell Breakout",
        path: "final-bell-breakout",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "TIME TIL THE BELL"
    },

    challengeArray: [

        // ⭐ cooking class
        {

            info: {
                type: 'challenge',
                title: "Baking Class",
                asset: "node-1.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [],
                }
            },

            intro: {
                character: "Student Mystica",
                asset: "character-1.png",
                dialogue : {
                    incomplete: "Ah, you\'re just in time! I've been so busy gathering ingredients for this jellyfish cake, that I haven\'t had a chance to read my instructor\'s tips. Would you let me know what she\'s trying to say?",
                    complete: "Mm, yes. I knew it would all work out... Now, back to my cake."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background-1.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Jellyfish Cake Tips',
                                },
                                subtitle: {
                                    text: "By Chef Marina Bubbles",
                                },
                                passage: {
                                    text:   "Making a jellyfish cake is really hard! Long licorice strips hang down like tentacles, but they get tangled up easily. You have to be careful to keep each one separate and dangly.\
                                    <br>\
                                    Frosting the cake can also be a problem. It needs to be perfectly smooth and round, or the cake won\'t look like a jellyfish. Did you know that real jellyfish have been here for millions of years?\
                                    <br>\
                                    Even though it's hard to make, this cake is always super tasty. It\'s my personal favorite."
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
                            material: 'paper',
                            padding: "double"
                        },
                        dimension: {
                            width: "percent55",
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What\'s the main idea of \"Jellyfish Cake Tips\"?",
                        correctIndex: 0,
                        paragraph: [
                            "It is diffi{c}ult to make a jellyfish cake",
                            "Long {s}trips of licorice are hard to find",
                            "Chef Marina Bubbles loves c{o}oking",
                        ],
                    },
                    {
                        title: "[<g>2.] Which of the following quotes is a key detail?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Jellyfish have been here fo{r} millions of years\"",
                            "\"Frosting t{h}e cake can also be a problem\"",
                            "\"Th{i}s cake is always super tasty\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Read the second sentence of the first paragraph. Is this sentence a supporting detail?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Y{e}s",
                            "N{o}",
                        ],
                    },
                    {
                        title: "[<g>4.] \"It\'s my personal favorite\" is a ___ .",
                        correctIndex: 2,
                        paragraph: [
                            "M{a}in idea",
                            "Support{i}ng detail",
                            "None o{f} the above",
                        ],
                    },
                ],  
                code: {
                    answer: "CHEF",
                    userArray: ["","","",""]
                },
            },
               
        },

        // ⭐ machine shop
        {

            info: {
                type: 'challenge',
                title: "Machine Shop",
                asset: "node-2.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues",
                    commonCore: [],
                }
            },

            intro: {
                character: "Student Pippo",
                asset: "character-2.png",
                dialogue : {
                    incomplete: "Oh boy! There are SO many cool tools in this class! My instructor said I have to read the warning labels first, but some of these words are really hard. Wanna help me figure them out?",
                    complete: "Woohoo, let\'s go! Thanks for the help \u2014 I\'ve already got my eye on that laser!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background-2.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Gear Cruncher",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This [<u>fantastic] tool sparks, spins, and makes wild noises. It\'s like something from a dream or a magic show, not the real world!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Polisher",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "This tool spins really fast to make metal shiny and smooth. Be sure to [<u>reattach] the safety guard before you turn it on.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-25%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Blaster",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The blaster breaks apart old metal pieces. It\'s easy to make mistakes with this tool, so it takes a [<u>skillful] person to use.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "6%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Laser",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "NEVER go near the laser when it is turned on. This tool is super [<u>hazardous]. It\'s more dangerous than a lightning strike!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "0%",
                                rotate: "-2deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] If something is \"fantastic,\" that means it is:",
                        correctIndex: 1,
                        paragraph: [
                            "{B}oring and dull",
                            "So amazing it {d}oesn\'t seem real",
                            "Likel{y} to catch on fire",
                        ],
                    },
                    {
                        title: "[<g>2.] Read \"Polisher.\" If the prefix \"re-\" means [<i>again], then the underlined word means ___ .",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "Never {a}ttach",
                            "E{x}tra shiny",
                            "Break a{p}art",
                            "Attach aga{i}n",
                        ],
                    },
                    {
                        title: "[<g>3.] In \"Laser,\" ___ is a synonym of \"hazardous.\"",
                        correctIndex: 1,
                        paragraph: [
                            "Supe{r}",
                            "D{a}ngerous",
                            "Lig{h}tning",
                        ],
                    },
                    {
                        title: "[<g>4.] The underlined word in \"Blaster\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "Clumsy and carel{e}ss",
                            "A{f}raid of trying new things",
                            "Full of ski{l}l",
                        ],
                    },
                ],  
                code: {
                    answer: "DIAL",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ recess
        {

            info: {
                type: 'challenge',
                title: "Recess",
                asset: "node-3.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [],
                }
            },

            intro: {
                character: "Student Robustus",
                asset: "character-3.png",
                dialogue : {
                    incomplete: "I, Robustus, have been tasked with checking over a pair of recess passes \u2014 a job far too small for me. I cannot waste my time on such a tiny task. Will you take care of it for me?",
                    complete: "Hmph. Well done, I suppose. Now stand aside! Great things await me."
                },
            },   
            
            activity: {
                info: {
                    type: "dynamic",
                    asset: "background-3.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "1.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Recess Pass: Version One",
                                },
                                passage: {
                                    text: "To earn this recess pass, all you need to do is [<u>keep your eyes on the prize]. Just stay focused and finish your work. Remember, the early bird catches the worm, so if you get your tasks done quickly, you\'ll have extra time to play.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-7%",
                                translateY: "-5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "1.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Recess Pass: Version Two",
                                },
                                passage: {
                                    text: "You think you deserve recess? Getting this pass is as hard as lifting a boulder. [<u>You must be a machine]: work without stopping, never get tired, never make mistakes, and always do exactly what you\'re told.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "10%",
                                rotate: "1deg",
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
                                size: 'mediumSmall',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Is the underlined text in \"Recess Pass: Version One\" an [<u>idiom] or a [<u>simile]?',
                        'B. [<u>Right] or [<u>wrong]: the phrase \"the early bird catches the worm\" is an example of [<i>literal language.]',
                        'C. [<u>Right] or [<u>wrong]: the underlined text in \"Recess Pass: Version Two\" is a metaphor.',     
                        'D. Does \"Recess Pass [<u>One]\" or \"Recess Pass [<u>Two]\" contain a simile?',                    
                    ],
                    puzzle: [
                        ["0","(C)R","(A)I","1G","H","T","0"],
                        ["0","0","D","0","0","0","0"],
                        ["0","0","3I","0","0","0","0"],
                        ["(B)W","2R","O","N","G","0","0"],
                        ["0","0","M","0","0","0","0"],
                        ["0","0","0","0","(D)4T","W","O"],
                    ]
                },  
                code: {
                    answer: "GRIT",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ science lab
        {

            info: {
                type: 'challenge',
                title: "Science Lab",
                asset: "node-4.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [],
                }
            },

            intro: {
                character: "Student Mabel",
                asset: "character-4.png",
                dialogue : {
                    incomplete: "Hi! There's so much confusing stuff in this science lab... My instructor wants me to read about something called a \"goo monster,\" but I really need your help figuring it out. Can you take a look?",
                    complete: "Oh, that makes sense. Thanks! I guess I\'ll be extra careful from here on out."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "background-4.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Mix',
                                },
                                subtitle: {
                                    text: 'By Professor Wellington',
                                },
                                passage: {
                                    text:   "I poured red goo in a big glass cup,\
                                    <br>\
                                    then added green goo to make it new.\
                                    <br>\
                                    The mix got hot and bubbled all up,\
                                    <br>\
                                    and out popped a monster, made out of goo!\
                                    <br>\
                                    <br>\
                                    The terrible creature rolled down the hall,\
                                    <br>\
                                    sticking to desks and chairs so tight.\
                                    <br>\
                                    Although I stopped it, once and for all,\
                                    <br>\
                                    the room was still gooey... oh, what a fright!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "9%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Think Things Through',
                                },
                                subtitle: {
                                    text: 'By Professor Wellington',
                                },
                                passage: {
                                    text:   "I mixed without thought\
                                    <br>\
                                    The goo became a monster\
                                    <br>\
                                    Always think things through"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "25%",
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
                                translateX: "2%",
                                translateY: "4%",
                                rotate: "-4deg",
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
                                size: 'mediumSmall',
                                align: 'center'
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
                        title: "[<g>1.] What is the rhyme scheme of \"Mix\"?",
                        word: "A[B]AB",
                    },
                    {
                        title: "[<g>2.] [<u>True]/[<u>false]: both poems are about the same event.",
                        word: "TR[U]E",
                    },
                    {
                        title: "[<g>3.] [<u>Right] or [<u>wrong]: line 8 of \"Mix\" has alliteration.",
                        word: "W[R]ONG",
                    },
                    {
                        title: "[<g>4.] \"Think Things Through\" has ___ syllables in line 2.",
                        word: "SEVE[N]",
                    },
                ],
                code: {
                    answer: "BURN",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ theater
        {

            info: {
                type: 'challenge',
                title: "Theater",
                asset: "node-5.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [],
                }
            },

            intro: {
                character: "Student Kevin",
                asset: "character-5.png",
                dialogue : {
                    incomplete: "HONK! My director wants me to see if this short story can be turned into a play. Well, I\'m not going to even read it! Just tell me what it\'s all about, okay? HONK!",
                    complete: "Fine. HONK. Don\'t expect a thank you. Now leave me alone."
                },
            },  
            
            activity: {
                info: {
                    type: "dynamic",
                    asset: "background-5.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Maya\'s Magic Sneakers',
                                },
                                passage: {
                                    text:   "Maya was the slowest runner in gym class. She skipped practice, dragged her feet in every race, and didn\'t care one bit. Then one day, she found magic sneakers under a bench. When she put them on, her feet moved so fast she won every race.\
                                    <br>\
                                    The next day, Maya wore the magic sneakers again. She won easily. In fact, she kept winning race after race. But something felt wrong. Winning the same way over and over wasn\'t exciting anymore. She thought about how her friend Zara worked hard every single day to get faster on her own.\
                                    <br>\
                                    A few weeks later, Maya\'s magic sneakers fell apart. She raced without them, and she came in last. But as she ran, she realized that real success comes from putting in hard work, not from taking shortcuts. So, she threw away the sneakers and started practicing. Every day she got faster, and every victory felt real."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-3%",
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Where does \"Maya\'s Magic Sneakers\" take place?",
                        correctIndex: 2,
                        paragraph: [
                            "A ne{i}ghborhood park",
                            "Summer c{a}mp",
                            "{G}ym class",
                        ],
                    },
                    {
                        title: "[<g>2.] Zara was able to get faster because she:",
                        correctIndex: 1,
                        paragraph: [
                            "\"Didn\'t care at a{l}l\"",
                            "\"W{o}rked hard every single day\"",
                            "\"Wore the {m}agic sneakers again\"",
                        ],
                    },
                    {
                        title: "[<g>3.] At the end of the story, Maya was determined to work hard. At the beginning, she was ___ .",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "{C}onfident",
                            "Nervo{u}s",
                            "L{a}zy",
                            "A{n}gry",
                        ],
                    },
                    {
                        title: "[<g>4.] What lesson does this story teach us?",
                        correctIndex: 0,
                        paragraph: [
                            "Rea{l} success comes from hard work",
                            "Maya foun{d} magic sneakers under a bench",
                            "It\'s important to run ever{y} day",
                        ],
                    },
                ],  
                code: {
                    answer: "GOAL",
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
