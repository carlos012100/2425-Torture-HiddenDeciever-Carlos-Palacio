
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

}