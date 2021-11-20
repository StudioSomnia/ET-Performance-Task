//=============================================================================
// Olivia Engine - Battle Effects - for RPG Maker MV version 1.6.1
// Olivia_BattleEffects.js
//=============================================================================
 /*:
 * @plugindesc <BattleEffects> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that adds many new features to battle. These
 * new features include colored damage popups and two new popups: Weak and
 * Break, buff and debuff turn stacking, buff and debuff maximum turn control,
 * state maximum turn control, follow up skill actions, extra skill lists, and
 * many unique notetag effects. Please read the following to learn more about
 * this plugin's features:
 *
 *
 *
 * ------
 * Popups
 * ------
 *
 * Colored Popups: You can change the color of popups that appear if a battler
 * takes HP damage while it is affected by a state with the notetag
 * <Damage Color: r, g, b, a>. You can change the color used depending on the
 * values you insert.
 *
 * Weak Popup: A new popup is added so that when an elemental weakness is hit,
 * this popup will appear to inform the player. You will have to modify your
 * damage graphic to add the Weak popup. Instructions will be explained below.
 *
 * Break Popup: A new popup is added so that when a certain state with the 
 * <Break Popup> notetag is added to a battler, the Break Popup appears. You
 * will have to modify the damage graphic to add the Break popup. Instructions
 * will be explained below.
 *
 * How to set up your damage sheet:
 * 
 * Your damage sheet in your img/system/ folder is split up into 10 columns and
 * 5 rows evenly. If you don't change the cell settings in the plugin
 * parameters, it will look something like this:
 *
 * 0 1 2 3 4 5 6 7 8 9
 * 0 1 2 3 4 5 6 7 8 9
 * 0 1 2 3 4 5 6 7 8 9
 * 0 1 2 3 4 5 6 7 8 9
 * Miss    Weak  Break
 *
 * Place the Weak and Break popup images in the locations show above.
 *
 *
 *
 * ------------------------------------------------------
 * Buff and Debuff Turn Stacking and Maximum Turn Control
 * ------------------------------------------------------
 *
 * With vanilla RPG Maker MV, buffs and debuffs will overwrite the turn count
 * whenever a new buff or debuff is applied. The plugin parameters here let them
 * stack the turns with each other instead. You can set a maximum number of
 * turns for the buffs and debuffs so that they don't become too high.
 *
 *
 *
 * -------------------------------
 * State Turn Maximum Turn Control
 * -------------------------------
 *
 * If you use Yanfly's Buffs and States Core plugin, states can be changed to
 * stack turns with each other. If you wish to give the states a maximum number
 * of turns, you can use the <Max Turns: x> notetag inside that state.
 *
 *
 *
 * -------------------
 * Change Target Scope
 * -------------------
 *
 * You can transform some skill or item target scopes into something else, like
 * a skill that normally targets all enemies to focus on one, or one to all.
 * These can be done with the notetags that are to be placed inside of a state
 * or other main property notebox.
 *
 * You can also make some skill or item immune to scope target changing with
 * the <Bypass Target Change> or <Divine> notetag, too. 
 *
 * Look in the notetag section for a list of all the target changing notetags
 * you can put into your database objects.
 *
 *
 *
 * ----------------------
 * Battle Reward Notetags
 * ----------------------
 * 
 * There are new notetags you can use for skills and items to change the
 * multiplier for the battle rewards the player can apply to battle like
 * <JP x5>, <EXP x10>, or <Gold x200>. The effects will only last the current
 * battle and will be reset once the battle is over. Only one reward can happen
 * at a time as they will overwrite each other.
 *
 *
 *
 * -----------------------
 * Follow Up Skill Actions
 * -----------------------
 *
 * This feature requires Yanfly's Battle Engine Core. You can make states that
 * if a battler is affected by them and performs a certain action type
 * (physical, magical, certain hit, or physical/magical), a follow up skill will
 * happen after.
 *
 *
 *
 * -----------------
 * Extra Skill Lists
 * -----------------
 *
 * Make some skills used to hold other skills, if the actor knows them. When
 * they are selected in battle, a new window appears listing those skills. If
 * the actor does not have access to them, those skills cannot be used. The
 * skills picked from the new list will function as normal skills.
 *
 *
 *
 * ----------------------
 * Unique Notetag Effects
 * ----------------------
 * There are more effects that don't belong elsewhere, but some of them include
 * notetags like <Item Seal>, <Destroy Weapon>, and more. Please look at the
 * notetag list for them.
 *
 *
 *
 * --------
 * Notetags
 * --------
 *
 * Actor, Class, Enemy, Weapon, Armor, and State Notetags:
 *
 * <Skill Target Change: Self to All>
 * <Item Target Change: Self to All>
 * Changes skills/items with the self scope to become an all scope in battle.
 * Does not affect skills/items with the <Bypass Target Change> notetag.
 *
 * <Skill Target Change Allies: All to One>
 * <Skill Target Change Enemies: All to One>
 * <Item Target Change Allies: All to One>
 * <Item Target Change Enemies: All to One>
 * Changes skills/items with the all allies/enemies scope to become 1 ally/enemy
 * scope in battle. Does not affect skills/items with the <Bypass Target Change>
 * notetag.
 *
 * <Skill Target Change Allies: One to All>
 * <Skill Target Change Enemies: One to All>
 * <Item Target Change Allies: One to All>
 * <Item Target Change Enemies: One to All>
 * Changes skills/items with the 1 ally/enemy scope to become all allies/enemies
 * scope in battle. Does not affect skills/items with the <Bypass Target Change>
 * notetag.
 *
 *
 *
 * Skill, and Item Notetags:
 *
 * <Bypass Target Change>
 * <Divine>
 * Makes this skill/item immune to the target scope change notetag effects.
 *
 * <JP x5>
 * <EXP x10>
 * <Gold x200>
 * Replace the numbers. Changes the multipliers for the rewards found in the
 * current battle. JP will require Yanfly's Job Points plugin to have an effect.
 * After the battle is over, the multipliers will reset. The multipliers do not
 * stack and will overwrite each other, even if they are different types.
 *
 *
 *
 * Skill Notetags:
 * 
 * <Destroy Weapon>
 * Destroys the actor's currently equipped weapon after it is finished using a
 * skill with this notetag.
 *
 * <Extra Skill List: x>
 * <Extra Skill List: x, x, x>
 * Puts the skills x in a new window as a list to select from, turning this
 * skill into a folder during battle. This does not work outside of battle.
 * The actor must have access to all of the listed skills in order to use them.
 *
 *
 *
 * State Notetags:
 *
 * <All Element Damage Rate: x%>
 * Makes the battler receive x% multiplier from all elements.
 *
 * <Break Popup>
 * If a battler receives a state with this notetag, the Break Popup will appear.
 * It will take priority over the Weak Popup.
 *
 * <Buff Immunity: x>
 * <Buff Immunity: x, x, x>
 * <Debuff Immunity: x>
 * <Debuff Immunity: x, x, x>
 * Replace x with the parameter ID to make the battler immune to receiving buffs
 * or debuffs of that parameter. This does not remove already applied buffs or
 * debuffs. It only stops the battler from receiving them.
 * 0: Max HP
 * 1: Max MP
 * 2: Attack
 * 3: Defense
 * 4: Magic Attack
 * 5: Magic Defense
 * 6: Agility
 * 7: Luck
 *
 * <Damage Color: r, g, b, a>
 * If the battler receives HP damage while affected by a state with this notetag
 * the popup color will change.
 * r = red (0-255)
 * g = green (0-255)
 * b = blue (0-255)
 * a = alpha (0-255)
 *
 * <Item Seal>
 * If an actor is affected by a state with this notetag, they cannot use items
 * from the actor command menu.
 *
 * <Max Turns: x>
 * Sets the maximum number of turns this state can be to x. This is used for
 * Yanfly's Buffs and States Core if you allow state turn stacking.
 *
 * <No Weak Popup>
 * If the battler is hit with an elemental weakness while affected by a state
 * with this notetag, the Weak popup will not appear.
 *
 * <Physical Follow Up Skill: x>
 * <Magical Follow Up Skill: x>
 * <Certain Follow Up Skill: x>
 * <Follow Up Skill: x>
 * This requires Yanfly's Battle Engine Core to work. This makes the battler
 * affected by this state to perform skill ID x after the current skill is
 * finished being used.
 * Physical - Requires battler to perform physical type skill
 * Magical  - Requires battler to perform magical type skill
 * Certain  - Requires battler to perform certain hit type skill
 * n/a      - Requires battler to perform physical or magical type skill
 *
 * <State Immunity: x>
 * <State Immunity: x, x, x>
 * Insert the IDs of the states that the battler cannot receive if they are
 * affected by a state with this notetag. They do not become resistant to it,
 * meaning if the states have already been applied, they will not suddenly
 * disappear, but they will not be able to be applied until this state is gone.
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
 * @param Battle Effects Weak Popups
 * @text Weak Popups
 * @parent Battle Effects Pack
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Weak Popups
 * @default true
 *
 * @param Battle Effects Weak Popup Require Rate
 * @text Required Rate
 * @parent Battle Effects Weak Popups
 * @desc Required rate of elemental damage for weak popup to appear
 * @default 1.1
 *
 * @param Battle Effects Weak Popup Cell X
 * @text Cell X
 * @parent Battle Effects Weak Popups
 * @type number
 * @desc Starting cell column for X
 * @default 4
 *
 * @param Battle Effects Weak Popup Cell Width
 * @text Cell Width
 * @parent Battle Effects Weak Popups
 * @type number
 * @desc Number of cells for this popup's width
 * @default 3
 *
 * @param Battle Effects Weak Popup Cell X Factor
 * @text X Factor
 * @parent Battle Effects Weak Popups
 * @desc Rate of buffer for the popup's X position
 * @default 0.25
 *
 * @param Battle Effects Weak Popup Cell Y Factor
 * @text Y Factor
 * @parent Battle Effects Weak Popups
 * @desc Rate of buffer for the popup's Y position
 * @default 0.60
 *
 * @param Battle Effects Weak Popup Move X Base
 * @text Move X Base
 * @parent Battle Effects Weak Popups
 * @desc Base horizontal movement of the popup
 * @default -0.04
 *
 * @param Battle Effects Weak Popup Move X Rate
 * @text Move X Rate
 * @parent Battle Effects Weak Popups
 * @desc Rate of change for horizontal movement
 * @default 1.1
 *
 * @param Battle Effects Weak Popup Move Y Base
 * @text Move Y Base
 * @parent Battle Effects Weak Popups
 * @desc Base vertical movement of the popup
 * @default 0
 *
 * @param Battle Effects Weak Popup Move Y Rate
 * @text Move Y Rate
 * @parent Battle Effects Weak Popups
 * @desc Rate of change for vertical movement
 * @default 0
 *
 * @param Battle Effects Break Popups
 * @text Break Popups
 * @parent Battle Effects Pack
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Break Popups
 * @default true
 *
 * @param Battle Effects Break Popup Cell X
 * @text Cell X
 * @parent Battle Effects Break Popups
 * @type number
 * @desc Starting cell column for X
 * @default 7
 *
 * @param Battle Effects Break Popup Cell Width
 * @text Cell Width
 * @parent Battle Effects Break Popups
 * @type number
 * @desc Number of cells for this popup's width
 * @default 3
 *
 * @param Battle Effects Break Popup Cell X Factor
 * @text X Factor
 * @parent Battle Effects Break Popups
 * @desc Rate of buffer for the popup's X position
 * @default 0.25
 *
 * @param Battle Effects Break Popup Cell Y Factor
 * @text Y Factor
 * @parent Battle Effects Break Popups
 * @desc Rate of buffer for the popup's Y position
 * @default 0.60
 *
 * @param Battle Effects Break Popup Move X Base
 * @text Move X Base
 * @parent Battle Effects Break Popups
 * @desc Base horizontal movement of the popup
 * @default -0.04
 *
 * @param Battle Effects Break Popup Move X Rate
 * @text Move X Rate
 * @parent Battle Effects Break Popups
 * @desc Rate of change for horizontal movement
 * @default 1.1
 *
 * @param Battle Effects Break Popup Move Y Base
 * @text Move Y Base
 * @parent Battle Effects Break Popups
 * @desc Base vertical movement of the popup
 * @default 0
 *
 * @param Battle Effects Break Popup Move Y Rate
 * @text Move Y Rate
 * @parent Battle Effects Break Popups
 * @desc Rate of change for vertical movement
 * @default 0
 *
 * @param Stacking Buff/Debuffs
 * @parent Battle Effects Pack
 *
 * @param Battle Effects Stack Buff Turns
 * @text Stack Buff Turns
 * @parent Stacking Buff/Debuffs
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable stacking buff turns
 * @default true
 *
 * @param Battle Effects Max Buff Turns
 * @text Max Buff Turns
 * @parent Battle Effects Stack Buff Turns
 * @desc Max number of turns for stacking buffs
 * @default 9
 *
 * @param Battle Effects Stack Debuff Turns
 * @text Stack Debuff Turns
 * @parent Stacking Buff/Debuffs
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable stacking debuff turns
 * @default true
 *
 * @param Battle Effects Max Debuff Turns
 * @text Max Debuff Turns
 * @parent Battle Effects Stack Debuff Turns
 * @desc Max number of turns for stacking debuffs
 * @default 9
 *
 * @param
 * @param
 *
 */
