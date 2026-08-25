const resource = {

    info: {
        title: "Pickle's Playground",
        path: "pickles-playground",
        logo: "resource/pickles-playground/assets/branding/reading/grammar/thumbnail-4th-5th-grade.png",
        timerLabel: "PICKLE ARRIVES"
    },

    challengeArray: [

            // ⭐ swing set
            {

                info: {
                    type: 'challenge',
                    title: 'Swing Set',
                    asset: "merriwig.png",
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
                            "RI.4.10",
                            "L.5.1",
                            "L.5.1c",
                            "L.5.2",
                            "L.5.3",
                            "RF.5.4",
                            "RF.5.4a",
                            "RI.5.10",
                        ],
                    }
                },

                intro: {
                    character: "Merriwig Fenn",
                    asset: "merriwig.png",
                    dialogue : {
                        incomplete: "Pickle keeps leaving me these silly little notes, and I don\'t have time to read them. I\'m busy swinging and dreaming! Will you take a look and tell me if there\'s anything important in there?",
                        complete: "Oh, centipedes are so lovely! I didn\'t know Pickle liked them too. Maybe he\'s not so bad after all..."
                    },
                },

                activity: {
                    info: {
                        type: "dynamic",
                        asset: "merriwig.png",
                    },
                    blockArray: [
                        {
                            contentArray: [
                                {
                                    title: {
                                        text: 'My Favorite Bug',
                                    },
                                    subtitle: {
                                        text: "By Pickle",
                                    },
                                    passage: {
                                        text:   "I just LOVE centipedes, especially the [<blu>gray long] ones. Man, they\'re just so cool. In fact, if I were a bug, I\'d totally be a centipede. I [<u>look] for some of them last week, but they\'re not very common here on the playground."
                                        }
                                }
                            ],
                            style: {
                                transform: {
                                    translateX: "-5%",
                                    translateY: "7%",
                                    rotate: "2deg",
                                }
                            }
                        },
                        {
                            contentArray: [
                                {
                                    title: {
                                        text: 'My Least Favorite Food',
                                    },
                                    subtitle: {
                                        text: "By Pickle",
                                    },
                                    passage: {
                                        text:   "My least favorite food is definitely cheese. The stink! The squish! The way it stretches when you least expect it! I [<u>may/can] scream just thinking about it. I also just don\'t trust any food that\'s yellow in color. Yes, that includes bananas... but mostly cheese. I mean, [<sal>whom] really like that stuff?"
                                        }
                                }
                            ],
                            style: {
                                transform: {
                                    translateX: "10%",
                                    translateY: "-1%",
                                    rotate: "-4deg",
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
                        type: "crossword"
                    },
                    contentArray: {
                        title: "Answer the questions to fill in the crossword.",
                        paragraph: [
                            'A. [<u>Right] or [<u>wrong]: in \"My Favorite Bug,\" the underlined word has the correct verb tense.',
                            'B. According to the rules of adjective word order, which blue word should come first: [<u>gray] or [<u>long]?',
                            'C. The red word in \"My Least Favorite Food\" is incorrect. What should it be changed to?',     
                            'D. In \"My Least Favorite Food,\" which underlined word should be used to show that screaming is a [<i>possibility]?',                    
                        ],
                        puzzle: [
                            ["0","0","0","0","(B)L","0","0"],
                            ["0","0","(C)1W","0","2O","0","0"],
                            ["0","0","H","0","N","0","0"],
                            ["(A)W","3R","O","N","G","0","(D)4M"],
                            ["0","0","0","0","0","0","A"],
                            ["0","0","0","0","0","0","Y"],
                        ]
                    },  
                    code: {
                        answer: "WORM",
                        userArray: ["","","",""]
                    },
                }             

            },

            // ⭐ monkey bars 
            {

                info: {
                    type: 'challenge',
                    title: "Monkey Bars",
                    asset: "banana-gunk-jr.png",
                    state: "incomplete",
                    hint: {
                        text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
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
                    character: "Banana Gunk Jr.",
                    asset: "banana-gunk-jr.png",
                    dialogue : {
                        incomplete: "Uh, hey there. Pickle wrote me a letter, but my eye sensors are too rusty to read it. It\'s tough to stay in good working order out here! Can you read it for me before I start sparking again?",
                        complete: "Wow, thanks! Guess that explains all the cheese stuck in my gears."
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
                                    passage: {
                                        text:   "Dear Banana Gunk Jr.,\
                                                <br>\
                                                <br>\
                                                &nbsp &nbsp I remember the night you arrived. You were the star animatronic of paula\'s pizza place, singing and dancing while the kids laughed and the cheese grew cold. It seemed like you would shine forever.\
                                                <br>\
                                                &nbsp &nbsp But one night, the manager said, The kids don\'t laugh anymore. He\'s just… weird now. Let\'s get rid of him. And so they threw you into the dumpster.\
                                                <br>\
                                                &nbsp &nbsp A storm began soon after. [<sal>Lightning flashed as the clouds split open with thunder and wind tore through the streets like it was searching for something.] When everything grew quiet again, the dumpster was gone. And you were here \u2014 rusty, creaky, but still trying so hard to smile.\
                                                <br>\
                                                &nbsp &nbsp Many lost things find their way to my playground. You belong here now, and I will be your friend forever\
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
                                    translateY: "4%",
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
                            title: "[<g>1.] True or false: \"paula\'s pizza place\" is correctly capitalized.",
                            correctIndex: 1,
                            columns: 2,
                            paragraph: [
                                "{T}rue",
                                "Fal{s}e",
                            ],
                        },
                        {
                            title: "[<g>2.] Which paragraph contains dialogue that\'s missing quotation marks?",
                            correctIndex: 1,
                            columns: 2,
                            paragraph: [
                                "Paragr{a}ph One",
                                "Paragraph {T}wo",
                                "Para{g}raph Three",
                                "Paragraph Fo{u}r",
                            ],
                        },
                        {
                            title: "[<g>3.] Where should you place a comma in the red text?",
                            correctIndex: 2,
                            paragraph: [
                                "Bet{w}een \"open\" and \"with\"",
                                "Between \"searc{h}ing\" and \"for\"",
                                "Betwe{e}n \"thunder\" and \"and\"",
                            ],
                        },
                        {
                            title: "[<g>4.] Read the last sentence of the fourth paragraph. Which end punctuation best fits its calm tone?",
                            correctIndex: 0,
                            columns: 2,
                            paragraph: [
                                "{P}eriod",
                                "Comm{a}",
                                "Ex{c}lamation point",
                                "Question ma{r}k",
                            ],
                        },
                    ],  
                    code: {
                        answer: "STEP",
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
                        text: "Sort each note into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, spell out the secret four-letter code word.",
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
                    character: "King Kevin",
                    asset: "king-kevin.png",
                    dialogue : {
                        incomplete: "Pickle sends me such dreadful notes. Most aren\'t even proper sentences! Obviously, a king cannot be seen reading such nonsense. You there, sort each one as either correct or incorrect. Honk!",
                        complete: "At last, proper grammar fit for a king! Your job is done, and I command you to leave. Honk!"
                    },
                },

                activity: {
                    info: {
                        type: "dynamic",
                        functionality: "drag-and-drop",
                        columnArray: [
                            "Notes With a<br>Correct Sentence Structure",
                            "Notes With an<br>Incorrect Sentence Structure",
                        ],
                        asset: {
                            scope: "global",
                            path: "2-column-stone.png"
                        }
                    },   
                    blockArray: [
                        {
                            tag: {
                                text: "Note A",
                            },
                            contentArray: [
                                {
                                    passage: {
                                        text: "If I bring snacks. Can I sit on your throne?",
                                    }, 
                                }
                            ],
                            correctIndex: 1
                        },
                        {
                            tag: {
                                text: "Note B",
                            },
                            contentArray: [
                                {
                                    passage: {
                                        text: "Can I come over? I used my last jar of peanut butter to paint a picture of you.",
                                    }, 
                                }
                            ],
                            correctIndex: 0
                        },
                        {
                            tag: {
                                text: "Note C",
                            },
                            contentArray: [
                                {
                                    passage: {
                                        text: "I found a cool spoon I think you would really like it I\'ll give it to you if you invite me over.",
                                    }, 
                                }
                            ],
                            correctIndex: 1
                        },
                        {
                            tag: {
                                text: "Note D",
                            },
                            contentArray: [
                                {
                                    passage: {
                                        text: "Please let me visit your palace. Even if I have to sit by the brooms.",
                                    }, 
                                }
                            ],
                            correctIndex: 1
                        },
                        {
                            tag: {
                                text: "Note E",
                            },
                            contentArray: [
                                {
                                    passage: {
                                        text: "Please invite me over! I promise not to sing this time.",
                                    }, 
                                }
                            ],
                            correctIndex: 0
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
                            title: "[<g>1.] Make \"Note A\" grammatically correct.",
                            correctIndex: 0,
                            paragraph: [
                                "“If I bring snacks, can I sit on your t{h}rone?”",
                                "“If I br{i}ng snacks, can I sit? On your throne.”",
                                "“If I bring snacks, can I sit on {y}our, throne?”",
                            ],
                        },
                        {
                            title: "[<g>2.] What is wrong with \"Note D\"?",
                            correctIndex: 1,
                            paragraph: [
                                "It contains a run-on s{e}ntence",
                                "It c{o}ntains a sentence fragment",
                                "Nothing is wron{g} with “Note D”",
                            ],
                        },
                        {
                            title: "[<g>3.] In \"Note C,\" how many periods are needed to fix the run-on sentence?",
                            correctIndex: 1,
                            columns: 2,
                            paragraph: [
                                "O{n}e period",
                                "Two {p}eriods",
                            ],
                        },
                        {
                            title: "[<g>4.] How many notes contain at least one error?",
                            correctIndex: 2,
                            paragraph: [
                                "{O}ne note",
                                "Two no{t}es",
                                "Three not{e}s",
                            ],
                        },
                    ],  
                    code: {
                        answer: "HOPE",
                        userArray: ["","","",""]
                    },
                },
                

            },

            // ⭐ tunnel slide
            {

                info: {
                    type: 'challenge',
                    title: 'Tunnel Slide',
                    asset: "twisted-tori.png",
                    state: "incomplete",
                    hint: {
                        text: "Read each note, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
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
                    character: "Twisted Tori",
                    asset: "twisted-tori.png",
                    dialogue : {
                        incomplete: "Pickle slipped me some notes and a page full of weird symbols! What a fun lil\' guy. I can\'t make heads or tails of anything, but it looks interesting. Think you can help me crack this code?",
                        complete: "Well, look at you — codebreaker of the century! I\'d high-five you, but, you know... ghost hands."
                    },
                },

                activity: {
                    info: {
                        type: "dynamic",
                        asset: "twisted-tori.png",
                    },
                    blockArray: [   
                        {
                            tag: {
                                text: "Puddle",
                            },
                            contentArray: [
                                {
                                    passage: {
                                        text: "There are [<u>too] types of puddles: puddles for drinking, and puddles for splashing. A good friend always knows his puddles."
                                    },
                                },
                            ],
                            style: {
                                transform: {
                                    translateX: "-6%",
                                    translateY: "0%",
                                    rotate: "2deg",
                                }
                            }
                        },
                        {
                            tag: {
                                text: "Snakes",
                            },
                            contentArray: [
                                {
                                    passage: {
                                        text: "Why am I a good friend? I\'m really good at scaring away snakes. I will [<u>scared] away any snake that threatens you!"
                                    },
                                },
                            ],
                            style: {
                                transform: {
                                    translateX: "-2%",
                                    translateY: "3%",
                                    rotate: "4deg",
                                }
                            }
                        },
                        {
                            tag: {
                                text: "Smells",
                            },
                            contentArray: [
                                {
                                    passage: {
                                        text: "Good friends always have a good sense of smell. I can detect the [<u>sent] of a corn dog from four miles away."
                                    },
                                },
                            ],
                            style: {
                                transform: {
                                    translateX: "-3%",
                                    translateY: "0%",
                                    rotate: "1deg",
                                }
                            }
                        },
                        {
                            tag: {
                                text: "Cheese",
                            },
                            contentArray: [
                                {
                                    passage: {
                                        text: "I\'ll tell you exactly why I\'m a good friend. I hate the taste of cheese, [<blu>which] means more cheese for you!"
                                    },
                                },
                            ],
                            style: {
                                transform: {
                                    translateX: "1%",
                                    translateY: "2%",
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
                                    translateX: "0%",
                                    translateY: "5%",
                                    rotate: "-1deg",
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
                            title: "[<g>1.] The underlined word in \"Puddle\" should be:",
                            word: "T[W]O",
                        },
                        {
                            title: "[<g>2.] Which note has a verb in the wrong tense?",
                            word: "SN[A]KES",
                        },
                        {
                            title: "[<g>3.] Is the blue word in \"Cheese\" right or wrong?",
                            word: "R[I]GHT",
                        },
                        {
                            title: "[<g>4.] The underlined word in \"Smells\" should be:",
                            word: "SCEN[T]",
                        },
                    ],
                    code: {
                        answer: "WAIT",
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