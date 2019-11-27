/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Customer } from '../models/customer';

/**
 * Customer Resource
 */
@Injectable({
  providedIn: 'root',
})
class CustomerResourceService extends __BaseService {
  static readonly getAllCustomersUsingGETPath = '/api/customers';
  static readonly createCustomerUsingPOSTPath = '/api/customers';
  static readonly updateCustomerUsingPUTPath = '/api/customers';
  static readonly getCustomerUsingGETPath = '/api/customers/{id}';
  static readonly deleteCustomerUsingDELETEPath = '/api/customers/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllCustomersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Customer>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/customers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Customer>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllCustomersUsingGET(): __Observable<Array<Customer>> {
    return this.getAllCustomersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Customer>)
    );
  }

  /**
   * @param customer customer
   * @return OK
   */
  createCustomerUsingPOSTResponse(customer: Customer): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = customer;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/customers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param customer customer
   * @return OK
   */
  createCustomerUsingPOST(customer: Customer): __Observable<Customer> {
    return this.createCustomerUsingPOSTResponse(customer).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param customer customer
   * @return OK
   */
  updateCustomerUsingPUTResponse(customer: Customer): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = customer;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/customers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param customer customer
   * @return OK
   */
  updateCustomerUsingPUT(customer: Customer): __Observable<Customer> {
    return this.updateCustomerUsingPUTResponse(customer).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getCustomerUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/customers/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getCustomerUsingGET(id: number): __Observable<Customer> {
    return this.getCustomerUsingGETResponse(id).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param id id
   */
  deleteCustomerUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/customers/${id}`,
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
  deleteCustomerUsingDELETE(id: number): __Observable<null> {
    return this.deleteCustomerUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CustomerResourceService {
}

export { CustomerResourceService }
