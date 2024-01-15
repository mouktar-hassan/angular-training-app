import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class CalculatorService {

    add(x:number, y:number){
        return x + y;
    }

    substrate(x:number, y:number){
        return x - y;
    }

    multiple(x:number, y:number){
        return x * y;
    }

    division(x:number, y:number){
        if(x>y){
            return x/y;
        }

        return "Attention, x doit etre supérieur de y";
        
    }

}