const resource =  {

    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "resource/escape-the-midnight-mall/assets/branding/preview-4th-grade.png",
        timerLabel: "TIME TIL MIDNIGHT",
    },

    activityArray: [
        /* critterwerks */
        {
            title: "Critterwerks",
            characterName: "Terrible Topsy",
            topic: "Main Idea",
            assets: {
                nodeBackground: "critterwerks.png",
                characterShopkeeper: "topsy.png",
                activityBackground: "critterwerks.png"
            },
            code: "GEAR",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read each passage, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Hee hee! I'm Topsy, and I sell robot pets. Every pet comes with instructions, but I'm really bad at writing. I just get distracted too easily! Can you help me find the main idea of each passage?",
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
                            paragraph:  "Congratulations! You are now the proud owner of a genuine Critterwerks Owl-O-Matic. \n\
                                        Just make sure to keep it away from magnets, or it might end up stuck in a spin cycle  \n\
                                        \u2014 and trust me, you don't want that. So just remember: small magnets, medium magnets, big magnets... all very, very bad!",
                            transform: {
                                translateX: "-10%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "Squix-1000",
                            paragraph:  "Your new Squix-1000 requires a little more care than a real squid.\n\
                                        First off, it must live in a special tank, but not any old fish tank will do.\n\
                                        No, no, NO! Regular fish tanks are no good. Your Squix-1000 must live in tank filled with oil \n\
                                        to prevent its tiny gears from rusting.",
                            transform: {
                                translateX: "10%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Bananatron",
                            paragraph:  "You actually bought a Bananatron? Nobody buys a Bananatron! \n\
                                        It might be because your new robot fruit is a bit... clumsy.\n\
                                        It will slip on itself every few seconds, so keep it away from stairs or other high places.\n\
                                        It just falls all the time. I can't seem to figure it out! Oh, my poor awkward Bananatron.",
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
                        title: "{1.} What is the main idea of the Owl-O-Matic?",
                        correctIndex: 2,
                        paragraph: [
                            "A [s]pinning Owl-O-Matic is very dangerous",
                            "A spinning Owl-O-Matic is hard to fi[x]",
                            "Ma[g]nets are bad for the Owl-O-Matic",
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of the Squix-1000?",
                        correctIndex: 1,
                        paragraph: [
                            "The Squi[x]-1000 is not a real squid",
                            "The Squix-1000 can't liv[e] in a normal fish tank",
                            "The Squ[i]x-1000 has delicate gears",
                        ]
                    },
                    {
                        title: "{3.} What is the main idea of the Bananatron?",
                        correctIndex: 0,
                        paragraph: [
                            "The Banan[a]tron is clumsy",
                            "The Bananatron i[s] a very popular pet",
                            "Stairs are one example of a hi[g]h place",  
                        ]
                    },
                    {
                        title: "{4.} All three of these passages are:",
                        correctIndex: 1,
                        paragraph: [
                            "Guides on how to build robot pet[s]",
                            "Care instructions for [r]obot pets",
                            "Reaso[n]s to buy robot pets",  
                        ]
                    },
                ],
                
            }                     
        },
        /* the candy cave */
        {
            title: "The Candy Cave",
            characterName: "Martin Shortnose",
            topic: "Poetry",
            assets: {
                nodeBackground: "the-candy-cave.png",
                characterShopkeeper: "noah-shortnose.png",
                activityBackground: "the-candy-cave.png",
            },
            code: "TART",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I want to sell more candy, but my shop is too small! You know, when I get frustrated like this, I like to write poetry. Can you read one of my poems and tell me what you think?",
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
                                'The candymaker said, "What should I make?',
                                'This cave is so small \u2014 I need more space!',
                                'I\'m at my limit. I\'m about to break.',
                                'Such little candy is such a disgrace.',
                            ],
                            [
                                'If I could expand, I would make something new.',
                                'So many treats, for me and for you!',
                                'But deep in the cave lies a darkness unseen,',
                                'a warning of danger \u2014 a warning we need."'
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
                        'A. What is the author\'s first name?',
                        'B. What is the rhyme pattern of stanza 1?',
                        'C. How many lines are in this poem?',     
                        'D. How many syllables are in line 4?',
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","(A)M","0","0"],
                        ["0","0","(B)2A","B","A","B","0"],
                        ["0","0","0","0","3R","0","0"],
                        ["(C)E","I","G","H","1T","0","0"],
                        ["0","0","0","0","I","0","0"],
                        ["0","0","(D)4T","E","N","0","0"],
                    ]
                }
            },
        },
        /* zeebplex */
        {
            title: "ZeebPlex",
            characterName: "Zeeb",
            topic: "Similes and Metaphors",
            assets: {
                nodeBackground: "zeeb-plex.png",
                characterShopkeeper: "zeeb.png",
                activityBackground: "zeeb-plex.png",
            },
            code: "AMPS",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Put together the puzzle, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Ugh... I spent all week trying to make a new circuit board for one of my games, but I can't figure out how to put the pieces together. I doubt you can do it, but you can try.",
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
                        { text: "Code is the language that computers speak.", image: "1.png" },
                        { text: "A pixel is a tiny piece of a bigger puzzle.", image: "2.png" },      
                        { text: "The arcade was a bustling beehive.", image: "3.png" },                     
                        { text: "The screen flickered like a neon sign.", image: "4.png" },
                        { text: "The internet is a treasure chest of information.", image: "5.png" },
                        { text: "A password is like a secret key.", image: "6.png" },   
                        { text: "Her coding skills are as sharp as a sword.", image: "7.png" },                  
                        { text: "The computer virus spread like a wildfire.", image: "8.png" },
                        { text: "The sound quality was as clear as a crystal.", image: "9.png" },          
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} The puzzle piece in the middle is a:",
                        correctIndex: 1,
                        paragraph: [
                            "S[i]mile",
                            "Met[a]phor",
                            "None of t[h]e above",
                        ],
                    },
                    {
                        title: "{2.} The two yellow puzzle pieces are:",
                        correctIndex: 0,
                        paragraph: [
                            "Si[m]iles",
                            "Metaph[o]rs",
                            "No[n]e of the above",
                        ],
                    },
                    {
                        title: "{3.} The three puzzle pieces on the top are:",
                        correctIndex: 1,
                        paragraph: [
                            "Simil[e]s",
                            "Meta[p]hors",
                            "N[o]ne of the above",
                        ],
                    },
                    {
                        title: "{4.} The two purple puzzle pieces are:",
                        correctIndex: 0,
                        paragraph: [
                            "[S]imiles",
                            "Meta[p]hors",
                            "None of the abov[e]",
                        ],
                    },
                ],
            }
        },
        /* holographia */
        {
            type: "cryptogram",
            title: "Prismatica",
            topic: "Context Clues",
            characterName: "Prisma",
            assets: {
                nodeBackground: "holographia.png",
                characterShopkeeper: "prisma.png",
                activityBackground: "holographia.png",
            },
            code: "GLAM",
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
                                paragraph: "1. These shoes are so [enormous], they\'ll fit only the largest feet."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-8%",
                                translateY: "25%",
                                rotate: "1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "2. This wedding dress is woven from a soft, white [textile]."
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
                                paragraph: "3. A diamond this huge is so [scarce], you may never see one again."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-4%",
                                translateY: "11%",
                                rotate: "-1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "4. This jacket has many colors, but the [primary] color is blue."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "7%",
                                translateY: "25%",
                                rotate: "1deg",
                            },
                        }
                    ]
                },
                decoder: [
                    {
                        title: "{1.} Using context clues, 'enormous' means:",
                        word: "BI[G]",
                    },
                    {
                        title: "{2.} Using context clues, 'textile' means:",
                        word: "C[L]OTH",
                    },
                    {
                        title: "{3.} Using context clues, 'scarce' means:",
                        word: "R[A]RE",
                    },
                    {
                        title: "{4.} Using context clues, 'primary' means:",
                        word: "[M]AIN",
                    },
                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "I wrote some notes for an upcoming fashion show, but my assistant said the words are too... \"fancy.\" So, I need you to use context clues to find simpler ones. Such work is beneath me, darling.",
                complete: "So, J.J. Dingo sent you? I have not heard that name in a long time... Perhaps you can send him my regards."
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
        },
        /* underworld athletics */
        {
            title: "Helio Athletics",
            characterName: "Robustus the Great",
            topic: "Elements of a Story",
            assets: {
                nodeBackground: "underworld-athletics.png",
                characterShopkeeper: "robustus-the-great.png",
                activityBackground: "underworld-athletics.png",
            },
            code: "HERO",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the short story, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I do not fear the Mallcrawlers. In fact, I am saving up to attack their kingdom, the Undermurk. Don't believe me? See for yourself! I dare you to read a tale of my greatest adventure.",
                complete: "Consider me impressed. You are not as weak as I first thought. I may require your skills in the future."
            }, 
            content: {
                story: {
                    style: {
                        material: "style-material--metal",
                        text: {
                            title: "style-text--printingPress-bold",
                            author: "style-text--printingPress-normal",
                            paragraph: "style-text--printingPress-normal",
                        }
                    },
                    item: {
                        title:     "The Smelly Ogre",
                        author:    null,
                        paragraph: [
                            
                                'Be warned, this is a frightening story. I advise you to leave now, to run away and never look back! \n\
                                Only the fearless (or the foolish) should read on.',
                                  
                                'It all started one sunny day in the field just outside Lady Fresno\'s castle. \n\
                                I was picking wildflowers for the Lady\'s birthday feast, when I smelled something terrible. \n\
                                I looked up, and standing there was an ogre. \n\
                                He was twice as tall as me, and twice as sweaty. \n\
                                He was picking flowers too, and he had an armful of them already. But I did not fear him. \n\
                                Instead, I dared the stinking beast to pick more flowers than me! \n\
                                The ogre grinned and accepted my challenge.', 

                                'So we began picking, but I quickly fell behind as the ogre plucked flowers left and right.\n\
                                He was just picking them randomly,\n\
                                paying no attention to their beauty or scent.\n\
                                I, however, chose only the prettiest flowers \u2014 those that would look and smell the best for Lady Fresno\'s feast. \n\
                                But when the competition ended, and I had lost, something strange happened.', 
                                
                                'The ogre turned to me and said, "Well done, warrior! Despite my victory, you have proven yourself to be a fabulous flower-picker. Shall we be friends?"',                
                   
                                'From that day on, the ogre and I picked flowers together every spring.\n\
                                He showed me how to collect them quickly, and I showed him how to find the ones that smelled sweet. \n\
                                We discovered, that by working together, we could create the most amazing flower displays the kingdom had ever seen.',                           
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "7.5%",
                            rotate: "1deg",
                        }
                    }
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the theme of this story?",
                        correctIndex: 2,
                        paragraph: [
                            "Smelly ogres are go[o]d at picking flowers",
                            "Robustus [t]he Great lost the competition",
                            "Great things are ac[h]ieved by working together",
                        ],
                    }, 
                    {
                        title: "{2.} What character trait best describes Robustus?",
                        correctIndex: 0,
                        paragraph: [
                            "Comp[e]titive",
                            "Sh[y]",
                            "F[e]arful",
                        ],
                    }, 
                    {
                        title: "{3.} From whose point of view is the story told?",
                        correctIndex: 1,
                        paragraph: [
                            "The O[g]re",
                            "Robustus the G[r]eat",
                            "L[a]dy Fresno",
                        ],
                    },                                       
                    {
                        title: "{4.} What is the setting of this story?",
                        correctIndex: 2,
                        paragraph: [
                            "A lone[l]y village",
                            "A castl[e]",
                            "A field [o]f wildflowers",
                        ],
                    },                      
                ],
            },
            
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

  