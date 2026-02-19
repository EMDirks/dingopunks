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
            text: 'Bad news, Puzzle Punks.',
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
            text: 'It seems you\'ve been kidnapped by a yeti...',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-closeup.png',
                scope: 'global',
                
            },
            backgroundColor: 'background-color-black'
        },     
        {
            text: '...and locked inside her ice cave!',
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
            text: 'Luckily, the beast is asleep right now.',
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
            text: 'But it\'s almost morning, and she\'s waking up soon.',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-2.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_-25_0',
                    end: 'transform-translate_-25_0',
                },
            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'And YOU are on the menu for breakfast!',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-3.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_-25_0',
                    end: 'transform-translate_0_0',
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
            text: 'In fact, I already hear her stirring...',
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
                    start: 'opacity-1',
                    end: 'opacity-0',
                    duration: 'transition-opacity-1000ms',
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Arggh blarble graaaaagggg!',
            textDelay: 300,
            textStyle: 'badguy',
            characterSprite: {
                name: "YETI",
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
            text: 'Braaak ugooor arg kragggg!',
            textStyle: 'badguy',
            characterSprite: {
                name: "YETI",
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Hurry! Your only hope is to distract her with something tastier than yourself.',
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
            text: 'My advice? Go chat with the other prisoners. Try to cook something up.',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-1.png',
                scope: 'global',
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
        {
            text: 'Maybe some candied yams? Yetis love yams.',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-0.png',
                scope: 'global',
            },
            backgroundImage1: {
                path: 'main.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-black'
        },  
        {
            text: 'And good luck. You\'re going to need it...',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-0.png',
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
            },
            backgroundColor: 'background-color-black'
        },
    ], 
    
    outro: [
        {
            text: 'You actually did it! Those are some NICE yams.',
            textDelay: 700,
            characterSprite: {
                name: "J.J. CRISPY",
            },
            backgroundImage2: {
                path: 'reward.png',
                scope: 'local',
                animation: {
                    start: 'transform-scale_0__opacity_0',
                    end: 'transform-scale_1__opacity_1',
                    duration: 'transition-transform-500ms__opacity-500ms',
                },
            },    
            backgroundColor: 'background-color-black'
        },
        {
            text: 'This dish will definitely distract the yeti long enough to make your escape.',
            characterSprite: {
                name: "J.J. CRISPY",
            },  
            backgroundImage2: {
                path: 'reward.png',
                scope: 'local',
            }, 
            backgroundColor: 'background-color-black'                 
        },
        {
            text: 'Now is your chance \u2014 let\'s get out of here!',
            characterSprite: {
                name: "J.J. CRISPY",
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
                path: 'reward.png',
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
            text: 'Arrrrbleggg grroooop skarrg!',
            textStyle: 'badguy',
            textDelay: 550,
            characterSprite: {
                name: "YETI",
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
            text: 'Hruuuggglep ugraash klog gurambooo!',
            textStyle: 'badguy',
            characterSprite: {
                name: "YETI",
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
                'resource/the-yeti-and-the-yam/assets/cutscene/main.png',  
                'resource/the-yeti-and-the-yam/assets/cutscene/badguy.png', 
            ],
            delay: 1200,
            },
            onCutsceneStart: {
            asset: [
                'resource/the-yeti-and-the-yam/assets/activity/node/dr-seraphina.png',
                'resource/the-yeti-and-the-yam/assets/activity/node/fishbeard.png',
                'resource/the-yeti-and-the-yam/assets/activity/node/pippo-fizzlepop.png',
                'resource/the-yeti-and-the-yam/assets/activity/node/tater-drift.png',
                'resource/the-yeti-and-the-yam/assets/activity/node/the-frozen-knight.png',
                'resource/the-yeti-and-the-yam/assets/activity/character/dr-seraphina.png',
                'resource/the-yeti-and-the-yam/assets/activity/character/fishbeard.png',
                'resource/the-yeti-and-the-yam/assets/activity/character/pippo-fizzlepop.png',
                'resource/the-yeti-and-the-yam/assets/activity/character/tater-drift.png',
                'resource/the-yeti-and-the-yam/assets/activity/character/the-frozen-knight.png',
            ],
            delay: 1000,
            },
            onGameFinish: {
            asset: [
                'resource/the-yeti-and-the-yam/assets/cutscene/reward.png',     
            ],
            delay: 200,
            },
        }
    }
}