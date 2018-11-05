window.onload = function(){
    //Создаем объект countObj3.
     var countObj3 = {
         age: 10,
        //Теперь функция deacris принимает параметр.
        deacris: function(par1, par2, par3){
          console.log( this.age + par1 + par2 + par3); 
         
        },
        increase: function(){
            this.age--;
        },
        showResalt: function(){
            return this.age;
        }
    };
    //Создаем новай объект для передачи в него метода из 
    //другого объекта.
    var obj2 = {
        age: 50
    };
    
    //Создаем функцию bind которая принимает два параметра.
    //Первым параметром передаем метод объекта, а вторим праметром 
    //контекст вызова.
    //функция, возвращает функцию обвертки которая привязывает 
    //первый параметр к контексту.
    function bind(metod, context){
        return function(){
            metod.apply(context, arguments); 
        };
    };
    
  
    var getFunction = bind(countObj3.deacris, obj2);
   //Передаем аргумент в функцию.
    getFunction(8, 3, 4);
    
};


