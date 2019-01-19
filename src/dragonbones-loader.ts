import Phaser, { Loader } from 'phaser-ce';
import 'dragon-bones';

interface DragonbonesPaths {
  readonly ske: string;
  readonly tex: string;
  readonly atlas: string;
}

class DragonbonesLoader {

  public static init(game: Phaser.Game) {
    dragonBones.PhaserFactory.init(game);
  }

  public static get factory() {
    return dragonBones.PhaserFactory.factory;
  }

  private readonly game: Phaser.Game;
  private loadCount: number = 0;
  private loadedPromise: Promise<void>;
  private loadResolve: (() => void) | null = null;

  public constructor(game: Phaser.Game) {
    this.game = game;
    this.loadedPromise = new Promise((resolve) => {
      this.loadResolve = resolve;
    });
  }

  public init(game: Phaser.Game) {
    dragonBones.PhaserFactory.init(game);
  }

  public load(ske: string, tex: string, atlas: string) {
    ++this.loadCount;
    this.loadResources([ske, tex, atlas]);
    this.game.load.onLoadComplete.addOnce(() => {
      this.parseDragonBones(ske, tex, atlas);
      --this.loadCount;
      if (this.loadCount === 0 && this.loadResolve) {
        this.loadResolve();
      }
    });
  }

  public loadPaths(paths: DragonbonesPaths) {
    this.load(paths.ske, paths.tex, paths.atlas);
  }

  public start() {
    this.game.load.start();
  }

  public whenLoaded() {
    return this.loadedPromise;
  }

  private loadResources(resources: string[]) {
    for (const res of resources) {
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
  }

  private parseDragonBones(ske: string, tex: string, atlas: string) {
    if (ske.endsWith('.dbbin')) {
      DragonbonesLoader.factory.parseDragonBonesData(this.game.cache.getBinary(ske));
    } else if (ske.endsWith('.json')) {
      DragonbonesLoader.factory.parseDragonBonesData(this.game.cache.getJSON(ske));
    }
    DragonbonesLoader.factory.parseTextureAtlasData(
      this.game.cache.getJSON(tex),
      (this.game.cache.getImage(atlas, true) as any).base,
    );
  }
}

export default DragonbonesLoader;
