const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [

        // ⭐ the candy cave - frogs in the cave
        {

            info: {
                type: 'challenge',
                title: "The Candy Cave",
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Elements and Structure",
                    commonCore: [],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I write poems when I\'m feeling stressed. It helps me sort out my feelings. And right now, I have a big problem... I need you to read about it! Will you?",
                    complete: "Thanks for reading my poem. Come back anytime!"
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
                                    text: "Frogs in the Cave",
                                },
                                subtitle: {
                                    text: "By Martin Shortnose",
                                },
                                passage: {
                                    text: "[<tal>I run the Candy Cave with pride,\
                                    <br>\
                                    with candies stacked up far and wide.\
                                    <br>\
                                    But frogs hop in with sticky feet,\
                                    <br>\
                                    and gulp my gummies as a treat!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "0deg",
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
                        title: "[<g>1.] How many lines are in this poem?",
                        correctIndex: 1,
                        paragraph: [
                            "T{h}ree lines",
                            "{F}our lines",
                            "Five li{n}es",
                        ],
                    },
                    {
                        title: "[<g>2.] How many syllables are in line four?",
                        correctIndex: 0,
                        paragraph: [
                            "{E}ight syllables",
                            "Nine {s}yllables",
                            "Te{n} syllables",
                        ],
                    },
                    {
                        title: "[<g>3.] Which word rhymes with \"pride\"?",
                        correctIndex: 2,
                        paragraph: [
                            "Ca{v}e",
                            "S{t}icky",
                            "Wid{e}",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the author of \"Frogs in the Cave\" is named Martin Shortnose.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "{T}rue",
                            "F{a}lse",
                        ],
                    },
                ],  
                code: {
                    answer: "FEET",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ critterwerks - my robot hamster keeps escaping
        {

            info: {
                type: 'challenge',
                title: 'Critterwerks',
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Comprehension",
                    commonCore: [],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Oh dear! A customer wrote me a letter! I want to read it, but my shop is such a mess right now. Can you read it for me and tell me what it says?",
                    complete: "The robot hamster escapes every time? Awesome!"
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
                                    text: "My Robot Hamster Keeps Escaping",
                                },
                                passage: {
                                    text: "My name is Carl. And in my house,\
                                    <br>\
                                    my robot hamster keeps escaping.\
                                    <br>\
                                    <br>\
                                    [<tal>At first, I put her in the closet.\
                                    <br>\
                                    I closed it tight. I locked the door.\
                                    <br>\
                                    But every morning, she was gone —\
                                    <br>\
                                    eating cheese in the kitchen.]\
                                    <br>\
                                    <br>\
                                    She keeps escaping!\
                                    <br>\
                                    <br>\
                                    [<tal>So I bought a metal box.\
                                    <br>\
                                    I closed it tight. I locked the door.\
                                    <br>\
                                    But this morning, she was gone —\
                                    <br>\
                                    eating cheese in the bedroom.]\
                                    <br>\
                                    <br>\
                                    She keeps escaping!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "0deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is this poem mostly about?",
                        correctIndex: 2,
                        paragraph: [
                            "{A} dirty kitchen",
                            "A stron{g} metal box",
                            "A robot hamst{e}r that keeps escaping",
                        ],
                    },
                    {
                        title: "[<g>2.] Who is Carl?",
                        correctIndex: 1,
                        paragraph: [
                            "A ro{b}ot hamster",
                            "The robot h{a}mster\'s owner",
                            "A ch{e}f",
                        ],
                    },
                    {
                        title: "[<g>3.] After escaping the metal box, where did the robot hamster start eating cheese?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "\"in the kit{c}hen\"",
                            "\"in {t}he bedroom\"",
                        ],
                    },
                    {
                        title: "[<g>4.] This poem takes place in a ___ .",
                        correctIndex: 0,
                        paragraph: [
                            "Hou{s}e",
                            "Fiel{d}",
                            "W{o}rkshop",
                        ],
                    },
                ],  
                code: {
                    answer: "EATS",
                    userArray: ["","","",""]
                },
            }

        },


        // ⭐ prismatica - dress, boots, scarf
        {

            info: {
                type: 'challenge',
                title: 'Prismatica',
                asset: "holographia.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Vocabulary and Word Meaning",
                    commonCore: [],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "I wrote tags for my new clothes. They are, of course, amazing. But I need you to read them and make sure they make sense. Now get to work!",
                    complete: "Good. I knew you could handle it. You may go now."
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
                                    text: "Dress",
                                },
                                subtitle: {
                                    text: "By Prisma",
                                },
                                passage: {
                                    text: "[<tal>This dress feels so light\
                                    <br>\
                                    It twirls when you turn around\
                                    <br>\
                                    It spins with each step]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-18%",
                                translateY: "-20%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Boots",
                                },
                                subtitle: {
                                    text: "By Prisma",
                                },
                                passage: {
                                    text: "[<tal>These boots are cool\
                                    <br>\
                                    You\'ll [<u>walk] proudly out the door\
                                    <br>\
                                    See them? That is style]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "18%",
                                translateY: "-20%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Scarf",
                                },
                                subtitle: {
                                    text: "By Prisma",
                                },
                                passage: {
                                    text: "[<tal>This scarf is cozy\
                                    <br>\
                                    It\'s just like a gentle hug\
                                    <br>\
                                    Soft against your neck]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "18%",
                                rotate: "0deg",
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
                            width: "percent35",
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
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. Which word means the same thing as "twirls" — [<u>spins] or [<u>feels]?',
                        'B. [<u>True] or [<u>false]: In the poem "Dress," "light" means [<em>not heavy.]',
                        'C. Find the underlined word in "Boots." Which of these words is louder: [<u>tiptoe] or [<u>stomp]?',     
                        'D. Which poem uses "like" to compare two things: "[<u>Dress]" or "[<u>Scarf]"?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","(D)4S"],
                        ["0","0","(C)3S","0","0","0","C"],
                        ["0","(B)T","3R","2U","(A)E","0","A"],
                        ["0","0","O","0","0","0","R"],
                        ["(A)S","2P","1I","4N","S","0","F"],
                        ["0","0","M","0","0","0","0"],
                        ["0","0","P","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "ARTS",
                    userArray: ["","","",""]
                },
            }

        },


        // ⭐ helio athletics - honesty and cleaning
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Central Message or Lesson",
                    commonCore: [],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "I had work to do today, but that sounded boring. So I wrote some battle cries instead! Read them and tell me if they make you feel brave.",
                    complete: "Good work. I will remember your skills."
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
                                title: {
                                    text: "Honesty",
                                },
                                subtitle: {
                                    text: "By Robustus",
                                },
                                passage: {
                                    text: "[<tal>There once was a warrior named Me,\
                                    <br>\
                                    as brave as a hero could be.\
                                    <br>\
                                    I could lie to look cool,\
                                    <br>\
                                    but lying is for fools.\
                                    <br>\
                                    Honesty is the best choice, you see!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-20%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Cleaning",
                                },
                                subtitle: {
                                    text: "By Robustus",
                                },
                                passage: {
                                    text: "[<tal>Crumbs slipped from my hands as I ate,\
                                    <br>\
                                    and rolled far away from my plate.\
                                    <br>\
                                    All my friends use this table,\
                                    <br>\
                                    as much as they\'re able.\
                                    <br>\
                                    So I cleaned up my mess and felt great!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
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
                        title: "[<g>1.] What is the main message of \"Honesty\"?",
                        correctIndex: 1,
                        paragraph: [
                            "It i{s} fun to lie",
                            "Hones{t}y is the best choice",
                            "Warriors m{u}st always be cool",
                        ],
                    },
                    {
                        title: "[<g>2.] Line ___ of \"Honesty\" shows the main message.",
                        correctIndex: 2,
                        paragraph: [
                            "Th{r}ee",
                            "{F}our",
                            "F{i}ve",
                        ],
                    },
                    {
                        title: "[<g>3.] In \"Cleaning,\" why does the poet clean up his mess?",
                        correctIndex: 2,
                        paragraph: [
                            "Because he feels bo{r}ed",
                            "Bec{a}use crumbs feel itchy",
                            "Because his frien{d}s use the same table",
                        ],
                    },
                    {
                        title: "[<g>4.] What lesson does \"Cleaning\" teach us?",
                        correctIndex: 0,
                        paragraph: [
                            "It\'s important to clean up {y}our own mess",
                            "Sharin{g} food is a nice thing to do",
                            "You should always use a pla{t}e",
                        ],
                    },
                ],  
                code: {
                    answer: "TIDY",
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
