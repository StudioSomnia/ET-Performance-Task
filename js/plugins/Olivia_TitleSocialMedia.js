//=============================================================================
// Olivia Engine - TitleSocialMedia - for RPG Maker MV version 1.6.1
// Olivia_TitleSocialMedia.js
//=============================================================================
 /*:
 * @plugindesc <TitleSocialMedia> for RPG Maker MV version 1.6.1.
 * @author Fallen Angel Olivia
 *
 * @help
 * This is a RPG Maker MV plugin that will add social media buttons onto your
 * title screen that can be clicked and taken to desired URLs. You can add as
 * many or remove as many buttons as you want and have them go to custom URLs
 * of your liking. You can also position these buttons anywhere on the screen
 * with provided coordinates, too.
 *
 *
 * 
 * -----------------
 * Plugin Parameters
 * -----------------
 *
 * These plugin parameters require that you have at least RPG Maker MV version
 * 1.5.1+ for them to work. Please visit this URL if you don't have the latest
 * version of RPG Maker MV:
 *
 * https://forums.rpgmakerweb.com/index.php?forums/rpg-maker-mv-releases.171/
 *
 * Buttons: This is a list of the social media buttons that are shown on your
 * title screen. You can add new ones or remove old ones from here.
 *
 * Image: The image used for the social media button. This is located in your
 * img/pictures/ folder. It can be any size you want it to be.
 *
 * URL: The URL that clicking the button brings you to. This does not open up a
 * new NodeJS client with the game unlike Yanfly's External Links. This uses the
 * player's desired browser and opens up a new page there.
 *
 * ScreenX: X position on the title screen. Can use code.
 *
 * ScreenY: Y position on the title screen. Can use code.
 *
 * Fade Effect: Perform a fade in effect for the buttons? If true, then the
 * buttons will slowly fade in after the title screen has loaded. The fade in
 * effect will draw more attention to the buttons, making the player more likely
 * to click on them.
 *
 * MS Delay: Delay in milliseconds between each fade in? Put 0 to have no delay.
 * Slowly fading in the buttons one by one gives more focus and volume to the
 * buttons, giving more attention presence to the buttons.
 *
 * Fade Speed: Fade speed when the fading occurs. Lower numbers are slower and
 * higher numbers are faster. Change these speeds to make the plugin match the
 * title screen's aesthetics.
 *
 *
 *
 * -------------------
 * W A R N I N G ! ! !
 * -------------------
 *
 * This plugin is made for RPG Maker MV versions 1.6.1 and 1.5.1+. If you update
 * RPG Maker MV past that and this plugin breaks, I am NOT responsible for it.
 *
 * 
 *
 * -------------
 * Compatibility
 * -------------
 *
 * This plugin should work with the majority of title screen plugins. To ensure
 * top compatibility, place this plugin beneath those plugins in the plugin list
 * as this matters a lot.
 *
 * This plugin is compatible with the following plugins:
 *
 * - Yanfly - Dynamic Title Images
 * - Moghunter - Custom Title Screen
 * - SRDude - Title Command Customizer
 * - SRDude - Title Map Background
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
 * @param Buttons
 * @type struct<Button>[]
 * @desc A list of the buttons to appear on the title screen
 * @default ["{\"Image\":\"Facebook\",\"URL\":\"https://www.facebook.com/RPGMakerWeb/\",\"ScreenX\":\"Graphics.boxWidth - 88 * 3\",\"ScreenY\":\"Graphics.boxHeight - 88 * 2\"}","{\"Image\":\"Google+\",\"URL\":\"https://plus.google.com/106764877572503440438\",\"ScreenX\":\"Graphics.boxWidth - 88 * 2\",\"ScreenY\":\"Graphics.boxHeight - 88 * 2\"}","{\"Image\":\"Tumblr\",\"URL\":\"https://www.tumblr.com/dashboard\",\"ScreenX\":\"Graphics.boxWidth - 88 * 1\",\"ScreenY\":\"Graphics.boxHeight - 88 * 2\"}","{\"Image\":\"Twitter\",\"URL\":\"https://twitter.com/RPGmakerweb\",\"ScreenX\":\"Graphics.boxWidth - 88 * 3\",\"ScreenY\":\"Graphics.boxHeight - 88 * 1\"}","{\"Image\":\"YouTube\",\"URL\":\"https://www.youtube.com/channel/UCddGFnTnLkKkDBR7JV2y2eA\",\"ScreenX\":\"Graphics.boxWidth - 88 * 2\",\"ScreenY\":\"Graphics.boxHeight - 88 * 1\"}","{\"Image\":\"Patreon\",\"URL\":\"https://www.patreon.com\",\"ScreenX\":\"Graphics.boxWidth - 88 * 1\",\"ScreenY\":\"Graphics.boxHeight - 88 * 1\"}"]
 *
 * @param
 *
 * @param Fade Effect
 * @type boolean
 * @on YES
 * @off NO
 * @desc Perform a fade in effect for the buttons?
 * @default true
 *
 * @param MS Delay
 * @parent Fade Effect
 * @number
 * @min 0
 * @desc Delay in milliseconds between each fade in? 
 * Put 0 to have no delay.
 * @default 500
 *
 * @param Fade Speed
 * @parent Fade Effect
 * @number
 * @min 1
 * @desc Fade speed when the fading occurs. 
 * Lower = slower. Higher = faster.
 * @default 4
 *
 */
