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
            text: 'Puzzle Punks! Are you ready for a dangerous mission?',
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
            text: 'The shopkeepers of the Midnight Mall are in terrible trouble.',
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
            text: 'Each one has a task to complete before the clock strikes twelve.',
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
            text: 'Use your code-breaking skills to help, but beware!',
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
            text: 'At the stroke of midnight, the Mallcrawlers will emerge from the Undermurk.',
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
            text: 'Anyone still inside the mall will become their prisoner... forever!',
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
            text: 'That\'s right, Puzzle Punks...',
            textDelay: 400,
            textStyle: 'badguy',
            characterSprite: {
                name: "MALLCRAWLERS",
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
            text: 'We\'re coming for you!',
            textStyle: 'badguy',
            characterSprite: {
                name: "MALLCRAWLERS",
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Hurry, Puzzle Punks! You must crack the codes before the Mallcrawlers arrive.',
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
            text: 'The clock is ticking...',
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
            text: 'The Mallcrawlers are almost here. Let\'s get you out of there.',
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
            text: 'Well, well, well... Time\'s up, Puzzle Punks.',
            textStyle: 'badguy',
            textDelay: 550,
            characterSprite: {
                name: "MALLCRAWLERS",
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
            text: 'You\'re coming with us!',
            textStyle: 'badguy',
            characterSprite: {
                name: "MALLCRAWLERS",
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
              'resource/escape-the-midnight-mall/assets/cutscene/main.png',  
              'resource/escape-the-midnight-mall/assets/cutscene/badguy.png', 
          ],
          delay: 1200,
        },
        onCutsceneStart: {
          asset: [
              'resource/escape-the-midnight-mall/assets/activity/node/critterwerks.png',
              'resource/escape-the-midnight-mall/assets/activity/node/holographia.png',
              'resource/escape-the-midnight-mall/assets/activity/node/the-candy-cave.png',
              'resource/escape-the-midnight-mall/assets/activity/node/underworld-athletics.png',
              'resource/escape-the-midnight-mall/assets/activity/node/zeeb-plex.png',
              'resource/escape-the-midnight-mall/assets/activity/character/noah-shortnose.png',
              'resource/escape-the-midnight-mall/assets/activity/character/prisma.png',
              'resource/escape-the-midnight-mall/assets/activity/character/robustus-the-great.png',
              'resource/escape-the-midnight-mall/assets/activity/character/topsy.png',
              'resource/escape-the-midnight-mall/assets/activity/character/zeeb.png',
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
  


  