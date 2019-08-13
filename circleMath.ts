namespace MyMath {
    export class Circle {
        static PI = 3.14;

        static calculateCircumference(diameter:number) {
            return diameter * Circle.PI
        }
    }
}