//=============================================================================
// Olivia Engine - Weakness Display - for RPG Maker MV version 1.6.1
// Olivia_WeaknessDisplay.js
//=============================================================================
 /*:
 * @plugindesc <WeaknessDisplay> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that creates a display in battle to show an
 * enemy's elemental weaknesses. These weaknesses will start off hidden and
 * will be slowly revealed whenever they receive elemental damage of the
 * correct type. Choose to display the enemy's HP status, too.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 * 
 * There are many plugin parameters to modify. But the most import ones to
 * modify are the "Element Data" plugin parameters. These plugin parameters
 * let you choose which elements will be shown in your game.
 *
 * Element Data:
 *
 * Shown Elements: This is a list of all the element ID's that are displayed
 * on the list. Leave out the ones you don't want displayed.
 *
 * Element Icons: Icon ID's used for the "Shown Elements" plugin parameter.
 * They will match the icons shown in the list above based on order.
 *
 * Unknown Weakness Icon: Icon ID used for an unrevealed element. If a
 * weakness hasn't been revealed yet, this icon will appear.
 *
 * Visual Display:
 *
 * Always Show?: Always show the weakness display? Otherwise, it is hidden
 * until enemy is selected or attacked.
 *
 * Hide After Duration: If the Weakness Display isn't always shown, hide after
 * this many frames of it being visible.
 *
 * Show HP Gauge?: Show the HP gauge for the enemy by default?
 *
 * Minimum Width: This is the minimum width of the HP gauge if the gauge is
 * smaller than the enemy name
 *
 * Gauge Padding: This is how much padding on both sides to give the HP gauge
 * after calculating the width
 *
 * Show Name?: Show the name of the enemy?
 *
 * Font Size: Font size used for enemy name
 *
 * 50% HP Color: Text color ID of the name when the enemy is at 50% HP or less.
 *
 * 25% HP Color: Text color ID of the name when the enemy is at 25% HP or less.
 *
 * Show States? Show states in the weakness display instead of on top of the
 * enemy sprite. This makes it easier to keep track of all enemy information in
 * one place instead.
 *
 * Small Weakness Icons: Draw smaller icons?
 *
 * Weak Icon Size: Rate of how much to shrink the weakness icons.
 *
 *
 *
 * --------
 * Notetags
 * --------
 * 
 * Skill and Item Notetags:
 *
 * <Analyze Weakness: x>
 * This will reveal x weaknesses that the player has not currently
 * revealed yet from the target enemy.
 *
 *
 *
 * Enemy Notetags:
 *
 * <Show HP Gauge>
 * This will show the enemy's HP gauge by default and ignore the plugin
 * parameter's default settings.
 *
 * <Hide HP Gauge>
 * This will hide the enemy's HP gauge by default and ignore the plugin
 * parameter's default settings.
 *
 *
 *
 * ------------
 * Script Calls
 * ------------
 *
 * BattleManager.revealWeakness(x)
 * Replace x with the number of weaknesses that are to be revealed for all
 * enemies in the battle.
 *
 * BattleManager.revealWeaknessByVariable(x)
 * Replace x with the variable ID. The x value determines how many weaknesses
 * are revealed for all enemies in the battle.
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
 * @param Weakness Element Data
 * @text Element Data
 * @parent Weakness Display
 * 
 * @param Shown Elements
 * @parent Weakness Element Data
 * @type number[]
 * @desc This is a list of all the element ID's that are displayed on the list.
 * @default ["1","2","3","4","5","6","7","8","9"]
 *
 * @param Element Icons
 * @parent Weakness Element Data
 * @type number[]
 * @desc Icon ID's used for the "Shown Elements" plugin parameter.
 * @default ["76","64","65","66","67","68","69","70","71"]
 *
 * @param Unknown Weakness Icon
 * @text Unrevealed Icon
 * @parent Weakness Element Data
 * @type number
 * @desc Icon ID used for an unrevealed element
 * @default 16
 *
 * @param
 *
 * @param Weakness Window Data
 * @text Visual Display
 * @parent Weakness Display
 *
 * @param Weakness Always Show
 * @text Always Show?
 * @parent Weakness Window Data
 * @type boolean
 * @on On
 * @off Off
 * @desc Always show the weakness display? Otherwise, it is hidden until enemy is selected or attacked.
 * @default true
 *
 * @param Weakness Hide Duration
 * @text Hide After Duration
 * @parent Weakness Always Show
 * @type number
 * @desc If the Weakness Display isn't always shown, hide after this many frames of it being visible.
 * @default 180
 *
 * @param Weakness Show Break Shield
 * @text Show Break Shield?
 * @parent Weakness Window Data
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the Break Shield for the enemy?
 * @default true
 *
 * @param Weakness Stun Duration
 * @text Show Stun Duration?
 * @parent Weakness Show Break Shield
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the number of turns left for the Break Stun?
 * @default false
 *
 * @param Weakness Show HP Gauge
 * @text Show HP Gauge?
 * @parent Weakness Window Data
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the HP gauge for the enemy by default?
 * @default true
 *
 * @param HP Gauge Minimum Width
 * @text Minimum Width
 * @parent Weakness Show HP Gauge
 * @type number
 * @desc This is the minimum width of the HP gauge if the gauge is smaller than the enemy name
 * @default 100
 *
 * @param HP Gauge Padding
 * @text Gauge Padding
 * @parent Weakness Show HP Gauge
 * @type number
 * @desc This is how much padding on both sides to give the HP gauge after calculating the width
 * @default 25
 *
 * @param Weakness Show Name
 * @text Show Name?
 * @parent Weakness Window Data
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the name of the enemy?
 * @default true
 *
 * @param Name Font Size
 * @text Font Size
 * @parent Weakness Show Name
 * @number
 * @min 1
 * @desc Font size used for enemy name
 * @default 22
 *
 * @param 50% HP Color
 * @parent Weakness Show Name
 * @type number
 * @desc Text color ID of the name when the enemy is at 50% HP or less.
 * @default 17
 *
 * @param 25% HP Color
 * @parent Weakness Show Name
 * @type number
 * @desc Text color ID of the name when the enemy is at 25% HP or less.
 * @default 2
 *
 * @param Weakness Show States
 * @text Show States?
 * @parent Weakness Window Data
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the states applied to the enemy? Will move the states sprite from the top of the enemy to here
 * @default true
 *
 * @param Small Weakness Icons
 * @parent Weakness Window Data
 * @type boolean
 * @on On
 * @off Off
 * @desc Draw smaller icons?
 * @default true
 *
 * @param Weak Icon Size
 * @parent Small Weakness Icons
 * @desc Rate of how much to shrink the weakness icons.
 * @default 0.6
 *
 * @param
 * @param
 *
 */
