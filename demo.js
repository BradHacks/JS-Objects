//let's make some objects...  I haven't eaten yet so food it is!

//Prototypal -  The properties are located on the prototype of the object.
//NOTE: If you try to modify the properties all objects inheriting will be affected.
var BLT = {
    components:['bacon','lettuce','tomato','toast'],
    taste:'delicious'
};

MyBLT = Object.create(BLT);
YourBLT = Object.create(BLT);

console.log(MyBLT);
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