var femalNames = ["Ola", "Natalka", "Aga", "Iga", "Zuza"];
 var maleNames = ["Marceli", "Janusz", "Donald", "Picasso", "Ramos"];
 var allNames = femalNames.concat(maleNames);
   console.log(allNames);
   document.write(allNames + ". ");
 var newName ="Marian";

   if (allNames.indexOf(newName) === -1) {
     console.log(allNames.push(newName));
     document.write("<br>" + allNames);
   }
   else {
     console.log("Dane nieprawidłowe");
     alert("Dane nieprawidłowe");
   }
