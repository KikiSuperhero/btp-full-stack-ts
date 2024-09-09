import * as cds from '@sap/cds';
import type {Composer} from '#cds-models/music';

module.exports = class MusicService extends cds.ApplicationService { async init() {
    const {Composers, Pieces} = await import('#cds-models/MusicService');

    this.after('READ', Pieces, async (data) => {
        for(let piece of data) {
            const composer = await SELECT.from(Composers, piece.composer_ID) as Composer;
            if(piece.publishdate > composer.dateOfdeath) {
                piece.name += ' (posthumous)';
            }
        }
    });

    return super.init()
}}