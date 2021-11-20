//=============================================================================
// Olivia Engine - Item Concoction - for RPG Maker MV version 1.6.1
// Olivia_ItemConcoct.js
//=============================================================================
 /*:
 * @plugindesc <ItemConcoct> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that adds a "Concoct" command to any actor you
 * want in battle. Concoct allows the actor to combine together two items to
 * make a new item effect. Concoctions will be composed of a primary component,
 * secondary component, and a resulting effect.
 *
 * There is also an Item Concoction Preview Window that comes with this plugin.
 * It can be enabled or disabled (up to you). It will display the resulting
 * effect of the two mixed items together if the concoction combination has been
 * made before. If it hasn't, the effects will be hidden.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Concoct Command: How the command appears in the Actor Command list.
 *
 * Position: Where do you want to put the Concoct Command in the command list?
 *
 * Preview Window: Add a preview window to the battle scene if true.
 *
 * Window Scale: Scale the size of the contents of the preview window down by
 * this much. This is in case the contents of the window become too big.
 *
 * Window X, Y, Width: Changes the properties of the preview window. Set the 
 * setting to "auto" if you wish for the plugin to calculate the ideal position.
 *
 * Show Unknown Result?: If set to true, it will always show resulting effects
 * of concoction combinations, even if they haven't been performed by the party
 * yet. If set to false, the resulting effect will not be shown until the party
 * has performed the combination at least once.
 *
 * Show Battle Test?: If this is true, always show unknown results during
 * battle testing.
 *
 * Unknown Icon, Name, Help: How unknown results will appear.
 *
 *
 *
 * --------
 * Notetags
 * --------
 *
 * Actor, Class, Weapon, Armor, State Notetags
 *
 * <Item Concoct>
 * If an actor is affected by this notetag either directly or indirectly through
 * related traits, the actor can use the Concoct command in battle.
 *
 *
 *
 * State Notetag
 *
 * <Item Concoct Seal>
 * If an actor is affected by a state with this notetag, the actor's Concoct
 * command will be disabled.
 *
 *
 *
 * Item Notetags
 *
 * <Item Concoct>
 * list
 * list
 * list
 * list
 * </Item Concoct>
 * Makes the item with the notetag a primary component for item concoctions.
 * Insert multiple 'list' items to make it combinable with more items.
 *
 * 'list' can be formatted in any of these four ways:
 *
 * Item x: Item x
 * Item x: name
 * name: name
 * name: Item x
 *
 * If you are using Item x, replace x with the ID of the item you wish to refer
 * to. If you are using a name version, replace name with the full name of the
 * item (it is case sensitive). The first item on the list before the : is the 
 * secondary component for item concoctions. The second item on the list after
 * the : is the item effect that will occur when the first and second components
 * are combined. The effects of the first and second items are unrelated to the
 * combined item effect.
 *
 * Here is an example of how an Item Concoction notetag and list could look:
 *
 * <Item Concoct>
 * Item 51: Item 61
 * Item 52: Item 62
 * Item 53: Lucid Mist
 * Item 54: Healing Mist
 * Plum Essence: Inspiriting Mist
 * Tomato Essence: Boosting Mist
 * Onion Bloom: Item 67
 * Curious Bloom: Item 68
 * </Item Concoct>
 *
 * Concoctions will be composed of a primary component, secondary component, and
 * a resulting effect. In this case, the primary component is the item with the
 * notetag. The secondary component can be any of the items before the : in the
 * list. The resulting effect is the item after the : next to the secondary
 * component selected on the list.
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
 * If you are using Boost Point System, Battle System OTB, or OctoBattle, place
 * this plugin under those plugins in the plugin manager list.
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
 * @param Concoct Command
 * @desc How the command appears in the Actor Command list
 * @default Concoct
 *
 * @param Concoct Command Position
 * @text Position
 * @parent Concoct Command
 * @type select
 * @option Top (Before Attack)
 * @value 0
 * @option After Attack
 * @value 1
 * @option After Skill Types
 * @value 2
 * @option After Guard
 * @value 3
 * @option After Item
 * @value 4
 * @option At the Bottom
 * @value 5
 * @desc Where do you want to put the Concoct Command in the Actor Command list?
 * @default 1
 * 
 * @param
 *
 * @param Preview Window
 * @type boolean
 * @on YES
 * @off NO
 * @desc Add a preview window to the battle scene if true
 * @default true
 *
 * @param Preview Window Scale
 * @text Window Scale
 * @parent Preview Window
 * @desc Scale the size of the contents of the preview window down by this much
 * @default 0.8
 *
 * @param Preview Window X
 * @text Window X
 * @parent Preview Window Scale
 * @desc X position of the preview window. Put 'auto' if you want it to automatically position itself.
 * @default auto
 *
 * @param Preview Window Y
 * @text Window Y
 * @parent Preview Window Scale
 * @desc Y position of the preview window. Put 'auto' if you want it to automatically position itself.
 * @default auto
 *
 * @param Preview Window Width
 * @text Window Width
 * @parent Preview Window Scale
 * @desc Width of the preview window. Put 'auto' if you want it to automatically calculate the width.
 * @default auto
 *
 * @param Preview Window Show Unknown Result
 * @text Show Unknown Result?
 * @parent Preview Window
 * @type boolean
 * @on YES
 * @off NO
 * @desc Always show unknown results?
 * @default false
 *
 * @param Preview Window Show Battle Test
 * @text Show Battle Test?
 * @parent Preview Window Show Unknown Result
 * @type boolean
 * @on YES
 * @off NO
 * @desc Always show unknown results in battle test?
 * @default true
 *
 * @param Preview Window Unknown Icon
 * @text Unknown Icon
 * @parent Preview Window Show Unknown Result
 * @desc Icon used for unknown combinations.
 * @default 16
 *
 * @param Preview Window Unknown Name
 * @text Unknown Name
 * @parent Preview Window Show Unknown Result
 * @desc Name used for unknown combinations.
 * @default ????????
 *
 * @param Preview Window Unknown Help
 * @text Unknown Help
 * @parent Preview Window Show Unknown Result
 * @type note
 * @desc Help used for unknown combinations.
 * @default "This concoction combination\nhas not been made yet."
 *
 */
//=============================================================================

