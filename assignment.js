

// Conversion of feetToMile


function feetToMile(feet){

    var mile = feet/5280;
    return mile ;
    
    }
    
    var result = feetToMile(50000);
    console.log( "Total :" + result + "miles");




//  Wood Calculation

    function woodCalculator(num1,num2,num3){


        var woodForChair = num1 * 1 ;
        var woodForTable = num2 * 3 ;
        var woodForKhat = num3 * 5 ;
        var totalWood = woodForChair + woodForTable + woodForKhat ;
        return totalWood ;
        
        
        }
             var resultWood = woodCalculator(5, 6, 18);
             console.log("Total wood : " + resultWood + "cubic feet");
        
        
        
        // Brick Calculation
        function brickCalculator(n){
            var numOfFloor = n;
            if( n <= 10){
        
                var numOfBrick = numOfFloor * 15 * 1000 ;
                return numOfBrick ;
                
            }
        
            else if( n <=20  ){
        
                 var numOfBrick = (numOfFloor-10) * 12 * 1000 ;
                 
                return numOfBrick ;
            }
               else  {
        
                var numOfBrick  = (numOfFloor-20) * 10 *1000 ;
                return numOfBrick ;
            }
        }
        var result1 = brickCalculator(10);
        var result2 = result1 + brickCalculator(20);
        var result3 = result2 + brickCalculator(105);

        console.log("Quantity of bricks of 1st to 10th floor of building :"  +result1);
        console.log("Quantity of bricks of 11th to 20th floor of building :"  +result2);
        console.log("Quantity of bricks of 21th to hiegest floor of building :"  + result3);



        // Findout shortest friends name

        function tinyFriend(arr) {
            let shortLength = Infinity;
            let shortest = "";
        
            if (arr.length > 0) {
                for (let i = 0; i < arr.length; i++) {
                    if (typeof arr[i] === 'string' && arr[i].length < shortLength) {
                        shortest = arr[i];
                        shortLength = arr[i].length;
                    }
                }
            }
        
            return shortest;
        }
        
        var output = tinyFriend(['salam', 'Barkhat', 'Sofiullah','Salauddin','Mosarrofuddin', 'Rok']);
        console.log("Smallest name of my friend is :" +  output);