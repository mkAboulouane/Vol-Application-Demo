
export class Vol {

 id: number;
 numVol: string;
 numVol__like: string;
 numVol__in: Array<string>;
 villeDepart: string;
 villeDepart__like: string;
 villeDepart__in: Array<string>;
 villeArrivee: string;
 villeArrivee__like: string;
 villeArrivee__in: Array<string>;
 retard: Date;
 retard__lt: Date;
 retard__gte: Date;
 dateDepart: Date;
 dateDepart__lt: Date;
 dateDepart__gte: Date;
 dateArrivee: Date;
 dateArrivee__lt: Date;
 dateArrivee__gte: Date;
 avion: null | boolean;
 pilote: null | boolean;
 compagnie: null | boolean;
 order_by: Array<string>;


}