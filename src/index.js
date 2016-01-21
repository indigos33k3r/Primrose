/*
 * Copyright (C) 2015 Sean T. McBeth <sean@seanmcbeth.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

if (typeof window.pliny === "undefined") {
    // shim out the documentation generator so it doesn't contribute
    // to overhead in release build.
    var pliny = (function () {
        var nil = function () {
        };
        var pliniuses = {
            namespace: nil,
            event: nil,
            function: nil,
            value: nil,
            class: nil,
            method: nil,
            property: nil
        };
        return pliniuses;
    })();
}

pliny.namespace("Primrose", "Primrose helps you make VR applications for web browsers as easy as making other types of interactive web pages.\n\nThis top-level namespace contains classes for manipulating and viewing 3D environments.");
var Primrose = {};


pliny.namespace("Primrose.Input", "The Input namespace contains classes that handle user input, for use in navigating the 3D environment.");
Primrose.Input = {};


pliny.namespace("Primrose.Output", "The Output namespace contains classes that handle output to devices other than the screen (e.g. Audio, Music, etc.).");
Primrose.Output = {};


pliny.namespace("Primrose.Text", "The Text namespace contains classes everything regarding the Primrose source code editor.");
Primrose.Text = {};


pliny.namespace("Primrose.Text.CodePages", "The CodePages namespace contains international keyboard parameters.");
Primrose.Text.CodePages = {};


pliny.namespace("Primrose.Text.CommandPacks", "The CommandPacks namespace contains sets of keyboard shortcuts for different types of text-oriented controls.");
Primrose.Text.CommandPacks = {};


pliny.namespace("Primrose.Text.Controls", "The Controls namespace contains different types of text-oriented controls.");
Primrose.Text.Controls = {};


pliny.namespace("Primrose.Text.Grammars", "The Grammars namespace contains grammar parsers for different types of programming languages, to enable syntax highlighting.");
Primrose.Text.Grammars = {};


pliny.namespace("Primrose.Text.OperatingSystems", "The OperatingSystems namespace contains sets of keyboard shortcuts for different operating systems.");
Primrose.Text.OperatingSystems = {};


pliny.namespace("Primrose.Text.Renderers", "The Renderers namespace contains different renderers for using the general Text Editor logic in different output systems. Current, Canvas2D is the only system that works. A system for DOM elements exists, but it is broken and not likely to be fixed any time soon.");
Primrose.Text.Renderers = {};


pliny.namespace("Primrose.Text.Themes", "The Themes namespace contains color themes for text-oriented controls, for use when coupled with a parsing grammar.");
Primrose.Text.Themes = {};


pliny.value("Primrose", {
    name: "SYS_FONTS",
    type: "String",
    description: "A selection of fonts that will match whatever the user's operating system normally uses."
});
Primrose.SYS_FONTS = "-apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif";


pliny.value("Primrose", {
    name: "SKINS",
    type: "Array of String",
    description: "A selection of color values that closely match skin colors of people."
});
Primrose.SKINS = ["#FFDFC4", "#F0D5BE", "#EECEB3", "#E1B899", "#E5C298", "#FFDCB2",
    "#E5B887", "#E5A073", "#E79E6D", "#DB9065", "#CE967C", "#C67856", "#BA6C49",
    "#A57257", "#F0C8C9", "#DDA8A0", "#B97C6D", "#A8756C", "#AD6452", "#5C3836",
    "#CB8442", "#BD723C", "#704139", "#A3866A", "#870400", "#710101", "#430000",
    "#5B0001", "#302E2E"];

pliny.value("Primrose", {
    name: "SKINS_VALUES",
    type: "Array of Number",
    description: "A selection of color values that closely match skin colors of people."
});
Primrose.SKIN_VALUES = Primrose.SKINS.map(function (s) {
    return parseInt(s.substring(1), 16);
});

// snagged and adapted from http://detectmobilebrowsers.com/
pliny.value("", {name: "isMobile", type: "Boolean", description: "Flag indicating the current system is a recognized \"mobile\" device, usually possessing a motion sensor."});
var isMobile = (function (a) {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            a) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                    a.substring(0, 4));
})(navigator.userAgent || navigator.vendor || window.opera);

pliny.value("", {name: "isiOS", type: "Boolean", description: "Flag indicating the current system is a device running the Apple iOS operating system: iPad, iPod Touch, iPhone. Useful for invoking optional code paths necessary to deal with deficiencies in Apple's implementation of web standards."});
var isiOS = /iP(hone|od|ad)/.test(navigator.userAgent || "");


pliny.value("", {name: "isOSX", type: "Boolean", description: "Flag indicating the current system is a computer running the Apple OSX operating system. Useful for changing keyboard shortcuts to support Apple's idiosynchratic, concensus-defying keyboard shortcuts."});
var isOSX = /Macintosh/.test(navigator.userAgent || "");

pliny.value("", {name: "isWindows", type: "Boolean", description: "Flag indicating the current system is a computer running one of the Microsoft Windows operating systems. We have not yet found a use for this flag."});
var isWindows = /Windows/.test(navigator.userAgent || "");

pliny.value("", {name: "isOpera", type: "Boolean", description: "Flag indicating the browser is currently calling itself Opera. Opera is a substandard browser that lags adoption of cutting edge web technologies, so you are not likely to need this flag if you are using Primrose, other than to cajole users into downloading a more advanced browser such as Mozilla Firefox or Google Chrome."});
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

pliny.value("", {name: "isSafari", type: "Boolean", description: "Flag indicating the browser is currently calling itself Safari. Safari is an overly opinionated browser that thinks users should be protected from themselves in such a way as to prevent users from gaining access to the latest in cutting-edge web technologies. Essentially, it was replaced Microsoft Internet Explorer as the Internet Explorer of the web."});
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

pliny.value("", {name: "isChrome", type: "Boolean", description: "Flag indicating the browser is currently calling itself Chrome or Chromium. Chromium was one of the first browsers to implement virtual reality features directly in the browser, thanks to the work of Brandon \"Toji\" Jones."});
var isChrome = !!window.chrome && !isOpera;

pliny.value("", {name: "isFirefox", type: "Boolean", description: "Flag indicating the browser is currently calling itself Firefox. Firefox was one of the first browsers to implement virtual reality features directly in the browser, thanks to the work of the MozVR team."});
var isFirefox = typeof window.InstallTrigger !== 'undefined';

pliny.value("", {name: "isWebKit", type: "Boolean", description: "Flag indicating the browser is one of Chrome, Safari, or Opera. WebKit browsers have certain issues in common that can be treated together, like a common basis for orientation events."});
var isWebKit = isiOS || isOpera || isChrome;

pliny.value("", {name: "isIE", type: "Boolean", description: "Flag indicating the browser is currently calling itself Internet Explorer. Once the bane of every web developer's existence, it has since passed the torch on to Safari in all of its many useless incarnations."});
var isIE = /*@cc_on!@*/false || !!document.documentMode;

