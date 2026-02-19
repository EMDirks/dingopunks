const resource = {

    info: {
        title: "Camp Calamari",
        path: "camp-calamari",
        logo: "resource/camp-calamari/assets/branding/reading/grammar/thumbnail-4th-5th-grade.png",
        timerLabel: "PIRATES ARRIVE"
    },

    challengeArray: [

        // ⭐ chef gumbo
        {

            info: {
                type: 'challenge',
                title: "Dining Hall",
                asset: "chef-gumbo.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Punctuation and Capitalization",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.2",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1f",
                        "L.4.2",
                        "L.4.2a",
                        "L.4.2b",
                        "L.4.2c",
                        "L.4.3",
                        "L.4.3b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.7",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.2",
                        "L.5.2a",
                        "L.5.2c",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Chef Gumbo",
                asset: "chef-gumbo.png",
                dialogue : {
                    incomplete: "Look at this mess! Me cuttin\' board\'s busted to bits! I need it to make a stew strong enough to keep us counselors standin\'... can\'t fight pirates on empty bellies. Patch it up for me, will ye?",
                    complete: "Hah, ye fixed it faster than a crab can scuttle! You\'ll try a bowl, won\'t ye?"
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
                                    text: "Every Friday, celebrate how far you\'ve sailed.",
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
                                    text: "Let the wind remind you how strong you are.",
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
                                    text: "Follow the stars the charts and your own instincts.",
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
                                    text: "The old sailor said, Smooth seas never made a skilled captain.",
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
                                    text: "On monday, set your sails with purpose.",
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
                                    text: "A brave heart can outshine the thickest fog.",
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
                                    text: "Old Ben always said, “Storms sharpen the soul!”",
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
                                    text: "Even small ships can cross big oceans.",
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
                                    text: "Always seek new shores with a brave heart?",
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
                        title: "[<g>1.] Which puzzle piece has incorrect capitalization?",
                        correctIndex: 2,
                        paragraph: [
                            "The top left pu{z}zle piece",
                            "The b{o}ttom left puzzle piece",
                            "The center puzzle {p}iece",
                        ],
                    },
                    {
                        title: "[<g>2.] The ___ is missing at least one comma.",
                        correctIndex: 0,
                        paragraph: [
                            "T{o}p right puzzle piece",
                            "Mid{d}le right puzzle piece",
                            "Bottom le{f}t puzzle piece",
                        ],
                    },
                    {
                        title: "[<g>3.] What\'s missing from the middle left puzzle piece?",
                        correctIndex: 0,
                        paragraph: [
                            "Quotation ma{r}ks",
                            "A semico{l}on",
                            "A {q}uestion mark",
                        ],
                    },
                    {
                        title: "[<g>4.] Describe the error in the bottom right piece.",
                        correctIndex: 1,
                        paragraph: [
                            "It needs a comma between “shores” and “w{i}th”",
                            "I{t} should end in a period, not a question mark",
                            "There are no errors in this puz{z}le piece",
                        ],
                    },
                ],  
                code: {
                    answer: "PORT",
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
                    text: "Read the letter, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Sentence Structure",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.2",
                        "CCRA.R.5",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1f",
                        "L.4.2",
                        "L.4.2c",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.3b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.2",
                        "L.5.2b",
                        "L.5.3",
                        "L.5.3a",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Broken Animatronic",
                asset: "melodina.png",
                dialogue : {
                    incomplete: "Oh... hello. A message in a bottle just washed ashore, but my eye sensors are too rusty to read it. Please, will you let me know what it says? Maybe it\'s something that can save the camp!",
                    complete: "Those words really brought me back; I\'m ready to help the camp however I can. Thank you! "
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
                                passage: {
                                    text:   "Dear Melodina,\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; I\'m not sure what they call you over at Camp Calamari but that was always your name to me. Anyway, I\'m Banana Gunk Junior. Your old coworker from Pippo\'s Pizza Palace! Every day, we used to sing and dance together on stage. I\'ve been looking for you ever since that storm swept you away. [<i>After all, according to several swirling rumors that have been echoing around for quite some time, you supposedly washed up on a faraway beach at Camp Calamari.]\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; Why am I writing to you? Well, I heard the camp is in a little pirate trouble. If that\'s true, just remember your most powerful gift: your singing voice. Use it to lure those pirates away from camp, off a cliff, into a trap, [<u>but] wherever keeps you safe. Always know that you\'re Melodina, the one who made everyone listen.\
                                    <br>\
                                    <br>\
                                    Your old pal,\
                                    <br>\
                                    Banana Gunk Junior"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "5%",
                                rotate: "-2deg",
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
                            padding: "double"
                        },
                        dimension: {
                            width: "percent70",
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
                                size: 'mediumSmall',
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
                        title: "[<g>1.] The first sentence of the first paragraph is:",
                        correctIndex: 0,
                        paragraph: [
                            "A run-o{n} sentence",
                            "A senten{c}e fragment",
                            "A complete sentence with no {e}rrors",
                        ],
                    },
                    {
                        title: "[<g>2.] The underlined word in paragraph two [<i>should] be:",
                        correctIndex: 0,
                        paragraph: [
                            "{O}r",
                            "Therefor{e}",
                            "Thou{g}h",
                        ],
                    },
                    {
                        title: "[<g>3.] Shorten the italic sentence, but keep its meaning.",
                        correctIndex: 2,
                        paragraph: [
                            "\"{I} can hear sounds echoing all around.\"",
                            "\"There are lot{s} of rumors about you.\"",
                            "\"Rumors say you washed up a{t} Camp Calamari.\"",
                        ],
                    },
                    {
                        title: "[<g>4.] Which of the following is a sentence fragment?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Anyway, I\'m Banana Gunk {J}unior.\"",
                            "\"Your old coworker from Pippo\'s Pizza Palac{e}!\"",
                            "\"Why a{m} I writing to you?\"",
                        ],
                    },
                ],  
                code: {
                    answer: "NOTE",
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
                    text: "Read both passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Parts of Speech",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.3",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1a",
                        "L.4.1b",
                        "L.4.1c",
                        "L.4.1d",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RI.4.10",
                        "RL.4.5",
                        "RL.4.10",
                        "L.5.1",
                        "L.5.1c",
                        "L.5.2",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.10",
                        "RL.5.10"
                    ],
                }
            },

            intro: {
                character: "Madame Mystica",
                asset: "madame-mystica.png",
                dialogue : {
                    incomplete: "Oh, child, my crystal ball has shown me strange visions again! They sparkle with clues about the pirates, but their meanings are twisted like smoke. Hurry \u2014 interpret them for me!",
                    complete: "Ah, yes... such valuable insight! Perhaps we should keep an eye on Driftwood Dan."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "madame-mystica-2.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "6.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Vision One",
                                },
                                passage: {
                                    text: "<br>I see our coins both safe ___ bright.\
                                    <br>\
                                    No pirate raid disturbs their light.\
                                    <br>\
                                    They stay protected, calm, and clear,\
                                    <br>\
                                    even though great danger is near.\
                                    <br>\
                                    <br>\
                                    Stand firm and strong with every day,\
                                    <br>\
                                    with careful eyes ___ guard the way.\
                                    <br>\
                                    The treasure holds because [<i>you] do.\
                                    <br>\
                                    Our shining future rests on you.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-15%",
                                rotate: "-4deg",
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
                                title: {
                                    text: "Vision Two",
                                },
                                passage: {
                                    text: "<br>A driftwood log floats out to sea.\
                                    <br>\
                                    It drifts beyond where eyes can see.\
                                    <br>\
                                    As terrible waves pull it into the night,\
                                    <br>\
                                    the fog swallows it,\
                                    <br>\
                                    <br>\
                                    blocking out light.\
                                    <br>\
                                    <br>\
                                    The log turns slowly, as if it knows,\
                                    <br>\
                                    the horizon fades as darkness grows.\
                                    <br>\
                                    It is vanishing quietly, without a trace.\
                                    <br>\
                                    You ___ watch. I\'ll allow it.\
                                    <br>\
                                    <br>\
                                    But don\'t go and chase.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "15%",
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
                            width: "percent45",
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
                                width: "percent20",
                                height: "auto",
                            }
                        },
                        {
                            title: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'center'
                            },
                            dimension: {
                                width: "percent75",
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
                        'A. Does line [<u>seven] or [<u>eight] of \"Vision Two\" contain a verb in the present progressive tense?',
                        'B. In \"Vision One,\" which word belongs on the blank space in the second stanza: [<u>whom] or [<u>that]?',
                        'C. Find the blank space in the first stanza of \"Vision One.\" What conjunction belong here?',     
                        'D. If the blank space in \"Vision Two\" is meant to show [<i>permission] instead of [<i>ability], should it be filled with [<u>may] or [<u>can]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(B)T","0"],
                        ["0","0","(A)4E","I","G","H","T"],
                        ["0","0","0","0","0","2A","0"],
                        ["(D)1M","0","0","0","0","T","0"],
                        ["(C)A","N","3D","0","0","0","0"],
                        ["Y","0","0","0","0","0","0"],
                    ]
                },  
                code: {
                    answer: "MADE",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ driftwood dan
        {

            info: {
                type: 'challenge',
                title: "Driftwood Beach",
                asset: "driftwood-dan.png",
                state: "incomplete",
                hint: {
                    text: "Read each passage, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Common Errors",
                    commonCore: [
                        "CCRA.L.1",
                        "CCRA.L.2",
                        "CCRA.L.3",
                        "CCRA.L.4",
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.1",
                        "L.4.1e",
                        "L.4.1g",
                        "L.4.2",
                        "L.4.2d",
                        "L.4.3",
                        "L.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.10",
                        "L.5.1",
                        "L.5.1a",
                        "L.5.2",
                        "L.5.2e",
                        "L.5.3",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4c",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Driftwood Dan",
                asset: "driftwood-dan.png",
                dialogue : {
                    incomplete: "The other counselors gave me some plans, but the grammar is trash! There\'s a bunch of weird symbols in there too, and it\'s stressing me out. Can you figure out what\'s going on, my dude?",
                    complete: "Pretty wild they want me to just... float out to sea, but hey, whatever helps the camp!"
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
                            text: "Plan A: Swim",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "If the whether is nice and the waves are calm, then put on a life vest and swim out to sea. Aim straight at the pirates\' biggest ship, then with all your strength, smash a hole through its hull."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "0%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Plan B: Roll",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "If that doesn\'t work, then you must returned to the beach. Then, when the pirates land, roll right into their path. Make them trip over you\'re glorious wooden face!"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-5%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Plan C: Hide",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Your last resort is to hide inside the log pile. Just stay put until the battle ends. By this point, neither \"Plan A\" and \"Plan B\" have worked, so it\'s best if you just keep out of the way."
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "0%",
                                rotate: "4deg",
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
                                translateX: "-5%",
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
                        title: "[<g>1.] In \"Plan B,\" fix the verb with the incorrect tense:",
                        word: "RETU[R]N",
                    },
                    {
                        title: "[<g>2.] How many errors are in \"Plan B\"?",
                        word: "TW[O]",
                    },
                    {
                        title: "[<g>3.] In \"Plan C,\" the word \"and\" should be ___ instead.",
                        word: "N[O]R",
                    },
                    {
                        title: "[<g>4.] Which word in \"Plan A\" is used the wrong way?",
                        word: "WHE[T]HER",
                    },
                ],
                code: {
                    answer: "ROOT",
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
        
    ]

}