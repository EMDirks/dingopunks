const resource =  {
    
    info: {
        title: "Funhouse Fright",
        path: "funhouse-fright",
        logo: "resource/funhouse-fright/assets/branding/reading/all/preview-4th-grade.png",
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
                        "RF.4.4",
                        "RF.4.4a",
                        "RI.4.1",
                        "RI.4.2",
                        "RI.4.10",
                    ],
                }
            },

            intro: {
                character: "Miss Tally",
                asset: "miss-tally.png",
                dialogue : {
                    incomplete: "Oh, hey. You need to read something before entering the funhouse. It\'s a warning about like... vampires and puppets or something. I dunno. I just hand it out.",
                    complete: "Cool, you read it. Good for you. Now let me get back to doing nothing."
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
                                    text: 'An Important Warning<br>',
                                },
                                passage: {
                                    text:   "Happy Halloween! We must inform you: Frederick\'s Funhouse is [<i>extremely] dangerous. Guests may face serious risks while exploring the many rooms inside.\
                                    <br>\
                                    The Boiler Room sprays boiling steam. The Terror Tunnel drops straight into darkness. The Hall of Mirrors is home to an evil vampire. A dangerous puppet lives beneath the Ringmaster\'s Stage. Even the ticket booth has its terrible secrets...\
                                    <br>\
                                    We truly hope you enjoy your visit. Make sure to try some of our famous homemade candy corn!"
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
                        title: "[<g>1.] What is the main idea of this passage?",
                        correctIndex: 0,
                        paragraph: [
                            "Frederi{c}k\'s Funhouse is dangerous",
                            "A vam{p}ire lives in the Hall of Mirrors",
                            "Frederick\'s Funhou{s}e serves candy corn",
                        ],
                    },
                    {
                        title: "[<g>2.] Which sentence is a supporting detail?",
                        correctIndex: 1,
                        paragraph: [
                            "\"Happy Hallowe{e}n!\"",
                            "\"The B{o}iler Room sprays boiling steam.\"",
                            "\"We {h}ope you enjoy your visit.\"",
                        ],
                    },
                    {
                        title: "[<g>3.] Is the sentence \"The Hall of Mirrors is home to an evil vampire\" also a key detail?",
                        correctIndex: 0,
                        columns: 2,
                        paragraph: [
                            "Ye{s}",
                            "{N}o",
                        ],
                    },
                    {
                        title: "[<g>4.] The ____ does not support the central idea at all.",
                        correctIndex: 2,
                        paragraph: [
                            "First paragrap{h}",
                            "Seco{n}d paragraph",
                            "{T}hird paragraph",
                        ],
                    },
                ],  
                code: {
                    answer: "COST",
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
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.5",
                        "L.4.5a",
                        "L.4.5b",
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.5",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Ringmaster Pippo",
                asset: "pippo-fizzlepop.png",
                dialogue : {
                    incomplete: "I got asked to write a play for the funhouse, and I\'m really excited. But I have no idea if it\'s good or not! Can you read my boss\'s instructions, then read my play? Tell me if it makes sense!",
                    complete: "Yay! If this play goes well, I\'ll finally earn enough cash to finish my \"secret project.\""
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
                                    This is your boss, Frederick. I command you to write a play BURSTING with feeling; a volcano of emotions! I need drama. I need terror. I need friendship. Make our guests weep, cheer, and maybe faint.\
                                    <br>\
                                    <br>\
                                    And if you can write about jellybeans, that would be the icing on the cake. I love jellybeans.\
                                    <br>\
                                    <br>\
                                    Best of luck,\
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
                                    text:   "[<i>Scene: Count Visage stands in the Hall of Mirrors. Boiler Belle marches in, furious.]\
                                    <br>\
                                    <br>\
                                    BOILER BELLE: Hey! You ate the last grape jellybean! That was mine!\
                                    <br>\
                                    <br>\
                                    COUNT VISAGE: You left it sitting on the counter, so I figured it was fair game.\
                                    <br>\
                                    <br>\
                                    BOILER BELLE: You\'re as sneaky as a fox.\
                                    <br>\
                                    <br>\
                                    COUNT VISAGE: And you\'re like a grumpy old man.\
                                    <br>\
                                    <br>\
                                    [<i>There\'s a long pause. Count Visage pulls a single jellybean from his sleeve.]\
                                    <br>\
                                    <br>\
                                    BOILER BELLE: Is that... grape?\
                                    <br>\
                                    <br>\
                                    COUNT VISAGE: Maybe. Shall we call it a truce?"
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
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
                        'A. In his letter to Pippo, Frederick uses a metaphor to compare a play to a ____ of emotions.',
                        'B. Boiler Belle insults Count Visage by comparing him to a \"sneaky fox.\" Is this a [<u>simile] or a [<u>metaphor]?',
                        'C. [<u>Right] or [<u>wrong]: Count Visage responds to this insult with a metaphor.',     
                        'D. Is \"icing on the cake\" an [<u>idiom] or a [<u>stanza]?',                    
                    ],
                    puzzle: [
                        ["(B)S","(D)I","1M","I","L","E","0"],
                        ["0","D","0","0","0","0","(C)W"],
                        ["0","3I","0","0","0","0","R"],
                        ["(A)V","O","L","C","2A","N","O"],
                        ["0","M","0","0","0","0","4N"],
                        ["0","0","0","0","0","0","G"],
                    ]
                },  
                code: {
                    answer: "MAIN",
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
                        "CCRA.R.1",
                        "CCRA.R.4",
                        "CCRA.R.7",
                        "CCRA.R.10",
                        "L.4.3",
                        "L.4.3a",
                        "L.4.4",
                        "L.4.4a",
                        "L.4.4b",
                        "L.4.5c",
                        "L.4.6",
                        "RF.4.3",
                        "RF.4.3a",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4c",
                        "RI.4.1",
                        "RI.4.4",
                        "RI.4.10",
                    ],
                }
            },

            intro: {
                character: "Plucky the Clown",
                asset: "plucky-the-clown.png",
                dialogue : {
                    incomplete: "Ugh... I don\'t feel so good. I wrote a few notes about quitting this awful job, but I don\'t know if the words are too complicated. Can you take a look? My head is spinning...",
                    complete: "Oh my... thanks a ton! Maybe now I can get back to the stage. I just need a minute."
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
                                    text: "This new job makes me quite [<u>uncomfortable]. The tunnel is loud, it spins WAY too fast, and nothing about it feels right. I miss being on stage with my rubber chickens.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-13%",
                                translateY: "0%",
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
                                    text: "I would like to quit my job in this dreadful tunnel. It really is terrible. It gives me [<u>vertigo], which means I feel dizzy, like the room is spinning even when I\'m standing still. I\'m normally a lively guy, but I can\'t be full of life and energy when I\'m feeling sick.",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-3%",
                                translateY: "10%",
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
                                    text: "I\'ve been really depressed and [<u>dejected] lately. I try to smile, but working in the Terror Tunnel makes me feel awful. I just want to go back to feeling good again...",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "25%",
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
                        title: "[<g>1.] What does \"uncomfortable\" mean?",
                        correctIndex: 1,
                        paragraph: [
                            "Ver{y} comfortable",
                            "Not comfo{r}table",
                            "None of the abo{v}e",
                        ],
                    },
                    {
                        title: "[<g>2.] Someone with \"vertigo\" feels:",
                        correctIndex: 1,
                        paragraph: [
                            "Bor{e}d",
                            "D{i}zzy",
                            "{H}appy",
                        ],
                    },
                    {
                        title: "[<g>3.] One synonym of \"dejected\" is:",
                        correctIndex: 0,
                        paragraph: [
                            "Depresse{d}",
                            "Angr{y}",
                            "Bo{r}ed",
                        ],
                    },
                    {
                        title: "[<g>4.] \"Full of life and energy\" is the definition of ____ .",
                        correctIndex: 2,
                        paragraph: [
                            "Drea{d}ful",
                            "{V}ertigo",
                            "Liv{e}ly",
                        ],
                    },
                ],  
                code: {
                    answer: "RIDE",
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
                        "CCRA.R.1",
                        "CCRA.R.2",
                        "CCRA.R.5",
                        "CCRA.R.6",
                        "CCRA.R.7",
                        "CCRA.R.8",
                        "CCRA.R.10",
                        "RF.4.4",
                        "RF.4.4a",
                        "RF.4.4b",
                        "RL.4.1",
                        "RL.4.3",
                        "RL.4.5",
                        "RL.4.10"
                    ],
                }
            },

            intro: {
                character: "Count Visage",
                asset: "count-visage.png",
                dialogue : {
                    incomplete: "Ah, must you judge me so quickly? I wear a cape and walk by moonlight, but that does not make me wicked! I have penned a poem to prove my honor \u2014 would thou give it a read?",
                    complete: "I offer you my kindest thanks. May your taste be forever excellent!"
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
                                    text: 'I\'m Not Evil',
                                },
                                subtitle: {
                                    text: 'By Count Visage',
                                },
                                passage: {
                                    text:   "I love gold rings and velvet capes,\
                                    <br>\
                                    dark red drapes and spooky shapes.\
                                    <br>\
                                    People gasp when I appear,\
                                    <br>\
                                    but I just like things grand, my dear.\
                                    <br>\
                                    <br>\
                                    I sip grape juice from a crystal cup,\
                                    <br>\
                                    with candles glowing, all lit up.\
                                    <br>\
                                    I\'m not evil, not one bit.\
                                    <br>\
                                    I\'m just fancy. I can\'t help it."
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
                        title: "[<g>1.] Does line [<u>four] or [<u>five] have fewer syllables?",
                        word: "FOU[R]",
                    },
                    {
                        title: "[<g>2.] [<u>Right] or [<u>wrong]: this poem has three stanzas.",
                        word: "WR[O]NG",
                    },
                    {
                        title: "[<g>3.] The rhyme scheme of \"I\'m Not Evil\" is:",
                        word: "AAB[B]",
                    },
                    {
                        title: "[<g>4.] The poet\'s purpose is to show he\'s fancy, not ___ .",
                        word: "[E]VIL",
                    },
                ],
                code: {
                    answer: "ROBE",
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
                        "RF.4.4",
                        "RF.4.4a",
                        "RL.4.1",
                        "RL.4.2",
                        "RL.4.3",,
                        "RL.4.10",
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
                                    text:   "Boiler Belle showed up for her first night at Frederick\'s Funhouse with a shiny wrench and a big smile. She was ready to work, but her boss, Frederick, didn\'t seem impressed. \"Just stay out of the way,\" he said.\
                                    <br>\
                                    Not even an hour later, alarms started blaring. Sticky steam filled the funhouse halls. Lights flickered, mirrors fogged up, and guests slipped and screamed. Frederick ran into the boiler room, flapping his arms. \"King Pumpkin is coming for an inspection!\" he shouted. \"If he sees this mess, it\'s over!\"\
                                    <br>\
                                    Frederick paced in circles. \"You know what? I bet it\'s that creepy clown\'s fault. What\'s his name \u2014 Clucky? Plucky? Yeah. Always whining about his job...\"\
                                    <br>\
                                    Meanwhile, Belle spotted the problem: a red-hot pipe leaking steam and purple goo. Without asking, she grabbed her wrench, twisted the pipe hard, and POP! With a final hiss, the steam stopped. The lights came back on. The goo dried up.\
                                    <br>\
                                    King Pumpkin arrived moments later. He looked around, nodded, and exclaimed, \"It\'s all so delightfully strange, and it runs so perfectly!\"\
                                    <br>\
                                    Belle just smiled and kept on working."
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
                        correctIndex: 0,
                        paragraph: [
                            "Frederick\'s Fun{h}ouse at night",
                            "Frederick\'s Funhouse during the da{y}",
                            "King P{u}mpkin\'s castle",
                        ],
                    },
                    {
                        title: "[<g>2.] Which character traits best describe Belle?",
                        correctIndex: 1,
                        paragraph: [
                            "B{o}ssy, rude, and sneaky",
                            "Hardworking, brave, and conf{i}dent",
                            "Lazy, ner{v}ous, and silly",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the theme of this story?",
                        correctIndex: 2,
                        paragraph: [
                            "King Pumpkin visited the fun{h}ouse",
                            "Boiler {B}elle is the employee of the month",
                            "Don\'t judge someone ju{s}t because they\'re new",
                        ],
                    },
                    {
                        title: "[<g>4.] Frederick was judging Belle when he said:",
                        correctIndex: 0,
                        paragraph: [
                            "\"Just {s}tay out of the way\"",
                            "\"King Pum{p}kin is coming for an inspection\"",
                            "\"I bet it\'s that creepy clo{w}n\'s fault\"",
                        ],
                    },
                ],  
                code: {
                    answer: "HISS",
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