
        //****************************//

        // strings - 

        var string = 'this';     // "" when we have '' inside string and vice-verca
        console.log(string);

        var nameString = 'is';
        var message = 'Manjeet';

        console.log(string + nameString + message);

        let tempVar = `this is ${message}`;  // we can use both single as well as double quotes 
        console.log(tempVar);

        let len = message.length;
        console.log(`lenght of message is ${len}`);

        //escape sequences 

        console.log('hello \n Manjeet')

        //we can also make string by string constructor

        var b = new String('this is constructor string');

        // String functions/methods 

        let str = 'this is a string';

        //indexOf(), lastindexOf()

        let position = str.indexOf('is');
        console.log(position); //returns 1st occurance and its index 
        position = str.lastIndexOf('is')// gives last index of occurance 
        console.log(position)

        //slice(startposition, end position)

        //to get a substring 

        console.log(str.slice(2, 5)); // is

        // to get substring by length 

        //substr(startposition, length)\
        console.log(str.substr(2, 5));


        // now there are other function like toUpperCase(), toLowerCase(), replace(initial string, to be replaced)
        // concat() to add two strings , trim() -removes white spaces from start and end not from between 

        let newString = str.concat('manjeet');

        //to access character of a position 

        let char1 = str.charAt(1);    //charCodeAt(position) returns ASCII value, charAt(position) 
        console.log(char1); // return h
        console.log(str[2]); // returns i  

  