//=============================================================================
// Olivia Engine - Proximity Compass - for RPG Maker MV version 1.6.1
// Olivia_ProximityCompass.js
//=============================================================================
 /*:
 * @plugindesc <ProximityCompass> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that adds a compass to the map screen, marking
 * the position of nearby events and the directions of far away events. Events
 * are represented by icons from the icon set. This can be used to help the
 * player locate objectives, points of interests, NPCs, and more.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Default Show: Show the compass by default on the screen. This is the system
 * setting for the game. The player setting will bypass this if the player
 * chooses to hide the compass.
 *
 * Default Proximity: This is the default proximity range for icons to show up
 * on the compass (otherwise, they fade away). This is the distance in tiles
 * and not pixels. Make this as a high number if you want icons to always show.
 *
 * Player Icon: This is the default icon used to indicate the player's position
 * at the center of the compass.
 *
 *
 *
 * X Center, Y Center: These settings are the code used to determine the center
 * coordinates of the compass.
 *
 * Radius: This is the radius (in pixels) for the compass from the center. This
 * will be adjusted for if the player decides to change the Compass Size.
 *
 * Tile Scale: The scale used to calculate the distance of a tile relative to
 * the distance on the compass.
 *
 * Back Color: The color used for the back of the compass.
 *
 * Compass Frame: The picture used for the compass' frame. This will come from
 * the img/pictures/ folder. An image will be provided in the sample project.
 *
 * Compass Fade Speed: Fade speed of the compass when toggled on/off. Lower is
 * slower. Higher is faster.
 *
 * Icon Fade Speed: Fade speed of the icons when out of range. Lower is slower.
 * Higher is faster.
 *
 * Hide During Messages: Gives option to hide during message events.
 * Does not apply when the player is simply performing movement actions or
 * receiving items.
 * 
 * Hide During Events: Gives option to hide during any event except parallel
 * events. This is more wide covered than Hide During Messages.
 *
 *
 *
 * Show Compass: Text in options menu to show the compass.
 *
 * Compass Size: Text in the options menu to change the compass size.
 *
 *
 *
 * --------
 * Notetags
 * --------
 *
 * <Hide Compass>
 * - Place this notetag inside maps where you don't want the compass to show.
 *
 *
 *
 * ------------
 * Comment Tags
 * ------------
 *
 * To add a compass icon to an event, make a comment in the event list and add
 * these comment tags:
 *
 * <Compass Icon: x>
 * - This will set the event's icon to x.
 *
 * <Compass Proximity: x>
 * - This icon will only appear on the compass if the player is within x tiles.
 *
 * 
 *
 * ---------------
 * Plugin Commands
 * ---------------
 *
 * ShowCompass
 * HideCompass
 * ToggleCompass
 * - This will show, hide, or toggle the compass from view. If shown, this will
 * make the compass visible, unless the player opts to hide the compass or if
 * the map has a <Hide Compass> notetag.
 *
 * PlayerCompassIcon x
 * - Changes the player's compass icon to x.
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
 * -------------
 * Compatibility
 * -------------
 *
 * This plugin is compatible with the following plugins:
 *
 * - Yanfly - YEP Options Core
 *
 * Place this plugin under those in the Plugin Manager list. Otherwise, I cannot
 * guarantee this plugin will work as intended. I am NOT responsible for the
 * compatibility of the plugins not shown in the above list.
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
 * 6. You may NOT take code for your own released Plugins.
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
 * @param Default
 *
 * @param Default Show
 * @parent Default
 * @type boolean
 * @on Yes
 * @off No
 * @desc If yes, show compass by default
 * @default true
 *
 * @param Default Proximity
 * @parent Default
 * @type number
 * @min 1
 * @desc Maximum tile distance for event proximity to show on compass.
 * @default 1000
 *
 * @param Player Icon
 * @parent Default
 * @desc Icon used for the player to show on the compass.
 * @default 15
 *
 * @param
 *
 * @param Compass Settings
 *
 * @param X Center
 * @parent Compass Settings
 * @desc Code used to calculate the X position of the compass's center. This is NOT the upper left corner of the compass.
 * @default Graphics.boxWidth - 128 * ConfigManager.compassSize / 100
 *
 * @param Y Center
 * @parent Compass Settings
 * @desc Code used to calculate the Y position of the compass's center. This is NOT the upper left corner of the compass.
 * @default Graphics.boxHeight - 128 * ConfigManager.compassSize / 100
 *
 * @param Radius
 * @parent Compass Settings
 * @type number
 * @min 1
 * @desc Radius in pixels
 * @default 100
 *
 * @param Tile Scale
 * @parent Compass Settings
 * @desc The scale used to calculate the distance of a tile relative to the distance on the compass
 * @default 0.25
 *
 * @param Back Color
 * @parent Compass Settings
 * @desc The color used for the back of the compass.
 * 'rgba(red, green, blue, alpha)'
 * @default rgba(0,0,0,0.8)
 *
 * @param Compass Frame
 * @parent Compass Settings
 * @type file
 * @dir img/pictures/
 * @desc The picture used for the compass' frame.
 * This will come from the img/pictures/ folder
 * @default CompassFrame
 *
 * @param Compass Fade Speed
 * @parent Compass Settings
 * @type number
 * @min 1
 * @desc Fade speed of the compass when toggled on/off. Lower is slower. Higher is faster.
 * @default 16
 *
 * @param Icon Fade Speed
 * @parent Compass Settings
 * @type number
 * @min 1
 * @desc Fade speed of the icons when out of range. Lower is slower. Higher is faster.
 * @default 8
 *
 * @param Hide During Messages
 * @parent Compass Settings
 * @type boolean
 * @on Yes
 * @off No
 * @desc If yes, hide compass whenever a message is being displayed.
 * @default false
 *
 * @param Hide During Events
 * @parent Compass Settings
 * @type boolean
 * @on Yes
 * @off No
 * @desc If yes, hide compass whenever an event is running
 * @default false
 *
 * @param
 * 
 * @param Options Settings
 *
 * @param Show Compass
 * @parent Options Settings
 * @desc Text in options menu to show the compass.
 * @default Show Compass
 *
 * @param Compass Size
 * @parent Options Settings
 * @desc Text in the options menu to change the compass size.
 * @default Compass Size
 *
 * @param
 *
 *
 */
