//=============================================================================
// Olivia Engine - Battle Effects 2 - for RPG Maker MV version 1.6.1
// Olivia_BattleEffects2.js
//=============================================================================
 /*:
 * @plugindesc <BattleEffects2> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that adds more features to battle. These new
 * features include a new critical hit flash coloration because the previous one
 * is a slight red glow that is easy to miss. Damage popups have the option of
 * having rolling numbers before they land on a finalized number. This is to
 * help players in figuring out which numbers are still new when multiple popups
 * appear at the same time. These two options can be turned off.
 *
 * New notetag effects have been added. These notetag effects include giving
 * parameter bonuses depending on how high or low HP currently is, a damage cut
 * function that stacks additively on global damage or on certain elemental
 * damage, the ability to overheal past a battler's MaxHP, MaxMP, or MaxTP, a
 * new notetag trait to allow switching two parameters with each other, and
 * some notetags to ease the usage of Yanfly's Buffs & States Core counters.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Critical Popup: Makes a special rainbow flash critical popup effect when a
 * critical hit lands. This is added because the original critical effect was
 * a very fast red tint that is easy for the player to miss if the player isn't
 * paying attention. You can disable this if you want the default effect.
 *
 * Rolling Damage: Make damage popups roll a little bit before settling on the
 * final damage value. By making the damage popup roll, the player can quickly
 * discern which damage popup is newer if there are multiple damage popups all
 * happening at once. You can disable this if you want the default effect.
 *
 * TP Overheal Maximum: Maximum amount TP can be overhealed if using
 * <Overheal TP> notetag for battlers.
 *
 * --------
 * Notetags
 * --------
 *
 * Actor, Class, Enemy, Weapon, Armor, and State Notetags:
 *
 * <High Health ATK: +x%>
 * <High Health DEF: +x%>
 * <High Health MAT: +x%>
 * <High Health MDF: +x%>
 * <High Health AGI: +x%>
 * <High Health LUK: +x%>
 * - Increases (or decreases if you use -x%) the parameter as HP% is higher.
 * Reaches +x% threshhold at 100% health and reduces proportionally as HP% is
 * lower. This modifier is gone when the actor reaches crisis level HP (which
 * is 25% by default).
 *
 * <Low Health ATK: +x%>
 * <Low Health DEF: +x%>
 * <Low Health MAT: +x%>
 * <Low Health MDF: +x%>
 * <Low Health AGI: +x%>
 * <Low Health LUK: +x%>
 * - Increases (or decreases if you use -x%) the parameter as HP% is lower.
 * This rate scales harder the lower the HP ratio and reaches +x% at 0% HP.
 *
 * <Damage Cut: x%>
 * - Decreases incoming damage battler receives by x%. This stacks additively
 * with other damage cut-related effects. Damage Cut % cannot go below 0% or
 * above 100% rate.
 *
 * <Element id Cut: x%>
 * <Element name Cut: x%>
 * - Decreases incoming damage battler receives by x% if it is a matching
 * element. If using id, replace it with the element's ID in the system tab. If
 * using name, replace it with the element's name in the system tab. If the
 * element's name has an icon text code in it, leave out the icon text code.
 * This stacks additively with other damage cut-related effects. Damage Cut %
 * cannot go below 0% or above 100% rate.
 *
 * <Overheal HP>
 * <Overheal MP>
 * <Overheal TP>
 * - Lets the notetag-affected battler be able to overheal past the maximum HP,
 * MP, or TP amounts. The HP and MP maximum values become their respective
 * maximum parameter values (9999 and 999 by default). TP's maximum value
 * reaches the value set in the plugin parameters (200 by default). These
 * effects are only applied inside of battle.
 *
 * <Swap param1 with param2>
 * - Swaps the two parameters with each other. Replace param1 and param2 with
 * mhp, mmp, atk, def, mat, mdf, agi, or luk. Any battler affected by this
 * notetag will have those parameters swapped. If a battler is affected by
 * multiple notetags that alter the similar stats, priority will be given to
 * states, then equipment, then current class, then actor, then enemy.
 *
 *
 *
 * State Notetags:
 *
 * <Dissolve State: x>
 * <Dissolve State: x, x, x>
 * - If a battler becomes affected by any of the states listed in x, that state
 * will be prevented and the current state will be removed.
 *
 * <Set State Counter: x>
 * <Add State Counter: x>
 * - Requires Yanfly's YEP_BuffsStatesCore.js. This sets the state's counter or
 * adds to the states counter whenever the state is applied to the battler.
 * This is a notetag made to make setting the counter value easier.
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
 * - YEP Item Core
 * - YEP Equip Core
 * - YEP Job Points
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
 * @param Critical Popup
 * @type boolean
 * @on YES
 * @off NO
 * @desc Makes a special rainbow flash critical popup effect when a critical hit lands
 * @default true
 *
 * @param CriticalFlashFull
 * @text Full Color Value
 * @parent Critical Popup
 * @type number
 * @min 0
 * @max 255
 * @desc Color density value for a "full" amount
 * @default 255
 *
 * @param CriticalFlashHalf
 * @text Half Color Value
 * @parent Critical Popup
 * @type number
 * @min 0
 * @max 255
 * @desc Color density value for a "half" amount
 * @default 128
 *
 * @param CriticalFlashAlpha
 * @text Alpha Color Value
 * @parent Critical Popup
 * @type number
 * @min 0
 * @max 255
 * @desc Color density value for a "alpha" amount
 * @default 80
 *
 * @param
 *
 * @param Rolling Damage
 * @type boolean
 * @on YES
 * @off NO
 * @desc Make damage popups roll a little bit before settling on the final damage value.
 * @default true
 *
 * @param RollingDamageDuration
 * @text Roll Duration
 * @parent Rolling Damage
 * @type number
 * @min 0
 * @desc Frame duration on how long to roll numbers.
 * @default 20
 *
 * @param
 *
 * @param TP Overheal Maximum
 * @type number
 * @min 0
 * @desc Maximum amount TP can be overhealed if using <Overheal TP> notetag for battlers.
 * @default 200
 *
 *
 */
