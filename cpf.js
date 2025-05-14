function validarCPF (cpf){
    cpf = cpf.replace(/[^\d]+/g,"");

    if(cpf.legth !== 11 || /^(\d)\1+$/.test(cpf)){
        return false;
    }
    
}