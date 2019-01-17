// import Phaser from 'phaser-ce'
const Phaser = window.Phaser

const BACKGROUND_URL = 'resource/background.png'
class BaseDemo extends Phaser.Sprite {
  constructor (game) {
    super(game, 0.0, 0.0)

    this._resources = [BACKGROUND_URL]
    this._background = null

    setTimeout(() => {
      this.x = this.stageWidth * 0.5
      this.y = this.stageHeight * 0.5
      this._loadResources()
    })
  }

  _loadResources () {
    let loadCount = 0
    for (const resource of this._resources) {
      if (resource.indexOf('dbbin') > 0) {
        this.game.load.binary(resource, resource)
      }
      else if (resource.indexOf('png') > 0) {
        this.game.load.image(resource, resource)
      }
      else {
        this.game.load.json(resource, resource)
      }
      loadCount++
    }

    this.game.load.onFileComplete.add(() => {
      loadCount--
      if (loadCount === 0) {
        const texture = new PIXI.Texture((this.game.cache.getImage(BACKGROUND_URL, true)).base)
        this._background = new Phaser.Sprite(this.game, 0.0, 0.0, texture)
        console.log(this._background)
        this._background.x = -this._background.texture.width * 0.5
        this._background.y = -this._background.texture.height * 0.5
        this.addChild(this._background)
        //
        this._onStart()
      }
    })
    this.game.load.start()
  }

  createText (string) {
    const style = { font: '14px', fill: '#FFFFFF', align: 'center' }
    const text = this.game.add.text(0.0, 0.0, string, style)
    text.x = -text.width * 0.5
    text.y = this.stageHeight * 0.5 - 100
    this.addChild(text)

    return text
  }

  get stageWidth () {
    return this.game.width
  }

  get stageHeight () {
    return this.game.height
  }
}

export default BaseDemo
