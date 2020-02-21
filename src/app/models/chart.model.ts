export default class chartModel {
    constructor(
        public title: string,
        public type: string,
        public data: Array<Array<any>>,
        public columnNames: Array<string> = ['Month', 'Rate'],
        public options?: {}
    ) { }
}

