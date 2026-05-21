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
            text: 'Dingo Punks, we have a problem...',
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
            text: 'We spent all our money on vacation, and now we can\'t pay for the boat ride home!',
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
            text: 'The captain says she\'ll only let us come aboard if we help the locals first.',
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
            text: 'Now, I know what you\'re thinking. Stuck in paradise? Sounds great!',
            characterSprite: {
                name: "J.J. DINGO",
                path: 'jjcrispy-0.png',
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
            text: 'But the only food here is seafood. And you KNOW how I feel about seafood.',
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
            text: 'I had to eat a SEA URCHIN for breakfast!',
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
            text: 'Please, Dingo Punks... get me off this island.',
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
            text: 'You want off my island? Then you\'ll work for it.',
            textStyle: 'badguy',
            textDelay: 550,
            characterSprite: {
                name: "CAPTAIN DRAKA",
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
            text: 'Help the locals with their tasks. Then I\'ll let you on the boat. Simple.',
            textStyle: 'badguy',
            characterSprite: {
                name: "CAPTAIN DRAKA",
            },
            backgroundImage1: {
                path: 'badguy.png',
                scope: 'local',
            },
            backgroundColor: 'background-color-salmon'
        },
        {
            text: 'Okay. You heard the captain. It\'s time to get to work.',
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
            text: 'The clock is ticking!',
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
            text: 'Nice work! I knew I could count on you.',
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
            text: 'Now let\'s get out of here. Everyone, head to the airship!',
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
            text: 'Oh yeah... I kind of forgot we had an airship. We could\'ve left at any time! Hah!',
            characterSprite: {
                name: "J.J. DINGO",
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
            text: 'Time\'s up. The boat is leaving.',
            textStyle: 'badguy',
            textDelay: 550,
            characterSprite: {
                name: "FERRYWOMAN",
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
            text: 'Hope you like urchin. You\'re going to be eating a lot of it.',
            textStyle: 'badguy',
            characterSprite: {
                name: "FERRYWOMAN",
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
              'resource/paradise-panic/assets/cutscene/main.png',  
              'resource/paradise-panic/assets/cutscene/badguy.png', 
          ],
          delay: 1200,
        },
        onCutsceneStart: {
          asset: [
              'resource/paradise-panic/assets/activity/node/node1.png',
              'resource/paradise-panic/assets/activity/node/node2.png',
              'resource/paradise-panic/assets/activity/node/node3.png',
              'resource/paradise-panic/assets/activity/node/node4.png',
              'resource/paradise-panic/assets/activity/node/node5.png',
              'resource/paradise-panic/assets/activity/character/character1.png',
              'resource/paradise-panic/assets/activity/character/character2.png',
              'resource/paradise-panic/assets/activity/character/character3.png',
              'resource/paradise-panic/assets/activity/character/character4.png',
              'resource/paradise-panic/assets/activity/character/character5.png',
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
  


  