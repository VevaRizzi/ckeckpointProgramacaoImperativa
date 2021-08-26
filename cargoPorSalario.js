function cargoPorSalario(salario){
    let cargo = salario < 2500.0 ? "Junior" 
    : salario < 5000.0 ? "Pleno" 
    : salario < 10000.0 ? "Senior" 
    : "Executivo";
    
    if(salario < 2500.0){
      cargo = "Junior";
    } else if(salario < 5000.0){
      cargo = "Pleno";
    } else if(salario < 10000.0){
      cargo = "Senior";
    } else {
      cargo = "Executivo";
    }
    console.log(cargo);
    return cargo;
  }
  
  function salarioMedioPorCargo(cargo){
    let salarioMedio = 0.0;
    switch(cargo){
      case "Junior":
        salarioMedio = 2500.00;
        break;
      case "Pleno":
        salarioMedio = 5000.00;
        break;
      case "Senior":
        salarioMedio = 10000.00;
        break;
      default:
        salarioMedio = 10000000.00;
    }
    console.log(salarioMedio);
    return salarioMedio;
  }
  
  let cargo = cargoPorSalario(3000);
  let salarioMedio = salarioMedioPorCargo("Pleno");
  