/*~struct~Button:
 *
 * @param Image
 * @type file
 * @dir img/pictures/
 * @desc Image used for the social media button. This is located in your img/pictures/ folder.
 * @default Facebook
 *
 * @param URL
 * @desc The URL that clicking the button brings you to
 * @default https://www.facebook.com/RPGMakerWeb/
 *
 * @param ScreenX
 * @desc X position on the title screen. Can use code.
 * @default Graphics.boxWidth - 88 * 3
 *
 * @param ScreenY
 * @desc Y position on the title screen. Can use code.
 * @default Graphics.boxHeight - 88 * 1
 *
 */
//=============================================================================

var _0x5d96=['URL','Olivia_TitleSocialMedia','ScreenX','constructor','\x27;\x0a','prototype','___Scene_Title_update___','handler','setup','open','call','executeSocialMediaButtonFadeIn','require(\x27child_process\x27).exec(start\x20+\x20\x27\x20\x27\x20+\x20url);\x0a','code','create','List','setClickHandler','apply','updateFadeIn','var\x20start\x20=\x20(process.platform\x20==\x20\x27darwin\x27?\x20\x27open\x27:\x20process.platform\x20==\x20\x27win32\x27?\x20\x27start\x27:\x20\x27xdg-open\x27);\x0a','fadeInSocialMediaButtons','description','setupNewSocialMediaButtonSprite','bind','TitleSocialMedia','_blank','opacity','SoundManager.playOk();','_fadeSpeed','onBrowserClick','ScreenY','<TitleSocialMedia>','_socialMediaButtonsFadeIn','isNwjs','parse','createSocialMediaButtons','bitmap','___Scene_Title_create___','length','FadeEffect','isBusy','_data','update','Fade\x20Effect','visible','fadeIn','_socialMediaButtons','initialize'];(function(_0x3714df,_0x5d9655){var _0x3a2b4b=function(_0x1cab88){while(--_0x1cab88){_0x3714df['push'](_0x3714df['shift']());}};_0x3a2b4b(++_0x5d9655);}(_0x5d96,0x14b));var _0x3a2b=function(_0x3714df,_0x5d9655){_0x3714df=_0x3714df-0x0;var _0x3a2b4b=_0x5d96[_0x3714df];return _0x3a2b4b;};var Imported=Imported||{};Imported[_0x3a2b('0x6')]=!![];var Olivia=Olivia||{};var parameters=$plugins['filter'](function(_0x4bfcf4){return _0x4bfcf4[_0x3a2b('0x1a')]['contains'](_0x3a2b('0x24'));})[0x0]['parameters'];Olivia[_0x3a2b('0x1d')]={'List':JSON[_0x3a2b('0x27')](parameters['Buttons']),'FadeEffect':eval(parameters[_0x3a2b('0x0')]),'MSDelay':Number(parameters['MS\x20Delay']),'FadeSpeed':Number(parameters['Fade\x20Speed'])};setupOliviaTitleSocialMediaParameters=function(){for(var _0x1069ed=0x0;_0x1069ed<Olivia[_0x3a2b('0x1d')][_0x3a2b('0x14')]['length'];_0x1069ed++){Olivia[_0x3a2b('0x1d')][_0x3a2b('0x14')][_0x1069ed]=JSON[_0x3a2b('0x27')](Olivia[_0x3a2b('0x1d')][_0x3a2b('0x14')][_0x1069ed]);var _0x469351=Olivia[_0x3a2b('0x1d')][_0x3a2b('0x14')][_0x1069ed];var _0x35f4fd='var\x20url\x20=\x20\x27'+_0x469351[_0x3a2b('0x5')]+_0x3a2b('0x9')+_0x3a2b('0x18')+_0x3a2b('0x11')+_0x3a2b('0x20');_0x469351[_0x3a2b('0x12')]=_0x35f4fd;_0x469351[_0x3a2b('0xc')]=new Function(_0x35f4fd);}}();Olivia[_0x3a2b('0x1d')]['___Scene_Title_create___']=Scene_Title[_0x3a2b('0xa')]['create'];Scene_Title[_0x3a2b('0xa')]['create']=function(){Olivia[_0x3a2b('0x1d')][_0x3a2b('0x2a')][_0x3a2b('0xf')](this);this[_0x3a2b('0x28')]();};Scene_Title[_0x3a2b('0xa')][_0x3a2b('0x28')]=function(){this[_0x3a2b('0x3')]=[];for(var _0x1dfe21=0x0;_0x1dfe21<Olivia[_0x3a2b('0x1d')]['List'][_0x3a2b('0x2b')];_0x1dfe21++){var _0x36dc7b=Olivia[_0x3a2b('0x1d')][_0x3a2b('0x14')][_0x1dfe21];var _0x121c5a=this[_0x3a2b('0x1b')](_0x36dc7b,_0x1dfe21);this[_0x3a2b('0x3')]['push'](_0x121c5a);this['addChild'](_0x121c5a);}};Scene_Title[_0x3a2b('0xa')][_0x3a2b('0x1b')]=function(_0x4f84c8){var _0x1a8b28=new Sprite_SocialMediaButton();_0x1a8b28[_0x3a2b('0xd')](_0x4f84c8);return _0x1a8b28;};Olivia[_0x3a2b('0x1d')][_0x3a2b('0xb')]=Scene_Title['prototype']['update'];Scene_Title['prototype'][_0x3a2b('0x2f')]=function(){Olivia['TitleSocialMedia'][_0x3a2b('0xb')]['call'](this);if(!this[_0x3a2b('0x2d')]()&&!this[_0x3a2b('0x25')]){this[_0x3a2b('0x19')]();}};Scene_Title[_0x3a2b('0xa')][_0x3a2b('0x19')]=function(){this['_socialMediaButtonsFadeIn']=!![];for(var _0x27732d=0x0;_0x27732d<this[_0x3a2b('0x3')][_0x3a2b('0x2b')];_0x27732d++){var _0x37ade8=this[_0x3a2b('0x3')][_0x27732d];var _0x147dcc=Olivia['TitleSocialMedia']['MSDelay']*_0x27732d;setTimeout(this[_0x3a2b('0x10')][_0x3a2b('0x1c')](this,_0x37ade8),_0x147dcc);}};Scene_Title[_0x3a2b('0xa')][_0x3a2b('0x10')]=function(_0x1f1cc3){_0x1f1cc3[_0x3a2b('0x2')]();};function Sprite_SocialMediaButton(){this[_0x3a2b('0x4')][_0x3a2b('0x16')](this,arguments);}Sprite_SocialMediaButton[_0x3a2b('0xa')]=Object[_0x3a2b('0x13')](Sprite_Button[_0x3a2b('0xa')]);Sprite_SocialMediaButton[_0x3a2b('0xa')][_0x3a2b('0x8')]=Sprite_SocialMediaButton;Sprite_SocialMediaButton[_0x3a2b('0xa')][_0x3a2b('0x4')]=function(){this['_fadeSpeed']=0x0;Sprite_Button[_0x3a2b('0xa')][_0x3a2b('0x4')]['call'](this);};Sprite_SocialMediaButton[_0x3a2b('0xa')][_0x3a2b('0xd')]=function(_0x25f9ea){this['x']=eval(_0x25f9ea[_0x3a2b('0x7')]);this['y']=eval(_0x25f9ea[_0x3a2b('0x23')]);this[_0x3a2b('0x29')]=ImageManager['loadPicture'](_0x25f9ea['Image']);this[_0x3a2b('0x2e')]=_0x25f9ea;if(!Utils[_0x3a2b('0x26')]()){this['setClickHandler'](this[_0x3a2b('0x22')]['bind'](this));}else{this[_0x3a2b('0x15')](_0x25f9ea[_0x3a2b('0xc')][_0x3a2b('0x1c')](this));}this[_0x3a2b('0x1')]=!![];if(Olivia['TitleSocialMedia'][_0x3a2b('0x2c')]){this[_0x3a2b('0x1f')]=0x0;}};Sprite_SocialMediaButton[_0x3a2b('0xa')][_0x3a2b('0x2')]=function(){this[_0x3a2b('0x21')]=Olivia['TitleSocialMedia']['FadeSpeed'];};Sprite_SocialMediaButton[_0x3a2b('0xa')][_0x3a2b('0x2f')]=function(){Sprite_Button[_0x3a2b('0xa')][_0x3a2b('0x2f')][_0x3a2b('0xf')](this);this['updateFadeIn']();};Sprite_SocialMediaButton[_0x3a2b('0xa')][_0x3a2b('0x22')]=function(){var _0x452b58=window[_0x3a2b('0xe')](this['_data'][_0x3a2b('0x5')],_0x3a2b('0x1e'));};Sprite_SocialMediaButton[_0x3a2b('0xa')][_0x3a2b('0x17')]=function(){if(this[_0x3a2b('0x1f')]<0xff){this[_0x3a2b('0x1f')]+=this[_0x3a2b('0x21')];}};