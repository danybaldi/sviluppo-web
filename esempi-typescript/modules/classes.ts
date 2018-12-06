export class Lesson {
    length:number
    private description?:string;

    constructor(len:number){
        this.length=len;
    }
}

export class VideoLesson extends Lesson {
    typeVideo:string
    constructor(len:number,type:string){
        super(len);
        this.typeVideo = type;
    }
}