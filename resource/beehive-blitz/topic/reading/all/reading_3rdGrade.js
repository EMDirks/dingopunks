const resource =  {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/reading/all/preview-3rd-grade.png",
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
                incomplete: "I'm here to help the bees gather nectar! The Queen gave me some instructions on which flowers to find, but I haven't had time to read them yet. Can you take a look for me?",
                complete: "I'm so glad the Dingo Punks are here. We all need to work together!"
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
                            paragraph:  "You must start finding Glitterblooms right now! These important flowers give the bees in   our hive lots of energy. \n\
                                        We use their nectar to make a special honey that fills every bee with power and life. \n\
                                        Plus, they grow in the sunlight and sparkle like glitter.",
                            transform: {
                                translateX: "-12%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "Ponderbell",
                            paragraph:  "Ponderbells are very rare, so collect as many as you can.\n\
                                        We use their nectar to make a yummy honey that makes our bees smarter when they eat it. \n\
                                        That's right, just a small taste of Ponderbell honey can turn even the most foolish bee into a genius!",
                            transform: {
                                translateX: "10%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Shadowthorn",
                            paragraph:  "Watch out for the Shadowthorn! It grows in caves and \n\
                                        has purple petals, but it\'s filled with a deadly nectar.\n\
                                        We must NOT collect this flower. It might be pretty, but it\'s super dangerous! \n\
                                        Even a single drop of Shadowthorn's sour honey can make you very sick.",
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
                            "Glitterblooms mu[s]t be found quickly",
                            "Glitterblooms give ene[r]gy to the bees",
                            "Gli[t]terblooms sparkle in the sunlight",
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of the Ponderbell?",
                        correctIndex: 2,
                        paragraph: [
                            "Ponderbell honey is yumm[y]",
                            "Ponde[r]bells are very rare",
                            "P[o]nderbells make the bees smart",
                        ]
                    },
                    {
                        title: "{3.} What is the main idea of the Shadowthorn?",
                        correctIndex: 0,
                        paragraph: [
                            "[S]hadowthorns are dangerous",
                            "Shadowthorns have pur[p]le petals",
                            "Shado[w]thorn honey is sour",  
                        ]
                    },
                    {
                        title: "{4.} What supports the Shadowthorn's main idea?",
                        correctIndex: 2,
                        paragraph: [
                            "\"I[t] grows in caves...\"",
                            "\"It might [b]e pretty...\"",
                            "\"...it\'s sup[e]r dangerous!\"",  
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
                incomplete: "You really haven't heard of me? I'm famous around here, man! Anyway, I wrote this little poem to inspire the worker bees. Check it out and let me know what you think.",
                complete: "There's a dangerous storm coming, my friend. I hope you're ready."
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
                        title:     "The Storm and the Bees",
                        author:    "By Riff Wingman",
                        paragraph: [
                            [
                                'The storm is coming, a warning in the breeze.',
                                'The hive is noisy, busy with bees.',
                                'It\'s nectar they want, a taste so sweet.',
                                'It\'s food for the hive, much more than a treat.',
                            ],
                            [
                                'Now the storm blows in,',
                                'and the clouds start to spin.',
                                'Lightning flashes! Thunder booms!',
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
                        'A. How many stanzas are in this poem?', //two
                        'B. How many syllables are in line 3?',//nine
                        'C. What is the rhyme scheme of stanza 1?',  //aabb
                        'D. What is the author\'s last name?', //wingman
                        
                    ],
                    puzzle: [
                        ["0","0","0","0","0","0","0"],
                        ["0","0","(B)N","0","0","0","0"],
                        ["(A)3T","0","I","0","0","(C)A","0"],
                        ["(D)W","I","N","G","M","A","1N"],
                        ["2O","0","4E","0","0","B","0"],
                        ["0","0","0","0","0","B","0"],
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
                incomplete: "The bees put a lot of trust in us leprechauns \u2014 we handle all the money in the hive. I just can't believe I broke the Queen Bee's golden tablet! Can you help me put it back together?",
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
                        { text: "These necklaces cost a lot of money.", image: "2.png" },     
                        { text: "These shiny rings are like golden honey.", image: "3.png" },                     
                        { text: "This honeycomb is the heart of the hive.", image: "4.png" }, 
                        { text: "This huge diamond is a throne of power.", image: "5.png" },
                        { text: "This coat is very soft.", image: "6.png" },   
                        { text: "This field of flowers is like a painting.", image: "7.png" },                  
                        { text: "These books are treasure chests of wisdom.", image: "8.png" },
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
                            "This coat is a soft, fluffy c[l]oud.",
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
                                paragraph: "2. This nectar will freeze if it sits out in the [frigid] air."
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
                                paragraph: "3. Use these [delectable] herbs to add a yummy flavor to your nectar."
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
                                paragraph: "4. If you're feeling [weary], this energy drink will wake you up."
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
                        title: "{2.} Using context clues, 'frigid' means:",
                        word: "C[O]LD",
                    },
                    {
                        title: "{3.} Using context clues, 'delectable' means:",
                        word: "T[A]STY",
                    },
                    {
                        title: "{4.} Using context clues, 'weary' means:",
                        word: "TIRE[D]",
                    },
                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "My name is Grumblegrub. I'm in charge of the warehouse here, but I  can't understand the fancy words on these labels... Want to help?",
                complete: "You're still here? Can't you go bother some other bee?"
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
                incomplete: "My dear Dingo Punks, welcome to the throne room! Would you like to read a history of my leadership? I am certain it will inspire you.",
                complete: "My lovely guest! I hope you enjoyed my story. Perhaps you will visit again soon."
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
                            
                                'Long ago, in Bumbleburg Hive, there lived a tiny bee named Bella. \n\
                                She looked like every other bee, one of thousands in the busy hive. \n\
                                But Bella had big dreams. She imagined herself flying high above the fields of flowers, \n\
                                leading her friends to new lands and adventures.',

                                'As Bella grew, so did her confidence. \n\
                                She became known among the bees for her kindness, bravery, and determination. \n\
                                She wasn\'t the strongest or fastest bee in the hive, but she had a heart full of courage and a mind full of ideas.',

                                'One day, disaster struck. A terrible storm destroyed most of Bumbleburg Hive, and the bees scattered in fear.\n\
                                Bella knew it was up to her to save the day. By flying as fast as she could, she gathered up all her friends and guided them to safety.\n\
                                This bravery greatly impressed the bees of Bumbleburg Hive.\n\
                                In fact, when the old Queen Bee retired, Bella was made the new queen of the hive!',                
                   
                                'However, Bella never forgot where she came from. She always remained humble, remembering her days as one little bee among thousands.\n\
                                Though she achieved many great things, she knew her greatest success was not becoming queen \u2014 it was leading her hive with love and courage.'                    
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
                        title: "{1.} Which character traits best describe Bella?",
                        correctIndex: 2,
                        paragraph: [
                            "S[a]d and lonely",
                            "Sneaky and [m]ean",
                            "Confident and b[r]ave",
                        ],
                    }, 
                    {
                        title: "{2.} What is the theme of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Disas[t]er struck Bumbleburg Hive",
                            "Success comes from love and co[u]rage",
                            "Bella guided h[e]r friends to safety",
                        ],
                    },    
                    {
                        title: "{3.} What is the setting of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "An old cas[t]le",
                            "Bumb[l]eburg Hive",
                            "[A] field of flowers",
                        ],
                    }, 
                    {
                        title: "{4.} Why did the bees make Bella their new queen?",
                        correctIndex: 2,
                        paragraph: [
                            "Because she was [t]iny",
                            "Bec[a]use a storm destroyed the hive",
                            "Because sh[e] was brave",
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

