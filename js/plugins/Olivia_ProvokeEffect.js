//=============================================================================
// Olivia Engine - Provoke Effect - for RPG Maker MV version 1.6.1
// Olivia_ProvokeEffect.js
//=============================================================================
 /*:
 * @plugindesc <ProvokeEffect> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * ---------------------------------
 * Read First! I M P O R T A N T ! !
 * ---------------------------------
 *
 * A common mechanic found in many RPG's nowadays is the ability to steer the
 * way enemies target party members. This can be in the form of provocations.
 *
 * Provocations come in the form of states, where when a unit applies a provoke
 * state on a target, the target must attack the provoker when using single
 * target skills. This plugin provides support for multiple provocations and
 * such provocations will be given focus based on the state's priority value.
 *
 * The provoke will last only as long as the duration of the state itself. If
 * the state's duration is refreshed by reapplying the Provoke state, then the
 * provoker of that state will then switch over to the one applying the newly
 * added state.
 *
 * When an actor selects a target for an action and the actor is provoked by
 * an enemy on the other team, the player's choice selection becomes limited to
 * only the provoker.
 *
 * Provoke can be bypassed through the <Bypass Provoke> notetag.
 *
 *
 *
 * -------------
 * Compatibility
 * -------------
 *
 * If you are using the following plugins, place this plugin UNDER those in the
 * Plugin Manager list.
 *
 * - Yanfly's Battle A.I. Core
 * - Yanfly's Taunt
 * - Olivia's Aggro Management
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Show Priority Lines?
 * - Show priority target lines for this plugin?
 *
 * Arc Height
 * - How tall should the line arc in pixels?
 *
 * Blend Mode
 * - The blend mode used for the sprite.
 *
 * Height Origin
 * - The rate from the battler's sprite base to determine where the line starts from.
 *
 * Line Color
 * - Use #rrggbb for color
 *
 * Opacity
 * - The highest possible opacity for active provoke lines.
 *
 * Opacity Speed
 * - The speed at which opacity fluctuates for the line sprite.
 *
 * Parts
 * - The number of joint parts to split up the sprite as.
 *
 * Parts Size
 * - The number in pixels for the diameter of each part.
 *
 *
 *
 * --------
 * Notetags
 * --------
 *
 * <Provoke>
 *
 * - Used for: State Notetags
 * - Causes the state affected unit to be able to only attack the caster of the
 *   provoke state for single target actions.
 * - If multiple provoke states are applied, then the provoker is the one who
 *   applied the highest priority provoke state.
 *
 * <Bypass Provoke>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Makes the affected unit to ignore any and all provoke effects applied by
 *   any provoke states, allowing them to target foes as if they are unaffected
 *   by provoke states altogether.
 *
 *
 *
 * -------------------
 * W A R N I N G ! ! !
 * -------------------
 *
 * This plugin is made for RPG Maker MV versions 1.6.1 and below. If you update
 * RPG Maker MV past that and this plugin breaks, I am NOT responsible for it.
 *
 *
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
 *
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
 * @param ShowLines
 * @text Show Priority Lines?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show priority target lines for this plugin?
 * @default true
 *
 * @param ArcHeight
 * @text Arc Height
 * @type number
 * @desc How tall should the line arc in pixels?
 * @default 125
 *
 * @param BlendMode
 * @text Blend Mode
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @param HeightOrigin
 * @text Height Origin
 * @desc The rate from the battler's sprite base to determine where the line starts from.
 * @default 0.8
 *
 * @param LineColor
 * @text Line Color
 * @desc Use #rrggbb for color
 * @default #ff4444
 *
 * @param Opacity
 * @text Opacity
 * @type number
 * @min 1
 * @max 255
 * @desc The highest possible opacity for active provoke lines.
 * @default 255
 *
 * @param OpacitySpeed
 * @text Opacity Speed
 * @type number
 * @min 1
 * @desc The speed at which opacity fluctuates for the line sprite.
 * @default 4
 *
 * @param Parts
 * @text Parts
 * @type number
 * @min 1
 * @desc The number of joint parts to split up the sprite as.
 * @default 256
 *
 * @param PartsSize
 * @text Parts Size
 * @type number
 * @min 1
 * @desc The number in pixels for the diameter of each part.
 * @default 5
 *
 */
