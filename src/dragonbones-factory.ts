import Phaser from 'phaser-ce';

interface DragonbonesPaths {
  readonly ske: string;
  readonly tex: string;
  readonly atlas: string;
}

class DragonbonesFactory {

  public static init(game: Phaser.Game) {
    dragonBones.PhaserFactory.init(game);
  }

  public static get factory() {
    return dragonBones.PhaserFactory.factory;
  }

  private readonly game: Phaser.Game;
  private promises: Array<Promise<void>> = [];

  public constructor(game: Phaser.Game) {
    this.game = game;
  }

  public load(ske: string, tex: string, atlas: string) {
    this.promises.push(new Promise((resolve) => {
      if (this.loadResources([ske, tex, atlas])) {
        this.game.load.onLoadComplete.addOnce(() => {
          this.parseDragonBones(ske, tex, atlas);
          resolve();
        });
      } else {
        resolve();
      }
    }));
  }

  public loadPaths(paths: DragonbonesPaths) {
    this.load(paths.ske, paths.tex, paths.atlas);
  }

  public startLoad() {
    this.game.load.start();
  }

  public whenLoaded() {
    const promiseForAwait = this.promises;
    this.promises = [];
    return Promise.all(promiseForAwait);
  }

  public get factory() {
    return DragonbonesFactory.factory;
  }

  public buildArmatureDisplay(armatureDisplay: string) {
    return this.factory.buildArmatureDisplay(armatureDisplay);
  }

  public advanceTimeAuto() {
    this.factory.dragonBones.advanceTime(-1); // -1自动计算前进时间
  }

  private loadResources(resources: string[]) {
    let loadOne = false;
    for (const res of resources) {
      if (res.endsWith('.dbbin')) {
        if (!this.game.cache.checkBinaryKey(res)) {
          this.game.load.binary(res, res);
          loadOne = true;
        }
      } else if (res.endsWith('.png')) {
        if (!this.game.cache.checkImageKey(res)) {
          this.game.load.image(res, res);
          loadOne = true;
        }
      } else if (res.endsWith('.json')) {
        if (!this.game.cache.checkJSONKey(res)) {
          this.game.load.json(res, res);
          loadOne = true;
        }
      } else {
        continue;
      }
    }
    return loadOne;
  }

  private parseDragonBones(ske: string, tex: string, atlas: string) {
    if (ske.endsWith('.dbbin')) {
      this.factory.parseDragonBonesData(this.game.cache.getBinary(ske));
    } else if (ske.endsWith('.json')) {
      this.factory.parseDragonBonesData(this.game.cache.getJSON(ske));
    }
    this.factory.parseTextureAtlasData(
      this.game.cache.getJSON(tex),
      (this.game.cache.getImage(atlas, true) as any).base,
    );
  }
}

export default DragonbonesFactory;
