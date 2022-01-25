import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
 articles : any;
 commentaires :any;

  
  ngOnInit() {this.funct()
    
    }
    
  async funct(){
    const rep = await fetch("http://localhost:8000/article")
    if (rep.ok){
      rep.json().then(data =>{
        this.articles = data;
        console.log(this.articles)
      })
    }  
  }
   async delete(id)
  {
  const rep = await fetch(`http://127.0.0.1:8000/article/delete/${parseInt(id)}`,
  {
    method:"DELETE"
  }
  )
    if (rep.ok){
      rep.json().then(data =>{
        this.funct()
     
      })
    }  
  } 
  async modify(id){
    var name = (<HTMLInputElement>document.getElementById("name")).value
    var description=(<HTMLInputElement>document.getElementById("description")).value
    var catname = (<HTMLInputElement>document.getElementById("catname")).value
    var price = (<HTMLInputElement>document.getElementById("price")).value
    var body = `{"name":"${name}","catname":"${catname}", "description":"${description}", "price":"${price}"}`
     
    const rep = await fetch(`http://127.0.0.1:8000/article/modify/${parseInt(id)}`,{
      method:"put",
      body : body

    })
    if (rep.ok){//traitement mtaa el reponse
      rep.json().then(data =>{ // data bech ykouna fiha objet json fih el reponse
        console.log(data)
        window.location.reload() 
      })
    }
  }
   
   async deletecom(id)
  {
  const rep = await fetch(`http://localhost:8000/del_commentaire?id=${id}`,
  {
    method:"DELETE"
  }
  )
    if (rep.ok){
      rep.json().then(data =>{
       window.location.reload() 
      })
    }  
  } 
}
