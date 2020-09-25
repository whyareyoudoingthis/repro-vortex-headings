import { log } from "vortex-api";
import { IExtensionContext } from 'vortex-api/lib/types/api';
import PanelHeading from './PanelHeading';
import PageHeading from './PageHeading';

//This is the main function Vortex will run when detecting the game extension. 
function main(context: IExtensionContext) {
    context.once(() => {
        log('debug', 'initialising your new extension!')
    });
    context.registerMainPage('extensions', 'Panel Heading', PanelHeading, {
        group: 'per-game'
    });
    context.registerMainPage('extensions', 'Page Heading', PageHeading, {
        group: 'per-game'
    });
    return true;
}

module.exports = {
    default: main,
};