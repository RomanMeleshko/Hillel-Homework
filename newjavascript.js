$( document ).ready(function(){
   
    var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var morsecode =[
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..'
    ];    
  
   var anyText = "ROMAN MELESHKO"; 
  
 //Функция decoder() принимает в качекстве параметра текс для кодировки. 
 function decoder(par){
      var arr = par.split("");  //В переменной arr получаем массив символов.
      var arrABC = abc.split(""); //В переменной arrABC получаем массив символов.
      var str = "";
      //Прохожу циклами для поиска и замены
      for(var i = 0;i < arr.length;i++){
          var x = arr[i];
          if(arr[i] === " ") str += "";
          for(var j = 0;j < arrABC.length;j++){
              if(x === arrABC[j]) str += morsecode[j] + " ";
          }
      }
     return str; //Возврат в метод полученого результата.
  }
  console.log(decoder(anyText));
  
  var textMorsecode = decoder(anyText);
  
  //Функция encoder() получает в качестве параметра код Морзе.
  function encoder(par){
      var arr = par.split(" ");  //Полученный параметр сохраняем в массив arr по элементам. 
      var arrABC = abc.split("");
      var str = "";
      //Прохожу циклами для поиска и замены (розкадировка).
      for(var i = 0;i < arr.length;i++){
          var x = arr[i];
          for(var j = 0;j < morsecode.length;j++){
              if(x === morsecode[j]) str += arrABC[j];
          }
      }
      
      return str;
  };
  console.log(encoder(textMorsecode));
});

