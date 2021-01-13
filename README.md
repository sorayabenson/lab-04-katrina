# EDIT-THIS-README

MAKE A PLAN! 

HTML 
    HEADER 
    BODY 
        X  describe game and rules 
        X  3 radio buttons in lable tags all with same name
        X  play button 
        X show what they chose and what the computer chose
        X did they win? 
        X show win count
        X show loss count 
        X show draw count
    FOOTER 
    
JS 
    Import DOM elements 
    State 
        wins  
        losses 
        draws
        total tries 
    
    eventListener 
        plus total tries 
        getRandomThrow - random number genertator 0, 1, 2
            -this should return rock, paper or scissors not the numbers
            -this should be in a seperate js file
        Get user choice document.QuerySelector('input:checked')
        didUserWin - compare user nput with computer rando number 
            -takes in user choice and comp choise and returns win, lose, or draw
            -this should also be in seperate js file 
        

THEN BACK TO CSS 