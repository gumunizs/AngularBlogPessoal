import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

Usuario: Usuario = new Usuario
confirmarsenha: string
tipousuario:string

  constructor(private auth: AuthService,
    private router: Router) { }
  
  ngOnInit() {
    window.scroll(0,0)

  }

confirmsenha(event: any) {
  this.confirmarsenha = event.target.value

}

tipoUser(event: any){
this.tipousuario = event.target.value
}
cadastrar(){
  this.Usuario.tipo = this.tipousuario
  if(this.Usuario.senha != this.confirmarsenha){
    alert('A senhas estão incorretas')
  } else{
    this.auth.cadastrar(this.Usuario).subscribe((resp: Usuario) => {
      this.Usuario = resp
      console.log(this.Usuario)
      this.router.navigate(['/entrar'])
      alert('Usuário cadastrado com sucesso')
    })
  }
}
}
