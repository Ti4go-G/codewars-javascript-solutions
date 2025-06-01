class Singleton {
    constructor() {
        if(!Singleton.instance){
          Singleton.instance = this;
        }
      return Singleton.instance
    }
}
//a classe será instanciada apenas na primeira vez, todas as novas instâncias apontarão para ela