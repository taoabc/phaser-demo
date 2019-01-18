import Phaser from 'phaser-ce';
import 'dragon-bones';

class DragonbonesPhaser extends Phaser.Sprite {
  private static BACKGROUND_URL: string = '../resource/background.png';
  private readonly resources: Set<string> = new Set();
  private readonly dbsFactory = dragonBones.PhaserFactory.factory;
  private ske: string = '';
  private tex: string = '';
  private atlas: string = '';
  private readonly armatureDisplayMap: Map<string, dragonBones.PhaserArmatureDisplay> = new Map();
  // private _background: Phaser.Sprite;

  public constructor(game: Phaser.Game) {
    super(game, 0.0, 0.0);
    this.resources.add(DragonbonesPhaser.BACKGROUND_URL);
    this.x = this.stageWidth * 0.5;
    this.y = this.stageHeight * 0.5;
  }

  public loadResources(ske: string, tex: string, atlas: string) {
    this.resources.add(ske);
    this.resources.add(tex);
    this.resources.add(atlas);
    this.ske = ske;
    this.tex = tex;
    this.atlas = atlas;
    return this.loadResourceInternal();
  }

  public getArmatureDisplay(name: string) {
    let armatureDisplay: dragonBones.PhaserArmatureDisplay | null | undefined =
      this.armatureDisplayMap.get(name);
    if (!armatureDisplay) {
      armatureDisplay = this.dbsFactory.buildArmatureDisplay(name);
      if (armatureDisplay) {
        this.armatureDisplayMap.set(name, armatureDisplay);
        this.addChild(armatureDisplay);
      }
    }
    return armatureDisplay;
  }

  public get stageWidth() {
    return this.game.width;
  }

  public get stageHeight(): number {
    return this.game.height;
  }

  private loadResourceInternal() {
    return new Promise((resolve, reject) => {
      let loadCount = 0;
      for (const res of this.resources) {
        if (res.endsWith('.dbbin')) {
          this.game.load.binary(res, res);
        } else if (res.endsWith('.png')) {
          this.game.load.image(res, res);
        } else if (res.endsWith('.json')) {
          this.game.load.json(res, res);
        } else {
          continue;
        }
        ++loadCount;
      }

      this.game.load.onFileComplete.add(() => {
        --loadCount;
        if (loadCount === 0) {
          const background = new Phaser.Sprite(this.game, 0, 0, DragonbonesPhaser.BACKGROUND_URL);
          background.x = -background.texture.width / 2;
          background.y = -background.texture.height / 2;
          this.addChild(background);
          this.parseDragonBones();
          resolve();
        }
      });

      this.game.load.start();
    });
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
