/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Order } from '../models/order';

/**
 * Order Resource
 */
@Injectable({
  providedIn: 'root',
})
class OrderResourceService extends __BaseService {
  static readonly getAllOrdersUsingGETPath = '/api/orders';
  static readonly createOrderUsingPOSTPath = '/api/orders';
  static readonly updateOrderUsingPUTPath = '/api/orders';
  static readonly getOrderUsingGETPath = '/api/orders/{id}';
  static readonly deleteOrderUsingDELETEPath = '/api/orders/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllOrdersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Order>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Order>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllOrdersUsingGET(): __Observable<Array<Order>> {
    return this.getAllOrdersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Order>)
    );
  }

  /**
   * @param order order
   * @return OK
   */
  createOrderUsingPOSTResponse(order: Order): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = order;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * @param order order
   * @return OK
   */
  createOrderUsingPOST(order: Order): __Observable<Order> {
    return this.createOrderUsingPOSTResponse(order).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * @param order order
   * @return OK
   */
  updateOrderUsingPUTResponse(order: Order): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = order;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * @param order order
   * @return OK
   */
  updateOrderUsingPUT(order: Order): __Observable<Order> {
    return this.updateOrderUsingPUTResponse(order).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getOrderUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/orders/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getOrderUsingGET(id: number): __Observable<Order> {
    return this.getOrderUsingGETResponse(id).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * @param id id
   */
  deleteOrderUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/orders/${id}`,
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
  deleteOrderUsingDELETE(id: number): __Observable<null> {
    return this.deleteOrderUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module OrderResourceService {
}

export { OrderResourceService }
