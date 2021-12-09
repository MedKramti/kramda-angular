import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export  class LoadJSService {
  static url = "./assets/script.js";
  constructor() { }

  static loadScript(){
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    document.getElementsByTagName("head")[0].appendChild(node);
  }

}
