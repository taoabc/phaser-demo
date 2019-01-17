import BaseDemo from './BaseDemo'

// const RESOURCE = [
//   'resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_ske.json',
//   'resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_tex.json',
//   'resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_tex.png'
// ]

// const SKE_NAME = 'mecha_1002_101d'
// const A_NAME = 'mecha_1002_101d_show'

// const RESOURCE = [
//   'resource/dragonbones/night/night_ske.json',
//   'resource/dragonbones/night/night_tex.json',
//   'resource/dragonbones/night/night_tex.png'
// ]

// const SKE_NAME = 'night'
// const A_NAME = 'night'

// class HelloDragonBones extends BaseDemo {
//   constructor (game) {
//     super(game)

//     this._resources.push(...RESOURCE)
//   }

//   _onStart () {
//     const factory = dragonBones.PhaserFactory.factory
//     // console.log(this.game.cache.getItem('resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.json', Phaser.Cache.JSON))
//     factory.parseDragonBonesData(this.game.cache.getItem(RESOURCE[0], Phaser.Cache.JSON).data)
//     // factory.parseDragonBonesData(this.game.cache.getItem('resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_ske.dbbin', Phaser.Cache.BINARY))
//     factory.parseTextureAtlasData(
//       this.game.cache.getItem(RESOURCE[1], Phaser.Cache.JSON).data,
//       (this.game.cache.getImage(RESOURCE[2], true)).base
//     )

//     const armatureDisplay = factory.buildArmatureDisplay(SKE_NAME, A_NAME)
//     armatureDisplay.animation.play('night')

//     armatureDisplay.x = -1920 / 2
//     armatureDisplay.y = -1080 / 2
//     this.addChild(armatureDisplay)
//   }
// }

// const RESOURCE = [
//   'resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_ske.json',
//   'resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_tex.json',
//   'resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_tex.png'
// ]

// const SKE_NAME = 'mecha_1002_101d'
// const A_NAME = 'mecha_1002_101d_show'

// class HelloDragonBones extends BaseDemo {
//   constructor (game) {
//     super(game)

//     this._resources.push(...RESOURCE)
//   }

//   _onStart () {
//     const factory = dragonBones.PhaserFactory.factory
//     // console.log(this.game.cache.getItem('resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.json', Phaser.Cache.JSON))
//     factory.parseDragonBonesData(this.game.cache.getItem(RESOURCE[0], Phaser.Cache.JSON).data)
//     // factory.parseDragonBonesData(this.game.cache.getItem('resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_ske.dbbin', Phaser.Cache.BINARY))
//     factory.parseTextureAtlasData(
//       this.game.cache.getItem(RESOURCE[1], Phaser.Cache.JSON).data,
//       (this.game.cache.getImage(RESOURCE[2], true)).base
//     )

//     const armatureDisplay = factory.buildArmatureDisplay(SKE_NAME, A_NAME)
//     armatureDisplay.animation.play('idle')

//     armatureDisplay.x = 0
//     armatureDisplay.y = 0
//     this.addChild(armatureDisplay)
//   }
// }

// const RESOURCE = [
//   'resource/dragonbones/error/base/base_ske.json',
//   'resource/dragonbones/error/base/base_tex.json',
//   'resource/dragonbones/error/base/base_tex.png'
// ]

// const SKE_NAME = 'base'
// const A_NAME = 'base'

// class HelloDragonBones extends BaseDemo {
//   constructor (game) {
//     super(game)
//     this._resources.push(...RESOURCE)
//   }

//   _onStart () {
//     const factory = dragonBones.PhaserFactory.factory
//     // console.log(this.game.cache.getItem('resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.json', Phaser.Cache.JSON))
//     factory.parseDragonBonesData(this.game.cache.getItem(RESOURCE[0], Phaser.Cache.JSON).data)
//     // factory.parseDragonBonesData(this.game.cache.getItem('resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_ske.dbbin', Phaser.Cache.BINARY))
//     factory.parseTextureAtlasData(
//       this.game.cache.getItem(RESOURCE[1], Phaser.Cache.JSON).data,
//       (this.game.cache.getImage(RESOURCE[2], true)).base
//     )

//     const armatureDisplay = factory.buildArmatureDisplay(SKE_NAME, A_NAME)
//     armatureDisplay.animation.play('stand')

//     armatureDisplay.x = 0
//     armatureDisplay.y = 0
//     this.addChild(armatureDisplay)
//   }
// }

// const RESOURCE = [
//   'resource/dragonbones/error/base/base_ske.json',
//   'resource/dragonbones/error/base/base_tex.json',
//   'resource/dragonbones/error/base/base_tex.png'
// ]

// const SKE_NAME = 'base'
// const A_NAME = 'base'

// class HelloDragonBones extends BaseDemo {
//   constructor (game) {
//     super(game)
//     this._resources.push(...RESOURCE)
//   }

//   _onStart () {
//     const factory = dragonBones.PhaserFactory.factory
//     // console.log(this.game.cache.getItem('resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.json', Phaser.Cache.JSON))
//     factory.parseDragonBonesData(this.game.cache.getItem(RESOURCE[0], Phaser.Cache.JSON).data)
//     // factory.parseDragonBonesData(this.game.cache.getItem('resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_ske.dbbin', Phaser.Cache.BINARY))
//     factory.parseTextureAtlasData(
//       this.game.cache.getItem(RESOURCE[1], Phaser.Cache.JSON).data,
//       (this.game.cache.getImage(RESOURCE[2], true)).base
//     )

//     const armatureDisplay = factory.buildArmatureDisplay(SKE_NAME, A_NAME)
//     armatureDisplay.animation.play('stand')

//     armatureDisplay.x = 0
//     armatureDisplay.y = 0
//     this.addChild(armatureDisplay)
//   }
// }

const RESOURCE = [
  'resource/dragonbones/cannon/cannon_ske.json',
  'resource/dragonbones/cannon/cannon_tex.json',
  'resource/dragonbones/cannon/cannon_tex.png'
]

const SKE_NAME = 'cannon'
const A_NAME = 'cannon'

class HelloDragonBones extends BaseDemo {
  constructor (game) {
    super(game)

    this._resources.push(...RESOURCE)
  }

  _onStart () {
    const factory = dragonBones.PhaserFactory.factory
    // console.log(this.game.cache.getItem('resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.json', Phaser.Cache.JSON))
    factory.parseDragonBonesData(this.game.cache.getItem(RESOURCE[0], Phaser.Cache.JSON).data)
    // factory.parseDragonBonesData(this.game.cache.getItem('resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_ske.dbbin', Phaser.Cache.BINARY))
    factory.parseTextureAtlasData(
      this.game.cache.getItem(RESOURCE[1], Phaser.Cache.JSON).data,
      (this.game.cache.getImage(RESOURCE[2], true)).base
    )

    const armatureDisplay = factory.buildArmatureDisplay(SKE_NAME, A_NAME)
    armatureDisplay.animation.play('stand_2')

    armatureDisplay.x = -1920 / 2
    armatureDisplay.y = -1080 / 2 - 200
    this.addChild(armatureDisplay)
  }
}

export default HelloDragonBones
