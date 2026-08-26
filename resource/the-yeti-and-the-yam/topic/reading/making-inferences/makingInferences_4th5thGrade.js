const resource = {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/reading/making-inferences/thumbnail-4th-5th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    challengeArray: [

        // ⭐ tater durant's cell
        {

            info: {
                type: 'challenge',
                title: "Tater Durant's Cell",
                asset: "tater-drift.png",
                state: "incomplete",
                hint: {
                    text: "Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Fictional Story",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
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
                        "RL.5.3",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "Tater Durant",
                asset: "tater-drift.png",
                dialogue : {
                    incomplete: "I came out here chasing an old urban legend, but it led me straight into the yeti\'s lair! Maybe I got it all wrong. Mind reading the legend for me? I\'ll give you a sweet potato for your trouble.",
                    complete: "Right on, buddy \u2014 I guess it\'s just an urban legend after all. Enjoy the potato!"
                },
            },

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
                                    text: "A Strange Light",
                                },
                                passage: {
                                    text: "On Frostbite Island, legends speak of a strange light that only appears during snowstorms. Its golden glow drifts through the island\'s thick forest, flickering dimly in the night. Locals call it the [<i>Lantern of Frostbite Island], but no one knows who carries it... or if anyone does at all.\
                                    <br>\
                                    They say if you follow this mysterious lantern, it will lead you to what your heart wants the most. Some people claim they\'ve found a long-lost pet. Others claim they\'ve found chests full of gold and gems. A few swear they saw something too sublime to explain \u2014  something so awesome and grand, there are no words to describe it.\
                                    <br>\
                                    Of course, nobody can prove the lantern is real. But every winter, when the snow starts to fall, someone looks out their window and thinks they see a little light dancing in the woods."
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
                        title: "[<g>1.] What kind of plants grow on Frostbite Island?",
                        correctIndex: 2,
                        paragraph: [
                            "Flo{w}ers",
                            "Ca{c}ti",
                            "Tree{s}",
                        ],
                    },
                    {
                        title: "[<g>2.] We can infer that \"sublime\" means ___ .",
                        correctIndex: 1,
                        paragraph: [
                            "Gold and ge{m}s",
                            "Awes{o}me and grand",
                            "A type of {u}rban legend",
                        ],
                    },
                    {
                        title: "[<g>3.] True or false: \"a little light dancing in the woods\" refers to the Lantern of Frostbite Island.",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "{F}alse",
                        ],
                    },
                    {
                        title: "[<g>4.] This passage suggests that the lantern is ___ .",
                        correctIndex: 0,
                        paragraph: [
                            "Magical and ghost{l}y",
                            "A remote-controlled to{y}",
                            "Act{u}ally just a squirrel",
                        ],
                    },
                ],  
                code: {
                    answer: "SOUL",
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
                    text: "Read the passage, then answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About a Nonfiction Text",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.7",
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
                character: "Dr. Seraphina",
                asset: "dr-seraphina.png",
                dialogue : {
                    incomplete: "I came out here looking for a rare sugar beet, and guess what? I found it! I also found a yeti... Anyway, will you check my notes to see if they make sense? I\'ll share some sugar for your help.",
                    complete: "Splendid! I\'m glad it all checks out. Here, take a pinch of sugar. It\'s scientifically perfect."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "dr-seraphina.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                title: {
                                    text: 'Turning Beets Into Sugar',
                                },
                                subtitle: {
                                    text: "By Dr. Seraphina",
                                },
                                passage: {
                                    text:   "First, find yourself a few good beets: the big, pale ones that grow even in the frost. Scrub them with a brush to clean off all the dirt.\
                                    <br>\
                                    <br>\
                                    Next, chop those beets up and boil them in water. The heat pulls out the sweet juice hiding inside.\
                                    <br>\
                                    <br>\
                                    Then, strain the juice through a piece of cloth. Boil it again until it turns into a thick syrup. When it cools off, little crystals will start to form.\
                                    <br>\
                                    <br>\
                                    Finally, make sure to taste the sugar you just created. If it has an earthy flavor, you probably didn\'t scrub the beets hard enough. In that case, your mission isn\'t over, but you\'ll need to start again from the beginning. Science is all about being patient."
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
                            material: 'metal',
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
                            subtitle: {
                                font: 'default',
                                size: 'mediumSmall',
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
                        'A. Is Dr. Seraphina trying to [<u>teach] or [<u>scold] the reader?',
                        'B. [<u>Yes] or [<u>no]: the \"little crystals\" are actually sugar.',
                        'C. If the sugar tastes earthy, is that flavor likely caused by [<u>snow] or [<u>dirt]?',     
                        'D. Which word from paragraph four shows us that this is the [<i>last] step of the instructions: [<u>finally], [<u>mission], or [<u>patient]?',                    
                    ],
                    puzzle: [
                        ["0","0","0","(A)T","0","0","0"],
                        ["0","(C)2D","0","E","0","0","0"],
                        ["(D)F","1I","N","4A","L","L","(B)Y"],
                        ["0","R","0","C","0","0","3E"],
                        ["0","T","0","H","0","0","S"],
                        ["0","0","0","0","0","0","0"],       
                    ]
                },  
                code: {
                    answer: "IDEA",
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
                    text: "Read both passages, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Making Inferences About Related Texts",
                    commonCore: [
                        "CCRA.R.1",
                        "CCRA.R.3",
                        "CCRA.R.4",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.9",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.3",
                        "RI.4.5",
                        "RI.4.6",
                        "RI.4.8",
                        "RI.4.9",
                        "RI.4.10",
                        "RF.5.4",
                        "RF.5.4a",
                        "RI.5.5",
                        "RI.5.6",
                        "RI.5.7",
                        "RI.5.8",
                        "RI.5.9",
                        "RI.5.10",
                    ],
                }
            },

            intro: {
                character: "Pippo Fizzlepop",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "Oops... I ignored my cousin\'s warning, and crashed my plane on this island! Now a yeti\'s got me, and I can\'t tell if it\'s friendly or hungry. Tell ya what \u2014 help me out, and I\'ll cook those yams.",
                    complete: "Thanks for the help! I\'ll fire up the jet engine and get those yams nice and toasty!"
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
                                title: {
                                    text: 'Journal Entry #1',
                                },
                                subtitle: {
                                    text: 'By Pippo Fizzlepop',
                                },
                                passage: {
                                    text:   "<br>Well, I flew straight into a snowstorm and crashed my plane on Frostbite Island. Oops! Seems like I\'m not alone; there\'s a yeti down here too.\
                                    <br>\
                                    <br>\
                                    The yeti isn\'t so bad once you get to know her. Yesterday, she cracked salt and pepper over my head, which I took as a friendly greeting. Then she roared. Loud. Probably just to cheer me up, right?\
                                    <br>\
                                    <br>\
                                    Anyway, I\'ve been trying to fix up my plane. I\'m sure I\'ll be flying again by Tuesday. Or maybe Thursday."
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "15%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "Dear Pippo,\
                                    <br>\
                                    <br>\
                                    Whatever you do, please DO NOT fly over Frostbite Island. The only thing that lives down there is a terrible yeti, and it isn\'t your friend. Some people say it roars when it\'s hungry. That makes sense, because the last person who heard it never came home.\
                                    <br>\
                                    <br>\
                                    Please, please, PLEASE listen to my words. I beg you.\
                                    <br>\
                                    <br>\
                                    Yours truly,\
                                    <br>\
                                    Amelia Fizzlepop"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-15%",
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
                                align: 'left'
                            },
                            subtitle: {
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
                        title: "[<g>1.] True or false: Pippo and Amelia are probably writing about different yetis.",
                        correctIndex: 1,
                        columns: 2,
                        paragraph: [
                            "Tr{u}e",
                            "{F}alse",
                        ],
                    },
                    {
                        title: "[<g>2.] Which line suggests the yeti wants to eat Pippo?",
                        correctIndex: 2,
                        paragraph: [
                            "\"...she cracked salt and pepper over my hea{d}...\"",
                            "\"Then s{h}e roared.\"",
                            "Both of the abov{e}",
                        ],
                    },
                    {
                        title: "[<g>3.] Which text has a serious, desperate tone?",
                        correctIndex: 1,
                        paragraph: [
                            "Pipp{o} Fizzlepop\'s journal entry",
                            "Ameli{a} Fizzlepop\'s letter",
                            "Neither text has a serious, {d}esperate tone",
                        ],
                    },
                    {
                        title: "[<g>4.] How can we infer that both authors are related?",
                        correctIndex: 2,
                        paragraph: [
                            "They both know how to writ{e} in English",
                            "They both {w}rote about a yeti",
                            "They both sha{r}e the same last name",
                        ],
                    },
                ],  
                code: {
                    answer: "FEAR",
                    userArray: ["","","",""]
                },
            },

        },

        // ⭐ the knight's cell
        {

            info: {
                type: 'challenge',
                title: "The Knight's Cell",
                asset: "the-frozen-knight.png",
                state: "incomplete",
                hint: {
                    text: "Read the riddles, then type in the answers to the questions below. Use the cryptogram if you get stuck. The yellow letters, in order, spell out the secret four-letter code word.",
                    isUsed: false
                },
                education: {
                    topic: "Solving Riddles",
                    commonCore: [
                        "CCRA.L.5",
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "L.4.4a",
                        "L.4.5",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.10",
                        "L.5.4a",
                        "L.5.5",
                        "RF.5.4",
                        "RF.5.4a",
                        "RF.5.4b",
                        "RL.5.10",
                    ],
                }
            },

            intro: {
                character: "The Frozen Knight",
                asset: "the-frozen-knight.png",
                dialogue : {
                    incomplete: "I came here to capture the yeti, but my quest failed. Thankfully, I brought along a few riddles to lift my spirits. Will you read them to me? I shall share my marshmallow rations in return.",
                    complete: "Thank you. Those words warm my heart. And now, may these marshmallows warm yours."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "the-frozen-knight.png",
                },
                blockArray: [   
                    {
                        tag: {
                            text: "Riddle #1",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I shine with marks of every fight.\
                                    <br>\
                                    I\'m in the hand of every knight.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "-2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Riddle #2",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I hold the day but chase the night.\
                                    <br>\
                                    I warm the cold.\
                                    <br>\
                                    I bring the light.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Riddle #3",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I show the truth, shiny and clear.\
                                    <br>\
                                    I hold your face when no one\'s near.\
                                    <br>\
                                    Be brave enough to look, my dear.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Riddle #4",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "I wear my armor, green and brown.\
                                    <br>\
                                    I guard the woods outside the town.\
                                    <br>\
                                    The storm may roar, my arms may bend \u2014\
                                    <br>\
                                    but I stay strong until the end.\
                                    <br>\
                                    What am I?"
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "1deg",
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
                            width: "auto",
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
                                align: 'center'
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
                        title: "[<g>1.] The answer to \"Riddle #1\" is a ____ .",
                        word: "SHIE[L]D",
                    },
                    {
                        title: "[<g>2.] The answer to \"Riddle #2\" is the ____ .",
                        word: "S[U]N",
                    },
                    {
                        title: "[<g>3.] The answer to \"Riddle #3\" is a ____ .",
                        word: "MIRRO[R]",
                    },
                    {
                        title: "[<g>4.] The answer to \"Riddle #4\" is a ____ .",
                        word: "TRE[E]",
                    },
                ],
                code: {
                    answer: "LURE",
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