/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Seller } from '../models/seller';

/**
 * Seller Resource
 */
@Injectable({
  providedIn: 'root',
})
class SellerResourceService extends __BaseService {
  static readonly getAllSellersUsingGETPath = '/api/sellers';
  static readonly createSellerUsingPOSTPath = '/api/sellers';
  static readonly updateSellerUsingPUTPath = '/api/sellers';
  static readonly getSellerUsingGETPath = '/api/sellers/{id}';
  static readonly deleteSellerUsingDELETEPath = '/api/sellers/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllSellersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Seller>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/sellers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Seller>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllSellersUsingGET(): __Observable<Array<Seller>> {
    return this.getAllSellersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Seller>)
    );
  }

  /**
   * @param seller seller
   * @return OK
   */
  createSellerUsingPOSTResponse(seller: Seller): __Observable<__StrictHttpResponse<Seller>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = seller;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/sellers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Seller>;
      })
    );
  }
  /**
   * @param seller seller
   * @return OK
   */
  createSellerUsingPOST(seller: Seller): __Observable<Seller> {
    return this.createSellerUsingPOSTResponse(seller).pipe(
      __map(_r => _r.body as Seller)
    );
  }

  /**
   * @param seller seller
   * @return OK
   */
  updateSellerUsingPUTResponse(seller: Seller): __Observable<__StrictHttpResponse<Seller>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = seller;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/sellers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Seller>;
      })
    );
  }
  /**
   * @param seller seller
   * @return OK
   */
  updateSellerUsingPUT(seller: Seller): __Observable<Seller> {
    return this.updateSellerUsingPUTResponse(seller).pipe(
      __map(_r => _r.body as Seller)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getSellerUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Seller>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/sellers/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Seller>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getSellerUsingGET(id: number): __Observable<Seller> {
    return this.getSellerUsingGETResponse(id).pipe(
      __map(_r => _r.body as Seller)
    );
  }

  /**
   * @param id id
   */
  deleteSellerUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/sellers/${id}`,
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
  deleteSellerUsingDELETE(id: number): __Observable<null> {
    return this.deleteSellerUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module SellerResourceService {
}

export { SellerResourceService }
