const panaritiuHost = 'http://spaf.go.ro:5001';

export const environment = {
    production            : true,
    galleriaImagesPath    : 'assets/images/showcase/',
    avatarSourceUrl       : 'https://source.boringavatars.com/beam/120/',
    panaritiuBackendRoutes: {
        status           : `${ panaritiuHost }/status`,
        start            : `${ panaritiuHost }/start`,
        stop             : `${ panaritiuHost }/stop`,
        mobTeleport      : `${ panaritiuHost }/mob-teleport`,
        mobTeleportAdd   : `${ panaritiuHost }/mob-teleport-add`,
        mobTeleportDelete: `${ panaritiuHost }/mob-teleport-delete`,
        downloadMods     : `${ panaritiuHost }/download-mods`
    }
};
