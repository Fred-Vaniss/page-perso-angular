import {Directive, HostListener} from '@angular/core';
import {ModalService} from "../services/modal.service";

@Directive({
    selector: '[appMarkdownModalLink]',
    standalone: false
})
export class MarkdownModalLinkDirective {

  constructor(
    private modal : ModalService
  ) { }

  @HostListener("click", ["$event"])
  public onClick(e: MouseEvent){
    const srcElm = e.target;
    if (srcElm instanceof HTMLAnchorElement){
      const href = srcElm.href;

      if(href.startsWith("modal:"))
      {
        const id = href.split(":")[1];
        this.modal.openArticle(id);
        e.preventDefault()
        e.stopPropagation()
      }
    }
  }
}
