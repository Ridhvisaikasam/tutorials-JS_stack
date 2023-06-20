import { TypeAliasDeclaration } from "typescript";

interface Person
{
    pID:number;
}
interface Employee
{
    eID:number;
}

const orObj1: Person|Employee={pID:5};
const orObj2: Person|Employee={pID:5,eID:10};

const andObj: Person|Employee={pID:7,eID:14};

type typealias = Person|Employee;
const taobj : typealias={pID:6};
