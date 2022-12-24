export class Evento{
    public idEvento:string;
    public nombreEvento:string;
    public fechaInicio:string;
    public fechaFin:string;

    constructor(
        idEvento:string,
        nombreEvento:string,
        fechaInicio:string,
        fechaFin:string

    )
    {
        this.idEvento=idEvento;
        this.nombreEvento=nombreEvento;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;

    }
}