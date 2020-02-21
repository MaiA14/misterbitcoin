import TransferModel from './transfer.model';

export default class UserModel {

    constructor
    (
        public name: string,
        public amount: number,
        public transfers: TransferModel[]
    ) {}
}