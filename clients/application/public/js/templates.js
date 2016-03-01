angular.module("application").run(["$templateCache", function($templateCache) {$templateCache.put("application/application.html","<div ui-view=\"\"><topbar></topbar><grid></grid></div>");
$templateCache.put("directive/navigation/navigation.html","<div class=\"sidemenu\"><nav><ul><li><a href=\"#colour\">colour</a></li><li><a href=\"#fonts\">fonts</a></li><li><a href=\"#borders\">borders</a></li></ul></nav><select><option>.styl</option><option>.less</option><option>.scss</option></select><a class=\"btn btn-default\">edit</a><a class=\"btn btn-success\">save</a><a class=\"btn btn-info\">create .styl file</a></div>");
$templateCache.put("directive/topbar/topbar.html","<div class=\"header\"><div class=\"container\"><a href=\"/\"><img src=\"/image/sm.png\" alt=\"logo\"/></a></div></div>");
$templateCache.put("directive/grid/grid.html","<div class=\"main-wr container\"><div class=\"search-bar\"><label><input type=\"text\" placeholder=\"Find Project by Name\"/></label><a href=\"javascript:void(0);\" class=\"btn btn-info\">&#128270;</a></div><table class=\"table\"><thead><tr><th>Project Name</th><th>Colour Palette Preview</th></tr></thead><tbody><tr ng-repeat=\"package in gridCtrl.getPackages\"><td><a href=\"/package/{{package.id}}\">{{package.name}}</a></td><td><span ng-repeat=\"color in package.colour.primary\" style=\"color: {{color.value}}\">&bull;</span></td></tr></tbody></table></div>");
$templateCache.put("application/package/package.html","<div><topbar></topbar><div ng-if=\"packageCtrl.package\" class=\"main-wr container clearfix\"><navigation></navigation><!-- Colour of palette--><div id=\"colour\" class=\"content\"><h1 class=\"content-title\">Colour Palette</h1><div><h2>Primary Palette</h2><div class=\"colors-wrapp clearfix\"><div ng-repeat=\"color in packageCtrl.getColourPrimary()\" class=\"color-card\"><label style=\"background-color: {{color.value}}\" class=\"color-inp-lbl\"><input type=\"text\" ng-model=\"color.value\" placeholder=\"add new\" class=\"color-inp\"/></label><label><input type=\"text\" ng-model=\"color.class\" placeholder=\"add new\" class=\"color-var\"/></label></div><div class=\"color-card\"><label style=\"background-color: {{packageCtrl.packageNew.value}}\" class=\"color-inp-lbl\"><input type=\"text\" ng-model=\"packageCtrl.packageNew.value\" placeholder=\"#000000\" class=\"color-inp\"/></label><label><input type=\"text\" ng-model=\"packageCtrl.packageNew.class\" placeholder=\"add new\" class=\"color-var\"/></label></div><div class=\"color-card\"><a ng-click=\"packageCtrl.addColourPrimary()\" class=\"color-inp-btn\">+</a></div></div></div><div><h2>Secondary Palette</h2><div class=\"colors-wrapp clearfix\"><div ng-repeat=\"color in packageCtrl.getColourSecondary()\" class=\"color-card\"><label style=\"background-color: {{color.value}}\" class=\"color-inp-lbl\"><input type=\"text\" ng-model=\"color.value\" placeholder=\"add new\" class=\"color-inp\"/></label><label><input type=\"text\" ng-model=\"color.class\" placeholder=\"add new\" class=\"color-var\"/></label></div><div class=\"color-card\"><label style=\"background-color: {{packageCtrl.packageNewSecondary.value}}\" class=\"color-inp-lbl\"><input type=\"text\" ng-model=\"packageCtrl.packageNewSecondary.value\" placeholder=\"#000000\" class=\"color-inp\"/></label><label><input type=\"text\" ng-model=\"packageCtrl.packageNewSecondary.class\" placeholder=\"add new\" class=\"color-var\"/></label></div><div class=\"color-card\"><a ng-click=\"packageCtrl.addColourSecondary()\" class=\"color-inp-btn\">+</a></div></div></div></div><!-- Fonts--><div id=\"fonts\" class=\"content\"><h1 class=\"content-title\">Fonts</h1></div><!-- Borders--><div id=\"borders\" class=\"content\"><h1 class=\"content-title\">Borders</h1></div></div></div>");}]);