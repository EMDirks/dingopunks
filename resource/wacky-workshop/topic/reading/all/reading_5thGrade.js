const resource =  {
    
    info: {
        title: "Wacky Workshop",
        path: "wacky-workshop",
        logo: "resource/wacky-workshop/assets/branding/reading/all/thumbnail-5th-grade.png",
        timerLabel: "SANTA LEAVES"
    },

    challengeArray: [

        // ⭐ sir bobble
        {

            info: {
                type: 'challenge',
                title: "Action Figure Workbench",
                asset: "sir-bobble.png",
                state: "incomplete",
                hint: {
                    text: "Read the letter, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "CCRA.R.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.8",
                        "RI.5.10"
                    ],
                }
            },

            intro: {
                character: "Sir Bobble",
                asset: "sir-bobble.png",
                dialogue : {
                    incomplete: "I am Sir Bobble, knight of the bouncing neck! The others laugh at me... aye, they call me worthless. Yet I received a letter from Santa, not they! I beg thee, good friend, will ye read it aloud?",
                    complete: "You have my thanks! Should you ever call upon me, I shall be at your side in the blink of a bobble."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "sir-bobble.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Sir Bobble,\
                                    <br>\
                                    <br>\
                                    &nbsp &nbsp I hope this letter finds you well. I understand why you feel upset; some toys may look at a spring neck and think it\'s a weakness. They might say it makes you less serious than other knights. They might think it makes you weak. But just because others see it that way doesn\'t mean they\'re right.\
                                    <br>\
                                    &nbsp &nbsp The truth is, your spring neck is a gift. You can duck away from danger in a flash. You can stretch up high to spot trouble. You can even wobble your head to throw enemies off balance! And on top of all that, red suits you perfectly. It\'s my favorite color too, you know.\
                                    <br>\
                                    <br>\
                                    Keep your chin up,\
                                    <br>\
                                    Santa"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "8%",
                                rotate: "-4deg",
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
                            width: "percent65",
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
                        title: "[<g>1.] What\'s the main idea of the first paragraph?",
                        correctIndex: 0,
                        paragraph: [
                            "Some toys judge Sir {B}obble\'s spring neck",
                            "Sir Bobble w{a}nts a new neck",
                            "Sir Bobble doesn\'t like bein{g} a toy",
                        ],
                    },
                    {
                        title: "[<g>2.] Which line supports the first main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"I hope this let{t}er finds you well.\"",
                            "\"They might say it makes you less ser{i}ous...\"",
                            "\"T{h}e truth is, your spring neck is a gift.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] What\'s the main idea of the second paragraph?",
                        correctIndex: 2,
                        paragraph: [
                            "Sir Bob{b}le is the most serious knight in the land",
                            "Santa teaches Sir B{o}bble how to fight",
                            "Sir Bobb{l}e\'s spring neck is useful",
                        ],
                    },
                    {
                        title: "[<g>4.] Which line supports the second main idea?",
                        correctIndex: 0,
                        paragraph: [
                            "\"You can duck away from danger in a f{l}ash.\"",
                            "\"...red suits yo{u} perfectly.\"",
                            "\"It\'s my favorite color too, y{o}u know.\"",
                        ],
                    },
                ],  
                code: {
                    answer: "BILL",
                    userArray: ["","","",""]
                },
            }, 

        },

        // ⭐ patchpaw
        {

            info: {
                type: 'challenge',
                title: 'Sewing Workbench',
                asset: "patchpaw.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "CCRA.R.10",
                        "L.5.3",
                        "L.5.3a",
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
                        "RI.5.1",
                        "RI.5.4",
                        "RI.5.10"
                    ],
                }
            },

            intro: {
                character: "Patchpaw",
                asset: "patchpaw.png",
                dialogue : {
                    incomplete: "Most days I don\'t mind lookin\' a little different. But today I\'m feelin\' low. Who\'d ever love a patchy bear like me? Mrs. Claus left some notes to cheer me up, but I can\'t read. Can you?",
                    complete: "You know, those notes were just what I needed. I can\'t wait to meet Erin. Thank you kindly!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "patchpaw.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "Striped Fabric",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your striped fabric is [<u>captivating]. It\'s never boring to look at you!",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-12%",
                                translateY: "-30%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Fuzzy Fabric",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your fuzzy fabric is super [<u>luxurious], like a velvet blanket or the inside of an expensive new slipper.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-8%",
                                translateY: "0%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Loose Stitches",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your stitches may be loose, but that makes you flexible! You\'re not broken \u2014 just [<u>divisible] into lots of strong little pieces working together.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-15%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Button Eye",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your button-eye is always watchful. Nothing can [<u>disrupt] your steady focus.",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "15%",
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
                    type: "crossword"
                },
                contentArray: {
                    title: "Answer the questions to fill in the crossword.",
                    paragraph: [
                        'A. If [<i>rupt] means [<i>break], then \"disrupt\" means [<i>to break apart.] [<u>Right] or [<u>wrong]?',
                        'B. Which of the following is an example of something \"luxurious\": a [<u>soft] couch or a [<u>hard] chair? ',
                        'C. Which word from \"Striped Fabric\" is an antonym of \"captivating\"?',     
                        'D. \"Divisible\" means ____ [<i>to be divided].',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(A)2R","0"],
                        ["(D)A","0","0","0","0","I","0"],
                        ["(C)B","O","R","3I","4N","G","0"],
                        ["L","0","0","0","0","H","0"],
                        ["1E","0","(B)S","O","F","T","0"],
                        ["0","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "ERIN",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ seaweed sally
        {

            info: {
                type: 'challenge',
                title: "Doll Workbench",
                asset: "seaweed-sally.png",
                state: "incomplete",
                hint: {
                    text: "Read the poems, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.5.3",
                        "L.5.5",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.2",
                        "RL.5.5",
                        "RL.5.9",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Seaweed Sally",
                asset: "seaweed-sally.png",
                dialogue : {
                    incomplete: "Yup, I\'m the doll with seaweed for hair. The others get soft curls; I get a crab living in my bangs! Santa gave me some poems, but I can\'t make sense of them. Can you?",
                    complete: "Huh, I never thought seaweed could be cool. I still don\'t like this crab… but hey, one step at a time!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "seaweed-sally.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'A Sea-Born Wall',
                                },
                                subtitle: {
                                    text: 'By Mrs. Claus',
                                },
                                passage: {
                                    text:   "<br>It rises tall with silent grace,\
                                    <br>\
                                    a sea-born wall time can\'t erase.\
                                    <br>\
                                    Though hurricanes howl and currents fight,\
                                    <br>\
                                    it holds the coast with all its might.\
                                    <br>\
                                    <br>\
                                    It drifts beneath the ocean\'s dome,\
                                    <br>\
                                    a home where fish and turtles roam.\
                                    <br>\
                                    It dances where the sunlight streams,\
                                    <br>\
                                    a swaying world of deep-green dreams."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "10%",
                                translateY: "-20%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Ocean\'s Hair',
                                },
                                subtitle: {
                                    text: 'By Santa\'s Top Elf',
                                },
                                passage: {
                                    text:   "<br>It\'s the ocean\'s hair.\
                                    <br>\
                                    It hums in bubbles.\
                                    <br>\
                                    Fish pass through like thoughts.\
                                    <br>\
                                    <br>\
                                    It reaches,\
                                    <br>\
                                    but never arrives."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "50%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Growing',
                                },
                                subtitle: {
                                    text: 'By Santa',
                                },
                                passage: {
                                    text:   "<br>Torn loose from the rocks\
                                    <br>\
                                    It dances toward the shoreline\
                                    <br>\
                                    Different, but growing"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "30%",
                                rotate: "-4deg",
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Line seven of \"A Sea-Born Wall\" contains ___ .",
                        correctIndex: 1,
                        paragraph: [
                            "A {s}imile",
                            "Personific{a}tion",
                            "Nine s{y}llables",
                        ],
                    },
                    {
                        title: "[<g>2.] Which poet wrote the fewest number of stanzas?",
                        correctIndex: 2,
                        paragraph: [
                            "Mrs. Cla{u}s",
                            "Santa\'s Top {E}lf",
                            "Sa{n}ta",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the theme of the haiku?",
                        correctIndex: 2,
                        paragraph: [
                            "See{w}eed often gets torn from rocks",
                            "The ocean is sca{r}y",
                            "Cha{n}ge is natural, and leads to growth",
                        ],
                    },
                    {
                        title: "[<g>4.] What is the topic of all three poems?",
                        correctIndex: 1,
                        paragraph: [
                            "{F}ish",
                            "Se{a}weed",
                            "Doll{s}",
                        ],
                    },
                ],  
                code: {
                    answer: "ANNA",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ yo-yeti
        {

            info: {
                type: 'challenge',
                title: 'Yo-Yo Workbench',
                asset: "yo-yeti.png",
                state: "incomplete",
                hint: {
                    text: "Read both notes, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
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
                        "L.5.3a",
                        "L.5.4",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.5b",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.1",
                        "RL.5.4",
                    ],
                }
            },

            intro: {
                character: "Yo-Yeti",
                asset: "yo-yeti.png",
                dialogue : {
                    incomplete: "Grrrr! The Yo-Yeti speaks. Santa built me for strength. For purpose! But his message is hidden... hidden in strange marks. You will help, yes?",
                    complete: "Grrrr! Peace shall be made with Sage the Yeti! Thank you, friend."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "yo-yeti.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Note A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The Yo-Yeti is a simple toy: a yo-yo carved from a single blue gem. Its texture is like ice: smooth and a little slippery. Our top elf was feeling [<blu>under the weather], so Santa made it himself."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-20%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Note B",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "They say time waits for no one, not even Santa. And with the yeti still haunting the ridge after all these years, Santa knows he can\'t wait forever. It\'s time to make peace.\
                                    <br>\
                                    <br>\
                                    A peace offering doesn\'t need to be much: just a handcrafted yo-yo offered with care. [<sal>It\'s a seed], a small thing that will grow into something greater."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-5%",
                                rotate: "-2deg",
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
                                translateX: "0%",
                                translateY: "-10%",
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
                            width: "percent45",
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
                                align: 'left'
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
                        title: "[<g>1.] The blue idiom means the elf was feeling ___ .",
                        word: "[S]ICK",
                    },
                    {
                        title: "[<g>2.] What type of figurative language is the red text?",
                        word: "MET[A]PHOR",
                    },
                    {
                        title: "[<g>3.] The first sentence of \"Note B\" contains an:",
                        word: "ADA[G]E",
                    },
                    {
                        title: "[<g>4.] In \"Note A,\" the Yo-Yeti\'s texture is compared to:",
                        word: "IC[E]",
                    },

                ],
                code: {
                    answer: "SAGE",
                    userArray: ["","","",""]
                },
            }          
            
        },

        // ⭐ mister lump
        {

            info: {
                type: 'challenge',
                title: "Crayon Workbench",
                asset: "mister-lump.png",
                state: "incomplete",
                hint: {
                    text: "Read the story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
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
                character: "Mister Lump",
                asset: "mister-lump.png",
                dialogue : {
                    incomplete: "Name\'s Mister Lump. Yep, I\'m made of melted crayons \u2014 and no, no one\'s ever gonna love that. Mrs. Claus wrote a story to cheer me up, but I only read Gnomish, not English! Will you help?",
                    complete: "Sara? Huh... Maybe someone out there does like a gnome made of melted wax. Thanks, I guess."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "mister-lump.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Gary\'s Dragon',
                                },
                                subtitle: {
                                    text: "By Mrs. Claus"
                                },
                                passage: {
                                    text:   "Gary the Goblin was obsessed with crayons. He loved waving fistfuls of colors in the air, hollering, \"WHO WANTS TO DRAW?!\" His best friend, Felix, always did \u2014 but on one condition: no scribbles. Felix liked crisp outlines and careful shading.\
                                    <br>\
                                    One chilly afternoon, Gary sat in his cave, hunched over a crumpled piece of paper. He had just started drawing a castle, when CRACK! His purple crayon snapped in two, leaving a jagged streak across the page. Felix winced and said, \"Ugh. That\'s a disaster.\"\
                                    <br>\
                                    Gary stared at the mess. Then, very slowly, he smiled. He grabbed the broken crayon and scribbled harder than ever. He widened the streak, curved it, and gave it teeth. Out came wings, smoke, claws, and a tail. \"It\'s not a disaster,” Gary said. \"It\'s a dragon.\"\
                                    <br>\
                                    By the time he had finished, the page was covered with purple flames and scales. He pinned it to the cave wall next to his other drawings and leaned back, wax on his nose, grinning wide. Felix blinked. \"Huh,\" he said. \"Actually... that\'s kind of awesome.\"\
                                    <br>\
                                    Gary twirled the crayon between his fingers. \"Told you purple was the best one.\"",
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "6%",
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
                                indent: 'default',
                                brSplit: 'default'
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
                        title: "[<g>1.] What is the theme of \"Gary\'s Dragon\"?",
                        correctIndex: 1,
                        paragraph: [
                            "Gary {d}rew a purple dragon",
                            "You can turn a mi{s}take into something great",
                            "It\'s important to never make a {m}istake",
                        ],
                    },
                    {
                        title: "[<g>2.] Which quote reveals the story\'s setting?",
                        correctIndex: 2,
                        paragraph: [
                            "\"Gary the Goblin was obsessed with cra{y}ons.\"",
                            "\"Gary stared a{t} the mess.\"",
                            "\"One chilly afternoon, Gary s{a}t in his cave...\"",
                        ],
                    },
                    {
                        title: "[<g>3.] In which paragraph did Gary start to solve his problem?",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "S{e}cond",
                            "Thi{r}d",
                            "Fourt{h}",
                            "F{i}fth",
                        ],
                    },
                    {
                        title: "[<g>4.] How is Gary different from Felix?",
                        correctIndex: 1,
                        paragraph: [
                            "Gary is older and {w}iser",
                            "G{a}ry is more messy and chaotic",
                            "Ga{r}y isn\'t afraid of dragons",
                        ],
                    },
                ],  
                code: {
                    answer: "SARA",
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