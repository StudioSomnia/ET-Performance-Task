 /*:
 * @plugindesc Customize the OTB Turn Order Display
 * @author Fallen Angel Olivia
 *
 * @help
 * ---------------------------------
 * Read First! I M P O R T A N T ! !
 * ---------------------------------
 *
 * This requires you to have OTB installed. This is meant for JavaScript users
 * who know how to change the way the code handles. I am not responsible for
 * any changes made to it.
 *
 * -------------------
 * W A R N I N G ! ! !
 * -------------------
 *
 * This plugin is made for RPG Maker MV versions 1.6.1 and below. If you update
 * RPG Maker MV past that and this plugin breaks, I am NOT responsible for it.
 *
 * ------------
 * Terms of Use
 * ------------
 * 
 * 1. These plugins may be used in free or commercial games.
 * 2. 'Fallen Angel Olivia' must be given credit in your games.
 * 3. You are allowed to edit the code.
 * 4. Do NOT change the filename, parameters, and information of the plugin.
 * 5. You are NOT allowed to redistribute these Plugins.
 * 6. You may NOT take code for your own released Plugins without credit.
 *
 * -------
 * Credits
 * -------
 *
 * If you are using this plugin, credit the following people:
 * 
 * - Fallen Angel Olivia
 *
 * @param 
 * @param 
 * @param ATTENTION!!!
 * @default READ THE HELP FILE
 * @param 
 * @param 
 *
 */
//=============================================================================

// This function determines what bitmap the turn order display
// for the battler will load.
Sprite_OTBTurnOrder.prototype.loadBattlerSpriteBitmap = function() {
    var name = this._battler.battlerName();
    if (this._battler.isActor()) {
        if ($gameSystem.isSideView() && !this.checkDragonbones()) {
            return ImageManager.loadSvActor(name);
        } else {
            name = this._battler.characterName();
            return ImageManager.loadCharacter(name);
        }
    } else {
        var hue = this._battler.battlerHue();
        this._battlerName = name;
        this._battlerHue = hue;
        if (this.checkDragonbones()) {
            this._battlerName = dragonBonesIntegration.Game_Enemy_battlerName.call(this._battler);
            if ($gameSystem.isSideView()) {
                return ImageManager.loadSvEnemy(this._battlerName, hue);
            } else {
                return ImageManager.loadEnemy(this._battlerName, hue);
            }
        } else if (Imported.YEP_X_AnimatedSVEnemies && this._battler.hasSVBattler()) {
            this._battlerName = this._battler.svBattlerName();
            return ImageManager.loadSvActor(this._battlerName)
        } else if ($gameSystem.isSideView()) {
            return ImageManager.loadSvEnemy(name, hue);
        } else {
            return ImageManager.loadEnemy(name, hue);
        }
    }
};

// This function determines how to adjust the frames for for the battler in
// case you are using any custom battler graphics that aren't 9x6 in size.
Sprite_OTBTurnOrder.prototype.setupBattlerBitmapFrame = function() {
    var x = 0;
    var y = 0;
    var w = this._battlerSprite.bitmap.width;
    var h = this._battlerSprite.bitmap.height;
    this.scale.x = 1;
    if (this._battler.isActor()) {
        if ($gameSystem.isSideView() && !this.checkDragonbones()) {
            w /= 9;
            h /= 6;
        } else {
            var index = this._battler.characterIndex();
            var big = ImageManager.isBigCharacter(this._battler.characterName());
            w = this._battlerSprite.bitmap.width / (big ? 3 : 12);
            h = this._battlerSprite.bitmap.height / (big ? 4 : 8);
            x = (index % 4 * 3 + 1) * w;
            y = (Math.floor(index / 4) * 4) * h;
        }
    } else if (this.checkDragonbones()) {
        w *= 1;
        h *= 1;
    } else if (Imported.YEP_X_AnimatedSVEnemies && this._battler.isEnemy() && this._battler.hasSVBattler()) {
        w /= 9;
        h /= 6;
        this.scale.x = -1;
    }
    this._battlerSprite.setFrame(x, y, w, h);
};