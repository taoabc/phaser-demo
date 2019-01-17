import Phaser from 'phaser-ce';
import 'dragon-bones';

class DragonbonesPhaser extends Phaser.Sprite {
  private static BACKGROUND_URL: string = './resource/background.png';
  protected readonly resources: string[] = [];
  // private _background: Phaser.Sprite;

  public constructor(game: Phaser.Game) {
    super(game, 0.0, 0.0);
    this.resources.push(DragonbonesPhaser.BACKGROUND_URL);

    setTimeout(() => {
      this.x = this.stageWidth * 0.5;
      this.y = this.stageHeight * 0.5;

      this.loadResources();
    });
  }

  public get stageWidth() {
    return this.game.width;
  }

  public get stageHeight(): number {
    return this.game.height;
  }

  private loadResources(): void {
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
        this.onStart();
      }
    });

    this.game.load.start();
  }

  private onStart(): void {
    // const factory = dragonBones.PhaserFactory.factory
    // // console.log(this.game.cache.getItem('resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.json', Phaser.Cache.JSON))
    // factory.parseDragonBonesData(this.game.cache.getItem(RESOURCE[0], Phaser.Cache.JSON).data)
    // // factory.parseDragonBonesData(this.game.cache.getItem('resource/dragonbones/mecha_1002_101d_show/mecha_1002_101d_show_ske.dbbin', Phaser.Cache.BINARY))
    // factory.parseTextureAtlasData(
    //   this.game.cache.getItem(RESOURCE[1], Phaser.Cache.JSON).data,
    //   (this.game.cache.getImage(RESOURCE[2], true)).base
    // )

    // const armatureDisplay = factory.buildArmatureDisplay(SKE_NAME, A_NAME)
    // armatureDisplay.animation.play('stand_2')

    // armatureDisplay.x = -1920 / 2
    // armatureDisplay.y = -1080 / 2 - 200
    // this.addChild(armatureDisplay)
  }
}

export default DragonbonesPhaser;
