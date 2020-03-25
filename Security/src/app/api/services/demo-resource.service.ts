/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DemoUser } from '../models/demo-user';
import { OptionalDemoUser } from '../models/optional-demo-user';

/**
 * Demo Resource
 */
@Injectable({
  providedIn: 'root',
})
class DemoResourceService extends __BaseService {
  static readonly createUsingPOSTPath = '/api/create';
  static readonly deleteUsingDELETEPath = '/api/delete/{id}';
  static readonly getUserUsingGETPath = '/api/findAllUsers';
  static readonly findByUsernameUsingGETPath = '/api/findUser';
  static readonly updateUsingPUTPath = '/api/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param user user
   * @return OK
   */
  createUsingPOSTResponse(user: DemoUser): __Observable<__StrictHttpResponse<DemoUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DemoUser>;
      })
    );
  }
  /**
   * @param user user
   * @return OK
   */
  createUsingPOST(user: DemoUser): __Observable<DemoUser> {
    return this.createUsingPOSTResponse(user).pipe(
      __map(_r => _r.body as DemoUser)
    );
  }

  /**
   * @param id id
   */
  deleteUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/delete/${id}`,
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
  deleteUsingDELETE(id: number): __Observable<null> {
    return this.deleteUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return OK
   */
  getUserUsingGETResponse(): __Observable<__StrictHttpResponse<Array<DemoUser>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findAllUsers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DemoUser>>;
      })
    );
  }
  /**
   * @return OK
   */
  getUserUsingGET(): __Observable<Array<DemoUser>> {
    return this.getUserUsingGETResponse().pipe(
      __map(_r => _r.body as Array<DemoUser>)
    );
  }

  /**
   * @param user user
   * @return OK
   */
  findByUsernameUsingGETResponse(user?: string): __Observable<__StrictHttpResponse<OptionalDemoUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (user != null) __params = __params.set('user', user.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/findUser/`+user,
      __body,
      {
        headers: __headers,

        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OptionalDemoUser>;
      })
    );
  }
  /**
   * @param user user
   * @return OK
   */
  findByUsernameUsingGET(user?: string): __Observable<OptionalDemoUser> {
    return this.findByUsernameUsingGETResponse(user).pipe(
      __map(_r => _r.body as OptionalDemoUser)
    );
  }

  /**
   * @param user user
   * @return OK
   */
  updateUsingPUTResponse(user: DemoUser): __Observable<__StrictHttpResponse<DemoUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DemoUser>;
      })
    );
  }
  /**
   * @param user user
   * @return OK
   */
  updateUsingPUT(user: DemoUser): __Observable<DemoUser> {
    return this.updateUsingPUTResponse(user).pipe(
      __map(_r => _r.body as DemoUser)
    );
  }
}

module DemoResourceService {
}

export { DemoResourceService }
