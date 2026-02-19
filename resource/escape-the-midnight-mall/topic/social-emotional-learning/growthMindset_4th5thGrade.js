const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/social-emotional-learning/growth-mindset/preview-4th-5th-grade.png",
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
                    text: "Sort each instruction into either the \"Growth Mindset\" or \"Fixed Mindset\" column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Growth Mindset vs. Fixed Mindset",
                    commonCore: [],
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "Hee hee! I\'m Topsy and I sell robot pets! I wrote out some instructions, but too many of them show a fixed mindset instead of a growth mindset. Can you help me sort them out?",
                    complete: "Cheers! If anything starts leaking, just say it was your idea, alright? Hee hee!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Growth Mindset",
                        "Fixed Mindset",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                     {
                        tag: {
                            text: "Instruction #920",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "You don\'t need to build the perfect robot. Just try your best.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Instruction #255",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "If something doesn\'t work as expected, just give up.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Instruction #425",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Tangled wires? That\'s okay, you're still figuring things out. Untangle them and keep going.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Instruction #319",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "If any wires get tangled, you might as well throw them in the trash.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Instruction #411",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "You either know how to build a robot, or you don\'t. Sorry!",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    }, 
                    {
                        tag: {
                            text: "Instruction #283",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Making a mistake is not a big deal. Learn from it, grab your tools, and get to back work!",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] How many instructions show a growth mindset?",
                        correctIndex: 0,
                        paragraph: [
                            "{T}hree",
                            "Fo{u}r",
                            "Fiv{e}",
                        ],
                    },
                    {
                        title: "[<g>2.] Summarize Instruction #283.",
                        correctIndex: 2,
                        paragraph: [
                            "Mistakes me{a}n you\'re bad at something.",
                            "It is never okay to make mi{s}takes.",
                            "Mistakes are normal and help you l{e}arn.",
                        ],
                    },
                    {
                        title: "[<g>3.] Find both of the instructions about tangled wires. Which one shows a fixed mindset?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "In{s}truction #319",
                            "Instructi{o}n #425",
                        ],
                    },
                    {
                        title: "[<g>4.] Rewrite #411 to show a growth mindset.",
                        correctIndex: 1,
                        paragraph: [
                            "Some {p}eople just aren\'t meant to build robots.",
                            "Anyone can build a robo{t}, it just takes practice.",
                            "If building a robot seems har{d}, then don\'t try.",
                        ],
                    },
                ],  
                code: {
                    answer: "TEST",
                    userArray: ["","","",""]
                },
            },      

        },

        // ⭐ helio athletics
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Read each training log, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "The Power of \"Yet\"",
                    commonCore: [],
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "At last, a worthy ally! I must prepare for my glorious raid on the Undermurk \u2014 but first, these training logs won\'t review themselves. Will you help me judge if my recruits are ready for battle?",
                    complete: "Ah, I see greatness in you already! If you wish to join my glorious raid, you know where to find me."
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
                                    file: "12.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Training Log:] Recruit Glort",
                                },
                                passage: {
                                    text: "I\'m so weak! I can\'t even lift up my own shield. I tried once, then fell over like a sad pancake. The others laughed, and truly, I deserved it. I\'m just not strong enough to join the raid... I guess I\'ll just stay behind and mop the floor.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "12.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Training Log:] Recruit Odmar",
                                },
                                passage: {
                                    text: "I can\'t climb the rock wall! I got halfway up, slipped, and landed in a barrel of protein powder. But I think I got a little higher than last time, so maybe I\'m not hopeless after all. I\'m just not there yet.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "12.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Training Log:] Recruit Ferni",
                                },
                                passage: {
                                    text: "I haven\'t learned how to make healing potions yet, but I did mix something that fixed Odmar\'s nosebleed. I can\'t run across 100 meters of lava yet, but I only melted one shoe this time. I haven\'t crafted a helmet that fits my huge head yet, but I [<i>will] keep trying. By thunder, I feel unstoppable!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "0%",
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
                        'A. Which recruit is using the [<i>power of yet] the most: [<u>Glort], [<u>Odmar], or [<u>Ferni]? ',
                        'B. Who didn\'t used the [<i>power of yet] at all?',
                        'C. Which sentence in Odmar\'s log could use a \"yet\" at the end to show a growth mindset: the [<u>first], [<u>second], or [<u>third]?',     
                        'D. [<u>Right] or [<u>wrong]: When Fernie says she will keep trying to make a helmet that fits her huge head, she is showing a fixed mindset.',                    
                    ],
                    puzzle: [
                        ["0","0","(D)W","0","0","0","(C)1F"],
                        ["(A)F","E","3R","N","I","0","I"],
                        ["0","0","2O","0","0","0","R"],
                        ["0","0","N","0","0","0","S"],
                        ["0","0","(B)G","L","O","R","4T"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "FORT",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Reframing Negative Self-Talk",
                    commonCore: [],
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I, uh... may have written some unhelpful thoughts on the countertop. Then I panicked and, well... smashed it. Can you help me put this thing back together? I can\'t make candy without it!",
                    complete: "Oh, thank you! I hope I haven\'t been too much trouble. Come back any time if you want taffy!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "the-candy-cave-2.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "It\'s too dark in here! Nobody likes this creepy cave.",
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
                                    text: "I\'ll never be as good as the bigger shops.",
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
                                    text: "I\'m just not skilled enough to make good candy.",
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
                                    text: "Other shopkeepers don\'t struggle like this.",
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
                                    text: "I\'ve made too many mistakes to keep going.",
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
                                    text: "This shop has been a waste of time.",
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
                                    text: "Everyone must think I\'m a loser.",
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
                                    text: "Maybe I should give up.",
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
                                    text: "My customers will never like my taffy.",
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
                        title: "[<g>1.] Rewrite the center piece to be positive.",
                        correctIndex: 1,
                        paragraph: [
                            "If I keep going, I\'ll {j}ust keep making mistakes.",
                            "I {c}an learn from my mistakes and try new ideas.",
                            "Giving up is easier than moving for{w}ard.",
                        ],
                    },
                    {
                        title: "[<g>2.] The ___ puzzle piece can be reframed as “Making candy is hard, but I\'m not giving up.”",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "T{o}p right",
                            "Botto{m} left",
                        ],
                    },
                    {
                        title: "[<g>3.] Look at the top left puzzle piece. Martin can turn this information into something helpful by:",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "Closing the sho{p}",
                            "Compla{i}ning more",
                            "Bl{a}ming himself",
                            "Adding more {l}ights",
                        ],
                    },
                    {
                        title: "[<g>4.] Martin can learn from the bottom right piece by:",
                        correctIndex: 2,
                        paragraph: [
                            "Insulting his cu{s}tomers",
                            "Closing down {h}is shop for good",
                            "Trying a different t{a}ffy recipe",
                        ],
                    },
                ],  
                code: {
                    answer: "COLA",
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
                    text: "Read both notes, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Learning From Mistakes and Failures",
                    commonCore: [],
                }
            },

            intro: {
                character: "Prisma",
                asset: "prisma.png",
                dialogue : {
                    incomplete: "My designers have been working with a secret new thread for Lady Fresno\'s next dress, but they ran into trouble. I need you to read their notes and figure out what went wrong.",
                    complete: "Very fine work, Puzzle Punks. I can already tell you have an eye for detail."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "holographia.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Designer Damien\'s Note",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Prisma really wanted to use glowlace thread for Lady Fresno\'s new dress. It\'s a shiny thread that glows under moonlight, but it\'s also very delicate. I told Prisma it wasn\'t strong enough, but she didn\'t listen. And sure enough, the dress fell apart as soon as we picked it up from the hanger.\
                                    <br>\
                                    Prisma told me to try again, but I just got angry. I shouted at her, saying  it was her fault, not mine, and that I was tired of fixing her bad ideas."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "6%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Designer Noelle\'s Note",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "The first time I used glowlace thread, I pulled it too tight and it snapped. The second time, it got super tangled. I wanted to give up, but Prisma encouraged me to try again.\
                                    <br>\
                                    So, I went slower, held the thread gently, and doubled the stitching to make it stronger. This time, the dress held together perfectly! I\'m glad I didn\'t quit; now I know how to work with even the trickiest fabric. It just took a little practice."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
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
                                translateX: "2%",
                                translateY: "9%",
                                rotate: "-2deg",
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
                                align: 'left',
                                indent: 'default',
                                brSplit: 'default',
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
                        title: "[<g>1.] Prisma encouraged both designers to ___ again.",
                        word: "T[R]Y",
                    },
                    {
                        title: "[<g>2.] [<u>Right] or [<u>wrong]: [<i>practice] helped Noelle succeed.",
                        word: "R[I]GHT",
                    },
                    {
                        title: "[<g>3.] Which designer learned from their mistakes?",
                        word: "[N]OELLE",
                    },
                    {
                        title: "[<g>4.] Instead of learning from his failures, Damien got:",
                        word: "AN[G]RY",
                    },
                ],
                code: {
                    answer: "RING",
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

  