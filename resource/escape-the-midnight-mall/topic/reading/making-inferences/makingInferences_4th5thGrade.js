const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/making-inferences/preview-4th-5th-grade.png",
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
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Fictional Story",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.10",
                    ],
                }
            },
            
            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "I just invented The Narratron 6400: a robot that writes stories! I want to sell it tomorrow, but I think we should test it first. Can you tell me if the story it wrote makes sense?",
                    complete: "Hee hee, it works! You\'re officially invited to my grand opening tomorrow. Don\'t miss it!"
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
                                    text: 'King Leo and the Throne of Coats',
                                },
                                subtitle: {
                                    text: "By The Narratron 6400",
                                },
                                passage: {
                                    text:   "Leo didn\'t like recess. It was loud, muddy, and full of other people. Instead, he spent his free time in the lost and found room. He stacked a pile of coats into a throne, and made up stories about being king of the forgotten things.\
                                    <br>\
                                    One day, a girl named Jaya approached Leo. “Have you seen a lunchbox lid?” she asked. \"It\'s silver with sparkles. My little sister lost it.\" Leo wasn\'t surprised. He knew that lid. It was sitting right on his head \u2014 his royal crown.\
                                    <br>\
                                    Jaya spotted the lid and reached for it, but Leo grabbed it first. \"This is mine,\" he said. Jaya looked surprised. \"But my sister cried when she lost it,\" she replied. Leo looked at her, then at the lid in his hands. His chest felt tight.\
                                    <br>\
                                    Leo thought about how he'd feel if he lost something special. It would hurt. So, very slowly, he held out the lid. \"You\'re right,\" he said. \"This doesn\'t belong to me.\" Jaya smiled and took it gently.\
                                    <br>\
                                    As Jaya walked away, Leo looked around the room, then sat back down on his throne of coats. He didn\'t have a crown, but he still had his imagination."
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "2%",
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
                                align: 'left',
                                brSplit: 'default',
                                indent: 'default',
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
                        title: "[<g>1.] Why does Leo enjoy the lost and found room?",
                        correctIndex: 1,
                        paragraph: [
                            "It\'s where {h}is friends hang out",
                            "It\'s a quiet s{p}ace that helps his imagination",
                            "It\'s much warmer than being {o}utside",
                        ],
                    },
                    {
                        title: "[<g>2.] Which line shows that Leo felt sad and guilty?",
                        correctIndex: 1,
                        paragraph: [
                            "\"{H}e stacked coats into a throne...\"",
                            "\"His chest felt t{i}ght.\"",
                            "\"It was still his favori{t}e place.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Based on how Jaya acted, we can infer that she does [<i>not] care about her little sister. True or false?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tru{e}",
                            "Fa{l}se",
                        ],
                    },
                    {
                        title: "[<g>4.] What do we know about Leo\'s character?",
                        correctIndex: 2,
                        paragraph: [
                            "He thi{n}ks recess is boring",
                            "He doesn\'t care a{b}out other peoples\' feelings",
                            "He has a kind heart and a cr{e}ative mind",
                        ],
                    },
                ],  
                code: {
                    answer: "PILE",
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
                    text: "Put together the puzzle pieces, then read the text: left to right, then top to bottom. Finally, answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Nonfiction Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
                        "RI.4.8",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.8",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "Well, Topsy broke my favorite circuit board. Typical. She makes trouble; I make things that actually work. Can you take a look at this mess and put the pieces back together?",
                    complete: "Fine. I guess that helped. But don\'t get used to me saying thanks."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "zeeb-plex.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Inside every arcade machine is a circuit board.",
                                }, 
                                backgroundImage: {
                                    file: "19.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Most people never even think about it,",
                                }, 
                                backgroundImage: {
                                    file: "20.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "but without it, the game won\'t work.",
                                }, 
                                backgroundImage: {
                                    file: "21.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "It holds thousands of tiny parts,",
                                }, 
                                backgroundImage: {
                                    file: "22.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "each connected together like roads on a map.",
                                }, 
                                backgroundImage: {
                                    file: "23.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Electricity travels down these paths,",
                                }, 
                                backgroundImage: {
                                    file: "24.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "carrying information and power.",
                                }, 
                                backgroundImage: {
                                    file: "25.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "If none of these tiny parts or paths are damaged,",
                                }, 
                                backgroundImage: {
                                    file: "26.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "then the game does exactly what it\'s supposed to!",
                                }, 
                                backgroundImage: {
                                    file: "27.png"
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
                        title: "[<g>1.] Why don\'t most people think about circuit boards?",
                        correctIndex: 0,
                        paragraph: [
                            "They\'re hidden inside machine{s}, out of sight",
                            "They carry information and po{w}er",
                            "They run on electricit{y}",
                        ],
                    },
                    {
                        title: "[<g>2.] To fix a broken circuit board, you must be:",
                        correctIndex: 1,
                        paragraph: [
                            "Strong, loud, and g{o}od at smashing things",
                            "{C}areful, patient, and gentle with small parts",
                            "Really skilled at video g{a}mes",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: a circuit board does [<i>not] need electricity in order to work.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>4.] If a circuit board has a damaged part, then:",
                        correctIndex: 1,
                        paragraph: [
                            "It will alwa{y}s catch on fire",
                            "It may {n}ot work the way it should",
                            "It w{i}ll work even better than before",
                        ],
                    },
                ],  
                code: {
                    answer: "SCAN",
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
                    text: "Read both leters, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Related Texts",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.6",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
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
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "Oh, how I adore fan mail! I\'ve already written a fabulous reply, but it needs one final check. Will you take a look for me?",
                    complete: "Just as I thought \u2014 it\'s perfect! Thank you, darling. I knew I could count on your good taste."
                }
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
                                    I\'ve always worn gray and tried not to stand out. But for my birthday, I did something unsual: I bought a bright red scarf from your collection! I didn\'t think I could pull it off, but I wore it anyway.\
                                    <br>\
                                    <br>\
                                    At school, people actually noticed \u2014 in a good way! I raised my hand in class without even thinking, and I laughed with my friends at lunch. That hasn\'t happened in a long time. I never knew a scarf could make me feel so different... braver, maybe.\
                                    <br>\
                                    <br>\
                                    I folded up the scarf that night, but I didn\'t put it in my closet. I put it right next to my backpack.\
                                    <br>\
                                    <br>\
                                    Sincerely,\
                                    <br>\
                                    Glenn"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-5%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Glenn,\
                                    <br>\
                                    <br>\
                                    Oh, your letter absolutely made my day! A red scarf is such a bold, brilliant choice! Warm colors like red, orange, and yellow are like little lightning bolts of positivity. They make you feel loud, brave, and totally unstoppable.\
                                    <br>\
                                    <br>\
                                    Just remember, there\'s always a place for blue and green too. So cool. So calm. So smooth. They\'re perfect for when you want to breathe deep and feel at peace.\
                                    <br>\
                                    <br>\
                                    Keep choosing colors that make you feel amazing!\
                                    <br>\
                                    <br>\
                                    Shine on,\
                                    <br>\
                                    Prisma"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "10%",
                                rotate: "4deg",
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
                        'A. Based on Prisma\'s tone, was she feeling [<u>nervous], [<u>gloomy], or [<u>excited] when she wrote her letter?',
                        'B. Glenn put the scarf next to his backpack because he plans to wear it tomorrow. [<u>True] or [<u>false]?',
                        'C. Are [<u>warm] or [<u>cool] colors more likely to make a person feel confident? ',     
                        'D. Which author told a personal story about their own life?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(B)T","0"],
                        ["(D)3G","0","0","(C)W","A","2R","M"],
                        ["L","0","0","0","0","1U","0"],
                        ["(A)4E","X","C","I","T","E","D"],
                        ["N","0","0","0","0","0","0"],
                        ["N","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "URGE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ the candy cave
        {

            info: {
                type: 'challenge',
                title: 'The Candy Cave',
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Type in the answers to each riddle, using the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Solving Riddles",
                    commonCore: [
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.4a",
                        "L.4.5",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.10",
                        "L.5.4a",
                        "L.5.5",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I wrote some candy riddles for my grand opening tomorrow! I need them to be clever, but not too tricky. The answers are all types of candy, of course. Will you try solving them for me?",
                    complete: "Whew! Thank you ever so much for your help. I just hope the guests laugh with me, not at me."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-candy-cave-2.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Candy #1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I\'m soft and chewy \u2014 in fact, don\'t stop! I can make bubbles, but then they pop."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Candy #2",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I\'m smooth, sweet, and golden-brown. I\'ll stick to your teeth, but I won\'t let you down."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Candy #3",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I freshen your breath. I\'m super cool. I melt in your mouth, and might make you drool."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-1%",
                                translateY: "-5%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Candy #4",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I\'m round. I\'m soft. I\'m rolled in sugar. Can you guess what I am? I\'m not a booger!"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "6%",
                                translateY: "0%",
                                rotate: "-1deg",
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
                                translateY: "8%",
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
                                size: 'small',
                                align: 'center'
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
                        title: "[<g>1.] What is candy #1?",
                        word: "[G]UM",
                    },
                    {
                        title: "[<g>2.] What is candy #2?",
                        word: "CA[R]AMEL",
                    },
                    {
                        title: "[<g>3.] What is candy #3?",
                        word: "M[I]NT",
                    },
                    {
                        title: "[<g>4.] What is candy #4?",
                        word: "GU[M]DROP",
                    },
                ],
                code: {
                    answer: "GRIM",
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

  