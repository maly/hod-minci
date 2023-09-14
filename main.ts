input.onGesture(Gesture.Shake, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(500)
    basic.showLeds(`
        . # # . .
        # . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
})
basic.showLeds(`
    . # # . .
    # . . # .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.forever(function () {
	
})