pliny.value("", {name: "isVR", type: "Boolean", description: "Flag indicating the browser supports awesomesauce as well as the WebVR standard in some form."});
var isVR = !!navigator.getVRDevices;

pliny.issue("Primrose.Angle", {name: "document Angle", type: "open", description: "Finish writing the documentation for the [Primrose.Angle](#Primrose_Angle) class in the  directory"});
pliny.issue("Primrose.BaseControl", {name: "document BaseControl", type: "open", description: "Finish writing the documentation for the [Primrose.BaseControl](#Primrose_BaseControl) class in the  directory"});
pliny.issue("Primrose.ButtonFactory", {name: "document ButtonFactory", type: "open", description: "Finish writing the documentation for the [Primrose.ButtonFactory](#Primrose_ButtonFactory) class in the  directory"});
pliny.issue("Primrose.Button", {name: "document Button", type: "open", description: "Finish writing the documentation for the [Primrose.Button](#Primrose_Button) class in the  directory"});
pliny.issue("Primrose.DOM", {name: "document DOM", type: "open", description: "Finish writing the documentation for the [Primrose.DOM](#Primrose_DOM) class in the  directory"});
pliny.issue("Primrose.HTTP", {name: "document HTTP", type: "open", description: "Finish writing the documentation for the [Primrose.HTTP](#Primrose_HTTP) class in the  directory"});
pliny.issue("Primrose.Keys", {name: "document Keys", type: "open", description: "Finish writing the documentation for the [Primrose.Keys](#Primrose_Keys) class in the  directory"});
pliny.issue("Primrose.ModelLoader", {name: "document ModelLoader", type: "open", description: "Finish writing the documentation for the [Primrose.ModelLoader](#Primrose_ModelLoader) class in the  directory"});
pliny.issue("Primrose.NetworkedInput", {name: "document NetworkedInput", type: "open", description: "Finish writing the documentation for the [Primrose.NetworkedInput](#Primrose_NetworkedInput) class in the  directory"});
pliny.issue("Primrose.Projector", {name: "document Projector", type: "open", description: "Finish writing the documentation for the [Primrose.Projector](#Primrose_Projector) class in the  directory"});
pliny.issue("Primrose.Random", {name: "document Random", type: "open", description: "Finish writing the documentation for the [Primrose.Random](#Primrose_Random) class in the  directory"});
pliny.issue("Primrose.StateList", {name: "document StateList", type: "open", description: "Finish writing the documentation for the [Primrose.StateList](#Primrose_StateList) class in the  directory"});
pliny.issue("Primrose.VRApplication", {name: "document VRApplication", type: "open", description: "Finish writing the documentation for the [Primrose.VRApplication](#Primrose_VRApplication) class in the  directory"});
pliny.issue("Primrose.WebRTCSocket", {name: "document WebRTCSocket", type: "open", description: "Finish writing the documentation for the [Primrose.WebRTCSocket](#Primrose_WebRTCSocket) class in the  directory"});
pliny.issue("Primrose.Workerize", {name: "document Workerize", type: "open", description: "Finish writing the documentation for the [Primrose.Workerize](#Primrose_Workerize) class in the  directory"});

