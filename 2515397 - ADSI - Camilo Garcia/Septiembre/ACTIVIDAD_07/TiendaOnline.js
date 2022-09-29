//Tienda Online De Libros 
class Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña) {
        this._Nombre = Nombre
        this._TipoDocumento = TipoDocumento
        this._NroDocumento = NroDocumento
        this._Contraseña = Contraseña
    }
    get Nombre(){
        return this._Nombre
    }
    get TipoDocumento(){
        return this._TipoDocumento
    }
    get NroDocumento(){
        return this._NroDocumento
    }
    get Contraseña(){
        return this._Contraseña
    }
    set Contraseña(Contraseña){
        this._Contraseña=Contraseña;
    }
}

class Cliente extends Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_C, Correo_C, Direccion) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña)
        this._Telefono_C = Telefono_C
        this._Correo_C = Correo_C
        this._Direccion = Direccion
    }
    get Nombre(){
        return this._Nombre
    }
    get TipoDocumento(){
        return this._TipoDocumento
    }
    get NroDocumento(){
        return this._NroDocumento
    }
    get Contraseña(){
        return this._Contraseña
    }
    set Contraseña(Contraseña){
        this._Contraseña=Contraseña;
    }
    set Telefono_C(Telefono_C){
        this._Telefono_C=Telefono_C
    }
    set Correo_C(Correo_C){
        this._Correo_C=Correo_C
    }
    set Direccion(Direccion){
        this._Direccion=Direccion
    }
}

class Administrador extends Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefonos, Correos, DireccionEmpresa) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña)
        this._Telefonos = Telefonos
        this._Correos = Correos
        this._DireccionEmpresa = DireccionEmpresa
    }
    get Nombre(){
        return this._Nombre
    }
    get TipoDocumento(){
        return this._TipoDocumento
    }
    get NroDocumento(){
        return this._NroDocumento
    }
    get Contraseña(){
        return this._Contraseña
    }
    set Contraseña(Contraseña){
        this._Contraseña=Contraseña;
    }
    set Telefonos(Telefonos){
        this._Telefonos=Telefonos
    }
    set Correos(Correos){
        this._Correos=Correos
    }
    set Direccion(DireccionEmpresa){
        this._DireccionEmpresa=DireccionEmpresa
    }
}

class Vendedor extends Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_V, Correo_V, ActualizarProducto, QuitarProducto, AgregaProducto) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña)
        this._Telefono = Telefono_V
        this._Correo = Correo_V
        this._ActualizarProducto = ActualizarProducto
        this._QuitarProducto = QuitarProducto
        this._AgregaProducto = AgregaProducto
    }
    get Nombre(){
        return this._Nombre
    }
    get TipoDocumento(){
        return this._TipoDocumento
    }
    get NroDocumento(){
        return this._NroDocumento
    }
    get Contraseña(){
        return this._Contraseña
    }
    set Contraseña(Contraseña){
        this._Contraseña=Contraseña;
    }
    set Telefono_V(Telefono_V){
        this._Telefono_V=Telefono_V
    }
    set Correo_V(Correo_V){
        this._Correo_V=Correo_V
    }
    set Direccion(Direccion){
        this._Direccion=Direccion
    }
    set ActualizarProducto (ActualizarProducto){
        this._ActualizarProducto=ActualizarProducto
    }
    set QuitarProducto(QuitarProducto){
        this._QuitarProducto=QuitarProducto
    }
    set AgregaProducto(AgregaProducto){
        this._AgregaProducto=AgregaProducto
    }
}

class Producto extends Cliente{
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_C, Correo_C, Direccion, Categoria, Precio, Isbn, Autor, Paginas, FechaPublicación, Formato,Titulo   ){
        super (Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_C, Correo_C, Direccion)
        this._Categoria= Categoria
        this._Precio=Precio
        this._Isbn=Isbn
        this._Autor=Autor
        this._Paginas=Paginas
        this._FechaPublicación=FechaPublicación
        this._Formato=Formato
        this._Titulo=Titulo
    }
    get Titulo(){
        return this._Titulo
    }
    get Formato(){
        return this._Formato
    }
    get Precio(){
        return this._Precio
    }
    set Precio (Precio){
        this._Precio=Precio
    }
    set Paginas (Paginas){
        this._Paginas=Paginas
    }
    set FechaPublicación (FechaPublicación){
        this._FechaPublicación=FechaPublicación
    }
}
class Carrito extends Producto{
    constructor(Autor, Paginas, FechaPublicación, Formato, QuitarProducto, Cantidad,Producto, Precio, TotalPagar){
        super (Autor, Paginas, FechaPublicación, Formato)
        this._QuitarProducto = QuitarProducto
        this._Cantidad=Cantidad
        this._Producto=Producto
        this._Precio=Precio
        this._TotalPagar=TotalPagar
    }
    get Producto(){
        return this._Producto
    }
    get Precio(){
        return this._Precio
    }
    get TotalPagar(){
        return this._TotalPagar
    }
    get Cantidad(){
        return this._Cantidad
    }

    agregarProducto(ProductoNuevo){
        Arreglo.push(ProductoNuevo)
        
    }
    
}

class Factura extends Carrito{
    constructor(QuitarProducto, Cantidad,Producto, Precio, TotalPagar, Nombre, FechaHora, FormaPago, Iva, Titulo,TotalIva, DireccionCliente){
        super (QuitarProducto, Cantidad,Producto, Precio, TotalPagar)
        this._Nombre=Nombre
        this._FechaHora=FechaHora
        this._FormaPago=FormaPago
        this._Iva=Iva
        this._Titulo=Titulo
        this._TotalIva=TotalIva
        this._DireccionCliente=DireccionCliente
    }
    get Titulo(){
        return this.Titulo 
    }
    get Iva(){
        return this._Iva
    }
    get TotalIva(){
        return this._TotalIva
    }
    get FormaPago(){
        return this._FormaPago
    }

}

class Factura extends Vendedor{
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_V, Correo_V,Nombre, FechaHora, FormaPago, Iva, Titulo,TotalIva, DireccionCliente){
        super(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_V, Correo_V)
        this._Nombre=Nombre
        this._FechaHora=FechaHora
        this._FormaPago=FormaPago
        this._Iva=Iva
        this._Titulo=Titulo
        this._TotalIva=TotalIva
        this._DireccionCliente=DireccionCliente
    }
}

class Repartidor extends Factura{
    constructor(Nombre, FechaHora, FormaPago, Iva, Titulo,TotalIva, DireccionCliente, NombreR, TelefonoR){
        super (Nombre, FechaHora, FormaPago, Iva, Titulo,TotalIva, DireccionCliente)
        this._NombreR=NombreR
        this._TelefonoR=TelefonoR
    }
}

class Repartidor extends Cliente{
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_C, Correo_C, Direccion, NombreR, TelefonoR){
        super (Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_C, Correo_C, Direccion)
        this._NombreR=NombreR
        this._TelefonoR=TelefonoR
    }
}

class Repartidor extends Administrador{
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefonos, Correos, DireccionEmpresa,NombreR, TelefonoR){
        super (Nombre, TipoDocumento, NroDocumento, Contraseña, Telefonos, Correos, DireccionEmpresa)
        this._NombreR=NombreR
        this._TelefonoR=TelefonoR
        }
}
