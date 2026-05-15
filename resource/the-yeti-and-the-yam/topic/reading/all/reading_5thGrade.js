const resource =  {

    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",
        logo: "resource/the-yeti-and-the-yam/assets/branding/reading/all/thumbnail-5th-grade.png",
        timerLabel: "YETI AWAKES"
    },

    activityArray: [
        // passages
        {
            title: "Dr. Seraphina's Cell",
            characterName: "Dr. Seraphina",
            topic: "Main Idea",
            assets: {
                nodeBackground: "dr-seraphina.png",
                characterShopkeeper: "dr-seraphina.png",
                activityBackground: "dr-seraphina.png"
            },
            code: "MELT",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read each passage, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "I can lend you some sugar for those candied yams, but only if you help me first. You see, I'm trying to design the perfect flavor of snow cone. Can you read my notes and tell me if they make sense?",
                complete: "Did I accidentally turn my hair into a snow cone? Yes. Do I know how to fix it? No... Let me know if you have any ideas."
            },
            content: {
                passage: {
                    style: {
                        material: "style-material--paper",
                        text: {
                            title: "style-text--printingPress-bold",
                            paragraph: "style-text--printingPress-normal",
                        }
                    },
                    item: [
                        {
                            image:      "1.png",
                            title:      "Lime Snow Cone",
                            paragraph:  "This lime snow cone is fresh, bold, and most importantly, extremely sour! \n\
                                        It has a vibrant green color and an extraordinarily strong taste that will really get you going in the morning.\n\
                                        Just don't eat it too fast, or the coldness and sourness might give you a brain freeze.",
                            transform: {
                                translateX: "-10%",
                                translateY: "-3%",
                                rotate: "-1deg",
                            }
                        },
                        {
                            image:      "2.png",
                            title:      "Pitaya Snow Cone",
                            paragraph:  "If you like your dessert to have a pretty mild flavor, then this pitaya snow cone is just for you.\n\
                                        Pitaya (also called dragonfruit) tastes reasonably refreshing, with just a hint of sweetness.\n\
                                        However, prepare to be disappointed if you prefer stronger flavors.\n\
                                        ",
                            transform: {
                                translateX: "0%",
                                translateY: "-20%",
                                rotate: "3deg",
                            }
                        },
                        {
                            image:      "3.png",
                            title:      "Berry Snow Cone",
                            paragraph:  "This berry snow cone is a beautiful pale blue color with a delightful mixture of flavors.\n\
                                        Made with only the freshest blueberries and gooseberries (which are quite hard to get here), it's both sour and sweet.\n\
                                        Eat it slowly so you can savor the perfectly balanced taste!",
                            transform: {
                                translateX: "-2%",
                                translateY: "-42%",
                                rotate: "-2deg",
                            }
                        },
                    ],  
                },
                multipleChoice: [
                    {
                        title: "{1.} What is the main idea of the lime snow cone?",
                        correctIndex: 1,
                        paragraph: [
                            "The lime snow cone is a bright gre[e]n color",
                            "The li[m]e snow cone has a very sour flavor",
                            "The lime snow cone should not be eaten too fa[s]t"
                        ],
                    },
                    {
                        title: "{2.} What is the main idea of the pitaya snow cone?",
                        correctIndex: 2,
                        paragraph: [
                            "Pitaya is a disappointing flav[o]r",
                            "A pita[y]a is also called a dragonfruit",
                            "The pitaya snow con[e] tastes mildly sweet"
                        ]
                    },
                    {
                        title: "{3.} What is the main idea of the berry snow cone?",
                        correctIndex: 0,
                        paragraph: [
                            "Its f[l]avor is both sour and sweet",
                            "It has a beautif[u]l pale blue color",
                            "It is made with blueberr[i]es and gooseberries"
                        ]
                    },
                    {
                        title: "{4.} All three of these passages are:",
                        correctIndex: 1,
                        paragraph: [
                            "Instructions on how to make snow cones",
                            "Descriptions of how snow cones tas[t]e",
                            "Reasons to avoid eating snow cones"
                        ]
                    },
                ],
                
            }                     
        },
        // poetry
        {
            title: "Tater Durant's Cell",
            characterName: "Tater Durant",
            topic: "Poetry",
            assets: {
                nodeBackground: "tater-drift.png",
                characterShopkeeper: "tater-drift.png",
                activityBackground: "tater-drift.png",
            },
            code: "SPUD",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the poem, then answer each question to fill in the crossword puzzle. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "You need yams? Well, buddy, they don't call me Tater Durant for nothing! If you give me feedback on some lyrics, I'll give you as many yams as you need.",
                complete: "Potatoes are life. Potatoes are love."
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
                        title:     "An Ode to the Potato",
                        author:    "By Tater Durant",
                        paragraph: [
                            [
                                'Within the soil, where plants grow strong,',
                                'potatoes hide, a buried treat.',
                                'Mashed or fried, you can\'t go wrong!',
                                'They make your taste buds dance, so sweet.',
                                
                            ],
                            [
                                'Baked or boiled, cubed or sliced \u2014',
                                'they taste so marvelous with spice.',
                                'From the ground, they grow and thrive.',
                                'Potatoes keep my soul alive!'
                            ]
                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "7%",
                            rotate: "-2deg",
                        }
                    }
                },
                crossword: {
                    title: "Answer the questions to fill in the crossword puzzle.",
                    paragraph: [
                        'A. Potatoes taste marvelous with what?',
                        'B. How many syllables are in line 2?',
                        'C. What is the rhyme pattern of stanza 1?',
                        'D. What is the author\'s last name?', 
                    ],
                    puzzle: [
                        ["0","(A)1S","2P","I","C","(B)E","0"],
                        ["0","0","0","0","0","I","0"],
                        ["0","0","0","(C)A","0","G","0"],
                        ["0","0","0","B","0","H","0"],
                        ["(D)4D","3U","R","A","N","T","0"],
                        ["0","0","0","B","0","0","0"],
                    ]
                }
            },
        },
        // puzzle
        {
            title: "Fishbeard's Cell",
            characterName: "Fishbeard",
            topic: "Figurative Language",
            assets: {
                nodeBackground: "fishbeard.png",
                characterShopkeeper: "fishbeard.png",
                activityBackground: "fishbeard.png",
            },
            code: "SHIP",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Put together the puzzle, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Arg! You're lucky I have whole barrel o' butter on my ship. And it's not even rancid yet! It's all yours... if you can put together the pieces of my map.",
                complete: "If yer ever lookin' to join a pirate crew, come find me."
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
                        { text: "The gold coins glittered like stars.", image: "1.png" }, 
                        { text: "The ship was a dancer upon the waves.", image: "2.png" },  
                        { text: "The ancient map is a silent storyteller.", image: "3.png" },                     
                        { text: "The ocean waves roared like a lion.", image: "4.png" },  
                        { text: "The pirate's heart thumped loudly.", image: "5.png" }, 
                        { text: "The treasure gleamed brighter than the sun.", image: "6.png" },    
                        { text: "The ship rocked gently like a cradle.", image: "7.png" },                                          
                        { text: "The cave was as dark as the moonless sky.", image: "8.png" },  
                        { text: "The map was as wrinkled as an old man's face.", image: "9.png" },            
                    ],
                },
                multipleChoice: [
                    {
                        title: "{1.} The three fully-green puzzle pieces are:",
                        correctIndex: 0,
                        paragraph: [
                            "[S]imiles", /*!*/
                            "Metapho[r]s",
                            "Idi[o]ms",
                        ],
                    },
                    {
                        title: "{2.} The puzzle piece without any green is a(n):",
                        correctIndex: 1,
                        paragraph: [
                            "O[n]omatopoeia",
                            "Metap[h]or", /*!*/
                            "Hyper[b]ole",
                        ],
                    },
                    {
                        title: "{3.} The three puzzle pieces on the bottom are all:",
                        correctIndex: 1,
                        paragraph: [               
                            "Allusio[n]s",
                            "S[i]miles", /*!*/ 
                            "[M]etaphors",
                        ],
                    },
                    {
                        title: "{4.} The puzzle piece in the middle is a(n):",
                        correctIndex: 2,
                        paragraph: [
                            "S[i]mile",
                            "Metap[h]or",
                            "Onomato[p]oeia", /*!*/
                        ],
                    },

                ],
            }
        },
        // cryptogram
        {
            type: "cryptogram",
            title: "Pippo's Cell",
            topic: "Context Clues",
            characterName: "Pippo Fizzlepop",
            assets: {
                nodeBackground: "pippo-fizzlepop.png",
                characterShopkeeper: "pippo-fizzlepop.png",
                activityBackground: "pippo-fizzlepop.png",
            },
            code: "BOLT",
            userCode: ["","","",""],
            state: "incomplete",
            content: {
                cryptogram: {
                    style: {
                        material: "style-material--metal",
                        text: "style-text--handwritten"
                    },
                    transform: {
                        translateX: "0%",
                        translateY: "21%",
                        rotate: "-2deg",
                    },
                    passage: [
                        {
                            
                            text: {
                                paragraph: "1. The [radiant] glow of these neon lights can fill even the darkest room."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "0%",
                                translateY: "0%",
                                rotate: "-1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "2. This oil can revive [ancient] gears, even if they haven't spun in decades."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "10%",
                                translateY: "2%",
                                rotate: "1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "3. Be careful with fragile, [friable] parts; they can easily crumble."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "0%",
                                translateY: "10%",
                                rotate: "-1deg",
                            },
                        },
                        {
                            text: {
                                paragraph: "4. You can barely hear the [muted] sound of these well-oiled pistons."
                            },
                            style: {
                                material: "style-material--metal",
                                paragraph: "style-text--handwritten",
                            },
                            transform: {
                                translateX: "10%",
                                translateY: "12%",
                                rotate: "1deg",
                            },
                        }
                    ]
                },
                decoder: [
                    {
                        title: "{1.} Using context clues, 'radiant' means:",
                        word: "[B]RIGHT",
                    },
                    {
                        title: "{2.} Using context clues, 'ancient' means:",
                        word: "[O]LD",
                    },
                    {
                        title: "{3.} Using context clues, 'friable' means:",
                        word: "BRITT[L]E",
                    },
                    {
                        title: "{4.} Using context clues, 'muted' means:",
                        word: "QUIE[T]",
                    },

                ]
            },
            isHintUsed: false,
            hint: "Read each passage, then find the meaning of each word by looking at context clues. Use the secret code if you get stuck. The yellow letters, in order, are the answer.",
            dialogue : {
                incomplete: "Hee hee, I'm Pippo Fizzlepop! I can build anything, even an oven to bake those yams. I have all these boxes of parts, I just can't read the labels... some of the words are way too hard. Help me!",
                complete: "If you ever see my sister Topsy around, let me know! Every since she was banished, I've been worried about her. Hee hee!"
            }, 
            symbol: ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]
        },
        // short story
        {
            title: "The Knight's Cell",
            characterName: "The Frozen Knight",
            topic: "Elements of a Story",
            assets: {
                nodeBackground: "the-frozen-knight.png",
                characterShopkeeper: "the-frozen-knight.png",
                activityBackground: "the-frozen-knight.png",
            },
            code: "EPIC",
            userCode: ["","","",""],
            state: "incomplete",
            hint: "Read the short story, then answer the multiple choice questions. The yellow letters, in order, are the answer.",
            isHintUsed: false,
            dialogue : {
                incomplete: "Need some marshmallows for those candied yams? I have a few left, and I'll gladly share them with you... if you read my tale.",
                complete: "If you manage to escape, send word to the King. We require assistance!"
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
                        title:     "The Tale of the Frozen Knight",
                        author:    null,
                        paragraph: [
 
                            'I am the Frozen Knight, and this is my story. \n\
                            Earlier this winter, the King sent me on a royal quest to capture a troublesome yeti. \n\
                            This yeti stomped on houses, pilfered crops, and snored far too loudly at night! Of course, she had to be stopped. \n\
                            So I left the castle to find her, setting off on a journey deep into the wilderness.'
                            ,
                            'Unfortunately, due to my pride, I became terribly lost in the forest. \n\
                            The yeti snuck up behind me, quickly tossing me into a giant sack slung over her shoulder. \n\
                            She carried me deep into this ice cave, dumping me out into a frigid, lonely cell. \n\
                            I found myself surrounded by all sorts of strange creatures \u2014 desperate prisoners of the yeti too.'
                            ,
                            'These creatures were certainly beneath me: a mad scientist, a lazy musician, a fishy pirate, and a creepy little elf. \n\
                            So I kept my distance. I was a knight, after all... on a mission from the King, nonethelesss!\n\
                            But as the days grew colder and more lonesome, I realized I had no choice. I swallowed my pride and reluctantly joined the crew of misfits.'
                            ,
                            'Turns out, they knew all the good survival tricks: scavenging food, staying warm, and keeping busy. \n\
                            From slippery floors to frozen toes, we overcame every challenge together. \n\
                            Dare I say it, we even became friends.'
                            ,
                            'Though we still remain prisoners of this treacherous yeti, locked within her icy cave, we are a team. \n\
                            Everyone needs help sometimes, even a knight like me.'

                        ],                
                        transform: {
                            translateX: "0%",
                            translateY: "10%",
                            rotate: "1deg",
                        }
                    }
                },
                multipleChoice: [
                    {
                        title: "{1.} From whose point of view is this story told?",
                        correctIndex: 2,
                        paragraph: [
                            "The [y]eti",
                            "T[h]e King",
                            "The Froz[e]n Knight",
                        ],
                    }, 
                    {
                        title: "{2.} What trait best describes the Frozen Knight?",
                        correctIndex: 1,
                        paragraph: [
                            "Bashfu[l]",
                            "[P]rideful",
                            "C[r]eative",
                        ],
                    }, 
                    {
                        title: "{3.} What is the theme of this story?",
                        correctIndex: 1,
                        paragraph: [
                            "Slip[p]ery floors are dangerous",
                            "Everyone needs help somet[i]mes",
                            "Pesky [y]etis must be stopped",
                        ],
                    }, 
                    {
                        title: "{4.} For most of this story, the setting is...",
                        correctIndex: 0,
                        paragraph: [
                            "An i[c]e cave",
                            "The King's c[a]stle",
                            "A [f]orest",
                        ],
                    },                                             
                ],
            },
            
        },
        // code box
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
  