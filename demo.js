//let's make some objects...  I haven't eaten yet so food it is!

//Prototypal -  The properties are located on the prototype of the object.
//NOTE: Use caution when doing prototypal inheritance.  Don't accidentally update the prototype.
BLT = {
    components:['bacon','lettuce','tomato','toast'],
    taste:'delicious',
    expire : function(){
        this.taste = 'gross';
    }
};

MyBLT = Object.create(BLT);
OldBLT = Object.create(BLT);
OldBLT.expire();
YourBLT = Object.create(BLT);

//uncomment lines below and see how all objects are affected.
//MyBLT['components'].push('Mayo');
//YourBLT.components.push('Ranch');

console.log(MyBLT);
console.log(OldBLT);
console.log(YourBLT);

//Object constructor/factory - The properties are located on the object itself.
var Parfait= function(extras){
    this.components = ['Yogurt','Granola'];
    for(var x=0; x<arguments.length; x++){
        this.components.push(arguments[x]);
    }
    this.taste = 'amazing'
    return this;
}

MyParfait = new Parfait('Strawberries');
YourParfait = new Parfait('Blueberries');

console.log(MyParfait);
console.log(YourParfait);

//Object Literal - Objects are created and defined individually with their own properties.
MySundae = {
    components: ['Vanilla Ice Cream','Chocolate Chips','peanuts'],
    taste:'scrumptious'
}

YourSundae = {
    components: ['Vanilla Ice Cream', 'Caramel', 'Chocolate Chunks','Sprinkles'],
    taste:'scrumptious'
}

console.log(MySundae);
console.log(YourSundae);

//Let's go a little deeper.. Passing a properties object.
PBJ = {
    components:['Toast','Peanut Butter','Jelly'],
    taste:'awesome'
}

MyPBJ = Object.create(PBJ,{crustless:{value:true}});
YourPBJ = Object.create(PBJ, {crustless:{value:false}});

console.log(MyPBJ);
console.log(YourPBJ);