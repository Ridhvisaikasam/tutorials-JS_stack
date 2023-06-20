//encapsulation
class Encap
{
    private a:number; //----> encapsulation
    constructor(a:number)
    {
        this.a=a;
    }
    //inline function
    public getA = () => {return this.a;}
}

const en=new Encap(5);
console.log(en.getA());


//inheritence
class Parent
{
    public print()
    {
        console.log("parent");
    }
}
class Child extends Parent
{
    public print()
    {
        super.print();
        console.log("child");
    }
}

const ch=new Child();
ch.print();

//abstraction(interface)

/*interface IParent {a:number;}

const IPobj:IParent=
{
    a:5,
    print:(a:number)=>console.log(a),
}

class IparImpl implements IParent
{
    a:number,
    public print=()=>console.log(this.a);
    
}*/

//abstraction(class)

abstract class Shape
{
    public abstract getArea():number;
    public print=()=>console.log(this.getArea()); //inline function
 
}

class Rectangle extends Shape
{
    constructor(public l:number,public b:number){super();}

    public getArea= (): number =>
    {
        return this.l*this.b;
    } //inline function
}

const rect=new Rectangle(5,5);
rect.print();

//polymorphism--> parent objects can hold child objects

const sh:Shape=new Rectangle(6,6);
sh.print();

// the advantage of this polymorphism is 
//while doing some other methods(x: Shape) we can pass all the child objects to that method 
//no need different different implementations