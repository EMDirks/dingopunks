const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/story-elements/preview-4th-5th-grade.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },

    challengeArray: [

        // ⭐ Critterwerks
        {

            info: {
                type: 'challenge',
                title: "Critterwerks",
                asset: "critterwerks.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Theme and Supporting Details",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.8',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.2',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Terrible Topsy",
                asset: "topsy.png",
                dialogue : {
                    incomplete: "I've been feeling a bit down on my luck, so I decided to sort through some old diary entries. Could you read a couple and see if there's anything in there to cheer me up?",
                    complete: "Hee hee! Thanks for that. Maybe we can be friends?"
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
                                    text: 'Diary Entry #228',
                                },
                                passage: {
                                    text: "Years ago, I found myself in the company of pirates. Yep, pirates! They loved my talent for cracking locks. One stormy night, we raided an ancient temple for the legendary Clockwork Treasure. After dodging whizzing blades, solving maddening riddles, and outsmarting a mechanical guardian, we finally reached the treasure chest. \
                                    <br> \
                                    I cracked the lock, but instead of gold, it held beautiful mechanical toys. It then struck me \u2014 these creations were meant to bring joy, not to be hoarded by pirates! So I left the pirate life behind and began creating mechanical pets. My old pirate mates might still be chasing treasure, but I've found something far more precious."
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "5%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Diary Entry #293',
                                },
                                passage: {
                                    text: "Let me tell you about my latest invention: the Bananatron. This little robot was supposed to help with chores, but it turned out to be way too clumsy! It wobbled, stumbled, and fell over constantly. At first, I was frustrated, thinking it was a failure. But every time it tumbled, it sprang back up, ready to try again. \
                                    <br> \
                                    People in the mall started to notice. They cheered and clapped, inspired by its persistence. I realized then that the Bananatron's charm was in its determination. It taught me that success isn't about perfection, but about the courage to keep trying."
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
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
                            title: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
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
                        title: "[<g>1.] What is the theme of Diary Entry #228?",
                        correctIndex: 2,
                        paragraph: [
                            "Pira{t}es will never stop chasing treasure",
                            "Topsy used to crack loc{k}s for a pirate crew",
                            "Bringing joy is more valuab{l}e than seeking riches",
                        ],
                    },

                    {
                        title: "[<g>2.] What detail supports the theme from #228?",
                        correctIndex: 1,
                        paragraph: [
                            '\"{T}hey loved my talent for cracking locks.\"',
                            '\"... but I\'ve found something far more preci{o}us.\"',
                            '\"... we finally reached the treas{u}re chest.\"',
                        ]
                    },

                    {
                        title: "[<g>3.] What is the theme of Diary Entry #293?",
                        correctIndex: 0,
                        paragraph: [
                            'Success c{o}mes from never giving up',
                            'The Bananatron is i{n}credibly clumsy',
                            'Ch{e}ering and clapping can be inspirational',
                        ]
                    },

                    {
                        title: "[<g>4.] What detail supports the theme from #293?",
                        correctIndex: 2,
                        paragraph: [
                            '\"Let me t{e}ll you about my latest invention...\"',
                            '\"It wobbled, stumbled, and fell over consta{n}tly...\"',
                            '\"But every time i{t} stumbled, it sprang back up...\"',  
                        ]
                    },

                ],  

                code: {
                    answer: "LOOT",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ ZeebPlex
        {

            info: {
                type: 'challenge',
                title: "ZeebPlex",
                asset: "zeeb-plex.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then enter the answers to the questions below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Setting",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Zeeb",
                asset: "zeeb.png",
                dialogue : {
                    incomplete: "I found a weird note in one of my old games, written by the original owner of this arcade. Can you read it and let me know if it's something I need to deal with?",
                    complete: "I know I'm not supposed to plug this game in. But it's just so tempting..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "zeeb-plex.png",
                },

                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: " Back in the eighties, I designed a game called \"Specter,\" which quickly became a favorite among local kids. Once, when I was alone in the arcade, I noticed the game turning on by itself. Lights flickered and spooky sounds echoed across the room \u2014 and then, a mysterious high score appeared on the screen. The name belonged to a player who had vanished without a trace years ago. \
                                    <br> \
                                    Intrigued and terrified, I watched as the game played itself. And so, ever since that night, the game has remained unplugged. I advise you to keep it that way. \
                                    <br> \
                                    - Pepper Johnson, Owner"
                                },                       
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
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
                                translateX: "-6%",
                                translateY: "9%",
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
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left',
                                indent: 'default',
                                brSplit: 'default',
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
                    type: "decoder"
                },

                contentArray: [
                    {
                        title: "[<g>1.] [<u>Setting] includes a story's place, environment, and:",
                        word: "TIM[E]",
                    },
                    {
                        title: "[<g>2.] [<u>Where] does this story take place?",
                        word: "AR[C]ADE",
                    },
                    {
                        title: "[<g>3.] [<u>When] does this story take place?",
                        word: "EIG[H]TIES",
                    },
                    {
                        title: "[<g>4.] What is the environment of the arcade?",
                        word: "SPO[O]KY",
                    },
                ],

                code: {
                    answer: "ECHO",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ The Candy Cave
        {

            info: {
                type: 'challenge',
                title: "The Candy Cave",
                asset: "the-candy-cave.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Character",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Martin Shortnose",
                asset: "noah-shortnose.png",
                dialogue : {
                    incomplete: "I get so stressed about candy critics, especially Sour Sam! He's coming back, and I want to see if there are any lessons to be learned from our last encounter. Can you read about it and advise me?",
                    complete: "Thanks so much for the help! Come back soon, just be careful around the gumball machine..."
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
                                title: {
                                    text: "A Sweet Escape",
                                },
                                passage: {
                                    text: "I was busy crafting a new batch of caramels one evening, when my thoughts were interrupted by a peculiar sound \u2014 a muffled shout coming from the gumball machine. I hurried over and found Sour Sam, a cranky gnome known for his hatred of candy, stuck inside! Despite his usual crankiness, Sour Sam had a look of genuine fear. \
                                    <br> \
                                    \"Martin! Help! Get me out of here!\" he shouted, his voice echoing inside the glass dome. \
                                    <br> \
                                    Now, Sour Sam and I had never been friends. His harsh critiques of my candies often left a sour taste in my mouth. But I couldn't just leave him trapped inside that sugary prison. Not even Sour Sam deserved such embarrassment! So, using my candy tools, I carefully pried open the gumball machine. It was tricky work, but eventually, I managed to free Sam. He came out, covered in sticky gum but otherwise unharmed. \
                                    <br> \
                                    \"Thank you, Martin,\" he muttered, still trying to maintain his famous grouchiness. \"I might not like your candies, but I owe you one.\" \
                                    <br> \
                                    As Sour Sam dusted himself off, I noticed a small change in his attitude. Maybe, just maybe, this experience had softened his heart a bit. We shared an understanding nod before he waddled off, leaving behind a trail of gumballs."
                                }
                                
                                                        
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-1%",
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
                            width: "percent90",
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
                    type: "crossword"
                },

                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which character trait best describes Sour Sam: honest, grumpy, or clever?',
                        'B. Which character is compassionate and kind?',
                        'C. True or false: \"But I couldn\'t just leave him trapped inside that sugary prison\" reveals Martin\'s character traits.',     
                        'D. Do Martin and Sam both love candy? (YES/NO)',
                        
                    ],
                    puzzle: [
                        ["(A)G","2R","U","(B)M","4P","Y","0"],
                        ["0","0","0","3A","0","0","0"],
                        ["0","0","0","R","0","0","0"],
                        ["0","0","0","(C)1T","R","U","E"],
                        ["0","0","0","I","0","0","0"],
                        ["0","0","0","(D)N","O","0","0"],
                    ]
                },  

                code: {
                    answer: "TRAP",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ Helio Athletics
        {

            info: {
                type: 'challenge',
                title: "Helio Athletics",
                asset: "underworld-athletics.png",
                state: "incomplete",
                hint: {
                    text: "Arrange the story in the correct order, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Plot and Conflict",
                    commonCore: [
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.7',
                        },
                        {
                            subject: 'ELA',
                            category: 'Anchor Standards for Reading',
                            standard: 'CCRA.R.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.4.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.4.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.3',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.4.10',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Foundational Skills',
                            standard: 'RF.5.4a',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Informational Text',
                            standard: 'RI.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.1',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.5',
                        },
                        {
                            subject: 'ELA',
                            category: 'Reading: Literature',
                            standard: 'RL.5.10',
                        },
                    ]
                }
            },

            intro: {
                character: "Robustus the Great",
                asset: "robustus-the-great.png",
                dialogue : {
                    incomplete: "Greetings, adventurer! I just received some fanmail from a so-called \"Loyal Admirer,\" but the strips of paper got all mixed up. I command you to arrange this story in the correct order.",
                    complete: "Until our next adventure, stay strong and courageous. Fare thee well!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Arrange the Loyal Admirer's story in order:"
                    ],
                    asset: {
                        scope: "global",
                        path: "1-column-stone.png"
                    }
                },
    
                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>A] &nbsp Robustus the Great, our mighty hero, once went on a legendary quest to find the Titan's Heart: a powerful amulet hidden deep within the Undermurk.",
                                }, 
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>C] &nbsp The journey was filled with peril as he battled hordes of goblins, swarms of ghouls, and gangs of ogres; each group more dangerous than the last.",
                                }, 
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>D] &nbsp In the heart of the Undermurk, Robustus clashed with a powerful guardian protecting the Titan's Heart.",
                                }, 
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>E] &nbsp After defeated the guardian in battle, Robustus claimed the amulet for himself.",
                                }, 
                            },
                        ],
                    },
                    {
    
                        contentArray: [
                            {
                                passage: {
                                    text: "[<s>H] &nbsp Robustus then returned triumphantly to the village, where he was greeted with cheers of praise!",
                                }, 
                            },
                        ],
                    },
                ],  
    
                style: { 
                    block: {
                        dimension: {
                            width: "sort1Width",
                            height: "auto",
                        },
                        misc: {
                            material: 'paper',
                            padding: "half"
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
                        title: "[<g>1.] Which strip of paper includes the exposition?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "[<s>A] {F}",
                            "[<s>C] {G}",
                            "[<s>H] {A}",
                        ],
                    },
    
                    {
                        title: "[<g>2.] Which strip of paper includes the climax?",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "[<s>C] {L}",
                            "[<s>D] {O}",
                            "[<s>E] {S}",
                        ],
                    },
    
                    {
                        title: "[<g>3.] Which strip of paper includes the resolution?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "[<s>A] {B}",
                            "[<s>E] {I}",
                            "[<s>H] {E}",
                        ],
                    },
    
                    {
                        title: "[<g>4.] The conflict in this story is between ________ and the dangerous monsters of the Undermurk.",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "Go{b}lins",
                            "The guar{d}ian",
                            "Robu{s}tus",
                            "The Loyal {A}dmirer",
                        ],
                    },
    
                ],  
    
                code: {
                    answer: "FOES",
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

  