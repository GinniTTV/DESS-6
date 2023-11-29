const title = document.getElementById("mainTitle");
console.log(title.innerHTML);


// Ejercicio nro 3


function createFullName(HTMLList) {
    let fullName = "";
    let contCamp = 1;
    for (let index = 0; index < HTMLList.length; index++) {
        const element = HTMLList[index];
        if (element.tagName === "DD") {
            if (element.innerText) {
                if (fullName) {
                    fullName = fullName.concat(" ")
                }
                if (contCamp<=2) {
                    fullName = fullName.concat(`${element.innerText}`);
                }
                else {
                    fullName = fullName.concat(`${element.innerText.toUpperCase()}`);  
                }
            }
            contCamp++;
        }   
    }
    return `"${fullName}"`;
}


const divList = document.getElementById("divList").children;


function showList(list) {
     let string = "";
     for (let i = 0; i < list.length; i++) {
         const elementList = list[i];
         if (elementList.tagName === "H2") {
             string = string.concat(`${elementList.innerText}: `)
         }
         if (elementList.tagName === "DL") {
             string = string.concat(
                 createFullName(elementList.children) + "\n"
             )
         }
     }
     return string
 }

 console.log(`-----\n${showList(divList)}-----`)


// Ejercicio nro 4
// Comparación de nombres.

const name1 = document.getElementById("firstName").textContent;
const name2 = document.getElementById("secondName").textContent;
const name3 = document.getElementById("firstName2").textContent;
const name4 = document.getElementById("secondName2").textContent;


function compareNames() {
    let matchnro1 = "";
    let matchnro2 = "";
    let nu1 = "";
    let nu2 = "";
    
    if (name1 === name3 || name1 === name4) {
        const matchnro1 = name1; 
        console.log(`Hay coincidencia en el nombre ${matchnro1}`);
        nu1 = prompt("El nombre si coincide\nIngrese un color que desee para destacar el nombre");
       
       } else if ((name2 === name3 || name2 === name4) && (name2)) {
        const matchnro2 = name2; 
        console.log(`No se encuentran coincidencias en el nombre ${matchnro2}`);
        nu2 = prompt("El nombre si coincide\nIngrese un color que desee para destacar el nombre");
       
       } else {
        console.log("Los nombres no coinciden");
    }
}
compareNames();

const confirmLastName = confirm('¿Desea realizar una comparación de apellidos?');


const lastName1 = document.getElementById("firstLastName").textContent;
const lastName2 = document.getElementById("secondLastName").textContent;
const lastName3 = document.getElementById("firstLastName2").textContent;
const lastName4 = document.getElementById("secondLastName2").textContent;

if (confirmLastName) {
    function compareLastNames() {
        let matchnro2 = "";
        let matchnro3 = "";
        let nro3 = "";
        let nro4 = "";
        
        if (lastName1 === lastName3 || lastName1 === lastName4) {
            const matchnro2 = lastName1; 
            console.log(`Hay coincidencia en el apellido ${matchnro2}`);
            nro3 = prompt("Hay coincidencia en el apellido\nIngrese un color para destacar el apellido");
            // console.log(n1)
           } else if ((lastName2 === lastName3 || lastName2 === lastName4) && (lastName2)){
            const matchnro3 = lastName2; 
            console.log(`El apellido no genera coincidencia ${matchnro3}`);
            nro4 = prompt("Si hay coincidencia en el apellido\nIngrese un color para destacar dl apellido");
            // console.log(n2)
           } else {
            console.log("No se encuentran coincidencias en los apellidos");
        }
    }
    compareLastNames();
}

