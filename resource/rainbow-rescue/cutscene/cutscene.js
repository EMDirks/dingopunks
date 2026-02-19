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
            text: 'Yeah, yeah. It\'s me again.',
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
            text: 'For once, I thought I was going to have an easy day.',
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
            text: 'I mean, look at that. A perfect rainbow. No trouble. No danger.',
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
            text: 'Wait... hold on.',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-0.png',
                scope: 'global',
            },
            backgroundImage1: {
                path: 'main-2.png',
                scope: 'local',
                animation: {
                    start: 'transform-scale_1_1__opacity_0',
                    end: 'transform-scale_1__opacity_1',
                    duration: 'transition-transform-200ms__opacity-200ms',
                },
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'Yeah, nevermind. We\'re doomed.',
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
                path: 'main-2.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'This must be the work of the witch Noctis...',
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
                path: 'main-2.png',
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
            text: 'Correct. Allow me to cut right to the point.',
            textDelay: 400,
            textStyle: 'badguy',
            characterSprite: {
                name: "NOCTIS",
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
            text: 'The people of this land are ungrateful. So, to teach them a lesson, I\'ve stolen the rainbow.',
            textStyle: 'badguy',
            characterSprite: {
                name: "NOCTIS",
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'If the they want it back, they must solve my challenges first.',
            textStyle: 'badguy',
            characterSprite: {
                name: "NOCTIS",
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Ok, ok \u2014 that\'s enough!',
            textDelay: 500,
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-2.png',
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
            text: 'Puzzle Punks, this is your problem now. Go help the people bring back the rainbow.',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-3.png',
                scope: 'global',
            },
            backgroundColor: 'background-color-black'
        },
        {
            text: 'And get it done before Noctis returns...',
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
                path: 'main-2.png',
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
            text: 'Solid work, Puzzle Punks. The rainbow is back!',
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
            text: 'Now I can finally take a nap.',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-1.png',
                scope: 'global',
            },  
            backgroundImage2: {
                path: 'main.png',
                scope: 'local',
            }, 
            backgroundColor: 'background-color-black'                 
        },
        {
            text: 'So hurry up and come aboard! Our work is done.',
            characterSprite: {
                name: "J.J. CRISPY",
                path: 'jjcrispy-1.png',
                scope: 'global',
                animation: {
                    start: 'transform-translate_0_0',
                    end: 'transform-translate_0_100',
                    duration: 'transition-transform-1000ms',
                    delay: 200
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
            text: 'You\'re all out of time, Puzzle Punks.',
            textStyle: 'badguy',
            textDelay: 550,
            characterSprite: {
                name: "NOCTIS",
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
            text: 'I hope you can handle a world without color...',
            textStyle: 'badguy',
            characterSprite: {
                name: "NOCTIS",
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
              'resource/rainbow-rescue/assets/cutscene/main.png',  
              'resource/rainbow-rescue/assets/cutscene/main-2.png', 
              'resource/rainbow-rescue/assets/cutscene/badguy.png', 
          ],
          delay: 1200,
        },
        onCutsceneStart: {
          asset: [
              'resource/rainbow-rescue/assets/activity/node/sir-eggbert.png',
              'resource/rainbow-rescue/assets/activity/node/madame-mystica.png',
              'resource/rainbow-rescue/assets/activity/node/sparklepants.png',
              'resource/rainbow-rescue/assets/activity/node/sunny-snap.png',
              'resource/rainbow-rescue/assets/activity/node/charm.png',
              'resource/rainbow-rescue/assets/activity/character/sir-eggbert.png',
              'resource/rainbow-rescue/assets/activity/character/madame-mystica.png',
              'resource/rainbow-rescue/assets/activity/character/sparklepants.png',
              'resource/rainbow-rescue/assets/activity/character/sunny-snap.png',
              'resource/rainbow-rescue/assets/activity/character/charm.png',
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
  


  