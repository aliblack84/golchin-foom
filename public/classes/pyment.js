export class pyment {
    constructor(resipient, details, amount) {
        this.resipient = resipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.resipient} and ${this.amount} for ${this.details}`;
    }
}
