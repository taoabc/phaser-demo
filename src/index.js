import HelloDragonBones from './HelloDragonBones'

const Phaser = window.Phaser

var game = new Phaser.Game(1920, 1080, Phaser.AUTO, null, {
  create: function () {
    dragonBones.PhaserFactory.init(this.game) // Static factory init.
    //
    this.world.add(new HelloDragonBones(this.game))
    // this.world.add(new AnimationBase(this.game))
    // this.world.add(new DragonBonesEvent(this.game))
    // this.world.add(new AnimationLayer(this.game))
    // this.world.add(new BoneOffset(this.game))
    // this.world.add(new InverseKinematics(this.game))
    // this.world.add(new BoundingBox(this.game))
    // this.world.add(new ReplaceSlotDisplay(this.game))
    // this.world.add(new ReplaceSkin(this.game)) TODO
    // this.world.add(new ReplaceAnimation(this.game))
    // this.world.add(new coreElement.Game(this.game))
    // this.world.add(new PerformanceTest(this.game))
  },
  render: function () {
    dragonBones.PhaserFactory.factory.dragonBones.advanceTime(-1.0) // update.
  }
})
