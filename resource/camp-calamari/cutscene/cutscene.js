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
            text: 'Ahoy, Dingo Punks!',
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
            text: 'I hope you brought a swimsuit, because we\'re heading to the beach.',
            characterSprite: {
                name: "J.J. DINGO",
                path: 'jjcrispy-closeup.png',
                scope: 'global',
                
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Welcome to Camp Calamari!',
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
            text: 'A place of friendship, smiles, and a great big secret.',
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
            text: 'You see, legend says there\'s treasure buried beneath the sand.',
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'But the secret is out, and the pirates are coming!',
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
            text: 'Called the Red Tide, they\'re known far and wide for their greed and cruelty.',
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
            text: 'Aye! Ye be a fool to stand between us and treasure.',
            textDelay: 300,
            textStyle: 'badguy',
            characterSprite: {
                name: "THE RED TIDE",
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
            text: 'That\'s the last mistake ye\'ll ever make, Dingo Punks.',
            textStyle: 'badguy',
            characterSprite: {
                name: "THE RED TIDE",
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Well, that doesn\'t sound good. Go help the counselors prepare the camp\'s defenses!',
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
            text: 'The Red Tide will be here soon...',
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
            text: 'Great work, Dingo Punks!',
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
            text: 'Those Red Tide pirates don\'t stand a chance.',
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
            text: 'Let\'s get you out of there! Your job is done.',
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
            text: 'Arr! We be here, Dingo Punks!',
            textStyle: 'badguy',
            textDelay: 550,
            characterSprite: {
                name: "THE RED TIDE",
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
            text: 'This treasure is ours!',
            textStyle: 'badguy',
            characterSprite: {
                name: "THE RED TIDE",
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
                'resource/camp-calamari/assets/cutscene/main.png',  
                'resource/camp-calamari/assets/cutscene/badguy.png',
            ],
            delay: 1200,
            },
            onCutsceneStart: {
            asset: [
                'resource/camp-calamari/assets/activity/node/driftwood-dan.png',
                'resource/camp-calamari/assets/activity/node/chef-gumbo.png',
                'resource/camp-calamari/assets/activity/node/madame-mystica.png',
                'resource/camp-calamari/assets/activity/node/melodina.png',
                'resource/camp-calamari/assets/activity/node/fishbeard.png',
                'resource/camp-calamari/assets/activity/character/driftwood-dan.png',
                'resource/camp-calamari/assets/activity/character/chef-gumbo.png',
                'resource/camp-calamari/assets/activity/character/madame-mystica.png',
                'resource/camp-calamari/assets/activity/character/melodina.png',
                'resource/camp-calamari/assets/activity/character/fishbeard.png',
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