//=============================================================================

var _0x166b=['_characterSprites','isShowProximityCompass','update','contains','forEach','prototype','atan2','setInitialOpacity','index','radius','setPlayerCompassIcon','showDefault','YEP_OptionsCore','playerIcon','_iconWidth','Compass\x20Frame','_character','___Game_Event_setupPage___','___Window_Options_cursorLeft___','_iconIndex','createLowerLayer','sin','___Window_Options_cursorRight___','showCompass','___Game_Interpreter_pluginCommand___','Y\x20Center','page','changeValue','drawCircle','_compassProximity','Default\x20Show','createProximityCompass','abs','_realY','addCommand','tileScale','Player\x20Icon','list','compassSize','_playerCompassIcon','anchor','initialize','commandSymbol','Show\x20Compass','Hide\x20During\x20Messages','isVolumeSymbol','loadBitmap','defaultShow','deltaX','compassFadeSpeed','false','___Window_Options_addGeneralOptions___','setupCompassIconIndex','note','_compassIconIndex','addChild','match','Olivia_ProximityCompass','loadSystem','IconSet','___ConfigManager_applyData___','processOk','iconFadeSpeed','opacity','createFrame','scale','Default\x20Proximity','optionShow','Compass\x20Size','___Game_System_initialize___','constructor','code','originalScale','Compass\x20Fade\x20Speed','description','defaultProximity','cursorRight','_ProximityCompassFrameSprite','_showProximityCompass','Back\x20Color','Tile\x20Scale','cos','filter','pluginCommand','Icon\x20Fade\x20Speed','hideCompass','setupPage','loadPicture','apply','length','cursorLeft','updateFrame','_ProximityCompassBackgroundSprite','createSprites','color','makeData','bitmap','_iconHeight','getPlayerCompassIcon','_realX','clamp','___Window_Options_processOk___','setShowProximityCompass','<ProximityCompass>','createCharacters','___Spriteset_Map_createLowerLayer___','___ConfigManager_makeData___','applyData','updatePosition','call','___Window_Options_isVolumeSymbol___','Radius','parameters','addGeneralOptions','_ProximityCompassSprite','isShow','updateOpacity','push','getConfigValue','ProximityCompass','hideEvent','initializeProximityCompass','events','create'];(function(_0x315756,_0x166b4e){var _0x592ffa=function(_0x1eb838){while(--_0x1eb838){_0x315756['push'](_0x315756['shift']());}};_0x592ffa(++_0x166b4e);}(_0x166b,0x133));var _0x592f=function(_0x315756,_0x166b4e){_0x315756=_0x315756-0x0;var _0x592ffa=_0x166b[_0x315756];return _0x592ffa;};var Imported=Imported||{};Imported[_0x592f('0x7a')]=!![];var Olivia=Olivia||{};var parameters=$plugins[_0x592f('0x17')](function(_0x5280fc){return _0x5280fc[_0x592f('0xf')][_0x592f('0x44')](_0x592f('0x2c'));})[0x0][_0x592f('0x35')];Olivia[_0x592f('0x3c')]={'defaultShow':eval(parameters[_0x592f('0x5f')]),'defaultProximity':Number(parameters[_0x592f('0x7')]),'playerIcon':Number(parameters[_0x592f('0x65')]),'x':String(parameters['X\x20Center']),'y':String(parameters[_0x592f('0x5a')]),'radius':Number(parameters[_0x592f('0x34')]),'tileScale':Number(parameters[_0x592f('0x15')]),'color':String(parameters[_0x592f('0x14')]),'frame':String(parameters[_0x592f('0x50')]),'compassFadeSpeed':Number(parameters[_0x592f('0xe')]),'iconFadeSpeed':Number(parameters[_0x592f('0x19')]),'hideMessage':eval(String(parameters[_0x592f('0x6d')]||_0x592f('0x73'))),'hideEvent':eval(String(parameters['Hide\x20During\x20Events']||_0x592f('0x73'))),'optionShow':String(parameters[_0x592f('0x6c')]),'showDefault':!![],'optionSize':String(parameters[_0x592f('0x9')]),'originalScale':0x64};ConfigManager[_0x592f('0x58')]=Olivia['ProximityCompass'][_0x592f('0x4c')];ConfigManager[_0x592f('0x67')]=Olivia[_0x592f('0x3c')]['originalScale'];Olivia[_0x592f('0x3c')]['___ConfigManager_makeData___']=ConfigManager['makeData'];ConfigManager[_0x592f('0x24')]=function(){var _0x28771a=Olivia[_0x592f('0x3c')][_0x592f('0x2f')]['call'](this);_0x28771a[_0x592f('0x58')]=this[_0x592f('0x58')];_0x28771a[_0x592f('0x67')]=this[_0x592f('0x67')];return _0x28771a;};Olivia[_0x592f('0x3c')][_0x592f('0x1')]=ConfigManager[_0x592f('0x30')];ConfigManager[_0x592f('0x30')]=function(_0xe68ae1){Olivia['ProximityCompass']['___ConfigManager_applyData___'][_0x592f('0x32')](this,_0xe68ae1);if(_0xe68ae1['showCompass']===undefined){this[_0x592f('0x58')]=Olivia[_0x592f('0x3c')]['showDefault'];}else{this[_0x592f('0x58')]=_0xe68ae1[_0x592f('0x58')];}if(_0xe68ae1['compassSize']===undefined){this[_0x592f('0x67')]=Olivia['ProximityCompass'][_0x592f('0xd')];}else{this[_0x592f('0x67')]=_0xe68ae1[_0x592f('0x67')];}};Olivia[_0x592f('0x3c')][_0x592f('0xa')]=Game_System['prototype'][_0x592f('0x6a')];Game_System['prototype']['initialize']=function(){Olivia[_0x592f('0x3c')][_0x592f('0xa')][_0x592f('0x32')](this);this['initializeProximityCompass']();};Game_System[_0x592f('0x46')]['initializeProximityCompass']=function(){this[_0x592f('0x13')]=Olivia[_0x592f('0x3c')][_0x592f('0x70')];this[_0x592f('0x68')]=Olivia['ProximityCompass'][_0x592f('0x4e')];};Game_System[_0x592f('0x46')]['isShowProximityCompass']=function(){if(this[_0x592f('0x13')]===undefined){this[_0x592f('0x3e')]();}return this['_showProximityCompass'];};Game_System[_0x592f('0x46')][_0x592f('0x2b')]=function(_0x135152){if(this[_0x592f('0x13')]===undefined){this[_0x592f('0x3e')]();}this['_showProximityCompass']=_0x135152;};Game_System[_0x592f('0x46')][_0x592f('0x27')]=function(){if(this[_0x592f('0x68')]===undefined){this['initializeProximityCompass']();}return this[_0x592f('0x68')];};Game_System[_0x592f('0x46')]['setPlayerCompassIcon']=function(_0x334b6d){if(this[_0x592f('0x68')]===undefined){this[_0x592f('0x3e')]();}this['_playerCompassIcon']=_0x334b6d;};Game_Map['prototype'][_0x592f('0x1a')]=function(){if(!ConfigManager['showCompass']){return!![];}else if(!!$dataMap&&!!$dataMap[_0x592f('0x76')]){return $dataMap[_0x592f('0x76')]['match'](/<Hide Compass>/i);}else{return![];}};Olivia['ProximityCompass']['___Game_Event_setupPage___']=Game_Event[_0x592f('0x46')][_0x592f('0x1b')];Game_Event[_0x592f('0x46')][_0x592f('0x1b')]=function(){Olivia[_0x592f('0x3c')][_0x592f('0x52')][_0x592f('0x32')](this);this[_0x592f('0x75')]();};Game_Event[_0x592f('0x46')]['setupCompassIconIndex']=function(){this[_0x592f('0x77')]=0x0;this[_0x592f('0x5e')]=Olivia[_0x592f('0x3c')][_0x592f('0x10')];if(this[_0x592f('0x5b')]()){var _0x437b0f=this[_0x592f('0x66')]();var _0x4478dd=_0x437b0f['length'];for(var _0x1ee500=0x0;_0x1ee500<_0x4478dd;++_0x1ee500){var _0x505118=_0x437b0f[_0x1ee500];if([0x6c,0x198][_0x592f('0x44')](_0x505118[_0x592f('0xc')])){if(_0x505118[_0x592f('0x35')][0x0][_0x592f('0x79')](/<COMPASS ICON: (\d+)>/i)){this['_compassIconIndex']=parseInt(RegExp['$1']);}if(_0x505118[_0x592f('0x35')][0x0][_0x592f('0x79')](/<COMPASS PROXIMITY: (\d+)>/i)){this[_0x592f('0x5e')]=parseInt(RegExp['$1']);}}}}};Olivia['ProximityCompass'][_0x592f('0x59')]=Game_Interpreter[_0x592f('0x46')][_0x592f('0x18')];Game_Interpreter[_0x592f('0x46')][_0x592f('0x18')]=function(_0x2af707,_0x671ce6){Olivia[_0x592f('0x3c')]['___Game_Interpreter_pluginCommand___'][_0x592f('0x32')](this,_0x2af707,_0x671ce6);if(_0x2af707[_0x592f('0x79')](/ShowCompass/i)){$gameSystem[_0x592f('0x2b')](!![]);}else if(_0x2af707[_0x592f('0x79')](/HideCompass/i)){$gameSystem[_0x592f('0x2b')](![]);}else if(_0x2af707[_0x592f('0x79')](/ToggleCompass/i)){var _0x3ec373=$gameSystem[_0x592f('0x42')]();$gameSystem['setShowProximityCompass'](!_0x3ec373);}else if(_0x2af707[_0x592f('0x79')](/PlayerCompassIcon/i)){$gameSystem[_0x592f('0x4b')](parseInt(_0x671ce6[0x0]));}};Olivia[_0x592f('0x3c')][_0x592f('0x2e')]=Spriteset_Map[_0x592f('0x46')]['createLowerLayer'];Spriteset_Map[_0x592f('0x46')][_0x592f('0x55')]=function(){Olivia[_0x592f('0x3c')][_0x592f('0x2e')]['call'](this);this[_0x592f('0x60')]();};Spriteset_Map[_0x592f('0x46')][_0x592f('0x60')]=function(){this[_0x592f('0x37')]=new Sprite_ProximityCompass();this[_0x592f('0x78')](this[_0x592f('0x37')]);};function Sprite_ProximityCompass(){this[_0x592f('0x6a')][_0x592f('0x1d')](this,arguments);}Sprite_ProximityCompass[_0x592f('0x46')]=Object[_0x592f('0x40')](Sprite_Base[_0x592f('0x46')]);Sprite_ProximityCompass[_0x592f('0x46')][_0x592f('0xb')]=Sprite_ProximityCompass;Sprite_ProximityCompass[_0x592f('0x46')]['initialize']=function(){Sprite_Base[_0x592f('0x46')]['initialize']['call'](this);this[_0x592f('0x22')]();this['x']=eval(Olivia[_0x592f('0x3c')]['x']);this['y']=eval(Olivia[_0x592f('0x3c')]['y']);this[_0x592f('0x69')]['x']=0.5;this['anchor']['y']=0.5;this['blendMode']=0x2;if(!this[_0x592f('0x38')]()){this['opacity']=0x0;}this[_0x592f('0x6')]['x']=ConfigManager[_0x592f('0x67')]*0.01;this[_0x592f('0x6')]['y']=ConfigManager['compassSize']*0.01;};Sprite_ProximityCompass[_0x592f('0x46')][_0x592f('0x22')]=function(){this['createBackground']();this[_0x592f('0x5')]();this[_0x592f('0x2d')]();};Sprite_ProximityCompass[_0x592f('0x46')]['createBackground']=function(){this['_ProximityCompassBackgroundSprite']=new Sprite();this[_0x592f('0x78')](this[_0x592f('0x21')]);this[_0x592f('0x21')][_0x592f('0x69')]['x']=0.5;this[_0x592f('0x21')][_0x592f('0x69')]['y']=0.5;var _0x3d1b9e=Olivia[_0x592f('0x3c')][_0x592f('0x4a')]*0x2;var _0xaab858=Olivia[_0x592f('0x3c')][_0x592f('0x4a')]*0x2;var _0x51ace9=Olivia[_0x592f('0x3c')][_0x592f('0x23')];this[_0x592f('0x21')][_0x592f('0x25')]=new Bitmap(_0x3d1b9e,_0xaab858);this[_0x592f('0x21')][_0x592f('0x25')][_0x592f('0x5d')](_0x3d1b9e/0x2,_0xaab858/0x2,_0x3d1b9e/0x2,_0x51ace9);};Sprite_ProximityCompass[_0x592f('0x46')][_0x592f('0x5')]=function(){this[_0x592f('0x12')]=new Sprite();this[_0x592f('0x78')](this[_0x592f('0x12')]);this[_0x592f('0x12')][_0x592f('0x69')]['x']=0.5;this[_0x592f('0x12')]['anchor']['y']=0.5;this[_0x592f('0x12')][_0x592f('0x25')]=ImageManager[_0x592f('0x1c')](Olivia[_0x592f('0x3c')]['frame']);};Sprite_ProximityCompass['prototype'][_0x592f('0x2d')]=function(){this['_characterSprites']=[];$gameMap[_0x592f('0x3f')]()[_0x592f('0x45')](function(_0x107a14){this[_0x592f('0x41')][_0x592f('0x3a')](new Sprite_CompassIcon(_0x107a14));},this);this[_0x592f('0x41')][_0x592f('0x3a')](new Sprite_CompassIcon($gamePlayer));for(var _0x412790=0x0;_0x412790<this[_0x592f('0x41')][_0x592f('0x1e')];_0x412790++){this[_0x592f('0x78')](this[_0x592f('0x41')][_0x412790]);}};Sprite_ProximityCompass[_0x592f('0x46')][_0x592f('0x43')]=function(){Sprite_Base['prototype']['update']['call'](this);this[_0x592f('0x39')]();};Sprite_ProximityCompass[_0x592f('0x46')]['updateOpacity']=function(){if(this[_0x592f('0x38')]()){this[_0x592f('0x4')]+=Olivia[_0x592f('0x3c')]['compassFadeSpeed'];}else{this[_0x592f('0x4')]-=Olivia[_0x592f('0x3c')][_0x592f('0x72')];}};Sprite_ProximityCompass[_0x592f('0x46')][_0x592f('0x38')]=function(){if($gameMap[_0x592f('0x1a')]()){return![];}else if(Olivia[_0x592f('0x3c')]['hideMessage']&&$gameMessage['isBusy']()){return![];}else if(Olivia[_0x592f('0x3c')][_0x592f('0x3d')]&&$gameMap['isEventRunning']()){return![];}else if(SceneManager['isSceneChanging']()){return![];}else{return $gameSystem['isShowProximityCompass']();}};function Sprite_CompassIcon(){this[_0x592f('0x6a')][_0x592f('0x1d')](this,arguments);}Sprite_CompassIcon[_0x592f('0x46')]=Object['create'](Sprite['prototype']);Sprite_CompassIcon[_0x592f('0x46')][_0x592f('0xb')]=Sprite_CompassIcon;Sprite_CompassIcon['prototype'][_0x592f('0x6a')]=function(_0x49f686){this[_0x592f('0x51')]=_0x49f686;this[_0x592f('0x54')]=0x0;Sprite[_0x592f('0x46')][_0x592f('0x6a')][_0x592f('0x32')](this);this[_0x592f('0x69')]['x']=0.5;this[_0x592f('0x69')]['y']=0.5;this[_0x592f('0x6f')]();var _0x1e333e=0x1/(ConfigManager['compassSize']*0.01);this[_0x592f('0x6')]['x']=_0x1e333e;this[_0x592f('0x6')]['y']=_0x1e333e;this[_0x592f('0x48')]();};Sprite_CompassIcon[_0x592f('0x46')][_0x592f('0x6f')]=function(){this[_0x592f('0x25')]=ImageManager[_0x592f('0x7b')](_0x592f('0x0'));};Sprite_CompassIcon[_0x592f('0x46')][_0x592f('0x48')]=function(){if(this[_0x592f('0x51')]===$gamePlayer){this[_0x592f('0x4')]=0xff;}else{var _0x3bef67=this[_0x592f('0x51')][_0x592f('0x5e')];var _0x27d0ff=$gameMap['deltaX'](this[_0x592f('0x51')][_0x592f('0x28')],$gamePlayer[_0x592f('0x28')]);var _0x418c19=$gameMap[_0x592f('0x71')](this['_character'][_0x592f('0x62')],$gamePlayer[_0x592f('0x62')]);if(_0x3bef67>=Math[_0x592f('0x61')](_0x27d0ff)+Math[_0x592f('0x61')](_0x418c19)){this['opacity']=0xff;}else{this[_0x592f('0x4')]=0x0;}}};Sprite_CompassIcon[_0x592f('0x46')][_0x592f('0x43')]=function(){Sprite[_0x592f('0x46')]['update'][_0x592f('0x32')](this);this['updateOpacity']();this[_0x592f('0x20')]();this[_0x592f('0x31')]();};Sprite_CompassIcon[_0x592f('0x46')][_0x592f('0x39')]=function(){if(this[_0x592f('0x51')]===$gamePlayer){this[_0x592f('0x4')]=0xff;}else{var _0x36fb7d=this[_0x592f('0x51')][_0x592f('0x5e')];var _0x3488fa=$gameMap[_0x592f('0x71')](this[_0x592f('0x51')][_0x592f('0x28')],$gamePlayer[_0x592f('0x28')]);var _0x3d2263=$gameMap['deltaX'](this['_character'][_0x592f('0x62')],$gamePlayer['_realY']);if(_0x36fb7d>=Math[_0x592f('0x61')](_0x3488fa)+Math[_0x592f('0x61')](_0x3d2263)){this[_0x592f('0x4')]+=Olivia[_0x592f('0x3c')][_0x592f('0x3')];}else{this[_0x592f('0x4')]-=Olivia[_0x592f('0x3c')][_0x592f('0x3')];}}};Sprite_CompassIcon[_0x592f('0x46')][_0x592f('0x20')]=function(){if(this[_0x592f('0x51')]===$gamePlayer){this[_0x592f('0x54')]=$gameSystem[_0x592f('0x27')]();}else{this[_0x592f('0x54')]=this[_0x592f('0x51')][_0x592f('0x77')];}var _0x3a8f51=Sprite_StateIcon[_0x592f('0x4f')];var _0x5e9622=Sprite_StateIcon[_0x592f('0x26')];var _0x6e1854=this[_0x592f('0x54')]%0x10*_0x3a8f51;var _0x2fb126=Math['floor'](this[_0x592f('0x54')]/0x10)*_0x5e9622;this['setFrame'](_0x6e1854,_0x2fb126,_0x3a8f51,_0x5e9622);};Sprite_CompassIcon[_0x592f('0x46')]['updatePosition']=function(){var _0x44594d=Olivia[_0x592f('0x3c')]['radius'];var _0x30bafe=Olivia[_0x592f('0x3c')][_0x592f('0x64')]*$gameMap['tileWidth']();var _0x28857d=$gameMap['deltaX'](this[_0x592f('0x51')][_0x592f('0x28')],$gamePlayer[_0x592f('0x28')])*_0x30bafe;var _0x1bd898=$gameMap[_0x592f('0x71')](this[_0x592f('0x51')][_0x592f('0x62')],$gamePlayer[_0x592f('0x62')])*_0x30bafe;var _0xfd4403=Math['sqrt'](_0x28857d*_0x28857d+_0x1bd898*_0x1bd898);if(_0xfd4403<_0x44594d){this['x']=_0x28857d;this['y']=_0x1bd898;}else{var _0x189c02=Math[_0x592f('0x47')](_0x1bd898,_0x28857d);this['x']=_0x44594d*Math[_0x592f('0x16')](_0x189c02);this['y']=_0x44594d*Math[_0x592f('0x56')](_0x189c02);}};Olivia['ProximityCompass'][_0x592f('0x74')]=Window_Options[_0x592f('0x46')][_0x592f('0x36')];Window_Options[_0x592f('0x46')][_0x592f('0x36')]=function(){Olivia[_0x592f('0x3c')][_0x592f('0x74')][_0x592f('0x32')](this);if(!Imported[_0x592f('0x4d')]){this[_0x592f('0x63')](Olivia[_0x592f('0x3c')][_0x592f('0x8')],'showCompass');this[_0x592f('0x63')](Olivia[_0x592f('0x3c')]['optionSize'],_0x592f('0x67'));}};Olivia[_0x592f('0x3c')]['___Window_Options_isVolumeSymbol___']=Window_Options[_0x592f('0x46')]['isVolumeSymbol'];Window_Options[_0x592f('0x46')][_0x592f('0x6e')]=function(_0x5d9823){if(_0x5d9823[_0x592f('0x79')](/compassSize/i)){return!![];}else{return Olivia['ProximityCompass'][_0x592f('0x33')][_0x592f('0x32')](this,_0x5d9823);}};Olivia['ProximityCompass'][_0x592f('0x2a')]=Window_Options[_0x592f('0x46')][_0x592f('0x2')];Window_Options[_0x592f('0x46')][_0x592f('0x2')]=function(){var _0x2abd0b=this[_0x592f('0x6b')](this[_0x592f('0x49')]());if(_0x2abd0b[_0x592f('0x79')](/compassSize/i)){var _0x17e93b=this[_0x592f('0x3b')](_0x2abd0b);_0x17e93b+=0xa;if(_0x17e93b>0x64){_0x17e93b=0x32;}_0x17e93b=_0x17e93b[_0x592f('0x29')](0x32,0x64);this[_0x592f('0x5c')](_0x2abd0b,_0x17e93b);}else{Olivia[_0x592f('0x3c')]['___Window_Options_processOk___'][_0x592f('0x32')](this);}};Olivia[_0x592f('0x3c')][_0x592f('0x57')]=Window_Options['prototype'][_0x592f('0x11')];Window_Options[_0x592f('0x46')][_0x592f('0x11')]=function(_0x2f36a8){var _0x3847ad=this[_0x592f('0x6b')](this['index']());if(_0x3847ad[_0x592f('0x79')](/compassSize/i)){var _0x4029c9=this[_0x592f('0x3b')](_0x3847ad);_0x4029c9+=0xa;_0x4029c9=_0x4029c9[_0x592f('0x29')](0x32,0x64);this[_0x592f('0x5c')](_0x3847ad,_0x4029c9);}else{Olivia[_0x592f('0x3c')][_0x592f('0x57')][_0x592f('0x32')](this,_0x2f36a8);}};Olivia[_0x592f('0x3c')][_0x592f('0x53')]=Window_Options[_0x592f('0x46')][_0x592f('0x1f')];Window_Options[_0x592f('0x46')][_0x592f('0x1f')]=function(_0x16ef2b){var _0x54a996=this[_0x592f('0x6b')](this[_0x592f('0x49')]());if(_0x54a996[_0x592f('0x79')](/compassSize/i)){var _0x25a019=this[_0x592f('0x3b')](_0x54a996);_0x25a019-=0xa;_0x25a019=_0x25a019[_0x592f('0x29')](0x32,0x64);this[_0x592f('0x5c')](_0x54a996,_0x25a019);}else{Olivia[_0x592f('0x3c')]['___Window_Options_cursorLeft___'][_0x592f('0x32')](this);}};