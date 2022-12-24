export class Alumno{
    public idAlumno:string;
    public nombreAlumno:string;
    public apellidoAlumno: string;
    public dniAlumno:string;
    public edadAlumno: string;
    public cursoAlumno:string;
    public inscripcionAlumno: string;
    public eventoAlumno:string;
    public correoAlumno: string;

    constructor(
      idAlumno:string,
      nombreAlumno:string,
      edadAlumno: string,
      cursoAlumno:string,
      inscripcionAlumno:string,
      apellidoAlumno: string,
      dniAlumno:string,
      eventoAlumno:string,
      correoAlumno:string

    ){
        this.idAlumno=idAlumno;
        this.nombreAlumno=nombreAlumno;
        this.edadAlumno=edadAlumno;
        this.cursoAlumno=cursoAlumno;
        this.inscripcionAlumno=inscripcionAlumno;
        this.apellidoAlumno=apellidoAlumno;
        this.dniAlumno=dniAlumno;
        this.eventoAlumno=eventoAlumno;
        this.correoAlumno=correoAlumno;
    }
}