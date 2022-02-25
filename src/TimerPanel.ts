class TimerPanel extends egret.Sprite{

    public constructor(){
        super();
        this.draw();
        this.createTimer();
    }

    private _txt:egret.TextField;
    private draw(){
        this._txt = new egret.TextField();
        this._txt.width = egret.MainContext.instance.stage.stageWidth;
        this._txt.y =100;
        this._txt.textColor = 0xff0000;
        this._txt.textAlign = egret.HorizontalAlign.CENTER;
        this._txt.text = "20'00''"
        this.addChild(this._txt);

    }

    private _timer:egret.Timer;
    private createTimer(){
        this._timer = new egret.Timer(1000, 20);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this.start();
    }

    private _timers =20;
    private timerFunc(event: egret.TimerEvent){
        this._timers-=1;
        this._txt.text = this._timers +"'00''";
        egret.log("timerFunc count" + (<egret.Timer>event.target).currentCount);
        // this.onTimerCom();
    }

    private timerComFunc(){
        this._txt.text = "00'00''";
        // this._timer.stop();
        console.log("倒计时结束");
        this.dispatchEventWith("GameOver");
    }

    public start(){
        this._txt.text = "20'00''";
        this._timers =20;
        this._timer.reset();
        this._timer.start();
    }

    public stop(){
        this._timer.stop();
    }


}