//=============================================================================

var _0x120d=['frameCount','___Sprite_Damage_updateChild___','elementId','digitWidth','mdf','___Window_Base_drawGauge___','match','toString','_tp','paramLowHealthBonusRate','_mp','getStateCounter','CriticalPopupHalf','getBattleEffects2BattlerObjects','def','round','manageStateCounterNotetags','abs','drawCurrentAndMax','digitHeight','luk','isStateDissolve','damage','addState','CriticalFlashAlpha','_rollDuration','setupCriticalEffect','filter','powerUpColor','textWidth','CriticalFlashFull','_flashColor','DamagePopupRolling','param','Critical\x20Popup','RollingDamageDuration','hpRate','indexOf','Util','BattleEffects2','refreshBattleEffects2Modifiers','concat','right','randomInt','getBattleEffects2ItemElements','_lowHealthBonusModifiers','_highHealthBonusModifiers','CriticalFlashHalf','___Sprite_Damage_createDigits___','getSwappedParamID','Olivia_BattleEffects2','setFrame','_finalNumber','changeTextColor','updateCriticalEffect','subject','<BattleEffects2>','returnBattleEffects2NotetagPresent','createDigits','addStateCounter','isStateAffected','states','refresh','trim','call','applyOverhealEffects','mmp','drawGauge','paramRate','toGroup','item','actor','getItemElements','updateChild','___Game_Action_executeHpDamage___','___Sprite_Damage_setupCriticalEffect___','_baseRow','_digitHeight','executeHpDamage','toUpperCase','removeState','dissolveState','CriticalPopupFull','floor','___Game_Battler_addState___','mat','enemy','push','children','returnBattleEffects2NotetagFloat','length','_hp','_isNumber','parameters','paramMax','attackElements','___Game_BattlerBase_paramRate___','update','updateChildRollingNumber','contains','paramHighHealthBonusRate','toLowerCase','atk','prototype','_elementNames','YEP_BuffsStatesCore','clamp','drawText','CriticalPopupAlpha','inBattle','ceil','note','_digitWidth','elements','applyDamageCut','setStateCounter','maxTPOverheal','_criticalEffect','___Game_BattlerBase_refresh___'];(function(_0x40a2c0,_0x120d32){var _0x5df331=function(_0x44633a){while(--_0x44633a){_0x40a2c0['push'](_0x40a2c0['shift']());}};_0x5df331(++_0x120d32);}(_0x120d,0x173));var _0x5df3=function(_0x40a2c0,_0x120d32){_0x40a2c0=_0x40a2c0-0x0;var _0x5df331=_0x120d[_0x40a2c0];return _0x5df331;};var Imported=Imported||{};Imported[_0x5df3('0x24')]=!![];var Olivia=Olivia||{};var parameters=$plugins[_0x5df3('0xd')](function(_0x18ab78){return _0x18ab78['description']['contains'](_0x5df3('0x2a'));})[0x0][_0x5df3('0x4f')];Olivia[_0x5df3('0x19')]={'CriticalPopupFlash':eval(parameters[_0x5df3('0x14')]),'CriticalPopupFull':Number(parameters[_0x5df3('0x10')]||0x0),'CriticalPopupHalf':Number(parameters[_0x5df3('0x21')]||0x0),'CriticalPopupAlpha':Number(parameters[_0x5df3('0xa')]||0x0),'DamagePopupRolling':eval(parameters['Rolling\x20Damage']),'DamagePopupRollDur':Number(parameters[_0x5df3('0x15')]||0x0),'maxTPOverheal':Number(parameters['TP\x20Overheal\x20Maximum']||0x0)};DataManager['getElementNames']=function(){if(this['_elementNames']===undefined){this[_0x5df3('0x5a')]=[];for(var _0xeb29d8=0x0;_0xeb29d8<$dataSystem[_0x5df3('0x63')]['length'];_0xeb29d8++){var _0x493b1c=$dataSystem[_0x5df3('0x63')][_0xeb29d8];_0x493b1c=_0x493b1c['replace'](/\\i\[(\d+)\]/gi,'');this[_0x5df3('0x5a')]['push'](_0x493b1c[_0x5df3('0x41')]()[_0x5df3('0x31')]());}}return this[_0x5df3('0x5a')];};Olivia[_0x5df3('0x19')]['___Game_BattlerBase_refresh___']=Game_BattlerBase['prototype'][_0x5df3('0x30')];Game_BattlerBase[_0x5df3('0x59')][_0x5df3('0x30')]=function(){var _0x12d09b=this['hp'];var _0x523b9b=this['mp'];var _0x1201b4=this['tp'];Olivia['BattleEffects2'][_0x5df3('0x68')][_0x5df3('0x32')](this);this[_0x5df3('0x33')](_0x12d09b,_0x523b9b,_0x1201b4);this['refreshBattleEffects2Modifiers']();};Game_BattlerBase[_0x5df3('0x59')][_0x5df3('0x1a')]=function(){this[_0x5df3('0x1f')]=[0x0,0x0,this[_0x5df3('0x4b')](/<(?:Low Health|Enmity) ATK:[ ]([\+\-]\d+)([%％])>/i),this[_0x5df3('0x4b')](/<(?:Low Health|Enmity) DEF:[ ]([\+\-]\d+)([%％])>/i),this[_0x5df3('0x4b')](/<(?:Low Health|Enmity) MAT:[ ]([\+\-]\d+)([%％])>/i),this[_0x5df3('0x4b')](/<(?:Low Health|Enmity) MDF:[ ]([\+\-]\d+)([%％])>/i),this[_0x5df3('0x4b')](/<(?:Low Health|Enmity) AGI:[ ]([\+\-]\d+)([%％])>/i),this[_0x5df3('0x4b')](/<(?:Low Health|Enmity) LUK:[ ]([\+\-]\d+)([%％])>/i)];this[_0x5df3('0x20')]=[0x0,0x0,this[_0x5df3('0x4b')](/<(?:High Health|Stamina) ATK:[ ]([\+\-]\d+)([%％])>/i),this[_0x5df3('0x4b')](/<(?:High Health|Stamina) DEF:[ ]([\+\-]\d+)([%％])>/i),this[_0x5df3('0x4b')](/<(?:High Health|Stamina) MAT:[ ]([\+\-]\d+)([%％])>/i),this[_0x5df3('0x4b')](/<(?:High Health|Stamina) MDF:[ ]([\+\-]\d+)([%％])>/i),this[_0x5df3('0x4b')](/<(?:High Health|Stamina) AGI:[ ]([\+\-]\d+)([%％])>/i),this[_0x5df3('0x4b')](/<(?:High Health|Stamina) LUK:[ ]([\+\-]\d+)([%％])>/i)];};Game_BattlerBase[_0x5df3('0x59')][_0x5df3('0x76')]=function(){var _0x2f1637=this[_0x5df3('0x2f')]();if(this['isActor']()){_0x2f1637=_0x2f1637[_0x5df3('0x1b')](this['equips']());_0x2f1637[_0x5df3('0x49')](this['currentClass']());_0x2f1637['push'](this[_0x5df3('0x39')]());}else{_0x2f1637[_0x5df3('0x49')](this[_0x5df3('0x48')]());}return _0x2f1637;};Game_BattlerBase[_0x5df3('0x59')][_0x5df3('0x4b')]=function(_0x4c35de){var _0x122032=this[_0x5df3('0x76')]();var _0x3473f1=0x0;for(var _0x83929c=0x0;_0x83929c<_0x122032[_0x5df3('0x4c')];_0x83929c++){var _0x4a5431=_0x122032[_0x83929c];if(!!_0x4a5431&&_0x4a5431[_0x5df3('0x61')][_0x5df3('0x6f')](_0x4c35de)){_0x3473f1+=parseFloat(RegExp['$1'])*0.01;}}return _0x3473f1;};Game_BattlerBase[_0x5df3('0x59')][_0x5df3('0x33')]=function(_0x16364b,_0x495129,_0x49acac){if($gameParty[_0x5df3('0x5f')]()){if(this['returnBattleEffects2NotetagPresent'](/<Overheal HP>/i)){this[_0x5df3('0x4d')]=_0x16364b[_0x5df3('0x5c')](0x0,this[_0x5df3('0x50')](0x0));}if(this[_0x5df3('0x2b')](/<Overheal MP>/i)){this[_0x5df3('0x73')]=_0x495129[_0x5df3('0x5c')](0x0,this[_0x5df3('0x50')](0x1));}if(this['returnBattleEffects2NotetagPresent'](/<Overheal TP>/i)){this[_0x5df3('0x71')]=_0x49acac[_0x5df3('0x5c')](0x0,Olivia['BattleEffects2'][_0x5df3('0x66')]);}}};Game_BattlerBase['prototype'][_0x5df3('0x2b')]=function(_0x516d1c){var _0x643422=this['getBattleEffects2BattlerObjects']();var _0x56b1e7=0x0;for(var _0x186279=0x0;_0x186279<_0x643422['length'];_0x186279++){var _0x423631=_0x643422[_0x186279];if(!!_0x423631&&_0x423631[_0x5df3('0x61')][_0x5df3('0x6f')](_0x516d1c)){return!![];}}return![];};Olivia[_0x5df3('0x19')][_0x5df3('0x52')]=Game_BattlerBase[_0x5df3('0x59')]['paramRate'];Game_BattlerBase[_0x5df3('0x59')][_0x5df3('0x36')]=function(_0x4c2c7c){var _0x12a677=Olivia[_0x5df3('0x19')][_0x5df3('0x52')][_0x5df3('0x32')](this,_0x4c2c7c);if(_0x4c2c7c>=0x2){_0x12a677*=this[_0x5df3('0x56')](_0x4c2c7c);_0x12a677*=this[_0x5df3('0x72')](_0x4c2c7c);}return _0x12a677;};Game_BattlerBase['prototype']['paramHighHealthBonusRate']=function(_0x40437d){if(this['isDying']()){return 0x1;}else{if(this['_highHealthBonusModifiers']===undefined){this[_0x5df3('0x1a')]();}var _0x2954aa=this[_0x5df3('0x16')]();var _0x19ea06=this[_0x5df3('0x20')][_0x40437d];return 0x1+_0x2954aa*_0x19ea06;}};Game_BattlerBase[_0x5df3('0x59')][_0x5df3('0x72')]=function(_0xa92ec7){if(this['_lowHealthBonusModifiers']===undefined){this[_0x5df3('0x1a')]();}var _0x1bd1c9=0x1-this['hpRate']();var _0x5e21b2=this[_0x5df3('0x1f')][_0xa92ec7]/0x3;return 0x1+_0x5e21b2*((0x1+0x2*_0x1bd1c9)*_0x1bd1c9);};Olivia[_0x5df3('0x19')]['___Game_BattlerBase_param___']=Game_BattlerBase[_0x5df3('0x59')][_0x5df3('0x13')];Game_BattlerBase[_0x5df3('0x59')][_0x5df3('0x13')]=function(_0x372ba7){var _0x372ba7=this['getSwappedParamID'](_0x372ba7);return Olivia[_0x5df3('0x19')]['___Game_BattlerBase_param___'][_0x5df3('0x32')](this,_0x372ba7);};Game_BattlerBase['prototype'][_0x5df3('0x23')]=function(_0x46a672){var _0x33675c=this[_0x5df3('0x76')]();var _0x2f2255=['mhp',_0x5df3('0x34'),_0x5df3('0x58'),_0x5df3('0x0'),_0x5df3('0x47'),_0x5df3('0x6d'),'agi',_0x5df3('0x6')];for(var _0x57d759=0x0;_0x57d759<_0x33675c[_0x5df3('0x4c')];_0x57d759++){var _0x2d373e=_0x33675c[_0x57d759];if(!!_0x2d373e&&_0x2d373e[_0x5df3('0x61')][_0x5df3('0x6f')](/<Swap (.*) with (.*)>/i)){var _0x12ac51=String(RegExp['$1'])[_0x5df3('0x57')]()[_0x5df3('0x31')]();var _0x4734a1=String(RegExp['$2'])[_0x5df3('0x57')]()[_0x5df3('0x31')]();var _0x4522dd=_0x2f2255[_0x5df3('0x17')](_0x12ac51);var _0x3f8de5=_0x2f2255[_0x5df3('0x17')](_0x4734a1);if(_0x4522dd>=0x0&&_0x3f8de5>=0x0){if(_0x4522dd===_0x46a672){return _0x3f8de5;}else if(_0x3f8de5===_0x46a672){return _0x4522dd;}}}}return _0x46a672;};Olivia['BattleEffects2'][_0x5df3('0x46')]=Game_Battler['prototype'][_0x5df3('0x9')];Game_Battler[_0x5df3('0x59')][_0x5df3('0x9')]=function(_0x3e1e93){if(!this['isStateDissolve'](_0x3e1e93)){Olivia[_0x5df3('0x19')][_0x5df3('0x46')][_0x5df3('0x32')](this,_0x3e1e93);this[_0x5df3('0x2')](_0x3e1e93);}};Game_Battler[_0x5df3('0x59')][_0x5df3('0x7')]=function(_0x3703fe){var _0xe47a96=this['states']();for(var _0x302845=0x0;_0x302845<_0xe47a96['length'];_0x302845++){var _0x167413=_0xe47a96[_0x302845];if(!!_0x167413&&_0x167413['note']['match'](/<(?:Veil|Dissolve) (?:State|States):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){array=JSON['parse']('['+RegExp['$1'][_0x5df3('0x6f')](/\d+/g)+']');if(array['contains'](_0x3703fe)){this[_0x5df3('0x43')](_0x167413['id']);return!![];}}}return![];};Game_Battler[_0x5df3('0x59')]['dissolveState']=function(_0x55ae8d){if(Imported[_0x5df3('0x5b')]&&this[_0x5df3('0x74')](_0x55ae8d)>0x0){this[_0x5df3('0x2d')](_0x55ae8d,-0x1);if(this[_0x5df3('0x74')](_0x55ae8d)===0x0){this[_0x5df3('0x42')](_0x55ae8d);}}else{this[_0x5df3('0x42')](_0x55ae8d);}};Game_Battler[_0x5df3('0x59')][_0x5df3('0x2')]=function(_0x4bc1a2){if(Imported[_0x5df3('0x5b')]&&this[_0x5df3('0x2e')](_0x4bc1a2)){var _0xa8f6af=$dataStates[_0x4bc1a2];if(!!_0xa8f6af){if(_0xa8f6af[_0x5df3('0x61')]['match'](/<Set State Counter: (\d+)>/i)){this[_0x5df3('0x65')](_0x4bc1a2,parseInt(RegExp['$1']));}else if(_0xa8f6af[_0x5df3('0x61')]['match'](/<Set State Counter: (.*)>/i)){this['setStateCounter'](_0x4bc1a2,String(RegExp['$1']));}else if(_0xa8f6af[_0x5df3('0x61')][_0x5df3('0x6f')](/<Add State Counter: (\d+)>/i)){this[_0x5df3('0x2d')](_0x4bc1a2,parseInt(RegExp['$1']));}}}};Olivia['BattleEffects2'][_0x5df3('0x3c')]=Game_Action['prototype'][_0x5df3('0x40')];Game_Action[_0x5df3('0x59')]['executeHpDamage']=function(_0x522a75,_0x737630){_0x737630=this[_0x5df3('0x64')](_0x522a75,_0x737630);Olivia[_0x5df3('0x19')]['___Game_Action_executeHpDamage___'][_0x5df3('0x32')](this,_0x522a75,_0x737630);};Game_Action[_0x5df3('0x59')][_0x5df3('0x64')]=function(_0x323acb,_0x15e1e8){var _0x592a61=_0x323acb[_0x5df3('0x76')]();var _0x4febb2=0x0;var _0x3b05a2=this[_0x5df3('0x1e')]();for(var _0xe1c0d0=0x0;_0xe1c0d0<_0x592a61['length'];_0xe1c0d0++){var _0x4a4960=_0x592a61[_0xe1c0d0];if(!!_0x4a4960){if(_0x4a4960['note'][_0x5df3('0x6f')](/<Damage Cut: (\d+)([%％])>/i)){_0x4febb2+=parseFloat(RegExp['$1'])*0.01;}else if(_0x4a4960[_0x5df3('0x61')][_0x5df3('0x6f')](/<Element (\d+) Cut: (\d+)([%％])>/i)){var _0x4b7fef=parseInt(RegExp['$1']);if(_0x3b05a2[_0x5df3('0x55')](_0x4b7fef)){_0x4febb2+=parseFloat(RegExp['$2'])*0.01;}}else if(_0x4a4960[_0x5df3('0x61')][_0x5df3('0x6f')](/<Element (.*) Cut: (\d+)([%％])>/i)){var _0x18f910=String(RegExp['$1'])[_0x5df3('0x41')]()[_0x5df3('0x31')]();var _0x4b7fef=DataManager['getElementNames']()[_0x5df3('0x17')](_0x18f910);if(_0x3b05a2[_0x5df3('0x55')](_0x4b7fef)){_0x4febb2+=parseFloat(RegExp['$2'])*0.01;}}}}_0x4febb2=_0x4febb2[_0x5df3('0x5c')](0x0,0x1);_0x15e1e8*=0x1-_0x4febb2;return Math[_0x5df3('0x60')](_0x15e1e8);};Game_Action[_0x5df3('0x59')][_0x5df3('0x1e')]=function(){if(Imported['YEP_ElementCore']){return this[_0x5df3('0x3a')]();}else if(this[_0x5df3('0x38')]()[_0x5df3('0x8')][_0x5df3('0x6b')]<0x0){return this[_0x5df3('0x29')]()[_0x5df3('0x51')]();}else{return[this[_0x5df3('0x38')]()[_0x5df3('0x8')][_0x5df3('0x6b')]];}};Olivia[_0x5df3('0x19')]['___Sprite_Damage_setupCriticalEffect___']=Sprite_Damage[_0x5df3('0x59')][_0x5df3('0xc')];Sprite_Damage[_0x5df3('0x59')][_0x5df3('0xc')]=function(){if(Olivia['BattleEffects2']['CriticalPopupFlash']){this[_0x5df3('0x67')]=!![];}else{Olivia[_0x5df3('0x19')][_0x5df3('0x3d')]['call'](this);}};Olivia[_0x5df3('0x19')][_0x5df3('0x22')]=Sprite_Damage[_0x5df3('0x59')][_0x5df3('0x2c')];Sprite_Damage[_0x5df3('0x59')][_0x5df3('0x2c')]=function(_0x54e722,_0x2e2162){_0x2e2162=Math[_0x5df3('0x45')](_0x2e2162);var _0x1cd4ec=this[_0x5df3('0x4a')][_0x5df3('0x4c')];Olivia[_0x5df3('0x19')]['___Sprite_Damage_createDigits___'][_0x5df3('0x32')](this,_0x54e722,_0x2e2162);_0x54e722=_0x54e722+(_0x2e2162<0x0?0x1:0x0);var _0x3707c8=Math[_0x5df3('0x3')](_0x2e2162)[_0x5df3('0x70')]();for(var _0x39f67f=0x0;_0x39f67f<_0x3707c8[_0x5df3('0x4c')];_0x39f67f++){var _0x436a71=this[_0x5df3('0x4a')][_0x39f67f+_0x1cd4ec];_0x436a71[_0x5df3('0x4e')]=!![];_0x436a71['_baseRow']=_0x54e722;_0x436a71[_0x5df3('0xb')]=Olivia[_0x5df3('0x19')]['DamagePopupRollDur'];_0x436a71['_digitWidth']=this[_0x5df3('0x6c')]();_0x436a71[_0x5df3('0x3f')]=this[_0x5df3('0x5')]();_0x436a71[_0x5df3('0x26')]=Number(_0x3707c8[_0x39f67f]);}};Olivia[_0x5df3('0x19')]['___Sprite_Damage_update___']=Sprite_Damage['prototype'][_0x5df3('0x53')];Sprite_Damage[_0x5df3('0x59')]['update']=function(){Olivia['BattleEffects2']['___Sprite_Damage_update___'][_0x5df3('0x32')](this);if(this['_criticalEffect']){this[_0x5df3('0x28')]();}};Olivia[_0x5df3('0x19')][_0x5df3('0x6a')]=Sprite_Damage['prototype']['updateChild'];Sprite_Damage[_0x5df3('0x59')][_0x5df3('0x3b')]=function(_0x80432c){Olivia[_0x5df3('0x19')][_0x5df3('0x6a')][_0x5df3('0x32')](this,_0x80432c);if(Olivia[_0x5df3('0x19')][_0x5df3('0x12')]){this[_0x5df3('0x54')](_0x80432c);}};Sprite_Damage[_0x5df3('0x59')][_0x5df3('0x54')]=function(_0x3046d3){if(_0x3046d3['_isNumber']){if(_0x3046d3[_0x5df3('0xb')]-->0x0){var _0x39a15e=Math[_0x5df3('0x1d')](0xa);}else{var _0x39a15e=_0x3046d3[_0x5df3('0x26')];}var _0xff2e86=_0x3046d3[_0x5df3('0x3e')];var _0x4405d7=_0x3046d3[_0x5df3('0x62')];var _0x3c438d=_0x3046d3[_0x5df3('0x3f')];_0x3046d3[_0x5df3('0x25')](_0x39a15e*_0x4405d7,_0xff2e86*_0x3c438d,_0x4405d7,_0x3c438d);}};Sprite_Damage['prototype']['updateCriticalEffect']=function(){var _0x7593d=Math[_0x5df3('0x1')](Graphics[_0x5df3('0x69')]%0x1e/0x3);var _0x3a6849=Olivia[_0x5df3('0x19')][_0x5df3('0x44')];var _0x597c62=Olivia[_0x5df3('0x19')][_0x5df3('0x75')];var _0x25ed57=Olivia[_0x5df3('0x19')][_0x5df3('0x5e')];if(_0x7593d===0x0){this[_0x5df3('0x11')]=[_0x3a6849,0x0,0x0,_0x25ed57];}else if(_0x7593d===0x1){this[_0x5df3('0x11')]=[_0x3a6849,_0x597c62,0x0,_0x25ed57];}else if(_0x7593d===0x2){this[_0x5df3('0x11')]=[_0x3a6849,_0x3a6849,0x0,_0x25ed57];}else if(_0x7593d===0x3){this[_0x5df3('0x11')]=[_0x597c62,_0x3a6849,0x0,_0x25ed57];}else if(_0x7593d===0x3){this[_0x5df3('0x11')]=[0x0,_0x3a6849,0x0,_0x25ed57];}else if(_0x7593d===0x4){this['_flashColor']=[0x0,_0x3a6849,_0x597c62,_0x25ed57];}else if(_0x7593d===0x5){this[_0x5df3('0x11')]=[0x0,_0x3a6849,_0x3a6849,_0x25ed57];}else if(_0x7593d===0x6){this[_0x5df3('0x11')]=[0x0,_0x597c62,_0x3a6849,_0x25ed57];}else if(_0x7593d===0x7){this[_0x5df3('0x11')]=[0x0,0x0,_0x3a6849,_0x25ed57];}else if(_0x7593d===0x7){this[_0x5df3('0x11')]=[_0x597c62,0x0,_0x3a6849,_0x25ed57];}else if(_0x7593d===0x8){this[_0x5df3('0x11')]=[_0x3a6849,0x0,_0x3a6849,_0x25ed57];}else if(_0x7593d===0x9){this[_0x5df3('0x11')]=[_0x3a6849,0x0,_0x597c62,_0x25ed57];}};Olivia[_0x5df3('0x19')][_0x5df3('0x6e')]=Window_Base[_0x5df3('0x59')][_0x5df3('0x35')];Window_Base[_0x5df3('0x59')][_0x5df3('0x35')]=function(_0x521a8e,_0x163000,_0x817806,_0x5d6a23,_0x5a6fa5,_0x4e93da){_0x5d6a23=_0x5d6a23[_0x5df3('0x5c')](0x0,0x1);Olivia[_0x5df3('0x19')][_0x5df3('0x6e')][_0x5df3('0x32')](this,_0x521a8e,_0x163000,_0x817806,_0x5d6a23,_0x5a6fa5,_0x4e93da);};Window_Base[_0x5df3('0x59')][_0x5df3('0x4')]=function(_0x44e773,_0x520bf9,_0x4564a6,_0x595a6b,_0x123d8f,_0x195245,_0x4eaa7c){if(_0x44e773>_0x520bf9){_0x195245=this[_0x5df3('0xe')]();}var _0x187fb4=this[_0x5df3('0xf')]('HP');var _0x217a5f=this['textWidth'](Yanfly['Util']['toGroup'](_0x44e773));var _0x43c37c=this[_0x5df3('0xf')](Yanfly[_0x5df3('0x18')][_0x5df3('0x37')](_0x520bf9));var _0x95e67=this[_0x5df3('0xf')]('/');var _0x2b27d0=_0x4564a6+_0x123d8f-_0x43c37c;var _0x1f7d37=_0x2b27d0-_0x95e67;var _0x4d820f=_0x1f7d37-_0x217a5f;if(_0x4d820f>=_0x4564a6+_0x187fb4){this['changeTextColor'](_0x195245);this['drawText'](Yanfly['Util'][_0x5df3('0x37')](_0x44e773),_0x4d820f,_0x595a6b,_0x217a5f,_0x5df3('0x1c'));this[_0x5df3('0x27')](_0x4eaa7c);this[_0x5df3('0x5d')]('/',_0x1f7d37,_0x595a6b,_0x95e67,_0x5df3('0x1c'));this[_0x5df3('0x5d')](Yanfly[_0x5df3('0x18')][_0x5df3('0x37')](_0x520bf9),_0x2b27d0,_0x595a6b,_0x43c37c,'right');}else{this[_0x5df3('0x27')](_0x195245);this[_0x5df3('0x5d')](Yanfly[_0x5df3('0x18')]['toGroup'](_0x44e773),_0x2b27d0,_0x595a6b,_0x217a5f,'right');}};Yanfly[_0x5df3('0x18')]=Yanfly[_0x5df3('0x18')]||{};if(!Yanfly['Util'][_0x5df3('0x37')]){Yanfly[_0x5df3('0x18')][_0x5df3('0x37')]=function(_0x2a4571){return _0x2a4571;};};