import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {ViewLocator} from 'aurelia-framework';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {

    ViewLocator.prototype.convertOriginToViewUrl = (origin) => {
        let moduleId = origin.moduleId;
        let id = moduleId.endsWith('.js') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
        return `${id.replace('viewmodels', 'views')}.html`;
    };

    aurelia.use.standardConfiguration();
    aurelia.start().then(a => a.setRoot('viewmodels/shell', document.getElementById('app-container')));
}