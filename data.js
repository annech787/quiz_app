const SOURCE = [
    {
        question: 'Compared with other students, how quickly do you usually complete your class assignment',
        choices:[{  choice: 'I am usually finish before everyone else.',
                    type:1
                 },
                 {  choice: 'I finish faster than most of my classmates.',
                    type:1
                 },
                 {  choice: 'I finish right on time.', 
                    type:2
                 },
                 {  choice: 'I frequently turn in assignment late.',
                    type:2
                 },
                 {  choice: 'I turn in assignment later than everyone.',
                    type:2
                 }
                ]
        
    },
    {
        question: 'How often are you late for appointments?',
        choices:[{  choice:'All the time',
                    type:2
                 },
                 {  choice: 'Most of the time',
                    type:2
                 },
                 {  choice: 'Sometimes',
                    type:2
                 },
                 {  choice: 'Rarely', 
                    type:1
                 },
                 {  choice: 'Never',
                    type:1
                 }
                ]
        
    },
    {   
        question: 'How would your classmate and friends rate you?',
        choices:[{  choice: 'Always hardworking and serious.',
                    type: 1
                 },
                 {  choice: 'Most of the time hardworking and serious.',
                    type: 1
                 },
                 {  choice: 'Sometimes hardworking and serious.',
                    type: 2
                 },
                 {  choice: 'Rarely hardworking and serious.',
                    type: 2
                 },    
                 {  choice: 'Carefree',
                    type: 2
                 }
                ]
        
    },
    {   
        question: 'How would your parents (or previous guardians) rate you?',
        choices:[{  choice: 'Always helpful',
                    type:1
                 },
                 {  choice: 'Mostly helpful',
                    type:1
                 },
                 {  choice: 'Sometimes helpful',
                    type:2
                 },
                 {  choice: 'Never helpful',
                    type:2
                 },
                 {  choice: 'Lazy',
                    type:2
                 }
                ]
    
    },
    {   
        question: 'How would your closest friends rate your general activity   level?',
        choices:[{ choice: 'Too slow-never gets anything done.',
                    type: 2
                 },
                 {  choice: 'Somewhat active-get some things done.',
                    type: 2
                 },
                 {  choice: 'Slow - but gets things done.',
                    type: 2
                 },
                 {  choice: 'Average - reasonable busy',
                    type: 2
                 },
                 {  choice: 'Too Active - should slow down.',
                    type: 1
                 }
              ]
    },
    {   
        question: 'How often do you worry about future events?',
        choices: [{ choice:'Constantly',
                    type: 1},
                  { choice: 'Frequently',
                    type: 1},
                  { choice: 'Sometimes',
                    type: 2},
                  { choice: 'Rarely',
                    type: 2
                  },
                  { choice: 'Never',
                    type: 2
                  }
              ]
    },
    {   
        question: 'When you have free time, what would you prefer to do?',
        choices:[{  choice:'Sleep',
                    type: 2
                 },
                 
                 {  choice: 'Watch TV',
                    type: 2
                 },
                 {  choice:'Go Shopping',
                    type: 2
                 },
                 {  choice:'Catch up on work or household chores',
                    type:1
                 },
                 {  choice:'learn new things',
                    type: 1
                 }
                ]
                 
                 
    },
    {   
        question: 'Has anyone ever told you that you talk too much?',
        choices:[{  choice:'Yes, often',
                    type: 2
                 },
                 
                 {  choice: 'A couple times',
                    type: 2
                 },
                 {  choice:'sometimes',
                    type: 2
                 },
                 {  choice:'Once',
                    type: 1
                 },
                 {  choice:'Never',
                    type:1
                 },
                ]
                 
                 
    },
    {   
        question: "Have you ever been waiting at the doctor's office 30 minutes past       your appointment time, and have several chores to do when you get home.  What       do you do?",
        choices:[{  choice:'Read a magazine.',
                    type: 2
                 },
                 {  choice:'Sit quietly until your turn',
                    type: 2
                 },
                 
                 {  choice: 'Keep checking your watch.',
                    type: 1
                 },
                 {  choice:'Get impatient and somewhat angry.',
                    type: 1
                 },
                 {  choice:'Complain to the nurse.',
                    type:1
                 },
                ]
                 
                 
    },
    {   
        question: "When you are playing a game, how important is it for you to win?",
        choices:[{  choice:'Very important',
                    type: 1
                 },
                 {  choice:'Always important',
                    type: 1
                 },
                 {  choice: 'Sometimes important',
                    type: 2
                 },
                 {  choice:'Not important at all',
                    type: 2
                 },
                 {  choice:"Don't care",
                    type:2
                 },
                ]
                
                 
    },
                 
];

    const QUIZ_SOURCE = {   A: 0,
                            B: 0,
                        };