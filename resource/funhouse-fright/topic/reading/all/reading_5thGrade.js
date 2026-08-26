const resource =  {
    
    info: {
        title: "Funhouse Fright",
        path: "funhouse-fright",
        logo: "resource/funhouse-fright/assets/branding/reading/all/preview-5th-grade.png",
        timerLabel: "DOORS LOCK"
    },

    challengeArray: [

        // ⭐ ticket booth
        {

            info: {
                type: 'challenge',
                title: "Ticket Booth",
                asset: "miss-tally.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Main Idea and Supporting Details",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.1",
                        "RI.5.2",
                        "RI.5.3",
                        "RI.5.10",
                        "RL.5.1",
                        "RL.5.5",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Miss Tally",
                asset: "miss-tally.png",
                dialogue : {
                    incomplete: "Oh, hey. You need to read this \"Important Warning\" before entering the funhouse. I think it\'s about like... vampires and puppets. I dunno. I just hand it out.",
                    complete: "Wow, you read it. Good for you. Now let me get back to not working, alright?"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "miss-tally.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Important Warning<br>',
                                },
                                passage: {
                                    text:   "Happy Halloween! We are legally required to inform you that every part of Frederick\'s Funhouse is extremely dangerous. The Boiler Room sprays burning steam. The Terror Tunnel drops into total darkness. A vampire hides in the Hall of Mirrors, and a creepy puppet lives under the Ringmaster\'s Stage. Even the ticket booth has spooky secrets. We hope you enjoy your visit!\
                                    <br>\
                                    That being said, our homemade candy corn is delicious. [<u>It\'s sweet and buttery, with a perfect chewy bite.] Many visitors say it\'s the best they\'ve ever had!"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
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
                        title: "[<g>1.] What\'s the main idea of the first paragraph?",
                        correctIndex: 0,
                        paragraph: [
                            "{F}rederick\'s Funhouse is dangerous",
                            "The Boiler Ro{o}m is full of steam",
                            "There\'s a ticket booth inside {t}he Funhouse",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the main idea of the second paragraph?",
                        correctIndex: 2,
                        paragraph: [
                            "A cree{p}y puppet lives in Frederick\'s Funhouse",
                            "Candy corn is har{d} to make",
                            "Fred{e}rick\'s Funhouse makes tasty candy corn",
                        ],
                    },
                    {
                        title: "[<g>3.] Which sentence supports the first main idea?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Happy Hallo{w}een!\"",
                            "\"The Terror Tunnel drops into tot{a}l darkness.\"",
                            "\"We {h}ope you enjoy your visit!\"",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the underlined sentence is a supporting detail for the second main idea.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "T{r}ue",
                            "Fals{e}",
                        ],
                    },
                ],  
                code: {
                    answer: "FEAR",
                    userArray: ["","","",""]
                },
            },
               
        },

        // ⭐ ringmaster's stage
        {

            info: {
                type: 'challenge',
                title: 'Ringmaster\'s Stage',
                asset: "pippo-fizzlepop.png",
                state: "incomplete",
                hint: {
                    text: "Read both passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Figurative Language",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.7",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "L.5.3",
                        "L.5.4",
                        "L.5.5",
                        "L.5.5a",
                        "L.5.5b",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.1",
                        "RL.5.4",
                        "RL.5.5",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Ringmaster Pippo",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "Frederick asked me to pen a play for the funhouse. I\'m pretty excited, but I have no idea if it\'s good or not! Can you read his instructions, then read my play? Tell me if it makes sense!",
                    complete: "If this play succeeds, I\'ll finally earn enough cash to finish building my \"secret project.\" Cheers!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "pippo-fizzlepop.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Ringmaster Pippo,\
                                    <br>\
                                    <br>\
                                    I demand that you write a play bursting with feeling \u2014 a volcano of emotions! Give me drama. Give me terror. Give me friendship. Your words should make our guests weep, cheer, and hopefully faint. We only have one chance to get this right, so don\'t hold back. Fortune favors the bold!\
                                    <br>\
                                    <br>\
                                    And most importantly: you [<i>must] make it about jellybeans. I love jellybeans.\
                                    <br>\
                                    <br>\
                                    Break a leg,\
                                    <br>\
                                    Frederick"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "15%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'The Jellybean Truce',
                                },
                                subtitle: {
                                    text: 'By Ringmaster Pippo',
                                },
                                passage: {
                                    text:   "[<i>Scene: The Hall of Mirrors. Count Visage stands nearby. Boiler Belle storms in with a loud clang, her boots echoing throughout the room.]\
                                    <br>\
                                    <br>\
                                    BOILER BELLE: Hey, you ate the last grape jellybean! That was mine! You\'re as sneaky as a fox.\
                                    <br>\
                                    <br>\
                                    COUNT VISAGE: And you\'re like a grumpy old man.\
                                    <br>\
                                    <br>\
                                    [<i>There\'s a long pause. Count Visage pulls a purple jellybean from his long sleeve.]\
                                    <br>\
                                    <br>\
                                    BOILER BELLE: Is that... grape?\
                                    <br>\
                                    <br>\
                                    COUNT VISAGE: Perhaps. Shall we call it a truce?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "2deg",
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
                        'A. [<u>Right] or [<u>wrong]: Frederick uses a simile to compare a play to a volcano of emotions.',
                        'B. Is \"break a leg\" a [<u>simile] or an [<u>idiom]?',
                        'C. Which word from \"The Jellybean Truce\" is an onomatopoeia: [<u>clang], [<u>grape], or [<u>truce]?',     
                        'D. What type of figurative language does Count Visage use in his first line of dialogue?',                    
                    ],
                    puzzle: [
                        ["(D)S","0","0","0","0","0","0"],
                        ["(B)I","D","I","O","4M","0","(A)W"],
                        ["M","0","0","0","0","0","2R"],
                        ["3I","0","0","0","0","0","O"],
                        ["L","0","0","0","0","0","N"],
                        ["E","0","(C)C","L","A","N","1G"],
                    ]
                },  
                code: {
                    answer: "GRIM",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ terror tunnel
        {

            info: {
                type: 'challenge',
                title: "Terror Tunnel",
                asset: "plucky-the-clown.png",
                state: "incomplete",
                hint: {
                    text: "Read each note, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Context Clues",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.L.6",
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
                        "RI.5.1",
                        "RI.5.4",
                        "RI.5.7",
                        "RL.5.1",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Plucky the Clown",
                asset: "plucky-the-clown.png",
                dialogue : {
                    incomplete: "Ugh... I gotta leave this terrible tunnel job! I wrote a few notes about quitting, but I think the words I used are too complicated... Can you take a look? My brain\'s not working right.",
                    complete: "Oh my... thanks a million! Maybe now I can get back to the stage. I just need a minute..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "plucky-the-clown.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Note A",
                                },
                                passage: {
                                    text: "This new job makes me feel [<u>uneasy]. I\'ve never been so nervous and uncomfortable! The tunnel is loud, it spins too fast, and I never get a break. My stomach gets all tight and my brain says, “Get out!” I miss being on stage with my rubber chickens.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-13%",
                                translateY: "-3%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Note B",
                                },
                                passage: {
                                    text: "I want to quit. I\'m constantly [<u>reeling] in this horrible tunnel. I just keep lurching around and losing my balance, like the ground is shifting under my feet. I stumble, sway, and grab the walls just to stay upright.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "4%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                title: {
                                    text: "Note C",
                                },
                                passage: {
                                    text: "Lately, I\'ve felt [<u>despondent]. I\'m hopeless. I\'ve lost my spark. I try to smile, but the Terror Tunnel makes me feel heavy inside. I just want to feel like myself again, funny and full of life!",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "14%",
                                rotate: "4deg",
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
                                size: 'mediumSmall',
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
                        title: "[<g>1.] One synonym of \"uneasy\" is:",
                        correctIndex: 1,
                        paragraph: [
                            "Cal{m}",
                            "{T}roubled",
                            "Ti{g}ht",
                        ],
                    },
                    {
                        title: "[<g>2.] What does \"reeling\" mean?",
                        correctIndex: 0,
                        paragraph: [
                            "To v{i}olently lose balance",
                            "To sudd{e}nly quit a job",
                            "To be extremely unha{p}py",
                        ],
                    },
                    {
                        title: "[<g>3.] The word \"despondent\" means:",
                        correctIndex: 2,
                        paragraph: [
                            "Una{b}le to smile",
                            "Happy and full of li{f}e",
                            "Discouraged and in {l}ow spirits",
                        ],
                    },
                    {
                        title: "[<g>4.] True or false: the word [<i>hopeful] is an antonym of \"despondent.\"",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "{T}rue",
                            "Fal{s}e",
                        ],
                    },
                ],  
                code: {
                    answer: "TILT",
                    userArray: ["","","",""]
                },
            },      

        },

        // ⭐ hall of mirrors
        {

            info: {
                type: 'challenge',
                title: 'Hall of Mirrors',
                asset: "count-visage.png",
                state: "incomplete",
                hint: {
                    text: "Read the poem, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Poetry",
                    commonCore: [
                        "CCRA.L.3",
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.5.5",
                        "L.5.5a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.2",
                        "RL.5.5",
                        "RL.5.6",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Count Visage",
                asset: "count-visage.png",
                dialogue : {
                    incomplete: "Ah, must you judge me so quickly? I wear a cape and walk by moonlight, but that does not make me wicked! I have penned a poem to prove my honor \u2014 would thou give it a read?",
                    complete: "I offer you my most gracious thanks. May your taste be forever excellent!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "count-visage.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Not Wicked',
                                },
                                subtitle: {
                                    text: 'By Count Visage',
                                },
                                passage: {
                                    text:   "I adore gold rings and velvet capes,\
                                    <br>\
                                    burgundy drapes and shadowy shapes.\
                                    <br>\
                                    People gasp when I appear \u2014\
                                    <br>\
                                    but I just like things grand, my dear.\
                                    <br>\
                                    <br>\
                                    I sip grape juice from a chalice bright,\
                                    <br>\
                                    while candles dance in amber light.\
                                    <br>\
                                    I am not wicked, not one bit.\
                                    <br>\
                                    I just have style. I can\'t help it."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
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
                                translateY: "-5%",
                                rotate: "-2deg",
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
                                size: 'small',
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
                        title: "[<g>1.] [<u>Right] or [<u>wrong]: the rhyme scheme is ABAB.",
                        word: "[W]RONG",
                    },
                    {
                        title: "[<g>2.] Does stanza [<u>one] or [<u>two] have personification?",
                        word: "TW[O]",
                    },
                    {
                        title: "[<g>3.] Which line has the fewest syllables?",
                        word: "TH[R]EE",
                    },
                    {
                        title: "[<g>4.] The poet\'s purpose is to show he\'s stylish, not ___.",
                        word: "WICK[E]D",
                    },
                ],
                code: {
                    answer: "WORE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ boiler room
        {

            info: {
                type: 'challenge',
                title: "Boiler Room",
                asset: "boiler-belle.png",
                state: "incomplete",
                hint: {
                    text: "Read the short story, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",

                    isUsed: false
                },
                education: {
                    topic: "Story Elements",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RL.5.2",
                        "RL.5.3",
                        "RL.5.10"
                    ],
                }
            },

            intro: {

                character: "Boiler Belle",
                asset: "boiler-belle.png",
                dialogue : {
                    incomplete: "Huh. Looks like I\'m the employee of the month. That\'s nice and all, but I don\'t have time to read the award. I\'ve got a boiler to fix! Mind takin\' a look and lettin\' me know what it says?",
                    complete: "Thanks for readin\' that. Now if you\'ll excuse me, I\'ve got work to do."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "boiler-belle.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Employee of the Month: Boiler Belle',
                                },
                                passage: {
                                    text:   "Boiler Belle showed up for her first night at Frederick\'s Funhouse with a shiny wrench and a big smile. Her boss, Frederick, barely looked at her. \"Just stay out of the way,\" he muttered.\
                                    <br>\
                                    Less than an hour later, alarms blared through the halls. Sticky steam filled the air. Lights flickered, mirrors fogged, and guests slipped on puddles of purple goo.\
                                    <br>\
                                    Frederick burst into the boiler room, wild-eyed. \"King Pumpkin is coming for an inspection!\" he yelled. \"If he sees this, we\'re doomed!\" He paced in circles, flapping his arms angrily. \"Maybe it\'s Plucky\'s fault. Yeah! That dumb clown is always complaining! Or... maybe the lights are haunted!\"\
                                    <br>\
                                    Belle spotted the problem right away: a pipe glowing red-hot and leaking steam. Calmly, she grabbed her wrench, gave it a hard twist, and POP! The pipe sealed with a hiss. The steam stopped. The lights returned. The goo dried up.\
                                    <br>\
                                    Moments later, King Pumpkin arrived. He sniffed the air, looked around, and said, \"It\'s delightfully strange, but it runs perfectly.\"\
                                    <br>\
                                    Frederick blinked. \"You fixed it?\" Belle didn\'t answer. She just kept working."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "2%",
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
                        title: "[<g>1.] What is the setting of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Frederick\'s Funhouse during t{h}e day",
                            "Frede{r}ick\'s Funhouse at night",
                            "King Pumpkin\'{s} castle",
                        ],
                    },
                    {
                        title: "[<g>2.] What is the theme of this story?",
                        correctIndex: 2,
                        paragraph: [
                            "Boiler Belle is the employee o{f} the month",
                            "King Pu{m}pkin visited the funhouse",
                            "Don\'t judge some{o}ne just because they\'re new",
                        ],
                    },
                    {
                        title: "[<g>3.] What did Frederick do when things went wrong?",
                        correctIndex: 1,
                        paragraph: [
                            "He as{k}ed Belle for help ",
                            "He panicked and g{o}t angry ",
                            "He ran away and hi{d}",
                        ],
                    },
                    {
                        title: "[<g>4.] How did Belle react to the same problem?",
                        correctIndex: 0,
                        paragraph: [
                            "She stayed cal{m} and fixed it",
                            "She waited for Frederick\'s ins{t}ructions",
                            "Sh{e} blamed it on someone else",
                        ],
                    },
                ],  
                code: {
                    answer: "ROOM",
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