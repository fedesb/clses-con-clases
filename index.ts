
class Departamento {
 
    nombre:string;

    constructor(nombreDepto){
        this.nombre = nombreDepto;
    }
    getName(){
        return this.nombre
    }
}



class Piso {

    nombre: string;
    departamentos: Departamento[];
    
    constructor(nombrePiso: string){
        this.nombre = nombrePiso;
        this.departamentos = [];
    }

    pushDepartamento(nuevoDepto: Departamento){
        this.departamentos.push(nuevoDepto);   
    };
    
    getDepartamentos(){
        return this.departamentos;
    }

}


class Edificio {

    pisos: Piso[];

    constructor(pisos: Piso[]){
        this.pisos = pisos;
    }



    addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
       
        const pisoEncontrado = this.pisos.find(p => p.nombre == nombreDePiso)
        pisoEncontrado.pushDepartamento(departamento)


        //for (let x = 0; x < this.pisos.length; x++){
          //  if (this.pisos[x].nombre = nombreDePiso){
            //    this.pisos[x].departamentos.push(departamento);
           // }
        //}

    }

    getDepartamentosByPiso(nombreDePiso:string):Departamento[] {
        
        const pisoEncontrado = this.pisos.find(p => p.nombre == nombreDePiso)
        return pisoEncontrado.getDepartamentos();
        
        //const pisoBuscado = this.pisos.find((piso) => {
          //  if (piso.nombre == nombreDePiso){
            //    return true
            //}
        //})
        //return pisoBuscado.departamentos;

    }

}



// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
   console.log("cambio  Desde  Git");
  }
  main();
