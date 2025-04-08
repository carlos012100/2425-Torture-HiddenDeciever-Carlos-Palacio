
export default class Character{


    //inventory identyfiers
    static ARMOR = 0;
    //the following only valid BEFORE reasigning weapons to characters
    static WEAPON = 1;

    // id of weapons 
    static STORM = 0
    static CELESTIA = 1
    static OBSIDIAN = 2
    static STAR = 3
    static DOOM = 4

    //id of armors
    static SHADOW = 0
    static PHANTOM = 1
    static TITAN = 2
    static SYLVAN = 3
    static ABYSSAL = 4

    //ID of CHaracters 

    static RAGNAR = 0
    static SERAPH = 1
    static THAL = 2
    static LYA = 3
    static DRAVE = 4 


    constructor(name, level, age, stamina, inventory = [])
    {
        this.name = name;
        this.level = level;
        this.age = age;
        this.stamina = stamina;
        
        this.inventory = inventory;

        this.totalDamage = 0;




    }
    fumble()
    {
        
        let weaponSelected = Math.floor(Math.random() * (this.inventory.length - 1)) + 1;

        this.totalDamage = Math.ceil((this.inventory[weaponSelected].damage + this.level)/4);

        this.inventory[Character.ARMOR].defense -= this.totalDamage;

        this.stamina -= 5;

        this.inventory[weaponSelected].durability -= 2

        return weaponSelected;

    }




}