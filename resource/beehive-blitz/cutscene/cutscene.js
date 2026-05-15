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
            text: 'It\'s finally spring, Dingo Punks!',
            textDelay: 500,
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'I just hope you\'re not afraid of bees...',
            characterSprite: {
                name: "J.J. DINGO",
                path: 'jjcrispy-closeup.png',
                scope: 'global',
                
            },
            backgroundColor: 'background-color-black'
        },  
        {
            text: '...because Bumbleburg Hive needs your help.',
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'You see, its workers haven\'t finished collecting nectar from the nearby valley.',
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'And in less than an hour, a terrible storm is blowing in.',
            characterSprite: {
                name: "J.J. DINGO",
                path: 'jjcrispy-2.png',
                scope: 'global',
            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'His name is Gustav, and he hates EVERYTHING. Especially spring.',
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'We can\'t let him destroy the valley!',
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'Can you hear the thunder, Dingo Punks?',
            textDelay: 300,
            textStyle: 'badguy',
            characterSprite: {
                name: "GUSTAV",
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
            text: 'I\'ll see you soon!',
            textStyle: 'badguy',
            characterSprite: {
                name: "GUSTAV",
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Well \u2014 don\'t just sit there! Go help the hive before Gustav arrives.',
            textDelay: 500,
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'It\'s almost too late...',
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'I knew I could count on you, Dingo Punks!',
            textDelay: 700,
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'Thanks to you, Bumbleburg Hive is going to be just fine.',
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'Quickly now, come aboard! Let\'s get going.',
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'Hah! Too slow, Dingo Punks.',
            textStyle: 'badguy',
            textDelay: 550,
            characterSprite: {
                name: "GUSTAV",
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
            text: 'Want to know what 300 million volts feels like?',
            textStyle: 'badguy',
            characterSprite: {
                name: "GUSTAV",
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-black'
        },
    ],

};

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
                'resource/beehive-blitz/assets/cutscene/main.png',  
                'resource/beehive-blitz/assets/cutscene/badguy.png',
            ],
            delay: 1200,
            },
            onCutsceneStart: {
            asset: [
                'resource/beehive-blitz/assets/activity/node/basil-rabbit.png',
                'resource/beehive-blitz/assets/activity/node/riff-wingman.png',
                'resource/beehive-blitz/assets/activity/node/sunny-snap.png',
                'resource/beehive-blitz/assets/activity/node/grumblegrub.png',
                'resource/beehive-blitz/assets/activity/node/queen-bella.png',
                'resource/beehive-blitz/assets/activity/character/basil-rabbit.png',
                'resource/beehive-blitz/assets/activity/character/riff-wingman.png',
                'resource/beehive-blitz/assets/activity/character/sunny-snap.png',
                'resource/beehive-blitz/assets/activity/character/grumblegrub.png',
                'resource/beehive-blitz/assets/activity/character/queen-bella.png',
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