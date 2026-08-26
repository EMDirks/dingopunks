const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/reading/main-idea/preview-4th-5th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ fishbeard' cell
        {

            info: {
                type: 'challenge',
                title: "Fishbeard's Cell",
                asset: "fishbeard.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea of a Short Story",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.2",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.3",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.5",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.2",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.10",
                        },                       
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.4.2",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "Fishbeard",
                asset: "fishbeard.png",
                dialogue : {
                    incomplete: "Arrr! They wrote a newspaper article about me, but I never learned to read! Lend me yer eyes, and I'll reward ye with a bit o' butter for those yams. What say ye, landlubber?",
                    complete: "Amazing news, laddie! Here's a whole barrel o' butter as a token of me good will."
                },
            },

            // text-long + title + subtitle (1x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    asset: "fishbeard.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Daily News - Special Edition - December 21, 2084",
                        },
                        contentArray: [
                            {
                                title: {
                                    text: 'PIRATE CREW PLOTS CAPTAIN\'S RESCUE',
                                },
                                subtitle: {
                                    text: "By J.J. Dingo, Contributing Reporter",
                                },
                                passage: {
                                    text: "Two winters ago, Captain Fishbeard led his crew of misfits on an epic journey through the frigid North Sea. But the mission took a dire turn when their ship, <em>Storm Breaker</em>, blew off course into a snowy island. The situation was desperate. Within minutes, a prowling yeti ambushed the crew and dragged Captain Fishbeard away into its secret lair.\
                                    <br>\
                                    Devastated but not defeated, the crew vowed to rescue Fishbeard. So, after returning home, they immediately began preparing to invade the snowy island. First, they chartered an entire fleet of ships. Each was packed to the brim with fur-lined clothing to withstand the cold. High-calorie foods — dried meats, nuts, and biscuits — were generously stockpiled.\
                                    <br>\
                                    When it came to recruiting more pirates, the crew hired only the finest navigators, experienced in sailing dangerous, ice-filled waters. The most trustworthy among them were handpicked to lead raiding parties during the attack, ensuring no yeti would take them by surprise. \
                                    <br>\
                                    The final step before setting sail was to get a message to Captain Fishbeard himself. An unsuspecting traveler will soon read this article to him, marking the beginning of a bold attempt to free the imprisoned captain. Only time will tell if the mission succeeds..."
                                }
                            }
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
                        tag: {
                            font: 'default',
                            size: 'small',
                            align: 'left',
                            padding: 'double'
                        },
                        misc: {
                            material: 'paper',
                            padding: "double"
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] The main idea of this story is:",
                        correctIndex: 0,
                        paragraph: [
                            "A pirate crew prepare{s} to rescue their captain.",
                            "The pirates have a ship named \'Storm {B}reaker\'.",
                            "Captain Fishbeard's c{r}ew fled from a yeti.",
                        ],
                    },
                    {
                        title: "[<g>2.] What key detail supports the main idea?",
                        correctIndex: 2,
                        paragraph: [
                            "\"...led his crew {o}f misfits on an epic journey...\"",
                            "\"...a pro{w}ling yeti ambushed the crew...\"",
                            "\"...the crew vowed to rescue Fishbe{a}rd.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Which other detail supports the main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "\"...they {i}mmediately began preparing to invade...\"",
                            "\"...their ship, S{t}orm Breaker, blew off course...\"",
                            "\"The situation {w}as desperate.\"",
                        ],
                    },
                    {
                        title: "[<g>4.] What character trait do the members of Captain Fishbeard's crew all share?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "Lonel{i}ness",
                            "Impa{t}ience",
                            "{L}oyalty",
                            "La{z}iness",
                        ],
                    },
                ],  
                code: {
                    answer: "SAIL",
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
                    text: "Read the poem, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea of a Poem",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.2",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.5",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4b",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.2",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.5",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4b",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.2",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.5",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "I just dropped a fresh new song! It's about some pretty deep stuff I've been thinking about. If you give me a little feedback, I'll stock you up with some frozen yams. Sound alright?",
                    complete: "What a miracle the mighty spud is, bro. Good luck on your yam quest!"
                },
            },

            // passage-medium + title + subtitle (1x)
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
                                    text: "A Potato's Tale",
                                },
                                subtitle: {
                                    text: 'By Tater Durant',
                                },
                                passage: {
                                    text: "In fields of green, beneath the sun, <br>\
                                    a humble spud begins to grow. <br>\
                                    Its journey has only just begun; <br>\
                                    potatoes are my favorite, you know! <br>\
                                    <br>\
                                    When harvest comes, it's plucked with care; <br>\
                                    a gentle snap \u2014 oh what a sound! <br>\
                                    It journeys forth through land and air, <br>\
                                    to dinner tables all around. <br>\
                                    <br>\
                                    From soil to plate, a story unfolds, <br>\
                                    of starchy comfort just for you. <br>\
                                    Every bite is a beauty so bold; <br>\
                                    a potato's tale is always true."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
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

            // crossword (7x6)
            questions: {            
                info: {
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. [<u>True] or [<u>false]: The central idea of this poem is that Tater Durant loves potatoes.',
                        'B. [<u>True] or [<u>false]: The central idea of this poem is that a potato travels on a beautiful journey from the farm to the table.',
                        'C. Does line [<u>four] or [<u>nine] support the main idea?',     
                        'D. The topic of this story is a ______ . ',                    
                    ],
                    puzzle: [
                        ["0","0","0","(A)F","0","0","0"],
                        ["(D)1P","O","T","A","T","2O","0"],
                        ["0","0","0","L","0","0","(C)N"],
                        ["0","0","0","S","0","0","I"],
                        ["(B)4T","R","U","E","0","0","N"],
                        ["0","0","0","0","0","0","3E"],
                    ]
                },  
                code: {
                    answer: "POET",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ pippo's cell
        {

            info: {
                type: 'challenge',
                title: "Pippo's Cell",
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Sort each supporting detail under the correct main idea, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Main Ideas of Informational Texts",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.2",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.9",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.6",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.2",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.9",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.6",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.2",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.9",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.10",
                        },
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "Oh no! I'm trying to build an airplane to fly out of this place, but my plans got all jumbled. How about this \u2014 if you sort through these notes, I'll bake your yams in my oven! Deal?",
                    complete: "Good luck with those yams! And thanks a bunch, I couldn't have done it without you."
                },
            },

            // sort-2-column + text (6x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "MAIN IDEA:<br>Old planes can be recycled.",
                        "MAIN IDEA:<br>Planes are affected by forces.",
                    ],
                    asset: {
                        scope: "global",
                        path: "2-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Supporting Detail #P65K",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "A plane is affected by four main forces: lift, thrust, gravity, and drag.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Supporting Detail #S29Z",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "An airplane can be given a whole new life when it's no longer fit to fly.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Supporting Detail #4LC9",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "To recycle an old plane, workers must carefully take it apart, saving important pieces like rubber wheels and metal sheeting.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Supporting Detail #Z3Q4",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Lift gets a plane into the air, while gravity pulls it down toward Earth. Thrust moves a plane forward, while drag pushes back against it.",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Supporting Detail #LB62",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Recycled plane materials can be used for new things. For example, rubber can be turned into mulch, and metal can be used for plumbing supplies.",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Supporting Detail #9H8J",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "When the forces of lift, thrust, gravity, and drag work perfectly in balance, a plane can fly smoothly through the sky.",
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

            // multiple choice (4x)
            questions: {             
                info: {
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] What is another main idea for the right column?",
                        correctIndex: 0,
                        paragraph: [
                            "Planes fly by balancin{g} four main forces.",
                            "Planes are {f}ascinating machines.",
                            "Planes {w}ork in mysterious ways.",
                        ],
                    },
                    {
                        title: "[<g>2.] What topic do both columns have in common?",
                        correctIndex: 1,
                        paragraph: [
                            "E{a}rth",
                            "Plan{e}s",
                            "Invent{i}ng machines",
                        ],
                    },
                    {
                        title: "[<g>3.] Which other detail belongs in the left column?",
                        correctIndex: 1,
                        paragraph: [
                            "Airplane mechanic{s} love what they do.",
                            "Old airplane p{a}rts can even be used to make art.",
                            "Thrust is created by a plane's engin{e}s.",
                        ],
                    },
                    {
                        title: "[<g>4.] Which supporting details go in the right column?",
                        correctIndex: 0,
                        paragraph: [
                            "Suppo{r}ting details #P65K, #Z3Q4, and #9H8J",
                            "Supporting d{e}tails #P65K, #4LC9, and #9H8J",
                            "Sup{p}orting details #Z3Q4, #S29Z, and #P65K",
                        ],
                    },
                ],  
                code: {
                    answer: "GEAR",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ dr. seraphina's cell
        {

            info: {
                type: 'challenge',
                title: "Dr. Seraphina's Cell",
                asset: "dr-seraphina.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then type in the answers to each question. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Compare and Contrast Main Ideas",
                    commonCore: [
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.1",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.2",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.3",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.6",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.7",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.9",
                        },
                        {
                            subject: "ELA",
                            category: "Anchor Standards for Reading",
                            standard: "CCRA.R.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Language",
                            standard: "L.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Foundational Skills",
                            standard: "RF.4.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.2",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.5",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.9",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Informational Texts",
                            standard: "RI.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.1",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.2",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.3",
                        },
                        {
                            subject: "ELA",
                            grade: [4],
                            category: "Reading: Literature",
                            standard: "RL.4.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Language",
                            standard: "L.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Foundational Skills",
                            standard: "RF.5.4a",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.2",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.5",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.9",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Informational Texts",
                            standard: "RI.5.10",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.1",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.2",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.3",
                        },
                        {
                            subject: "ELA",
                            grade: [5],
                            category: "Reading: Literature",
                            standard: "RL.5.10",
                        },
                        
                    ],
                }
            },

            intro: {
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I respect your appreciation for yams, but I bet the yeti prefers snow cones. Either way, if you help me decode this stack of texts, I'll share some extra sugar with you. Want to get started?",
                    complete: "Thanks for helping with my research \u2014 I truly appreciate your insight. Now, back to work!"
                },
            },

            // cryptogram + passage-medium (2x) [tag]
            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Text 1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Snow cones have a cool history that stretches back thousands of years! For example, in ancient Rome, Emperor Nero enjoyed eating snow flavored with honey. However, the modern version began in the 1850s when ice houses (buildings for storing ice) started selling shavings to customers. \
                                    <br> \
                                    This treat became popular in the 1920s when Samuel Bert designed his famous \"Cherry Delight\" flavor to sell at the Texas State Fair. His goal? Making money! Since then, snow cones have become a favorite summer treat for people all over the world."
                                }
                            }
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
                            text: "Text 2",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "I've been stuck in this icy prison for months now, and nobody's tried to rescue me. So, I decided to take action myself. With my knowledge of chemistry and an unlimited supply of ice, I designed a new snow cone called \"Frosty Freedom.\" It's a unique blend of winter mint with a touch of salamander slime. \
                                    <br> \
                                    It might just be the key to distracting the yeti and making my escape! \
                                    <br> \
                                    - Dr. S"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "6%",
                                rotate: "-3deg",
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
                                translateY: "0%",
                                rotate: "-3deg",
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

            // decoder (4x)
            questions: {             
                info: {
                    type: "decoder"
                },
                contentArray: [
                    {
                        title: "[<g>Text 1 Main Idea:] The ____ of the snow cone.",
                        word: "H[I]STORY",
                    },
                    {
                        title: "[<g>Text 2 Main Idea:] Dr. S invents a snow cone to ____ .",
                        word: "ES[C]APE",
                    },
                    {
                        title: "[<g>3.] Bert's motivation for making snow cones was:",
                        word: "MON[E]Y",
                    },
                    {
                        title: "[<g>4.] Both texts mention people who ____ new flavors.",
                        word: "DESIGNE[D]",
                    },
                ],
                code: {
                    answer: "ICED",
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