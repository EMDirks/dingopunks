const resource =  {

    info: {
        title: "Rainbow Rescue",
        path: "rainbow-rescue",
        logo: "resource/rainbow-rescue/assets/branding/reading/all/preview-5th-grade.png",
        timerLabel: "NOCTIS RETURNS"
    },

    challengeArray: [

        // ⭐ sir eggbert
        {

            info: {
                type: 'challenge',
                title: "Eggbert's Hall",
                asset: "sir-eggbert.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Sir Eggbert",
                asset: "sir-eggbert.png",
                dialogue : {
                    incomplete: "Noctis wants me to read a tale of duty and honor, to prove I\'m worthy of restoring red to the rainbow. I\'ve fought many battles, but I know when to ask for help. Will you come to my aid?",
                    complete: "Well done, soldier. If you see my old commander, Robustus, tell him I still remember his lessons."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sir-eggbert.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Battle of Clover Hill',
                                },
                                subtitle: {
                                    text: 'Written By Commander Grob',
                                },
                                passage: {
                                    text:   "&nbsp &nbsp &nbsp Ah, the great Battle of Clover Hill! A moment of tactical genius, if I say so myself. As the commander of the entire goblin army, I made the decision to retreat at the right moment. It wasn\'t cowardice, oh no \u2014 it was simply a smart strategy. My goblins fought bravely, but the leprechauns had deadly catapults. The odds were not in our favor. \
                                    <br> \
                                    <br> \
                                    &nbsp &nbsp &nbsp I chose to allow myself to fight another day. After all, winning a war requires making tough choices. But some goblins foolishly stayed behind, ignoring my command. So if anyone says I abandoned them, let me remind you: victory isn\'t won by bravery alone. It\'s won by brains. And I\'ve got plenty of those. Now, where\'s my supper?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-3%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Grob\'s Betrayal',
                                },
                                subtitle: {
                                    text: 'Spoken by his soldiers',
                                },
                                passage: {
                                    text:   "[<u>Soldier Oggo:] \"The Battle of Clover Hill? Worst day ever! Commander Grob left us in the muck. He yelled somethin\' about \'strategy,\' then ran off with his buddies. Me and the rest of the boys was still swingin\' our clubs when the leprechauns brought out the catapults. Started launchin\' boulders right at us!\" \
                                    <br> \
                                    <br> \
                                    [<u>Soldier Gibby:] \"Commander Grob says retreatin\' was smart, but what\'s smart about ditchin\' yer goblins to save yerself? If he stayed and helped, we coulda whacked our way outta there. No doubt about it.\" \
                                    <br> \
                                    <br> \
                                    [<u>Soldier Skree:] \"Commander Grob don\'t care about us soldiers, not one bit. Not me, not Oggo, not Gibby, not even Ol\' Bork. He only cares about savin\' his own hide. I ain\'t listenin\' to any \'commander\' ever again!\""
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "8%",
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
                                size: 'tiny',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
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
                        title: "[<g>1.] What is the main idea of \"Battle of Clover Hill?\"",
                        correctIndex: 1,
                        paragraph: [
                            "Grob e{x}plains how foolish goblins are",
                            "Grob defend{s} his retreat as a smart strategy",
                            "Grob celebrates the bravery of his s{o}ldiers",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail supports Grob\'s claim?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Ah, the great Battle of Clover {H}ill!\"",
                            "\"...winning a w{a}r requires making tough choices.\"",
                            "\"Now, where\'s my {s}upper?\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the main idea of \"Grob\'s Betrayal?\"",
                        correctIndex: 2,
                        paragraph: [
                            "The goblins lost the ba{t}tle",
                            "Leprecha{u}ns used catapults against the goblins",
                            "Grob\'s soldiers belie{v}e his retreat was selfish",
                        ],
                    },
                    {
                        title: "[<g>4.] What do both main ideas have in common?",
                        correctIndex: 0,
                        paragraph: [
                            "Both involve Grob\'s retr{e}at",
                            "Both describe Gro{b} in a positive way",
                            "Bo{t}h focus on the skill of the leprechauns",
                        ],
                    },
                ],  
                code: {
                    answer: "SAVE",
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
                    text: "Reach each passage, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.5b",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
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
                    incomplete: "To bring back orange to the rainbow, Noctis is making me face my past mistakes — all the predictions I\'ve gotten wrong. But I can\'t do this alone; I need you by my side. Will you stay?",
                    complete: "Thank you, young seeker. I\'m grateful for your help in facing the truth."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "madame-mystica.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "1.png",
                                },
                            },
                            {
                                passage: {
                                    text: "[<u>Rewards]<br><br>Yesterday, Madame Mystica announced, \"As sure as the sun rises and sets, the leprechauns will be rewarded with [<i>two] pots of gold at the end of the rainbow!\" But instead, there wasn\'t even a single pot. Madame Mystica\'s words shined like treasure, but in the end, were just a map to nowhere.",
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
                                    file: "2.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "[<u>Clovers]<br><br>During the winter, Madame Mystica declared, \"In the springtime, there will be so many four-leaf clovers, you\'ll be drowning in them!\" However, when spring arrived, the four-leaf clovers refused to appear. Not a single one peeked up from the dirt, as if they\'d all agreed to make Mystica look foolish.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "3.png",
                                    type: "theme",
                                },
                            },
                            {
                                passage: {
                                    text: "[<u>Victory]<br><br>Last year, Madame Mystica claimed, \"Make no mistake. The goblins will conquer, capture, and claim victory at Clover Hill!”\" But the reality was different \u2014 boulders from the leprechauns\' catapults sent the goblins scrambling in defeat. They had bitten off more than they could chew.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-5%",
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
                        'A. Which passage contains only similes and metaphors: [<u>Rewards], [<u>Clovers], or [<u>Victory]?',
                        'B. Does the hyperbole in \"Clovers\" imply there would be [<u>few] or a [<u>lot] of four-leaf clovers?',
                        'C. [<u>True] or [<u>false]: personification is used in \"Clovers\" to add a feeling of humor and mischief.',     
                        'D. \"Victory\" includes a phrase that means [<i>taking on a challenge that\'s too difficult to handle.] Is this an [<u>idiom] or a [<u>simile]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(D)I","0"],
                        ["(A)R","E","W","3A","R","D","S"],
                        ["0","0","0","0","0","2I","0"],
                        ["0","0","0","0","(B)1L","O","T"],
                        ["0","0","0","0","0","M","0"],
                        ["(C)T","4R","U","E","0","0","0"],
                    ]
                },  
                code: {
                    answer: "LIAR",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ sparklepants
        {

            info: {
                type: 'challenge',
                title: "Sparkle Cave",
                asset: "sparklepants.png",
                state: "incomplete",
                hint: {
                    text: "Read each poem, then type in the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.5",
                        "L.5.5a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.4",
                        "RL.5.5",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Sparklepants",
                asset: "sparklepants.png",
                dialogue : {
                    incomplete: "That blasted Noctis! She expects me to decode her challenge to “learn my lesson” and save the color yellow. What an insult, I say! Let\'s just get this over with.",
                    complete: "Huh... I got some things to think about now. Maybe I don\'t need that sparkleshirt after all."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sparklepants.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'True Wealth',
                                },
                                subtitle: {
                                    text: 'By Noctis',
                                },
                                passage: {
                                    text:   "[<tal>Sparklepants, beware! \
                                            <br> \
                                            Gold weighs you down. The lesson? \
                                            <br> \
                                            Giving sets you free.]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "0%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Hunt',
                                },
                                subtitle: {
                                    text: 'By Noctis',
                                },
                                passage: {
                                    text:   "[<tal>Oh Sparklepants, with gems so bright \u2014 \
                                    <br> \
                                    you think they\'ll make your troubles right. \
                                    <br> \
                                    The more you take, the more you\'ll want, \
                                    <br> \
                                    a painful, never-ending hunt. \
                                    <br> \
                                    <br> \
                                    A chest of gold is a heavy weight, \
                                    <br> \
                                    with blinding glitter to seal your fate. \
                                    <br> \
                                    So give it up, release its hold, \
                                    <br> \
                                    let go of greed, be brave and bold. \
                                    <br> \
                                    You must find a truer prize. \
                                    <br> \
                                    Reflect the light in your own eyes!]"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Soar',
                                },
                                subtitle: {
                                    text: 'By Noctis',
                                },
                                passage: {
                                    text:   "You\'ll stuff your pockets with treasure. \
                                    <br> \
                                    Each coin will feel like a dream. \
                                    <br> \
                                    <br> \
                                    You\'ll think, \"More will make me better.\" \
                                    <br> \
                                    But Sparklepants \u2014 the greedier you get, \
                                    <br> \
                                    the more you\'ll stumble. \
                                    <br> \
                                    <br> \
                                    This is my lesson to you: \
                                    <br> \
                                    give a coin. Then give another. \
                                    <br> \
                                    It\'s total freedom, like flying. \
                                    <br> \
                                    And everyone around you? \
                                    <br> \
                                    <br> \
                                    They\'ll soar, too."
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
                                translateX: "4%",
                                translateY: "7%",
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
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'tiny',
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
                        title: "[<g>1.] \"Soar\" uses a simile to compare freedom to ____ .",
                        word: "[F]LYING",
                    },
                    {
                        title: "[<g>2.] Stanza 2 of \"The Hunt\" has the rhyme scheme:",
                        word: "A[A]BBCC",
                    },
                    {
                        title: "[<g>3.] All three poems are all about letting go of ____ .",
                        word: "G[R]EED",
                    },
                    {
                        title: "[<g>4.] The poet\'s purpose: Teach Sparklepants a ____ .",
                        word: "L[E]SSON",
                    },
                ],
                code: {
                    answer: "FARE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ sunny snap
        {

            info: {
                type: 'challenge',
                title: "Sunny's Office",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.4b",
                        "L.5.5c",
                        "L.5.6",
                        "RF.5.3",
                        "RF.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.4",
                        "RL.5.4",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Ugh, just my luck... Noctis has returned. She\'s tasked me with fixing a torn-up rune to restore the color green \u2014 but I just don\'t have time! Can you take care of this?",
                    complete: "Oh man, thank you SO much! Words really aren\'t my thing, I\'m much more of a numbers kind of gal."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "sunny-snap.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The goblins were quite [<u>destitute], or poor.",
                                }, 
                                backgroundImage: {
                                    file: "1.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Hopefully your year will be full of luck, not [<u>misfortune].",
                                }, 
                                backgroundImage: {
                                    file: "2.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Sometimes, a [<u>shamrock] (clover) has four leaves.",
                                }, 
                                backgroundImage: {
                                    file: "3.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "St. Patrick [<u>banished] snakes from Ireland, sending them away.",
                                }, 
                                backgroundImage: {
                                    file: "4.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "On the dance floor, she broke out into a jig: a lively dance!",
                                }, 
                                backgroundImage: {
                                    file: "5.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Don\'t be so [<u>mournful]; be happy on St. Patrick\'s day!",
                                }, 
                                backgroundImage: {
                                    file: "6.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>Meteorologists] will sometimes study rainbows.",
                                }, 
                                backgroundImage: {
                                    file: "7.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "When does the [<u>revelry] begin? Leprechauns are great at partying.",
                                }, 
                                backgroundImage: {
                                    file: "8.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "Don\'t be [<u>disloyal] to your friends \u2014 they\'re on your side.",
                                }, 
                                backgroundImage: {
                                    file: "9.png"
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
                        title: "[<g>1.] Find the piece in the center. Here, \"jig\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "A danc{e} floor",
                            "{S}omething that can break",
                            "A {l}ively dance",
                        ],
                    },
                    {
                        title: "[<g>2.] What's an antonym for the underlined word on the top left piece?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "Leprechau{n}",
                            "P{o}or",
                            "Ex{t}remely",
                            "We{a}lthy",
                        ],
                    },
                    {
                        title: "[<g>3.] Look at the puzzle piece with the three moons. If someone has \"misfortune,\" it means they have ____ .",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Ba{d} luck",
                            "Good lu{c}k",
                            "Lots of ho{p}e",
                            "T{o}ns of money",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: A disloyal person is likely to show lots of support to their friends.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "T{r}ue",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "LADS",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ charm
        {

            info: {
                type: 'challenge',
                title: "Secret Workshop",
                asset: "charm.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Elements of a Story",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "C.H.A.R.M.",
                asset: "charm.png",
                dialogue : {
                    incomplete: "Task: Recover blue, indigo, and violet for rainbow restoration. How: Analyze provided story. Failure: not an option. Requesting immediate assistance from Dingo Punks!",
                    complete: "Task complete. Colors restored. Self-worth calculated. Your assistance was... invaluable."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "charm.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Charming Story',
                                },
                                subtitle: {
                                    text: "By Noctis",
                                },
                                passage: {
                                    text:   "Hollow Jack wasn\'t just a rusty robot. He was the most reliable worker on Candlewick\'s Farm, tirelessly packaging crops for the market. Though the farmhands teased him, calling him \"Junk Bucket,\" Jack never let it bother him. He quietly repaired tools, cleared debris, and even shooed away mice with care rather than frightening them. \
                                    <br> \
                                    One evening, the ground began to rumble. From the shadowy depths of the Undermurk, a swarm of massive slugs emerged, leaving behind trails of toxic slime as they devoured the crops. The farmhands fled, but Jack remained. Determined as ever, he set up a series of enchanted lights to guide the slugs away from the fields. One by one, he safely redirected the invaders back to the Undermurk, saving the farm without hurting a single slug. \
                                    <br> \
                                    Impressed by Jack\'s actions, Candlewick rewarded him with a much-deserved upgrade. Soon, he emerged from the farm\'s workshop as C.H.A.R.M. \u2014 the [<i>Chromatic Hologram and Rainbow Mechanism]. His once-rusty frame now shone with beautiful lights. \"You\'ve done more for this farm than anyone,\" Candlewick told him. \"But now, the rest of the world needs your light.\" \
                                    <br> \
                                    When C.H.A.R.M. left the farm for good, the farmhands who had once mocked him waved him off as a hero. Though he spoke no words, the soft glow of his eyes said everything. His patience, kindness, and steady work had transformed him into something amazing. He left as a symbol of light, ready to bring hope and goodness to the world."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "4%",
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
                        title: "[<g>1.] What is the theme of this short story?",
                        correctIndex: 0,
                        paragraph: [
                            "Kindness and hard work {c}an lead to greatness",
                            "Hollow jack {g}ot a much-deserved upgrade",
                            "Hollow {J}ack saved the farm from some slugs",
                        ],
                    },
                    {
                        title: "[<g>2.] A setting is the time and place in which a story is told. What is the [<i>place] for \"A Charming Story?\"",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "A lonely fa{c}tory",
                            "Candlewick\'s F{a}rm",
                            "The Under{m}urk",
                            "A c{o}rnfield",
                        ],
                    },
                    {
                        title: "[<g>3.] In this story's third paragraph, the main character was renamed to _____ .",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "Candle{w}ick",
                            "N{o}ctis",
                            "C.H.A.{R}.M.",
                            "Junk Bucke{t}",
                        ],
                    },
                    {
                        title: "[<g>4.] In which part of this story did the farmhands begin to respect their robot coworker?",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "T{h}e exposition",
                            "The rising ac{t}ion",
                            "The {c}limax",
                            "The r{e}solution",
                        ],
                    },
                ],  
                code: {
                    answer: "CARE",
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