
export default class Character{

    constructor(name, level, age, stamina, inventory)
    {
        this.name = name;
        this.level = level;
        this.age = age;
        this.stamina = stamina;
        
        this.inventory = inventory;


    }

    getStamina ()
    {
        return this.stamina;
    }
    getInventory()
    {
        return this.inventory;
    }
    getName(){
        return this.name;
    }
    getAge()
    {
        return this.age;
    }
    getLevel()
    {
        return this.level;
    }
    fumble(weapon)
    {
        let newWeapon = Math.floor(Math.random()* weapon.length)

        if (this.level >= newWeapon.getMinLevelWeapon())
        {
            let totalDamage = Math.floor((newWeapon.getDamageWeapon() + this.level)/4);

            let armorDefense = this.inventory[1].getDefenseArmor() - totalDamage;

            this.stamina =- 5;

            this.inventory[0].defense =- 2;
            
        }
    }



}