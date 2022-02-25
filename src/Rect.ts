class Rect extends egret.Sprite{



    public constructor() {
        super();
        this.touchEnabled = true;
        this.draw();
        
    }

    private _colors:Array<number> = [0xffffff,0x000000,0x000fff,0xff0000];
    private _currentcolor:number = 0;

    public draw(){
        this.graphics.lineStyle(1,0x000000);
        this.graphics.beginFill(this._colors[this._currentcolor]);
        this.graphics.drawRect(0,0,Data.getRectWidth()/4,Data.getRectWidth()/4);
        this.graphics.endFill();
        
    }

    private _type:string = RectType.NONCLICKABLE;
    public get type():string{
        return this._type;
    } 



    public set type(val:string){
        this._type = val;
        if(val == RectType.NONCLICKABLE){
            console.log("白");
            this._currentcolor = 0;
        }
        else{
            this._currentcolor = 1;
            console.log("黑");
        }
        this.draw()
    }


    public OnRectClick(){
        if(this._type == RectType.CLICKABLE){
            this._currentcolor = 2;
        }
        else{
            this._currentcolor = 3;
        }
        this.draw();
    }



}