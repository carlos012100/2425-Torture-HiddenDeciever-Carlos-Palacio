export default class Weapon 
{
    constructor(name, minLevel, damage, durability)
    {
        this.name = name;
        this.minLevel = minLevel;
        this.damage = damage;
        this.durability = durability;

    }

    getMinLevelWeapon()
    {
        return this.minLevel;

    }

    getDamageWeapon()
    {
        return this.damage;
    }
    getDurability()
    {
        return this.durability;
    }
    getName()
    {
        return this.name;
    }
}
