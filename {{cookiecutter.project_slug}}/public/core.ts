export class HelloWorld {
    language: string;

    constructor(language?: string) {
        this.language = language ?? 'english';
    }

    message(): string {
        if (this.language === 'english') {
            return 'Hello World';
        } else if (this.language === 'spanish') {
            return 'Hola Mundo';
        } else {
            return 'Unknown language'
        }
    }
}   