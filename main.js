class startEngine{
    constructor(title, color, type, model){
        this.title = title;
        this.color = color;
        this.type = type;
        this.model = model;
    }
}

class Car extends startEngine{
    constructor(title, color, type, model,hp){
        super(title, color, type, model);
        this.hp = hp
    }
}




