System.trace = true;

window.showModulesRelationships = function () {
    var modules = Object.keys(System.loads)
        .map(function (moduleName) {
            return System.loads[moduleName];
        });

    function displayName(module) {
        return module.replace("http://127.0.0.1:8080/app/", "");
    }

    var moduleDefinitions = modules.map(function (module) {
        var name = displayName(module.name);
        return "[" + name + "]";
    });

    window.open("http://yuml.me/diagram/plain/class/" + moduleDefinitions);
};