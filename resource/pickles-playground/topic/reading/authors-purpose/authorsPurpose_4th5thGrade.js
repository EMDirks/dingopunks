const resource =  {

    info: {
        title: "Escape from Pickle\'s Playground",
        path: "escape-from-pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/authors-purpose/thumbnail-4th-5th-grade.png",
        timerLabel: "PICKLE ARRIVES"
    },

    challengeArray: [

        // ⭐ monkey bars 
        {

            info: {
                type: 'challenge',
                title: "Monkey Bars",
                asset: "banana-gunk-jr.png",
                state: "incomplete",
                hint: {
                    text: "Read the note, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "PIE: Persuade, Inform, and Entertain",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.3",
                        "RI.4.8",
                        "RI.4.10",
                        "RL.4.1",
                        "RL.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.8",
                        "RI.5.10",
                        "RL.5.6",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Gunk",
                asset: "banana-gunk-jr.png",
                dialogue : {
                    incomplete: "Oh! Sorry, I was just... standing here. Thinking. Pickle wrote me a letter, but I can only read Monkeyish \u2014 not English! Can you read it to me? I'd really like to know what it\'s all about.",
                    complete: "You know, I always did think I smelled a little like pizza. Now I know why. Thanks, friend!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "banana-gunk-jr.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'To: Gunk\
                                    <br>\
                                    From: Pickle',
                                },
                                passage: {
                                    text:   "Did you know you were built in 1997? Back then, your job was to dance on stage at Pippo\'s Pizza Palace.\
                                    <br>\
                                    Oh, I even wrote a song about you! [<i>Gunk, Gunk, Gunk, he dances all day. They threw him in a dumpster but he's doing okay. His gears go creak, and his circuits go buzz. When he says it\'s time to dance *clap* everybody does!]\
                                    <br>\
                                    Anyway, I know you don't have that job anymore, but you still have a lot to offer. So stop being so sad! I really think if you just [<i>tried] to feel better, you [<i>would] feel better. That\'s how it works, right?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "3%",
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
                            title: {
                                font: 'default',
                                size: 'medium',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
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
                        title: "[<g>1.] Who is the author of this note?",
                        correctIndex: 0,
                        paragraph: [
                            "Pick{l}e",
                            "G{u}nk",
                            "None of th{e} above",
                        ],
                    },
                    {
                        title: "[<g>2.] In the first paragraph, Pickle\'s goal is to:",
                        correctIndex: 1,
                        paragraph: [
                            "Chee{r} up Gunk",
                            "Inform Gunk about where he\'s fr{o}m",
                            "Entertain Gun{k} with a silly story",
                        ],
                    },
                    {
                        title: "[<g>3.] In ____ , the author\'s purpose is to [<i>persuade].",
                        correctIndex: 2,
                        paragraph: [
                            "P{a}ragraph one",
                            "Para{g}raph two",
                            "Parag{r}aph three",
                        ],
                    },
                    {
                        title: "[<g>4.] Pickle most likely wrote the second paragraph in order to ___ Gunk.",
                        correctIndex: 2,
                        columns: 2,
                        paragraph: [
                            "Persu{a}de",
                            "In{f}orm",
                            "{E}ntertain",
                            "De{s}cribe",
                        ],
                    },
                ],  
                code: {
                    answer: "LORE",
                    userArray: ["","","",""]
                },
            },
            
        },

        // ⭐ play palace
        {

            info: {
                type: 'challenge',
                title: "Play Palace",
                asset: "king-kevin.png",
                state: "incomplete",
                hint: {
                    text: "Read the passages, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "ED: Explain and Describe",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "King Kevin",
                asset: "king-kevin.png",
                dialogue : {
                    incomplete: "Pickle keeps leaving me these notes talking about \"gifts\" and \"deals,\" but I truly don\'t care. I\'m far too busy. Read them and tell me if they\'re actually worth my time. Got it? Honk!",
                    complete: "Hmm. That slug does sound pretty tasty. I suppose I owe you my thanks."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "king-kevin.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "3.png",
                                },
                            },
                            {
                                title: {
                                    text: "Gift One",
                                },
                                passage: {
                                    text: "Dear Kevin, I would like to give you this extra crunchy corn dog. Why is it extra crunchy? Because I fried it fourteen times! Each trip into the fryer grows a brand new crust right on top of the old one.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "2%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "4.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Gift Two",
                                },
                                passage: {
                                    text: "Dear Kevin, I am gifting you my pocket slug. He is slippery, wet, and a nice shade of grayish green. He fits right inside a pocket, as long as it\'s not too small. He doesn't move much, or make any noises, but I think he\'s happy.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "5.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "Gift Three",
                                },
                                passage: {
                                    text: "Dear Kevin, here\'s the deal: you can have my old lunchbox! It has three smells. The first smell is tuna. The second smell is anchovies. The third smell does not have a name... yet. Don\'t worry, I\'ll figure it out.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "4%",
                                translateY: "-1%",
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
                        'A. [<u>Right] or [<u>wrong]: the author\'s purpose with \"Gift Two\" is to explain why his slug is happy.',
                        'B. Is the purpose of \"Gift One\" to [<u>describe] what a corn dog is, or [<u>explain] why it\'s so crunchy?',
                        'C. [<u>Right] or [<u>wrong]: \"Gift Three\" is a description of what the old lunchbox smells like.',     
                        'D. Which word in \"Gift One\" helps show that its purpose is to [<i>explain:] [<u>you], [<u>the], or [<u>why]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","(D)W","0","0","0"],
                        ["(C)R","I","G","H","1T","0","(A)W"],
                        ["0","0","0","4Y","0","0","R"],
                        ["0","0","0","0","0","0","O"],
                        ["(B)E","X","P","L","A","2I","3N"],
                        ["0","0","0","0","0","0","G"],
                    ]
                },  
                code: {
                    answer: "TINY",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ tunnel slide
        {

            info: {
                type: 'challenge',
                title: 'Tunnel Slide',
                asset: "twisted-tori.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Reasons, Evidence, and Audience",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Twisted Tori",
                asset: "twisted-tori.png",
                dialogue : {
                    incomplete: "Well, would you look at that! I got another secret letter from Pickle. Look, I've got nothing better to do down here, and neither do you. Want to help me figure this thing out?",
                    complete: "Well, that was something. Thanks for sticking around... not everyone does."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "twisted-tori.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear [<p>TORI],\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; This is Pickle. I am writing to you because I think someone is stealing from my [<p>SPOON] collection! They\'ve been taking the bright neon ones, which are my favorite kind. You\'re the best mystery-solver I know, so maybe you can help.\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; Here\'s why I\'m worried: I count my [<p>SPOONS] every night, and three have gone missing since Tuesday. And guess what? Lately, Gunk has been spotted around the playground with some new [<p>SPOONS]. Bright neon ones. Everyone knows he\'s the only one here strong enough to unbend those things. Look, I\'m not saying it was him. But it probably was, right?"
                                    }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "5%",
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
                                translateY: "8%",
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
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
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
                        title: "[<g>1.] Pickle claims that someone is stealing his ____ .",
                        word: "SPOO[N]S",
                    },
                    {
                        title: "[<g>2.] His reasoning is that ___ spoons are gone.",
                        word: "THRE[E]",
                    },
                    {
                        title: "[<g>3.] Does paragraph [<u>one] or [<u>two] contain evidence?",
                        word: "TW[O]",
                    },
                    {
                        title: "[<g>4.] [<u>Right] or [<u>wrong]: Pickle\'s [<i>audience] is Gunk.",
                        word: "WRO[N]G",
                    },
                ],
                code: {
                    answer: "NEON",
                    userArray: ["","","",""]
                },
            }

        },

        // ⭐ swing set
        {

            info: {
                type: 'challenge',
                title: 'Swing Set',
                asset: "merriwig.png",
                state: "incomplete",
                hint: {
                    text: "Read both letters, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Compare and Contrast Author\'s Purpose",
                    commonCore: [
                        "XXX"
                    ],
                }
            },

            intro: {
                character: "Merriwig Fenn",
                asset: "merriwig.png",
                dialogue : {
                    incomplete: "Pickle left me a couple of love letters. At least... I think that\'s what they are. I\'m not sure he knows what a love letter is. Anyway, I\'m not interested, but you can read them if you want.",
                    complete: "Tire swings and corn dogs... Anyway... thanks for reading. Onward we swing, I suppose!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "merriwig.png",
                },
                blockArray: [
                    {
                        tag: {
                            text: "Letter #1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Merriwig,\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; You [<i>must] try the new tire swing! It\'s the best thing in the whole playground, and possibly the best thing that has ever existed. When it really gets going, you spin so fast that you forget everything: your worries, your problems, even your own name. I find this very useful. I really think it will change your life. Just try it, please!\
                                    <br>\
                                    <br>\
                                    Love,\
                                    <br>\
                                    Pickle"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-10%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Letter #2",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Merriwig,\
                                    <br>\
                                    <br>\
                                    &nbsp; &nbsp; Let\'s talk corn dogs. Want to know why they\'re my favorite food? It\'s mostly because they have a stick! They\'re usually pretty easy to carry, which matters when you\'re always moving around. Plus, the outside is crunchy, which is good, and the inside is soft, which is also good. \
                                    <br>\
                                    <br>\
                                    Love,\
                                    <br>\
                                    Pickle"
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
                            width: "percent40",
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
                        title: "[<g>1.] True or false: both letters are addressed to the same person, but are written by different authors.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tru{e}",
                            "{F}alse",
                        ],
                    },
                    {
                        title: "[<g>2.] Which letter\'s main purpose is to entertain?",
                        correctIndex: 2,
                        paragraph: [
                            "Let{t}er #1",
                            "L{e}tter #2",
                            "Neither letter\'s main purpose is to entert{a}in",
                        ],
                    },
                    {
                        title: "[<g>3.] The author\'s purpose of \"Letter #1\" is to:",
                        correctIndex: 0,
                        paragraph: [
                            "Per{s}uade Merriwig to try the tire swing",
                            "Persua{d}e Pickle to try the tire swing",
                            "Explain how hard a tire swing is to {u}se",
                        ],
                    },
                    {
                        title: "[<g>4.] What is Pickle\'s intent with \"Letter #2\"?",
                        correctIndex: 2,
                        paragraph: [
                            "To persuade Merriwig to tr{y} a corn dog",
                            "To descri{b}e the best way to carry corn dogs",
                            "To explain why corn dogs are his favori{t}e food",
                        ],
                    },
                ],  
                code: {
                    answer: "FAST",
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