//square function
console.log("----------- square ------------")
var square = (n, char) => {
    for (i = 0; i < n; i++){
        var show = " ";
        for (j = 0; j < n; j++){
            show += char + "  ";
        }
        console.log(show);
    }
}
square(10, "+");
console.log("         ")
//Cuadrado con Borde
console.log("------- square with border -------")
 var squareBorder = (n, charOut, charIn) => {

    for (i = 0; i < n; i++){
        var show = " ";
        for (j = 0; j < n; j++){
            if (i === 0 || i === n - 1){
                show += charOut + "  ";
            }else{
                if (j === 0 || j === n - 1){
                    show += charOut + "  ";
                }else{
                    show += charIn + "  ";
                }
            }
        }
        console.log(show);
    }
} 

squareBorder(10, "o", "|")
console.log("         ")


//Cuadrado Diagonal Left-Right
console.log("---- square with diagonal L to R ----")
var squareDiagonalLR = (n, diagonal, charUp, charDown) => {
    for (i = 0; i < n; i++){
        var show = " ";
        for (j = 0; j < n ; j++){
            if(j === i){
                show += diagonal + "  ";
            }else if(j < i){
                show += charDown + "  ";
            }else{
                show += charUp + "  ";
            }
        }
        console.log(show);
    }

}
squareDiagonalLR(10, "\\", "-", "+");
console.log("         ")

//Cuadrado Diagonal Riht-left
console.log("---- square with diagonal R to L ----")
var squareDiagonalRL = (n, diagonal, charUp, charDown) => {
    for (i = 0; i < n; i++){
        var show = " ";
        for (j = 0; j < n; j++){
            var limit = n - i - 1;
            if(j === limit){
                show += diagonal + "  ";
            }else if(j > limit){
                show += charDown + "  ";
            }else{
                show += charUp + "  ";
            }
        }
        console.log(show);
    }

}
squareDiagonalRL(10, "\\", "+", "-");
console.log("         ")

//Medio Diamante
console.log("-------- Half diamond --------")
var halfDiamond = (n, char) => {
    
    var itotal = 2 * n - 1;
    
    for (i = 0; i < itotal; i++){
        
        var show = " ";
        if (i < n){
            for (j = 0; j < i + 1; j++)            
            show += char + " ";             
        }else{            
            for (j = 0; j < itotal - i; j++)            
            show += char + " ";            
        }
        console.log(show);
    }     
}

halfDiamond(5, "+");
console.log("         ")

//Pyramid
console.log("-------- Pyramid --------")
var pyramid = (n, char) => {
    var columns = 2 * n - 1;
    for (i = 0; i < n; i++){
        var show = " ";
        for (j = 0; j < columns; j++){
            var mid = Math.floor(columns / 2);
            if (j > mid + i || j < mid - i){
                show += " " + " ";
            }else{
                show += char + " ";
            }           
        }
        console.log(show);
    }     
}
pyramid(6, "+");
console.log("         ")

//Diamonds
console.log("         ")
console.log("-------- Diamond --------")

var diamond = (n, char) => {
    var columns = 2 * n - 1;
    var mid = Math.floor(columns / 2);
    
    for (i = 0; i < columns; i++){
        var show = " ";
        if (i < n){
            for (j = 0; j < columns; j++){                
                if (j > mid + i || j < mid - i){
                    show += " " + " ";
                }else{
                    show += char + " ";
                }           
            }
        }else{
            for (j = 0; j < columns; j++){
                var gap = columns - i - 1;
                if (j < mid - gap || j > mid + gap){
                    show += " " + " ";
                }
                else{
                    show += char + " ";
                }
            }
        }
        console.log(show);
    }     
}

diamond(7, "+");
