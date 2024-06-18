import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import * as humps from "humps";
import { environment } from "../environments/environment";
import { getStorageItem } from "../utils";

/**
 * Api logic base on Axios
 */
class ApiConfig {
  protected interceptors: Interceptors[];
  protected instance: AxiosInstance;

  public constructor() {
    this.interceptors = [];
    this.instance = axios.create({
      timeout: environment.apiTimeOut,
      baseURL: environment.apiBaseUrl,
    });
  }

  /**
   * Common API request logic
   *
   * @param url
   * @param method
   * @param params
   * @param data
   * @param configs
   * @returns response
   */
  protected async request(
    url: string,
    method: string,
    params: any = {},
    data: any = {},
    configs: AxiosRequestConfig = {},
  ) {
    const requestConfigs: AxiosRequestConfig = {
      ...configs,
      url,
      method,
      params,
      data,
    };
    console.log(`>>> Axios request: [${method.toUpperCase()}] ${url}`);
    this.clear();
    this.default();
    this.interceptors.forEach((interceptor) => this[interceptor]());
    this.interceptors = [];
    const response = await this.instance.request(requestConfigs);
    console.log(`>>> Axios response: [${method.toUpperCase()}] ${url}`, response);
    return response;
  }

  /**
   * Request with GET method
   *
   * @param url
   * @param params
   * @param configs
   * @returns response
   */
  public async get<T, D = any>(
    url: string,
    params: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "get", params, {}, configs);
  }

  /**
   * Request with POST method
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async post<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "post", {}, data, configs);
  }

  /**
   * Request with PUT method
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async put<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "put", {}, data, configs);
  }

  /**
   * Request with PATCH method
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async patch<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "patch", {}, data, configs);
  }

  /**
   * Request with DELETE method
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async delete<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "delete", {}, data, configs);
  }

  /**
   * Set Interceptors
   *
   * @param interceptors
   * @returns
   */
  public setInterceptors(interceptors: Interceptors[]) {
    this.interceptors = interceptors;
    return this;
  }

  /**
   * Clear interceptors
   *
   * @returns this
   */
  public clear() {
    this.instance.interceptors.request.clear();
    this.instance.interceptors.response.clear();
    return this;
  }

  /**
   * Default interceptors
   *
   * @returns this
   */
  public default() {
    this.instance.interceptors.request.use(
      (configs) => {
        console.log(">>> Axios interceptors: default request interceptor executed");
        return configs;
      },
      (error) => Promise.reject(error),
    );
    this.instance.interceptors.response.use(
      (response) => {
        console.log(">>> Axios interceptors: default response interceptor executed");
        return response;
      },
      (error) => Promise.reject(error),
    );
    return this;
  }

  /**
   * toCamel interceptors
   *
   * @returns this
   */
  public toCamel() {
    this.instance.interceptors.response.use(
      (response) => {
        console.log(">>> Axios interceptors: toCamel response interceptor executed");
        if (typeof response.data === "object") response.data = humps.camelizeKeys(response.data);
        return response;
      },
      (error) => Promise.reject(error),
    );
    return this;
  }

  /**
   * Authenticate interceptors
   *
   * @returns this
   */
  public auth() {
    this.instance.interceptors.request.use(
      (configs) => {
        const token = getStorageItem<string>(environment.storageKeys.accessToken);
        if (token) {
          configs.headers.Authorization = "Bearer " + token;
          console.log(">>> Axios interceptors: auth request interceptor executed");
        } else {
          console.log(">>> Axios interceptors: auth request interceptor can not found accessToken");
        }
        return configs;
      },
      (error) => Promise.reject(error),
    );
    return this;
  }
}

const Api = new ApiConfig();

type Interceptors = "toCamel" | "auth";

export { Api };
