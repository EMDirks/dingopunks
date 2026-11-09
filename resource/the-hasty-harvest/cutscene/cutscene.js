let cutscene = {

    intro: [
        {
            text: 'Alert! Alert! Calling all Dingo Punks!',
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
                    startLoop: 'dingo-punks-loop',
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Stand by for a message from your handsome leader, J.J. Dingo.',
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
            text: 'Dingo Punks! A tricky task awaits you this evening.',
            textDelay: 500,
            characterSprite: {
                name: "J.J. DINGO",
                popOnSpeak: true,
                path: 'jjcrispy-closeup.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                    sfx: 'cutscene.moveIn',
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
                name: "J.J. DINGO",
                popOnSpeak: true,
                path: 'jjcrispy-closeup.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-300ms',
                    afterText: true,
                    sfx: 'cutscene.move',
                },

            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
                animation: {
                    start: 'transform-scale_1_1__opacity_0',
                    end: 'transform-scale_1__opacity_1',
                    duration: 'transition-transform-500ms__opacity-500ms',
                    afterText: true,
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: '...but the workers haven\'t yet finished the harvest.',
            textDelay: 300,
            characterSprite: {
                name: "J.J. DINGO",
                popOnSpeak: true,
                path: 'jjcrispy-1.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_-100_0',
                    end: 'transform-translate_-25_0',
                    duration: 'transition-transform-300ms',
                    sfx: 'cutscene.moveIn',
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
                name: "J.J. DINGO",
                popOnSpeak: true,
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
            text: 'When the sun sets, from somewhere deep within the Undermurk...',
            textDelay: 300,
            characterSprite: {
                name: "J.J. DINGO",
                popOnSpeak: true,
                path: 'jjcrispy-2.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_-25_0',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                    sfx: 'cutscene.move',
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
                name: "J.J. DINGO",
                popOnSpeak: true,
                path: 'jjcrispy-2.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-300ms',
                    afterText: true,
                    sfx: 'cutscene.move',
                },
            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
                animation: {
                    start: 'opacity-1',
                    end: 'opacity-0',
                    duration: 'transition-opacity-1000ms',
                    afterText: true,
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Not just the crops, Dingo Punks.',
            textDelay: 300,
            textStyle: 'badguy',
            characterSprite: {
                name: "FALLCRAWLERS",
            },
            backgroundImage1: {
                popOnSpeak: true,
                path: 'badguy.png',
                scope: 'local',
                animation: {
                    start: 'transform-translate_0_100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                    sfx: 'cutscene.moveBadguyIn',
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
                popOnSpeak: true,
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Hurry, Dingo Punks! You must crack the codes before the harvest is ruined.',
            textDelay: 500,
            characterSprite: {
                name: "J.J. DINGO",
                popOnSpeak: true,
                path: 'jjcrispy-3.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                    sfx: 'cutscene.moveIn',
                }, 
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-300ms',
                    sfx: 'cutscene.moveBadguy',
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
            text: 'Sunset is nearly here...',
            characterSprite: {
                name: "J.J. DINGO",
                popOnSpeak: true,
                path: 'jjcrispy-3.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-300ms',
                    afterText: true,
                    sfx: 'cutscene.move',
                },
            },
            backgroundImage2: {
                path: 'main.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-black'
        },
    ], 
 
    outro: [
        {
            text: 'Well done, Dingo Punks! Well done!',
            textDelay: 700,
            characterSprite: {
                name: "J.J. DINGO",
                popOnSpeak: true,
                path: 'jjcrispy-3.png',
                scope: 'global',
                animation: {
                    afterReveal: true,
                    start: 'transform-translate_0_100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                    delay: 500,
                    sfx: 'cutscene.moveIn',
                },
            },
            backgroundImage2: {
                path: 'main.png',
                scope: 'local',
                animation: {
                    start: 'transform-scale_0__opacity_0',
                    end: 'transform-scale_1__opacity_1',
                    duration: 'transition-transform-200ms__opacity-200ms',
                    startLoop: 'background-the-hasty-harvest',
                },
            },    
            backgroundColor: 'background-color-black'
        },
        {
            text: 'The Fallcrawlers aren\'t stealing any crops tonight!',
            characterSprite: {
                name: "J.J. DINGO",
                popOnSpeak: true,
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
                name: "J.J. DINGO",
                popOnSpeak: true,
                path: 'jjcrispy-2.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-300ms',
                    afterText: true,
                    sfx: 'cutscene.move',
                },
            },
            backgroundImage1: {
                path: 'ship.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_-100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                    afterText: true,
                    delay: 300,
                },
            },    
            backgroundImage2: {
                path: 'main.png',
                scope: 'local',
                animation: {
                    start: 'opacity-1',
                    end: 'opacity-0',
                    duration: 'transition-opacity-1000ms',
                    afterText: true,
                },
            }, 
            backgroundColor: 'background-color-black'
        },
    ],

    fail: [
        {
            text: 'Yum, yum, yum!',
            textStyle: 'badguy',
            textDelay: 700,
            characterSprite: {
                name: "FALLCRAWLERS",
                popOnSpeak: true,
                path: 'badguy.png',
                scope: 'local',
                animation: {
                    afterReveal: true,
                    start: 'transform-translate_0_100',
                    end: 'transform-translate_0_0',
                    duration: 'transition-transform-300ms',
                    delay: 500,
                    sfx: 'cutscene.moveBadguyFail',
                    startLoop: 'background-creepy',
                },
            },
            backgroundImage2: {
                path: 'main.png',
                scope: 'local',
                animation: {
                    start: 'transform-scale_0__opacity_0',
                    end: 'transform-scale_1__opacity_1',
                    duration: 'transition-transform-200ms__opacity-200ms',
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'I bet you\'d taste great in a pumpkin pie...',
            textStyle: 'badguy',
            characterSprite: {
                name: "FALLCRAWLERS",
                popOnSpeak: true,
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundImage2: {
                path: 'main.png',
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
  
