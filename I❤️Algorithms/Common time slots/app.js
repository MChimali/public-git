// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

// Datos
var myTeam = [
{ name: "María", availability: new Array(8).fill(true) },
{ name: "Pedro", availability: new Array(8).fill(true) },
{ name: "Esther", availability: new Array(8).fill(true) },
{ name: "Marcos", availability: new Array(8).fill(true) }
];

//Function to show availability through console
var showAvailability = (arrayTimes, arrayTeam) => {
  for (i = 0; i < myTeam.length; i++){
    console.log("Disponibilidad de " + arrayTeam[i].name)
    for (j = 0; j < arrayTimes.length; j++){
      console.log("   " + arrayTimes[j] + ": " + arrayTeam[i].availability[j])
    }
  } 
}

//Function to create random boolean 
var randomBoolean = () => Math.random() > 0.5;

//Function to asign (true / false) availability to each time-slot of each team player
var isAvailable = team =>{
  for (i = 0; i < team.length; i++){
    for (j = 0; j < team[i].availability.length; j++){
      team[i].availability[j] = randomBoolean();
    }
  }
}

//Function to check common available slots
var commonAvailavility = (team, slots) =>{
  for (j = 0; j < slots.length; j++){
    var check = true;
    for (i = 0; i < team.length; i++){
      check = check && team[i].availability[j];
    }
      if (check) return "Hueco encontrado en el horario " + slots[j];
  }
  return "Lo siento. No hay hueco disponible en el equipo."
}


isAvailable(myTeam);
showAvailability(WORK_HOURS, myTeam);
console.log(commonAvailavility(myTeam, WORK_HOURS));

