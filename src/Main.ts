
class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();
        this.addEventListener(egret.Event.ADDED,this.startGame,this);
    }

    public startGame(){
        this.removeEventListener(egret.Event.ADDED,this.startGame,this);
        var game =new Game(this);
    }

}
