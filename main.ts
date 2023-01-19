input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Tortoise)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    ABC += 1
})
let ABC = 0
basic.showString("Hi")
basic.forever(function () {
	
})
