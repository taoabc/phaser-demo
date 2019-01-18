import 'pixi';
import 'p2';
import Phaser from 'phaser-ce';
import 'dragon-bones';
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

function getDbsPaths(name: string, bin: boolean = false) {
  const basePath = `../resource/dragonbones/${name}/${name}`;
  let ske = basePath + '_ske.json';
  if (bin) {
    ske = basePath + '_ske.dbbin';
  }
  return {
    ske,
    atlas: basePath + '_tex.png',
    tex: basePath + '_tex.json',
  };
}

const game = new Phaser.Game(1920, 1080, Phaser.AUTO, null, { preload, create, render });

async function preload() {
  dragonBones.PhaserFactory.init(game);
  const { ske, atlas, tex } = getDbsPaths('right_abcd');
  const dbsPhaser = new DragonbonesPhaser(game);
  await dbsPhaser.loadResources(ske, tex, atlas);
  game.world.add(dbsPhaser);
  const ap = dbsPhaser.getArmatureDisplay('right_abcd');
  if (ap) {
    ap.x = -1920 / 2;
    ap.y = -1080 / 2;
    ap.animation.play('right_a');
  }
}

function create(): void {
  // console.log('create');
}

function render(): void {
  dragonBones.PhaserFactory.factory.dragonBones.advanceTime(-1.0);
}
