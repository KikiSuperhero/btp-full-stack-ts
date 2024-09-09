import * as cds from '@sap/cds';
import type {Composer} from '#cds-models/music';

module.exports = class MusicService extends cds.ApplicationService { async init() {
    const {Composers, Pieces} = await import('#cds-models/MusicService');

    this.after('READ', Pieces, async (data) => {
        for(let piece of data) {
            let composerId = piece.composer?.ID ? piece.composer.ID : piece.composer_ID; 
            const composer = await SELECT.from(Composers, composerId) as Composer;
            if(piece.publishdate > composer.dateOfdeath) {
                let nameAddOn : string = ' (posthumous)';
                piece.name += nameAddOn;
            }
        }
    });

    return super.init()
}}