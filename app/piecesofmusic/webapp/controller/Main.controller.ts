import MessageBox from "sap/m/MessageBox";
import Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace piecesofmusic.controller
 */
export default class Main extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }

    public onPress(oEvent: Event): void {
        const oSource = oEvent.getSource();
        let infoText : string;
        if ((oSource.getProperty('title') as string).includes('posthumous')) {
            infoText = 'The composer has already died when this piece was published.';
        } else {
            infoText = 'The composer was alive when this piece was published.';
        }
        MessageBox.information(infoText);
    }
}