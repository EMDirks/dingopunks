const resource =  {

    info: {
        title: "The Hasty Harvest",
        path: "the-hasty-harvest",
        logo: "resource/the-hasty-harvest/assets/branding/math/all-standards/thumbnail-4th-grade.png",
        timerLabel: "TIME TO SUNSET"
    },

    challengeArray: [


        // ⭐ candlewick's cart
        {

            info: {
                type: 'challenge',
                title: "Candlewick's Cart",
                asset: "candlewicks-cart.png",
                state: "incomplete",
                hint: {
                    text: "Read each word problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Multi-Step Word Problems With All Four Operations",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Operations and Algebraic Thinking',
                            standard: '3.OA.D.8',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Operations and Algebraic Thinking',
                            standard: '4.OA.A.3',
                        }
                    ],
                }
            },

            intro: {
                character: "Candlewick",
                asset: "candlewick.png",
                dialogue : {
                    incomplete: "Howdy, friend! Welcome to my farm. I have so many problems to take care of, but it's almost sunset. I'm all out of time! Think you can help?",
                    complete: "Enjoy your visit to the farm! Feel free to take a look around, but don't linger after sunset..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "candlewicks-cart.png",
                },

                blockArray: [
                    {
                        contentArray: [
                            {
                                image: {
                                    type: "theme",
                                    file: "8.png",
                                },
                            },
                            {
                                title: {
                                    text: "[<u>Fall Saplings]",
                                },
                                passage: {
                                    text: "Candlewick decided to plant 4 different types of saplings this fall: cosmic carrots, bewitched beans, twinkling tomatoes, and magic maize. She planted 5 rows of each crop. Each row has 6 saplings.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "0%",
                                rotate: "-1deg",
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
                                    text: "[<u>Frostwick Candles]",
                                },
                                passage: {
                                    text: "Candlewick can place magical Frostwick candles in the fields to protect her crops from freezing. The farm has 20 fields, with each field using up 8 Frostwick candles per month. The winter season is 4 months long.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "5%",
                                translateY: "-6%",
                                rotate: "3deg",
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
                                    text: "[<u>Ember Dust]",
                                },
                                passage: {
                                    text: "Candlewick invented Ember Dust, a special powder that makes candles last longer. Each pinch of Ember Dust allows a candle to stay lit for 3 days, but Candlewick only has 10 pinches of dust.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "12%",
                                translateY: "-15%",
                                rotate: "-2deg",
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
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] How many fall saplings were planted in all?",
                        correctIndex: 2,
                        paragraph: [
                            "34 fall sa{p}lings",
                            "110 fall sapli{n}gs",
                            "120 {f}all saplings",
                        ],
                    },

                    {
                        title: "[<g>2.] If Candlewick plants 15 fall saplings every night, how many nights will it take to plant all of them?",
                        columns: 2,
                        correctIndex: 2,
                        paragraph: [
                            "13 night{s}",
                            "4 {n}ights",
                            "8 n{i}ghts",
                            "15 nigh{t}s"
                        ]
                    },

                    {
                        title: "[<g>3.] How many Frostwick Candles are needed for the entire winter season?",
                        answerType: "numerals",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "480 {W}",
                            "640 {R}",
                            "64 {I}",
                            "164 {F}"  
                        ]
                    },

                    {
                        title: "[<g>4.] If Candlewick uses Ember Dust to keep a single candle lit for 12 days, how much dust will be left?",
                        columns: 2,
                        correctIndex: 0,
                        paragraph: [
                            "6 pinch{e}s",
                            "7 p{i}nches",
                            "30 {p}inches",
                            "3 pinche{s}" 
                        ]
                    },

                ],  

                code: {
                    answer: "FIRE",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ applegrim orchard
        {

            info: {
                type: 'challenge',
                title: 'Applegrim Orchard',
                asset: "applegrim-orchard.png",
                state: "incomplete",
                hint: {
                    text: "Find the area and perimeter of each figure, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Area and Perimeter",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Measurement and Data',
                            standard: '3.MD.C.5',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Measurement and Data',
                            standard: '3.MD.C.7',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Measurement and Data',
                            standard: '3.MD.C.7b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Measurement and Data',
                            standard: '3.MD.D.8',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Measurement and Data',
                            standard: '4.MD.A.3',
                        }
                    ],
                }
            },

            intro: {
                character: "Stefan Sage",
                asset: "crispin-the-cider-sage.png",
                dialogue : {
                    incomplete: "In fields so vast, where all the crops grow, area and perimeter is what I must know! To calculate both is a challenge, you see. Will you lend your wisdom to help this old tree?",
                    complete: "In the forest deep, secrets softly sleep. The shadows whisper; the old trees weep..."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "applegrim-orchard.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "Applegrim Orchard",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 10,
                                        height: 5,
                                    },
                                    label: {
                                        top: "14 miles",
                                        left: "7 miles",    
                                        right: "offset"                               
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-14%",
                                translateY: "-22%",
                                rotate: "1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Ghostly Grove",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 5,
                                        height: 5,
                                    },
                                    label: {
                                        right: '14 feet',
                                        left: 'offset'
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "4%",
                                rotate: "-1deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Gordon's Gourd Field",
                        },
                        contentArray: [
                            {
                                figure: {
                                    measurement: {
                                        width: 8,
                                        height: 5,
                                    },
                                    label: {
                                        bottom: '63 yd',
                                        right: '45 yd',
                                        left: 'offset'
                                    },
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "-19%",
                                rotate: "-2deg",
                            }
                        }
                    },

                    {
                        tag: {
                            text: "Mushroom Patch",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "Candlewick has a rectangular mushroom patch where she grows different varieties of mushrooms. The patch has an area of 600 square meters and a length of 20 meters.",
                                }, 
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "20%",
                                translateY: "12%",
                                rotate: "-4deg",
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
                            width: "percent35",
                            height: "auto",
                        },
                        flexbox: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                    },
                    contentArray: [
                        {
                            figure: {
                                border: {
                                    width: 'default'
                                },
                                background: {
                                    color: 'gold',
                                }
                            },  
                            cell: {
                                border: {
                                    width: 'none'
                                },
                                dimension: {
                                    size: 'default',
                                }
                            }, 
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            passage: {
                                font: 'default',
                                size: 'small',
                                align: 'left'
                            },
                            dimension: {
                                width: "full",
                                height: "full",
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
                        title: "[<g>1.] What is the perimeter of Applegrim Orchard?",
                        correctIndex: 2,
                        paragraph: [
                            "98 mile{s}",
                            "28 {m}iles",
                            "42 mi{l}es",
                        ],
                    },

                    {
                        title: "[<g>2.] What is the area of Gordon's Gourd Field?",
                        correctIndex: 0,
                        paragraph: [
                            "2,835 square y{a}rds",
                            "216 square yar{d}s",
                            "108 square {y}ards",
                        ],
                    },

                    {
                        title: "[<g>3.] If Ghostly Grove is a perfect square, then:",
                        correctIndex: 2,
                        paragraph: [
                            "Its ar{e}a is 196 ft<sup>2</sup>, and its perimeter is 28 ft",
                            "Its area is 194 ft<sup>2</sup>, and its perime{t}er is 56 ft",
                            "Its area is 196 ft<sup>2</sup>, a{n}d its perimeter is 56 ft",
                        ],
                    },

                    {
                        title: "[<g>4.] The mushroom patch has:",
                        correctIndex: 1,
                        paragraph: [
                            "A per{i}meter of 50 meters",
                            "A wi{d}th of 30 meters",
                            "A wid{t}h of 20 meters",
                        ],
                    },

                ],  

                code: {
                    answer: "LAND",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ camp gnomad
        {

            info: {
                type: 'challenge',
                title: "Camp Gnomad",
                asset: "camp-gnomad.png",
                state: "incomplete",
                hint: {
                    text: "Solve each math problem, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Computation With All Four Operations",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.B.4',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.B.5',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.B.6',
                        },
                    ],
                }
            },

            intro: {
                character: "The Gnomads",
                asset: "the-gnomads.png",
                dialogue : {
                    incomplete: "We're fixin' to make a HUGE scarecrow filled with ants to keep those Fallcrawlers away! It's a big job, and we need lots of supplies. Can you help us figure out what we need?",
                    complete: "We sure hope this scarecrow works. It's gotta work, right?"
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "mallow-maze.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "A",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "16 × 2",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "9%",
                                translateY: "-30%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "C",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "55 ÷ 5",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-2%",
                                translateY: "-10%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "D",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "84,293 + 76,829",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "2%",
                                translateY: "-25%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "H",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "50,000 - 46,487",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "11%",
                                translateY: "-8%",
                                rotate: "-2deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "I",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "18 × 99",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "15%",
                                translateY: "35%",
                                rotate: "3deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "L",
                        },
                        contentArray: [
                            {
                                passage: {
                                    text: "96 ÷ 8",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-5%",
                                translateY: "-2%",
                                rotate: "3deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>A] = bales of hay<br> \
                                            [<s>D] = number of fire ants<br> \
                                            [<s>I] = feet of lumber",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "3%",
                                translateY: "40%",
                                rotate: "-1deg",
                            }
                        }
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text:   "[<s>C] = pounds of metal<br> \
                                            [<s>H] = feet of electrical wire<br> \
                                            [<s>L] = pounds of stone",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "55%",
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
                        tag: {
                            font: 'symbols',
                            size: 'medium',
                            align: 'left',
                            padding: 'defaultNoBottom'
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
                                width: "full",
                                height: "full",
                            },
                            passage: {
                                font: 'default',
                                size: 'mediumSmall',
                                align: 'center'
                            },
                            misc: {
                                padding: "default"
                            },
                        }, 
                        { 
                            dimension: {
                                width: "full",
                                height: "full",
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
                    type: "multiple-choice"
                },

                contentArray: [

                    {
                        title: "[<g>1.] How much hay and metal are needed?",
                        correctIndex: 2,
                        paragraph: [
                            "256 bales of hay, and 11 pounds {o}f metal",
                            "32 bales of ha{y}, and 10 pounds of metal",
                            "32 {b}ales of hay, and 11 pounds of metal",
                        ],
                    },

                    {
                        title: "[<g>2.] How many fire ants does the scarecrow require?",
                        correctIndex: 0,
                        paragraph: [
                            "161,122 fire {a}nts",
                            "91,975 fire a{n}ts",
                            "7,464 {f}ire ants",
                        ],
                    },

                    {
                        title: "[<g>3.] Does the scarecrow need more metal or stone?",
                        correctIndex: 1,
                        paragraph: [
                            "It needs more {m}etal",
                            "It needs mo{r}e stone",
                            "It nee{d}s equal amounts of both",
                        ],
                    },

                    {
                        title: "[<g>4.] Does the scarecrow require more feet of lumber than electrical wire?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "{Y}es",
                            "{N}o",
                        ],
                    },

                ],  

                code: {
                    answer: "BARN",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ frantic factory
        {

            info: {
                type: 'challenge',
                title: 'Frantic Factory',
                asset: "frantic-factory.png",
                state: "incomplete",
                hint: {
                    text: "Look at the shapes and number lines, then answer the questions to fill in the crossword. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    topic: "Fractions of Shapes and Number Lines",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2a',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.2b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3b',
                        },
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations Fractions',
                            standard: '3.NF.A.3c',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.A.1',
                        },
                        {
                            subject: 'Math',
                            grade: [4],
                            category: 'Number and Operations Fractions',
                            standard: '4.NF.A.2',
                        }
                    ],
                }
            },

            intro: {
                character: "Hollow Jack",
                asset: "hollow-jack.png",
                dialogue : {
                    incomplete: "I am Hollow Jack. I put veggies into crates. I must fill up these crates to match certain fractions. But I am overworked. No time! You must help.",
                    complete: "No trespassing after dark. No trespassing after dark. No trespassing after dark."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    asset: "frantic-factory.png",
                },

                blockArray: [
                    
                    {
                        tag: {
                            text: "Gourd Crate",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 5,
                                        dot: 3
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    }
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "30%",
                                rotate: "-2deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "Carrot Crate",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 3,
                                        dot: 3
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-15%",
                                translateY: "-40%",
                                rotate: "3deg",
                            },
                        }
                    },
                    {
                        tag: {
                            text: "Onion Crate",
                        },
                        contentArray: [
                            {
                                numberLine: {
                                    measurement: {
                                        fraction: 4,
                                        dot: 2
                                    },
                                    label: {
                                        start: '0',
                                        end: '1',
                                    },
                                },
                                dimension: {
                                    width: "full",
                                    height: "full",
                                }
                            }
                        ],
                        style: {
                            transform: {
                                translateX: "-10%",
                                translateY: "-20%",
                                rotate: "0deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Pumpkin Crate",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_2-3.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "30%",
                                rotate: "-4deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Corn Crate",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "circle_4-6.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "0%",
                                translateY: "45%",
                                rotate: "1deg",
                            }
                        }
                    },
                    {
                        tag: {
                            text: "Kale Crate",
                        },
                        contentArray: [
                            {
                                image: {
                                    type: "shape-partition",
                                    file: "rectangle_hor_4-6.svg",
                                },
                            },
                        ],
                        style: {
                            transform: {
                                translateX: "-25%",
                                translateY: "15%",
                                rotate: "1deg",
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
                            label: {
                                font: 'default',
                                size: 'tiny'
                            },
                            dimension: {
                                width: "percent70",
                                height: "full",
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
                        'A. Are the corn and kale crates [<u>equal] or [<u>unequal]?',
                        'B. Does the onion crate equal [<f>1/2] ? (YES/NO)',
                        'C. Is the gourd crate divided into [<u>fourths] or [<u>fifths]?',     
                        'D. Which vegetable\'s crate is equal to one whole? ',
                        
                    ],
                    puzzle: [
                        ["0","(B)Y","(A)4E","S","0","0","(C)F"],
                        ["0","0","Q","0","0","0","I"],
                        ["0","0","U","0","0","0","F"],
                        ["0","(D)1C","2A","R","R","O","T"],
                        ["0","0","L","0","0","0","H"],
                        ["0","0","0","0","0","0","3S"],
                    ]
                },  

                code: {
                    answer: "CASE",
                    userArray: ["","","",""]
                },

            }

        },

        // ⭐ mallow maze
        {

            info: {
                type: 'challenge',
                title: "Mallow Maze",
                asset: "mallow-maze.png",
                state: "incomplete",
                hint: {
                    text: "Put together the puzzle pieces, then answer the multiple-choice questions. The yellow letters, in order, are the answer.",
                    isUsed: false
                },
                education: {
                    subject: "Math",
                    topic: "Round to Any Place",
                    commonCore: [
                        {
                            subject: 'Math',
                            grade: [3],
                            category: 'Number and Operations in Base Ten',
                            standard: '4.NBT.A.3',
                        },
                    ],
                }
            },

            intro: {
                character: "Mabel Mallow",
                asset: "mabel-mallow.png",
                dialogue : {
                    incomplete: "I'm not safe out here with those Fallcrawlers lurking about! I need to get to the barn, but I don't know the way. Can you help me put together the pieces of my map?",
                    complete: "Oh my, thank you so much! I'm locking myself in this barn an not leaving 'til morning."
                },
            },

            activity: {

                info: {
                    type: "dynamic",
                    functionality: "drag-and-drop",
                    asset: "camp-gnomad.png",
                },

                blockArray: [
                    
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "19[<u>0],205",
                                }, 
                                backgroundImage: {
                                    file: "10.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "2,989",
                                }, 
                                backgroundImage: {
                                    file: "11.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "13,493",
                                }, 
                                backgroundImage: {
                                    file: "12.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "15,[<u>0]73",
                                }, 
                                backgroundImage: {
                                    file: "13.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "542,657",
                                }, 
                                backgroundImage: {
                                    file: "14.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "12,149",
                                }, 
                                backgroundImage: {
                                    file: "15.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "1[<u>8]7,453",
                                }, 
                                backgroundImage: {
                                    file: "16.png"
                                }
                            },
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "8,402,671",
                                }, 
                                backgroundImage: {
                                    file: "17.png"
                                }
                            }
                        ],
                    },
                    {
                        contentArray: [
                            {
                                passage: {
                                    text: "3,205",
                                }, 
                                backgroundImage: {
                                    file: "18.png"
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
                            passage: {
                                font: 'default',
                                size: 'medium',
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
                        title: "[<g>1.] Round the middle piece to the nearest 100,000.",
                        answerType: "numerals",
                        correctIndex: 2,
                        paragraph: [
                            "542,000 {L}",
                            "540,000 {B}",
                            "500,000 {T}",
                        ],
                    },

                    {
                        title: "[<g>2.] Round the left column to the underlined places.",
                        answerType: "numerals",
                        correctIndex: 0,
                        paragraph: [
                            "Top to bottom: 190,000 / 15,100 / 190,000 {E}",
                            "Top to bottom: 190,000 / 15,170 / 170,000 {A}",
                            "Top to bottom: 191,000 / 14,000 / 187,000 {I}",
                        ],
                    },

                    {
                        title: "[<g>3.] Two pieces don't include a dotted red path. Round both to the nearest 10,000. What did you find?",
                        columns: 2,
                        correctIndex: 1,
                        paragraph: [
                            "Both round {u}p",
                            "Both round dow{n}",
                        ],
                    },

                    {
                        title: "[<g>4.] Which two pieces best round to 3,000?",
                        correctIndex: 1,
                        paragraph: [
                            "The middl{e} top, and the middle right",
                            "The middle {t}op, and the bottom right",
                            "The top right, and the bottom {r}ight",
                        ],
                    },

                ],  

                code: {
                    answer: "TENT",
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


  