let resultado = "aprovado";

switch (resultado) {
    case "aprovado":
         console.log("Parabéns ,você está no grupo de pessoas aprovadas.");
    break;

    case "lista":
        console.log("Você está na lista de espera.");
        break;

    case "reprovado":
        console.log("Infelizmente você reprovou")
        break;
    
    default:
        console.log("Informação incorreta.")
}