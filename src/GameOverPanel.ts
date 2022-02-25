class GameOverPanel extends egret.Sprite {

    public constructor() {
        super();
        this.draw();
        this.addEventListener(egret.Event.ADDED,this.showText,this);
        this.startLoad();
    }

    private txt: egret.TextField;
    private draw() {
        var width = egret.MainContext.instance.stage.stageWidth;
        var height = egret.MainContext.instance.stage.stageHeight;

        this.graphics.beginFill(0x111111, 0.5);
        this.graphics.drawRect(0, 0, width, height);
        this.graphics.endFill();

        this.txt = new egret.TextField;
        this.txt.textColor = 0xff0000;
        this.txt.width = width;
        this.txt.y = 200;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.txt);

    }

    private startGame(){
        this.parent.removeChild(this);
        
        this.dispatchEventWith("startGame")
    }       

    private showText(){
        this.txt.text = "你努力走了" + Data.score + "步";
    }


    private startLoad():void {
        //创建 ImageLoader 对象
        var loader:egret.ImageLoader = new egret.ImageLoader();
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url:string = "resource/assets/restart.png";
        //开始加载
        loader.load(url);
    }
    private onLoadComplete(event:egret.Event):void {
        var loader:egret.ImageLoader = <egret.ImageLoader>event.target;
        //获取加载到的纹理对象
        var bitmapData:egret.BitmapData = loader.data;
        //创建纹理对象
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;
        //创建 Bitmap 进行显示
        var bitMap:egret.Bitmap = new egret.Bitmap(texture);
        var width = egret.MainContext.instance.stage.stageWidth;
        var height = egret.MainContext.instance.stage.stageHeight;
        bitMap.x = (width - 200) / 2;
        bitMap.y = (height - 100) / 2;
        bitMap.touchEnabled = true;
        bitMap.width = 200;
        bitMap.height = 50;
        this.addChild(bitMap);
        bitMap.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
    }




}