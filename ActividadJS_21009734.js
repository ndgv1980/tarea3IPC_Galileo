var mes = parseInt(prompt("Ingrese el mes de su nacimiento: "), 10);
var dia = parseInt(prompt("Ingrese el dia de su nacimiento: "), 10);

switch (mes)
{
  case 1: if (dia >= 21)
          {
            alert("Acuario");
          } 
            else 
          {
            alert("Capricornio")
          }
          break;
  case 2: if (dia >= 20)
          {
            alert("Piscis");
          } 
            else 
          {
            alert("Acuario")
          } 
          break;
  case 3: if (dia >= 21)
          {
            alert("Aries");
          } 
          else 
          {
            alert("Piscis")
          }
    
          break;
  case 4: if (dia >= 21)
          {
            alert("Tauro");
          } 
          else 
          {
            alert("Aries")
          }  
          break;
  case 5: if (dia >= 21)
          {
            alert("Geminis");
          } 
          else 
          {
            alert("Tauro")
          }
          break;
  case 6: if (dia >= 21)
          {
            alert("Cáncer");
          } 
          else 
          {
            alert("Geminis")
          }
          break;
  case 7: if (dia >= 23)
          {
            alert("Leo");
          } 
          else 
          {
            alert("Cáncer")
          }
          break;
  case 8: if (dia >= 24)
          {
            alert("Virgo");
          } 
          else 
          {
            alert("Leo")
          }
          break;
  case 9: if (dia >= 23)
          {
            alert("Libra");
          } 
          else 
          {
            alert("Virgo")
          }
          break;
  case 10: if (dia >= 24)
           {
             alert("Escorpio");
           } 
           else 
           {
             alert("Libra")
           }  
           break;
  case 11: if (dia >= 23)
           {
             alert("Sagitario");
           } 
           else 
           {
             alert("Escorpio")
           }  
           break;
  case 12: if (dia >= 22)
           {
             alert("Capricornio");
           } 
           else 
           {
             alert("Sagitario")
           }
           break;
}