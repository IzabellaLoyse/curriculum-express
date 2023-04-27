import { IAddress } from './address';

export interface ICurriculum {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  cpf: string;
  phone: string;
  gender?: string;
  experiences: string;
  address: IAddress;
}
