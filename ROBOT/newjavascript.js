window.onload = function(){
    //Создаем функцию конструктор Create. В качестве параметров
    //предаем ширину, висоту, позицию, и цвет.
    function Create( height,  width, position,  color){
       //Переменные для хранения и пемешения блока. 
       this.spedy = 0;
       this.downs = 0;
       
       //Создаем новый элемент и задаем имя класса и текушие положение 
       //блока.
       var div = document.createElement("div");
       div.className = "block";
       div.style.height = this.height = height + "px";
       div.style.width = this.width = width + "px";
       div.style.position = this.position = position;
       div.style.background =  this.background = color;
        
       //Добавляем новый элемент на дисплей. 
       var getDiv = document.getElementById("display");
       getDiv.appendChild(div);
       
    }
    Create.prototype.left = function(){ //Передвигаем блок влево
        this.spedy -= 10;
        var elem = document.getElementsByClassName("block");
        elem[0].style.left = this.spedy + "px";
    };
    Create.prototype.right = function(){ //Передвигаем блок вправо
        this.spedy += 10;
        var elem = document.getElementsByClassName("block");
        elem[0].style.left = this.spedy + "px";
    };
    Create.prototype.down = function(){ //Передвигаем блок вниз
        this.downs += 10;
        var elem = document.getElementsByClassName("block");
        elem[0].style.top = this.downs + "px";
    };
    Create.prototype.up = function(){ //Передвигаем блок вверх
        this.downs -= 10;
        var elem = document.getElementsByClassName("block");
        elem[0].style.top = this.downs + "px";
    };
    
    //Создаем экземпляр и передаем аргументы в конструктор.
    var redSquare = new Create( 50, 50, "absolute", "red");
 //   var square2 = new Create( 100, 100, "absolute", "blue");
       
    //Добавляем обработчики событий на кнопки 
    var button = document.getElementsByTagName("button");
    button[0].addEventListener("click", function(){
       redSquare.left();
    });
    button[1].addEventListener("click", function(){
       redSquare.right(); 
    });
    button[2].addEventListener("click", function(){
       redSquare.down(); 
    });
     button[3].addEventListener("click", function(){
       redSquare.up(); 
    });
       
};


