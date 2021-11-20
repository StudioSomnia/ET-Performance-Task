//=============================================================================
// Olivia Engine - Break Shield System - for RPG Maker MV version 1.6.1
// Olivia_BreakShieldSystem.js
//=============================================================================
 /*:
 * @plugindesc <BreakShieldSystem> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that will create a new mechanic called a
 * Break Shield. Actors and/or enemies can have them. Whenever a battler is
 * struck with an elemental weakness, their Break Shield is reduced by 1
 * (unless modified by a notetag). Once the battler's Break Shield reaches
 * a score of 0, a state is then applied to the battler (usually a stun state).
 * Once the Break state wears off, the battler will regain their Break Shields
 * again. This can be used to create complex battle depth for your game.
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * There are some important plugin parameters to modify if you want to
 * customize the Break Shield system to your liking.
 *
 * Access:
 *
 * Actor Shields: Enable or disable the Break Shield system for actors. 
 * If enabled, actors when hit by elemental weaknesses will also lose shields
 * and can be stunned, too.
 *
 * Draw Menu Shields: If enabled, will draw Break Shield in the menu where
 * states are drawn.
 *
 * Enemy Shields: Enable or disable the Break Shield system for enemies.
 * You can disable this if you want only your actors to suffer from the
 * Break Shield system.
 *
 * Mechanics:
 *
 * Base Shield Value: The minimum amount of shields a battler can have
 *
 * Break Reduction: The default value of the item or skill when it goes to
 * reduce Break Shield points
 *
 * Element Weakness Rate: The element weakness rate must be greater than this
 * value to break a Break Shield point
 *
 * Max Break Shields: The maximum amount of shields a battler can have
 *
 * Stun State ID: The state ID used for the stun state that is applied when
 * Break Shields reach 0. THIS IS AN IMPORTANT PLUGIN PARAMETER TO ADJUST
 * if you want to customize this system for your game! Change this to the
 * ID of the state you want to count as the Break state.
 *
 * Visuals:
 *
 * Shield Icon: The icon ID used for representing Break Shields
 *
 * Stun Icon: The icon ID used for representing Break Stun
 *
 * Protect Weakness Icon: The icon ID used for representing a protected
 * weakness. Protect Weakness Icon will be drawn on top of lower icon
 *
 * Reduce Animation: The animation ID used for the moment an enemy's Break
 * Shields is reduced. Use 0 for no animation.
 *
 * Break Animation: The animation ID used for the moment an enemy's Break
 * Shields reach 0. Use 0 for no animation.
 *
 * Icon Font Size: The font size of the text used to display the shields left
 * or duration of the turn.
 *
 * Show Actor Shields: Show the actor shields next to their name in the
 * status window?
 *
 * Show Enemy Shields: Show the enemy shields next to their name in the
 * target window?
 * 
 *
 *
 * --------
 * Notetags
 * --------
 *
 * Skills and Items Notetags:
 * 
 * <Break Reduce: x>
 * Reduces the target's Break Shield by x if this action hits a weakness.
 * If you do not use this notetag, x will be the default value found in
 * the plugin's parameters.
 *
 * <Change Break Shield: x>
 * This will change the target battler's Break Shield value to x if the
 * battler isn't currently stunned. No effect if you don't use this notetag.
 *
 * <Increase Break Shield: +x>
 * <Decrease Break Shield: -x>
 * This will either increase the target battler's break shield by x or
 * decrease the target battler's break shield by x. Happens after the
 * Change Break Shield notetag. No effect if you don't use this notetag.
 *
 *
 *
 * Actor, Class, and Enemy Notetags:
 * 
 * <Break Shields: x>
 * x is the base number of Break Shields the battler starts with.
 * If you do not use this notetag, x will be the default value found in
 * the plugin's parameters.
 *
 *
 *
 * Class, Weapon, Armor, and State Notetags:
 * 
 * <Break Shields: +x>
 * <Break Shields: -x>
 * x is the increased/decreased amount of Break Shields applied to how
 * much the battler will start with. If you do not use this notetag,
 * then no extra Break Shields will be added.
 *
 * <Protect Element: x>
 * <Protect Elements: x, x, x, x, x>
 * x element will be guarded. A maximum of 100% damage will be dealt to
 * the battler if that element is protected. This will also prevent the
 * Break Shields from reducing for that element. Insert more x's to
 * protect more elements.
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
 * -------------
 * Compatibility
 * -------------
 *
 * This plugin is compatible with the following plugins:
 *
 * - YEP Core Engine
 * - YEP Battle Engine Core
 * - YEP Action Sequence Packs 1, 2, 3
 * - YEP Animated Sideview Enemies
 * - YEP Buffs & States Core
 * - YEP Damage Core
 * - YEP Element Core
 *
 * Place this plugin under those in the Plugin Manager list.
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
 * @param Break Shield Access
 * @text Access
 * @parent Break Shield System 
 *
 * @param Actor Shields
 * @parent Break Shield Access
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Break Shield system for actors
 * @default false
 *
 * @param Draw Menu Shields
 * @text Draw In Menus?
 * @parent Actor Shields
 * @type boolean
 * @on On
 * @off Off
 * @desc If enabled, will draw break shields in the menu where states are drawn.
 * @default true
 *
 * @param Enemy Shields
 * @parent Break Shield Access
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Break Shield system for enemies
 * @default true
 *
 * @param Break Shield Mechanics
 * @text Mechanics
 * @parent Break Shield System 
 *
 * @param Base Shield Value
 * @parent Break Shield Mechanics
 * @type number
 * @min 1
 * @desc The minimum amount of shields a battler can have
 * @default 1
 *
 * @param Break Reduction
 * @parent Break Shield Mechanics
 * @desc The default value of the item or skill when it goes to reduce Break Shield points
 * @default 1
 *
 * @param Element Weakness Rate
 * @parent Break Shield Mechanics
 * @desc The element weakness rate must be greater than this value to break a Break Shield point
 * @default 1.1
 *
 * @param Max Break Shields
 * @parent Break Shield Mechanics
 * @type number
 * @min 1
 * @desc The maximum amount of shields a battler can have
 * @default 99
 *
 * @param Stun State ID
 * @parent Break Shield Mechanics
 * @type state
 * @desc The state ID used for the stun state that is applied when Break Shields reach 0
 * @default 4
 *
 * @param Break Shield Visual
 * @text Visuals
 * @parent Break Shield System 
 *
 * @param Shield Icon
 * @parent Break Shield Visual
 * @type number
 * @min 1
 * @desc The icon ID used for representing Break Shields
 * @default 81
 *
 * @param Stun Icon
 * @parent Break Shield Visual
 * @type number
 * @min 1
 * @desc The icon ID used for representing Break Stun
 * @default 6
 *
 * @param Protect Weakness Icon
 * @parent Break Shield Visual
 * @type number
 * @min 1
 * @desc The icon ID used for representing a protected weakness. Protect Weakness Icon will be drawn on top of lower icon
 * @default 81
 *
 * @param Reduce Animation
 * @parent Break Shield Visual
 * @type animation
 * @desc The animation ID used for the moment an enemy's Break Shields is reduced. Use 0 for no animation.
 * @default 2
 *
 * @param Break Animation
 * @parent Break Shield Visual
 * @type animation
 * @desc The animation ID used for the moment an enemy's Break Shields reach 0. Use 0 for no animation.
 * @default 56
 *
 * @param Icon Font Size
 * @parent Break Shield Visual
 * @type number
 * @min 1
 * @desc The font size of the text used to display the shields left or duration of the turn.
 * @default 22
 *
 * @param Show Actor Shields
 * @parent Break Shield Visual
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the actor shields next to their name in the status window?
 * @default true
 *
 * @param Show Enemy Shields
 * @parent Break Shield Visual
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the enemy shields next to their name in the target window?
 * @default true
 *
 * @param
 * @param
 *
 */
