import Armor from "./Armor.mjs"
import Weapon from "./Weapon.mjs"
import Character from "./Character.mjs"


const characterArray = [];
const weapons = [];
const armors = [];

armorCreation(armors);
weaponsCreation(weapons);
characterCreation (characterArray)



function characterCreation(characterArray) {

    const ragnar = new Character("Ragnar Wolfbane", 32, 45, 87, [armors[Character.SHADOW], weapons[Character.STORM]]);

    const seraphina = new Character("Seraphina Nightshade", 27, 120, 92, [armors[Character.PHANTOM], weapons[Character.CELESTIA]]);

    const thalgrim = new Character("Thalgrim Ironfist", 40, 52, 95, [armors[Character.TITAN], weapons[Character.CELESTIA]]);

    const lyara = new Character("Lyara Moonwhisper", 35, 29, 88, [armors[Character.SYLVAN], weapons[Character.STAR]]);

    const draven = new Character("Draven Blackthorn", 30, 37, 90, [armors[Character.ABYSSAL], weapons[Character.DOOM]]);

    characterArray.push(ragnar, seraphina, thalgrim, lyara, draven);
}


//  characterCreation(characterArray)

 displayArmorsWeapons();
 SelectEquipmentBelow30();
 reArrangeArmory();
 printNewValues();
 fumbleToCharacter();



//  SelectEquipmentBelow30();

//  reArrangeArmory()


function weaponsCreation(weapons)
{
   const stormBreakerAxe = new Weapon("Stormbreaker Axe", 30, 25, 80)

   const celestialRapier = new Weapon("Celestial Rapier", 25, 18, 75)

   const obsidianWarhammer = new Weapon("Starfire Bow", 33, 22, 85)

   const startfire = new Weapon ("Starfire Bow", 33, 22, 85)

   const doomFangDagger = new Weapon("Doomfang Dagger", 28, 20, 78)

   weapons.push(stormBreakerAxe, celestialRapier, obsidianWarhammer,startfire, doomFangDagger);
}
function armorCreation(armors)
{

    const shadowPlate = new Armor("Shadowplate", 28, 15)

    const phantomShroud = new Armor("Phantom Shroud", 22, 12)

    const titansBulwark = new Armor("Titan's Bulwark", 35, 18)

    const sylvanGuardian = new Armor("Sylvan Guardian", 30, 14)

    const abyssalCarapace = new Armor("Abyssa Carapace", 25, 10)

    armors.push(shadowPlate, phantomShroud, titansBulwark, sylvanGuardian, abyssalCarapace);

}

function displayArmorsWeapons()
{

    console.log("Weapon list")
    console.log("---------------------");
    for (let i = 0; i < weapons.length; i++){
     

        console.log(weapons[i].name + " : " + " Min Level " + " = " + weapons[i].minLevel + " , "  + " Damage " + " = " + weapons[i].damage + " , " + " Durability " + " = " + weapons[Character.STORM].durability)


    }
    console.log("")
    console.log("Armor list")
    console.log("--------------------")

    for (let i = 0; i < armors.length; i++)
    {
    
        console.log(armors[i].name + " :" + " Min Level " + "= " + armors[i].minLevel + ", " + "Defense" + " = " + armors[i].defense);

        
    }

    console.log("");
    console.log("CHARACTER LIST");
    console.log("-------------");
    console.log("");

    for( let i = 0; i < characterArray.length; i++)

    {
        console.log(characterArray[i].name);
        console.log("---------");
        console.log("");
        console.log("Attributes");
        console.log("----------")
        console.log("Level: " + characterArray[i].level)
        console.log("Age " + characterArray[i].age);
        console.log("Stamina " + characterArray[i].stamina);
    
        console.log("----------")

        console.log("Weapons:")

        console.log("----------")

        console.log("Name: " + characterArray[i].inventory[Character.WEAPON].name);

        console.log("Min Level: " + characterArray[i].inventory[Character.WEAPON].minLevel)

        console.log("Durability: " + characterArray[i].inventory[Character.WEAPON].durability)

        console.log("------------");

        console.log("Armors:")

        console.log("------------");

        console.log("Name: " + characterArray[i].inventory[Character.ARMOR].name);
        console.log("Min Level: " + characterArray[i].inventory[Character.ARMOR].minLevel);
        console.log("Defense: " + characterArray[i].inventory[Character.ARMOR].defense);

        console.log("-----------------");

}

}
function SelectEquipmentBelow30()
{

    console.log("Armors Below level 30")
    console.log("---------------")
    
    for (let i  = 0; i < characterArray.length; i++)
    {
        let characterArmor = characterArray[i].inventory[Character.ARMOR];
        let armorName = characterArmor.name;
        let armorLevel = characterArmor.minLevel;
        const minLeveltoEquip = 30;

        if (characterArmor.minLevel < minLeveltoEquip)
        {
            console.log("Name: " + armorName);

            console.log("Level: " + armorLevel);

            console.log("Belongs to " + characterArray[i].name)
            console.log("")
        }

    }
}
function reArrangeArmory()
{
    for (let i = 0; i < characterArray.length; i++)
    {
        for (let j = 0; j < weapons.length; j++)
        {
            if (characterArray[i].level >= weapons[j].minLevel)
            {

                characterArray[i].inventory.push(weapons[j])

            }
              
        }
        
    }
}
function printNewValues()
{
    for (let i = 0; i < characterArray.length; i++)
    {

        console.log("---")

      
        console.log("Character Name: " + characterArray[i].name);
        console.log("Level: " + characterArray[i].level);
        console.log("")

        console.log("Weapons On Inventory")

        console.log("")

       
        for(let j = 1; j < characterArray[i].inventory.length; j++)
        {
        
        console.log(characterArray[i].inventory[j].name);    
        console.log("Weapons Level: " + characterArray[i].inventory[j].minLevel)
     

        }

        
        }
    
}
function fumbleToCharacter()
{

    console.log("")

    const lyara = characterArray[Character.LYA]

    let weaponPosition = lyara.fumble();

    console.log("Character Name: " + lyara.name )

    console.log("Age: " + lyara.age )

    console.log("Level: " + lyara.level)

    console.log ("Character Stamina: " + lyara.stamina)

    console.log("Armor: " + lyara.inventory[Character.ARMOR].name)

    console.log("Defense de la Armadura: " + lyara.inventory[Character.ARMOR].defense)

    console.log("Weapon Name: " + lyara.inventory[weaponPosition].name)

    console.log("Weapon Durability: " + lyara.inventory[weaponPosition].durability)

    console.log("TOTAL DAMAGE: " + lyara.totalDamage)
}


 
