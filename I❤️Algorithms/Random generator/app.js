var createNumbers = (n, min, max) =>{
    
    if (n - 1 > max - min){
        console.log("decrease length of array or increase range")
    }else{        
        var array = new Array; 

        for (i = 0; i < n; i++) { 
            const range = max - min + 1;
            array[i] = Math.floor(Math.random() * range) + min;                  
            for (j = 0; j < i; j++){
                if (array[j] === array[i]) --i;
            }     
        }
        console.log(array);
    }
    
}
createNumbers(10, 1, 10);