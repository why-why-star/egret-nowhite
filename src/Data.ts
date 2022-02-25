class Data{
    public static _rectWidth:number=0;
    public static getRectWidth(){
        if(Data._rectWidth == 0){
            var stage:egret.Stage = egret.MainContext.instance.stage;
            Data._rectWidth = stage.stageWidth;
        }
        return Data._rectWidth;
    } 

    public static getStageHeight(){
        return egret.MainContext.instance.stage.stageHeight;
    }

    public static score:number =0;
    public static _rectRow = 0;
    public static getRectRow(){
        if(Data._rectRow == 0){
            var stage:egret.Stage = egret.MainContext.instance.stage;
            Data._rectRow = Math.ceil( stage.stageHeight/(this.getRectWidth()/4) ) -1;
        }
        return Data._rectRow;
    }

}