//=============================================================================
// Olivia Engine - Boost Point System - for RPG Maker MV version 1.6.1
// Olivia_BoostPointSystem.js
//=============================================================================
 /*:
 * @plugindesc <BoostPoint> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that adds a Boost Point System to your game.
 * This is a newly added mechanic that allows actors and enemies to temporarily
 * power themselves up for the current turn by using a new resource called
 * Boost Points. Boost Points are acquired at the end of each turn if the
 * battler did not use Boost Points. While Boosted, actions can either deal
 * more damage, hit more times, make buff/debuff effects last longer, and more.
 * 
 * The Boost Point System plugin has many ways for you to customize it. Please
 * go through the plugin's parameters to adjust the settings for your game.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 *
 *
 * Battle Control:
 *
 * Boost Command: How command for how Boost is displayed
 *
 * Show Command?: Show the Boost Command in the Actor Command Window?
 *
 * Unboost Command: How command for how Unboost is displayed
 *
 * Show Command?: Show the Unboost Command in the Actor Command Window?
 *
 * Use L and R Buttons?: Use L and R buttons (Q and W keys) to control
 * boosting? Allows you to use Boost in any kind of battle menu without having
 * to use the specialized Boost and Unboost commands.
 *
 * Mechanics:
 *
 * Start Battle BP: The amount of BP battlers start each battle with
 *
 * Regen BP: The amount of BP battlers regenerate each turn
 *
 * Always Regenerate: Always regenerate BP. Otherwise, regenerate BP when BP
 * wasn't used that turn. Change this if you want the battlers to always have
 * BP regeneration
 *
 * Max Stored BP: The most amount of BP a battler can hold onto at any time
 *
 * Max Used BP: The most amount of BP a battler can use at once.
 *
 * Multipliers:
 *
 * Damage Multipliers: The multipliers for each BP used from 0 to max. This is
 * the percentage of the multiplier. This affects all skills and items with the 
 * <Boost Damage> notetag. For actions you want to deal more damage.
 *
 * Damage Addition: The addition for each BP used from 0 to max. This is the
 * integer version of the bonus.​ This affects all skills and items with the
 * <Boost Damage> notetag. For actions you want to deal more damage.​
 *
 * Repeat Multipliers: The multipliers for each BP used from 0 to max. This is
 * the percentage of the multiplier. This affects all skills and items with the
 * <Boost Repeats> notetag. For actions you want to hit more times.
 *
 * Repeat Addition: The addition for each BP used from 0 to max. This is the
 * integer version of the bonus.​ This affects all skills and items with the
 * <Boost Repeats> notetag. For actions you want to deal more damage.​
 *
 * Turn Multipliers: The multipliers for each BP used from 0 to max. This is
 * the percentage of the multiplier. This affects all skills and items with the
 * <Boost Turns> notetag. For actions that apply states, buffs, or debuffs.
 *
 * Turn Addition: The addition for each BP used from 0 to max. This is the
 * integer version of the bonus.​ This affects all skills and items with the
 * <Boost Turns> notetag. For actions you want to deal more damage.​
 *
 * Analyze Multipliers: The multipliers for each BP used from 0 to max. This is
 * the percentage of the multiplier. This affects all skills and items with the
 * <Boost Analyze> notetag. For the effects found in Weakness Display plugin.
 *
 * Analyze Addition: The addition for each BP used from 0 to max. This is the
 * integer version of the bonus.​ This affects all skills and items with the
 * <Boost Analyze> notetag. For actions you want to deal more damage.​
 *
 * BP Effect Multipliers: The multipliers for each BP used from 0 to max. This
 * is the percentage of the multiplier. This affects all skills and items with
 * the <Boost BP Effect> notetag. For the actions that alter user or target BP.
 *
 * BP Effect Addition: The addition for each BP used from 0 to max. This is the
 * integer version of the bonus.​ This affects all skills and items with the
 * <Boost BP> notetag. For actions you want to deal more damage.​
 *
 * Visuals:
 *
 * Animations: Choose animations to play when changing to different levels of BP
 *
 * Show Icons?: Show boost point icons in the party status menu in battle?
 *
 * Boost Icon: Icon ID used to represent a Boost slot
 *
 * Empty Icon: Icon ID used to represent an empty slot
 *
 * Small Boost Icons: Draw smaller icons?
 *
 * Boost Icon Size: Rate of how much to shrink the Boost icons
 *
 * Text: Text used to accompany small Boost icons
 *
 * Text Alignment: Text alignment used for the small Boost text
 *
 * 
 *
 * --------
 * Notetags
 * --------
 * 
 * Skill and Item Notetags:
 *
 * <Require x BP>
 * This will make the action require at least x BP to use for actors.
 * If for enemies, then at least x BP must be stored. This will not
 * make the enemies use the BP until you use the enemy BP use notetags.
 *
 * <Require > x BP>
 * <Require >= x BP>
 * <Require = x BP>
 * <Require <= x BP>
 * <Require < x BP>
 * This will make the action require greater than, greater than or equal to,
 * equal to exactly, less than or equal to, or less than x BP for the skill
 * to be used for actors. If for enemies, this will be the BP stored. This
 * will not make the enemies use the BP until you use the enemy BP use notetag.
 *
 * <Target BP: +x>
 * <Target BP: -x>
 * The target will gain or lose BP equal to x. This is a BP effect.
 *
 * <User BP: +x>
 * <User BP: -x>
 * The user will gain or lose BP equal to x. This is a BP effect.
 *
 * <Boost Damage>
 * If the action's user is using BP, this will boost the damage multiplier
 * for this action by the multiplier set in the plugin parameters.
 *
 * <Boost Turns>
 * If the action's user is using BP, this will boost the state/buff turns
 * for this action by the multiplier set in the plugin parameters.
 *
 * <Boost Repeats>
 * If the action's user is using BP, this will boost the number of repeated
 * hits for this action by the multiplier set in the plugin parameters.
 *
 * <Boost Analyze>
 * If the action's user is using BP, this will boost the number of weaknesses
 * revealed for this action by the multiplier set in the plugin parameters.
 *
 * <Boost BP Effect>
 * If the action's user is using BP, this will boost the number of BP effects
 * for this action by the multiplier set in the plugin parameters.
 *
 *
 *
 * Actor, Class, Enemy, Weapon, Armor, and State Notetags:
 *
 * <BP Battle Start: x%>
 * <BP Battle Start: +x>
 * <BP Battle Start: -x>
 * Changes the amount of BP the battler starts with in battle by a
 * percentage (x%) or by a flat amount (+x or -x);
 *
 * <BP Regen: x%>
 * <BP Regen: +x>
 * <BP Regen: -x>
 * Changes the amount of BP the battler regens each turn in battle by a
 * percentage (x%) or by a flat amount (+x or -x);
 *
 *
 * 
 *
 * Enemy Notetags:
 *
 * <Boost Skill x: Full>
 * <Boost skillname: Full>
 * Whenever the enemy uses skill x (or the skillname if you use that),
 * it will use as much BP as it can for the skill when it performs it.
 *
 * <Boost Skill x: At Least y>
 * <Boost skillname: At Least y>
 * Whenever the enemy uses skill x (or the skillname if you use that),
 * it will use BP after reaching y BP and use as much as it can.
 *
 * <Boost Skill x: At Most y>
 * <Boost skillname: At Most y>
 * Whenever the enemy uses skill x (or the skillname if you use that),
 * it will use as much BP as it can unless BP is over y BP.
 *
 *
 *
 *
 * State Notetags:
 *
 * <Boost Sealed>
 * If a battler is affected by a state with this notetag, they cannot boost.
 *
 *
 *
 * ----------
 * Text Codes
 * ----------
 *
 * You can put these in a skill or item's help description and it will change
 * the text depending on how much BP the current actor is using.
 *
 * \bpDamage[x]
 * This will apply BP damage multipliers to number x based on the
 * actor's currently used BP amount.
 *
 * \bpTurn[x]
 * This will apply BP turn multipliers to number x based on the
 * actor's currently used BP amount.
 *
 * \bpRepeat[x]
 * This will apply BP repeat multipliers to number x based on the
 * actor's currently used BP amount.
 *
 * \bpAnalyze[x]
 * This will apply BP analyze multipliers to number x based on the
 * actor's currently used BP amount.
 *
 * \bpEffect[x]
 * This will apply BP effect multipliers to number x based on the
 * actor's currently used BP amount.
 *
 * \bp[text]
 * The text inside the brackets won't appear unless
 * at least 1 BP is used.
 *
 * \bp0[text]
 * The text inside the brackets will only appear if
 * no BP is being used.
 *
 * \bp>x[text]
 * The text inside the brackets will only appear if
 * more than x BP is being used.
 *
 * \bp>=x[text]
 * The text inside the brackets will only appear if
 * more than or exactly x BP is being used.
 *
 * \bp=x[text]
 * The text inside the brackets will only appear if
 * exactly x BP is being used.
 *
 * \bp<=x[text]
 * The text inside the brackets will only appear if
 * less than or exactly x BP is being used.
 *
 * \bp<x[text]
 * The text inside the brackets will only appear if
 * less than x BP is being used.
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
 * @param Boost Point Battle Control
 * @text Battle Control
 * @parent Boost Point System 
 *
 * @param Boost Point Boost Command
 * @text Boost Command
 * @parent Boost Point Battle Control
 * @desc How command for how Boost is displayed
 * @default Boost
 *
 * @param Boost Point Boost Command Show
 * @text Show Command?
 * @parent Boost Point Boost Command
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the Boost Command in the Actor Command Window?
 * @default true
 *
 * @param Boost Point Unboost Command
 * @text Unboost Command
 * @parent Boost Point Battle Control
 * @desc How command for how Unboost is displayed
 * @default Unboost
 *
 * @param Boost Point Unboost Command Show
 * @text Show Command?
 * @parent Boost Point Unboost Command
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the Unboost Command in the Actor Command Window?
 * @default true
 *
 * @param Boost Point LR Buttons
 * @text Use L and R Buttons?
 * @parent Boost Point Battle Control
 * @type boolean
 * @on On
 * @off Off
 * @desc Use L and R buttons (Q and W keys) to control boosting?
 * @default true
 *
 * @param Boost Point Mechanics
 * @text Mechanics
 * @parent Boost Point System 
 *
 * @param Boost Point Start Battle
 * @text Start Battle BP
 * @parent Boost Point Mechanics
 * @type number
 * @desc The amount of BP battlers start each battle with
 * @default 1
 *
 * @param Boost Point Regen
 * @text Regen BP
 * @parent Boost Point Mechanics
 * @type number
 * @desc The amount of BP battlers regenerate each turn
 * @default 1
 *
 * @param Boost Point Always Regen
 * @text Always Regenerate
 * @parent Boost Point Regen
 * @type boolean
 * @on On
 * @off Off
 * @desc Always regenerate BP. Otherwise, regenerate BP when BP wasn't used that turn.
 * @default false
 *
 * @param Boost Point Maximum Stored
 * @text Max Stored BP
 * @parent Boost Point Mechanics
 * @type number
 * @desc The most amount of BP a battler can hold onto at any time
 * @default 5
 *
 * @param Boost Point Maximum Use
 * @text Max Used BP
 * @parent Boost Point Mechanics
 * @type number
 * @desc The most amount of BP a battler can use at once.
 * @default 3
 *
 * @param Boost Point Death Removal
 * @text Death Removal
 * @parent Boost Point Mechanics
 * @type boolean
 * @on On
 * @off Off
 * @desc Remove all BP upon death?
 * @default true
 *
 * @param Boost Point Death Regen
 * @text Death Regen
 * @parent Boost Point Mechanics
 * @type boolean
 * @on On
 * @off Off
 * @desc Can regen BP while dead or hidden?
 * @default false
 *
 * @param Boost Point Multipliers
 * @text Multipliers
 * @parent Boost Point System 
 *
 * @param Boost Point Damage Multipliers
 * @text Damage Multipliers
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The multipliers for each BP used from 0 to max. This is the percentage of the multiplier.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0"]
 *
 * @param Boost Point Damage Addition
 * @text Damage Addition
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The addition for each BP used from 0 to max. This is the integer version of the bonus.
 * @default ["0","0","0","0","0","0","0","0","0","0"]
 *
 * @param Boost Point Repeat Multipliers
 * @text Repeat Multipliers
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The multipliers for each BP used from 0 to max. This is the percentage of the multiplier.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0"]
 *
 * @param Boost Point Repeat Addition
 * @text Repeat Addition
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The addition for each BP used from 0 to max. This is the integer version of the bonus.
 * @default ["0","0","0","0","0","0","0","0","0","0"]
 *
 * @param Boost Point Turn Multipliers
 * @text Turn Multipliers
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The multipliers for each BP used from 0 to max. This is the percentage of the multiplier.
 * @default ["1.0","1.0","1.0","1.0","1.0","1.0","1.0","1.0","1.0","1.0"]
 *
 * @param Boost Point Turn Addition
 * @text Turn Addition
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The addition for each BP used from 0 to max. This is the integer version of the bonus.
 * @default ["0","2","4","6","8","10","12","14","16","18"]
 *
 * @param Boost Point Analyze Multipliers
 * @text Analyze Multipliers
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The multipliers for each BP used from 0 to max. This is the percentage of the multiplier.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0"]
 *
 * @param Boost Point Analyze Addition
 * @text Analyze Addition
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The addition for each BP used from 0 to max. This is the integer version of the bonus.
 * @default ["0","0","0","0","0","0","0","0","0","0"]
 *
 * @param Boost Point BP Effect Multipliers
 * @text BP Effect Multipliers
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The multipliers for each BP used from 0 to max. This is the percentage of the multiplier.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0"]
 *
 * @param Boost Point BP Addition
 * @text BP Addition
 * @parent Boost Point Multipliers
 * @type string[]
 * @desc The addition for each BP used from 0 to max. This is the integer version of the bonus.
 * @default ["0","0","0","0","0","0","0","0","0","0"]
 *
 * @param Boost Point Visuals
 * @text Visuals
 * @parent Boost Point System 
 *
 * @param Boost Point Animations
 * @text Animations
 * @parent Boost Point Visuals
 * @type animation[]
 * @desc Choose animations to play when changing to different levels of BP
 * @default ["12","13","15","14","2","51","52","53","67","66"]
 *
 * @param Boost Point Show Icons
 * @text Show Icons?
 * @parent Boost Point Visuals
 * @type boolean
 * @on On
 * @off Off
 * @desc Show boost point icons in the party status menu in battle?
 * @default true
 *
 * @param Boost Point Icon Filled
 * @text Boost Icon
 * @parent Boost Point Show Icons
 * @type number
 * @desc Icon ID used to represent a Boost slot
 * @default 160
 *
 * @param Boost Point Icon Empty
 * @text Empty Icon
 * @parent Boost Point Show Icons
 * @type number
 * @desc Icon ID used to represent an empty slot
 * @default 161
 *
 * @param Small Boost Icons
 * @parent Boost Point Show Icons
 * @type boolean
 * @on On
 * @off Off
 * @desc Draw smaller icons?
 * @default true
 *
 * @param Boost Icon Size
 * @parent Small Boost Icons
 * @desc Rate of how much to shrink the Boost icons
 * @default 0.5
 *
 * @param Boost Point Small Text
 * @text Text
 * @parent Small Boost Icons
 * @desc Text used to accompany small Boost icons
 * @default Boost
 *
 * @param Boost Point Small Text Align
 * @text Text Alignment
 * @parent Small Boost Icons
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment used for the small Boost text
 * @default right
 *
 * @param
 * @param
 *
 */
