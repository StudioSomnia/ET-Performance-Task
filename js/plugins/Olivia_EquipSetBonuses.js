//=============================================================================
// Olivia Engine - Equip Set Bonuses - for RPG Maker MV version 1.6.1
// Olivia_EquipSetBonuses.js
//=============================================================================
 /*:
 * @plugindesc <EquipSetBonuses> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that allows you to set equipment to be a part
 * of various sets. When multiple pieces of the set are equipped, (for example:
 * Fireproof Shield, Fireproof Hat, Fireproof Vest), then bonuses are applied.
 * Bonuses can be applied at different stages, too, depending on how many set
 * pieces are being currently equipped. The art (sprite, face, battler) for an
 * actor can also change based on the number of equipment sets worn.
 *
 *
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * Equipment Sets: This is where you put all your equipment sets used in the
 * game. Adjust their settings here. You can add as many equipment sets as you
 * want for your game.
 *
 * Equipment Set Name: Set's name. Case does not matter. This is its in-game
 * name. Register equips to sets using <Equip Set: x> notetag.
 *
 * Equipment Set Bonuses: Bonuses applied for having a different number of
 * pieces equipped. These settings stack with later bonuses in the same set.
 *
 * Text: Text that appears next to each piece in the tooltip window. Use 'auto'
 * if you want this to be done automatically by the plugin.
 *
 * Show in Tooltip?: Shows this particular bonus effect in the tooltip window.
 * If it's set to false, then it will be hidden. If it's set to true, it will be
 * shown, but only if there's changes made to states or stats.
 *
 * Passive States: This are states that will be given out as passives when the
 * required piece count is equipped.
 *
 * Param Bonuses: The bonuses to the basic parameters like MaxHP and ATK when
 * the required piece count is equipped. Rate is a multiplicative bonus. Plus is
 * an additive bonus.
 *
 * X Param Bonuses: The bonuses to the extra parameters like HIT and CRI when
 * the required piece count is equipped. Rate is a multiplicative bonus. Plus is
 * an additive bonus.
 *
 * S Param Bonuses: The bonuses to the special parameters like HIT and CRI when
 * the required piece count is equipped. Rate is a multiplicative bonus. Plus is
 * an additive bonus.
 *
 * Tooltips: A tooltip window shown in certain scenes to deliver information to
 * the player about equipment set bonuses.
 *
 * Show Tooltips?: You can decide if you want these in your game or not. Turn it
 * on or off with true or false.
 *
 * Window Scale: You can scale how big or small you want the tooltip window.
 * By default, it's scaled down to 60% the normal size of a window.
 *
 * Window Skin: This is the window skin used for the tooltip window. You can set
 * it to something different to make it stand out from the regular window skin.
 *
 * Window Skin Opacity: Change the opacity of the tooltip window's window skin.
 * If it's opaque, it will be semi-transparent, making the text harder to read.
 *
 * OffsetX, OffsetY: Offset the tooltip window from what's being selected by
 * this many pixels.
 *
 * Vocab for X, S Parameters: There's no default vocabulary used for X and S
 * parameters in the database. Use this change the way they look for the tooltip
 * window. DO NOT ADD OR DELETE ENTRIES. Only modify them.
 *
 * Format Set Name: The text format for the set name in the tooltip window.
 *
 * Format Pieces: The text format for the pieces count and the bonus associated
 * with that required pieces count.
 *
 * Show State Icons?: When showing passive states, you can decide if you want
 * the passives' icons to show with true or false.
 *
 *
 *
 * --------
 * Notetags
 * --------
 *
 * Weapon and Armor Notetags:
 * 
 * <Equip Set: name>
 * This assigns this item to an equipment set.
 * - 'name' is the set name you're going to associate this equip with.
 * 
 * If you want to make a piece of equipment be a part of two different equipment
 * sets, use multiple copies of the <Equip Set: name> notetag.
 *
 * 
 *
 * Actor Notetags:
 * 
 * <name Set, x Pieces Character: filename, index>
 * This changes the character sprite, aka the map sprite, for this actor.
 * - 'name' is the set name that is associated with this graphic change.
 * - 'x' is to be replaced by a number. This is the minimum required pieces.
 * - 'filename' is the filename of the graphic. IMPORTANT: Case sensitive.
 * - 'index' is to be replaced by a number. This is the index number of the
 * graphic starting from 0 as the first slot.
 * 
 * <name Set, x Pieces Face: filename, index>
 * This changes the face art for the actor.
 * - 'name' is the set name that is associated with this graphic change.
 * - 'x' is to be replaced by a number. This is the minimum required pieces.
 * - 'filename' is the filename of the graphic. IMPORTANT: Case sensitive.
 * - 'index' is to be replaced by a number. This is the index number of the
 * graphic starting from 0 as the first slot.
 * 
 * <name Set, x Pieces Battler: filename>
 * This changes the sideview battler sprite for this actor.
 * - 'name' is the set name that is associated with this graphic change.
 * - 'x' is to be replaced by a number. This is the minimum required pieces.
 * - 'filename' is the filename of the graphic. IMPORTANT: Case sensitive.
 *
 * To make different sets of graphics per set, add multiples of the above 
 * notetags for each actor. This effect may or may not be compatible with other
 * plugins that alter the appearance of your actors.
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
 * - YEP_ItemCore.js
 * - YEP_EquipCore.js
 * - YEP_ShopMenuCore.js
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
 * @param EquipSets
 * @text Equipment Sets
 * @type struct<EquipSet>[]
 * @desc This is where you put all your equipment sets used in the game. Adjust their settings here.
 *
 * @param
 * @param Tooltips
 *
 * @param ShowTooltips
 * @text Show Tooltips?
 * @parent Tooltips
 * @type boolean
 * @on Show
 * @off Hide
 * @desc If true, show tooltips detailing the bonuses for the set
 * @default true
 *
 * @param WindowScale
 * @text Window Scale
 * @parent Tooltips
 * @desc Scale the size of the contents of the tooltip window down by this much
 * @default 0.6
 *
 * @param WindowSkin
 * @text Window Skin
 * @parent Tooltips
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
 * @param OffsetX
 * @parent Tooltips
 * @desc X offset of the tooltip window.
 * @default 16
 *
 * @param OffsetY
 * @parent Tooltips
 * @desc Y offset of the tooltip window.
 * @default 16
 *
 * @param VocabXParam
 * @text Vocab for X Parameters
 * @type text[]
 * @parent Tooltips
 * @desc Vocabulary used for X Parameters. Do not add or delete any entries. Only modify them.
 * @default ["Hit Rate","Evasion Rate","Critical Rate","Critical Evasion","Magic Evasion","Magic Reflection","Counter Rate","HP Regen","MP Regen","TP Regen"]
 *
 * @param VocabSParam
 * @text Vocab for S Parameters
 * @type text[]
 * @parent Tooltips
 * @desc Vocabulary used for S Parameters. Do not add or delete any entries. Only modify them.
 * @default ["Aggro","Guard Effect","Recovery","Pharmacology","MP Cost","TP Charge","Physical Damage","Magical Damage","Floor Damage","EXP Gain"]
 *
 * @param SetNameFmt
 * @text Format: Set Name
 * @parent Tooltips
 * @desc Text format for set name for how it appears in tooltips
 * %1 is the set's name.
 * @default \c[27]%1 Set Bonuses\c[0]
 *
 * @param PiecesFmt
 * @text Format: Pieces
 * @parent Tooltips
 * @desc Text format for how pieces and their bonuses appear
 * %1 is pieces count. %2 is pieces bonus.
 * @default \c[27]%1 Set Effect:\c[0] %2
 *
 * @param ShowStateIcon
 * @text Show State Icons?
 * @parent Tooltips
 * @type boolean
 * @on Show
 * @off Hide
 * @desc If true, show state icons for the passives in the tooltips
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * struct<EquipSet>[]
 * ---------------------------------------------------------------------------
 */
