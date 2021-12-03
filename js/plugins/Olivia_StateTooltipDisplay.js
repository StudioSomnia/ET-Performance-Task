//=============================================================================
// Olivia Engine - State Tooltip Display - for RPG Maker MV version 1.6.1
// Olivia_StateOlivia_StateTooltipDisplay.js
//=============================================================================
 /*:
 * @plugindesc <Olivia_StateTooltipDisplay> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that adds a tooltip window in battle (and other
 * scenes) dedicated to showing information regarding states. If the player
 * hovers the mouse over the state icons, the window will appear and display
 * descriptions about each of the states affecting the battler.
 *
 * 
 *
 * ------------
 * Instructions
 * ------------
 * 
 * <Help Description>
 * insert a help description here
 * insert another line if you want to
 * </Help Description>
 * - Place this in the states that you want to have appear in the tooltip
 * window. Text codes can be used for the description. If no description is
 * used, then the state will not appear in the tooltip window.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Window Scale: Scale the size of the contents of the tooltip window down by
 * this much. Use 1.0 for regular size.
 *
 * Window Skin: Window skin used for Tooltip window. This can be used to help
 * tell the player at first glance that the information displayed there is
 * different from the normal window.
 *
 * Window Skin Opacity: Opacity of the window skin. Sometimes you don't want
 * the opacity to be too transparent, as it will make the text on the tooltip
 * window harder to read.
 *
 * Text Help Format: If you don't want to use the default text format for the
 * tooltip window entries, change it up to your liking.
 *
 * Buff Format, Debuff Format: Since buffs and debuffs don't have database
 * entries, you will change how they appear in the tooltips here.
 *
 * Turn Duration Format: Change how you want the turn duration to appear in
 * your tooltip window.
 *
 * Enabled Windows: You can disable which windows tooltips will appear from.
 * Decide which ones work best for you and which ones don't. Only certain types
 * of windows are compatible the tooltip window.
 *
 * 1. Window_Help: This requires YEP_BattleEngineCore and YEP_BuffsStatesCore.
 * Window_Help used in battle that shows the battler's name.
 *
 * 2. Window_SkillStatus: Shown in the skill menu. Also used in a variety of
 * Yanfly's menu revisions.
 *
 * 3. Window_BattleSideStates: Used with Olivia's Side Battle Status UI.
 *
 * 4. Window_BattleStatus: Used for the battle status window.
 * Only compatible with the default and Yanfly's.
 *
 * 
 * 
 * -------------
 * Compatibility
 * -------------
 *
 * This plugin is compatible with the following plugins:
 *
 * - YEP_CoreEngine.js
 * - YEP_BattleEngineCore.js
 * - YEP_BuffsStatesCore.js
 * - YEP_BattleStatusWindow.js
 * - YEP_ItemCore.js
 * - YEP_EquipCore.js
 * - YEP_SkillCore.js
 * - Olivia_OctoBattle.js
 * - Olivia_SideBattleUI.js
 *
 * Place this plugin under those in the Plugin Manager list.
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
 * 6. You may NOT take code for your own released Plugins.
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
 * @param Tooltip Window
 *
 * @param WindowScale
 * @text Window Scale
 * @parent Tooltip Window
 * @desc Scale the size of the contents of the tooltip window down by this much
 * @default 0.6
 *
 * @param WindowSkin
 * @text Window Skin
 * @parent Tooltip Window
 * @type file
 * @dir img/system/
 * @desc Window skin used for Tooltip window
 * @default Window
 *
 * @param SkinOpacity
 * @text Window Skin Opacity
 * @parent WindowSkin
 * @type number
 * @min 0
 * @max 255
 * @desc Opacity of the window skin
 * @default 240
 *
 * @param TextFormat
 * @text Text Help Format
 * @parent Tooltip Window
 * @type note
 * @desc Can use text codes. %1: Icon, %2: Name, %3: Description,
 * %4: Duration
 * @default "\\c[27]%1%2:\\c[0] %3 %4"
 *
 * @param BuffFormat
 * @text Buff Format
 * @parent TextFormat
 * @type note
 * @desc Can use text codes. %1: Icon, %2: Parameter, %3: Percentage
 * %4: Duration
 * @default "\\c[27]%1%2 Up:\\c[0] Increases unit's %2 to %3% %4"
 *
 * @param DebuffFormat
 * @text Debuff Format
 * @parent TextFormat
 * @type note
 * @desc Can use text codes. %1: Icon, %2: Parameter, %3: Percentage
 * %4: Duration
 * @default "\\c[27]%1%2 Down:\\c[0] Decreases unit's %2 to %3% %4"
 *
 * @param DurationFormat
 * @text Turn Duration Format
 * @parent TextFormat
 * @type note
 * @desc Can use text codes. %1: Duration
 * @default "\\c[27](Remaining Turns: %1)\\c[0]"
 *
 * @param
 * 
 * @param Enabled Windows
 *
 * @param Window_Help
 * @parent Enabled Windows
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Window_Help used in battle that shows the battler's name.
 * Requires YEP_BattleEngineCore and YEP_BuffsStatesCore.
 * @default false
 *
 * @param Window_SkillStatus
 * @parent Enabled Windows
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Shown in the skill menu. Also used in a variety of Yanfly's menu revisions.
 * @default true
 *
 * @param Window_BattleSideStates
 * @parent Enabled Windows
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Used with Olivia's Side Battle Status UI
 * @default true
 *
 * @param Window_BattleStatus
 * @parent Enabled Windows
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Used for the battle status window.
 * Only compatible with the default and Yanfly's
 * @default true
 *
 */
