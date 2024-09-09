const cds = require('@sap/cds');
import {Request} from "@sap/cds";

module.exports = class MusicService extends cds.ApplicationService { init() {
    this.after('READ', 'MusicService.Composers', (composers) => {
        composers.forEach(composer => {
            composer.lastname += ' the GOAT';
        })
    })

    return super.init()
}}