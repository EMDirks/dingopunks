let cutscene = {

    intro: [
        {
            text: 'Alert! Alert! Calling all Puzzle Punks!',
            textDelay: 500,
            textStyle: 'alert',
            characterSprite: {
                name: "EMERGENCY ALERT",
            },
            backgroundImage1: {
                path: 'jjcrispy-alert.png',
                scope: 'global',
                animation: {
                    start: 'transform-scale_0__opacity_0',
                    end: 'transform-scale_1__opacity_1',
                    duration: 'transition-transform-200ms__opacity-200ms',
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Stand by for a message from your handsome leader, J.J. Crispy.',
            textStyle: 'alert',
            characterSprite: {
                name: "EMERGENCY ALERT",
            },
            backgroundImage1: {
                path: 'jjcrispy-alert.png',
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Puzzle Punks! A tricky task awaits you this evening.',
            textDelay: 500,
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-closeup.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                },
                
            },
            backgroundImage1: {
                path: 'jjcrispy-alert.png',
                animation: {
                    start: 'opacity-1',
                    end: 'opacity-0',
                    duration: 'transition-opacity-1000ms',
                },
            },
            backgroundColor: 'background-color-black'
        },    
        {
            text: 'The sun has almost set at Candlewick\'s Farm...',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-closeup.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-500ms',
                },

            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
                animation: {
                    start: 'transform-scale_1_1__opacity_0',
                    end: 'transform-scale_1__opacity_1',
                    duration: 'transition-transform-500ms__opacity-500ms',
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: '...but the workers haven\'t yet finished the harvest.',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-1.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_-100_0',
                    end: 'transform-translate_-25_0',
                    duration: 'transition-transform-500ms',
                },
            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Use your codebreaking skills to help, but move quickly!',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-3.png',
                scope: 'global',
            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'For when the sun sets, from somewhere deep within the Undermurk...',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-2.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_-25_0',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-1000ms',
                },
            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: '...the Fallcrawlers will emerge. And they\'ll eat all the crops!',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-2.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-2000ms',
                },
            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
                animation: {
                    start: 'opacity-1',
                    end: 'opacity-0',
                    duration: 'transition-opacity-1000ms',
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Not just the crops, Puzzle Punks.',
            textDelay: 300,
            textStyle: 'badguy',
            characterSprite: {
                name: "FALLCRAWLERS",
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
                animation: {
                    start: 'transform-translate_0_100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                },
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'We\'ll eat YOU too! Hahaha!',
            textStyle: 'badguy',
            characterSprite: {
                name: "FALLCRAWLERS",
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Hurry, Puzzle Punks! You must crack the codes before the harvest is ruined.',
            textDelay: 500,
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-3.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                }, 
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-300ms',
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Sunset is nearly here...',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-3.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-2000ms',
                },
            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
                animation: {
                    start: 'opacity-0',
                    end: 'opacity-1',
                    duration: 'transition-opacity-1000ms',
                },
            },
            backgroundColor: 'background-color-black'
        },
    ], 
 
    outro: [
        {
            text: 'Well done, Puzzle Punks! Well done!',
            textDelay: 700,
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-3.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-500ms',
                    delay: 500
                },
            },
            backgroundImage2: {
                path: 'main.png',
                scope: 'local',
                animation: {
                    start: 'opacity-0',
                    end: 'opacity-1',
                    duration: 'transition-opacity-1000ms',
                },
            },    
            backgroundColor: 'background-color-black'
        },
        {
            text: 'The Fallcrawlers aren\'t stealing any crops tonight!',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-2.png',
                scope: 'global',
            },  
            backgroundImage2: {
                path: 'main.png',
                scope: 'local',
            }, 
            backgroundColor: 'background-color-black'                 
        },
        {
            text: 'Come aboard! Your mission is complete.',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-2.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-1000ms',
                },
            },
            backgroundImage1: {
                path: 'ship.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_-100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-1000ms',
                },
            },    
            backgroundImage2: {
                path: 'main.png',
                scope: 'local',
                animation: {
                    start: 'opacity-1',
                    end: 'opacity-0',
                    duration: 'transition-opacity-1000ms',
                },
            }, 
            backgroundColor: 'background-color-black'
        },
    ],

    fail: [
        {
            text: 'Yum, yum, yum!',
            textStyle: 'badguy',
            textDelay: 550,
            characterSprite: {
                name: "FALLCRAWLERS",
                path: 'badguy.png',
                scope: 'local',
                animation: {
                    start: 'transform-translate_0_100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'I bet you\'d taste great in a pumpkin pie...',
            textStyle: 'badguy',
            characterSprite: {
                name: "FALLCRAWLERS",
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-black'
        },
    ],

}

let localAssetArrays = {
    priority: {
        low: {
            onPinInput: {
                asset: [
                    'preview-logo', 
                ],
                delay: 0,
            },
            onCharacterSelect: {
            asset: [
                'resource/the-hasty-harvest/assets/cutscene/main.png',  
                'resource/the-hasty-harvest/assets/cutscene/badguy.png', 
            ],
            delay: 1200,
            },
            onCutsceneStart: {
            asset: [
                'resource/the-hasty-harvest/assets/activity/node/candlewicks-cart.png',
                'resource/the-hasty-harvest/assets/activity/node/applegrim-orchard.png',
                'resource/the-hasty-harvest/assets/activity/node/camp-gnomad.png',
                'resource/the-hasty-harvest/assets/activity/node/mallow-maze.png',
                'resource/the-hasty-harvest/assets/activity/node/frantic-factory.png',
                'resource/the-hasty-harvest/assets/activity/character/candlewick.png',
                'resource/the-hasty-harvest/assets/activity/character/crispin-the-cider-sage.png',
                'resource/the-hasty-harvest/assets/activity/character/the-gnomads.png',
                'resource/the-hasty-harvest/assets/activity/character/mabel-mallow.png',
                'resource/the-hasty-harvest/assets/activity/character/hollow-jack.png',
            ],
            delay: 1000,
            },
            onGameFinish: {
            asset: [
            ],
            delay: 200,
            },
        }
    }
}
  