pliny.issue("", {name: "document helpers/fmt", type: "open", description: "Finish writing the documentation for the [fmt](#fmt) class in the helpers/ directory"});
pliny.issue("", {name: "document helpers/forms", type: "open", description: "Finish writing the documentation for the [forms](#forms) class in the helpers/ directory"});
pliny.issue("", {name: "document helpers/graphics", type: "open", description: "Finish writing the documentation for the [graphics](#graphics) class in the helpers/ directory"});
pliny.issue("", {name: "document helpers/oop", type: "open", description: "Finish writing the documentation for the [oop](#oop) class in the helpers/ directory"});
pliny.issue("", {name: "document helpers/options", type: "open", description: "Finish writing the documentation for the [options](#options) class in the helpers/ directory"});

pliny.issue("Primrose.Input.ButtonAndAxis", {name: "document ButtonAndAxis", type: "open", description: "Finish writing the documentation for the [Primrose.Input.ButtonAndAxis](#Primrose_Input_ButtonAndAxis) class in the input/ directory"});
pliny.issue("Primrose.Input.Camera", {name: "document Camera", type: "open", description: "Finish writing the documentation for the [Primrose.Input.Camera](#Primrose_Input_Camera) class in the input/ directory"});
pliny.issue("Primrose.Input.FPSInput", {name: "document FPSInput", type: "open", description: "Finish writing the documentation for the [Primrose.Input.FPSInput](#Primrose_Input_FPSInput) class in the input/ directory"});
pliny.issue("Primrose.Input.Gamepad", {name: "document Gamepad", type: "open", description: "Finish writing the documentation for the [Primrose.Input.Gamepad](#Primrose_Input_Gamepad) class in the input/ directory"});
pliny.issue("Primrose.Input.Keyboard", {name: "document Keyboard", type: "open", description: "Finish writing the documentation for the [Primrose.Input.Keyboard](#Primrose_Input_Keyboard) class in the input/ directory"});
pliny.issue("Primrose.Input.LeapMotion", {name: "document LeapMotion", type: "open", description: "Finish writing the documentation for the [Primrose.Input.LeapMotion](#Primrose_Input_LeapMotion) class in the input/ directory"});
pliny.issue("Primrose.Input.Location", {name: "document Location", type: "open", description: "Finish writing the documentation for the [Primrose.Input.Location](#Primrose_Input_Location) class in the input/ directory"});
pliny.issue("Primrose.Input.Motion", {name: "document Motion", type: "open", description: "Finish writing the documentation for the [Primrose.Input.Motion](#Primrose_Input_Motion) class in the input/ directory"});
pliny.issue("Primrose.Input.Mouse", {name: "document Mouse", type: "open", description: "Finish writing the documentation for the [Primrose.Input.Mouse](#Primrose_Input_Mouse) class in the input/ directory"});
pliny.issue("Primrose.Input.Speech", {name: "document Speech", type: "open", description: "Finish writing the documentation for the [Primrose.Input.Speech](#Primrose_Input_Speech) class in the input/ directory"});
pliny.issue("Primrose.Input.Touch", {name: "document Touch", type: "open", description: "Finish writing the documentation for the [Primrose.Input.Touch](#Primrose_Input_Touch) class in the input/ directory"});
pliny.issue("Primrose.Input.VR", {name: "document VR", type: "open", description: "Finish writing the documentation for the [Primrose.Input.VR](#Primrose_Input_VR) class in the input/ directory"});

