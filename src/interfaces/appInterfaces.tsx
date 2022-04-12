
export interface LoginData {
    telefono: string;
    password:string;
}

export interface RegisterData {
    nombre: string;
    direccion: string;
    telefono: string;
    password: string;
}

export interface LoginResponse {
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    rol:       string;
    
    estado:    boolean;
    google:    boolean;
    nombre:    string;
    direccion: string;
    telefono:  string;
    uid:       string;
    img?:      string;
}

