/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface MvtStkDto {
  id?: number;
  dateMvt?: number;
  quantite?: number;
  article?: ArticleDto;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
  idEntreprise?: number;
}
