const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/reading/figurative-language/preview-4th5th-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    challengeArray: [

        // ⭐ driftwood dan
        {

            info: {
                type: 'challenge',
                title: "Driftwood Beach",
                asset: "driftwood-dan.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Similes and Metaphors",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.6",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.6",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.7",
                        "RI.5.10",
                        "RL.5.4",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "If we build a fake fort out of driftwood, it might trick the pirates into thinking the beach is defended! Problem is, I can't make sense of these instructions. Can you help me figure them out?",
                    complete: "I heard that our treasure is hidden deep within a cave! It only appears at low tide..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "driftwood-dan.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Gates",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Curved pieces of driftwood can be used to create gates, like jaws of terrible beasts guarding the shore.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Walls",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Old planks from shipwrecks can be used to build a wall, the backbone of our fort.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Masts",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Use the tallest pieces of driftwood to make fake masts, like the arms of giants reaching upwards.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "1%",
                                translateY: "-1%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Shields",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Slice tree trunks into circles and paint them bright colors — they're perfect for shields, and [<u>strong like dragon scales]!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Sharks",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Carve driftwood logs into sharks, those phantoms of the sea, and set them adrift. No pirate wants to sail shark-infested waters!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-1%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Tents",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Build hundreds of fake tents from long, thin pieces of driftwood. Make the pirates think our army is as endless as the ocean's waves.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-1%",
                                rotate: "-1deg",
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
                            width: "percent30",
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
                        title: "[<g>1.] \"As endless as the ocean's waves\" means:",
                        correctIndex: 0,
                        paragraph: [
                            "Vast and impossible to c{o}unt",
                            "Salty and b{l}ue",
                            "Stran{g}e and unknown",
                        ],
                    },
                    {
                        title: "[<g>2.] Explain the underlined figurative language.",
                        correctIndex: 1,
                        paragraph: [
                            "It's a metaphor to sho{w} the shields' strength",
                            "It's {a} simile to show the shields' strength",
                            "It's a simile to {s}how the color of the shields",
                        ],
                    },
                    {
                        title: "[<g>3.] Which passage contains a metaphor that implies something [<i>ghostly and spooky]?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "\"W{a}lls\"",
                            "\"Shar{k}s\"",
                            "\"Te{n}ts\"",
                            "\"Mast{s}\"",
                        ],
                    },
                    {
                        title: "[<g>4.] What does \"the backbone of our fort\" suggest?",
                        correctIndex: 2,
                        paragraph: [
                            "The wall is {m}ade from pieces of old ships",
                            "The wall is brit{t}le and easy to destroy",
                            "The wall is the fort's main defen{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "OAKS",
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
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Hyperbole and Personification",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.5",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.10",
                    ],               
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "I've got a real mess in the galley! Me cutting board's broken, and I need it fixed to cook for the campers. We need energy to fend off those pesky pirates. Can ye lend a hand?",
                    complete: "Do ye know why pirates don't take a bath? They just wash up on shore! Har har!"
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
                                    text: "The pancakes were stacked as high as the clouds.",
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
                                    text: "The butter melted slowly, sighing with relief.",
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
                                    text: "The fish tacos were so fresh, they could almost swim away.",
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
                                    text: "The gruel was so thick, you'd need a shovel to eat it.",
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
                                    text: "The old stove groaned under the weight of the pans.",
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
                                    text: "The bread rose quickly, proud and full of itself.",
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
                                    text: "The fresh stew was hot enough to set your mouth on fire.",
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
                                    text: "The rolling pin grumbled as it flattened the dough.",
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
                                    text: "The stew bubbled,  plotting its escape from the pot.",
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
                        title: "[<g>1.] Find the two pieces that mention stew. Which one uses a hyperbole to describe its temperature?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "The botto{m} left",
                            "The bottom righ{t}",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the meaning of the top right piece?",
                        correctIndex: 1,
                        paragraph: [
                            "The fish tacos were {c}ooked perfectly",
                            "The fish tac{o}s were extremely fresh",
                            "{N}one of the above",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of these pieces both use personification?",
                        correctIndex: 2,
                        paragraph: [
                            "The bottom right, {a}nd the top left",
                            "The middle lef{t}, and the top right",
                            "The two fully-metal {p}ieces",
                        ],
                    },
                    {
                        title: "[<g>4.] In the center piece, personification is used to:",
                        correctIndex: 2,
                        paragraph: [
                            "Show that the pans a{r}e just as old as the stove",
                            "Show that t{h}e stove has the ability to sing",
                            "Show that the stove {s}truggles to hold heavy pans",
                        ],
                    },
                ],  
                code: {
                    answer: "MOPS",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ broken animatronic
        {

            info: {
                type: 'challenge',
                title: "Junk Pile",
                asset: "melodina.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Onomatopoeia and Alliteration",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RI.4.1",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.5",
                        "RL.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.5",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RI.5.1",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "I found this note washed up on the beach. I think it's from the Red Tide \u2014 it might have a clue we can use to defeat them! My eyes don't work so well anymore, though. Can you help me read it?",
                    complete: "Thanks for the help! If you ever find someone who can fix up machines, send them my way."
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
                                    text: 'Battle Plan',
                                },
                                subtitle: {
                                    text: 'By Captain Plank',
                                },
                                passage: {
                                    text:   "The wind howls and the ship creaks \
                                    <br> \
                                    as we sail near Camp Calamari's shore. \
                                    <br> \
                                    <br> \
                                    First Mate Topsy, with her kit, \
                                    <br> \
                                    clinks and clatters in the dark. \
                                    <br> \
                                    She breaks their machines, \
                                    <br> \
                                    snipping and snapping the wires apart. \
                                    <br> \
                                    <br> \
                                    We crash through the silence. \
                                    <br> \
                                    Wham! The camp's screens go dark. \
                                    <br> \
                                    Their defenses crumble, \
                                    <br> \
                                    crackling under our attack. \
                                    <br> \
                                    <br> \
                                    The waves splash, the cannons boom, \
                                    <br> \
                                    the decks creak, the ropes strain. \
                                    <br> \
                                    With clashing swords, \
                                    <br> \
                                    we claim what's ours!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "3deg",
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
                            subtitle: {
                                font: 'default',
                                size: 'tiny',
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. How many examples of alliteration are in the second stanza: [<u>one], [<u>two], or [<u>six]?',
                        'B. Is the purpose of the second stanza\'s alliteration to create a sense of [<u>urgency], [<u>courage], or [<u>delight]?',
                        'C. Does the onomatopoeia in line 13 suggest a calm [<u>peace] or a violent [<u>chaos]?',                    
                        'D. What onomatopoeia is used to show the loudness and power of the cannons? ',     
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","0"],
                        ["(B)U","R","G","4E","N","(C)C","Y"],
                        ["0","0","0","0","0","H","0"],
                        ["0","(A)3T","0","0","0","2A","0"],
                        ["0","W","0","(D)B","O","O","1M"],
                        ["0","O","0","0","0","S","0"],
                    ]
                },  
                code: {
                    answer: "MATE",
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
                    text: "Sort each note into the correct column, then answer the questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Idioms, Adages, and Proverbs",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.5",
                        "CCRA.L.6",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.5",
                        "L.4.5b",
                        "L.4.6",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.4a",
                        "L.5.5",
                        "L.5.5b",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.7",
                        "RI.5.10",
                    ],
                }
            },
            
            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "I saw the pirates' plans in my crystal ball, hidden in riddles and old sayings. I've written down what I can remember, but I need some help sorting through my notes. Will you assist me?",
                    complete: "My crystal ball never lies, but sometimes I need a keen mind to help interpret it. Thank you!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "Notes Containing<br>Idioms, Adages, or Proverbs",
                        "Notes Without<br>Figurative Language",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Note #32",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The Red Tide pirates plan to land on Driftwood Beach at midnight.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Note #10",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The pirates think defeating us will be a piece of cake. Let's prove them wrong!",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Note #17",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The pirates believe that actions speak louder than words. They will never discuss surrender.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },

                    {
                        tag: {
                            text: "Note #41",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "If the waves are too high, the pirates will wait until tomorrow to attack.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Note #24",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Fortune favors the bold, and the Red Tide pirates are the boldest of all.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Note #28",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The Red Tide's fleet has at least four ships, crewed by more than 300 skilled sailors.",
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
                        title: "[<g>1.] What does \"fortune favors the bold\" mean?",
                        correctIndex: 2,
                        paragraph: [
                            "To be suc{c}essful, you must wait patiently",
                            "Taking risks is neve{r} the right choice",
                            "Taking risk{s} can lead to great rewards",
                        ],
                    },
                    {
                        title: "[<g>2.] The idiom on note #10 implies that:",
                        correctIndex: 0,
                        paragraph: [
                            "The pirates think i{t} will be very easy to win",
                            "The pirates think they will be {g}reeted with cake",
                            "The pir{a}tes think winning will be difficult",
                        ],
                    },
                    {
                        title: "[<g>3.] What figurative language does note #41 have?",
                        correctIndex: 2,
                        paragraph: [
                            "An idi{o}m",
                            "A {p}roverb",
                            "Note #41 has no figur{a}tive language",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: there are a total of three notes that contain either an idiom, an adage, or a proverb.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "Fals{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "STAR",
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