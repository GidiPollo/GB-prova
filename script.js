const contenuti = [
  { frase: "Sapevo dall’inizio che non sarebbe stato semplice.", risposta: "ma provare non costa nulla" },
  { frase: "Qualcosa nel tuo modo mi colpisce.", risposta: "ci sta" },
  { frase: "È vero: la comunicazione potrebbe non essere semplice", risposta: "e a me piace complicarmi la vita" },
  { frase: "Con tutta questa timidezza poi…", risposta: "e vabbè" },
  { frase: "Ci sono mille modi per comunicare.", risposta: "io non scelgo mai il più semplice" },
  { frase: "Potrei avere qualche difetto.", risposta: "ma questo ancora non è sicuro" },
  { frase: "Ma ci provo fino in fondo", risposta: "se una cosa penso che ne valga la pena" },
  { frase: "Non è facile e non lo sarà.", risposta: "lo so già" },
  { frase: "Ma mi dispiacerebbe non provarci fino in fondo", risposta: "non per qualcosa che già sento" },
  { frase: "Ma per la sensazione che ho", risposta: "magari mi sbaglio eh" },
  { frase: "Ma magari no", risposta: "e quindi..." },
  { frase: "Dai almeno sono simpatica", risposta: "e spero di averti fatta sorridere" },
  { frase: "Potevo "osare" di più.", risposta: "e se me ne darai modo lo farò." }
];

let indice = 0;

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("risposta");
  const frase = document.getElementById("frase");

  button.addEventListener("click", () => {
    // fade out
    frase.classList.add("fade-out");

    setTimeout(() => {
      indice++;
      if (indice >= contenuti.length) {
        // ultima frase: nascondi il pulsante
        indice = contenuti.length - 1;
        button.style.display = "none";
      }
      frase.innerText = contenuti[indice].frase;
      button.innerText = contenuti[indice].risposta;

      // fade in
      frase.classList.remove("fade-out");
    }, 500); // corrisponde alla durata della transizione CSS
  });
});
