angular.module("application").run(["$templateCache", function($templateCache) {$templateCache.put("application/application.html","<div ui-view=\"\"><grid></grid><grid></grid></div>");
$templateCache.put("application/package/package.html","He will be our package");
$templateCache.put("application/packages/packages.html","<div class=\"dsfdsf\">dsfdsfdsfdsf</div>");
$templateCache.put("directive/grid/grid.html","<div><topbar></topbar></div>");
$templateCache.put("directive/navigation/navigation.html","");
$templateCache.put("directive/topbar/topbar.html","<div class=\"header\"><div class=\"container\"><img src=\"image/sm.png\" alt=\"logo\"/></div></div>");}]);