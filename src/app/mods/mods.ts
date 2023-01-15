export interface Mod {
    name: string,
    slug: string,
    url: string,
    details: string,
    alterations: string[],
}

export const mods: Mod[] = [
    {
        name       : 'Mod 1',
        slug       : 'mod-1',
        url        : 'http://localhost:8080',
        details    : 'mod details',
        alterations: [ 'fist alteration', 'second alteration' ]
    },
    {
        name       : 'Mod 2',
        slug       : 'Mod 2',
        url        : 'http://localhost:8080/2',
        details    : 'mod 2 details',
        alterations: [ 'fist alteration 2', 'second alteration 2' ]
    },
    {
        name       : 'mod 3',
        slug       : 'mod 3',
        url        : 'http://localhost:8080/3',
        details    : 'mod 3 details',
        alterations: [ 'fist alteration 3', 'second alteration 3' ]
    },
    {
        name       : 'mod 4',
        slug       : 'mod 4',
        url        : 'http://localhost:8080/4',
        details    : 'mod 4 details',
        alterations: [ 'fist alteration 4', 'second alteration 4' ]
    },
    {
        name       : 'mod 5',
        slug       : 'mod 5',
        url        : 'http://localhost:8080/5',
        details    : 'mod 5 details',
        alterations: [ 'fist alteration 5', 'second alteration 5' ]
    },

    {
        name       : 'mod 6',
        slug       : 'mod 6',
        url        : 'http://localhost:8080/6',
        details    : 'mod 6 details',
        alterations: [ 'fist alteration 6', 'second alteration 6' ]
    }
];
