
        //*****************************//

        // Conditionals 

        // control the flow in which statements in a programe is executed 
        // Default flow - left to right
        //  - top to bottom 
        // some set of statememnts will run only when certain conditions are met 


        // OR ||  AND &&  ! (not) TERNARY OPERATORS IF-ELSE SWITCH

        console.log(true || false)
        console.log(false || false)

        let clg = "NIT R"
        let covid = true;

        //expression? if true statement: if false statement 

        covid == true ? console.log(`${clg} is online`) : console.log(`${clg} is offline`);

        if (covid == false) {
            console.log('clg will reopen');
        }

        else console.log('clg will not reopen')

        let cases = 'high';
        let vaccine = true;

        if (cases == 'low' && vaccine == true)
            console.log(`${clg} will open`);
        else console.log(`${clg} will not open`);

        // 0 false 
        // anthing other than 0 true 

        if (0)
            console.log('it is true')
        else
            console.log('not true');

        if (2)
            console.log('it is true')
        else
            console.log('not true');

        let name = 'manjeet';
        if (name === 'manjeet') console.log(
            'this is strict checking'
        )

        if (name == 'Manjeet') console.log('matching')
        else console.log('not matching')

        //Switch(expression) 

        let status = "online";

        switch (status) {
            case 'online': console.log('classes will be on MS Teams')
                break;
            case 'offline': console.log('AC lecture halls')
                break;
            default: console.log('this is default in case no case matches')

        }
   