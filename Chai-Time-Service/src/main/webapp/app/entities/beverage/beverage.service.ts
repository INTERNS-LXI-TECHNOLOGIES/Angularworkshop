import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IBeverage } from 'app/shared/model/beverage.model';

type EntityResponseType = HttpResponse<IBeverage>;
type EntityArrayResponseType = HttpResponse<IBeverage[]>;

@Injectable({ providedIn: 'root' })
export class BeverageService {
    public resourceUrl = SERVER_API_URL + 'api/beverages';

    constructor(protected http: HttpClient) {}

    create(beverage: IBeverage): Observable<EntityResponseType> {
        return this.http.post<IBeverage>(this.resourceUrl, beverage, { observe: 'response' });
    }

    update(beverage: IBeverage): Observable<EntityResponseType> {
        return this.http.put<IBeverage>(this.resourceUrl, beverage, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IBeverage>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IBeverage[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
