export class Field {
    id: number;
    type: string;
    label: string;
    value: string;
    constructor(id: number, type: string, label: string, value: string) {
        this.id = id;
        this.type = type;
        this.label = label;
        this.value = value;
    }
}