export interface ProgInt {
  header: string;
  subheader: string;
  description: string;
  imgUrl: string;
  buttonLabel: string;
  icon: string;
  redirectUrl: string;
}

export class Progetto implements ProgInt {
  constructor(
    public header: string,
    public subheader: string,
    public description: string,
    public imgUrl: string,
    public buttonLabel: string,
    public icon: string,
    public redirectUrl: string
  ) {}
}
