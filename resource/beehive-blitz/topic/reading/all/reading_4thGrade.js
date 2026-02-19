const resource =  {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/reading/all/preview-4th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    activityArray: [
        /* honey vats */
        {
            title: "Honey Vats",
            characterName: "Basil Rabbit",
            topic: "Main Idea and Supporting Details",
            assets: {
                nodeBackground: "basil-rabbit.png",
                characterShopkeeper: "basil-rabbit.png",
                activityBackground: "basil-rabbit.png"
            },
            code: "ROSE",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read each passage, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I'm here to help the bees gather nectar! The Queen gave me some instructions on which flowers to collect, but I haven't had time to read them yet. Can you take a look for me?",
                complete: "I'm so glad the Puzzle Punks are here. We all need to work together!"
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
                            title:      "Glitterbloom",
                            paragraph:  "You must start collecting Glitterblooms immediately! After all, they're the main source of our hive's energy. \n\
                                        These extremely important flowers sparkle like glitter, especially in the sunlight.   \n\
                                        We use their nectar to make a special honey that fills every bee with power and life.",
                            transform: {
                                translateX: "-12%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "Ponderbell",
                            paragraph:  "Ponderbells are quite rare, so collect as many as you can.\n\
                                        We use their nectar to make a delicious honey, that when eaten, increases our wisdom and intelligence. \n\
                                        That's right, just a few gulps of Ponderbell honey can turn even the most foolish bee into a genius.",
                            transform: {
                                translateX: "10%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Shadowthorn",
                            paragraph:  "Beware the Shadowthorn, which grows inside caves. \n\
                                        It has purple petals and a nectar so poisonous, few have tasted it and lived.\n\
                                        We cannot harvest such toxic things; I cannot think of a more unsafe situation! \n\
                                        Shadowthorn's sour honey is so dangerous, a single drop means total disaster for the hive.",
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
                        title: "{1.} What is the main idea of the Glitterbloom?",
                        correctIndex: 1,
                        paragraph: [
                            "Glitterblooms mu[s]t be collected immediately",
                            "Glitterblooms provide ene[r]gy to the bees",
                            "Gli[t]terblooms sparkle in the sun",
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of the Ponderbell?",
                        correctIndex: 2,
                        paragraph: [
                            "Ponderbell honey is deliciou[s]",
                            "Ponde[r]bells are quite rare",
                            "P[o]nderbells make the bees smart",
                        ]
                    },
                    {
                        title: "{3.} What is the main idea of the Shadowthorn?",
                        correctIndex: 0,
                        paragraph: [
                            "[S]hadowthorns are poisonous",
                            "Shadowthorns have pur[p]le petals",
                            "Shado[w]thorn honey is sour",  
                        ]
                    },
                    {
                        title: "{4.} What supports the Shadowthorn's main idea?",
                        correctIndex: 2,
                        paragraph: [
                            "\"...w[h]ich grows inside caves.\"",
                            "\"It has purple pe[t]als...\"",
                            "\"We cannot harv[e]st such toxic things.\"",  
                        ]
                    },
                ],
                
            }                     
        },
        /* bard's study */
        {
            title: "Riff's Study",
            characterName: "Riff Wingman",
            topic: "Poetry",
            assets: {
                nodeBackground: "riff-wingman.png",
                characterShopkeeper: "riff-wingman.png",
                activityBackground: "riff-wingman.png",
            },
            code: "NOTE",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Whoa, you really haven't heard of me? The bee who crafts words as smooth as honey? Surprising, man. Anyway, I wrote a poem, a little inspiration for the worker bees. If you're curious, check it out.",
                complete: "The storm is definitely coming, my friend. I hope you're ready."
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
                        title:     "Flight Before Fury",
                        author:    "By Riff Wingman",
                        paragraph: [
                            [
                                'As storm clouds gather, a warning in the breeze,',
                                'the bees also gather, with graceful ease.',
                                'It\'s nectar they seek, with a taste so sweet.',
                                'It\'s food for the hive; much more than a treat.',
                            ],
                            [
                                'Now the storm blows in,',
                                'and the clouds start to spin.',
                                'Lightning streaks! Thunder speaks!',
                                'But the bees will win.'
                            ]
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "13%",
                            rotate: "-3deg",
                        }
                    }
                },
                crossword: {
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. How many stanzas are in this poem?',
                        'B. How many lines are in this poem?',
                        'C. What is the rhyme scheme of stanza 2?',     
                        'D. What is the author\'s last name?',
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","0","(C)A","0"],
                        ["0","0","0","(B)4E","0","A","0"],
                        ["(A)T","0","0","I","0","B","0"],
                        ["(D)W","I","N","G","M","A","1N"],
                        ["2O","0","0","H","0","0","0"],
                        ["0","0","0","3T","0","0","0"],
                    ]
                }
            },
        },
        /* accounting dept */
        {
            title: "Accounting Dept.",
            characterName: "Sunny Snap",
            topic: "Similes and Metaphors",
            assets: {
                nodeBackground: "sunny-snap.png",
                characterShopkeeper: "sunny-snap.png",
                activityBackground: "sunny-snap.png",
            },
            code: "OPAL",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Put together the puzzle, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "The bees put a lot of trust in us leprechauns \u2014 we handle all the hive\'s money. But I let them all down... I accidentally broke the Queen\'s golden tablet! Can you help me put it back together?",
                complete: "Why is Gustav coming after us? What did we do? I just don\'t get it..."
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
                        { text: "This perfume smells as sweet as nectar.", image: "1.png" }, 
                        { text: "These necklaces are quite expensive.", image: "2.png" },     
                        { text: "These shimmering rings are like golden honey.", image: "3.png" },                     
                        { text: "This honeycomb is the heart of the hive.", image: "4.png" }, 
                        { text: "This massive diamond is a throne of power.", image: "5.png" },
                        { text: "This coat is very soft.", image: "6.png" },   
                        { text: "This field of flowers is like a painting.", image: "7.png" },                  
                        { text: "These ancient books are royal advisors.", image: "8.png" },
                        { text: "These new robes are as colorful as a rainbow.", image: "9.png" },          
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} Are the three top pieces all similes?",
                        correctIndex: 1,
                        paragraph: [
                            "Y[e]s",
                            "N[o]",
                        ],
                    },
                    {
                        title: "{2.} The puzzle piece in the middle is a:",
                        correctIndex: 1,
                        paragraph: [
                            "[S]imile",
                            "Meta[p]hor",
                        ],
                    },
                    {
                        title: "{3.} How could the star piece be written as a simile?",
                        correctIndex: 1,
                        paragraph: [
                            "This [c]oat is extremely soft.",
                            "This coat is as soft [a]s a bee's fuzz.",
                            "This coat is a soft, fluffy marshma[l]low.",
                        ],
                    },
                    {
                        title: "{4.} The four corner pieces are all:",
                        correctIndex: 0,
                        paragraph: [
                            "Simi[l]es",
                            "M[e]taphors",
                            "None of the ab[o]ve",
                        ],
                    },

                ],
            }
        },
        /* the warehouse */
        {
            type: "cryptogram",
            title: "The Warehouse",
            topic: "Context Clues",
            characterName: "Grumblegrub",
            assets: {
                nodeBackground: "grumblegrub.png",
                characterShopkeeper: "grumblegrub.png",
                activityBackground: "grumblegrub.png",
            },
            code: "LOAD",
            userCode: ["","","",""],
            state: "incomplete",
            content: {
                cryptogram: {
                    style: {
                        material: "style-material--metal",
                        text: "style-text--gold-bold"
                    },
                    transform: {
                        translateX: "5%",
                        translateY: "19%",
                        rotate: "3deg",
                    },
                    passage: [
                        {
                            text: {
                                paragraph: "1. This [luminous] gemstone shines brightly in even the darkest room."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-7%",
                                translateY: "-2%",
                                rotate: "-2deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "2. This [viscous] nectar is extremely thick and sticky."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "3%",
                                translateY: "1%",
                                rotate: "1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "3. Use these [delectable] herbs to add lots of flavor to your honey."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-10%",
                                translateY: "8%",
                                rotate: "-1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "4. These [desiccated] flowers have no more moisture in them."
                            },
                            style: {
                                material: "style-material--paper",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "-1%",
                                translateY: "12%",
                                rotate: "3deg",
                            },
                        },
                    ]
                },
                decoder: [
                    {
                        title: "{1.} Using context clues, 'luminous' means:",
                        word: "G[L]OWING",
                    },
                    {
                        title: "{2.} Using context clues, 'viscous' means:",
                        word: "GO[O]EY",
                    },
                    {
                        title: "{3.} Using context clues, 'delectable' means:",
                        word: "T[A]STY",
                    },
                    {
                        title: "{4.} Using context clues, 'desiccated' means:",
                        word: "DRIE[D]",
                    },
                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "Name's Grumblegrub, the prettiest warehouse manager in the hive. Got a pile of labels here, but I don't like all the fancy words. Turns my brain to mush. I need your eye on this mess, pronto!",
                complete: "Eh... you're still here? Can't you go bother some other bee?"
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
        },
        /* throne room */
        {
            title: "Throne Room",
            characterName: "Queen Bella",
            topic: "Elements of a Story",
            assets: {
                nodeBackground: "queen-bella.png",
                characterShopkeeper: "queen-bella.png",
                activityBackground: "queen-bella.png",
            },
            code: "RULE",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the short story, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "My dear Puzzle Punks, how delightful it is to have you visit my throne room! May I kindly suggest you read a history of my leadership? I am certain it will inspire you in these difficult times.",
                complete: "My cherished guest! Perhaps you will visit again soon."
            }, 
            content: {
                story: {
                    style: {
                        material: "style-material--paper",
                        text: {
                            title: "style-text--printingPress-bold",
                            author: "style-text--printingPress-normal",
                            paragraph: "style-text--printingPress-normal",
                        }
                    },
                    item: {
                        title:     "Bella the Brave",
                        author:    null,
                        paragraph: [
                            
                                'Long ago, in the heart of Bumbleburg Hive, there lived a tiny bee named Bella. \n\
                                She looked like every other bee; one of thousands in the busy hive. \n\
                                But Bella had big dreams. She imagined herself soaring high above the fields of wildflowers, \n\
                                leading her friends to new lands and adventures.',

                                'As Bella grew, so did her confidence. \n\
                                She became known among her fellow bees for her kindness, bravery, and determination. \n\
                                She wasn\'t the strongest or fastest bee in the hive, but she had a heart full of courage and a mind full of ideas.',

                                'One day, disaster struck. A fierce storm destroyed most of Bumbleberg Hive, scattering the bees in fear.\n\
                                Bella knew it was up to her to save the day. With her wings beating rapidly, she gathered up as many of her friends as she could, guiding them to safety.',

                                'Bella\'s bravery did not go unnoticed. The older bees saw her potential and strength of character.\n\
                                And so, when the old Queen Bee retired, the bees elected Bella the new queen of the hive.',                
                   
                                'But Bella never forgot where she came from. She always remained humble, remembering her days as one little bee among thousands.\n\
                                Though she achieved many great things, she knew her greatest success was not becoming queen \u2014 but leading her hive with love and courage.'                    
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "6.5%",
                            rotate: "1deg",
                        }
                    }
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the theme of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Disas[t]er struck Bumbleburg Hive",
                            "Success comes from love and cou[r]age",
                            "Bella guided h[e]r friends to safety",
                        ],
                    }, 
                    {
                        title: "{2.} Which character traits best describe Bella?",
                        correctIndex: 2,
                        paragraph: [
                            "Fe[a]rful and lonely",
                            "Creative and artist[i]c",
                            "Confident and co[u]rageous",
                        ],
                    },    
                    {
                        title: "{3.} What is the setting of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "A fierce sto[r]m",
                            "Bumb[l]eburg Hive",
                            "[A] field of wildflowers",
                        ],
                    }, 
                    {
                        title: "{4.} From what point of view is this story told?",
                        correctIndex: 2,
                        paragraph: [
                            "First perso[n]",
                            "Sec[o]nd person",
                            "Third p[e]rson",
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


  