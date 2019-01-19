import Phaser from 'phaser-ce';
import 'dragon-bones';

interface DragonbonesPaths {
  readonly ske: string;
  readonly tex: string;
  readonly atlas: string;
}

class DragonbonesPhaser extends Phaser.Sprite {
  private static BACKGROUND_URL: string = '../resource/background.png';
  private readonly resources: Set<string> = new Set();
  private readonly dbsFactory = dragonBones.PhaserFactory.factory;
  private ske: string = '';
  private tex: string = '';
  private atlas: string = '';
  private loadResPromise: Promise<void>;

  public constructor(game: Phaser.Game, paths: DragonbonesPaths) {
    super(game, 0.0, 0.0);
    this.resources.add(DragonbonesPhaser.BACKGROUND_URL);

    this.loadResPromise = this.loadResources(paths.ske, paths.tex, paths.atlas);
  }

  public createArmatureDisplay(name: string) {
    const armatureDisplay = this.dbsFactory.buildArmatureDisplay(name);
    if (armatureDisplay) {
      this.addChild(armatureDisplay);
    }
    return armatureDisplay;
  }

  public removeArmatureDisplay(armatureDisplay: dragonBones.PhaserArmatureDisplay) {
    this.removeChild(armatureDisplay);
  }

  public whenResourceLoaded() {
    return this.loadResPromise;
  }

  public get stageWidth() {
    return this.game.width;
  }

  public get stageHeight(): number {
    return this.game.height;
  }

  private loadResourceInternal(): Promise<void> {
    return new Promise((resolve, reject) => {
      for (const res of this.resources) {
        if (res.endsWith('.dbbin')) {
          if (!this.game.cache.checkBinaryKey(res)) {
            this.game.load.binary(res, res);
          }
        } else if (res.endsWith('.png')) {
          if (!this.game.cache.checkImageKey(res)) {
            this.game.load.image(res, res);
          }
        } else if (res.endsWith('.json')) {
          if (!this.game.cache.checkJSONKey(res)) {
            this.game.load.json(res, res);
          }
        } else {
          continue;
        }
      }

      this.game.load.onLoadComplete.addOnce(() => {
        const background = new Phaser.Sprite(this.game, 0, 0, DragonbonesPhaser.BACKGROUND_URL);
        background.x = -background.texture.width / 2;
        background.y = -background.texture.height / 2;
        // this.addChild(background);
        this.parseDragonBones();
        resolve();
      });

      this.game.load.start();
    });
  }

  private loadResources(ske: string, tex: string, atlas: string) {
    this.resources.add(ske);
    this.resources.add(tex);
    this.resources.add(atlas);
    this.ske = ske;
    this.tex = tex;
    this.atlas = atlas;
    return this.loadResourceInternal();
  }

  private parseDragonBones() {
    if (this.ske.endsWith('.dbbin')) {
      this.dbsFactory.parseDragonBonesData(this.game.cache.getBinary(this.ske));
    } else if (this.ske.endsWith('.json')) {
      this.dbsFactory.parseDragonBonesData(this.game.cache.getJSON(this.ske));
    }
    this.dbsFactory.parseTextureAtlasData(
      this.game.cache.getJSON(this.tex),
      (this.game.cache.getImage(this.atlas, true) as any).base,
    );
  }
}

export default DragonbonesPhaser;
