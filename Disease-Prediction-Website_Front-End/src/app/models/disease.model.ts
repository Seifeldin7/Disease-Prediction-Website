export class Disease {
    id:number;
    name:string;
    description:string;
    image:string;
    fields: any[]
    constructor(id:number,name:string,description:string,image:string, fields: any[]){
      this.id=id;
      this.name=name;
      this.description=description;
      this.image=image;
      this.fields=fields;
    }
  }