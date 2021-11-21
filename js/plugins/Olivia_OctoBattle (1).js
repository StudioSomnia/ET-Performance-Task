//=============================================================================
// Olivia Engine - Octo Battle - for RPG Maker MV version 1.6.1
// Olivia_OctoBattle.js
//=============================================================================
 /*:
 * @plugindesc <OctoBattle> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV compilation plugin using eight various battle-related
 * plugins to make an indepth battle system. The plugins are:
 *
 * 1) Weakness Display Plugin
 * 2) Break Shield System Plugin
 * 3) Boost Point System Plugin
 * 4) Weapon Swap System Plugin
 * 5) Side Battle Status UI Plugin
 * 6) Victory Sequence UI Plugin
 * 7) Battle Effects Pack Plugin
 * 8) Order Turn Battle Plugin
 *
 * Weakness Display Plugin: The features create a display in battle to show an
 * enemy's elemental weaknesses. These weaknesses will start off hidden and
 * will be slowly revealed whenever they receive elemental damage of the
 * correct type. Choose to display the enemy's HP status, too.
 *
 * Break Shield System Plugin: These features creates a new mechanic called a
 * Break Shield. Actors and/or enemies can have them. Whenever a battler is
 * struck with an elemental weakness, their Break Shield is reduced by 1
 * (unless modified by a notetag). Once the battler's Break Shield reaches
 * a score of 0, a state is then applied to the battler (usually a stun state).
 * Once the Break state wears off, the battler will regain their Break Shields
 * again. This can be used to create complex battle depth for your game.
 *
 * Boost Point System Plugin: These features add Boost Points to your game.
 * This is a newly added mechanic that allows actors and enemies to temporarily
 * power themselves up for the current turn by using a new resource called
 * Boost Points. Boost Points are acquired at the end of each turn if the
 * battler did not use Boost Points. While Boosted, actions can either deal
 * more damage, hit more times, make buff/debuff effects last longer, and more.
 *
 * Weapon Swap System Plugin: This will give your game's actors the function
 * to swap weapons in the middle of the fight. Up to one of each weapon type
 * can be equipped at a time and they can be switched out each turn. Swapping
 * weapons can let the player team adapt to certain situations better or giving
 * them the ability to hit certain weapon weaknesses in battle.
 *
 * Side Battle Status UI Plugin: This changes the UI of the battle system to
 * something more minimalistic. The menus are placed towards the player's party
 * to let the player focus their attention to the center of the screen instead
 * of to the lower ledges of the screen.
 *
 * Victory Sequence UI Plugin: This makes the battle system's victory sequence
 * only a single screen. It puts together all of the reward information gained
 * from battle onto a compact screen to display everything at once before the
 * player goes back to the map scene.
 *
 * Battle Effects Pack Plugin: This adds many new features to battle. These
 * new features include colored damage popups and two new popups: Weak and
 * Break, buff and debuff turn stacking, buff and debuff maximum turn control,
 * state maximum turn control, follow up skill actions, extra skill lists, and
 * many unique notetag effects.
 *
 * Order Turn Battle Plugin: This changes the battle system to have a turn
 * order system where battlers act immediately after inputting actions. These
 * actions can influence the order position of battlers in the current turn or
 * the next turn. The turn order is displayed to the top of the screen and gives
 * the player a clear understanding on whose turn it will be making it easier
 * for the player to formulate strategies and adapt to the situation in battle.
 *
 * Some of the features in this plugin requires YEP Battle Engine Core. Please
 * go to Yanfly's website to download it and install it:
 * http://yanfly.moe/2015/10/10/yep-3-battle-engine-core/
 * 
 * ------------
 * Instructions
 * ------------
 *
 * If you are using this plugin, please do not use the other 8 plugins listed
 * or else there will be errors. If you have configured the plugin parameters
 * for those individual plugins, you will unfortunately have to reconfigure
 * them for this one again. I'm afraid there is not anything I can do about that
 * and I must apologize for it.
 *
 * For the best compatibility, place this plugin close to the BOTTOM of your
 * plugin list. This is to ensure the features of this plugin will be used and
 * that other plugins do not override this one.
 *
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * There are many plugin parameters found in this plugin. They are separated by
 * sections each related to their own plugin. Those features can be turned on
 * and off if you don't wish to use every feature out of the eight. When an
 * entire feature is turned off, everything about that is turned off. Please
 * carefully set up your game!
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
 * <Switch to Weapon: x>
 * <Switch to Weapon: text>
 * When the actor uses this skill or item, the actor will switch to this
 * weapon if it is equipped when the skill cost is paid. x is the weapon
 * type ID and text is the weapon name. If you use the weapon name, type
 * it out exactly since it is case sensitive. This notetag does not make
 * the weapon a requirement. To make it a requirement, use the database's
 * "Required Weapon" dropdown lists to enforce the requirement.
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
 * <OTB User Next Turn: +x>
 * <OTB User Next Turn: -x>
 * Change the user's turn order position for the next turn upon using this
 * skill or item. This will only occur once upon usage, no matter how many times
 * the battler hits the target.
 *
 * <OTB Target Current Turn: +x>
 * <OTB Target Current Turn: -x>
 * <OTB Target Next Turn: +x>
 * <OTB Target Next Turn: -x>
 * <OTB Target Follow Turn: +x>
 * <OTB Target Follow Turn: -x>
 * Change the target's turn order position for the current turn, the next turn,
 * or the following turn. If you are using the 'Follow' version of the notetag,
 * the turn it will modify will depend on if the target has acted during the
 * current turn. If it has acted, then it will affect the next turn, otherwise,
 * the current turn. Successfully attacking the target multiple times will also
 * affect the target multiple times.
 *
 * <OTB User Add Current Turn Actions: x>
 * <OTB User Add Next Turn Actions: x>
 * Add x actions to the current turn or the next turn for the user. This will
 * only be added once no matter how many times the battler hits the target.
 *
 * <OTB Target Add Current Turn Actions: x>
 * <OTB Target Add Next Turn Actions: x>
 * Add x actions to the current turn or the next turn for the target. If the
 * target is targeted multiple times, the target will gain actions multiple
 * times so please be cautious when using this.
 *
 *
 *
 * Skill Notetags:
 *
 * <Require Any Weapon>
 * Requires any kind of weapon to be equipped in order to use it.
 *
 * <Require Weapon Types: x>
 * <Require Weapon Types: x, x, x>
 * Insert multiple x to add more weapon types. All of the weapon types must
 * be equipped in order for this skill to be used.
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
 * <No HP Gauge>
 * This will hide the enemy's HP gauge no matter what.
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
 * ---------------
 * Action Sequence
 * ---------------
 *
 * If you are using YEP Battle Engine Core, there is an action sequence that
 * lets you switch weapons for the actor in the middle of an action sequence:
 *
 * Weapon Swap: targets, x
 * or
 * Weapon Swap: targets, text
 * or
 * Swap Weapon: targets, x
 * or
 * Swap Weapon: targets, text
 *
 * Use x with the weapon type ID in the Database Type tab. Or use text and
 * replace it with the name of the weapon type. If you use the name of the
 * weapon type, type it out exactly as it is spelled because it is case
 * sensitive.
 *
 *
 *
 * ---------------
 * Plugin Commands
 * ---------------
 *
 * If you want to turn on or off the victory sequence or the music, use these
 * plugin commands:
 *
 * EnableVictoryAftermath
 * DisableVictoryAftermath
 * This turns on or off the victory sequence. This one matches Yanfly's plugin
 * command so you don't have to change your game's plugin command call if you
 * are switching over.
 *
 * EnableVictoryMusic
 * DisableVictoryMusic
 * This turns on or off the victory BGM and ME. This one matches Yanfly's
 * plugin command so you don't have to change your game's plugin command call
 * if you are switching over.
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
 * - YEP Counter Control
 * - YEP Battle AI Core
 * - YEP Battle Select Cursor
 * - YEP Buffs & States Core
 * - YEP Damage Core
 * - YEP Element Core
 * - YEP Target Core
 * - YEP Skill Core
 * - YEP Instant Cast
 * - YEP Item Core
 * - YEP Equip Core
 * - YEP Party System
 * - YEP Actor Party Switch
 * - YEP Job Points
 * - YEP Base Troop Events
 * - YEP Swap Enemies
 *
 * Place this plugin under those in the Plugin Manager list. Otherwise, the
 * effects of the plugins under this plugin may not work properly. I am NOT
 * responsible for the compatibility of plugins not shown in the above list.
 *
 * ------------
 * Terms of Use
 * ------------
 * 
 * 1. These plugins may be used in free or commercial games.
 * 2. 'Fallen Angel Olivia' and 'Yanfly' must be given credit in your games.
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
 * - Yanfly
 *
 * @param 
 * @param 
 * @param ATTENTION!!!
 * @default READ THE HELP FILE
 * @param 
 * @param 
 *
 * @param Weakness Display
 * @text Weakness Display System
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Weakness Display. Everything under this will be affected.
 * @default true
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
 * @param Break Shield System
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Break Shield system. Everything under this will be affected.
 * @default true
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
 * @param Boost Point System
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Boost Point system. Everything under this will be affected.
 * @default true
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
 * @param Weapon Swap System
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Weapon Swap System. Everything under this will be affected.
 * @default true
 *
 * @param Weapon Swap Battle Control
 * @text Battle Control
 * @parent Weapon Swap System 
 *
 * @param Weapon Swap Command
 * @text Swap Command
 * @parent Weapon Swap Battle Control
 * @desc How command for how Weapon Swap is displayed
 * @default WpnSwap
 *
 * @param Weapon Swap Show Command
 * @text Show Command?
 * @parent Weapon Swap Command
 * @type boolean
 * @on On
 * @off Off
 * @desc Show the Weapon Swap Command in the Actor Command Window?
 * @default false
 *
 * @param Weapon Swap Arrow Buttons
 * @text Use Arrow Swapping?
 * @parent Weapon Swap Battle Control
 * @type boolean
 * @on On
 * @off Off
 * @desc Use Arrow Keys to control weapon swapping?
 * @default true
 *
 * @param Weapon Swap Show Arrows
 * @text Show Swap Arrows?
 * @parent Weapon Swap Battle Control
 * @type boolean
 * @on On
 * @off Off
 * @desc Show arrows on the attack command?
 * @default true
 *
 * @param Weapon Swap Battle Test
 * @text Battle Test Weapons
 * @parent Weapon Swap Battle Control
 * @type boolean
 * @on On
 * @off Off
 * @desc In battle test, give all party members a copy of each weapon?
 * @default true
 *
 * @param Weapon Swap Visual
 * @text Visuals
 * @parent  Weapon Swap System
 *
 * @param Weapon Swap Battle Icons
 * @text Show Battle Icons
 * @parent Weapon Swap Visual
 * @type boolean
 * @on On
 * @off Off
 * @desc Show icons of currently equipped weapons in battle?
 * @default true
 *
 * @param Weapon Swap Battle Action
 * @text Show Battle Action
 * @parent Weapon Swap Visual
 * @type boolean
 * @on On
 * @off Off
 * @desc Show animation of actor switching weapons? Sideview only
 * @default true
 *
 * @param Weapon Swap Equip Core Window
 * @text Extend Equip Stat Window
 * @parent Weapon Swap Visual
 * @type boolean
 * @on On
 * @off Off
 * @desc Require Yanfly's Equip Core. Extend the stat compare window
 * @default true
 *
 * @param Weapon Swap Text Hit
 * @text Text Hit Rate
 * @parent Weapon Swap Equip Core Window
 * @desc How to display this extra parameter
 * @default ACC
 *
 * @param Weapon Swap Text Evasion
 * @text Text Evasion
 * @parent Weapon Swap Equip Core Window
 * @desc How to display this extra parameter
 * @default EVA
 *
 * @param Weapon Swap Text Critical
 * @text Text Critical
 * @parent Weapon Swap Equip Core Window
 * @desc How to display this extra parameter
 * @default CRI
 *
 * @param
 * @param
 *
 * @param Side Battle UI
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Side Battle UI
 * @default true
 *
 * @param Warning Side Battle UI
 * @text !!!!! WARNING !!!!!
 * @parent Side Battle UI
 * @default Requires YEP_BattleEngineCore
 *
 * @param Side UI Position Sprites
 * @text Position Sprites
 * @parent Side Battle UI
 *
 * @param Side Battle Position Actors
 * @text Position Actors
 * @parent Side UI Position Sprites
 * @type boolean
 * @on On
 * @off Off
 * @desc Position actor sprites on the screen using the formula below?
 * @default true
 *
 * @param Side Battle Actor X
 * @text Formula for X
 * @parent Side Battle Position Actors
 * @desc Formula used for X screen position
 * @default Graphics.boxWidth * 0.5 + 128 + index * 64
 *
 * @param Side Battle Actor Y
 * @text Formula for Y
 * @parent Side Battle Position Actors
 * @desc Formula used for Y screen position
 * @default Graphics.boxHeight - 128 - ($gameParty.maxBattleMembers() - index - 1) * 48
 *
 * @param Side Battle Position Enemies
 * @text Position Enemies
 * @parent Side UI Position Sprites
 * @type boolean
 * @on On
 * @off Off
 * @desc Position enemy sprites on the screen using the formula below?
 * @default true
 *
 * @param Side Battle Enemy X
 * @text Formula for X
 * @parent Side Battle Position Enemies
 * @desc Formula used for X screen position
 * @default x
 *
 * @param Side Battle Enemy Y
 * @text Formula for Y
 * @parent Side Battle Position Enemies
 * @desc Formula used for Y screen position
 * @default Graphics.boxHeight - 444 - 128 + y
 *
 * @param Side UI Status Window
 * @text Status Window
 * @parent Side Battle UI
 *
 * @param Side Battle Ceiling Distance
 * @text Ceiling Distance
 * @parent Side UI Status Window
 * @type number
 * @desc How many pixels from the top of the screen to leave as room for the status windows?
 * @default 0
 *
 * @param Side Battle Gauge Height
 * @text Gauge Height
 * @parent Side UI Status Window
 * @type number
 * @desc How high should the gauges of the windows be pixels
 * @default 6
 *
 * @param Side Battle Gauge Width
 * @text Gauge Width
 * @parent Side UI Status Window
 * @type number
 * @desc How wide should the gauges of the windows be in pixels
 * @default 160
 *
 * @param Side Battle Status Move Active
 * @text Move Distance: Active
 * @parent Side UI Status Window
 * @type number
 * @desc Move the status window this many pixels when the battler is the active battler
 * @default 48
 *
 * @param Side Battle Status Move Selected
 * @text Move Distance: Selected
 * @parent Side UI Status Window
 * @type number
 * @desc Move the status window this many pixels when the battler is selected for a skill or item target
 * @default 24
 *
 * @param Side Battle Status Move Speed
 * @text Move Distance: Speed
 * @parent Side UI Status Window
 * @type number
 * @desc The move speed for the window when animating
 * @default 4
 *
 * @param Side Battle Status States Max
 * @text States Max
 * @parent Side UI Status Window
 * @type number
 * @desc Maximum number of states to draw on the status windows
 * @default 4
 *
 * @param Side Battle Status Scale
 * @text Window Scale
 * @parent Side UI Status Window
 * @desc Scale the size of the contents of the status windows down by this much
 * @default 0.6
 *
 * @param Side Battle Status Width
 * @text Window Width
 * @parent Side UI Status Window
 * @type number
 * @desc How wide should the status windows be on the screen
 * @default 200
 *
 * @param Side UI Window Settings
 * @text Window Settings
 * @parent Side Battle UI
 *
 * @param Side Battle Dim Help Window
 * @text Dim Help Window
 * @parent Side UI Window Settings
 * @type boolean
 * @on On
 * @off Off
 * @desc Dim the help window background
 * @default true
 *
 * @param Side Battle Command Window Width
 * @text Command Window Width
 * @parent Side UI Window Settings
 * @type number
 * @min 1
 * @desc Width in pixels for battle command windows
 * @default 160
 *
 * @param Side Battle List Window Max
 * @text List Window Rows
 * @parent Side UI Window Settings
 * @type number
 * @min 1
 * @desc Maximum number of rows to use for each of the list windows
 * @default 8
 *
 * @param Side Battle List Window Width
 * @text List Window Width
 * @parent Side UI Window Settings
 * @type number
 * @min 1
 * @desc Width in pixels for battle list windows
 * @default 320
 *
 * @param Side Battle Command Window Scale
 * @text Window Scale
 * @parent Side UI Window Settings
 * @desc Scale the size of the contents of the command and list windows down by this much
 * @default 0.8
 *
 * @param Side Battle Window Masking
 * @text Window Masking Effect
 * @parent Side Battle UI
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the window masking effect
 * @default false
 *
 * @param
 * @param
 *
 * @param Victory Screen UI
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Victory Screen UI. Everything under this will be affected.
 * @default true
 *
 * @param Victory Screen Audio
 * @text Audio
 * @parent Victory Screen UI
 *
 * @param Victory Screen Level Sound
 * @text Level Sound
 * @parent Victory Screen Audio
 * @type file
 * @dir audio/se/
 * @desc Filename for the sound effect used when a level up occurs
 * @default Skill2
 *
 * @param Victory Screen Level Sound Volume
 * @text Volume
 * @parent Victory Screen Level Sound
 * @type number
 * @desc Volume of this sound effect
 * @default 90
 *
 * @param Victory Screen Level Sound Pitch
 * @text Pitch
 * @parent Victory Screen Level Sound
 * @type number
 * @desc Pitch of this sound effect
 * @default 100
 *
 * @param Victory Screen Level Sound Pan
 * @text Pan
 * @parent Victory Screen Level Sound
 * @type number
 * @desc Pan of this sound effect
 * @default 0
 *
 * @param Victory Screen BGM
 * @text BGM
 * @parent Victory Screen Audio
 * @type file
 * @dir audio/bgm/
 * @desc Filename for the BGM used during the victory sequence
 * @default Ship3
 *
 * @param Victory Screen BGM Volume
 * @text Volume
 * @parent Victory Screen BGM
 * @type number
 * @desc Volume of this sound effect
 * @default 90
 *
 * @param Victory Screen BGM Pitch
 * @text Pitch
 * @parent Victory Screen BGM
 * @type number
 * @desc Pitch of this sound effect
 * @default 100
 *
 * @param Victory Screen BGM Pan
 * @text Pan
 * @parent Victory Screen BGM
 * @type number
 * @desc Pan of this sound effect
 * @default 0
 *
 * @param Victory Screen Transition
 * @text Transition
 * @parent Victory Screen UI
 *
 * @param Victory Screen Transition Power
 * @text Transition Power
 * @parent Victory Screen Transition
 * @type number
 * @min 1
 * @desc Transition power when entering victory sequence. Use higher numbers to make transition faster.
 * @default 8
 *
 * @param Victory Screen Hide Window Delay
 * @text Hide Window Delay
 * @parent Victory Screen Transition
 * @type number
 * @desc Milliseconds used to wait before hiding the status windows
 * @default 500
 *
 * @param Victory Screen Display Delay
 * @text Display Delay
 * @parent Victory Screen Transition
 * @type number
 * @desc Milliseconds used to wait before showing the display
 * @default 1000
 *
 * @param Victory Screen Zoom
 * @text Zoom?
 * @parent Victory Screen Transition
 * @type boolean
 * @on On
 * @off Off
 * @desc Zoom in to the party during the transition?
 * @default true
 *
 * @param Victory Screen Zoom X
 * @text X
 * @parent Victory Screen Zoom
 * @type number
 * @desc X coordinate to zoom in at
 * @default 700
 *
 * @param Victory Screen Zoom Y
 * @text Y
 * @parent Victory Screen Zoom
 * @type number
 * @desc Y coordinate to zoom in at
 * @default 460
 *
 * @param Victory Screen Zoom Scale
 * @text Scale
 * @parent Victory Screen Zoom
 * @desc Scale to zoom in at
 * @default 2.0
 *
 * @param Victory Screen Zoom Duration
 * @text Duration
 * @parent Victory Screen Zoom
 * @type number
 * @desc Duration in frames for the whole zoom
 * @default 300
 *
 * @param Victory Screen Background
 * @text Background
 * @parent Victory Screen UI
 *
 * @param Victory Screen Background Dimmer Height
 * @text Dim Start Rate
 * @parent Victory Screen Background
 * @desc The veritcal portion of the screen to start dimming at
 * @default 0.2
 *
 * @param Victory Screen Background Side Thickness
 * @text Side Thickness
 * @parent Victory Screen Background
 * @type number
 * @desc Amount of distance between the side of the screen and the contents
 * @default 96
 *
 * @param Victory Screen Background Middle Thickness
 * @text Middle Thickness
 * @parent Victory Screen Background
 * @type number
 * @desc Amount of distance between content in the middle of the screen
 * @default 96
 *
 * @param Victory Screen Background Text Items
 * @text Item Reward Text
 * @parent Victory Screen Background
 * @desc Text used to display the items received from battle
 * @default Items Obtained
 *
 * @param Victory Screen Background Text Items Font Size
 * @text Font Size
 * @parent Victory Screen Background Text Items
 * @type number
 * @min 1
 * @desc Font size used for Item Reward Text
 * @default 36
 *
 * @param Victory Screen Background Text Victory
 * @text Victory Text
 * @parent Victory Screen Background
 * @desc Text to display for Victory screen title
 * @default Victory!
 *
 * @param Victory Screen Background Text Victory Font Size
 * @text Font Size
 * @parent Victory Screen Background Text Victory
 * @type number
 * @min 1
 * @desc Font size used for Victory Text
 * @default 60
 *
 * @param Victory Screen Rewards
 * @text Rewards
 * @parent Victory Screen Background
 *
 * @param Victory Screen Rewards Category Font Size
 * @text Category Font Size
 * @parent Victory Screen Rewards
 * @type number
 * @min 1
 * @desc Font size used for reward categories
 * @default 20
 *
 * @param Victory Screen Rewards Category Font Color
 * @text Category Font Color
 * @parent Victory Screen Rewards
 * @type number
 * @desc Text color used for reward categories
 * @default 8
 *
 * @param Victory Screen Rewards Results Font Size
 * @text Results Font Size
 * @parent Victory Screen Rewards
 * @type number
 * @min 1
 * @desc Font size used for reward results
 * @default 28
 *
 * @param Victory Screen Rewards Results Font Color
 * @text Results Font Color
 * @parent Victory Screen Rewards
 * @type number
 * @desc Text color used for reward results
 * @default 0
 *
 * @param Victory Screen Status Windows
 * @text Status Windows
 * @parent Victory Screen UI
 *
 * @param Victory Screen Status Actor Font Size
 * @text Actor Name Font Size
 * @parent Victory Screen Status Windows
 * @type number
 * @min 1
 * @desc Font size used for actor names
 * @default 20
 *
 * @param Victory Screen Status Level Font Size
 * @text Level Font Size
 * @parent Victory Screen Status Windows
 * @type number
 * @min 1
 * @desc Font size used for levels
 * @default 20
 *
 * @param Victory Screen Status Level Format
 * @text Level Format
 * @parent Victory Screen Status Windows
 * @desc Text format used for levels. %1 is 
 * @default Lv.%1
 *
 * @param Victory Screen Status JP Font Size
 * @text JP Font Size
 * @parent Victory Screen Status Windows
 * @type number
 * @min 1
 * @desc Font size used for JP
 * @default 16
 *
 * @param Victory Screen Status EXP Font Size
 * @text EXP Label Font Size
 * @parent Victory Screen Status Windows
 * @type number
 * @min 1
 * @desc Font size used for the EXP label
 * @default 16
 *
 * @param Victory Screen Status Update Duration
 * @text Update Duration
 * @parent Victory Screen Status Windows
 * @type number
 * @min 1
 * @desc Duration in frames for updating actors in the status windows
 * @default 180
 *
 * @param Victory Screen Status Current EXP Font Size
 * @text Current EXP Font Size
 * @parent Victory Screen Status Windows
 * @type number
 * @min 1
 * @desc Font size for current EXP
 * @default 20
 *
 * @param Victory Screen Status Current EXP Font Color
 * @text Current EXP Font Color
 * @parent Victory Screen Status Windows
 * @type number
 * @desc Text color for current EXP
 * @default 0
 *
 * @param Victory Screen Status Next EXP Font Size
 * @text Next EXP Font Size
 * @parent Victory Screen Status Windows
 * @type number
 * @min 1
 * @desc Font size for next level's EXP
 * @default 18
 *
 * @param Victory Screen Status Next EXP Font Color
 * @text Next EXP Font Color
 * @parent Victory Screen Status Windows
 * @type number
 * @desc Font color for next level's EXP
 * @default 8
 *
 * @param Victory Screen Status Exp Gauge Height
 * @text Gauge Height
 * @parent Victory Screen Status Windows
 * @type number
 * @min 3
 * @desc Height for EXP gauge
 * @default 18
 *
 * @param Victory Screen Status Exp Gauge Color 1
 * @text Gauge Color 1
 * @parent Victory Screen Status Windows
 * @type number
 * @desc Text color 1 for EXP gauge
 * @default 30
 *
 * @param Victory Screen Status Exp Gauge Color 2
 * @text Gauge Color 2
 * @parent Victory Screen Status Windows
 * @type number
 * @desc Text color 2 for EXP gauge
 * @default 31
 *
 * @param Victory Screen Status Level Up Text
 * @text Level Up Text
 * @parent Victory Screen Status Windows
 * @desc Text to display when a level is reached
 * @default Level Up!
 *
 * @param Victory Screen Status Level Up Font Size
 * @text Level Up Font Size
 * @parent Victory Screen Status Windows
 * @type number
 * @min 1
 * @desc Font size for Level Up Text
 * @default 36
 *
 * @param Victory Screen Status Level Up Color
 * @text Level Up Font Color
 * @parent Victory Screen Status Windows
 * @type number
 * @desc Text color for Level Up Text
 * @default 17
 *
 * @param Victory Screen Continue Button
 * @text Continue Button
 * @parent Victory Screen UI
 *
 * @param Victory Screen Continue Duration
 * @text Duration
 * @parent Victory Screen Continue Button
 * @type number
 * @min 1
 * @desc Duration in frames to wait before continue button appears
 * @default 180
 *
 * @param Victory Screen Continue Text
 * @text Text
 * @parent Victory Screen Continue Button
 * @desc Text to display to show at the bottom of the screen when ready to exit battle
 * @default Press \c[27]Z\c[0] or \c[27]X\c[0] to continue
 *
 * @param 
 * @param 
 *
 * @param Battle Effects Pack
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Battle Effects Pack. Everything under this will be affected.
 * @default true
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
 * @param Order Turn Battle
 * @type boolean
 * @on On
 * @off Off
 * @desc Enable or disable the Order Turn Battle System. Everything under this will be affected.
 * @default true
 *
 * @param Warning OTB 
 * @text !!!!! WARNING !!!!!
 * @parent Order Turn Battle
 * @default Requires YEP_BattleEngineCore
 *
 * @param OTB Force Battle System
 * @text Force Battle System?
 * @parent Order Turn Battle
 * @type boolean
 * @on On
 * @off Off
 * @desc Forces the OTB battle system no matter what your Battle Engine Core setting is.
 * @default true
 *
 * @param OTB Mechancs
 * @text Mechanics
 * @parent Order Turn Battle
 *
 * @param OTB Mechanics Action Speed Convert
 * @text Action Speed Convert
 * @parent OTB Mechancs
 * @type boolean
 * @on On
 * @off Off
 * @desc Converts action speed into a <OTB User Next Turn: +x> notetag for items and skills
 * @default true
 *
 * @param OTB Mechanics Buff Debuff AGI Convert
 * @text Buff/Debuff AGI Convert
 * @parent OTB Mechancs
 * @type boolean
 * @on On
 * @off Off
 * @desc Convert AGI buffs/debuffs into <OTB Target Next Turn: +x> notetag for items and skills
 * @default true
 *
 * @param OTB Mechanics Added Action Times
 * @text Added Action Times
 * @parent OTB Mechancs
 * @type boolean
 * @on On
 * @off Off
 * @desc Allow Added Action Times in this battle system?
 * @default true
 *
 * @param OTB Mechanics Action Time Order Randomize
 * @text Randomize Position
 * @parent OTB Mechanics Added Action Times
 * @type boolean
 * @on On
 * @off Off
 * @desc Randomize the positions of newly added actions in the turn order after the first initial position?
 * @default true
 *
 * @param OTB Mechanics Enable Party Window
 * @text Enable Party Window?
 * @parent OTB Mechancs
 * @type boolean
 * @on On
 * @off Off
 * @desc Gives access to the Party Command Window (Fight/Escape window)
 * @default false
 *
 * @param OTB Mechanics Escape Actor Window
 * @text Escape in Actor Window
 * @parent OTB Mechancs
 * @type boolean
 * @on On
 * @off Off
 * @desc Add the Escape command in the actor window?
 * @default true
 *
 * @param OTB Mechanics Remove Restrict Current
 * @text Current Turn Wakeup
 * @parent OTB Mechancs
 * @type boolean
 * @on On
 * @off Off
 * @desc Add battlers back to the current turn's order when they wake up from a restriction state?
 * @default true
 *
 * @param OTB Mechanics Remove Restrict Next
 * @text Next Turn Wakeup
 * @parent OTB Mechancs
 * @type boolean
 * @on On
 * @off Off
 * @desc Add battlers back to the next turn's order when they wake up from a restriction state?
 * @default true
 *
 * @param OTB Mechanics Static AGI Calculation
 * @text Static AGI Calculation
 * @parent OTB Mechancs
 * @type boolean
 * @on On
 * @off Off
 * @desc If on, calculate speed on static AGI. If off, calculate speed on random AGI.
 * @default true
 *
 * @param OTB Mechanics Stun Wakeup First
 * @text Stun Wakeup First
 * @parent OTB Mechancs
 * @type boolean
 * @on On
 * @off Off
 * @desc If on, when waking up from a stun, be first in position on the next turn
 * @default true
 *
 * @param OTB Mechanics Stun Wakeup Clamp
 * @text Clamp Turn Effects
 * @parent OTB Mechanics Stun Wakeup First
 * @type boolean
 * @on On
 * @off Off
 * @desc Prevent others from going past waking battlers for turn manipulation effects
 * @default true
 *
 * @param OTB Visuals
 * @text Visuals
 * @parent Order Turn Battle
 *
 * @param OTB Sprite Background Colors
 * @text Sprite Background Colors
 * @parent OTB Visuals
 *
 * @param OTB Background Actor Color
 * @text Actors
 * @parent OTB Sprite Background Colors
 * @desc Background color used for actors in the turn order
 * @default rgba(128, 160, 255, 0.6)
 *
 * @param OTB Background Enemy Color
 * @text Enemies
 * @parent OTB Sprite Background Colors
 * @desc Background color used for enemies in the turn order
 * @default rgba(255, 100, 80, 0.6)
 *
 * @param OTB Turn Order Display
 * @text Turn Order Display
 * @parent OTB Visuals
 *
 * @param OTB Display X
 * @text Display X
 * @parent OTB Turn Order Display
 * @type number
 * @desc The x position of the Turn Order Display
 * @default 48
 *
 * @param OTB Display Y
 * @text Display Y
 * @parent OTB Turn Order Display
 * @type number
 * @desc The y position of the Turn Order Display
 * @default 18
 *
 * @param OTB Display Help Window Move Y
 * @text Move to Y (During)
 * @parent OTB Turn Order Display
 * @type number
 * @desc Move to this Y position when Help Window is open
 * @default 18
 *
 * @param OTB Display Help Window Move Speed
 * @text Move Speed (During)
 * @parent OTB Turn Order Display
 * @type number
 * @desc Move speed when Help Window is open
 * @default 16
 *
 * @param OTB Display Current Text
 * @text Current Turn Text
 * @parent OTB Turn Order Display
 * @desc Text to display for current turn
 * @default CURRENT
 *
 * @param OTB Display Current Size
 * @text Font Size
 * @parent OTB Display Current Text
 * @type number
 * @desc Font size for current turn text
 * @default 20
 *
 * @param OTB Display Next Text
 * @text Next Turn Text
 * @parent OTB Turn Order Display
 * @desc Text to display for next turn
 * @default NEXT
 *
 * @param OTB Display Next Size
 * @text Font Size
 * @parent OTB Display Next Text
 * @type number
 * @desc Font size for next turn text
 * @default 20
 *
 * @param OTB Sprite Properties
 * @text Sprite Properties
 * @parent OTB Visuals
 *
 * @param OTB Sprite Move Duration
 * @text Move Duration
 * @parent OTB Sprite Properties
 * @type number
 * @min 1
 * @desc Number of frames to move the sprite
 * @default 20
 *
 * @param OTB Sprite Opacity Speed
 * @text Opacity Speed
 * @parent OTB Sprite Properties
 * @type number
 * @min 1
 * @desc How fast the sprite changes its opacity
 * @default 16
 *
 * @param OTB Battle Scene Properties
 * @text Battle Scene
 * @parent OTB Visuals
 *
 * @param OTB Help Window Y
 * @text Help Window Y
 * @parent OTB Battle Scene Properties
 * @type number
 * @desc Y coordinate of the help window
 * @default 92
 *
 * @param OTB Log Window Y
 * @text Log Window Y
 * @parent OTB Battle Scene Properties
 * @type number
 * @desc Y coordinate of the log window
 * @default 92
 *
 * @param
 * @param
 *
 */
//=============================================================================

var _0x11a5=['Weapon\x20Swap\x20Text\x20Hit','Battle\x20Effects\x20Break\x20Popup\x20Cell\x20X','OTB\x20Sprite\x20Opacity\x20Speed','WeaknessDisplay','Element\x20Icons','Side\x20Battle\x20Gauge\x20Width','Battle\x20Effects\x20Weak\x20Popup\x20Move\x20X\x20Rate','HP\x20Gauge\x20Minimum\x20Width','Battle\x20Effects\x20Weak\x20Popup\x20Cell\x20X\x20Factor','Boost\x20Point\x20Analyze\x20Multipliers','Boost\x20Point\x20Death\x20Regen','Stun\x20Icon','Boost\x20Point\x20Icon\x20Filled','Base\x20Shield\x20Value','description','Victory\x20Screen\x20Rewards\x20Results\x20Font\x20Color','Icon\x20Font\x20Size','Boost\x20Point\x20Unboost\x20Command','Side\x20Battle\x20Status\x20Scale','Boost\x20Point\x20Turn\x20Addition','Boost\x20Point\x20Show\x20Icons','Victory\x20Screen\x20Status\x20Level\x20Up\x20Color','Victory\x20Screen\x20Rewards\x20Category\x20Font\x20Color','Victory\x20Screen\x20Background\x20Text\x20Items\x20Font\x20Size','Victory\x20Screen\x20Zoom\x20Y','[\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22]','Boost\x20Point\x20System','Boost\x20Point\x20Small\x20Text','Battle\x20Effects\x20Weak\x20Popup\x20Move\x20X\x20Base','Victory\x20Screen\x20Status\x20Update\x20Duration','Protect\x20Weakness\x20Icon','BattleEffects','Victory\x20Screen\x20Background\x20Text\x20Victory','Victory\x20Screen\x20Rewards\x20Category\x20Font\x20Size','OctoBattle','Show\x20Actor\x20Shields','Victory\x20Screen\x20BGM\x20Volume','Boost\x20Point\x20Regen','Boost\x20Point\x20Damage\x20Multipliers','Weapon\x20Swap\x20Battle\x20Icons','Side\x20Battle\x20Enemy\x20Y','Boost\x20Point\x20Repeat\x20Multipliers','Boost\x20Point\x20Turn\x20Multipliers','Boost\x20Point\x20Icon\x20Empty','Weakness\x20Show\x20Name','Battle\x20Effects\x20Weak\x20Popup\x20Cell\x20X','Victory\x20Screen\x20Zoom\x20X','Side\x20Battle\x20Status\x20States\x20Max','Name\x20Font\x20Size','Boost\x20Point\x20BP\x20Addition','filter','OTB\x20Mechanics\x20Escape\x20Actor\x20Window','Victory\x20Screen\x20Status\x20Exp\x20Gauge\x20Height','Battle\x20Effects\x20Weak\x20Popup\x20Cell\x20Y\x20Factor','Victory\x20Screen\x20Level\x20Sound\x20Pitch','Boost\x20Point\x20Repeat\x20Addition','Victory\x20Screen\x20Zoom','Victory\x20Screen\x20Status\x20Next\x20EXP\x20Font\x20Size','HP\x20Gauge\x20Padding','Victory\x20Screen\x20BGM','contains','Weakness\x20Always\x20Show','OTB\x20Display\x20Current\x20Text','OTB\x20Mechanics\x20Enable\x20Party\x20Window','Weapon\x20Swap\x20Battle\x20Action','OTB\x20Display\x20Current\x20Size','Battle\x20Effects\x20Pack','Battle\x20Effects\x20Break\x20Popup\x20Cell\x20Width','Boost\x20Point\x20Boost\x20Command','Battle\x20Effects\x20Break\x20Popup\x20Cell\x20Y\x20Factor','Weakness\x20Display','Weakness\x20Show\x20Break\x20Shield','Victory\x20Screen\x20Level\x20Sound\x20Volume','Weakness\x20Show\x20HP\x20Gauge','Victory\x20Screen\x20Transition\x20Power','Side\x20Battle\x20List\x20Window\x20Max','Element\x20Weakness\x20Rate','Victory\x20Screen\x20Hide\x20Window\x20Delay','CRI','Battle\x20Effects\x20Weak\x20Popups','Boost\x20Point\x20Unboost\x20Command\x20Show','[\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22]','SideBattleUI','Victory\x20Screen\x20UI','Victory\x20Screen\x20Status\x20Next\x20EXP\x20Font\x20Color','OTB\x20Mechanics\x20Remove\x20Restrict\x20Next','Victory\x20Screen\x20Status\x20Exp\x20Gauge\x20Color\x201','OTB\x20Display\x20Help\x20Window\x20Move\x20Speed','Victory\x20Screen\x20Status\x20Level\x20Up\x20Text','Olivia_OctoBattle','Victory\x20Screen\x20Rewards\x20Results\x20Font\x20Size','VictoryUI','OTB\x20Force\x20Battle\x20System','Break\x20Reduction','Side\x20Battle\x20UI','Side\x20Battle\x20Position\x20Actors','Boost\x20Icon\x20Size','Side\x20Battle\x20List\x20Window\x20Width','Victory\x20Screen\x20Status\x20Level\x20Font\x20Size','Battle\x20Effects\x20Max\x20Buff\x20Turns','OTB\x20Display\x20X','Reduce\x20Animation','OTB\x20Log\x20Window\x20Y','Weapon\x20Swap\x20Text\x20Critical','OTB\x20Background\x20Actor\x20Color','Battle\x20Effects\x20Stack\x20Buff\x20Turns','Victory\x20Screen\x20Display\x20Delay','Victory\x20Screen\x20Status\x20Actor\x20Font\x20Size','Boost\x20Point\x20Death\x20Removal','Weapon\x20Swap\x20Battle\x20Test','Victory\x20Screen\x20Background\x20Side\x20Thickness','Show\x20Enemy\x20Shields','Boost\x20Point\x20Small\x20Text\x20Align','Unknown\x20Weakness\x20Icon','Side\x20Battle\x20Gauge\x20Height','Side\x20Battle\x20Actor\x20X','Battle\x20Effects\x20Break\x20Popup\x20Move\x20Y\x20Base','Weapon\x20Swap\x20Command','Battle\x20Effects\x20Weak\x20Popup\x20Move\x20Y\x20Rate','parameters','Victory\x20Screen\x20Status\x20Current\x20EXP\x20Font\x20Size','OTB\x20Display\x20Next\x20Text','Boost\x20Point\x20Maximum\x20Use','OTB\x20Mechanics\x20Action\x20Time\x20Order\x20Randomize','OTB\x20Mechanics\x20Action\x20Speed\x20Convert','Battle\x20Effects\x20Weak\x20Popup\x20Cell\x20Width','OTB\x20Sprite\x20Move\x20Duration','Weapon\x20Swap\x20Show\x20Command','Side\x20Battle\x20Status\x20Move\x20Active','Victory\x20Screen\x20Status\x20EXP\x20Font\x20Size','Side\x20Battle\x20Command\x20Window\x20Width','Break\x20Shield\x20System','Victory\x20Screen\x20Level\x20Sound','Shown\x20Elements','OTB\x20Mechanics\x20Remove\x20Restrict\x20Current','Enemy\x20Shields','Draw\x20Menu\x20Shields','Victory\x20Screen\x20Status\x20Level\x20Format','Side\x20Battle\x20Command\x20Window\x20Scale','Side\x20Battle\x20Ceiling\x20Distance','Battle\x20Effects\x20Break\x20Popup\x20Move\x20X\x20Base','Victory\x20Screen\x20BGM\x20Pan','Weakness\x20Show\x20States','<OctoBattle>','OTB\x20Display\x20Help\x20Window\x20Move\x20Y','OTB\x20Mechanics\x20Static\x20AGI\x20Calculation','OTB\x20Mechanics\x20Stun\x20Wakeup\x20First','Victory\x20Screen\x20Background\x20Dimmer\x20Height','OTB\x20Display\x20Y','Boost\x20Point\x20Boost\x20Command\x20Show','Boost\x20Point\x20LR\x20Buttons','OTB\x20Help\x20Window\x20Y','Boost\x20Point\x20Start\x20Battle','Weapon\x20Swap\x20Text\x20Evasion','Victory\x20Screen\x20Zoom\x20Scale','Boost\x20Point\x20Animations','Victory\x20Screen\x20Background\x20Text\x20Items','Victory\x20Screen\x20Status\x20Exp\x20Gauge\x20Color\x202','Side\x20Battle\x20Status\x20Width','Small\x20Boost\x20Icons','Side\x20Battle\x20Position\x20Enemies','true','OTB\x20Mechanics\x20Added\x20Action\x20Times','parse','Victory\x20Screen\x20Status\x20JP\x20Font\x20Size','Side\x20Battle\x20Window\x20Masking','false','Max\x20Break\x20Shields','Small\x20Weakness\x20Icons','Victory\x20Screen\x20Background\x20Text\x20Victory\x20Font\x20Size','Victory\x20Screen\x20BGM\x20Pitch','Weapon\x20Swap\x20Arrow\x20Buttons','OTB\x20Mechanics\x20Buff\x20Debuff\x20AGI\x20Convert','Battle\x20Effects\x20Break\x20Popup\x20Move\x20Y\x20Rate','BreakShield','Boost\x20Point\x20Damage\x20Addition','Battle\x20Effects\x20Break\x20Popup\x20Move\x20X\x20Rate','Boost\x20Point\x20Analyze\x20Addition','50%\x20HP\x20Color','Boost\x20Point\x20Maximum\x20Stored','Stun\x20State\x20ID','EVA'];(function(_0x4b8d18,_0x11a5b5){var _0x511020=function(_0x4791dd){while(--_0x4791dd){_0x4b8d18['push'](_0x4b8d18['shift']());}};_0x511020(++_0x11a5b5);}(_0x11a5,0x1a1));var _0x5110=function(_0x4b8d18,_0x11a5b5){_0x4b8d18=_0x4b8d18-0x0;var _0x511020=_0x11a5[_0x4b8d18];return _0x511020;};var Imported=Imported||{};Imported[_0x5110('0x24')]=!![];var Olivia=Olivia||{};Olivia[_0x5110('0xa3')]=Olivia[_0x5110('0xa3')]||{};var parameters=$plugins[_0x5110('0xb3')](function(_0x23965f){return _0x23965f[_0x5110('0x8f')][_0x5110('0x7')](_0x5110('0x5a'));})[0x0][_0x5110('0x42')];Olivia[_0x5110('0xa3')][_0x5110('0x84')]={'Enabled':eval(parameters[_0x5110('0x11')]),'ShownElements':JSON[_0x5110('0x6e')](parameters[_0x5110('0x50')]),'ElementIcons':JSON[_0x5110('0x6e')](parameters[_0x5110('0x85')]),'UnknownIcon':Number(parameters[_0x5110('0x3c')]),'AlwaysShow':eval(parameters[_0x5110('0x8')]),'HideDuration':Number(parameters['Weakness\x20Hide\x20Duration']||0x5a),'ShowBreakShield':eval(parameters[_0x5110('0x12')]),'ShowStunTurns':eval(parameters['Weakness\x20Stun\x20Duration']),'ShowHpGauge':eval(parameters[_0x5110('0x14')]),'HpGaugeMinWidth':Number(parameters[_0x5110('0x88')]||0x64),'HpGaugePadding':Number(parameters[_0x5110('0x5')]||0x64),'ShowName':eval(parameters[_0x5110('0xad')]),'NameFontSize':Number(parameters[_0x5110('0xb1')]||0x16),'HpColor50':Number(parameters[_0x5110('0x7d')]||0x11),'HpColor25':Number(parameters['25%\x20HP\x20Color']||0x12),'ShowStates':eval(parameters[_0x5110('0x59')]||_0x5110('0x6c')),'SmallWeakIcons':eval(parameters[_0x5110('0x73')]),'WeakIconSize':Number(parameters['Weak\x20Icon\x20Size']||0.6)};Olivia[_0x5110('0xa3')][_0x5110('0x79')]={'Enabled':eval(parameters[_0x5110('0x4e')]),'Actors':eval(parameters['Actor\x20Shields']),'DrawMenu':eval(parameters[_0x5110('0x53')]),'Enemies':eval(parameters[_0x5110('0x52')]),'BaseShields':Number(parameters[_0x5110('0x8e')]||0x0),'BreakReduce':Number(parameters[_0x5110('0x28')]||0x1),'MaxShields':Number(parameters[_0x5110('0x72')]||0x63),'StunState':Number(parameters[_0x5110('0x7f')]||0x1),'WeakRate':Number(parameters[_0x5110('0x17')]||1.1),'ShieldIcon':Number(parameters['Shield\x20Icon']||0x51),'StunIcon':Number(parameters[_0x5110('0x8c')]||0x6),'ProtectIcon':Number(parameters[_0x5110('0x9f')]||0x51),'IconFontSize':Number(parameters[_0x5110('0x91')]||0x16),'ReduceAnimation':Number(parameters[_0x5110('0x30')]||0x0),'BreakAnimation':Number(parameters['Break\x20Animation']||0x0),'ShowActorShield':eval(parameters[_0x5110('0xa4')]),'ShowEnemyShield':eval(parameters[_0x5110('0x3a')])};Olivia[_0x5110('0xa3')]['BoostPoint']={'Enabled':eval(parameters[_0x5110('0x9b')]),'BP_StartBattle':Number(parameters[_0x5110('0x63')]||0x1),'BP_TurnRegen':Number(parameters[_0x5110('0xa6')]||0x1),'BP_AlwaysRegen':eval(parameters['Boost\x20Point\x20Always\x20Regen']),'BP_MaxStored':Number(parameters[_0x5110('0x7e')]||0x5),'BP_MaxUse':Number(parameters[_0x5110('0x45')]||0x3),'DeathRemoval':eval(parameters[_0x5110('0x37')]||_0x5110('0x6c')),'DeathRegen':eval(parameters[_0x5110('0x8b')]||_0x5110('0x71')),'BP_DmgMultiply':JSON[_0x5110('0x6e')](parameters[_0x5110('0xa7')]||_0x5110('0x1c')),'BP_DmgAddition':JSON[_0x5110('0x6e')](parameters[_0x5110('0x7a')]||_0x5110('0x9a')),'BP_RepMultiply':JSON[_0x5110('0x6e')](parameters[_0x5110('0xaa')]||'[\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22,\x221\x22]'),'BP_RepAddition':JSON[_0x5110('0x6e')](parameters[_0x5110('0x2')]||_0x5110('0x9a')),'BP_TurnMultiply':JSON[_0x5110('0x6e')](parameters[_0x5110('0xab')]||_0x5110('0x1c')),'BP_TurnAddition':JSON[_0x5110('0x6e')](parameters[_0x5110('0x94')]||_0x5110('0x9a')),'BP_AnalyzeMultiply':JSON[_0x5110('0x6e')](parameters[_0x5110('0x8a')]||_0x5110('0x1c')),'BP_AnalyzeAddition':JSON['parse'](parameters[_0x5110('0x7c')]||_0x5110('0x9a')),'BP_BPEffectMultiply':JSON['parse'](parameters['Boost\x20Point\x20BP\x20Effect\x20Multipliers']||_0x5110('0x1c')),'BP_BPEffectAddition':JSON['parse'](parameters[_0x5110('0xb2')]||'[\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22,\x220\x22]'),'Animations':JSON[_0x5110('0x6e')](parameters[_0x5110('0x66')]),'ShowIcons':eval(parameters[_0x5110('0x95')]),'BoostIcon':Number(parameters[_0x5110('0x8d')]||0xa0),'EmptyIcon':Number(parameters[_0x5110('0xac')]||0xa1),'SmallIcon':eval(parameters[_0x5110('0x6a')]),'IconSize':Number(parameters[_0x5110('0x2b')]||0.5),'SmallText':String(parameters[_0x5110('0x9c')]),'TextAlign':String(parameters[_0x5110('0x3b')]),'BoostCmd':String(parameters[_0x5110('0xf')]),'BoostShow':eval(parameters[_0x5110('0x60')]),'UnboostCmd':String(parameters[_0x5110('0x92')]),'UnboostShow':eval(parameters[_0x5110('0x1b')]),'LRButtons':eval(parameters[_0x5110('0x61')])};Olivia[_0x5110('0xa3')]['WeaponSwap']={'Enabled':eval(parameters['Weapon\x20Swap\x20System']),'WpnSwapCmd':String(parameters[_0x5110('0x40')]),'WpnSwapShow':eval(parameters[_0x5110('0x4a')]),'WpnSwapArrows':eval(parameters[_0x5110('0x76')]),'ShowArrows':eval(parameters['Weapon\x20Swap\x20Show\x20Arrows']||_0x5110('0x6c')),'WpnBattleTest':eval(parameters[_0x5110('0x38')]||_0x5110('0x6c')),'ShowIcons':eval(parameters[_0x5110('0xa8')]),'BattleAction':eval(parameters[_0x5110('0xb')]),'ExtraLines':eval(parameters['Weapon\x20Swap\x20Equip\x20Core\x20Window']||'true'),'TextHit':String(parameters[_0x5110('0x81')]||'ACC'),'TextEva':String(parameters[_0x5110('0x64')]||_0x5110('0x80')),'TextCri':String(parameters[_0x5110('0x32')]||_0x5110('0x19'))};Olivia[_0x5110('0xa3')][_0x5110('0x1d')]={'Enabled':eval(parameters[_0x5110('0x29')]),'DimHelpWindow':eval(parameters['Side\x20Battle\x20Dim\x20Help\x20Window']),'WindowMasking':eval(parameters[_0x5110('0x70')]),'WindowScale':Number(parameters[_0x5110('0x55')]||0.8),'WindowCmdWidth':Number(parameters[_0x5110('0x4d')]||0xa0),'WindowMaxList':Number(parameters[_0x5110('0x16')]||0x8),'WindowListWidth':Number(parameters[_0x5110('0x2c')]||0x140),'CeilingBuffer':Number(parameters[_0x5110('0x56')]||0x0),'StatusScale':Number(parameters[_0x5110('0x93')]||0.6),'StatusWidth':Number(parameters[_0x5110('0x69')]||0xc8),'GaugeWidth':Number(parameters[_0x5110('0x86')]||0xa0),'GaugeHeight':Number(parameters[_0x5110('0x3d')]||0x6),'StatesMax':Number(parameters[_0x5110('0xb0')]||0x4),'ActiveBattlerMove':Number(parameters[_0x5110('0x4b')]||0x30),'SelectBattlerMove':Number(parameters['Side\x20Battle\x20Status\x20Move\x20Selected']||0x18),'WindowMoveSpeed':Number(parameters['Side\x20Battle\x20Status\x20Move\x20Speed']||0x4),'PositionActors':eval(parameters[_0x5110('0x2a')]),'ActorPositionFormulaX':String(parameters[_0x5110('0x3e')]),'ActorPositionFormulaY':String(parameters['Side\x20Battle\x20Actor\x20Y']),'PositionEnemies':eval(parameters[_0x5110('0x6b')]),'EnemyPositionFormulaX':String(parameters['Side\x20Battle\x20Enemy\x20X']),'EnemyPositionFormulaY':String(parameters[_0x5110('0xa9')])};Olivia[_0x5110('0xa3')][_0x5110('0x26')]={'Enabled':eval(parameters[_0x5110('0x1e')]),'LevelUpSound':{'name':String(parameters[_0x5110('0x4f')]),'volume':Number(parameters[_0x5110('0x13')]),'pitch':Number(parameters[_0x5110('0x1')]),'pan':Number(parameters['Victory\x20Screen\x20Level\x20Sound\x20Pan'])},'VictoryBgm':{'name':String(parameters[_0x5110('0x6')]),'volume':Number(parameters[_0x5110('0xa5')]),'pitch':Number(parameters[_0x5110('0x75')]),'pan':Number(parameters[_0x5110('0x58')])},'TransitionPower':Number(parameters[_0x5110('0x15')]),'WaitHideWindows':Number(parameters[_0x5110('0x18')]),'WaitDisplayVictory':Number(parameters[_0x5110('0x35')]),'ZoomInTransition':eval(parameters[_0x5110('0x3')]),'ZoomX':Number(parameters[_0x5110('0xaf')]),'ZoomY':Number(parameters[_0x5110('0x99')]),'ZoomScale':Number(parameters[_0x5110('0x65')]),'ZoomDuration':Number(parameters['Victory\x20Screen\x20Zoom\x20Duration']),'BackgroundDimHeight':Number(parameters[_0x5110('0x5e')]),'SideThickness':Number(parameters[_0x5110('0x39')]),'MiddleThickness':Number(parameters['Victory\x20Screen\x20Background\x20Middle\x20Thickness']),'TextItems':String(parameters[_0x5110('0x67')]),'TextItemsFontSize':Number(parameters[_0x5110('0x98')]),'TextVictory':String(parameters[_0x5110('0xa1')]),'TextVictoryFontSize':Number(parameters[_0x5110('0x74')]),'RewardCategoryFontSize':Number(parameters[_0x5110('0xa2')]),'RewardCategoryFontColor':Number(parameters[_0x5110('0x97')]),'RewardResultsFontSize':Number(parameters[_0x5110('0x25')]),'RewardResultsFontColor':Number(parameters[_0x5110('0x90')]),'ActorNameFontSize':Number(parameters[_0x5110('0x36')]),'ActorLevelFontSize':Number(parameters[_0x5110('0x2d')]),'ActorLevelFormat':String(parameters[_0x5110('0x54')]),'ActorJPFontSize':Number(parameters[_0x5110('0x6f')]),'ActorEXPFontSize':Number(parameters[_0x5110('0x4c')]),'ActorUpdateDuration':Number(parameters[_0x5110('0x9e')]),'ExpCurrentFontSize':Number(parameters[_0x5110('0x43')]),'ExpCurrentFontColor':Number(parameters['Victory\x20Screen\x20Status\x20Current\x20EXP\x20Font\x20Color']),'ExpNextFontSize':Number(parameters[_0x5110('0x4')]),'ExpNextFontColor':Number(parameters[_0x5110('0x1f')]),'ExpGaugeHeight':Number(parameters[_0x5110('0xb5')]),'ExpGaugeColor1':Number(parameters[_0x5110('0x21')]),'ExpGaugeColor2':Number(parameters[_0x5110('0x68')]),'LevelUpText':String(parameters[_0x5110('0x23')]),'LevelUpTextFontSize':Number(parameters['Victory\x20Screen\x20Status\x20Level\x20Up\x20Font\x20Size']),'LevelUpTextColor':Number(parameters[_0x5110('0x96')]),'ContinueDuration':Number(parameters['Victory\x20Screen\x20Continue\x20Duration']),'ContinueText':String(parameters['Victory\x20Screen\x20Continue\x20Text'])};Olivia[_0x5110('0xa3')][_0x5110('0xa0')]={'Enabled':eval(parameters[_0x5110('0xd')]),'WeakPopupEnabled':eval(parameters[_0x5110('0x1a')]),'WeakPopupReqRate':Number(parameters['Battle\x20Effects\x20Weak\x20Popup\x20Require\x20Rate']||1.1),'WeakCellX':Number(parameters[_0x5110('0xae')]||0x4),'WeakCellWidth':Number(parameters[_0x5110('0x48')]||0x3),'WeakCellXFactor':Number(parameters[_0x5110('0x89')]||0.25),'WeakCellYFactor':Number(parameters[_0x5110('0x0')]||0.6),'WeakMoveXBase':Number(parameters[_0x5110('0x9d')]||-0.04),'WeakMoveXRate':Number(parameters[_0x5110('0x87')]||1.1),'WeakMoveYBase':Number(parameters['Battle\x20Effects\x20Weak\x20Popup\x20Move\x20Y\x20Base']||0x0),'WeakMoveYRate':Number(parameters[_0x5110('0x41')]||0x0),'BreakPopupEnabled':eval(parameters['Battle\x20Effects\x20Break\x20Popups']),'BreakCellX':Number(parameters[_0x5110('0x82')]||0x7),'BreakCellWidth':Number(parameters[_0x5110('0xe')]||0x3),'BreakCellXFactor':Number(parameters['Battle\x20Effects\x20Break\x20Popup\x20Cell\x20X\x20Factor']||0.25),'BreakCellYFactor':Number(parameters[_0x5110('0x10')]||0.6),'BreakMoveXBase':Number(parameters[_0x5110('0x57')]||-0.04),'BreakMoveXRate':Number(parameters[_0x5110('0x7b')]||1.1),'BreakMoveYBase':Number(parameters[_0x5110('0x3f')]||0x0),'BreakMoveYRate':Number(parameters[_0x5110('0x78')]||0x0),'StackBuffTurns':eval(parameters[_0x5110('0x34')]),'MaxBuffTurns':Number(parameters[_0x5110('0x2e')]||0x9),'StackDebuffTurns':eval(parameters['Battle\x20Effects\x20Stack\x20Debuff\x20Turns']),'MaxDebuffTurns':Number(parameters[_0x5110('0x2e')]||0x9)};Olivia[_0x5110('0xa3')]['OTB']={'Enabled':eval(parameters['Order\x20Turn\x20Battle']),'ForceBattleSystem':eval(parameters[_0x5110('0x27')]),'ActionSpeedConvert':eval(parameters[_0x5110('0x47')]),'BuffDebuffAgiConvert':eval(parameters[_0x5110('0x77')]),'AddedActionTimes':eval(parameters[_0x5110('0x6d')]),'ActionTimeOrderRandomize':eval(parameters[_0x5110('0x46')]),'EnablePartyWindow':eval(parameters[_0x5110('0xa')]),'EscapeActorWindow':eval(parameters[_0x5110('0xb4')]),'RemoveRestrictCurrent':eval(parameters[_0x5110('0x51')]),'RemoveRestrictNext':eval(parameters[_0x5110('0x20')]),'StaticAgiCalculation':eval(parameters[_0x5110('0x5c')]),'StunWakeUpFirst':eval(parameters[_0x5110('0x5d')]),'StunWakeUpClamp':eval(parameters['OTB\x20Mechanics\x20Stun\x20Wakeup\x20Clamp']),'BackgroundActorColor':String(parameters[_0x5110('0x33')]),'BackgroundEnemyColor':String(parameters['OTB\x20Background\x20Enemy\x20Color']),'DisplayX':Number(parameters[_0x5110('0x2f')]),'DisplayY':Number(parameters[_0x5110('0x5f')]),'HelpWindowMoveY':Number(parameters[_0x5110('0x5b')]),'HelpWindowMoveSpeed':Number(parameters[_0x5110('0x22')]),'CurrentTurnText':String(parameters[_0x5110('0x9')]),'CurrentTurnFontSize':Number(parameters[_0x5110('0xc')]),'NextTurnText':String(parameters[_0x5110('0x44')]),'NextTurnFontSize':Number(parameters['OTB\x20Display\x20Next\x20Size']),'MoveDuration':Number(parameters[_0x5110('0x49')]),'OpacitySpeed':Number(parameters[_0x5110('0x83')]),'HelpWindowNewY':Number(parameters[_0x5110('0x62')]),'LogWindowNewY':Number(parameters[_0x5110('0x31')])};

//=============================================================================
// Weakness Display
//
// 1. Reveal corresponding weakness when struck with elemental damage.
// 2. Display data according to the elements revealed about that enemy.
// 3. Analyze effects to reveal more weaknesses.

var _0x9115=['_subject','drawWeaknessIcons','setSubject','_weaknessWindow','push','additionForBP','drawSmallIcon','elementId','random','_hpGaugeWidth','YEP_ElementCore','normalColor','length','applyItemUserEffect','startAnimation','setCalculationConstants','___Game_Action_apply___','WeaknessDisplay','enemy','ProtectIcon','YEP_BattleEngineCore','subject','ShowHpGauge','initializeRevealedEnemyWeaknesses','Analyze','constructor','changeTextColor','fittingHeight','HpGaugeMinWidth','WeakIconSize','applyWeaknessAnalyze','call','drawHpGauge','create','refresh','HpColor25','drawBreakShield','revealWeaknessByVariable','drawSubjectName','elementRate','isShowWeaknessHpGauge','drawBreakShieldIcon','contains','revealWeakness','contentsOpacity','contents','resetFontSettings','ShowName','prototype','moveStateSprite','drawIcon','_iconHeight','max','getRevealedEnemyWeaknesses','___Game_Action_applyItemUserEffect___','floor','drawGauge','HideDuration','___Spriteset_Battle_update___','textColor','match','initialize','___Game_Action_executeDamage___','battler','center','update','ShowStates','width','Weakness','WeakRate','initMembers','addEnemyWeaknessElement','AlwaysShow','updateEnemyWeaknessWindows','revealNewWeaknesses','contentsWidth','lineHeight','members','boxWidth','getProtectedWeaknessElements','_added','_sprite','drawText','clear','isSelected','getWeaknessElements','hpGaugeColor1','UnknownIcon','ceil','NameFontSize','standardPadding','___Sprite_Enemy_initMembers___','createWeaknessDisplayWindow','___Game_BattlerBase_refresh___','_iconWidth','showBreakStunDuration','blt','ElementIcons','HpGaugePadding','updatePosition','revealWeaknessDisplay','_factorY','OctoBattle','_enemySprites','Enabled','executeDamage','round','textWidth','allIcons','attackElements','ShownElements','apply','note','setup','_needRefreshAllEnemyWeaknessWindows','opacity','originalElementRate','ShowBreakShield','enemyId','isHidden','_revealedEnemyWeaknesses','_stateIconSprite','name','setBattler','SmallWeakIcons','_enemy','BoostPoint','fontSize','value','Enemies','isEnemy','_showWeaknessDisplay','indexOf','___Game_Battler_startAnimation___','hpRate','item','_factorX','BreakShield','sort','updateOpacity','splice','loadSystem'];(function(_0x17d538,_0x9115f0){var _0x35656e=function(_0x2f9b63){while(--_0x2f9b63){_0x17d538['push'](_0x17d538['shift']());}};_0x35656e(++_0x9115f0);}(_0x9115,0xc8));var _0x3565=function(_0x17d538,_0x9115f0){_0x17d538=_0x17d538-0x0;var _0x35656e=_0x9115[_0x17d538];return _0x35656e;};if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x2e')]){Olivia[_0x3565('0x2c')][_0x3565('0xa')]=Olivia[_0x3565('0x2c')][_0x3565('0xa')]||{};BattleManager[_0x3565('0x79')]=function(_0x3ac8c4){var _0xa23b9=$gameVariables[_0x3565('0x46')](_0x3ac8c4);this['revealWeakness'](_0xa23b9);};BattleManager[_0x3565('0x7f')]=function(_0x400d7e){var _0x9281a4=$gameTroop[_0x3565('0x13')]();var _0xf3783e=[];for(var _0x105d2f=0x0;_0x105d2f<_0x9281a4[_0x3565('0x60')];_0x105d2f++){var _0x30d30e=_0x9281a4[_0x105d2f];if(!!_0x30d30e&&!_0xf3783e[_0x3565('0x7e')](_0x30d30e['enemyId']())){_0x30d30e[_0x3565('0x10')](_0x400d7e);_0xf3783e[_0x3565('0x58')](_0x30d30e[_0x3565('0x3c')]());}}};Olivia[_0x3565('0x2c')][_0x3565('0xa')]['___Game_System_initialize___']=Game_System[_0x3565('0x84')][_0x3565('0x3')];Game_System[_0x3565('0x84')][_0x3565('0x3')]=function(){Olivia[_0x3565('0x2c')][_0x3565('0xa')]['___Game_System_initialize___'][_0x3565('0x73')](this);this[_0x3565('0x6b')]();};Game_System[_0x3565('0x84')][_0x3565('0x6b')]=function(){this[_0x3565('0x3e')]=this[_0x3565('0x3e')]||{};};Game_System[_0x3565('0x84')]['addEnemyWeaknessElement']=function(_0x9f973b,_0x4b21c1){if(this[_0x3565('0x3e')]===undefined){this[_0x3565('0x6b')]();}this[_0x3565('0x3e')][_0x9f973b]=this['_revealedEnemyWeaknesses'][_0x9f973b]||[];if(!this[_0x3565('0x3e')][_0x9f973b][_0x3565('0x7e')](_0x4b21c1)){this[_0x3565('0x3e')][_0x9f973b]['push'](_0x4b21c1);}this[_0x3565('0x3e')][_0x9f973b][_0x3565('0x50')](function(_0x2513bb,_0x325fe6){return _0x2513bb-_0x325fe6;});};Game_System['prototype'][_0x3565('0x89')]=function(_0x236093){if(this[_0x3565('0x3e')]===undefined){this['initializeRevealedEnemyWeaknesses']();}this[_0x3565('0x3e')][_0x236093]=this['_revealedEnemyWeaknesses'][_0x236093]||[];return this[_0x3565('0x3e')][_0x236093];};Olivia[_0x3565('0x2c')][_0x3565('0xa')][_0x3565('0x64')]=Game_Action[_0x3565('0x84')][_0x3565('0x35')];Game_Action['prototype'][_0x3565('0x35')]=function(_0x3856df){Olivia['OctoBattle'][_0x3565('0xa')]['___Game_Action_apply___']['call'](this,_0x3856df);_0x3856df[_0x3565('0x2a')]();};Olivia[_0x3565('0x2c')][_0x3565('0xa')][_0x3565('0x4')]=Game_Action[_0x3565('0x84')]['executeDamage'];Game_Action[_0x3565('0x84')][_0x3565('0x2f')]=function(_0x3e53d0,_0x32d104){Olivia[_0x3565('0x2c')][_0x3565('0xa')]['___Game_Action_executeDamage___'][_0x3565('0x73')](this,_0x3e53d0,_0x32d104);if(!!_0x3e53d0&&_0x3e53d0['isEnemy']()&&_0x32d104!==0x0){this['addEnemyWeaknessElement'](_0x3e53d0);}};Game_Action['prototype'][_0x3565('0xd')]=function(_0x2f5668){if(Imported[_0x3565('0x5e')]){var _0x322b33=this['getItemElements']();}else{var _0x1c8509=this['item']()['damage'][_0x3565('0x5b')];if(_0x1c8509<0x0){var _0x322b33=this[_0x3565('0x69')]()[_0x3565('0x33')]();}else{var _0x322b33=[_0x1c8509];}}for(var _0x217494=0x0;_0x217494<_0x322b33[_0x3565('0x60')];_0x217494++){var _0x1c8509=_0x322b33[_0x217494];if(_0x1c8509>0x0){$gameSystem[_0x3565('0xd')](_0x2f5668[_0x3565('0x3c')](),_0x1c8509);}}};Olivia[_0x3565('0x2c')][_0x3565('0xa')]['___Game_Action_applyItemUserEffect___']=Game_Action[_0x3565('0x84')][_0x3565('0x61')];Game_Action['prototype'][_0x3565('0x61')]=function(_0x1522e8){Olivia[_0x3565('0x2c')][_0x3565('0xa')][_0x3565('0x8a')][_0x3565('0x73')](this,_0x1522e8);if(_0x1522e8[_0x3565('0x48')]()){this[_0x3565('0x72')](_0x1522e8);}};Game_Action[_0x3565('0x84')][_0x3565('0x72')]=function(_0x38a9cc){if(this[_0x3565('0x4d')]()['note'][_0x3565('0x2')](/<Analyze (?:Weakness|Weaknesses): (\d+)>/i)){var _0x34c729=parseInt(RegExp['$1']);if(Olivia[_0x3565('0x2c')][_0x3565('0x44')]&&this[_0x3565('0x4d')]()['note'][_0x3565('0x2')](/<(?:BP|Boost) Analyze>/i)){var _0x4a5165=this['subject']()['multiplierForBP'](_0x3565('0x6c'));_0x34c729=Math[_0x3565('0x30')](_0x4a5165*_0x34c729);_0x34c729+=this[_0x3565('0x69')]()[_0x3565('0x59')]('Analyze');}_0x38a9cc['revealNewWeaknesses'](_0x34c729);}};Olivia[_0x3565('0x2c')][_0x3565('0xa')][_0x3565('0x23')]=Game_BattlerBase[_0x3565('0x84')]['refresh'];Game_BattlerBase[_0x3565('0x84')][_0x3565('0x76')]=function(){Olivia[_0x3565('0x2c')][_0x3565('0xa')][_0x3565('0x23')][_0x3565('0x73')](this);$gameTemp[_0x3565('0x38')]=!![];};Olivia['OctoBattle'][_0x3565('0xa')]['___Game_Battler_startAnimation___']=Game_Battler['prototype'][_0x3565('0x62')];Game_Battler[_0x3565('0x84')][_0x3565('0x62')]=function(_0x3fb4e0,_0x574eef,_0x3bfad4){Olivia['OctoBattle'][_0x3565('0xa')][_0x3565('0x4b')][_0x3565('0x73')](this,_0x3fb4e0,_0x574eef,_0x3bfad4);this[_0x3565('0x2a')]();};Game_Battler[_0x3565('0x84')][_0x3565('0x2a')]=function(){if(this[_0x3565('0x48')]()){this['_showWeaknessDisplay']=Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x8d')];}};Game_Enemy[_0x3565('0x84')][_0x3565('0x1b')]=function(){var _0x4ecf73=[];for(var _0x40e0bc=0x0;_0x40e0bc<Olivia[_0x3565('0x2c')][_0x3565('0x65')]['ShownElements'][_0x3565('0x60')];_0x40e0bc++){var _0x18e0a0=Number(Olivia[_0x3565('0x2c')]['WeaknessDisplay'][_0x3565('0x34')][_0x40e0bc]);if(Olivia['OctoBattle']['BreakShield']&&Olivia['OctoBattle']['BreakShield'][_0x3565('0x2e')]){if(this[_0x3565('0x3a')](_0x18e0a0)>=Olivia[_0x3565('0x2c')]['BreakShield'][_0x3565('0xb')]){_0x4ecf73['push'](_0x18e0a0);}}else{if(this[_0x3565('0x7b')](_0x18e0a0)>=1.1){_0x4ecf73[_0x3565('0x58')](_0x18e0a0);}}}return _0x4ecf73;};Game_Enemy[_0x3565('0x84')][_0x3565('0x7c')]=function(){if(this[_0x3565('0x66')]()[_0x3565('0x36')][_0x3565('0x2')](/<No HP Gauge>/i)){return![];}else if(this[_0x3565('0x66')]()[_0x3565('0x36')][_0x3565('0x2')](/<Show HP Gauge>/i)){return!![];}else if(this['enemy']()[_0x3565('0x36')][_0x3565('0x2')](/<Hide HP Gauge>/i)){return![];}return Olivia['OctoBattle'][_0x3565('0x65')][_0x3565('0x6a')];};Game_Enemy[_0x3565('0x84')][_0x3565('0x10')]=function(_0x421107){var _0x2805fb=this[_0x3565('0x1b')]();var _0x42e998=$gameSystem['getRevealedEnemyWeaknesses'](this[_0x3565('0x3c')]());var _0x35daf0=[];for(var _0x55c955=0x0;_0x55c955<_0x2805fb[_0x3565('0x60')];_0x55c955++){var _0x5ecee6=_0x2805fb[_0x55c955];if(!_0x42e998[_0x3565('0x7e')](_0x5ecee6)){_0x35daf0[_0x3565('0x58')](_0x5ecee6);}}while(_0x421107>0x0){if(_0x35daf0[_0x3565('0x60')]<=0x0){break;}_0x421107-=0x1;var _0x2830d0=Math[_0x3565('0x8b')](Math[_0x3565('0x5c')]()*_0x35daf0[_0x3565('0x60')]);var _0x182a46=_0x35daf0[_0x2830d0];$gameSystem['addEnemyWeaknessElement'](this[_0x3565('0x3c')](),_0x182a46);_0x35daf0[_0x3565('0x52')](_0x2830d0,0x1);this[_0x3565('0x2a')]();}$gameTemp[_0x3565('0x38')]=!![];};Olivia[_0x3565('0x2c')][_0x3565('0xa')][_0x3565('0x0')]=Spriteset_Battle[_0x3565('0x84')][_0x3565('0x7')];Spriteset_Battle['prototype'][_0x3565('0x7')]=function(){Olivia[_0x3565('0x2c')][_0x3565('0xa')][_0x3565('0x0')][_0x3565('0x73')](this);this[_0x3565('0xf')]();};Spriteset_Battle[_0x3565('0x84')][_0x3565('0xf')]=function(){if($gameTemp['_needRefreshAllEnemyWeaknessWindows']===!![]){for(var _0x89cfbb=0x0;_0x89cfbb<this[_0x3565('0x2d')]['length'];_0x89cfbb++){var _0x1ca57d=this[_0x3565('0x2d')][_0x89cfbb];if(!!_0x1ca57d&&!!_0x1ca57d[_0x3565('0x57')]){_0x1ca57d[_0x3565('0x57')][_0x3565('0x76')]();if(_0x1ca57d[_0x3565('0x57')]['_added']===![]){this['_baseSprite']['addChild'](_0x1ca57d[_0x3565('0x57')]);}}}$gameTemp['_needRefreshAllEnemyWeaknessWindows']=![];}};Olivia[_0x3565('0x2c')][_0x3565('0xa')][_0x3565('0x21')]=Sprite_Enemy[_0x3565('0x84')][_0x3565('0xc')];Sprite_Enemy[_0x3565('0x84')]['initMembers']=function(){Olivia[_0x3565('0x2c')][_0x3565('0xa')]['___Sprite_Enemy_initMembers___'][_0x3565('0x73')](this);this[_0x3565('0x22')]();};Sprite_Enemy[_0x3565('0x84')][_0x3565('0x22')]=function(){this[_0x3565('0x57')]=new Window_WeaknessDisplay(this[_0x3565('0x43')],this);this['_weaknessWindow'][_0x3565('0x76')]();this[_0x3565('0x57')][_0x3565('0x16')]=![];if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x8')]){this['_stateIconSprite'][_0x3565('0x39')]=0x0;}};Olivia[_0x3565('0x2c')]['Weakness']['___Sprite_Enemy_setBattler___']=Sprite_Enemy['prototype'][_0x3565('0x41')];Sprite_Enemy[_0x3565('0x84')][_0x3565('0x41')]=function(_0x36ba2b){Olivia[_0x3565('0x2c')][_0x3565('0xa')]['___Sprite_Enemy_setBattler___']['call'](this,_0x36ba2b);if(!!this[_0x3565('0x57')]){this[_0x3565('0x57')][_0x3565('0x56')](_0x36ba2b);}};function Window_WeaknessDisplay(){this[_0x3565('0x3')][_0x3565('0x35')](this,arguments);}Window_WeaknessDisplay[_0x3565('0x84')]=Object[_0x3565('0x75')](Window_Base['prototype']);Window_WeaknessDisplay[_0x3565('0x84')][_0x3565('0x6d')]=Window_WeaknessDisplay;Window_WeaknessDisplay[_0x3565('0x84')]['initialize']=function(_0x4d84dc,_0x2ad5b0){this['_subject']=_0x4d84dc;this[_0x3565('0x17')]=_0x2ad5b0;var _0x2ea141=Math[_0x3565('0x1e')](Graphics['boxWidth']/0x2);var _0x10442c=this[_0x3565('0x6f')](0x2);this[_0x3565('0x63')]();Window_Base[_0x3565('0x84')][_0x3565('0x3')][_0x3565('0x73')](this,0x0,0x0,_0x2ea141,_0x10442c);this['createStateIconSprite']();this[_0x3565('0x39')]=0x0;this[_0x3565('0x76')]();};Window_WeaknessDisplay[_0x3565('0x84')][_0x3565('0x20')]=function(){return 0x0;};Window_WeaknessDisplay[_0x3565('0x84')][_0x3565('0x63')]=function(){this[_0x3565('0x4e')]=-0x1*Math[_0x3565('0x1e')](Graphics[_0x3565('0x14')]*0.25);this[_0x3565('0x2b')]=-0x1*Math[_0x3565('0x30')](this[_0x3565('0x12')]()*0.75);};Window_WeaknessDisplay[_0x3565('0x84')]['createStateIconSprite']=function(){if(Olivia[_0x3565('0x2c')][_0x3565('0x65')]){this[_0x3565('0x3f')]=new Sprite_StateIcon();this['addChild'](this[_0x3565('0x3f')]);this[_0x3565('0x3f')]['x']=this[_0x3565('0x9')]/0x2;this[_0x3565('0x3f')]['y']=0x0;}};Window_WeaknessDisplay['prototype'][_0x3565('0x7')]=function(){Window_Base[_0x3565('0x84')][_0x3565('0x7')]['call'](this);if(!!this[_0x3565('0x54')]){this[_0x3565('0x29')]();this['updateOpacity']();}};Window_WeaknessDisplay[_0x3565('0x84')][_0x3565('0x29')]=function(){this['x']=this[_0x3565('0x17')]['x']+this[_0x3565('0x4e')];this['y']=this[_0x3565('0x17')]['y']+this['_factorY'];};Window_WeaknessDisplay[_0x3565('0x84')][_0x3565('0x51')]=function(){if(this[_0x3565('0x54')][_0x3565('0x3d')]()||this[_0x3565('0x54')]['isDead']()){this[_0x3565('0x80')]-=0x10;}else if(this[_0x3565('0x54')][_0x3565('0x5')]()&&this[_0x3565('0x54')][_0x3565('0x5')]()[_0x3565('0x39')]<=0x0){this[_0x3565('0x80')]-=0xa;}else if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0xe')]){this[_0x3565('0x80')]=0xff;}else if(this[_0x3565('0x54')][_0x3565('0x1a')]()){this[_0x3565('0x80')]=0xff;}else if(this['_subject'][_0x3565('0x49')]>0x0){this[_0x3565('0x80')]=0xff;this[_0x3565('0x54')][_0x3565('0x49')]-=0x1;}else{this[_0x3565('0x80')]-=0x10;}if(!!this[_0x3565('0x3f')]){this[_0x3565('0x3f')][_0x3565('0x39')]=this['contentsOpacity'];}};Window_WeaknessDisplay['prototype'][_0x3565('0x56')]=function(_0x561b76){this['_subject']=_0x561b76;this[_0x3565('0x54')][_0x3565('0x49')]=this[_0x3565('0x54')][_0x3565('0x49')]||Olivia['OctoBattle']['WeaknessDisplay'][_0x3565('0x8d')];if(!!this[_0x3565('0x3f')]){this[_0x3565('0x3f')][_0x3565('0x37')](this['_subject']);}if(this[_0x3565('0x54')][_0x3565('0x3d')]()){this['contentsOpacity']=0x0;}this[_0x3565('0x76')]();};Window_WeaknessDisplay['prototype'][_0x3565('0x76')]=function(){this[_0x3565('0x81')][_0x3565('0x19')]();if(!!this[_0x3565('0x54')]){this[_0x3565('0x74')]();this[_0x3565('0x7a')]();this[_0x3565('0x78')]();this[_0x3565('0x55')]();if(!!this[_0x3565('0x3f')]){this[_0x3565('0x85')]();}}};Window_WeaknessDisplay[_0x3565('0x84')][_0x3565('0x74')]=function(){if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x6a')]){if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x83')]){this[_0x3565('0x82')]();this[_0x3565('0x81')][_0x3565('0x45')]=Olivia['OctoBattle'][_0x3565('0x65')][_0x3565('0x1f')];var _0x1f4000=this['textWidth'](this[_0x3565('0x54')][_0x3565('0x40')]());this[_0x3565('0x82')]();_0x1f4000=Math['max'](Olivia['OctoBattle'][_0x3565('0x65')][_0x3565('0x70')],_0x1f4000);}else{var _0x1f4000=Olivia[_0x3565('0x2c')][_0x3565('0x65')]['HpGaugeMinWidth'];}_0x1f4000+=0x2*Olivia[_0x3565('0x2c')]['WeaknessDisplay'][_0x3565('0x28')];this[_0x3565('0x5d')]=_0x1f4000;var _0x4ff8c2=Math[_0x3565('0x30')]((this[_0x3565('0x11')]()-_0x1f4000)/0x2);var _0x3f533a=this[_0x3565('0x54')][_0x3565('0x4c')]();var _0x20d2d6=this[_0x3565('0x1c')]();var _0x30c21b=this['hpGaugeColor2']();this[_0x3565('0x8c')](_0x4ff8c2,0x0,_0x1f4000,_0x3f533a,_0x20d2d6,_0x30c21b);}else{this[_0x3565('0x5d')]=0x0;}};Window_WeaknessDisplay[_0x3565('0x84')]['drawSubjectName']=function(){if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x83')]){this[_0x3565('0x82')]();this[_0x3565('0x81')][_0x3565('0x45')]=Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x1f')];if(this['_subject'][_0x3565('0x4c')]()>0.5){this[_0x3565('0x6e')](this[_0x3565('0x5f')]());}else if(this[_0x3565('0x54')][_0x3565('0x4c')]()>0.25){this[_0x3565('0x6e')](this[_0x3565('0x1')](Olivia[_0x3565('0x2c')][_0x3565('0x65')]['HpColor50']));}else{this[_0x3565('0x6e')](this['textColor'](Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x77')]));}this[_0x3565('0x18')](this[_0x3565('0x54')]['name'](),0x0,0x0,this[_0x3565('0x11')](),_0x3565('0x6'));this['resetFontSettings']();}};Window_WeaknessDisplay[_0x3565('0x84')][_0x3565('0x78')]=function(){if(Olivia[_0x3565('0x2c')]['WeaknessDisplay'][_0x3565('0x3b')]&&Olivia[_0x3565('0x2c')][_0x3565('0x4f')]&&Olivia[_0x3565('0x2c')][_0x3565('0x4f')]['Enabled']&&Olivia[_0x3565('0x2c')][_0x3565('0x4f')][_0x3565('0x47')]){if(Olivia['OctoBattle'][_0x3565('0x65')][_0x3565('0x83')]){this[_0x3565('0x82')]();this['contents'][_0x3565('0x45')]=Olivia[_0x3565('0x2c')]['WeaknessDisplay'][_0x3565('0x1f')];var _0x257f89=this[_0x3565('0x31')](this[_0x3565('0x54')][_0x3565('0x40')]());this[_0x3565('0x82')]();_0x257f89=Math[_0x3565('0x88')](this[_0x3565('0x5d')],_0x257f89);var _0x58c8cb=Math[_0x3565('0x30')]((this[_0x3565('0x11')]()-_0x257f89)/0x2)-Window_Base[_0x3565('0x24')]-0x2;}else if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x8')]&&this[_0x3565('0x54')][_0x3565('0x32')]()[_0x3565('0x60')]>0x0){var _0x58c8cb=Math[_0x3565('0x30')](this[_0x3565('0x11')]()/0x2)-Window_Base[_0x3565('0x24')];}else{var _0x58c8cb=Math[_0x3565('0x30')]((this[_0x3565('0x11')]()-Window_Base[_0x3565('0x24')])/0x2);}this[_0x3565('0x7d')](this[_0x3565('0x54')],_0x58c8cb,0x0);}};Window_WeaknessDisplay[_0x3565('0x84')][_0x3565('0x85')]=function(){var _0x22e264=Math[_0x3565('0x30')](this['contentsWidth']()/0x2);var _0x2d1dc5=Math[_0x3565('0x30')](this[_0x3565('0x12')]()/0x2)-0x2;if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x6a')]){if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x83')]){this[_0x3565('0x82')]();this[_0x3565('0x81')][_0x3565('0x45')]=Olivia[_0x3565('0x2c')]['WeaknessDisplay'][_0x3565('0x1f')];var _0x122a9d=this[_0x3565('0x31')](this['_subject'][_0x3565('0x40')]());this[_0x3565('0x82')]();_0x122a9d=Math[_0x3565('0x88')](Olivia[_0x3565('0x2c')]['WeaknessDisplay'][_0x3565('0x70')],_0x122a9d);}else{var _0x122a9d=Olivia[_0x3565('0x2c')]['WeaknessDisplay'][_0x3565('0x70')];}_0x122a9d+=0x2*Olivia[_0x3565('0x2c')][_0x3565('0x65')]['HpGaugePadding']+0x2;_0x22e264+=Math[_0x3565('0x30')](_0x122a9d/0x2)+Math['round'](Window_Base[_0x3565('0x24')]/0x2);}else if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x83')]){this[_0x3565('0x82')]();this[_0x3565('0x81')]['fontSize']=Olivia['OctoBattle'][_0x3565('0x65')][_0x3565('0x1f')];var _0x122a9d=this[_0x3565('0x31')](this[_0x3565('0x54')]['name']())+Window_Base[_0x3565('0x24')]+0x4;this[_0x3565('0x82')]();_0x22e264+=Math[_0x3565('0x30')](_0x122a9d/0x2);}else if(Olivia['OctoBattle']['WeaknessDisplay'][_0x3565('0x3b')]){_0x22e264+=Math[_0x3565('0x30')](Window_Base[_0x3565('0x24')]/0x2);}else{_0x2d1dc5-=this['lineHeight']();}this[_0x3565('0x3f')]['x']=_0x22e264;this[_0x3565('0x3f')]['y']=_0x2d1dc5;};Window_WeaknessDisplay[_0x3565('0x84')][_0x3565('0x25')]=function(){return Olivia['OctoBattle'][_0x3565('0x65')]['ShowStunTurns'];};Window_WeaknessDisplay[_0x3565('0x84')][_0x3565('0x55')]=function(){var _0x121e14=this[_0x3565('0x54')][_0x3565('0x1b')]();var _0x1e60ba=Window_Base[_0x3565('0x24')];if(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x42')]){_0x1e60ba=Math[_0x3565('0x30')](_0x1e60ba*Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x71')]);}var _0x1f15eb=_0x121e14[_0x3565('0x60')]*_0x1e60ba;var _0x164445=Math[_0x3565('0x30')]((this[_0x3565('0x11')]()-_0x1f15eb)/0x2);if(!Olivia[_0x3565('0x2c')]['WeaknessDisplay'][_0x3565('0x83')]&&!Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x3b')]&&!Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x6a')]){var _0x1b9ec6=0x0;}else{var _0x1b9ec6=this['lineHeight']();}var _0x597b19=$gameSystem[_0x3565('0x89')](this[_0x3565('0x54')][_0x3565('0x3c')]());if(Olivia[_0x3565('0x2c')][_0x3565('0x4f')]&&Olivia['OctoBattle']['BreakShield']['Enabled']){var _0x34c958=this[_0x3565('0x54')][_0x3565('0x15')]();}for(var _0x3e6646=0x0;_0x3e6646<_0x121e14[_0x3565('0x60')];_0x3e6646++){var _0x29e9e5=_0x121e14[_0x3e6646];if(_0x597b19[_0x3565('0x7e')](_0x29e9e5)){var _0xcd6c72=Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x34')][_0x3565('0x4a')](String(_0x29e9e5));var _0x28278f=Number(Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x27')][_0xcd6c72]);}else{var _0x28278f=Olivia['OctoBattle'][_0x3565('0x65')][_0x3565('0x1d')];}if(Olivia[_0x3565('0x2c')][_0x3565('0x65')]['SmallWeakIcons']){this[_0x3565('0x5a')](_0x28278f,_0x164445,_0x1b9ec6);}else{this[_0x3565('0x86')](_0x28278f,_0x164445,_0x1b9ec6);}if(Olivia[_0x3565('0x2c')][_0x3565('0x4f')]&&Olivia[_0x3565('0x2c')][_0x3565('0x4f')][_0x3565('0x2e')]&&_0x34c958[_0x3565('0x7e')](_0x29e9e5)){var _0x28278f=Olivia[_0x3565('0x2c')][_0x3565('0x4f')][_0x3565('0x67')];if(Olivia[_0x3565('0x2c')]['WeaknessDisplay'][_0x3565('0x42')]){this[_0x3565('0x5a')](_0x28278f,_0x164445,_0x1b9ec6);}else{this[_0x3565('0x86')](_0x28278f,_0x164445,_0x1b9ec6);}}_0x164445+=_0x1e60ba;}};Window_WeaknessDisplay['prototype'][_0x3565('0x5a')]=function(_0x40d2ef,_0x18b5da,_0x5cec44){var _0x3c02a3=ImageManager[_0x3565('0x53')]('IconSet');var _0xd0e5f8=Window_Base[_0x3565('0x24')];var _0x3b767b=Window_Base[_0x3565('0x87')];var _0x3eaffd=_0x40d2ef%0x10*_0xd0e5f8;var _0x1cc468=Math[_0x3565('0x8b')](_0x40d2ef/0x10)*_0x3b767b;var _0x37def1=Olivia[_0x3565('0x2c')][_0x3565('0x65')][_0x3565('0x71')];this[_0x3565('0x81')][_0x3565('0x26')](_0x3c02a3,_0x3eaffd,_0x1cc468,_0xd0e5f8,_0x3b767b,_0x18b5da,_0x5cec44,Math['round'](_0xd0e5f8*_0x37def1),Math[_0x3565('0x30')](_0x3b767b*_0x37def1));};if(Imported[_0x3565('0x68')]){Window_EnemyVisualSelect[_0x3565('0x84')][_0x3565('0x76')]=function(){};}}

//=============================================================================
// Break Shield System
//
// 1. Each target has a shield value
// 2. Shield value goes down whenever a weakness is struck
// 3. When shield value reaches 0, the target becomes stunned

var _0x596f=['itemBreakShieldReduction','elementRate','applyBreakStun','ShowActorShield','call','enemy','states','addedBreakShields','topBreakShield','___Game_Action_applyItemUserEffect___','max','startBreakShieldBrokenAnimation','_stateTurns','resetFontSettings','contains','BreakShield','StunIcon','_iconBreakShield','isStateAffected','_needRefreshAllEnemyWeaknessWindows','_inBattle','___BattleManager_setup___','drawActorIcons','Actors','_enemies','_iconBreakStun','alterBreakShield','iconIndex','currentClass','_scene','item','___Game_Battler_removeBattleStates___','width','startAnimation','executeBreakShieldReduction','contents','getProtectedWeaknessElements','actor','Window_BattleStatus_drawBasicArea','fontSize','deathStateId','drawBreakShieldIcon','MaxShields','note','min','sort','drawItem','drawIcon','___Game_Action_executeDamage___','executeDamage','showBreakStunDuration','currentBreakShield','length','bareHandsElementId','resetBreakShield','___Game_BattlerBase_elementRate___','members','isBreakStunned','applyItemUserEffect','isDead','equips','drawBasicArea','OctoBattle','removeBattleStates','ceil','baseBreakShield','setBreakShield','center','prototype','BaseShields','Shields','outlineColor','BreakAnimation','ReduceAnimation','_iconWidth','addState','setup','ShieldIcon','Enemies','name','isAffectedByBreakShield','WeakRate','refresh','concat','inBattle','_currentBreakShield','resetBreakShields','IconFontSize','drawText','StunState','___Window_Base_drawActorIcons___','parse','match','isHpEffect'];(function(_0x7ece7f,_0x596f3d){var _0x234aac=function(_0x5990dc){while(--_0x5990dc){_0x7ece7f['push'](_0x7ece7f['shift']());}};_0x234aac(++_0x596f3d);}(_0x596f,0x85));var _0x234a=function(_0x7ece7f,_0x596f3d){_0x7ece7f=_0x7ece7f-0x0;var _0x234aac=_0x596f[_0x7ece7f];return _0x234aac;};if(Olivia['OctoBattle'][_0x234a('0x46')]['Enabled']){Olivia[_0x234a('0x17')][_0x234a('0x1f')]=Olivia[_0x234a('0x17')][_0x234a('0x1f')]||{};Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x4c')]=BattleManager[_0x234a('0x25')];BattleManager['setup']=function(_0x4d2162,_0x584d07,_0x84734){Olivia['OctoBattle'][_0x234a('0x1f')][_0x234a('0x4c')][_0x234a('0x3b')](this,_0x4d2162,_0x584d07,_0x84734);$gameParty[_0x234a('0x2f')]();$gameTroop[_0x234a('0x2f')]();};Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x9')]=Game_Action[_0x234a('0x1d')][_0x234a('0xa')];Game_Action[_0x234a('0x1d')][_0x234a('0xa')]=function(_0x7aaa45,_0x54002a){Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x9')]['call'](this,_0x7aaa45,_0x54002a);if(!!_0x7aaa45&&_0x54002a>0x0&&_0x7aaa45[_0x234a('0x29')]()&&this[_0x234a('0x36')]()){this[_0x234a('0x59')](_0x7aaa45,_0x54002a);}};Game_Action[_0x234a('0x1d')][_0x234a('0x59')]=function(_0x2c82f8,_0x1ae242){if(!_0x2c82f8[_0x234a('0x12')]()){var _0x26790c=this['calcElementRate'](_0x2c82f8);if(_0x26790c>=Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x2a')]){var _0x1ae242=-0x1*this[_0x234a('0x37')]();_0x2c82f8['startBreakShieldReduceAnimation']();_0x2c82f8['alterBreakShield'](_0x1ae242);}}};Game_Action[_0x234a('0x1d')][_0x234a('0x37')]=function(){if(this['item']()[_0x234a('0x4')][_0x234a('0x35')](/<Break (?:Reduce|Reduction): (\d+)>/i)){return parseInt(RegExp['$1']);}else{return Olivia[_0x234a('0x17')][_0x234a('0x46')]['BreakReduce'];}};Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x40')]=Game_Action[_0x234a('0x1d')][_0x234a('0x13')];Game_Action[_0x234a('0x1d')][_0x234a('0x13')]=function(_0x4ce7b8){Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x40')][_0x234a('0x3b')](this,_0x4ce7b8);if(!!_0x4ce7b8&&_0x4ce7b8[_0x234a('0x29')]()){this['applyChangeBreakShield'](_0x4ce7b8);}};Game_Action['prototype']['applyChangeBreakShield']=function(_0x525601){if(!_0x525601['isBreakStunned']()){if(this[_0x234a('0x55')]()[_0x234a('0x4')][_0x234a('0x35')](/<(?:Set|Change) Break (?:Shield|Shields): (\d+)>/i)){_0x525601[_0x234a('0x1b')](parseInt(RegExp['$1']));$gameTemp[_0x234a('0x4a')]=!![];}if(this[_0x234a('0x55')]()['note'][_0x234a('0x35')](/<(?:Increase|Decrease|Change) Break (?:Shield|Shields): ([\+\-]\d+)>/i)){_0x525601[_0x234a('0x51')](parseInt(RegExp['$1']));$gameTemp[_0x234a('0x4a')]=!![];}}};Olivia[_0x234a('0x17')]['Shields']['___Game_BattlerBase_elementRate___']=Game_BattlerBase['prototype'][_0x234a('0x38')];Game_BattlerBase[_0x234a('0x1d')][_0x234a('0x38')]=function(_0x201ae8){var _0x341226=Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x10')][_0x234a('0x3b')](this,_0x201ae8);if(this[_0x234a('0x5b')]()[_0x234a('0x45')](_0x201ae8)){return Math[_0x234a('0x5')](0x1,_0x341226);}else{return _0x341226;}};Game_BattlerBase[_0x234a('0x1d')]['originalElementRate']=function(_0x10af41){return Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x10')][_0x234a('0x3b')](this,_0x10af41);};Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x56')]=Game_Battler[_0x234a('0x1d')][_0x234a('0x18')];Game_Battler[_0x234a('0x1d')]['removeBattleStates']=function(){Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x56')][_0x234a('0x3b')](this);this[_0x234a('0xf')]();};Game_Battler[_0x234a('0x1d')][_0x234a('0xf')]=function(){if(this[_0x234a('0x29')]()){this['setBreakShield'](this[_0x234a('0x3f')]());this[_0x234a('0x2b')]();}};Game_Battler[_0x234a('0x1d')][_0x234a('0x1a')]=function(){return Olivia['OctoBattle'][_0x234a('0x46')][_0x234a('0x1e')];};Game_Battler[_0x234a('0x1d')][_0x234a('0x3f')]=function(){var _0x27eccf=this[_0x234a('0x1a')]();_0x27eccf=this[_0x234a('0x3e')](_0x27eccf);return Math[_0x234a('0x41')](0x1,_0x27eccf);};Game_Battler[_0x234a('0x1d')][_0x234a('0x3e')]=function(_0x518938){var _0xf1bc2b=this['states']();for(var _0x27f8dc=0x0;_0x27f8dc<_0xf1bc2b['length'];_0x27f8dc++){var _0x2e9613=_0xf1bc2b[_0x27f8dc];if(!!_0x2e9613&&_0x2e9613[_0x234a('0x4')][_0x234a('0x35')](/<Break (?:Shield|Shields): ([\+\-]\d+)>/i)){_0x518938+=parseInt(RegExp['$1']);}}return _0x518938;};Game_Battler[_0x234a('0x1d')][_0x234a('0xc')]=function(){if(this[_0x234a('0x2e')]===undefined){this[_0x234a('0x1b')](this[_0x234a('0x3f')]());}return this['_currentBreakShield'];};Game_Battler[_0x234a('0x1d')][_0x234a('0x1b')]=function(_0x131d29){if(this['isAffectedByBreakShield']()){this['_currentBreakShield']=Math[_0x234a('0x19')](_0x131d29);this[_0x234a('0x2e')]=this[_0x234a('0x2e')]['clamp'](0x0,Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x3')]);if(this['_currentBreakShield']<=0x0){this[_0x234a('0x39')]();}this[_0x234a('0x2b')]();}};Game_Battler[_0x234a('0x1d')][_0x234a('0x51')]=function(_0x3d307c){this[_0x234a('0x1b')](this[_0x234a('0xc')]()+_0x3d307c);};Game_Battler[_0x234a('0x1d')][_0x234a('0x39')]=function(){this[_0x234a('0x1b')](this[_0x234a('0x3f')]());var _0x1d8f1c=Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x32')];this[_0x234a('0x24')](_0x1d8f1c);this[_0x234a('0x42')]();};Game_Battler[_0x234a('0x1d')][_0x234a('0x12')]=function(){return this[_0x234a('0x49')](Olivia[_0x234a('0x17')][_0x234a('0x46')]['StunState']);};Game_Battler[_0x234a('0x1d')]['startBreakShieldReduceAnimation']=function(){if(Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x22')]){var _0x3f1c97=Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x22')];this[_0x234a('0x58')](_0x3f1c97);}};Game_Battler[_0x234a('0x1d')][_0x234a('0x42')]=function(){if(Olivia[_0x234a('0x17')][_0x234a('0x46')]['BreakAnimation']){var _0x31f38f=Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x21')];this[_0x234a('0x58')](_0x31f38f);}};Game_Battler[_0x234a('0x1d')]['getProtectedWeaknessElements']=function(){var _0x554ef4=[];var _0x554b34=this[_0x234a('0x3d')]();for(var _0x3eea09=0x0;_0x3eea09<_0x554b34[_0x234a('0xd')];_0x3eea09++){var _0x49d303=_0x554b34[_0x3eea09];if(!!_0x49d303&&_0x49d303[_0x234a('0x4')]['match'](/<Protect (?:Element|Elements):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x329d1d=JSON[_0x234a('0x34')]('['+RegExp['$1'][_0x234a('0x35')](/\d+/g)+']');_0x554ef4=_0x554ef4[_0x234a('0x2c')](_0x329d1d);}}_0x554ef4[_0x234a('0x6')](function(_0x1ab5ea,_0x45ee24){return _0x1ab5ea-_0x45ee24;});return _0x554ef4;};Game_Actor[_0x234a('0x1d')][_0x234a('0x29')]=function(){return Olivia['OctoBattle'][_0x234a('0x46')][_0x234a('0x4e')];};Game_Actor[_0x234a('0x1d')][_0x234a('0xe')]=function(){return 0x0;};Game_Actor[_0x234a('0x1d')]['baseBreakShield']=function(){var _0xf51e1a=Olivia[_0x234a('0x17')]['BreakShield'][_0x234a('0x1e')];if(!!this[_0x234a('0x53')]()&&this[_0x234a('0x53')]()[_0x234a('0x4')]['match'](/<Break (?:Shield|Shields): (\d+)>/i)){_0xf51e1a=parseInt(RegExp['$1']);}else if(this[_0x234a('0x5c')]()&&this[_0x234a('0x5c')]()[_0x234a('0x4')]['match'](/<Break (?:Shield|Shields): (\d+)>/i)){_0xf51e1a=parseInt(RegExp['$1']);}return _0xf51e1a;};Game_Actor[_0x234a('0x1d')][_0x234a('0x3e')]=function(_0x106600){_0x106600=Game_Battler[_0x234a('0x1d')][_0x234a('0x3e')][_0x234a('0x3b')](this,_0x106600);var _0x31172e=this[_0x234a('0x15')]();for(var _0x15721f=0x0;_0x15721f<_0x31172e[_0x234a('0xd')];_0x15721f++){var _0x4645a1=_0x31172e[_0x15721f];if(!!_0x4645a1&&_0x4645a1[_0x234a('0x4')]['match'](/<Break (?:Shield|Shields): ([\+\-]\d+)>/i)){_0x106600+=parseInt(RegExp['$1']);}}if(!!this[_0x234a('0x53')]()&&this[_0x234a('0x53')]()['note'][_0x234a('0x35')](/<Break (?:Shield|Shields): ([\+\-]\d+)>/i)){_0x106600+=parseInt(RegExp['$1']);}return _0x106600;};Game_Actor['prototype']['getProtectedWeaknessElements']=function(){var _0x13ad2c=Game_Battler[_0x234a('0x1d')][_0x234a('0x5b')][_0x234a('0x3b')](this);var _0x330506=this[_0x234a('0x15')]();for(var _0x2e6864=0x0;_0x2e6864<_0x330506[_0x234a('0xd')];_0x2e6864++){var _0x5123f6=_0x330506[_0x2e6864];if(!!_0x5123f6&&_0x5123f6[_0x234a('0x4')][_0x234a('0x35')](/<Protect (?:Element|Elements):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x4a14dd=JSON[_0x234a('0x34')]('['+RegExp['$1'][_0x234a('0x35')](/\d+/g)+']');_0x13ad2c=_0x13ad2c[_0x234a('0x2c')](_0x4a14dd);}}if(!!this[_0x234a('0x53')]()&&this['currentClass']()['note'][_0x234a('0x35')](/<Protect (?:Element|Elements):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x4a14dd=JSON[_0x234a('0x34')]('['+RegExp['$1'][_0x234a('0x35')](/\d+/g)+']');_0x13ad2c=_0x13ad2c[_0x234a('0x2c')](_0x4a14dd);}_0x13ad2c[_0x234a('0x6')](function(_0x30e477,_0x1ce045){return _0x30e477-_0x1ce045;});return _0x13ad2c;};Game_Enemy[_0x234a('0x1d')][_0x234a('0x29')]=function(){return Olivia['OctoBattle'][_0x234a('0x46')][_0x234a('0x27')];};Game_Enemy[_0x234a('0x1d')][_0x234a('0x1a')]=function(){var _0x4b62c6=Olivia['OctoBattle'][_0x234a('0x46')]['BaseShields'];if(this[_0x234a('0x3c')]()&&this[_0x234a('0x3c')]()[_0x234a('0x4')][_0x234a('0x35')](/<Break (?:Shield|Shields): (\d+)>/i)){_0x4b62c6=parseInt(RegExp['$1']);}return _0x4b62c6;};Game_Unit[_0x234a('0x1d')][_0x234a('0x2f')]=function(){var _0x318e46=this[_0x234a('0x4b')];this[_0x234a('0x4b')]=![];var _0x589f6c=this[_0x234a('0x11')]();for(var _0x507c8c=0x0;_0x507c8c<_0x589f6c[_0x234a('0xd')];_0x507c8c++){var _0x567619=_0x589f6c[_0x507c8c];if(_0x567619){_0x567619[_0x234a('0xf')]();}}this[_0x234a('0x4b')]=_0x318e46;};Window_Base['_iconBreakShield']=Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x26')];Window_Base['_iconBreakStun']=Olivia[_0x234a('0x17')]['BreakShield'][_0x234a('0x47')];Window_Base[_0x234a('0x1d')][_0x234a('0x2')]=function(_0x133e35,_0x498d66,_0x159ae4){if(_0x133e35[_0x234a('0x29')]()){if(_0x133e35[_0x234a('0x14')]()&&$dataStates[_0x133e35[_0x234a('0x1')]()][_0x234a('0x52')]>0x0){var _0x224919=$dataStates[_0x133e35['deathStateId']()]['iconIndex'];var _0x3bcab8='';}else if(_0x133e35[_0x234a('0x14')]()){var _0x224919=0x0;var _0x3bcab8='';}else if(_0x133e35[_0x234a('0x12')]()){var _0x224919=Window_Base[_0x234a('0x50')];if(this[_0x234a('0xb')]()){var _0x3bcab8=_0x133e35[_0x234a('0x43')][Olivia[_0x234a('0x17')]['BreakShield'][_0x234a('0x32')]]||0x0;if(_0x3bcab8===0x0){_0x3bcab8='';}}else{var _0x3bcab8='';}}else{var _0x224919=Window_Base[_0x234a('0x48')];var _0x3bcab8=_0x133e35[_0x234a('0xc')]();}this[_0x234a('0x8')](_0x224919,_0x498d66,_0x159ae4);this[_0x234a('0x5a')][_0x234a('0x0')]=Olivia[_0x234a('0x17')]['BreakShield'][_0x234a('0x30')];var _0x56dd9d=this[_0x234a('0x5a')][_0x234a('0x20')];this[_0x234a('0x5a')]['outlineColor']='rgba(0,\x200,\x200,\x201.0)';this['drawText'](_0x3bcab8,_0x498d66,_0x159ae4,Window_Base[_0x234a('0x23')],_0x234a('0x1c'));this[_0x234a('0x44')]();this[_0x234a('0x5a')][_0x234a('0x20')]=_0x56dd9d;}};Window_Base[_0x234a('0x1d')]['showBreakStunDuration']=function(){return!![];};if(Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x4e')]&&Olivia[_0x234a('0x17')][_0x234a('0x46')]['DrawMenu']){Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x33')]=Window_Base[_0x234a('0x1d')][_0x234a('0x4d')];Window_Base[_0x234a('0x1d')]['drawActorIcons']=function(_0x552998,_0x1f187f,_0x6acfbb,_0x13f953){if(!$gameParty[_0x234a('0x2d')]()&&!(SceneManager[_0x234a('0x54')]instanceof Scene_Battle)){_0x552998[_0x234a('0xf')]();this[_0x234a('0x2')](_0x552998,_0x1f187f,_0x6acfbb+0x2);_0x1f187f+=Window_Base[_0x234a('0x23')];_0x13f953-=Window_Base[_0x234a('0x23')];}Olivia[_0x234a('0x17')][_0x234a('0x1f')][_0x234a('0x33')][_0x234a('0x3b')](this,_0x552998,_0x1f187f,_0x6acfbb,_0x13f953);};}if(Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x4e')]&&Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x3a')]){Olivia[_0x234a('0x17')][_0x234a('0x46')][_0x234a('0x5d')]=Window_BattleStatus['prototype']['drawBasicArea'];Window_BattleStatus[_0x234a('0x1d')][_0x234a('0x16')]=function(_0x2a2331,_0x1ec8d6){if(_0x1ec8d6[_0x234a('0x29')]()){this['drawBreakShieldBasic'](_0x2a2331,_0x1ec8d6);_0x2a2331['x']+=Window_Base[_0x234a('0x23')]+0x2;_0x2a2331[_0x234a('0x57')]-=Window_Base[_0x234a('0x23')]+0x2;}Olivia[_0x234a('0x17')][_0x234a('0x46')]['Window_BattleStatus_drawBasicArea']['call'](this,_0x2a2331,_0x1ec8d6);};Window_BattleStatus[_0x234a('0x1d')]['drawBreakShieldBasic']=function(_0x1af4d9,_0x36394b){this[_0x234a('0x2')](_0x36394b,_0x1af4d9['x'],_0x1af4d9['y']+0x2);};}if(Olivia['OctoBattle'][_0x234a('0x46')][_0x234a('0x27')]&&Olivia[_0x234a('0x17')][_0x234a('0x46')]['ShowEnemyShield']){Window_BattleEnemy[_0x234a('0x1d')][_0x234a('0x7')]=function(_0x3f0b56){this['resetTextColor']();var _0x2347d4=this[_0x234a('0x4f')][_0x3f0b56][_0x234a('0x28')]();var _0x5730c2=this['itemRectForText'](_0x3f0b56);var _0x4b3eac=_0x5730c2['x'];var _0x49bd0b=_0x5730c2['y'];var _0x49bdc5=_0x5730c2[_0x234a('0x57')];this[_0x234a('0x2')](this[_0x234a('0x4f')][_0x3f0b56],_0x4b3eac,_0x49bd0b+0x2);_0x4b3eac+=Window_Base[_0x234a('0x23')]+0x2;_0x49bdc5-=Window_Base['_iconWidth']+0x2;this[_0x234a('0x31')](_0x2347d4,_0x4b3eac,_0x49bd0b,_0x49bdc5);};}}

//=============================================================================
// Boost Point System
//
// 1. Each battler has BP access
// 2. Each battler gains BP each turn if the previous turn used no BP
// 3. BP can be used up to a certain number of times to boost skills

var _0x3777=['initializeBP','BP_DmgMultiply','canBoostBP','applyBPRepeats','isDead','initialize','___Scene_Battle_selectNextCommand___','createActorCommandWindow','_scene','bpRegenMultipliers','applyBPTurns','___Game_BattlerBase_initialize___','convertEscapeCharacters','setupBoostAI','applyBPEffects','regenerateBp','cursorPagedown','reapplyRules','Skill\x20','isActor','storedBP','Analyze','_turnUsedBP','lineHeight','___Window_BattleActor_initialize___','maxTurns','___Scene_Battle_startActorCommandSelection___','bind','equips','startChangeBPAnimation','blt','toLowerCase','___Window_BattleEnemy_initialize___','___Game_Battler_addState___','convertBPDamageEscape','commandBoost','___Game_Battler_regenerateTp___','convertBP0Escape','convertBPRepeatEscape','___Window_ActorCommand_addGuardCommand___','call','gainStoredBP','___Game_BattlerBase_resetStateCounts','DeathRemoval','BoostPoint','gainUseBP','unboost','addGuardCommand','item','canUnboostBP','_boostAI','BP_AlwaysRegen','___BattleManager_processTurn___','convertBPGreaterEscape','convertBPTurnEscape','convertBPUpEscape','addCommand','__Game_Action_applyItemUserEffect___','calculateBPtoUse','multiplierForBP','isBoostSealed','actionWait','_iconHeight','convertBPEqualEscape','drawBoostIcons','BP_TurnAddition','___Game_Battler_removeBattleStates___','_helpWindow','startAnimation','LRButtons','IconSize','replace','startActorCommandSelection','_stateTurns','currentClass','bpRegenValue','applyGuard','BP\x20Effect','DeathRegen','BP_TurnMultiply','Repeat','useBP','addBoostCommand','___Game_Action_applyGuard___','___Game_Enemy_setup___','_bpTurnFlat','_storedBP','setHandler','_subject','___BattleManager_setup___','setupBattleBPMultiplier','subject','isHidden','___Game_Battler_addBuff___','onAllActionsEnd','boost','meetsUseBPRequirement','floor','BP_TurnRegen','refresh','BP_MaxUse','regenerateAll','BP_BPEffectAddition','clearBPSubject','enemy','match','removeBattleStates','meetsUsableItemConditions','processEnemyUseBoost','currentAction','BoostCmd','playOkSound','___Game_Battler_regenerateAll___','name','addState','round','applyItemUserEffect','IconSet','width','EmptyIcon','clear','regenerateTp','currentSymbol','convertBPEscapeCharacters','_actorCommandWindow','___Game_Battler_onAllActionsEnd___','_bpTurnRate','processUseBP','BP_StartBattle','minTurns','_active','convertBPEffectEscape','OctoBattle','states','bpRegenAdded','Damage','cursorPageup','SmallIcon','convertBPAnalyzeEscape','___Scene_Battle_createActorCommandWindow___','TextAlign','prototype','convertBPGreaterEqualEscape','BP_DmgAddition','setStoredBP','setupBattleBPAdded','YEP_BuffsStatesCore','BP_MaxStored','UnboostCmd','apply','actor','BP_BPEffectMultiply','additionForBP','defineProperties','BoostIcon','length','___Game_Action_apply___','BP_RepMultiply','setup','_iconWidth','resetStateCounts','clamp','___Game_Action_numRepeats___','drawIcon','setBPSubject','BP_AnalyzeAddition','addDebuff','numRepeats','drawText','setUseBP','___Window_Base_convertEscapeCharacters___','convertBPLessEscape','note','setupBattleBP','_itemConcoctPreviewWindow','Turn','processEnemyBPUsage','BP_RepAddition','_waitCount','_bpSubject','applyBPDamage','drawSmallBoostIcon','addUnboostCommand','addBuff','_inBattle','isSkill','processTurn','randomInt','_actor','___Game_BattlerBase_meetsUsableItemConditions___','_useBP','Animations','isEnemy','___Game_Battler_addDebuff___','_logWindow','Window_BattleStatus_drawBasicArea','BP_AnalyzeMultiply','YEP_BattleEngineCore','___Window_Selectable_cursorPagedown___','drawBasicArea','_isBoostRestricted'];(function(_0x40643d,_0x37774e){var _0x252a2b=function(_0x32c4cd){while(--_0x32c4cd){_0x40643d['push'](_0x40643d['shift']());}};_0x252a2b(++_0x37774e);}(_0x3777,0x172));var _0x252a=function(_0x40643d,_0x37774e){_0x40643d=_0x40643d-0x0;var _0x252a2b=_0x3777[_0x40643d];return _0x252a2b;};if(Olivia[_0x252a('0xa4')][_0x252a('0x4c')]['Enabled']){Olivia[_0x252a('0xa4')]['BP']=Olivia[_0x252a('0xa4')]['BP']||{};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x79')]=BattleManager[_0x252a('0xbe')];BattleManager[_0x252a('0xbe')]=function(_0x50b03c,_0xc7c2b9,_0x2d0515){Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x79')][_0x252a('0x48')](this,_0x50b03c,_0xc7c2b9,_0x2d0515);$gameParty[_0x252a('0x4')]();$gameTroop[_0x252a('0x4')]();};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x54')]=BattleManager[_0x252a('0x11')];BattleManager[_0x252a('0x11')]=function(){this[_0x252a('0x8c')]();Olivia[_0x252a('0xa4')]['BP']['___BattleManager_processTurn___'][_0x252a('0x48')](this);};BattleManager[_0x252a('0x8c')]=function(){var _0x10e57f=this[_0x252a('0x78')];var _0xbf2d87=_0x10e57f[_0x252a('0x8d')]();if(!!_0x10e57f&&_0x10e57f[_0x252a('0x17')]()&&!!_0xbf2d87&&_0xbf2d87[_0x252a('0x10')]()&&_0x10e57f[_0x252a('0x34')]()>0x0&&!_0x10e57f[_0x252a('0x5c')]()){_0x10e57f[_0x252a('0x9f')](_0xbf2d87[_0x252a('0x50')]());}};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0xc2')]=Game_Action[_0x252a('0xad')][_0x252a('0xc7')];Game_Action[_0x252a('0xad')][_0x252a('0xc7')]=function(){var _0x41eed6=Olivia[_0x252a('0xa4')]['BP']['___Game_Action_numRepeats___'][_0x252a('0x48')](this);_0x41eed6=this[_0x252a('0x23')](_0x41eed6);return Math[_0x252a('0x93')](_0x41eed6);;};Game_Action[_0x252a('0xad')][_0x252a('0x23')]=function(_0x31b8c1){if(!!this['subject']()&&this['item']()[_0x252a('0x3')]['match'](/<(?:BP|Boost) (?:Repeat|Repeats)>/i)){var _0x1cdfcf=this['subject']()[_0x252a('0x71')]();var _0x965c11=this[_0x252a('0x7b')]()[_0x252a('0x5b')](_0x252a('0x70'));_0x31b8c1=Math['round'](_0x31b8c1*_0x965c11);_0x31b8c1+=this['subject']()[_0x252a('0xb8')]('Repeat');}return _0x31b8c1;};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x73')]=Game_Action[_0x252a('0xad')]['applyGuard'];Game_Action[_0x252a('0xad')][_0x252a('0x6c')]=function(_0x9af496,_0x2e50b0){_0x9af496=this[_0x252a('0xb')](_0x9af496);return Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x73')]['call'](this,_0x9af496,_0x2e50b0);};Game_Action[_0x252a('0xad')][_0x252a('0xb')]=function(_0x16d854){if(!!this['subject']()&&this[_0x252a('0x50')]()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) (?:DMG|Damage)>/i)){var _0xf7c6ba=this[_0x252a('0x7b')]()[_0x252a('0x5b')](_0x252a('0xa7'));_0x16d854=Math[_0x252a('0x93')](_0x16d854*_0xf7c6ba);_0x16d854+=this[_0x252a('0x7b')]()[_0x252a('0xb8')](_0x252a('0xa7'));}return _0x16d854;};Olivia['OctoBattle']['BP']['___Game_Action_apply___']=Game_Action['prototype'][_0x252a('0xb5')];Game_Action[_0x252a('0xad')][_0x252a('0xb5')]=function(_0x20869f){this[_0x252a('0x2a')](![]);Olivia[_0x252a('0xa4')]['BP'][_0x252a('0xbc')][_0x252a('0x48')](this,_0x20869f);this[_0x252a('0x2a')](!![]);};Game_Action[_0x252a('0xad')][_0x252a('0x2a')]=function(_0x30b368){if(!!this[_0x252a('0x7b')]()&&this['item']()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) (?:Turn|Turns)>/i)){var _0x4a6530=this[_0x252a('0x7b')]()[_0x252a('0x5b')](_0x252a('0x6'));$gameTemp[_0x252a('0x9e')]=_0x4a6530;$gameTemp[_0x252a('0x75')]=this[_0x252a('0x7b')]()['additionForBP'](_0x252a('0x6'));}if(_0x30b368){$gameTemp[_0x252a('0x9e')]=undefined;$gameTemp['_bpTurnFlat']=undefined;}};Olivia['OctoBattle']['BP'][_0x252a('0x59')]=Game_Action[_0x252a('0xad')][_0x252a('0x94')];Game_Action[_0x252a('0xad')][_0x252a('0x94')]=function(_0x1ef9e3){Olivia[_0x252a('0xa4')]['BP']['__Game_Action_applyItemUserEffect___'][_0x252a('0x48')](this,_0x1ef9e3);this[_0x252a('0x2e')](_0x1ef9e3);};Game_Action[_0x252a('0xad')][_0x252a('0x2e')]=function(_0x537e3d){if(!!_0x537e3d&&this[_0x252a('0x50')]()[_0x252a('0x3')][_0x252a('0x89')](/<Target (?:BP|Boost): ([\+\-]\d+)>/i)){var _0x31f0b5=parseInt(RegExp['$1']);if(this[_0x252a('0x50')]()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) BP Effect>/i)){_0x31f0b5=Math['round'](this[_0x252a('0x7b')]()[_0x252a('0x5b')](_0x252a('0x6d'))*_0x31f0b5);_0x31f0b5+=this[_0x252a('0x7b')]()[_0x252a('0xb8')]('BP\x20Effect');}_0x537e3d[_0x252a('0x49')](_0x31f0b5);}if(!!this[_0x252a('0x7b')]()&&this[_0x252a('0x50')]()[_0x252a('0x3')][_0x252a('0x89')](/<User (?:BP|Boost): ([\+\-]\d+)>/i)){var _0x31f0b5=parseInt(RegExp['$1']);if(this[_0x252a('0x50')]()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) BP Effect>/i)){_0x31f0b5=Math['round'](this[_0x252a('0x7b')]()['multiplierForBP'](_0x252a('0x6d'))*_0x31f0b5);_0x31f0b5+=this[_0x252a('0x7b')]()[_0x252a('0xb8')](_0x252a('0x6d'));}this[_0x252a('0x7b')]()[_0x252a('0x49')](_0x31f0b5);}};Object[_0x252a('0xb9')](Game_BattlerBase[_0x252a('0xad')],{'bp':{'get':function(){return this[_0x252a('0x71')]();},'configurable':!![]}});Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x2b')]=Game_BattlerBase[_0x252a('0xad')][_0x252a('0x25')];Game_BattlerBase[_0x252a('0xad')]['initialize']=function(){Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x2b')][_0x252a('0x48')](this);this[_0x252a('0x20')]();};Game_BattlerBase[_0x252a('0xad')][_0x252a('0x20')]=function(){this[_0x252a('0x76')]=this[_0x252a('0x76')]||0x0;this[_0x252a('0x15')]=this[_0x252a('0x15')]||0x0;this[_0x252a('0x36')]=this[_0x252a('0x36')]||0x0;};Game_BattlerBase[_0x252a('0xad')]['storedBP']=function(){if(this['_storedBP']===undefined){this[_0x252a('0x20')]();}return this[_0x252a('0x76')];};Game_BattlerBase['prototype'][_0x252a('0xb0')]=function(_0x36ca48){if(this[_0x252a('0x76')]===undefined){this['initializeBP']();}this[_0x252a('0x76')]=_0x36ca48[_0x252a('0xc1')](0x0,Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0xb3')]);this[_0x252a('0x83')]();};Game_BattlerBase[_0x252a('0xad')][_0x252a('0x71')]=function(){if(this[_0x252a('0x15')]===undefined){this['initializeBP']();}return this[_0x252a('0x15')];};Game_BattlerBase[_0x252a('0xad')][_0x252a('0x0')]=function(_0x486da5){if(this[_0x252a('0x15')]===undefined){this['initializeBP']();}this[_0x252a('0x15')]=_0x486da5['clamp'](0x0,Olivia['OctoBattle'][_0x252a('0x4c')][_0x252a('0x84')]);this[_0x252a('0x83')]();};Game_BattlerBase['prototype'][_0x252a('0x6b')]=function(){if(!Olivia[_0x252a('0xa4')]['BoostPoint'][_0x252a('0x6e')]&&(this['isDead']()||this[_0x252a('0x7c')]())){return 0x0;}else{var _0x47d7fa=Olivia['OctoBattle'][_0x252a('0x4c')][_0x252a('0x82')];_0x47d7fa=this[_0x252a('0x29')](_0x47d7fa);_0x47d7fa=this[_0x252a('0xa6')](_0x47d7fa);return _0x47d7fa;}};Game_BattlerBase[_0x252a('0xad')][_0x252a('0x5c')]=function(){var _0x307ec5=this[_0x252a('0xa5')]();for(var _0x39560b=0x0;_0x39560b<_0x307ec5[_0x252a('0xbb')];_0x39560b++){var _0x1e7496=_0x307ec5[_0x39560b];if(!!_0x1e7496&&_0x1e7496[_0x252a('0x3')][_0x252a('0x89')](/<Boost (?:Seal|Sealed)>/i)){return!![];}}return![];};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x4a')]=Game_BattlerBase[_0x252a('0xad')][_0x252a('0xc0')];Game_BattlerBase[_0x252a('0xad')][_0x252a('0xc0')]=function(_0x4b56a2){var _0x53b1d6=this[_0x252a('0x69')][_0x4b56a2]||0x0;Olivia['OctoBattle']['BP'][_0x252a('0x4a')][_0x252a('0x48')](this,_0x4b56a2);if(!!$gameTemp[_0x252a('0x9e')]){$gameTemp[_0x252a('0x75')]=$gameTemp['_bpTurnFlat']||0x0;var _0x1aa16f=$dataStates[_0x4b56a2];var _0x22be0e=Math[_0x252a('0x93')](_0x1aa16f[_0x252a('0x39')]*$gameTemp[_0x252a('0x9e')])+$gameTemp[_0x252a('0x75')];var _0x5e0c9e=Math[_0x252a('0x93')](_0x1aa16f[_0x252a('0xa1')]*$gameTemp[_0x252a('0x9e')])+$gameTemp['_bpTurnFlat'];var _0x5a6f60=0x1+Math['max'](_0x22be0e-_0x5e0c9e,0x0);if(Imported[_0x252a('0xb2')]){if(_0x1aa16f[_0x252a('0x31')]===0x1){this[_0x252a('0x69')][_0x4b56a2]=_0x5e0c9e+Math[_0x252a('0x12')](_0x5a6f60);}else if(_0x1aa16f[_0x252a('0x31')]===0x2){this[_0x252a('0x69')][_0x4b56a2]=_0x5e0c9e+Math[_0x252a('0x12')](_0x5a6f60)+_0x53b1d6;}}else{this[_0x252a('0x69')][_0x4b56a2]=_0x5e0c9e+Math['randomInt'](_0x5a6f60);}}};Olivia['OctoBattle']['BP'][_0x252a('0x14')]=Game_BattlerBase[_0x252a('0xad')][_0x252a('0x8b')];Game_BattlerBase[_0x252a('0xad')][_0x252a('0x8b')]=function(_0x3108f7){if(Olivia[_0x252a('0xa4')]['BP']['___Game_BattlerBase_meetsUsableItemConditions___'][_0x252a('0x48')](this,_0x3108f7)){return this[_0x252a('0x80')](_0x3108f7);}else{return![];}};Game_BattlerBase[_0x252a('0xad')]['meetsUseBPRequirement']=function(_0x4d916b){var _0x4b9d13=_0x4d916b[_0x252a('0x3')];if(_0x4b9d13['match'](/<Require (\d+) BP>/i)||_0x4b9d13[_0x252a('0x89')](/<Require >= (\d+) BP>/i)){var _0xd0efd3=parseInt(RegExp['$1']);if(this[_0x252a('0x33')]()){return this['bp']>=_0xd0efd3;}else{return this[_0x252a('0x34')]()>=_0xd0efd3;}}else if(_0x4d916b[_0x252a('0x3')][_0x252a('0x89')](/<Require > (\d+) BP>/i)){var _0xd0efd3=parseInt(RegExp['$1']);if(this[_0x252a('0x33')]()){return this['bp']>_0xd0efd3;}else{return this[_0x252a('0x34')]()>_0xd0efd3;}}else if(_0x4d916b[_0x252a('0x3')][_0x252a('0x89')](/<Require = (\d+) BP>/i)){var _0xd0efd3=parseInt(RegExp['$1']);if(this[_0x252a('0x33')]()){return this['bp']===_0xd0efd3;}else{return this['storedBP']()===_0xd0efd3;}}else if(_0x4d916b[_0x252a('0x3')][_0x252a('0x89')](/<Require < (\d+) BP>/i)){var _0xd0efd3=parseInt(RegExp['$1']);if(this[_0x252a('0x33')]()){return this['bp']<_0xd0efd3;}else{return this[_0x252a('0x34')]()<_0xd0efd3;}}else if(_0x4d916b[_0x252a('0x3')][_0x252a('0x89')](/<Require <= (\d+) BP>/i)){var _0xd0efd3=parseInt(RegExp['$1']);if(this['isActor']()){return this['bp']<=_0xd0efd3;}else{return this['storedBP']()<=_0xd0efd3;}}else{return!![];}};Game_Battler[_0x252a('0xad')][_0x252a('0x49')]=function(_0x393151){this[_0x252a('0xb0')](this[_0x252a('0x34')]()+_0x393151);};Game_Battler[_0x252a('0xad')][_0x252a('0x4d')]=function(_0x313ade){this[_0x252a('0x0')](this[_0x252a('0x71')]()+_0x313ade);};Game_Battler[_0x252a('0xad')]['multiplierForBP']=function(_0xbb3d4){if(_0xbb3d4[_0x252a('0x89')](/Damage/i)){var _0x49ad70=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x21')];}else if(_0xbb3d4[_0x252a('0x89')](/Turn/i)){var _0x49ad70=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x6f')];}else if(_0xbb3d4[_0x252a('0x89')](/Repeat/i)){var _0x49ad70=Olivia['OctoBattle'][_0x252a('0x4c')][_0x252a('0xbd')];}else if(_0xbb3d4[_0x252a('0x89')](/Analyze/i)){var _0x49ad70=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x1b')];}else if(_0xbb3d4[_0x252a('0x89')](/BP Effect/i)){var _0x49ad70=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0xb7')];}else{return this['useBP']();}var _0x1fc077=this[_0x252a('0x71')]();return _0x49ad70[_0x1fc077]||_0x49ad70[0x0];};Game_Battler[_0x252a('0xad')][_0x252a('0xb8')]=function(_0x369921){if(_0x369921['match'](/Damage/i)){var _0x597dca=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0xaf')];}else if(_0x369921[_0x252a('0x89')](/Turn/i)){var _0x597dca=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x61')];}else if(_0x369921[_0x252a('0x89')](/Repeat/i)){var _0x597dca=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x8')];}else if(_0x369921[_0x252a('0x89')](/Analyze/i)){var _0x597dca=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0xc5')];}else if(_0x369921[_0x252a('0x89')](/BP Effect/i)){var _0x597dca=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x86')];}else{return this[_0x252a('0x71')]();}var _0x12c4b7=this[_0x252a('0x71')]();return parseInt(_0x597dca[_0x12c4b7]||_0x597dca[0x0]);};Game_Battler['prototype']['setupBattleBP']=function(){var _0x3d5922=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0xa0')];_0x3d5922=this['setupBattleBPMultiplier'](_0x3d5922);_0x3d5922=this[_0x252a('0xb1')](_0x3d5922);this[_0x252a('0xb0')](_0x3d5922);};Game_Battler['prototype'][_0x252a('0x7a')]=function(_0x23ecb2){var _0xd65f0d=this[_0x252a('0xa5')]();for(var _0x11a20a=0x0;_0x11a20a<_0xd65f0d['length'];_0x11a20a++){var _0x373810=_0xd65f0d[_0x11a20a];if(!!_0x373810){if(_0x373810[_0x252a('0x3')]['match'](/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)){_0x23ecb2*=parseFloat(RegExp['$1'])*0.01;}}}return _0x23ecb2;};Game_Battler[_0x252a('0xad')][_0x252a('0xb1')]=function(_0xe83308){var _0x17f83b=this['states']();for(var _0x5c648e=0x0;_0x5c648e<_0x17f83b[_0x252a('0xbb')];_0x5c648e++){var _0x409cb3=_0x17f83b[_0x5c648e];if(!!_0x409cb3){if(_0x409cb3[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)){_0xe83308+=parseInt(RegExp['$1']);}}}return _0xe83308;};Game_Battler[_0x252a('0xad')][_0x252a('0x3d')]=function(){var _0x59f840=this[_0x252a('0x71')]()[_0x252a('0xc1')](0x0,Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x84')]);var _0x2ec77f=Number(Olivia[_0x252a('0xa4')]['BoostPoint'][_0x252a('0x16')][_0x59f840]||Olivia['OctoBattle'][_0x252a('0x4c')][_0x252a('0x16')][0x0]);if(_0x2ec77f>0x0){this['startAnimation'](_0x2ec77f);}};Game_Battler[_0x252a('0xad')][_0x252a('0x22')]=function(){if(this[_0x252a('0x5c')]()){return![];}return this['bp']<Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x84')]&&this[_0x252a('0x34')]()>0x0;};Game_Battler['prototype'][_0x252a('0x51')]=function(){return this['bp']>0x0;};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x62')]=Game_Battler[_0x252a('0xad')][_0x252a('0x8a')];Game_Battler['prototype'][_0x252a('0x8a')]=function(){Olivia['OctoBattle']['BP'][_0x252a('0x62')][_0x252a('0x48')](this);this[_0x252a('0x76')]=0x0;this[_0x252a('0x15')]=0x0;};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x44')]=Game_Battler[_0x252a('0xad')][_0x252a('0x99')];Game_Battler[_0x252a('0xad')][_0x252a('0x99')]=function(){Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x44')][_0x252a('0x48')](this);this['regenerateBp']();};Olivia['OctoBattle']['BP'][_0x252a('0x90')]=Game_Battler[_0x252a('0xad')][_0x252a('0x85')];Game_Battler[_0x252a('0xad')][_0x252a('0x85')]=function(){Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x90')][_0x252a('0x48')](this);if(Olivia[_0x252a('0xa4')][_0x252a('0x4c')]['DeathRegen']&&this[_0x252a('0x24')]()){this['regenerateBp']();}};Game_Battler[_0x252a('0xad')][_0x252a('0x2f')]=function(){if(Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x53')]||this[_0x252a('0x36')]<=0x0){this['gainStoredBP'](this['bpRegenValue']());}this[_0x252a('0x36')]=0x0;};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x9d')]=Game_Battler[_0x252a('0xad')][_0x252a('0x7e')];Game_Battler['prototype'][_0x252a('0x7e')]=function(){Olivia['OctoBattle']['BP'][_0x252a('0x9d')][_0x252a('0x48')](this);this[_0x252a('0x36')]+=this[_0x252a('0x71')]();this['setUseBP'](0x0);};Game_Battler[_0x252a('0xad')][_0x252a('0x29')]=function(_0x4f8bc3){var _0x446e23=this['states']();for(var _0x44d04b=0x0;_0x44d04b<_0x446e23[_0x252a('0xbb')];_0x44d04b++){var _0xbd261a=_0x446e23[_0x44d04b];if(!!_0xbd261a){if(_0xbd261a['note'][_0x252a('0x89')](/<(?:BP|Boost) Regen: (\d+)([%％])>/i)){_0x4f8bc3*=parseFloat(RegExp['$1'])*0.01;}}}return _0x4f8bc3;};Game_Battler[_0x252a('0xad')][_0x252a('0xa6')]=function(_0x4381e9){var _0x58fc4c=this[_0x252a('0xa5')]();for(var _0x5805a8=0x0;_0x5805a8<_0x58fc4c[_0x252a('0xbb')];_0x5805a8++){var _0x3e3802=_0x58fc4c[_0x5805a8];if(!!_0x3e3802){if(_0x3e3802['note']['match'](/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)){_0x4381e9+=parseInt(RegExp['$1']);}}}return _0x4381e9;};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x41')]=Game_Battler[_0x252a('0xad')][_0x252a('0x92')];Game_Battler[_0x252a('0xad')][_0x252a('0x92')]=function(_0x53b6d0){var _0x21754c=this[_0x252a('0x24')]();Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x41')][_0x252a('0x48')](this,_0x53b6d0);if(Olivia['OctoBattle']['BoostPoint'][_0x252a('0x4b')]&&!_0x21754c&&this['isDead']()){this['setStoredBP'](0x0);}};Olivia['OctoBattle']['BP'][_0x252a('0x7d')]=Game_Battler[_0x252a('0xad')][_0x252a('0xe')];Game_Battler['prototype'][_0x252a('0xe')]=function(_0x4d2f3a,_0x42fa8e){if(!!$gameTemp[_0x252a('0x9e')]){$gameTemp[_0x252a('0x75')]=$gameTemp[_0x252a('0x75')]||0x0;_0x42fa8e=Math[_0x252a('0x93')]($gameTemp[_0x252a('0x9e')]*_0x42fa8e)+$gameTemp[_0x252a('0x75')];}Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x7d')][_0x252a('0x48')](this,_0x4d2f3a,_0x42fa8e);};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x18')]=Game_Battler[_0x252a('0xad')][_0x252a('0xc6')];Game_Battler['prototype'][_0x252a('0xc6')]=function(_0x322469,_0x3c1430){if(!!$gameTemp['_bpTurnRate']){$gameTemp[_0x252a('0x75')]=$gameTemp[_0x252a('0x75')]||0x0;_0x3c1430=Math['round']($gameTemp[_0x252a('0x9e')]*_0x3c1430)+$gameTemp[_0x252a('0x75')];}Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x18')][_0x252a('0x48')](this,_0x322469,_0x3c1430);};Game_Actor[_0x252a('0xad')][_0x252a('0x7a')]=function(_0x4fc957){_0x4fc957=Game_Battler['prototype'][_0x252a('0x7a')][_0x252a('0x48')](this,_0x4fc957);var _0x28f95b=this[_0x252a('0x3c')]();for(var _0x8ca0e1=0x0;_0x8ca0e1<_0x28f95b[_0x252a('0xbb')];_0x8ca0e1++){var _0x1317df=_0x28f95b[_0x8ca0e1];if(!!_0x1317df){if(_0x1317df[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)){_0x4fc957*=parseFloat(RegExp['$1'])*0.01;}}}if(!!this[_0x252a('0xb6')]()&&this[_0x252a('0xb6')]()['note'][_0x252a('0x89')](/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)){_0x4fc957*=parseFloat(RegExp['$1'])*0.01;}if(!!this['currentClass']()&&this[_0x252a('0x6a')]()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)){_0x4fc957*=parseFloat(RegExp['$1'])*0.01;}return _0x4fc957;};Game_Actor[_0x252a('0xad')]['setupBattleBPAdded']=function(_0x277649){_0x277649=Game_Battler[_0x252a('0xad')][_0x252a('0xb1')][_0x252a('0x48')](this,_0x277649);var _0x20f51a=this[_0x252a('0x3c')]();for(var _0x230511=0x0;_0x230511<_0x20f51a[_0x252a('0xbb')];_0x230511++){var _0x795f06=_0x20f51a[_0x230511];if(!!_0x795f06){if(_0x795f06[_0x252a('0x3')]['match'](/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)){_0x277649+=parseInt(RegExp['$1']);}}}if(!!this[_0x252a('0xb6')]()&&this[_0x252a('0xb6')]()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)){_0x277649+=parseInt(RegExp['$1']);}if(!!this[_0x252a('0x6a')]()&&this[_0x252a('0x6a')]()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)){_0x277649+=parseInt(RegExp['$1']);}return _0x277649;};Game_Actor[_0x252a('0xad')][_0x252a('0x29')]=function(_0x369a40){_0x369a40=Game_Battler['prototype'][_0x252a('0x29')][_0x252a('0x48')](this,_0x369a40);var _0x523e1b=this[_0x252a('0x3c')]();for(var _0x5b6c44=0x0;_0x5b6c44<_0x523e1b[_0x252a('0xbb')];_0x5b6c44++){var _0x5e08c8=_0x523e1b[_0x5b6c44];if(!!_0x5e08c8){if(_0x5e08c8[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Regen: (\d+)([%％])>/i)){_0x369a40*=parseFloat(RegExp['$1'])*0.01;}}}if(!!this[_0x252a('0xb6')]()&&this[_0x252a('0xb6')]()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Regen: (\d+)([%％])>/i)){_0x369a40*=parseFloat(RegExp['$1'])*0.01;}if(!!this[_0x252a('0x6a')]()&&this['currentClass']()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Regen: (\d+)([%％])>/i)){_0x369a40*=parseFloat(RegExp['$1'])*0.01;}return _0x369a40;};Game_Actor[_0x252a('0xad')][_0x252a('0xa6')]=function(_0x93cfe7){_0x93cfe7=Game_Battler[_0x252a('0xad')][_0x252a('0xa6')][_0x252a('0x48')](this,_0x93cfe7);var _0x2a01ce=this[_0x252a('0x3c')]();for(var _0x25818c=0x0;_0x25818c<_0x2a01ce['length'];_0x25818c++){var _0x208d0a=_0x2a01ce[_0x25818c];if(!!_0x208d0a){if(_0x208d0a[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)){_0x93cfe7+=parseInt(RegExp['$1']);}}}if(!!this[_0x252a('0xb6')]()&&this['actor']()['note'][_0x252a('0x89')](/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)){_0x93cfe7+=parseInt(RegExp['$1']);}if(!!this[_0x252a('0x6a')]()&&this[_0x252a('0x6a')]()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)){_0x93cfe7+=parseInt(RegExp['$1']);}return _0x93cfe7;};Game_Enemy[_0x252a('0xad')][_0x252a('0x7a')]=function(_0x2cc44a){_0x2cc44a=Game_Battler[_0x252a('0xad')][_0x252a('0x7a')][_0x252a('0x48')](this,_0x2cc44a);if(!!this[_0x252a('0x88')]()&&this[_0x252a('0x88')]()[_0x252a('0x3')]['match'](/<(?:BP|Boost) Battle Start: (\d+)([%％])>/i)){_0x2cc44a*=parseFloat(RegExp['$1'])*0.01;}return _0x2cc44a;};Game_Enemy[_0x252a('0xad')][_0x252a('0xb1')]=function(_0x1ce8b5){_0x1ce8b5=Game_Battler[_0x252a('0xad')][_0x252a('0xb1')][_0x252a('0x48')](this,_0x1ce8b5);if(!!this[_0x252a('0x88')]()&&this[_0x252a('0x88')]()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Battle Start: ([\+\-]\d+)>/i)){_0x1ce8b5+=parseInt(RegExp['$1']);}return _0x1ce8b5;};Game_Enemy['prototype']['bpRegenMultipliers']=function(_0x49da0a){_0x49da0a=Game_Battler['prototype']['bpRegenMultipliers'][_0x252a('0x48')](this,_0x49da0a);if(!!this[_0x252a('0x88')]()&&this[_0x252a('0x88')]()[_0x252a('0x3')][_0x252a('0x89')](/<(?:BP|Boost) Regen: (\d+)([%％])>/i)){_0x49da0a*=parseFloat(RegExp['$1'])*0.01;}return _0x49da0a;};Game_Enemy['prototype'][_0x252a('0xa6')]=function(_0x59417b){_0x59417b=Game_Battler[_0x252a('0xad')][_0x252a('0xa6')]['call'](this,_0x59417b);if(!!this[_0x252a('0x88')]()&&this[_0x252a('0x88')]()[_0x252a('0x3')]['match'](/<(?:BP|Boost) Regen: ([\+\-]\d+)>/i)){_0x59417b+=parseInt(RegExp['$1']);}return _0x59417b;};Olivia[_0x252a('0xa4')]['BP']['___Game_Enemy_setup___']=Game_Enemy['prototype'][_0x252a('0xbe')];Game_Enemy[_0x252a('0xad')][_0x252a('0xbe')]=function(_0x124078,_0x5d78df,_0x18ece8){Olivia['OctoBattle']['BP'][_0x252a('0x74')][_0x252a('0x48')](this,_0x124078,_0x5d78df,_0x18ece8);this[_0x252a('0x2d')]();};Game_Enemy[_0x252a('0xad')][_0x252a('0x2d')]=function(){if(this[_0x252a('0x88')]()[_0x252a('0x52')]===undefined){this[_0x252a('0x88')]()[_0x252a('0x52')]={};var _0x4a3fae=this[_0x252a('0x88')]()[_0x252a('0x3')]['split'](/[\r\n]+/);for(var _0x23d8e4=0x0;_0x23d8e4<_0x4a3fae[_0x252a('0xbb')];_0x23d8e4++){var _0x4c89a1=_0x4a3fae[_0x23d8e4];if(_0x4c89a1['match'](/<Boost Skill (\d+):[ ](.*)>/i)){var _0x4531c1='Skill\x20'+parseInt(RegExp['$1']);var _0x193191=String(RegExp['$2'])['toLowerCase']();this['enemy']()[_0x252a('0x52')][_0x4531c1]=_0x193191;}else if(_0x4c89a1[_0x252a('0x89')](/<Boost[ ](.*):[ ](.*)>/i)){var _0x2ca0d1=String(RegExp['$1']);var _0x193191=String(RegExp['$2'])[_0x252a('0x3f')]();this[_0x252a('0x88')]()['_boostAI'][_0x2ca0d1]=_0x193191;}}}};Game_Enemy[_0x252a('0xad')][_0x252a('0x9f')]=function(_0x3648e4){this[_0x252a('0x2d')]();var _0x26ccc7=this[_0x252a('0x5a')](_0x3648e4);if(_0x26ccc7>0x0){this[_0x252a('0x7')](_0x26ccc7);this['startChangeBPAnimation']();}};Game_Enemy[_0x252a('0xad')][_0x252a('0x5a')]=function(_0x409723){if(this[_0x252a('0x34')]()<=0x0){return 0x0;}var _0x2c2408=_0x409723[_0x252a('0x91')];var _0x818c2=_0x252a('0x32')+_0x409723['id'];var _0xc5c25c=0x0;if(this['enemy']()[_0x252a('0x52')][_0x2c2408]||this['enemy']()[_0x252a('0x52')][_0x818c2]){var _0xa9d7cd=this[_0x252a('0x88')]()[_0x252a('0x52')][_0x2c2408]||this[_0x252a('0x88')]()[_0x252a('0x52')][_0x818c2];if(_0xa9d7cd[_0x252a('0x89')](/(?:All|Full)/i)){_0xc5c25c=this[_0x252a('0x34')]();}else if(_0xa9d7cd[_0x252a('0x89')](/at least (\d+)/i)){var _0x225c12=parseInt(RegExp['$1']);if(this[_0x252a('0x34')]()>=_0x225c12){_0xc5c25c=this[_0x252a('0x34')]();}}else if(_0xa9d7cd[_0x252a('0x89')](/at most (\d+)/i)){var _0x225c12=parseInt(RegExp['$1']);if(this[_0x252a('0x34')]()<=_0x225c12){_0xc5c25c=this['storedBP']();}}else if(_0xa9d7cd['match'](/exactly (\d+)/i)){var _0x225c12=parseInt(RegExp['$1']);if(this[_0x252a('0x34')]()===_0x225c12){_0xc5c25c=_0x225c12;}}}return _0xc5c25c['clamp'](0x0,Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x84')]);};Game_Enemy['prototype'][_0x252a('0x7')]=function(_0xab6c){_0xab6c=_0xab6c['clamp'](0x0,this[_0x252a('0x34')]());_0xab6c=_0xab6c[_0x252a('0xc1')](0x0,Olivia[_0x252a('0xa4')]['BoostPoint'][_0x252a('0x84')]);this[_0x252a('0x49')](-_0xab6c);this[_0x252a('0x4d')](_0xab6c);};Game_Enemy[_0x252a('0xad')][_0x252a('0x3d')]=function(){var _0xdbe164=0x0;var _0x1d05c9=this[_0x252a('0x71')]()[_0x252a('0xc1')](0x0,Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x84')]);for(var _0x38bafe=0x1;_0x38bafe<=_0x1d05c9;_0x38bafe++){var _0x457546=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x16')][_0x38bafe]||Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x16')][0x0];if(_0x457546>0x0){this[_0x252a('0x64')](_0x457546,![],_0xdbe164);}_0xdbe164+=0x3c;}_0xdbe164=Math[_0x252a('0x93')](_0xdbe164);if(Imported[_0x252a('0x1c')]){BattleManager[_0x252a('0x5d')](_0xdbe164);}else{SceneManager['_scene'][_0x252a('0x19')][_0x252a('0x9')]=_0xdbe164;}};Game_Unit[_0x252a('0xad')][_0x252a('0x4')]=function(){var _0x6e7fc7=this['_inBattle'];this[_0x252a('0xf')]=![];var _0x2d7471=this['members']();for(var _0x27c0d6=0x0;_0x27c0d6<_0x2d7471[_0x252a('0xbb')];_0x27c0d6++){var _0x27f2c0=_0x2d7471[_0x27c0d6];if(_0x27f2c0){_0x27f2c0[_0x252a('0x4')]();}}this[_0x252a('0xf')]=_0x6e7fc7;};Olivia['OctoBattle']['BP']['___Scene_Battle_createActorCommandWindow___']=Scene_Battle[_0x252a('0xad')][_0x252a('0x27')];Scene_Battle[_0x252a('0xad')][_0x252a('0x27')]=function(){Olivia[_0x252a('0xa4')]['BP'][_0x252a('0xab')][_0x252a('0x48')](this);this[_0x252a('0x9c')]['setHandler'](_0x252a('0x7f'),this[_0x252a('0x43')][_0x252a('0x3b')](this));this['_actorCommandWindow'][_0x252a('0x77')](_0x252a('0x4e'),this['commandUnboost'][_0x252a('0x3b')](this));};Scene_Battle[_0x252a('0xad')][_0x252a('0x43')]=function(){BattleManager[_0x252a('0xb6')]()[_0x252a('0x49')](-0x1);BattleManager['actor']()[_0x252a('0x4d')](0x1);BattleManager['actor']()[_0x252a('0x3d')]();this[_0x252a('0x63')][_0x252a('0x83')]();this['_actorCommandWindow'][_0x252a('0xa2')]=!![];this[_0x252a('0x9c')][_0x252a('0x83')]();if(this[_0x252a('0x5')]){this[_0x252a('0x5')][_0x252a('0x83')]();}};Scene_Battle[_0x252a('0xad')]['commandUnboost']=function(){BattleManager[_0x252a('0xb6')]()[_0x252a('0x4d')](-0x1);BattleManager[_0x252a('0xb6')]()['gainStoredBP'](0x1);BattleManager[_0x252a('0xb6')]()[_0x252a('0x3d')]();this[_0x252a('0x63')]['refresh']();this[_0x252a('0x9c')][_0x252a('0xa2')]=!![];this[_0x252a('0x9c')][_0x252a('0x83')]();if(this[_0x252a('0x5')]){this[_0x252a('0x5')][_0x252a('0x83')]();}};Olivia['OctoBattle']['BP'][_0x252a('0x26')]=Scene_Battle[_0x252a('0xad')]['selectNextCommand'];Scene_Battle[_0x252a('0xad')]['selectNextCommand']=function(){this[_0x252a('0x63')][_0x252a('0x87')]();Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x26')][_0x252a('0x48')](this);};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x3a')]=Scene_Battle[_0x252a('0xad')][_0x252a('0x68')];Scene_Battle[_0x252a('0xad')]['startActorCommandSelection']=function(){Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x3a')][_0x252a('0x48')](this);this[_0x252a('0x63')][_0x252a('0xc4')](BattleManager[_0x252a('0xb6')]());};Window_Base[_0x252a('0xad')][_0x252a('0x60')]=function(_0x1c9ec6,_0x4b7c99,_0x3cb724){var _0x579e01=_0x1c9ec6[_0x252a('0x34')]();var _0x4339d1=Olivia[_0x252a('0xa4')][_0x252a('0x4c')]['BP_MaxStored']-_0x579e01;var _0x193cb8=Window_Base[_0x252a('0xbf')];if(Olivia[_0x252a('0xa4')][_0x252a('0x4c')]['SmallIcon']){var _0x3cee42=_0x4b7c99;_0x193cb8=Math[_0x252a('0x93')](_0x193cb8*Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x66')]);}while(_0x579e01>0x0){_0x579e01--;if(Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0xa9')]){this[_0x252a('0xc')](Olivia['OctoBattle'][_0x252a('0x4c')][_0x252a('0xba')],_0x4b7c99,_0x3cb724);}else{this[_0x252a('0xc3')](Olivia['OctoBattle'][_0x252a('0x4c')][_0x252a('0xba')],_0x4b7c99,_0x3cb724);}_0x4b7c99+=_0x193cb8;}while(_0x4339d1>0x0){_0x4339d1--;if(Olivia['OctoBattle'][_0x252a('0x4c')][_0x252a('0xa9')]){this[_0x252a('0xc')](Olivia['OctoBattle'][_0x252a('0x4c')]['EmptyIcon'],_0x4b7c99,_0x3cb724);}else{this[_0x252a('0xc3')](Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x97')],_0x4b7c99,_0x3cb724);}_0x4b7c99+=_0x193cb8;}if(Olivia['OctoBattle'][_0x252a('0x4c')][_0x252a('0xa9')]){var _0x32351d=Olivia[_0x252a('0xa4')][_0x252a('0x4c')]['SmallText'];var _0x2e2687=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0xac')];var _0x1147ea=this[_0x252a('0x37')]()-0x4-_0x193cb8;var _0xc7de1b=_0x4b7c99-_0x3cee42;_0x3cb724+=_0x1147ea;this['contents']['fontSize']*=0x1-Olivia['OctoBattle'][_0x252a('0x4c')][_0x252a('0x66')];this['contents'][_0x252a('0xc8')](_0x32351d,_0x3cee42,_0x3cb724,_0xc7de1b,_0x1147ea,_0x2e2687);}this['resetFontSettings']();return _0x4b7c99;};Window_Base[_0x252a('0xad')][_0x252a('0xc')]=function(_0x526901,_0x2598bd,_0x3639bd){var _0x15009f=ImageManager['loadSystem'](_0x252a('0x95'));var _0x334a2a=Window_Base[_0x252a('0xbf')];var _0x5c4cb0=Window_Base[_0x252a('0x5e')];var _0x991c81=_0x526901%0x10*_0x334a2a;var _0x501bf9=Math[_0x252a('0x81')](_0x526901/0x10)*_0x5c4cb0;var _0x211bc7=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x66')];this['contents'][_0x252a('0x3e')](_0x15009f,_0x991c81,_0x501bf9,_0x334a2a,_0x5c4cb0,_0x2598bd,_0x3639bd,Math[_0x252a('0x93')](_0x334a2a*_0x211bc7),Math['round'](_0x5c4cb0*_0x211bc7));};Window_Base['prototype'][_0x252a('0xc4')]=function(_0x288a77){this[_0x252a('0xa')]=_0x288a77;};Window_Base[_0x252a('0xad')]['clearBPSubject']=function(){this[_0x252a('0xa')]=undefined;};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x1')]=Window_Base[_0x252a('0xad')][_0x252a('0x2c')];Window_Base['prototype'][_0x252a('0x2c')]=function(_0x2ae815){_0x2ae815=Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x1')]['call'](this,_0x2ae815);_0x2ae815=this[_0x252a('0x9b')](_0x2ae815);return _0x2ae815;};Window_Base[_0x252a('0xad')][_0x252a('0x9b')]=function(_0x527061){_0x527061=_0x527061[_0x252a('0x67')](/\x1bBPDMG\[(\d+)\]/gi,function(){return this['convertBPDamageEscape'](parseInt(arguments[0x1]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBPDAMAGE\[(\d+)\]/gi,function(){return this[_0x252a('0x42')](parseInt(arguments[0x1]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBPTURN\[(\d+)\]/gi,function(){return this[_0x252a('0x56')](parseInt(arguments[0x1]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBPREP\[(\d+)\]/gi,function(){return this[_0x252a('0x46')](parseInt(arguments[0x1]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBPREPEAT\[(\d+)\]/gi,function(){return this['convertBPRepeatEscape'](parseInt(arguments[0x1]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBPHITS\[(\d+)\]/gi,function(){return this[_0x252a('0x46')](parseInt(arguments[0x1]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBPANALYZE\[(\d+)\]/gi,function(){return this[_0x252a('0xaa')](parseInt(arguments[0x1]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBPEFFECT\[(\d+)\]/gi,function(){return this[_0x252a('0xa3')](parseInt(arguments[0x1]));}['bind'](this));_0x527061=_0x527061['replace'](/\x1bBP\[(.*?)\]/gi,function(){return this[_0x252a('0x57')](String(arguments[0x1]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBP0\[(.*?)\]/gi,function(){return this[_0x252a('0x45')](String(arguments[0x1]));}[_0x252a('0x3b')](this));_0x527061=_0x527061['replace'](/\x1bBP=(\d+)\[(.*?)\]/gi,function(){return this[_0x252a('0x5f')](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBP=(\d+)\[(.*?)\]/gi,function(){return this[_0x252a('0x5f')](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBP\<=(\d+)\[(.*?)\]/gi,function(){return this['convertBPLessEqualEscape'](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBP\<(\d+)\[(.*?)\]/gi,function(){return this[_0x252a('0x2')](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBP\>=(\d+)\[(.*?)\]/gi,function(){return this[_0x252a('0xae')](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x252a('0x3b')](this));_0x527061=_0x527061[_0x252a('0x67')](/\x1bBP\>(\d+)\[(.*?)\]/gi,function(){return this[_0x252a('0x55')](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x252a('0x3b')](this));return _0x527061;};Window_Base[_0x252a('0xad')][_0x252a('0x42')]=function(_0x661912){if(!!this[_0x252a('0xa')]){var _0x13a827=this[_0x252a('0xa')][_0x252a('0x5b')](_0x252a('0xa7'));_0x661912=Math[_0x252a('0x93')](_0x661912*_0x13a827);_0x661912+=this[_0x252a('0xa')][_0x252a('0xb8')]('Damage');}return _0x661912;};Window_Base['prototype']['convertBPTurnEscape']=function(_0x1076b5){if(!!this[_0x252a('0xa')]){var _0x4710a3=this[_0x252a('0xa')][_0x252a('0x5b')](_0x252a('0x6'));_0x1076b5=Math[_0x252a('0x93')](_0x1076b5*_0x4710a3);_0x1076b5+=this[_0x252a('0xa')][_0x252a('0xb8')](_0x252a('0x6'));}return _0x1076b5;};Window_Base[_0x252a('0xad')][_0x252a('0x46')]=function(_0xbc5d1f){if(!!this[_0x252a('0xa')]){var _0x34f701=this[_0x252a('0xa')][_0x252a('0x5b')]('Repeat');_0xbc5d1f=Math[_0x252a('0x93')](_0xbc5d1f*_0x34f701);_0xbc5d1f+=this[_0x252a('0xa')][_0x252a('0xb8')](_0x252a('0x70'));}return _0xbc5d1f;};Window_Base[_0x252a('0xad')][_0x252a('0xaa')]=function(_0x3af151){if(!!this[_0x252a('0xa')]){var _0xdf9912=this['_bpSubject'][_0x252a('0x5b')](_0x252a('0x35'));_0x3af151=Math[_0x252a('0x93')](_0x3af151*_0xdf9912);_0x3af151+=this[_0x252a('0xa')][_0x252a('0xb8')](_0x252a('0x35'));}return _0x3af151;};Window_Base[_0x252a('0xad')][_0x252a('0xa3')]=function(_0x70726){if(!!this['_bpSubject']){var _0x14b4ea=this[_0x252a('0xa')]['multiplierForBP'](_0x252a('0x6d'));_0x70726=Math[_0x252a('0x93')](_0x70726*_0x14b4ea);_0x70726+=this[_0x252a('0xa')][_0x252a('0xb8')](_0x252a('0x6d'));}return _0x70726;};Window_Base[_0x252a('0xad')][_0x252a('0x57')]=function(_0x2b1b15){if(!!this['_bpSubject']&&this[_0x252a('0xa')]['bp']>0x0){return _0x2b1b15;}else{return'';}};Window_Base[_0x252a('0xad')][_0x252a('0x45')]=function(_0x2813de){if(!this[_0x252a('0xa')]||this[_0x252a('0xa')]['bp']<=0x0){return _0x2813de;}else{return'';}};Window_Base[_0x252a('0xad')][_0x252a('0x5f')]=function(_0x394787,_0x518ea6){if(!!this[_0x252a('0xa')]&&this[_0x252a('0xa')]['bp']===_0x394787){return _0x518ea6;}else{return'';}};Window_Base[_0x252a('0xad')][_0x252a('0x5f')]=function(_0x2f1d96,_0x435542){if(!!this[_0x252a('0xa')]&&this[_0x252a('0xa')]['bp']===_0x2f1d96){return _0x435542;}else{return'';}};Window_Base[_0x252a('0xad')]['convertBPLessEqualEscape']=function(_0x48a4ad,_0x422e24){if(!!this[_0x252a('0xa')]&&this[_0x252a('0xa')]['bp']<=_0x48a4ad){return _0x422e24;}else{return'';}};Window_Base['prototype'][_0x252a('0x2')]=function(_0x48b9a7,_0x323f0b){if(!!this[_0x252a('0xa')]&&this[_0x252a('0xa')]['bp']<_0x48b9a7){return _0x323f0b;}else{return'';}};Window_Base[_0x252a('0xad')]['convertBPGreaterEqualEscape']=function(_0x9f8d7d,_0x9521c4){if(!!this[_0x252a('0xa')]&&this[_0x252a('0xa')]['bp']>=_0x9f8d7d){return _0x9521c4;}else{return'';}};Window_Base[_0x252a('0xad')][_0x252a('0x55')]=function(_0x214734,_0x4ebd80){if(!!this[_0x252a('0xa')]&&this[_0x252a('0xa')]['bp']>_0x214734){return _0x4ebd80;}else{return'';}};if(Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x65')]){Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x1d')]=Window_Selectable[_0x252a('0xad')][_0x252a('0x30')];Window_Selectable['prototype'][_0x252a('0x30')]=function(){if(SceneManager[_0x252a('0x28')]instanceof Scene_Battle&&!this[_0x252a('0x1f')]){if(BattleManager[_0x252a('0xb6')]()&&BattleManager[_0x252a('0xb6')]()[_0x252a('0x22')]()){SceneManager[_0x252a('0x28')]['commandBoost']();SceneManager['_scene'][_0x252a('0x9c')][_0x252a('0xa2')]=![];this['refresh']();}Input[_0x252a('0x98')]();}else{Olivia[_0x252a('0xa4')]['BP']['___Window_Selectable_cursorPagedown___'][_0x252a('0x48')](this);}};Olivia['OctoBattle']['BP']['___Window_Selectable_cursorPageup___']=Window_Selectable[_0x252a('0xad')][_0x252a('0xa8')];Window_Selectable['prototype'][_0x252a('0xa8')]=function(){if(SceneManager['_scene']instanceof Scene_Battle&&!this[_0x252a('0x1f')]){if(BattleManager[_0x252a('0xb6')]()&&BattleManager[_0x252a('0xb6')]()[_0x252a('0x51')]()){SceneManager[_0x252a('0x28')]['commandUnboost']();SceneManager[_0x252a('0x28')][_0x252a('0x9c')][_0x252a('0xa2')]=![];this[_0x252a('0x83')]();}Input[_0x252a('0x98')]();}else{Olivia[_0x252a('0xa4')]['BP']['___Window_Selectable_cursorPageup___'][_0x252a('0x48')](this);}};}Olivia[_0x252a('0xa4')]['BP']['___Window_ActorCommand_addGuardCommand___']=Window_ActorCommand[_0x252a('0xad')][_0x252a('0x4f')];Window_ActorCommand[_0x252a('0xad')][_0x252a('0x4f')]=function(){this[_0x252a('0x72')]();this[_0x252a('0xd')]();Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x47')][_0x252a('0x48')](this);};Window_ActorCommand[_0x252a('0xad')]['addBoostCommand']=function(){if(Olivia['OctoBattle'][_0x252a('0x4c')]['BoostShow']){var _0x2540a4=Olivia[_0x252a('0xa4')][_0x252a('0x4c')][_0x252a('0x8e')];var _0x270042=this[_0x252a('0x13')][_0x252a('0x22')]();this[_0x252a('0x58')](_0x2540a4,_0x252a('0x7f'),_0x270042);}};Window_ActorCommand[_0x252a('0xad')]['addUnboostCommand']=function(){if(Olivia[_0x252a('0xa4')][_0x252a('0x4c')]['UnboostShow']){var _0x11ea68=Olivia['OctoBattle'][_0x252a('0x4c')][_0x252a('0xb4')];var _0x23b2aa=this[_0x252a('0x13')][_0x252a('0x51')]();this[_0x252a('0x58')](_0x11ea68,_0x252a('0x4e'),_0x23b2aa);}};Window_ActorCommand[_0x252a('0xad')][_0x252a('0x8f')]=function(){if(this[_0x252a('0x9a')]()!==_0x252a('0x7f')&&this[_0x252a('0x9a')]()!=='unboost'){Window_Selectable[_0x252a('0xad')]['playOkSound'][_0x252a('0x48')](this);}};if(Olivia[_0x252a('0xa4')]['BoostPoint']['ShowIcons']){Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x1a')]=Window_BattleStatus[_0x252a('0xad')][_0x252a('0x1e')];Window_BattleStatus[_0x252a('0xad')][_0x252a('0x1e')]=function(_0x3805f1,_0x4148e0){var _0x555f87=this[_0x252a('0x60')](_0x4148e0,_0x3805f1['x'],_0x3805f1['y']+0x2);_0x3805f1['x']+=_0x555f87+0x2;_0x3805f1[_0x252a('0x96')]-=_0x555f87+0x2;Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x1a')][_0x252a('0x48')](this,_0x3805f1,_0x4148e0);};}Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x38')]=Window_BattleActor['prototype'][_0x252a('0x25')];Window_BattleActor[_0x252a('0xad')][_0x252a('0x25')]=function(_0x49705e,_0x11e9f2){this[_0x252a('0x1f')]=!![];Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x38')][_0x252a('0x48')](this,_0x49705e,_0x11e9f2);};Olivia[_0x252a('0xa4')]['BP'][_0x252a('0x40')]=Window_BattleEnemy[_0x252a('0xad')][_0x252a('0x25')];Window_BattleEnemy[_0x252a('0xad')][_0x252a('0x25')]=function(_0x4ee1bb,_0x48e119){this[_0x252a('0x1f')]=!![];Olivia['OctoBattle']['BP'][_0x252a('0x40')][_0x252a('0x48')](this,_0x4ee1bb,_0x48e119);};} 

//=============================================================================
// Weapon Swap System
//
// 1. Player can swap actor's weapons in the middle of battle
// 2. They must be equipped before entering battle

var _0x2000=['paySkillCost','itemTextAlign','isRepeated','setupBattleTestMembers','getFirstSwapWeapon','clearEquipments','create','equipSlots','meetsSkillConditions','drawCurrentExtraParam','activate','initEquips','changeEquip','weaponTypes','Scene_Equip_onSlotOk','isEnabled','___Game_Actor_releaseUnequippableItems___','wtypeId','bitmap','_tempActor','apply','members','___Window_ActorCommand_addAttackCommand___','___Window_EquipSlot_isEnabled___','contents','actor','hide','addAttackCommand','WeaponSwap','calcEquipItemPerformance','findSymbol','length','___Window_StatCompare_refresh___','_iconWidth','includes','canEquip','createActorCommandWindow','processCursorMove','match','prototype','_slotId','constructor','active','item','drawExtraParameters','forceChangeEquip','OctoBattle','___Game_Actor_initEquips___','initialize','TextHit','note','TextEva','setSwapWeaponSlot','Enabled','onItemOk','isWeaponSwapEnabled','indexOf','Weapon\x20Swap\x20Error','processActionSequence','isEnemy','setActor','isDualWield','deselect','BattleAction','initializeWeaponSwap','ExtraLines','_paramValueWidth','height','_weaponTypeId','drawRightArrow','eva','clamp','push','Util','playOkSound','makeActionTargets','_parent','___Game_BattlerBase_meetsSkillConditions___','weaponSwap','itemRect','getItemFromIndex','onlyUnique','changeTextColor','_swapWeapons','drawWeaponIcon','WpnBattleTest','battleTestGetFirstOfWtype','drawExtraParamItem','SWAP\x20WEAPON','Weapon','standardPadding','You\x20do\x20not\x20have\x20a\x20weapon\x20made\x20for\x20weapon\x20type\x20','tradeItemWithParty','loadSystem','___Window_EquipItem_includes___','drawDarkRect','isWtypeEquipped','failsToMeetSkillConditionRequireAnyWeapon','setSlotId','drawExtraParamItemName','_weaponRightArrowSprite','\x20(+','contains','left','filter','itemRectForText','___Window_EquipItem_setSlotId___','onSlotOk','createBitmap','bestEquipItem','playEquip','___Game_Actor_changeEquip___','ShowArrows','TextCri','___Window_EquipSlot_updateHelp___','performAttack','WpnSwapArrows','Param','parse','setObject','_usedWeaponSlot','drawItemWeaponSwapBase','addWeaponSwapCommand','slotName','updateHelp','_actorCommandWindow','YEP_BattleEngineCore','getSwapWeapons','___Window_EquipItem_initialize___','bestEquipWeapon','cri','update','isEquipWtypeOk','createBattleTestWeaponTypes','show','applyWeaponSwapOnCost','currentSymbol','___Window_ActorCommand_initialize___','opacity','optimizeWeapons','weapons','optimizeEquipments','_direction','___Window_EquipSlot_slotName___','updateOpacity','call','anchor','failsToMeetSkillConditionRequireWeaponTypes','___Scene_Equip_onSlotOk___','iconIndex','YEP_EquipCore','_equips','Equip','drawItem','_actor','makeDeepCopy','resetTextColor','WpnSwapCmd','printError','index','_itemWindow','drawItemName','___Scene_Battle_createActorCommandWindow___','right','___Game_Party_setupBattleTestMembers___','WEAPON\x20SWAP','changeWeapon','_weaponLeftArrowSprite','_currentIndex','round','addChild','equips','___BattleManager_processActionSequence___','_slotWindow','_bonusValueWidth','___Game_BattlerBase_paySkillCost___','drawExtraParamDifference','_list','drawNewExtraParam','actionWeaponSwap','swapWeaponBattle','addCommand','bind','paramchangeTextColor','hit','switchToWeaponType','textPadding','setHandler','width','visible','attack','changePaintOpacity','inBattle','drawText','lineHeight','systemColor','refresh','isActor','isEquipChangeOk','_paramNameWidth','createWeaponArrowSprites','_statusWindow','setFrame','setTempActor','releaseUnequippableItems','stop','_arrowWidth','clearWeapons','setupBitmap'];(function(_0x40bfce,_0x200081){var _0x2d88db=function(_0x3bb5a8){while(--_0x3bb5a8){_0x40bfce['push'](_0x40bfce['shift']());}};_0x2d88db(++_0x200081);}(_0x2000,0x174));var _0x2d88=function(_0x40bfce,_0x200081){_0x40bfce=_0x40bfce-0x0;var _0x2d88db=_0x2000[_0x40bfce];return _0x2d88db;};if(Olivia[_0x2d88('0x5c')][_0x2d88('0x4a')][_0x2d88('0x63')]){Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]=Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]||{};if(Imported[_0x2d88('0xac')]){Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]['___BattleManager_processActionSequence___']=BattleManager[_0x2d88('0x68')];BattleManager[_0x2d88('0x68')]=function(_0x3c0193,_0x3320db){if(_0x3c0193===_0x2d88('0x2')||_0x3c0193===_0x2d88('0x86')){return this[_0x2d88('0x10')](_0x3320db);}return Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0x9')][_0x2d88('0xbf')](this,_0x3c0193,_0x3320db);};BattleManager['actionWeaponSwap']=function(_0xd008a7){var _0xfab542=this[_0x2d88('0x79')](_0xd008a7[0x0])['filter'](Yanfly[_0x2d88('0x77')][_0x2d88('0x7f')]);var _0xd866ef=_0xd008a7[0x1];if($dataSystem[_0x2d88('0x3b')]['contains'](_0xd866ef)){var _0x5e9e77=$dataSystem['weaponTypes'][_0x2d88('0x66')](_0xd866ef);}else{var _0x5e9e77=parseInt(_0xd866ef);}for(var _0x1ed8c5=0x0;_0x1ed8c5<_0xfab542[_0x2d88('0x4d')];_0x1ed8c5++){var _0x371372=_0xfab542[_0x1ed8c5];if(!!_0x371372&&_0x371372[_0x2d88('0x22')]()){_0x371372[_0x2d88('0x16')](_0x5e9e77);}}};}Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0xc')]=Game_BattlerBase[_0x2d88('0x55')][_0x2d88('0x2e')];Game_BattlerBase[_0x2d88('0x55')][_0x2d88('0x2e')]=function(_0x2cffd1){Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0xc')][_0x2d88('0xbf')](this,_0x2cffd1);if(this[_0x2d88('0x22')]()){this['applyWeaponSwapOnCost'](_0x2cffd1);}};Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]['___Game_BattlerBase_meetsSkillConditions___']=Game_BattlerBase[_0x2d88('0x55')]['meetsSkillConditions'];Game_BattlerBase[_0x2d88('0x55')][_0x2d88('0x36')]=function(_0x2fa0f7){if(this['failsToMeetSkillConditionRequireAnyWeapon'](_0x2fa0f7)){return![];}else if(this[_0x2d88('0xc1')](_0x2fa0f7)){return![];}else{return Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0x7b')][_0x2d88('0xbf')](this,_0x2fa0f7);}};Game_BattlerBase[_0x2d88('0x55')][_0x2d88('0x8f')]=function(_0x15720b){return _0x15720b[_0x2d88('0x60')][_0x2d88('0x54')](/<Require Any Weapon>/i)&&this[_0x2d88('0x22')]()&&!this[_0x2d88('0x8')]()[0x0];};Game_BattlerBase['prototype'][_0x2d88('0xc1')]=function(_0x3ada5d){if(this[_0x2d88('0x69')]()){return![];}else if(Olivia['OctoBattle'][_0x2d88('0x4a')][_0x2d88('0x63')]){if(_0x3ada5d[_0x2d88('0x60')][_0x2d88('0x54')](/<Require Weapon Types:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x3d3346=JSON[_0x2d88('0xa4')]('['+RegExp['$1']['match'](/\d+/g)+']');for(var _0x42a3c5=0x0;_0x42a3c5<_0x3d3346[_0x2d88('0x4d')];_0x42a3c5++){var _0x592b73=_0x3d3346[_0x42a3c5];if(!this[_0x2d88('0x8e')](_0x592b73)){return!![];}}}}return![];};Olivia['OctoBattle']['Weapon'][_0x2d88('0x5d')]=Game_Actor[_0x2d88('0x55')][_0x2d88('0x39')];Game_Actor['prototype'][_0x2d88('0x39')]=function(_0x29d887){Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0x5d')][_0x2d88('0xbf')](this,_0x29d887);this[_0x2d88('0x6e')]();};Game_Actor[_0x2d88('0x55')][_0x2d88('0x6e')]=function(){this[_0x2d88('0xa6')]=0x0;this[_0x2d88('0x81')]=[];for(var _0x4bdb4f=0x0;_0x4bdb4f<$dataSystem['weaponTypes']['length'];_0x4bdb4f++){if(this[_0x2d88('0xb2')](_0x4bdb4f)){this['_usedWeaponSlot']=this[_0x2d88('0xa6')]||_0x4bdb4f;}this[_0x2d88('0x81')][_0x2d88('0x76')](0x0);}var _0x9fcf55=this[_0x2d88('0xba')]()[0x0];if(!!_0x9fcf55){var _0x5534fb=_0x9fcf55['wtypeId'];this[_0x2d88('0x81')][_0x5534fb]=_0x9fcf55['id'];}};Game_Actor[_0x2d88('0x55')][_0x2d88('0x6b')]=function(){return![];};Game_Actor['prototype'][_0x2d88('0x8e')]=function(_0x106315){if(this[_0x2d88('0x81')]===undefined){this['initializeWeaponSwap']();}return this[_0x2d88('0x81')][_0x106315]>0x0;};Game_Actor['prototype'][_0x2d88('0xad')]=function(){if(this[_0x2d88('0x81')]===undefined){this[_0x2d88('0x6e')]();}var _0x4fe73e=[];for(var _0xe133b2=0x1;_0xe133b2<this[_0x2d88('0x81')][_0x2d88('0x4d')];_0xe133b2++){weaponId=this[_0x2d88('0x81')][_0xe133b2];_0x4fe73e[_0x2d88('0x76')]($dataWeapons[weaponId]);}return _0x4fe73e;};Game_Actor['prototype']['getFirstSwapWeapon']=function(){if(this[_0x2d88('0x81')]===undefined){this[_0x2d88('0x6e')]();}for(var _0x3e8971=0x1;_0x3e8971<this[_0x2d88('0x81')]['length'];_0x3e8971++){weaponId=this[_0x2d88('0x81')][_0x3e8971];if(weaponId>0x0){return $dataWeapons[weaponId];}}return null;};Game_Actor['prototype'][_0x2d88('0x62')]=function(_0x112442,_0xf76f68){if(this[_0x2d88('0x81')]===undefined){this[_0x2d88('0x6e')]();}this['_swapWeapons'][_0x112442]=_0xf76f68;};Olivia[_0x2d88('0x5c')]['Weapon'][_0x2d88('0x9d')]=Game_Actor[_0x2d88('0x55')][_0x2d88('0x3a')];Game_Actor[_0x2d88('0x55')][_0x2d88('0x3a')]=function(_0x3835bf,_0x568327){if(_0x3835bf===0x0){this[_0x2d88('0x3')](_0x568327);}else{Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]['___Game_Actor_changeEquip___']['call'](this,_0x3835bf,_0x568327);}};Game_Actor[_0x2d88('0x55')][_0x2d88('0x3')]=function(_0x4873da){var _0x6285d=this[_0x2d88('0xba')]()[0x0];if(!!_0x4873da){this['switchToWeaponType'](_0x4873da['wtypeId'],![]);_0x6285d=this[_0x2d88('0xba')]()[0x0];var _0x4e957a=_0x4873da['wtypeId'];if(!!_0x6285d&&_0x6285d[_0x2d88('0x3f')]===_0x4873da[_0x2d88('0x3f')]){this['tradeItemWithParty'](_0x4873da,_0x6285d);}else{this[_0x2d88('0x8a')](_0x4873da,null);}this[_0x2d88('0x62')](_0x4e957a,_0x4873da['id']);this['_usedWeaponSlot']=_0x4e957a;this['_equips'][0x0]['setObject'](_0x4873da);}else if(!!_0x6285d){var _0x4e957a=_0x6285d[_0x2d88('0x3f')];this['setSwapWeaponSlot'](_0x4e957a,0x0);this[_0x2d88('0x8a')](null,_0x6285d);this[_0x2d88('0xc5')][0x0][_0x2d88('0xa5')](null);var _0x3dbc7a=this['getFirstSwapWeapon']();if(_0x3dbc7a){this['_usedWeaponSlot']=_0x3dbc7a['wtypeId'];}else{this[_0x2d88('0xa6')]=0x1;}}this[_0x2d88('0x21')]();};Game_Actor[_0x2d88('0x55')][_0x2d88('0x16')]=function(_0x48b978,_0x18dc57){var _0x59b367=$dataWeapons[this[_0x2d88('0x81')][_0x48b978]];this[_0x2d88('0xc5')][0x0][_0x2d88('0xa5')](_0x59b367);this[_0x2d88('0xa6')]=_0x48b978;this[_0x2d88('0x21')]();if($gameParty[_0x2d88('0x1d')]()&&_0x18dc57&&Olivia['OctoBattle'][_0x2d88('0x4a')][_0x2d88('0x6d')]){this[_0x2d88('0xa1')]();}};Game_Actor[_0x2d88('0x55')]['swapWeaponBattle']=function(_0xba49e4){if(this['_swapWeapons']===undefined){this[_0x2d88('0x6e')]();}var _0x4e2511=this[_0x2d88('0xa6')];while(!![]){if(_0xba49e4===_0x2d88('0x0')){_0x4e2511+=0x1;if(_0x4e2511>=$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]){_0x4e2511=0x1;}}else{_0x4e2511-=0x1;if(_0x4e2511<=0x0){_0x4e2511=$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x1;}}if(this[_0x2d88('0x81')][_0x4e2511]>0x0){this[_0x2d88('0xa6')]=_0x4e2511;this[_0x2d88('0x16')](_0x4e2511,!![]);break;}if(_0x4e2511===this[_0x2d88('0xa6')]){break;}}};Game_Actor['prototype'][_0x2d88('0xb5')]=function(_0x21914f){if(_0x21914f[_0x2d88('0x60')][_0x2d88('0x54')](/<Switch to Weapon: (\d+)>/i)){var _0x23c7a0=parseInt(RegExp['$1'])[_0x2d88('0x75')](0x1,$dataSystem['weaponTypes'][_0x2d88('0x4d')]-0x1);}else if(_0x21914f['note'][_0x2d88('0x54')](/<Switch to Weapon: (.*)>/i)){var _0x3421a5=String(RegExp['$1']);var _0x23c7a0=$dataSystem[_0x2d88('0x3b')]['indexOf'](_0x3421a5);if(_0x23c7a0>0x0){this[_0x2d88('0x16')](_0x23c7a0);}}};Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0x3e')]=Game_Actor[_0x2d88('0x55')][_0x2d88('0x29')];Game_Actor['prototype']['releaseUnequippableItems']=function(_0x2802b7){if(this[_0x2d88('0x81')]===undefined){this['initializeWeaponSwap']();}Olivia['OctoBattle'][_0x2d88('0x87')]['___Game_Actor_releaseUnequippableItems___'][_0x2d88('0xbf')](this,_0x2802b7);for(var _0x3d53ac=0x1;_0x3d53ac<this[_0x2d88('0x81')][_0x2d88('0x4d')];_0x3d53ac++){var _0x4a93b9=this[_0x2d88('0x81')][_0x3d53ac];if(_0x4a93b9>0x0){var _0x5f2fed=$dataWeapons[_0x4a93b9];if(!this[_0x2d88('0x51')](_0x5f2fed)){if(!_0x2802b7){this['tradeItemWithParty'](null,_0x5f2fed);}this[_0x2d88('0x81')][_0x3d53ac]=0x0;}}}};Game_Actor['prototype'][_0x2d88('0xbb')]=function(){var _0x9904dc=this[_0x2d88('0x35')]()[_0x2d88('0x4d')];this[_0x2d88('0x33')]();for(var _0x3be9ef=0x1;_0x3be9ef<_0x9904dc;_0x3be9ef++){if(this['isEquipChangeOk'](_0x3be9ef)){this[_0x2d88('0x3a')](_0x3be9ef,this[_0x2d88('0x9b')](_0x3be9ef));}}this[_0x2d88('0xb9')]();};Game_Actor['prototype'][_0x2d88('0xb9')]=function(){var _0x1cd117=this[_0x2d88('0xa6')];for(var _0x2f5dd8=0x1;_0x2f5dd8<$dataSystem[_0x2d88('0x3b')]['length'];_0x2f5dd8++){if(this[_0x2d88('0xb2')](_0x2f5dd8)){this[_0x2d88('0x3')](this[_0x2d88('0xaf')](_0x2f5dd8));}}this[_0x2d88('0xa6')]=_0x1cd117;};Game_Actor[_0x2d88('0x55')]['bestEquipWeapon']=function(_0x231961){var _0x9076dc=$gameParty['weapons']()[_0x2d88('0x96')](function(_0x138b3f){return _0x138b3f[_0x2d88('0x3f')]===_0x231961&&this[_0x2d88('0xb2')](_0x231961);},this);var _0x5bd1e1=null;var _0x30bf85=-0x3e8;for(var _0x21e554=0x0;_0x21e554<_0x9076dc[_0x2d88('0x4d')];_0x21e554++){var _0x14c7a3=this[_0x2d88('0x4b')](_0x9076dc[_0x21e554]);if(_0x14c7a3>_0x30bf85){_0x30bf85=_0x14c7a3;_0x5bd1e1=_0x9076dc[_0x21e554];}}return _0x5bd1e1;};Game_Actor[_0x2d88('0x55')]['clearEquipments']=function(){var _0xa1b7aa=this[_0x2d88('0x35')]()[_0x2d88('0x4d')];for(var _0x518038=0x1;_0x518038<_0xa1b7aa;_0x518038++){if(this[_0x2d88('0x23')](_0x518038)){this['changeEquip'](_0x518038,null);}}this[_0x2d88('0x2c')]();};Game_Actor['prototype'][_0x2d88('0x2c')]=function(){if(Imported[_0x2d88('0xc4')]&&Yanfly[_0x2d88('0xa3')]['EquipNonRemove'][_0x2d88('0x94')](0x1)){return;}var _0x288ead=0x0;for(var _0x3daac9=0x1;_0x3daac9<$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')];_0x3daac9++){if(this[_0x2d88('0xb2')](_0x3daac9)){_0x288ead=_0x288ead||_0x3daac9;this['switchToWeaponType'](_0x3daac9,![]);this[_0x2d88('0x3')](null);}}this[_0x2d88('0xa6')]=_0x288ead;};if(Olivia[_0x2d88('0x5c')][_0x2d88('0x4a')][_0x2d88('0x83')]){Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0x1')]=Game_Party[_0x2d88('0x55')][_0x2d88('0x31')];Game_Party['prototype'][_0x2d88('0x31')]=function(){Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]['___Game_Party_setupBattleTestMembers___'][_0x2d88('0xbf')](this);var _0x1599fc=this[_0x2d88('0xb3')]();var _0x3d9b1c=this[_0x2d88('0x43')]();for(var _0x5cdcfe=0x0;_0x5cdcfe<_0x3d9b1c['length'];_0x5cdcfe++){member=_0x3d9b1c[_0x5cdcfe];if(!!member){for(var _0x499005=0x1;_0x499005<_0x1599fc[_0x2d88('0x4d')];_0x499005++){if(!member[_0x2d88('0x8e')](_0x499005)){member[_0x2d88('0x3a')](0x0,_0x1599fc[_0x499005]);}}if(!!member[_0x2d88('0x32')]()){member[_0x2d88('0x16')](member[_0x2d88('0x32')]()[_0x2d88('0x3f')],![]);}else{member['switchToWeaponType'](0x0,![]);}}}};Game_Party[_0x2d88('0x55')][_0x2d88('0xb3')]=function(){var _0x474957=[null];for(var _0x4c3c01=0x1;_0x4c3c01<$dataSystem[_0x2d88('0x3b')]['length'];_0x4c3c01++){_0x474957[_0x2d88('0x76')](this[_0x2d88('0x84')](_0x4c3c01));}return _0x474957;};Game_Party[_0x2d88('0x55')][_0x2d88('0x84')]=function(_0x377984){for(var _0x2a5360=0x1;_0x2a5360<$dataWeapons[_0x2d88('0x4d')];_0x2a5360++){var _0x169cab=$dataWeapons[_0x2a5360];if(!!_0x169cab&&_0x169cab[_0x2d88('0x3f')]===_0x377984){return _0x169cab;}}var _0xdcdded=_0x2d88('0x89')+_0x377984;SceneManager[_0x2d88('0x2a')]();Graphics[_0x2d88('0xcc')](_0x2d88('0x67'),_0xdcdded);return null;};}Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0xc2')]=Scene_Equip[_0x2d88('0x55')][_0x2d88('0x99')];Scene_Equip['prototype']['onSlotOk']=function(){if(Imported[_0x2d88('0xc4')]){this['_itemWindow']['_slotId']=-0x1;var _0xa124b=this['_slotWindow'][_0x2d88('0xcd')]();this[_0x2d88('0xce')]['setSlotId'](_0xa124b);Yanfly[_0x2d88('0xc6')][_0x2d88('0x3c')]['call'](this);this[_0x2d88('0xce')][_0x2d88('0xb4')]();}else{Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]['___Scene_Equip_onSlotOk___'][_0x2d88('0xbf')](this);}};Scene_Equip[_0x2d88('0x55')][_0x2d88('0x64')]=function(){SoundManager[_0x2d88('0x9c')]();var _0x539237=this['_slotWindow'][_0x2d88('0xcd')]();if(_0x539237<$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x1){_0x539237=0x0;}else{_0x539237-=$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x2;}this['actor']()[_0x2d88('0x3a')](_0x539237,this[_0x2d88('0xce')][_0x2d88('0x59')]());this['_slotWindow'][_0x2d88('0x38')]();this[_0x2d88('0xa')][_0x2d88('0x21')]();this['_itemWindow'][_0x2d88('0x6c')]();this[_0x2d88('0xce')][_0x2d88('0x21')]();this['_statusWindow']['refresh']();if(Imported[_0x2d88('0xc4')]){this[_0x2d88('0xce')][_0x2d88('0x48')]();this[_0x2d88('0x26')][_0x2d88('0x21')]();}};Olivia[_0x2d88('0x5c')]['Weapon'][_0x2d88('0xd0')]=Scene_Battle[_0x2d88('0x55')][_0x2d88('0x52')];Scene_Battle['prototype']['createActorCommandWindow']=function(){Olivia['OctoBattle'][_0x2d88('0x87')][_0x2d88('0xd0')][_0x2d88('0xbf')](this);this[_0x2d88('0xab')][_0x2d88('0x18')]('weaponSwap',this['commandWeaponSlot'][_0x2d88('0x13')](this));};Scene_Battle[_0x2d88('0x55')]['commandWeaponSlot']=function(){BattleManager[_0x2d88('0x47')]()[_0x2d88('0x11')]('right');this[_0x2d88('0xab')][_0x2d88('0x21')]();this[_0x2d88('0xab')]['activate']();};function Sprite_WindowArrow(){this[_0x2d88('0x5e')][_0x2d88('0x42')](this,arguments);}Sprite_WindowArrow[_0x2d88('0x55')]=Object[_0x2d88('0x34')](Sprite[_0x2d88('0x55')]);Sprite_WindowArrow[_0x2d88('0x55')][_0x2d88('0x57')]=Sprite_WindowArrow;Sprite_WindowArrow[_0x2d88('0x55')][_0x2d88('0x5e')]=function(_0x29344b,_0x330a23){this[_0x2d88('0x7a')]=_0x29344b;this[_0x2d88('0xbc')]=_0x330a23;Sprite[_0x2d88('0x55')][_0x2d88('0x5e')][_0x2d88('0xbf')](this);this[_0x2d88('0x9a')]();};Sprite_WindowArrow[_0x2d88('0x55')][_0x2d88('0x9a')]=function(){this[_0x2d88('0x40')]=ImageManager[_0x2d88('0x8b')]('Window');this[_0x2d88('0x40')]['addLoadListener'](this['setupBitmap'][_0x2d88('0x13')](this));};Sprite_WindowArrow[_0x2d88('0x55')][_0x2d88('0x2d')]=function(){if(this[_0x2d88('0xbc')]===_0x2d88('0x95')){this['setFrame'](0x78,0x24,0x18,0x18);this[_0x2d88('0xc0')]['x']=-0.1;this['x']=0x0;}else{this[_0x2d88('0x27')](0x90,0x24,0x18,0x18);this[_0x2d88('0xc0')]['x']=1.1;this['x']=this['_parent']['width'];}this['anchor']['y']=0.5;};Sprite_WindowArrow[_0x2d88('0x55')][_0x2d88('0xb1')]=function(){Sprite[_0x2d88('0x55')][_0x2d88('0xb1')][_0x2d88('0xbf')](this);this['updateOpacity']();};Sprite_WindowArrow['prototype'][_0x2d88('0xbe')]=function(){if(!this[_0x2d88('0x7a')][_0x2d88('0x1a')]||this[_0x2d88('0x7a')]['contentsOpacity']<0xff||this[_0x2d88('0x7a')]['openness']<0xff){this[_0x2d88('0xb8')]=0x0;this[_0x2d88('0x5')]=-0x1;}else if(this[_0x2d88('0x5')]!==this[_0x2d88('0x7a')][_0x2d88('0xcd')]()){this[_0x2d88('0x5')]=this[_0x2d88('0x7a')]['index']();var _0x765ed0=this['_parent'][_0x2d88('0x7d')](this[_0x2d88('0x7a')][_0x2d88('0x4c')]('attack'));var _0x485068=_0x765ed0['y']+this[_0x2d88('0x7a')][_0x2d88('0x88')]();if(_0x485068>0x0&&_0x485068<this[_0x2d88('0x7a')][_0x2d88('0x71')]-this[_0x2d88('0x7a')][_0x2d88('0x88')]()*0x2){_0x485068+=Math[_0x2d88('0x6')](this['_parent'][_0x2d88('0x1f')]()/0x2);this[_0x2d88('0xb8')]=0xff;this['y']=_0x485068;}else{this[_0x2d88('0xb8')]=0x0;}}};Window_EquipSlot[_0x2d88('0x55')]['maxItems']=function(){if(!!this[_0x2d88('0xc8')]){var _0x4b23b3=this[_0x2d88('0xc8')][_0x2d88('0x35')]()[_0x2d88('0x4d')]-0x1;_0x4b23b3+=$dataSystem[_0x2d88('0x3b')]['length']-0x1;return _0x4b23b3;}else{return 0x0;}};Olivia['OctoBattle'][_0x2d88('0x87')][_0x2d88('0xbd')]=Window_EquipSlot[_0x2d88('0x55')][_0x2d88('0xa9')];Window_EquipSlot[_0x2d88('0x55')][_0x2d88('0xa9')]=function(_0x411601){if(_0x411601<$dataSystem['weaponTypes']['length']-0x1){return $dataSystem['weaponTypes'][_0x411601+0x1];}else{_0x411601-=$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x2;}return Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]['___Window_EquipSlot_slotName___'][_0x2d88('0xbf')](this,_0x411601);};Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0x45')]=Window_EquipSlot[_0x2d88('0x55')][_0x2d88('0x3d')];Window_EquipSlot[_0x2d88('0x55')][_0x2d88('0x3d')]=function(_0x22c834){if(_0x22c834<$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x1){_0x22c834+=0x1;return this['_actor'][_0x2d88('0xb2')](_0x22c834);}else{_0x22c834-=$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x2;return Olivia['OctoBattle'][_0x2d88('0x87')][_0x2d88('0x45')]['call'](this,_0x22c834);}};Window_EquipSlot['prototype'][_0x2d88('0x59')]=function(){if(!!this[_0x2d88('0xc8')]){var _0x3797d8=this['index']();return this[_0x2d88('0x7e')](_0x3797d8);}else{return null;}return this['_actor']?this['_actor']['equips']()[this[_0x2d88('0xcd')]()]:null;};Window_EquipSlot['prototype'][_0x2d88('0xc7')]=function(_0x3a4c20){if(Imported['YEP_EquipCore']){this['drawItemWeaponSwapEquipCore'](_0x3a4c20);}else{this[_0x2d88('0xa7')](_0x3a4c20);}};Window_EquipSlot[_0x2d88('0x55')][_0x2d88('0x7e')]=function(_0x5d7aaa){if(_0x5d7aaa<$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x1){return this[_0x2d88('0xc8')][_0x2d88('0xad')]()[_0x5d7aaa];}else{_0x5d7aaa-=$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x2;return this[_0x2d88('0xc8')]['equips']()[_0x5d7aaa];}};Window_EquipSlot[_0x2d88('0x55')]['drawItemWeaponSwapEquipCore']=function(_0x1ccdd8){if(!this[_0x2d88('0xc8')])return;var _0x2644f7=this[_0x2d88('0x97')](_0x1ccdd8);this[_0x2d88('0x80')](this[_0x2d88('0x20')]());this[_0x2d88('0x1c')](this[_0x2d88('0x3d')](_0x1ccdd8));var _0x38947f=this['_nameWidth'];this[_0x2d88('0x1e')](this[_0x2d88('0xa9')](_0x1ccdd8),_0x2644f7['x'],_0x2644f7['y'],_0x38947f);var _0x5e70b5=_0x2644f7[_0x2d88('0x19')]-_0x38947f;var _0x2ecc68=this[_0x2d88('0x7e')](_0x1ccdd8);if(_0x2ecc68){this[_0x2d88('0xcf')](_0x2ecc68,_0x2644f7['x']+_0x38947f,_0x2644f7['y'],_0x5e70b5);}else if(this[_0x2d88('0x3d')](_0x1ccdd8)){this['drawEmptySlot'](_0x2644f7['x']+_0x38947f,_0x2644f7['y'],_0x5e70b5);}this[_0x2d88('0x1c')](!![]);};Window_EquipSlot[_0x2d88('0x55')][_0x2d88('0xa7')]=function(_0xcd6ef0){if(this[_0x2d88('0xc8')]){var _0x41ee33=this[_0x2d88('0x97')](_0xcd6ef0);this[_0x2d88('0x80')](this[_0x2d88('0x20')]());this[_0x2d88('0x1c')](this[_0x2d88('0x3d')](_0xcd6ef0));this[_0x2d88('0x1e')](this['slotName'](_0xcd6ef0),_0x41ee33['x'],_0x41ee33['y'],0x8a,this[_0x2d88('0x1f')]());this[_0x2d88('0xcf')](this['getItemFromIndex'](_0xcd6ef0),_0x41ee33['x']+0x8a,_0x41ee33['y']);this[_0x2d88('0x1c')](!![]);}};Olivia[_0x2d88('0x5c')]['Weapon'][_0x2d88('0xa0')]=Window_EquipSlot[_0x2d88('0x55')][_0x2d88('0xaa')];Window_EquipSlot[_0x2d88('0x55')][_0x2d88('0xaa')]=function(){if(this[_0x2d88('0x26')]){var _0x58b53f=JsonEx[_0x2d88('0xc9')](this[_0x2d88('0xc8')]);if(this['index']()<$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x1){var _0x4ec17d=this[_0x2d88('0xc8')]['getSwapWeapons']()[this['index']()];}else{var _0x4ec17d=null;}_0x58b53f[_0x2d88('0x5b')](0x0,_0x4ec17d);this[_0x2d88('0x26')][_0x2d88('0x6a')](_0x58b53f);}Olivia['OctoBattle']['Weapon']['___Window_EquipSlot_updateHelp___'][_0x2d88('0xbf')](this);if(this[_0x2d88('0x26')]){this[_0x2d88('0x26')][_0x2d88('0x28')](null);}};Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0xae')]=Window_EquipItem[_0x2d88('0x55')][_0x2d88('0x5e')];Window_EquipItem[_0x2d88('0x55')][_0x2d88('0x5e')]=function(_0xe56078,_0x39abb9,_0x20e2d2,_0x26687f){this[_0x2d88('0x72')]=0x0;Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]['___Window_EquipItem_initialize___'][_0x2d88('0xbf')](this,_0xe56078,_0x39abb9,_0x20e2d2,_0x26687f);};Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]['___Window_EquipItem_setSlotId___']=Window_EquipItem[_0x2d88('0x55')][_0x2d88('0x90')];Window_EquipItem[_0x2d88('0x55')][_0x2d88('0x90')]=function(_0xfb776f){if(_0xfb776f<$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x1){weaponTypeId=_0xfb776f+0x1;_0xfb776f=0x0;if(this[_0x2d88('0x72')]!==weaponTypeId){this[_0x2d88('0x56')]=0x0;this[_0x2d88('0x72')]=weaponTypeId;this[_0x2d88('0x21')]();this['resetScroll']();return;}}else{_0xfb776f-=$dataSystem[_0x2d88('0x3b')][_0x2d88('0x4d')]-0x2;this[_0x2d88('0x72')]=0x0;}if(Imported[_0x2d88('0xc4')]){Yanfly[_0x2d88('0xc6')]['Window_EquipItem_setSlotId'][_0x2d88('0xbf')](this,_0xfb776f);}else{Olivia['OctoBattle']['Weapon'][_0x2d88('0x98')][_0x2d88('0xbf')](this,_0xfb776f);}};Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0x8c')]=Window_EquipItem[_0x2d88('0x55')][_0x2d88('0x50')];Window_EquipItem['prototype'][_0x2d88('0x50')]=function(_0x44e61a){if(Olivia[_0x2d88('0x5c')]['Weapon']['___Window_EquipItem_includes___'][_0x2d88('0xbf')](this,_0x44e61a)){if(!!_0x44e61a&&this[_0x2d88('0x56')]<=0x0){return this['_weaponTypeId']===_0x44e61a[_0x2d88('0x3f')];}else{return!![];}}else{return![];}};Window_EquipItem[_0x2d88('0x55')][_0x2d88('0xaa')]=function(){Window_ItemList['prototype'][_0x2d88('0xaa')][_0x2d88('0xbf')](this);if(!!this[_0x2d88('0xc8')]&&this[_0x2d88('0x26')]){var _0x28336c=JsonEx[_0x2d88('0xc9')](this[_0x2d88('0x26')][_0x2d88('0xc8')]);_0x28336c[_0x2d88('0x5b')](this[_0x2d88('0x56')],this[_0x2d88('0x59')]());this[_0x2d88('0x26')]['setTempActor'](_0x28336c);}};Olivia[_0x2d88('0x5c')][_0x2d88('0x87')]['___Window_ActorCommand_initialize___']=Window_ActorCommand[_0x2d88('0x55')][_0x2d88('0x5e')];Window_ActorCommand[_0x2d88('0x55')][_0x2d88('0x5e')]=function(){Olivia['OctoBattle'][_0x2d88('0x87')][_0x2d88('0xb7')][_0x2d88('0xbf')](this);if(Olivia[_0x2d88('0x5c')][_0x2d88('0x4a')][_0x2d88('0x9e')]){this['createWeaponArrowSprites']();}};Window_ActorCommand[_0x2d88('0x55')][_0x2d88('0x25')]=function(){this[_0x2d88('0x4')]=new Sprite_WindowArrow(this,_0x2d88('0x95'));this[_0x2d88('0x7')](this[_0x2d88('0x4')]);this[_0x2d88('0x92')]=new Sprite_WindowArrow(this,'right');this['addChild'](this[_0x2d88('0x92')]);};Olivia[_0x2d88('0x5c')]['Weapon'][_0x2d88('0x44')]=Window_ActorCommand[_0x2d88('0x55')][_0x2d88('0x49')];Window_ActorCommand[_0x2d88('0x55')]['addAttackCommand']=function(){Olivia[_0x2d88('0x5c')]['Weapon'][_0x2d88('0x44')][_0x2d88('0xbf')](this);if(Olivia['OctoBattle']['WeaponSwap']['WpnSwapShow']){this[_0x2d88('0xa8')]();}};Window_ActorCommand[_0x2d88('0x55')]['addWeaponSwapCommand']=function(){var _0x1f2506=Olivia['OctoBattle'][_0x2d88('0x4a')][_0x2d88('0xcb')];this[_0x2d88('0x12')](_0x1f2506,_0x2d88('0x7c'),this[_0x2d88('0x65')]());};Window_ActorCommand[_0x2d88('0x55')][_0x2d88('0x65')]=function(){if(this['_actor'][_0x2d88('0x32')]()){var _0x915cb0=0x0;var _0xb03e08=this[_0x2d88('0xc8')][_0x2d88('0xad')]();for(var _0x147829=0x0;_0x147829<_0xb03e08[_0x2d88('0x4d')];_0x147829++){var _0x1029da=_0xb03e08[_0x147829];if(!!_0x1029da){_0x915cb0+=0x1;if(_0x915cb0>=0x2){return!![];}}}}return![];};Window_ActorCommand[_0x2d88('0x55')][_0x2d88('0xc7')]=function(_0x5118c8){if(Olivia[_0x2d88('0x5c')]['WeaponSwap']['ShowIcons']){this[_0x2d88('0x82')](_0x5118c8);}Window_Command[_0x2d88('0x55')][_0x2d88('0xc7')][_0x2d88('0xbf')](this,_0x5118c8);};Window_ActorCommand['prototype'][_0x2d88('0x82')]=function(_0x42cf5b){if(this[_0x2d88('0xe')][_0x42cf5b]['symbol']==='attack'){var _0xbbcc8f=this[_0x2d88('0x7d')](_0x42cf5b);if(this[_0x2d88('0x2f')]()===_0x2d88('0x95')){var _0x2c0187=_0xbbcc8f[_0x2d88('0x19')]-Window_Base[_0x2d88('0x4f')]-0x2;}else{var _0x2c0187=_0xbbcc8f['x']+0x2;}var _0x5d7bb8=this[_0x2d88('0xc8')][_0x2d88('0xba')]()[0x0];if(!!_0x5d7bb8){var _0x54da40=_0x5d7bb8[_0x2d88('0xc3')];}else{var _0x54da40=0x4d;}this['drawIcon'](_0x54da40,_0x2c0187,_0xbbcc8f['y']+0x2);}};if(Olivia[_0x2d88('0x5c')][_0x2d88('0x4a')][_0x2d88('0xa2')]){Window_ActorCommand[_0x2d88('0x55')]['processCursorMove']=function(){if(this[_0x2d88('0x58')]&&Input[_0x2d88('0x30')]('right')&&this[_0x2d88('0xb6')]()==='attack'){this[_0x2d88('0xc8')][_0x2d88('0x11')](_0x2d88('0x0'));SoundManager[_0x2d88('0x9c')]();this[_0x2d88('0x21')]();}else if(this[_0x2d88('0x58')]&&Input[_0x2d88('0x30')](_0x2d88('0x95'))&&this[_0x2d88('0xb6')]()===_0x2d88('0x1b')){this['_actor'][_0x2d88('0x11')](_0x2d88('0x95'));SoundManager[_0x2d88('0x9c')]();this[_0x2d88('0x21')]();}else{Window_Command['prototype'][_0x2d88('0x53')][_0x2d88('0xbf')](this);}};}Window_ActorCommand[_0x2d88('0x55')][_0x2d88('0x78')]=function(){if(this[_0x2d88('0xb6')]()==='weaponSwap'){SoundManager['playEquip']();}else{Window_Command[_0x2d88('0x55')][_0x2d88('0x78')][_0x2d88('0xbf')](this);}};if(Imported[_0x2d88('0xc4')]&&Olivia[_0x2d88('0x5c')][_0x2d88('0x4a')][_0x2d88('0x6f')]){Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0x4e')]=Window_StatCompare[_0x2d88('0x55')]['refresh'];Window_StatCompare[_0x2d88('0x55')][_0x2d88('0x21')]=function(){Olivia[_0x2d88('0x5c')][_0x2d88('0x87')][_0x2d88('0x4e')][_0x2d88('0xbf')](this);if(!!this[_0x2d88('0xc8')]){this[_0x2d88('0x5a')]();}};Window_StatCompare[_0x2d88('0x55')][_0x2d88('0x5a')]=function(){this[_0x2d88('0x85')]('hit',0x0,this[_0x2d88('0x1f')]()*0x8);this[_0x2d88('0x85')](_0x2d88('0x74'),0x0,this[_0x2d88('0x1f')]()*0x9);this[_0x2d88('0x85')](_0x2d88('0xb0'),0x0,this[_0x2d88('0x1f')]()*0xa);};Window_StatCompare[_0x2d88('0x55')]['drawExtraParamItem']=function(_0x599a6b,_0x1f3d29,_0x47c9bc){this[_0x2d88('0x8d')](_0x1f3d29,_0x47c9bc,this[_0x2d88('0x46')][_0x2d88('0x19')],this[_0x2d88('0x1f')]());this[_0x2d88('0x91')](_0x47c9bc,_0x599a6b);this[_0x2d88('0x37')](_0x47c9bc,_0x599a6b);this[_0x2d88('0x73')](_0x47c9bc);if(this[_0x2d88('0x41')]){this['drawNewExtraParam'](_0x47c9bc,_0x599a6b);this['drawExtraParamDifference'](_0x47c9bc,_0x599a6b);}};Window_StatCompare[_0x2d88('0x55')][_0x2d88('0x91')]=function(_0x5506c3,_0x4d9c90){if(_0x4d9c90===_0x2d88('0x15')){var _0xcb2c49=Olivia['OctoBattle'][_0x2d88('0x4a')][_0x2d88('0x5f')];}else if(_0x4d9c90===_0x2d88('0x74')){var _0xcb2c49=Olivia[_0x2d88('0x5c')][_0x2d88('0x4a')][_0x2d88('0x61')];}else if(_0x4d9c90===_0x2d88('0xb0')){var _0xcb2c49=Olivia[_0x2d88('0x5c')]['WeaponSwap'][_0x2d88('0x9f')];}var _0x5f5b5c=this[_0x2d88('0x17')]();this[_0x2d88('0x80')](this[_0x2d88('0x20')]());this[_0x2d88('0x1e')](_0xcb2c49,_0x5f5b5c,_0x5506c3,this[_0x2d88('0x24')]);};Window_StatCompare['prototype']['drawCurrentExtraParam']=function(_0x5440d2,_0x4e562e){if(_0x4e562e==='hit'){var _0x54b64b=Math[_0x2d88('0x6')](this[_0x2d88('0xc8')]['hit']*0x64)+'%';}else if(_0x4e562e===_0x2d88('0x74')){var _0x54b64b=Math[_0x2d88('0x6')](this[_0x2d88('0xc8')]['eva']*0x64)+'%';}else if(_0x4e562e===_0x2d88('0xb0')){var _0x54b64b=Math['round'](this[_0x2d88('0xc8')][_0x2d88('0xb0')]*0x64)+'%';}var _0x5803e7=this[_0x2d88('0x46')][_0x2d88('0x19')]-this[_0x2d88('0x17')]();_0x5803e7-=this[_0x2d88('0x70')]*0x2+this[_0x2d88('0x2b')]+this[_0x2d88('0xb')];this[_0x2d88('0xca')]();this[_0x2d88('0x1e')](_0x54b64b,_0x5803e7,_0x5440d2,this[_0x2d88('0x70')],_0x2d88('0x0'));};Window_StatCompare['prototype'][_0x2d88('0xf')]=function(_0x37aa03,_0x54ef63){if(_0x54ef63===_0x2d88('0x15')){var _0x4ada62=Math[_0x2d88('0x6')](this[_0x2d88('0x41')][_0x2d88('0x15')]*0x64);var _0x19e608=_0x4ada62-Math[_0x2d88('0x6')](this[_0x2d88('0xc8')][_0x2d88('0x15')]*0x64);}else if(_0x54ef63===_0x2d88('0x74')){var _0x4ada62=Math[_0x2d88('0x6')](this['_tempActor']['eva']*0x64);var _0x19e608=_0x4ada62-Math[_0x2d88('0x6')](this[_0x2d88('0xc8')][_0x2d88('0x74')]*0x64);}else if(_0x54ef63===_0x2d88('0xb0')){var _0x4ada62=Math[_0x2d88('0x6')](this[_0x2d88('0x41')][_0x2d88('0xb0')]*0x64);var _0x19e608=_0x4ada62-Math[_0x2d88('0x6')](this['_actor'][_0x2d88('0xb0')]*0x64);}var _0x33a80a=this[_0x2d88('0x46')][_0x2d88('0x19')]-this[_0x2d88('0x17')]();_0x33a80a-=this['_paramValueWidth']+this['_bonusValueWidth'];var _0x2d7e2b=_0x4ada62+'%';this[_0x2d88('0x80')](this['paramchangeTextColor'](_0x19e608));this[_0x2d88('0x1e')](_0x2d7e2b,_0x33a80a,_0x37aa03,this[_0x2d88('0x70')],_0x2d88('0x0'));};Window_StatCompare[_0x2d88('0x55')][_0x2d88('0xd')]=function(_0x4838c3,_0x4b3109){var _0x317a44=this[_0x2d88('0x46')][_0x2d88('0x19')]-this[_0x2d88('0x17')]();_0x317a44-=this['_bonusValueWidth'];if(_0x4b3109==='hit'){var _0x3b0b66=Math['round'](this[_0x2d88('0x41')][_0x2d88('0x15')]*0x64);var _0x3662ee=_0x3b0b66-Math[_0x2d88('0x6')](this['_actor'][_0x2d88('0x15')]*0x64);}else if(_0x4b3109==='eva'){var _0x3b0b66=Math[_0x2d88('0x6')](this[_0x2d88('0x41')][_0x2d88('0x74')]*0x64);var _0x3662ee=_0x3b0b66-Math['round'](this[_0x2d88('0xc8')]['eva']*0x64);}else if(_0x4b3109===_0x2d88('0xb0')){var _0x3b0b66=Math[_0x2d88('0x6')](this[_0x2d88('0x41')]['cri']*0x64);var _0x3662ee=_0x3b0b66-Math['round'](this['_actor']['cri']*0x64);}if(_0x3662ee===0x0)return;this[_0x2d88('0x80')](this[_0x2d88('0x14')](_0x3662ee));var _0xfe5a7a=_0x3662ee+'%';if(_0x3662ee>0x0){_0xfe5a7a=_0x2d88('0x93')+_0xfe5a7a+')';}else{_0xfe5a7a='\x20('+_0xfe5a7a+')';}this[_0x2d88('0x1e')](_0xfe5a7a,_0x317a44,_0x4838c3,this[_0x2d88('0xb')],_0x2d88('0x95'));};}}

//=============================================================================
// Side Battle UI
//
// 1. Remove existing UI
// 2. Put UI elements on the side that automatically update
// 3. Slightly animated

if(Imported.YEP_BattleEngineCore&&Olivia.OctoBattle.SideBattleUI.Enabled){Olivia.OctoBattle.BattleUI=Olivia.OctoBattle.BattleUI||{};if(!Olivia.OctoBattle.SideBattleUI.WindowMasking){Olivia.OctoBattle.BattleUI.___WindowLayer_maskWindow___=WindowLayer.prototype._maskWindow;WindowLayer.prototype._maskWindow=function(window,shift){if(!!$gameParty&&$gameParty.inBattle()){return}Olivia.OctoBattle.BattleUI.___WindowLayer_maskWindow___.call(this,window,shift)}}Game_System.prototype.isSideView=function(){return true};Olivia.OctoBattle.BattleUI.___Game_Actor_refresh___=Game_Actor.prototype.refresh;Game_Actor.prototype.refresh=function(){Olivia.OctoBattle.BattleUI.___Game_Actor_refresh___.call(this);if($gameParty.inBattle()){this._needsStatusStateRefresh=true}};Scene_Battle.prototype.updateWindowPositions=function(){if(BattleManager.isInputting()){if(this._partyCommandWindow.active){this._partyCommandWindow.updatePosition()}if(this._actorCommandWindow.active){this._actorCommandWindow.updatePosition()}if(this._skillWindow.active){this._actorCommandWindow.updatePosition();this._skillWindow.updatePosition()}if(this._itemWindow.active){this._actorCommandWindow.updatePosition();this._itemWindow.updatePosition()}if(this._actorWindow.active){this._actorCommandWindow.updateFadeOut();this._skillWindow.updateFadeOut();this._itemWindow.updateFadeOut()}if(this._enemyWindow.active){this._actorCommandWindow.updateFadeOut();this._skillWindow.updateFadeOut();this._itemWindow.updateFadeOut()}}};Olivia.OctoBattle.BattleUI.___Scene_Battle_createStatusWindow___=Scene_Battle.prototype.createStatusWindow;Scene_Battle.prototype.createStatusWindow=function(){Olivia.OctoBattle.BattleUI.___Scene_Battle_createStatusWindow___.call(this);this.createSideStatusWindows()};Scene_Battle.prototype.createSideStatusWindows=function(){this._sideStatusWindows=[];for(var i=0;i<$gameParty.maxBattleMembers();i++){var newStatusWindow=new Window_BattleSideStatus(i);this._sideStatusWindows.push(newStatusWindow);this.addWindow(newStatusWindow)}};if(Olivia.OctoBattle.SideBattleUI.PositionActors){Sprite_Actor.prototype.setActorHome=function(index){var x=Math.round(eval(Olivia.OctoBattle.SideBattleUI.ActorPositionFormulaX));var y=Math.round(eval(Olivia.OctoBattle.SideBattleUI.ActorPositionFormulaY));this.setHome(x,y)}}if(Olivia.OctoBattle.SideBattleUI.PositionEnemies){Sprite_Enemy.prototype.setHome=function(x,y){x=Math.round(eval(Olivia.OctoBattle.SideBattleUI.EnemyPositionFormulaX));y=Math.round(eval(Olivia.OctoBattle.SideBattleUI.EnemyPositionFormulaY));Sprite_Battler.prototype.setHome.call(this,x,y)}}if(Olivia.OctoBattle.SideBattleUI.DimHelpWindow){Olivia.OctoBattle.BattleUI.___Window_Help_initialize___=Window_Help.prototype.initialize;Window_Help.prototype.initialize=function(numLines){Olivia.OctoBattle.BattleUI.___Window_Help_initialize___.call(this,numLines);if(SceneManager._scene instanceof Scene_Battle){this.opacity=0;this.showBackgroundDimmer()}};Window_Help.prototype.refreshDimmerBitmap=function(){if(this._dimmerSprite){var bitmap=this._dimmerSprite.bitmap;var w=this.width;var h=this.height;var m=this.standardPadding();var w1=Math.ceil(w/2);var w2=w1-Olivia.OctoBattle.SideBattleUI.StatusWidth;var h1=h-m*2;var c1=this.dimColor1();var c2=this.dimColor2();bitmap.resize(w,h);bitmap.fillRect(0,m,w1,h1,c1);bitmap.gradientFillRect(w1,m,w2,h1,c1,c2);this._dimmerSprite.setFrame(0,0,w,h)}}}Window_PartyCommand.prototype.numVisibleRows=function(){if(!this._list){return 4}return Math.min(Math.ceil(this.maxItems()/this.maxCols()),Olivia.OctoBattle.SideBattleUI.WindowMaxList)};Window_PartyCommand.prototype.scaleRate=function(){return Olivia.OctoBattle.SideBattleUI.WindowScale};Window_PartyCommand.prototype.lineHeight=function(){return Math.round(Window_Command.prototype.lineHeight.call(this)*this.scaleRate())};Window_PartyCommand.prototype.standardFontSize=function(){return Math.round(Window_Command.prototype.standardFontSize.call(this)*this.scaleRate())};Window_PartyCommand.prototype.standardPadding=function(){return Math.round(Window_Command.prototype.standardPadding.call(this)*this.scaleRate())};Window_PartyCommand.prototype.textPadding=function(){return Math.round(Window_Command.prototype.textPadding.call(this)*this.scaleRate())};Window_PartyCommand.prototype.windowWidth=function(){return Olivia.OctoBattle.SideBattleUI.WindowCmdWidth};Window_PartyCommand.prototype.drawIcon=function(iconIndex,x,y){var bitmap=ImageManager.loadSystem("IconSet");var pw=Window_Base._iconWidth;var ph=Window_Base._iconHeight;var sx=iconIndex%16*pw;var sy=Math.floor(iconIndex/16)*ph;var rate=this.scaleRate();this.contents.blt(bitmap,sx,sy,pw,ph,x,y,Math.round(pw*rate),Math.round(ph*rate))};Window_PartyCommand.prototype.createContents=function(){this.height=this.windowHeight();Window_Command.prototype.createContents.call(this)};Window_PartyCommand.prototype.updatePosition=function(){if(!!$gameParty.aliveMembers()[0]){var actor=$gameParty.aliveMembers()[0];var x=actor.spritePosX()-Math.round(actor.spriteWidth()/2)-this.width;var y=actor.spritePosY()-actor.spriteHeight();this.x=x+(this._positionXCorrection||0);this.y=y+(this._positionYCorrection||0);Window_PartyCommand.prototype.updateFadeIn.call(this);Window_PartyCommand.prototype.correctScreenPosition.call(this)}};Window_PartyCommand.prototype.correctScreenPosition=function(){this.x=Math.min(Graphics.boxWidth-this.width,this.x);this.y=Math.min(Graphics.boxHeight-this.height,this.y)};Window_PartyCommand.prototype.updateFadeIn=function(){this.opacity=255;this.contentsOpacity=255};Window_PartyCommand.prototype.updateFadeOut=function(){this.opacity-=16;this.contentsOpacity-=16};Window_ActorCommand.prototype.numVisibleRows=function(){return Window_PartyCommand.prototype.numVisibleRows.call(this)};Window_ActorCommand.prototype.scaleRate=function(){return Window_PartyCommand.prototype.scaleRate.call(this)};Window_ActorCommand.prototype.lineHeight=function(){return Window_PartyCommand.prototype.lineHeight.call(this)};Window_ActorCommand.prototype.standardFontSize=function(){return Window_PartyCommand.prototype.standardFontSize.call(this)};Window_ActorCommand.prototype.standardPadding=function(){return Window_PartyCommand.prototype.standardPadding.call(this)};Window_ActorCommand.prototype.textPadding=function(){return Window_PartyCommand.prototype.textPadding.call(this)};Window_ActorCommand.prototype.windowWidth=function(){return Window_PartyCommand.prototype.windowWidth.call(this)};Window_ActorCommand.prototype.drawIcon=function(iconIndex,x,y){Window_PartyCommand.prototype.drawIcon.call(this,iconIndex,x,y)};Window_ActorCommand.prototype.createContents=function(){this.height=this.windowHeight();Window_Command.prototype.createContents.call(this);this.updatePosition()};Window_ActorCommand.prototype.updatePosition=function(){if(this._actor){Window_PartyCommand.prototype.updateFadeIn.call(this);var x=this._actor.spritePosX()+Math.round(this._actor.spriteWidth()/2);x=Math.min(Graphics.boxWidth-this.width,x);var y=this._actor.spritePosY()-this._actor.spriteHeight();y=Math.min(Graphics.boxHeight-this.height,y);this.x=x+(this._positionXCorrection||0);this.y=y+(this._positionYCorrection||0);Window_PartyCommand.prototype.updateFadeIn.call(this);Window_PartyCommand.prototype.correctScreenPosition.call(this)}};Window_ActorCommand.prototype.updateFadeOut=function(){Window_PartyCommand.prototype.updateFadeOut.call(this)};Olivia.OctoBattle.BattleUI.___Window_ActorCommand_setup___=Window_ActorCommand.prototype.setup;Window_ActorCommand.prototype.setup=function(actor){Olivia.OctoBattle.BattleUI.___Window_ActorCommand_setup___.call(this,actor);this.updatePosition()};Window_BattleActor.prototype.processCursorMove=function(){if(this.isCursorMovable()&&Input.isRepeated("right")){var lastIndex=this.index();this.cursorDown(Input.isTriggered("right"));if(this.index()!==lastIndex){SoundManager.playCursor()}}else if(this.isCursorMovable()&&Input.isRepeated("left")){var lastIndex=this.index();this.cursorUp(Input.isTriggered("left"));if(this.index()!==lastIndex){SoundManager.playCursor()}}else{Window_BattleStatus.prototype.processCursorMove.call(this)}};Window_BattleEnemy.prototype.processCursorMove=function(){if(this.isCursorMovable()&&Input.isRepeated("down")){var lastIndex=this.index();this.cursorRight(Input.isTriggered("down"));if(this.index()!==lastIndex){SoundManager.playCursor()}}else if(this.isCursorMovable()&&Input.isRepeated("up")){var lastIndex=this.index();this.cursorLeft(Input.isTriggered("up"));if(this.index()!==lastIndex){SoundManager.playCursor()}}else{Window_Selectable.prototype.processCursorMove.call(this)}};Olivia.OctoBattle.BattleUI.___Window_BattleStatus_initialize___=Window_BattleStatus.prototype.initialize;Window_BattleStatus.prototype.initialize=function(){Olivia.OctoBattle.BattleUI.___Window_BattleStatus_initialize___.call(this);if(SceneManager._scene instanceof Scene_Battle){this.y=Graphics.boxHeight*3}};Olivia.OctoBattle.BattleUI.___Window_BattleStatus_drawItem___=Window_BattleStatus.prototype.drawItem;Window_BattleStatus.prototype.drawItem=function(index){if(!SceneManager._scene instanceof Scene_Battle){Olivia.OctoBattle.BattleUI.___Window_BattleStatus_drawItem___.call(this,index)}};Olivia.OctoBattle.BattleUI.___Window_BattleSkill_initialize___=Window_BattleSkill.prototype.initialize;Window_BattleSkill.prototype.initialize=function(x,y,width,height){y=Graphics.boxHeight*3;width=Olivia.OctoBattle.SideBattleUI.WindowListWidth;height=100;Olivia.OctoBattle.BattleUI.___Window_BattleSkill_initialize___.call(this,x,y,width,height);this.y=Graphics.boxHeight*3};Window_BattleSkill.prototype.scaleRate=function(){return Window_PartyCommand.prototype.scaleRate.call(this)};Window_BattleSkill.prototype.lineHeight=function(){return Window_PartyCommand.prototype.lineHeight.call(this)};Window_BattleSkill.prototype.standardFontSize=function(){return Window_PartyCommand.prototype.standardFontSize.call(this)};Window_BattleSkill.prototype.standardPadding=function(){return Window_PartyCommand.prototype.standardPadding.call(this)};Window_BattleSkill.prototype.textPadding=function(){return Window_PartyCommand.prototype.textPadding.call(this)};Window_BattleSkill.prototype.drawIcon=function(iconIndex,x,y){Window_PartyCommand.prototype.drawIcon.call(this,iconIndex,x,y)};Window_BattleSkill.prototype.maxCols=function(){return 1};Window_BattleSkill.prototype.maxListHeight=function(){return Math.min(this.maxItems(),Olivia.OctoBattle.SideBattleUI.WindowMaxList)};Window_BattleSkill.prototype.createContents=function(){this.height=this.fittingHeight(this.maxListHeight());Window_SkillList.prototype.createContents.call(this);this.updatePosition()};Window_BattleSkill.prototype.setActor=function(actor){Window_SkillList.prototype.setActor.call(this,actor);this.updatePosition()};Window_BattleSkill.prototype.updatePosition=function(){this._positionXCorrection=16;this._positionYCorrection=16;Window_ActorCommand.prototype.updatePosition.call(this)};Window_BattleSkill.prototype.updateFadeOut=function(){Window_PartyCommand.prototype.updateFadeOut.call(this)};Window_BattleSkill.prototype.drawItemName=function(item,x,y,width){width=width||312;if(item){var iconBoxWidth=Math.round(Window_Base._iconWidth*this.scaleRate())+4;this.resetTextColor();this.drawIcon(item.iconIndex,x+2,y+2);this.drawText(item.name,x+iconBoxWidth,y,width-iconBoxWidth);if(Imported.YEP_InstantCast){this.drawInstantIcon(item,x,y,width)}}};Olivia.OctoBattle.BattleUI.___Window_BattleItem_initialize___=Window_BattleItem.prototype.initialize;Window_BattleItem.prototype.initialize=function(x,y,width,height){y=Graphics.boxHeight*3;width=Olivia.OctoBattle.SideBattleUI.WindowListWidth;height=100;this._positionXCorrection=16;this._positionYCorrection=16;Olivia.OctoBattle.BattleUI.___Window_BattleItem_initialize___.call(this,x,y,width,height)};Window_BattleItem.prototype.scaleRate=function(){return Window_PartyCommand.prototype.scaleRate.call(this)};Window_BattleItem.prototype.lineHeight=function(){return Window_PartyCommand.prototype.lineHeight.call(this)};Window_BattleItem.prototype.standardFontSize=function(){return Window_PartyCommand.prototype.standardFontSize.call(this)};Window_BattleItem.prototype.standardPadding=function(){return Window_PartyCommand.prototype.standardPadding.call(this)};Window_BattleItem.prototype.textPadding=function(){return Window_PartyCommand.prototype.textPadding.call(this)};Window_BattleItem.prototype.drawIcon=function(iconIndex,x,y){Window_PartyCommand.prototype.drawIcon.call(this,iconIndex,x,y)};Window_BattleItem.prototype.maxCols=function(){return 1};Window_BattleItem.prototype.maxListHeight=function(){return Math.min(this.maxItems(),Olivia.OctoBattle.SideBattleUI.WindowMaxList)};Window_BattleItem.prototype.createContents=function(){this.height=this.fittingHeight(this.maxListHeight());Window_ItemList.prototype.createContents.call(this);this.updatePosition()};Olivia.OctoBattle.BattleUI.___Window_BattleItem_show___=Window_BattleItem.prototype.show;Window_BattleItem.prototype.show=function(){Olivia.OctoBattle.BattleUI.___Window_BattleItem_show___.call(this);this.updatePosition()};Window_BattleItem.prototype.updatePosition=function(){if(!!BattleManager.actor()){var actor=BattleManager.actor();var x=actor.spritePosX()+Math.round(actor.spriteWidth()/2);var y=actor.spritePosY()-actor.spriteHeight();this.x=x+(this._positionXCorrection||0);this.y=y+(this._positionYCorrection||0);Window_PartyCommand.prototype.updateFadeIn.call(this);Window_PartyCommand.prototype.correctScreenPosition.call(this)}};Window_BattleItem.prototype.updateFadeOut=function(){Window_PartyCommand.prototype.updateFadeOut.call(this)};Window_BattleItem.prototype.drawItemName=function(item,x,y,width){Window_BattleSkill.prototype.drawItemName.call(this,item,x,y,width)};function Window_BattleSideBase(){this.initialize.apply(this,arguments)}Window_BattleSideBase.prototype=Object.create(Window_Base.prototype);Window_BattleSideBase.prototype.constructor=Window_BattleSideBase;Window_BattleSideBase.prototype.initialize=function(x,y,width,height,index){this._index=index;Window_Base.prototype.initialize.call(this,x,y,width,height);this.opacity=0};Window_BattleSideBase.prototype.setNewActor=function(){this._actor=$gameParty.members()[this._index];this.refresh()};Window_BattleSideBase.prototype.scaleRate=function(){return Olivia.OctoBattle.SideBattleUI.StatusScale};Window_BattleSideBase.prototype.lineHeight=function(){return Math.round(Window_Base.prototype.lineHeight.call(this)*this.scaleRate())};Window_BattleSideBase.prototype.standardFontSize=function(){return Math.round(Window_Base.prototype.standardFontSize.call(this)*this.scaleRate())};Window_BattleSideBase.prototype.standardPadding=function(){return 0};Window_BattleSideBase.prototype.textPadding=function(){return Math.round(Window_Base.prototype.textPadding.call(this)*this.scaleRate())};Window_BattleSideBase.prototype.drawIcon=function(iconIndex,x,y){var bitmap=ImageManager.loadSystem("IconSet");var pw=Window_Base._iconWidth;var ph=Window_Base._iconHeight;var sx=iconIndex%16*pw;var sy=Math.floor(iconIndex/16)*ph;var rate=this.scaleRate();this.contents.blt(bitmap,sx,sy,pw,ph,x,y,Math.round(pw*rate),Math.round(ph*rate))};Window_BattleSideBase.prototype.refresh=function(){this._actor=$gameParty.members()[this._index];this.contents.clear()};Window_BattleSideBase.prototype.update=function(){Window_Base.prototype.update.call(this);if(this._actor!==$gameParty.members()[this._index]){this.setNewActor()}if(BattleManager._phase!=="battleEnd"&&this.checkRefreshConditions()&&!BattleManager._victoryPhase&&!BattleManager._hideOTBTurnDisplay){this.refresh()}};Window_BattleSideBase.prototype.checkRefreshConditions=function(){return false};function Window_BattleSideName(){this.initialize.apply(this,arguments)}Window_BattleSideName.prototype=Object.create(Window_BattleSideBase.prototype);Window_BattleSideName.prototype.constructor=Window_BattleSideName;Window_BattleSideName.prototype.initialize=function(x,y,width,height,index){Window_BattleSideBase.prototype.initialize.call(this,x,y,width,height,index);this.refresh()};Window_BattleSideName.prototype.refresh=function(){Window_BattleSideBase.prototype.refresh.call(this);if(!!this._actor){this.drawActorName(this._actor,this.textPadding(),0,this.width);this._actorName=this._actor.name()}};Window_BattleSideName.prototype.checkRefreshConditions=function(){if(!!this._actor){return this._actorName!==this._actor.name()}else{return Window_BattleSideBase.prototype.checkRefreshConditions.call(this)}};function Window_BattleSideShield(){this.initialize.apply(this,arguments)}Window_BattleSideShield.prototype=Object.create(Window_BattleSideBase.prototype);Window_BattleSideShield.prototype.constructor=Window_BattleSideShield;Window_BattleSideShield.prototype.initialize=function(x,y,width,height,index){Window_BattleSideBase.prototype.initialize.call(this,x,y,width,height,index);this.refresh()};Window_BattleSideShield.prototype.lineHeight=function(){return Window_Base.prototype.lineHeight.call(this)};Window_BattleSideShield.prototype.drawIcon=function(iconIndex,x,y){Window_Base.prototype.drawIcon.call(this,iconIndex,x,y)};Window_BattleSideShield.prototype.refresh=function(){Window_BattleSideBase.prototype.refresh.call(this);if(!!this._actor){this.drawBreakShieldIcon(this._actor,0,0);this._breakShield=this._actor.currentBreakShield()}};Window_BattleSideShield.prototype.checkRefreshConditions=function(){if(!!this._actor){return this._breakShield!==this._actor.currentBreakShield()}else{return Window_BattleSideBase.prototype.checkRefreshConditions.call(this)}};function Window_BattleSideHP(){this.initialize.apply(this,arguments)}Window_BattleSideHP.prototype=Object.create(Window_BattleSideBase.prototype);Window_BattleSideHP.prototype.constructor=Window_BattleSideHP;Window_BattleSideHP.prototype.initialize=function(x,y,width,height,index){Window_BattleSideBase.prototype.initialize.call(this,x,y,width,height,index);this.refresh()};Window_BattleSideHP.prototype.gaugeHeight=function(){return Olivia.OctoBattle.SideBattleUI.GaugeHeight};Window_BattleSideHP.prototype.refresh=function(){Window_BattleSideBase.prototype.refresh.call(this);if(!!this._actor){this.drawActorHp(this._actor,this.textPadding(),0,Olivia.OctoBattle.SideBattleUI.GaugeWidth);this._hp=this._actor.hp;this._mhp=this._actor.mhp}};Window_BattleSideHP.prototype.checkRefreshConditions=function(){if(!!this._actor){return this._hp!==this._actor.hp||this._mhp!==this._actor.mhp}else{return Window_BattleSideBase.prototype.checkRefreshConditions.call(this)}};function Window_BattleSideMP(){this.initialize.apply(this,arguments)}Window_BattleSideMP.prototype=Object.create(Window_BattleSideBase.prototype);Window_BattleSideMP.prototype.constructor=Window_BattleSideMP;Window_BattleSideMP.prototype.initialize=function(x,y,width,height,index){Window_BattleSideBase.prototype.initialize.call(this,x,y,width,height,index);this.refresh()};Window_BattleSideMP.prototype.gaugeHeight=function(){return Olivia.OctoBattle.SideBattleUI.GaugeHeight};Window_BattleSideMP.prototype.refresh=function(){Window_BattleSideBase.prototype.refresh.call(this);if(!!this._actor){this.drawActorMp(this._actor,this.textPadding(),0,Olivia.OctoBattle.SideBattleUI.GaugeWidth);this._mp=this._actor.mp;this._mmp=this._actor.mmp}};Window_BattleSideMP.prototype.checkRefreshConditions=function(){if(!!this._actor){return this._mp!==this._actor.mp||this._mmp!==this._actor.mmp}else{return Window_BattleSideBase.prototype.checkRefreshConditions.call(this)}};function Window_BattleSideTP(){this.initialize.apply(this,arguments)}Window_BattleSideTP.prototype=Object.create(Window_BattleSideBase.prototype);Window_BattleSideTP.prototype.constructor=Window_BattleSideMP;Window_BattleSideTP.prototype.initialize=function(x,y,width,height,index){Window_BattleSideBase.prototype.initialize.call(this,x,y,width,height,index);this.refresh()};Window_BattleSideTP.prototype.gaugeHeight=function(){return Olivia.OctoBattle.SideBattleUI.GaugeHeight};Window_BattleSideTP.prototype.refresh=function(){Window_BattleSideBase.prototype.refresh.call(this);if(!!this._actor){this.drawActorTp(this._actor,this.textPadding(),0,Olivia.OctoBattle.SideBattleUI.GaugeWidth);this._mt=this._actor.tp}};Window_BattleSideTP.prototype.checkRefreshConditions=function(){if(!!this._actor){return this._tp!==this._actor.tp}else{return Window_BattleSideBase.prototype.checkRefreshConditions.call(this)}};function Window_BattleSideBoost(){this.initialize.apply(this,arguments)}Window_BattleSideBoost.prototype=Object.create(Window_BattleSideBase.prototype);Window_BattleSideBoost.prototype.constructor=Window_BattleSideBoost;Window_BattleSideBoost.prototype.initialize=function(x,y,width,height,index){Window_BattleSideBase.prototype.initialize.call(this,x,y,width,height,index);this.refresh()};Window_BattleSideBoost.prototype.lineHeight=function(){return Window_Base.prototype.lineHeight.call(this)};Window_BattleSideBoost.prototype.drawIcon=function(iconIndex,x,y){Window_Base.prototype.drawIcon.call(this,iconIndex,x,y)};Window_BattleSideBoost.prototype.refresh=function(){Window_BattleSideBase.prototype.refresh.call(this);if(!!this._actor){this.drawBoostIcons(this._actor,0,0);this._boostCount=this._actor.storedBP()}};Window_BattleSideBoost.prototype.checkRefreshConditions=function(){if(!!this._actor){return this._boostCount!==this._actor.storedBP()}else{return Window_BattleSideBase.prototype.checkRefreshConditions.call(this)}};function Window_BattleSideStates(){this.initialize.apply(this,arguments)}Window_BattleSideStates.prototype=Object.create(Window_BattleSideBase.prototype);Window_BattleSideStates.prototype.constructor=Window_BattleSideStates;Window_BattleSideStates.prototype.initialize=function(x,y,width,height,index){width=Olivia.OctoBattle.SideBattleUI.StatesMax*Window_Base._iconWidth+4;x-=width;Window_BattleSideBase.prototype.initialize.call(this,x,y,width,height,index);this.refresh()};Window_BattleSideStates.prototype.lineHeight=function(){return Window_Base.prototype.lineHeight.call(this)};Window_BattleSideStates.prototype.drawIcon=function(iconIndex,x,y){Window_Base.prototype.drawIcon.call(this,iconIndex,x,y)};Window_BattleSideStates.prototype.refresh=function(){Window_BattleSideBase.prototype.refresh.call(this);if(!!this._actor){var x=this.contents.width-2;x-=Math.min(Olivia.OctoBattle.SideBattleUI.StatesMax,this._actor.allIcons().length)*Window_Base._iconWidth;this.drawActorIcons(this._actor,x,0,this.contents.width-2-x);this._actor._needsStatusStateRefresh=undefined}};Window_BattleSideStates.prototype.checkRefreshConditions=function(){if(!!this._actor){return!!this._actor._needsStatusStateRefresh}else{return Window_BattleSideBase.prototype.checkRefreshConditions.call(this)}};function Window_BattleSideStatus(){this.initialize.apply(this,arguments)}Window_BattleSideStatus.prototype=Object.create(Window_BattleSideBase.prototype);Window_BattleSideStatus.prototype.constructor=Window_BattleSideStatus;Window_BattleSideStatus.prototype.initialize=function(index){var width=Olivia.OctoBattle.SideBattleUI.StatusWidth;var height=this.fittingHeight(4.5);if($dataSystem.optDisplayTp){height+=this.lineHeight()}var x=Graphics.boxWidth-width;var y=height*index+Olivia.OctoBattle.SideBattleUI.CeilingBuffer;this._targetX=this._homeX=x;this._targetY=this._homeY=y;width+=Olivia.OctoBattle.SideBattleUI.ActiveBattlerMove*2;Window_BattleSideBase.prototype.initialize.call(this,x,y,width,height,index);this.createSubWindows()};Window_BattleSideStatus.prototype.createSubWindows=function(){var width=this.width-Olivia.OctoBattle.SideBattleUI.ActiveBattlerMove*2;var height=Window_Base.prototype.lineHeight.call(this);var index=this._index;var x=0;var y=Math.ceil(this.lineHeight()/4);var x1=-1*Window_Base._iconWidth-2;var y1=this.lineHeight()-2;this.addChild(new Window_BattleSideName(x,y,width,height,index));if(Olivia.OctoBattle.BoostPoint&&Olivia.OctoBattle.BoostPoint.Enabled){x+=8;y+=this.lineHeight();this.addChild(new Window_BattleSideBoost(x,y,width-x,height,index))}x+=8;y+=this.lineHeight();this.addChild(new Window_BattleSideHP(x,y,width-x,height,index));x+=8;y+=this.lineHeight();this.addChild(new Window_BattleSideMP(x,y,width-x,height,index));if($dataSystem.optDisplayTp){x+=8;y+=this.lineHeight();this.addChild(new Window_BattleSideTP(x,y,width-x,height,index))}if(Olivia.OctoBattle.BreakShield&&Olivia.OctoBattle.BreakShield.Enabled){if(Olivia.OctoBattle.BreakShield.Actors&&Olivia.OctoBattle.BreakShield.ShowActorShield){this.addChild(new Window_BattleSideShield(x1,y1,width,height,index));y1+=Window_Base._iconHeight+2}}this.addChild(new Window_BattleSideStates(0,y1,width,height,index))};Window_BattleSideStatus.prototype.refresh=function(){this.contents.clear();if(!!this._actor){var c1=this.dimColor1();var c2=this.dimColor2();var w1=Math.ceil(this.width/4);var w2=this.width-w1;var h=this.height;this.contents.gradientFillRect(0,0,w1,h,c2,c1);this.contents.fillRect(w1,0,w2,h,c1)}};Window_BattleSideStatus.prototype.update=function(){Window_BattleSideBase.prototype.update.call(this);if(!!this._actor){this.updatePosition()}};Window_BattleSideStatus.prototype.updatePosition=function(){this._cursorAll=false;if(this._actor===BattleManager.actor()){this._targetX=this._homeX-Olivia.OctoBattle.SideBattleUI.ActiveBattlerMove;this._cursorAll=true}else if(this._actor===BattleManager._subject){this._targetX=this._homeX-Olivia.OctoBattle.SideBattleUI.ActiveBattlerMove}else if(this._actor.isSelected()){this._targetX=this._homeX-Olivia.OctoBattle.SideBattleUI.SelectBattlerMove}else{this._targetX=this._homeX}var moveSpeed=Olivia.OctoBattle.SideBattleUI.WindowMoveSpeed;if(this._targetX>this.x){this.x=Math.min(this.x+moveSpeed,this._targetX)}else if(this._targetX<this.x){this.x=Math.max(this.x-moveSpeed,this._targetX)}}}

//=============================================================================
// Victory HUD
//
// 1. Display Gold earned, EXP earned, JP earned
// 2. Display EXP progress and JP total
// 3. Display item list

var _0x39ce=['calculateNextLevelConstants','isWeapon','updateLevelUpSpriteScale','dimColor1','string','drawForegroundJPLabel','drawText','_levelUpSprite','_skipVictoryMusic','_levelText','_ending','___Game_Interpreter_pluginCommand___','RewardResultsFontSize','Enabled','YEP_JobPoints','createGaugeSprite','toGroup','fillStyle','playSe','width','Param','ItemQuantitySize','_gaugeSprite','length','match','drawItemNumber','initMembers','constructor','drawForeground','createActorWindows','YEP_CoreEngine','shouldDisplayLevelUp','ActorEXPFontSize','drawActorJpInformation','makeTempActors','GaugeOutline','isBusy','YEP_X_ActSeqPack3','ActorLevelFormat','setupConstants','LevelUpText','beginPath','apply','drawForegroundGaugeBack','drawBackgroundMajorFadeOut','moveTo','updateBattleEnd','createItemListWindow','drawForegroundActorName','maxLevel','_dropArmors','_exp','processVictory','_jpTarget','push','_dropItems','_tempActors','extractDrops','drawActorExpInformation','LevelUpTextFontSize','$&,','ZoomInTransition','fill','BackgroundDimHeight','drawForgreoundVictoryText','children','ExpNextFontColor','initialize','_index','VictoryBgm','playVictoryMe','right','call','opacity','textWidth','gainRewards','updateLevelUpSpriteFade','ZoomY','_continueWindow','_maxLevel','ContinueText','hideAllWindows','drawForegroundItemsObtained','activate','startVictoryZoom','___Scene_Battle_terminate___','isArmor','currentExp','battleEnd','SideThickness','makeRewards','endBattle','drawBackgroundRewardStrip','createVictoryWindows','forEach','removeBattleStates','TransitionPower','TextVictory','ExpNextFontSize','createContinueWindow','ZoomScale','format','performVictory','_phase','_nextLevelExp','playLevelUpSound','replayBgmAndBgs','playVictoryBgm','YEP_BattleEngineCore','ZoomX','members','show','ActorJPFontSize','strokeStyle','center','dimColor2','playBgm','scale','___BattleManager_isBusy___','replace','height','gold','changeTextColor','drawBattlePolygon','_jp','levelUp','terminate','ExpCurrentFontSize','resetFontSettings','_windowLayer','expForLevel','_currentLevelExp','clear','prototype','makeItemList','hide','_scene','createSubWindow','createSubWindows','_jpTextWidth','boxHeight','drawTextEx','_context','makeDeepCopy','changePaintOpacity','ExpGaugeColor1','Victory','bind','gaugeBackColor','lineWidth','drawForegroundRewardText','textColor','textPadding','cancel','_setDirty','_duration','addChildToBack','_level','ActorNameFontSize','fillRect','updateActorExp','_expWidth','_gaugeWidth','anchor','isMaxLevel','contentsOpacity','_dropWeapons','isEnabled','needsNumber','_data','endVictoryPhase','maxCols','TextItems','fontSize','lineHeight','ExpGaugeColor2','___BattleManager_initMembers___','min','_subWindow','drawBackgroundStrip','createLevelUpSprite','gradientFillRect','create','sort','items','contains','_logWindow','_rewards','ExpGaugeHeight','refresh','isRepeated','select','name','drawBackgroundRewardStrips','TextVictoryFontSize','globalAlpha','skipVictoryAftermath','update','lineTo','drawActorLevelInformation','RewardResultsFontColor','___Game_System_initialize___','round','_victoryPhase','contents','save','RewardCategoryFontSize','drawBackground','_itemWindow','_expTarget','translucentOpacity','skipVictoryMusic','drawForegroundRewards','isItem','___Game_Actor_shouldDisplayLevelUp___','standardPadding','startBattleZoom','isTriggered','toLocaleString','OctoBattle','floor','processReady','getCount','LevelUpTextColor','pluginCommand','normalColor','level','_cameraX','_cameraY','MiddleThickness','exp','updateGaugeSpriteWidth','textWidthEx','_victoryWindow','Util','_actor','_skipVictoryAftermath','ceil','_levelUp','numItems','bitmap','RewardCategoryFontColor','startZoom','setCameraDuration','VictoryUI','_tempActor','inBattle','_playLevelUpSound','addChild','boxWidth','_levelUpSpriteFade'];(function(_0x1ba0f3,_0x39ce1f){var _0x3084db=function(_0x54004f){while(--_0x54004f){_0x1ba0f3['push'](_0x1ba0f3['shift']());}};_0x3084db(++_0x39ce1f);}(_0x39ce,0xd8));var _0x3084=function(_0x1ba0f3,_0x39ce1f){_0x1ba0f3=_0x1ba0f3-0x0;var _0x3084db=_0x39ce[_0x1ba0f3];return _0x3084db;};if(Olivia['OctoBattle'][_0x3084('0x1c')][_0x3084('0x30')]){Olivia[_0x3084('0x3')][_0x3084('0xb5')]=Olivia[_0x3084('0x3')][_0x3084('0xb5')]||{};Bitmap[_0x3084('0xa8')][_0x3084('0x9e')]=function(_0x39a05f,_0x46bd10,_0x4b3947,_0x1611fc,_0x16cdea){var _0x378bc4=this[_0x3084('0xb1')];_0x378bc4[_0x3084('0xf0')]();_0x378bc4[_0x3084('0x4c')]();_0x378bc4[_0x3084('0x50')](_0x39a05f[0x0],_0x39a05f[0x1]);for(var _0x52a185=0x2;_0x52a185<_0x39a05f[_0x3084('0x3a')];_0x52a185+=0x2){_0x378bc4[_0x3084('0xe9')](_0x39a05f[_0x52a185],_0x39a05f[_0x52a185+0x1]);}_0x378bc4[_0x3084('0xe9')](_0x39a05f[0x0],_0x39a05f[0x1]);_0x378bc4[_0x3084('0x94')]=_0x46bd10;_0x378bc4[_0x3084('0xb8')]=_0x4b3947;if(_0x16cdea){_0x378bc4['stroke']();}_0x378bc4[_0x3084('0xe6')]=_0x1611fc;_0x378bc4[_0x3084('0x34')]=_0x46bd10;_0x378bc4[_0x3084('0x61')]();_0x378bc4[_0x3084('0xe6')]=0x0;_0x378bc4['restore']();this[_0x3084('0xbd')]();};Olivia[_0x3084('0x3')][_0x3084('0xb5')][_0x3084('0xd3')]=BattleManager['initMembers'];BattleManager[_0x3084('0x3d')]=function(){Olivia[_0x3084('0x3')][_0x3084('0xb5')][_0x3084('0xd3')][_0x3084('0x6b')](this);this[_0x3084('0xee')]=![];};Olivia[_0x3084('0x3')][_0x3084('0xb5')][_0x3084('0x99')]=BattleManager[_0x3084('0x47')];BattleManager[_0x3084('0x47')]=function(){if(this[_0x3084('0x8a')]===_0x3084('0x7b')&&this['_victoryPhase']){return!![];}else{return Olivia[_0x3084('0x3')][_0x3084('0xb5')][_0x3084('0x99')][_0x3084('0x6b')](this);}};BattleManager[_0x3084('0x57')]=function(){this[_0x3084('0xdd')][_0x3084('0xa7')]();this[_0x3084('0xee')]=!![];if(this[_0x3084('0xa4')]){this[_0x3084('0xa4')]['x']=0x0;}this[_0x3084('0x8a')]=_0x3084('0x7b');$gameParty[_0x3084('0x82')]();if(!$gameSystem['skipVictoryMusic']()&&!$gameSystem[_0x3084('0xe7')]()){this[_0x3084('0x69')]();this[_0x3084('0x8e')]();}this[_0x3084('0x45')]();this[_0x3084('0x7d')]();this[_0x3084('0x6e')]();this[_0x3084('0x7e')](0x0);if($gameSystem[_0x3084('0xe7')]()){setTimeout(BattleManager[_0x3084('0x51')]['bind'](this),0x3e8);}else{if(Olivia[_0x3084('0x3')][_0x3084('0x1c')]['ZoomInTransition']){this[_0x3084('0x77')]();}$gameParty[_0x3084('0x89')]();setTimeout(SceneManager['_scene'][_0x3084('0x74')][_0x3084('0xb6')](SceneManager[_0x3084('0xab')]),Olivia['OctoBattle'][_0x3084('0x1c')]['WaitHideWindows']);setTimeout(SceneManager[_0x3084('0xab')][_0x3084('0x80')][_0x3084('0xb6')](SceneManager['_scene']),Olivia[_0x3084('0x3')][_0x3084('0x1c')]['WaitDisplayVictory']);}};BattleManager[_0x3084('0x8e')]=function(){AudioManager[_0x3084('0x97')](Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x68')]);};BattleManager[_0x3084('0x45')]=function(){var _0x1514f0=$gameParty[_0x3084('0x91')]();this[_0x3084('0x5b')]=[];for(var _0x49d80c=0x0;_0x49d80c<_0x1514f0[_0x3084('0x3a')];_0x49d80c++){var _0x195655=_0x1514f0[_0x49d80c];this['_tempActors'][_0x49d80c]=JsonEx[_0x3084('0xb2')](_0x195655);}};BattleManager[_0x3084('0x77')]=function(){var _0x11a912=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x90')];var _0x41ac6f=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x70')];var _0x1677e4=Olivia[_0x3084('0x3')]['VictoryUI'][_0x3084('0x87')];var _0x343c61=Olivia[_0x3084('0x3')][_0x3084('0x1c')]['ZoomDuration'];if(Imported[_0x3084('0x8f')]&&Imported[_0x3084('0x48')]){this[_0x3084('0xb')]=_0x11a912;this[_0x3084('0xc')]=_0x41ac6f;$gameScreen[_0x3084('0x1b')](_0x343c61);$gameScreen[_0x3084('0x0')](_0x1677e4,_0x343c61);}else{$gameScreen[_0x3084('0x1a')](_0x11a912,_0x41ac6f,_0x1677e4,_0x343c61);}};BattleManager[_0x3084('0xcd')]=function(){this['updateBattleEnd']();this[_0x3084('0x8d')]();};Olivia[_0x3084('0x3')][_0x3084('0xb5')][_0x3084('0xec')]=Game_System[_0x3084('0xa8')][_0x3084('0x66')];Game_System[_0x3084('0xa8')][_0x3084('0x66')]=function(){Olivia[_0x3084('0x3')][_0x3084('0xb5')]['___Game_System_initialize___'][_0x3084('0x6b')](this);this[_0x3084('0x14')]=![];this[_0x3084('0x2b')]=![];};Game_System['prototype']['skipVictoryAftermath']=function(){return this[_0x3084('0x14')];};Game_System[_0x3084('0xa8')][_0x3084('0xf6')]=function(){return this[_0x3084('0x2b')];};Olivia['OctoBattle'][_0x3084('0xb5')][_0x3084('0xf9')]=Game_Actor[_0x3084('0xa8')][_0x3084('0x42')];Game_Actor[_0x3084('0xa8')]['shouldDisplayLevelUp']=function(){if($gameParty[_0x3084('0x1e')]()){return![];}return Olivia['OctoBattle'][_0x3084('0xb5')]['___Game_Actor_shouldDisplayLevelUp___'][_0x3084('0x6b')](this);};Olivia[_0x3084('0x3')][_0x3084('0xb5')][_0x3084('0x2e')]=Game_Interpreter[_0x3084('0xa8')][_0x3084('0x8')];Game_Interpreter[_0x3084('0xa8')][_0x3084('0x8')]=function(_0x42a00e,_0xf485d7){Olivia[_0x3084('0x3')][_0x3084('0xb5')][_0x3084('0x2e')][_0x3084('0x6b')](this,_0x42a00e,_0xf485d7);if(_0x42a00e[_0x3084('0x3b')](/DisableVictoryAftermath/i)){$gameSystem[_0x3084('0x14')]=!![];}else if(_0x42a00e[_0x3084('0x3b')](/EnableVictoryAftermath/i)){$gameSystem[_0x3084('0x14')]=![];}else if(_0x42a00e['match'](/DisableVictoryMusic/i)){$gameSystem['_skipVictoryMusic']=!![];}else if(_0x42a00e[_0x3084('0x3b')](/EnableVictoryMusic/i)){$gameSystem[_0x3084('0x2b')]=![];}};Scene_Battle[_0x3084('0xa8')][_0x3084('0x74')]=function(){for(var _0x3701dc=0x0;_0x3701dc<this[_0x3084('0xa4')][_0x3084('0x64')][_0x3084('0x3a')];_0x3701dc++){var _0x412881=this[_0x3084('0xa4')][_0x3084('0x64')][_0x3701dc];if(!!_0x412881){_0x412881[_0x3084('0xaa')]();}}};Scene_Battle[_0x3084('0xa8')]['createVictoryWindows']=function(){this[_0x3084('0x11')]=new Window_BattleVictory();this['addWindow'](this['_victoryWindow']);};Olivia['OctoBattle'][_0x3084('0xb5')]['___Scene_Battle_terminate___']=Scene_Battle[_0x3084('0xa8')][_0x3084('0xa1')];Scene_Battle[_0x3084('0xa8')][_0x3084('0xa1')]=function(){Olivia[_0x3084('0x3')][_0x3084('0xb5')][_0x3084('0x78')][_0x3084('0x6b')](this);if(Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x60')]){$gameScreen['clearZoom']();}};function Window_BattleVictory(){this[_0x3084('0x66')]['apply'](this,arguments);}Window_BattleVictory[_0x3084('0xa8')]=Object['create'](Window_Base[_0x3084('0xa8')]);Window_BattleVictory[_0x3084('0xa8')]['constructor']=Window_BattleVictory;Window_BattleVictory[_0x3084('0xa8')][_0x3084('0x66')]=function(){var _0x30e886=Graphics[_0x3084('0x21')];var _0x2e47d4=Graphics[_0x3084('0xaf')];Window_Base['prototype']['initialize']['call'](this,0x0,0x0,_0x30e886,_0x2e47d4);this[_0x3084('0x6c')]=0x0;this[_0x3084('0xc8')]=0x0;this[_0x3084('0xad')]();this[_0x3084('0xe0')]();};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0xfa')]=function(){return 0x0;};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0xad')]=function(){if(BattleManager[_0x3084('0xde')]['items'][_0x3084('0x3a')]>0x0){this[_0x3084('0x52')]();}this['createActorWindows']();this[_0x3084('0x86')]();};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0x52')]=function(){var _0x4175e7=Math[_0x3084('0xed')]((this[_0x3084('0x36')]+Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xd')])/0x2);var _0x4b9771=Math[_0x3084('0xed')](this[_0x3084('0x9b')]*Olivia['OctoBattle'][_0x3084('0x1c')][_0x3084('0x62')])+Math[_0x3084('0xed')](this[_0x3084('0xd1')]()*2.5);var _0x52ff6d=this[_0x3084('0x36')]-_0x4175e7-Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x7c')];var _0x9e7f40=this[_0x3084('0x9b')]-_0x4b9771-this[_0x3084('0xd1')]()*1.5-Window_Base[_0x3084('0xa8')][_0x3084('0xfa')]['call'](this)*0x2;this['_itemWindow']=new Window_BattleVictoryItems(_0x4175e7,_0x4b9771,_0x52ff6d,_0x9e7f40);this[_0x3084('0x20')](this[_0x3084('0xf3')]);};Window_BattleVictory['prototype'][_0x3084('0x40')]=function(){var _0x4a0925=$gameParty[_0x3084('0x91')]();for(var _0x3f1fe3=0x0;_0x3f1fe3<_0x4a0925[_0x3084('0x3a')];_0x3f1fe3++){var _0x20fb13=_0x4a0925[_0x3f1fe3];if(!!_0x20fb13){var _0x1e9ec7=new Window_BattleVictoryActor(_0x3f1fe3,_0x20fb13);this[_0x3084('0x20')](_0x1e9ec7);}}};Window_BattleVictory[_0x3084('0xa8')]['createContinueWindow']=function(){this[_0x3084('0x71')]=new Window_BattleVictoryContinue();this['addChild'](this[_0x3084('0x71')]);};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0xe8')]=function(){Window_Base[_0x3084('0xa8')][_0x3084('0xe8')]['call'](this);this[_0x3084('0xc8')]+=Olivia[_0x3084('0x3')][_0x3084('0x1c')]['TransitionPower'];};Window_BattleVictory['prototype']['refresh']=function(){this[_0x3084('0xef')]['clear']();this[_0x3084('0xf2')]();this[_0x3084('0x3f')]();};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0xf2')]=function(){this['drawBackgroundMajorFadeOut']();this[_0x3084('0xe4')]();};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0x4f')]=function(){var _0x4336f9=Math[_0x3084('0xed')](this[_0x3084('0x9b')]*Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x62')]);var _0x4c4e6b=this[_0x3084('0xd1')]()+Window_Base[_0x3084('0xa8')][_0x3084('0xfa')][_0x3084('0x6b')](this)*0x2;var _0x51d617=this[_0x3084('0x9b')]-_0x4336f9-_0x4c4e6b;var _0x3efee5=this[_0x3084('0x36')]*0x2;this[_0x3084('0xef')][_0x3084('0xd8')](0x0,_0x4336f9,_0x3efee5,_0x51d617,this[_0x3084('0x26')](),this['dimColor2']());this[_0x3084('0xef')][_0x3084('0xd8')](0x0,this[_0x3084('0x9b')]-_0x4c4e6b+0x2,this[_0x3084('0x36')],_0x4c4e6b-0x2,this[_0x3084('0x96')](),this[_0x3084('0x26')]());this[_0x3084('0xb3')](![]);this[_0x3084('0xef')][_0x3084('0xc2')](0x0,_0x4336f9-0x2,_0x3efee5,0x2,this['normalColor']());this['contents'][_0x3084('0xc2')](0x0,this[_0x3084('0x9b')]-_0x4c4e6b,_0x3efee5,0x2,this[_0x3084('0x9')]());if(BattleManager['_rewards'][_0x3084('0xdb')]['length']>0x0){var _0x5af90f=Math['round'](this[_0x3084('0x36')]/0x2);var _0x48c8c3=_0x4336f9+this[_0x3084('0xd1')]()*0x2;var _0x2f9876=this['width']-_0x5af90f-Olivia[_0x3084('0x3')]['VictoryUI'][_0x3084('0x7c')];this[_0x3084('0xef')][_0x3084('0xc2')](_0x5af90f,_0x48c8c3,_0x2f9876,0x2,this[_0x3084('0x9')]());}};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0xe4')]=function(){var _0x3f08f8=Olivia['OctoBattle'][_0x3084('0x1c')][_0x3084('0x7c')];var _0x1f9ba4=Math[_0x3084('0xed')](this[_0x3084('0x9b')]*Olivia[_0x3084('0x3')]['VictoryUI']['BackgroundDimHeight'])+this[_0x3084('0xd1')]();var _0xe67d3d=_0x1f9ba4+this[_0x3084('0xd1')]()+0x2;var _0x4ca84e=_0xe67d3d+this[_0x3084('0xd1')]()+0x2;var _0x57a663=Math[_0x3084('0xed')](this['width']/0x2)-Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x7c')]-Math['round'](Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xd')]/0x2);var _0x3e2624=Math[_0x3084('0xed')](_0x57a663*0.8);var _0x31cdc2=_0x57a663-_0x3e2624;this[_0x3084('0xb3')](![]);this[_0x3084('0x7f')](_0x3f08f8,_0x1f9ba4,_0x3e2624,_0x31cdc2);this[_0x3084('0x7f')](_0x3f08f8,_0xe67d3d,_0x3e2624,_0x31cdc2);if(Imported[_0x3084('0x31')]){this[_0x3084('0x7f')](_0x3f08f8,_0x4ca84e,_0x3e2624,_0x31cdc2);}};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0x7f')]=function(_0x38ab32,_0x588647,_0x283b13,_0x22e1e6){var _0x1d7927=this['lineHeight']();var _0x4518c1=Math[_0x3084('0xed')](this[_0x3084('0xd1')]()/0x2);_0x38ab32+=_0x4518c1;_0x283b13-=_0x4518c1;var _0xf6e11f=[_0x38ab32,_0x588647,_0x38ab32-_0x4518c1,_0x588647+_0x4518c1,_0x38ab32,_0x588647+_0x1d7927];this[_0x3084('0xb3')](![]);var _0x5bc36a=this[_0x3084('0xf5')]()/0xff;this[_0x3084('0xef')][_0x3084('0x9e')](_0xf6e11f,this[_0x3084('0x9')](),0x0,_0x5bc36a,![]);this[_0x3084('0xef')][_0x3084('0xc2')](_0x38ab32,_0x588647,_0x283b13,_0x1d7927,this[_0x3084('0x9')]());this['contents'][_0x3084('0xd8')](_0x38ab32+_0x283b13,_0x588647,_0x22e1e6,_0x1d7927,this[_0x3084('0x9')](),this[_0x3084('0x96')]());};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0x3f')]=function(){this[_0x3084('0x63')]();this[_0x3084('0xb9')]();if(BattleManager[_0x3084('0xde')][_0x3084('0xdb')][_0x3084('0x3a')]>0x0){this['drawForegroundItemsObtained']();}};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0x63')]=function(){this[_0x3084('0xb3')](!![]);this[_0x3084('0xa3')]();var _0x13d2bd=Olivia['OctoBattle'][_0x3084('0x1c')][_0x3084('0x84')];this[_0x3084('0xef')][_0x3084('0xd0')]=Olivia[_0x3084('0x3')]['VictoryUI'][_0x3084('0xe5')];var _0xed76ff=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x7c')];var _0x1046a5=Math['round'](this[_0x3084('0x9b')]*Olivia[_0x3084('0x3')]['VictoryUI'][_0x3084('0x62')])-Math['round'](Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xe5')]/0x2);this[_0x3084('0x29')](_0x13d2bd,_0xed76ff,_0x1046a5,this[_0x3084('0x36')]);};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0xb9')]=function(){this[_0x3084('0xb3')](!![]);this[_0x3084('0xa3')]();var _0x3280b3=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x7c')]+Math[_0x3084('0xed')](this[_0x3084('0xd1')]()/0x2);var _0x3ca270=Math[_0x3084('0xed')](this['height']*Olivia[_0x3084('0x3')][_0x3084('0x1c')]['BackgroundDimHeight'])+this['lineHeight']();var _0x5e8f64=_0x3ca270+this[_0x3084('0xd1')]()+0x2;var _0x4d5039=_0x5e8f64+this[_0x3084('0xd1')]()+0x2;var _0x347b4b=Math[_0x3084('0xed')](this[_0x3084('0x36')]/0x2)-Olivia[_0x3084('0x3')]['VictoryUI'][_0x3084('0x7c')]-Math[_0x3084('0xed')](Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xd')]/0x2);var _0x5f3aa0=Math[_0x3084('0xed')](_0x347b4b*0.5);var _0x2570e0=Math[_0x3084('0xed')](_0x347b4b*0.75);this['drawForegroundRewards'](_0x3280b3,_0x3ca270,_0x5f3aa0,_0x2570e0,_0x3084('0x9c'));this['drawForegroundRewards'](_0x3280b3,_0x5e8f64,_0x5f3aa0,_0x2570e0,_0x3084('0xe'));if(Imported[_0x3084('0x31')]){this['drawForegroundRewards'](_0x3280b3,_0x4d5039,_0x5f3aa0,_0x2570e0,'jp');}};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0xf7')]=function(_0x579461,_0x67e614,_0x548d27,_0x56aabd,_0x3dec5d){if(_0x3dec5d===_0x3084('0x9c')){var _0x487123=TextManager['currencyUnit'];var _0x549bf1=BattleManager[_0x3084('0xde')][_0x3084('0x9c')];}else if(_0x3dec5d===_0x3084('0xe')){var _0x487123=TextManager[_0x3084('0xe')];var _0x549bf1=BattleManager[_0x3084('0xde')]['exp'];}else if(_0x3dec5d==='jp'){var _0x487123=Yanfly['Param']['Jp'];var _0x549bf1=BattleManager[_0x3084('0xde')]['jp'];}else{return;}if(Imported[_0x3084('0x41')]){_0x549bf1=Yanfly[_0x3084('0x12')]['toGroup'](_0x549bf1);}this[_0x3084('0xb3')](![]);this[_0x3084('0xef')][_0x3084('0xd0')]=Olivia['OctoBattle'][_0x3084('0x1c')][_0x3084('0xf1')];this['changeTextColor'](this[_0x3084('0xba')](Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x19')]));this[_0x3084('0x29')](_0x487123,_0x579461,_0x67e614,_0x548d27,'left');this[_0x3084('0xb3')](!![]);this[_0x3084('0xef')]['fontSize']=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x2f')];this[_0x3084('0x9d')](this[_0x3084('0xba')](Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xeb')]));this[_0x3084('0x29')](_0x549bf1,_0x579461,_0x67e614,_0x56aabd,'right');};Window_BattleVictory[_0x3084('0xa8')][_0x3084('0x75')]=function(){this[_0x3084('0xb3')](!![]);this[_0x3084('0xa3')]();var _0x1ecabb=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xcf')];var _0x1fd79c=Math[_0x3084('0xed')]((this[_0x3084('0x36')]+Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xd')])/0x2);var _0x5bcc87=Math['round'](this[_0x3084('0x9b')]*Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x62')]);var _0x1dd4ce=this[_0x3084('0x36')]-_0x1fd79c-Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x7c')];this[_0x3084('0xef')]['fontSize']=Olivia[_0x3084('0x3')][_0x3084('0x1c')]['TextItemsFontSize'];this[_0x3084('0xef')][_0x3084('0x29')](_0x1ecabb,_0x1fd79c,_0x5bcc87,_0x1dd4ce,this[_0x3084('0xd1')]()*0x2,'left');};function Window_BattleVictoryContinue(){this[_0x3084('0x66')][_0x3084('0x4d')](this,arguments);}Window_BattleVictoryContinue['prototype']=Object['create'](Window_Base[_0x3084('0xa8')]);Window_BattleVictoryContinue[_0x3084('0xa8')][_0x3084('0x3e')]=Window_BattleVictoryContinue;Window_BattleVictoryContinue[_0x3084('0xa8')][_0x3084('0x66')]=function(){this[_0x3084('0xbe')]=Olivia[_0x3084('0x3')]['VictoryUI']['ContinueDuration'];Window_Base[_0x3084('0xa8')]['initialize'][_0x3084('0x6b')](this,0x0,0x0,Graphics[_0x3084('0x21')],this['lineHeight']());this[_0x3084('0x6c')]=0x0;this[_0x3084('0xc8')]=0x0;this['refresh']();};Window_BattleVictoryContinue[_0x3084('0xa8')][_0x3084('0xfa')]=function(){return 0x0;};Window_BattleVictoryContinue[_0x3084('0xa8')]['update']=function(){Window_Base[_0x3084('0xa8')][_0x3084('0xe8')][_0x3084('0x6b')](this);if(this[_0x3084('0xbe')]>0x0){if(Input[_0x3084('0xe1')]('ok')||Input['isRepeated']('cancel')||TouchInput['isTriggered']()){Input[_0x3084('0xa7')]();TouchInput[_0x3084('0xa7')]();this[_0x3084('0xbe')]=0x1;}else{this[_0x3084('0xbe')]--;}}else if(!this[_0x3084('0x2d')]&&(Input[_0x3084('0xe1')]('ok')||Input['isRepeated'](_0x3084('0xbc'))||TouchInput[_0x3084('0x1')]())){Input[_0x3084('0xa7')]();TouchInput[_0x3084('0xa7')]();this['_ending']=!![];BattleManager['endVictoryPhase']();}else{this[_0x3084('0xc8')]+=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x83')];}};Window_BattleVictoryContinue[_0x3084('0xa8')][_0x3084('0xe0')]=function(){this[_0x3084('0xef')]['clear']();var _0x4d7d1f=Olivia[_0x3084('0x3')]['VictoryUI'][_0x3084('0x73')];this['drawTextEx'](_0x4d7d1f,this[_0x3084('0xbb')](),0x0);var _0x277939=this[_0x3084('0x10')](_0x4d7d1f)+this[_0x3084('0xbb')]()*0x2;this['x']=Graphics[_0x3084('0x21')]-Olivia[_0x3084('0x3')][_0x3084('0x1c')]['SideThickness']-_0x277939;this['y']=Graphics[_0x3084('0xaf')]-Math[_0x3084('0xed')](this[_0x3084('0xd1')]()*1.5);};Window_BattleVictoryContinue[_0x3084('0xa8')][_0x3084('0x10')]=function(_0x339fea){return this[_0x3084('0xb0')](_0x339fea,0x0,this[_0x3084('0xef')][_0x3084('0x9b')]);};function Window_BattleVictoryItems(){this[_0x3084('0x66')][_0x3084('0x4d')](this,arguments);}Window_BattleVictoryItems[_0x3084('0xa8')]=Object[_0x3084('0xd9')](Window_ItemList[_0x3084('0xa8')]);Window_BattleVictoryItems[_0x3084('0xa8')][_0x3084('0x3e')]=Window_BattleVictoryItems;Window_BattleVictoryItems[_0x3084('0xa8')][_0x3084('0x66')]=function(_0x51ceec,_0xd908f5,_0x308fa3,_0x49654f){_0x49654f=Math[_0x3084('0x4')](_0x49654f/this[_0x3084('0xd1')]())*this[_0x3084('0xd1')]();Window_ItemList[_0x3084('0xa8')][_0x3084('0x66')][_0x3084('0x6b')](this,_0x51ceec,_0xd908f5,_0x308fa3,_0x49654f);this[_0x3084('0x6c')]=0x0;this['contentsOpacity']=0x0;this[_0x3084('0x92')]();this[_0x3084('0xe0')]();var _0x2d33cd=Math[_0x3084('0x15')](0xff/Olivia['OctoBattle'][_0x3084('0x1c')][_0x3084('0x83')]);setTimeout(this[_0x3084('0x5')][_0x3084('0xb6')](this),_0x2d33cd);};Window_BattleVictoryItems[_0x3084('0xa8')][_0x3084('0xfa')]=function(){return 0x0;};Window_BattleVictoryItems[_0x3084('0xa8')][_0x3084('0xce')]=function(){return 0x1;};Window_BattleVictoryItems['prototype'][_0x3084('0x5')]=function(){if(this[_0x3084('0xcc')][_0x3084('0x3a')]>this[_0x3084('0x9b')]/this[_0x3084('0xd1')]()){this[_0x3084('0x76')]();this[_0x3084('0xe2')](0x0);}};Window_BattleVictoryItems[_0x3084('0xa8')][_0x3084('0xe8')]=function(){Window_ItemList['prototype']['update']['call'](this);this[_0x3084('0xc8')]+=Olivia['OctoBattle']['VictoryUI']['TransitionPower'];};Window_BattleVictoryItems[_0x3084('0xa8')][_0x3084('0xa9')]=function(){this[_0x3084('0xcc')]=[];this['_dropItems']=[];this[_0x3084('0xc9')]=[];this[_0x3084('0x55')]=[];this[_0x3084('0x5c')]();};Window_BattleVictoryItems[_0x3084('0xa8')][_0x3084('0xca')]=function(_0x2a9a1e){return!![];};Window_BattleVictoryItems[_0x3084('0xa8')][_0x3084('0x5c')]=function(){BattleManager[_0x3084('0xde')][_0x3084('0xdb')][_0x3084('0x81')](function(_0x3deeee){if(!_0x3deeee)return;if(DataManager[_0x3084('0xf8')](_0x3deeee))this[_0x3084('0x5a')]['push'](_0x3deeee['id']);if(DataManager[_0x3084('0x24')](_0x3deeee))this[_0x3084('0xc9')][_0x3084('0x59')](_0x3deeee['id']);if(DataManager['isArmor'](_0x3deeee))this[_0x3084('0x55')]['push'](_0x3deeee['id']);},this);this[_0x3084('0x5a')][_0x3084('0xda')](function(_0x4c3650,_0x238c48){return _0x4c3650-_0x238c48;});this['_dropWeapons'][_0x3084('0xda')](function(_0xfba733,_0x43be72){return _0xfba733-_0x43be72;});this[_0x3084('0x55')]['sort'](function(_0x56e5b0,_0x3f75f0){return _0x56e5b0-_0x3f75f0;});this[_0x3084('0x5a')][_0x3084('0x81')](function(_0x403555){var _0x33a2d8=$dataItems[_0x403555];if(_0x33a2d8&&!this[_0x3084('0xcc')][_0x3084('0xdc')](_0x33a2d8))this[_0x3084('0xcc')][_0x3084('0x59')](_0x33a2d8);},this);this[_0x3084('0xc9')][_0x3084('0x81')](function(_0x2def3d){var _0x448b66=$dataWeapons[_0x2def3d];if(_0x448b66&&!this[_0x3084('0xcc')][_0x3084('0xdc')](_0x448b66))this[_0x3084('0xcc')][_0x3084('0x59')](_0x448b66);},this);this[_0x3084('0x55')]['forEach'](function(_0x5f4e23){var _0x55b6f0=$dataArmors[_0x5f4e23];if(_0x55b6f0&&!this['_data']['contains'](_0x55b6f0))this[_0x3084('0xcc')]['push'](_0x55b6f0);},this);};Window_BattleVictoryItems[_0x3084('0xa8')][_0x3084('0x3c')]=function(_0x32e8b2,_0x13d8dd,_0x280f64,_0x1da437){if(!this[_0x3084('0xcb')]())return;var _0xdc4e23=this[_0x3084('0x17')](_0x32e8b2);if(Imported['YEP_CoreEngine']){_0xdc4e23=Yanfly['Util'][_0x3084('0x33')](this[_0x3084('0x17')](_0x32e8b2));this['contents'][_0x3084('0xd0')]=Yanfly[_0x3084('0x37')][_0x3084('0x38')]||0x1c;}else{this[_0x3084('0xef')]['fontSize']=0x14;}this[_0x3084('0x29')]('×'+_0xdc4e23,_0x13d8dd,_0x280f64,_0x1da437,_0x3084('0x6a'));this[_0x3084('0xa3')]();};Window_BattleVictoryItems[_0x3084('0xa8')]['numItems']=function(_0x21d0dd){if(DataManager[_0x3084('0xf8')](_0x21d0dd)){return this[_0x3084('0x6')](_0x21d0dd['id'],this[_0x3084('0x5a')]);}if(DataManager[_0x3084('0x24')](_0x21d0dd)){return this[_0x3084('0x6')](_0x21d0dd['id'],this[_0x3084('0xc9')]);}if(DataManager[_0x3084('0x79')](_0x21d0dd)){return this[_0x3084('0x6')](_0x21d0dd['id'],this[_0x3084('0x55')]);}return 0x0;};Window_BattleVictoryItems[_0x3084('0xa8')][_0x3084('0x6')]=function(_0x12ad5d,_0x44063b){var _0x8c74eb=0x0;for(var _0x5c0cd2=0x0;_0x5c0cd2<_0x44063b[_0x3084('0x3a')];_0x5c0cd2++){if(_0x44063b[_0x5c0cd2]===_0x12ad5d)_0x8c74eb++;}return _0x8c74eb;};Yanfly[_0x3084('0x12')][_0x3084('0x33')]=function(_0x78f4be){if(typeof _0x78f4be===_0x3084('0x27'))return _0x78f4be;return _0x78f4be[_0x3084('0x2')]('en');return _0x78f4be[_0x3084('0x9a')](/(^|[^\w.])(\d{4,})/g,function(_0x459e1a,_0x5b2265,_0x224673){return _0x5b2265+_0x224673[_0x3084('0x9a')](/\d(?=(?:\d\d\d)+(?!\d))/g,_0x3084('0x5f'));});};function Window_BattleVictoryActor(){this[_0x3084('0x66')][_0x3084('0x4d')](this,arguments);}Window_BattleVictoryActor['prototype']=Object[_0x3084('0xd9')](Window_Base[_0x3084('0xa8')]);Window_BattleVictoryActor[_0x3084('0xa8')]['constructor']=Window_BattleVictoryActor;Window_BattleVictoryActor[_0x3084('0xa8')][_0x3084('0x66')]=function(_0x5c15b5,_0x256ae2){this[_0x3084('0x67')]=_0x5c15b5;this[_0x3084('0x13')]=_0x256ae2;this[_0x3084('0x1d')]=BattleManager['_tempActors'][_0x5c15b5];var _0xca2871=Olivia[_0x3084('0x3')][_0x3084('0x1c')]['SideThickness'];var _0x36a119=Math['round'](Graphics[_0x3084('0xaf')]*Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x62')])+this[_0x3084('0xd1')]()*0x5-0x4;_0x36a119+=_0x5c15b5*this[_0x3084('0xd1')]()*0x2+_0x5c15b5*Math[_0x3084('0x15')](this[_0x3084('0xd1')]()/0x4)-Math[_0x3084('0xed')](this[_0x3084('0xd1')]()/0x4);if(!Imported[_0x3084('0x31')]){_0x36a119-=Math[_0x3084('0xed')](this['lineHeight']()/0x2)+0x2;}var _0x46d97e=Math[_0x3084('0xed')](Graphics[_0x3084('0x21')]/0x2)-Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x7c')]-Math[_0x3084('0xed')](Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xd')]/0x2);var _0x5648d7=this[_0x3084('0xd1')]()*0x2;Window_Base[_0x3084('0xa8')][_0x3084('0x66')][_0x3084('0x6b')](this,_0xca2871,_0x36a119,_0x46d97e,_0x5648d7);this[_0x3084('0xac')]();this[_0x3084('0x6c')]=0x0;this[_0x3084('0xc8')]=0x0;this[_0x3084('0xe0')]();};Window_BattleVictoryActor[_0x3084('0xa8')][_0x3084('0xfa')]=function(){return 0x0;};Window_BattleVictoryActor[_0x3084('0xa8')][_0x3084('0xe8')]=function(){Window_Base[_0x3084('0xa8')][_0x3084('0xe8')][_0x3084('0x6b')](this);this[_0x3084('0xc8')]+=Olivia[_0x3084('0x3')][_0x3084('0x1c')]['TransitionPower'];};Window_BattleVictoryActor[_0x3084('0xa8')]['createSubWindow']=function(){this[_0x3084('0xd5')]=new Window_BattleVictoryActorSub(this,this[_0x3084('0x13')],this[_0x3084('0x1d')]);this[_0x3084('0x20')](this[_0x3084('0xd5')]);};Window_BattleVictoryActor[_0x3084('0xa8')][_0x3084('0xe0')]=function(){this[_0x3084('0xef')]['clear']();this[_0x3084('0xd6')]();this[_0x3084('0x4e')]();this['drawForegroundActorName']();if(Imported[_0x3084('0x31')]){this[_0x3084('0x28')]();}};Window_BattleVictoryActor[_0x3084('0xa8')][_0x3084('0xd6')]=function(){this[_0x3084('0xb3')](![]);var _0x122e84=this[_0x3084('0xd1')]();var _0x215687=Math[_0x3084('0xed')](this[_0x3084('0xd1')]()/0x2);var _0x232bbd=this[_0x3084('0x36')]-_0x122e84;var _0x51044f=[_0x215687,0x0,0x0,_0x215687,_0x215687,_0x122e84,_0x215687+_0x232bbd,_0x122e84,_0x232bbd+_0x122e84,_0x215687,_0x232bbd+_0x215687,0x0];this[_0x3084('0xef')][_0x3084('0x9e')](_0x51044f,this[_0x3084('0x26')](),0x0,0xff,![]);this[_0x3084('0xef')][_0x3084('0xc2')](_0x215687,this[_0x3084('0x9b')]-0x2,_0x232bbd,0x2,this[_0x3084('0x9')]());};Window_BattleVictoryActor[_0x3084('0xa8')][_0x3084('0x4e')]=function(){this['changePaintOpacity'](![]);var _0x50765e=this[_0x3084('0x36')]-this['lineHeight']();var _0x2c188b=Olivia[_0x3084('0x3')][_0x3084('0x1c')]['ExpGaugeHeight'];var _0x5a1b2b=Math[_0x3084('0xed')](this[_0x3084('0xd1')]()/0x2);var _0x48d3f8=this[_0x3084('0x9b')]-_0x2c188b-0x6;this[_0x3084('0xef')][_0x3084('0xc2')](_0x5a1b2b,_0x48d3f8,_0x50765e,_0x2c188b,this[_0x3084('0xb7')]());};Window_BattleVictoryActor[_0x3084('0xa8')][_0x3084('0x53')]=function(){this[_0x3084('0xb3')](!![]);this[_0x3084('0xa3')]();this[_0x3084('0xef')][_0x3084('0xd0')]=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xc1')];this[_0x3084('0x29')](this['_actor'][_0x3084('0xe3')](),Math[_0x3084('0xed')](this[_0x3084('0xd1')]()/0x2),0x0,this[_0x3084('0x36')]-this[_0x3084('0xd1')]());};Window_BattleVictoryActor[_0x3084('0xa8')]['drawForegroundJPLabel']=function(){this[_0x3084('0xb3')](!![]);this[_0x3084('0xa3')]();this[_0x3084('0xef')]['fontSize']=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x93')];this[_0x3084('0x29')](Yanfly['Param']['Jp'],Math[_0x3084('0xed')](this[_0x3084('0xd1')]()/0x2),0x0,this['width']-this['lineHeight'](),_0x3084('0x6a'));};function Window_BattleVictoryActorSub(){this[_0x3084('0x66')][_0x3084('0x4d')](this,arguments);}Window_BattleVictoryActorSub[_0x3084('0xa8')]=Object[_0x3084('0xd9')](Window_Base[_0x3084('0xa8')]);Window_BattleVictoryActorSub[_0x3084('0xa8')]['constructor']=Window_BattleVictoryActorSub;Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0x66')]=function(_0x1094fb,_0x1dda2a,_0x1dd809){this['_actor']=_0x1dda2a;this[_0x3084('0x1d')]=_0x1dd809;this[_0x3084('0xbe')]=Olivia[_0x3084('0x3')][_0x3084('0x1c')]['ActorUpdateDuration']||0x1;Window_Base['prototype'][_0x3084('0x66')][_0x3084('0x6b')](this,0x0,0x0,_0x1094fb[_0x3084('0x36')],_0x1094fb['height']);this[_0x3084('0x4a')]();this['calculateNextLevelConstants']();this[_0x3084('0x32')]();this['createLevelUpSprite']();this[_0x3084('0x6c')]=0x0;this[_0x3084('0xc8')]=0x0;this[_0x3084('0xe0')]();};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0xfa')]=function(){return 0x0;};Window_BattleVictoryActorSub['prototype'][_0x3084('0x4a')]=function(){this[_0x3084('0xc4')]=this[_0x3084('0x36')]-this['lineHeight']();this['_exp']=this[_0x3084('0x1d')][_0x3084('0x7a')]();this['_expTarget']=this['_actor'][_0x3084('0x7a')]();this['_level']=this['_tempActor'][_0x3084('0xa')];this[_0x3084('0x2c')]=this[_0x3084('0xc0')];this['_levelText']=Yanfly[_0x3084('0x12')][_0x3084('0x33')](this[_0x3084('0x2c')]);this[_0x3084('0x2c')]=Olivia['OctoBattle'][_0x3084('0x1c')][_0x3084('0x49')][_0x3084('0x88')](this[_0x3084('0x2c')]);this['_maxLevel']=this[_0x3084('0x1d')][_0x3084('0xc7')]();if(Imported[_0x3084('0x31')]){this['contents'][_0x3084('0xd0')]=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x93')];this[_0x3084('0xae')]=this[_0x3084('0x6d')](Yanfly[_0x3084('0x37')]['Jp']+'\x20');this[_0x3084('0x9f')]=this[_0x3084('0x1d')]['jp']();this[_0x3084('0x58')]=this[_0x3084('0x13')]['jp']();}};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0x23')]=function(){if(this[_0x3084('0xc0')]>=this[_0x3084('0x13')][_0x3084('0x54')]()){this[_0x3084('0xc0')]=this[_0x3084('0x13')][_0x3084('0x54')]();this[_0x3084('0xa6')]='-';this[_0x3084('0x8b')]='-';this[_0x3084('0x72')]=!![];}else{this[_0x3084('0xa6')]=this[_0x3084('0x13')][_0x3084('0xa5')](this[_0x3084('0xc0')]);this[_0x3084('0x8b')]=this['_actor'][_0x3084('0xa5')](this[_0x3084('0xc0')]+0x1);}};Window_BattleVictoryActorSub[_0x3084('0xa8')]['createGaugeSprite']=function(){var _0x49acf2=this[_0x3084('0x36')]-this[_0x3084('0xd1')]();var _0x3d4505=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xdf')];var _0x355964=Math[_0x3084('0xed')](this[_0x3084('0xd1')]()/0x2);var _0x51a2e1=this[_0x3084('0x9b')]-_0x3d4505-0x6;var _0x1578bd=this[_0x3084('0xba')](Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0xb4')]);var _0x3c2e3c=this[_0x3084('0xba')](Olivia['OctoBattle'][_0x3084('0x1c')][_0x3084('0xd2')]);if(Imported['YEP_CoreEngine']&&Yanfly[_0x3084('0x37')][_0x3084('0x46')]){_0x355964+=0x1;_0x51a2e1+=0x1;_0x49acf2-=0x2;_0x3d4505-=0x2;}this[_0x3084('0xc5')]=_0x49acf2;this[_0x3084('0x39')]=new Sprite();this[_0x3084('0xbf')](this[_0x3084('0x39')]);this[_0x3084('0x39')]['x']=_0x355964;this[_0x3084('0x39')]['y']=_0x51a2e1;this['_gaugeSprite'][_0x3084('0x6c')]=0x0;this[_0x3084('0x39')][_0x3084('0x18')]=new Bitmap(_0x49acf2,_0x3d4505);this[_0x3084('0x39')][_0x3084('0x18')][_0x3084('0xd8')](0x0,0x0,_0x49acf2,_0x3d4505,_0x1578bd,_0x3c2e3c);};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0xd7')]=function(){this[_0x3084('0xa3')]();var _0xb2515d=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x4b')];this[_0x3084('0xef')][_0x3084('0xd0')]=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x5e')];var _0x1d2f71=this[_0x3084('0x6d')](_0xb2515d);+this[_0x3084('0xd1')]();this[_0x3084('0x2a')]=new Sprite();this[_0x3084('0x20')](this[_0x3084('0x2a')]);this['_levelUpSprite']['x']=Math[_0x3084('0xed')](this[_0x3084('0x36')]*0.5);if(Imported[_0x3084('0x31')]){this[_0x3084('0x2a')]['y']=Math[_0x3084('0xed')](this['lineHeight']()*1.5);}else{this[_0x3084('0x2a')]['y']=Math[_0x3084('0xed')](this['lineHeight']()*0.5);}this[_0x3084('0x2a')][_0x3084('0xc6')]['x']=0.5;this[_0x3084('0x2a')][_0x3084('0xc6')]['y']=0.5;this['_levelUpSprite']['scale']['x']=0x0;this[_0x3084('0x2a')][_0x3084('0x98')]['y']=0x0;this[_0x3084('0x2a')][_0x3084('0x18')]=new Bitmap(_0x1d2f71,this['lineHeight']()*0x2);this[_0x3084('0x2a')][_0x3084('0x18')]['textColor']=this[_0x3084('0xba')](Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x7')]);this[_0x3084('0x2a')][_0x3084('0x18')][_0x3084('0xd0')]=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x5e')];this['_levelUpSprite'][_0x3084('0x18')]['drawText'](_0xb2515d,0x0,0x0,_0x1d2f71,this['lineHeight']()*0x2,_0x3084('0x95'));this[_0x3084('0x16')]=![];this[_0x3084('0x22')]=0x0;this['resetFontSettings']();};Window_BattleVictoryActorSub[_0x3084('0xa8')]['update']=function(){Window_Base[_0x3084('0xa8')]['update'][_0x3084('0x6b')](this);this[_0x3084('0xc8')]+=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x83')];if(!!this[_0x3084('0x39')]){this[_0x3084('0x39')][_0x3084('0x6c')]=this[_0x3084('0xc8')];}if(this[_0x3084('0xbe')]>0x0){this[_0x3084('0xe0')]();if(Input[_0x3084('0xe1')]('ok')||Input[_0x3084('0xe1')]('cancel')){this[_0x3084('0xbe')]=0x1;}else{this[_0x3084('0xbe')]--;}}if(this[_0x3084('0x16')]){this[_0x3084('0x25')]();}if(this[_0x3084('0x22')]!==0x0){this[_0x3084('0x6f')]();}};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0x25')]=function(){this[_0x3084('0x2a')][_0x3084('0x98')]['x']=Math['min'](0x1,this['_levelUpSprite']['scale']['x']+0.02);this['_levelUpSprite'][_0x3084('0x98')]['y']=Math[_0x3084('0xd4')](0x1,this[_0x3084('0x2a')]['scale']['y']+0.02);if(this['_levelUpSprite']['scale']['x']>=0x1){}};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0x6f')]=function(){this[_0x3084('0x2a')][_0x3084('0x6c')]+=this[_0x3084('0x22')];if(this[_0x3084('0x2a')][_0x3084('0x6c')]>=0xff||this['_levelUpSprite']['opacity']<=0x0){this[_0x3084('0x22')]*=-0x1;}};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0xe0')]=function(){this[_0x3084('0xef')][_0x3084('0xa7')]();if(Imported['YEP_JobPoints']){this['drawActorJpInformation']();}this[_0x3084('0xc3')]();this[_0x3084('0xea')]();this['drawActorExpInformation']();this[_0x3084('0xf')]();this[_0x3084('0x8c')]();};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0x44')]=function(){this['changePaintOpacity'](!![]);this[_0x3084('0xa3')]();var _0x46d1f3=this[_0x3084('0xbe')]||0x1;this['_jp']=(this[_0x3084('0x9f')]*(_0x46d1f3-0x1)+this[_0x3084('0x58')])/_0x46d1f3;var _0x47f3f4=Yanfly[_0x3084('0x12')][_0x3084('0x33')](Math[_0x3084('0xed')](this[_0x3084('0x9f')]));var _0x35f90b=Math['round'](this[_0x3084('0xd1')]()/0x2);var _0x28a9aa=this[_0x3084('0x36')]-this[_0x3084('0xd1')]()-this[_0x3084('0xae')];this[_0x3084('0xef')]['fontSize']=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x93')];this[_0x3084('0x29')](_0x47f3f4,_0x35f90b,0x0,_0x28a9aa,'right');};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0xc3')]=function(){var _0x21777c=this[_0x3084('0xbe')]||0x1;this['_exp']=(this['_exp']*(_0x21777c-0x1)+this[_0x3084('0xf4')])/_0x21777c;while(this[_0x3084('0x56')]>=this[_0x3084('0x8b')]){this[_0x3084('0xa0')]();}};Window_BattleVictoryActorSub[_0x3084('0xa8')]['levelUp']=function(){if(!this['_maxLevel']){this[_0x3084('0xc0')]+=0x1;this[_0x3084('0x16')]=!![];this[_0x3084('0x1f')]=!![];this[_0x3084('0x22')]=this[_0x3084('0x22')]||0x4;this[_0x3084('0x23')]();this[_0x3084('0x2c')]=this[_0x3084('0xc0')];this[_0x3084('0x2c')]=Yanfly[_0x3084('0x12')]['toGroup'](this[_0x3084('0x2c')]);this['_levelText']=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x49')][_0x3084('0x88')](this[_0x3084('0x2c')]);}};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0xea')]=function(){this[_0x3084('0xb3')](!![]);this[_0x3084('0xa3')]();var _0x355258=Math['round'](this[_0x3084('0xd1')]()/0x2);var _0x4df437=this[_0x3084('0x36')]-this[_0x3084('0xd1')]();if(Imported[_0x3084('0x31')]){var _0x363d3c=_0x3084('0x95');}else{var _0x363d3c=_0x3084('0x6a');}this[_0x3084('0xef')][_0x3084('0xd0')]=Olivia[_0x3084('0x3')]['VictoryUI']['ActorLevelFontSize'];this[_0x3084('0x29')](this[_0x3084('0x2c')],_0x355258,0x0,_0x4df437,_0x363d3c);};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0x5d')]=function(){if(this[_0x3084('0x72')]){var _0xd16d2b=this[_0x3084('0x8b')];var _0x561c5d=this[_0x3084('0xa6')];}else{var _0xd16d2b=this[_0x3084('0x8b')]-this['_currentLevelExp'];var _0x561c5d=Math[_0x3084('0xed')](this[_0x3084('0x56')]-this[_0x3084('0xa6')]);if(Imported[_0x3084('0x41')]){_0xd16d2b=Yanfly[_0x3084('0x12')][_0x3084('0x33')](_0xd16d2b);_0x561c5d=Yanfly['Util'][_0x3084('0x33')](_0x561c5d);}}_0xd16d2b='/'+_0xd16d2b;var _0xe9e9f7=Math[_0x3084('0xed')](this['lineHeight']()/0x2)+this[_0x3084('0xbb')]();var _0x141d8c=this[_0x3084('0x36')]-this[_0x3084('0xd1')]()-this[_0x3084('0xbb')]()*0x2;this[_0x3084('0xef')][_0x3084('0xd0')]=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x43')];this[_0x3084('0x29')](TextManager[_0x3084('0xe')],_0xe9e9f7,this['lineHeight'](),_0x141d8c,'left');this[_0x3084('0x9d')](this[_0x3084('0xba')](Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x65')]));this[_0x3084('0xef')][_0x3084('0xd0')]=Olivia[_0x3084('0x3')][_0x3084('0x1c')][_0x3084('0x85')];this[_0x3084('0x29')](_0xd16d2b,_0xe9e9f7,this['lineHeight'](),_0x141d8c,'right');_0x141d8c-=this[_0x3084('0x6d')](_0xd16d2b);this[_0x3084('0x9d')](this[_0x3084('0xba')](Olivia[_0x3084('0x3')][_0x3084('0x1c')]['ExpCurrentFontColor']));this[_0x3084('0xef')][_0x3084('0xd0')]=Olivia['OctoBattle'][_0x3084('0x1c')][_0x3084('0xa2')];this['drawText'](_0x561c5d,_0xe9e9f7,this[_0x3084('0xd1')](),_0x141d8c,_0x3084('0x6a'));};Window_BattleVictoryActorSub[_0x3084('0xa8')][_0x3084('0xf')]=function(){if(this[_0x3084('0x72')]){var _0x7364e2=this['_gaugeWidth'];}else{var _0x92e7c2=this[_0x3084('0x8b')]-this[_0x3084('0xa6')];var _0x29a469=this[_0x3084('0x56')]-this[_0x3084('0xa6')];var _0x5a7c83=Math[_0x3084('0xd4')](_0x29a469/_0x92e7c2,0x1);var _0x7364e2=Math[_0x3084('0xed')](this[_0x3084('0xc5')]*_0x5a7c83);}this[_0x3084('0x39')][_0x3084('0x36')]=_0x7364e2;};Window_BattleVictoryActorSub['prototype'][_0x3084('0x8c')]=function(){if(this[_0x3084('0x1f')]){this[_0x3084('0x1f')]=![];AudioManager[_0x3084('0x35')](Olivia[_0x3084('0x3')][_0x3084('0x1c')]['LevelUpSound']);}};}

//=============================================================================
// Battle Effects
//
// 1. Popup Control
// 2. Buff, Debuff, State Turn Stacking and Control
// 3. Follow Up Skill Actions
// 4. Extra Skill Lists
// 5. Unique Notetag Effects

var _0xae5b=['performDestroyWeapon','loadCharacter','onBattleStart','_nextTurnActionBattlers','stop','StatusWidth','characterIndex','_requestShiftTurnOrder','visible','contains','makeDeepCopy','startAnimation','createBattlerSpriteAtEnd','isOTB','___Game_Action_speed___','index','onEnemyOk','HelpWindowMoveY','___BattleManager_isTurnBased___','___Game_Action_executeDamage___','getNextSubjectOTB','update','___Scene_Battle_createActorCommandWindow___','onBattleEnd','___BattleManager_startAction___','___Game_Battler_addDebuff___','onExSkillOk','_selectionEffectCount','otbInfinityClamp','_moveDuration','updateStateTurns','___Game_BattlerBase_appear___','otbAddBattler','_extraSkillWindow','colorSettings','onExSkillCancel','_actorCommandWindow','___Game_Troop_jpTotal___','EXP\x20x','_helpWindowY','otbRemoveBattler','updateShiftOrder','_spriteset','___Game_Battler_consumeItem___','subjectTargetEffectTraitSources','magical','makeActions','_hidden','abs','BreakCellXFactor','setFrame','OTB','_startedInstantCasting','_requestNextTurnUpdateInstantly','_background2Sprite','setupBattlerBitmap','exSkillProcessReturn','StunWakeUpClamp','isActor','otbCreateTurnPreview','ForceBattleSystem','isAlive','___Scene_Battle_onEnemyCancel___','_otbTurnPreview','turn','isEnemy','executeDamage','_disposeState','setupColorEffects','drawBackgroundLines','___BattleManager_endBattle___','___Game_BattlerBase_paySkillCost___','updateMovement','_phase','___BattleManager_selectPreviousCommand___','StackDebuffTurns','setBattler','BattleManager_endAction','___BattleManager_startTurn___','createBreak','parse','needsSelection','_requestCurrentTurnUpdate','_logWindow','isSpriteVisible','BreakCellWidth','___BattleManager_endAction___','_actorIndex','applyBattleBonusRewards','findSymbol','_previewItem','_hideOTBTurnDisplay','dimColor1','_requestCurrentTurnUpdateInstantly','paySkillCost','WeakMoveXBase','resetFontSettings','onAllActionsEnd','isSideView','updatePosition','speedOTB','CurrentTurnFontSize','makeSpeed','___Game_BattlerBase_overwriteBuffTurns','clearResult','endBattle','_back2Sprite','WeaponSwap','characterName','addEscapeCommand','___BattleManager_processTurn___','disposeSprite','isItem','applyOTBAddAction','___Game_Battler_makeSpeed___','updateDisposeSprites','postPartySwitch','_width2','___Sprite_Damage_setup___','isForAll','otbClearActionOrdersOfUnableBattlers','___Scene_Battle_onEnemyOk___','addDebuff','selectNextCommand','___Game_Battler_startAnimation___','addChildAt','_previewSprites','loseItem','WeakCellXFactor','getFirstSwapWeapon','checkDragonbones','Gold\x20x','setupBattlerBitmapScale','makeActionTimes','ceil','setupWeakDamagePopup','_specialEffectPopup','savePreForceActionSettings','updateNextTurnPreviewUser','createActorCommandWindow','hide','equips','globalAlpha','BEC','isTurnBased','aliveMembers','width','processTurn','createNewSpritesFor','forEach','___Game_Battler_onBattleStart___','giveTurnSpritesToNewArray','setupBreakDamagePopup','BackgroundActorColor','isDamagePopupRequested','outlineColor','_duration','push','undecided','battlerName','_buffTurns','isUndecided','_targetX','___BattleManager_selectNextCommand___','requestMotionRefresh','_actionBattlers','checkItemScope','___BattleManager_getNextSubject___','lineWidth','rgba(255,\x20255,\x20255,\x201)','currentSymbol','_moveYBase','___BattleManager_makeActionOrders___','loadBattlerSpriteBitmap','WeakCellYFactor','attack','_instantCasting','___Game_Action_isForAll___','code','meetsItemConditions','actorId','otbActionTimesModification','_battlerHue','escape','_requestNextTurnPreviewClear','setupDamagePopup','appear','printError','Enemy\x20','fontSize','endOTBAction','otbTurnShiftCost','<OTB\x20Target\x20Next\x20Turn:\x20+1>','otbInsertActionOrderAtEnd','_subjectSprite','_breakPopup','createConstants','length','goldTotal','setSkillList','startTurn','removeCurrentAction','moveTo','_lastActionHitType','removeActor','_createdFirstTurnActionOrders','initialize','_activeOTBActor','updateBreakPopup','match','detectOtbInstantCast','BreakMoveXRate','_requestNextTurnUpdate','show','BreakMoveYRate','___Game_Action_makeDamageValue___','___Game_Battler_isUndecided___','_result','onEnemyCancel','OctoBattle','_largeScale','children','_otbTimesActedThisTurn','clearActor','_skillList','randomInt','EnablePartyWindow','applyOTBEffect','___Window_ActorCommand_addItemCommand___','_moveXBase','refresh','Battle','<OTB\x20Target\x20Next\x20Turn:\x20-1>','SideBattleUI','item','createPreviewSprite','___Sprite_Battler_setupDamagePopup___','contents','physical','changePaintOpacity','___Game_Battler_onTurnEnd___','otbInstanceName','addItemCommand','setActor','updateSelectionEffect','___Window_Selectable_select___','save','_skillWindowLastIndex','otbNextTurnChange','BECStartActCmd','otbInsertRevivalActionOrders','___Scene_Battle_onActorCancel___','_data','createForceActionFailSafes','_width1','DisplayY','setupWindowConstants','result','isSelected','otbInsertRevivalActionOrder','battleFieldDepthCompare','___Scene_Battle_postPartySwitch___','overwriteBuffTurns','YEP_BuffsStatesCore','BECSystem','certain','setupOctoSpecialEffectDamagePopup','Window_Selectable_deactivate','___Window_BattleSkill_initialize___','_instance','___Scene_Battle_commandEscape___','unshift','setBlendColor','RemoveRestrictNext','canInput','_helpWindow','min','_isCalculatingDamage','startAction','otbSetSubject','turnCount','_extraSkillWindowProcess','_actions','___Game_BattlerBase_meetsItemConditions___','getSpritePriority','_subject','WeakMoveXRate','otbCheckIfBattlerIsUnable','active','clamp','___Game_Battler_addBuff___','___Scene_Battle_isAnyInputWindowActive___','beginPath','MaxBuffTurns','constructor','_battler','svBattlerName','NextTurnText','bind','setBPSubject','updateChild','processEscape','createBackground1Sprite','___BattleManager_initMembers___','_otbDisplayWindow','WeakPopupEnabled','addChild','setupBattlerBitmapFrame','stroke','registerUserLastActionType','cancel','_requestNextTurnPreview','processWeakPopup','otbDisplayWindow','drawText','___Game_Party_removeActor___','_preForcePhase','_battleBonus','updateTurnSpriteLocations','lineHeight','currentAction','loadSvEnemy','_iconWidth','StunWakeUpFirst','hasSVBattler','isDTB','___Game_Battler_addState___','onSkillOk','commandEscape','OpacitySpeed','PartyShowBattle','calcElementRate','_background1Sprite','switchToWeaponType','activate','updateBattleManagerRequests','payWeaponDestroy','MoveDuration','___Game_Action_needsSelection___','MaxDebuffTurns','actor','isStatePrevented','___Game_Party_addActor___','___Game_Action_applyItemUserEffect___','otbForceAction','___Game_Troop_expTotal___','createChildSprite','_positionYCorrection','isHpEffect','___Scene_Battle_onSkillOk___','createBattlerSprite','round','___BattleManager_startInput___','otbSetTurnPreviewItem','_moveXRate','note','defineProperties','HelpWindowMoveSpeed','_destroyWeapon','startOTBInput','applyItemUserEffect','createExtraSkillListWindow','makeActionOrders','___BattleManager_displayEscapeFailureMessage___','guardSkillId','_battleField','removeState','addBuff','_updateReady','isCertainHit','otbFailedEscape','updateNextTurnPreview','otbClearActionOrdersOfUnableBattlersArray','attackSkillId','lineTo','isBuffPrevented','___Game_Battler_onAllActionsEnd___','YEP_InstantCast','___Scene_Battle_onActorOk___','isPhysical','BuffDebuffAgiConvert','otbAddActionTimes','BattleEffects','drawOutlinePolygon','addActor','updateWindowPositions','concat','_actor','_flashColor','isAnyInputWindowActive','___Scene_Battle_createHelpWindow___','_currentTurnSprites','BreakCellX','addCommand','updateOpacity','addState','select','___Window_BattleEnemy_initialize___','agi','canEscape','max','AddedActionTimes','ActionSpeedConvert','_tempBattler','updateNextTurnPreviewTargets','___Window_ActorCommand_makeCommandList___','LogWindowNewY','expTotal','getNextSubject','_setDirty','makeItemList','isSkill','isSubjectAffectedByNote','_actionForcedBattler','EFFECT_ADD_BUFF','isMagical','allBattleMembers','_requestNextTurnSpriteReorder','_moveYRate','shift','isBattleMember','displayEscapeFailureMessage','setupVariableConstants','YEP_X_AnimatedSVEnemies','states','createNewSprites','isDebuffPrevented','_otbBuffDebuffAgiConvert','makeDamageValue','_context','makeActionOrdersOTB','loadPreForceActionSettings','boxWidth','otbBuffDebuffAgiConvert','drawBackgroundText','fillStyle','_buffs','Forced\x20actions\x20do\x20not\x20work\x20on\x20turn\x200.\x20Please\x20use\x20turn\x201.','onTurnEnd','call','sort','height','opacity','applyItemSeal','_sourceArray','RemoveRestrictCurrent','canMove','customEffectEval','createBackground2Sprite','processPopupColorNote','___InstantBattleManager_startAction___','___Game_Battler_removeState___','anchor','strokeStyle','_bigAppearance','getSelectedBattleTargets','create','apply','HelpWindowNewY','forceAction','floor','changeEquip','left','startInput','___Game_Troop_goldTotal___','fill','YEP_X_ActorPartySwitch','indexOf','performActionEnd','otb','subject','enabled','dataId','consumeItem','createHelpWindow','YEP_ImprovedBattlebacks','PartyEnBattle','___Game_Action_customEffectEval___','otbPostPartySwitch','enemy','loadSvActor','_requestCurrentTurnSpriteReorder','_otbFailedEscape','StatesMax','initMembers','inBattle','updateReorderSprites','setStateMaximumTurns','_weakPopup','isPlaytest','___Game_Action_calcElementRate___','jpTotal','YEP_BattleEngineCore','CurrentTurnText','queueForceAction','selectPreviousCommand','Param','_back1Sprite','Enabled','___InstantBattleManager_endAction___','KELYEP_DragonBones','createWeak','_list','isStateAffected','YEP_PartySystem','digitWidth','_helpMoveSpeed','StaticAgiCalculation','isForOne','bitmap','JP\x20x','setHandler','_x2','digitHeight','input','_skillWindow','BECPopupDur','clear','removeChild','___Game_ActionResult_clear___','___Game_Action_isForUser___','_battlerName','scale','_opacityRate','_actors','BreakCellYFactor','getAllIndices','Window_ActorCommand_initialize','_spriteContainer','StackBuffTurns','___BattleManager_isDTB___','guard','___Game_Battler_customEffectEval___','Effects','Battle\x20System\x20OTB\x20Error','_baseScale','addLoadListener','_requestClearUnableBattlers','updateNextTurnPreviewClear','___Game_Battler_performActionEnd___','endAction','prototype','_x1','effects','_nextTurnSprites','___BattleManager_forceAction___','setPreview','_otbInstantCast','splice','___Game_Battler_onBattleEnd___','_processingForcedAction','_stateTurns','___Game_BattlerBase_hide___','isBigCharacter','performFollowUpAction','updateClearUnableBattlers','speed','ActionTimeOrderRandomize','isForUser','WeakCellX','ActiveBattlerMove','_disposedSprites','updateZCoordinates','battlerHue','createReturnedBattlerSprite','loadEnemy','___Sprite_Damage_updateChild___','_previewMode','normalColor','WeakCellWidth','addWindow','BackgroundEnemyColor','otbClearTurnPreview','wtypeId','isItemDivine','_scene','deactivate','onActorCancel','_flashDuration','contentsOpacity','changeActor','_battlerSprite','otbAddActionCost','BreakPopupEnabled'];(function(_0x415d23,_0xae5b70){var _0x3014ed=function(_0x794891){while(--_0x794891){_0x415d23['push'](_0x415d23['shift']());}};_0x3014ed(++_0xae5b70);}(_0xae5b,0x176));var _0x3014=function(_0x415d23,_0xae5b70){_0x415d23=_0x415d23-0x0;var _0x3014ed=_0xae5b[_0x415d23];return _0x3014ed;};if(Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x7c')]){Olivia[_0x3014('0x1ad')]['Effects']=Olivia[_0x3014('0x1ad')]['Effects']||{};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x201')]=BattleManager[_0x3014('0x6e')];BattleManager[_0x3014('0x6e')]=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x201')]['call'](this);this['_battleBonus']='';};Game_Action['prototype'][_0x3014('0xfe')]=function(){var _0x5ed30c=this[_0x3014('0x60')]()[_0x3014('0x32')]();if(this[_0x3014('0x60')]()[_0x3014('0x10c')]()){_0x5ed30c[_0x3014('0x16f')](this[_0x3014('0x60')]()['actor']());_0x5ed30c[_0x3014('0x16f')](this[_0x3014('0x60')]()['currentClass']());var _0x48e7c3=this[_0x3014('0x60')]()['equips']();for(var _0x2c0215=0x0;_0x2c0215<_0x48e7c3[_0x3014('0x197')];_0x2c0215++){var _0x577548=_0x48e7c3[_0x2c0215];if(!!_0x577548){_0x5ed30c[_0x3014('0x16f')](_0x577548);}}}else{_0x5ed30c['push'](this[_0x3014('0x60')]()[_0x3014('0x69')]());}return _0x5ed30c;};Game_Action['prototype'][_0x3014('0x26')]=function(_0x9b4f1f){if(!!this[_0x3014('0x60')]()){var _0x132d5f=this[_0x3014('0xfe')]();for(var _0x2a1102=0x0;_0x2a1102<_0x132d5f[_0x3014('0x197')];_0x2a1102++){var _0x23dc93=_0x132d5f[_0x2a1102];if(!!_0x23dc93&&_0x23dc93['note'][_0x3014('0x1a3')](_0x9b4f1f)){return!![];}}}return![];};Game_Action[_0x3014('0xa7')]['isItemDivine']=function(){return this[_0x3014('0x1bc')]()[_0x3014('0x235')][_0x3014('0x1a3')](/<Divine>/i)||this[_0x3014('0x1bc')]()[_0x3014('0x235')][_0x3014('0x1a3')](/<Bypass Target Change>/i);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x92')]=Game_Action[_0x3014('0xa7')][_0x3014('0xb8')];Game_Action[_0x3014('0xa7')][_0x3014('0xb8')]=function(){if(this[_0x3014('0x25')]()){if(this[_0x3014('0x178')]([0xb])&&this[_0x3014('0x26')](/<Skill Target Change: Self to All>/i)&&!this[_0x3014('0xc8')]()){return![];}}else if(this[_0x3014('0x142')]()){if(this[_0x3014('0x178')]([0xb])&&this[_0x3014('0x26')](/<Item Target Change: Self to All>/i)&&!this[_0x3014('0xc8')]()){return![];}}return Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x92')][_0x3014('0x41')](this);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')]['___Game_Action_isForOne___']=Game_Action[_0x3014('0xa7')][_0x3014('0x86')];Game_Action[_0x3014('0xa7')][_0x3014('0x86')]=function(){if(this[_0x3014('0x25')]()){if(this[_0x3014('0x178')]([0x8])&&this[_0x3014('0x26')](/<Skill Target Change Allies: All to One>/i)&&!this[_0x3014('0xc8')]()){return!![];}else if(this['checkItemScope']([0x2])&&this[_0x3014('0x26')](/<Skill Target Change Enemies: All to One>/i)&&!this[_0x3014('0xc8')]()){return!![];}else if(this[_0x3014('0x178')]([0x7])&&this['isSubjectAffectedByNote'](/<Skill Target Change Allies: One to All>/i)&&!this['isItemDivine']()){return![];}else if(this[_0x3014('0x178')]([0x1])&&this[_0x3014('0x26')](/<Skill Target Change Enemies: One to All>/i)&&!this[_0x3014('0xc8')]()){return![];}else if(this[_0x3014('0x178')]([0xb])&&this[_0x3014('0x26')](/<Skill Target Change: Self to All>/i)&&!this[_0x3014('0xc8')]()){return![];}}else if(this[_0x3014('0x142')]()){if(this[_0x3014('0x178')]([0x8])&&this[_0x3014('0x26')](/<Item Target Change Allies: All to One>/i)&&!this[_0x3014('0xc8')]()){return!![];}else if(this[_0x3014('0x178')]([0x2])&&this[_0x3014('0x26')](/<Item Target Change Enemies: All to One>/i)&&!this['isItemDivine']()){return!![];}else if(this[_0x3014('0x178')]([0x7])&&this[_0x3014('0x26')](/<Item Target Change Allies: One to All>/i)&&!this[_0x3014('0xc8')]()){return![];}else if(this[_0x3014('0x178')]([0x1])&&this[_0x3014('0x26')](/<Item Target Change Enemies: One to All>/i)&&!this[_0x3014('0xc8')]()){return![];}else if(this[_0x3014('0x178')]([0xb])&&this[_0x3014('0x26')](/<Item Target Change: Self to All>/i)&&!this[_0x3014('0xc8')]()){return![];}}return Olivia[_0x3014('0x1ad')][_0x3014('0x9f')]['___Game_Action_isForOne___'][_0x3014('0x41')](this);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x183')]=Game_Action[_0x3014('0xa7')][_0x3014('0x149')];Game_Action[_0x3014('0xa7')][_0x3014('0x149')]=function(){if(this[_0x3014('0x25')]()){if(this[_0x3014('0x178')]([0x8])&&this[_0x3014('0x26')](/<Skill Target Change Allies: All to One>/i)&&!this[_0x3014('0xc8')]()){return![];}else if(this[_0x3014('0x178')]([0x2])&&this[_0x3014('0x26')](/<Skill Target Change Enemies: All to One>/i)&&!this[_0x3014('0xc8')]()){return![];}else if(this[_0x3014('0x178')]([0x7])&&this['isSubjectAffectedByNote'](/<Skill Target Change Allies: One to All>/i)&&!this[_0x3014('0xc8')]()){return!![];}else if(this[_0x3014('0x178')]([0x1])&&this[_0x3014('0x26')](/<Skill Target Change Enemies: One to All>/i)&&!this[_0x3014('0xc8')]()){return!![];}else if(this[_0x3014('0x178')]([0xb])&&this[_0x3014('0x26')](/<Skill Target Change: Self to All>/i)&&!this[_0x3014('0xc8')]()){return!![];}}else if(this[_0x3014('0x142')]()){if(this['checkItemScope']([0x8])&&this[_0x3014('0x26')](/<Item Target Change Allies: All to One>/i)&&!this[_0x3014('0xc8')]()){return![];}else if(this[_0x3014('0x178')]([0x2])&&this[_0x3014('0x26')](/<Item Target Change Enemies: All to One>/i)&&!this[_0x3014('0xc8')]()){return![];}else if(this[_0x3014('0x178')]([0x7])&&this[_0x3014('0x26')](/<Item Target Change Allies: One to All>/i)&&!this[_0x3014('0xc8')]()){return!![];}else if(this[_0x3014('0x178')]([0x1])&&this[_0x3014('0x26')](/<Item Target Change Enemies: One to All>/i)&&!this[_0x3014('0xc8')]()){return!![];}else if(this[_0x3014('0x178')]([0xb])&&this[_0x3014('0x26')](/<Item Target Change: Self to All>/i)&&!this[_0x3014('0xc8')]()){return![];}}return Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x183')][_0x3014('0x41')](this);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x224')]=Game_Action['prototype'][_0x3014('0x123')];Game_Action[_0x3014('0xa7')]['needsSelection']=function(){if(this[_0x3014('0x25')]()){if(this[_0x3014('0x178')]([0x8])&&this[_0x3014('0x26')](/<Skill Target Change Allies: All to One>/i)&&!this['isItemDivine']()){return!![];}else if(this[_0x3014('0x178')]([0x2])&&this[_0x3014('0x26')](/<Skill Target Change Enemies: All to One>/i)&&!this[_0x3014('0xc8')]()){return!![];}else if(this[_0x3014('0x178')]([0x7])&&this[_0x3014('0x26')](/<Skill Target Change Allies: One to All>/i)&&!this[_0x3014('0xc8')]()){return![];}else if(this[_0x3014('0x178')]([0x1])&&this[_0x3014('0x26')](/<Skill Target Change Enemies: One to All>/i)&&!this[_0x3014('0xc8')]()){return![];}}else if(this[_0x3014('0x142')]()){if(this[_0x3014('0x178')]([0x8])&&this['isSubjectAffectedByNote'](/<Item Target Change Allies: All to One>/i)&&!this[_0x3014('0xc8')]()){return!![];}else if(this[_0x3014('0x178')]([0x2])&&this['isSubjectAffectedByNote'](/<Item Target Change Enemies: All to One>/i)&&!this[_0x3014('0xc8')]()){return!![];}else if(this[_0x3014('0x178')]([0x7])&&this['isSubjectAffectedByNote'](/<Item Target Change Allies: One to All>/i)&&!this[_0x3014('0xc8')]()){return![];}else if(this['checkItemScope']([0x1])&&this[_0x3014('0x26')](/<Item Target Change Enemies: One to All>/i)&&!this['isItemDivine']()){return![];}}return Olivia['OctoBattle'][_0x3014('0x9f')][_0x3014('0x224')][_0x3014('0x41')](this);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x1a9')]=Game_Action['prototype'][_0x3014('0x36')];Game_Action[_0x3014('0xa7')][_0x3014('0x36')]=function(_0xb59725,_0x166eb8){this[_0x3014('0x1e7')]=!![];var _0x5ddf6b=Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x1a9')][_0x3014('0x41')](this,_0xb59725,_0x166eb8);this[_0x3014('0x1e7')]=![];return _0x5ddf6b;};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')]['___Game_Action_calcElementRate___']=Game_Action[_0x3014('0xa7')][_0x3014('0x21d')];Game_Action[_0x3014('0xa7')]['calcElementRate']=function(_0x2fb9a9){if(!!this[_0x3014('0x1e7')]){var _0x152903=_0x2fb9a9['states']();for(var _0x49219e=0x0;_0x49219e<_0x152903[_0x3014('0x197')];_0x49219e++){var _0xf3f527=_0x152903[_0x49219e];if(!!_0xf3f527&&_0xf3f527[_0x3014('0x235')]['match'](/<All Element Damage Rate: (\d+)([%％])>/i)){return parseFloat(RegExp['$1'])*0.01;}}}return Olivia[_0x3014('0x1ad')]['Effects'][_0x3014('0x74')][_0x3014('0x41')](this,_0x2fb9a9);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0xe5')]=Game_Action['prototype']['executeDamage'];Game_Action[_0x3014('0xa7')][_0x3014('0x114')]=function(_0x3ee618,_0x1268e1){this['processPopupColorNote'](_0x3ee618,_0x1268e1);Olivia['OctoBattle']['Effects'][_0x3014('0xe5')][_0x3014('0x41')](this,_0x3ee618,_0x1268e1);this[_0x3014('0x20a')](_0x3ee618,_0x1268e1);};Game_Action[_0x3014('0xa7')][_0x3014('0x4b')]=function(_0x45aea0,_0x8a8034){if(!!_0x45aea0&&_0x8a8034>0x0&&this[_0x3014('0x22e')]()){var _0x574d1d=_0x45aea0[_0x3014('0x32')]();for(var _0x1696c4=0x0;_0x1696c4<_0x574d1d[_0x3014('0x197')];_0x1696c4++){var _0x904a25=_0x574d1d[_0x1696c4];if(!!_0x904a25&&_0x904a25[_0x3014('0x235')][_0x3014('0x1a3')](/<Damage Color:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){_0x45aea0[_0x3014('0x1d3')]()[_0x3014('0xf4')]=JSON[_0x3014('0x122')]('['+RegExp['$1'][_0x3014('0x1a3')](/\d+/g)+']');}}}};Game_Action['prototype'][_0x3014('0x20a')]=function(_0x1636ed,_0x200713){if(!!_0x1636ed&&_0x200713>0x0&&this[_0x3014('0x22e')]()&&this[_0x3014('0x21d')](_0x1636ed)>=Olivia[_0x3014('0x1ad')][_0x3014('0x8')]['WeakPopupReqRate']){var _0x4b2d8e=_0x1636ed[_0x3014('0x32')]();for(var _0x167836=0x0;_0x167836<_0x4b2d8e[_0x3014('0x197')];_0x167836++){var _0x5d5527=_0x4b2d8e[_0x167836];if(!!_0x5d5527&&_0x5d5527[_0x3014('0x235')][_0x3014('0x1a3')](/<No Weak Popup>/i)){return;}}_0x1636ed[_0x3014('0x1d3')]()[_0x3014('0x72')]=!![];}};Olivia['OctoBattle'][_0x3014('0x9f')][_0x3014('0x229')]=Game_Action[_0x3014('0xa7')][_0x3014('0x23a')];Game_Action[_0x3014('0xa7')][_0x3014('0x23a')]=function(_0x4cdc18){this[_0x3014('0x207')]();Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x229')][_0x3014('0x41')](this,_0x4cdc18);this[_0x3014('0x12a')](_0x4cdc18);};Game_Action[_0x3014('0xa7')][_0x3014('0x207')]=function(){if(!!this[_0x3014('0x60')]()){if(this[_0x3014('0x5')]()){this['subject']()['_lastActionHitType']=_0x3014('0x1c0');}else if(this[_0x3014('0x29')]()){this[_0x3014('0x60')]()[_0x3014('0x19d')]=_0x3014('0xff');}else if(this[_0x3014('0x243')]()){this[_0x3014('0x60')]()['_lastActionHitType']=_0x3014('0x1db');}else{this[_0x3014('0x60')]()['_lastActionHitType']='none';}}};Game_Action[_0x3014('0xa7')][_0x3014('0x12a')]=function(_0xe5d33){if(!!this[_0x3014('0x1bc')]()){if(this[_0x3014('0x1bc')]()[_0x3014('0x235')][_0x3014('0x1a3')](/<JP x(\d+)>/i)){BattleManager[_0x3014('0x20f')]=_0x3014('0x88')+RegExp['$1'];}else if(this[_0x3014('0x1bc')]()[_0x3014('0x235')]['match'](/<EXP x(\d+)>/i)){BattleManager[_0x3014('0x20f')]=_0x3014('0xf8')+RegExp['$1'];}else if(this[_0x3014('0x1bc')]()[_0x3014('0x235')][_0x3014('0x1a3')](/<Gold x(\d+)>/i)){BattleManager[_0x3014('0x20f')]=_0x3014('0x155')+RegExp['$1'];}}};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')]['___Game_ActionResult_clear___']=Game_ActionResult[_0x3014('0xa7')][_0x3014('0x8f')];Game_ActionResult[_0x3014('0xa7')][_0x3014('0x8f')]=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x91')]['call'](this);this[_0x3014('0xf4')]=undefined;this[_0x3014('0x72')]=undefined;this[_0x3014('0x195')]=undefined;};Olivia['OctoBattle'][_0x3014('0x9f')][_0x3014('0x119')]=Game_BattlerBase[_0x3014('0xa7')][_0x3014('0x130')];Game_BattlerBase[_0x3014('0xa7')][_0x3014('0x130')]=function(_0x11835a){Olivia[_0x3014('0x1ad')][_0x3014('0x9f')]['___Game_BattlerBase_paySkillCost___'][_0x3014('0x41')](this,_0x11835a);this[_0x3014('0x222')](_0x11835a);};Game_BattlerBase[_0x3014('0xa7')][_0x3014('0x222')]=function(_0x30c6f1){this[_0x3014('0x238')]=_0x30c6f1[_0x3014('0x235')]['match'](/<Destroy Weapon>/i)&&this[_0x3014('0x10c')]();};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x139')]=Game_BattlerBase[_0x3014('0xa7')][_0x3014('0x1d8')];Game_BattlerBase[_0x3014('0xa7')]['overwriteBuffTurns']=function(_0x382420,_0x45f7b5){if(this[_0x3014('0x3e')][_0x382420]>0x0&&Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x9b')]){this[_0x3014('0x172')][_0x382420]=this[_0x3014('0x172')][_0x382420]||0x0;this[_0x3014('0x172')][_0x382420]+=_0x45f7b5;this['_buffTurns'][_0x382420]=Math[_0x3014('0x1e6')](this[_0x3014('0x172')][_0x382420],Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x1f7')]);}else if(this[_0x3014('0x3e')][_0x382420]<0x0&&Olivia[_0x3014('0x1ad')]['BattleEffects'][_0x3014('0x11d')]){this[_0x3014('0x172')][_0x382420]=this['_buffTurns'][_0x382420]||0x0;this[_0x3014('0x172')][_0x382420]+=_0x45f7b5;this[_0x3014('0x172')][_0x382420]=Math[_0x3014('0x1e6')](this[_0x3014('0x172')][_0x382420],Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x225')]);}else{Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x139')][_0x3014('0x41')](this,_0x382420,_0x45f7b5);}};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x14e')]=Game_Battler[_0x3014('0xa7')]['startAnimation'];Game_Battler[_0x3014('0xa7')][_0x3014('0xdd')]=function(_0x2fbf09,_0xd15575,_0x5ba1b6){Olivia['OctoBattle']['Effects'][_0x3014('0x14e')][_0x3014('0x41')](this,_0x2fbf09,_0xd15575,_0x5ba1b6);this['_lastAnimationId']=_0x2fbf09;};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x218')]=Game_Battler[_0x3014('0xa7')][_0x3014('0x15')];Game_Battler[_0x3014('0xa7')][_0x3014('0x15')]=function(_0xb8ebbe){if(!this[_0x3014('0x227')](_0xb8ebbe)){var _0x338911=this[_0x3014('0x81')](_0xb8ebbe);Olivia[_0x3014('0x1ad')][_0x3014('0x9f')]['___Game_Battler_addState___'][_0x3014('0x41')](this,_0xb8ebbe);this[_0x3014('0x16a')](_0xb8ebbe,_0x338911);this[_0x3014('0x71')](_0xb8ebbe);}};Game_Battler[_0x3014('0xa7')]['setupBreakDamagePopup']=function(_0x1cf69b,_0x2d35ed){if(!_0x2d35ed&&this[_0x3014('0x81')](_0x1cf69b)&&$dataStates[_0x1cf69b][_0x3014('0x235')][_0x3014('0x1a3')](/<Break Popup>/i)){this[_0x3014('0x1ab')][_0x3014('0x195')]=!![];}};Game_Battler[_0x3014('0xa7')][_0x3014('0x71')]=function(_0x2ee451){if(this[_0x3014('0x81')](_0x2ee451)&&$dataStates[_0x2ee451]['note']['match'](/<Max Turns: (\d+)>/i)){this[_0x3014('0xb1')][_0x2ee451]=Math[_0x3014('0x1e6')](this[_0x3014('0xb1')][_0x2ee451],parseInt(RegExp['$1']));}};Game_Battler[_0x3014('0xa7')][_0x3014('0x227')]=function(_0x3dc129){var _0x321662=[];var _0x557546=this[_0x3014('0x32')]();for(var _0x1670c4=0x0;_0x1670c4<_0x557546[_0x3014('0x197')];_0x1670c4++){var _0x28812f=_0x557546[_0x1670c4];if(!!_0x28812f&&_0x28812f[_0x3014('0x235')][_0x3014('0x1a3')](/<State (?:Immune|Immunity):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x3efb47=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');_0x321662=_0x321662['concat'](_0x3efb47);}}return _0x321662['contains'](_0x3dc129);};Olivia[_0x3014('0x1ad')]['Effects'][_0x3014('0x1f4')]=Game_Battler['prototype']['addBuff'];Game_Battler[_0x3014('0xa7')][_0x3014('0x241')]=function(_0x183940,_0x329914){if(!this[_0x3014('0x1')](_0x183940)){Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x1f4')][_0x3014('0x41')](this,_0x183940,_0x329914);}};Game_Battler[_0x3014('0xa7')][_0x3014('0x1')]=function(_0x424f98){var _0x29b86b=[];var _0x10b0a8=this[_0x3014('0x32')]();for(var _0x1b46fb=0x0;_0x1b46fb<_0x10b0a8[_0x3014('0x197')];_0x1b46fb++){var _0xcbee94=_0x10b0a8[_0x1b46fb];if(!!_0xcbee94&&_0xcbee94['note'][_0x3014('0x1a3')](/<Buff (?:Immune|Immunity):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x5d2bd7=JSON[_0x3014('0x122')]('['+RegExp['$1'][_0x3014('0x1a3')](/\d+/g)+']');_0x29b86b=_0x29b86b[_0x3014('0xc')](_0x5d2bd7);}}return _0x29b86b[_0x3014('0xdb')](_0x424f98);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0xeb')]=Game_Battler['prototype'][_0x3014('0x14c')];Game_Battler[_0x3014('0xa7')][_0x3014('0x14c')]=function(_0x4f7e17,_0x31f9b0){if(!this[_0x3014('0x34')](_0x4f7e17)){Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0xeb')]['call'](this,_0x4f7e17,_0x31f9b0);}};Game_Battler[_0x3014('0xa7')]['isDebuffPrevented']=function(_0x25c275){var _0x563c5b=[];var _0x8be55=this[_0x3014('0x32')]();for(var _0x61f6e=0x0;_0x61f6e<_0x8be55[_0x3014('0x197')];_0x61f6e++){var _0x504238=_0x8be55[_0x61f6e];if(!!_0x504238&&_0x504238[_0x3014('0x235')][_0x3014('0x1a3')](/<Debuff (?:Immune|Immunity):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x971d=JSON[_0x3014('0x122')]('['+RegExp['$1'][_0x3014('0x1a3')](/\d+/g)+']');_0x563c5b=_0x563c5b[_0x3014('0xc')](_0x971d);}}return _0x563c5b[_0x3014('0xdb')](_0x25c275);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x2')]=Game_Battler[_0x3014('0xa7')][_0x3014('0x133')];Game_Battler[_0x3014('0xa7')][_0x3014('0x133')]=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x2')][_0x3014('0x41')](this);this[_0x3014('0xd2')]();this[_0x3014('0xb4')]();};Game_Battler['prototype'][_0x3014('0xd2')]=function(){if(!!this['_destroyWeapon']&&this[_0x3014('0x10c')]()){this[_0x3014('0x238')]=![];var _0x1144e9=this[_0x3014('0x15f')]()[0x0];this[_0x3014('0x57')](0x0,null);$gameParty[_0x3014('0x151')](_0x1144e9,0x1,![]);if(Olivia['OctoBattle'][_0x3014('0x13d')]&&Olivia[_0x3014('0x1ad')]['WeaponSwap'][_0x3014('0x7c')]&&!!this[_0x3014('0x153')]()){this[_0x3014('0x21f')](this[_0x3014('0x153')]()[_0x3014('0xc7')],![]);}}};Game_Battler[_0x3014('0xa7')][_0x3014('0xb4')]=function(){if(Imported[_0x3014('0x76')]){var _0x8e9e28=this['states']();for(var _0x13481f=0x0;_0x13481f<_0x8e9e28[_0x3014('0x197')];_0x13481f++){var _0x2b73f2=_0x8e9e28[_0x13481f];if(!!_0x2b73f2){if(this[_0x3014('0x19d')]===_0x3014('0x1c0')&&_0x2b73f2[_0x3014('0x235')]['match'](/<Physical Follow Up Skill: (\d+)>/i)){var _0x2ffb48=parseInt(RegExp['$1']);BattleManager['queueForceAction'](this,_0x2ffb48,-0x2);}else if(this[_0x3014('0x19d')]==='magical'&&_0x2b73f2['note'][_0x3014('0x1a3')](/<Magical Follow Up Skill: (\d+)>/i)){var _0x2ffb48=parseInt(RegExp['$1']);BattleManager[_0x3014('0x78')](this,_0x2ffb48,-0x2);}else if(this[_0x3014('0x19d')]===_0x3014('0x1db')&&_0x2b73f2['note'][_0x3014('0x1a3')](/<Certain Follow Up Skill: (\d+)>/i)){var _0x2ffb48=parseInt(RegExp['$1']);BattleManager[_0x3014('0x78')](this,_0x2ffb48,-0x2);}else if(this[_0x3014('0x19d')]!==_0x3014('0x1db')&&_0x2b73f2[_0x3014('0x235')][_0x3014('0x1a3')](/<Follow Up Skill: (\d+)>/i)){var _0x2ffb48=parseInt(RegExp['$1']);BattleManager[_0x3014('0x78')](this,_0x2ffb48,-0x2);}}}}};Olivia[_0x3014('0x1ad')]['Effects'][_0x3014('0x1ed')]=Game_BattlerBase[_0x3014('0xa7')][_0x3014('0x185')];Game_BattlerBase[_0x3014('0xa7')][_0x3014('0x185')]=function(_0x27ba9c){if($gameParty[_0x3014('0x6f')]()&&this[_0x3014('0x32')]()[_0x3014('0x197')]>0x0){var _0x212473=this[_0x3014('0x32')]();for(var _0x42d7f4=0x0;_0x42d7f4<_0x212473[_0x3014('0x197')];_0x42d7f4++){var _0x515d8c=_0x212473[_0x42d7f4];if(!!_0x515d8c&&_0x515d8c[_0x3014('0x235')]['match'](/<Item Seal>/i)){return![];}}}return Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x1ed')][_0x3014('0x41')](this,_0x27ba9c);};Olivia['OctoBattle']['Effects'][_0x3014('0x22b')]=Game_Troop[_0x3014('0xa7')][_0x3014('0x21')];Game_Troop[_0x3014('0xa7')][_0x3014('0x21')]=function(){var _0x2e160f=Olivia['OctoBattle'][_0x3014('0x9f')][_0x3014('0x22b')][_0x3014('0x41')](this);if(BattleManager[_0x3014('0x20f')]['match'](/EXP x(\d+)/i)){_0x2e160f*=parseInt(RegExp['$1']);}return Math[_0x3014('0x158')](_0x2e160f);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')]['___Game_Troop_goldTotal___']=Game_Troop[_0x3014('0xa7')][_0x3014('0x198')];Game_Troop[_0x3014('0xa7')][_0x3014('0x198')]=function(){var _0x7d6d6f=Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x5a')][_0x3014('0x41')](this);if(BattleManager[_0x3014('0x20f')][_0x3014('0x1a3')](/Gold x(\d+)/i)){_0x7d6d6f*=parseInt(RegExp['$1']);}return Math[_0x3014('0x158')](_0x7d6d6f);};if(Imported['YEP_JobPoints']){Olivia[_0x3014('0x1ad')]['Effects'][_0x3014('0xf7')]=Game_Troop[_0x3014('0xa7')][_0x3014('0x75')];Game_Troop['prototype'][_0x3014('0x75')]=function(){var _0x224a9a=Olivia['OctoBattle'][_0x3014('0x9f')][_0x3014('0xf7')][_0x3014('0x41')](this);if(BattleManager[_0x3014('0x20f')][_0x3014('0x1a3')](/JP x(\d+)/i)){_0x224a9a*=parseInt(RegExp['$1']);}return Math[_0x3014('0x158')](_0x224a9a);};}Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x1f5')]=Scene_Battle[_0x3014('0xa7')]['isAnyInputWindowActive'];Scene_Battle[_0x3014('0xa7')][_0x3014('0xf')]=function(){if(!!this[_0x3014('0xf3')]&&this[_0x3014('0xf3')]['active']){return!![];}return Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x1f5')][_0x3014('0x41')](this);};Olivia['OctoBattle']['Effects']['___Scene_Battle_updateWindowPositions___']=Scene_Battle[_0x3014('0xa7')][_0x3014('0xb')];Scene_Battle[_0x3014('0xa7')]['updateWindowPositions']=function(){Olivia['OctoBattle'][_0x3014('0x9f')]['___Scene_Battle_updateWindowPositions___'][_0x3014('0x41')](this);if(BattleManager['isInputting']()){if(!!this[_0x3014('0xf3')]&&this[_0x3014('0xf3')][_0x3014('0x1f2')]){this['_skillWindow'][_0x3014('0x135')]();this[_0x3014('0xf3')][_0x3014('0x135')]();}}};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x22f')]=Scene_Battle[_0x3014('0xa7')][_0x3014('0x219')];Scene_Battle[_0x3014('0xa7')][_0x3014('0x219')]=function(){if(this[_0x3014('0x8d')]['item']()[_0x3014('0x235')][_0x3014('0x1a3')](/<Extra Skill List:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var _0x181e3e=JSON[_0x3014('0x122')]('['+RegExp['$1'][_0x3014('0x1a3')](/\d+/g)+']');this[_0x3014('0x23b')](_0x181e3e);}else{Olivia[_0x3014('0x1ad')][_0x3014('0x9f')]['___Scene_Battle_onSkillOk___'][_0x3014('0x41')](this);}};Scene_Battle['prototype'][_0x3014('0x23b')]=function(_0x3ed4d4){if(!this['_extraSkillWindow']){var _0x41b307=this['_skillWindow']['x'];var _0x5ede18=this[_0x3014('0x8d')]['y'];var _0x3633f8=this['_skillWindow'][_0x3014('0x164')];var _0x13a09d=this[_0x3014('0x8d')][_0x3014('0x43')];this[_0x3014('0xf3')]=new Window_BattleSkillExtra(_0x41b307,_0x5ede18,_0x3633f8,_0x13a09d);this[_0x3014('0xf3')]['setHelpWindow'](this[_0x3014('0x1e5')]);this[_0x3014('0xf3')][_0x3014('0x89')]('ok',this[_0x3014('0xec')][_0x3014('0x1fc')](this));this[_0x3014('0xf3')][_0x3014('0x89')](_0x3014('0x208'),this[_0x3014('0xf5')][_0x3014('0x1fc')](this));this[_0x3014('0xc4')](this[_0x3014('0xf3')]);}this[_0x3014('0xf3')][_0x3014('0x1c5')](BattleManager[_0x3014('0x226')]());this['_extraSkillWindow'][_0x3014('0x199')](_0x3ed4d4);};Scene_Battle[_0x3014('0xa7')][_0x3014('0xec')]=function(){this[_0x3014('0x1eb')]=!![];this[_0x3014('0x1c9')]=this[_0x3014('0x8d')]['index']();var _0x62738a=this[_0x3014('0x8d')];this[_0x3014('0x8d')]=this[_0x3014('0xf3')];Olivia[_0x3014('0x1ad')]['Effects'][_0x3014('0x22f')][_0x3014('0x41')](this);this[_0x3014('0x8d')]=_0x62738a;};Scene_Battle[_0x3014('0xa7')][_0x3014('0xf5')]=function(){this['_extraSkillWindowProcess']=![];this[_0x3014('0xf3')][_0x3014('0x15e')]();this[_0x3014('0x8d')][_0x3014('0x220')]();this[_0x3014('0x1e5')][_0x3014('0x1a7')]();};Scene_Battle['prototype'][_0x3014('0x10a')]=function(){if(this[_0x3014('0x1eb')]){this['_extraSkillWindowProcess']=![];this[_0x3014('0x8d')]['deactivate']();this['_skillWindow'][_0x3014('0x16')](this['_skillWindowLastIndex']);this[_0x3014('0xf3')][_0x3014('0x1a7')]();this[_0x3014('0xf3')][_0x3014('0x220')]();}};Olivia[_0x3014('0x1ad')]['Effects'][_0x3014('0x4')]=Scene_Battle[_0x3014('0xa7')]['onActorOk'];Scene_Battle[_0x3014('0xa7')]['onActorOk']=function(){this['_extraSkillWindowProcess']=![];Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x4')][_0x3014('0x41')](this);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')]['___Scene_Battle_onActorCancel___']=Scene_Battle[_0x3014('0xa7')][_0x3014('0xcb')];Scene_Battle[_0x3014('0xa7')][_0x3014('0xcb')]=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x1cd')]['call'](this);this[_0x3014('0x10a')]();};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x14b')]=Scene_Battle[_0x3014('0xa7')][_0x3014('0xe2')];Scene_Battle[_0x3014('0xa7')][_0x3014('0xe2')]=function(){this['_extraSkillWindowProcess']=![];Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x14b')][_0x3014('0x41')](this);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x110')]=Scene_Battle['prototype'][_0x3014('0x1ac')];Scene_Battle[_0x3014('0xa7')][_0x3014('0x1ac')]=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x110')]['call'](this);this[_0x3014('0x10a')]();};Olivia['OctoBattle'][_0x3014('0x9f')]['___Sprite_Battler_setupDamagePopup___']=Sprite_Battler[_0x3014('0xa7')][_0x3014('0x18b')];Sprite_Battler['prototype'][_0x3014('0x18b')]=function(){this['setupOctoSpecialEffectDamagePopup']();Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x1be')]['call'](this);};Sprite_Battler['prototype'][_0x3014('0x1dc')]=function(){if(this[_0x3014('0x1f9')][_0x3014('0x16c')]()&&this[_0x3014('0x1f9')][_0x3014('0x126')]()){if(!!this[_0x3014('0x1f9')][_0x3014('0x1ab')][_0x3014('0x195')]&&Olivia['OctoBattle'][_0x3014('0x8')][_0x3014('0xd1')]){this['setupBreakDamagePopup']();}else if(!!this['_battler'][_0x3014('0x1ab')][_0x3014('0x72')]&&Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x203')]){this[_0x3014('0x159')]();}}};Sprite_Battler[_0x3014('0xa7')][_0x3014('0x16a')]=function(){var _0x3f3539=new Sprite_Damage();_0x3f3539['x']=this['x']-Math[_0x3014('0x231')](this[_0x3014('0x164')]*Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x103')]);_0x3f3539['y']=this['y']-Math[_0x3014('0x231')](this[_0x3014('0x43')]*Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x97')]);_0x3f3539[_0x3014('0x121')]();BattleManager[_0x3014('0xfc')][_0x3014('0x204')](_0x3f3539);this['_battler'][_0x3014('0x13a')]();};Sprite_Battler['prototype'][_0x3014('0x159')]=function(){var _0x5ac970=new Sprite_Damage();_0x5ac970['x']=this['x']-Math[_0x3014('0x231')](this['width']*Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x152')]);_0x5ac970['y']=this['y']-Math[_0x3014('0x231')](this[_0x3014('0x43')]*Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x180')]);_0x5ac970[_0x3014('0x7f')]();BattleManager[_0x3014('0xfc')][_0x3014('0x204')](_0x5ac970);this[_0x3014('0x1f9')][_0x3014('0x13a')]();};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x148')]=Sprite_Damage[_0x3014('0xa7')]['setup'];Sprite_Damage[_0x3014('0xa7')]['setup']=function(_0x338b64){Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x148')][_0x3014('0x41')](this,_0x338b64);if(!!_0x338b64[_0x3014('0x1d3')]()[_0x3014('0xf4')]){this[_0x3014('0x116')](_0x338b64['result']()[_0x3014('0xf4')]);}};Sprite_Damage[_0x3014('0xa7')][_0x3014('0x116')]=function(_0xe58ff0){this[_0x3014('0xe')]=[_0xe58ff0[0x0],_0xe58ff0[0x1],_0xe58ff0[0x2],_0xe58ff0[0x3]];this[_0x3014('0xcc')]=0x22b8;};Sprite_Damage[_0x3014('0xa7')][_0x3014('0x121')]=function(){var _0x1ba685=this[_0x3014('0x83')]()*Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x12')];var _0x527821=0x4*this[_0x3014('0x8b')]();var _0x4ca83f=this['digitWidth']()*Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x127')];var _0x2c3509=this[_0x3014('0x8b')]();var _0x29512c=this[_0x3014('0x22c')]();_0x29512c[_0x3014('0x104')](_0x1ba685,_0x527821,_0x4ca83f,_0x2c3509);_0x29512c[_0x3014('0x15a')]=!![];_0x29512c[_0x3014('0x4e')]['x']=0.5;_0x29512c[_0x3014('0x4e')]['y']=0.5;if(Imported[_0x3014('0x76')]){this[_0x3014('0x16e')]=Yanfly[_0x3014('0x7a')]['BECPopupDur'];}this[_0x3014('0x1b7')]=Olivia[_0x3014('0x1ad')]['BattleEffects']['BreakMoveXBase'];this[_0x3014('0x234')]=Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x1a5')];this[_0x3014('0x17d')]=Olivia[_0x3014('0x1ad')]['BattleEffects']['BreakMoveYBase'];this['_moveYRate']=Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x1a8')];};Sprite_Damage[_0x3014('0xa7')][_0x3014('0x7f')]=function(){var _0x427e99=this[_0x3014('0x83')]()*Olivia[_0x3014('0x1ad')]['BattleEffects'][_0x3014('0xb9')];var _0x37d1cc=0x4*this[_0x3014('0x8b')]();var _0x3a51a3=this[_0x3014('0x83')]()*Olivia['OctoBattle']['BattleEffects'][_0x3014('0xc3')];var _0x4845f9=this[_0x3014('0x8b')]();var _0x39d5a7=this[_0x3014('0x22c')]();_0x39d5a7[_0x3014('0x104')](_0x427e99,_0x37d1cc,_0x3a51a3,_0x4845f9);_0x39d5a7[_0x3014('0x15a')]=!![];_0x39d5a7[_0x3014('0x4e')]['x']=0.5;_0x39d5a7[_0x3014('0x4e')]['y']=0.5;if(Imported[_0x3014('0x76')]){this['_duration']=Yanfly[_0x3014('0x7a')][_0x3014('0x8e')];}this[_0x3014('0x1b7')]=Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x131')];this[_0x3014('0x234')]=Olivia[_0x3014('0x1ad')][_0x3014('0x8')][_0x3014('0x1f0')];this['_moveYBase']=Olivia[_0x3014('0x1ad')][_0x3014('0x8')]['WeakMoveYBase'];this[_0x3014('0x2c')]=Olivia[_0x3014('0x1ad')][_0x3014('0x8')]['WeakMoveYRate'];};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0xc0')]=Sprite_Damage[_0x3014('0xa7')][_0x3014('0x1fe')];Sprite_Damage[_0x3014('0xa7')][_0x3014('0x1fe')]=function(_0x562880){if(_0x562880[_0x3014('0x15a')]){this['updateBreakPopup'](_0x562880);}else{Olivia['OctoBattle'][_0x3014('0x9f')][_0x3014('0xc0')][_0x3014('0x41')](this,_0x562880);}};Sprite_Damage['prototype'][_0x3014('0x1a2')]=function(_0x412cf7){this[_0x3014('0x16e')]--;this['x']+=this[_0x3014('0x1b7')];this['_moveXBase']*=this[_0x3014('0x234')];this['y']+=this[_0x3014('0x17d')];this[_0x3014('0x17d')]*=this[_0x3014('0x2c')];};function Window_BattleSkillExtra(){this[_0x3014('0x1a0')]['apply'](this,arguments);}Window_BattleSkillExtra[_0x3014('0xa7')]=Object[_0x3014('0x52')](Window_BattleSkill['prototype']);Window_BattleSkillExtra[_0x3014('0xa7')][_0x3014('0x1f8')]=Window_BattleSkillExtra;Window_BattleSkillExtra[_0x3014('0xa7')][_0x3014('0x1a0')]=function(_0x3c2cec,_0x1b2480,_0x44b099,_0x3a5f2c){this[_0x3014('0x1b2')]=[];Window_BattleSkill[_0x3014('0xa7')][_0x3014('0x1a0')][_0x3014('0x41')](this,_0x3c2cec,_0x1b2480,_0x44b099,_0x3a5f2c);};Window_BattleSkillExtra[_0x3014('0xa7')][_0x3014('0x199')]=function(_0x4a67b7){this['_skillList']=_0x4a67b7;this[_0x3014('0x1b8')]();this[_0x3014('0x220')]();this[_0x3014('0x135')]();this[_0x3014('0x1a7')]();};Window_BattleSkillExtra['prototype'][_0x3014('0x24')]=function(){this['_data']=[];if(this[_0x3014('0x1b2')]&&!!this[_0x3014('0xd')]){var _0x2c7185=this[_0x3014('0xd')]['skills']();for(var _0x40296d=0x0;_0x40296d<this[_0x3014('0x1b2')][_0x3014('0x197')];_0x40296d++){var _0x5412c4=$dataSkills[this['_skillList'][_0x40296d]];if(!!_0x5412c4&&_0x2c7185[_0x3014('0xdb')](_0x5412c4)){this[_0x3014('0x1ce')][_0x3014('0x16f')](_0x5412c4);}}}};Window_BattleSkillExtra[_0x3014('0xa7')][_0x3014('0x135')]=function(){this['_positionXCorrection']=0x20;this[_0x3014('0x22d')]=0x20;Window_ActorCommand[_0x3014('0xa7')]['updatePosition'][_0x3014('0x41')](this);};Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x1b6')]=Window_ActorCommand[_0x3014('0xa7')][_0x3014('0x1c4')];Window_ActorCommand['prototype'][_0x3014('0x1c4')]=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x9f')][_0x3014('0x1b6')][_0x3014('0x41')](this);if(!!this[_0x3014('0xd')]){this['applyItemSeal']();}};Window_ActorCommand['prototype'][_0x3014('0x45')]=function(){var _0x925bd0=this[_0x3014('0x12b')](_0x3014('0x1bc'));if(_0x925bd0>=0x0){var _0x22540b=this[_0x3014('0xd')][_0x3014('0x32')]();for(var _0x5ad425=0x0;_0x5ad425<_0x22540b['length'];_0x5ad425++){var _0xf13542=_0x22540b[_0x5ad425];if(!!_0xf13542&&_0xf13542[_0x3014('0x235')][_0x3014('0x1a3')](/<Item Seal>/i)){this[_0x3014('0x80')][_0x925bd0][_0x3014('0x61')]=![];return;}}}};}if(Imported[_0x3014('0x76')]&&Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x7c')]){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')]=Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')]||{};Object[_0x3014('0x236')](Array['prototype'],{'getAllIndices':{'enumerable':![],'value':function(_0x422373){var _0x4ccd02=[];for(var _0x5c36b4=0x0;_0x5c36b4<this[_0x3014('0x197')];_0x5c36b4++){if(this[_0x5c36b4]===_0x422373){_0x4ccd02[_0x3014('0x16f')](_0x5c36b4);}}return _0x4ccd02;}}});Bitmap[_0x3014('0xa7')][_0x3014('0x9')]=function(_0x3c9da0,_0x476ac7,_0x39c57d,_0x2a6ecf,_0x5f565d,_0x4e733b){var _0xb7c0e8=this[_0x3014('0x37')];_0xb7c0e8[_0x3014('0x1c8')]();_0xb7c0e8[_0x3014('0x1f6')]();_0xb7c0e8[_0x3014('0x19c')](_0x3c9da0[0x0],_0x3c9da0[0x1]);for(var _0x491a53=0x2;_0x491a53<_0x3c9da0[_0x3014('0x197')];_0x491a53+=0x2){_0xb7c0e8[_0x3014('0x0')](_0x3c9da0[_0x491a53],_0x3c9da0[_0x491a53+0x1]);}_0xb7c0e8['lineTo'](_0x3c9da0[0x0],_0x3c9da0[0x1]);_0xb7c0e8[_0x3014('0x4f')]=_0x476ac7;_0xb7c0e8[_0x3014('0x17a')]=_0x2a6ecf;if(_0x4e733b){_0xb7c0e8[_0x3014('0x206')]();}_0xb7c0e8['globalAlpha']=_0x5f565d;_0xb7c0e8[_0x3014('0x3d')]=_0x39c57d;_0xb7c0e8[_0x3014('0x5b')]();_0xb7c0e8[_0x3014('0x160')]=0x1;_0xb7c0e8['restore']();this[_0x3014('0x23')]();};Yanfly['Param'][_0x3014('0x1cb')]=!![];if(Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x10e')]){Yanfly['Param'][_0x3014('0x1da')]='otb';}Yanfly[_0x3014('0x7a')][_0x3014('0x21c')]=![];Yanfly[_0x3014('0x7a')][_0x3014('0x66')]=![];DataManager[_0x3014('0x3b')]=function(_0x51c950){if(BattleManager[_0x3014('0xdf')]()&&Olivia[_0x3014('0x1ad')]['OTB'][_0x3014('0x6')]&&!!_0x51c950&&!_0x51c950[_0x3014('0x35')]){_0x51c950[_0x3014('0x35')]=!![];for(var _0xf2a3f2=0x0;_0xf2a3f2<_0x51c950[_0x3014('0xa9')][_0x3014('0x197')];_0xf2a3f2++){var _0x14fe2d=_0x51c950[_0x3014('0xa9')][_0xf2a3f2];if(_0x14fe2d[_0x3014('0x184')]===Game_Action[_0x3014('0x28')]&&_0x14fe2d[_0x3014('0x62')]===0x6){_0x51c950[_0x3014('0x235')]+=_0x3014('0x192');}if(_0x14fe2d[_0x3014('0x184')]===Game_Action[_0x3014('0x28')]&&_0x14fe2d[_0x3014('0x62')]===0x6){_0x51c950[_0x3014('0x235')]+=_0x3014('0x1ba');}}}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x201')]=BattleManager[_0x3014('0x6e')];BattleManager[_0x3014('0x6e')]=function(){Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x201')][_0x3014('0x41')](this);if(this[_0x3014('0xdf')]()){this['_nextTurnActionBattlers']=[];this[_0x3014('0x19f')]=![];this[_0x3014('0x124')]=![];this[_0x3014('0x12f')]=![];this[_0x3014('0x1a6')]=![];this[_0x3014('0x107')]=![];this[_0x3014('0xd9')]=![];this[_0x3014('0xa3')]=![];this[_0x3014('0x209')]=null;this[_0x3014('0x18a')]=![];this[_0x3014('0x6b')]=![];this[_0x3014('0x2b')]=![];this[_0x3014('0x12d')]=![];}};Olivia['OctoBattle'][_0x3014('0x1b9')][_0x3014('0x9c')]=BattleManager[_0x3014('0x217')];BattleManager[_0x3014('0x217')]=function(){if(this['isOTB']()){return![];}else{return Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x9c')][_0x3014('0x41')](this);}};BattleManager[_0x3014('0xdf')]=function(){if(Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x10e')]){return!![];}else{return this['isBattleSystem'](_0x3014('0x5f'));}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xe4')]=BattleManager[_0x3014('0x162')];BattleManager[_0x3014('0x162')]=function(){if(this[_0x3014('0xdf')]()){return!![];}else{return Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0xe4')][_0x3014('0x41')](this);}};BattleManager[_0x3014('0x20b')]=function(){return SceneManager['_scene'][_0x3014('0x202')];};Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x118')]=BattleManager['endBattle'];BattleManager[_0x3014('0x13b')]=function(_0x1ce4c5){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x118')][_0x3014('0x41')](this,_0x1ce4c5);this[_0x3014('0x12d')]=!![];};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x232')]=BattleManager[_0x3014('0x59')];BattleManager[_0x3014('0x59')]=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x232')][_0x3014('0x41')](this);if(this[_0x3014('0xdf')]()&&this[_0x3014('0x11b')]!==_0x3014('0x112')){this[_0x3014('0x19a')]();}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x120')]=BattleManager['startTurn'];BattleManager[_0x3014('0x19a')]=function(){if(this[_0x3014('0x6c')]){this['otbFailedEscape']();}else{Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x120')][_0x3014('0x41')](this);}};BattleManager[_0x3014('0x244')]=function(){this['_otbFailedEscape']=![];$gameParty[_0x3014('0x176')]();};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x140')]=BattleManager[_0x3014('0x165')];BattleManager[_0x3014('0x165')]=function(){if(this[_0x3014('0xdf')]()&&this[_0x3014('0x1ef')][_0x3014('0x10c')]()){this[_0x3014('0x239')]();}else{Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x140')][_0x3014('0x41')](this);}};BattleManager['startOTBInput']=function(){this[_0x3014('0x11b')]=_0x3014('0x8c');var _0x2675b5=this[_0x3014('0x1ef')];if(!!_0x2675b5){BattleManager[_0x3014('0xce')](_0x2675b5[_0x3014('0xe1')](),_0x3014('0x170'));if(!_0x2675b5[_0x3014('0x1e4')]()){_0x2675b5[_0x3014('0x100')]();this[_0x3014('0x1e8')]();}}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x179')]=BattleManager['getNextSubject'];BattleManager[_0x3014('0x22')]=function(){if(this[_0x3014('0xdf')]()){this[_0x3014('0x1ef')]=this[_0x3014('0xe6')]();if(!!this[_0x3014('0x1ef')]){this['_subject'][_0x3014('0x100')]();}this['otbDisplayWindow']()[_0x3014('0xfb')]();return this[_0x3014('0x1ef')];}else{return Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x179')][_0x3014('0x41')](this);}};BattleManager[_0x3014('0xe6')]=function(){for(;;){var _0xfc1575=this[_0x3014('0x177')][_0x3014('0x2d')]();if(!_0xfc1575){return null;}if(_0xfc1575[_0x3014('0x2e')]()&&_0xfc1575[_0x3014('0x10f')]()){return _0xfc1575;}}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x11c')]=BattleManager[_0x3014('0x79')];BattleManager['selectPreviousCommand']=function(){if(this['isOTB']()){this[_0x3014('0x1a1')]=this[_0x3014('0x129')];this[_0x3014('0x1ef')]=null;this[_0x3014('0xce')](-0x1,_0x3014('0x170'));}else{Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')]['___BattleManager_selectPreviousCommand___'][_0x3014('0x41')](this);}};Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x23d')]=BattleManager['displayEscapeFailureMessage'];BattleManager[_0x3014('0x2f')]=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x23d')][_0x3014('0x41')](this);if(this[_0x3014('0xdf')]()){this['endAction']();this[_0x3014('0x6c')]=!![];}};BattleManager[_0x3014('0x1e9')]=function(){BattleManager[_0x3014('0xce')](this['_activeOTBActor'],_0x3014('0x170'));this[_0x3014('0x1ef')]=this[_0x3014('0x226')]();};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x175')]=BattleManager[_0x3014('0x14d')];BattleManager[_0x3014('0x14d')]=function(){if(this[_0x3014('0xdf')]()){if(this[_0x3014('0x1ef')]){this['startAction']();}else{this[_0x3014('0x1e9')]();this[_0x3014('0x239')]();}}else{Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')]['___BattleManager_selectNextCommand___'][_0x3014('0x41')](this);}};Olivia[_0x3014('0x1ad')]['Battle']['___BattleManager_startAction___']=BattleManager[_0x3014('0x1e8')];BattleManager[_0x3014('0x1e8')]=function(){if(Imported[_0x3014('0x3')]){this['detectOtbInstantCast']();}Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xea')][_0x3014('0x41')](this);};if(Imported['YEP_InstantCast']){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x4c')]=BattleManager[_0x3014('0x1e8')];BattleManager[_0x3014('0x1e8')]=function(){this[_0x3014('0x106')]=!![];Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x4c')]['call'](this);};}Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x128')]=BattleManager['endAction'];BattleManager[_0x3014('0xa6')]=function(){if(this[_0x3014('0xdf')]()){this[_0x3014('0x190')]();}else{Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x128')]['call'](this);}};if(Imported['YEP_InstantCast']){Olivia['OctoBattle'][_0x3014('0x1b9')][_0x3014('0x7d')]=BattleManager['endAction'];BattleManager[_0x3014('0xa6')]=function(){if(this[_0x3014('0xdf')]()&&this[_0x3014('0x182')]){this['endActorInstantCast']();}else{Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x7d')][_0x3014('0x41')](this);}this[_0x3014('0x106')]=![];};}BattleManager[_0x3014('0x190')]=function(){this[_0x3014('0x11b')]=_0x3014('0x112');if(this[_0x3014('0xad')]){this[_0x3014('0xad')]=![];if(this[_0x3014('0x1ef')][_0x3014('0x113')]()){this[_0x3014('0x177')][_0x3014('0x1e1')](this[_0x3014('0x1ef')]);this[_0x3014('0x1ef')][_0x3014('0x100')]();}return Yanfly[_0x3014('0x161')][_0x3014('0x11f')]['call'](this);}if(this['_subject']){this[_0x3014('0x1ef')]['spriteStepBack']();if(Imported[_0x3014('0x1d9')]){this[_0x3014('0x1ef')]['onActionEndStateEffects']();}this[_0x3014('0x1ef')]['onAllActionsEnd']();this[_0x3014('0x1ef')][_0x3014('0x19b')]();}if(this[_0x3014('0xb0')]){this[_0x3014('0x11b')]=this[_0x3014('0x20e')];this[_0x3014('0xb0')]=![];}if(this[_0x3014('0x39')]()){return;}this[_0x3014('0x1b1')]();this[_0x3014('0x1ef')]=null;this[_0x3014('0x14a')]();Yanfly['BEC']['BattleManager_endAction'][_0x3014('0x41')](this);};BattleManager[_0x3014('0x14a')]=function(){var _0x5c9e41=this[_0x3014('0x246')](this[_0x3014('0x177')]);var _0x84ac26=this[_0x3014('0x246')](this['_nextTurnActionBattlers']);this[_0x3014('0xa3')]=_0x5c9e41||_0x84ac26;};BattleManager[_0x3014('0x246')]=function(_0x1d43a3){var _0xc83cc2=![];for(var _0x5db702=0x0;_0x5db702<_0x1d43a3[_0x3014('0x197')];_0x5db702++){var _0x281059=_0x1d43a3[_0x5db702];if(!!_0x281059){if(this['otbCheckIfBattlerIsUnable'](_0x281059,_0x1d43a3)){_0x1d43a3[_0x3014('0xae')](_0x5db702,0x1);_0x5db702--;this[_0x3014('0x124')]=!![];this[_0x3014('0x1a6')]=!![];_0xc83cc2=!![];}}}return _0xc83cc2;};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xab')]=BattleManager[_0x3014('0x55')];BattleManager['forceAction']=function(_0x43ab21){if(this[_0x3014('0xdf')]()){if($gameTroop[_0x3014('0x1ea')]()>0x0){_0x43ab21[_0x3014('0x1b0')]-=0x1;this[_0x3014('0x22a')](_0x43ab21);}else if($gameTemp[_0x3014('0x73')]()){var _0x589ef5=_0x3014('0x3f');SceneManager[_0x3014('0xd6')]();Graphics[_0x3014('0x18d')](_0x3014('0xa0'),_0x589ef5);}}else{Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xab')][_0x3014('0x41')](this,_0x43ab21);}};BattleManager['otbForceAction']=function(_0x2bbb5d){if(this['_subject'])this[_0x3014('0x1ef')][_0x3014('0x13a')]();this[_0x3014('0x1cf')]();this[_0x3014('0x15b')]();this[_0x3014('0x27')]=_0x2bbb5d;};BattleManager['otbCheckIfBattlerIsUnable']=function(_0x15aabc,_0x4bf7b8){if(_0x15aabc['isDead']()||_0x15aabc['isHidden']()){return!![];}else if(!_0x15aabc[_0x3014('0x48')]()&&_0x4bf7b8===this[_0x3014('0x177')]){return!![];}else if(!this[_0x3014('0x2a')]()[_0x3014('0xdb')](_0x15aabc)){return!![];}else if(!_0x15aabc[_0x3014('0x48')]()&&_0x4bf7b8===this[_0x3014('0xd5')]){var _0x4d11d5=JsonEx[_0x3014('0xdc')](_0x15aabc);_0x4d11d5[_0x3014('0x1d')]=!![];_0x4d11d5[_0x3014('0xf0')]();_0x4d11d5[_0x3014('0x1b8')]();return!_0x4d11d5[_0x3014('0x48')]();}else{return![];}};BattleManager[_0x3014('0x1cc')]=function(_0x12de48){_0x12de48[_0x3014('0x1b0')]=_0x12de48[_0x3014('0x1b0')]||0x0;if(Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x47')]&&_0x12de48[_0x3014('0x157')]()>_0x12de48[_0x3014('0x1b0')]){this[_0x3014('0x1d5')](_0x12de48,this[_0x3014('0x177')]);}if(Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x1e3')]){this[_0x3014('0x1d5')](_0x12de48,this[_0x3014('0xd5')]);}};BattleManager[_0x3014('0x1d5')]=function(_0x36cb3d,_0x320d05){if(!_0x320d05[_0x3014('0xdb')](_0x36cb3d)){if(Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x1b')]){_0x36cb3d['_otbTimesActedThisTurn']=_0x36cb3d[_0x3014('0x1b0')]||0x0;var _0x3d9c14=Math[_0x3014('0x1a')](_0x36cb3d['makeActionTimes']()-_0x36cb3d[_0x3014('0x1b0')],0x1);}else{var _0x3d9c14=0x1;}while(_0x3d9c14--){_0x320d05['push'](_0x36cb3d);}this[_0x3014('0x20b')]()[_0x3014('0xbe')](_0x36cb3d,_0x320d05===this[_0x3014('0x177')]);}};BattleManager[_0x3014('0x193')]=function(_0x1c6333,_0x17cb81,_0x2799c5){while(_0x2799c5--){_0x17cb81[_0x3014('0x16f')](_0x1c6333);this[_0x3014('0x20b')]()['createBattlerSpriteAtEnd'](_0x1c6333,_0x17cb81===this[_0x3014('0x177')]);}};BattleManager[_0x3014('0x1a4')]=function(){this[_0x3014('0xad')]=![];if(!this[_0x3014('0xdf')]()){return;}else if(!this['_subject']){return;}else if(!this['_subject'][_0x3014('0x212')]()){return;}else if(!this[_0x3014('0x1ef')]['currentAction']()['item']()){return;}else{var _0x1b0b5b=this[_0x3014('0x1ef')][_0x3014('0x212')]()['item']();this[_0x3014('0xad')]=this[_0x3014('0x1ef')]['isInstantCast'](_0x1b0b5b);}};BattleManager[_0x3014('0x1ee')]=function(){if(this[_0x3014('0x1ef')]&&this[_0x3014('0x1ef')]['isActor']()){return 0x1;}else if(this['_subject']&&this['_subject']['isEnemy']()){return 0x2;}else{return 0x0;}};Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x17e')]=BattleManager[_0x3014('0x23c')];BattleManager[_0x3014('0x23c')]=function(){if(this['isOTB']()){this['makeActionOrdersOTB']();this[_0x3014('0x20b')]()[_0x3014('0x33')]();}else{Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x17e')][_0x3014('0x41')](this);}};BattleManager[_0x3014('0x38')]=function(){if(this[_0x3014('0x19f')]){this['_actionBattlers']=this[_0x3014('0xd5')];}this[_0x3014('0xd5')]=[];this[_0x3014('0xd5')]=this[_0x3014('0xd5')]['concat']($gameParty[_0x3014('0x163')]());this[_0x3014('0xd5')]=this[_0x3014('0xd5')]['concat']($gameTroop[_0x3014('0x163')]());this['_nextTurnActionBattlers'][_0x3014('0x167')](function(_0x332e79){_0x332e79['makeSpeed']();});this[_0x3014('0xd5')][_0x3014('0x42')](function(_0x2d3ab4,_0x32521d){return _0x32521d[_0x3014('0xb6')]()-_0x2d3ab4[_0x3014('0xb6')]();});if(!this['_createdFirstTurnActionOrders']){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x17e')][_0x3014('0x41')](this);}if(!this['_createdFirstTurnActionOrders']){this[_0x3014('0x187')](this[_0x3014('0x177')]);}this[_0x3014('0x14a')]();this[_0x3014('0x187')](this['_nextTurnActionBattlers']);this[_0x3014('0x19f')]=!![];};BattleManager['otbActionTimesModification']=function(_0x3685f7){if(Olivia['OctoBattle'][_0x3014('0x105')][_0x3014('0x1b')]){var _0x3ebee1=this[_0x3014('0x2a')]();for(var _0x2af1b2=0x0;_0x2af1b2<_0x3ebee1[_0x3014('0x197')];_0x2af1b2++){var _0x14c036=_0x3ebee1[_0x2af1b2];if(!!_0x14c036&&_0x3685f7[_0x3014('0xdb')](_0x14c036)){var _0x40ecb3=_0x3685f7[_0x3014('0x5d')](_0x14c036);var _0x38bf7d=_0x14c036[_0x3014('0x157')]()-0x1;while(_0x38bf7d--){if(Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0xb7')]&&_0x14c036[_0x3014('0xb6')]()!==Infinity){var _0x15ab9b=Math[_0x3014('0x1b3')](_0x3685f7['length']-_0x40ecb3)+_0x40ecb3;}else{var _0x15ab9b=_0x40ecb3;}_0x3685f7[_0x3014('0xae')](_0x15ab9b,0x0,_0x14c036);}}}}};BattleManager[_0x3014('0x1ca')]=function(_0x594e17,_0x378e96,_0x144d86){if(_0x144d86){var _0x3e710a=this[_0x3014('0x177')];this[_0x3014('0x124')]=!![];this['_requestCurrentTurnSpriteReorder']=!![];}else{var _0x3e710a=this[_0x3014('0xd5')];this[_0x3014('0x1a6')]=!![];this[_0x3014('0x2b')]=!![];}if(_0x3e710a[_0x3014('0xdb')](_0x594e17)){var _0x3fbe8c=_0x3e710a['getAllIndices'](_0x594e17);for(var _0x3e5194=_0x3fbe8c['length']-0x1;_0x3e5194>=0x0;_0x3e5194--){_0x3e710a[_0x3014('0xae')](_0x3fbe8c[_0x3e5194],0x1);}var _0x2679b7=this[_0x3014('0xee')](_0x3e710a);for(var _0x3e5194=0x0;_0x3e5194<_0x3fbe8c[_0x3014('0x197')];_0x3e5194++){var _0x8f9173=(_0x3fbe8c[_0x3e5194]-_0x378e96)[_0x3014('0x1f3')](_0x2679b7,_0x3e710a[_0x3014('0x197')]);_0x3e710a[_0x3014('0xae')](_0x8f9173,0x0,_0x594e17);}}};BattleManager[_0x3014('0xee')]=function(_0x577c07){if(Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x10b')]){for(var _0x15067e=0x0;_0x15067e<_0x577c07['length'];_0x15067e++){var _0x405ac2=_0x577c07[_0x15067e];if(_0x405ac2[_0x3014('0xb6')]()!==Infinity){return _0x15067e;}}return _0x15067e;}else{return 0x0;}};BattleManager[_0x3014('0xf2')]=function(_0x3e80dd){if(!!_0x3e80dd&&this[_0x3014('0x2a')]()['contains'](_0x3e80dd)){this['otbInsertActionOrderAtEnd'](_0x3e80dd,this[_0x3014('0x177')]);this[_0x3014('0x193')](_0x3e80dd,this[_0x3014('0xd5')]);}};BattleManager[_0x3014('0xfa')]=function(_0x35f032){this[_0x3014('0x14a')]();};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xe0')]=Game_Action[_0x3014('0xa7')][_0x3014('0xb6')];Game_Action['prototype'][_0x3014('0xb6')]=function(){if(BattleManager[_0x3014('0xdf')]()){return this[_0x3014('0x136')]();}else{return Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xe0')]['call'](this);}};Game_Action[_0x3014('0xa7')][_0x3014('0x136')]=function(){if(Olivia['OctoBattle'][_0x3014('0x105')][_0x3014('0x85')]){var _0x53754b=this[_0x3014('0x60')]()['agi'];}else{var _0x24326e=this[_0x3014('0x60')]()[_0x3014('0x18')];var _0x53754b=_0x24326e+Math[_0x3014('0x1b3')](Math[_0x3014('0x56')](0x5+_0x24326e/0x4));}return _0x53754b;};Olivia[_0x3014('0x1ad')]['Battle']['___Game_Action_applyItemUserEffect___']=Game_Action[_0x3014('0xa7')]['applyItemUserEffect'];Game_Action[_0x3014('0xa7')][_0x3014('0x23a')]=function(_0x2bb581){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x229')][_0x3014('0x41')](this,_0x2bb581);if(BattleManager['isOTB']()&&!!this[_0x3014('0x1bc')]()){DataManager['otbBuffDebuffAgiConvert'](this[_0x3014('0x1bc')]());this[_0x3014('0x1b5')](_0x2bb581);this[_0x3014('0x143')](_0x2bb581);}};Game_Action[_0x3014('0xa7')][_0x3014('0x1b5')]=function(_0xeffe50){if(_0xeffe50[_0x3014('0xb6')]()!==Infinity){var _0x35f205=0x0;var _0x508866=0x0;if(this['item']()[_0x3014('0x235')][_0x3014('0x1a3')](/<OTB Target Follow Turn: ([\+\-]\d+)>/i)){if(BattleManager[_0x3014('0x177')][_0x3014('0xdb')](_0xeffe50)){_0x35f205+=parseInt(RegExp['$1']);}else{_0x508866+=parseInt(RegExp['$1']);}}if(this[_0x3014('0x1bc')]()['note'][_0x3014('0x1a3')](/<OTB Target Current Turn: ([\+\-]\d+)>/i)){_0x35f205+=parseInt(RegExp['$1']);}if(this['item']()['note'][_0x3014('0x1a3')](/<OTB Target Next Turn: ([\+\-]\d+)>/i)){_0x508866+=parseInt(RegExp['$1']);}if(_0x35f205!==0x0){BattleManager[_0x3014('0x1ca')](_0xeffe50,_0x35f205,!![]);}if(_0x508866!==0x0){BattleManager[_0x3014('0x1ca')](_0xeffe50,_0x508866,![]);}}};Game_Action[_0x3014('0xa7')][_0x3014('0x143')]=function(_0x581273){if(this[_0x3014('0x1bc')]()[_0x3014('0x235')][_0x3014('0x1a3')](/<OTB Target Add Current Turn (?:Action|Actions): (\d+)>/i)){var _0x5efe12=parseInt(RegExp['$1']);_0x581273[_0x3014('0x7')](_0x5efe12,!![]);}if(this[_0x3014('0x1bc')]()[_0x3014('0x235')][_0x3014('0x1a3')](/<OTB Target Add Next Turn (?:Action|Actions): (\d+)>/i)){var _0x5efe12=parseInt(RegExp['$1']);_0x581273[_0x3014('0x7')](_0x5efe12,![]);}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x119')]=Game_BattlerBase[_0x3014('0xa7')][_0x3014('0x130')];Game_BattlerBase[_0x3014('0xa7')][_0x3014('0x130')]=function(_0x1c228e){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x119')][_0x3014('0x41')](this,_0x1c228e);if($gameParty[_0x3014('0x6f')]()&&BattleManager[_0x3014('0xdf')]()){this[_0x3014('0x191')]();this[_0x3014('0xd0')]();}};Game_BattlerBase[_0x3014('0xa7')]['otbTurnShiftCost']=function(){var _0x467b57=0x0;if(!!this['currentAction']()&&this['currentAction']()[_0x3014('0x1bc')]()){var _0x1205fe=this[_0x3014('0x212')]()[_0x3014('0x1bc')]();if(Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x1c')]){_0x467b57+=_0x1205fe[_0x3014('0xb6')];}if(_0x1205fe[_0x3014('0x235')][_0x3014('0x1a3')](/<OTB User Next Turn: ([\+\-]\d+)>/i)){_0x467b57+=parseInt(RegExp['$1']);}}if(_0x467b57!==0x0){BattleManager[_0x3014('0x1ca')](this,_0x467b57,![]);}};Game_BattlerBase[_0x3014('0xa7')][_0x3014('0xd0')]=function(){if(!!this[_0x3014('0x212')]()&&this['currentAction']()[_0x3014('0x1bc')]()){var _0x21e251=this[_0x3014('0x212')]()[_0x3014('0x1bc')]();if(_0x21e251[_0x3014('0x235')][_0x3014('0x1a3')](/<OTB User Add Current Turn (?:Action|Actions): (\d+)>/i)){var _0x2a9801=parseInt(RegExp['$1']);this[_0x3014('0x7')](_0x2a9801,!![]);}if(_0x21e251[_0x3014('0x235')][_0x3014('0x1a3')](/<OTB User Add Next Turn (?:Action|Actions): (\d+)>/i)){var _0x2a9801=parseInt(RegExp['$1']);this['otbAddActionTimes'](_0x2a9801,![]);}}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xb2')]=Game_BattlerBase[_0x3014('0xa7')][_0x3014('0x15e')];Game_BattlerBase['prototype'][_0x3014('0x15e')]=function(){var _0x5e1830=this[_0x3014('0x101')];Olivia['OctoBattle']['Battle'][_0x3014('0xb2')][_0x3014('0x41')](this);if(BattleManager[_0x3014('0xdf')]()&&_0x5e1830!==this[_0x3014('0x101')]&&!_0x5e1830){BattleManager['otbRemoveBattler'](this);}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xf1')]=Game_BattlerBase[_0x3014('0xa7')][_0x3014('0x18c')];Game_BattlerBase[_0x3014('0xa7')]['appear']=function(){var _0x1c3515=this[_0x3014('0x101')];Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xf1')][_0x3014('0x41')](this);if(BattleManager[_0x3014('0xdf')]()&&_0x1c3515!==this[_0x3014('0x101')]&&_0x1c3515){BattleManager[_0x3014('0xf2')](this);}};Game_BattlerBase[_0x3014('0xa7')]['otbInstanceName']=function(){if(this[_0x3014('0x10c')]()){return'Actor\x20'+this[_0x3014('0x186')]();}else{return _0x3014('0x18e')+this[_0x3014('0xe1')]();}};Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x168')]=Game_Battler[_0x3014('0xa7')]['onBattleStart'];Game_Battler[_0x3014('0xa7')][_0x3014('0xd4')]=function(){if(BattleManager['isOTB']()){this['_otbTimesActedThisTurn']=0x0;}Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x168')][_0x3014('0x41')](this);};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xaf')]=Game_Battler[_0x3014('0xa7')][_0x3014('0xe9')];Game_Battler[_0x3014('0xa7')][_0x3014('0xe9')]=function(){if(BattleManager[_0x3014('0xdf')]()){this['_otbTimesActedThisTurn']=0x0;}Olivia['OctoBattle'][_0x3014('0x1b9')][_0x3014('0xaf')][_0x3014('0x41')](this);};Olivia['OctoBattle'][_0x3014('0x1b9')][_0x3014('0xa5')]=Game_Battler[_0x3014('0xa7')]['performActionEnd'];Game_Battler[_0x3014('0xa7')][_0x3014('0x5e')]=function(){Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0xa5')][_0x3014('0x41')](this);this[_0x3014('0x1b0')]=this[_0x3014('0x1b0')]||0x0;this[_0x3014('0x1b0')]+=0x1;};Olivia['OctoBattle'][_0x3014('0x1b9')]['___Game_Battler_onTurnEnd___']=Game_Battler[_0x3014('0xa7')][_0x3014('0x40')];Game_Battler[_0x3014('0xa7')][_0x3014('0x40')]=function(){if(BattleManager[_0x3014('0xdf')]()){this[_0x3014('0x1b0')]=0x0;var _0x33f3e1=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x47')];Olivia[_0x3014('0x1ad')]['OTB'][_0x3014('0x47')]=![];}Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x1c2')]['call'](this);if(BattleManager[_0x3014('0xdf')]()){Olivia[_0x3014('0x1ad')]['OTB'][_0x3014('0x47')]=_0x33f3e1;}};if(Imported[_0x3014('0x1d9')]){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x9e')]=Game_Battler[_0x3014('0xa7')][_0x3014('0x49')];Game_Battler[_0x3014('0xa7')][_0x3014('0x49')]=function(_0x290f85,_0x5bc0f1){if(!this[_0x3014('0x1d')]){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x9e')][_0x3014('0x41')](this,_0x290f85,_0x5bc0f1);}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x67')]=Game_Action[_0x3014('0xa7')][_0x3014('0x49')];Game_Action[_0x3014('0xa7')][_0x3014('0x49')]=function(_0xc3ef79,_0x845842,_0x26f356,_0x5840bd,_0x20a90f){if(this[_0x3014('0x1d')]||_0xc3ef79['_tempBattler']){return _0x20a90f;}else{return Olivia['OctoBattle'][_0x3014('0x1b9')][_0x3014('0x67')][_0x3014('0x41')](this,_0xc3ef79,_0x845842,_0x26f356,_0x5840bd,_0x20a90f);}};}Game_Battler[_0x3014('0xa7')][_0x3014('0x7')]=function(_0x40ba13,_0x22b5ea){if(Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x1b')]){var _0x40ba13=Math[_0x3014('0x1a')](0x1,_0x40ba13);if(_0x22b5ea){var _0x61e33e=BattleManager[_0x3014('0x177')];}else{var _0x61e33e=BattleManager[_0x3014('0xd5')];}BattleManager[_0x3014('0x193')](this,_0x61e33e,_0x40ba13);}};Olivia['OctoBattle'][_0x3014('0x1b9')][_0x3014('0x218')]=Game_Battler[_0x3014('0xa7')][_0x3014('0x15')];Game_Battler[_0x3014('0xa7')][_0x3014('0x15')]=function(_0x129076){var _0x546d95=this[_0x3014('0x48')]();var _0x307516=this[_0x3014('0x157')]();Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x218')][_0x3014('0x41')](this,_0x129076);if($gameParty[_0x3014('0x6f')]()&&BattleManager[_0x3014('0xdf')]()){if(_0x546d95&&!this[_0x3014('0x48')]()){BattleManager['otbClearActionOrdersOfUnableBattlers']();}else if(this[_0x3014('0x157')]()>_0x307516){var _0x555466=this[_0x3014('0x157')]()>_0x307516;this[_0x3014('0x7')](_0x555466,!![]);this[_0x3014('0x7')](_0x555466,![]);}}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x4d')]=Game_Battler[_0x3014('0xa7')][_0x3014('0x240')];Game_Battler[_0x3014('0xa7')][_0x3014('0x240')]=function(_0xed26e7){var _0x135763=this[_0x3014('0x48')]();var _0x12a6f1=this[_0x3014('0x157')]();Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x4d')][_0x3014('0x41')](this,_0xed26e7);if(!this[_0x3014('0x1d')]&&$gameParty[_0x3014('0x6f')]()&&BattleManager[_0x3014('0xdf')]()){if(!_0x135763&&this[_0x3014('0x48')]()){BattleManager['otbInsertRevivalActionOrders'](this);}else if(this[_0x3014('0x157')]()>_0x12a6f1){var _0xbfd9f7=this[_0x3014('0x157')]()>_0x12a6f1;this[_0x3014('0x7')](_0xbfd9f7,!![]);this[_0x3014('0x7')](_0xbfd9f7,![]);}}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x144')]=Game_Battler['prototype'][_0x3014('0x138')];Game_Battler[_0x3014('0xa7')][_0x3014('0x138')]=function(){if(!Olivia['OctoBattle'][_0x3014('0x105')][_0x3014('0x215')]&&this[_0x3014('0x1ec')][_0x3014('0x197')]<=0x0){this[_0x3014('0x1ec')][_0x3014('0x16f')](new Game_Action(this));}Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x144')][_0x3014('0x41')](this);};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x1aa')]=Game_Battler[_0x3014('0xa7')][_0x3014('0x173')];Game_Battler[_0x3014('0xa7')]['isUndecided']=function(){if(BattleManager[_0x3014('0xdf')]()){return!![];}else{return Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x1aa')]['call'](this);}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xfd')]=Game_Battler[_0x3014('0xa7')][_0x3014('0x63')];Game_Battler[_0x3014('0xa7')][_0x3014('0x63')]=function(_0x26ed5e){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')]['___Game_Battler_consumeItem___'][_0x3014('0x41')](this,_0x26ed5e);if($gameParty[_0x3014('0x6f')]()&&BattleManager[_0x3014('0xdf')]()){this[_0x3014('0x191')]();this['otbAddActionCost']();}};Olivia['OctoBattle'][_0x3014('0x1b9')][_0x3014('0x228')]=Game_Party[_0x3014('0xa7')]['addActor'];Game_Party[_0x3014('0xa7')][_0x3014('0xa')]=function(_0xb25a22){var _0x20f8a2=this[_0x3014('0x96')]['contains'](_0xb25a22);Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x228')]['call'](this,_0xb25a22);if(BattleManager[_0x3014('0xdf')]()&&$gameParty[_0x3014('0x6f')]()&&!_0x20f8a2){var _0x1bd561=$gameActors[_0x3014('0x226')](_0xb25a22);if(!!_0x1bd561){BattleManager[_0x3014('0xf2')](_0x1bd561);}}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')]['___Game_Party_removeActor___']=Game_Party[_0x3014('0xa7')][_0x3014('0x19e')];Game_Party['prototype'][_0x3014('0x19e')]=function(_0x13281f){var _0x54269a=this['_actors']['contains'](_0x13281f);Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x20d')][_0x3014('0x41')](this,_0x13281f);if(BattleManager[_0x3014('0xdf')]()&&$gameParty[_0x3014('0x6f')]()&&_0x54269a){var _0x49e107=$gameActors[_0x3014('0x226')](_0x13281f);if(!!_0x49e107){BattleManager[_0x3014('0xfa')](_0x49e107);}}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x10')]=Scene_Battle[_0x3014('0xa7')][_0x3014('0x64')];Scene_Battle['prototype'][_0x3014('0x64')]=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x10')][_0x3014('0x41')](this);if(BattleManager['isOTB']()){this['createOTBDisplayWindow']();this[_0x3014('0x1e5')]['y']=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x54')];this[_0x3014('0x125')]['y']=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x20')];}};Scene_Battle['prototype']['createOTBDisplayWindow']=function(){this['_otbDisplayWindow']=new Window_OTBDisplay(this[_0x3014('0x1e5')]);this[_0x3014('0xc4')](this[_0x3014('0x202')]);};Olivia['OctoBattle']['Battle'][_0x3014('0xe8')]=Scene_Battle['prototype']['createActorCommandWindow'];Scene_Battle['prototype'][_0x3014('0x15d')]=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0xe8')][_0x3014('0x41')](this);if(BattleManager[_0x3014('0xdf')]()){this[_0x3014('0xf6')][_0x3014('0x89')](_0x3014('0x189'),this[_0x3014('0x21a')]['bind'](this));if(!Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x1b4')]){this['_actorCommandWindow']['_handlers'][_0x3014('0x208')]=undefined;}}};Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x1e0')]=Scene_Battle[_0x3014('0xa7')][_0x3014('0x21a')];Scene_Battle[_0x3014('0xa7')][_0x3014('0x21a')]=function(){if(BattleManager['isOTB']()){BattleManager[_0x3014('0x1ff')]();}else{Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')]['___Scene_Battle_commandEscape___'][_0x3014('0x41')](this);}};if(Imported[_0x3014('0x82')]&&Imported[_0x3014('0x5c')]){Olivia['OctoBattle'][_0x3014('0x1b9')][_0x3014('0x1d7')]=Scene_Battle[_0x3014('0xa7')][_0x3014('0x146')];Scene_Battle['prototype'][_0x3014('0x146')]=function(_0x109317,_0x243b50,_0x3642b6){Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x1d7')][_0x3014('0x41')](this,_0x109317,_0x243b50,_0x3642b6);if(BattleManager[_0x3014('0xdf')]()){this[_0x3014('0x68')](_0x109317,_0x243b50,_0x3642b6);}};Scene_Battle[_0x3014('0xa7')][_0x3014('0x68')]=function(_0x2a0541,_0x21f727,_0x1b44d0){BattleManager[_0x3014('0x1ef')]=_0x1b44d0;BattleManager['otbDisplayWindow']()['_subjectSprite'][_0x3014('0x11e')](_0x1b44d0);BattleManager[_0x3014('0xfa')](_0x21f727);var _0x500020=Math['max'](0x0,_0x1b44d0[_0x3014('0x157')]()-_0x1b44d0[_0x3014('0x1b0')]-0x1);if(_0x500020>0x0){_0x1b44d0[_0x3014('0x7')](_0x500020,!![]);}_0x1b44d0[_0x3014('0x7')](_0x1b44d0[_0x3014('0x157')](),![]);this['_helpWindow'][_0x3014('0x1fd')](BattleManager[_0x3014('0x226')]());};}Spriteset_Battle[_0x3014('0xa7')][_0x3014('0xbc')]=function(){if(Imported[_0x3014('0x65')]){this['updateBattlebackGroupRemove']();}else{this[_0x3014('0x23f')][_0x3014('0x90')](this[_0x3014('0x7b')]);this[_0x3014('0x23f')][_0x3014('0x90')](this[_0x3014('0x13c')]);}if(BattleManager[_0x3014('0x1ee')]()!==0x0){this[_0x3014('0x23f')][_0x3014('0x1af')]['sort'](this[_0x3014('0x1d6')]);}if(Imported[_0x3014('0x65')]){this['updateBattlebackGroupAdd']();}else{this['_battleField']['addChildAt'](this[_0x3014('0x13c')],0x0);this[_0x3014('0x23f')][_0x3014('0x14f')](this[_0x3014('0x7b')],0x0);}};Spriteset_Battle[_0x3014('0xa7')][_0x3014('0x1d6')]=function(_0x487b19,_0x3a05e6){var _0x546743=BattleManager[_0x3014('0x1ee')]();if(_0x487b19[_0x3014('0x1f9')]&&_0x3a05e6[_0x3014('0x1f9')]&&_0x546743!==0x0){if(_0x546743===0x1){if(_0x487b19[_0x3014('0x1f9')]['isActor']()&&_0x3a05e6[_0x3014('0x1f9')][_0x3014('0x113')]())return 0x1;if(_0x487b19[_0x3014('0x1f9')][_0x3014('0x113')]()&&_0x3a05e6[_0x3014('0x1f9')][_0x3014('0x10c')]())return-0x1;}else if(_0x546743===0x2){if(_0x487b19[_0x3014('0x1f9')][_0x3014('0x10c')]()&&_0x3a05e6[_0x3014('0x1f9')]['isEnemy']())return-0x1;if(_0x487b19[_0x3014('0x1f9')][_0x3014('0x113')]()&&_0x3a05e6[_0x3014('0x1f9')][_0x3014('0x10c')]())return 0x1;}}if(_0x487b19['z']<_0x3a05e6['z']){return-0x1;}else if(_0x487b19['z']>_0x3a05e6['z']){return 0x1;}else if(_0x487b19['y']<_0x3a05e6['y']){return-0x1;}else if(_0x487b19['y']>_0x3a05e6['y']){return 0x1;}else{return 0x0;}};function Sprite_OTBTurnOrder(){this[_0x3014('0x1a0')][_0x3014('0x53')](this,arguments);}Sprite_OTBTurnOrder['prototype']=Object['create'](Sprite_Base[_0x3014('0xa7')]);Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x1f8')]=Sprite_OTBTurnOrder;Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x1a0')]=function(_0x478301,_0xe5073a,_0x3c55d9){this[_0x3014('0x1f9')]=_0x478301;this[_0x3014('0x1df')]=_0xe5073a||0x0;this['_sourceArray']=_0x3c55d9;this[_0x3014('0x196')]();this[_0x3014('0xc1')]=![];this['_disposeState']=![];Sprite_Base[_0x3014('0xa7')][_0x3014('0x1a0')][_0x3014('0x41')](this);this[_0x3014('0x44')]=0x0;this['anchor']['x']=0.5;this['anchor']['y']=0.5;this[_0x3014('0x200')]();this[_0x3014('0x4a')]();this[_0x3014('0x230')]();};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x211')]=function(){return Window_Base[_0x3014('0xa7')]['lineHeight'][_0x3014('0x41')](this);};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x196')]=function(){this[_0x3014('0x242')]=![];this['_targetX']=0x0;this[_0x3014('0xef')]=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x223')];this[_0x3014('0x95')]=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x21b')];this[_0x3014('0x50')]=![];this[_0x3014('0xed')]=0x0;this[_0x3014('0xa8')]=BattleManager[_0x3014('0x20b')]()[_0x3014('0xa8')];this['_x2']=BattleManager[_0x3014('0x20b')]()['_x2'];this[_0x3014('0x1d0')]=BattleManager[_0x3014('0x20b')]()[_0x3014('0x1d0')];this[_0x3014('0x147')]=BattleManager[_0x3014('0x20b')]()[_0x3014('0x147')];};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x200')]=function(){var _0x489410=this[_0x3014('0x211')]();this['x']=_0x489410;this['y']=_0x489410;var _0x300ae1=Math[_0x3014('0x231')](_0x489410/0x2);this[_0x3014('0x21e')]=new Sprite();this['addChild'](this[_0x3014('0x21e')]);this[_0x3014('0x21e')]['bitmap']=new Bitmap(_0x489410,_0x489410);var _0x410784='rgba(255,\x20255,\x20255,\x201)';if(this[_0x3014('0x1f9')][_0x3014('0x10c')]()){var _0x1c1fac=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x16b')];}else{var _0x1c1fac=Olivia['OctoBattle'][_0x3014('0x105')][_0x3014('0xc5')];}var _0x919732=[_0x300ae1,0x0,0x0,_0x300ae1,_0x300ae1,_0x489410,_0x489410,_0x300ae1];this[_0x3014('0x21e')][_0x3014('0x87')]['drawOutlinePolygon'](_0x919732,_0x410784,_0x1c1fac,0x1,0x1,!![]);this[_0x3014('0x21e')][_0x3014('0x4e')]['x']=0.5;this['_background1Sprite'][_0x3014('0x4e')]['y']=0.5;};Sprite_OTBTurnOrder['prototype']['createBackground2Sprite']=function(){var _0x57bbe5=this[_0x3014('0x211')]()*0x2;var _0x2dafb0=Math[_0x3014('0x231')](_0x57bbe5/0x2);this[_0x3014('0x108')]=new Sprite();this['addChild'](this[_0x3014('0x108')]);this[_0x3014('0x108')][_0x3014('0x87')]=new Bitmap(_0x57bbe5,_0x57bbe5);var _0x8bb1eb=_0x3014('0x17b');if(this[_0x3014('0x1f9')]['isActor']()){var _0x1c4760=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x16b')];}else{var _0x1c4760=Olivia[_0x3014('0x1ad')]['OTB']['BackgroundEnemyColor'];}var _0x357bde=[_0x2dafb0,0x0,0x0,_0x2dafb0,_0x2dafb0,_0x57bbe5,_0x57bbe5,_0x2dafb0];this[_0x3014('0x108')][_0x3014('0x87')]['drawOutlinePolygon'](_0x357bde,_0x8bb1eb,_0x1c4760,0x1,0x1,!![]);this[_0x3014('0x108')][_0x3014('0x4e')]['x']=0.5;this[_0x3014('0x108')][_0x3014('0x4e')]['y']=0.5;this[_0x3014('0x108')][_0x3014('0x44')]=0x0;};Sprite_OTBTurnOrder[_0x3014('0xa7')]['createBattlerSprite']=function(){this[_0x3014('0xcf')]=new Sprite();this[_0x3014('0x204')](this[_0x3014('0xcf')]);this['_battlerSprite'][_0x3014('0x4e')]['x']=0.5;this[_0x3014('0xcf')]['anchor']['y']=0.5;this[_0x3014('0xcf')][_0x3014('0x87')]=this[_0x3014('0x17f')]();this[_0x3014('0xcf')][_0x3014('0x87')][_0x3014('0xa2')](this[_0x3014('0x109')][_0x3014('0x1fc')](this));};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x154')]=function(){return Imported[_0x3014('0x7e')]&&this[_0x3014('0x1f9')]['isReplacedByDragonBonesBattler']();};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x17f')]=function(){var _0x4134db=this[_0x3014('0x1f9')][_0x3014('0x171')]();if(this[_0x3014('0x1f9')][_0x3014('0x10c')]()){if($gameSystem[_0x3014('0x134')]()&&!this[_0x3014('0x154')]()){return ImageManager[_0x3014('0x6a')](_0x4134db);}else{_0x4134db=this['_battler'][_0x3014('0x13e')]();return ImageManager[_0x3014('0xd3')](_0x4134db);}}else{var _0x5e98d9=this[_0x3014('0x1f9')]['battlerHue']();this[_0x3014('0x93')]=_0x4134db;this['_battlerHue']=_0x5e98d9;if(this[_0x3014('0x154')]()){this[_0x3014('0x93')]=dragonBonesIntegration['Game_Enemy_battlerName'][_0x3014('0x41')](this[_0x3014('0x1f9')]);if($gameSystem[_0x3014('0x134')]()){return ImageManager[_0x3014('0x213')](this[_0x3014('0x93')],_0x5e98d9);}else{return ImageManager['loadEnemy'](this['_battlerName'],_0x5e98d9);}}else if(Imported['YEP_X_AnimatedSVEnemies']&&this[_0x3014('0x1f9')][_0x3014('0x216')]()){this[_0x3014('0x93')]=this[_0x3014('0x1f9')][_0x3014('0x1fa')]();return ImageManager[_0x3014('0x6a')](this[_0x3014('0x93')]);}else if($gameSystem[_0x3014('0x134')]()){return ImageManager[_0x3014('0x213')](_0x4134db,_0x5e98d9);}else{return ImageManager[_0x3014('0xbf')](_0x4134db,_0x5e98d9);}}};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x109')]=function(){this['setupBattlerBitmapFrame']();this[_0x3014('0x156')]();this[_0x3014('0x242')]=!![];};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x205')]=function(){var _0x4b33fe=0x0;var _0x564403=0x0;var _0x5c0cb9=this[_0x3014('0xcf')][_0x3014('0x87')][_0x3014('0x164')];var _0x4f74e3=this['_battlerSprite']['bitmap'][_0x3014('0x43')];this['scale']['x']=0x1;if(this[_0x3014('0x1f9')]['isActor']()){if($gameSystem[_0x3014('0x134')]()&&!this[_0x3014('0x154')]()){_0x5c0cb9/=0x9;_0x4f74e3/=0x6;}else{var _0x394cc1=this['_battler'][_0x3014('0xd8')]();var _0x15e689=ImageManager[_0x3014('0xb3')](this['_battler'][_0x3014('0x13e')]());_0x5c0cb9=this[_0x3014('0xcf')]['bitmap'][_0x3014('0x164')]/(_0x15e689?0x3:0xc);_0x4f74e3=this['_battlerSprite'][_0x3014('0x87')][_0x3014('0x43')]/(_0x15e689?0x4:0x8);_0x4b33fe=(_0x394cc1%0x4*0x3+0x1)*_0x5c0cb9;_0x564403=Math[_0x3014('0x56')](_0x394cc1/0x4)*0x4*_0x4f74e3;}}else if(this[_0x3014('0x154')]()){_0x5c0cb9*=0x1;_0x4f74e3*=0x1;}else if(Imported[_0x3014('0x31')]&&this[_0x3014('0x1f9')]['isEnemy']()&&this[_0x3014('0x1f9')][_0x3014('0x216')]()){_0x5c0cb9/=0x9;_0x4f74e3/=0x6;this[_0x3014('0x94')]['x']=-0x1;}this[_0x3014('0xcf')][_0x3014('0x104')](_0x4b33fe,_0x564403,_0x5c0cb9,_0x4f74e3);};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x156')]=function(){var _0x404b60=this['lineHeight']();var _0x45fa13=Math[_0x3014('0x1a')](this[_0x3014('0xcf')][_0x3014('0x164')],this[_0x3014('0xcf')][_0x3014('0x43')]);if(_0x45fa13>_0x404b60){var _0x91041a=_0x404b60/_0x45fa13;this[_0x3014('0xcf')][_0x3014('0x94')]['x']=_0x91041a;this['_battlerSprite'][_0x3014('0x94')]['y']=_0x91041a;}this[_0x3014('0xa1')]=_0x91041a;this[_0x3014('0x1ae')]=Math[_0x3014('0x1e6')](0x1,0x2*this[_0x3014('0xa1')]);};Sprite_OTBTurnOrder[_0x3014('0xa7')]['setPreview']=function(_0x340e6a){this[_0x3014('0xc1')]=!![];this['y']=0x0;if(this['_sourceArray']===BattleManager[_0x3014('0x177')]){var _0x5d956d=Math[_0x3014('0x1e6')](this[_0x3014('0x211')](),Math[_0x3014('0x158')]((this[_0x3014('0x1d0')]-this['lineHeight']())/(this[_0x3014('0x46')][_0x3014('0x197')]-0x1)));this['x']=this['_x1']+Math['round'](this[_0x3014('0x211')]()/0x2)+_0x340e6a*_0x5d956d-Math[_0x3014('0x231')](_0x5d956d/0x2);}else{var _0x5d956d=Math[_0x3014('0x1e6')](this[_0x3014('0x211')](),Math[_0x3014('0x158')]((this['_width2']-this['lineHeight']())/(this['_sourceArray']['length']-0x1)));this['x']=this[_0x3014('0x8a')]+Math[_0x3014('0x231')](this[_0x3014('0x211')]()/0x2)+_0x340e6a*_0x5d956d-0x4-Math[_0x3014('0x231')](_0x5d956d/0x2);}this[_0x3014('0x21e')][_0x3014('0x1e2')]([0xff,0xff,0xff,0xff]);this[_0x3014('0x44')]=0xff;};Sprite_OTBTurnOrder['prototype'][_0x3014('0xe7')]=function(){Sprite_Base['prototype'][_0x3014('0xe7')][_0x3014('0x41')](this);if(this[_0x3014('0x1f9')]&&this[_0x3014('0x242')]){this['updateBattlerBitmap']();}this[_0x3014('0x14')]();if(!this[_0x3014('0xc1')]){this['updateMovement']();this[_0x3014('0x1c6')]();}};Sprite_OTBTurnOrder[_0x3014('0xa7')]['updateBattlerBitmap']=function(){if(this['_battler'][_0x3014('0x113')]()){if(this[_0x3014('0x154')]()){var _0x237d38=dragonBonesIntegration['Game_Enemy_battlerName'][_0x3014('0x41')](this[_0x3014('0x1f9')]);}else{var _0x237d38=this[_0x3014('0x1f9')][_0x3014('0x171')]();}if(this[_0x3014('0x93')]!==_0x237d38||this[_0x3014('0x188')]!==this['_battler'][_0x3014('0xbd')]()){this['_updateReady']=![];this[_0x3014('0x90')](this['_battlerSprite']);this[_0x3014('0x230')]();}}};Sprite_OTBTurnOrder['prototype'][_0x3014('0x11e')]=function(_0x3965d1){if(this[_0x3014('0x1f9')]!==_0x3965d1){this['_battler']=_0x3965d1;this['_updateReady']=![];this[_0x3014('0x90')](this[_0x3014('0xcf')]);this[_0x3014('0x230')]();}};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x11a')]=function(){if(this['_moveDuration']){var _0x43e720=this['_moveDuration'];this['x']=(this['x']*(_0x43e720-0x1)+this[_0x3014('0x174')])/_0x43e720;this[_0x3014('0xef')]--;}};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x14')]=function(){if(this[_0x3014('0x115')]&&this[_0x3014('0x95')]>0x0){this['_opacityRate']*=-0x1;}if(!!BattleManager[_0x3014('0x12d')]){this[_0x3014('0x44')]-=Math[_0x3014('0x158')](Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x21b')]);}else if(this[_0x3014('0x95')]>0x0&&this[_0x3014('0x44')]<0xff){this['opacity']+=this[_0x3014('0x95')];}else if(this[_0x3014('0x95')]<0x0&&this[_0x3014('0x44')]>0x0){this[_0x3014('0x44')]+=this['_opacityRate'];}};Sprite_OTBTurnOrder['prototype'][_0x3014('0x1c6')]=function(){if(this[_0x3014('0x1f9')]['isSelected']()){this[_0x3014('0xed')]++;if(this[_0x3014('0xed')]%0x1e<0xf){this[_0x3014('0xcf')][_0x3014('0x1e2')]([0xff,0xff,0xff,0x40]);}else{this['_battlerSprite'][_0x3014('0x1e2')]([0x0,0x0,0x0,0x0]);}this[_0x3014('0xcf')]['scale']['x']=this[_0x3014('0x1ae')];this[_0x3014('0xcf')][_0x3014('0x94')]['y']=this[_0x3014('0x1ae')];this[_0x3014('0x108')][_0x3014('0x44')]=0xff;this[_0x3014('0x21e')][_0x3014('0x44')]=0x0;}else if(this[_0x3014('0x50')]&&this['x']===this['_targetX']){this[_0x3014('0xcf')][_0x3014('0x1e2')]([0x0,0x0,0x0,0x0]);this[_0x3014('0xcf')][_0x3014('0x94')]['x']=Math[_0x3014('0x1e6')](this[_0x3014('0x1ae')],this[_0x3014('0xcf')][_0x3014('0x94')]['x']+0.05);this[_0x3014('0xcf')][_0x3014('0x94')]['y']=Math[_0x3014('0x1e6')](this[_0x3014('0x1ae')],this[_0x3014('0xcf')][_0x3014('0x94')]['y']+0.05);this['_background2Sprite'][_0x3014('0x44')]=0xff;this['_background1Sprite'][_0x3014('0x44')]=0x0;}else{this[_0x3014('0xed')]=0x0;this[_0x3014('0xcf')][_0x3014('0x1e2')]([0x0,0x0,0x0,0x0]);this[_0x3014('0xcf')][_0x3014('0x94')]['x']=0x1*this['_baseScale'];this[_0x3014('0xcf')][_0x3014('0x94')]['y']=0x1*this[_0x3014('0xa1')];this[_0x3014('0x21e')][_0x3014('0x44')]=0xff;this[_0x3014('0x108')][_0x3014('0x44')]=0x0;}};Sprite_OTBTurnOrder[_0x3014('0xa7')][_0x3014('0x135')]=function(){this['_moveDuration']=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x223')];var _0x586ff6=this[_0x3014('0x46')][_0x3014('0x98')](this[_0x3014('0x1f9')]);var _0x3bace5=_0x586ff6[this[_0x3014('0x1df')]];if(this[_0x3014('0x1df')]<0x0){this[_0x3014('0x174')]=this[_0x3014('0x211')]();this['_bigAppearance']=!![];}else if(this[_0x3014('0x46')]===BattleManager[_0x3014('0x177')]){var _0x318ff1=Math[_0x3014('0x1e6')](this[_0x3014('0x211')](),Math[_0x3014('0x158')]((this['_width1']-this[_0x3014('0x211')]())/(this[_0x3014('0x46')][_0x3014('0x197')]-0x1)));this[_0x3014('0x174')]=this[_0x3014('0xa8')]+Math[_0x3014('0x231')](this[_0x3014('0x211')]()/0x2)+_0x3bace5*_0x318ff1;}else{var _0x318ff1=Math[_0x3014('0x1e6')](this[_0x3014('0x211')](),Math[_0x3014('0x158')]((this[_0x3014('0x147')]-this[_0x3014('0x211')]())/(this['_sourceArray'][_0x3014('0x197')]-0x1)));this['_targetX']=this[_0x3014('0x8a')]+Math[_0x3014('0x231')](this[_0x3014('0x211')]()/0x2)+_0x3bace5*_0x318ff1-0x4;}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x1c7')]=Window_Selectable[_0x3014('0xa7')][_0x3014('0x16')];Window_Selectable[_0x3014('0xa7')][_0x3014('0x16')]=function(_0x2e1a6d){Olivia['OctoBattle']['Battle'][_0x3014('0x1c7')][_0x3014('0x41')](this,_0x2e1a6d);if($gameParty[_0x3014('0x6f')]()&&BattleManager[_0x3014('0xdf')]()&&SceneManager[_0x3014('0xc9')]instanceof Scene_Battle&&this[_0x3014('0x111')]){if(_0x2e1a6d>=0x0){this[_0x3014('0x10d')]();}else{this[_0x3014('0xc6')]();}}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')]['Window_Selectable_deactivate']=Window_Selectable[_0x3014('0xa7')][_0x3014('0xca')];Window_Selectable[_0x3014('0xa7')]['deactivate']=function(){Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x1dd')]['call'](this);this['otbClearTurnPreview']();};Window_Selectable[_0x3014('0xa7')][_0x3014('0x10d')]=function(){};Window_Selectable[_0x3014('0xa7')][_0x3014('0xc6')]=function(){BattleManager['_requestNextTurnPreview']=null;BattleManager['_requestNextTurnPreviewClear']=!![];};Window_Selectable[_0x3014('0xa7')][_0x3014('0x233')]=function(_0x47d4f9){if(!!_0x47d4f9){DataManager[_0x3014('0x3b')](_0x47d4f9);this[_0x3014('0xc6')]();BattleManager['_requestNextTurnPreview']=_0x47d4f9;BattleManager[_0x3014('0x18a')]=![];}};Olivia['OctoBattle']['Battle']['Window_ActorCommand_initialize']=Window_ActorCommand['prototype']['initialize'];Window_ActorCommand[_0x3014('0xa7')][_0x3014('0x1a0')]=function(){this['_otbTurnPreview']=!![];Olivia['OctoBattle'][_0x3014('0x1b9')][_0x3014('0x99')][_0x3014('0x41')](this);};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x1f')]=Window_ActorCommand['prototype']['makeCommandList'];Window_ActorCommand['prototype']['makeCommandList']=function(){Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x1f')][_0x3014('0x41')](this);if(this[_0x3014('0xd')]&&Olivia[_0x3014('0x1ad')][_0x3014('0x105')]['EscapeActorWindow']){this[_0x3014('0x13f')]();}};Window_ActorCommand['prototype'][_0x3014('0x13f')]=function(){this[_0x3014('0x13')](TextManager[_0x3014('0x189')],_0x3014('0x189'),BattleManager[_0x3014('0x19')]());};Window_ActorCommand[_0x3014('0xa7')][_0x3014('0x10d')]=function(){if(this[_0x3014('0x17c')]()===_0x3014('0x181')){this['otbSetTurnPreviewItem']($dataSkills[this[_0x3014('0xd')][_0x3014('0x247')]()]);}else if(this['currentSymbol']()===_0x3014('0x9d')){this[_0x3014('0x233')]($dataSkills[this[_0x3014('0xd')][_0x3014('0x23e')]()]);}else{this[_0x3014('0xc6')]();}};Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x17')]=Window_BattleEnemy[_0x3014('0xa7')][_0x3014('0x1a0')];Window_BattleEnemy['prototype'][_0x3014('0x1a0')]=function(_0x1cdb3a,_0x284776){this['_otbTurnPreview']=!![];Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x17')][_0x3014('0x41')](this,_0x1cdb3a,_0x284776);};Window_BattleEnemy[_0x3014('0xa7')][_0x3014('0x10d')]=function(){this[_0x3014('0x233')](BattleManager['inputtingAction']()['item']());};Olivia[_0x3014('0x1ad')]['Battle'][_0x3014('0x1de')]=Window_BattleSkill['prototype'][_0x3014('0x1a0')];Window_BattleSkill[_0x3014('0xa7')][_0x3014('0x1a0')]=function(_0x1efa21,_0x582f7c,_0x1eb821,_0xa0dbf3){this[_0x3014('0x111')]=!![];Olivia[_0x3014('0x1ad')][_0x3014('0x1b9')][_0x3014('0x1de')][_0x3014('0x41')](this,_0x1efa21,_0x582f7c,_0x1eb821,_0xa0dbf3);};Window_BattleSkill[_0x3014('0xa7')][_0x3014('0x10d')]=function(){if(!!this['item']()){this[_0x3014('0x233')](this['item']());}else{this[_0x3014('0xc6')]();}};function Window_OTBDisplay(){this[_0x3014('0x1a0')]['apply'](this,arguments);}Window_OTBDisplay[_0x3014('0xa7')]=Object[_0x3014('0x52')](Window_Base[_0x3014('0xa7')]);Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0x1f8')]=Window_OTBDisplay;Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0x1a0')]=function(_0x23fbc9){this[_0x3014('0x1e5')]=_0x23fbc9;var _0x5b2283=Olivia[_0x3014('0x1ad')][_0x3014('0x105')]['DisplayX'];var _0x3fd328=Olivia[_0x3014('0x1ad')]['OTB'][_0x3014('0x1d1')];var _0x516097=Graphics[_0x3014('0x3a')]-_0x5b2283;if(Olivia[_0x3014('0x1ad')][_0x3014('0x1bb')]&&Olivia[_0x3014('0x1ad')]['SideBattleUI'][_0x3014('0x7c')]){_0x516097-=Olivia[_0x3014('0x1ad')][_0x3014('0x1bb')][_0x3014('0xd7')];_0x516097-=Math[_0x3014('0x1a')](Olivia[_0x3014('0x1ad')][_0x3014('0x1bb')][_0x3014('0xba')],Olivia['OctoBattle']['SideBattleUI']['SelectBattlerMove']);_0x516097-=Window_Base[_0x3014('0x214')]*(Olivia[_0x3014('0x1ad')][_0x3014('0x1bb')][_0x3014('0x6d')]+0.5);}else{_0x516097-=_0x5b2283;}_0x516097=Math['round'](_0x516097);var _0x1f7487=this[_0x3014('0x211')]()*0x3;this[_0x3014('0x30')]();Window_Base[_0x3014('0xa7')][_0x3014('0x1a0')][_0x3014('0x41')](this,_0x5b2283,_0x3fd328,_0x516097,_0x1f7487);this[_0x3014('0x1d2')]();this[_0x3014('0x44')]=0x0;this['contentsOpacity']=0x0;this[_0x3014('0x1b8')]();};Window_OTBDisplay[_0x3014('0xa7')]['standardPadding']=function(){return 0x0;};Window_OTBDisplay['prototype']['setupVariableConstants']=function(){BattleManager[_0x3014('0x124')]=![];BattleManager[_0x3014('0x12f')]=![];BattleManager[_0x3014('0x1a6')]=![];BattleManager[_0x3014('0x107')]=![];this[_0x3014('0x194')]=null;this[_0x3014('0x150')]=[];this[_0x3014('0xbb')]=[];};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0x1d2')]=function(){this[_0x3014('0xa8')]=this[_0x3014('0x211')]()*0x2;this[_0x3014('0x8a')]=Math['ceil'](this[_0x3014('0x164')]/0x2)+Math['round'](Window_Base['_iconWidth']/0x2)+0xc;this['_y']=this[_0x3014('0x211')]();this[_0x3014('0x1d0')]=Math[_0x3014('0x158')](this[_0x3014('0x164')]/0x2)-Math['round'](this['lineHeight']()*2.5);this[_0x3014('0x147')]=this[_0x3014('0x164')]-this[_0x3014('0x8a')];this[_0x3014('0xf9')]=Olivia[_0x3014('0x1ad')]['OTB'][_0x3014('0xe3')];this['_helpMoveSpeed']=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x237')];this[_0x3014('0x9a')]=new Sprite();this['addChild'](this[_0x3014('0x9a')]);};Window_OTBDisplay[_0x3014('0xa7')]['refresh']=function(){this[_0x3014('0x1bf')][_0x3014('0x8f')]();this[_0x3014('0x117')]();this[_0x3014('0x3c')]();};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0x117')]=function(){this[_0x3014('0x1c1')](!![]);var _0x4d2708=[];var _0xe43357=this[_0x3014('0x211')]();var _0x38b512=0x1;_0x4d2708=[_0xe43357,0x0,0x0,_0xe43357,_0xe43357,_0xe43357*0x2,_0xe43357*0x2,_0xe43357];this[_0x3014('0x1bf')][_0x3014('0x9')](_0x4d2708,this['normalColor'](),this[_0x3014('0x12e')](),0x1,_0x38b512,!![]);_0x4d2708=[_0xe43357*0x2+0x8,_0xe43357-0x8,_0xe43357*0x2,_0xe43357,_0xe43357*0x2+0x8,_0xe43357+0x8,_0xe43357*0x2+0xc,_0xe43357+0x4,this[_0x3014('0xa8')]+this[_0x3014('0x1d0')]-0x8,_0xe43357+0x4,this[_0x3014('0xa8')]+this['_width1']-0x4,_0xe43357+0x8,this[_0x3014('0xa8')]+this[_0x3014('0x1d0')]+0x4,_0xe43357,this['_x1']+this[_0x3014('0x1d0')]-0x4,_0xe43357-0x8,this[_0x3014('0xa8')]+this['_width1']-0x8,_0xe43357-0x4,_0xe43357*0x2+0xc,_0xe43357-0x4];this[_0x3014('0x1bf')][_0x3014('0x9')](_0x4d2708,this[_0x3014('0xc2')](),this[_0x3014('0x12e')](),0x1,_0x38b512,!![]);_0x4d2708=[this[_0x3014('0x8a')]-0x4,_0xe43357,this[_0x3014('0x8a')]+0x4,_0xe43357+0x8,this[_0x3014('0x8a')]+0x8,_0xe43357+0x4,this[_0x3014('0x8a')]+this[_0x3014('0x147')]-0xc,_0xe43357+0x4,this[_0x3014('0x8a')]+this[_0x3014('0x147')]-0x8,_0xe43357+0x8,this[_0x3014('0x8a')]+this[_0x3014('0x147')],_0xe43357,this[_0x3014('0x8a')]+this['_width2']-0x8,_0xe43357-0x8,this[_0x3014('0x8a')]+this[_0x3014('0x147')]-0xc,_0xe43357-0x4,this[_0x3014('0x8a')]+0x8,_0xe43357-0x4,this[_0x3014('0x8a')]+0x4,_0xe43357-0x8];this[_0x3014('0x1bf')][_0x3014('0x9')](_0x4d2708,this[_0x3014('0xc2')](),this[_0x3014('0x12e')](),0x1,_0x38b512,!![]);_0x4d2708=[this[_0x3014('0x8a')]-0xc,_0xe43357,this[_0x3014('0x8a')]-0xc+_0xe43357,_0xe43357*0x2,this[_0x3014('0x8a')]-0x14+_0xe43357,_0xe43357*0x2,this[_0x3014('0x8a')]-0x14,_0xe43357,this[_0x3014('0x8a')]-0x14+_0xe43357,0x0,this[_0x3014('0x8a')]-0xc+_0xe43357,0x0];this[_0x3014('0x1bf')]['drawOutlinePolygon'](_0x4d2708,this[_0x3014('0xc2')](),this[_0x3014('0x12e')](),0x1,_0x38b512,!![]);_0x4d2708=[this[_0x3014('0x8a')]-0x1c,_0xe43357,this['_x2']-0x1c+_0xe43357,_0xe43357*0x2,this['_x2']-0x24+_0xe43357,_0xe43357*0x2,this[_0x3014('0x8a')]-0x24,_0xe43357,this[_0x3014('0x8a')]-0x24+_0xe43357,0x0,this[_0x3014('0x8a')]-0x1c+_0xe43357,0x0];this[_0x3014('0x1bf')][_0x3014('0x9')](_0x4d2708,this[_0x3014('0xc2')](),this[_0x3014('0x12e')](),0x1,_0x38b512,!![]);};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0x3c')]=function(){this[_0x3014('0x132')]();this[_0x3014('0x1c1')](!![]);var _0x4ed343=this[_0x3014('0x1bf')][_0x3014('0x16d')];var _0x2b97d1=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x77')];var _0x23fe62=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x1fb')];var _0x2e980b=Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x137')];var _0x4bfa49=Olivia[_0x3014('0x1ad')][_0x3014('0x105')]['NextTurnFontSize'];this[_0x3014('0x1bf')][_0x3014('0x18f')]=_0x2e980b;this[_0x3014('0x1bf')][_0x3014('0x20c')](_0x2b97d1,this[_0x3014('0x211')](),this[_0x3014('0x211')]()*0x2,this[_0x3014('0x1d0')],_0x2e980b,_0x3014('0x58'));this[_0x3014('0x1bf')]['fontSize']=_0x4bfa49;this[_0x3014('0x1bf')]['drawText'](_0x23fe62,this[_0x3014('0x8a')],this['lineHeight']()*0x2,this['_width2'],_0x4bfa49,'left');};Window_OTBDisplay[_0x3014('0xa7')]['update']=function(){Window_Base[_0x3014('0xa7')][_0x3014('0xe7')][_0x3014('0x41')](this);if(BattleManager[_0x3014('0x12d')]){this[_0x3014('0xcd')]-=Math[_0x3014('0x158')](Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x21b')]);}else if(this[_0x3014('0xcd')]<0xff){this[_0x3014('0xcd')]+=Math['ceil'](Olivia[_0x3014('0x1ad')]['OTB'][_0x3014('0x21b')]/0x2);}if(!!this[_0x3014('0x1e5')]){this['updateWindowPosition']();}this[_0x3014('0x145')]();this[_0x3014('0x221')]();};Window_OTBDisplay[_0x3014('0xa7')]['updateWindowPosition']=function(){if(this[_0x3014('0x1e5')][_0x3014('0xda')]){this['y']=Math[_0x3014('0x1e6')](this['_helpWindowY'],this['y']+this[_0x3014('0x84')]);}else{this['y']=Math[_0x3014('0x1a')](Olivia['OctoBattle'][_0x3014('0x105')][_0x3014('0x1d1')],this['y']-this['_helpMoveSpeed']);}};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0x141')]=function(_0x3ed5e6){_0x3ed5e6[_0x3014('0x95')]=Math[_0x3014('0x102')](_0x3ed5e6['_opacityRate'])*-0x1;_0x3ed5e6[_0x3014('0x115')]=!![];this[_0x3014('0xbb')][_0x3014('0x16f')](_0x3ed5e6);};Window_OTBDisplay['prototype'][_0x3014('0x145')]=function(){if(this[_0x3014('0xbb')][_0x3014('0x197')]>0x0&&this[_0x3014('0xbb')][0x0][_0x3014('0x44')]<=0x0){this[_0x3014('0x9a')][_0x3014('0x90')](this[_0x3014('0xbb')]['shift']());}};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0x33')]=function(){if(this[_0x3014('0x11')]===undefined){this['_currentTurnSprites']=[];this[_0x3014('0x166')](!![]);this[_0x3014('0xaa')]=[];this[_0x3014('0x166')](![]);BattleManager['_requestCurrentTurnUpdate']=!![];BattleManager[_0x3014('0x12f')]=!![];BattleManager[_0x3014('0x1a6')]=!![];BattleManager[_0x3014('0x107')]=!![];}else{this[_0x3014('0x169')]();this[_0x3014('0x166')](![]);BattleManager['_requestCurrentTurnUpdate']=!![];BattleManager[_0x3014('0x12f')]=![];BattleManager['_requestNextTurnUpdate']=!![];BattleManager[_0x3014('0x107')]=![];}};Window_OTBDisplay['prototype'][_0x3014('0x169')]=function(){while(this[_0x3014('0x11')][_0x3014('0x197')]>0x0){this[_0x3014('0x141')](this[_0x3014('0x11')][_0x3014('0x2d')]());}while(this[_0x3014('0xaa')][_0x3014('0x197')]>0x0){var _0x20c8bd=this[_0x3014('0xaa')][_0x3014('0x2d')]();_0x20c8bd['_sourceArray']=BattleManager[_0x3014('0x177')];this[_0x3014('0x11')][_0x3014('0x16f')](_0x20c8bd);}};Window_OTBDisplay['prototype'][_0x3014('0x166')]=function(_0x4345ca){if(_0x4345ca){var _0x3d8cde=BattleManager[_0x3014('0x177')];var _0x3a3b87=this[_0x3014('0x11')];}else{var _0x3d8cde=BattleManager['_nextTurnActionBattlers'];var _0x3a3b87=this['_nextTurnSprites'];}var _0x4795a6={};for(var _0x5d1da8=0x0;_0x5d1da8<_0x3d8cde[_0x3014('0x197')];_0x5d1da8++){var _0x4f7ba8=_0x3d8cde[_0x5d1da8];_0x4795a6[_0x4f7ba8[_0x3014('0x1c3')]()]=_0x4795a6[_0x4f7ba8['otbInstanceName']()]||0x0;var _0xcb19b0=new Sprite_OTBTurnOrder(_0x4f7ba8,_0x4795a6[_0x4f7ba8[_0x3014('0x1c3')]()],_0x3d8cde);_0x4795a6[_0x4f7ba8[_0x3014('0x1c3')]()]+=0x1;this[_0x3014('0x9a')][_0x3014('0x204')](_0xcb19b0);_0x3a3b87['push'](_0xcb19b0);if(!_0x4345ca){_0xcb19b0['x']=this['width'];}}};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0xbe')]=function(_0x2af4a7,_0x5d70aa){if(_0x5d70aa){var _0x47fc06=BattleManager['_actionBattlers'];var _0x44fcc1=this[_0x3014('0x11')];var _0x157d3f=this[_0x3014('0xa8')]+this[_0x3014('0x1d0')];BattleManager['_requestCurrentTurnUpdate']=!![];}else{var _0x47fc06=BattleManager['_nextTurnActionBattlers'];var _0x44fcc1=this[_0x3014('0xaa')];var _0x157d3f=this[_0x3014('0x8a')]+this[_0x3014('0x147')];BattleManager[_0x3014('0x1a6')]=!![];}var _0x22dfea={};_0x22dfea[_0x2af4a7[_0x3014('0x1c3')]()]=_0x22dfea[_0x2af4a7[_0x3014('0x1c3')]()]||0x0;var _0x56ccc2=_0x47fc06[_0x3014('0x98')](_0x2af4a7);while(_0x56ccc2['length']>0x0){var _0x298ad8=_0x56ccc2[_0x3014('0x2d')]();var _0x93fad7=new Sprite_OTBTurnOrder(_0x2af4a7,_0x22dfea[_0x2af4a7['otbInstanceName']()],_0x47fc06);_0x22dfea[_0x2af4a7[_0x3014('0x1c3')]()]+=0x1;this[_0x3014('0x9a')]['addChild'](_0x93fad7);_0x44fcc1[_0x3014('0xae')](_0x298ad8,0x0,_0x93fad7);_0x93fad7['x']=_0x157d3f;}};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0xde')]=function(_0x3af31e,_0x3cc3ab){if(_0x3cc3ab){var _0x18c21e=BattleManager['_actionBattlers'];var _0x1fde9d=this[_0x3014('0x11')];var _0x2f9523=this[_0x3014('0xa8')]+this[_0x3014('0x1d0')];BattleManager[_0x3014('0x124')]=!![];}else{var _0x18c21e=BattleManager[_0x3014('0xd5')];var _0x1fde9d=this[_0x3014('0xaa')];var _0x2f9523=this[_0x3014('0x8a')]+this[_0x3014('0x147')];BattleManager[_0x3014('0x1a6')]=!![];}var _0x4c9ace={};var _0x9dc98a=_0x18c21e['getAllIndices'](_0x3af31e);var _0x11e488=_0x9dc98a[_0x3014('0x197')]-0x1;var _0x25abc0=new Sprite_OTBTurnOrder(_0x3af31e,_0x11e488,_0x18c21e);_0x1fde9d[_0x3014('0x16f')](_0x25abc0);this['_spriteContainer'][_0x3014('0x204')](_0x25abc0);_0x25abc0['x']=_0x2f9523;};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0xfb')]=function(){if(!!this[_0x3014('0x194')]){this[_0x3014('0x141')](this[_0x3014('0x194')]);this[_0x3014('0x194')]=null;}for(var _0x4b3c1a=0x0;_0x4b3c1a<this['_currentTurnSprites'][_0x3014('0x197')];_0x4b3c1a++){var _0x20f3ec=this[_0x3014('0x11')][_0x4b3c1a];if(_0x20f3ec['_battler']===BattleManager['_subject']){_0x20f3ec[_0x3014('0x1df')]-=0x1;if(_0x20f3ec[_0x3014('0x1df')]===-0x1){this['_subjectSprite']=_0x20f3ec;this['_subjectSprite'][_0x3014('0x135')]();this['_currentTurnSprites'][_0x3014('0xae')](this[_0x3014('0x11')]['indexOf'](_0x20f3ec),0x1);_0x4b3c1a--;BattleManager['_requestCurrentTurnUpdate']=!![];}else if(_0x20f3ec['_instance']<-0x1){this[_0x3014('0x141')](_0x20f3ec);this[_0x3014('0x11')][_0x3014('0xae')](this[_0x3014('0x11')]['indexOf'](_0x20f3ec),0x1);_0x4b3c1a--;BattleManager[_0x3014('0x124')]=!![];}}}};Window_OTBDisplay['prototype']['updateBattleManagerRequests']=function(){if(BattleManager[_0x3014('0xa3')]){this[_0x3014('0xb5')](this[_0x3014('0x11')]);this[_0x3014('0xb5')](this[_0x3014('0xaa')]);}if(BattleManager[_0x3014('0x124')]){this['updateTurnSpriteLocations'](!![]);}if(BattleManager[_0x3014('0x1a6')]){this[_0x3014('0x210')](![]);}if(BattleManager[_0x3014('0x6b')]){this[_0x3014('0x70')](!![]);}if(BattleManager[_0x3014('0x2b')]){this['updateReorderSprites'](![]);}if(BattleManager['_requestNextTurnPreview']){this[_0x3014('0x245')]();}if(BattleManager[_0x3014('0x18a')]){this[_0x3014('0xa4')]();}};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0xb5')]=function(_0x5d8117){BattleManager[_0x3014('0xa3')]=![];for(var _0xcbe5d3=0x0;_0xcbe5d3<_0x5d8117['length'];_0xcbe5d3++){var _0x4a8523=_0x5d8117[_0xcbe5d3];if(!!_0x4a8523&&BattleManager[_0x3014('0x1f1')](_0x4a8523[_0x3014('0x1f9')],_0x4a8523['_sourceArray'])){this[_0x3014('0x141')](_0x4a8523);_0x5d8117[_0x3014('0xae')](_0xcbe5d3,0x1);_0xcbe5d3--;}}};Window_OTBDisplay['prototype'][_0x3014('0x210')]=function(_0x198ca2){if(_0x198ca2){var _0x4045e4=this[_0x3014('0x11')];var _0x31f570=BattleManager[_0x3014('0x12f')];BattleManager[_0x3014('0x124')]=![];BattleManager[_0x3014('0x12f')]=![];}else{var _0x4045e4=this[_0x3014('0xaa')];var _0x31f570=BattleManager[_0x3014('0x107')];BattleManager[_0x3014('0x1a6')]=![];BattleManager[_0x3014('0x107')]=![];}for(var _0x258cbf=0x0;_0x258cbf<_0x4045e4['length'];_0x258cbf++){var _0x19da12=_0x4045e4[_0x258cbf];if(!_0x19da12){continue;}_0x19da12[_0x3014('0x135')]();if(_0x31f570){_0x19da12['x']=_0x19da12[_0x3014('0x174')];_0x19da12['_moveDuration']=0x1;}}};Window_OTBDisplay[_0x3014('0xa7')]['updateReorderSprites']=function(_0x4813f9){if(_0x4813f9){var _0x23c9ac=BattleManager[_0x3014('0x177')];var _0x3fe976=this[_0x3014('0x11')];BattleManager[_0x3014('0x124')]=!![];BattleManager['_requestCurrentTurnSpriteReorder']=![];}else{var _0x23c9ac=BattleManager[_0x3014('0xd5')];var _0x3fe976=this[_0x3014('0xaa')];BattleManager[_0x3014('0x1a6')]=!![];BattleManager[_0x3014('0x2b')]=![];}_0x3fe976['sort'](function(_0x5b7991,_0x16bbd4){return _0x5b7991['_targetX']-_0x16bbd4[_0x3014('0x174')];});this[_0x3014('0x9a')]['children'][_0x3014('0x42')](function(_0x51ff9f,_0x403913){return _0x51ff9f[_0x3014('0x174')]-_0x403913[_0x3014('0x174')];});};Window_OTBDisplay['prototype'][_0x3014('0x245')]=function(){this[_0x3014('0x12c')]=BattleManager[_0x3014('0x209')];if(!this['_previewItem']){return;}BattleManager[_0x3014('0x209')]=null;this[_0x3014('0xa4')]();this['updateNextTurnPreviewUser']();this[_0x3014('0x1e')]();};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0x15c')]=function(){var _0xe830b3=0x0;if(Olivia[_0x3014('0x1ad')][_0x3014('0x105')][_0x3014('0x1c')]){_0xe830b3+=this['_previewItem'][_0x3014('0xb6')];}if(this[_0x3014('0x12c')]['note'][_0x3014('0x1a3')](/<OTB User Next Turn: ([\+\-]\d+)>/i)){_0xe830b3+=parseInt(RegExp['$1']);}var _0x4edd31=BattleManager[_0x3014('0x1ef')];var _0x54ebf4=BattleManager[_0x3014('0xd5')];this[_0x3014('0x1bd')](_0x4edd31,_0x54ebf4,_0xe830b3);};Window_OTBDisplay[_0x3014('0xa7')]['createPreviewSprite']=function(_0x2581f5,_0x2f15a3,_0x29e553){if(_0x29e553!==0x0&&_0x2f15a3[_0x3014('0xdb')](_0x2581f5)){_0x29e553+=_0x29e553>0x0?0x0:-0x1;var _0x37641c=_0x2f15a3[_0x3014('0x98')](_0x2581f5);var _0x1bde5c=BattleManager[_0x3014('0xee')](_0x2f15a3);for(var _0x969330=0x0;_0x969330<_0x37641c[_0x3014('0x197')];_0x969330++){var _0x405351=(_0x37641c[_0x969330]-_0x29e553)[_0x3014('0x1f3')](_0x1bde5c,_0x2f15a3[_0x3014('0x197')]);var _0x15975e=new Sprite_OTBTurnOrder(_0x2581f5,_0x969330,_0x2f15a3);this[_0x3014('0x9a')][_0x3014('0x204')](_0x15975e);this[_0x3014('0x150')][_0x3014('0x16f')](_0x15975e);_0x15975e[_0x3014('0xac')](_0x405351);}}};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0x1e')]=function(){var _0x552b52=this[_0x3014('0x51')]();if(_0x552b52[_0x3014('0x197')]>0x0){var _0xe7bf1f=0x0;var _0x5a01b9=0x0;var _0x8fb227=0x0;if(this[_0x3014('0x12c')][_0x3014('0x235')][_0x3014('0x1a3')](/<OTB Target Follow Turn: ([\+\-]\d+)>/i)){_0xe7bf1f+=parseInt(RegExp['$1']);}if(this[_0x3014('0x12c')]['note']['match'](/<OTB Target Current Turn: ([\+\-]\d+)>/i)){_0x5a01b9+=parseInt(RegExp['$1']);}if(this[_0x3014('0x12c')][_0x3014('0x235')][_0x3014('0x1a3')](/<OTB Target Next Turn: ([\+\-]\d+)>/i)){_0x8fb227+=parseInt(RegExp['$1']);}for(var _0x278fe9=0x0;_0x278fe9<_0x552b52[_0x3014('0x197')];_0x278fe9++){var _0x385db9=_0x552b52[_0x278fe9];if(_0x385db9[_0x3014('0xb6')]()!==Infinity){if(BattleManager['_actionBattlers'][_0x3014('0xdb')](_0x385db9)){_0x5a01b9+=_0xe7bf1f;}else{_0x8fb227+=_0xe7bf1f;}this[_0x3014('0x1bd')](_0x385db9,BattleManager[_0x3014('0x177')],_0x5a01b9);this['createPreviewSprite'](_0x385db9,BattleManager[_0x3014('0xd5')],_0x8fb227);}}}};Window_OTBDisplay['prototype'][_0x3014('0x51')]=function(){var _0x4a5ea7=[];var _0x2e6d05=BattleManager[_0x3014('0x2a')]();for(var _0x7dc231=0x0;_0x7dc231<_0x2e6d05[_0x3014('0x197')];_0x7dc231++){var _0x2f3530=_0x2e6d05[_0x7dc231];if(!!_0x2f3530&&_0x2f3530[_0x3014('0x1d4')]()){_0x4a5ea7[_0x3014('0x16f')](_0x2f3530);}}return _0x4a5ea7;};Window_OTBDisplay[_0x3014('0xa7')][_0x3014('0xa4')]=function(){BattleManager[_0x3014('0x18a')]=![];while(this['_previewSprites'][_0x3014('0x197')]>0x0){var _0x5dcb2f=this[_0x3014('0x150')][_0x3014('0x2d')]();this['disposeSprite'](_0x5dcb2f);}};}


























