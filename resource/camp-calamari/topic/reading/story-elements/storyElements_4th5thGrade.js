const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/reading/story-elements/preview-4th5th-grade.png",
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
                    text: "Read the poem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Theme and Key Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",
                        "RL.4.5",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.2",
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "Oh, hello! I may be broken and unable to move, but I can still sing. In fact, I've written a song to lure the pirate ships into dangerous rocks. Will you check if my lyrics make sense?",
                    complete: "Oh, thank you for helping. I can't wait to start singing again!"
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
                                    text: 'Dangers Lie',
                                },
                                passage: {
                                    text:   "<br>I sit alone on a quiet hill,<br> \
                                    surrounded by junk, broken and still.<br> \
                                    Once I moved and sang so bright;<br> \
                                    now I plot beneath moonlight.<br> \
                                    <br> \
                                    Oh pirates, hear my lonely call \u2014<br> \
                                    ignore the risks if you want it all.<br> \
                                    \"Riches await; a mighty haul,<br> \
                                    gold and gems and pearls and all!\"<br> \
                                    <br> \
                                    Oh hear my tune, so sweet and sly,<br> \
                                    to guide your fleet where dangers lie.<br> \
                                    Rocks will tear your ships in two,<br> \
                                    and greed will be the end of you.<br>"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-3deg",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. [<u>True] or [<u>false]: the theme of \"Dangers Lie\" is that greed leads to danger.',
                        'B. Which line contains a key detail that supports this theme: line [<u>one], [<u>two], or [<u>six]?',
                        'C. What specific danger will the pirates face due to their greed?',     
                        'D. In what stanza does the speaker reveal this specific danger?',                    
                    ],
                    puzzle: [
                        ["0","0","(D)T","H","(C)R","E","4E"],
                        ["(A)3T","0","0","0","O","0","0"],
                        ["R","0","0","0","C","0","0"],
                        ["U","0","0","0","K","0","0"],
                        ["E","0","0","0","(B)1S","2I","X"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "SITE",
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
                    text: "Put together the puzzle pieces, read the story, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Setting",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.5",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "Oh, kind soul, I need your help. My crystal mirror lets me see the future, but it's all broken to pieces! Without it, I'm blind to the pirates' plans. Can you help me put it back together?",
                    complete: "I can see clearly now... I'd keep an eye on Chef Gumbo. His word is as murky as his stew."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "madame-mystica.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "The mirror shimmers to life, revealing a lonely beach at sunset,",
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
                                    text: "with a massive shipwreck poking out from the stinking sand.",
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
                                    text: "Two salt-covered figures crouch in the shadow of the wreck:",
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
                                    text: "one wears a pirate hat, and the other carries a rusty shovel.",
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
                                    text: "The one with the hat mutters angrily to the other,",
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
                                    text: "\"Hurry up, ye worthless scallywag! Get digging!\"",
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
                                    text: "As the sky grows darker, sand begins to fly through the sky,",
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
                                    text: "until the pirates haul a massive iron-bound chest up from the hole.",
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
                                    text: "Then without warning, the mirror flickers and goes dark.",
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
                        title: "[<g>1.] Which puzzle piece reveals this story's setting?",
                        correctIndex: 0,
                        paragraph: [
                            "{T}he top left piece",
                            "The piece wit{h} the red sun",
                            "The {b}ottom right piece",
                        ],
                    },
                    {
                        title: "[<g>2.] What is this story's setting?",
                        correctIndex: 1,
                        paragraph: [
                            "A magi{c} mirror",
                            "A l{o}nely beach at sunset",
                            "Two pirate{s} on a beach",
                        ],
                    },
                    {
                        title: "[<g>3.] Which of the following details would best fit into this story's setting?",
                        correctIndex: 2,
                        columns: 2,
                        paragraph: [
                            "A bla{z}ing hot sun",
                            "A crowd of peopl{e}",
                            "A rising {m}oon",
                            "Brigh{t} blue skies",
                        ],
                    },
                    {
                        title: "[<g>4.] How does [<i>time] affect this story's mood?",
                        correctIndex: 1,
                        paragraph: [
                            "The morning sun creates a feeling of happine{s}s",
                            "The setting sun creates a fe{e}ling of urgency",
                            "The dark night c{r}eates a feeling of hopelessness",
                        ],
                    },
                ],  
                code: {
                    answer: "TOME",
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
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Plot, Conflict, and Events",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
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
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "I'm cookin' up me famous Stinky Seaweed Stew to scare off the pirates! The local newspaper wrote about it, but I never learned me letters. Can ye check if it's smelly enough to do the job?",
                    complete: "Thank ye, Dingo Punks. It seems me stinky stew will do the trick. Now, back to sea we go!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "chef-gumbo.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Chef Gumbo's Stinky Seaweed Stew",
                                },
                                subtitle: {
                                    text: "By Tina Banjo, Contributing Reporter",
                                },
                                passage: {
                                    text:   "Pirates were spotted near Camp Calamari, sending campers into a panic. Luckily, Chef Gumbo had his Stinky Seaweed Stew, a bubbling mess of sun-baked seaweed that smelled [<i>terrible]. Gumbo boasted, \"If it sends them pirates runnin', it's a win!\" \
                                    <br> \
                                    Unfortunately, the smell caused big problems at camp. By morning, nearly every counselor had quit and fled. Because of this, the campers were left all alone, wondering what to do. \
                                    <br> \
                                    Chef Gumbo, however, had a plan. He announced with a golden-toothed grin, \"I'll cook up me stew at sea!\" Despite the crashing waves and shark-infested waters, he loaded the pot of stew into a tiny boat. Bracing himself, he paddled out into the waves. \
                                    <br> \
                                    As Gumbo sailed farther from shore, a miracle happened. The horrible smell began to disappear, drifting away with the salty ocean breeze. Back at Camp Calamari, the air became safe to breath again. And one by one, the counselors began to return. \
                                    <br> \
                                    In the end, the camp pulled back together just in time. They were able to rebuild their defenses, lungs full of fresh air."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "1deg",
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

            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is the main conflict of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Chef Gumb{o} decides to cook his stew at sea",
                            "Che{f} Gumbo struggles to control his stinky stew",
                            "Chef Gumbo makes it into the newspap{e}r",
                        ],
                    },
                    {
                        title: "[<g>2.] Why did Chef Gumbo decide to make this stew?",
                        correctIndex: 0,
                        paragraph: [
                            "To make the p{i}rates flee",
                            "To force the ot{h}er counselors to quit",
                            "To feed the cam{p}ers",
                        ],
                    },
                    {
                        title: "[<g>3.] The climax of this story is when:",
                        correctIndex: 2,
                        paragraph: [
                            "Pirates were spotted near {C}amp Calamari",
                            "Almost {a}ll the counselors quit",
                            "Chef Gumbo sailed out into the dangerous {s}ea",
                        ],
                    },
                    {
                        title: "[<g>4.] Which line shows that Gumbo's solution worked?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Pirates were spotted near Camp Cala{m}ari...\"",
                            "\"...the campers were left a{l}l alone...\"",
                            "\"The {h}orrible smell began to disappear...\"",
                        ],
                    },
                ],  
                code: {
                    answer: "FISH",
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
                    text: "Read both passages, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Characters and Point of View",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.4",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.3",
                        "RL.5.9",
                        "RL.5.10",
                    ]
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "Well, would you look at that! Two bottles washed ashore while I was gathering driftwood, each with a note tucked inside. This could be something important... Want to take a look?",
                    complete: "Thanks, friend. I think I'm just gonna play dead \u2014 easy for a chunk of driftwood!"
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
                                        &nbsp &nbsp &nbsp This is a warning from your sister, who's now a prisoner aboard a Red Tide ship. I've seen their cruelty up close. And believe me, these pirates don't care who they hurt. \
                                        <br> \
                                        <br> \
                                        &nbsp &nbsp &nbsp They're driven by greed, always taking more than they need. I've seen them steal from other crews who had only scraps, leaving them with nothing. \
                                        <br> \
                                        <br> \
                                        &nbsp &nbsp &nbsp The worst part is, you can't trust them. They'll make deals and promises, but it's all lies. Don't believe a word they say. \
                                        <br> \
                                        <br> \
                                        Your sister, \
                                        <br> \
                                        Driftwood Dee"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "5%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "To the people of Camp Calamari, \
                                        <br> \
                                        <br> \
                                        &nbsp &nbsp &nbsp I, Captain Plank of the Red Tide Pirates, know about the treasure hidden beneath your beach. Instead of fighting, I offer you a simple deal: open your gates and give us 50% of the treasure. No hard feelings. Everyone gets something. \
                                        <br> \
                                        <br> \
                                        &nbsp &nbsp &nbsp My crew works hard. We are strong, and we will succeed whether or not you agree to these terms. It's in everyone's best interest to make this easy, and we believe in doing things fairly. You can trust us to keep our word. \
                                        <br> \
                                        <br> \
                                        Signed, \
                                        <br> \
                                        Captain Plank"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "-13%",
                                rotate: "3deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Captain Plank describes his crew as:",
                        correctIndex: 2,
                        paragraph: [
                            "Extremely cautio{u}s",
                            "Rut{h}less, mean, and dishonest",
                            "Hardworking, {s}trong, and fair",
                        ],
                    },
                    {
                        title: "[<g>2.] Plank describes his crew this way in order to:",
                        correctIndex: 2,
                        paragraph: [
                            "Encourage the camp t{o} build up their defenses",
                            "Make some new frien{d}s",
                            "Trick the camp into not fighting b{a}ck",
                        ],
                    },
                    {
                        title: "[<g>3.] Which note makes the pirates seem more cruel?",
                        correctIndex: 0,
                        paragraph: [
                            "Driftwood Dee's {n}ote",
                            "Capta{i}n Plank's note",
                            "Neither note makes the {p}irates appear cruel",
                        ],
                    },
                    {
                        title: "[<g>4.] Driftwood Dee wrote her note in first person to:",
                        correctIndex: 1,
                        paragraph: [
                            "Make the {w}arning seem less serious",
                            "Make it personal, showing her {d}irect experience",
                            "Hide the truth a{b}out the Red Tide Pirates",
                        ],
                    },
                ],  
                code: {
                    answer: "SAND",
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