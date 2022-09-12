async function fun1(){
    console.log('a');
   
    await setTimeout(() => console.log('c'), 1000)
    
    console.log('e');
    }
    fun1()                                                                                                                       
     
    
