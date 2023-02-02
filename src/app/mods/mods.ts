export interface Mod {
    name: string,
    slug: string,
    url: string,
    details?: string,
    alterations?: string[],
}

export const mods: Mod[] = [
    {
        name: 'Ad Astra!',
        slug: 'ad-astra',
        url : 'https://www.curseforge.com/minecraft/mc-mods/ad-astra'
    },
    {
        name: 'Additional Structures',
        slug: 'additional-structures-fabric',
        url : 'https://www.curseforge.com/minecraft/mc-mods/additional-structures-fabric'
    },
    {
        name: 'AdventureZ',
        slug: 'adventurez',
        url : 'https://www.curseforge.com/minecraft/mc-mods/adventurez'
    },
    {
        name: 'Animal Feeding Trough',
        slug: 'animal-feeding-trough',
        url : 'https://www.curseforge.com/minecraft/mc-mods/animal-feeding-trough'
    },
    {
        name: 'Appleskin',
        slug: 'appleskin',
        url : 'https://www.curseforge.com/minecraft/mc-mods/appleskin'
    },
    {
        name: 'Applied Energistics 2',
        slug: 'applied-energistics-2',
        url : 'https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2'
    },
    {
        name: 'Audioplayer',
        slug: 'audioplayer',
        url : 'https://www.curseforge.com/minecraft/mc-mods/audioplayer'
    },
    {
        name: 'Awesome Dungeon',
        slug: 'awesome-dungeon-fabric',
        url : 'https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-fabric'
    },
    {
        name: 'Awesome Dungeon Nether',
        slug: 'awesome-dungeon-nether-fabric',
        url : 'https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-nether-fabric'
    },
    {
        name: 'Awesome Dungeon End',
        slug: 'awesome-dungeon-the-end-fabric',
        url : 'https://www.curseforge.com/minecraft/mc-mods/awesome-dungeon-the-end-fabric'
    },
    {
        name: 'Better Animals Plus',
        slug: 'betteranimalsplus',
        url : 'https://www.curseforge.com/minecraft/mc-mods/betteranimalsplus'
    },
    {
        name: 'Better End',
        slug: 'betterend',
        url : 'https://www.curseforge.com/minecraft/mc-mods/betterend'
    },
    {
        name: 'Better Nether',
        slug: 'betternether',
        url : 'https://www.curseforge.com/minecraft/mc-mods/betternether'
    }
];