//=============================================================================

var _0x512d=['call','filter','addedBreakShields','inBattle','_iconBreakShield','drawActorIcons','Draw\x20Menu\x20Shields','currentBreakShield','Show\x20Actor\x20Shields','applyItemUserEffect','contains','_scene','drawItem','item','StunState','currentClass','alterBreakShield','contents','Stun\x20Icon','OctoBattle','StunIcon','Olivia_BreakShieldSystem','resetBreakShields','BaseShields','<BreakShieldSystem>','Shield\x20Icon','ShowActorShield','Break\x20Reduction','parse','Icon\x20Font\x20Size','BreakAnimation','outlineColor','startBreakShieldBrokenAnimation','BreakShield','executeDamage','actor','IconFontSize','Actor\x20Shields','ReduceAnimation','isDead','concat','length','deathStateId','applyChangeBreakShield','___BattleManager_setup___','min','members','center','Reduce\x20Animation','Stun\x20State\x20ID','sort','note','enemy','prototype','setBreakShield','Max\x20Break\x20Shields','equips','_currentBreakShield','drawIcon','_iconWidth','drawBreakShieldIcon','DrawMenu','states','applyBreakStun','Enemy\x20Shields','topBreakShield','Shields','baseBreakShield','Actors','___Game_Battler_removeBattleStates___','calcElementRate','Base\x20Shield\x20Value','_inBattle','width','drawText','match','drawBasicArea','itemBreakShieldReduction','setup','startAnimation','Element\x20Weakness\x20Rate','refresh','removeBattleStates','isBreakStunned','Show\x20Enemy\x20Shields','___Game_Action_applyItemUserEffect___','elementRate','___Game_Action_executeDamage___','resetBreakShield','fontSize','isAffectedByBreakShield','_iconBreakStun','showBreakStunDuration','resetFontSettings','originalElementRate','iconIndex','clamp','___Window_Base_drawActorIcons___','resetTextColor','getProtectedWeaknessElements','drawBreakShieldBasic','Enemies','Window_BattleStatus_drawBasicArea','_needRefreshAllEnemyWeaknessWindows','description','ceil','___Game_BattlerBase_elementRate___','_stateTurns','executeBreakShieldReduction','_enemies'];(function(_0x5c7ddb,_0x512d65){var _0x3637b7=function(_0x2572e2){while(--_0x2572e2){_0x5c7ddb['push'](_0x5c7ddb['shift']());}};_0x3637b7(++_0x512d65);}(_0x512d,0x1e8));var _0x3637=function(_0x5c7ddb,_0x512d65){_0x5c7ddb=_0x5c7ddb-0x0;var _0x3637b7=_0x512d[_0x5c7ddb];return _0x3637b7;};var Imported=Imported||{};Imported[_0x3637('0x53')]=!![];var Olivia=Olivia||{};Olivia[_0x3637('0x51')]=Olivia['OctoBattle']||{};var parameters=$plugins[_0x3637('0x3f')](function(_0x309d3b){return _0x309d3b[_0x3637('0x38')][_0x3637('0x48')](_0x3637('0x56'));})[0x0]['parameters'];Olivia['OctoBattle'][_0x3637('0x5f')]={'Enabled':!![],'Actors':eval(parameters[_0x3637('0x63')]),'DrawMenu':eval(parameters[_0x3637('0x44')]),'Enemies':eval(parameters[_0x3637('0x10')]),'BaseShields':Number(parameters[_0x3637('0x17')]||0x0),'BreakReduce':Number(parameters[_0x3637('0x59')]||0x1),'MaxShields':Number(parameters[_0x3637('0x7')]||0x63),'StunState':Number(parameters[_0x3637('0x1')]||0x1),'WeakRate':Number(parameters[_0x3637('0x20')]||1.1),'ShieldIcon':Number(parameters[_0x3637('0x57')]||0x51),'StunIcon':Number(parameters[_0x3637('0x50')]||0x6),'ProtectIcon':Number(parameters['Protect\x20Weakness\x20Icon']||0x51),'IconFontSize':Number(parameters[_0x3637('0x5b')]||0x16),'ReduceAnimation':Number(parameters[_0x3637('0x0')]||0x0),'BreakAnimation':Number(parameters['Break\x20Animation']||0x0),'ShowActorShield':eval(parameters[_0x3637('0x46')]),'ShowEnemyShield':eval(parameters[_0x3637('0x24')])};Olivia[_0x3637('0x51')][_0x3637('0x12')]=Olivia[_0x3637('0x51')][_0x3637('0x12')]||{};Olivia['OctoBattle'][_0x3637('0x12')][_0x3637('0x6a')]=BattleManager['setup'];BattleManager[_0x3637('0x1e')]=function(_0x590d54,_0x25424f,_0x3c2808){Olivia['OctoBattle'][_0x3637('0x12')][_0x3637('0x6a')][_0x3637('0x3e')](this,_0x590d54,_0x25424f,_0x3c2808);$gameParty[_0x3637('0x54')]();$gameTroop['resetBreakShields']();};Olivia[_0x3637('0x51')][_0x3637('0x12')][_0x3637('0x27')]=Game_Action[_0x3637('0x5')][_0x3637('0x60')];Game_Action[_0x3637('0x5')]['executeDamage']=function(_0x20eec7,_0x187392){Olivia[_0x3637('0x51')]['Shields'][_0x3637('0x27')][_0x3637('0x3e')](this,_0x20eec7,_0x187392);if(!!_0x20eec7&&_0x187392>0x0&&_0x20eec7[_0x3637('0x2a')]()&&this['isHpEffect']()){this[_0x3637('0x3c')](_0x20eec7,_0x187392);}};Game_Action[_0x3637('0x5')][_0x3637('0x3c')]=function(_0xa9702d,_0x350109){if(!_0xa9702d[_0x3637('0x23')]()){var _0x12112b=this[_0x3637('0x16')](_0xa9702d);if(_0x12112b>=Olivia['OctoBattle'][_0x3637('0x5f')]['WeakRate']){var _0x350109=-0x1*this[_0x3637('0x1d')]();_0xa9702d['startBreakShieldReduceAnimation']();_0xa9702d[_0x3637('0x4e')](_0x350109);}}};Game_Action[_0x3637('0x5')][_0x3637('0x1d')]=function(){if(this[_0x3637('0x4b')]()['note'][_0x3637('0x1b')](/<Break (?:Reduce|Reduction): (\d+)>/i)){return parseInt(RegExp['$1']);}else{return Olivia[_0x3637('0x51')]['BreakShield']['BreakReduce'];}};Olivia[_0x3637('0x51')][_0x3637('0x12')][_0x3637('0x25')]=Game_Action[_0x3637('0x5')][_0x3637('0x47')];Game_Action[_0x3637('0x5')][_0x3637('0x47')]=function(_0x4d8033){Olivia[_0x3637('0x51')][_0x3637('0x12')][_0x3637('0x25')][_0x3637('0x3e')](this,_0x4d8033);if(!!_0x4d8033&&_0x4d8033['isAffectedByBreakShield']()){this[_0x3637('0x69')](_0x4d8033);}};Game_Action[_0x3637('0x5')]['applyChangeBreakShield']=function(_0x20e0ab){if(!_0x20e0ab[_0x3637('0x23')]()){if(this[_0x3637('0x4b')]()[_0x3637('0x3')][_0x3637('0x1b')](/<(?:Set|Change) Break (?:Shield|Shields): (\d+)>/i)){_0x20e0ab['setBreakShield'](parseInt(RegExp['$1']));$gameTemp[_0x3637('0x37')]=!![];}if(this[_0x3637('0x4b')]()[_0x3637('0x3')]['match'](/<(?:Increase|Decrease|Change) Break (?:Shield|Shields): ([\+\-]\d+)>/i)){_0x20e0ab[_0x3637('0x4e')](parseInt(RegExp['$1']));$gameTemp[_0x3637('0x37')]=!![];}}};Olivia['OctoBattle']['Shields'][_0x3637('0x3a')]=Game_BattlerBase[_0x3637('0x5')][_0x3637('0x26')];Game_BattlerBase[_0x3637('0x5')][_0x3637('0x26')]=function(_0xab18d){var _0x1af201=Olivia[_0x3637('0x51')][_0x3637('0x12')][_0x3637('0x3a')][_0x3637('0x3e')](this,_0xab18d);if(this[_0x3637('0x33')]()[_0x3637('0x48')](_0xab18d)){return Math[_0x3637('0x6b')](0x1,_0x1af201);}else{return _0x1af201;}};Game_BattlerBase[_0x3637('0x5')][_0x3637('0x2e')]=function(_0x41ff94){return Olivia['OctoBattle'][_0x3637('0x12')][_0x3637('0x3a')]['call'](this,_0x41ff94);};Olivia[_0x3637('0x51')]['Shields'][_0x3637('0x15')]=Game_Battler[_0x3637('0x5')]['removeBattleStates'];Game_Battler[_0x3637('0x5')][_0x3637('0x22')]=function(){Olivia[_0x3637('0x51')][_0x3637('0x12')][_0x3637('0x15')][_0x3637('0x3e')](this);this[_0x3637('0x28')]();};Game_Battler[_0x3637('0x5')][_0x3637('0x28')]=function(){if(this[_0x3637('0x2a')]()){this[_0x3637('0x6')](this['topBreakShield']());this[_0x3637('0x21')]();}};Game_Battler[_0x3637('0x5')][_0x3637('0x13')]=function(){return Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x55')];};Game_Battler['prototype']['topBreakShield']=function(){var _0xb68fe4=this[_0x3637('0x13')]();_0xb68fe4=this[_0x3637('0x40')](_0xb68fe4);return Math['max'](0x1,_0xb68fe4);};Game_Battler[_0x3637('0x5')][_0x3637('0x40')]=function(_0x33b337){var _0x495eee=this['states']();for(var _0x1e8731=0x0;_0x1e8731<_0x495eee[_0x3637('0x67')];_0x1e8731++){var _0x22779f=_0x495eee[_0x1e8731];if(!!_0x22779f&&_0x22779f[_0x3637('0x3')][_0x3637('0x1b')](/<Break (?:Shield|Shields): ([\+\-]\d+)>/i)){_0x33b337+=parseInt(RegExp['$1']);}}return _0x33b337;};Game_Battler['prototype'][_0x3637('0x45')]=function(){if(this[_0x3637('0x9')]===undefined){this[_0x3637('0x6')](this[_0x3637('0x11')]());}return this[_0x3637('0x9')];};Game_Battler[_0x3637('0x5')][_0x3637('0x6')]=function(_0x4d1cb8){if(this[_0x3637('0x2a')]()){this[_0x3637('0x9')]=Math[_0x3637('0x39')](_0x4d1cb8);this[_0x3637('0x9')]=this[_0x3637('0x9')][_0x3637('0x30')](0x0,Olivia[_0x3637('0x51')][_0x3637('0x5f')]['MaxShields']);if(this[_0x3637('0x9')]<=0x0){this[_0x3637('0xf')]();}this[_0x3637('0x21')]();}};Game_Battler[_0x3637('0x5')][_0x3637('0x4e')]=function(_0x3b6bb9){this['setBreakShield'](this[_0x3637('0x45')]()+_0x3b6bb9);};Game_Battler[_0x3637('0x5')][_0x3637('0xf')]=function(){this[_0x3637('0x6')](this['topBreakShield']());var _0xac156c=Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x4c')];this['addState'](_0xac156c);this[_0x3637('0x5e')]();};Game_Battler[_0x3637('0x5')][_0x3637('0x23')]=function(){return this['isStateAffected'](Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x4c')]);};Game_Battler[_0x3637('0x5')]['startBreakShieldReduceAnimation']=function(){if(Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x64')]){var _0x154dd0=Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x64')];this[_0x3637('0x1f')](_0x154dd0);}};Game_Battler[_0x3637('0x5')][_0x3637('0x5e')]=function(){if(Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x5c')]){var _0x170f9=Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x5c')];this[_0x3637('0x1f')](_0x170f9);}};Game_Battler[_0x3637('0x5')][_0x3637('0x33')]=function(){var _0x37b6b5=[];var _0x1ca1e8=this[_0x3637('0xe')]();for(var _0x181ce1=0x0;_0x181ce1<_0x1ca1e8[_0x3637('0x67')];_0x181ce1++){var _0x5ba18b=_0x1ca1e8[_0x181ce1];if(!!_0x5ba18b&&_0x5ba18b[_0x3637('0x3')]['match'](/<Protect (?:Element|Elements):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x275f9d=JSON[_0x3637('0x5a')]('['+RegExp['$1'][_0x3637('0x1b')](/\d+/g)+']');_0x37b6b5=_0x37b6b5[_0x3637('0x66')](_0x275f9d);}}_0x37b6b5[_0x3637('0x2')](function(_0xde46cf,_0x466916){return _0xde46cf-_0x466916;});return _0x37b6b5;};Game_Actor['prototype']['isAffectedByBreakShield']=function(){return Olivia[_0x3637('0x51')]['BreakShield']['Actors'];};Game_Actor[_0x3637('0x5')]['baseBreakShield']=function(){var _0x2c9a46=Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x55')];if(!!this[_0x3637('0x4d')]()&&this[_0x3637('0x4d')]()[_0x3637('0x3')][_0x3637('0x1b')](/<Break (?:Shield|Shields): (\d+)>/i)){_0x2c9a46=parseInt(RegExp['$1']);}else if(this[_0x3637('0x61')]()&&this[_0x3637('0x61')]()[_0x3637('0x3')][_0x3637('0x1b')](/<Break (?:Shield|Shields): (\d+)>/i)){_0x2c9a46=parseInt(RegExp['$1']);}return _0x2c9a46;};Game_Actor['prototype'][_0x3637('0x40')]=function(_0x3824c4){_0x3824c4=Game_Battler[_0x3637('0x5')]['addedBreakShields']['call'](this,_0x3824c4);var _0x541761=this[_0x3637('0x8')]();for(var _0xb359b7=0x0;_0xb359b7<_0x541761[_0x3637('0x67')];_0xb359b7++){var _0x39fefd=_0x541761[_0xb359b7];if(!!_0x39fefd&&_0x39fefd[_0x3637('0x3')][_0x3637('0x1b')](/<Break (?:Shield|Shields): ([\+\-]\d+)>/i)){_0x3824c4+=parseInt(RegExp['$1']);}}if(!!this[_0x3637('0x4d')]()&&this[_0x3637('0x4d')]()[_0x3637('0x3')][_0x3637('0x1b')](/<Break (?:Shield|Shields): ([\+\-]\d+)>/i)){_0x3824c4+=parseInt(RegExp['$1']);}return _0x3824c4;};Game_Actor['prototype'][_0x3637('0x33')]=function(){var _0x256104=Game_Battler[_0x3637('0x5')][_0x3637('0x33')][_0x3637('0x3e')](this);var _0x2cf2d9=this[_0x3637('0x8')]();for(var _0x4b3ed0=0x0;_0x4b3ed0<_0x2cf2d9[_0x3637('0x67')];_0x4b3ed0++){var _0x9c99e4=_0x2cf2d9[_0x4b3ed0];if(!!_0x9c99e4&&_0x9c99e4[_0x3637('0x3')][_0x3637('0x1b')](/<Protect (?:Element|Elements):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x549484=JSON[_0x3637('0x5a')]('['+RegExp['$1']['match'](/\d+/g)+']');_0x256104=_0x256104[_0x3637('0x66')](_0x549484);}}if(!!this[_0x3637('0x4d')]()&&this[_0x3637('0x4d')]()[_0x3637('0x3')][_0x3637('0x1b')](/<Protect (?:Element|Elements):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x549484=JSON[_0x3637('0x5a')]('['+RegExp['$1']['match'](/\d+/g)+']');_0x256104=_0x256104['concat'](_0x549484);}_0x256104[_0x3637('0x2')](function(_0x1161f7,_0x4fa72e){return _0x1161f7-_0x4fa72e;});return _0x256104;};Game_Enemy[_0x3637('0x5')][_0x3637('0x2a')]=function(){return Olivia[_0x3637('0x51')]['BreakShield'][_0x3637('0x35')];};Game_Enemy[_0x3637('0x5')]['baseBreakShield']=function(){var _0x2c5bc3=Olivia[_0x3637('0x51')][_0x3637('0x5f')]['BaseShields'];if(this[_0x3637('0x4')]()&&this[_0x3637('0x4')]()[_0x3637('0x3')][_0x3637('0x1b')](/<Break (?:Shield|Shields): (\d+)>/i)){_0x2c5bc3=parseInt(RegExp['$1']);}return _0x2c5bc3;};Game_Unit['prototype']['resetBreakShields']=function(){var _0x59f24f=this['_inBattle'];this[_0x3637('0x18')]=![];var _0x4d024a=this[_0x3637('0x6c')]();for(var _0x124225=0x0;_0x124225<_0x4d024a[_0x3637('0x67')];_0x124225++){var _0x35034b=_0x4d024a[_0x124225];if(_0x35034b){_0x35034b[_0x3637('0x28')]();}}this['_inBattle']=_0x59f24f;};Window_Base[_0x3637('0x42')]=Olivia[_0x3637('0x51')][_0x3637('0x5f')]['ShieldIcon'];Window_Base[_0x3637('0x2b')]=Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x52')];Window_Base['prototype'][_0x3637('0xc')]=function(_0x43ba51,_0x3f87a0,_0x1b97e3){if(_0x43ba51[_0x3637('0x2a')]()){if(_0x43ba51[_0x3637('0x65')]()&&$dataStates[_0x43ba51[_0x3637('0x68')]()][_0x3637('0x2f')]>0x0){var _0x4fb27e=$dataStates[_0x43ba51['deathStateId']()][_0x3637('0x2f')];var _0x1665a2='';}else if(_0x43ba51[_0x3637('0x65')]()){var _0x4fb27e=0x0;var _0x1665a2='';}else if(_0x43ba51[_0x3637('0x23')]()){var _0x4fb27e=Window_Base[_0x3637('0x2b')];if(this[_0x3637('0x2c')]()){var _0x1665a2=_0x43ba51[_0x3637('0x3b')][Olivia['OctoBattle'][_0x3637('0x5f')][_0x3637('0x4c')]]||0x0;if(_0x1665a2===0x0){_0x1665a2='';}}else{var _0x1665a2='';}}else{var _0x4fb27e=Window_Base['_iconBreakShield'];var _0x1665a2=_0x43ba51[_0x3637('0x45')]();}this[_0x3637('0xa')](_0x4fb27e,_0x3f87a0,_0x1b97e3);this[_0x3637('0x4f')][_0x3637('0x29')]=Olivia['OctoBattle'][_0x3637('0x5f')][_0x3637('0x62')];var _0x12762b=this[_0x3637('0x4f')]['outlineColor'];this[_0x3637('0x4f')][_0x3637('0x5d')]='rgba(0,\x200,\x200,\x201.0)';this[_0x3637('0x1a')](_0x1665a2,_0x3f87a0,_0x1b97e3,Window_Base['_iconWidth'],_0x3637('0x6d'));this[_0x3637('0x2d')]();this[_0x3637('0x4f')][_0x3637('0x5d')]=_0x12762b;}};Window_Base[_0x3637('0x5')][_0x3637('0x2c')]=function(){return![];};if(Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x14')]&&Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0xd')]){Olivia[_0x3637('0x51')][_0x3637('0x12')][_0x3637('0x31')]=Window_Base[_0x3637('0x5')][_0x3637('0x43')];Window_Base['prototype']['drawActorIcons']=function(_0x5804f6,_0x333b3c,_0x13216c,_0x3f925f){if(!$gameParty[_0x3637('0x41')]()&&!(SceneManager[_0x3637('0x49')]instanceof Scene_Battle)){_0x5804f6['resetBreakShield']();this[_0x3637('0xc')](_0x5804f6,_0x333b3c,_0x13216c+0x2);_0x333b3c+=Window_Base['_iconWidth'];_0x3f925f-=Window_Base[_0x3637('0xb')];}Olivia[_0x3637('0x51')][_0x3637('0x12')][_0x3637('0x31')]['call'](this,_0x5804f6,_0x333b3c,_0x13216c,_0x3f925f);};}if(Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x14')]&&Olivia[_0x3637('0x51')]['BreakShield'][_0x3637('0x58')]){Olivia[_0x3637('0x51')][_0x3637('0x5f')]['Window_BattleStatus_drawBasicArea']=Window_BattleStatus[_0x3637('0x5')][_0x3637('0x1c')];Window_BattleStatus[_0x3637('0x5')][_0x3637('0x1c')]=function(_0xf4b56e,_0xb92c38){if(_0xb92c38[_0x3637('0x2a')]()){this['drawBreakShieldBasic'](_0xf4b56e,_0xb92c38);_0xf4b56e['x']+=Window_Base[_0x3637('0xb')]+0x2;_0xf4b56e[_0x3637('0x19')]-=Window_Base[_0x3637('0xb')]+0x2;}Olivia[_0x3637('0x51')]['BreakShield'][_0x3637('0x36')][_0x3637('0x3e')](this,_0xf4b56e,_0xb92c38);};Window_BattleStatus[_0x3637('0x5')][_0x3637('0x34')]=function(_0x5d5048,_0x25d7d6){this[_0x3637('0xc')](_0x25d7d6,_0x5d5048['x'],_0x5d5048['y']+0x2);};}if(Olivia[_0x3637('0x51')][_0x3637('0x5f')][_0x3637('0x35')]&&Olivia[_0x3637('0x51')]['BreakShield']['ShowEnemyShield']){Window_BattleEnemy[_0x3637('0x5')][_0x3637('0x4a')]=function(_0x1a6cc6){this[_0x3637('0x32')]();var _0x4b886d=this[_0x3637('0x3d')][_0x1a6cc6]['name']();var _0x7397d1=this['itemRectForText'](_0x1a6cc6);var _0x356f0a=_0x7397d1['x'];var _0x554053=_0x7397d1['y'];var _0x26f415=_0x7397d1[_0x3637('0x19')];this[_0x3637('0xc')](this['_enemies'][_0x1a6cc6],_0x356f0a,_0x554053+0x2);_0x356f0a+=Window_Base[_0x3637('0xb')]+0x2;_0x26f415-=Window_Base[_0x3637('0xb')]+0x2;this['drawText'](_0x4b886d,_0x356f0a,_0x554053,_0x26f415);};}