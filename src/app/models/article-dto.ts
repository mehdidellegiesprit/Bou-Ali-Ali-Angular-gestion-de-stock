/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface ArticleDto {
  id?: number;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  idEntreprise?: number;
  prixUnitaireTtc?: number;
  photo?: string;
  category?: CategoryDto;
}
