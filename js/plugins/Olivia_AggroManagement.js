//=============================================================================
// Olivia Engine - Aggro Management - for RPG Maker MV version 1.6.1+
// Olivia.AggroManagementManagement.js
//=============================================================================
 /*:
 * @plugindesc <AggroManagement> for RPG Maker MV version 1.6.1+.
 * @author Fallen Angel Olivia
 *
 * @help
 * ---------------------------------
 * Read First! I M P O R T A N T ! !
 * ---------------------------------
 *
 * Aggro is a term used in games to describe the act of getting the attention
 * of an enemy. In battle, this can be because a healer has recovered too much
 * damage, the tank used a skill to generate aggro, or a warrior using their
 * ultimate attack. If an actor's aggro is too high, the enemy will perceive
 * that actor as a threat and must eliminate them quickly.
 *
 * This plugin adds such a system into your game. You can determine how much
 * aggro certain actions will generate through notetags. Aggro will reset at
 * the start of each battle and gradually fill over time depending on your
 * notetag settings. Notetags can increase the aggro of the action's user or
 * the target.
 *
 * Optionally, gauges can appear over an actor's head to indicate to the player
 * their current aggro level. If it's a full gauge, they have the highest aggro
 * in the party and are more likely to be attacked. If it's an empty gauge,
 * they have the lowest aggro and are less likely to be attacked.
 *
 * *NOTE* If you are using Yanfly's Battle A.I. Core, Target Core, and/or
 * Selection Control plugins, place this plugin underneath those for the best
 * compatibility.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Target Highest Aggro:
 * - Always have enemies target highest aggro members?
 * - If disabled, members with higher aggro have a higher chance of being
 *   targeted instead of always being targeted.
 *
 * Show Aggro Gauge:
 * - Shows the aggro gauge in battle.
 * - If on, it will appear over the actor's head.
 *
 * Gauge Color 1:
 * Gauge Color 2:
 * - These two plugin parameter settings determine the colors used by the aggro
 *   gauge in battle.
 *
 *
 *
 * --------
 * Notetags
 * --------
 *
 * Skill and Item Notetags:
 *
 * <Aggro: +100>
 * <Aggro: -50>
 * Sets the amount of aggro gained or lost by using this skill/item.
 * Aggro is later increased by the actor's TGR rate.
 * Total aggro cannot go below 1 for calculation purposes.
 *
 * <Target Aggro: +200>
 * <Target Aggro: -100>
 * Reduces the target's aggro amount per successful hit of this skill/item.
 * Aggro is later increased by the actor's TGR rate.
 * Total aggro cannot go below 1 for calculation purposes.
 *
 * 
 *
 * Actor, Class, Weapon, Armor, State Notetags:
 *
 * <Aggro Multiplier: 200%>
 * Multiplies the affected actor's base aggro amount by this percentage.
 * Aggro is later increased by the actor's TGR rate.
 *
 *
 *
 * -----------------------------------
 * Yanfly's Battle A.I. Core Additions
 * -----------------------------------
 *
 * This plugin adds compatibility with Yanfly's Battle A.I. Core. You can now
 * specify which skills in the AI Priority list to target the targets with the
 * highest TGR or the targets with the lowest TGR by using these two targeting
 * terms to indicate which:
 *
 * Highest Aggro
 * - Targets the highest aggro member.
 * - If multiple members match this condition, select a random one.
 * - If no such condition is met, a random target is selected.
 *
 * Lowest Aggro
 * - Targets the lowest aggro member
 * - If multiple members match this condition, select a random one.
 * - If no such condition is met, a random target is selected.
 *
 * Aggro >= 500
 * - Targets members with 500 or more aggro.
 * - If multiple members match this condition, select a random one.
 * - If no such condition is met, a random target is selected.
 *
 * Aggro > 400
 * - Targets members with over 400 aggro.
 * - If multiple members match this condition, select a random one.
 * - If no such condition is met, a random target is selected.
 *
 * Aggro === 300
 * - Targets members with exactly 300 aggro.
 * - If no such condition is met, a random target is selected.
 *
 * Aggro !== 350
 * - Targets members with anything except 350 aggro.
 * - If no such condition is met, a random target is selected.
 *
 * Aggro < 200
 * - Targets members with under 200 aggro.
 * - If multiple members match this condition, select a random one.
 * - If no such condition is met, a random target is selected.
 *
 * Aggro <= 100
 * - Targets members with 100 or less aggro.
 * - If multiple members match this condition, select a random one.
 * - If no such condition is met, a random target is selected.
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
 * @param Target Highest Aggro
 * @desc Always have enemies target highest aggro members?
 * @default true
 *
 * @param Show Aggro Gauge
 * @desc Show the aggro gauge?
 * @default true
 *
 * @param Gauge Color 1
 * @desc Gauge color 1 of the aggro gauge.
 * @default #959595
 *
 * @param Gauge Color 2
 * @desc Gauge color 2 of the aggro gauge.
 * @default #ffffff
 *
 */
