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
            text: 'Ready for something exciting, Dingo Punks?',
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
            text: 'Welcome to the world\'s hottest new game show \u2014 Cupid\'s Countdown: Love or Lose!',
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
            text: 'Your mission? Help each contestant find their secret admirer.',
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
            text: 'If you win, the magic of love will shine for another year.',
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
            text: 'But if you lose, love will vanish... forever!',
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
            text: 'No pressure though.',
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
            text: 'Hehehe! I hope you\'re ready, Dingo Punks.',
            textDelay: 400,
            textStyle: 'badguy',
            characterSprite: {
                name: "CUPID",
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
            text: 'Love\'s fate is in your hands.',
            textStyle: 'badguy',
            characterSprite: {
                name: "CUPID",
            },
            backgroundImage1: {
                popOnSpeak: true,
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Well, you heard the baby! Go figure out those secret admirers.',
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
            text: 'The show is starting in 3... 2... 1...',
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
            text: 'You did it again, Dingo Punks!',
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
                    startLoop: 'background-cupids-countdown',
                },
            },    
            backgroundColor: 'background-color-black'
        },
        {
            text: 'I can already feel love in the air.',
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
            text: 'Now let\'s get going! Your job is complete.',
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
            text: 'Hehehe... Game over, Dingo Punks.',
            textStyle: 'badguy',
            textDelay: 700,
            characterSprite: {
                name: "CUPID",
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
            text: 'Now get outta my studio!',
            textStyle: 'badguy',
            characterSprite: {
                name: "CUPID",
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
              'resource/cupids-countdown/assets/cutscene/main.png',  
              'resource/cupids-countdown/assets/cutscene/badguy.png', 
          ],
          delay: 1200,
        },
        onCutsceneStart: {
          asset: [
              'resource/cupids-countdown/assets/activity/node/broken-animatronic.png',
              'resource/cupids-countdown/assets/activity/node/grumblegrub.png',
              'resource/cupids-countdown/assets/activity/node/stefan-sage.png',
              'resource/cupids-countdown/assets/activity/node/tater-durant.png',
              'resource/cupids-countdown/assets/activity/node/topsy.png',
              'resource/cupids-countdown/assets/activity/character/broken-animatronic.png',
              'resource/cupids-countdown/assets/activity/character/grumblegrub.png',
              'resource/cupids-countdown/assets/activity/character/stefan-sage.png',
              'resource/cupids-countdown/assets/activity/character/tater-durant.png',
              'resource/cupids-countdown/assets/activity/character/topsy.png',
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
  


  