var _0x567e=['commandUnboost','___Game_Action_clear___','blt','indexOf','Preview\x20Window\x20Show\x20Battle\x20Test','setHandler','drawTextEx','IconSet','___Window_ActorCommand_addItemCommand___','createItemConcoctWindow2','addWindow','___Scene_Battle_commandBoost___','filter','___Game_Battler_useItem___','isItemConcoct','push','create','_tempIndex','_itemConcoct1Window','Preview\x20Window\x20X','___Scene_Battle_isAnyInputWindowActive___','isAnyInputWindowActive','useItem','___Window_ActorCommand_addSkillCommands___','Concoct','fillRect','_previewWindow','standardFontSize','_itemConcoctCombos','_itemConcoct2','normalColor','commandBoost','_itemConcoct1','___Scene_Battle_createItemWindow___','index','onItemConcoct2Cancel','PreviewWidth','___Scene_Battle_onEnemyOk___','trim','_iconHeight','autoPosition','setItemConcoctCost','_baseItem','isItemConcoctEnabled','round','commandItemConcoct','canUse','drawIcon','PreviewUnkName','___Scene_Battle_createActorCommandWindow___','textPadding','drawUnknownInformation','itemConcoctPreviewShow','_itemConcoctPreviewWindow','makeItemConcoctList','apply','max','onItemConcoct1Cancel','___Scene_Battle_onEnemyCancel___','hasItemConcoct','onEnemyOk','parse','currentAction','Enabled','setItem','equips','ItemConcoct','CommandPosition','Preview\x20Window\x20Show\x20Unknown\x20Result','onItemConcoct2Ok','Preview\x20Window\x20Unknown\x20Help','initializeItemConcoctCombos','drawHorzLine','_item2','Preview\x20Window','addItemCommand','length','isEnabled','clear','floor','onEnemyCancel','addAttackCommand','match','drawItemName','addSkillCommands','Olivia_ItemConcoct','consumeItemConcoct','isItemConcoctComboRevealed','itemConcoctHideWindows','retrieveItemConcoctID','setBaseItem','contents','_actorCommandWindow','itemConcoctReturn','setHelpWindowItem','onActorCancel','getItemConcoctList','isBattleTest','PreviewShowUnk','PreviewScale','createItemWindow','otbSetTurnPreviewItem','loadSystem','createItemConcoctPreviewWindow','states','lineHeight','scaleRate','___Window_ActorCommand_addAttackCommand___','opacity','PreviewY','hasItem','revealItemConcoctCombo','bind','makeCommandList','PreviewUnkIcon','createItemConcoctWindows','fittingHeight','___Game_System_initialize___','_otbTurnPreview','___Scene_Battle_commandUnboost___','drawFullInformation','_itemWindow','clearItems','meetShowFullInformationRequirements','Concoct\x20Command\x20Position','_item1','contentsWidth','itemConcoctPreviewHide','Preview\x20Window\x20Scale','_itemConcoctEffect','width','YEP_BattleEngineCore','description','PreviewShowBattleTest','actor','___Scene_Battle_onActorCancel___','_data','refresh','Preview\x20Window\x20Unknown\x20Name','createItemConcoctWindow1','name','PreviewUnkHelp','addItemConcoctCommand','CommandName','_positionXCorrection','SideBattleUI','makeItemList','_actor','onSelectAction','___Scene_Battle_onActorOk___','includes','PreviewWindow','___Window_ActorCommand_makeCommandList___','inBattle','resetTextColor','addCommand','note','Preview\x20Window\x20Unknown\x20Icon','BoostPoint','_itemConcoct2Window','_itemConcoctList','getItemConcoctCombos','min','constructor','standardPadding','meetsItemConcoctConditions','contentsOpacity','changePaintOpacity','cancel','drawText','activate','active','select','OctoBattle','boxHeight','contains','addGuardCommand','otbCreateTurnPreview','show','call','boxWidth','auto','height','onActorOk','callUpdateHelp','PreviewX','currentSymbol','_positionYCorrection','split','consumeItem','setPreviewWindow','prototype','Preview\x20Window\x20Width','currentClass','___Window_ActorCommand_addGuardCommand___','createActorCommandWindow','parameters','_helpWindow','___Game_BattlerBase_canUse___','initialize','setItem1','setItem2','_iconWidth','Preview\x20Window\x20Y','item','hide','otbClearTurnPreview'];(function(_0x5455b7,_0x567e8d){var _0x58e087=function(_0x3a2d88){while(--_0x3a2d88){_0x5455b7['push'](_0x5455b7['shift']());}};_0x58e087(++_0x567e8d);}(_0x567e,0x1c6));var _0x58e0=function(_0x5455b7,_0x567e8d){_0x5455b7=_0x5455b7-0x0;var _0x58e087=_0x567e[_0x5455b7];return _0x58e087;};var Imported=Imported||{};Imported[_0x58e0('0x2d')]=!![];var Olivia=Olivia||{};Olivia['ItemConcoct']=Olivia[_0x58e0('0x1a')]||{};var parameters=$plugins[_0x58e0('0xb3')](function(_0x371bf8){return _0x371bf8[_0x58e0('0x5c')][_0x58e0('0x87')]('<ItemConcoct>');})[0x0][_0x58e0('0x9c')];Olivia[_0x58e0('0x1a')][_0x58e0('0x67')]=String(parameters['Concoct\x20Command']||_0x58e0('0xbf'));Olivia[_0x58e0('0x1a')][_0x58e0('0x1b')]=Number(parameters[_0x58e0('0x54')]||0x0);Olivia[_0x58e0('0x1a')][_0x58e0('0x6f')]=eval(String(parameters[_0x58e0('0x22')]));Olivia['ItemConcoct']['PreviewScale']=Number(parameters[_0x58e0('0x58')]||0.8);Olivia[_0x58e0('0x1a')][_0x58e0('0x91')]=String(parameters[_0x58e0('0xba')]);Olivia[_0x58e0('0x1a')]['PreviewY']=String(parameters[_0x58e0('0xa3')]);Olivia[_0x58e0('0x1a')][_0x58e0('0xcb')]=String(parameters[_0x58e0('0x98')]);Olivia['ItemConcoct'][_0x58e0('0x3a')]=eval(String(parameters[_0x58e0('0x1c')]));Olivia[_0x58e0('0x1a')][_0x58e0('0x5d')]=eval(String(parameters[_0x58e0('0xab')]));Olivia[_0x58e0('0x1a')][_0x58e0('0x4a')]=Number(parameters[_0x58e0('0x75')]||0x0);Olivia[_0x58e0('0x1a')][_0x58e0('0x8')]=String(parameters[_0x58e0('0x62')]||'');Olivia[_0x58e0('0x1a')][_0x58e0('0x65')]=JSON[_0x58e0('0x15')](parameters[_0x58e0('0x1e')]||'');DataManager[_0x58e0('0x38')]=function(_0x118d61){var _0x44242e=[];if(!!_0x118d61&&_0x118d61['note'][_0x58e0('0x2a')](/<Item Concoct>/i)){if(!_0x118d61[_0x58e0('0x78')]){this[_0x58e0('0xe')](_0x118d61);}_0x44242e=_0x118d61['_itemConcoctList'];}return _0x44242e;};DataManager['makeItemConcoctList']=function(_0x48abad){_0x48abad['_itemConcoctList']=[];_0x48abad[_0x58e0('0x59')]=[];var _0x3673b8=_0x48abad['note'][_0x58e0('0x94')](/[\r\n]+/);var _0x75067c=![];for(var _0x2919ae=0x0;_0x2919ae<_0x3673b8[_0x58e0('0x24')];_0x2919ae++){var _0x30368f=_0x3673b8[_0x2919ae];if(_0x30368f[_0x58e0('0x2a')](/<Item Concoct>/i)){_0x75067c=!![];}else if(_0x30368f[_0x58e0('0x2a')](/<\/Item Concoct>/i)){_0x75067c=![];}else if(_0x75067c&&_0x30368f[_0x58e0('0x2a')](/(.*):[ ](.*)/i)){var _0x12fe80=this[_0x58e0('0x31')](String(RegExp['$1']));var _0x44d063=this[_0x58e0('0x31')](String(RegExp['$2']));_0x48abad[_0x58e0('0x78')][_0x58e0('0xb6')](_0x12fe80);_0x48abad['_itemConcoctEffect'][_0x58e0('0xb6')](_0x44d063);}}};DataManager[_0x58e0('0x31')]=function(_0x564474){if(_0x564474[_0x58e0('0x2a')](/Item (\d+)/i)){return parseInt(RegExp['$1']);}else{for(var _0x971906=0x1;_0x971906<$dataItems[_0x58e0('0x24')];_0x971906++){var _0x43690f=$dataItems[_0x971906];if(!!_0x43690f&&_0x43690f[_0x58e0('0x64')][_0x58e0('0xcd')]()===_0x564474['trim']()){return _0x971906;}}}};Olivia[_0x58e0('0x1a')][_0x58e0('0x4d')]=Game_System['prototype']['initialize'];Game_System[_0x58e0('0x97')][_0x58e0('0x9f')]=function(){Olivia[_0x58e0('0x1a')][_0x58e0('0x4d')]['call'](this);this[_0x58e0('0x1f')]();};Game_System[_0x58e0('0x97')][_0x58e0('0x1f')]=function(){this[_0x58e0('0xc3')]={};};Game_System['prototype'][_0x58e0('0x79')]=function(_0x1730aa){if(this['_itemConcoctCombos']===undefined){this[_0x58e0('0x1f')]();}if(this[_0x58e0('0xc3')][_0x1730aa['id']]===undefined){this[_0x58e0('0xc3')][_0x1730aa['id']]=[];}return this[_0x58e0('0xc3')][_0x1730aa['id']];};Game_System[_0x58e0('0x97')]['isItemConcoctComboRevealed']=function(_0x250264,_0x473583){var _0x1dd5a5=this['getItemConcoctCombos'](_0x250264);return _0x1dd5a5[_0x58e0('0x87')](_0x473583['id']);};Game_System['prototype'][_0x58e0('0x47')]=function(_0x294a00,_0x3c7050){var _0x205268=this[_0x58e0('0x79')](_0x294a00);if(!_0x205268['contains'](_0x3c7050['id'])){_0x205268['push'](_0x3c7050['id']);}};Olivia[_0x58e0('0x1a')][_0x58e0('0xa8')]=Game_Action[_0x58e0('0x97')][_0x58e0('0x26')];Game_Action[_0x58e0('0x97')][_0x58e0('0x26')]=function(){Olivia[_0x58e0('0x1a')][_0x58e0('0xa8')][_0x58e0('0x8b')](this);this[_0x58e0('0xc7')]=0x0;this[_0x58e0('0xc4')]=0x0;};Game_Action['prototype'][_0x58e0('0x1')]=function(_0x33a444,_0x56f29c){this[_0x58e0('0xc7')]=_0x33a444['id'];this[_0x58e0('0xc4')]=_0x56f29c['id'];};Game_Action[_0x58e0('0x97')][_0x58e0('0xb5')]=function(){return this['_itemConcoct1']>0x0||this[_0x58e0('0xc4')]>0x0;};Olivia[_0x58e0('0x1a')][_0x58e0('0x9e')]=Game_BattlerBase['prototype']['canUse'];Game_BattlerBase['prototype'][_0x58e0('0x6')]=function(_0x476ef2){if($gameParty[_0x58e0('0x71')]()&&this[_0x58e0('0x16')]()&&this[_0x58e0('0x16')]()[_0x58e0('0xb5')]()){return this[_0x58e0('0x7d')]();}else{return Olivia[_0x58e0('0x1a')][_0x58e0('0x9e')][_0x58e0('0x8b')](this,_0x476ef2);}};Game_BattlerBase[_0x58e0('0x97')][_0x58e0('0x7d')]=function(){var _0x352476=$dataItems[this[_0x58e0('0x16')]()['_itemConcoct1']];var _0xb13e7d=$dataItems[this[_0x58e0('0x16')]()[_0x58e0('0xc4')]];if(_0x352476!==_0xb13e7d){return $gameParty[_0x58e0('0x46')](_0x352476)&&$gameParty[_0x58e0('0x46')](_0xb13e7d);}else{return $gameParty['numItems'](_0x352476)>=0x2;}};Olivia[_0x58e0('0x1a')][_0x58e0('0xb4')]=Game_Battler[_0x58e0('0x97')][_0x58e0('0xbd')];Game_Battler['prototype'][_0x58e0('0xbd')]=function(_0x2328c8){if($gameParty[_0x58e0('0x71')]()&&this[_0x58e0('0x16')]()&&this['currentAction']()[_0x58e0('0xb5')]()){this[_0x58e0('0x2e')]();}else{Olivia[_0x58e0('0x1a')]['___Game_Battler_useItem___']['call'](this,_0x2328c8);}};Game_Battler['prototype']['consumeItemConcoct']=function(){var _0x551209=$dataItems[this['currentAction']()[_0x58e0('0xc7')]];var _0xe3a215=$dataItems[this[_0x58e0('0x16')]()[_0x58e0('0xc4')]];$gameParty[_0x58e0('0x95')](_0x551209);$gameParty['consumeItem'](_0xe3a215);$gameSystem[_0x58e0('0x47')](_0x551209,_0xe3a215);};Game_Actor[_0x58e0('0x97')][_0x58e0('0x13')]=function(){if(this[_0x58e0('0x5e')]()[_0x58e0('0x74')][_0x58e0('0x2a')](/<Item (?:Concoct|Concoction)>/i)){return!![];}if(this[_0x58e0('0x99')]()['note'][_0x58e0('0x2a')](/<Item (?:Concoct|Concoction)>/i)){return!![];}var _0x579024=this[_0x58e0('0x40')]();for(var _0x4f77c5=0x0;_0x4f77c5<_0x579024[_0x58e0('0x24')];_0x4f77c5++){var _0x433b61=_0x579024[_0x4f77c5];if(!!_0x433b61&&_0x433b61[_0x58e0('0x74')][_0x58e0('0x2a')](/<Item (?:Concoct|Concoction)>/i)){return!![];}}var _0x349dfa=this[_0x58e0('0x19')]();for(var _0x4f77c5=0x0;_0x4f77c5<_0x349dfa[_0x58e0('0x24')];_0x4f77c5++){var _0x16d665=_0x349dfa[_0x4f77c5];if(!!_0x16d665&&_0x16d665['note'][_0x58e0('0x2a')](/<Item (?:Concoct|Concoction)>/i)){return!![];}}return![];};Olivia[_0x58e0('0x1a')][_0x58e0('0xbb')]=Scene_Battle[_0x58e0('0x97')]['isAnyInputWindowActive'];Scene_Battle[_0x58e0('0x97')][_0x58e0('0xbc')]=function(){return Olivia[_0x58e0('0x1a')][_0x58e0('0xbb')][_0x58e0('0x8b')](this)||this[_0x58e0('0xb9')][_0x58e0('0x83')]||this[_0x58e0('0x77')]['active'];};Olivia[_0x58e0('0x1a')][_0x58e0('0x9')]=Scene_Battle[_0x58e0('0x97')][_0x58e0('0x9b')];Scene_Battle[_0x58e0('0x97')]['createActorCommandWindow']=function(){Olivia[_0x58e0('0x1a')]['___Scene_Battle_createActorCommandWindow___'][_0x58e0('0x8b')](this);this[_0x58e0('0x34')][_0x58e0('0xac')](_0x58e0('0x1a'),this[_0x58e0('0x5')][_0x58e0('0x48')](this));};Scene_Battle[_0x58e0('0x97')]['commandItemConcoct']=function(){this[_0x58e0('0xb9')]['refresh']();this[_0x58e0('0xb9')][_0x58e0('0x8a')]();this[_0x58e0('0xb9')][_0x58e0('0x82')]();};Olivia[_0x58e0('0x1a')][_0x58e0('0xc8')]=Scene_Battle[_0x58e0('0x97')][_0x58e0('0x3c')];Scene_Battle[_0x58e0('0x97')][_0x58e0('0x3c')]=function(){Olivia[_0x58e0('0x1a')]['___Scene_Battle_createItemWindow___'][_0x58e0('0x8b')](this);this[_0x58e0('0x4b')]();};Scene_Battle[_0x58e0('0x97')][_0x58e0('0x4b')]=function(){this[_0x58e0('0x63')]();this[_0x58e0('0xb0')]();this['createItemConcoctPreviewWindow']();};Scene_Battle[_0x58e0('0x97')][_0x58e0('0x63')]=function(){this[_0x58e0('0xb9')]=new Window_BattleItemConcoct1(this['_itemWindow']);this[_0x58e0('0xb9')]['setHelpWindow'](this[_0x58e0('0x9d')]);this[_0x58e0('0xb9')][_0x58e0('0xac')]('ok',this['onItemConcoct1Ok'][_0x58e0('0x48')](this));this[_0x58e0('0xb9')][_0x58e0('0xac')](_0x58e0('0x80'),this[_0x58e0('0x11')][_0x58e0('0x48')](this));this[_0x58e0('0xb1')](this[_0x58e0('0xb9')]);};Scene_Battle['prototype'][_0x58e0('0xb0')]=function(){this[_0x58e0('0x77')]=new Window_BattleItemConcoct2(this[_0x58e0('0x51')]);this[_0x58e0('0x77')]['setHelpWindow'](this['_helpWindow']);this[_0x58e0('0x77')][_0x58e0('0xac')]('ok',this[_0x58e0('0x1d')][_0x58e0('0x48')](this));this[_0x58e0('0x77')][_0x58e0('0xac')](_0x58e0('0x80'),this[_0x58e0('0xca')][_0x58e0('0x48')](this));this['addWindow'](this['_itemConcoct2Window']);};Scene_Battle[_0x58e0('0x97')][_0x58e0('0x3f')]=function(){if(Olivia[_0x58e0('0x1a')][_0x58e0('0x6f')]){this[_0x58e0('0xd')]=new Window_ItemConcoctPreview();this[_0x58e0('0xb1')](this[_0x58e0('0xd')]);this[_0x58e0('0x77')][_0x58e0('0x96')](this[_0x58e0('0xd')]);}};Scene_Battle[_0x58e0('0x97')]['onItemConcoct1Ok']=function(){this[_0x58e0('0xb9')]['_tempIndex']=this[_0x58e0('0xb9')][_0x58e0('0xc9')]();var _0x5ecf6f=this[_0x58e0('0xb9')][_0x58e0('0xa4')]();this[_0x58e0('0x77')][_0x58e0('0x32')](_0x5ecf6f);this[_0x58e0('0x77')][_0x58e0('0x61')]();this['_itemConcoct1Window'][_0x58e0('0xa5')]();this[_0x58e0('0x77')][_0x58e0('0x8a')]();this[_0x58e0('0x77')]['activate']();if(this[_0x58e0('0xd')]){if(Olivia[_0x58e0('0x85')]&&Olivia[_0x58e0('0x85')][_0x58e0('0x76')]&&Olivia[_0x58e0('0x85')][_0x58e0('0x76')][_0x58e0('0x17')]){this['_itemConcoctPreviewWindow']['setBPSubject'](BattleManager[_0x58e0('0x5e')]());}this['_itemConcoctPreviewWindow'][_0x58e0('0xa0')](this[_0x58e0('0xb9')][_0x58e0('0xa4')]());this[_0x58e0('0xd')]['setItem2'](this[_0x58e0('0x77')][_0x58e0('0xa4')]());this['itemConcoctPreviewShow']();this[_0x58e0('0xd')][_0x58e0('0x0')](this[_0x58e0('0xb9')],this[_0x58e0('0x9d')]);}};Scene_Battle[_0x58e0('0x97')][_0x58e0('0x11')]=function(){this[_0x58e0('0xb9')]['hide']();this[_0x58e0('0x34')][_0x58e0('0x82')]();};Scene_Battle[_0x58e0('0x97')][_0x58e0('0x1d')]=function(){this[_0x58e0('0x77')][_0x58e0('0xb8')]=this[_0x58e0('0x77')][_0x58e0('0xc9')]();var _0x10cee4=this[_0x58e0('0xb9')][_0x58e0('0xa4')]();var _0xb95572=this[_0x58e0('0x77')]['item']();var _0x184aa3=$dataItems[_0x10cee4['_itemConcoctEffect'][_0x10cee4[_0x58e0('0x78')][_0x58e0('0xaa')](_0xb95572['id'])]];var _0x2d1309=BattleManager['inputtingAction']();_0x2d1309[_0x58e0('0x18')](_0x184aa3['id']);_0x2d1309['setItemConcoctCost'](_0x10cee4,_0xb95572);if(Imported[_0x58e0('0x5b')]&&Olivia[_0x58e0('0x85')]&&Olivia['OctoBattle']['SideBattleUI']&&Olivia['OctoBattle']['SideBattleUI'][_0x58e0('0x17')]){this['_itemConcoct2Window'][_0x58e0('0xa5')]();this[_0x58e0('0x57')]();}this[_0x58e0('0x6c')]();};Scene_Battle[_0x58e0('0x97')]['onItemConcoct2Cancel']=function(){this['_itemConcoct2Window'][_0x58e0('0xa5')]();this[_0x58e0('0xb9')][_0x58e0('0x8a')]();this[_0x58e0('0xb9')][_0x58e0('0x84')](this[_0x58e0('0xb9')][_0x58e0('0xb8')]);this['_itemConcoct1Window'][_0x58e0('0x82')]();this[_0x58e0('0x57')]();};Olivia['ItemConcoct'][_0x58e0('0x6d')]=Scene_Battle[_0x58e0('0x97')][_0x58e0('0x8f')];Scene_Battle[_0x58e0('0x97')][_0x58e0('0x8f')]=function(){Olivia[_0x58e0('0x1a')][_0x58e0('0x6d')]['call'](this);this[_0x58e0('0x30')]();this[_0x58e0('0x57')]();};Olivia[_0x58e0('0x1a')][_0x58e0('0x5f')]=Scene_Battle['prototype'][_0x58e0('0x37')];Scene_Battle[_0x58e0('0x97')][_0x58e0('0x37')]=function(){Olivia[_0x58e0('0x1a')][_0x58e0('0x5f')][_0x58e0('0x8b')](this);this[_0x58e0('0x35')]();};Olivia[_0x58e0('0x1a')]['___Scene_Battle_onEnemyOk___']=Scene_Battle[_0x58e0('0x97')][_0x58e0('0x14')];Scene_Battle[_0x58e0('0x97')][_0x58e0('0x14')]=function(){Olivia['ItemConcoct'][_0x58e0('0xcc')]['call'](this);this[_0x58e0('0x30')]();this['itemConcoctPreviewHide']();};Olivia[_0x58e0('0x1a')][_0x58e0('0x12')]=Scene_Battle['prototype'][_0x58e0('0x28')];Scene_Battle[_0x58e0('0x97')]['onEnemyCancel']=function(){Olivia[_0x58e0('0x1a')]['___Scene_Battle_onEnemyCancel___']['call'](this);this[_0x58e0('0x35')]();};Scene_Battle[_0x58e0('0x97')][_0x58e0('0x35')]=function(){if(this[_0x58e0('0x34')][_0x58e0('0x92')]()==='ItemConcoct'){this[_0x58e0('0x77')][_0x58e0('0x8a')]();this[_0x58e0('0x77')][_0x58e0('0x82')]();this[_0x58e0('0x77')][_0x58e0('0x84')](this[_0x58e0('0x77')]['_tempIndex']);this[_0x58e0('0x34')][_0x58e0('0x44')]=0xff;this[_0x58e0('0x34')][_0x58e0('0x7e')]=0xff;this['itemConcoctPreviewShow']();}};Scene_Battle[_0x58e0('0x97')][_0x58e0('0x30')]=function(){this[_0x58e0('0xb9')][_0x58e0('0xa5')]();this['_itemConcoct2Window'][_0x58e0('0xa5')]();};Scene_Battle[_0x58e0('0x97')][_0x58e0('0xc')]=function(){if(this[_0x58e0('0xd')]){this[_0x58e0('0xd')][_0x58e0('0x8a')]();}};Scene_Battle[_0x58e0('0x97')][_0x58e0('0x57')]=function(){if(this[_0x58e0('0xd')]){this[_0x58e0('0xd')][_0x58e0('0xa5')]();}};if(Olivia['OctoBattle']&&Olivia[_0x58e0('0x85')][_0x58e0('0x76')]&&Olivia[_0x58e0('0x85')][_0x58e0('0x76')][_0x58e0('0x17')]){Olivia[_0x58e0('0x1a')][_0x58e0('0xb2')]=Scene_Battle['prototype']['commandBoost'];Scene_Battle[_0x58e0('0x97')][_0x58e0('0xc6')]=function(){Olivia[_0x58e0('0x1a')]['___Scene_Battle_commandBoost___']['call'](this);if(this['_itemConcoctPreviewWindow']){this['_itemConcoctPreviewWindow']['refresh']();}};Olivia[_0x58e0('0x1a')][_0x58e0('0x4f')]=Scene_Battle['prototype']['commandUnboost'];Scene_Battle[_0x58e0('0x97')][_0x58e0('0xa7')]=function(){Olivia[_0x58e0('0x1a')][_0x58e0('0x4f')][_0x58e0('0x8b')](this);if(this[_0x58e0('0xd')]){this[_0x58e0('0xd')]['refresh']();}};}Olivia[_0x58e0('0x1a')][_0x58e0('0x70')]=Window_ActorCommand[_0x58e0('0x97')][_0x58e0('0x49')];Window_ActorCommand['prototype'][_0x58e0('0x49')]=function(){if(Olivia[_0x58e0('0x1a')]['CommandPosition']===0x0){this[_0x58e0('0x66')]();}Olivia[_0x58e0('0x1a')][_0x58e0('0x70')]['call'](this);if(Olivia['ItemConcoct']['CommandPosition']>=0x5){this[_0x58e0('0x66')]();}};Olivia[_0x58e0('0x1a')][_0x58e0('0x43')]=Window_ActorCommand[_0x58e0('0x97')][_0x58e0('0x29')];Window_ActorCommand[_0x58e0('0x97')][_0x58e0('0x29')]=function(){Olivia[_0x58e0('0x1a')][_0x58e0('0x43')][_0x58e0('0x8b')](this);if(Olivia['ItemConcoct'][_0x58e0('0x1b')]===0x1){this[_0x58e0('0x66')]();}};Olivia[_0x58e0('0x1a')][_0x58e0('0xbe')]=Window_ActorCommand[_0x58e0('0x97')][_0x58e0('0x2c')];Window_ActorCommand[_0x58e0('0x97')][_0x58e0('0x2c')]=function(){Olivia[_0x58e0('0x1a')][_0x58e0('0xbe')][_0x58e0('0x8b')](this);if(Olivia[_0x58e0('0x1a')][_0x58e0('0x1b')]===0x2){this[_0x58e0('0x66')]();}};Olivia[_0x58e0('0x1a')][_0x58e0('0x9a')]=Window_ActorCommand[_0x58e0('0x97')][_0x58e0('0x88')];Window_ActorCommand[_0x58e0('0x97')][_0x58e0('0x88')]=function(){Olivia[_0x58e0('0x1a')][_0x58e0('0x9a')][_0x58e0('0x8b')](this);if(Olivia[_0x58e0('0x1a')][_0x58e0('0x1b')]===0x3){this[_0x58e0('0x66')]();}};Olivia['ItemConcoct'][_0x58e0('0xaf')]=Window_ActorCommand[_0x58e0('0x97')][_0x58e0('0x23')];Window_ActorCommand[_0x58e0('0x97')][_0x58e0('0x23')]=function(){Olivia[_0x58e0('0x1a')][_0x58e0('0xaf')][_0x58e0('0x8b')](this);if(Olivia[_0x58e0('0x1a')][_0x58e0('0x1b')]===0x4){this[_0x58e0('0x66')]();}};Window_ActorCommand['prototype'][_0x58e0('0x66')]=function(){if(!!this[_0x58e0('0x6b')]&&this[_0x58e0('0x6b')][_0x58e0('0x13')]()){var _0x4ae0cd=Olivia[_0x58e0('0x1a')][_0x58e0('0x67')];var _0x3c3896=this[_0x58e0('0x3')]();this[_0x58e0('0x73')](_0x4ae0cd,_0x58e0('0x1a'),_0x3c3896);}};Window_ActorCommand[_0x58e0('0x97')][_0x58e0('0x3')]=function(){if(!!this['_actor']){var _0x4cd515=this[_0x58e0('0x6b')][_0x58e0('0x40')]();for(var _0x21be0e=0x0;_0x21be0e<_0x4cd515[_0x58e0('0x24')];_0x21be0e++){var _0x4a7c2d=_0x4cd515[_0x21be0e];if(!!_0x4a7c2d&&_0x4a7c2d[_0x58e0('0x74')][_0x58e0('0x2a')](/<Item Concoct Seal>/i)){return![];}}}return!![];};function Window_BattleItemConcoct1(){this[_0x58e0('0x9f')][_0x58e0('0xf')](this,arguments);}Window_BattleItemConcoct1[_0x58e0('0x97')]=Object[_0x58e0('0xb7')](Window_BattleItem[_0x58e0('0x97')]);Window_BattleItemConcoct1[_0x58e0('0x97')][_0x58e0('0x7b')]=Window_BattleItemConcoct1;Window_BattleItemConcoct1['prototype'][_0x58e0('0x9f')]=function(_0x21d6df){var _0x11be80=_0x21d6df['x'];var _0x42a55a=_0x21d6df['y'];var _0x4197b4=_0x21d6df['width'];var _0x455ef1=_0x21d6df[_0x58e0('0x8e')];Window_BattleItem[_0x58e0('0x97')][_0x58e0('0x9f')][_0x58e0('0x8b')](this,_0x11be80,_0x42a55a,_0x4197b4,_0x455ef1);this[_0x58e0('0x68')]=0x10;this[_0x58e0('0x93')]=0x10;this[_0x58e0('0xa5')]();};Window_BattleItemConcoct1[_0x58e0('0x97')]['includes']=function(_0x2a2807){return DataManager['getItemConcoctList'](_0x2a2807)[_0x58e0('0x24')]>0x0;};Window_BattleItemConcoct1['prototype']['isEnabled']=function(_0x273c82){return!!_0x273c82;};Window_BattleItemConcoct1['prototype']['makeItemList']=function(){Window_BattleItem['prototype']['makeItemList'][_0x58e0('0x8b')](this);if(this[_0x58e0('0x60')][_0x58e0('0x24')]===0x0){this[_0x58e0('0x60')][_0x58e0('0xb6')](null);}};function Window_BattleItemConcoct2(){this[_0x58e0('0x9f')]['apply'](this,arguments);}Window_BattleItemConcoct2[_0x58e0('0x97')]=Object[_0x58e0('0xb7')](Window_BattleItem[_0x58e0('0x97')]);Window_BattleItemConcoct2[_0x58e0('0x97')][_0x58e0('0x7b')]=Window_BattleItemConcoct2;Window_BattleItemConcoct2[_0x58e0('0x97')][_0x58e0('0x9f')]=function(_0x17fc4f){var _0x1c418c=_0x17fc4f['x'];var _0x59ddca=_0x17fc4f['y'];var _0x40ccf4=_0x17fc4f['width'];var _0x34a86c=_0x17fc4f[_0x58e0('0x8e')];Window_BattleItem[_0x58e0('0x97')][_0x58e0('0x9f')]['call'](this,_0x1c418c,_0x59ddca,_0x40ccf4,_0x34a86c);this[_0x58e0('0x4e')]=!![];this[_0x58e0('0xc1')]=undefined;this[_0x58e0('0x68')]=0x10;this[_0x58e0('0x93')]=0x10;this[_0x58e0('0xa5')]();};Window_BattleItemConcoct2[_0x58e0('0x97')][_0x58e0('0x32')]=function(_0x539024){this[_0x58e0('0x2')]=_0x539024;};Window_BattleItemConcoct2[_0x58e0('0x97')][_0x58e0('0x6e')]=function(_0x4a0057){return!!_0x4a0057&&!!this['_baseItem']&&this[_0x58e0('0x2')][_0x58e0('0x78')][_0x58e0('0x87')](_0x4a0057['id']);};Window_BattleItemConcoct2['prototype'][_0x58e0('0x25')]=function(_0xe17919){if(!_0xe17919){return![];}else{}return!!_0xe17919;};Window_BattleItemConcoct2['prototype']['makeItemList']=function(){Window_BattleItem[_0x58e0('0x97')][_0x58e0('0x6a')]['call'](this);if(this[_0x58e0('0x60')]['length']===0x0){this[_0x58e0('0x60')][_0x58e0('0xb6')](null);}};Window_BattleItemConcoct2[_0x58e0('0x97')][_0x58e0('0x96')]=function(_0x32f494){this['_previewWindow']=_0x32f494;this[_0x58e0('0x90')]();};Window_BattleItemConcoct2[_0x58e0('0x97')][_0x58e0('0x36')]=function(_0x57fed2){Window_BattleItem[_0x58e0('0x97')][_0x58e0('0x36')][_0x58e0('0x8b')](this,_0x57fed2);if(!!this['_previewWindow']){this[_0x58e0('0xc1')]['setItem2'](_0x57fed2);}};Window_BattleItemConcoct2[_0x58e0('0x97')][_0x58e0('0x89')]=function(){if(!!this[_0x58e0('0x2')]&&!!this[_0x58e0('0xa4')]()){var _0x2f89b3=$dataItems[this[_0x58e0('0x2')]['_itemConcoctEffect'][this[_0x58e0('0x2')][_0x58e0('0x78')]['indexOf'](this[_0x58e0('0xa4')]()['id'])]];this[_0x58e0('0x3d')](_0x2f89b3);}else{this[_0x58e0('0xa6')]();}};function Window_ItemConcoctPreview(){this['initialize'][_0x58e0('0xf')](this,arguments);}Window_ItemConcoctPreview['prototype']=Object[_0x58e0('0xb7')](Window_Base[_0x58e0('0x97')]);Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0x7b')]=Window_ItemConcoctPreview;Window_ItemConcoctPreview[_0x58e0('0x97')]['initialize']=function(){var _0x1b7f0d=Olivia[_0x58e0('0x1a')][_0x58e0('0xcb')]===_0x58e0('0x8d')?0x140:Olivia['ItemConcoct'][_0x58e0('0xcb')];var _0x1abb1f=this[_0x58e0('0x4c')](0x3);var _0x2a4a2a=Olivia[_0x58e0('0x1a')][_0x58e0('0x91')]==='auto'?0x0:Olivia['ItemConcoct']['PreviewX'];var _0x35f73a=Olivia[_0x58e0('0x1a')][_0x58e0('0x45')]===_0x58e0('0x8d')?0x0:Olivia['ItemConcoct'][_0x58e0('0x45')];Window_Base[_0x58e0('0x97')][_0x58e0('0x9f')][_0x58e0('0x8b')](this,_0x2a4a2a,_0x35f73a,_0x1b7f0d,_0x1abb1f);this[_0x58e0('0x52')]();this[_0x58e0('0xa5')]();};Window_ItemConcoctPreview['prototype'][_0x58e0('0x42')]=function(){return Olivia[_0x58e0('0x1a')][_0x58e0('0x3b')];};Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0x41')]=function(){return Math[_0x58e0('0x4')](Window_Base[_0x58e0('0x97')][_0x58e0('0x41')][_0x58e0('0x8b')](this)*this[_0x58e0('0x42')]());};Window_ItemConcoctPreview['prototype'][_0x58e0('0xc2')]=function(){return Math[_0x58e0('0x4')](Window_Base[_0x58e0('0x97')][_0x58e0('0xc2')]['call'](this)*this[_0x58e0('0x42')]());};Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0x7c')]=function(){return Math['round'](Window_Base[_0x58e0('0x97')]['standardPadding']['call'](this)*this['scaleRate']());};Window_ItemConcoctPreview['prototype'][_0x58e0('0xa')]=function(){return Math[_0x58e0('0x4')](Window_Base['prototype']['textPadding'][_0x58e0('0x8b')](this)*this[_0x58e0('0x42')]());};Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0x0')]=function(_0x278fef,_0x1d0763){if(Imported[_0x58e0('0x5b')]&&Olivia[_0x58e0('0x85')]&&Olivia[_0x58e0('0x85')][_0x58e0('0x69')]&&Olivia[_0x58e0('0x85')][_0x58e0('0x69')][_0x58e0('0x17')]){if(Olivia[_0x58e0('0x1a')][_0x58e0('0x91')]===_0x58e0('0x8d')){this['x']=Math[_0x58e0('0x7a')](Graphics[_0x58e0('0x8c')]-this[_0x58e0('0x5a')],_0x278fef['x']-Math[_0x58e0('0x4')](this[_0x58e0('0x5a')]/0x2));}if(Olivia[_0x58e0('0x1a')][_0x58e0('0x45')]===_0x58e0('0x8d')){this['y']=Math[_0x58e0('0x10')](0x0,_0x278fef['y']-this[_0x58e0('0x8e')]-this[_0x58e0('0x41')]());}}else if(Imported['YEP_BattleEngineCore']){if(Olivia[_0x58e0('0x1a')][_0x58e0('0x91')]==='auto'){this['x']=0x0;}if(Olivia[_0x58e0('0x1a')][_0x58e0('0x45')]===_0x58e0('0x8d')){this['y']=_0x1d0763['y']+_0x1d0763[_0x58e0('0x8e')];}}else{if(Olivia[_0x58e0('0x1a')]['PreviewX']===_0x58e0('0x8d')){this['x']=0xc0;}if(Olivia[_0x58e0('0x1a')][_0x58e0('0x45')]===_0x58e0('0x8d')){this['y']=Graphics[_0x58e0('0x86')]-0xb4;}}};Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0x52')]=function(){this[_0x58e0('0x55')]=undefined;this[_0x58e0('0x21')]=undefined;};Window_ItemConcoctPreview['prototype'][_0x58e0('0xa0')]=function(_0x1ba72a){this[_0x58e0('0x55')]=_0x1ba72a;};Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0xa1')]=function(_0x510a26){this[_0x58e0('0x21')]=_0x510a26;this[_0x58e0('0x61')]();};Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0x61')]=function(){this['contents'][_0x58e0('0x26')]();this[_0x58e0('0x20')](this[_0x58e0('0x41')]());if(this[_0x58e0('0x53')]()){this[_0x58e0('0x50')]();}else{this[_0x58e0('0xb')]();}};Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0x53')]=function(){if(!this[_0x58e0('0x55')]||!this[_0x58e0('0x21')]){return![];}else if(Olivia[_0x58e0('0x1a')][_0x58e0('0x3a')]){return!![];}else if(BattleManager[_0x58e0('0x39')]()&&Olivia[_0x58e0('0x1a')][_0x58e0('0x5d')]){return!![];}else{return $gameSystem[_0x58e0('0x2f')](this[_0x58e0('0x55')],this[_0x58e0('0x21')]);}};Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0x20')]=function(_0x5eadf1){this['changePaintOpacity'](![]);this[_0x58e0('0x33')][_0x58e0('0xc0')](0x0,_0x5eadf1+0x2,this[_0x58e0('0x56')](),0x2,this[_0x58e0('0xc5')]());this[_0x58e0('0x7f')](!![]);};Window_ItemConcoctPreview['prototype']['drawFullInformation']=function(){var _0x5ed3b0=$dataItems[this[_0x58e0('0x55')][_0x58e0('0x59')][this[_0x58e0('0x55')][_0x58e0('0x78')][_0x58e0('0xaa')](this[_0x58e0('0x21')]['id'])]];var _0x23071c=this['textPadding']();var _0x21440e=this[_0x58e0('0x56')]()-this[_0x58e0('0xa')]()*0x2;this['drawItemName'](_0x5ed3b0,_0x23071c,0x0,_0x21440e);this['drawTextEx'](_0x5ed3b0[_0x58e0('0x5c')],_0x23071c,this['lineHeight']());};Window_ItemConcoctPreview['prototype']['drawUnknownInformation']=function(){var _0x48831b=this[_0x58e0('0xa')]();this[_0x58e0('0x7')](Olivia[_0x58e0('0x1a')][_0x58e0('0x4a')],_0x48831b,0x0);_0x48831b+=Math[_0x58e0('0x4')](Window_Base[_0x58e0('0xa2')]*this['scaleRate']())+0x4;var _0x6aa590=this['contentsWidth']()-this[_0x58e0('0xa')]()*0x2;this[_0x58e0('0x81')](Olivia[_0x58e0('0x1a')]['PreviewUnkName'],_0x48831b,0x0,_0x6aa590);this[_0x58e0('0xad')](Olivia[_0x58e0('0x1a')][_0x58e0('0x65')],this[_0x58e0('0xa')](),this[_0x58e0('0x41')]());};Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0x7')]=function(_0x2336c8,_0x20eb5b,_0x16bb28){var _0x7414ee=ImageManager[_0x58e0('0x3e')](_0x58e0('0xae'));var _0x3d31c9=Window_Base[_0x58e0('0xa2')];var _0x55fe64=Window_Base[_0x58e0('0xce')];var _0x25d57a=_0x2336c8%0x10*_0x3d31c9;var _0x1306bb=Math[_0x58e0('0x27')](_0x2336c8/0x10)*_0x55fe64;var _0x225c68=this['scaleRate']();this[_0x58e0('0x33')][_0x58e0('0xa9')](_0x7414ee,_0x25d57a,_0x1306bb,_0x3d31c9,_0x55fe64,_0x20eb5b,_0x16bb28,Math[_0x58e0('0x4')](_0x3d31c9*_0x225c68),Math[_0x58e0('0x4')](_0x55fe64*_0x225c68));};Window_ItemConcoctPreview[_0x58e0('0x97')][_0x58e0('0x2b')]=function(_0x19dc49,_0x355539,_0x207fd0,_0x4797d5){_0x4797d5=_0x4797d5||0x138;if(_0x19dc49){var _0x971688=Math[_0x58e0('0x4')](Window_Base[_0x58e0('0xa2')]*this[_0x58e0('0x42')]())+0x4;this[_0x58e0('0x72')]();this['drawIcon'](_0x19dc49['iconIndex'],_0x355539+0x2,_0x207fd0+0x2);this[_0x58e0('0x81')](_0x19dc49[_0x58e0('0x64')],_0x355539+_0x971688,_0x207fd0,_0x4797d5-_0x971688);}};