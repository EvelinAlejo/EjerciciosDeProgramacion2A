import { ReservaNormal } from './reservaNormal.js';
import { ReservaVip } from './reservaVip.js';

const reservasX = [];

// Instanciar y agregar al arreglo
reservasX.push(new ReservaNormal("pancho", 23, "07/09/2026", "8:37"));
reservasX.push(new ReservaNormal("amy", 2, "01/11/2026", "9:30"));
reservasX.push(new ReservaVip("osiris", 9, "02/10/2026", "10:30", "Mesa junto a la ventana + Bebida gratis"));
reservasX.push(new ReservaVip("asis", 8, "09/12/2026", "3:40", "Acceso a zona Lounge"));

// Imprimir listado
console.log("--- LISTADO DE RESERVAS ---");
reservasX.forEach(res => {
    console.log(res.mostrar());
});