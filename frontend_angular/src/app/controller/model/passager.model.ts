
export class Passager {

 id: number;
 nom: string;
 nom__like: string;
 nom__in: Array<string>;
 cin: string;
 cin__like: string;
 cin__in: Array<string>;
 prenom: string;
 prenom__like: string;
 prenom__in: Array<string>;
 telephone: string;
 telephone__like: string;
 telephone__in: Array<string>;
 status: string;
 status__like: string;
 status__in: Array<string>;
 dateNaissance: Date;
 dateNaissance__lt: Date;
 dateNaissance__gte: Date;
 order_by: Array<string>;


}