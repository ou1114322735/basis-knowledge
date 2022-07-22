function inherit(Target,Origin){
    function F(){};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;
}