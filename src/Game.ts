class Game{
    private _root:egret.DisplayObjectContainer;
    public constructor(root:egret.DisplayObjectContainer){
        this._root = root;
        this.creatGroupRect();
        this.craeteTimer();
        this.startGame();
    }

    private _timePanel:TimerPanel;
    private craeteTimer() {
        this._timePanel = new TimerPanel();
        this._timePanel.addEventListener("GameOver",this.gameOver,this);
        this._root.addChild(this._timePanel);
    }

    private _row:number;
    private _Group:Array<GroupRects>;
    private _rectRoot:egret.Sprite;

    private creatGroupRect(){
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._row = Data.getRectRow();
        this._Group = [];
        
        var Rects:GroupRects;
        for(var i=0;i<this._row;i++){
            Rects = new GroupRects();
            Rects.addEventListener("GameOver",this.gameOver,this);
            Rects.addEventListener("ClickRight",this.nextRow,this);
            Rects._currentRectRow = i;
            this._Group.push(Rects);
            Rects.y = Data.getRectWidth()/4*i;
            this._rectRoot.addChild(Rects);
        }

        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    }


    private gameOverPanel:GameOverPanel;
    private gameOver(){
        this._timePanel.stop();
        if( !this.gameOverPanel){
            this.gameOverPanel = new GameOverPanel();
            this.gameOverPanel.addEventListener("startGame",this.startGame,this);
        }
        this._root.addChild(this.gameOverPanel);
    }

    private startGame() {
        Data.score = 0;
        for(var i= 0;i<Data._rectRow;i++){
            this._Group[i].init();
            this._Group[i].y = Data.getRectWidth()/4*i;
            this._Group[i]._currentRectRow = i;
            if(i != this._row -1 ){
                this._Group[i].creatBlankRect();
            }
        }
        this._timePanel.start();
    }

    private nextRow(){

        for(var i=0;i<this._row;i++){
            this._Group[i]
        }
        
        for(var i=0;i<this._row;i++){
            this._Group[i].move();
        }
        Data.score++;
    }




}