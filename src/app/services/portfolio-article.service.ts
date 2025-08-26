import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PortfolioArticleService {
  constructor(private http: HttpClient) { }

  loadArticle(lang: string, id: string): Observable<(string | { gallery: number } | { video: string })[]> {
    const path = `assets/portfolio/${id}.${lang}.md`;

    return this.http.get(path, { responseType: "text" }).pipe(
      map(content => {
        const parts: (string | { gallery: number } | { video: string })[] = [];

        const regex = /\{\{(gallery:(\d+)|video:([^}]+))}}/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(content)) !== null) {
          if (match.index > lastIndex) {
            parts.push(content.substring(lastIndex, match.index));
          }
          if (match[2]) {
            parts.push({ gallery: parseInt(match[2], 10) });
          } else if (match[3]) {
            parts.push({ video: match[3] });
          }
          lastIndex = regex.lastIndex;
        }

        if (lastIndex < content.length) {
          parts.push(content.substring(lastIndex))
        }

        return parts;
      }),
      catchError((error) => {
        if (error.status === 404) {
          return of(["### Erreur 404", "Le fichier **`"+path+"`** n'a pas pu être trouvé."])
        }
        return of([`
        ### Erreur lors du chargement de l'article

        **Code erreur**: ${error.status}

        ${error.statusText}
        `])
      })
    )
  }
}
