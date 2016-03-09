angular.module("application").run(["$templateCache", function($templateCache) {$templateCache.put("application/application.html","<div ui-view=\"\"><topbar></topbar><grid></grid></div>");
$templateCache.put("application/newPackage/newPackage.html","<div><topbar></topbar><div ng-if=\"newPackageCtrl.package\" class=\"main-wr container clearfix\"><navigation dir-type=\"create\"></navigation><div class=\"content-wrapper\"><!-- Description of package--><div class=\"content-description\"><label><input ng-model=\"newPackageCtrl.package.name\" ng-change=\"newPackageCtrl.actionTitleChange()\" class=\"content__title\"/></label></div><!-- Colour--><div id=\"colour\" class=\"content\"><h1 class=\"content-title\">Colour Palette</h1><colour block-title=\"Primary Palette\" block-type=\"colour, primary\"></colour><colour block-title=\"Secondary Palette\" block-type=\"colour, secondary\"></colour></div><!-- Fonts--><div id=\"fonts\" class=\"content\"><h1 class=\"content-title\">Fonts</h1><fonts block-title=\"Font family\" block-type=\"fonts, font-family\"></fonts><fonts-size block-title=\"Font size\" block-type=\"fonts, font-size\"></fonts-size><fonts-custom block-title=\"\" block-type=\"fonts, font-custom\"></fonts-custom></div><!-- Borders--><div id=\"borders\" class=\"content\"><h1 class=\"content-title\">Border Radius</h1><borders block-title=\"Border radius\" block-type=\"borders, standart\"></borders></div></div></div></div>");
$templateCache.put("application/package/package.html","<div><topbar></topbar><div ng-if=\"packageCtrl.package\" class=\"main-wr container clearfix\"><navigation></navigation><div class=\"content-wrapper\"><!-- Description of package--><div class=\"content-description\"><h1 class=\"content__title\">{{packageCtrl.package.name}}<a>(edit)</a></h1></div><!-- Colour--><div id=\"colour\" class=\"content\"><h1 class=\"content-title\">Colour Palette</h1><colour block-title=\"Primary Palette\" block-type=\"colour, primary\"></colour><colour block-title=\"Secondary Palette\" block-type=\"colour, secondary\"></colour></div><!-- Fonts--><div id=\"fonts\" class=\"content\"><h1 class=\"content-title\">Fonts</h1><fonts block-title=\"Font family\" block-type=\"fonts, font-family\"></fonts><fonts-size block-title=\"Font size\" block-type=\"fonts, font-size\"></fonts-size><fonts-custom block-title=\"\" block-type=\"fonts, font-custom\"></fonts-custom></div><!-- Borders--><div id=\"borders\" class=\"content\"><h1 class=\"content-title\">Border Radius</h1><borders block-title=\"Border radius\" block-type=\"borders, standart\"></borders></div></div></div></div>");
$templateCache.put("components/grid/grid.html","<div class=\"main-wr container\"><div class=\"search-bar\"><label><input type=\"text\" placeholder=\"Find Project by Name\" ng-model=\"gridCtrl.filter\" ng-change=\"gridCtrl.actionFilter()\"/></label><a href=\"javascript:void(0);\" class=\"btn btn-info\">&#128270;</a></div><table class=\"table\"><thead><tr><th>Project Name</th><th>Colour Palette Preview</th></tr></thead><tbody><tr ng-repeat=\"package in gridCtrl.packages\"><td><a href=\"/package/{{package.id}}\">{{package.name}}</a></td><td><span ng-repeat=\"color in package.colour.primary\" style=\"color: {{color.value}}\">&bull;</span></td></tr></tbody></table></div>");
$templateCache.put("directives/scrollTo/scrollTo.html","<a anchor=\"{{\'#\' + val}}\" ng-click=\"scrollToCtrl.action()\">{{val}}</a>");
$templateCache.put("components/basic/topbar/topbar.html","<div class=\"header\"><div class=\"container\"><a href=\"/create\" class=\"btn btn-success\">Create new</a><a href=\"/\"><img src=\"/image/sm.png\" alt=\"logo\"/></a></div></div>");
$templateCache.put("components/package/borders/borders.html","<div><h2>{{bordersCtrl.title}}</h2><div ng-repeat=\"card in bordersCtrl.getCards()\" class=\"radius-wrapp clearfix\"><div class=\"font-size-card multiple\"><label><input type=\"text\" ng-model=\"card.value\" placeholder=\"14\" class=\"font-inp\"/>px</label><label><input type=\"text\" ng-model=\"card.class\" vplaceholder=\"main-border-radius\" class=\"var-value\"/></label></div><div class=\"font-size-card example-card\"><label><input type=\"text\" value=\"Input example\" style=\"border-radius: {{card.value}}px\"/></label></div><div class=\"font-size-card example-card\"><button type=\"button\" style=\"border-radius: {{card.value}}px\" class=\"btn btn-success\">Button example</button></div></div></div>");
$templateCache.put("components/package/colour/colour.html","<div><h2>{{colourCtrl.title}}</h2><div class=\"colors-wrapp clearfix\"><div ng-repeat=\"card in colourCtrl.getCards()\" class=\"color-card\"><label style=\"background-color: {{card.value}}\" class=\"color-inp-lbl\"><input type=\"text\" ng-model=\"card.value\" placeholder=\"add new\" class=\"color-inp\"/></label><label><input type=\"text\" ng-model=\"card.class\" placeholder=\"add new\" class=\"color-var\"/></label></div><div class=\"color-card\"><label style=\"background-color: {{colourCtrl.temp.value}}\" class=\"color-inp-lbl\"><input type=\"text\" ng-model=\"colourCtrl.temp.value\" placeholder=\"#000000\" class=\"color-inp\"/></label><label><input type=\"text\" ng-model=\"colourCtrl.temp.class\" placeholder=\"add new\" class=\"color-var\"/></label></div><div class=\"color-card\"><a ng-click=\"colourCtrl.addCard()\" class=\"color-inp-btn\">+</a></div></div></div>");
$templateCache.put("components/package/fonts/fonts.html","<div><h2>{{fontsCtrl.title}}</h2><div class=\"colors-wrapp clearfix\"><div ng-repeat=\"card in fontsCtrl.getCards()\" class=\"font-family-card\"><label><input type=\"text\" ng-model=\"card.value\" placeholder=\"&quot;Arial&quot;\" class=\"font-inp\"/></label><label><input type=\"text\" ng-model=\"card.class\" placeholder=\"add new\" class=\"var-value\"/></label></div><div class=\"font-family-card\"><label><input type=\"text\" ng-model=\"fontsCtrl.temp.value\" placeholder=\"&quot;Arial&quot;\" class=\"font-inp\"/></label><label><input type=\"text\" ng-model=\"fontsCtrl.temp.class\" placeholder=\"add new\" class=\"var-value\"/></label></div><div class=\"font-family-card font-add-btn\"><a ng-click=\"fontsCtrl.addCard()\">+</a></div></div></div>");
$templateCache.put("components/package/fontsCustom/fontsCustom.html","<div><h2>{{fontsCustomCtrl.title}}</h2><div class=\"colors-wrapp clearfix\"><div ng-repeat=\"card in fontsCustomCtrl.getCards()\" class=\"fonts-wrapp clearfix\"><div class=\"font-family-card\"><label><input type=\"text\" ng-model=\"card.value\" placeholder=\"#dddddd\" class=\"font-inp\"/></label><label><input type=\"text\" ng-model=\"card.class\" placeholder=\"add-new-text-color\" class=\"var-value\"/></label></div><div style=\"color: {{card.value}}\">London is the capital of the United Kingdom of Great Britain and Northern Ireland. It is the largest city in Europe and one of the largest cities in the world with the population of 11 million people. About a fifth of the total population of the UK lives in the Greater London area, that is London and its suburbs.</div></div><p>Create your style of text</p><div class=\"fonts-wrapp clearfix\"><div class=\"font-family-card\"><label><input type=\"text\" ng-model=\"fontsCustomCtrl.temp.value\" placeholder=\"#dddddd\" class=\"font-inp\"/></label><label><input type=\"text\" ng-model=\"fontsCustomCtrl.temp.class\" placeholder=\"add-new-text-color\" class=\"var-value\"/></label></div><div style=\"color: {{fontsCustomCtrl.temp.value}}\">London is the capital of the United Kingdom of Great Britain and Northern Ireland. It is the largest city in Europe and one of the largest cities in the world with the population of 11 million people. About a fifth of the total population of the UK lives in the Greater London area, that is London and its suburbs.</div></div><div class=\"clearfix\"><div class=\"font-family-card font-add-btn full-width\"><a ng-click=\"fontsCustomCtrl.addCard()\">+</a></div></div></div></div>");
$templateCache.put("components/package/fontsSize/fontsSize.html","<div><h2>{{fontsSizeCtrl.title}}</h2><div class=\"colors-wrapp clearfix\"><div ng-repeat=\"card in fontsSizeCtrl.getCards()\" class=\"font-size-card\"><label><input type=\"text\" ng-model=\"card.value\" placeholder=\"15\" class=\"font-inp\"/>px</label><label><input type=\"text\" ng-model=\"card.class\" placeholder=\"font-size-h*\" class=\"var-value\"/></label></div><div class=\"font-size-card\"><label><input type=\"text\" ng-model=\"fontsSizeCtrl.temp.value\" placeholder=\"15\" class=\"font-inp\"/>px</label><label><input type=\"text\" ng-model=\"fontsSizeCtrl.temp.class\" placeholder=\"font-size-h*\" class=\"var-value\"/></label></div><div class=\"font-family-card font-add-btn\"><a ng-click=\"fontsSizeCtrl.addCard()\">+</a></div></div></div>");
$templateCache.put("components/package/navigation/navigation.html","<div class=\"sidemenu\"><nav><ul><li ng-repeat=\"val in navCtrl.links\"><scroll-to></scroll-to></li></ul></nav><select ng-model=\"navCtrl.objectType\"><option>.styl</option><option>.less</option><option>.scss</option></select><a ng-click=\"navCtrl.actionSavePackage()\" ng-if=\"!navCtrl.modeType\" class=\"btn btn-success\">save</a><a ng-click=\"navCtrl.actionCreatePackage()\" ng-if=\"navCtrl.modeType\" class=\"btn btn-success\">create</a><a ng-click=\"navCtrl.actionCreateFile()\" class=\"btn btn-info\">create {{navCtrl.objectType}} file</a></div>");}]);