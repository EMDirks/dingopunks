const resource =  {
    
    info: {
        title: "Escape the Midnight Mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/figurative-language/preview-4th-5th-grade.png",
        path: "escape-the-midnight-mall",
        timerLabel: "TIME TO MIDNIGHT",
        timeLimit: ['30 min', '40 min', '50 min', 'No limit'],
    },

    activityArray: [
        /* critterwerks */
        {
            title: "Critterwerks",
            characterName: "Terrible Topsy",
            topic: "Similes",
            assets: {
                nodeBackground: "critterwerks.png",
                characterShopkeeper: "topsy.png",
                activityBackground: "critterwerks.png"
            },
            code: "WIRE",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read each passage, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Hee hee! I'm Topsy! I sell robot pets, and all of them come with very important instructions. Would you read these for me and answer some questions? I really need help!",
                complete: "Hee hee! Did you know I was banished from my hometown? I'm not supposed to talk about it!"
            },
            content: {
                passage: {
                    style: {
                        material: "style-material--metal",
                        text: {
                            title: "style-text--metal-bold",
                            paragraph: "style-text--metal-normal",
                        }
                    },
                    item: [
                        {
                            image:      "1.png",
                            title:      "Owl-O-Matic",
                            paragraph:  "Congratulations on your new Owl-O-Matic! Just keep it away from all magnets, \n\
                                        as they cause it to spin uncontrollably, flipping around like a leaf in a tornado. Not good! \n\
                                        Even putting small magnets near your Owl-O-Matic is super dangerous. It's like playing with fire.",
                            transform: {
                                translateX: "-10%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "Squix-1000",
                            paragraph:  "Caring for your new Squix-1000 is not the same as looking after a real squid.\n\
                                        It\'s a piece of fine art that needs the perfect conditions to work.\n\
                                        For example, a normal fish tank simply will not do.\n\
                                        Your Squix-1000 needs a tank filled with oil to prevent its delicate gears from rusting.",
                            transform: {
                                translateX: "10%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Bananatron",
                            paragraph:  "You got your hands on a Bananatron? That's quite rare, like a needle in a haystack. \n\
                                        But be careful! Your new pet is quite clumsy, [like a puppy on a slippery floor].\n\
                                        The poor thing is constantly falling over, as unpredictable as a dice roll. \n\
                                        Oh, the troubles of owning a Bananatron!",
                            transform: {
                                translateX: "0%",
                                translateY: "-42%",
                                rotate: "-2deg",
                            }
                        },
                    ],  
                },
                multipleChoice: [
                    {
                        title: "{1.} How many similes are in the Owl-O-Matic?",
                        correctIndex: 1,
                        paragraph: [
                            "[O]ne",
                            "T[w]o",
                            "There are [n]o similes",
                        ],
                    },
                    {
                        title: "{2.} In the Squix-1000, which of these is a simile?",
                        correctIndex: 2,
                        paragraph: [
                            "\"It\'s a [p]iece of fine art\"",
                            "\"A normal fish tank simply will n[o]t do\"",
                            "Neither is a sim[i]le",
                        ]
                    },
                    {
                        title: "{3.} How many similes are in the Bananatron?",
                        correctIndex: 2,
                        paragraph: [
                            "O[n]e",
                            "Tw[o]",
                            "Th[r]ee",  
                        ]
                    },
                    {
                        title: "{4.} In the Bananatron, the underlined simile means:",
                        correctIndex: 2,
                        paragraph: [
                            "The Ban[a]natron is angry",
                            "The Bananatron is play[f]ul",
                            "Th[e] Banantron is clumsy",
                        ]
                    },
                ],
                
            }                     
        },
        /* the candy cave */
        {
            title: "The Candy Cave",
            characterName: "Martin Shortnose",
            topic: "Metaphors",
            assets: {
                nodeBackground: "the-candy-cave.png",
                characterShopkeeper: "noah-shortnose.png",
                activityBackground: "the-candy-cave.png",
            },
            code: "NOVA",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I\'m so annoyed... I need to sell more candy, but my shop is too small! You know, when I get frustrated, I like to write poetry. Can you read my latest poem and tell me if it makes sense?",
                complete: "I heard Zeeb whispering earlier \u2014 something about a secret entrance to the Undermurk deep in this very cave..."
            }, 
            content: {
                poem: {
                    style: {
                        material: "style-material--paper",
                        text: {
                            title: "style-text--handwritten",
                            author: "style-text--handwritten",
                            paragraph: "style-text--handwritten",
                        }
                    },
                    item: {
                        title:     "The Candymaker",
                        author:    "By Martin Shortnose",
                        paragraph: [
                            [
                                'In a store so small, like a cramped bird\'s nest,',
                                'the candymaker dreamed of a much bigger quest:',
                                'His taffy was a galaxy that spun in the night!',
                                'His gumdrops were stars; oh what a sight!',                     
                            ],
                            [
                                'But sadly, his shop is a poor place to sell \u2014',
                                'Where dreams are confined, like a small prison cell.',
                                'He needs more space, an ocean so wide,',
                                'to craft his sugary treats with pride.'
                            ]
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "5%",
                            rotate: "-2deg",
                        }
                    }
                },
                crossword: {
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. How many metaphors are in the first stanza?', //two
                        'B. Which line includes a metaphor: six or seven?', //seven           
                        'C. Does line 8 include a metaphor? yes / no', //no   
                        'D. The candymaker\'s gumdrops are compared to...', //stars
                        
                    ],
                    puzzle: [
                        ["0","(D)S","(A)T","4A","R","(B)S","0"],
                        ["0","0","W","0","0","E","0"],
                        ["0","0","2O","0","0","3V","0"],
                        ["0","0","0","0","0","E","0"],
                        ["0","0","0","0","0","(C)1N","O"],
                        ["0","0","0","0","0","0","0"],
                    ]
                }
            },
        },
        /* holographia */
        {
            type: "cryptogram",
            title: "Prismatica",
            topic: "Hyperbole",
            characterName: "Prisma",
            assets: {
                nodeBackground: "holographia.png",
                characterShopkeeper: "prisma.png",
                activityBackground: "holographia.png",
            },
            code: "LACE",
            userCode: ["","","",""],
            state: "incomplete",
            content: {
                cryptogram: {
                    style: {
                        material: "style-material--gold",
                        text: "style-text--gold-bold"
                    },
                    transform: {
                        translateX: "0%",
                        translateY: "18%",
                        rotate: "-1deg",
                    },
                    passage: [
                        {
                            text: {
                                paragraph: "1. If you're [freezing], you can wear this thick coat."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-9%",
                                translateY: "14%",
                                rotate: "-1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "2. [A zillion] tiny crystals cover this beautiful dress."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "1%",
                                translateY: "15%",
                                rotate: "0deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "3. Your unfashionable leather jacket is [older than dirt]."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "0%",
                                translateY: "25%",
                                rotate: "1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "4. This expensive, enormous handbag [weighs a ton]. "
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-4%",
                                translateY: "13%",
                                rotate: "-1deg",
                            },
                        },
                    ]
                },
                decoder: [
                    {
                        title: "{1.} In this sentence, 'freezing' means...",
                        word: "CO[L]D",
                    },
                    {
                        title: "{2.} In this sentence, 'a zillion' means...",
                        word: "M[A]NY",
                    },
                    {
                        title: "{3.} This hyperbole means the jacket is...",
                        word: "AN[C]IENT",
                    },
                    {
                        title: "{4.} This hyperbole means the handbag is very...",
                        word: "H[E]AVY",
                    },
                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "I wrote some notes for my upcoming fashion show, but my assistant said some of the language is too... \"exaggerated.\" So, I need you to make sure it all makes sense. Such work is beneath me.",
                complete: "So, J.J. Crispy sent you? I have not heard that name in a long time... Perhaps you can send him my regards."
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
        },
        /* zeebplex */
        {
            title: "ZeebPlex",
            characterName: "Zeeb",
            topic: "Personification",
            assets: {
                nodeBackground: "zeeb-plex.png",
                characterShopkeeper: "zeeb.png",
                activityBackground: "zeeb-plex.png",
            },
            code: "CODE",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Put together the puzzle, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Ugh... I spent all day trying to put together a new circuit board for one of my games, but I can't figure out how the pieces fit together! I doubt you can do it, but you can try.",
                complete: "Why are you still here? Go away, I'm too busy to chat!"
            }, 
            content: {
                puzzle: {
                    style: {
                        material: "style-material--pcb",
                        text: {
                            puzzle: "style-text--pcb",
                        }
                    },
                    piece: [
                        { text: "The TV remote refused to change the channel.", image: "1.png" }, 
                        { text: "The buttons eagerly awaited the player's hands.", image: "2.png" },      
                        { text: "The broken battery should be replaced.", image: "3.png" },                     
                        { text: "The neon lights smiled warmly in the dark.", image: "4.png" },
                        { text: "The arcade machine turned on.", image: "5.png" },
                        { text: "The sticky table was covered in old gum.", image: "6.png" }, 
                        { text: "The vacuum cleaner danced across the floor.", image: "7.png" },                 
                        { text: "The tokens waited patiently in her pocket.", image: "8.png" }, 
                        { text: "The vending machines were all broken.", image: "9.png" },          
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} The middle piece could be personified as:",
                        correctIndex: 2,
                        paragraph: [
                            "\"Someone turned the arcade machine o[n].\"",
                            "\"T[h]e arcade machine glowed brightly.\"",
                            "\"The arcade ma[c]hine blinked to life.\"",
                        ],
                    },
                    {
                        title: "{2.} Are all 3 pieces at the top personification?",
                        correctIndex: 1,
                        paragraph: [
                            "[Y]es",
                            "N[o]",
                        ],
                    },
                    {
                        title: "{3.} Which pieces both contain personification?",
                        correctIndex: 0,
                        paragraph: [
                            "The yellow circuit boar[d] pieces",
                            "The pur[p]le circuit board pieces",
                        ],
                    },

                    {
                        title: "{4.} Which of these is NOT personification?",
                        correctIndex: 1,
                        paragraph: [
                            "\"The [n]eon lights smiled warmly in the dark.\"",
                            "\"The sticky table was cover[e]d in old gum.\"",
                            "\"The T[V] remote refused to change the channel.\"",
                        ],
                    },
                ],
            }
        },
        /* code box */
        {
            type: "code-box",
            title: "Code Box",
            state: "incomplete",
            assets: {
                nodeBackground: "node-background-codeBox.png",
                activityBackground: "activity-background-codeBox.png"
            },
            content: {
                codeBox: null
            }
        }
    ],

};
