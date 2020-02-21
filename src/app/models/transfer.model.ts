export default class TransferModel {

    constructor
    (
        public toId: string,
        public to: string,
        public at: number,
        public amount: number
    ) {}
}