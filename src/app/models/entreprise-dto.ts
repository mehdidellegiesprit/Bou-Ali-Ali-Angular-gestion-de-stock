/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { UtilisateurDto } from './utilisateur-dto';
export interface EntrepriseDto {
  id?: number;
  nom?: string;
  description?: string;
  adresse?: AdresseDto;
  codeFiscal?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  steWeb?: string;
  utilisateurs?: Array<UtilisateurDto>;
}
