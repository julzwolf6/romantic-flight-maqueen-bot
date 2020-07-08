let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
music.playTone(247, music.beat(BeatFraction.Whole))
music.playTone(277, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(311, music.beat(BeatFraction.Double))
music.playTone(277, music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Whole))
music.playTone(311, music.beat(BeatFraction.Whole))
music.playTone(370, music.beat(BeatFraction.Double))
music.playTone(277, music.beat(BeatFraction.Double))
music.playTone(311, music.beat(BeatFraction.Whole))
music.playTone(370, music.beat(BeatFraction.Whole))
music.playTone(311, music.beat(BeatFraction.Half))
music.playTone(277, music.beat(BeatFraction.Half))
music.playTone(370, music.beat(BeatFraction.Half))
music.playTone(415, music.beat(BeatFraction.Half))
music.playTone(247, music.beat(BeatFraction.Whole))
music.playTone(415, music.beat(BeatFraction.Whole))
music.playTone(370, music.beat(BeatFraction.Whole))
music.playTone(311, music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Whole))
music.playTone(277, music.beat(BeatFraction.Whole))
music.playTone(311, music.beat(BeatFraction.Whole))
music.playTone(277, music.beat(BeatFraction.Double))
