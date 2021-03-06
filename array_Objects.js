// ARRAY -----------------------------------------------------
        //         Arrays are list of ordered sorted data, data is arranged in a continuous manner?can hold any type of data. 
        // Nested arrays . Mutable- changed


        let arr = [1, 'Manjeet', null, 0.2, 'a'];
        // index   0    1        2      3     4 

        console.log(arr[0] + ' ' + arr[2]);
        let a = 0;
        console.log(arr[a + 3]);

        //another way is 

        let newarr = new Array(1, 2, 3);
        console.log(newarr)

        // JS arrays are mutable 

        const arrMutable = ['a', 'b', 'c'];

        arrMutable[1] = '2';

        console.log(arrMutable[1]);

        // .length

        console.log(arr.length);

        // .pop()

        arr.pop();

        console.log(arr);
        // .push()
        arr.push('new element added');
        console.log(arr)

        // .shift() removes head element 

        arr.shift();
        console.log(arr);
        // .unshift ()

        arr.unshift('new head')
        console.log(arr)

        //sort() --for sorting an array 

        // nested arrays 

        const nestedArray = [1, 2, 3, [4, 5, 6]];

        console.log(nestedArray[3][1])


        // Objects 

        let student = {

            name: 'Manjeet',   //  name - key ; Manjeet - value 
            //  roll no : '21',   // now why error - can not leave empty space btw key name 
            // if we want with a space use like this 
            'roll no': '22',
            roll_no: '21',


        }

        console.log(student);
        console.log(student.roll_no);
        console.log(student['roll no']);  // we can not access it by dot notation 

        // nested object 

        let nestedObject = {
            name: 'Manjeet',
            place: {
                state: 'RJ',
                district: ' Jhunjhunu'
            }
        }

        console.log(nestedObject.place.district);

        // delete operator

        // it is possible in JS to delete an property from the object 

        delete student.roll_no;
        console.log(student);

        // if we try to access something that is not defined = undefigned will be returned 

        console.log(student.roll_no);
        console.log(student['roll_no']);

        // JS object are mutable 

        const mutableObject = {
            name: 'JS',
            why: 'web dev'
        }

        mutableObject.why = 'fron end';

        console.log(mutableObject)

        // mutableObject = {} can not be reassign object as declared as const but its key values can be manipulated

        const engine = {
            start(adverb) {
                console.log(`this engine starts up ${adverb}...`)
            },

            sputter: () => {
                console.log('the engine sputters')
            },
        };

        engine.start('noisely');
        engine.sputter();
