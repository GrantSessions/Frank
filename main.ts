input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        . . . . .
        . . . . .
        # # # # #
        `)
    music.playMelody("C C C C C C C C ", 120)
    basic.pause(2000)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        # . . . #
        `)
    music.playMelody("B B B B C5 B B B ", 20)
    basic.pause(30000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . # #
        . . # # #
        . . # # .
        . # . . .
        # . . . .
        `)
    basic.pause(2000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Frank")
})
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # . # . #
        . . # . .
        # . . . #
        . # # # .
        `)
})
