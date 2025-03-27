import Armor from "./Armor.mjs"
import Weapon from "./Weapon.mjs"
import Character from "./Character.mjs"
import { INVENTORY } from "./Constants.mjs"


let characterArray = [];
let inventory = [];

 characterCreation(characterArray)

 displayArmorsWeapons();

function characterCreation(characterArray)

{
    let armory= [];

    inventoryCreation(inventory);

    console.log(inventory)

     armory= [inventory[INVENTORY.STORM], inventory[INVENTORY.SHADOW]]

    const ragnar = new Character("Ragnar Wolfbane", 32, 45, 87, armory)

     armory = [inventory[INVENTORY.CELESTIA], inventory[INVENTORY.PHANTOM]]

    const seraphina = new Character("Seraphina Nightshade", 27, 120, 92, armory)

    armory = [inventory[INVENTORY.OBSIDIAN], inventory[INVENTORY.TITAN]];

    const thalgrim = new Character("Thalgrim Ironfist", 40, 52 , 95, armory);

    armory = [inventory[INVENTORY.STAR], inventory[INVENTORY.SYLVAN]];

    const lyara = new Character("Lyara Moonwhisper", 35, 29, 88, armory)

    armory = [inventory[INVENTORY.DOOM], inventory[INVENTORY.ABYSSAL]];

    const draven = new Character("Draven Blackthorn", 30, 37, 90, armory);

return characterArray.push(ragnar,seraphina,thalgrim,lyara,draven);

}
function inventoryCreation(inventory)
{
   const stormBreakerAxe = new Weapon("Stormbreaker Axe", 30, 25, 80)

   const celestialRapier = new Weapon("Celestial Rapier", 25, 18, 75)

   const obsidianWarhammer = new Weapon("Starfire Bow", 33, 22, 85)

   const startfire = new Weapon ("Starfire Bow", 33, 22, 85)

   const doomFangDagger = new Weapon("Doomfang Dagger", 28, 20, 78)


    const shadowPlate = new Armor("Shadowplate", 28, 15)

    const phantomShroud = new Armor("Phantom Shroud", 22, 12)

    const titansBulwark = new Armor("Titan's Bulwark", 35, 18)

    const sylvanGuardian = new Armor("Sylvan Guardian", 30, 14)

    const abyssalCarapace = new Armor("Abyssa Carapace", 25, 10)

   let ArrayyWeapons = inventory.push(stormBreakerAxe, celestialRapier, obsidianWarhammer,startfire, doomFangDagger, shadowPlate, phantomShroud, titansBulwark, sylvanGuardian, abyssalCarapace);

   return ArrayyWeapons;
}
function displayArmorsWeapons()
{

    console.log("Weapon list")
    console.log("---------------------");
    for (let i = 0; i < inventory.length; i++){
        if ( i < INVENTORY.SHADOW)
        {

        console.log(inventory[i].getName()
        + " : " + " Min Level " + " = " + inventory[i].getMinLevelWeapon() +
   " , "  + " Damage " + " = " + inventory[i].getDamageWeapon() + " , " + " Durability " + " = " + inventory[INVENTORY.STORM].getDurability())

        }

    }
    console.log("")
    console.log("Armor list")
    console.log("--------------------")

    for (let i = 0; i < inventory.length; i++)
    {
        if (i > INVENTORY.SHADOW){
            console.log(inventory[i].getName() + " :" + " Min Level " + "= " + inventory[i].getMinLevelArmor() + ", " + "Defense" + " = " + inventory[i].getDefenseArmor());


        }
    }

    console.log("");
    console.log("CHARACTER LIST");
    console.log("-------------");
    console.log("");

    for( let i = 0; i < characterArray.length; i++)

{
    console.log(characterArray[i].getName());
    console.log("---------");
    console.log("");
    console.log("Attributes");
    console.log("----------")
    console.log("Level: " + characterArray[i].getLevel())
    console.log("Age " + characterArray[i].getAge());
    console.log("Stamina " + characterArray[i].getStamina());
    
    console.log("----------")

    console.log("Weapons:")

    console.log("----------")

    console.log("Name: " + characterArray[i].getInventory()[0].getName());

    console.log("Min Level: " + characterArray[i].getInventory()[0].getMinLevelWeapon())

    console.log("Durability: " + characterArray[i].getInventory()[0].getDurability())

    console.log("------------");

    console.log("Armors:")

    console.log("------------");

    console.log("Name: " + characterArray[i].getInventory()[1].getName());
    console.log("Min Level: " + characterArray[i].getInventory()[1].getMinLevelArmor());
    console.log("Defense: " + characterArray[i].getInventory()[1].getDefenseArmor());

    console.log("-----------------");

}

}
