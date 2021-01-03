export class destino{
    private selected: boolean = false;
    public service: string[];
    constructor(public n:string, public u:string){
        this.service=['desayuno',  'pileta'];
    }
    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s: boolean){
        this.selected = s;
    }
}