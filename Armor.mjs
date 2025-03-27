export default class Armor
{
    constructor(name, minLevel, defense)
    {
        this.name = name;
        this.minLevel = minLevel;
        this.defense = defense;

    }

    getName()
    {
        return this.name;
    }
    getMinLevelArmor()
    {
        return this.minLevel;
    }
    getDefenseArmor()
    {
        return this.defense;
    }

}