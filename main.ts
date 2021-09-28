input.onLogoEvent(TouchButtonEvent.Touched, function () {
    gamestart = 1
    player = game.createSprite(2, 4)
    astroid = game.createSprite(randint(0, 4), 0)
    astroid.turn(Direction.Right, 90)
    astroid.set(LedSpriteProperty.Brightness, 50)
})
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
function move_astroid () {
    basic.pause(speed)
    astroid.move(1)
    score += 1
}
function lives2 () {
    if (lives == 0) {
        basic.showIcon(IconNames.Skull)
        basic.showString("Score:")
        basic.showNumber(score)
        game.pause()
    } else {
        basic.showNumber(lives)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }
}
function setastriod () {
    astroid.set(LedSpriteProperty.X, randint(0, 4))
    astroid.set(LedSpriteProperty.Y, 0)
}
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let astroid: game.LedSprite = null
let player: game.LedSprite = null
let score = 0
let gamestart = 0
let lives = 0
let speed = 0
speed = 550
lives = 3
gamestart = 0
score = 0
lives2()
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    if (gamestart == 1) {
        if (speed == 49) {
            speed = 50
        }
        if (astroid.isTouching(player)) {
            lives += -1
            lives2()
            setastriod()
        } else if (astroid.get(LedSpriteProperty.Y) == 4) {
            setastriod()
        } else {
            move_astroid()
        }
        if (speed > 300) {
            speed += -5
        } else if (speed > 150) {
            speed += -2
        } else if (speed > 75) {
            speed += -1
        }
    }
})
