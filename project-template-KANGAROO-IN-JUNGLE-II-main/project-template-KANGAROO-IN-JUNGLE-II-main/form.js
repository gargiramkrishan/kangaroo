class Form
{
    constructor()
    {
        this.resetButton = createButton("Reset")
    }
    setElements()
    {
        this.resetButton.position(width/2,height/2)
    }
    handle()
    {
        this.resetButton.mousePressed(()=>
        {
            gameState = PLAY;
        })
        window.location.reload()
    }
    display()
    {
        this.handle();
    }
}