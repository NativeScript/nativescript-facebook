export class DeepLink {

    constructor(data?: Partial<DeepLink>) {
        Object.assign(this, data);
    }
    target: string;
    ref: string;
    promoCode: string;
}