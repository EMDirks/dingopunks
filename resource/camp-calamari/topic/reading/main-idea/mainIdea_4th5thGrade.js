const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/reading/main-idea/preview-4th5th-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    challengeArray: [

        // ⭐ broken animatronic
        {

            info: {
                type: 'challenge',
                title: "Junk Pile",
                asset: "melodina.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details of a Narrative Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.5",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "I wrote down the lyrics to an old shanty I used to sing, called \"A Siren's Promise.\" We can use it to enchant the pirates and lure them away from camp! Will you give it a read?",
                    complete: "Thank you for helping me, kind stranger. Oh, I can't wait to sing once more!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "melodina.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Siren\'s Promise',
                                },
                                passage: {
                                    text:   "The pirates feasted atop the sands, \
                                    <br> \
                                    boasting of treasure from distant lands. \
                                    <br> \
                                    They danced and roared by fire's light, \
                                    <br> \
                                    their voices echoing through the night. \
                                    <br> \
                                    <br> \
                                    And then, a tune rose soft and clear \u2014 \
                                    <br> \
                                    a siren's promise: \"Riches are near. \
                                    <br> \
                                    The tides shall guide your ship to me, \
                                    <br> \
                                    where fortune shines for all to see.\" \
                                    <br> \
                                    <br> \
                                    The greedy pirates sailed for days, \
                                    <br> \
                                    chasing her song through moonlit haze. \
                                    <br> \
                                    But the waters churned, the waves grew tall. \
                                    <br> \
                                    Her voice turned sharp, a deadly call. \
                                    <br> \
                                    <br> \
                                    Their ship was pulled beneath the sea! \
                                    <br> \
                                    The siren laughed at their hopeless plea. \
                                    <br> \
                                    No gold, no glory, just endless night — \
                                    <br> \
                                    another tale of the ocean's bite."
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is the main idea of \"A Siren's Promise?\"",
                        correctIndex: 2,
                        paragraph: [
                            "A pira{t}e ship sunk at night",
                            "The pirates found a ma{p} to buried treasure",
                            "A siren {l}ured greedy pirates to their doom",
                        ],
                    },
                    {
                        title: "[<g>2.] Which detail best supports the main idea?",
                        correctIndex: 2,
                        paragraph: [
                            "\"The pirat{e}s feasted atop the sands...\"",
                            "\"...their voices echoing throug{h} the night.\"",
                            "\"Her voice t{u}rned sharp, a deadly call.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Which stanza is the first to reveal the siren's betrayal?",
                        correctIndex: 2,
                        columns: 2,
                        paragraph: [
                            "{S}tanza 1",
                            "Stan{z}a 2",
                            "S{t}anza 3",
                            "Sta{n}za 4",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: lines 2 and 9 both show the greediness of the pirates.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                ],  
                code: {
                    answer: "LUTE",
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
                    text: "Put together the puzzle pieces, read the short story, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details of an Informational Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
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
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "I'm cookin' up a stew to send them pirates right to sleep! Trouble is, the recipe was scribbled on me favorite cuttin' board, and it's gone to splinters. Can ye put it back together?",
                    complete: "Arr, ye scurvy lot! Truly, I doubted ye landlubbers \u2014 but thanks for lendin' a hand."
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
                                    text: "This is a clever recipe, so pay attention.",
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
                                    text: "It includes calming herbs like lavender and mint,",
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
                                    text: "which are added to a delicious, rich vegetable broth.",
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
                                    text: "Just don't forget the key ingredient: chamomile,",
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
                                    text: "which can make you feel relaxed and sleepy.",
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
                                    text: "The stew is then simmered for many hours.",
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
                                    text: "Hopefully, the pirates find it delicious!",
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
                                    text: "If they do, they'll eat tons of it,",
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
                                    text: "leading them into a peaceful sleep.",
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
                        title: "[<g>1.] What is this text mostly about?",
                        correctIndex: 0,
                        paragraph: [
                            "It's a recipe meant to put the pira{t}es to sleep",
                            "It's a recipe for C{h}ef Gumbo's favorite stew",
                            "It's a plan to turn the pirates into good gu{y}s",
                        ],
                    },
                    {
                        title: "[<g>2.] The ______ puzzle piece best supports this main idea.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Mid{d}le right",
                            "Bottom {r}ight",
                        ],
                    },
                    {
                        title: "[<g>3.] What other pieces show the stew's sleepy effect?",
                        correctIndex: 2,
                        paragraph: [
                            "The middle ri{g}ht, and the top right ",
                            "The bottom left, and the to{p} left",
                            "The m{i}ddle top, and the center",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the most important ingredient?",
                        correctIndex: 1,
                        paragraph: [
                            "Laven{d}er",
                            "Chamo{m}ile",
                            "Vege{t}able broth",
                        ],
                    },
                ],  
                code: {
                    answer: "TRIM",
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
                    text: "Read the passage, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Two Main Ideas and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.8",
                        "RI.4.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.3",
                        "RI.5.5",
                        "RI.5.8",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "Man, sleeping on the beach is harder than it looks! Oh, I almost forgot \u2014 the other counselors left me a letter, something about pirates. Do you mind letting me know what it says?",
                    complete: "I dunno, man... a piece of driftwood collecting driftwood? That's weird, right? "
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
                                passage: {
                                    text: "Dear Driftwood Dan, \
                                    <br> \
                                    <br> \
                                    &nbsp &nbsp &nbsp This is about survival. The Red Tide Pirates are close. Some say their sails are stitched from shadows. Others say their captain whispers to the sea. [<u>Some day, we'll tell you the other legends about these pirates.] But right now, it's extremely important to build a sturdy fence to keep them out. Focus on building it from driftwood that's thick, solid, and free from rot. It must be able to stand up to salty winds and crashing waves. Secure the wood tightly with strong knots, and reinforce weak points with extra rope. This is our first line of defense, and without it, Camp Calamari won't be able to hold back the invasion. \
                                    <br> \
                                    <br> \
                                    &nbsp &nbsp &nbsp And Dan, don't forget that this project is more than just gathering wood and rope. It's a way for the entire camp to unite under a shared purpose. Each piece of driftwood has been tossed by countless waves, just as we've faced many challenges ourselves. Building this fence is about showing that we're a team, standing side by side to protect what matters most. \
                                    <br> \
                                    <br> \
                                    - Your fellow camp counselors"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "1%",
                                rotate: "-3deg",
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
                            width: "percent60",
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
                        'A. The central idea of the first paragraph is [<i>the need to put up a strong _____ in order to survive the pirate invasion.]',
                        'B. [<u>True] or [<u>false]: the underlined phrase helps support this central idea.',
                        'C. The main idea of paragraph 2 is [<i>that building the fence will unite the camp under a shared _____ .]',     
                        'D. Which paragraph focuses more on emotions, and less on giving direct advice: paragraph [<u>one] or [<u>two]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","(D)4T","0","0"],
                        ["0","0","0","0","W","0","(A)F"],
                        ["(C)P","U","R","P","O","1S","E"],
                        ["0","0","0","0","0","0","N"],
                        ["0","0","0","0","0","0","C"],
                        ["0","0","(B)F","2A","3L","S","E"],
                    ]
                },  
                code: {
                    answer: "SALT",
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
                    text: "Sort each scrap of paper into the correct column, forming two passages: \"The Legend of Salty Sam\" and \"Life on a Pirate Ship.\" Then, answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare and Contrast Main Ideas and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.3",
                        "RI.4.9",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.9",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.5",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
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
                    incomplete: "Ah, you've arrived just in time. These scraps of paper hold vital knowledge needed to outwit the pirates \u2014 but they're all mixed up! Will you help me sort them into the right groups?",
                    complete: "Thank you, seeker. Watch out for Chef Gumbo, something about him feels... off."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "The Legend of Salty Sam",
                        "Life on a Pirate Ship",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>A.] Life on a pirate ship was much harder than what we see in movies and TV.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>A.] The legend of Salty Sam is a terrible one. If you're easily scared, stop reading now! But if you're brave, keep going. You're in for quite a tale.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>B.] For example, pirates faced tough conditions, with little food to eat. They were constantly running from the law.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>B.] It begins in the dark waters off Camp Calamari. There, a ghostly ship appears on moonless nights.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>C.] Legend says it's captained by the ghost of the pirate Salty Sam, forever doomed to roam the stormy seas.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>D.] Many pirates claim to have heard his voice crying out into the night. Then, without warning, it stops \u2014 leaving only a chilly breeze behind.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>C.] In addition, captains kept strict rules, and those who broke them were given harsh punishments.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<u>D.] Yet, even with all these challenges, many were drawn to the pirate life. They dreamed of treasure and the freedom of the open sea!",
                                }, 
                            }
                        ],
                        correctIndex: 1
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
                        title: "[<g>1.] The central idea of \"The Legend of Salty Sam\" is:",
                        correctIndex: 1,
                        paragraph: [
                            "A group of sailo{r}s decided to battle a ghost ship",
                            "Salty {S}am haunts the waters off Camp Calamari",
                            "Camp Calmari is surrounde{d} by darkness",
                        ],
                    },
                    {
                        title: "[<g>2.] The central idea of \"Life on a Pirate Ship\" is:",
                        correctIndex: 0,
                        paragraph: [
                            "Pirate life was hars{h} but tempting",
                            "Pirates rarely a{t}e good food",
                            "Every pir{a}te dreamed of finding treasure",
                        ],
                    },
                    {
                        title: "[<g>3.] How do these two central ideas differ?",
                        correctIndex: 1,
                        paragraph: [
                            "Only {o}ne of them involves pirates",
                            "One is a legend, the other is about real l{i}fe",
                            "These two {c}entral ideas do not differ",
                        ],
                    },
                    {
                        title: "[<g>4.] This detail supports the first text's central idea:",
                        correctIndex: 2,
                        paragraph: [
                            "\"If you're easily scare{d}, stop reading now!\"",
                            "\"But if you're {b}rave, keep going...\"",
                            "\"...a ghostly ship ap{p}ears on moonless nights.\"",
                        ],
                    },
                ],  
                code: {
                    answer: "SHIP",
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