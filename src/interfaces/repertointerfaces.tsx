export interface UsuarioReparto {
    Consulta: Consulta[];
}

export interface Consulta {
    CLIENTEID:   string;
    TIPO:        Tipo;
    CONDICIONES: Condiciones;
    DOMID:       string;
    NOMBRE:      string;
    CATALOGO:    string;
    DIRECCION:   string;
    NUMERO:      string;
    COLONIA:     string;
    CIUDAD:      string;
    MUNICIPIO:   Municipio;
    XPREVENTA:   string;
    XLATITUD:    string;
    XLONGITUD:   string;
}

export enum Condiciones {
    Contado = "CONTADO",
    Credito = "CREDITO",
}

export enum Municipio {
    Altepexi = "ALTEPEXI",
    Celaya = "CELAYA",
    Empty = "",
    Puebla = "PUEBLA",
    SANGabrielChilac = "SAN GABRIEL CHILAC",
    Tehuacan = "TEHUACAN",
    TepancoDeLopez = "TEPANCO DE LOPEZ",
    Zinacatepec = "ZINACATEPEC",
}

export enum Tipo {
    C = "C",
    R = "R",
}
