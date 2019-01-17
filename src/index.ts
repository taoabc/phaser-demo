import 'pixi';
import 'p2';
import Phaser from 'phaser-ce';

import DragonbonesPhaser from './dragonbones-phaser';

// const dragonbones = window.dragonbones;

// const game = new Phaser.Game(1920, 1080, Phaser.AUTO, null, {
//   create: (): void => {
//     dragonbones.PhaserFactory.init(this.game); // Static factory init.
//     //
//     this.world.add(new DragonbonesPhaser(this.game));
//     // this.world.add(new AnimationBase(this.game))
//     // this.world.add(new DragonBonesEvent(this.game))
//     // this.world.add(new AnimationLayer(this.game))
//     // this.world.add(new BoneOffset(this.game))
//     // this.world.add(new InverseKinematics(this.game))
//     // this.world.add(new BoundingBox(this.game))
//     // this.world.add(new ReplaceSlotDisplay(this.game))
//     // this.world.add(new ReplaceSkin(this.game)) TODO
//     // this.world.add(new ReplaceAnimation(this.game))
//     // this.world.add(new coreElement.Game(this.game))
//     // this.world.add(new PerformanceTest(this.game))
//   },
//   render: (): void => {
//     dragonbones.PhaserFactory.factory.dragonBones.advanceTime(-1.0); // update.
//   },
// });

const game = new Phaser.Game(1920, 1080, Phaser.AUTO, null, { preload, create });

function preload(): void {
  game.world.add(new DragonbonesPhaser(game));
}

function create(): void {
  console.log('create');
}

function render(): void {
  console.log('render');
}
