class GroupRects extends egret.Sprite{

    public constructor(){
        super();
        this.createRects();
    }

    private _rects:Array<Rect> ;
    private createRects(){
        this._rects = [];
        for(var i =0;i<4;i++){
            var rect:Rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width*i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickRect,this);
        }
    }


    public _currentRectRow:number = 0;
    private onClickRect(evt:egret.TouchEvent){

        evt.target.OnRectClick();
        if(evt.target.type == RectType.CLICKABLE && evt.target.parent._currentRectRow == Data.getRectRow() -2){
            console.log("你点击的是第" + evt.target.parent._currentRectRow + "行")
            this.dispatchEventWith("ClickRight");
        }
        else{
            this.dispatchEventWith("GameOver");
            console.log("你点击的是第" + evt.target.parent._currentRectRow + "行")
            console.log("错了");
        }
    }


    private _currentBlankRectIndex:number=0;
    public creatBlankRect(){
        this.init();
        var n:number = Math.random();
        if(n>=0 && n<0.25){
            this._currentBlankRectIndex = 0;
        }
        else if(n>=0.25 && n< 0.5){
            this._currentBlankRectIndex = 1;
        }
        else if(n>=0.5 && n<0.75){
            this._currentBlankRectIndex = 2;
        }
        else{
            this._currentBlankRectIndex =3;
        }
        this._rects[this._currentBlankRectIndex].type = RectType.CLICKABLE;
    }

    public init(){
        for(var i=0;i<4;i++){
            this._rects[i].type = RectType.NONCLICKABLE;
            this._rects[i].draw();
        }
    }

    public move(){
        this._currentRectRow++;
        if(this._currentRectRow == Data.getRectRow() ){
            this._currentRectRow = 0;            
            this.creatBlankRect()
        }
        this.y =this._currentRectRow*(Data.getRectWidth()/4);

    }


}