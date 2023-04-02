class Student{
    constructor(name,listCourses){
        this.name = name;
        this.listCourses = listCourses;
    }
    //method return object with name and listCourses
    obtenDatos(){
        return{
            name: this.name,
            listCourses: this.listCourses
        };
    }
}

//instance Estudiante
const Estudiante = new Student('Ysaac',['Javascript','HTML','CSS']);
//call method obtenDatos
console.log(Estudiante.obtenDatos());