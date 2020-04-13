export class Sort {   
    
    public static mergeSort (arr : number[] ) : number[] {
        let sortedArr : number[] = [];        
        return this.partition(arr);
    }    
 
    private static merge (a : number [] , b : number[] ) : number[] {
        let mergedArr : number [] = [];       
 
        if (b[0] >= a[a.length - 1]) { 
            mergedArr = mergedArr.concat(a);
            mergedArr = mergedArr.concat(b); 
            return mergedArr;
        } else if(a[0] >= b[b.length - 1]){
            mergedArr = mergedArr.concat(b);
            mergedArr = mergedArr.concat(a);
            return mergedArr;
        }
        else 
        {
           let l : number = Math.max(a.length , b.length);
           let n : number = a[0];
           let m : number = b[0];

           //initialize 
           if (n < m){
               mergedArr =  mergedArr.concat(a)                               
               for(let i = 0 ; i < b.length ; i++){
                   n = b[i];
                for (let j = 0 ; j < mergedArr.length ; j++){
                    if (n >= mergedArr[j] && j + 1 == mergedArr.length){
                        //end of array
                        mergedArr.push(n);
                        break;
                    }
                    if (n >= mergedArr[j] && n < mergedArr[j+1]){
                        mergedArr = mergedArr.slice(0, j+1).concat(n).concat(mergedArr.slice(j+1)); 
                        break;
                    }
                }
            }
           }else{
            mergedArr = mergedArr.concat(b);
            for (var i = 0; i < a.length; i++) {
                n = a[i];
                for (var j = 0; j < mergedArr.length; j++) { 
                    if (n >= mergedArr[j] && j + 1 == mergedArr.length) {
                        //end of array
                        mergedArr.push(n);
                        break;
                    }
                    if (n >= mergedArr[j] && n < mergedArr[j + 1]) {
                        mergedArr = mergedArr.slice(0, j+1 ).concat(n).concat(mergedArr.slice(j + 1));
                        break;
                    }
                }
            }                             
           }
        }          
        return mergedArr; 
    }



    private static partition (arr : number[]) : number []{        
        let a : number [] = [];
        let b : number [] = [];

        if (arr.length == 0){
             return a;
        }
        
        if (arr.length == 1){
            return arr;
        }
        else{ 
            if (arr.length % 2 == 0){
                a = arr.slice(0 , (arr.length) / 2);
                b = arr.slice((arr.length)/2 , arr.length);                
            }else{
                a = arr.slice(0 , (arr.length + 1) / 2);
                b = arr.slice(1 + (arr.length)/2 , arr.length);                
            }    
        }       
        a = this.partition(a)
        b = this.partition(b)
        return this.merge(a , b);         
    }
}
 