//=============================================================================

var _0x29d4=['setup','makeDamageValue','checkItemScope','WeakMoveYRate','updateWindowPositions','needsSelection','isSkill','wtypeId','___Game_Action_isForUser___','clearResult','applyItemSeal','inBattle','onExSkillCancel','___Game_Action_isForAll___','length','queueForceAction','addWindow','createChildSprite','_flashColor','goldTotal','<BattleEffects>','MaxBuffTurns','setHelpWindow','_flashDuration','setBuffTurnStacking','isAnyInputWindowActive','onExSkillOk','WeakCellXFactor','filter','addItemCommand','_actor','width','___Scene_Battle_onEnemyOk___','Battle\x20Effects\x20Weak\x20Popup\x20Cell\x20Width','___Scene_Battle_isAnyInputWindowActive___','performFollowUpAction','create','___Game_Action_calcElementRate___','addChild','___Game_Battler_addDebuff___','isDamagePopupRequested','executeDamage','addState','BreakPopupEnabled','actor','setStateMaximumTurns','skills','BreakMoveXBase','jpTotal','Battle\x20Effects\x20Break\x20Popup\x20Cell\x20X','WeakPopupReqRate','makeItemList','_weakPopup','setupWeakDamagePopup','concat','isSpriteVisible','Param','WeakPopupEnabled','WeakMoveYBase','_skillList','Battle\x20Effects\x20Break\x20Popup\x20Move\x20X\x20Rate','startAnimation','updatePosition','createExtraSkillListWindow','___Game_Action_applyItemUserEffect___','enemy','processWeakPopup','BreakCellX','enabled','Battle\x20Effects\x20Weak\x20Popup\x20Move\x20X\x20Rate','meetsItemConditions','_helpWindow','item','___Game_Battler_addBuff___','___Game_BattlerBase_paySkillCost___','___Scene_Battle_onActorCancel___','Olivia_OctoBattle','hide','refresh','_positionYCorrection','___Sprite_Battler_setupDamagePopup___','___Game_Battler_onAllActionsEnd___','onActorCancel','Battle\x20Effects\x20Stack\x20Debuff\x20Turns','_battleBonus','digitHeight','isInputting','_moveYBase','createWeak','result','___Sprite_Damage_setup___','___Game_Action_makeDamageValue___','___Scene_Battle_onEnemyCancel___','WeakCellX','setupBreakDamagePopup','onEnemyOk','_moveXRate','WeakMoveXRate','activate','BreakMoveYBase','___Sprite_Damage_updateChild___','___Game_Battler_startAnimation___','___Game_Action_needsSelection___','addBuff','Battle\x20Effects\x20Weak\x20Popup\x20Cell\x20X\x20Factor','isHpEffect','anchor','states','_lastAnimationId','BECPopupDur','_duration','OctoBattle','none','subject','physical','subjectTargetEffectTraitSources','setHandler','WeaponSwap','EXP\x20x','calcElementRate','setSkillList','_isCalculatingDamage','switchToWeaponType','cancel','_data','show','clear','createBreak','applyBattleBonusRewards','Battle\x20Effects\x20Weak\x20Popups','WeakCellYFactor','isStatePrevented','___Window_ActorCommand_addItemCommand___','BreakMoveYRate','isCertainHit','registerUserLastActionType','Battle\x20Effects\x20Stack\x20Buff\x20Turns','isBuffPrevented','BreakCellXFactor','initMembers','min','___Game_Troop_jpTotal___','setupOctoSpecialEffectDamagePopup','setFrame','Enabled','onActorOk','isForUser','WeakCellWidth','_specialEffectPopup','isForAll','setupDamagePopup','active','Battle\x20Effects\x20Break\x20Popup\x20Cell\x20Y\x20Factor','equips','_stateTurns','StackBuffTurns','match','currentClass','Battle\x20Effects\x20Weak\x20Popup\x20Require\x20Rate','processPopupColorNote','_battler','Battle\x20Effects\x20Break\x20Popup\x20Move\x20Y\x20Rate','setupColorEffects','Effects','Battle\x20Effects\x20Weak\x20Popup\x20Move\x20X\x20Base','___Game_Troop_expTotal___','___Game_ActionResult_clear___','Battle\x20Effects\x20Break\x20Popup\x20Move\x20Y\x20Base','note','exSkillProcessReturn','paySkillCost','payWeaponDestroy','magical','___Scene_Battle_onActorOk___','_moveXBase','___Game_Action_isForOne___','parse','isSubjectAffectedByNote','isActor','YEP_BattleEngineCore','MaxDebuffTurns','addDebuff','isItemDivine','Battle\x20Effects\x20Weak\x20Popup\x20Cell\x20Y\x20Factor','___Scene_Battle_updateWindowPositions___','onSkillOk','Battle\x20Effects\x20Break\x20Popup\x20Cell\x20Width','colorSettings','Battle\x20Effects\x20Break\x20Popup\x20Move\x20X\x20Base','onEnemyCancel','_moveYRate','push','_spriteset','_extraSkillWindow','_result','Battle\x20Effects\x20Weak\x20Popup\x20Cell\x20X','isDebuffPrevented','getFirstSwapWeapon','initialize','_breakPopup','loseItem','performDestroyWeapon','height','isStateAffected','_extraSkillWindowProcess','digitWidth','findSymbol','___Scene_Battle_onSkillOk___','round','updateBreakPopup','onAllActionsEnd','Battle\x20Effects\x20Max\x20Buff\x20Turns','_lastActionHitType','setDebuffTurnStacking','___Game_Battler_addState___','YEP_JobPoints','isItem','JP\x20x','certain','ceil','bind','BattleEffects','_skillWindow','isForOne','prototype','call','_destroyWeapon','expTotal','applyItemUserEffect','_buffTurns','contains','___Game_Troop_goldTotal___','BreakCellWidth','setActor','index','deactivate','Battle\x20Effects\x20Break\x20Popups','description','___BattleManager_initMembers___','_skillWindowLastIndex'];(function(_0x1f89d3,_0x29d4ed){var _0x2de921=function(_0x4a5ab9){while(--_0x4a5ab9){_0x1f89d3['push'](_0x1f89d3['shift']());}};_0x2de921(++_0x29d4ed);}(_0x29d4,0x6c));var _0x2de9=function(_0x1f89d3,_0x29d4ed){_0x1f89d3=_0x1f89d3-0x0;var _0x2de921=_0x29d4[_0x1f89d3];return _0x2de921;};var Imported=Imported||{};Imported[_0x2de9('0xd0')]=!![];var Olivia=Olivia||{};Olivia[_0x2de9('0x3')]=Olivia[_0x2de9('0x3')]||{};var parameters=$plugins[_0x2de9('0xa0')](function(_0x5e58b8){return _0x5e58b8[_0x2de9('0x81')][_0x2de9('0x7a')](_0x2de9('0x98'));})[0x0]['parameters'];Olivia[_0x2de9('0x3')]['BattleEffects']={'Enabled':!![],'WeakPopupEnabled':eval(parameters[_0x2de9('0x15')]),'WeakPopupReqRate':Number(parameters[_0x2de9('0x32')]||1.1),'WeakCellX':Number(parameters[_0x2de9('0x57')]||0x4),'WeakCellWidth':Number(parameters[_0x2de9('0xa5')]||0x3),'WeakCellXFactor':Number(parameters[_0x2de9('0xec')]||0.25),'WeakCellYFactor':Number(parameters[_0x2de9('0x4b')]||0.6),'WeakMoveXBase':Number(parameters[_0x2de9('0x38')]||-0.04),'WeakMoveXRate':Number(parameters[_0x2de9('0xc9')]||1.1),'WeakMoveYBase':Number(parameters['Battle\x20Effects\x20Weak\x20Popup\x20Move\x20Y\x20Base']||0x0),'WeakMoveYRate':Number(parameters['Battle\x20Effects\x20Weak\x20Popup\x20Move\x20Y\x20Rate']||0x0),'BreakPopupEnabled':eval(parameters[_0x2de9('0x80')]),'BreakCellX':Number(parameters[_0x2de9('0xb5')]||0x7),'BreakCellWidth':Number(parameters[_0x2de9('0x4e')]||0x3),'BreakCellXFactor':Number(parameters['Battle\x20Effects\x20Break\x20Popup\x20Cell\x20X\x20Factor']||0.25),'BreakCellYFactor':Number(parameters[_0x2de9('0x2c')]||0.6),'BreakMoveXBase':Number(parameters[_0x2de9('0x50')]||-0.04),'BreakMoveXRate':Number(parameters[_0x2de9('0xc0')]||1.1),'BreakMoveYBase':Number(parameters[_0x2de9('0x3b')]||0x0),'BreakMoveYRate':Number(parameters[_0x2de9('0x35')]||0x0),'StackBuffTurns':eval(parameters[_0x2de9('0x1c')]),'MaxBuffTurns':Number(parameters[_0x2de9('0x67')]||0x9),'StackDebuffTurns':eval(parameters[_0x2de9('0xd7')]),'MaxDebuffTurns':Number(parameters[_0x2de9('0x67')]||0x9)};Olivia[_0x2de9('0x3')][_0x2de9('0x37')]=Olivia['OctoBattle'][_0x2de9('0x37')]||{};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x82')]=BattleManager[_0x2de9('0x1f')];BattleManager[_0x2de9('0x1f')]=function(){Olivia['OctoBattle']['Effects'][_0x2de9('0x82')]['call'](this);this[_0x2de9('0xd8')]='';};Game_Action[_0x2de9('0x74')][_0x2de9('0x7')]=function(){var _0x28c50f=this['subject']()[_0x2de9('0xef')]();if(this['subject']()[_0x2de9('0x46')]()){_0x28c50f[_0x2de9('0x53')](this[_0x2de9('0x5')]()[_0x2de9('0xb0')]());_0x28c50f[_0x2de9('0x53')](this['subject']()[_0x2de9('0x31')]());var _0x3d8fbe=this[_0x2de9('0x5')]()[_0x2de9('0x2d')]();for(var _0x434b5f=0x0;_0x434b5f<_0x3d8fbe[_0x2de9('0x92')];_0x434b5f++){var _0x4c949f=_0x3d8fbe[_0x434b5f];if(!!_0x4c949f){_0x28c50f[_0x2de9('0x53')](_0x4c949f);}}}else{_0x28c50f[_0x2de9('0x53')](this[_0x2de9('0x5')]()[_0x2de9('0xc5')]());}return _0x28c50f;};Game_Action[_0x2de9('0x74')][_0x2de9('0x45')]=function(_0x1bdd95){if(!!this[_0x2de9('0x5')]()){var _0x2a8447=this[_0x2de9('0x7')]();for(var _0x2a90a5=0x0;_0x2a90a5<_0x2a8447[_0x2de9('0x92')];_0x2a90a5++){var _0x25a8aa=_0x2a8447[_0x2a90a5];if(!!_0x25a8aa&&_0x25a8aa[_0x2de9('0x3c')][_0x2de9('0x30')](_0x1bdd95)){return!![];}}}return![];};Game_Action[_0x2de9('0x74')][_0x2de9('0x4a')]=function(){return this[_0x2de9('0xcc')]()[_0x2de9('0x3c')][_0x2de9('0x30')](/<Divine>/i)||this['item']()[_0x2de9('0x3c')]['match'](/<Bypass Target Change>/i);};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x8c')]=Game_Action[_0x2de9('0x74')][_0x2de9('0x26')];Game_Action[_0x2de9('0x74')]['isForUser']=function(){if(this[_0x2de9('0x8a')]()){if(this[_0x2de9('0x86')]([0xb])&&this[_0x2de9('0x45')](/<Skill Target Change: Self to All>/i)&&!this[_0x2de9('0x4a')]()){return![];}}else if(this[_0x2de9('0x6c')]()){if(this[_0x2de9('0x86')]([0xb])&&this[_0x2de9('0x45')](/<Item Target Change: Self to All>/i)&&!this[_0x2de9('0x4a')]()){return![];}}return Olivia['OctoBattle'][_0x2de9('0x37')][_0x2de9('0x8c')]['call'](this);};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x43')]=Game_Action[_0x2de9('0x74')][_0x2de9('0x73')];Game_Action['prototype']['isForOne']=function(){if(this['isSkill']()){if(this[_0x2de9('0x86')]([0x8])&&this['isSubjectAffectedByNote'](/<Skill Target Change Allies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return!![];}else if(this['checkItemScope']([0x2])&&this['isSubjectAffectedByNote'](/<Skill Target Change Enemies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return!![];}else if(this[_0x2de9('0x86')]([0x7])&&this[_0x2de9('0x45')](/<Skill Target Change Allies: One to All>/i)&&!this['isItemDivine']()){return![];}else if(this['checkItemScope']([0x1])&&this[_0x2de9('0x45')](/<Skill Target Change Enemies: One to All>/i)&&!this[_0x2de9('0x4a')]()){return![];}else if(this[_0x2de9('0x86')]([0xb])&&this[_0x2de9('0x45')](/<Skill Target Change: Self to All>/i)&&!this[_0x2de9('0x4a')]()){return![];}}else if(this[_0x2de9('0x6c')]()){if(this[_0x2de9('0x86')]([0x8])&&this[_0x2de9('0x45')](/<Item Target Change Allies: All to One>/i)&&!this['isItemDivine']()){return!![];}else if(this[_0x2de9('0x86')]([0x2])&&this['isSubjectAffectedByNote'](/<Item Target Change Enemies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return!![];}else if(this[_0x2de9('0x86')]([0x7])&&this[_0x2de9('0x45')](/<Item Target Change Allies: One to All>/i)&&!this[_0x2de9('0x4a')]()){return![];}else if(this[_0x2de9('0x86')]([0x1])&&this[_0x2de9('0x45')](/<Item Target Change Enemies: One to All>/i)&&!this['isItemDivine']()){return![];}else if(this['checkItemScope']([0xb])&&this[_0x2de9('0x45')](/<Item Target Change: Self to All>/i)&&!this[_0x2de9('0x4a')]()){return![];}}return Olivia[_0x2de9('0x3')][_0x2de9('0x37')]['___Game_Action_isForOne___'][_0x2de9('0x75')](this);};Olivia[_0x2de9('0x3')][_0x2de9('0x37')]['___Game_Action_isForAll___']=Game_Action[_0x2de9('0x74')][_0x2de9('0x29')];Game_Action[_0x2de9('0x74')][_0x2de9('0x29')]=function(){if(this[_0x2de9('0x8a')]()){if(this[_0x2de9('0x86')]([0x8])&&this[_0x2de9('0x45')](/<Skill Target Change Allies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return![];}else if(this[_0x2de9('0x86')]([0x2])&&this[_0x2de9('0x45')](/<Skill Target Change Enemies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return![];}else if(this[_0x2de9('0x86')]([0x7])&&this[_0x2de9('0x45')](/<Skill Target Change Allies: One to All>/i)&&!this['isItemDivine']()){return!![];}else if(this['checkItemScope']([0x1])&&this['isSubjectAffectedByNote'](/<Skill Target Change Enemies: One to All>/i)&&!this[_0x2de9('0x4a')]()){return!![];}else if(this[_0x2de9('0x86')]([0xb])&&this[_0x2de9('0x45')](/<Skill Target Change: Self to All>/i)&&!this[_0x2de9('0x4a')]()){return!![];}}else if(this[_0x2de9('0x6c')]()){if(this[_0x2de9('0x86')]([0x8])&&this[_0x2de9('0x45')](/<Item Target Change Allies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return![];}else if(this[_0x2de9('0x86')]([0x2])&&this[_0x2de9('0x45')](/<Item Target Change Enemies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return![];}else if(this[_0x2de9('0x86')]([0x7])&&this[_0x2de9('0x45')](/<Item Target Change Allies: One to All>/i)&&!this['isItemDivine']()){return!![];}else if(this[_0x2de9('0x86')]([0x1])&&this[_0x2de9('0x45')](/<Item Target Change Enemies: One to All>/i)&&!this[_0x2de9('0x4a')]()){return!![];}else if(this[_0x2de9('0x86')]([0xb])&&this[_0x2de9('0x45')](/<Item Target Change: Self to All>/i)&&!this[_0x2de9('0x4a')]()){return![];}}return Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x91')]['call'](this);};Olivia[_0x2de9('0x3')]['Effects'][_0x2de9('0xea')]=Game_Action[_0x2de9('0x74')][_0x2de9('0x89')];Game_Action[_0x2de9('0x74')]['needsSelection']=function(){if(this[_0x2de9('0x8a')]()){if(this['checkItemScope']([0x8])&&this[_0x2de9('0x45')](/<Skill Target Change Allies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return!![];}else if(this[_0x2de9('0x86')]([0x2])&&this[_0x2de9('0x45')](/<Skill Target Change Enemies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return!![];}else if(this[_0x2de9('0x86')]([0x7])&&this[_0x2de9('0x45')](/<Skill Target Change Allies: One to All>/i)&&!this['isItemDivine']()){return![];}else if(this[_0x2de9('0x86')]([0x1])&&this[_0x2de9('0x45')](/<Skill Target Change Enemies: One to All>/i)&&!this[_0x2de9('0x4a')]()){return![];}}else if(this[_0x2de9('0x6c')]()){if(this[_0x2de9('0x86')]([0x8])&&this[_0x2de9('0x45')](/<Item Target Change Allies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return!![];}else if(this[_0x2de9('0x86')]([0x2])&&this['isSubjectAffectedByNote'](/<Item Target Change Enemies: All to One>/i)&&!this[_0x2de9('0x4a')]()){return!![];}else if(this[_0x2de9('0x86')]([0x7])&&this['isSubjectAffectedByNote'](/<Item Target Change Allies: One to All>/i)&&!this[_0x2de9('0x4a')]()){return![];}else if(this[_0x2de9('0x86')]([0x1])&&this[_0x2de9('0x45')](/<Item Target Change Enemies: One to All>/i)&&!this['isItemDivine']()){return![];}}return Olivia[_0x2de9('0x3')]['Effects'][_0x2de9('0xea')][_0x2de9('0x75')](this);};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xdf')]=Game_Action[_0x2de9('0x74')][_0x2de9('0x85')];Game_Action['prototype'][_0x2de9('0x85')]=function(_0x442f12,_0xb4a0b6){this[_0x2de9('0xd')]=!![];var _0x5aaef6=Olivia[_0x2de9('0x3')]['Effects'][_0x2de9('0xdf')]['call'](this,_0x442f12,_0xb4a0b6);this['_isCalculatingDamage']=![];return _0x5aaef6;};Olivia['OctoBattle'][_0x2de9('0x37')][_0x2de9('0xa9')]=Game_Action[_0x2de9('0x74')][_0x2de9('0xb')];Game_Action[_0x2de9('0x74')][_0x2de9('0xb')]=function(_0x11f9ff){if(!!this['_isCalculatingDamage']){var _0x290f1d=_0x11f9ff[_0x2de9('0xef')]();for(var _0x517fda=0x0;_0x517fda<_0x290f1d[_0x2de9('0x92')];_0x517fda++){var _0x213fb5=_0x290f1d[_0x517fda];if(!!_0x213fb5&&_0x213fb5[_0x2de9('0x3c')][_0x2de9('0x30')](/<All Element Damage Rate: (\d+)([%％])>/i)){return parseFloat(RegExp['$1'])*0.01;}}}return Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xa9')]['call'](this,_0x11f9ff);};Olivia[_0x2de9('0x3')][_0x2de9('0x37')]['___Game_Action_executeDamage___']=Game_Action[_0x2de9('0x74')][_0x2de9('0xad')];Game_Action[_0x2de9('0x74')][_0x2de9('0xad')]=function(_0x44b940,_0x3101d2){this[_0x2de9('0x33')](_0x44b940,_0x3101d2);Olivia[_0x2de9('0x3')][_0x2de9('0x37')]['___Game_Action_executeDamage___'][_0x2de9('0x75')](this,_0x44b940,_0x3101d2);this[_0x2de9('0xc6')](_0x44b940,_0x3101d2);};Game_Action[_0x2de9('0x74')][_0x2de9('0x33')]=function(_0x5e71e5,_0x32f58a){if(!!_0x5e71e5&&_0x32f58a>0x0&&this['isHpEffect']()){var _0x11e166=_0x5e71e5[_0x2de9('0xef')]();for(var _0x35103c=0x0;_0x35103c<_0x11e166[_0x2de9('0x92')];_0x35103c++){var _0xc5548=_0x11e166[_0x35103c];if(!!_0xc5548&&_0xc5548[_0x2de9('0x3c')][_0x2de9('0x30')](/<Damage Color:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){_0x5e71e5['result']()[_0x2de9('0x4f')]=JSON[_0x2de9('0x44')]('['+RegExp['$1']['match'](/\d+/g)+']');}}}};Game_Action[_0x2de9('0x74')][_0x2de9('0xc6')]=function(_0x115cd5,_0xdce24b){if(!!_0x115cd5&&_0xdce24b>0x0&&this[_0x2de9('0xed')]()&&this[_0x2de9('0xb')](_0x115cd5)>=Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0xb6')]){var _0x593b53=_0x115cd5[_0x2de9('0xef')]();for(var _0x309c3b=0x0;_0x309c3b<_0x593b53[_0x2de9('0x92')];_0x309c3b++){var _0x49bef8=_0x593b53[_0x309c3b];if(!!_0x49bef8&&_0x49bef8[_0x2de9('0x3c')][_0x2de9('0x30')](/<No Weak Popup>/i)){return;}}_0x115cd5[_0x2de9('0xdd')]()[_0x2de9('0xb8')]=!![];}};Olivia['OctoBattle']['Effects']['___Game_Action_applyItemUserEffect___']=Game_Action[_0x2de9('0x74')][_0x2de9('0x78')];Game_Action['prototype'][_0x2de9('0x78')]=function(_0x3e2977){this[_0x2de9('0x1b')]();Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xc4')][_0x2de9('0x75')](this,_0x3e2977);this[_0x2de9('0x14')](_0x3e2977);};Game_Action[_0x2de9('0x74')][_0x2de9('0x1b')]=function(){if(!!this[_0x2de9('0x5')]()){if(this['isPhysical']()){this[_0x2de9('0x5')]()[_0x2de9('0x68')]=_0x2de9('0x6');}else if(this['isMagical']()){this[_0x2de9('0x5')]()[_0x2de9('0x68')]=_0x2de9('0x40');}else if(this[_0x2de9('0x1a')]()){this[_0x2de9('0x5')]()[_0x2de9('0x68')]='certain';}else{this[_0x2de9('0x5')]()[_0x2de9('0x68')]=_0x2de9('0x4');}}};Game_Action[_0x2de9('0x74')]['applyBattleBonusRewards']=function(_0x54db95){if(!!this['item']()){if(this['item']()[_0x2de9('0x3c')][_0x2de9('0x30')](/<JP x(\d+)>/i)){BattleManager[_0x2de9('0xd8')]=_0x2de9('0x6d')+RegExp['$1'];}else if(this[_0x2de9('0xcc')]()[_0x2de9('0x3c')][_0x2de9('0x30')](/<EXP x(\d+)>/i)){BattleManager['_battleBonus']=_0x2de9('0xa')+RegExp['$1'];}else if(this[_0x2de9('0xcc')]()[_0x2de9('0x3c')][_0x2de9('0x30')](/<Gold x(\d+)>/i)){BattleManager[_0x2de9('0xd8')]='Gold\x20x'+RegExp['$1'];}}};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x3a')]=Game_ActionResult[_0x2de9('0x74')][_0x2de9('0x12')];Game_ActionResult[_0x2de9('0x74')]['clear']=function(){Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x3a')][_0x2de9('0x75')](this);this['colorSettings']=undefined;this[_0x2de9('0xb8')]=undefined;this[_0x2de9('0x5b')]=undefined;};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xce')]=Game_BattlerBase[_0x2de9('0x74')]['paySkillCost'];Game_BattlerBase[_0x2de9('0x74')][_0x2de9('0x3e')]=function(_0x3b6b37){Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xce')][_0x2de9('0x75')](this,_0x3b6b37);this[_0x2de9('0x3f')](_0x3b6b37);};Game_BattlerBase[_0x2de9('0x74')][_0x2de9('0x3f')]=function(_0x3c4844){this['_destroyWeapon']=_0x3c4844[_0x2de9('0x3c')]['match'](/<Destroy Weapon>/i)&&this[_0x2de9('0x46')]();};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xe9')]=Game_Battler[_0x2de9('0x74')][_0x2de9('0xc1')];Game_Battler[_0x2de9('0x74')][_0x2de9('0xc1')]=function(_0x90ab54,_0x432197,_0x15a7be){Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xe9')][_0x2de9('0x75')](this,_0x90ab54,_0x432197,_0x15a7be);this[_0x2de9('0x0')]=_0x90ab54;};Olivia[_0x2de9('0x3')][_0x2de9('0x37')]['___Game_Battler_addState___']=Game_Battler['prototype'][_0x2de9('0xae')];Game_Battler['prototype'][_0x2de9('0xae')]=function(_0x1431c4){if(!this[_0x2de9('0x17')](_0x1431c4)){var _0x1b3be6=this[_0x2de9('0x5f')](_0x1431c4);Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x6a')][_0x2de9('0x75')](this,_0x1431c4);this[_0x2de9('0xe2')](_0x1431c4,_0x1b3be6);this[_0x2de9('0xb1')](_0x1431c4);}};Game_Battler[_0x2de9('0x74')][_0x2de9('0xe2')]=function(_0x447302,_0x528d5b){if(!_0x528d5b&&this[_0x2de9('0x5f')](_0x447302)&&$dataStates[_0x447302]['note'][_0x2de9('0x30')](/<Break Popup>/i)){this[_0x2de9('0x56')][_0x2de9('0x5b')]=!![];}};Game_Battler[_0x2de9('0x74')][_0x2de9('0xb1')]=function(_0x37fa2e){if(this[_0x2de9('0x5f')](_0x37fa2e)&&$dataStates[_0x37fa2e][_0x2de9('0x3c')][_0x2de9('0x30')](/<Max Turns: (\d+)>/i)){this[_0x2de9('0x2e')][_0x37fa2e]=Math[_0x2de9('0x20')](this[_0x2de9('0x2e')][_0x37fa2e],parseInt(RegExp['$1']));}};Game_Battler[_0x2de9('0x74')][_0x2de9('0x17')]=function(_0x1015b8){var _0x57d0bd=[];var _0x4659d8=this[_0x2de9('0xef')]();for(var _0x3c4489=0x0;_0x3c4489<_0x4659d8[_0x2de9('0x92')];_0x3c4489++){var _0xe6cd27=_0x4659d8[_0x3c4489];if(!!_0xe6cd27&&_0xe6cd27[_0x2de9('0x3c')][_0x2de9('0x30')](/<State (?:Immune|Immunity):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x54a792=JSON[_0x2de9('0x44')]('['+RegExp['$1'][_0x2de9('0x30')](/\d+/g)+']');_0x57d0bd=_0x57d0bd[_0x2de9('0xba')](_0x54a792);}}return _0x57d0bd[_0x2de9('0x7a')](_0x1015b8);};Olivia[_0x2de9('0x3')]['Effects'][_0x2de9('0xcd')]=Game_Battler[_0x2de9('0x74')][_0x2de9('0xeb')];Game_Battler[_0x2de9('0x74')][_0x2de9('0xeb')]=function(_0xad069c,_0x1bb4aa){if(!this[_0x2de9('0x1d')](_0xad069c)){var _0x420e4d=this['_buffTurns'][_0xad069c]||0x0;Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xcd')][_0x2de9('0x75')](this,_0xad069c,_0x1bb4aa);this[_0x2de9('0x9c')](_0xad069c,_0x420e4d+_0x1bb4aa);}};Game_Battler['prototype']['isBuffPrevented']=function(_0x1194fd){var _0x40b14c=[];var _0x526ed0=this[_0x2de9('0xef')]();for(var _0x13d763=0x0;_0x13d763<_0x526ed0[_0x2de9('0x92')];_0x13d763++){var _0x554362=_0x526ed0[_0x13d763];if(!!_0x554362&&_0x554362[_0x2de9('0x3c')][_0x2de9('0x30')](/<Buff (?:Immune|Immunity):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x41c116=JSON['parse']('['+RegExp['$1'][_0x2de9('0x30')](/\d+/g)+']');_0x40b14c=_0x40b14c[_0x2de9('0xba')](_0x41c116);}}return _0x40b14c[_0x2de9('0x7a')](_0x1194fd);};Game_Battler[_0x2de9('0x74')]['setBuffTurnStacking']=function(_0x269b31,_0x34943b){if(Olivia['OctoBattle'][_0x2de9('0x71')][_0x2de9('0x2f')]){this[_0x2de9('0x79')][_0x269b31]=Math[_0x2de9('0x20')](_0x34943b,Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0x99')]);}};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xab')]=Game_Battler[_0x2de9('0x74')][_0x2de9('0x49')];Game_Battler[_0x2de9('0x74')][_0x2de9('0x49')]=function(_0x3e65c1,_0x41781c){if(!this[_0x2de9('0x58')](_0x3e65c1)){var _0x4d9af7=this[_0x2de9('0x79')][_0x3e65c1]||0x0;Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xab')][_0x2de9('0x75')](this,_0x3e65c1,_0x41781c);this[_0x2de9('0x69')](_0x3e65c1,_0x4d9af7+_0x41781c);}};Game_Battler[_0x2de9('0x74')][_0x2de9('0x58')]=function(_0x12411b){var _0x22bd16=[];var _0x5bc9cf=this[_0x2de9('0xef')]();for(var _0x2ef630=0x0;_0x2ef630<_0x5bc9cf['length'];_0x2ef630++){var _0x56647a=_0x5bc9cf[_0x2ef630];if(!!_0x56647a&&_0x56647a[_0x2de9('0x3c')][_0x2de9('0x30')](/<Debuff (?:Immune|Immunity):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x20c751=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');_0x22bd16=_0x22bd16[_0x2de9('0xba')](_0x20c751);}}return _0x22bd16[_0x2de9('0x7a')](_0x12411b);};Game_Battler[_0x2de9('0x74')][_0x2de9('0x69')]=function(_0x296c8a,_0x27210e){if(Olivia[_0x2de9('0x3')][_0x2de9('0x71')]['StackDebuffTurns']){this[_0x2de9('0x79')][_0x296c8a]=Math[_0x2de9('0x20')](_0x27210e,Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0x48')]);}};Olivia[_0x2de9('0x3')]['Effects'][_0x2de9('0xd5')]=Game_Battler['prototype']['onAllActionsEnd'];Game_Battler[_0x2de9('0x74')][_0x2de9('0x66')]=function(){Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xd5')][_0x2de9('0x75')](this);this[_0x2de9('0x5d')]();this[_0x2de9('0xa7')]();};Game_Battler[_0x2de9('0x74')][_0x2de9('0x5d')]=function(){if(!!this[_0x2de9('0x76')]&&this[_0x2de9('0x46')]()){this[_0x2de9('0x76')]=![];var _0x560ecc=this[_0x2de9('0x2d')]()[0x0];this['changeEquip'](0x0,null);$gameParty[_0x2de9('0x5c')](_0x560ecc,0x1,![]);if(Olivia[_0x2de9('0x3')][_0x2de9('0x9')]&&Olivia[_0x2de9('0x3')][_0x2de9('0x9')][_0x2de9('0x24')]&&!!this['getFirstSwapWeapon']()){this[_0x2de9('0xe')](this[_0x2de9('0x59')]()[_0x2de9('0x8b')],![]);}}};Game_Battler[_0x2de9('0x74')][_0x2de9('0xa7')]=function(){if(Imported[_0x2de9('0x47')]){var _0x206c9e=this[_0x2de9('0xef')]();for(var _0x2d9ed7=0x0;_0x2d9ed7<_0x206c9e[_0x2de9('0x92')];_0x2d9ed7++){var _0x4bfaf8=_0x206c9e[_0x2d9ed7];if(!!_0x4bfaf8){if(this[_0x2de9('0x68')]==='physical'&&_0x4bfaf8['note'][_0x2de9('0x30')](/<Physical Follow Up Skill: (\d+)>/i)){var _0x47c010=parseInt(RegExp['$1']);BattleManager[_0x2de9('0x93')](this,_0x47c010,-0x2);}else if(this[_0x2de9('0x68')]===_0x2de9('0x40')&&_0x4bfaf8[_0x2de9('0x3c')][_0x2de9('0x30')](/<Magical Follow Up Skill: (\d+)>/i)){var _0x47c010=parseInt(RegExp['$1']);BattleManager[_0x2de9('0x93')](this,_0x47c010,-0x2);}else if(this[_0x2de9('0x68')]===_0x2de9('0x6e')&&_0x4bfaf8[_0x2de9('0x3c')][_0x2de9('0x30')](/<Certain Follow Up Skill: (\d+)>/i)){var _0x47c010=parseInt(RegExp['$1']);BattleManager[_0x2de9('0x93')](this,_0x47c010,-0x2);}else if(this[_0x2de9('0x68')]!==_0x2de9('0x6e')&&_0x4bfaf8[_0x2de9('0x3c')][_0x2de9('0x30')](/<Follow Up Skill: (\d+)>/i)){var _0x47c010=parseInt(RegExp['$1']);BattleManager[_0x2de9('0x93')](this,_0x47c010,-0x2);}}}}};Olivia[_0x2de9('0x3')][_0x2de9('0x37')]['___Game_BattlerBase_meetsItemConditions___']=Game_BattlerBase[_0x2de9('0x74')]['meetsItemConditions'];Game_BattlerBase[_0x2de9('0x74')][_0x2de9('0xca')]=function(_0x1c1b52){if($gameParty[_0x2de9('0x8f')]()&&this[_0x2de9('0xef')]()[_0x2de9('0x92')]>0x0){var _0x321932=this[_0x2de9('0xef')]();for(var _0x3d45b9=0x0;_0x3d45b9<_0x321932['length'];_0x3d45b9++){var _0x274663=_0x321932[_0x3d45b9];if(!!_0x274663&&_0x274663[_0x2de9('0x3c')]['match'](/<Item Seal>/i)){return![];}}}return Olivia['OctoBattle'][_0x2de9('0x37')]['___Game_BattlerBase_meetsItemConditions___'][_0x2de9('0x75')](this,_0x1c1b52);};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x39')]=Game_Troop[_0x2de9('0x74')][_0x2de9('0x77')];Game_Troop[_0x2de9('0x74')]['expTotal']=function(){var _0x18eee4=Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x39')][_0x2de9('0x75')](this);if(BattleManager[_0x2de9('0xd8')]['match'](/EXP x(\d+)/i)){_0x18eee4*=parseInt(RegExp['$1']);}return Math[_0x2de9('0x6f')](_0x18eee4);};Olivia[_0x2de9('0x3')]['Effects'][_0x2de9('0x7b')]=Game_Troop[_0x2de9('0x74')]['goldTotal'];Game_Troop[_0x2de9('0x74')][_0x2de9('0x97')]=function(){var _0x286569=Olivia['OctoBattle'][_0x2de9('0x37')][_0x2de9('0x7b')][_0x2de9('0x75')](this);if(BattleManager[_0x2de9('0xd8')][_0x2de9('0x30')](/Gold x(\d+)/i)){_0x286569*=parseInt(RegExp['$1']);}return Math['ceil'](_0x286569);};if(Imported[_0x2de9('0x6b')]){Olivia[_0x2de9('0x3')]['Effects'][_0x2de9('0x21')]=Game_Troop['prototype'][_0x2de9('0xb4')];Game_Troop[_0x2de9('0x74')][_0x2de9('0xb4')]=function(){var _0x147ac0=Olivia['OctoBattle']['Effects'][_0x2de9('0x21')][_0x2de9('0x75')](this);if(BattleManager['_battleBonus'][_0x2de9('0x30')](/JP x(\d+)/i)){_0x147ac0*=parseInt(RegExp['$1']);}return Math['ceil'](_0x147ac0);};}Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xa6')]=Scene_Battle[_0x2de9('0x74')][_0x2de9('0x9d')];Scene_Battle[_0x2de9('0x74')][_0x2de9('0x9d')]=function(){if(!!this['_extraSkillWindow']&&this[_0x2de9('0x55')][_0x2de9('0x2b')]){return!![];}return Olivia[_0x2de9('0x3')][_0x2de9('0x37')]['___Scene_Battle_isAnyInputWindowActive___'][_0x2de9('0x75')](this);};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x4c')]=Scene_Battle[_0x2de9('0x74')][_0x2de9('0x88')];Scene_Battle['prototype'][_0x2de9('0x88')]=function(){Olivia['OctoBattle'][_0x2de9('0x37')]['___Scene_Battle_updateWindowPositions___'][_0x2de9('0x75')](this);if(BattleManager[_0x2de9('0xda')]()){if(!!this[_0x2de9('0x55')]&&this[_0x2de9('0x55')]['active']){this[_0x2de9('0x72')][_0x2de9('0xc2')]();this['_extraSkillWindow'][_0x2de9('0xc2')]();}}};Olivia[_0x2de9('0x3')][_0x2de9('0x37')]['___Scene_Battle_onSkillOk___']=Scene_Battle[_0x2de9('0x74')][_0x2de9('0x4d')];Scene_Battle[_0x2de9('0x74')]['onSkillOk']=function(){if(this[_0x2de9('0x72')][_0x2de9('0xcc')]()['note'][_0x2de9('0x30')](/<Extra Skill List:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x502f3c=JSON[_0x2de9('0x44')]('['+RegExp['$1']['match'](/\d+/g)+']');this[_0x2de9('0xc3')](_0x502f3c);}else{Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x63')][_0x2de9('0x75')](this);}};Scene_Battle[_0x2de9('0x74')][_0x2de9('0xc3')]=function(_0x8bcc83){if(!this[_0x2de9('0x55')]){var _0x29484f=this['_skillWindow']['x'];var _0x4a1f3f=this[_0x2de9('0x72')]['y'];var _0x23819e=this['_skillWindow'][_0x2de9('0xa3')];var _0x4ddf02=this[_0x2de9('0x72')]['height'];this['_extraSkillWindow']=new Window_BattleSkillExtra(_0x29484f,_0x4a1f3f,_0x23819e,_0x4ddf02);this[_0x2de9('0x55')][_0x2de9('0x9a')](this[_0x2de9('0xcb')]);this['_extraSkillWindow'][_0x2de9('0x8')]('ok',this[_0x2de9('0x9e')][_0x2de9('0x70')](this));this[_0x2de9('0x55')][_0x2de9('0x8')](_0x2de9('0xf'),this[_0x2de9('0x90')][_0x2de9('0x70')](this));this[_0x2de9('0x94')](this[_0x2de9('0x55')]);}this[_0x2de9('0x55')][_0x2de9('0x7d')](BattleManager[_0x2de9('0xb0')]());this[_0x2de9('0x55')][_0x2de9('0xc')](_0x8bcc83);};Scene_Battle[_0x2de9('0x74')][_0x2de9('0x9e')]=function(){this['_extraSkillWindowProcess']=!![];this[_0x2de9('0x83')]=this[_0x2de9('0x72')][_0x2de9('0x7e')]();var _0x23d242=this[_0x2de9('0x72')];this[_0x2de9('0x72')]=this[_0x2de9('0x55')];Olivia['OctoBattle'][_0x2de9('0x37')][_0x2de9('0x63')][_0x2de9('0x75')](this);this[_0x2de9('0x72')]=_0x23d242;};Scene_Battle['prototype'][_0x2de9('0x90')]=function(){this['_extraSkillWindowProcess']=![];this[_0x2de9('0x55')][_0x2de9('0xd1')]();this['_skillWindow'][_0x2de9('0xe6')]();this[_0x2de9('0xcb')][_0x2de9('0x11')]();};Scene_Battle[_0x2de9('0x74')][_0x2de9('0x3d')]=function(){if(this[_0x2de9('0x60')]){this[_0x2de9('0x60')]=![];this['_skillWindow'][_0x2de9('0x7f')]();this[_0x2de9('0x72')]['select'](this['_skillWindowLastIndex']);this[_0x2de9('0x55')][_0x2de9('0x11')]();this[_0x2de9('0x55')][_0x2de9('0xe6')]();}};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x41')]=Scene_Battle[_0x2de9('0x74')][_0x2de9('0x25')];Scene_Battle[_0x2de9('0x74')][_0x2de9('0x25')]=function(){this[_0x2de9('0x60')]=![];Olivia['OctoBattle'][_0x2de9('0x37')][_0x2de9('0x41')][_0x2de9('0x75')](this);};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xcf')]=Scene_Battle[_0x2de9('0x74')][_0x2de9('0xd6')];Scene_Battle[_0x2de9('0x74')][_0x2de9('0xd6')]=function(){Olivia[_0x2de9('0x3')][_0x2de9('0x37')]['___Scene_Battle_onActorCancel___']['call'](this);this[_0x2de9('0x3d')]();};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xa4')]=Scene_Battle[_0x2de9('0x74')][_0x2de9('0xe3')];Scene_Battle['prototype'][_0x2de9('0xe3')]=function(){this[_0x2de9('0x60')]=![];Olivia['OctoBattle'][_0x2de9('0x37')][_0x2de9('0xa4')][_0x2de9('0x75')](this);};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xe0')]=Scene_Battle[_0x2de9('0x74')]['onEnemyCancel'];Scene_Battle[_0x2de9('0x74')][_0x2de9('0x51')]=function(){Olivia['OctoBattle'][_0x2de9('0x37')][_0x2de9('0xe0')][_0x2de9('0x75')](this);this[_0x2de9('0x3d')]();};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xd4')]=Sprite_Battler['prototype'][_0x2de9('0x2a')];Sprite_Battler[_0x2de9('0x74')][_0x2de9('0x2a')]=function(){this[_0x2de9('0x22')]();Olivia['OctoBattle'][_0x2de9('0x37')][_0x2de9('0xd4')][_0x2de9('0x75')](this);};Sprite_Battler[_0x2de9('0x74')][_0x2de9('0x22')]=function(){if(this[_0x2de9('0x34')][_0x2de9('0xac')]()&&this[_0x2de9('0x34')][_0x2de9('0xbb')]()){if(!!this[_0x2de9('0x34')][_0x2de9('0x56')][_0x2de9('0x5b')]&&Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0xaf')]){this['setupBreakDamagePopup']();}else if(!!this[_0x2de9('0x34')][_0x2de9('0x56')]['_weakPopup']&&Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0xbd')]){this[_0x2de9('0xb9')]();}}};Sprite_Battler[_0x2de9('0x74')][_0x2de9('0xe2')]=function(){var _0xafe123=new Sprite_Damage();_0xafe123['x']=this['x']-Math['round'](this[_0x2de9('0xa3')]*Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0x1e')]);_0xafe123['y']=this['y']-Math['round'](this[_0x2de9('0x5e')]*Olivia[_0x2de9('0x3')][_0x2de9('0x71')]['BreakCellYFactor']);_0xafe123[_0x2de9('0x13')]();BattleManager[_0x2de9('0x54')][_0x2de9('0xaa')](_0xafe123);this[_0x2de9('0x34')]['clearResult']();};Sprite_Battler['prototype'][_0x2de9('0xb9')]=function(){var _0x67647f=new Sprite_Damage();_0x67647f['x']=this['x']-Math[_0x2de9('0x64')](this[_0x2de9('0xa3')]*Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0x9f')]);_0x67647f['y']=this['y']-Math['round'](this[_0x2de9('0x5e')]*Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0x16')]);_0x67647f[_0x2de9('0xdc')]();BattleManager[_0x2de9('0x54')][_0x2de9('0xaa')](_0x67647f);this[_0x2de9('0x34')][_0x2de9('0x8d')]();};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xde')]=Sprite_Damage['prototype']['setup'];Sprite_Damage['prototype'][_0x2de9('0x84')]=function(_0x3c22a6){Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xde')][_0x2de9('0x75')](this,_0x3c22a6);if(!!_0x3c22a6[_0x2de9('0xdd')]()[_0x2de9('0x4f')]){this[_0x2de9('0x36')](_0x3c22a6[_0x2de9('0xdd')]()[_0x2de9('0x4f')]);}};Sprite_Damage[_0x2de9('0x74')]['setupColorEffects']=function(_0x28ac2f){this[_0x2de9('0x96')]=[_0x28ac2f[0x0],_0x28ac2f[0x1],_0x28ac2f[0x2],_0x28ac2f[0x3]];this[_0x2de9('0x9b')]=0x22b8;};Sprite_Damage[_0x2de9('0x74')][_0x2de9('0x13')]=function(){var _0x2a1fcb=this['digitWidth']()*Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0xc7')];var _0x2815c4=0x4*this[_0x2de9('0xd9')]();var _0x5e9839=this[_0x2de9('0x61')]()*Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0x7c')];var _0x5468e0=this['digitHeight']();var _0x2c64c0=this[_0x2de9('0x95')]();_0x2c64c0[_0x2de9('0x23')](_0x2a1fcb,_0x2815c4,_0x5e9839,_0x5468e0);_0x2c64c0['_specialEffectPopup']=!![];_0x2c64c0[_0x2de9('0xee')]['x']=0.5;_0x2c64c0[_0x2de9('0xee')]['y']=0.5;if(Imported[_0x2de9('0x47')]){this[_0x2de9('0x2')]=Yanfly[_0x2de9('0xbc')][_0x2de9('0x1')];}this['_moveXBase']=Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0xb3')];this['_moveXRate']=Olivia[_0x2de9('0x3')][_0x2de9('0x71')]['BreakMoveXRate'];this['_moveYBase']=Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0xe7')];this[_0x2de9('0x52')]=Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0x19')];};Sprite_Damage[_0x2de9('0x74')]['createWeak']=function(){var _0x58420a=this[_0x2de9('0x61')]()*Olivia['OctoBattle'][_0x2de9('0x71')][_0x2de9('0xe1')];var _0x232085=0x4*this[_0x2de9('0xd9')]();var _0x5a140b=this[_0x2de9('0x61')]()*Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0x27')];var _0x322256=this[_0x2de9('0xd9')]();var _0x2821d4=this[_0x2de9('0x95')]();_0x2821d4[_0x2de9('0x23')](_0x58420a,_0x232085,_0x5a140b,_0x322256);_0x2821d4[_0x2de9('0x28')]=!![];_0x2821d4['anchor']['x']=0.5;_0x2821d4[_0x2de9('0xee')]['y']=0.5;if(Imported[_0x2de9('0x47')]){this[_0x2de9('0x2')]=Yanfly[_0x2de9('0xbc')]['BECPopupDur'];}this['_moveXBase']=Olivia[_0x2de9('0x3')][_0x2de9('0x71')]['WeakMoveXBase'];this[_0x2de9('0xe4')]=Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0xe5')];this[_0x2de9('0xdb')]=Olivia[_0x2de9('0x3')][_0x2de9('0x71')][_0x2de9('0xbe')];this[_0x2de9('0x52')]=Olivia['OctoBattle'][_0x2de9('0x71')][_0x2de9('0x87')];};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0xe8')]=Sprite_Damage[_0x2de9('0x74')]['updateChild'];Sprite_Damage[_0x2de9('0x74')]['updateChild']=function(_0x17fcb6){if(_0x17fcb6[_0x2de9('0x28')]){this[_0x2de9('0x65')](_0x17fcb6);}else{Olivia['OctoBattle']['Effects'][_0x2de9('0xe8')][_0x2de9('0x75')](this,_0x17fcb6);}};Sprite_Damage[_0x2de9('0x74')][_0x2de9('0x65')]=function(_0x5db054){this[_0x2de9('0x2')]--;this['x']+=this[_0x2de9('0x42')];this[_0x2de9('0x42')]*=this[_0x2de9('0xe4')];this['y']+=this['_moveYBase'];this[_0x2de9('0xdb')]*=this[_0x2de9('0x52')];};function Window_BattleSkillExtra(){this[_0x2de9('0x5a')]['apply'](this,arguments);}Window_BattleSkillExtra['prototype']=Object[_0x2de9('0xa8')](Window_BattleSkill['prototype']);Window_BattleSkillExtra[_0x2de9('0x74')]['constructor']=Window_BattleSkillExtra;Window_BattleSkillExtra[_0x2de9('0x74')][_0x2de9('0x5a')]=function(_0xe9cdee,_0x874197,_0x29cbf6,_0x300ac7){this[_0x2de9('0xbf')]=[];Window_BattleSkill[_0x2de9('0x74')][_0x2de9('0x5a')]['call'](this,_0xe9cdee,_0x874197,_0x29cbf6,_0x300ac7);};Window_BattleSkillExtra[_0x2de9('0x74')][_0x2de9('0xc')]=function(_0x13a4a7){this[_0x2de9('0xbf')]=_0x13a4a7;this[_0x2de9('0xd2')]();this[_0x2de9('0xe6')]();this[_0x2de9('0xc2')]();this[_0x2de9('0x11')]();};Window_BattleSkillExtra['prototype'][_0x2de9('0xb7')]=function(){this[_0x2de9('0x10')]=[];if(this[_0x2de9('0xbf')]&&!!this[_0x2de9('0xa2')]){var _0x31e2e1=this[_0x2de9('0xa2')][_0x2de9('0xb2')]();for(var _0x4d888e=0x0;_0x4d888e<this[_0x2de9('0xbf')]['length'];_0x4d888e++){var _0x37e3c9=$dataSkills[this[_0x2de9('0xbf')][_0x4d888e]];if(!!_0x37e3c9&&_0x31e2e1[_0x2de9('0x7a')](_0x37e3c9)){this[_0x2de9('0x10')][_0x2de9('0x53')](_0x37e3c9);}}}};Window_BattleSkillExtra['prototype'][_0x2de9('0xc2')]=function(){this['_positionXCorrection']=0x20;this[_0x2de9('0xd3')]=0x20;Window_ActorCommand[_0x2de9('0x74')][_0x2de9('0xc2')][_0x2de9('0x75')](this);};Olivia[_0x2de9('0x3')][_0x2de9('0x37')][_0x2de9('0x18')]=Window_ActorCommand[_0x2de9('0x74')][_0x2de9('0xa1')];Window_ActorCommand[_0x2de9('0x74')][_0x2de9('0xa1')]=function(){Olivia[_0x2de9('0x3')]['Effects'][_0x2de9('0x18')][_0x2de9('0x75')](this);if(!!this[_0x2de9('0xa2')]){this['applyItemSeal']();}};Window_ActorCommand[_0x2de9('0x74')][_0x2de9('0x8e')]=function(){var _0x54048b=this[_0x2de9('0x62')]('item');if(_0x54048b>=0x0){var _0x5fc399=this[_0x2de9('0xa2')][_0x2de9('0xef')]();for(var _0x57ef43=0x0;_0x57ef43<_0x5fc399[_0x2de9('0x92')];_0x57ef43++){var _0x1c5e7a=_0x5fc399[_0x57ef43];if(!!_0x1c5e7a&&_0x1c5e7a['note'][_0x2de9('0x30')](/<Item Seal>/i)){this['_list'][_0x54048b][_0x2de9('0xc8')]=![];return;}}}};