pliny.issue("Primrose.Output.Audio3D", {name: "document Audio3D", type: "open", description: "Finish writing the documentation for the [Primrose.Output.Audio3D](#Primrose_Output_Audio3D) class in the output/ directory"});
pliny.issue("Primrose.Output.HapticGlove", {name: "document HapticGlove", type: "open", description: "Finish writing the documentation for the [Primrose.Output.HapticGlove](#Primrose_Output_HapticGlove) class in the output/ directory"});
pliny.issue("Primrose.Output.Music", {name: "document Music", type: "open", description: "Finish writing the documentation for the [Primrose.Output.Music](#Primrose_Output_Music) class in the output/ directory"});
pliny.issue("Primrose.Output.Speech", {name: "document Speech", type: "open", description: "Finish writing the documentation for the [Primrose.Output.Speech](#Primrose_Output_Speech) class in the output/ directory"});

pliny.issue("Primrose.Text.CodePage", {name: "document CodePage", type: "open", description: "Finish writing the documentation for the [Primrose.Text.CodePage](#Primrose_Text_CodePage) class in the text/ directory"});
pliny.issue("Primrose.Text.CommandPack", {name: "document CommandPack", type: "open", description: "Finish writing the documentation for the [Primrose.Text.CommandPack](#Primrose_Text_CommandPack) class in the text/ directory"});
pliny.issue("Primrose.Text.Cursor", {name: "document Cursor", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Cursor](#Primrose_Text_Cursor) class in the text/ directory"});
pliny.issue("Primrose.Text.Grammar", {name: "document Grammar", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Grammar](#Primrose_Text_Grammar) class in the text/ directory"});
pliny.issue("Primrose.Text.OperatingSystem", {name: "document OperatingSystem", type: "open", description: "Finish writing the documentation for the [Primrose.Text.OperatingSystem](#Primrose_Text_OperatingSystem) class in the text/ directory"});
pliny.issue("Primrose.Text.Point", {name: "document Point", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Point](#Primrose_Text_Point) class in the text/ directory"});
pliny.issue("Primrose.Text.Rectangle", {name: "document Rectangle", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Rectangle](#Primrose_Text_Rectangle) class in the text/ directory"});
pliny.issue("Primrose.Text.Rule", {name: "document Rule", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Rule](#Primrose_Text_Rule) class in the text/ directory"});
pliny.issue("Primrose.Text.Size", {name: "document Size", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Size](#Primrose_Text_Size) class in the text/ directory"});
pliny.issue("Primrose.Text.Terminal", {name: "document Terminal", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Terminal](#Primrose_Text_Terminal) class in the text/ directory"});
pliny.issue("Primrose.Text.Token", {name: "document Token", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Token](#Primrose_Text_Token) class in the text/ directory"});

pliny.issue("Primrose.Text.CodePages.DE_QWERTZ", {name: "document DE_QWERTZ", type: "open", description: "Finish writing the documentation for the [Primrose.Text.CodePages.DE_QWERTZ](#Primrose_Text_CodePages_DE_QWERTZ) class in the code_pages/ directory"});
pliny.issue("Primrose.Text.CodePages.EN_UKX", {name: "document EN_UKX", type: "open", description: "Finish writing the documentation for the [Primrose.Text.CodePages.EN_UKX](#Primrose_Text_CodePages_EN_UKX) class in the code_pages/ directory"});
pliny.issue("Primrose.Text.CodePages.EN_US", {name: "document EN_US", type: "open", description: "Finish writing the documentation for the [Primrose.Text.CodePages.EN_US](#Primrose_Text_CodePages_EN_US) class in the code_pages/ directory"});
pliny.issue("Primrose.Text.CodePages.FR_AZERTY", {name: "document FR_AZERTY", type: "open", description: "Finish writing the documentation for the [Primrose.Text.CodePages.FR_AZERTY](#Primrose_Text_CodePages_FR_AZERTY) class in the code_pages/ directory"});

pliny.issue("Primrose.Text.CommandPacks.TestViewer", {name: "document TestViewer", type: "open", description: "Finish writing the documentation for the [Primrose.Text.CommandPacks.TestViewer](#Primrose_Text_CommandPacks_TestViewer) class in the command_packs/ directory"});
pliny.issue("Primrose.Text.CommandPacks.TextEditor", {name: "document TextEditor", type: "open", description: "Finish writing the documentation for the [Primrose.Text.CommandPacks.TextEditor](#Primrose_Text_CommandPacks_TextEditor) class in the command_packs/ directory"});

pliny.issue("Primrose.Text.Controls.PlainText", {name: "document PlainText", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Controls.PlainText](#Primrose_Text_Controls_PlainText) class in the controls/ directory"});
pliny.issue("Primrose.Text.Controls.TextBox", {name: "document TextBox", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Controls.TextBox](#Primrose_Text_Controls_TextBox) class in the controls/ directory"});

pliny.issue("Primrose.Text.Grammars.Basic", {name: "document Basic", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Grammars.Basic](#Primrose_Text_Grammars_Basic) class in the grammars/ directory"});
pliny.issue("Primrose.Text.Grammars.JavaScript", {name: "document JavaScript", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Grammars.JavaScript](#Primrose_Text_Grammars_JavaScript) class in the grammars/ directory"});
pliny.issue("Primrose.Text.Grammars.PlainText", {name: "document PlainText", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Grammars.PlainText](#Primrose_Text_Grammars_PlainText) class in the grammars/ directory"});
pliny.issue("Primrose.Text.Grammars.TestResults", {name: "document TestResults", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Grammars.TestResults](#Primrose_Text_Grammars_TestResults) class in the grammars/ directory"});

pliny.issue("Primrose.Text.OperatingSystems.OSX", {name: "document OSX", type: "open", description: "Finish writing the documentation for the [Primrose.Text.OperatingSystems.OSX](#Primrose_Text_OperatingSystems_OSX) class in the operating_systems/ directory"});
pliny.issue("Primrose.Text.OperatingSystems.Windows", {name: "document Windows", type: "open", description: "Finish writing the documentation for the [Primrose.Text.OperatingSystems.Windows](#Primrose_Text_OperatingSystems_Windows) class in the operating_systems/ directory"});

pliny.issue("Primrose.Text.Renderers.Canvas", {name: "document Canvas", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Renderers.Canvas](#Primrose_Text_Renderers_Canvas) class in the renderers/ directory"});
pliny.issue("Primrose.Text.Renderers.DOM", {name: "document DOM", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Renderers.DOM](#Primrose_Text_Renderers_DOM) class in the renderers/ directory"});

pliny.issue("Primrose.Text.Themes.Dark", {name: "document Dark", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Themes.Dark](#Primrose_Text_Themes_Dark) class in the themes/ directory"});
pliny.issue("Primrose.Text.Themes.Default", {name: "document Default", type: "open", description: "Finish writing the documentation for the [Primrose.Text.Themes.Default](#Primrose_Text_Themes_Default) class in the themes/ directory"});
