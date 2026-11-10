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
                    startLoop: 'music-dingo-punks-intro',
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
            text: 'Oh no... we\'ve got a SERIOUS situation. My cousin Frederick is back.',
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
            text: 'He just opened some kind of freaky funhouse \u2014 and he challenged us to escape it.',
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
            text: 'If we can, he\'ll finally admit I\'m smarter than him.',
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
            text: 'But if we fail, he\'ll lock us inside... forever!',
            characterSprite: {
                name: "J.J. DINGO",
                popOnSpeak: true,
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
            text: 'So now I need you, Dingo Punks. We have one chance to escape.',
            textDelay: 300,
            characterSprite: {
                name: "J.J. DINGO",
                popOnSpeak: true,
                path: 'jjcrispy-3.png',
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
            text: 'I\'m willing to risk your lives on it.',
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
            text: 'Step right up, kids. Welcome to Frederick\'s Funhouse!',
            textStyle: 'badguy',
            textDelay: 550,
            characterSprite: {
                name: "FREDERICK",
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
            text: 'Think you\'re clever enough to break free?',
            textStyle: 'badguy',
            characterSprite: {
                name: "FREDERICK",
            },
            backgroundImage1: {
                popOnSpeak: true,
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Well, think again. Ha ha ha!',
            textStyle: 'badguy',
            characterSprite: {
                name: "FREDERICK",
            },
            backgroundImage1: {
                popOnSpeak: true,
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Alright, Dingo Punks. Pull up your socks and ready your brains.',
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
            text: 'We\'re going in...',
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
            text: 'Hah! I knew I could count on you, Dingo Punks!',
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
                    startLoop: 'ambience-funhouse-fright',
                },
            },    
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Let\'s get outta this creepy place.',
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
            text: 'Come aboard! I think I\'m ready for a nap...',
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
            text: 'Ladies and gentlemen, your time is up!',
            textStyle: 'badguy',
            textDelay: 700,
            characterSprite: {
                name: "FREDERICK",
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
                    startLoop: 'ambience-creepy',
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
            text: 'Now you\'re locked inside my funhouse... forever!',
            textStyle: 'badguy',
            characterSprite: {
                name: "FREDERICK",
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
              'resource/funhouse-fright/assets/cutscene/main.png',  
              'resource/funhouse-fright/assets/cutscene/badguy.png', 
          ],
          delay: 1200,
        },
        onCutsceneStart: {
          asset: [
              'resource/funhouse-fright/assets/activity/node/miss-tally.png',
              'resource/funhouse-fright/assets/activity/node/pippo-fizzlepop.png',
              'resource/funhouse-fright/assets/activity/node/plucky-the-clown.png',
              'resource/funhouse-fright/assets/activity/node/count-visage.png',
              'resource/funhouse-fright/assets/activity/node/boiler-belle.png',
              'resource/funhouse-fright/assets/activity/character/miss-tally.png',
              'resource/funhouse-fright/assets/activity/character/pippo-fizzlepop.png',
              'resource/funhouse-fright/assets/activity/character/plucky-the-clown.png',
              'resource/funhouse-fright/assets/activity/character/count-visage.png',
              'resource/funhouse-fright/assets/activity/character/boiler-belle.png',
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
  


  