//=============================================================================

var _0x5691=['IBSStateHelp2','height','contents','setBattler','pageX','_buffTurns','Param','buffFmt','canvasToLocalX','_iconHeight','create','IBSStateHelp1','Window_BattleStatus','Window_BattleSideStates','width','standardPadding','meetStateTooltipRequirements','___Scene_Base_createWindowLayer___','max','loadSystem','indexOf','drawTextEx','clear','_mouseOverY','name','blt','isMouseOverStates','filter','help\x20description','push','description','constructor','Window_SkillStatus','___Sprite_StateIcon_update___','___Window_BattleSideBase_refresh___','\x5ci[','updateStateIconTooltipWindow','createContents','_buffs','prototype','parameters','createStateIconTooltipWindow','format','maxCols','___TouchInput_onMouseMove___','updateNewData','updateVisibility','createWindowLayer','_text','members','boxHeight','___Sprite_StateOverlay_update___','SkinOpacity','floor','determineStateTooltipBattler','textFmt','___Window_Help_setBattler___','splice','paramBuffRate','___Window_BattleStatus_update___','pageToCanvasY','windowskin','SideBattleUI','canvasToLocalY','lineHeight','ceil','refresh','basicAreaRect','___Window_SkillStatus_setActor___','isBuffAffected','isDebuffAffected','loadWindowskin','pageY','YEP_X_InBattleStatus','Enabled','IconSet','Game_BattlerBase_refresh','call','opacity','setupText','setupWindow','initialize','Window_Help','_iconWidth','setTargetHost','topIndex','makeFontSmaller','_actor','windowSkillStatus','setupStateText','note','boxWidth','none','tooltipWindow','iconIndex','standardBackOpacity','parent','setupBuffText','setupDimensions','windowBattleSideStates','updateTone','update','setActor','split','Window','windowHelp','anchor','_mouseOverX','match','increaseTurn','windowSkin','contentsOpacity','Olivia_StateOlivia_StateTooltipDisplay','pageToCanvasX','isFullyVisible','_scene','round','___Window_BattleSideBase_setNewActor___','states','___Window_BattleSideStates_update___','WindowSkin','_stateTurns','textPadding','TextFormat','_onMouseMove','textWidthEx','inBattle','StateTooltipDisplay','_stateIconTooltipWindow','OctoBattle','_targetHost','drawIcon','contentsWidth','<Olivia_StateTooltipDisplay>','updateCoordinates','setupChildPosition','fontSize','processDrawIcon','_visibilityTimer','___Window_Help_clear___','setNewActor','windowSkinOpacity','WindowScale','standardFontSize','parse','visible','SetupStateIconTooltipDescription','YEP_BattleStatusWindow','_battler','durationFmt','length','apply','___Window_SkillStatus_update___','scaleRate'];(function(_0x4b9052,_0x5691b2){var _0x1db102=function(_0x427098){while(--_0x427098){_0x4b9052['push'](_0x4b9052['shift']());}};_0x1db102(++_0x5691b2);}(_0x5691,0x1a1));var _0x1db1=function(_0x4b9052,_0x5691b2){_0x4b9052=_0x4b9052-0x0;var _0x1db102=_0x5691[_0x4b9052];return _0x1db102;};var Imported=Imported||{};Imported[_0x1db1('0x3')]=!![];var Olivia=Olivia||{};Olivia['StateTooltipDisplay']=Olivia[_0x1db1('0x12')]||{};var parameters=$plugins[_0x1db1('0x48')](function(_0xcc7885){return _0xcc7885[_0x1db1('0x4b')]['contains'](_0x1db1('0x18'));})[0x0][_0x1db1('0x55')];Olivia['StateTooltipDisplay'][_0x1db1('0x95')]={'scaleRate':Number(parameters[_0x1db1('0x21')]),'textFmt':JSON[_0x1db1('0x23')](parameters[_0x1db1('0xe')]),'buffFmt':JSON[_0x1db1('0x23')](parameters['BuffFormat']),'debuffFmt':JSON[_0x1db1('0x23')](parameters['DebuffFormat']),'durationFmt':JSON[_0x1db1('0x23')](parameters['DurationFormat']),'windowSkin':String(parameters[_0x1db1('0xb')]),'windowSkinOpacity':Number(parameters[_0x1db1('0x61')])};Olivia[_0x1db1('0x12')][_0x1db1('0x77')]={'windowHelp':eval(String(parameters[_0x1db1('0x7f')])),'windowSkillStatus':eval(String(parameters[_0x1db1('0x4d')])),'windowBattleSideStates':eval(String(parameters[_0x1db1('0x3a')])),'windowBattleStatus':eval(String(parameters[_0x1db1('0x39')]))};Olivia[_0x1db1('0x25')]=function(_0x3a7c76){if(!_0x3a7c76[_0x1db1('0x4b')]){_0x3a7c76[_0x1db1('0x4b')]='';var _0x27bab2=_0x3a7c76[_0x1db1('0x87')][_0x1db1('0x94')](/[\r\n]+/);var _0xc6443b=_0x1db1('0x89');for(var _0x33375e=0x0;_0x33375e<_0x27bab2[_0x1db1('0x29')];_0x33375e++){var _0x1d7806=_0x27bab2[_0x33375e];var _0x33a5a0=0x0;if(_0x1d7806[_0x1db1('0x99')](/<(?:HELP|DESCRIPTION|HELP DESCRIPTION)>/i)){_0xc6443b=_0x1db1('0x49');}else if(_0x1d7806[_0x1db1('0x99')](/<\/(?:HELP|DESCRIPTION|HELP DESCRIPTION)>/i)){_0xc6443b=_0x1db1('0x89');}else if(_0xc6443b==='help\x20description'){if(_0x3a7c76[_0x1db1('0x4b')][_0x1db1('0x29')]>0x0)_0x3a7c76[_0x1db1('0x4b')]+='\x0a';_0x3a7c76['description']+=_0x1d7806;}}}};if(Imported[_0x1db1('0x76')]){Yanfly[_0x1db1('0x33')][_0x1db1('0x38')]='';Yanfly[_0x1db1('0x33')][_0x1db1('0x2d')]='';}Olivia[_0x1db1('0x12')][_0x1db1('0x59')]=TouchInput[_0x1db1('0xf')];TouchInput[_0x1db1('0xf')]=function(_0x3f42c2){Olivia[_0x1db1('0x12')][_0x1db1('0x59')]['call'](this,_0x3f42c2);this[_0x1db1('0x98')]=Graphics[_0x1db1('0x4')](_0x3f42c2[_0x1db1('0x31')]);this['_mouseOverY']=Graphics[_0x1db1('0x69')](_0x3f42c2[_0x1db1('0x75')]);};Olivia['StateTooltipDisplay'][_0x1db1('0x79')]=Game_BattlerBase[_0x1db1('0x54')][_0x1db1('0x6f')];Game_BattlerBase[_0x1db1('0x54')][_0x1db1('0x6f')]=function(){Olivia[_0x1db1('0x12')][_0x1db1('0x79')][_0x1db1('0x7a')](this);if($gameParty[_0x1db1('0x11')]()&&!!SceneManager[_0x1db1('0x6')][_0x1db1('0x13')]){if(SceneManager['_scene']['_stateIconTooltipWindow'][_0x1db1('0x27')]===this){SceneManager[_0x1db1('0x6')][_0x1db1('0x13')]['updateNewData']();}}};Olivia[_0x1db1('0x12')]['Game_Troop_increaseTurn']=Game_Troop[_0x1db1('0x54')]['increaseTurn'];Game_Troop[_0x1db1('0x54')][_0x1db1('0x0')]=function(){Olivia[_0x1db1('0x12')]['Game_Troop_increaseTurn'][_0x1db1('0x7a')](this);if($gameParty[_0x1db1('0x11')]()&&!!SceneManager[_0x1db1('0x6')]['_stateIconTooltipWindow']){SceneManager[_0x1db1('0x6')]['_stateIconTooltipWindow']['updateNewData']();}};Olivia['StateTooltipDisplay'][_0x1db1('0x3e')]=Scene_Base[_0x1db1('0x54')][_0x1db1('0x5c')];Scene_Base[_0x1db1('0x54')]['createWindowLayer']=function(){Olivia['StateTooltipDisplay']['___Scene_Base_createWindowLayer___'][_0x1db1('0x7a')](this);this[_0x1db1('0x56')]();};Scene_Base[_0x1db1('0x54')][_0x1db1('0x56')]=function(){this[_0x1db1('0x13')]=new Window_StateIconTooltip();this['addChild'](this[_0x1db1('0x13')]);};Olivia[_0x1db1('0x12')][_0x1db1('0x4e')]=Sprite_StateIcon[_0x1db1('0x54')][_0x1db1('0x92')];Sprite_StateIcon[_0x1db1('0x54')]['update']=function(){Olivia['StateTooltipDisplay'][_0x1db1('0x4e')][_0x1db1('0x7a')](this);if(!!this['tooltipWindow']()&&this['isMouseOverStates']()){this[_0x1db1('0x51')]();}};Sprite_StateIcon[_0x1db1('0x54')][_0x1db1('0x51')]=function(){this[_0x1db1('0x8a')]()[_0x1db1('0x81')](this);};Sprite_StateIcon[_0x1db1('0x54')][_0x1db1('0x8a')]=function(){return SceneManager[_0x1db1('0x6')][_0x1db1('0x13')];};Sprite_StateIcon[_0x1db1('0x54')][_0x1db1('0x47')]=function(){var _0x592fcc=this[_0x1db1('0x35')](TouchInput[_0x1db1('0x98')]);var _0x36b500=this[_0x1db1('0x6c')](TouchInput[_0x1db1('0x44')]);_0x592fcc+=this[_0x1db1('0x97')]['x']*this['width'];_0x36b500+=this[_0x1db1('0x97')]['y']*this[_0x1db1('0x2e')];return this['isFullyVisible']()&&_0x592fcc>=0x0&&_0x36b500>=0x0&&_0x592fcc<this[_0x1db1('0x3b')]&&_0x36b500<this['height'];};Sprite_StateIcon['prototype'][_0x1db1('0x35')]=function(_0xc094ef){var _0x15fd1d=this;while(_0x15fd1d){_0xc094ef-=_0x15fd1d['x'];_0x15fd1d=_0x15fd1d[_0x1db1('0x8d')];}return _0xc094ef;};Sprite_StateIcon[_0x1db1('0x54')][_0x1db1('0x6c')]=function(_0x29ac69){var _0x5d3e53=this;while(_0x5d3e53){_0x29ac69-=_0x5d3e53['y'];_0x5d3e53=_0x5d3e53[_0x1db1('0x8d')];}return _0x29ac69;};Sprite_StateIcon[_0x1db1('0x54')][_0x1db1('0x5')]=function(){var _0x8f94bd=this;while(_0x8f94bd){if(!this['visible']){return![];}else if(this[_0x1db1('0x7b')]<=0x0){return![];}else{_0x8f94bd=_0x8f94bd[_0x1db1('0x8d')];}}return!![];};Olivia[_0x1db1('0x12')][_0x1db1('0x60')]=Sprite_StateOverlay[_0x1db1('0x54')][_0x1db1('0x92')];Sprite_StateOverlay[_0x1db1('0x54')][_0x1db1('0x92')]=function(){Olivia[_0x1db1('0x12')][_0x1db1('0x60')][_0x1db1('0x7a')](this);if(!!this['tooltipWindow']()&&this[_0x1db1('0x47')]()){this[_0x1db1('0x51')]();}};Sprite_StateOverlay[_0x1db1('0x54')][_0x1db1('0x51')]=function(){this[_0x1db1('0x8a')]()[_0x1db1('0x81')](this);};Sprite_StateOverlay[_0x1db1('0x54')][_0x1db1('0x8a')]=function(){return SceneManager['_scene'][_0x1db1('0x13')];};Sprite_StateOverlay['prototype'][_0x1db1('0x47')]=function(){var _0x2b1ea8=this[_0x1db1('0x35')](TouchInput[_0x1db1('0x98')]);var _0x5e23f1=this[_0x1db1('0x6c')](TouchInput[_0x1db1('0x44')]);_0x2b1ea8+=this[_0x1db1('0x97')]['x']*this[_0x1db1('0x3b')];_0x5e23f1+=this[_0x1db1('0x97')]['y']*this[_0x1db1('0x2e')];return this['isFullyVisible']()&&_0x2b1ea8>=0x0&&_0x5e23f1>=0x0&&_0x2b1ea8<this['width']&&_0x5e23f1<this['height'];};Sprite_StateOverlay[_0x1db1('0x54')][_0x1db1('0x35')]=function(_0x3a0a22){var _0xe7d273=this;while(_0xe7d273){_0x3a0a22-=_0xe7d273['x'];_0xe7d273=_0xe7d273[_0x1db1('0x8d')];}return _0x3a0a22;};Sprite_StateOverlay['prototype'][_0x1db1('0x6c')]=function(_0x129528){var _0x1a00cd=this;while(_0x1a00cd){_0x129528-=_0x1a00cd['y'];_0x1a00cd=_0x1a00cd[_0x1db1('0x8d')];}return _0x129528;};Sprite_StateOverlay[_0x1db1('0x54')]['isFullyVisible']=function(){var _0x295820=this;while(_0x295820){if(!this[_0x1db1('0x24')]){return![];}else if(this[_0x1db1('0x7b')]<=0x0){return![];}else{_0x295820=_0x295820[_0x1db1('0x8d')];}}return!![];};function Window_StateIconTooltip(){this[_0x1db1('0x7e')][_0x1db1('0x2a')](this,arguments);}Window_StateIconTooltip[_0x1db1('0x54')]=Object[_0x1db1('0x37')](Window_Base[_0x1db1('0x54')]);Window_StateIconTooltip['prototype'][_0x1db1('0x4c')]=Window_StateIconTooltip;Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x7e')]=function(){this[_0x1db1('0x5d')]='';this[_0x1db1('0x15')]=undefined;this[_0x1db1('0x27')]=undefined;this['_visibilityTimer']=0x0;Window_Base[_0x1db1('0x54')][_0x1db1('0x7e')][_0x1db1('0x7a')](this,0x0,0x0,Graphics['boxWidth'],Graphics['boxHeight']);};Window_StateIconTooltip['prototype'][_0x1db1('0x74')]=function(){this[_0x1db1('0x6a')]=ImageManager[_0x1db1('0x40')](Olivia[_0x1db1('0x12')][_0x1db1('0x95')][_0x1db1('0x1')]);};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x91')]=function(){};Window_StateIconTooltip['prototype']['scaleRate']=function(){return Olivia[_0x1db1('0x12')][_0x1db1('0x95')][_0x1db1('0x2c')];};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x6d')]=function(){return Math['round'](Window_Base[_0x1db1('0x54')][_0x1db1('0x6d')][_0x1db1('0x7a')](this)*this[_0x1db1('0x2c')]());};Window_StateIconTooltip['prototype'][_0x1db1('0x22')]=function(){return Math['round'](Window_Base[_0x1db1('0x54')][_0x1db1('0x22')][_0x1db1('0x7a')](this)*this['scaleRate']());};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x3c')]=function(){return Math['round'](Window_Base[_0x1db1('0x54')]['standardPadding'][_0x1db1('0x7a')](this)*this[_0x1db1('0x2c')]());};Window_StateIconTooltip['prototype'][_0x1db1('0xd')]=function(){return Math[_0x1db1('0x7')](Window_Base[_0x1db1('0x54')]['textPadding'][_0x1db1('0x7a')](this)*this[_0x1db1('0x2c')]());};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x8c')]=function(){return Olivia['StateTooltipDisplay']['Window'][_0x1db1('0x20')];};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x8c')]=function(){return Olivia[_0x1db1('0x12')][_0x1db1('0x95')][_0x1db1('0x20')];};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x1c')]=function(_0x5200b2,_0x6bf23d){this[_0x1db1('0x16')](_0x5200b2,_0x6bf23d['x']+0x2,_0x6bf23d['y']+0x2);_0x6bf23d['x']+=Math['round'](Window_Base[_0x1db1('0x80')]*this[_0x1db1('0x2c')]())+0x4;};Window_StateIconTooltip[_0x1db1('0x54')]['makeFontBigger']=function(){this[_0x1db1('0x2f')][_0x1db1('0x1b')]+=Math['ceil'](0xc*this[_0x1db1('0x2c')]());};Window_StateIconTooltip['prototype'][_0x1db1('0x83')]=function(){this[_0x1db1('0x2f')][_0x1db1('0x1b')]-=Math[_0x1db1('0x6e')](0xc*this[_0x1db1('0x2c')]());};Window_StateIconTooltip[_0x1db1('0x54')]['drawIcon']=function(_0x1de4ee,_0x3e5314,_0x3925a0){var _0x12cc61=ImageManager[_0x1db1('0x40')](_0x1db1('0x78'));var _0x56fc30=Window_Base[_0x1db1('0x80')];var _0x246525=Window_Base[_0x1db1('0x36')];var _0xc0ba5b=_0x1de4ee%0x10*_0x56fc30;var _0x1e0c18=Math[_0x1db1('0x62')](_0x1de4ee/0x10)*_0x246525;var _0x174b87=this[_0x1db1('0x2c')]();this[_0x1db1('0x2f')][_0x1db1('0x46')](_0x12cc61,_0xc0ba5b,_0x1e0c18,_0x56fc30,_0x246525,_0x3e5314,_0x3925a0,Math[_0x1db1('0x7')](_0x56fc30*_0x174b87),Math[_0x1db1('0x7')](_0x246525*_0x174b87));};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x92')]=function(){Window_Base[_0x1db1('0x54')][_0x1db1('0x92')][_0x1db1('0x7a')](this);this[_0x1db1('0x5b')]();this[_0x1db1('0x19')]();};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x5b')]=function(){visible=!!this[_0x1db1('0x24')];this[_0x1db1('0x24')]=this['_visibilityTimer']>0x0;this[_0x1db1('0x1d')]--;if(visible!==this[_0x1db1('0x24')]&&!!this['visible']){this[_0x1db1('0x5a')]();}};Window_StateIconTooltip[_0x1db1('0x54')]['updateCoordinates']=function(){if(this[_0x1db1('0x24')]&&!!this[_0x1db1('0x15')]){this['x']=TouchInput['_mouseOverX'];if(this['x']+this[_0x1db1('0x3b')]>=Graphics[_0x1db1('0x88')]){this['x']=Graphics['boxWidth']-this[_0x1db1('0x3b')];}this['y']=TouchInput['_mouseOverY'];if(this['y']+this['height']>=Graphics[_0x1db1('0x5f')]){this['y']=Graphics[_0x1db1('0x5f')]-this[_0x1db1('0x2e')];}}};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x81')]=function(_0x222b2f){if(this['_targetHost']!==_0x222b2f&&this[_0x1db1('0x1d')]!==0x0){this[_0x1db1('0x15')]=_0x222b2f;this['updateNewData']();}this[_0x1db1('0x1d')]=0x1;};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x5a')]=function(){this['setupWindow']();this[_0x1db1('0x8f')]();this[_0x1db1('0x1a')]();this[_0x1db1('0x6f')]();};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x7d')]=function(){this[_0x1db1('0x7c')]();};Window_StateIconTooltip['prototype'][_0x1db1('0x7c')]=function(){this[_0x1db1('0x5d')]='';if(!!this[_0x1db1('0x15')]){if(!!this['_targetHost']['_battler']){this[_0x1db1('0x27')]=this[_0x1db1('0x15')]['_battler'];}if(!!this[_0x1db1('0x27')]){this[_0x1db1('0x86')]();this[_0x1db1('0x8e')]();}}};Window_StateIconTooltip[_0x1db1('0x54')]['setupBuffText']=function(){if(!this[_0x1db1('0x27')])return this[_0x1db1('0x5d')]='';var _0x391df2=Olivia[_0x1db1('0x12')][_0x1db1('0x95')][_0x1db1('0x34')];var _0x1e4ad2=Olivia[_0x1db1('0x12')][_0x1db1('0x95')]['debuffFmt'];var _0x1ec297=Olivia[_0x1db1('0x12')][_0x1db1('0x95')][_0x1db1('0x28')];for(var _0x2cca18=0x0;_0x2cca18<0x8;_0x2cca18++){if(this[_0x1db1('0x27')][_0x1db1('0x72')](_0x2cca18)){var _0x2ab53b=_0x391df2;}else if(this[_0x1db1('0x27')][_0x1db1('0x73')](_0x2cca18)){var _0x2ab53b=_0x1e4ad2;}else{continue;}var _0x423790=this[_0x1db1('0x27')]['buffIconIndex'](this[_0x1db1('0x27')][_0x1db1('0x53')][_0x2cca18],_0x2cca18);var _0x9ac930=_0x1db1('0x50')+_0x423790+']';var _0x211ccf=TextManager['param'](_0x2cca18);var _0x1f518d=Math['floor'](this['_battler'][_0x1db1('0x67')](_0x2cca18)*0x64);var _0x269e29=this[_0x1db1('0x27')][_0x1db1('0x32')][_0x2cca18]||0x0;var _0x4e1cf6=_0x1ec297[_0x1db1('0x57')](_0x269e29);if(_0x269e29<=0x0)_0x4e1cf6='';var _0xa9860e=_0x2ab53b[_0x1db1('0x57')](_0x9ac930,_0x211ccf,_0x1f518d,_0x4e1cf6);this[_0x1db1('0x5d')]+=_0xa9860e+'\x0a';}};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x86')]=function(){if(!this['_battler'])return this[_0x1db1('0x5d')]='';var _0x5d6e44=this[_0x1db1('0x27')][_0x1db1('0x9')]();var _0x3249dc=Olivia[_0x1db1('0x12')][_0x1db1('0x95')][_0x1db1('0x64')];var _0x4833ac=Olivia[_0x1db1('0x12')][_0x1db1('0x95')][_0x1db1('0x28')];this[_0x1db1('0x5d')]='';for(var _0x57dfb6=0x0;_0x57dfb6<_0x5d6e44[_0x1db1('0x29')];_0x57dfb6++){var _0x5db59a=_0x5d6e44[_0x57dfb6];Olivia[_0x1db1('0x25')](_0x5db59a);if(this[_0x1db1('0x3d')](_0x5db59a)){var _0x395718=_0x1db1('0x50')+_0x5db59a[_0x1db1('0x8b')]+']';var _0x5a3fea=_0x5db59a[_0x1db1('0x45')];var _0x401417=_0x5db59a[_0x1db1('0x4b')];var _0x4f7820=this[_0x1db1('0x27')][_0x1db1('0xc')][_0x5db59a['id']]||0x0;var _0xb5a90a=_0x4833ac[_0x1db1('0x57')](_0x4f7820);if(_0x4f7820<=0x0)_0xb5a90a='';if(_0x5db59a['autoRemovalTiming']<=0x0)_0xb5a90a='';var _0x3383da=_0x3249dc['format'](_0x395718,_0x5a3fea,_0x401417,_0xb5a90a);this[_0x1db1('0x5d')]+=_0x3383da+'\x0a';}}};Window_StateIconTooltip['prototype'][_0x1db1('0x8f')]=function(){if(this[_0x1db1('0x5d')]===''){this[_0x1db1('0x3b')]=0x0;this['height']=0x0;}else{var _0x4ad2f6=this[_0x1db1('0x5d')][_0x1db1('0x94')](/[\r\n]+/);if(_0x4ad2f6[_0x1db1('0x29')]>0x0){var _0x466321=0x0;for(var _0xbaef01=0x0;_0xbaef01<_0x4ad2f6[_0x1db1('0x29')];_0xbaef01++){var _0x2d366d=_0x4ad2f6[_0xbaef01];var _0x1acdb9=Window_ChoiceList[_0x1db1('0x54')][_0x1db1('0x10')][_0x1db1('0x7a')](this,_0x2d366d);_0x466321=Math[_0x1db1('0x3f')](_0x1acdb9,_0x466321);}this[_0x1db1('0x3b')]=this['standardPadding']()*0x2+this[_0x1db1('0xd')]()*0x2+_0x466321;this[_0x1db1('0x2e')]=this['standardPadding']()*0x2+(_0x4ad2f6[_0x1db1('0x29')]-0x1)*this[_0x1db1('0x6d')]();}else{this[_0x1db1('0x3b')]=0x0;this['height']=0x0;}}};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x1a')]=function(){if(this['parent']){var _0x89190a=this[_0x1db1('0x8d')]['children'];_0x89190a[_0x1db1('0x4a')](_0x89190a[_0x1db1('0x66')](_0x89190a[_0x1db1('0x41')](this),0x1)[0x0]);}};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x3d')]=function(_0x4935f5){if(!_0x4935f5){return![];}else if(_0x4935f5[_0x1db1('0x4b')]===''){return![];}else{return!![];}};Window_StateIconTooltip[_0x1db1('0x54')][_0x1db1('0x6f')]=function(){this[_0x1db1('0x52')]();this['contents'][_0x1db1('0x43')]();if(this['_text']!==''){var _0x315035=this['_text'][_0x1db1('0x94')](/[\r\n]+/);var _0x3b4bb6=this[_0x1db1('0xd')]();var _0x3ad3b8=0x0;for(var _0x9bb50e=0x0;_0x9bb50e<_0x315035[_0x1db1('0x29')];_0x9bb50e++){var _0x561bda=_0x315035[_0x9bb50e];this[_0x1db1('0x42')](_0x561bda,_0x3b4bb6,_0x3ad3b8);_0x3ad3b8+=this[_0x1db1('0x6d')]();}}};Window_Base[_0x1db1('0x54')][_0x1db1('0x8a')]=function(){return SceneManager[_0x1db1('0x6')]['_stateIconTooltipWindow'];};Window_Base[_0x1db1('0x54')][_0x1db1('0x51')]=function(){this[_0x1db1('0x8a')]()[_0x1db1('0x81')](this);if(this[_0x1db1('0x27')]!==this[_0x1db1('0x8a')]()[_0x1db1('0x27')]){this[_0x1db1('0x8a')]()[_0x1db1('0x5a')]();}};Window_Base[_0x1db1('0x54')]['isMouseOverStates']=function(){var _0x30e0ea=this[_0x1db1('0x35')](TouchInput['_mouseOverX']);var _0x530683=this[_0x1db1('0x6c')](TouchInput[_0x1db1('0x44')]);return this[_0x1db1('0x5')]()&&_0x30e0ea>=0x0&&_0x530683>=0x0&&_0x30e0ea<this[_0x1db1('0x3b')]&&_0x530683<this[_0x1db1('0x2e')];};Window_Base[_0x1db1('0x54')]['canvasToLocalX']=function(_0x1b39c4){var _0x16866a=this;while(_0x16866a){_0x1b39c4-=_0x16866a['x'];_0x16866a=_0x16866a[_0x1db1('0x8d')];}return _0x1b39c4;};Window_Base['prototype'][_0x1db1('0x6c')]=function(_0x51a047){var _0x4dcae1=this;while(_0x4dcae1){_0x51a047-=_0x4dcae1['y'];_0x4dcae1=_0x4dcae1[_0x1db1('0x8d')];}return _0x51a047;};Window_Base[_0x1db1('0x54')][_0x1db1('0x5')]=function(){var _0x306945=this;while(_0x306945){if(!this['visible']){return![];}else if(this[_0x1db1('0x2')]<=0x0){return![];}else if(this['isClosed']()){return![];}else{_0x306945=_0x306945[_0x1db1('0x8d')];}}return!![];};Window_Base[_0x1db1('0x54')][_0x1db1('0x63')]=function(){this[_0x1db1('0x27')]=undefined;};if(Imported['YEP_BattleEngineCore']&&Imported['YEP_BuffsStatesCore']&&Olivia['StateTooltipDisplay'][_0x1db1('0x77')][_0x1db1('0x96')]){Olivia[_0x1db1('0x12')][_0x1db1('0x1e')]=Window_Help[_0x1db1('0x54')][_0x1db1('0x43')];Window_Help[_0x1db1('0x54')][_0x1db1('0x43')]=function(){Olivia[_0x1db1('0x12')][_0x1db1('0x1e')]['call'](this);this[_0x1db1('0x27')]=undefined;};Olivia['StateTooltipDisplay'][_0x1db1('0x65')]=Window_Help[_0x1db1('0x54')][_0x1db1('0x30')];Window_Help[_0x1db1('0x54')][_0x1db1('0x30')]=function(_0x380b27){Olivia[_0x1db1('0x12')][_0x1db1('0x65')]['call'](this,_0x380b27);this[_0x1db1('0x27')]=_0x380b27;};Window_Help[_0x1db1('0x54')][_0x1db1('0x92')]=function(){Window_Base[_0x1db1('0x54')]['update']['call'](this);if(!!this[_0x1db1('0x27')]&&!!this[_0x1db1('0x8a')]()&&this[_0x1db1('0x47')]()){this[_0x1db1('0x51')]();}};}if(Olivia[_0x1db1('0x12')][_0x1db1('0x77')][_0x1db1('0x85')]){Olivia[_0x1db1('0x12')][_0x1db1('0x71')]=Window_SkillStatus['prototype'][_0x1db1('0x93')];Window_SkillStatus['prototype'][_0x1db1('0x93')]=function(_0x4f65a2){Olivia[_0x1db1('0x12')][_0x1db1('0x71')]['call'](this,_0x4f65a2);this['_battler']=this[_0x1db1('0x84')];};Olivia[_0x1db1('0x12')][_0x1db1('0x2b')]=Window_SkillStatus[_0x1db1('0x54')][_0x1db1('0x92')];Window_SkillStatus[_0x1db1('0x54')]['update']=function(){Olivia[_0x1db1('0x12')][_0x1db1('0x2b')][_0x1db1('0x7a')](this);if(!!this[_0x1db1('0x27')]&&!!this[_0x1db1('0x8a')]()&&this[_0x1db1('0x47')]()){this[_0x1db1('0x51')]();}};}if(Olivia[_0x1db1('0x14')]&&Olivia[_0x1db1('0x14')][_0x1db1('0x6b')]&&Olivia[_0x1db1('0x14')][_0x1db1('0x6b')][_0x1db1('0x77')]&&Olivia[_0x1db1('0x12')][_0x1db1('0x77')][_0x1db1('0x90')]){Olivia['StateTooltipDisplay'][_0x1db1('0x8')]=Window_BattleSideBase[_0x1db1('0x54')][_0x1db1('0x6f')];Window_BattleSideBase['prototype'][_0x1db1('0x1f')]=function(){Olivia['StateTooltipDisplay'][_0x1db1('0x8')][_0x1db1('0x7a')](this);this[_0x1db1('0x27')]=this['_actor'];};Olivia[_0x1db1('0x12')][_0x1db1('0x4f')]=Window_BattleSideBase[_0x1db1('0x54')][_0x1db1('0x6f')];Window_BattleSideBase[_0x1db1('0x54')][_0x1db1('0x6f')]=function(){Olivia['StateTooltipDisplay'][_0x1db1('0x4f')][_0x1db1('0x7a')](this);this[_0x1db1('0x27')]=this[_0x1db1('0x84')];};Olivia[_0x1db1('0x12')][_0x1db1('0xa')]=Window_BattleSideStates[_0x1db1('0x54')][_0x1db1('0x92')];Window_BattleSideStates[_0x1db1('0x54')][_0x1db1('0x92')]=function(){Olivia[_0x1db1('0x12')][_0x1db1('0xa')][_0x1db1('0x7a')](this);if(!!this[_0x1db1('0x27')]&&!!this['tooltipWindow']()&&this[_0x1db1('0x47')]()){this['updateStateIconTooltipWindow']();}};}if(Olivia[_0x1db1('0x12')]['Enabled']){Olivia[_0x1db1('0x12')][_0x1db1('0x68')]=Window_BattleStatus['prototype'][_0x1db1('0x92')];Window_BattleStatus[_0x1db1('0x54')][_0x1db1('0x92')]=function(){Olivia[_0x1db1('0x12')][_0x1db1('0x68')]['call'](this);if(!!this[_0x1db1('0x8a')]()&&this['isMouseOverStates']()){this['determineStateTooltipBattler']();if(!!this[_0x1db1('0x27')]){this['updateStateIconTooltipWindow']();}}};Window_BattleStatus[_0x1db1('0x54')][_0x1db1('0x63')]=function(){var _0x1b87e0=this[_0x1db1('0x35')](TouchInput[_0x1db1('0x98')]);var _0x20e268=this[_0x1db1('0x6c')](TouchInput[_0x1db1('0x44')]);if(_0x1b87e0<=this[_0x1db1('0x3c')]()||_0x1b87e0>=this[_0x1db1('0x3b')]-this[_0x1db1('0x3c')]()){this[_0x1db1('0x27')]=undefined;}else if(_0x20e268<=this[_0x1db1('0x3c')]()||_0x20e268>=this[_0x1db1('0x2e')]-this[_0x1db1('0x3c')]()){this['_battler']=undefined;}else if(Imported[_0x1db1('0x26')]){var _0x419f69=this[_0x1db1('0x17')]()/this[_0x1db1('0x58')]();var _0x24f8ae=Math[_0x1db1('0x62')]((_0x1b87e0-this[_0x1db1('0x3c')]())/_0x419f69);this[_0x1db1('0x27')]=$gameParty['members']()[_0x24f8ae];}else{var _0x3f285d=this[_0x1db1('0x70')](_0x24f8ae)['height'];var _0x24f8ae=this[_0x1db1('0x82')]()+Math[_0x1db1('0x62')]((_0x20e268-this[_0x1db1('0x3c')]())/_0x3f285d);this[_0x1db1('0x27')]=$gameParty[_0x1db1('0x5e')]()[_0x24f8ae];}};}