import {Passager} from './passager.model';
import {Siege} from './siege.model';
import {Vol} from './vol.model';

export class Billet {

 id: number;
 passager_id: number;
 passager: Passager;
 siege_id: number;
 siege: Siege;
 vol_id: number;
 vol: Vol;
 numBillet: string;
 numBillet__like: string;
 numBillet__in: Array<string>;
 createdAt: Date;
 createdAt__lt: Date;
 createdAt__gte: Date;
 dateEmission: Date;
 dateEmission__lt: Date;
 dateEmission__gte: Date;
 datePaiment: Date;
 datePaiment__lt: Date;
 datePaiment__gte: Date;
 dateReservation: Date;
 dateReservation__lt: Date;
 dateReservation__gte: Date;
 order_by: Array<string>;


}