//=============================================================================

const _0x3a5c=['opacity','_opacitySpeed','subject','bitmap','_enemies','maxOpacity','_subject','isAlive','scope','_mainSprite','prototype','isStateAffected','states','createBattleField','parameters','provoker','isShowPriorityLines','createChildSprites','item','width','refresh','ProvokeEffect','Battle-Actor-%1','updateSubPositions','initialize','_arcHeight','anchor','members','PartsSize','initMembers','_provokeBitmap','_provokeContainer','_heightOrigin','contains','index','targetsForAlive','description','_maxOpacity','_homeX','scale','format','push','_maxSprites','isProvoked','ShowLines','Parts','actorId','pow','blendMode','convertProvokeStringToSubject','_partsSize','leftwardAnimation','battler','setFrame','_homeY','convertProvokeSubjectToString','maxSprites','heightOrigin','ArcHeight','_scene','isEnemy','_targetY','update','provokeBitmap','constructor','Olivia_ProvokeEffect','arcHeight','parentContainer','_battleField','isProvokeState','addChild','_targetX','updateBattlerPositions','_provoker','call','BlendMode','isActor','filter','_provokeSprite','addState','createProvokeSprite','includes','updateOpacity','height','updateChildrenOpacity','_battler','<ProvokeEffect>','_sprites','actor','apply','_spriteset','bind','match','Opacity','partsSize'];(function(_0x531a41,_0x40dc79){const _0x1fed98=function(_0x472cc2){while(--_0x472cc2){_0x531a41['push'](_0x531a41['shift']());}};_0x1fed98(++_0x40dc79);}(_0x3a5c,0xe4));const _0x5874=function(_0x531a41,_0x40dc79){_0x531a41=_0x531a41-0x0;let _0x1fed98=_0x3a5c[_0x531a41];return _0x1fed98;};var Imported=Imported||{};Imported[_0x5874('0x1b')]=!![];(()=>{Olivia[_0x5874('0x4e')]=$plugins[_0x5874('0x27')](function(_0x5037c5){return _0x5037c5[_0x5874('0x5d')][_0x5874('0x5a')](_0x5874('0x30'));})[0x0][_0x5874('0x47')];DataManager[_0x5874('0x1f')]=function(_0x18be4f){if(!_0x18be4f)return![];if(_0x18be4f['note'][_0x5874('0x36')](/<Provoke>/i)){return!![];}return![];};ImageManager[_0x5874('0x19')]=function(){if(this[_0x5874('0x57')])return this[_0x5874('0x57')];this[_0x5874('0x57')]=new Bitmap(0x64,0x64);this[_0x5874('0x57')]['drawCircle'](0x32,0x32,0x32,this['provokeLineColor']());return this[_0x5874('0x57')];};ImageManager['provokeLineColor']=function(){return Olivia[_0x5874('0x4e')]['LineColor'];};BattleManager[_0x5874('0x11')]=function(_0x3bad93){const _0x17fa1c=this[_0x5874('0x3f')];if(!_0x17fa1c){return null;}if(_0x17fa1c[_0x5874('0x26')]()&&_0x3bad93[_0x5874('0x16')]()){return _0x5874('0x4f')[_0x5874('0x2')](_0x17fa1c[_0x5874('0x8')]());}else if(_0x17fa1c[_0x5874('0x16')]()&&_0x3bad93['isActor']()){return'Battle-Enemy-%1'[_0x5874('0x2')](_0x17fa1c[_0x5874('0x5b')]());}return null;};BattleManager[_0x5874('0xb')]=function(_0x5131df){if(!_0x5131df)return null;if(_0x5131df[_0x5874('0x36')](/BATTLE-ACTOR-(\d+)/i)){return $gameActors[_0x5874('0x32')](Number(RegExp['$1']));}else if(_0x5131df[_0x5874('0x36')](/BATTLE-ENEMY-(\d+)/i)){return $gameTroop[_0x5874('0x54')]()[Number(RegExp['$1'])];}return null;};const _0x3902a1=Game_Action[_0x5874('0x43')][_0x5874('0x5c')];Game_Action[_0x5874('0x43')][_0x5874('0x5c')]=function(_0x3b28a1){if(this[_0x5874('0x4b')]()[_0x5874('0x41')]===0x1&&this[_0x5874('0x3b')]()[_0x5874('0x5')]()){return[this[_0x5874('0x3b')]()['provoker']()];}return _0x3902a1[_0x5874('0x33')](this,arguments);};const _0xfe67c5=Game_BattlerBase[_0x5874('0x43')][_0x5874('0x56')];Game_BattlerBase[_0x5874('0x43')][_0x5874('0x56')]=function(){_0xfe67c5[_0x5874('0x33')](this,arguments);this[_0x5874('0x23')]={};};Game_BattlerBase[_0x5874('0x43')][_0x5874('0x48')]=function(){for(const _0x2f44dc of this[_0x5874('0x45')]()){if(DataManager[_0x5874('0x1f')](_0x2f44dc)){const _0x3eec5a=BattleManager[_0x5874('0xb')](this[_0x5874('0x23')][_0x2f44dc['id']]);if(_0x3eec5a['isAlive']()){return _0x3eec5a;}}}return null;};Game_BattlerBase['prototype']['isProvoked']=function(){return!!this[_0x5874('0x48')]();};const _0x3309c5=Game_Battler['prototype'][_0x5874('0x29')];Game_Battler['prototype'][_0x5874('0x29')]=function(_0x8b7367){_0x3309c5[_0x5874('0x33')](this,arguments);if(this[_0x5874('0x44')](_0x8b7367)){this[_0x5874('0x23')]=this['_provoker']||{};this[_0x5874('0x23')][_0x8b7367]=BattleManager[_0x5874('0x11')](this);if(!this['_provoker'][_0x8b7367]){delete this[_0x5874('0x23')][_0x8b7367];}}};const _0x125cf3=Sprite_Battler['prototype'][_0x5874('0x51')];Sprite_Battler[_0x5874('0x43')][_0x5874('0x51')]=function(_0xf5a97d){_0x125cf3[_0x5874('0x33')](this,arguments);if(this[_0x5874('0x49')]()){setTimeout(this[_0x5874('0x2a')][_0x5874('0x35')](this),0x3e8);}};Sprite_Battler['prototype'][_0x5874('0x49')]=function(){if(![Sprite_Actor,Sprite_Enemy][_0x5874('0x2b')](this[_0x5874('0x1a')]))return![];return eval(Olivia['ProvokeEffect'][_0x5874('0x6')]);};Sprite_Battler[_0x5874('0x43')][_0x5874('0x2a')]=function(){this[_0x5874('0x28')]=new _0x2ee9e(this);this[_0x5874('0x28')][_0x5874('0x1d')]()[_0x5874('0x20')](this[_0x5874('0x28')]);};function _0x2ee9e(){this[_0x5874('0x51')](...arguments);}_0x2ee9e[_0x5874('0x43')]=Object['create'](Sprite[_0x5874('0x43')]);_0x2ee9e[_0x5874('0x43')][_0x5874('0x1a')]=_0x2ee9e;_0x2ee9e['prototype'][_0x5874('0x51')]=function(_0x384540){this[_0x5874('0x42')]=_0x384540;Sprite[_0x5874('0x43')][_0x5874('0x51')]['call'](this);this[_0x5874('0x56')]();this[_0x5874('0x4a')]();};_0x2ee9e[_0x5874('0x43')][_0x5874('0x56')]=function(){this[_0x5874('0x53')]['x']=0.5;this[_0x5874('0x53')]['y']=0.5;this[_0x5874('0x0')]=0x0;this[_0x5874('0x10')]=0x0;this[_0x5874('0x21')]=0x0;this['_targetY']=0x0;this[_0x5874('0x39')]=0x0;this[_0x5874('0x3a')]=Number(Olivia[_0x5874('0x4e')]['OpacitySpeed']);this[_0x5874('0xa')]=Number(Olivia[_0x5874('0x4e')][_0x5874('0x25')]);};_0x2ee9e[_0x5874('0x43')][_0x5874('0x12')]=function(){this[_0x5874('0x4')]=this['_maxSprites']||Number(Olivia['ProvokeEffect'][_0x5874('0x7')]);return this['_maxSprites'];};_0x2ee9e[_0x5874('0x43')][_0x5874('0x38')]=function(){this[_0x5874('0xc')]=this[_0x5874('0xc')]||Number(Olivia[_0x5874('0x4e')][_0x5874('0x55')]);return this['_partsSize']/0x64;};_0x2ee9e['prototype'][_0x5874('0x4a')]=function(){this[_0x5874('0x31')]=[];let _0x365171=0x0;for(let _0x5da0e6=0x0;_0x5da0e6<=this['maxSprites']();_0x5da0e6++){const _0xe87063=new Sprite();_0xe87063[_0x5874('0x3c')]=ImageManager[_0x5874('0x19')]();_0xe87063['anchor']['x']=0.5;_0xe87063[_0x5874('0x53')]['y']=0.5;_0xe87063[_0x5874('0x1')]['x']=_0xe87063[_0x5874('0x1')]['y']=this[_0x5874('0x38')]();_0xe87063[_0x5874('0x39')]=_0x365171;_0xe87063[_0x5874('0xa')]=this[_0x5874('0xa')];this[_0x5874('0x20')](_0xe87063);this[_0x5874('0x31')][_0x5874('0x3')](_0xe87063);_0x365171+=this[_0x5874('0x3a')];if(_0x365171>=0xff)_0x365171=0x0;}};_0x2ee9e['prototype'][_0x5874('0xd')]=function(){return this['_mainSprite'][_0x5874('0x1a')]===Sprite_Actor;};_0x2ee9e[_0x5874('0x43')][_0x5874('0x1d')]=function(){return SceneManager[_0x5874('0x15')][_0x5874('0x34')]['_provokeContainer'];};_0x2ee9e[_0x5874('0x43')][_0x5874('0x18')]=function(){Sprite[_0x5874('0x43')][_0x5874('0x18')][_0x5874('0x24')](this);this[_0x5874('0x22')]();this[_0x5874('0x50')]();this[_0x5874('0x2c')]();this[_0x5874('0x2e')]();};_0x2ee9e[_0x5874('0x43')][_0x5874('0x13')]=function(){this[_0x5874('0x59')]=this[_0x5874('0x59')]||Number(Olivia[_0x5874('0x4e')]['HeightOrigin']);return this['_heightOrigin'];};_0x2ee9e[_0x5874('0x43')][_0x5874('0x22')]=function(){if(!this['_mainSprite'][_0x5874('0x2f')])return;if(!this[_0x5874('0x42')][_0x5874('0x2f')]['provoker']())return;const _0x378826=this[_0x5874('0x42')][_0x5874('0x2f')][_0x5874('0x48')]()[_0x5874('0xe')]();if(!_0x378826)return;this[_0x5874('0x0')]=this['_mainSprite']['x'];this[_0x5874('0x10')]=this[_0x5874('0x42')]['y']-this['_mainSprite'][_0x5874('0x2d')]*this[_0x5874('0x13')]();this[_0x5874('0x21')]=_0x378826['x'];this[_0x5874('0x17')]=_0x378826['y']-_0x378826[_0x5874('0x2d')]*this[_0x5874('0x13')]();};_0x2ee9e[_0x5874('0x43')][_0x5874('0x1c')]=function(){this['_arcHeight']=this[_0x5874('0x52')]||Number(Olivia['ProvokeEffect'][_0x5874('0x14')]);return this['_arcHeight'];};_0x2ee9e[_0x5874('0x43')][_0x5874('0x50')]=function(){if(!this[_0x5874('0x42')][_0x5874('0x2f')])return;if(!this[_0x5874('0x42')]['_battler'][_0x5874('0x48')]())return;if(!this[_0x5874('0x31')])return;if(this[_0x5874('0x31')]['length']<=0x0)return;const _0x55bc36=(this[_0x5874('0x21')]-this[_0x5874('0x0')])/this[_0x5874('0x12')]();const _0x40c0d0=(this[_0x5874('0x17')]-this['_homeY'])/this['maxSprites']();for(let _0x5bdeaa=0x0;_0x5bdeaa<=this[_0x5874('0x12')]();_0x5bdeaa++){const _0x901770=this['_sprites'][_0x5bdeaa];if(!_0x901770)continue;_0x901770['x']=this[_0x5874('0x0')]+_0x55bc36*_0x5bdeaa;const _0x3a528a=this[_0x5874('0x12')]()-_0x5bdeaa;const _0x3f722a=this['maxSprites']()/0x2;const _0xc8bceb=this['arcHeight']();const _0x52cf15=-_0xc8bceb/Math[_0x5874('0x9')](_0x3f722a,0x2);const _0x5ada9e=_0x52cf15*Math[_0x5874('0x9')](_0x3a528a-_0x3f722a,0x2)+_0xc8bceb;_0x901770['y']=this[_0x5874('0x10')]+_0x40c0d0*_0x5bdeaa-_0x5ada9e;}};_0x2ee9e[_0x5874('0x43')][_0x5874('0x3e')]=function(){this[_0x5874('0x5e')]=this[_0x5874('0x5e')]||Number(Olivia['ProvokeEffect'][_0x5874('0x37')]);return this[_0x5874('0x5e')];};_0x2ee9e[_0x5874('0x43')][_0x5874('0x2c')]=function(){const _0x2bcdd1=this[_0x5874('0x42')][_0x5874('0x2f')];if(!_0x2bcdd1){this[_0x5874('0x39')]=0x0;}else if(_0x2bcdd1[_0x5874('0x40')]()&&_0x2bcdd1[_0x5874('0x48')]()){this[_0x5874('0x39')]=0xff;}else{this[_0x5874('0x39')]=0x0;}};_0x2ee9e[_0x5874('0x43')][_0x5874('0x2e')]=function(){if(!this[_0x5874('0x42')][_0x5874('0x2f')])return;if(!this['_mainSprite'][_0x5874('0x2f')][_0x5874('0x48')]())return;if(!this[_0x5874('0x31')])return;if(this[_0x5874('0x31')]['length']<=0x0)return;for(let _0x3ac4e4=0x0;_0x3ac4e4<=this[_0x5874('0x12')]();_0x3ac4e4++){const _0x2a9bb5=this['_sprites'][this[_0x5874('0xd')]()?this[_0x5874('0x12')]()-_0x3ac4e4:_0x3ac4e4];if(!_0x2a9bb5)continue;_0x2a9bb5[_0x5874('0x39')]-=this[_0x5874('0x3a')];if(_0x2a9bb5['opacity']<=0x0)_0x2a9bb5[_0x5874('0x39')]=0xff;}};const _0x4e2011=Spriteset_Battle['prototype']['createBattleField'];Spriteset_Battle[_0x5874('0x43')][_0x5874('0x46')]=function(){_0x4e2011[_0x5874('0x33')](this,arguments);const _0x29661c=this[_0x5874('0x1e')]['x'];const _0x49bd2d=this[_0x5874('0x1e')]['y'];const _0x47b911=this['_battleField'][_0x5874('0x4c')];const _0x96a639=this[_0x5874('0x1e')][_0x5874('0x2d')];this['_provokeContainer']=new Sprite();this[_0x5874('0x58')][_0x5874('0xf')](0x0,0x0,_0x47b911,_0x96a639);this[_0x5874('0x58')]['x']=_0x29661c;this[_0x5874('0x58')]['y']=_0x49bd2d;this[_0x5874('0x20')](this[_0x5874('0x58')]);};const _0x5b97de=Window_BattleEnemy[_0x5874('0x43')][_0x5874('0x4d')];Window_BattleEnemy[_0x5874('0x43')][_0x5874('0x4d')]=function(){const _0x24d890=BattleManager['actor']();if(_0x24d890&&_0x24d890['isProvoked']()){this[_0x5874('0x3d')]=[_0x24d890[_0x5874('0x48')]()];return;}_0x5b97de[_0x5874('0x33')](this,arguments);};})();