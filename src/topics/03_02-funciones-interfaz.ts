// ############### Interfaces ###########################
interface Character {
    name : string,
    hp : number,
    
    // -> Metodos
    printHP : () => void
} 

// ################ FUNCIONES ############################
const healCharacter = (character : Character, amount : number ) => {
    character.hp += amount
}

// ################ MAIN #################################
// -> Construccion del objeto Character
const strider : Character = {
    name: 'Strider',
    hp: 50,
    printHP(){
        console.log(`Puntos de vida ${ this.hp }`)
    }
}


healCharacter(strider, 30)
strider.printHP()
healCharacter(strider, 10)
strider.printHP()