/*~struct~EquipSet:
 *
 * @param Set
 * @text Equipment Set Name
 * @desc Set's name. Case does not matter. This is its in-game name.
 * Register equips to sets using <Equip Set: x> notetag.
 * @default Untitled
 *
 * @param
 *
 * @param Bonuses
 * @text Equipment Set Bonuses
 *
 * @param Piece1
 * @text 1 Piece Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece2
 * @text 2 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece3
 * @text 3 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece4
 * @text 4 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece5
 * @text 5 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece6
 * @text 6 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece7
 * @text 7 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece8
 * @text 8 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece9
 * @text 9 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece10
 * @text 10 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece11
 * @text 11 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece12
 * @text 12 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece13
 * @text 13 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece14
 * @text 14 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece15
 * @text 15 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece16
 * @text 16 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece17
 * @text 17 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece18
 * @text 18 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece19
 * @text 19 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 * @param Piece20
 * @text 20 Pieces Bonus
 * @parent Bonuses
 * @type struct<EquipSetPieces>
 * @desc Bonuses applied for having this number of pieces equipped. These settings stack with later bonuses in the same set.
 * @default {"Text":"auto","ShowText":"true","":"","PassiveStates":"[]","Param Bonuses":"","MaxHP":"Maximum Hit Points","MaxHPRate":"1.0","MaxHPPlus":"0","MaxMP":"Maximum Magic Points","MaxMPRate":"1.0","MaxMPPlus":"0","ATK":"Attack","ATKRate":"1.0","ATKPlus":"0","DEF":"Defense","DEFRate":"1.0","DEFPlus":"0","MAT":"Magic Attack","MATRate":"1.0","MATPlus":"0","MDF":"Magic Defense","MDFRate":"1.0","MDFPlus":"0","AGI":"Agility","AGIRate":"1.0","AGIPlus":"0","LUK":"Luck","LUKRate":"1.0","LUKPlus":"0","X Param Bonuses":"","HIT":"Hit Rate","HITRate":"1.0","HITPlus":"0.0","EVA":"Evasion Rate","EVARate":"1.0","EVAPlus":"0.0","CRI":"Critical Hit","CRIRate":"1.0","CRIPlus":"0.0","CEV":"Critical Evasion","CEVRate":"1.0","CEVPlus":"0.0","MEV":"Magic Evasion","MEVRate":"1.0","MEVPlus":"0.0","MRF":"Magic Reflect","MRFRate":"1.0","MRFPlus":"0.0","CNT":"Counter Rate","CNTRate":"1.0","CNTPlus":"0.0","HRG":"HP Regen Rate","HRGRate":"1.0","HRGPlus":"0.0","MRG":"Magic Regen Rate","MRGRate":"1.0","MRGPlus":"0.0","TRG":"TP Regen Rate","TRGRate":"1.0","TRGPlus":"0.0","S Param Bonuses":"","TGR":"Target Rate","TGRRate":"1.0","TGRPlus":"0.0","GRD":"Guard Rate","GRDRate":"1.0","GRDPlus":"0.0","REC":"Recovery Rate","RECRate":"1.0","RECPlus":"0.0","PHA":"Pharmacology Rate","PHARate":"1.0","PHAPlus":"0.0","MCR":"MP Cost Rate","MCRRate":"1.0","MCRPlus":"0.0","TCR":"TP Charge Rate","TCRRate":"1.0","TCRPlus":"0.0","PDR":"Physical Damage Rate","PDRRate":"1.0","PDRPlus":"0.0","MDR":"Magical Damage Rate","MDRRate":"1.0","MDRPlus":"0.0","FDR":"Floor Damage Rate","FDRRate":"1.0","FDRPlus":"0.0","EXR":"Experience Gain Rate","EXRRate":"1.0","EXRPlus":"0.0"}
 *
 */
/* ----------------------------------------------------------------------------
 * struct<EquipSetPieces>[]
 * ---------------------------------------------------------------------------
 */
/*~struct~EquipSetPieces:
 *
 * @param Text
 * @desc Text that appears next to each piece in the tooltip window.
 * Use 'auto' if you want this to be done automatically.
 * @default auto
 *
 * @param ShowText
 * @text Show in Tooltip?
 * @parent Text
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this in the tooltip?
 * @default true
 *
 * @param
 * @param PassiveStates
 * @text Passive States
 * @type State[]
 * @desc States that will be given out as passives when the required piece count is equipped.
 * @default []
 *
 * @param
 * @param Param Bonuses
 *
 * @param MaxHP
 * @parent Param Bonuses
 * @default Maximum Hit Points
 *
 * @param MaxHPRate
 * @text Rate
 * @parent MaxHP
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MaxHPPlus
 * @text Plus
 * @parent MaxHP
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param MaxMP
 * @parent Param Bonuses
 * @default Maximum Magic Points
 *
 * @param MaxMPRate
 * @text Rate
 * @parent MaxMP
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MaxMPPlus
 * @text Plus
 * @parent MaxMP
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param ATK
 * @parent Param Bonuses
 * @default Attack
 *
 * @param ATKRate
 * @text Rate
 * @parent ATK
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param ATKPlus
 * @text Plus
 * @parent ATK
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param DEF
 * @parent Param Bonuses
 * @default Defense
 *
 * @param DEFRate
 * @text Rate
 * @parent DEF
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param DEFPlus
 * @text Plus
 * @parent DEF
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param MAT
 * @parent Param Bonuses
 * @default Magic Attack
 *
 * @param MATRate
 * @text Rate
 * @parent MAT
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MATPlus
 * @text Plus
 * @parent MAT
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param MDF
 * @parent Param Bonuses
 * @default Magic Defense
 *
 * @param MDFRate
 * @text Rate
 * @parent MDF
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MDFPlus
 * @text Plus
 * @parent MDF
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param AGI
 * @parent Param Bonuses
 * @default Agility
 *
 * @param AGIRate
 * @text Rate
 * @parent AGI
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param AGIPlus
 * @text Plus
 * @parent AGI
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param LUK
 * @parent Param Bonuses
 * @default Luck
 *
 * @param LUKRate
 * @text Rate
 * @parent LUK
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param LUKPlus
 * @text Plus
 * @parent LUK
 * @desc Additive bonus for this param when the required piece count is equipped. 0 is +0.
 * @default 0
 *
 * @param
 * @param X Param Bonuses
 *
 * @param HIT
 * @parent X Param Bonuses
 * @default Hit Rate
 *
 * @param HITRate
 * @text Rate
 * @parent HIT
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param HITPlus
 * @text Plus
 * @parent HIT
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param EVA
 * @parent X Param Bonuses
 * @default Evasion Rate
 *
 * @param EVARate
 * @text Rate
 * @parent EVA
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param EVAPlus
 * @text Plus
 * @parent EVA
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param CRI
 * @parent X Param Bonuses
 * @default Critical Hit
 *
 * @param CRIRate
 * @text Rate
 * @parent CRI
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param CRIPlus
 * @text Plus
 * @parent CRI
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param CEV
 * @parent X Param Bonuses
 * @default Critical Evasion
 *
 * @param CEVRate
 * @text Rate
 * @parent CEV
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param CEVPlus
 * @text Plus
 * @parent CEV
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param MEV
 * @parent X Param Bonuses
 * @default Magic Evasion
 *
 * @param MEVRate
 * @text Rate
 * @parent MEV
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MEVPlus
 * @text Plus
 * @parent MEV
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param MRF
 * @parent X Param Bonuses
 * @default Magic Reflect
 *
 * @param MRFRate
 * @text Rate
 * @parent MRF
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MRFPlus
 * @text Plus
 * @parent MRF
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param CNT
 * @parent X Param Bonuses
 * @default Counter Rate
 *
 * @param CNTRate
 * @text Rate
 * @parent CNT
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param CNTPlus
 * @text Plus
 * @parent CNT
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param HRG
 * @parent X Param Bonuses
 * @default HP Regen Rate
 *
 * @param HRGRate
 * @text Rate
 * @parent HRG
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param HRGPlus
 * @text Plus
 * @parent HRG
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param MRG
 * @parent X Param Bonuses
 * @default Magic Regen Rate
 *
 * @param MRGRate
 * @text Rate
 * @parent MRG
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MRGPlus
 * @text Plus
 * @parent MRG
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param TRG
 * @parent X Param Bonuses
 * @default TP Regen Rate
 *
 * @param TRGRate
 * @text Rate
 * @parent TRG
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param TRGPlus
 * @text Plus
 * @parent TRG
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param
 * @param S Param Bonuses
 *
 * @param TGR
 * @parent X Param Bonuses
 * @default Target Rate
 *
 * @param TGRRate
 * @text Rate
 * @parent TGR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param TGRPlus
 * @text Plus
 * @parent TGR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param GRD
 * @parent X Param Bonuses
 * @default Guard Rate
 *
 * @param GRDRate
 * @text Rate
 * @parent GRD
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param GRDPlus
 * @text Plus
 * @parent GRD
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param REC
 * @parent X Param Bonuses
 * @default Recovery Rate
 *
 * @param RECRate
 * @text Rate
 * @parent REC
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param RECPlus
 * @text Plus
 * @parent REC
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param PHA
 * @parent X Param Bonuses
 * @default Pharmacology Rate
 *
 * @param PHARate
 * @text Rate
 * @parent PHA
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param PHAPlus
 * @text Plus
 * @parent PHA
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param MCR
 * @parent X Param Bonuses
 * @default MP Cost Rate
 *
 * @param MCRRate
 * @text Rate
 * @parent MCR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MCRPlus
 * @text Plus
 * @parent MCR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param TCR
 * @parent X Param Bonuses
 * @default TP Charge Rate
 *
 * @param TCRRate
 * @text Rate
 * @parent TCR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param TCRPlus
 * @text Plus
 * @parent TCR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param PDR
 * @parent X Param Bonuses
 * @default Physical Damage Rate
 *
 * @param PDRRate
 * @text Rate
 * @parent PDR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param PDRPlus
 * @text Plus
 * @parent PDR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param MDR
 * @parent X Param Bonuses
 * @default Magical Damage Rate
 *
 * @param MDRRate
 * @text Rate
 * @parent MDR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param MDRPlus
 * @text Plus
 * @parent MDR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param FDR
 * @parent X Param Bonuses
 * @default Floor Damage Rate
 *
 * @param FDRRate
 * @text Rate
 * @parent FDR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param FDRPlus
 * @text Plus
 * @parent FDR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 * @param EXR
 * @parent X Param Bonuses
 * @default Experience Gain Rate
 *
 * @param EXRRate
 * @text Rate
 * @parent EXR
 * @desc Multiplicative bonus for this param when the required piece count is equipped. 1.0 is 100%.
 * @default 1.0
 *
 * @param EXRPlus
 * @text Plus
 * @parent EXR
 * @desc Additive bonus for this param when the required piece count is equipped. 0.0 is +0%.
 * @default 0.0
 *
 */
