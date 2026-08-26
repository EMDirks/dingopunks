const resource = {

    info: {
        title: "Beehive Blitz",
        path: "beehive-blitz",
        logo: "resource/beehive-blitz/assets/branding/math/all/thumbnail-5th-grade.png",
        timerLabel: "GUSTAV ARRIVES"
    },

    challengeArray: [

        // ⭐ basil rabbit
        {
            info: {
                type: 'challenge',
                title: "Honey Vats",
                asset: "basil-rabbit.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Step Word Problems With All Four Operations",
                    commonCore: [
                        "4.MD.A.2",
                        "4.NBT.B.4",
                        "4.OA.A.3",
                        "5.MD.A.1",
                        "5.NBT.B.5",
                        "5.NBT.B.6",
                        "5.OA.A.2",
                    ],
                }
            },

            intro: {
                character: "Basil Rabbit",
                asset: "basil-rabbit.png",
                dialogue : {
                    incomplete: "Basil here. I already helped the bees gather tons of nectar \u2014 fast as a flash! But now Queen Bella needs some progress reports, and, uh… math isn't exactly my thing. Can you help?",
                    complete: "Hip, hop, hooray! I think the bees will trust me now, thanks to you."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "basil-rabbit.png",
                },
                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "6.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Progress Report #1]",
                                },
                                passage: {
                                    text: "The bees need wax to help strengthen the walls of their hive. The warehouse has exactly 9,720 ounces of wax, stored equally inside 18 crates. Each crate is divided into 3 equal sections.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-6%",
                                translateY: "-15%",
                                rotate: "2deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                image: {
                                    file: "3.png",
                                    type: "theme",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Progress Report #2]",
                                },
                                passage: {
                                    text: "This morning, I came across 24 runebloom flowers, each covered in 48 globs of dew. In the afternoon, I found 36 more runebloom flowers, each covered in 52 globs of dew!",
                                },  
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "4%",
                                rotate: "-1deg",
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
                                    text: "[<u>Progress Report #3]",
                                },
                                passage: {
                                    text: "I helped the bees collect 7,500 drops of nectar! Unfortunately, I spilled [<f>1/5] of these drops during transport. Now, I have to convert all the remaining drops into cups. One cup equals 250 drops.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "0%",
                                rotate: "-3deg",
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
                                    text: "[<u>Progress Report #4]",
                                },
                                passage: {
                                    text: "To make sure we were prepared for the storm, I checked on the hive's honey storage. There were 4,267 barrels of honey left. That wasn't enough, so Queen Bella ordered 15 worker bees to each gather 156 more barrels. ",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-4%",
                                translateY: "14%",
                                rotate: "2deg",
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
                            width: "percent40",
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
                                size: 'small',
                                align: 'left'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
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
                    type: "multiple-choice"
                },
                contentArray: [
                    {
                        title: "[<g>1.] Each crate section contains ___ ounces of wax.",
                        answerType: "numerals",
                        correctIndex: 1,
                        paragraph: [
                            "540 {X}",
                            "180 {H}",
                            "163 {E}",
                        ],
                    },
                    {
                        title: "[<g>2.] How many globs of dew were on all the flowers?",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "1,188 {L}",
                            "2,880 {B}",
                            "3,024 {O}",
                        ],
                    },
                    {
                        title: "[<g>3.] How much nectar does Basil have left?",
                        correctIndex: 0,
                        paragraph: [
                            "24 cu{p}s",
                            "5,000 {d}rops",
                            "30 cup{s}",
                        ],
                    },
                    {
                        title: "[<g>4.] After the worker bees finish gathering more barrels, how much honey will be in storage?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "5,823 b{a}rrels",
                            "6,432 {b}arrels",
                            "6,607 barrel{s}",
                            "4,423 bar{r}els",
                        ],
                    },
                ],  
                code: {
                    answer: "HOPS",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ riff wingman
        {
            info: {
                type: 'challenge',
                title: "Riff's Study",
                asset: "riff-wingman.png",
                state: "incomplete",
                hint: {
                    text: "Sort each review into the correct column, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Decimals",
                    commonCore: [
                        "5.NBT.A.1",
                        "5.NBT.A.3",
                        "5.NBT.A.3b",
                        "5.NBT.B.7",
                    ],
                }
            },

            intro: {
                character: "Riff Wingman",
                asset: "riff-wingman.png",
                dialogue : {
                    incomplete: "Riff's the name, poetry's the game. I should be preparing for the storm, but I can't focus. These ratings for my latest poetry collection are driving me mad! Can you sort them out for me?",
                    complete: "Math's a grind, but you made it sweet. Now it's time to bring the heat!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    columnArray: [
                        "< 2 Stars",
                        "2 to 4 Stars",
                        "> 4 Stars",
                    ],
                    asset: {
                        scope: "global",
                        path: "3-column-stone.png"
                    }
                },   
                blockArray: [
                    {
                        tag: {
                            text: "Honeycomb Holmes",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<bwb>2.341 STARS] \
                                    <br> \
                                    <br> \
                                    \"Ambitious, but mostly buzz and no sting.\"",
                                },  
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "J.J. DINGO",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<bwb>1.679 STARS] \
                                    <br> \
                                    <br> \
                                    \"It's like he rhymed \'bee\' with \'bee\' for 30 pages.\"",
                                }, 
                            }
                        ],
                        correctIndex: 0
                    },
                    {
                        tag: {
                            text: "Mr. Bunbear",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<bwb>4.958 STARS] \
                                    <br> \
                                    <br> \
                                    \"Pure nectar for the soul \u2014 almost perfect.\"",
                                },  
                            }
                        ],
                        correctIndex: 2
                    }, 
                    {
                        tag: {
                            text: "Pollen Jones",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<bwb>3.976 STARS] \
                                    <br> \
                                    <br> \
                                    \"Better than expected, but still not the bee's knees.\"",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Buzzeline Beatrix",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<bwb>5.0 STARS] \
                                    <br> \
                                    <br> \
                                    \"A masterpiece that will make you weep honey.\"",
                                },  
                            }
                        ],
                        correctIndex: 2
                    }, 
                    {
                        tag: {
                            text: "Stinger Sharpe",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<bwb>3.98 STARS] \
                                    <br> \
                                    <br> \
                                    \"Decent, if you're into poems about pollen.\"",
                                }, 
                            }
                        ],
                        correctIndex: 1
                    },
                    {
                        tag: {
                            text: "Eva Waxworth",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "[<bwb>4.724 STARS] \
                                    <br> \
                                    <br> \
                                    \"A nearly flawless ode to life in the hive.\"",
                                },  
                            }
                        ],
                        correctIndex: 2
                    }, 
                ],      
                style: { 
                    block: {
                        dimension: {
                            width: "sort3Width",
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
                                size: 'tiny',
                                align: 'center'
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
                        title: "[<g>1.] Find the sum of every review in the middle column.",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "10.313 {P}",
                            "10.303 {L}",
                            "10.297 {S}",
                        ],
                    },
                    {
                        title: "[<g>2.] Who gave the highest review?",
                        correctIndex: 0,
                        paragraph: [
                            "Buzze{l}ine Beatrix",
                            "Mr. Bu{n}bear",
                            "Stinger Sharp{e}",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the difference between the highest and lowest review?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 3,
                        paragraph: [
                            "3.279 {I}",           
                            "3.289 {L}",
                            "2.279 {E}",
                            "3.321 {A}",
                        ],
                    },
                    {
                        title: "[<g>4.] What would Eva Waxworth's review be if it was 10 times greater?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "47.024 {D}",
                            "47.24 {M}",
                            "47.724 {L}",
                            "0.472 {E}",
                        ],
                    },
                ],  
                code: {
                    answer: "SLAM",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ grumblegrub
        {
            info: {
                type: 'challenge',
                title: "The Warehouse",
                asset: "grumblegrub.png",
                state: "incomplete",
                hint: {
                    text: "Look at the passages and shapes, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Volume",
                    commonCore: [
                        "5.MD.C.3",
                        "5.MD.C.5",
                        "5.MD.C.5a",
                        "5.MD.C.5b",
                        "5.MD.C.5c",
                    ],
                }
            },

            intro: {
                character: "Grumblegrub",
                asset: "grumblegrub.png",
                dialogue: {
                    incomplete: "Yep, I'm the warehouse manager... lucky me. I was supposed to do a bunch of volume calculations ages ago, but I just kept putting it off. It's probably too late now — unless you want to do it?",
                    complete: "Yeah, thanks. But don't think I didn't notice you poking around the storage room..."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "grumblegrub.png",
                },
                blockArray: [                 
                    {
                        tag: {
                            text: "<br>[<u>Honey Crates]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The warehouse has 5 honey crates. Each is shaped like a rectangular prism with the following dimensions: 4 feet long, 3 feet wide, and 2 feet high. ",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "30%",
                                translateY: "125%",
                                rotate: "-3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "<br>[<u>Storage Room]",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "The storage room is a rectangular prism: 10 ft by 8 ft by 6 ft. Grumblegrub wants to use exactly half of its volume to store his “mystery packages.”",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-70%",
                                translateY: "0%",
                                rotate: "4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "<br>[<u>Storage Bin]",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "bb2_2.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-45%",
                                translateY: "0%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "<br>[<u>Beeswax Container]",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "local",
                                    file: "bb2_1.png",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "80%",
                                translateY: "20%",
                                rotate: "-3deg",
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
                            size: 'mediumSmall',
                            align: 'center',
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
                                width: "percent80",
                                height: "full",
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'center'
                            },
                            misc: {
                                padding: "default"
                            },
                        }, 
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
                        'A. [<u>Yes] or [<u>no]: can the storage bin fit inside one of the honey crates?',
                        'B. All together, the warehouse\'s five honey crates take up one-hundred _____ cubic feet.',
                        'C. To store his \"mystery packages,\" Grumblegrub needs two _____ forty ft[<e>3].',     
                        'D. The beeswax container has an area of one hundred _____ cubic feet.',                    
                    ],
                    puzzle: [
                        ["(C)H","U","(A)N","D","R","(D)E","3D"],
                        ["0","0","O","0","0","2I","0"],
                        ["0","0","0","0","0","G","0"],
                        ["0","0","0","0","0","H","0"],
                        ["0","0","0","0","0","T","0"],
                        ["(B)T","1W","4E","N","T","Y","0"],
                    ]
                },  
                code: {
                    answer: "WIDE",
                    userArray: ["","","",""]
                },
            }
        },

        // ⭐ sunny snap
        {
            info: {
                type: 'challenge',
                title: "Accounting Dept.",
                asset: "sunny-snap.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions and Mixed Numbers With All Four Operations",
                    commonCore: [
                        "5.NF.A.1",
                        "5.NF.B.3",
                        "5.NF.B.4",
                        "5.NF.B.7",
                        "5.NF.B.7a",
                        "5.NF.B.7b",
                    ],
                }
            },

            intro: {
                character: "Sunny Snap",
                asset: "sunny-snap.png",
                dialogue : {
                    incomplete: "Just my luck... I accidentally broke Queen Bella's golden tablet \u2014 again! She's going to be SO upset. Think you can help me fix this thing?",
                    complete: "For a leprechaun, I'm pretty unlucky. You really saved me!"
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "sunny-snap.png",
                },
                blockArray: [              
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/6 + 8/9",
                                }, 
                                backgroundImage: {
                                    file: "1.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "6 2/4 - 2 2/3",
                                }, 
                                backgroundImage: {
                                    file: "2.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "8/10 - 2/5",
                                }, 
                                backgroundImage: {
                                    file: "3.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "3/8 x 7/1",
                                }, 
                                backgroundImage: {
                                    file: "4.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/3 x 4/4",
                                }, 
                                backgroundImage: {
                                    file: "5.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "5/6 x 2 1/2",
                                }, 
                                backgroundImage: {
                                    file: "6.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "5 2/4 x 6",
                                }, 
                                backgroundImage: {
                                    file: "7.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "8 ÷ 1/3",
                                }, 
                                backgroundImage: {
                                    file: "8.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                fraction: {
                                    text: "1/6 ÷ 2",
                                }, 
                                backgroundImage: {
                                    file: "9.png"
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
                            fraction: {
                                font: 'default',
                                size: {
                                    integer: 'medium',
                                    fraction: 'mediumSmall'
                                },
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
                        title: "[<g>1.] Which pieces have an answer < one whole?",
                        correctIndex: 1,
                        paragraph: [
                            "Top right, bottom le{f}t, and center",
                            "Top right, bottom right, and {c}enter",
                            "Midd{l}e left, middle top, and center",
                        ],
                    },
                    {
                        title: "[<g>2.] True or false: 2 [<f>5/6] is the difference of the middle top piece.",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Tru{e}",
                            "F{a}lse",
                        ],
                    },
                    {
                        title: "[<g>3.] What is the product of the piece with a star?",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "2 [<f>1/12] {S}",
                            "2 [<f>5/12] {O}",
                            "[<f>24/12] {A}",
                        ],
                    },
                    {
                        title: "[<g>4.] Which two pieces have whole-number answers?",
                        correctIndex: 1,
                        paragraph: [
                            "The bottom {r}ight, and the top left",
                            "The bottom left, and t{h}e middle bottom",
                            "The middle bottom, and the middle to{p}",
                        ],
                    },
                ],  
                code: {
                    answer: "CASH",
                    userArray: ["","","",""]
                },
            },
        },

        // ⭐ queen bella
        {
            info: {
                type: 'challenge',
                title: "Throne Room",
                asset: "queen-bella.png",
                state: "incomplete",
                hint: {
                    text: "Look at the coordinate plane, then use the secret code to type in the answers below. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Graph on a Coordinate Plane",
                    commonCore: [
                        "5.G.A.1",
                        "5.G.A.2",
                    ],
                }
            },

            intro: {
                character: "Queen Bella",
                asset: "queen-bella.png",
                dialogue : {
                    incomplete: "It seems Gustav isn't acting alone \u2014 he's brought friends. I need you to track their movements on a coordinate plane, but beware, the data is encoded for secrecy! Are you up to the challenge?",
                    complete: "My dear Dingo Punks, your help has been immeasurable! I wish you well."
                },
            },

            activity: {
                info: {
                    type: "dynamic",
                    asset: "queen-bella.png",
                },
                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                coordinatePlane: {
                                    key: [
                                        {
                                            color: 'salmon',
                                            image: '',
                                            text: 'GUSTAV',
                                            coordinate: [4,5]
                                        },
                                        {
                                            color: 'gold',
                                            image: '',
                                            text: 'ALFRED',
                                            coordinate: [1,3]
                                        },
                                        {
                                            color: 'teal',
                                            image: '',
                                            text: 'OSWALD',
                                            coordinate: [7,5]
                                        },
                                        {
                                            color: 'blue',
                                            image: '',
                                            text: 'BERTHA',
                                            coordinate: [1,1]
                                        }
                                    ]
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "2%",
                                rotate: "-2deg",
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
                                translateY: "0%",
                                rotate: "3deg",
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
                            width: "percent50",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        
                    },
                    contentArray: [
                        {
                            key: {
                                font: 'patterns',
                                size: 'small',
                                align: 'left',
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
                            dimension: {
                                width: "full",
                                height: "full",
                            }
                            
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
                        title: "[<g>1.] Which dot is at (1,1)?",
                        word: "[B]ERTHA",
                    },
                    {
                        title: "[<g>2.] Which dot is at (7,5)?",
                        word: "[O]SWALD",
                    },
                    {
                        title: "[<g>3.] Which dot is at (1,3)?",
                        word: "A[L]FRED",
                    },
                    {
                        title: "[<g>4.] Which dot is at (4,5)?",
                        word: "GUS[T]AV",
                    },
                ],
                code: {
                    answer: "BOLT",
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