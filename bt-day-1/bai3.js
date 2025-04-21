// Bài 3: Kiểm tra số hoàn hảo

/*
var x ,sum = 0                   
                             false               
           ┌─────► i <= x/2 ───────►  stop       
           │           │                         
           │           │true                     
           │           │                         
           │           ▼      true               
 for(i=1)  │      x%i === 0 ───────►  sum += i   
           │                                     
           │           │                         
           │           │false                    
           │           │                         
           │           ▼                         
           └───────── i++                        
                                                 
                true                             
    x === sum  ──────► Số hoàn hảo               
       │                                         
       │                                         
       │ false                                   
       │                                         
       ▼                                         
  Không phải SHH                                 
*/
var x = 496
var sum = 0
for (var i = 1; i <= (x / 2); i++) {
    if(x % i === 0) {
        sum += i
    }
}
if (x === sum) {
    console.log("Số hoàn hảo")
} else {
    console.log("Không phải số hoàn hảo")

}
