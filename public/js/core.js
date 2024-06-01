export class HelloWorld {
    constructor(language) {
        this.language = language !== null && language !== void 0 ? language : 'english';
    }
    message() {
        if (this.language === 'english') {
            return 'Hello World';
        }
        else if (this.language === 'spanish') {
            return 'Hola Mundo';
        }
        else {
            return 'Unknown language';
        }
    }
}
