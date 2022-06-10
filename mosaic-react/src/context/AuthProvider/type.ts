export interface IUser{
    nome?: string;
    token?: string;
  
   
}

export interface IContext extends IUser{
    authenticate: (nome:string, senha: string) => Promise<void>;
    logout: () => void;

}

export interface IAuthProvider{
    children: JSX.Element;


}