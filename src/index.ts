import 'pixi';
import 'p2';
import Phaser from 'phaser-ce';
import 'dragon-bones';
// import DragonbonesPhaser from './dragonbones-phaser';
import DragonbonesLoader from './dragonbones-loader';

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

function getDbPaths(name: string, bin: boolean = false) {
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

// async function play1() {
//   await db1.whenResourceLoaded();
//   const ap = db1.createArmatureDisplay('right_abcd');
//   if (ap) {
//     // ap.x = 0;
//     // ap.y = 0;
//     ap.animation.play('right_a');
//   }
// }

// async function play2() {
//   await db2.whenResourceLoaded();
//   for (let i = 0; i < 100; ++i) {
//     const ap = db2.createArmatureDisplay('red_envelope');
//     if (ap) {
//       ap.x = game.rnd.between(100, 1920 - 100);
//       ap.y = game.rnd.between(- 1000, 1080);
//       ap.animation.play('fly');
//       game.add.tween(ap).to({ y: 1080 + 300 }, game.rnd.between(2000, 5000),
//         Phaser.Easing.Linear.None, true, 0, -1);
//     }
//   }
// }

// async function play3() {
//   const paths2 = getDbPaths('red_envelope');
//   const promises = [];
//   for (let i = 0; i < 100; ++i) {
//     const db = new DragonbonesPhaser(game, paths2);
//     game.world.add(db);
//     await db.whenResourceLoaded();
//     const ap = db.createArmatureDisplay('red_envelope');
//     if (ap) {
//       ap.x = game.rnd.between(100, 1920 - 100);
//       ap.y = game.rnd.between(-1000, 1080);
//       ap.animation.play('fly');
//       game.add.tween(ap).to({ y: 1080 / 2 + 300 }, 3000,
//         Phaser.Easing.Linear.None, true, game.rnd.between(1000, 5000), -1);
//     }
//   }
// }

// async function play4() {
//   await cannon.whenResourceLoaded();
//   const ap = cannon.createArmatureDisplay('cannon');
//   if (ap) {
//     // ap.x = 0;
//     // ap.y = 0;
//     ap.animation.play('stand_2');
//   }
// }

// async function play5() {
//   await cannon.whenResourceLoaded();
//   const paths = getDbPaths('right_abcd');
//   const dbsPhaser = new DragonbonesPhaser(game, paths);
//   game.world.add(dbsPhaser);
//   await dbsPhaser.whenResourceLoaded();
//   console.log('hahaha')
// }

const game = new Phaser.Game(1920, 1080, Phaser.AUTO, null, { preload, create, render });

// async function preloadOld() {
//   dragonBones.PhaserFactory.init(game);
//   const paths1 = getDbPaths('right_abcd');
//   db1 = new DragonbonesPhaser(game, paths1);
//   const pathsCannon = getDbPaths('cannon');
//   cannon = new DragonbonesPhaser(game, pathsCannon);
//   game.world.add(cannon);
//   const paths2 = getDbPaths('red_envelope');
//   game.world.add(db1);
//   // loadDaytime();
// }

async function preload() {
  DragonbonesLoader.init(game);
  const loader = new DragonbonesLoader(game);
  loader.loadPaths(getDbPaths('right_abcd'));
  loader.loadPaths(getDbPaths('cannon'));
  loader.start();
  await loader.whenLoaded();
  const ap = DragonbonesLoader.factory.buildArmatureDisplay('cannon');
  if (ap) {
    ap.animation.play('stand_2');
    game.world.add(ap);
  }
  loader.loadPaths(getDbPaths('red_envelope'));
  await loader.whenLoaded();
  console.log('haha');
}

function create() {
  game.stage.disableVisibilityChange = true;
  // play1();
  // play2();
  // play3();
  // play4();
  // play5();
}

function render(): void {
  DragonbonesLoader.factory.dragonBones.advanceTime(-1.0); // -1自动计算前进时间
}
