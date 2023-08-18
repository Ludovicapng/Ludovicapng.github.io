export interface BottImp {
    redirectUrl: string;
    icon: string;
    style: string;
  }
  
  export class Bottone implements BottImp {
    constructor(
      public redirectUrl: string,
      public icon: string,
      public style: string,
    ) {}
  }
  