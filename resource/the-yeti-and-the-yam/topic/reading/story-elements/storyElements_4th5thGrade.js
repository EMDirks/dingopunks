const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/reading/story-elements/preview-4th-5th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ pippo's cell
        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Read the wanted poster, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Theme and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.10",
                        "L.5.3",
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
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "Wait, what? A wanted poster... for me? All I'm trying to do is find my missing sister. How did this happen? If you help me make sense of it, you can use my oven to bake those yams \u2014 I promise!",
                    complete: "I knew there had to be more to this, I'm no villain! Now, about those yams... my oven's all yours."
                },
            },
            
            // passage-long + title + subtitle (1x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "pippo-fizzlepop.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'WANTED: Pippo Fizzlepop',
                                },
                                subtitle: {
                                    text: "--------  $100,000 BOUNTY  --------",
                                },
                                passage: {
                                    text:   "Pippo Fizzlepop's name is tangled in mystery. After his sister Topsy's invention \"accidentally\" sank the floating city of Port Mechana, the survivors demanded justice. But Topsy vanished, and Pippo was last seen flying a homemade plane in search of her. His only trace was a tattered wing found on a snowy island.<br>\ No one knew what happened to Pippo after his plane went down. Some believed he survived, determined to protect his sister. Adventurers spoke of eerie lights and strange sounds on the island, but those who searched returned only with shivers and unbelievable stories \u2014 if they returned at all.<br>\ Rumors spread quickly. Some claimed Pippo built an underground lair filled with traps, while others swore they saw shadowy figures moving in the fog, powered by gears and steam. As the tales grew, the truth became hidden. But one thing was certain: if Pippo was still out there, he'd do anything to protect his sister.<br>\ What was real? What was rumor? The truth remained buried in fear and misunderstanding. But perhaps Pippo wasn't the villain the world made him out to be. After all, people fear what they don't understand, and Pippo Fizzlepop had become the perfect mystery. Either way, he must be found \u2014 not just to end the rumors, but to finally uncover the truth of what happened to our beloved city."                                    
                                }
                            },
                            {
                                passage: {
                                    text: "<br>-------- ISSUED BY ORDER OF CORDELIA COGSWORTH, MAYOR OF NEW MECHANA --------"                                    
                                }
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
                                rotate: "1deg",
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
                        },
                        {
                            passage: {
                                font: 'default',
                                size: 'tiny',
                                align: 'center',
                            },
                            dimension: {
                                width: "full",
                                height: "auto",
                            }
                        },
                    ]
                },
            },

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is the theme of this poster?",
                        correctIndex: 1,
                        paragraph: [
                            "It is ris{k}y to trust technology.",
                            "Rumors {c}an make the truth hard to find.",
                            "{A}dventure is the key to happiness.",
                        ],
                    },
                    {
                        title: "[<g>2.] What detail supports this theme?",
                        correctIndex: 2,
                        paragraph: [
                            "\"...the survivors demanded j{u}stice.\"",
                            "\"His only {t}race was a tattered wing...\"",
                            "\"As the ta{l}es grew, the truth became hidden.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: the first three sentences of the last paragraph also support this theme.",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "Tr{u}e",
                            "Fal{s}e",
                        ],
                    },
                    {
                        title: "[<g>4.] How did fear shape people's view of Pippo?",
                        correctIndex: 1,
                        paragraph: [
                            "It ma{d}e them feel sympathy for him",
                            "It caused them to {e}xaggerate stories about him",
                            "It made them trust hi{m} more",
                        ],
                    },
                ],  
                code: {
                    answer: "CLUE",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ tater durant's cell
        {

            info: {
                type: 'challenge',
                title: "Tater Durant's Cell",
                asset: "tater-drift.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then type in the answers below. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Setting",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RI.4.1",
                        "RI.4.5",
                        "RI..4.9",
                        "RI..4.10",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.9",
                        "RL.4.10",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RI.5.1",
                        "RI.5.5",
                        "RI.5.9",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.7",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "Sup dude! I just wrote a new song inspired by a page from an old history book \u2014 it just blew in with the wind. Talk about good luck! Tell me what you think, and I'll give you some yams.",
                    complete: "Thanks dude! Hope you enjoy those yams, even if they're still a little frozen."
                },
            },

            // cryptogram + passage-medium + title + subtitle (2x)
            activity: {
                info: {
                    type: "dynamic",
                    asset: "tater-drift.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: '[<tal>Old Mill]',
                                },
                                subtitle: {
                                    text: '[<tal>By Tater Durant]',
                                },
                                passage: {
                                    text: "The snow falls softly; the world grows still.<br>\
                                    The fields rest quietly near the old mill.<br>\
                                    Potatoes sleep, so deep under frost,<br>\
                                    dreaming of warmth, a dream never lost.<br>\
                                    <br>\
                                    The wind may howl as the night grows deep,<br>\
                                    but under the snow, the earth still keeps.<br>\
                                    In winter's calm, we find our peace,<br>\
                                    as teal skies promise sweet release!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "7%",
                                translateY: "7%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'City Life: Winter in the 1800s',
                                },
                                subtitle: {
                                    text: 'By Professor Ronald Reginald',
                                },
                                passage: {
                                    text: "In the 1800s, winter brought challenges to people living in the city. Snowstorms often blocked streets, cutting off entire neighborhoods and making travel impossible. Potatoes and other stored foods were important, helping families get through the long, cold months. But in the stillness of winter, city folks found time to rest and get ready for spring. Chimneys puffed smoke, streets grew quiet, and hope flickered under snow-covered rooftops."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "2%",
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
                                translateX: "2%",
                                translateY: "10%",
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
                                align: 'left'
                            },
                            subtitle: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
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

            // decoder (4x)
            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>1.] A story's time, place, and environment is called its:",
                        word: "SET[T]ING",
                    },
                    {
                        title: "[<g>2.] What time of year do both passages take place?",
                        word: "WINT[E]R",
                    },
                    {
                        title: "[<g>3.] \"Old Mill's\" place is [<u>rural], while \"City Life's\" is:",
                        word: "URB[A]N",
                    },
                    {
                        title: "[<g>4.] The environment/atmosphere of \"Old Mill\" is:",
                        word: "PEACEFU[L]",
                    },
                ],
                code: {
                    answer: "TEAL",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ fishbeard' cell
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Plot and Conflict",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arr, laddie! I've got a map to treasure buried somewhere on this isle, but it's torn to bits. Piece it together, and I'll reward ye with the finest butter from me shipwreck. What say ye?",
                    complete: "Har har! Ye've done it, matey \u2014 me map is whole again. Thank ye greatly!"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "fishbeard.png",
                },

                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "[<bwb>A] Last winter, trolls kidnapped the Snow King.",
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
                                    text: "[<bwb>B] They demanded sunlight as their ransom.",
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
                                    text: "[<bwb>C] Just then, a brave knight stepped forward.",
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
                                    text: "[<bwb>D] She fought her way deep into the trolls' icy fortress.",
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
                                    text: "[<bwb>E] Magnifying glass in hand, the knight captured...",
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
                                    text: "[<bwb>F] ...a beam of sunlight, melting the castle walls!",
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
                                    text: "[<bwb>G] The Snow King escaped & began his journey home.",
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
                                    text: "[<bwb>H] Upon his return, the Snow King and trolls...",
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
                                    text: "[<bwb>I] ...promised to respect the sun & never fight again.",
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
                                size: 'small',
                                align: 'center',
                                puzzle: 'default'
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
                        title: "[<g>1.] Which puzzle pieces include the rising action?",
                        correctIndex: 1,
                        paragraph: [
                            "Puzzle piece{s} A and B",
                            "Puzz{l}e pieces C and D",
                            "Pu{z}zle pieces H and I",
                        ],
                    },

                    {
                        title: "[<g>2.] True or false: the climax of this story is found in puzzle pieces G and H.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },

                    {
                        title: "[<g>3.] Which puzzle piece contains the falling action?",
                        correctIndex: 2,
                        paragraph: [
                            'Puzzl{e} piece E',
                            'Puzzle {p}iece F',
                            'Puzzle p{i}ece G',
                        ],
                    },

                    {
                        title: "[<g>4.] What is the conflict of this story?",
                        correctIndex: 1,
                        paragraph: [
                            'The trolls demand a r{a}nsom for the Snow King.',
                            'A knight fights t{r}olls to rescue the Snow King.',
                            'A magnifying glass melts the ca{s}tle walls.',
                        ],
                    },

                ],  

                code: {
                    answer: "LAIR",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ the knight's cell
        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Character and Point of View",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.6",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.3b",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RI.5.1",
                        "RI.5.6",
                        "RI.5.8",
                        "RI.5.9",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.6",
                        "RL.5.9",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "I have two stories of my capture: one is my own, and the other is a tale I overheard from that wretched yeti. I must know which is true! Assist me, and I'll reward you with some sugar rations.",
                    complete: "It pains me to admit, but perhaps that beast was more clever than I thought. Thank you, traveler."
                },
            },

            // passage-medium (2x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "The Frozen Knight's Account",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "On King Kevin's orders, I traveled deep into Frostbite Island to hunt a savage yeti that had been attacking nearby villages. Wearing my finest armor, I marched through the frozen landscape, my thoughts not only on victory \u2014 but also on the riches and glory this quest would bring. A foolish beast, I thought, was no match for the King's most deserving knight.<br>\
                                    But luck, it seems, was on the yeti's side that day. Instead of fighting me, the horrible beast relied on shameful tricks. I was too focused on my own strength to notice the trap hidden beneath the snow: a deep, icy pit that I happened to fall into. Before I could stand, the yeti appeared, huge and wild, with fur as thick as a blizzard. It captured me, not through skill, but through good luck. Next time, the odds won't be in its favor..."
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
                    },
                    {
                        tag: {
                            text: "The Yeti's Account",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Big strong knight. Tall and shiny. Walked into woods. Too proud. Too loud. Yeti know snow, know forest. Yeti dig deep hole, cover with fresh snow.<br>\
                                    Knight no see trap. Knight walk right in. Knight fall. Armor clank like broken ice. Yeti not lucky, yeti smart! Knight is prize now, trapped like small bird."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "13%",
                                rotate: "1deg",
                            }
                        }
                    }
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
                        }
                    ]
                },
            },

            // crossword (7x6)
            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. Which character trait caused the Frozen Knight to become trapped: her [<u>loyalty], [<u>skill], or [<u>pride]?',
                        'B. The Frozen Knight\'s account of her capture is written from a ____ person point of view.',
                        'C. The Frozen Knight refuses to see the yeti\'s intelligence. She claims it just has good ____ .',     
                        'D. [<u>True] or [<u>false]: based on both passages, it\'s most likely that the yeti is clever, not lucky.',                    
                    ],
                    puzzle: [
                        ["0","(A)P","0","0","0","0","0"],
                        ["0","2R","0","0","0","0","0"],
                        ["(B)F","I","R","S","(D)1T","0","0"],
                        ["0","D","0","0","R","0","0"],
                        ["0","E","0","(C)L","U","C","4K"],
                        ["0","0","0","0","3E","0","0"],
                    ]
                },  
                code: {
                    answer: "TREK",
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