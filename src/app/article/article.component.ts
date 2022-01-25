import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }
  url:string;
  menu:any;
       ngOnInit(): void {
  }
  async catname(){
    var name = (<HTMLInputElement>document.getElementById("name")).value
     
    var description=(<HTMLInputElement>document.getElementById("description")).value
    var catname = (<HTMLInputElement>document.getElementById("catname")).value
    var price = (<HTMLInputElement>document.getElementById("price")).value
    var body = `{"name":"${name}","catname":"${catname}", "description":"${description}", "price":"${price}","image":"${this.url}"}`
     
    const rep = await fetch("http://127.0.0.1:8000/addarticle",{
      method:"POST",
      body : body

    })
    if (rep.ok){//traitement mtaa el reponse
      rep.json().then((data)=>{ // data bech ykouna fiha objet json fih el reponse
        console.log(data)
        window.location.reload()
      })
    }
  }
  onSelectFile(event:any){
    console.log("here");//hedhi juste bech naarfou eli ahna fi west el fonction
    if (event.target.files && event.target.files[0]){//nthabtou ken aana al akal file wala lee
      var reader = new FileReader()// sna3na instance  men FileReader()  , FileReader howa class tajem takra bihom data mtaa ay file w thawlou l format URI
      reader.readAsDataURL(event.target.files[0])// hawlna el image mteena l format URI
      reader.onload = async (data) =>{//wakteli el reader ykamel bech yraj3lna el resultat fi data
        this.url = data.target.result as string;//hnneee juste hawlna el data l string w hatineha fi variable gloable url
      }
    }
  }
  
}