//=============================================================================

const _0x170d=['updateFlashing','note','gaugeColor1','_flashingCount','Target\x20Highest\x20Aggro','Gauge\x20Color\x201','outlineWidth','applyGlobal','_battler','_window','labelOpacity','apply','setBlendColor','aggroGaugeParent','fontSize','highestTgrMember','valueOutlineColor','labelOutlineWidth','labelColor','_duration','applySubjectAggro','AggroManagement','time','aggro','scope','<AggroManagement>','subject','aliveMembers','_targetMaxValue','textColor','Olivia_AggroManagement','outlineColor','opponentsUnit','reduce','match','left','valueFontSize','applyItemUserEffect','_scene','drawGaugeRect','redraw','length','gaugeBackColor','prototype','flashingColor2','labelFontSize','onBattleStart','call','flashingColor1','constructor','currentMaxValue','bitmapWidth','gaugeHeight','labelY','gainAggro','initialize','createBattleField','fillRect','_targetValue','tgr','rgba(0,\x200,\x200,\x201)','targetsForOpponents','valueColor','updateTargetValue','max','_aggroGaugeContainer','setup','setupValueFont','contents','randomInt','label','createAggroGauge','valueFontFace','_battleAggro','clear','_maxValue','systemColor','_value','anchor','drawLabel','map','valueOutlineWidth','updateGaugeAnimation','bitmapHeight','isValid','height','createBitmap','destroy','tgrMin','drawText','_battleField','setProperTarget','YEP_BattleAICore','_statusType','setFrame','action','addChild','item','fontFace','setupLabelFont','_aiTarget','initMembers','clearAggro','normalColor','isPreserveTp','updateAggroGaugeSprite','drawValue','create','updateBitmap','Gauge\x20Color\x202','labelOutlineColor','baseAggro','isInputting','parameters','min','filter','bind','inBattle','aggroMultiplier','paintOpacity','labelFontFace','tgrMax','_spriteset','gaugeX','setAITarget','_battleAggroGaugeSprite','Show\x20Aggro\x20Gauge','currentValue','update','bitmap','drawGauge','traitObjects','right','gaugeRate','round','width'];(function(_0xee321b,_0x15ccbe){const _0x124eaa=function(_0x19f3f1){while(--_0x19f3f1){_0xee321b['push'](_0xee321b['shift']());}};_0x124eaa(++_0x15ccbe);}(_0x170d,0x17c));const _0x41cf=function(_0xee321b,_0x15ccbe){_0xee321b=_0xee321b-0x0;let _0x124eaa=_0x170d[_0xee321b];return _0x124eaa;};var Imported=Imported||{};Imported[_0x41cf('0x3a')]=!![];var Olivia=Olivia||{};(()=>{Olivia[_0x41cf('0x31')]=$plugins[_0x41cf('0x7')](function(_0x18023c){return _0x18023c['description']['contains'](_0x41cf('0x35'));})[0x0][_0x41cf('0x5')];const _0x5bbd6a=Game_Action[_0x41cf('0x47')][_0x41cf('0x23')];Game_Action['prototype'][_0x41cf('0x23')]=function(){_0x5bbd6a[_0x41cf('0x27')](this,arguments);this[_0x41cf('0x30')]();};Game_Action[_0x41cf('0x47')][_0x41cf('0x30')]=function(){if(this['item']()[_0x41cf('0x1d')][_0x41cf('0x3e')](/<Aggro: ([\+\-]\d+)>/i)){const _0x4f07f8=Number(RegExp['$1']);this[_0x41cf('0x36')]()[_0x41cf('0x52')](_0x4f07f8);}};const _0x2a4ccd=Game_Action[_0x41cf('0x47')][_0x41cf('0x59')];Game_Action['prototype'][_0x41cf('0x59')]=function(){if(this['_aiTarget']){return[this[_0x41cf('0x80')]];}else if(Olivia[_0x41cf('0x31')][_0x41cf('0x20')]&&this['item']()[_0x41cf('0x34')]===0x1&&this['subject']()['isEnemy']()){var _0x2575e1=this[_0x41cf('0x3c')]();return[_0x2575e1[_0x41cf('0x2b')]()];}else{return _0x2a4ccd[_0x41cf('0x27')](this,arguments);}};Game_Action[_0x41cf('0x47')][_0x41cf('0x10')]=function(_0x460ee9){this[_0x41cf('0x80')]=_0x460ee9;};const _0x214d55=Game_Action[_0x41cf('0x47')][_0x41cf('0x41')];Game_Action[_0x41cf('0x47')][_0x41cf('0x41')]=function(_0xa4ad4){_0x214d55[_0x41cf('0x27')](this,arguments);if(this[_0x41cf('0x7d')]()[_0x41cf('0x1d')][_0x41cf('0x3e')](/<Target Aggro: ([\+\-]\d+)>/i)){const _0x519bb9=Number(RegExp['$1']);_0xa4ad4[_0x41cf('0x52')](_0x519bb9);}};const _0x2e5764=Game_BattlerBase[_0x41cf('0x47')]['sparam'];Game_BattlerBase[_0x41cf('0x47')]['sparam']=function(_0x10d123){let _0x150e60=_0x2e5764[_0x41cf('0x27')](this,arguments);if(_0x10d123===0x0){if(this[_0x41cf('0x65')]===undefined){this[_0x41cf('0x82')]();}_0x150e60*=this['aggro']();}return _0x150e60;};Game_BattlerBase[_0x41cf('0x47')]['clearAggro']=function(){this[_0x41cf('0x65')]=0x1;};Game_BattlerBase[_0x41cf('0x47')][_0x41cf('0x52')]=function(_0x4c6aab){if(this[_0x41cf('0x65')]===undefined){this[_0x41cf('0x82')]();}this[_0x41cf('0x65')]=Math[_0x41cf('0x5c')](0x1,this[_0x41cf('0x65')]+_0x4c6aab);};Game_BattlerBase[_0x41cf('0x47')][_0x41cf('0x33')]=function(){return this[_0x41cf('0x3')]()*this[_0x41cf('0xa')]();};Game_BattlerBase[_0x41cf('0x47')][_0x41cf('0x3')]=function(){if(this[_0x41cf('0x65')]===undefined){this[_0x41cf('0x82')]();}return this[_0x41cf('0x17')]()[_0x41cf('0x3d')]((_0x101295,_0x4d6817)=>{if(_0x4d6817&&_0x4d6817['note'][_0x41cf('0x3e')](/<Aggro: ([\+\-]\d+)>/i)){return _0x101295+Number(RegExp['$1'])/0x64;}else{return _0x101295;}},this[_0x41cf('0x65')]);};Game_BattlerBase['prototype'][_0x41cf('0xa')]=function(){return this[_0x41cf('0x17')]()[_0x41cf('0x3d')]((_0x2364f7,_0xe9811f)=>{if(_0xe9811f&&_0xe9811f[_0x41cf('0x1d')][_0x41cf('0x3e')](/<Aggro Multiplier: (\d+)%>/i)){return _0x2364f7+Number(RegExp['$1'])/0x64;}else{return _0x2364f7;}},0x1);};const _0x5f1dd8=Game_Battler[_0x41cf('0x47')][_0x41cf('0x4a')];Game_Battler[_0x41cf('0x47')]['onBattleStart']=function(_0x545b4a){_0x5f1dd8[_0x41cf('0x27')](this,arguments);this['clearAggro']();};Game_Unit[_0x41cf('0x47')][_0x41cf('0xd')]=function(){const _0x4a1207=this[_0x41cf('0x37')]()[_0x41cf('0x6c')](_0x1d48a9=>_0x1d48a9['tgr']);return Math[_0x41cf('0x5c')](..._0x4a1207);};Game_Unit[_0x41cf('0x47')][_0x41cf('0x74')]=function(){const _0x10e939=this[_0x41cf('0x37')]()[_0x41cf('0x6c')](_0x235b45=>_0x235b45[_0x41cf('0x57')]);return Math[_0x41cf('0x6')](..._0x10e939);};Game_Unit['prototype'][_0x41cf('0x2b')]=function(){const _0x39c320=this['tgrMax']();const _0x5c8a8e=this[_0x41cf('0x37')]()[_0x41cf('0x7')](_0x398c0b=>_0x398c0b[_0x41cf('0x57')]===_0x39c320);return _0x5c8a8e[Math[_0x41cf('0x61')](_0x5c8a8e[_0x41cf('0x45')])];};const _0x5a0a65=Sprite_Actor[_0x41cf('0x47')][_0x41cf('0x81')];Sprite_Actor[_0x41cf('0x47')][_0x41cf('0x81')]=function(){_0x5a0a65['apply'](this,arguments);this[_0x41cf('0x63')]();};Sprite_Actor['prototype'][_0x41cf('0x63')]=function(){if(this[_0x41cf('0x4d')]!==Sprite_Actor)return;if(eval(Olivia[_0x41cf('0x31')][_0x41cf('0x12')])){setTimeout(this['gainAggroGaugeChild'][_0x41cf('0x8')](this),0x3e8);}};Sprite_Actor[_0x41cf('0x47')]['gainAggroGaugeChild']=function(){const _0x2b8dea=new _0x5115e3();_0x2b8dea[_0x41cf('0x6a')]['x']=0.5;_0x2b8dea[_0x41cf('0x6a')]['y']=0x1;this[_0x41cf('0x11')]=_0x2b8dea;this[_0x41cf('0x29')]()[_0x41cf('0x7c')](_0x2b8dea);};Sprite_Actor[_0x41cf('0x47')][_0x41cf('0x29')]=function(){return SceneManager[_0x41cf('0x42')][_0x41cf('0xe')][_0x41cf('0x5d')];};const _0xe52b39=Sprite_Actor[_0x41cf('0x47')]['update'];Sprite_Actor[_0x41cf('0x47')][_0x41cf('0x14')]=function(){_0xe52b39[_0x41cf('0x27')](this,arguments);this[_0x41cf('0x85')]();};Sprite_Actor[_0x41cf('0x47')]['updateAggroGaugeSprite']=function(){if(this[_0x41cf('0x11')]){this[_0x41cf('0x11')]['x']=this['x'];this[_0x41cf('0x11')]['y']=this['y']+this[_0x41cf('0x71')]*-0x1;if(this[_0x41cf('0x24')]&&this[_0x41cf('0x11')]['_statusType']!=='aggro'){this[_0x41cf('0x11')][_0x41cf('0x5e')](this[_0x41cf('0x24')],_0x41cf('0x33'));}}};function _0x5115e3(){this[_0x41cf('0x53')](...arguments);}_0x5115e3[_0x41cf('0x47')]=Object[_0x41cf('0x87')](Sprite[_0x41cf('0x47')]);_0x5115e3['prototype'][_0x41cf('0x4d')]=_0x5115e3;_0x5115e3['prototype'][_0x41cf('0x53')]=function(){Sprite[_0x41cf('0x47')][_0x41cf('0x53')][_0x41cf('0x4b')](this);this[_0x41cf('0x81')]();this[_0x41cf('0x72')]();};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x81')]=function(){this[_0x41cf('0x25')]=new Window_Base(0x0,0x0,0x64,0x64);this[_0x41cf('0x24')]=null;this['_statusType']='';this[_0x41cf('0x69')]=NaN;this[_0x41cf('0x67')]=NaN;this['_targetValue']=NaN;this[_0x41cf('0x38')]=NaN;this[_0x41cf('0x2f')]=0x0;this[_0x41cf('0x1f')]=0x0;};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x73')]=function(_0x477b7b){this['bitmap'][_0x41cf('0x73')]();Sprite['prototype'][_0x41cf('0x73')][_0x41cf('0x4b')](this,_0x477b7b);};_0x5115e3['prototype'][_0x41cf('0x72')]=function(){const _0x40efe6=this[_0x41cf('0x4f')]();const _0x543e89=this['bitmapHeight']();this['bitmap']=new Bitmap(_0x40efe6,_0x543e89);};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x4f')]=function(){return 0x40;};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x6f')]=function(){return 0xc;};_0x5115e3[_0x41cf('0x47')]['gaugeHeight']=function(){return 0x6;};_0x5115e3[_0x41cf('0x47')][_0x41cf('0xf')]=function(){return 0x0;};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x51')]=function(){return 0x3;};_0x5115e3[_0x41cf('0x47')][_0x41cf('0xc')]=function(){return this['_window']['contents'][_0x41cf('0x7e')];};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x49')]=function(){return this[_0x41cf('0x25')]['contents'][_0x41cf('0x2a')]-0x2;};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x64')]=function(){return this[_0x41cf('0x25')][_0x41cf('0x60')]['fontFace'];};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x40')]=function(){return this[_0x41cf('0x25')][_0x41cf('0x60')][_0x41cf('0x2a')]-0x6;};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x5e')]=function(_0x54af7c,_0x3898d3){this['_battler']=_0x54af7c;this['_statusType']=_0x3898d3;this[_0x41cf('0x69')]=this[_0x41cf('0x13')]();this[_0x41cf('0x67')]=this['currentMaxValue']();this['updateBitmap']();};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x14')]=function(){Sprite['prototype'][_0x41cf('0x14')][_0x41cf('0x4b')](this);this['updateBitmap']();};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x0')]=function(){const _0x2ac5eb=this[_0x41cf('0x13')]();const _0xe241ce=this[_0x41cf('0x4e')]();if(_0x2ac5eb!==this['_targetValue']||_0xe241ce!==this[_0x41cf('0x38')]){this[_0x41cf('0x5b')](_0x2ac5eb,_0xe241ce);}this[_0x41cf('0x6e')]();this[_0x41cf('0x1c')]();};_0x5115e3['prototype'][_0x41cf('0x5b')]=function(_0x42e18c,_0x460806){this[_0x41cf('0x56')]=_0x42e18c;this[_0x41cf('0x38')]=_0x460806;if(isNaN(this[_0x41cf('0x69')])){this[_0x41cf('0x69')]=_0x42e18c;this[_0x41cf('0x67')]=_0x460806;this['redraw']();}else{this['_duration']=0x14;}};_0x5115e3['prototype'][_0x41cf('0x6e')]=function(){if(this['_duration']>0x0){const _0x4726af=this[_0x41cf('0x2f')];this[_0x41cf('0x69')]=(this[_0x41cf('0x69')]*(_0x4726af-0x1)+this[_0x41cf('0x56')])/_0x4726af;this[_0x41cf('0x67')]=(this[_0x41cf('0x67')]*(_0x4726af-0x1)+this[_0x41cf('0x38')])/_0x4726af;this[_0x41cf('0x2f')]--;this[_0x41cf('0x44')]();}};_0x5115e3[_0x41cf('0x47')]['updateFlashing']=function(){if(this[_0x41cf('0x79')]===_0x41cf('0x32')){this[_0x41cf('0x1f')]++;if(this[_0x41cf('0x24')][_0x41cf('0x4')]()){if(this[_0x41cf('0x1f')]%0x1e<0xf){this[_0x41cf('0x28')](this[_0x41cf('0x4c')]());}else{this[_0x41cf('0x28')](this['flashingColor2']());}}else{this[_0x41cf('0x28')]([0x0,0x0,0x0,0x0]);}}};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x4c')]=function(){return[0xff,0xff,0xff,0x40];};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x48')]=function(){return[0x0,0x0,0xff,0x30];};_0x5115e3['prototype']['isValid']=function(){if(this[_0x41cf('0x24')]){if(this[_0x41cf('0x79')]==='tp'&&!this[_0x41cf('0x24')][_0x41cf('0x84')]()){return $gameParty[_0x41cf('0x9')]();}else{return!![];}}return![];};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x13')]=function(){if(this[_0x41cf('0x24')]){const _0xfd0466=this['_battler']['friendsUnit']();const _0x1e3fda=Math[_0x41cf('0x1a')](this['_battler'][_0x41cf('0x57')]-_0xfd0466[_0x41cf('0x74')]());const _0x23e305=Math[_0x41cf('0x1a')](_0xfd0466[_0x41cf('0xd')]()-_0xfd0466[_0x41cf('0x74')]());if(_0x1e3fda>=_0x23e305)return 0x64;return _0x1e3fda/_0x23e305*0x64;}return NaN;};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x4e')]=function(){return 0x64;};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x62')]=function(){return'';};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x46')]=function(){return this[_0x41cf('0x25')][_0x41cf('0x46')]();};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x1e')]=function(){return Olivia[_0x41cf('0x31')][_0x41cf('0x21')];};_0x5115e3['prototype']['gaugeColor2']=function(){return Olivia[_0x41cf('0x31')][_0x41cf('0x1')];};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x2e')]=function(){return this[_0x41cf('0x25')][_0x41cf('0x68')]();};_0x5115e3[_0x41cf('0x47')]['labelOutlineColor']=function(){return this[_0x41cf('0x46')]();};_0x5115e3['prototype']['labelOutlineWidth']=function(){return 0x3;};_0x5115e3['prototype'][_0x41cf('0x5a')]=function(){return this[_0x41cf('0x25')][_0x41cf('0x83')]();};_0x5115e3[_0x41cf('0x47')]['valueOutlineColor']=function(){return _0x41cf('0x58');};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x6d')]=function(){return 0x2;};_0x5115e3['prototype']['redraw']=function(){this[_0x41cf('0x15')][_0x41cf('0x66')]();const _0x3e0cd7=this[_0x41cf('0x13')]();if(!isNaN(_0x3e0cd7)){this[_0x41cf('0x16')]();if(this[_0x41cf('0x79')]!==_0x41cf('0x32')){this[_0x41cf('0x6b')]();if(this[_0x41cf('0x70')]()){this[_0x41cf('0x86')]();}}}};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x16')]=function(){const _0x13b4f6=this[_0x41cf('0xf')]();const _0x3e4924=this[_0x41cf('0x6f')]()-this[_0x41cf('0x50')]();const _0x4c06f2=this[_0x41cf('0x4f')]()-_0x13b4f6;const _0x32b283=this[_0x41cf('0x50')]();this[_0x41cf('0x43')](_0x13b4f6,_0x3e4924,_0x4c06f2,_0x32b283);};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x43')]=function(_0x3f77b3,_0x52ee43,_0x461ea2,_0x2e61ef){const _0x527706=this[_0x41cf('0x19')]()['clamp'](0x0,0x1);const _0x1b4a65=Math['floor']((_0x461ea2-0x2)*_0x527706);const _0x363116=_0x2e61ef-0x2;const _0x360d7e=this[_0x41cf('0x46')]();const _0x489aa8=this[_0x41cf('0x1e')]();const _0x1c864e=this['gaugeColor2']();this['bitmap'][_0x41cf('0x55')](_0x3f77b3,_0x52ee43,_0x461ea2,_0x2e61ef,_0x360d7e);this[_0x41cf('0x15')]['gradientFillRect'](_0x3f77b3+0x1,_0x52ee43+0x1,_0x1b4a65,_0x363116,_0x489aa8,_0x1c864e);};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x19')]=function(){if(this[_0x41cf('0x70')]()){const _0x45a1b0=this[_0x41cf('0x69')];const _0xde328=this[_0x41cf('0x67')];return _0xde328>0x0?_0x45a1b0/_0xde328:0x0;}else{return 0x0;}};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x6b')]=function(){const _0x5ba198=this[_0x41cf('0x62')]();const _0xe5c69a=this[_0x41cf('0x2d')]()/0x2;const _0xc6609f=this[_0x41cf('0x51')]();const _0x8c52b9=this['bitmapWidth']();const _0x2f29ce=this[_0x41cf('0x6f')]();this[_0x41cf('0x7f')]();this[_0x41cf('0x15')][_0x41cf('0xb')]=this[_0x41cf('0x26')]();this[_0x41cf('0x15')][_0x41cf('0x75')](_0x5ba198,_0xe5c69a,_0xc6609f,_0x8c52b9,_0x2f29ce,_0x41cf('0x3f'));this[_0x41cf('0x15')][_0x41cf('0xb')]=0xff;};_0x5115e3[_0x41cf('0x47')]['setupLabelFont']=function(){this[_0x41cf('0x15')][_0x41cf('0x7e')]=this[_0x41cf('0xc')]();this['bitmap'][_0x41cf('0x2a')]=this[_0x41cf('0x49')]();this[_0x41cf('0x15')][_0x41cf('0x39')]=this[_0x41cf('0x2e')]();this['bitmap']['outlineColor']=this[_0x41cf('0x2')]();this[_0x41cf('0x15')]['outlineWidth']=this[_0x41cf('0x2d')]();};_0x5115e3['prototype'][_0x41cf('0x26')]=function(){return this[_0x41cf('0x70')]()?0xff:0xa0;};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x86')]=function(){const _0x1f2bcf=this[_0x41cf('0x13')]();const _0x57a273=this[_0x41cf('0x4f')]();const _0x368964=this[_0x41cf('0x6f')]();this[_0x41cf('0x5f')]();this[_0x41cf('0x15')][_0x41cf('0x75')](_0x1f2bcf,0x0,0x0,_0x57a273,_0x368964,_0x41cf('0x18'));};const _0x142741=_0x5115e3[_0x41cf('0x47')][_0x41cf('0x86')];_0x5115e3[_0x41cf('0x47')][_0x41cf('0x86')]=function(){if(this[_0x41cf('0x79')]===_0x41cf('0x33'))return;_0x142741[_0x41cf('0x27')](this,arguments);};_0x5115e3[_0x41cf('0x47')][_0x41cf('0x5f')]=function(){this[_0x41cf('0x15')][_0x41cf('0x7e')]=this[_0x41cf('0x64')]();this[_0x41cf('0x15')]['fontSize']=this[_0x41cf('0x40')]();this[_0x41cf('0x15')][_0x41cf('0x39')]=this[_0x41cf('0x5a')]();this['bitmap'][_0x41cf('0x3b')]=this[_0x41cf('0x2c')]();this[_0x41cf('0x15')][_0x41cf('0x22')]=this[_0x41cf('0x6d')]();};const _0x445a24=Spriteset_Battle[_0x41cf('0x47')][_0x41cf('0x54')];Spriteset_Battle[_0x41cf('0x47')][_0x41cf('0x54')]=function(){_0x445a24[_0x41cf('0x27')](this,arguments);const _0x1860e9=this[_0x41cf('0x76')]['x'];const _0x12cea6=this[_0x41cf('0x76')]['y'];const _0x43a7f5=this['_battleField'][_0x41cf('0x1b')];const _0x3daf73=this[_0x41cf('0x76')][_0x41cf('0x71')];this[_0x41cf('0x5d')]=new Sprite();this[_0x41cf('0x5d')][_0x41cf('0x7a')](0x0,0x0,_0x43a7f5,_0x3daf73);this['_aggroGaugeContainer']['x']=_0x1860e9;this[_0x41cf('0x5d')]['y']=_0x12cea6;this[_0x41cf('0x7c')](this[_0x41cf('0x5d')]);};if(Imported[_0x41cf('0x78')]){const _0x37223e=AIManager[_0x41cf('0x77')];AIManager[_0x41cf('0x77')]=function(_0x41b3bf){const _0x219541=_0x41b3bf[_0x41cf('0x6c')](_0x92616a=>_0x92616a[_0x41cf('0x57')]);if(this[_0x41cf('0x80')][_0x41cf('0x3e')](/HIGHEST (?:AGGRO|TGR)/i)){const _0x5491a9=Math[_0x41cf('0x5c')](..._0x219541);const _0x55ad79=_0x41b3bf[_0x41cf('0x7')](_0x4dd643=>_0x4dd643[_0x41cf('0x57')]===_0x5491a9);const _0x57aca9=_0x55ad79[Math[_0x41cf('0x61')](_0x55ad79[_0x41cf('0x45')])];if(_0x57aca9)return this['action']()['setAITarget'](_0x57aca9);}if(this[_0x41cf('0x80')][_0x41cf('0x3e')](/LOWEST (?:AGGRO|TGR)/i)){const _0xe29488=Math[_0x41cf('0x6')](..._0x219541);const _0x5946fa=_0x41b3bf[_0x41cf('0x7')](_0xa093ea=>_0xa093ea[_0x41cf('0x57')]===_0xe29488);const _0x27a8a2=_0x5946fa[Math[_0x41cf('0x61')](_0x5946fa[_0x41cf('0x45')])];if(_0x27a8a2)return this[_0x41cf('0x7b')]()[_0x41cf('0x10')](_0x27a8a2);}if(this[_0x41cf('0x80')]['match'](/(?:AGGRO|TGR) >= (.*)/i)){const _0x11580e=eval(RegExp['$1']);const _0x5889a6=_0x41b3bf[_0x41cf('0x7')](_0x1292b0=>_0x1292b0[_0x41cf('0x57')]>=_0x11580e);const _0x16093a=_0x5889a6[Math['randomInt'](_0x5889a6[_0x41cf('0x45')])];if(_0x16093a)return this[_0x41cf('0x7b')]()[_0x41cf('0x10')](_0x16093a);}if(this[_0x41cf('0x80')][_0x41cf('0x3e')](/(?:AGGRO|TGR) > (.*)/i)){const _0x2d4106=eval(RegExp['$1']);const _0x2989d3=_0x41b3bf[_0x41cf('0x7')](_0x425d96=>_0x425d96[_0x41cf('0x57')]>_0x2d4106);const _0x534a57=_0x2989d3[Math[_0x41cf('0x61')](_0x2989d3['length'])];if(_0x534a57)return this[_0x41cf('0x7b')]()[_0x41cf('0x10')](_0x534a57);}if(this[_0x41cf('0x80')][_0x41cf('0x3e')](/(?:AGGRO|TGR) === (.*)/i)){const _0x325bb9=eval(RegExp['$1']);const _0x469560=_0x41b3bf[_0x41cf('0x7')](_0x5e7ec1=>_0x5e7ec1[_0x41cf('0x57')]===_0x325bb9);const _0x3fdb6a=_0x469560[Math[_0x41cf('0x61')](_0x469560[_0x41cf('0x45')])];if(_0x3fdb6a)return this['action']()['setAITarget'](_0x3fdb6a);}if(this[_0x41cf('0x80')]['match'](/(?:AGGRO|TGR) !== (.*)/i)){const _0xbd96e2=eval(RegExp['$1']);const _0xd57e86=_0x41b3bf[_0x41cf('0x7')](_0x2a056f=>_0x2a056f[_0x41cf('0x57')]!==_0xbd96e2);const _0x52adbc=_0xd57e86[Math[_0x41cf('0x61')](_0xd57e86[_0x41cf('0x45')])];if(_0x52adbc)return this[_0x41cf('0x7b')]()[_0x41cf('0x10')](_0x52adbc);}if(this['_aiTarget'][_0x41cf('0x3e')](/(?:AGGRO|TGR) < (.*)/i)){const _0x555dba=eval(RegExp['$1']);const _0x9657df=_0x41b3bf['filter'](_0x949b49=>_0x949b49[_0x41cf('0x57')]<_0x555dba);const _0x26ff8a=_0x9657df[Math[_0x41cf('0x61')](_0x9657df['length'])];if(_0x26ff8a)return this[_0x41cf('0x7b')]()[_0x41cf('0x10')](_0x26ff8a);}if(this[_0x41cf('0x80')]['match'](/(?:AGGRO|TGR) <= (.*)/i)){const _0xb40ff5=eval(RegExp['$1']);const _0x7de53d=_0x41b3bf[_0x41cf('0x7')](_0x110d2b=>_0x110d2b['tgr']<=_0xb40ff5);const _0x36e8e8=_0x7de53d[Math[_0x41cf('0x61')](_0x7de53d['length'])];if(_0x36e8e8)return this[_0x41cf('0x7b')]()[_0x41cf('0x10')](_0x36e8e8);}return _0x37223e[_0x41cf('0x27')](this,arguments);};}})();