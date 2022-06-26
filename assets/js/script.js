"use strict";
window.onload = function () {
    let utente1 = new Smartphone(0.21, 0, 0, 50);
    let utente2 = new Smartphone(0.50, 0, 0, 0);
    let utente3 = new Smartphone(0.19, 0, 0, 0);
    console.log("Credito iniziale: ", utente1.remainingCredit());
    // utente1.setCredit(0.10);
    utente1.startCall();
    console.log("Chiamate effetuate", utente1.getCallsNumber());
};
class Smartphone {
    constructor(credit, nCalls, minutes, seconds) {
        this._credit = credit;
        this._nCalls = nCalls;
        this._minutes = minutes;
        this._seconds = seconds;
    }
    get credit() {
        return this._credit;
    }
    get nCalls() {
        return this._nCalls;
    }
    set nCalls(nCalls) {
        this._nCalls = nCalls;
    }
    get minutes() {
        return this._minutes;
    }
    set minutes(minutes) {
        this._minutes = minutes;
    }
    get seconds() {
        return this._seconds;
    }
    set seconds(seconds) {
        this._seconds = seconds;
    }
    // #2 definire il metodo ricarica che ricarica il credito del telefonino✅
    setCredit(amount) {
        this._credit = this._credit + amount;
        console.log("Credito caricato!");
        console.log("Nuovo credito: ", this._credit.toFixed(2));
    }
    deductCredit(amount) {
        this._credit = this.credit - amount;
        console.log("- 0.20 cent");
        console.log("Credito residuo: ", this._credit.toFixed(2));
    }
    // #3 metodo chiamata (si assume un costo di 20 centesimi x ogni minuto di chiamata)✅
    startCall() {
        this._nCalls++;
        this.timer = setInterval(() => {
            this.seconds++;
            if (this._credit >= 0.20) {
                if (this.seconds == 60) {
                    this.seconds = 0;
                    this.minutes++;
                    this.deductCredit(0.20);
                }
            }
            else {
                this.endCall();
                console.log("Credito insufficiente!!!");
            }
            console.log(this.minutes, ":", this.seconds);
        }, 1000);
    }
    endCall() {
        clearInterval(this.timer);
        console.log("Chiamata terminata...");
    }
    // #4 metodo n404 che restituisce il credito residuo✅
    remainingCredit() {
        return this._credit;
    }
    // #5 metodo getnumerochiamate che restituisce il contatore quindi quante chiamate ha fatto il mio telefono✅
    getCallsNumber() {
        return this._nCalls;
    }
    // #6 metodo reset per le chiamate✅
    resetCallsNumber() {
        this._nCalls = 0;
    }
}
