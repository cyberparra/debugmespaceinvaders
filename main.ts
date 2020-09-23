namespace SpriteKind {
    export const bomb = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bomb = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cannone, 50, 50)
    bomb.setKind(SpriteKind.bomb)
    music.pewPew.play()
})
let bomb: Sprite = null
let cannone: Sprite = null
cannone = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . e e e e e e e e e e e . . 
    . . e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e e 
    . e e e e e e e e e e e e e e e 
    . e e e e e e e e e e e e e e e 
    `, SpriteKind.Player)
cannone.y = 110
controller.moveSprite(cannone, 100, 0)
