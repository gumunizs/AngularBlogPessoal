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

usuarioo: Usuario = new Usuario
confirmarsenha: string
tipousuario:string
  constructor(private authService: AuthService,
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
cadastrarr(){
  this.usuarioo.tipo = this.tipousuario
  if(this.usuarioo.senha != this.confirmarsenha){
    alert('A senhas estão incorretas')
  } else{
    this.authService.cadastrar(this.usuarioo).subscribe((resp: Usuario) => {
      this.usuarioo = resp
      this.router.navigate(['/entrar'])
      alert('Usuário cadastrado com sucesso')
    })
  }
}
}
