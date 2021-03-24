controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e e e . . . 
        . . . . . . . . . . e e e . . . 
        . . . . . . . . . . e e e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpaceShip, 160, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let Hostile_Ship: Sprite = null
let SpaceShip: Sprite = null
SpaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    f . 8 8 8 8 8 8 8 9 9 . . . . . 
    . f 8 8 8 8 8 8 8 9 9 . . . . . 
    . f 8 8 8 8 8 8 8 8 8 . . . . . 
    f . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . . . . f f f . f f 5 . . . . 
    . . . . f . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(SpaceShip, 200, 200)
SpaceShip.setStayInScreen(true)
info.setLife(5)
Hostile_Ship.setFlag(SpriteFlag.AutoDestroy, true)
game.onUpdateInterval(1000, function () {
    Hostile_Ship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 . f . . . 
        . . . . 9 9 6 6 6 6 6 f . . . . 
        . . . . 6 6 6 6 6 6 6 . f . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . 5 1 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Hostile_Ship.setVelocity(-74, 0)
    Hostile_Ship.setPosition(160, randint(5, 115))
})
