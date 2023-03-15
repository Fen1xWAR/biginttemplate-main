const BASE = 10;
const SYM_PER_DIGIT=((BASE-1)+" ".length);

class TBuffer{
    costructor(...ARG){
        this.valData = ARG.reduce((p,c)=>p+c,0);
        this.base=BASE;
        return this;
   }

   shr() { this.valData=Math.floor(this.valdata/this.base);}
   rem(){
        var r=this.valData%this.base;
        this.shr();
        return r;}
    isZerro(){return this.valData==0;}
    notEmpty(){return !this.isZerro();}
    pushSum(...x){
        this.valData+=x.reduce((p,c)=>p+c,0);
        return this;
    }
    pushProd(...x){
        this.valData+=x.reduce((p,c)=>p*c,1);
    }
   }
   class TLNum{
    constructor (S) {
        S = S || {};
        this._digits = S['digits'] || [0,0,0,0,0,0,0,0,0,0,0,0,0];
        this.maxlen = S['digits'] ? S['digits'].length:13 ;
        this.negative = S['n'] || false;
        this.layout = S['layout'] || null;
        this.ref =  0;
        this._current = 0;
        this.lsd_num =0;
        return this;
    }
        current (a){
            if (a===undefined) {return this._digits[ this._current];} 
            this._digits[this._current]=a;
            return this;
        }
        first() {this._current=0;return this.current ()};
        next() {this._current++;return this.current () ;} 
        prev(){this._current--;
            console.assert(this._current>=0,'Current digit reference is...');
            return this.current();
        }
        digits(d){
            if (d==undefined) {return (this._digits)}
            this._digits.fill(d); return this;
            }
        lsd(n){
            if (n!=undefined){ this.lsd.num=n; return this}
            else {return this._digits[this.lsd_num]}}
            
        drop(){this.lsd(0).digits(0).first();return this;}
        str(){return "%%%%%"}
        refreshView(){
            if (this.layout){

            } 
            else{
                console.log(this);
            }
        }
        setRand(){
            
            
            return this
        
        }

        }
        