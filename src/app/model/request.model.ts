import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiHost = 'https://dixitserver.herokuapp.com';

/**
 * A helper class to provide a comfortable interface for accessing the API
 * Promise driven.
 */
export class Request<ResultType = any> {
  private url: string;
  private method: string;
  private data: string;

  private http: HttpClient;
  private headers: HttpHeaders;
  constructor(http: HttpClient) {
    this.http = http;
  }

  public get(url: string): Promise<ResultType> {
    this.url = url;
    this.method = 'get';
    return new Promise((resolve, reject) => {
      this.http.get<ResultType>(apiHost + url, { headers: this.headers })
      .toPromise()
      .then(res => {this.success(res, resolve, reject); })
      .catch(err => { this.fail(err, reject); });
    });
  }

  public post(url: string, data: any = {}): Promise<ResultType> {
    this.url = url;
    this.method = 'post';
    this.data = data;
    return new Promise((resolve, reject) => {
      this.http.post<ResultType>(apiHost + url, data, { headers: this.headers })
      .toPromise()
      .then(res => {this.success(res, resolve, reject); })
      .catch(err => { this.fail(err, reject); });
    });
  }

  public patch(url: string, data: any = {}): Promise<ResultType> {
    this.url = url;
    this.method = 'patch';
    this.data = data;
    return new Promise((resolve, reject) => {
      this.http.patch<ResultType>(apiHost + url, data, { headers: this.headers })
      .toPromise()
      .then(res => {this.success(res, resolve, reject); })
      .catch(err => { this.fail(err, reject); });
    });
  }

  public put(url: string, data: any = {}): Promise<ResultType> {
    this.url = url;
    this.method = 'put';
    this.data = data;
    return new Promise((resolve, reject) => {
      this.http.put<ResultType>(apiHost + url, data, { headers: this.headers })
      .toPromise()
      .then(res => {this.success(res, resolve, reject); })
      .catch(err => { this.fail(err, reject); });
    });
  }

  public delete(url: string): Promise<ResultType> {
    this.url = url;
    this.method = 'delete';
    return new Promise((resolve, reject) => {
      this.http.delete<ResultType>(apiHost + url, { headers: this.headers })
      .toPromise()
      .then(res => {this.success(res, resolve, reject); })
      .catch(err => { this.fail(err, reject); });
    });
  }

  private success(result: ResultType, resolve, reject) {
    resolve(result);
  }

  private fail(result: ErrorRespone, reject) {
    console.log(result);
    console.log(this);

    reject(result);
  }
}
