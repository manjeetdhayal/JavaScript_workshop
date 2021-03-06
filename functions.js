

        //----------------------------------------------------

        // Functions 
        // Defining a function 
        function sum(n1, n2) {
            return n1 + n2;
        }
        //calling a function 
        console.log(sum(2, 3));    // function_name(); -calling a function 

        // function parameters 
        function sayHello(name) {
            return `Hello ${name}`;
        }

        let alpha = 'Rahul';
        console.log(sayHello(alpha));

        // what happen if we forget return keyword ; 
        // return undefigned 
        // function sayUndefigned(x, y ){
        //     x + y;                 
        // }

        // console.log(sayUndefigned(2,3))       // output undefigned 
        function sayUndefigned(x, y) {
            return x + y;
        }

        console.log(sayUndefigned(2, 3))


        // anonymous function can not have a name property they can be defined using the function kryword or arrow function 

        const AnonymousFunction = function () {
            return (
                console.log(sum(3, 4))
            )
        }

        AnonymousFunction(); //calling function 


        // named function - function keyword used 
        function boom() {
            return "Boom";

        }
        console.log(boom);

        const boomBox = function () {
            return (
                'BoomBox'
            )
        }

        boomBox();
        console.log(boomBox);

        // arrow function with no arguments 

        const subtract = (x, y) => {     //  anonymous function 
            return (x - y)

        }

        let value = subtract(1, 2);
        console.log(value);

        // now arrow function with single expression can also be declared without return keyword 

        const multiply = (x, y) => x * y;



        const greetings = () => {
            console.log('hello');

        }

        greetings();

        // aroow function with one parameter can be declared by omittimg () 

        let mass = 120;

        let energy = mass => 931.5 * mass; // MeV energy 

        console.log(energy(1) + ' ' + "MeV");


   