//=============================================================================

var _0x3ee7=['additionForBP','setupBattleBP','Boost\x20Point\x20Maximum\x20Use','_iconWidth','setupBoostAI','_bpTurnRate','calculateBPtoUse','<BoostPoint>','contains','addBoostCommand','Damage','applyBPEffects','Boost\x20Point\x20Unboost\x20Command','parse','storedBP','_helpWindow','contents','processTurn','___Game_Battler_addBuff___','convertBPEffectEscape','toLowerCase','drawBasicArea','_logWindow','convertBPAnalyzeEscape','___Game_BattlerBase_resetStateCounts','call','setStoredBP','replace','setup','drawSmallBoostIcon','BP_TurnAddition','convertBPGreaterEscape','[\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22]','round','_stateTurns','___Scene_Battle_createActorCommandWindow___','___Window_BattleActor_initialize___','isEnemy','setupBattleBPMultiplier','isSkill','addCommand','setupBattleBPAdded','BoostCmd','isActor','numRepeats','applyGuard','Boost\x20Point\x20Turn\x20Addition','applyItemUserEffect','processEnemyBPUsage','equips','drawIcon','initializeBP','randomInt','_useBP','_boostAI','clearBPSubject','_bpSubject','prototype','false','Boost\x20Point\x20Regen','reapplyRules','Repeat','true','_storedBP','_itemConcoctPreviewWindow','___Game_Battler_addState___','OctoBattle','parameters','_waitCount','convertBPLessEscape','selectNextCommand','cursorPageup','Boost\x20Point\x20Show\x20Icons','Boost\x20Point\x20Unboost\x20Command\x20Show','[\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22]','startChangeBPAnimation','isDead','Boost\x20Point\x20Damage\x20Multipliers','_scene','___Game_Enemy_setup___','_actorCommandWindow','___Game_BattlerBase_initialize___','isBoostSealed','actionWait','processUseBP','___Scene_Battle_selectNextCommand___','bpRegenValue','currentClass','BP_MaxUse','Boost\x20Point\x20Small\x20Text','BP_TurnMultiply','___Scene_Battle_startActorCommandSelection___','length','Boost\x20Point\x20Animations','DeathRegen','BP_RepAddition','Boost\x20Point\x20Icon\x20Empty','addState','Olivia_OctoBattle','width','useBP','convertEscapeCharacters','match','___Game_Action_apply___','TextAlign','___BattleManager_setup___','convertBPUpEscape','applyBPDamage','defineProperties','drawText','commandUnboost','Small\x20Boost\x20Icons','Boost\x20Icon\x20Size','___Game_Battler_regenerateAll___','createActorCommandWindow','processEnemyUseBoost','Boost\x20Point\x20Analyze\x20Addition','cursorPagedown','removeBattleStates','convertBPGreaterEqualEscape','clamp','regenerateAll','Boost\x20Point\x20Boost\x20Command\x20Show','states','Boost\x20Point\x20Maximum\x20Stored','BP_RepMultiply','___Game_Action_applyGuard___','_isBoostRestricted','drawBoostIcons','floor','description','clear','___Window_ActorCommand_addGuardCommand___','___Game_Battler_removeBattleStates___','addUnboostCommand','members','Boost\x20Point\x20Analyze\x20Multipliers','addDebuff','applyBPTurns','meetsUseBPRequirement','item','___Game_BattlerBase_meetsUsableItemConditions___','BoostIcon','___Window_Selectable_cursorPageup___','max','bpRegenAdded','canBoostBP','convertBPRepeatEscape','currentSymbol','convertBP0Escape','meetsUsableItemConditions','loadSystem','Boost\x20Point\x20LR\x20Buttons','BP\x20Effect','BP_AnalyzeMultiply','SmallIcon','startAnimation','YEP_BattleEngineCore','filter','canUnboostBP','__Game_Action_applyItemUserEffect___','addGuardCommand','setHandler','Turn','actor','setBPSubject','___BattleManager_processTurn___','BP_MaxStored','resetStateCounts','BP_StartBattle','IconSet','applyBPRepeats','convertBPEqualEscape','EmptyIcon','onAllActionsEnd','Boost\x20Point\x20Small\x20Text\x20Align','___Window_Selectable_cursorPagedown___','note','BP_BPEffectAddition','UnboostShow','___Game_Battler_onAllActionsEnd___','Boost\x20Point\x20Turn\x20Multipliers','unboost','boost','Boost\x20Point\x20Start\x20Battle','Boost\x20Point\x20BP\x20Addition','_inBattle','gainUseBP','Animations','IconSize','ShowIcons','Boost\x20Point\x20Repeat\x20Addition','initialize','multiplierForBP','_turnUsedBP','___Game_Battler_regenerateTp___','_active','regenerateBp','convertBPTurnEscape','BoostPoint','setUseBP','SmallText','Analyze','Window_BattleStatus_drawBasicArea','minTurns','convertBPEscapeCharacters','BP_TurnRegen','BP_AnalyzeAddition','subject','commandBoost','playOkSound','Skill\x20','Boost\x20Point\x20Boost\x20Command','Boost\x20Point\x20Always\x20Regen','___Window_Base_convertEscapeCharacters___','enemy','fontSize','BP_DmgMultiply','maxTurns','gainStoredBP','addBuff','bpRegenMultipliers','___Game_Battler_addDebuff___','convertBPLessEqualEscape','_actor','_bpTurnFlat','startActorCommandSelection','refresh','regenerateTp','BP_AlwaysRegen','convertBPDamageEscape','LRButtons','bind','Boost\x20Point\x20Death\x20Removal','BP_BPEffectMultiply'];(function(_0x2ba0dc,_0x3ee7bb){var _0x58def1=function(_0x2b42c2){while(--_0x2b42c2){_0x2ba0dc['push'](_0x2ba0dc['shift']());}};_0x58def1(++_0x3ee7bb);}(_0x3ee7,0x11b));var _0x58de=function(_0x2ba0dc,_0x3ee7bb){_0x2ba0dc=_0x2ba0dc-0x0;var _0x58def1=_0x3ee7[_0x2ba0dc];return _0x58def1;};var Imported=Imported||{};Imported[_0x58de('0x32')]=!![];var Olivia=Olivia||{};Olivia['OctoBattle']=Olivia[_0x58de('0x12')]||{};var parameters=$plugins[_0x58de('0x6e')](function(_0x2c2e84){return _0x2c2e84[_0x58de('0x52')][_0x58de('0xc3')](_0x58de('0xc2'));})[0x0][_0x58de('0x13')];Olivia[_0x58de('0x12')][_0x58de('0x97')]={'Enabled':!![],'BP_StartBattle':Number(parameters[_0x58de('0x88')]||0x1),'BP_TurnRegen':Number(parameters[_0x58de('0xb')]||0x1),'BP_AlwaysRegen':eval(parameters[_0x58de('0xa5')]),'BP_MaxStored':Number(parameters[_0x58de('0x4c')]||0x5),'BP_MaxUse':Number(parameters[_0x58de('0xbd')]||0x3),'DeathRemoval':eval(parameters[_0x58de('0xb9')]||_0x58de('0xe')),'DeathRegen':eval(parameters['Boost\x20Point\x20Death\x20Regen']||_0x58de('0xa')),'BP_DmgMultiply':JSON[_0x58de('0xc8')](parameters[_0x58de('0x1d')]||'[\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22]'),'BP_DmgAddition':JSON[_0x58de('0xc8')](parameters['Boost\x20Point\x20Damage\x20Addition']||'[\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22]'),'BP_RepMultiply':JSON[_0x58de('0xc8')](parameters['Boost\x20Point\x20Repeat\x20Multipliers']||_0x58de('0x1a')),'BP_RepAddition':JSON['parse'](parameters[_0x58de('0x8f')]||_0x58de('0xdb')),'BP_TurnMultiply':JSON[_0x58de('0xc8')](parameters[_0x58de('0x85')]||_0x58de('0x1a')),'BP_TurnAddition':JSON[_0x58de('0xc8')](parameters[_0x58de('0xe9')]||_0x58de('0xdb')),'BP_AnalyzeMultiply':JSON[_0x58de('0xc8')](parameters[_0x58de('0x58')]||_0x58de('0x1a')),'BP_AnalyzeAddition':JSON[_0x58de('0xc8')](parameters[_0x58de('0x44')]||_0x58de('0xdb')),'BP_BPEffectMultiply':JSON[_0x58de('0xc8')](parameters['Boost\x20Point\x20BP\x20Effect\x20Multipliers']||_0x58de('0x1a')),'BP_BPEffectAddition':JSON[_0x58de('0xc8')](parameters[_0x58de('0x89')]||'[\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22]'),'Animations':JSON[_0x58de('0xc8')](parameters[_0x58de('0x2d')]),'ShowIcons':eval(parameters[_0x58de('0x18')]),'BoostIcon':Number(parameters['Boost\x20Point\x20Icon\x20Filled']||0xa0),'EmptyIcon':Number(parameters[_0x58de('0x30')]||0xa1),'SmallIcon':eval(parameters[_0x58de('0x3f')]),'IconSize':Number(parameters[_0x58de('0x40')]||0.5),'SmallText':String(parameters[_0x58de('0x29')]),'TextAlign':String(parameters[_0x58de('0x7f')]),'BoostCmd':String(parameters[_0x58de('0xa4')]),'BoostShow':eval(parameters[_0x58de('0x4a')]),'UnboostCmd':String(parameters[_0x58de('0xc7')]),'UnboostShow':eval(parameters[_0x58de('0x19')]),'LRButtons':eval(parameters[_0x58de('0x68')])};Olivia['OctoBattle']['BP']=Olivia[_0x58de('0x12')]['BP']||{};Olivia['OctoBattle']['BP'][_0x58de('0x39')]=BattleManager[_0x58de('0xd7')];BattleManager[_0x58de('0xd7')]=function(_0x2715ba,_0x57a765,_0x130978){Olivia[_0x58de('0x12')]['BP'][_0x58de('0x39')][_0x58de('0xd4')](this,_0x2715ba,_0x57a765,_0x130978);$gameParty[_0x58de('0xbc')]();$gameTroop['setupBattleBP']();};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x76')]=BattleManager[_0x58de('0xcc')];BattleManager['processTurn']=function(){this[_0x58de('0x43')]();Olivia['OctoBattle']['BP'][_0x58de('0x76')][_0x58de('0xd4')](this);};BattleManager[_0x58de('0x43')]=function(){var _0x1e77b2=this['_subject'];var _0x54e425=_0x1e77b2['currentAction']();if(!!_0x1e77b2&&_0x1e77b2[_0x58de('0xe0')]()&&!!_0x54e425&&_0x54e425[_0x58de('0xe2')]()&&_0x1e77b2[_0x58de('0xc9')]()>0x0&&!_0x1e77b2['isBoostSealed']()){_0x1e77b2[_0x58de('0x24')](_0x54e425[_0x58de('0x5c')]());}};Olivia[_0x58de('0x12')]['BP']['___Game_Action_numRepeats___']=Game_Action[_0x58de('0x9')][_0x58de('0xe7')];Game_Action[_0x58de('0x9')][_0x58de('0xe7')]=function(){var _0x3020eb=Olivia[_0x58de('0x12')]['BP']['___Game_Action_numRepeats___'][_0x58de('0xd4')](this);_0x3020eb=this[_0x58de('0x7b')](_0x3020eb);return Math[_0x58de('0xdc')](_0x3020eb);;};Game_Action[_0x58de('0x9')]['applyBPRepeats']=function(_0x442510){if(!!this[_0x58de('0xa0')]()&&this[_0x58de('0x5c')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) (?:Repeat|Repeats)>/i)){var _0x5559c9=this[_0x58de('0xa0')]()[_0x58de('0x34')]();var _0x58ddfd=this[_0x58de('0xa0')]()[_0x58de('0x91')](_0x58de('0xd'));_0x442510=Math[_0x58de('0xdc')](_0x442510*_0x58ddfd);_0x442510+=this[_0x58de('0xa0')]()[_0x58de('0xbb')](_0x58de('0xd'));}return _0x442510;};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x4e')]=Game_Action['prototype'][_0x58de('0xe8')];Game_Action['prototype'][_0x58de('0xe8')]=function(_0x13767a,_0x2471b4){_0x13767a=this[_0x58de('0x3b')](_0x13767a);return Olivia[_0x58de('0x12')]['BP'][_0x58de('0x4e')][_0x58de('0xd4')](this,_0x13767a,_0x2471b4);};Game_Action['prototype'][_0x58de('0x3b')]=function(_0xe6f4dc){if(!!this[_0x58de('0xa0')]()&&this[_0x58de('0x5c')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) (?:DMG|Damage)>/i)){var _0x1ecd0b=this[_0x58de('0xa0')]()[_0x58de('0x91')](_0x58de('0xc5'));_0xe6f4dc=Math[_0x58de('0xdc')](_0xe6f4dc*_0x1ecd0b);_0xe6f4dc+=this['subject']()[_0x58de('0xbb')](_0x58de('0xc5'));}return _0xe6f4dc;};Olivia['OctoBattle']['BP'][_0x58de('0x37')]=Game_Action[_0x58de('0x9')]['apply'];Game_Action[_0x58de('0x9')]['apply']=function(_0x5030ee){this[_0x58de('0x5a')](![]);Olivia[_0x58de('0x12')]['BP']['___Game_Action_apply___'][_0x58de('0xd4')](this,_0x5030ee);this[_0x58de('0x5a')](!![]);};Game_Action[_0x58de('0x9')][_0x58de('0x5a')]=function(_0x4a2b33){if(!!this[_0x58de('0xa0')]()&&this[_0x58de('0x5c')]()['note'][_0x58de('0x36')](/<(?:BP|Boost) (?:Turn|Turns)>/i)){var _0x46b438=this[_0x58de('0xa0')]()[_0x58de('0x91')](_0x58de('0x73'));$gameTemp[_0x58de('0xc0')]=_0x46b438;$gameTemp[_0x58de('0xb1')]=this[_0x58de('0xa0')]()[_0x58de('0xbb')](_0x58de('0x73'));}if(_0x4a2b33){$gameTemp[_0x58de('0xc0')]=undefined;$gameTemp[_0x58de('0xb1')]=undefined;}};Olivia[_0x58de('0x12')]['BP']['__Game_Action_applyItemUserEffect___']=Game_Action[_0x58de('0x9')][_0x58de('0xea')];Game_Action['prototype'][_0x58de('0xea')]=function(_0xba4600){Olivia['OctoBattle']['BP'][_0x58de('0x70')][_0x58de('0xd4')](this,_0xba4600);this[_0x58de('0xc6')](_0xba4600);};Game_Action['prototype'][_0x58de('0xc6')]=function(_0x5949b9){if(!!_0x5949b9&&this[_0x58de('0x5c')]()['note'][_0x58de('0x36')](/<Target (?:BP|Boost): ([\+\-]\d+)>/i)){var _0x460faa=parseInt(RegExp['$1']);if(this[_0x58de('0x5c')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) BP Effect>/i)){_0x460faa=Math[_0x58de('0xdc')](this[_0x58de('0xa0')]()[_0x58de('0x91')](_0x58de('0x69'))*_0x460faa);_0x460faa+=this[_0x58de('0xa0')]()['additionForBP'](_0x58de('0x69'));}_0x5949b9[_0x58de('0xab')](_0x460faa);}if(!!this[_0x58de('0xa0')]()&&this['item']()[_0x58de('0x81')][_0x58de('0x36')](/<User (?:BP|Boost): ([\+\-]\d+)>/i)){var _0x460faa=parseInt(RegExp['$1']);if(this[_0x58de('0x5c')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) BP Effect>/i)){_0x460faa=Math[_0x58de('0xdc')](this[_0x58de('0xa0')]()[_0x58de('0x91')](_0x58de('0x69'))*_0x460faa);_0x460faa+=this[_0x58de('0xa0')]()[_0x58de('0xbb')](_0x58de('0x69'));}this[_0x58de('0xa0')]()[_0x58de('0xab')](_0x460faa);}};Object[_0x58de('0x3c')](Game_BattlerBase[_0x58de('0x9')],{'bp':{'get':function(){return this[_0x58de('0x34')]();},'configurable':!![]}});Olivia[_0x58de('0x12')]['BP'][_0x58de('0x21')]=Game_BattlerBase[_0x58de('0x9')][_0x58de('0x90')];Game_BattlerBase[_0x58de('0x9')]['initialize']=function(){Olivia['OctoBattle']['BP'][_0x58de('0x21')][_0x58de('0xd4')](this);this[_0x58de('0x3')]();};Game_BattlerBase[_0x58de('0x9')][_0x58de('0x3')]=function(){this[_0x58de('0xf')]=this['_storedBP']||0x0;this[_0x58de('0x5')]=this['_useBP']||0x0;this[_0x58de('0x92')]=this[_0x58de('0x92')]||0x0;};Game_BattlerBase[_0x58de('0x9')][_0x58de('0xc9')]=function(){if(this[_0x58de('0xf')]===undefined){this['initializeBP']();}return this[_0x58de('0xf')];};Game_BattlerBase['prototype'][_0x58de('0xd5')]=function(_0x337ad3){if(this['_storedBP']===undefined){this[_0x58de('0x3')]();}this[_0x58de('0xf')]=_0x337ad3[_0x58de('0x48')](0x0,Olivia[_0x58de('0x12')]['BoostPoint'][_0x58de('0x77')]);this['refresh']();};Game_BattlerBase[_0x58de('0x9')]['useBP']=function(){if(this[_0x58de('0x5')]===undefined){this[_0x58de('0x3')]();}return this[_0x58de('0x5')];};Game_BattlerBase[_0x58de('0x9')]['setUseBP']=function(_0x4dac75){if(this[_0x58de('0x5')]===undefined){this[_0x58de('0x3')]();}this[_0x58de('0x5')]=_0x4dac75['clamp'](0x0,Olivia[_0x58de('0x12')][_0x58de('0x97')]['BP_MaxUse']);this[_0x58de('0xb3')]();};Game_BattlerBase[_0x58de('0x9')]['bpRegenValue']=function(){if(!Olivia['OctoBattle'][_0x58de('0x97')][_0x58de('0x2e')]&&(this[_0x58de('0x1c')]()||this['isHidden']())){return 0x0;}else{var _0x24b99f=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x9e')];_0x24b99f=this[_0x58de('0xad')](_0x24b99f);_0x24b99f=this[_0x58de('0x61')](_0x24b99f);return _0x24b99f;}};Game_BattlerBase[_0x58de('0x9')][_0x58de('0x22')]=function(){var _0x41ac34=this[_0x58de('0x4b')]();for(var _0x124c5b=0x0;_0x124c5b<_0x41ac34[_0x58de('0x2c')];_0x124c5b++){var _0xf8dcf9=_0x41ac34[_0x124c5b];if(!!_0xf8dcf9&&_0xf8dcf9[_0x58de('0x81')][_0x58de('0x36')](/<Boost (?:Seal|Sealed)>/i)){return!![];}}return![];};Olivia[_0x58de('0x12')]['BP']['___Game_BattlerBase_resetStateCounts']=Game_BattlerBase[_0x58de('0x9')]['resetStateCounts'];Game_BattlerBase['prototype'][_0x58de('0x78')]=function(_0x3c233e){var _0x3eef1f=this['_stateTurns'][_0x3c233e]||0x0;Olivia[_0x58de('0x12')]['BP'][_0x58de('0xd3')][_0x58de('0xd4')](this,_0x3c233e);if(!!$gameTemp[_0x58de('0xc0')]){$gameTemp['_bpTurnFlat']=$gameTemp[_0x58de('0xb1')]||0x0;var _0x5dff30=$dataStates[_0x3c233e];var _0x532ac6=Math[_0x58de('0xdc')](_0x5dff30[_0x58de('0xaa')]*$gameTemp[_0x58de('0xc0')])+$gameTemp[_0x58de('0xb1')];var _0x4222c8=Math[_0x58de('0xdc')](_0x5dff30[_0x58de('0x9c')]*$gameTemp[_0x58de('0xc0')])+$gameTemp['_bpTurnFlat'];var _0x15e6d7=0x1+Math[_0x58de('0x60')](_0x532ac6-_0x4222c8,0x0);if(Imported['YEP_BuffsStatesCore']){if(_0x5dff30[_0x58de('0xc')]===0x1){this['_stateTurns'][_0x3c233e]=_0x4222c8+Math['randomInt'](_0x15e6d7);}else if(_0x5dff30[_0x58de('0xc')]===0x2){this[_0x58de('0xdd')][_0x3c233e]=_0x4222c8+Math['randomInt'](_0x15e6d7)+_0x3eef1f;}}else{this[_0x58de('0xdd')][_0x3c233e]=_0x4222c8+Math[_0x58de('0x4')](_0x15e6d7);}}};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x5d')]=Game_BattlerBase[_0x58de('0x9')][_0x58de('0x66')];Game_BattlerBase[_0x58de('0x9')][_0x58de('0x66')]=function(_0x449ada){if(Olivia[_0x58de('0x12')]['BP'][_0x58de('0x5d')][_0x58de('0xd4')](this,_0x449ada)){return this[_0x58de('0x5b')](_0x449ada);}else{return![];}};Game_BattlerBase[_0x58de('0x9')][_0x58de('0x5b')]=function(_0x229282){var _0x41f6ba=_0x229282['note'];if(_0x41f6ba[_0x58de('0x36')](/<Require (\d+) BP>/i)||_0x41f6ba[_0x58de('0x36')](/<Require >= (\d+) BP>/i)){var _0xa030ad=parseInt(RegExp['$1']);if(this[_0x58de('0xe6')]()){return this['bp']>=_0xa030ad;}else{return this['storedBP']()>=_0xa030ad;}}else if(_0x229282[_0x58de('0x81')][_0x58de('0x36')](/<Require > (\d+) BP>/i)){var _0xa030ad=parseInt(RegExp['$1']);if(this[_0x58de('0xe6')]()){return this['bp']>_0xa030ad;}else{return this['storedBP']()>_0xa030ad;}}else if(_0x229282[_0x58de('0x81')][_0x58de('0x36')](/<Require = (\d+) BP>/i)){var _0xa030ad=parseInt(RegExp['$1']);if(this[_0x58de('0xe6')]()){return this['bp']===_0xa030ad;}else{return this[_0x58de('0xc9')]()===_0xa030ad;}}else if(_0x229282[_0x58de('0x81')][_0x58de('0x36')](/<Require < (\d+) BP>/i)){var _0xa030ad=parseInt(RegExp['$1']);if(this[_0x58de('0xe6')]()){return this['bp']<_0xa030ad;}else{return this[_0x58de('0xc9')]()<_0xa030ad;}}else if(_0x229282[_0x58de('0x81')]['match'](/<Require <= (\d+) BP>/i)){var _0xa030ad=parseInt(RegExp['$1']);if(this[_0x58de('0xe6')]()){return this['bp']<=_0xa030ad;}else{return this[_0x58de('0xc9')]()<=_0xa030ad;}}else{return!![];}};Game_Battler[_0x58de('0x9')][_0x58de('0xab')]=function(_0x48d15e){this[_0x58de('0xd5')](this[_0x58de('0xc9')]()+_0x48d15e);};Game_Battler[_0x58de('0x9')]['gainUseBP']=function(_0x423682){this[_0x58de('0x98')](this[_0x58de('0x34')]()+_0x423682);};Game_Battler[_0x58de('0x9')][_0x58de('0x91')]=function(_0x55a83e){if(_0x55a83e[_0x58de('0x36')](/Damage/i)){var _0x517e4e=Olivia['OctoBattle'][_0x58de('0x97')][_0x58de('0xa9')];}else if(_0x55a83e[_0x58de('0x36')](/Turn/i)){var _0x517e4e=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x2a')];}else if(_0x55a83e[_0x58de('0x36')](/Repeat/i)){var _0x517e4e=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x4d')];}else if(_0x55a83e[_0x58de('0x36')](/Analyze/i)){var _0x517e4e=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x6a')];}else if(_0x55a83e[_0x58de('0x36')](/BP Effect/i)){var _0x517e4e=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0xba')];}else{return this['useBP']();}var _0x3943b4=this[_0x58de('0x34')]();return _0x517e4e[_0x3943b4]||_0x517e4e[0x0];};Game_Battler[_0x58de('0x9')][_0x58de('0xbb')]=function(_0x3bd961){if(_0x3bd961[_0x58de('0x36')](/Damage/i)){var _0x44f231=Olivia[_0x58de('0x12')][_0x58de('0x97')]['BP_DmgAddition'];}else if(_0x3bd961[_0x58de('0x36')](/Turn/i)){var _0x44f231=Olivia['OctoBattle'][_0x58de('0x97')][_0x58de('0xd9')];}else if(_0x3bd961['match'](/Repeat/i)){var _0x44f231=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x2f')];}else if(_0x3bd961[_0x58de('0x36')](/Analyze/i)){var _0x44f231=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x9f')];}else if(_0x3bd961[_0x58de('0x36')](/BP Effect/i)){var _0x44f231=Olivia['OctoBattle']['BoostPoint'][_0x58de('0x82')];}else{return this[_0x58de('0x34')]();}var _0x15a144=this[_0x58de('0x34')]();return parseInt(_0x44f231[_0x15a144]||_0x44f231[0x0]);};Game_Battler[_0x58de('0x9')][_0x58de('0xbc')]=function(){var _0x442584=Olivia['OctoBattle'][_0x58de('0x97')][_0x58de('0x79')];_0x442584=this[_0x58de('0xe1')](_0x442584);_0x442584=this[_0x58de('0xe4')](_0x442584);this['setStoredBP'](_0x442584);};Game_Battler[_0x58de('0x9')]['setupBattleBPMultiplier']=function(_0x48b300){var _0x2c9810=this[_0x58de('0x4b')]();for(var _0x47308c=0x0;_0x47308c<_0x2c9810[_0x58de('0x2c')];_0x47308c++){var _0x3cb2d2=_0x2c9810[_0x47308c];if(!!_0x3cb2d2){if(_0x3cb2d2['note'][_0x58de('0x36')](/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)){_0x48b300*=parseFloat(RegExp['$1'])*0.01;}}}return _0x48b300;};Game_Battler[_0x58de('0x9')][_0x58de('0xe4')]=function(_0x496276){var _0x28cc5a=this[_0x58de('0x4b')]();for(var _0x1f33e8=0x0;_0x1f33e8<_0x28cc5a[_0x58de('0x2c')];_0x1f33e8++){var _0x137953=_0x28cc5a[_0x1f33e8];if(!!_0x137953){if(_0x137953[_0x58de('0x81')]['match'](/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)){_0x496276+=parseInt(RegExp['$1']);}}}return _0x496276;};Game_Battler['prototype'][_0x58de('0x1b')]=function(){var _0x90b0a=this[_0x58de('0x34')]()[_0x58de('0x48')](0x0,Olivia[_0x58de('0x12')]['BoostPoint'][_0x58de('0x28')]);var _0x5dd9cb=Number(Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x8c')][_0x90b0a]||Olivia['OctoBattle']['BoostPoint'][_0x58de('0x8c')][0x0]);if(_0x5dd9cb>0x0){this[_0x58de('0x6c')](_0x5dd9cb);}};Game_Battler[_0x58de('0x9')][_0x58de('0x62')]=function(){if(this[_0x58de('0x22')]()){return![];}return this['bp']<Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x28')]&&this[_0x58de('0xc9')]()>0x0;};Game_Battler[_0x58de('0x9')][_0x58de('0x6f')]=function(){return this['bp']>0x0;};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x55')]=Game_Battler[_0x58de('0x9')][_0x58de('0x46')];Game_Battler[_0x58de('0x9')][_0x58de('0x46')]=function(){Olivia[_0x58de('0x12')]['BP'][_0x58de('0x55')][_0x58de('0xd4')](this);this['_storedBP']=0x0;this[_0x58de('0x5')]=0x0;};Olivia[_0x58de('0x12')]['BP']['___Game_Battler_regenerateTp___']=Game_Battler['prototype'][_0x58de('0xb4')];Game_Battler['prototype'][_0x58de('0xb4')]=function(){Olivia[_0x58de('0x12')]['BP'][_0x58de('0x93')][_0x58de('0xd4')](this);this['regenerateBp']();};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x41')]=Game_Battler['prototype'][_0x58de('0x49')];Game_Battler[_0x58de('0x9')]['regenerateAll']=function(){Olivia[_0x58de('0x12')]['BP'][_0x58de('0x41')][_0x58de('0xd4')](this);if(Olivia[_0x58de('0x12')]['BoostPoint'][_0x58de('0x2e')]&&this['isDead']()){this[_0x58de('0x95')]();}};Game_Battler[_0x58de('0x9')]['regenerateBp']=function(){if(Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0xb5')]||this['_turnUsedBP']<=0x0){this[_0x58de('0xab')](this[_0x58de('0x26')]());}this[_0x58de('0x92')]=0x0;};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x84')]=Game_Battler['prototype']['onAllActionsEnd'];Game_Battler[_0x58de('0x9')][_0x58de('0x7e')]=function(){Olivia[_0x58de('0x12')]['BP'][_0x58de('0x84')][_0x58de('0xd4')](this);this['_turnUsedBP']+=this[_0x58de('0x34')]();this[_0x58de('0x98')](0x0);};Game_Battler[_0x58de('0x9')][_0x58de('0xad')]=function(_0x2db158){var _0x3ceb41=this[_0x58de('0x4b')]();for(var _0x12a464=0x0;_0x12a464<_0x3ceb41[_0x58de('0x2c')];_0x12a464++){var _0x445586=_0x3ceb41[_0x12a464];if(!!_0x445586){if(_0x445586[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Regen: (\d+)([%％])>/i)){_0x2db158*=parseFloat(RegExp['$1'])*0.01;}}}return _0x2db158;};Game_Battler[_0x58de('0x9')][_0x58de('0x61')]=function(_0x6909be){var _0x14d1d3=this[_0x58de('0x4b')]();for(var _0x50b305=0x0;_0x50b305<_0x14d1d3[_0x58de('0x2c')];_0x50b305++){var _0xbe4b0d=_0x14d1d3[_0x50b305];if(!!_0xbe4b0d){if(_0xbe4b0d['note'][_0x58de('0x36')](/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)){_0x6909be+=parseInt(RegExp['$1']);}}}return _0x6909be;};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x11')]=Game_Battler[_0x58de('0x9')][_0x58de('0x31')];Game_Battler['prototype'][_0x58de('0x31')]=function(_0x12df03){var _0x40c60d=this[_0x58de('0x1c')]();Olivia[_0x58de('0x12')]['BP'][_0x58de('0x11')][_0x58de('0xd4')](this,_0x12df03);if(Olivia[_0x58de('0x12')][_0x58de('0x97')]['DeathRemoval']&&!_0x40c60d&&this[_0x58de('0x1c')]()){this[_0x58de('0xd5')](0x0);}};Olivia[_0x58de('0x12')]['BP']['___Game_Battler_addBuff___']=Game_Battler[_0x58de('0x9')][_0x58de('0xac')];Game_Battler[_0x58de('0x9')][_0x58de('0xac')]=function(_0x151b83,_0x1a4d55){if(!!$gameTemp[_0x58de('0xc0')]){$gameTemp[_0x58de('0xb1')]=$gameTemp[_0x58de('0xb1')]||0x0;_0x1a4d55=Math['round']($gameTemp[_0x58de('0xc0')]*_0x1a4d55)+$gameTemp[_0x58de('0xb1')];}Olivia[_0x58de('0x12')]['BP'][_0x58de('0xcd')][_0x58de('0xd4')](this,_0x151b83,_0x1a4d55);};Olivia[_0x58de('0x12')]['BP'][_0x58de('0xae')]=Game_Battler[_0x58de('0x9')][_0x58de('0x59')];Game_Battler['prototype']['addDebuff']=function(_0x48431a,_0xeb494c){if(!!$gameTemp[_0x58de('0xc0')]){$gameTemp[_0x58de('0xb1')]=$gameTemp[_0x58de('0xb1')]||0x0;_0xeb494c=Math[_0x58de('0xdc')]($gameTemp[_0x58de('0xc0')]*_0xeb494c)+$gameTemp['_bpTurnFlat'];}Olivia[_0x58de('0x12')]['BP'][_0x58de('0xae')][_0x58de('0xd4')](this,_0x48431a,_0xeb494c);};Game_Actor[_0x58de('0x9')][_0x58de('0xe1')]=function(_0x58639a){_0x58639a=Game_Battler[_0x58de('0x9')][_0x58de('0xe1')]['call'](this,_0x58639a);var _0x42f9e8=this[_0x58de('0x1')]();for(var _0x14ad2d=0x0;_0x14ad2d<_0x42f9e8[_0x58de('0x2c')];_0x14ad2d++){var _0x56b550=_0x42f9e8[_0x14ad2d];if(!!_0x56b550){if(_0x56b550[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)){_0x58639a*=parseFloat(RegExp['$1'])*0.01;}}}if(!!this['actor']()&&this[_0x58de('0x74')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)){_0x58639a*=parseFloat(RegExp['$1'])*0.01;}if(!!this[_0x58de('0x27')]()&&this[_0x58de('0x27')]()['note'][_0x58de('0x36')](/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)){_0x58639a*=parseFloat(RegExp['$1'])*0.01;}return _0x58639a;};Game_Actor[_0x58de('0x9')]['setupBattleBPAdded']=function(_0x5460c){_0x5460c=Game_Battler[_0x58de('0x9')][_0x58de('0xe4')][_0x58de('0xd4')](this,_0x5460c);var _0xefaa7d=this[_0x58de('0x1')]();for(var _0x183e94=0x0;_0x183e94<_0xefaa7d[_0x58de('0x2c')];_0x183e94++){var _0x1f73d5=_0xefaa7d[_0x183e94];if(!!_0x1f73d5){if(_0x1f73d5[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)){_0x5460c+=parseInt(RegExp['$1']);}}}if(!!this[_0x58de('0x74')]()&&this['actor']()['note'][_0x58de('0x36')](/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)){_0x5460c+=parseInt(RegExp['$1']);}if(!!this[_0x58de('0x27')]()&&this[_0x58de('0x27')]()[_0x58de('0x81')]['match'](/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)){_0x5460c+=parseInt(RegExp['$1']);}return _0x5460c;};Game_Actor[_0x58de('0x9')][_0x58de('0xad')]=function(_0x1badb5){_0x1badb5=Game_Battler['prototype']['bpRegenMultipliers'][_0x58de('0xd4')](this,_0x1badb5);var _0x31565c=this['equips']();for(var _0x392f1a=0x0;_0x392f1a<_0x31565c[_0x58de('0x2c')];_0x392f1a++){var _0x81b88b=_0x31565c[_0x392f1a];if(!!_0x81b88b){if(_0x81b88b[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Regen: (\d+)([%％])>/i)){_0x1badb5*=parseFloat(RegExp['$1'])*0.01;}}}if(!!this[_0x58de('0x74')]()&&this[_0x58de('0x74')]()['note'][_0x58de('0x36')](/<(?:BP|Boost) Regen: (\d+)([%％])>/i)){_0x1badb5*=parseFloat(RegExp['$1'])*0.01;}if(!!this['currentClass']()&&this[_0x58de('0x27')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Regen: (\d+)([%％])>/i)){_0x1badb5*=parseFloat(RegExp['$1'])*0.01;}return _0x1badb5;};Game_Actor[_0x58de('0x9')][_0x58de('0x61')]=function(_0x4763e4){_0x4763e4=Game_Battler['prototype'][_0x58de('0x61')][_0x58de('0xd4')](this,_0x4763e4);var _0x96a0ff=this[_0x58de('0x1')]();for(var _0x4ba5eb=0x0;_0x4ba5eb<_0x96a0ff['length'];_0x4ba5eb++){var _0x36fcfa=_0x96a0ff[_0x4ba5eb];if(!!_0x36fcfa){if(_0x36fcfa[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)){_0x4763e4+=parseInt(RegExp['$1']);}}}if(!!this[_0x58de('0x74')]()&&this[_0x58de('0x74')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)){_0x4763e4+=parseInt(RegExp['$1']);}if(!!this[_0x58de('0x27')]()&&this[_0x58de('0x27')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)){_0x4763e4+=parseInt(RegExp['$1']);}return _0x4763e4;};Game_Enemy[_0x58de('0x9')][_0x58de('0xe1')]=function(_0x3fa701){_0x3fa701=Game_Battler[_0x58de('0x9')][_0x58de('0xe1')][_0x58de('0xd4')](this,_0x3fa701);if(!!this[_0x58de('0xa7')]()&&this[_0x58de('0xa7')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)){_0x3fa701*=parseFloat(RegExp['$1'])*0.01;}return _0x3fa701;};Game_Enemy[_0x58de('0x9')][_0x58de('0xe4')]=function(_0x3dbdf8){_0x3dbdf8=Game_Battler[_0x58de('0x9')][_0x58de('0xe4')][_0x58de('0xd4')](this,_0x3dbdf8);if(!!this[_0x58de('0xa7')]()&&this[_0x58de('0xa7')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)){_0x3dbdf8+=parseInt(RegExp['$1']);}return _0x3dbdf8;};Game_Enemy[_0x58de('0x9')][_0x58de('0xad')]=function(_0x29d78e){_0x29d78e=Game_Battler[_0x58de('0x9')][_0x58de('0xad')][_0x58de('0xd4')](this,_0x29d78e);if(!!this[_0x58de('0xa7')]()&&this[_0x58de('0xa7')]()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Regen: (\d+)([%％])>/i)){_0x29d78e*=parseFloat(RegExp['$1'])*0.01;}return _0x29d78e;};Game_Enemy[_0x58de('0x9')][_0x58de('0x61')]=function(_0x557231){_0x557231=Game_Battler[_0x58de('0x9')][_0x58de('0x61')][_0x58de('0xd4')](this,_0x557231);if(!!this['enemy']()&&this['enemy']()[_0x58de('0x81')][_0x58de('0x36')](/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)){_0x557231+=parseInt(RegExp['$1']);}return _0x557231;};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x1f')]=Game_Enemy[_0x58de('0x9')][_0x58de('0xd7')];Game_Enemy[_0x58de('0x9')][_0x58de('0xd7')]=function(_0x1ac4eb,_0x29a6d6,_0x4b58ea){Olivia['OctoBattle']['BP'][_0x58de('0x1f')][_0x58de('0xd4')](this,_0x1ac4eb,_0x29a6d6,_0x4b58ea);this[_0x58de('0xbf')]();};Game_Enemy['prototype']['setupBoostAI']=function(){if(this[_0x58de('0xa7')]()[_0x58de('0x6')]===undefined){this[_0x58de('0xa7')]()[_0x58de('0x6')]={};var _0x1f67a9=this[_0x58de('0xa7')]()[_0x58de('0x81')]['split'](/[\r\n]+/);for(var _0x3d4958=0x0;_0x3d4958<_0x1f67a9[_0x58de('0x2c')];_0x3d4958++){var _0x430373=_0x1f67a9[_0x3d4958];if(_0x430373[_0x58de('0x36')](/<Boost Skill (\d+):[ ](.*)>/i)){var _0x13b96d=_0x58de('0xa3')+parseInt(RegExp['$1']);var _0x49742a=String(RegExp['$2'])[_0x58de('0xcf')]();this[_0x58de('0xa7')]()[_0x58de('0x6')][_0x13b96d]=_0x49742a;}else if(_0x430373[_0x58de('0x36')](/<Boost[ ](.*):[ ](.*)>/i)){var _0x30d64c=String(RegExp['$1']);var _0x49742a=String(RegExp['$2'])[_0x58de('0xcf')]();this[_0x58de('0xa7')]()[_0x58de('0x6')][_0x30d64c]=_0x49742a;}}}};Game_Enemy[_0x58de('0x9')][_0x58de('0x24')]=function(_0x1044c8){this[_0x58de('0xbf')]();var _0x443112=this[_0x58de('0xc1')](_0x1044c8);if(_0x443112>0x0){this[_0x58de('0x0')](_0x443112);this['startChangeBPAnimation']();}};Game_Enemy['prototype']['calculateBPtoUse']=function(_0x2335c1){if(this[_0x58de('0xc9')]()<=0x0){return 0x0;}var _0x2124d9=_0x2335c1['name'];var _0xe6646c=_0x58de('0xa3')+_0x2335c1['id'];var _0x2827b7=0x0;if(this[_0x58de('0xa7')]()[_0x58de('0x6')][_0x2124d9]||this[_0x58de('0xa7')]()['_boostAI'][_0xe6646c]){var _0x311d6f=this[_0x58de('0xa7')]()[_0x58de('0x6')][_0x2124d9]||this[_0x58de('0xa7')]()[_0x58de('0x6')][_0xe6646c];if(_0x311d6f[_0x58de('0x36')](/(?:All|Full)/i)){_0x2827b7=this[_0x58de('0xc9')]();}else if(_0x311d6f['match'](/at least (\d+)/i)){var _0x39195b=parseInt(RegExp['$1']);if(this[_0x58de('0xc9')]()>=_0x39195b){_0x2827b7=this[_0x58de('0xc9')]();}}else if(_0x311d6f[_0x58de('0x36')](/at most (\d+)/i)){var _0x39195b=parseInt(RegExp['$1']);if(this['storedBP']()<=_0x39195b){_0x2827b7=this[_0x58de('0xc9')]();}}else if(_0x311d6f[_0x58de('0x36')](/exactly (\d+)/i)){var _0x39195b=parseInt(RegExp['$1']);if(this[_0x58de('0xc9')]()===_0x39195b){_0x2827b7=_0x39195b;}}}return _0x2827b7[_0x58de('0x48')](0x0,Olivia[_0x58de('0x12')]['BoostPoint'][_0x58de('0x28')]);};Game_Enemy[_0x58de('0x9')][_0x58de('0x0')]=function(_0x272c7e){_0x272c7e=_0x272c7e[_0x58de('0x48')](0x0,this[_0x58de('0xc9')]());_0x272c7e=_0x272c7e[_0x58de('0x48')](0x0,Olivia[_0x58de('0x12')]['BoostPoint'][_0x58de('0x28')]);this['gainStoredBP'](-_0x272c7e);this[_0x58de('0x8b')](_0x272c7e);};Game_Enemy[_0x58de('0x9')][_0x58de('0x1b')]=function(){var _0x1ff5c9=0x0;var _0x39c07d=this[_0x58de('0x34')]()[_0x58de('0x48')](0x0,Olivia['OctoBattle'][_0x58de('0x97')][_0x58de('0x28')]);for(var _0x322014=0x1;_0x322014<=_0x39c07d;_0x322014++){var _0x299d4b=Olivia['OctoBattle'][_0x58de('0x97')][_0x58de('0x8c')][_0x322014]||Olivia['OctoBattle']['BoostPoint'][_0x58de('0x8c')][0x0];if(_0x299d4b>0x0){this['startAnimation'](_0x299d4b,![],_0x1ff5c9);}_0x1ff5c9+=0x3c;}_0x1ff5c9=Math[_0x58de('0xdc')](_0x1ff5c9);if(Imported[_0x58de('0x6d')]){BattleManager[_0x58de('0x23')](_0x1ff5c9);}else{SceneManager[_0x58de('0x1e')][_0x58de('0xd1')][_0x58de('0x14')]=_0x1ff5c9;}};Game_Unit[_0x58de('0x9')]['setupBattleBP']=function(){var _0x3c9f58=this['_inBattle'];this[_0x58de('0x8a')]=![];var _0x741391=this[_0x58de('0x57')]();for(var _0xe168f1=0x0;_0xe168f1<_0x741391[_0x58de('0x2c')];_0xe168f1++){var _0x5b35d9=_0x741391[_0xe168f1];if(_0x5b35d9){_0x5b35d9[_0x58de('0xbc')]();}}this[_0x58de('0x8a')]=_0x3c9f58;};Olivia['OctoBattle']['BP'][_0x58de('0xde')]=Scene_Battle[_0x58de('0x9')][_0x58de('0x42')];Scene_Battle['prototype'][_0x58de('0x42')]=function(){Olivia[_0x58de('0x12')]['BP'][_0x58de('0xde')][_0x58de('0xd4')](this);this[_0x58de('0x20')]['setHandler'](_0x58de('0x87'),this[_0x58de('0xa1')][_0x58de('0xb8')](this));this[_0x58de('0x20')][_0x58de('0x72')](_0x58de('0x86'),this[_0x58de('0x3e')]['bind'](this));};Scene_Battle[_0x58de('0x9')]['commandBoost']=function(){BattleManager[_0x58de('0x74')]()[_0x58de('0xab')](-0x1);BattleManager[_0x58de('0x74')]()[_0x58de('0x8b')](0x1);BattleManager[_0x58de('0x74')]()[_0x58de('0x1b')]();this[_0x58de('0xca')][_0x58de('0xb3')]();this[_0x58de('0x20')][_0x58de('0x94')]=!![];this[_0x58de('0x20')][_0x58de('0xb3')]();if(this[_0x58de('0x10')]){this[_0x58de('0x10')][_0x58de('0xb3')]();}};Scene_Battle[_0x58de('0x9')][_0x58de('0x3e')]=function(){BattleManager[_0x58de('0x74')]()['gainUseBP'](-0x1);BattleManager[_0x58de('0x74')]()[_0x58de('0xab')](0x1);BattleManager['actor']()['startChangeBPAnimation']();this['_helpWindow'][_0x58de('0xb3')]();this[_0x58de('0x20')][_0x58de('0x94')]=!![];this[_0x58de('0x20')][_0x58de('0xb3')]();if(this[_0x58de('0x10')]){this[_0x58de('0x10')][_0x58de('0xb3')]();}};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x25')]=Scene_Battle['prototype'][_0x58de('0x16')];Scene_Battle[_0x58de('0x9')][_0x58de('0x16')]=function(){this[_0x58de('0xca')]['clearBPSubject']();Olivia[_0x58de('0x12')]['BP'][_0x58de('0x25')]['call'](this);};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x2b')]=Scene_Battle[_0x58de('0x9')][_0x58de('0xb2')];Scene_Battle[_0x58de('0x9')][_0x58de('0xb2')]=function(){Olivia[_0x58de('0x12')]['BP'][_0x58de('0x2b')][_0x58de('0xd4')](this);this[_0x58de('0xca')][_0x58de('0x75')](BattleManager[_0x58de('0x74')]());};Window_Base[_0x58de('0x9')][_0x58de('0x50')]=function(_0xa137cf,_0x9912bd,_0x597ac3){var _0x587c65=_0xa137cf['storedBP']();var _0x771777=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x77')]-_0x587c65;var _0x2f6021=Window_Base[_0x58de('0xbe')];if(Olivia['OctoBattle']['BoostPoint'][_0x58de('0x6b')]){var _0x565efa=_0x9912bd;_0x2f6021=Math['round'](_0x2f6021*Olivia['OctoBattle'][_0x58de('0x97')][_0x58de('0x8d')]);}while(_0x587c65>0x0){_0x587c65--;if(Olivia[_0x58de('0x12')]['BoostPoint']['SmallIcon']){this[_0x58de('0xd8')](Olivia[_0x58de('0x12')]['BoostPoint'][_0x58de('0x5e')],_0x9912bd,_0x597ac3);}else{this['drawIcon'](Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x5e')],_0x9912bd,_0x597ac3);}_0x9912bd+=_0x2f6021;}while(_0x771777>0x0){_0x771777--;if(Olivia[_0x58de('0x12')]['BoostPoint']['SmallIcon']){this['drawSmallBoostIcon'](Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x7d')],_0x9912bd,_0x597ac3);}else{this[_0x58de('0x2')](Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x7d')],_0x9912bd,_0x597ac3);}_0x9912bd+=_0x2f6021;}if(Olivia[_0x58de('0x12')][_0x58de('0x97')]['SmallIcon']){var _0x494cd7=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x99')];var _0x4c8cd1=Olivia['OctoBattle']['BoostPoint'][_0x58de('0x38')];var _0x41b857=this['lineHeight']()-0x4-_0x2f6021;var _0x5cdd20=_0x9912bd-_0x565efa;_0x597ac3+=_0x41b857;this[_0x58de('0xcb')][_0x58de('0xa8')]*=0x1-Olivia[_0x58de('0x12')]['BoostPoint'][_0x58de('0x8d')];this[_0x58de('0xcb')][_0x58de('0x3d')](_0x494cd7,_0x565efa,_0x597ac3,_0x5cdd20,_0x41b857,_0x4c8cd1);}this['resetFontSettings']();return _0x9912bd;};Window_Base['prototype'][_0x58de('0xd8')]=function(_0x375d21,_0x33388e,_0x3a2fb2){var _0x4c1994=ImageManager[_0x58de('0x67')](_0x58de('0x7a'));var _0x53681f=Window_Base[_0x58de('0xbe')];var _0x695219=Window_Base['_iconHeight'];var _0x53569a=_0x375d21%0x10*_0x53681f;var _0x211d83=Math[_0x58de('0x51')](_0x375d21/0x10)*_0x695219;var _0x5a3043=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0x8d')];this[_0x58de('0xcb')]['blt'](_0x4c1994,_0x53569a,_0x211d83,_0x53681f,_0x695219,_0x33388e,_0x3a2fb2,Math[_0x58de('0xdc')](_0x53681f*_0x5a3043),Math[_0x58de('0xdc')](_0x695219*_0x5a3043));};Window_Base[_0x58de('0x9')][_0x58de('0x75')]=function(_0x34ac6b){this['_bpSubject']=_0x34ac6b;};Window_Base['prototype'][_0x58de('0x7')]=function(){this[_0x58de('0x8')]=undefined;};Olivia[_0x58de('0x12')]['BP'][_0x58de('0xa6')]=Window_Base[_0x58de('0x9')][_0x58de('0x35')];Window_Base['prototype'][_0x58de('0x35')]=function(_0x5c524d){_0x5c524d=Olivia[_0x58de('0x12')]['BP'][_0x58de('0xa6')][_0x58de('0xd4')](this,_0x5c524d);_0x5c524d=this[_0x58de('0x9d')](_0x5c524d);return _0x5c524d;};Window_Base[_0x58de('0x9')]['convertBPEscapeCharacters']=function(_0x3d603c){_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBPDMG\[(\d+)\]/gi,function(){return this[_0x58de('0xb6')](parseInt(arguments[0x1]));}[_0x58de('0xb8')](this));_0x3d603c=_0x3d603c['replace'](/\x1bBPDAMAGE\[(\d+)\]/gi,function(){return this[_0x58de('0xb6')](parseInt(arguments[0x1]));}['bind'](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBPTURN\[(\d+)\]/gi,function(){return this[_0x58de('0x96')](parseInt(arguments[0x1]));}[_0x58de('0xb8')](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBPREP\[(\d+)\]/gi,function(){return this[_0x58de('0x63')](parseInt(arguments[0x1]));}[_0x58de('0xb8')](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBPREPEAT\[(\d+)\]/gi,function(){return this[_0x58de('0x63')](parseInt(arguments[0x1]));}[_0x58de('0xb8')](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBPHITS\[(\d+)\]/gi,function(){return this['convertBPRepeatEscape'](parseInt(arguments[0x1]));}['bind'](this));_0x3d603c=_0x3d603c['replace'](/\x1bBPANALYZE\[(\d+)\]/gi,function(){return this[_0x58de('0xd2')](parseInt(arguments[0x1]));}[_0x58de('0xb8')](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBPEFFECT\[(\d+)\]/gi,function(){return this[_0x58de('0xce')](parseInt(arguments[0x1]));}['bind'](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBP\[(.*?)\]/gi,function(){return this[_0x58de('0x3a')](String(arguments[0x1]));}[_0x58de('0xb8')](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBP0\[(.*?)\]/gi,function(){return this['convertBP0Escape'](String(arguments[0x1]));}[_0x58de('0xb8')](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBP=(\d+)\[(.*?)\]/gi,function(){return this[_0x58de('0x7c')](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x58de('0xb8')](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBP=(\d+)\[(.*?)\]/gi,function(){return this[_0x58de('0x7c')](parseInt(arguments[0x1]),String(arguments[0x2]));}['bind'](this));_0x3d603c=_0x3d603c['replace'](/\x1bBP\<=(\d+)\[(.*?)\]/gi,function(){return this[_0x58de('0xaf')](parseInt(arguments[0x1]),String(arguments[0x2]));}['bind'](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBP\<(\d+)\[(.*?)\]/gi,function(){return this[_0x58de('0x15')](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x58de('0xb8')](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBP\>=(\d+)\[(.*?)\]/gi,function(){return this[_0x58de('0x47')](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x58de('0xb8')](this));_0x3d603c=_0x3d603c[_0x58de('0xd6')](/\x1bBP\>(\d+)\[(.*?)\]/gi,function(){return this[_0x58de('0xda')](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x58de('0xb8')](this));return _0x3d603c;};Window_Base[_0x58de('0x9')][_0x58de('0xb6')]=function(_0x5b818b){if(!!this[_0x58de('0x8')]){var _0x4cd3cd=this['_bpSubject']['multiplierForBP'](_0x58de('0xc5'));_0x5b818b=Math['round'](_0x5b818b*_0x4cd3cd);_0x5b818b+=this['_bpSubject'][_0x58de('0xbb')]('Damage');}return _0x5b818b;};Window_Base[_0x58de('0x9')]['convertBPTurnEscape']=function(_0x43d395){if(!!this['_bpSubject']){var _0xd27923=this[_0x58de('0x8')][_0x58de('0x91')](_0x58de('0x73'));_0x43d395=Math[_0x58de('0xdc')](_0x43d395*_0xd27923);_0x43d395+=this[_0x58de('0x8')][_0x58de('0xbb')](_0x58de('0x73'));}return _0x43d395;};Window_Base[_0x58de('0x9')][_0x58de('0x63')]=function(_0x3b86fb){if(!!this[_0x58de('0x8')]){var _0xfa6c0f=this[_0x58de('0x8')][_0x58de('0x91')](_0x58de('0xd'));_0x3b86fb=Math[_0x58de('0xdc')](_0x3b86fb*_0xfa6c0f);_0x3b86fb+=this[_0x58de('0x8')][_0x58de('0xbb')]('Repeat');}return _0x3b86fb;};Window_Base[_0x58de('0x9')][_0x58de('0xd2')]=function(_0x591508){if(!!this[_0x58de('0x8')]){var _0x1eed45=this[_0x58de('0x8')]['multiplierForBP'](_0x58de('0x9a'));_0x591508=Math[_0x58de('0xdc')](_0x591508*_0x1eed45);_0x591508+=this[_0x58de('0x8')]['additionForBP'](_0x58de('0x9a'));}return _0x591508;};Window_Base['prototype'][_0x58de('0xce')]=function(_0xf9c277){if(!!this[_0x58de('0x8')]){var _0x2dcc9b=this['_bpSubject'][_0x58de('0x91')](_0x58de('0x69'));_0xf9c277=Math[_0x58de('0xdc')](_0xf9c277*_0x2dcc9b);_0xf9c277+=this[_0x58de('0x8')][_0x58de('0xbb')](_0x58de('0x69'));}return _0xf9c277;};Window_Base[_0x58de('0x9')][_0x58de('0x3a')]=function(_0x173db7){if(!!this[_0x58de('0x8')]&&this[_0x58de('0x8')]['bp']>0x0){return _0x173db7;}else{return'';}};Window_Base[_0x58de('0x9')][_0x58de('0x65')]=function(_0x5de052){if(!this[_0x58de('0x8')]||this[_0x58de('0x8')]['bp']<=0x0){return _0x5de052;}else{return'';}};Window_Base['prototype'][_0x58de('0x7c')]=function(_0x5ada5b,_0x405aa3){if(!!this[_0x58de('0x8')]&&this['_bpSubject']['bp']===_0x5ada5b){return _0x405aa3;}else{return'';}};Window_Base[_0x58de('0x9')][_0x58de('0x7c')]=function(_0x2d56ec,_0xb3c948){if(!!this[_0x58de('0x8')]&&this[_0x58de('0x8')]['bp']===_0x2d56ec){return _0xb3c948;}else{return'';}};Window_Base[_0x58de('0x9')][_0x58de('0xaf')]=function(_0x246897,_0x35dcc3){if(!!this[_0x58de('0x8')]&&this[_0x58de('0x8')]['bp']<=_0x246897){return _0x35dcc3;}else{return'';}};Window_Base[_0x58de('0x9')][_0x58de('0x15')]=function(_0x59de94,_0x227cc5){if(!!this[_0x58de('0x8')]&&this[_0x58de('0x8')]['bp']<_0x59de94){return _0x227cc5;}else{return'';}};Window_Base[_0x58de('0x9')][_0x58de('0x47')]=function(_0xdba28,_0x301e25){if(!!this[_0x58de('0x8')]&&this[_0x58de('0x8')]['bp']>=_0xdba28){return _0x301e25;}else{return'';}};Window_Base['prototype'][_0x58de('0xda')]=function(_0x1d288d,_0x1b2b60){if(!!this[_0x58de('0x8')]&&this['_bpSubject']['bp']>_0x1d288d){return _0x1b2b60;}else{return'';}};if(Olivia['OctoBattle'][_0x58de('0x97')][_0x58de('0xb7')]){Olivia[_0x58de('0x12')]['BP'][_0x58de('0x80')]=Window_Selectable[_0x58de('0x9')][_0x58de('0x45')];Window_Selectable[_0x58de('0x9')][_0x58de('0x45')]=function(){if(SceneManager[_0x58de('0x1e')]instanceof Scene_Battle&&!this['_isBoostRestricted']){if(BattleManager[_0x58de('0x74')]()&&BattleManager[_0x58de('0x74')]()[_0x58de('0x62')]()){SceneManager[_0x58de('0x1e')][_0x58de('0xa1')]();SceneManager[_0x58de('0x1e')][_0x58de('0x20')]['_active']=![];this[_0x58de('0xb3')]();}Input[_0x58de('0x53')]();}else{Olivia[_0x58de('0x12')]['BP'][_0x58de('0x80')][_0x58de('0xd4')](this);}};Olivia[_0x58de('0x12')]['BP'][_0x58de('0x5f')]=Window_Selectable[_0x58de('0x9')][_0x58de('0x17')];Window_Selectable[_0x58de('0x9')]['cursorPageup']=function(){if(SceneManager['_scene']instanceof Scene_Battle&&!this['_isBoostRestricted']){if(BattleManager['actor']()&&BattleManager['actor']()['canUnboostBP']()){SceneManager[_0x58de('0x1e')][_0x58de('0x3e')]();SceneManager[_0x58de('0x1e')][_0x58de('0x20')][_0x58de('0x94')]=![];this['refresh']();}Input[_0x58de('0x53')]();}else{Olivia[_0x58de('0x12')]['BP']['___Window_Selectable_cursorPageup___'][_0x58de('0xd4')](this);}};}Olivia[_0x58de('0x12')]['BP'][_0x58de('0x54')]=Window_ActorCommand['prototype'][_0x58de('0x71')];Window_ActorCommand[_0x58de('0x9')][_0x58de('0x71')]=function(){this[_0x58de('0xc4')]();this[_0x58de('0x56')]();Olivia[_0x58de('0x12')]['BP'][_0x58de('0x54')][_0x58de('0xd4')](this);};Window_ActorCommand[_0x58de('0x9')][_0x58de('0xc4')]=function(){if(Olivia[_0x58de('0x12')][_0x58de('0x97')]['BoostShow']){var _0x2dd91f=Olivia[_0x58de('0x12')][_0x58de('0x97')][_0x58de('0xe5')];var _0x1e041f=this[_0x58de('0xb0')]['canBoostBP']();this[_0x58de('0xe3')](_0x2dd91f,_0x58de('0x87'),_0x1e041f);}};Window_ActorCommand[_0x58de('0x9')][_0x58de('0x56')]=function(){if(Olivia[_0x58de('0x12')]['BoostPoint'][_0x58de('0x83')]){var _0x3af8d9=Olivia['OctoBattle'][_0x58de('0x97')]['UnboostCmd'];var _0x5ccefb=this[_0x58de('0xb0')][_0x58de('0x6f')]();this['addCommand'](_0x3af8d9,_0x58de('0x86'),_0x5ccefb);}};Window_ActorCommand[_0x58de('0x9')][_0x58de('0xa2')]=function(){if(this[_0x58de('0x64')]()!==_0x58de('0x87')&&this[_0x58de('0x64')]()!==_0x58de('0x86')){Window_Selectable['prototype'][_0x58de('0xa2')]['call'](this);}};if(Olivia[_0x58de('0x12')]['BoostPoint'][_0x58de('0x8e')]){Olivia[_0x58de('0x12')]['BP']['Window_BattleStatus_drawBasicArea']=Window_BattleStatus[_0x58de('0x9')][_0x58de('0xd0')];Window_BattleStatus['prototype'][_0x58de('0xd0')]=function(_0x3cd4d9,_0x1573d4){var _0x605bae=this[_0x58de('0x50')](_0x1573d4,_0x3cd4d9['x'],_0x3cd4d9['y']+0x2);_0x3cd4d9['x']+=_0x605bae+0x2;_0x3cd4d9[_0x58de('0x33')]-=_0x605bae+0x2;Olivia['OctoBattle']['BP'][_0x58de('0x9b')][_0x58de('0xd4')](this,_0x3cd4d9,_0x1573d4);};}Olivia['OctoBattle']['BP']['___Window_BattleActor_initialize___']=Window_BattleActor[_0x58de('0x9')][_0x58de('0x90')];Window_BattleActor[_0x58de('0x9')][_0x58de('0x90')]=function(_0x4747dd,_0x227464){this[_0x58de('0x4f')]=!![];Olivia[_0x58de('0x12')]['BP'][_0x58de('0xdf')][_0x58de('0xd4')](this,_0x4747dd,_0x227464);};Olivia[_0x58de('0x12')]['BP']['___Window_BattleEnemy_initialize___']=Window_BattleEnemy[_0x58de('0x9')][_0x58de('0x90')];Window_BattleEnemy[_0x58de('0x9')][_0x58de('0x90')]=function(_0x2bf84f,_0x6e36ef){this[_0x58de('0x4f')]=!![];Olivia['OctoBattle']['BP']['___Window_BattleEnemy_initialize___']['call'](this,_0x2bf84f,_0x6e36ef);};