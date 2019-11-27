/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Beverage } from '../models/beverage';

/**
 * Beverage Resource
 */
@Injectable({
  providedIn: 'root',
})
class BeverageResourceService extends __BaseService {
  static readonly getAllBeveragesUsingGETPath = '/api/beverages';
  static readonly createBeverageUsingPOSTPath = '/api/beverages';
  static readonly updateBeverageUsingPUTPath = '/api/beverages';
  static readonly getBeverageUsingGETPath = '/api/beverages/{id}';
  static readonly deleteBeverageUsingDELETEPath = '/api/beverages/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllBeveragesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Beverage>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/beverages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Beverage>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllBeveragesUsingGET(): __Observable<Array<Beverage>> {
    return this.getAllBeveragesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Beverage>)
    );
  }

  /**
   * @param beverage beverage
   * @return OK
   */
  createBeverageUsingPOSTResponse(beverage: Beverage): __Observable<__StrictHttpResponse<Beverage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = beverage;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/beverages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Beverage>;
      })
    );
  }
  /**
   * @param beverage beverage
   * @return OK
   */
  createBeverageUsingPOST(beverage: Beverage): __Observable<Beverage> {
    return this.createBeverageUsingPOSTResponse(beverage).pipe(
      __map(_r => _r.body as Beverage)
    );
  }

  /**
   * @param beverage beverage
   * @return OK
   */
  updateBeverageUsingPUTResponse(beverage: Beverage): __Observable<__StrictHttpResponse<Beverage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = beverage;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/beverages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Beverage>;
      })
    );
  }
  /**
   * @param beverage beverage
   * @return OK
   */
  updateBeverageUsingPUT(beverage: Beverage): __Observable<Beverage> {
    return this.updateBeverageUsingPUTResponse(beverage).pipe(
      __map(_r => _r.body as Beverage)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getBeverageUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Beverage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/beverages/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Beverage>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getBeverageUsingGET(id: number): __Observable<Beverage> {
    return this.getBeverageUsingGETResponse(id).pipe(
      __map(_r => _r.body as Beverage)
    );
  }

  /**
   * @param id id
   */
  deleteBeverageUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/beverages/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteBeverageUsingDELETE(id: number): __Observable<null> {
    return this.deleteBeverageUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module BeverageResourceService {
}

export { BeverageResourceService }