//=============================================================================

var _0x5946=['ElementIcons','_stateIconSprite','initializeRevealedEnemyWeaknesses','updateOpacity','OctoBattle','blt','clear','members','BoostPoint','enemyId','ShownElements','Weakness\x20Hide\x20Duration','center','UnknownIcon','floor','opacity','contents','25%\x20HP\x20Color','contains','___Game_Battler_startAnimation___','elementRate','isEnemy','_enemySprites','HpGaugePadding','getRevealedEnemyWeaknesses','standardPadding','createWeaknessDisplayWindow','NameFontSize','prototype','drawIcon','Weakness\x20Always\x20Show','Analyze','_iconWidth','SmallWeakIcons','width','___Game_Action_applyItemUserEffect___','fittingHeight','update','updatePosition','HpColor25','BreakShield','isShowWeaknessHpGauge','round','drawHpGauge','parse','_hpGaugeWidth','revealWeakness','parameters','drawBreakShield','YEP_ElementCore','contentsOpacity','damage','_iconHeight','_weaknessWindow','isSelected','enemy','___Sprite_Enemy_setBattler___','___Game_Action_apply___','Unknown\x20Weakness\x20Icon','WeakIconSize','max','applyItemUserEffect','HideDuration','drawWeaknessIcons','hpGaugeColor1','push','lineHeight','ShowHpGauge','Weakness\x20Show\x20Break\x20Shield','length','addEnemyWeaknessElement','revealWeaknessDisplay','subject','drawSubjectName','Name\x20Font\x20Size','_revealedEnemyWeaknesses','true','initialize','ceil','contentsWidth','changeTextColor','allIcons','ShowStates','initMembers','apply','_baseSprite','HP\x20Gauge\x20Padding','description','ShowName','refresh','YEP_BattleEngineCore','match','getItemElements','Weak\x20Icon\x20Size','_factorX','setup','boxWidth','IconSet','addChild','Enabled','HpColor50','Weakness\x20Show\x20HP\x20Gauge','startAnimation','_needRefreshAllEnemyWeaknessWindows','normalColor','isHidden','revealNewWeaknesses','indexOf','getWeaknessElements','___Sprite_Enemy_initMembers___','showBreakStunDuration','createStateIconSprite','AlwaysShow','setBattler','HpGaugeMinWidth','random','setSubject','_added','Shown\x20Elements','originalElementRate','drawBreakShieldIcon','setCalculationConstants','Small\x20Weakness\x20Icons','multiplierForBP','name','call','WeaknessDisplay','updateEnemyWeaknessWindows','note','drawSmallIcon','_sprite','Element\x20Icons','moveStateSprite','textColor','___Spriteset_Battle_update___','ShowStunTurns','_factorY','textWidth','Weakness\x20Stun\x20Duration','Weakness\x20Show\x20Name','Olivia_OctoBattle','attackElements','ShowBreakShield','hpRate','_showWeaknessDisplay','applyWeaknessAnalyze','WeakRate','_enemy','splice','ProtectIcon','value','Weakness','<WeaknessDisplay>','_subject','executeDamage','___Game_System_initialize___','___Game_Action_executeDamage___','fontSize','resetFontSettings','HP\x20Gauge\x20Minimum\x20Width','item','___Game_BattlerBase_refresh___','battler'];(function(_0x493671,_0x5946d4){var _0x3eafc0=function(_0x467f4f){while(--_0x467f4f){_0x493671['push'](_0x493671['shift']());}};_0x3eafc0(++_0x5946d4);}(_0x5946,0x197));var _0x3eaf=function(_0x493671,_0x5946d4){_0x493671=_0x493671-0x0;var _0x3eafc0=_0x5946[_0x493671];return _0x3eafc0;};var Imported=Imported||{};Imported[_0x3eaf('0x3b')]=!![];var Olivia=Olivia||{};Olivia[_0x3eaf('0x56')]=Olivia[_0x3eaf('0x56')]||{};var parameters=$plugins['filter'](function(_0x392e19){return _0x392e19[_0x3eaf('0x6')]['contains'](_0x3eaf('0x47'));})[0x0][_0x3eaf('0x81')];Olivia['OctoBattle'][_0x3eaf('0x2d')]={'Enabled':!![],'ShownElements':JSON[_0x3eaf('0x7e')](parameters[_0x3eaf('0x25')]),'ElementIcons':JSON[_0x3eaf('0x7e')](parameters[_0x3eaf('0x32')]),'UnknownIcon':Number(parameters[_0x3eaf('0x8c')]),'AlwaysShow':eval(parameters[_0x3eaf('0x70')]),'HideDuration':Number(parameters[_0x3eaf('0x5d')]||0xb4),'ShowBreakShield':eval(parameters[_0x3eaf('0x96')]),'ShowStunTurns':eval(parameters[_0x3eaf('0x39')]),'ShowHpGauge':eval(parameters[_0x3eaf('0x14')]),'HpGaugeMinWidth':Number(parameters[_0x3eaf('0x4e')]||0x64),'HpGaugePadding':Number(parameters[_0x3eaf('0x5')]||0x64),'ShowName':eval(parameters[_0x3eaf('0x3a')]),'NameFontSize':Number(parameters[_0x3eaf('0x9c')]||0x16),'HpColor50':Number(parameters['50%\x20HP\x20Color']||0x11),'HpColor25':Number(parameters[_0x3eaf('0x63')]||0x12),'ShowStates':eval(parameters['Weakness\x20Show\x20States']||_0x3eaf('0x9e')),'SmallWeakIcons':eval(parameters[_0x3eaf('0x29')]),'WeakIconSize':Number(parameters[_0x3eaf('0xc')]||0.6)};Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')]=Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')]||{};BattleManager['revealWeaknessByVariable']=function(_0x31436c){var _0x5fa0e9=$gameVariables[_0x3eaf('0x45')](_0x31436c);this[_0x3eaf('0x80')](_0x5fa0e9);};BattleManager[_0x3eaf('0x80')]=function(_0x252676){var _0x12e3f3=$gameTroop[_0x3eaf('0x59')]();var _0x246fcc=[];for(var _0xdc07c0=0x0;_0xdc07c0<_0x12e3f3['length'];_0xdc07c0++){var _0x569dd2=_0x12e3f3[_0xdc07c0];if(!!_0x569dd2&&!_0x246fcc[_0x3eaf('0x64')](_0x569dd2['enemyId']())){_0x569dd2['revealNewWeaknesses'](_0x252676);_0x246fcc[_0x3eaf('0x93')](_0x569dd2[_0x3eaf('0x5b')]());}}};Olivia[_0x3eaf('0x56')]['Weakness'][_0x3eaf('0x4a')]=Game_System[_0x3eaf('0x6e')]['initialize'];Game_System[_0x3eaf('0x6e')][_0x3eaf('0x9f')]=function(){Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x4a')][_0x3eaf('0x2c')](this);this[_0x3eaf('0x54')]();};Game_System[_0x3eaf('0x6e')][_0x3eaf('0x54')]=function(){this[_0x3eaf('0x9d')]=this[_0x3eaf('0x9d')]||{};};Game_System[_0x3eaf('0x6e')]['addEnemyWeaknessElement']=function(_0x3e2c7d,_0x3e20f0){if(this[_0x3eaf('0x9d')]===undefined){this[_0x3eaf('0x54')]();}this['_revealedEnemyWeaknesses'][_0x3e2c7d]=this[_0x3eaf('0x9d')][_0x3e2c7d]||[];if(!this[_0x3eaf('0x9d')][_0x3e2c7d][_0x3eaf('0x64')](_0x3e20f0)){this['_revealedEnemyWeaknesses'][_0x3e2c7d][_0x3eaf('0x93')](_0x3e20f0);}this[_0x3eaf('0x9d')][_0x3e2c7d]['sort'](function(_0x462e79,_0x22b355){return _0x462e79-_0x22b355;});};Game_System[_0x3eaf('0x6e')]['getRevealedEnemyWeaknesses']=function(_0x3b8b4f){if(this[_0x3eaf('0x9d')]===undefined){this[_0x3eaf('0x54')]();}this[_0x3eaf('0x9d')][_0x3b8b4f]=this[_0x3eaf('0x9d')][_0x3b8b4f]||[];return this[_0x3eaf('0x9d')][_0x3b8b4f];};Olivia[_0x3eaf('0x56')]['Weakness']['___Game_Action_apply___']=Game_Action[_0x3eaf('0x6e')][_0x3eaf('0x3')];Game_Action[_0x3eaf('0x6e')][_0x3eaf('0x3')]=function(_0x32f410){Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x8b')][_0x3eaf('0x2c')](this,_0x32f410);_0x32f410['revealWeaknessDisplay']();};Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x4b')]=Game_Action[_0x3eaf('0x6e')][_0x3eaf('0x49')];Game_Action[_0x3eaf('0x6e')][_0x3eaf('0x49')]=function(_0x393e13,_0x5946f5){Olivia['OctoBattle']['Weakness']['___Game_Action_executeDamage___'][_0x3eaf('0x2c')](this,_0x393e13,_0x5946f5);if(!!_0x393e13&&_0x393e13['isEnemy']()&&_0x5946f5!==0x0){this['addEnemyWeaknessElement'](_0x393e13);}};Game_Action[_0x3eaf('0x6e')][_0x3eaf('0x98')]=function(_0x48b528){if(Imported[_0x3eaf('0x83')]){var _0x52cb56=this[_0x3eaf('0xb')]();}else{var _0x5edfdb=this[_0x3eaf('0x4f')]()[_0x3eaf('0x85')]['elementId'];if(_0x5edfdb<0x0){var _0x52cb56=this[_0x3eaf('0x9a')]()[_0x3eaf('0x3c')]();}else{var _0x52cb56=[_0x5edfdb];}}for(var _0x48efe4=0x0;_0x48efe4<_0x52cb56[_0x3eaf('0x97')];_0x48efe4++){var _0x5edfdb=_0x52cb56[_0x48efe4];if(_0x5edfdb>0x0){$gameSystem['addEnemyWeaknessElement'](_0x48b528[_0x3eaf('0x5b')](),_0x5edfdb);}}};Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x75')]=Game_Action[_0x3eaf('0x6e')][_0x3eaf('0x8f')];Game_Action[_0x3eaf('0x6e')][_0x3eaf('0x8f')]=function(_0x3790a1){Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x75')]['call'](this,_0x3790a1);if(_0x3790a1['isEnemy']()){this[_0x3eaf('0x40')](_0x3790a1);}};Game_Action[_0x3eaf('0x6e')][_0x3eaf('0x40')]=function(_0x562d46){if(this[_0x3eaf('0x4f')]()[_0x3eaf('0x2f')]['match'](/<Analyze (?:Weakness|Weaknesses): (\d+)>/i)){var _0x16882d=parseInt(RegExp['$1']);if(Olivia[_0x3eaf('0x56')][_0x3eaf('0x5a')]&&this[_0x3eaf('0x4f')]()[_0x3eaf('0x2f')][_0x3eaf('0xa')](/<(?:BP|Boost) Analyze>/i)){var _0x475f45=this[_0x3eaf('0x9a')]()[_0x3eaf('0x2a')](_0x3eaf('0x71'));_0x16882d=Math['round'](_0x475f45*_0x16882d);_0x16882d+=this[_0x3eaf('0x9a')]()['additionForBP'](_0x3eaf('0x71'));}_0x562d46[_0x3eaf('0x19')](_0x16882d);}};Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x50')]=Game_BattlerBase[_0x3eaf('0x6e')][_0x3eaf('0x8')];Game_BattlerBase[_0x3eaf('0x6e')]['refresh']=function(){Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x50')][_0x3eaf('0x2c')](this);$gameTemp['_needRefreshAllEnemyWeaknessWindows']=!![];};Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x65')]=Game_Battler[_0x3eaf('0x6e')][_0x3eaf('0x15')];Game_Battler[_0x3eaf('0x6e')][_0x3eaf('0x15')]=function(_0x1b4914,_0x559ce8,_0x41b362){Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x65')][_0x3eaf('0x2c')](this,_0x1b4914,_0x559ce8,_0x41b362);this[_0x3eaf('0x99')]();};Game_Battler[_0x3eaf('0x6e')][_0x3eaf('0x99')]=function(){if(this[_0x3eaf('0x67')]()){this[_0x3eaf('0x3f')]=Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x90')];}};Game_Enemy[_0x3eaf('0x6e')][_0x3eaf('0x1b')]=function(){var _0x2eee0d=[];for(var _0x5f1f74=0x0;_0x5f1f74<Olivia['OctoBattle'][_0x3eaf('0x2d')][_0x3eaf('0x5c')][_0x3eaf('0x97')];_0x5f1f74++){var _0x16394a=Number(Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x5c')][_0x5f1f74]);if(Olivia[_0x3eaf('0x56')]['BreakShield']&&Olivia[_0x3eaf('0x56')]['BreakShield'][_0x3eaf('0x12')]){if(this[_0x3eaf('0x26')](_0x16394a)>=Olivia[_0x3eaf('0x56')][_0x3eaf('0x7a')][_0x3eaf('0x41')]){_0x2eee0d[_0x3eaf('0x93')](_0x16394a);}}else{if(this[_0x3eaf('0x66')](_0x16394a)>=1.1){_0x2eee0d[_0x3eaf('0x93')](_0x16394a);}}}return _0x2eee0d;};Game_Enemy['prototype'][_0x3eaf('0x7b')]=function(){if(this['enemy']()[_0x3eaf('0x2f')][_0x3eaf('0xa')](/<No HP Gauge>/i)){return![];}else if(this[_0x3eaf('0x89')]()[_0x3eaf('0x2f')][_0x3eaf('0xa')](/<Show HP Gauge>/i)){return!![];}else if(this[_0x3eaf('0x89')]()['note']['match'](/<Hide HP Gauge>/i)){return![];}return Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x95')];};Game_Enemy[_0x3eaf('0x6e')][_0x3eaf('0x19')]=function(_0x5e8b90){var _0x521f50=this[_0x3eaf('0x1b')]();var _0x429bb4=$gameSystem[_0x3eaf('0x6a')](this['enemyId']());var _0x174c20=[];for(var _0x1c5deb=0x0;_0x1c5deb<_0x521f50[_0x3eaf('0x97')];_0x1c5deb++){var _0x33d750=_0x521f50[_0x1c5deb];if(!_0x429bb4[_0x3eaf('0x64')](_0x33d750)){_0x174c20[_0x3eaf('0x93')](_0x33d750);}}while(_0x5e8b90>0x0){if(_0x174c20['length']<=0x0){break;}_0x5e8b90-=0x1;var _0xd87ffe=Math['floor'](Math[_0x3eaf('0x22')]()*_0x174c20[_0x3eaf('0x97')]);var _0x24a512=_0x174c20[_0xd87ffe];$gameSystem[_0x3eaf('0x98')](this[_0x3eaf('0x5b')](),_0x24a512);_0x174c20[_0x3eaf('0x43')](_0xd87ffe,0x1);this[_0x3eaf('0x99')]();}$gameTemp[_0x3eaf('0x16')]=!![];};Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x35')]=Spriteset_Battle['prototype'][_0x3eaf('0x77')];Spriteset_Battle[_0x3eaf('0x6e')]['update']=function(){Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')]['___Spriteset_Battle_update___'][_0x3eaf('0x2c')](this);this[_0x3eaf('0x2e')]();};Spriteset_Battle[_0x3eaf('0x6e')][_0x3eaf('0x2e')]=function(){if($gameTemp['_needRefreshAllEnemyWeaknessWindows']===!![]){for(var _0x78e2fc=0x0;_0x78e2fc<this[_0x3eaf('0x68')][_0x3eaf('0x97')];_0x78e2fc++){var _0xcabfef=this['_enemySprites'][_0x78e2fc];if(!!_0xcabfef&&!!_0xcabfef[_0x3eaf('0x87')]){_0xcabfef[_0x3eaf('0x87')]['refresh']();if(_0xcabfef[_0x3eaf('0x87')][_0x3eaf('0x24')]===![]){this[_0x3eaf('0x4')][_0x3eaf('0x11')](_0xcabfef[_0x3eaf('0x87')]);}}}$gameTemp['_needRefreshAllEnemyWeaknessWindows']=![];}};Olivia['OctoBattle'][_0x3eaf('0x46')][_0x3eaf('0x1c')]=Sprite_Enemy[_0x3eaf('0x6e')][_0x3eaf('0x2')];Sprite_Enemy[_0x3eaf('0x6e')][_0x3eaf('0x2')]=function(){Olivia['OctoBattle'][_0x3eaf('0x46')][_0x3eaf('0x1c')][_0x3eaf('0x2c')](this);this[_0x3eaf('0x6c')]();};Sprite_Enemy[_0x3eaf('0x6e')][_0x3eaf('0x6c')]=function(){this['_weaknessWindow']=new Window_WeaknessDisplay(this[_0x3eaf('0x42')],this);this[_0x3eaf('0x87')][_0x3eaf('0x8')]();this['_weaknessWindow']['_added']=![];if(Olivia[_0x3eaf('0x56')]['WeaknessDisplay'][_0x3eaf('0x1')]){this[_0x3eaf('0x53')][_0x3eaf('0x61')]=0x0;}};Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')]['___Sprite_Enemy_setBattler___']=Sprite_Enemy[_0x3eaf('0x6e')]['setBattler'];Sprite_Enemy[_0x3eaf('0x6e')][_0x3eaf('0x20')]=function(_0xc6a921){Olivia[_0x3eaf('0x56')][_0x3eaf('0x46')][_0x3eaf('0x8a')]['call'](this,_0xc6a921);if(!!this[_0x3eaf('0x87')]){this['_weaknessWindow']['setSubject'](_0xc6a921);}};function Window_WeaknessDisplay(){this[_0x3eaf('0x9f')][_0x3eaf('0x3')](this,arguments);}Window_WeaknessDisplay[_0x3eaf('0x6e')]=Object['create'](Window_Base[_0x3eaf('0x6e')]);Window_WeaknessDisplay[_0x3eaf('0x6e')]['constructor']=Window_WeaknessDisplay;Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x9f')]=function(_0x213886,_0xe700b2){this[_0x3eaf('0x48')]=_0x213886;this['_sprite']=_0xe700b2;var _0x41c652=Math['ceil'](Graphics[_0x3eaf('0xf')]/0x2);var _0x3692f0=this[_0x3eaf('0x76')](0x2);this[_0x3eaf('0x28')]();Window_Base[_0x3eaf('0x6e')][_0x3eaf('0x9f')][_0x3eaf('0x2c')](this,0x0,0x0,_0x41c652,_0x3692f0);this[_0x3eaf('0x1e')]();this[_0x3eaf('0x61')]=0x0;this[_0x3eaf('0x8')]();};Window_WeaknessDisplay['prototype'][_0x3eaf('0x6b')]=function(){return 0x0;};Window_WeaknessDisplay['prototype'][_0x3eaf('0x28')]=function(){this[_0x3eaf('0xd')]=-0x1*Math[_0x3eaf('0xa0')](Graphics['boxWidth']*0.25);this[_0x3eaf('0x37')]=-0x1*Math[_0x3eaf('0x7c')](this[_0x3eaf('0x94')]()*0.75);};Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x1e')]=function(){if(Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')]){this['_stateIconSprite']=new Sprite_StateIcon();this[_0x3eaf('0x11')](this['_stateIconSprite']);this[_0x3eaf('0x53')]['x']=this[_0x3eaf('0x74')]/0x2;this[_0x3eaf('0x53')]['y']=0x0;}};Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x77')]=function(){Window_Base[_0x3eaf('0x6e')][_0x3eaf('0x77')]['call'](this);if(!!this[_0x3eaf('0x48')]){this[_0x3eaf('0x78')]();this[_0x3eaf('0x55')]();}};Window_WeaknessDisplay[_0x3eaf('0x6e')]['updatePosition']=function(){this['x']=this[_0x3eaf('0x31')]['x']+this[_0x3eaf('0xd')];this['y']=this['_sprite']['y']+this[_0x3eaf('0x37')];};Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x55')]=function(){if(this[_0x3eaf('0x48')][_0x3eaf('0x18')]()||this['_subject']['isDead']()){this[_0x3eaf('0x84')]-=0x10;}else if(Imported['YEP_BattleEngineCore']&&this[_0x3eaf('0x48')][_0x3eaf('0x51')]()&&this[_0x3eaf('0x48')]['battler']()[_0x3eaf('0x61')]<=0x0){this[_0x3eaf('0x84')]-=0x10;}else if(Olivia[_0x3eaf('0x56')]['WeaknessDisplay'][_0x3eaf('0x1f')]){this[_0x3eaf('0x84')]=0xff;}else if(this[_0x3eaf('0x48')][_0x3eaf('0x88')]()){this[_0x3eaf('0x84')]=0xff;}else if(this[_0x3eaf('0x48')][_0x3eaf('0x3f')]>0x0){this[_0x3eaf('0x84')]=0xff;this[_0x3eaf('0x48')]['_showWeaknessDisplay']-=0x1;}else{this[_0x3eaf('0x84')]-=0x10;}if(!!this['_stateIconSprite']){this[_0x3eaf('0x53')][_0x3eaf('0x61')]=this[_0x3eaf('0x84')];}};Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x23')]=function(_0x10bd04){this[_0x3eaf('0x48')]=_0x10bd04;this[_0x3eaf('0x48')]['_showWeaknessDisplay']=this[_0x3eaf('0x48')][_0x3eaf('0x3f')]||Olivia['OctoBattle'][_0x3eaf('0x2d')][_0x3eaf('0x90')];if(!!this[_0x3eaf('0x53')]){this[_0x3eaf('0x53')][_0x3eaf('0xe')](this[_0x3eaf('0x48')]);}if(this[_0x3eaf('0x48')][_0x3eaf('0x18')]()){this['contentsOpacity']=0x0;}this[_0x3eaf('0x8')]();};Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x8')]=function(){this[_0x3eaf('0x62')][_0x3eaf('0x58')]();if(!!this[_0x3eaf('0x48')]){this[_0x3eaf('0x7d')]();this[_0x3eaf('0x9b')]();this[_0x3eaf('0x82')]();this[_0x3eaf('0x91')]();if(!!this[_0x3eaf('0x53')]){this[_0x3eaf('0x33')]();}}};Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x7d')]=function(){if(this[_0x3eaf('0x48')]['isShowWeaknessHpGauge']()){if(Olivia['OctoBattle']['WeaknessDisplay']['ShowName']){this['resetFontSettings']();this[_0x3eaf('0x62')][_0x3eaf('0x4c')]=Olivia[_0x3eaf('0x56')]['WeaknessDisplay'][_0x3eaf('0x6d')];var _0x3696fc=this[_0x3eaf('0x38')](this[_0x3eaf('0x48')][_0x3eaf('0x2b')]());this[_0x3eaf('0x4d')]();_0x3696fc=Math[_0x3eaf('0x8e')](Olivia['OctoBattle'][_0x3eaf('0x2d')][_0x3eaf('0x21')],_0x3696fc);}else{var _0x3696fc=Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x21')];}_0x3696fc+=0x2*Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x69')];this[_0x3eaf('0x7f')]=_0x3696fc;var _0x252243=Math[_0x3eaf('0x7c')]((this[_0x3eaf('0xa1')]()-_0x3696fc)/0x2);var _0x458d00=this[_0x3eaf('0x48')]['hpRate']();var _0x1ec2c5=this[_0x3eaf('0x92')]();var _0x459e3d=this['hpGaugeColor2']();this['drawGauge'](_0x252243,0x0,_0x3696fc,_0x458d00,_0x1ec2c5,_0x459e3d);}else{this[_0x3eaf('0x7f')]=0x0;}};Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x9b')]=function(){if(Olivia['OctoBattle'][_0x3eaf('0x2d')][_0x3eaf('0x7')]){this[_0x3eaf('0x4d')]();this[_0x3eaf('0x62')][_0x3eaf('0x4c')]=Olivia['OctoBattle'][_0x3eaf('0x2d')][_0x3eaf('0x6d')];if(this[_0x3eaf('0x48')][_0x3eaf('0x3e')]()>0.5){this[_0x3eaf('0xa2')](this[_0x3eaf('0x17')]());}else if(this[_0x3eaf('0x48')]['hpRate']()>0.25){this[_0x3eaf('0xa2')](this[_0x3eaf('0x34')](Olivia[_0x3eaf('0x56')]['WeaknessDisplay'][_0x3eaf('0x13')]));}else{this[_0x3eaf('0xa2')](this[_0x3eaf('0x34')](Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x79')]));}this['drawText'](this[_0x3eaf('0x48')][_0x3eaf('0x2b')](),0x0,0x0,this[_0x3eaf('0xa1')](),_0x3eaf('0x5e'));this[_0x3eaf('0x4d')]();}};Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x82')]=function(){if(Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x3d')]&&Olivia[_0x3eaf('0x56')][_0x3eaf('0x7a')]&&Olivia['OctoBattle'][_0x3eaf('0x7a')][_0x3eaf('0x12')]&&Olivia[_0x3eaf('0x56')][_0x3eaf('0x7a')]['Enemies']){if(Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x7')]){this['resetFontSettings']();this[_0x3eaf('0x62')]['fontSize']=Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x6d')];var _0x302321=this[_0x3eaf('0x38')](this['_subject'][_0x3eaf('0x2b')]());this[_0x3eaf('0x4d')]();_0x302321=Math[_0x3eaf('0x8e')](this[_0x3eaf('0x7f')],_0x302321);var _0x508b8c=Math[_0x3eaf('0x7c')]((this['contentsWidth']()-_0x302321)/0x2)-Window_Base[_0x3eaf('0x72')]-0x2;}else if(Olivia[_0x3eaf('0x56')]['WeaknessDisplay'][_0x3eaf('0x1')]&&this[_0x3eaf('0x48')][_0x3eaf('0x0')]()[_0x3eaf('0x97')]>0x0){var _0x508b8c=Math[_0x3eaf('0x7c')](this[_0x3eaf('0xa1')]()/0x2)-Window_Base[_0x3eaf('0x72')];}else{var _0x508b8c=Math[_0x3eaf('0x7c')]((this[_0x3eaf('0xa1')]()-Window_Base[_0x3eaf('0x72')])/0x2);}this[_0x3eaf('0x27')](this[_0x3eaf('0x48')],_0x508b8c,0x0);}};Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x33')]=function(){var _0x4f312c=Math[_0x3eaf('0x7c')](this[_0x3eaf('0xa1')]()/0x2);var _0x524fb5=Math['round'](this['lineHeight']()/0x2)-0x2;if(Olivia['OctoBattle'][_0x3eaf('0x2d')][_0x3eaf('0x95')]){if(Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x7')]){this[_0x3eaf('0x4d')]();this[_0x3eaf('0x62')][_0x3eaf('0x4c')]=Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x6d')];var _0x34edfd=this[_0x3eaf('0x38')](this[_0x3eaf('0x48')][_0x3eaf('0x2b')]());this['resetFontSettings']();_0x34edfd=Math[_0x3eaf('0x8e')](Olivia['OctoBattle'][_0x3eaf('0x2d')][_0x3eaf('0x21')],_0x34edfd);}else{var _0x34edfd=Olivia['OctoBattle']['WeaknessDisplay'][_0x3eaf('0x21')];}_0x34edfd+=0x2*Olivia[_0x3eaf('0x56')]['WeaknessDisplay']['HpGaugePadding']+0x2;_0x4f312c+=Math[_0x3eaf('0x7c')](_0x34edfd/0x2)+Math[_0x3eaf('0x7c')](Window_Base[_0x3eaf('0x72')]/0x2);}else if(Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x7')]){this[_0x3eaf('0x4d')]();this['contents'][_0x3eaf('0x4c')]=Olivia[_0x3eaf('0x56')]['WeaknessDisplay'][_0x3eaf('0x6d')];var _0x34edfd=this[_0x3eaf('0x38')](this[_0x3eaf('0x48')]['name']())+Window_Base[_0x3eaf('0x72')]+0x4;this[_0x3eaf('0x4d')]();_0x4f312c+=Math['round'](_0x34edfd/0x2);}else if(Olivia[_0x3eaf('0x56')]['WeaknessDisplay'][_0x3eaf('0x3d')]){_0x4f312c+=Math[_0x3eaf('0x7c')](Window_Base[_0x3eaf('0x72')]/0x2);}else{_0x524fb5-=this[_0x3eaf('0x94')]();}this['_stateIconSprite']['x']=_0x4f312c;this[_0x3eaf('0x53')]['y']=_0x524fb5;};Window_WeaknessDisplay['prototype'][_0x3eaf('0x1d')]=function(){return Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x36')];};Window_WeaknessDisplay[_0x3eaf('0x6e')]['drawWeaknessIcons']=function(){var _0x93ce1d=this[_0x3eaf('0x48')]['getWeaknessElements']();var _0x30657b=Window_Base['_iconWidth'];if(Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x73')]){_0x30657b=Math[_0x3eaf('0x7c')](_0x30657b*Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x8d')]);}var _0x48bce3=_0x93ce1d[_0x3eaf('0x97')]*_0x30657b;var _0x45ee16=Math[_0x3eaf('0x7c')]((this[_0x3eaf('0xa1')]()-_0x48bce3)/0x2);if(!Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x7')]&&!Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x3d')]&&!Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x95')]){var _0xd7d668=0x0;}else{var _0xd7d668=this[_0x3eaf('0x94')]();}var _0x20f03c=$gameSystem['getRevealedEnemyWeaknesses'](this[_0x3eaf('0x48')][_0x3eaf('0x5b')]());if(Olivia[_0x3eaf('0x56')][_0x3eaf('0x7a')]&&Olivia[_0x3eaf('0x56')][_0x3eaf('0x7a')][_0x3eaf('0x12')]){var _0x54dac8=this[_0x3eaf('0x48')]['getProtectedWeaknessElements']();}for(var _0x291f14=0x0;_0x291f14<_0x93ce1d[_0x3eaf('0x97')];_0x291f14++){var _0x268730=_0x93ce1d[_0x291f14];if(_0x20f03c[_0x3eaf('0x64')](_0x268730)){var _0x220282=Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x5c')][_0x3eaf('0x1a')](String(_0x268730));var _0x3c55c2=Number(Olivia[_0x3eaf('0x56')]['WeaknessDisplay'][_0x3eaf('0x52')][_0x220282]);}else{var _0x3c55c2=Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x5f')];}if(Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x73')]){this[_0x3eaf('0x30')](_0x3c55c2,_0x45ee16,_0xd7d668);}else{this[_0x3eaf('0x6f')](_0x3c55c2,_0x45ee16,_0xd7d668);}if(Olivia[_0x3eaf('0x56')]['BreakShield']&&Olivia[_0x3eaf('0x56')][_0x3eaf('0x7a')]['Enabled']&&_0x54dac8[_0x3eaf('0x64')](_0x268730)){var _0x3c55c2=Olivia[_0x3eaf('0x56')][_0x3eaf('0x7a')][_0x3eaf('0x44')];if(Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')]['SmallWeakIcons']){this[_0x3eaf('0x30')](_0x3c55c2,_0x45ee16,_0xd7d668);}else{this[_0x3eaf('0x6f')](_0x3c55c2,_0x45ee16,_0xd7d668);}}_0x45ee16+=_0x30657b;}};Window_WeaknessDisplay[_0x3eaf('0x6e')][_0x3eaf('0x30')]=function(_0x3d02b8,_0x4a5649,_0x19c483){var _0x386b65=ImageManager['loadSystem'](_0x3eaf('0x10'));var _0x2e366c=Window_Base[_0x3eaf('0x72')];var _0x5b5a68=Window_Base[_0x3eaf('0x86')];var _0x317d5b=_0x3d02b8%0x10*_0x2e366c;var _0x128b45=Math[_0x3eaf('0x60')](_0x3d02b8/0x10)*_0x5b5a68;var _0x3b92a8=Olivia[_0x3eaf('0x56')][_0x3eaf('0x2d')][_0x3eaf('0x8d')];this['contents'][_0x3eaf('0x57')](_0x386b65,_0x317d5b,_0x128b45,_0x2e366c,_0x5b5a68,_0x4a5649,_0x19c483,Math[_0x3eaf('0x7c')](_0x2e366c*_0x3b92a8),Math[_0x3eaf('0x7c')](_0x5b5a68*_0x3b92a8));};if(Imported[_0x3eaf('0x9')]){Window_EnemyVisualSelect[_0x3eaf('0x6e')][_0x3eaf('0x8')]=function(){};}