//=============================================================================

var _0x3695=['actor','standardPadding','REC','loadWindowskin','OffsetX','onSlotCancel','___Scene_Equip_onItemOk___','refreshActor','___Window_EquipSlot_updateHelp___','___Game_BattlerBase_states___','_item','___Game_Actor_characterName___','calculateWindowDimensions','PHA','createContents','sparamPlus','_scene','Tooltips','ShowText','changePaintOpacity','width','refresh','Piece','offsetY','VocabXParam','WindowSkin','Text','scaleRate','Rate','vocabXParam','onItemCancel','makeEquipSetBonusStateIDs','___Game_Actor_battlerName___','addLoadListener','loadSystem','filter','___Game_BattlerBase_paramPlus___','HRG','MAT','_equipSetBonusCount','equipSetFaceGraphic','setNameText','PassiveStates','_iconHeight','round','_actor','___Scene_Equip_onItemCancel___','offsetX','faceIndex','sparamRate','GRD','setName','___Game_Actor_faceIndex___','show','_text','_opacityCheck','ShowTooltips','ShowStateIcon','setActor','makeEquipSetVisualNotetagsData','vocabSParam','ATK','___Scene_Equip_onSlotOk___','onItemOk','MCR','applyEquipSetBonuses','PiecesFmt','boxHeight','___Game_Actor_changeEquip___','SkinOpacity','___Scene_Shop_create___','textPadding','windowSkin','windowskin','onSlotOk','___Game_BattlerBase_sparam___','call','auto','_equipSetBonusStateIDs','changeEquip','___Game_BattlerBase_paramRate___','MEV','length','bind','xparamRate','lineHeight','split','drawTextEx','updateEquipSetBonusTooltip','text','generateText','equips','hide','setupEquipSetVisualNotetags','apply','PDR','faceName','states','TRG','equipSet','param','TGR','_sellWindow','updateShowHide','MDR','___Game_BattlerBase_xparam___','EquipSetBonuses','repositionWindow','MaxHP','active','initialize','addChild','battlerName','Bonuses','CEV','setItem','drawIcon','characterIndex','___Scene_Equip_onSlotCancel___','CNT','create','___Window_ItemList_updateHelp___','note','clamp','clearEquipSetBonusFlags','_targetWindow','generateBonusText','___Game_Actor_characterIndex___','characterName','shift','_equipSetBonusFlags','createEquipSetBonusesTooltipWindow','sparam','CRI','xparam','paramPlus','boxWidth','format','<EquipSetBonuses>','_cursorRect','constructor','_iconWidth','setupEquipSetBonusNotetags','prototype','Set','paramRate','toLowerCase','updateHelp','___Scene_Equip_refreshActor___','EXR','floor','___Game_Actor_faceName___','___Scene_Item_create___','match','equipSetCharacterGraphic','equipSetBonusParamPlus','showText','xparamPlus','piecesText','name','equipSetBattlerGraphic','___Window_ShopBuy_updateHelp___','releaseUnequippableItems','___Window_SkillStatus_refresh___','setEquipSetBonusTooltipWindow','\x5ci[','loadFace','DEF','windowSkinOpacity','generateBonusAutoText','MaxMP','sort','___Game_Actor_releaseUnequippableItems___','equipSetBonusParamRate','push','drawTooltipContents','Sets','isWeapon','changed','trim','blt','HIT','_equipSetBonusesTooltipWindow','SetNameFmt','checkRefreshEquipSetBonuses','Olivia_EquipSetBonuses','height','iconIndex','addEquipSetBonusStates','contents','parameters','replace','standardFontSize','MRG','update','AGI','item','priority','YEP_ItemCore','parse','contains','refreshEquipSetBonuses','baseItemId','Plus'];(function(_0x474cc8,_0x36956d){var _0x5be96c=function(_0x49f6c7){while(--_0x49f6c7){_0x474cc8['push'](_0x474cc8['shift']());}};_0x5be96c(++_0x36956d);}(_0x3695,0x18f));var _0x5be9=function(_0x474cc8,_0x36956d){_0x474cc8=_0x474cc8-0x0;var _0x5be96c=_0x3695[_0x474cc8];return _0x5be96c;};var Imported=Imported||{};Imported[_0x5be9('0xc2')]=!![];var Olivia=Olivia||{};Olivia[_0x5be9('0x73')]=Olivia[_0x5be9('0x73')]||{};var parameters=$plugins[_0x5be9('0x2c')](function(_0x3366ad){return _0x3366ad['description'][_0x5be9('0x5')](_0x5be9('0x93'));})[0x0][_0x5be9('0xc7')];(function(_0x175c17){var _0x303ee7=function(_0x4e3458){if(_0x4e3458[_0x5be9('0x62')]!==_0x5be9('0x56'))return!![];if(_0x4e3458[_0x5be9('0x6a')][_0x5be9('0x5b')]>0x0)return!![];var _0x5a71b5=[_0x5be9('0x9a'),_0x5be9('0x5d'),_0x5be9('0x3a')];for(var _0x49e1bc=0x0;_0x49e1bc<_0x5a71b5[_0x5be9('0x5b')];_0x49e1bc++){for(var _0x3b2fa7=0x0;_0x3b2fa7<_0x4e3458[_0x5a71b5[_0x49e1bc]]['length'];_0x3b2fa7++){if(_0x4e3458[_0x5a71b5[_0x49e1bc]][_0x3b2fa7]!==0x1)return!![];}}var _0x5a71b5=[_0x5be9('0x90'),_0x5be9('0xa6'),_0x5be9('0x18')];for(var _0x49e1bc=0x0;_0x49e1bc<_0x5a71b5['length'];_0x49e1bc++){for(var _0x3b2fa7=0x0;_0x3b2fa7<_0x4e3458[_0x5a71b5[_0x49e1bc]][_0x5be9('0x5b')];_0x3b2fa7++){if(_0x4e3458[_0x5a71b5[_0x49e1bc]][_0x3b2fa7]!==0x0)return!![];}}return![];};var _0x1c5441=function(_0x5df6dc,_0x293539){obj={};obj[_0x5be9('0x3c')]=_0x293539;obj[_0x5be9('0x62')]=_0x5df6dc[_0x5be9('0x23')];obj[_0x5be9('0xa5')]=_0x5df6dc[_0x5be9('0x1b')][_0x5be9('0xa2')](/true/i)?!![]:![];var _0x1ff1a4=JSON[_0x5be9('0x4')](_0x5df6dc[_0x5be9('0x33')]);obj[_0x5be9('0x6a')]=[];while(_0x1ff1a4[_0x5be9('0x5b')]>0x0){obj[_0x5be9('0x6a')]['push'](parseInt(_0x1ff1a4[_0x5be9('0x8a')]()));};var _0x3ce69f=[_0x5be9('0x75'),_0x5be9('0xb3'),_0x5be9('0x46'),_0x5be9('0xb0'),_0x5be9('0x2f'),'MDF',_0x5be9('0x0'),'LUK'];var _0x89ba31=[_0x5be9('0xbe'),'EVA',_0x5be9('0x8e'),_0x5be9('0x7b'),_0x5be9('0x5a'),'MRF',_0x5be9('0x80'),_0x5be9('0x2e'),_0x5be9('0xca'),_0x5be9('0x6b')];var _0x5c99e1=[_0x5be9('0x6e'),_0x5be9('0x3b'),_0x5be9('0xb'),_0x5be9('0x16'),_0x5be9('0x49'),'TCR',_0x5be9('0x68'),_0x5be9('0x71'),'FDR',_0x5be9('0x9e')];obj[_0x5be9('0x9a')]=[];for(var _0x53ac86=0x0;_0x53ac86<_0x3ce69f[_0x5be9('0x5b')];_0x53ac86++){obj[_0x5be9('0x9a')][_0x5be9('0xb7')](Number(_0x5df6dc[_0x3ce69f[_0x53ac86]+_0x5be9('0x25')]));};obj[_0x5be9('0x90')]=[];for(var _0x53ac86=0x0;_0x53ac86<_0x3ce69f[_0x5be9('0x5b')];_0x53ac86++){obj['paramPlus'][_0x5be9('0xb7')](Number(_0x5df6dc[_0x3ce69f[_0x53ac86]+_0x5be9('0x8')]));};obj['xparamRate']=[];for(var _0x53ac86=0x0;_0x53ac86<_0x89ba31[_0x5be9('0x5b')];_0x53ac86++){obj[_0x5be9('0x5d')][_0x5be9('0xb7')](Number(_0x5df6dc[_0x89ba31[_0x53ac86]+_0x5be9('0x25')]));};obj[_0x5be9('0xa6')]=[];for(var _0x53ac86=0x0;_0x53ac86<_0x89ba31[_0x5be9('0x5b')];_0x53ac86++){obj[_0x5be9('0xa6')][_0x5be9('0xb7')](Number(_0x5df6dc[_0x89ba31[_0x53ac86]+_0x5be9('0x8')]));};obj['sparamRate']=[];for(var _0x53ac86=0x0;_0x53ac86<_0x5c99e1['length'];_0x53ac86++){obj['sparamRate'][_0x5be9('0xb7')](Number(_0x5df6dc[_0x5c99e1[_0x53ac86]+_0x5be9('0x25')]));};obj['sparamPlus']=[];for(var _0x53ac86=0x0;_0x53ac86<_0x5c99e1['length'];_0x53ac86++){obj[_0x5be9('0x18')][_0x5be9('0xb7')](Number(_0x5df6dc[_0x5c99e1[_0x53ac86]+_0x5be9('0x8')]));};obj[_0x5be9('0xbb')]=_0x303ee7(obj);return obj;};var _0x5a7495=JSON[_0x5be9('0x4')](_0x175c17['EquipSets']);Olivia[_0x5be9('0x73')][_0x5be9('0xb9')]={};for(var _0x2902d5=0x0;_0x2902d5<_0x5a7495[_0x5be9('0x5b')];++_0x2902d5){_0x5a7495[_0x2902d5]=JSON[_0x5be9('0x4')](_0x5a7495[_0x2902d5]);if(!!_0x5a7495[_0x2902d5]){var _0x5274fc=_0x5a7495[_0x2902d5];var _0x354072=_0x5274fc['Set'][_0x5be9('0x9b')]();_0x5274fc['Bonuses']=[null];var _0x18fda3=0x1;while(_0x18fda3<=0x14){var _0x2652bf=_0x5be9('0x1f')+_0x18fda3;var _0x5ec762=_0x1c5441(JSON['parse'](_0x5274fc[_0x2652bf]),_0x5274fc[_0x5be9('0x99')]);_0x5274fc['Bonuses'][_0x5be9('0xb7')](_0x5ec762);_0x18fda3++;}Olivia[_0x5be9('0x73')][_0x5be9('0xb9')][_0x354072]=_0x5274fc[_0x5be9('0x7a')];}}}(parameters));Olivia[_0x5be9('0x73')]['Tooltips']={'show':eval(parameters[_0x5be9('0x41')]),'windowSkin':String(parameters[_0x5be9('0x22')]),'windowSkinOpacity':Number(parameters[_0x5be9('0x4e')]),'scaleRate':Number(parameters['WindowScale']),'offsetX':Number(parameters[_0x5be9('0xd')]),'offsetY':Number(parameters['OffsetY']),'vocabXParam':JSON[_0x5be9('0x4')](parameters[_0x5be9('0x21')]),'vocabSParam':JSON[_0x5be9('0x4')](parameters['VocabSParam']),'setNameText':String(parameters[_0x5be9('0xc0')]),'piecesText':String(parameters[_0x5be9('0x4b')]),'drawStateIcons':eval(parameters[_0x5be9('0x42')])};Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0xa4')]=function(_0x27412e,_0x1d97c6){return 0x0;};Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0xb6')]=function(_0x2545d0,_0x3752b5){return 0x1;};Olivia[_0x5be9('0x73')][_0x5be9('0x2d')]=Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0x90')];Game_BattlerBase[_0x5be9('0x98')]['paramPlus']=function(_0x3ca8b6){var _0x3c4484=Olivia[_0x5be9('0x73')]['___Game_BattlerBase_paramPlus___']['call'](this,_0x3ca8b6);return _0x3c4484+this[_0x5be9('0xa4')](_0x5be9('0x6d'),_0x3ca8b6);};Olivia['EquipSetBonuses'][_0x5be9('0x59')]=Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0x9a')];Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0x9a')]=function(_0x3ffd1c){var _0x2bbf45=Olivia[_0x5be9('0x73')][_0x5be9('0x59')]['call'](this,_0x3ffd1c);return _0x2bbf45*this[_0x5be9('0xb6')](_0x5be9('0x6d'),_0x3ffd1c);};Olivia['EquipSetBonuses'][_0x5be9('0x72')]=Game_BattlerBase['prototype'][_0x5be9('0x8f')];Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0x8f')]=function(_0x328c52){var _0x3d54f9=Olivia[_0x5be9('0x73')][_0x5be9('0x72')][_0x5be9('0x55')](this,_0x328c52);_0x3d54f9+=this['equipSetBonusParamPlus']('xparam',_0x328c52);_0x3d54f9*=this[_0x5be9('0xb6')](_0x5be9('0x8f'),_0x328c52);return _0x3d54f9;};Olivia[_0x5be9('0x73')]['___Game_BattlerBase_sparam___']=Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0x8d')];Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0x8d')]=function(_0x5dbe6c){var _0x59d82d=Olivia[_0x5be9('0x73')][_0x5be9('0x54')][_0x5be9('0x55')](this,_0x5dbe6c);_0x59d82d+=this[_0x5be9('0xa4')](_0x5be9('0x8d'),_0x5dbe6c);_0x59d82d*=this['equipSetBonusParamRate'](_0x5be9('0x8d'),_0x5dbe6c);return _0x59d82d;};Olivia[_0x5be9('0x73')][_0x5be9('0x12')]=Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0x6a')];Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0x6a')]=function(){var _0x3270b1=Olivia[_0x5be9('0x73')][_0x5be9('0x12')][_0x5be9('0x55')](this);_0x3270b1=this[_0x5be9('0xc5')](_0x3270b1);return _0x3270b1;};Game_BattlerBase[_0x5be9('0x98')][_0x5be9('0xc5')]=function(_0xf76c39){return _0xf76c39;};Olivia[_0x5be9('0x73')][_0x5be9('0xb5')]=Game_Actor[_0x5be9('0x98')][_0x5be9('0xab')];Game_Actor[_0x5be9('0x98')][_0x5be9('0xab')]=function(_0x2ae05b){Olivia[_0x5be9('0x73')][_0x5be9('0xb5')]['call'](this,_0x2ae05b);this[_0x5be9('0x6')]();};Game_Actor['prototype'][_0x5be9('0xc1')]=function(){if(this['_equipSetBonusStateIDs']===undefined||this[_0x5be9('0x8b')]===undefined||this[_0x5be9('0x30')]===undefined){this[_0x5be9('0x6')]();}if(this[_0x5be9('0x9')]()['equipSetCharacterGraphic']===undefined||this[_0x5be9('0x9')]()[_0x5be9('0x31')]===undefined||this[_0x5be9('0x9')]()[_0x5be9('0xa9')]===undefined){Olivia[_0x5be9('0x66')](this[_0x5be9('0x9')]());}};Game_Actor[_0x5be9('0x98')][_0x5be9('0x6')]=function(){this[_0x5be9('0x85')]();this['setupEquipSetNotetags']();this[_0x5be9('0x4a')]();this[_0x5be9('0x28')]();};Game_Actor[_0x5be9('0x98')][_0x5be9('0x85')]=function(){this[_0x5be9('0x8b')]=[];this[_0x5be9('0x30')]={};this[_0x5be9('0x57')]=[];};Game_Actor['prototype']['setupEquipSetNotetags']=function(){var _0x201322=this['equips']();for(var _0x4ba9b3=0x0;_0x4ba9b3<_0x201322[_0x5be9('0x5b')];_0x4ba9b3++){var _0x269e80=_0x201322[_0x4ba9b3];if(!!_0x269e80&&!_0x269e80['equipSet']){Olivia['setupEquipSetBonusNotetags'](_0x269e80);}}};Olivia[_0x5be9('0x97')]=function(_0x573128){_0x573128[_0x5be9('0x6c')]=[];if(Imported[_0x5be9('0x3')]&&_0x573128[_0x5be9('0x7')]){if(DataManager[_0x5be9('0xba')](_0x573128)){var _0x14ec27=$dataWeapons[_0x573128[_0x5be9('0x7')]][_0x5be9('0x83')];}else{var _0x14ec27=$dataArmors[_0x573128[_0x5be9('0x7')]][_0x5be9('0x83')];}}else{var _0x14ec27=_0x573128['note'];}var _0x5e3dcb=_0x14ec27['split'](/[\r\n]+/);var _0x108b6c=![];for(var _0xdb6ff1=0x0;_0xdb6ff1<_0x5e3dcb[_0x5be9('0x5b')];_0xdb6ff1++){var _0x4ebe95=_0x5e3dcb[_0xdb6ff1];if(_0x4ebe95[_0x5be9('0xa2')](/<(?:Equip|Equipment) Set: (.*)>/i)){_0x573128[_0x5be9('0x6c')][_0x5be9('0xb7')](String(RegExp['$1'])[_0x5be9('0xbc')]()[_0x5be9('0x9b')]());}else if(_0x4ebe95[_0x5be9('0xa2')](/<(?:Equip|Equipment) Set>/i)){_0x108b6c=!![];}else if(_0x4ebe95[_0x5be9('0xa2')](/<\/(?:Equip|Equipment) Set>/i)){_0x108b6c=![];}else if(_0x108b6c){_0x573128[_0x5be9('0x6c')]['push'](_0x4ebe95[_0x5be9('0xbc')]()[_0x5be9('0x9b')]());}}};Olivia[_0x5be9('0x66')]=function(_0xadf5cf){_0xadf5cf[_0x5be9('0xa3')]=_0xadf5cf[_0x5be9('0xa3')]||{};_0xadf5cf[_0x5be9('0x31')]=_0xadf5cf[_0x5be9('0x31')]||{};_0xadf5cf[_0x5be9('0xa9')]=_0xadf5cf[_0x5be9('0xa9')]||{};var _0x22124d=_0xadf5cf[_0x5be9('0x83')]['split'](/[\r\n]+/);for(var _0x3270f2=0x0;_0x3270f2<_0x22124d[_0x5be9('0x5b')];_0x3270f2++){var _0x4bd250=_0x22124d[_0x3270f2];if(_0x4bd250[_0x5be9('0xa2')](/<(.*) Set, (\d+) (?:Piece|Pieces) Character: (.*), (\d+)>/i)){var _0x1471a8=String(RegExp['$1'])[_0x5be9('0x9b')]()+':';var _0x5c9d27=parseInt(RegExp['$2']);var _0x5be184=[String(RegExp['$3']),parseInt(RegExp['$4'])];this['makeEquipSetVisualNotetagsData'](_0x1471a8,_0x5c9d27,_0x5be184,_0xadf5cf[_0x5be9('0xa3')]);}else if(_0x4bd250[_0x5be9('0xa2')](/<(.*) Set, (\d+) (?:Piece|Pieces) Face: (.*), (\d+)>/i)){var _0x1471a8=String(RegExp['$1'])[_0x5be9('0x9b')]()+':';var _0x5c9d27=parseInt(RegExp['$2']);var _0x5be184=[String(RegExp['$3']),parseInt(RegExp['$4'])];this[_0x5be9('0x44')](_0x1471a8,_0x5c9d27,_0x5be184,_0xadf5cf[_0x5be9('0x31')]);}else if(_0x4bd250[_0x5be9('0xa2')](/<(.*) Set, (\d+) (?:Piece|Pieces) Battler: (.*)>/i)){var _0x1471a8=String(RegExp['$1'])['toLowerCase']()+':';var _0x5c9d27=parseInt(RegExp['$2']);var _0x5be184=String(RegExp['$3']);this['makeEquipSetVisualNotetagsData'](_0x1471a8,_0x5c9d27,_0x5be184,_0xadf5cf[_0x5be9('0xa9')]);}}};Olivia[_0x5be9('0x44')]=function(_0xaa7b68,_0x3935bc,_0x27a4e2,_0x155b06){var _0x316869=0x14;while(_0x316869>=_0x3935bc){var _0x188b7a=_0xaa7b68+_0x316869;if(_0x155b06[_0x188b7a]===undefined){_0x155b06[_0x188b7a]=_0x27a4e2;}_0x316869--;}};Game_Actor[_0x5be9('0x98')][_0x5be9('0x4a')]=function(){var _0x2b61f5=this[_0x5be9('0x64')]();for(var _0x33b1cc=0x0;_0x33b1cc<_0x2b61f5[_0x5be9('0x5b')];_0x33b1cc++){var _0x4a4ddc=_0x2b61f5[_0x33b1cc];if(!!_0x4a4ddc&&_0x4a4ddc[_0x5be9('0x6c')]['length']>0x0){for(var _0x1dd0b9=0x0;_0x1dd0b9<_0x4a4ddc[_0x5be9('0x6c')]['length'];_0x1dd0b9++){var _0x9f0b7b=_0x4a4ddc[_0x5be9('0x6c')][_0x1dd0b9];if(!this[_0x5be9('0x8b')][_0x5be9('0x5')](_0x9f0b7b)){this[_0x5be9('0x8b')]['push'](_0x9f0b7b);}this[_0x5be9('0x30')][_0x9f0b7b]=this[_0x5be9('0x30')][_0x9f0b7b]||0x0;this[_0x5be9('0x30')][_0x9f0b7b]++;}}}};Game_Actor['prototype'][_0x5be9('0x28')]=function(){this[_0x5be9('0xc1')]();var _0x49bc79=this['_equipSetBonusFlags'];for(var _0xf480a5=0x0;_0xf480a5<_0x49bc79[_0x5be9('0x5b')];_0xf480a5++){var _0x12ea25=this[_0x5be9('0x8b')][_0xf480a5];var _0x29c3de=this[_0x5be9('0x30')][_0x12ea25];var _0x15eb25=Olivia[_0x5be9('0x73')][_0x5be9('0xb9')][_0x12ea25];for(var _0x50d19f=0x1;_0x50d19f<=_0x29c3de;_0x50d19f++){this[_0x5be9('0x57')]=this[_0x5be9('0x57')]['concat'](_0x15eb25[_0x50d19f][_0x5be9('0x6a')]);}}};Game_Actor[_0x5be9('0x98')][_0x5be9('0xa4')]=function(_0x1d3382,_0x4440dc){this[_0x5be9('0xc1')]();var _0x5cb8c9=0x0;var _0x2198c2=_0x1d3382+'Plus';var _0x5ee1a9=this[_0x5be9('0x8b')];for(var _0x30ef36=0x0;_0x30ef36<_0x5ee1a9['length'];_0x30ef36++){var _0x4e6d86=this[_0x5be9('0x8b')][_0x30ef36];var _0x8637fb=this[_0x5be9('0x30')][_0x4e6d86];var _0x327150=Olivia[_0x5be9('0x73')][_0x5be9('0xb9')][_0x4e6d86];for(var _0x1e92e3=0x1;_0x1e92e3<=_0x8637fb;_0x1e92e3++){_0x5cb8c9+=_0x327150[_0x1e92e3][_0x2198c2][_0x4440dc];}}return _0x5cb8c9;};Game_Actor[_0x5be9('0x98')][_0x5be9('0xb6')]=function(_0x4e9e54,_0xba3698){this[_0x5be9('0xc1')]();var _0x33f512=0x1;var _0x171b3d=_0x4e9e54+_0x5be9('0x25');var _0x17655a=this[_0x5be9('0x8b')];for(var _0x3478af=0x0;_0x3478af<_0x17655a[_0x5be9('0x5b')];_0x3478af++){var _0xe4d833=this[_0x5be9('0x8b')][_0x3478af];var _0x51b173=this[_0x5be9('0x30')][_0xe4d833];var _0x1a7458=Olivia[_0x5be9('0x73')]['Sets'][_0xe4d833];for(var _0x155ed6=0x1;_0x155ed6<=_0x51b173;_0x155ed6++){_0x33f512*=_0x1a7458[_0x155ed6][_0x171b3d][_0xba3698];}}return _0x33f512;};Game_Actor[_0x5be9('0x98')][_0x5be9('0xc5')]=function(_0x1eb426){this[_0x5be9('0xc1')]();for(var _0x17775b=0x0;_0x17775b<this['_equipSetBonusStateIDs']['length'];_0x17775b++){var _0x596bb5=this[_0x5be9('0x57')][_0x17775b];var _0x19aaef=$dataStates[_0x596bb5];if(!!_0x19aaef&&!_0x1eb426[_0x5be9('0x5')](_0x19aaef)){_0x1eb426[_0x5be9('0xb7')](_0x19aaef);}}_0x1eb426[_0x5be9('0xb4')](function(_0x34f444,_0x56adc3){var _0x4a5957=_0x34f444['priority'];var _0x106000=_0x56adc3[_0x5be9('0x2')];if(_0x4a5957!==_0x106000)return _0x106000-_0x4a5957;return _0x34f444-_0x56adc3;});return _0x1eb426;};Olivia[_0x5be9('0x73')][_0x5be9('0x14')]=Game_Actor['prototype'][_0x5be9('0x89')];Game_Actor[_0x5be9('0x98')][_0x5be9('0x89')]=function(){this[_0x5be9('0xc1')]();var _0x3642b2=this[_0x5be9('0x8b')];for(var _0x4c1373=0x0;_0x4c1373<_0x3642b2['length'];_0x4c1373++){var _0x28486f=_0x3642b2[_0x4c1373];var _0x564940=this[_0x5be9('0x30')][_0x28486f];var _0x3cf138=_0x28486f+':'+_0x564940;if(this[_0x5be9('0x9')]()[_0x5be9('0xa3')][_0x3cf138]){return this[_0x5be9('0x9')]()[_0x5be9('0xa3')][_0x3cf138][0x0];}}return Olivia[_0x5be9('0x73')]['___Game_Actor_characterName___'][_0x5be9('0x55')](this);};Olivia['EquipSetBonuses']['___Game_Actor_characterIndex___']=Game_Actor[_0x5be9('0x98')][_0x5be9('0x7e')];Game_Actor[_0x5be9('0x98')][_0x5be9('0x7e')]=function(){this[_0x5be9('0xc1')]();var _0x3ca85a=this['_equipSetBonusFlags'];for(var _0x2ac824=0x0;_0x2ac824<_0x3ca85a[_0x5be9('0x5b')];_0x2ac824++){var _0x1411b3=_0x3ca85a[_0x2ac824];var _0x1f4bbb=this['_equipSetBonusCount'][_0x1411b3];var _0x447606=_0x1411b3+':'+_0x1f4bbb;if(this[_0x5be9('0x9')]()[_0x5be9('0xa3')][_0x447606]){return this[_0x5be9('0x9')]()[_0x5be9('0xa3')][_0x447606][0x1];}}return Olivia[_0x5be9('0x73')][_0x5be9('0x88')][_0x5be9('0x55')](this);};Olivia[_0x5be9('0x73')][_0x5be9('0xa0')]=Game_Actor['prototype'][_0x5be9('0x69')];Game_Actor[_0x5be9('0x98')][_0x5be9('0x69')]=function(){this[_0x5be9('0xc1')]();var _0x21c605=this[_0x5be9('0x8b')];for(var _0x10ae47=0x0;_0x10ae47<_0x21c605['length'];_0x10ae47++){var _0x240bfe=_0x21c605[_0x10ae47];var _0x21a6fb=this['_equipSetBonusCount'][_0x240bfe];var _0xfb03b9=_0x240bfe+':'+_0x21a6fb;if(this[_0x5be9('0x9')]()[_0x5be9('0x31')][_0xfb03b9]){return this['actor']()[_0x5be9('0x31')][_0xfb03b9][0x0];}}return Olivia[_0x5be9('0x73')][_0x5be9('0xa0')][_0x5be9('0x55')](this);};Olivia[_0x5be9('0x73')][_0x5be9('0x3d')]=Game_Actor[_0x5be9('0x98')][_0x5be9('0x39')];Game_Actor[_0x5be9('0x98')][_0x5be9('0x39')]=function(){this[_0x5be9('0xc1')]();var _0x303586=this[_0x5be9('0x8b')];for(var _0x3e1ab6=0x0;_0x3e1ab6<_0x303586['length'];_0x3e1ab6++){var _0x18a6ec=_0x303586[_0x3e1ab6];var _0x36ab91=this['_equipSetBonusCount'][_0x18a6ec];var _0x37f55e=_0x18a6ec+':'+_0x36ab91;if(this['actor']()[_0x5be9('0x31')][_0x37f55e]){return this['actor']()[_0x5be9('0x31')][_0x37f55e][0x1];}}return Olivia[_0x5be9('0x73')][_0x5be9('0x3d')][_0x5be9('0x55')](this);};Olivia[_0x5be9('0x73')][_0x5be9('0x29')]=Game_Actor[_0x5be9('0x98')][_0x5be9('0x79')];Game_Actor[_0x5be9('0x98')][_0x5be9('0x79')]=function(){this[_0x5be9('0xc1')]();var _0x332a8c=this[_0x5be9('0x8b')];for(var _0xf27721=0x0;_0xf27721<_0x332a8c[_0x5be9('0x5b')];_0xf27721++){var _0x4ff830=_0x332a8c[_0xf27721];var _0x414370=this[_0x5be9('0x30')][_0x4ff830];var _0x441e69=_0x4ff830+':'+_0x414370;if(this[_0x5be9('0x9')]()['equipSetBattlerGraphic'][_0x441e69]){return this[_0x5be9('0x9')]()[_0x5be9('0xa9')][_0x441e69];}}return Olivia['EquipSetBonuses'][_0x5be9('0x29')][_0x5be9('0x55')](this);};Olivia[_0x5be9('0x73')][_0x5be9('0x4d')]=Game_Actor[_0x5be9('0x98')][_0x5be9('0x58')];Game_Actor['prototype'][_0x5be9('0x58')]=function(_0x105ca4,_0x5d9794){Olivia[_0x5be9('0x73')][_0x5be9('0x4d')][_0x5be9('0x55')](this,_0x105ca4,_0x5d9794);if(!!_0x5d9794&&!!_0x5d9794[_0x5be9('0x6c')]&&_0x5d9794[_0x5be9('0x6c')]['length']>0x0){$gamePlayer['refresh']();}};Olivia['EquipSetBonuses'][_0x5be9('0xac')]=Window_SkillStatus[_0x5be9('0x98')][_0x5be9('0x1e')];Window_SkillStatus[_0x5be9('0x98')][_0x5be9('0x1e')]=function(){if(!!this[_0x5be9('0x36')]){var _0x58f2e3=ImageManager[_0x5be9('0xaf')](this[_0x5be9('0x36')][_0x5be9('0x69')]());if(_0x58f2e3['width']<=0x0){_0x58f2e3[_0x5be9('0x2a')](this['refresh'][_0x5be9('0x5c')](this));}else{Olivia['EquipSetBonuses']['___Window_SkillStatus_refresh___'][_0x5be9('0x55')](this);}}};if(Olivia[_0x5be9('0x73')][_0x5be9('0x1a')][_0x5be9('0x3e')]){function Window_EquipSetBonusTooltip(){this[_0x5be9('0x77')][_0x5be9('0x67')](this,arguments);}Window_EquipSetBonusTooltip[_0x5be9('0x98')]=Object[_0x5be9('0x81')](Window_Base['prototype']);Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0x95')]=Window_EquipSetBonusTooltip;Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0x77')]=function(){this['_item']=null;this['_actor']=null;this[_0x5be9('0x86')]=null;this[_0x5be9('0x3f')]='';Window_Base['prototype'][_0x5be9('0x77')][_0x5be9('0x55')](this,0x0,0x0,Graphics[_0x5be9('0x91')],Graphics[_0x5be9('0x4c')]);this[_0x5be9('0x65')]();};Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0xc')]=function(){this[_0x5be9('0x52')]=ImageManager[_0x5be9('0x2b')](Olivia[_0x5be9('0x73')]['Tooltips'][_0x5be9('0x51')]);};Window_EquipSetBonusTooltip['prototype']['updateTone']=function(){};Window_EquipSetBonusTooltip[_0x5be9('0x98')]['scaleRate']=function(){return Olivia[_0x5be9('0x73')][_0x5be9('0x1a')]['scaleRate'];};Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0x5e')]=function(){return Math['round'](Window_Base[_0x5be9('0x98')]['lineHeight'][_0x5be9('0x55')](this)*this[_0x5be9('0x24')]());};Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0xc9')]=function(){return Math['round'](Window_Base[_0x5be9('0x98')]['standardFontSize'][_0x5be9('0x55')](this)*this[_0x5be9('0x24')]());};Window_EquipSetBonusTooltip[_0x5be9('0x98')]['standardPadding']=function(){return Math[_0x5be9('0x35')](Window_Base[_0x5be9('0x98')][_0x5be9('0xa')][_0x5be9('0x55')](this)*this[_0x5be9('0x24')]());};Window_EquipSetBonusTooltip[_0x5be9('0x98')]['textPadding']=function(){return Math['round'](Window_Base[_0x5be9('0x98')][_0x5be9('0x50')][_0x5be9('0x55')](this)*this[_0x5be9('0x24')]());};Window_EquipSetBonusTooltip[_0x5be9('0x98')]['standardBackOpacity']=function(){return Olivia[_0x5be9('0x73')][_0x5be9('0x1a')][_0x5be9('0xb1')];};Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0xcb')]=function(){Window_Base['prototype'][_0x5be9('0xcb')][_0x5be9('0x55')](this);this[_0x5be9('0x70')]();};Window_EquipSetBonusTooltip[_0x5be9('0x98')]['updateShowHide']=function(){if(!!this[_0x5be9('0x86')]){if(this[_0x5be9('0x86')][_0x5be9('0x76')]){this[_0x5be9('0x3e')]();}else{this['hide']();}}};Window_EquipSetBonusTooltip[_0x5be9('0x98')]['processDrawIcon']=function(_0x450b82,_0x1c9f92){this[_0x5be9('0x7d')](_0x450b82,_0x1c9f92['x']+0x2,_0x1c9f92['y']+0x2);_0x1c9f92['x']+=Math[_0x5be9('0x35')](Window_Base['_iconWidth']*this[_0x5be9('0x24')]())+0x4;};Window_EquipSetBonusTooltip['prototype'][_0x5be9('0x7d')]=function(_0x4c6541,_0x15391d,_0x5112fd){var _0x3b6934=ImageManager[_0x5be9('0x2b')]('IconSet');var _0x5ca18a=Window_Base[_0x5be9('0x96')];var _0x3aa09c=Window_Base[_0x5be9('0x34')];var _0x31c8ce=_0x4c6541%0x10*_0x5ca18a;var _0x41edd2=Math[_0x5be9('0x9f')](_0x4c6541/0x10)*_0x3aa09c;var _0x3357dd=this[_0x5be9('0x24')]();this[_0x5be9('0xc6')][_0x5be9('0xbd')](_0x3b6934,_0x31c8ce,_0x41edd2,_0x5ca18a,_0x3aa09c,_0x15391d,_0x5112fd,Math[_0x5be9('0x35')](_0x5ca18a*_0x3357dd),Math['round'](_0x3aa09c*_0x3357dd));};Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0x43')]=function(_0x568d86){if(this[_0x5be9('0x36')]!==_0x568d86){this[_0x5be9('0x36')]=SceneManager[_0x5be9('0x19')][_0x5be9('0x9')]();}};Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0x7c')]=function(_0x532f48,_0x221a1e){if(this[_0x5be9('0x13')]!==_0x532f48){this[_0x5be9('0x13')]=_0x532f48;this[_0x5be9('0x63')]();this[_0x5be9('0x15')]();this[_0x5be9('0x1e')]();if(!!_0x221a1e){this[_0x5be9('0x86')]=_0x221a1e;this[_0x5be9('0x74')](_0x221a1e);}}};Window_EquipSetBonusTooltip['prototype'][_0x5be9('0x63')]=function(){this[_0x5be9('0x3f')]='';this[_0x5be9('0x40')]=[];if(!!this['_item']){if(this[_0x5be9('0x13')][_0x5be9('0x6c')]===undefined){Olivia[_0x5be9('0x97')](this[_0x5be9('0x13')]);}for(var _0x42e0e6=0x0;_0x42e0e6<this[_0x5be9('0x13')]['equipSet'][_0x5be9('0x5b')];_0x42e0e6++){var _0x14b1ce=this[_0x5be9('0x13')][_0x5be9('0x6c')][_0x42e0e6];var _0x191de2=Olivia[_0x5be9('0x73')][_0x5be9('0xb9')][_0x14b1ce];this[_0x5be9('0x3f')]+=Olivia[_0x5be9('0x73')][_0x5be9('0x1a')][_0x5be9('0x32')][_0x5be9('0x92')](_0x191de2[0x1][_0x5be9('0x3c')])+'\x0a';this['_opacityCheck']['push'](!![]);this[_0x5be9('0x87')](_0x14b1ce,_0x191de2);}}};Window_EquipSetBonusTooltip[_0x5be9('0x98')]['generateBonusText']=function(_0x2b4f2d,_0x4bb6c7){for(var _0x54eb30=0x1;_0x54eb30<=0x14;_0x54eb30++){var _0x2ead99=_0x4bb6c7[_0x54eb30];if(!!_0x2ead99[_0x5be9('0xbb')]){if(_0x2ead99['text']===_0x5be9('0x56')){var _0x35b52f=this[_0x5be9('0xb2')](_0x2ead99);}else{var _0x35b52f=_0x2ead99[_0x5be9('0x62')];}this['_text']+=Olivia[_0x5be9('0x73')][_0x5be9('0x1a')][_0x5be9('0xa7')][_0x5be9('0x92')](_0x54eb30,_0x35b52f)+'\x0a';if(!!this[_0x5be9('0x36')]){this[_0x5be9('0x40')][_0x5be9('0xb7')]((this['_actor']['_equipSetBonusCount'][_0x2b4f2d]||0x0)>=_0x54eb30);}else{this[_0x5be9('0x40')]['push'](!![]);}}}};Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0xb2')]=function(_0x215e4a){var _0x412f21='';var _0x2fac49=![];for(var _0x34dab4=0x0;_0x34dab4<0x8;_0x34dab4++){var _0x2f7198=_0x215e4a[_0x5be9('0x9a')][_0x34dab4];var _0x4bbe8d=_0x215e4a[_0x5be9('0x90')][_0x34dab4];if(_0x2f7198!==0x1||_0x4bbe8d!==0x0){if(_0x2fac49)_0x412f21+=',\x20';_0x412f21+=TextManager[_0x5be9('0x6d')](_0x34dab4);_0x2fac49=!![];}if(_0x2f7198!==0x1){_0x412f21+=':';_0x412f21+=Math[_0x5be9('0x35')](_0x2f7198*0x64)+'%';}if(_0x4bbe8d!==0x0){if(_0x4bbe8d>0x0)_0x412f21+='+';_0x412f21+=_0x4bbe8d;}}for(var _0x34dab4=0x0;_0x34dab4<0xa;_0x34dab4++){var _0x2f7198=_0x215e4a[_0x5be9('0x5d')][_0x34dab4];var _0x4bbe8d=_0x215e4a[_0x5be9('0xa6')][_0x34dab4];if(_0x2f7198!==0x1||_0x4bbe8d!==0x0){if(_0x2fac49)_0x412f21+=',\x20';_0x412f21+=Olivia[_0x5be9('0x73')][_0x5be9('0x1a')][_0x5be9('0x26')][_0x34dab4];_0x2fac49=!![];}if(_0x2f7198!==0x1){_0x412f21+=':';_0x412f21+=Math[_0x5be9('0x35')](_0x2f7198*0x64)+'%';}if(_0x4bbe8d!==0x0){if(_0x4bbe8d>0x0)_0x412f21+='+';_0x412f21+=Math[_0x5be9('0x35')](_0x2f7198*0x64)+'%';}}for(var _0x34dab4=0x0;_0x34dab4<0xa;_0x34dab4++){var _0x2f7198=_0x215e4a[_0x5be9('0x3a')][_0x34dab4];var _0x4bbe8d=_0x215e4a[_0x5be9('0x18')][_0x34dab4];if(_0x2f7198!==0x1||_0x4bbe8d!==0x0){if(_0x2fac49)_0x412f21+=',\x20';_0x412f21+=Olivia[_0x5be9('0x73')][_0x5be9('0x1a')][_0x5be9('0x45')][_0x34dab4];_0x2fac49=!![];}if(_0x2f7198!==0x1){_0x412f21+=':';_0x412f21+=Math['round'](_0x2f7198*0x64)+'%';}if(_0x4bbe8d!==0x0){if(_0x4bbe8d>0x0)_0x412f21+='+';_0x412f21+=Math['round'](_0x2f7198*0x64)+'%';}}var _0xaeeac=_0x215e4a[_0x5be9('0x6a')];for(var _0x34dab4=0x0;_0x34dab4<_0xaeeac[_0x5be9('0x5b')];_0x34dab4++){var _0x5f534e=_0x215e4a[_0x5be9('0x6a')][_0x34dab4];var _0x3f3bc6=$dataStates[_0x5f534e];var _0x1a52e4=_0x3f3bc6[_0x5be9('0xa8')][_0x5be9('0xc8')](/<<(.*?)>>/i,'');if(!!_0x3f3bc6&&_0x1a52e4!==''){if(_0x2fac49)_0x412f21+=',\x20';if(Olivia[_0x5be9('0x73')][_0x5be9('0x1a')]['drawStateIcons']&&_0x3f3bc6[_0x5be9('0xc4')]>0x0){_0x412f21+=_0x5be9('0xae')+_0x3f3bc6[_0x5be9('0xc4')]+']';}_0x412f21+=_0x1a52e4;_0x2fac49=!![];}}return _0x412f21;};Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0x15')]=function(){if(this[_0x5be9('0x3f')]===''){this[_0x5be9('0x1d')]=0x0;this[_0x5be9('0xc3')]=0x0;}else{var _0x1f7744=this['_text']['split'](/[\r\n]+/);if(_0x1f7744[_0x5be9('0x5b')]>0x0){var _0x24e4e5=0x0;for(var _0x1c4da2=0x0;_0x1c4da2<_0x1f7744['length'];_0x1c4da2++){var _0x517ff5=_0x1f7744[_0x1c4da2];var _0x5330c5=Window_ChoiceList[_0x5be9('0x98')]['textWidthEx'][_0x5be9('0x55')](this,_0x517ff5);_0x24e4e5=Math['max'](_0x5330c5,_0x24e4e5);}this[_0x5be9('0x1d')]=this[_0x5be9('0xa')]()*0x2+this[_0x5be9('0x50')]()*0x2+_0x24e4e5;this[_0x5be9('0xc3')]=this['standardPadding']()*0x2+(_0x1f7744['length']-0x1)*this['lineHeight']();}else{this[_0x5be9('0x1d')]=0x0;this[_0x5be9('0xc3')]=0x0;}}};Window_EquipSetBonusTooltip['prototype'][_0x5be9('0x1e')]=function(){this[_0x5be9('0x17')]();this[_0x5be9('0xc6')]['clear']();if(this[_0x5be9('0x1d')]>0x0&&this['height']>0x0){this[_0x5be9('0x3e')]();this[_0x5be9('0xb8')]();}else{this[_0x5be9('0x65')]();}};Window_EquipSetBonusTooltip[_0x5be9('0x98')][_0x5be9('0xb8')]=function(){var _0x5e7d6a=this[_0x5be9('0x3f')][_0x5be9('0x5f')](/[\r\n]+/);var _0x267afa=this[_0x5be9('0x50')]();var _0x5bced0=0x0;for(var _0x52653b=0x0;_0x52653b<_0x5e7d6a[_0x5be9('0x5b')];_0x52653b++){var _0x4e81bc=_0x5e7d6a[_0x52653b];this[_0x5be9('0x1c')](!!this['_opacityCheck'][_0x52653b]);this[_0x5be9('0x60')](_0x4e81bc,_0x267afa,_0x5bced0);_0x5bced0+=this[_0x5be9('0x5e')]();}};Window_EquipSetBonusTooltip['prototype'][_0x5be9('0x74')]=function(_0x5aa421){var _0x3982e0=_0x5aa421['x']+_0x5aa421[_0x5be9('0xa')]()+_0x5aa421['_cursorRect']['x'];var _0x2724be=Olivia[_0x5be9('0x73')][_0x5be9('0x1a')][_0x5be9('0x38')];_0x3982e0+=_0x2724be;_0x3982e0=_0x3982e0[_0x5be9('0x84')](0x0,Graphics['boxWidth']-this[_0x5be9('0x1d')]-_0x2724be);var _0x396b78=_0x5aa421['y']+_0x5aa421[_0x5be9('0xa')]()+_0x5aa421[_0x5be9('0x94')]['y'];var _0x477376=Olivia['EquipSetBonuses'][_0x5be9('0x1a')][_0x5be9('0x20')];if(_0x396b78+_0x477376+this[_0x5be9('0xc3')]+_0x5aa421[_0x5be9('0x94')]['height']>Graphics[_0x5be9('0x4c')]){_0x396b78-=_0x477376+this[_0x5be9('0xc3')];}else{_0x396b78+=_0x477376+_0x5aa421[_0x5be9('0x94')]['height'];}_0x396b78=_0x396b78[_0x5be9('0x84')](0x0,Graphics['boxHeight']-this[_0x5be9('0xc3')]);this['x']=_0x3982e0;this['y']=_0x396b78;};Window_Base[_0x5be9('0x98')][_0x5be9('0xad')]=function(_0x17e087){this[_0x5be9('0xbf')]=_0x17e087;};Window_Base[_0x5be9('0x98')][_0x5be9('0x61')]=function(){if(!!this[_0x5be9('0xbf')]){this[_0x5be9('0xbf')]['setItem'](this[_0x5be9('0x1')](),this);}};Olivia[_0x5be9('0x73')][_0x5be9('0x82')]=Window_ItemList['prototype'][_0x5be9('0x9c')];Window_ItemList[_0x5be9('0x98')][_0x5be9('0x9c')]=function(){Olivia[_0x5be9('0x73')][_0x5be9('0x82')][_0x5be9('0x55')](this);this[_0x5be9('0x61')]();};Olivia['EquipSetBonuses'][_0x5be9('0x11')]=Window_EquipSlot['prototype'][_0x5be9('0x9c')];Window_EquipSlot[_0x5be9('0x98')][_0x5be9('0x9c')]=function(){Olivia[_0x5be9('0x73')][_0x5be9('0x11')][_0x5be9('0x55')](this);this[_0x5be9('0x61')]();};Olivia[_0x5be9('0x73')][_0x5be9('0xaa')]=Window_ShopBuy[_0x5be9('0x98')]['updateHelp'];Window_ShopBuy[_0x5be9('0x98')]['updateHelp']=function(){Olivia['EquipSetBonuses'][_0x5be9('0xaa')][_0x5be9('0x55')](this);this[_0x5be9('0x61')]();};Olivia[_0x5be9('0x73')]['___Scene_Equip_create___']=Scene_Equip[_0x5be9('0x98')]['create'];Scene_Equip[_0x5be9('0x98')][_0x5be9('0x81')]=function(){Olivia[_0x5be9('0x73')]['___Scene_Equip_create___']['call'](this);this['createEquipSetBonusesTooltipWindow']();};Scene_Equip[_0x5be9('0x98')][_0x5be9('0x8c')]=function(){this[_0x5be9('0xbf')]=new Window_EquipSetBonusTooltip();this[_0x5be9('0x78')](this[_0x5be9('0xbf')]);this[_0x5be9('0xbf')][_0x5be9('0x43')](this[_0x5be9('0x9')]());this['_itemWindow'][_0x5be9('0xad')](this[_0x5be9('0xbf')]);this['_slotWindow']['setEquipSetBonusTooltipWindow'](this['_equipSetBonusesTooltipWindow']);};Olivia[_0x5be9('0x73')][_0x5be9('0x9d')]=Scene_Equip[_0x5be9('0x98')][_0x5be9('0x10')];Scene_Equip[_0x5be9('0x98')][_0x5be9('0x10')]=function(){Olivia['EquipSetBonuses'][_0x5be9('0x9d')][_0x5be9('0x55')](this);if(!!this[_0x5be9('0xbf')]){this[_0x5be9('0xbf')][_0x5be9('0x43')](this[_0x5be9('0x9')]());}};Olivia[_0x5be9('0x73')][_0x5be9('0x47')]=Scene_Equip[_0x5be9('0x98')]['onSlotOk'];Scene_Equip[_0x5be9('0x98')][_0x5be9('0x53')]=function(){this[_0x5be9('0xbf')]['setItem'](null);Olivia[_0x5be9('0x73')][_0x5be9('0x47')][_0x5be9('0x55')](this);};Olivia[_0x5be9('0x73')][_0x5be9('0x7f')]=Scene_Equip[_0x5be9('0x98')][_0x5be9('0xe')];Scene_Equip[_0x5be9('0x98')][_0x5be9('0xe')]=function(){this[_0x5be9('0xbf')]['setItem'](null);Olivia[_0x5be9('0x73')][_0x5be9('0x7f')][_0x5be9('0x55')](this);};Olivia['EquipSetBonuses'][_0x5be9('0xf')]=Scene_Equip[_0x5be9('0x98')][_0x5be9('0x48')];Scene_Equip[_0x5be9('0x98')][_0x5be9('0x48')]=function(){this[_0x5be9('0xbf')][_0x5be9('0x7c')](null);Olivia[_0x5be9('0x73')][_0x5be9('0xf')][_0x5be9('0x55')](this);};Olivia[_0x5be9('0x73')][_0x5be9('0x37')]=Scene_Equip[_0x5be9('0x98')][_0x5be9('0x27')];Scene_Equip[_0x5be9('0x98')][_0x5be9('0x27')]=function(){this[_0x5be9('0xbf')]['setItem'](null);Olivia[_0x5be9('0x73')][_0x5be9('0x37')][_0x5be9('0x55')](this);};Olivia[_0x5be9('0x73')][_0x5be9('0xa1')]=Scene_Item[_0x5be9('0x98')][_0x5be9('0x81')];Scene_Item[_0x5be9('0x98')]['create']=function(){Olivia[_0x5be9('0x73')][_0x5be9('0xa1')][_0x5be9('0x55')](this);this['createEquipSetBonusesTooltipWindow']();};Scene_Item[_0x5be9('0x98')][_0x5be9('0x8c')]=function(){this[_0x5be9('0xbf')]=new Window_EquipSetBonusTooltip();this['addChild'](this[_0x5be9('0xbf')]);this['_itemWindow'][_0x5be9('0xad')](this[_0x5be9('0xbf')]);};Olivia['EquipSetBonuses']['___Scene_Shop_create___']=Scene_Shop[_0x5be9('0x98')][_0x5be9('0x81')];Scene_Shop[_0x5be9('0x98')]['create']=function(){Olivia[_0x5be9('0x73')][_0x5be9('0x4f')][_0x5be9('0x55')](this);this[_0x5be9('0x8c')]();};Scene_Shop['prototype'][_0x5be9('0x8c')]=function(){this[_0x5be9('0xbf')]=new Window_EquipSetBonusTooltip();this[_0x5be9('0x78')](this[_0x5be9('0xbf')]);this['_buyWindow'][_0x5be9('0xad')](this[_0x5be9('0xbf')]);this[_0x5be9('0x6f')][_0x5be9('0xad')](this['_equipSetBonusesTooltipWindow']);};}