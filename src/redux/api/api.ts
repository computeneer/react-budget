import { IDataResponse, IErrorResponse } from "./../../models/IResponse";
import httpStatus from "http-status";

const BASE_URL = "http://localhost:5001/api";

export const CATEGORIES = `${BASE_URL}/categories`;

const makeRequest = <T>(
  url: string,
  method: string = "GET",
  data: any = undefined,
  token?: string
): Promise<IDataResponse<T> | IErrorResponse> => {
  return new Promise<IDataResponse<T>>(async (resolve, reject) => {
    const options: RequestInit = {
      method,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token ?? sessionStorage.getItem("token")}`,
      },
    };
    if (data && (method === "POST" || method === "PATCH")) {
      //Object.assign(options, { body: data });
      options.body = JSON.stringify(data);
    }
    const response = await fetch(`${BASE_URL}/${url}`, options);
    if (response.status === httpStatus.OK) {
      const result = (await response.json()) as IDataResponse<T>;
      resolve(result);
    } else {
      const result = (await response.json()) as IErrorResponse;
      console.log(result);
      reject(result);
    }
  });
};

export const getRequest = <T>(url: string, token?: string) =>
  makeRequest<T>(url, "GET", undefined, token);

export const postRequest = <TReturn, TData>(
  url: string,
  data: TData,
  token?: string
) => makeRequest<TReturn>(url, "POST", data, token);

export const patchRequest = <TReturn, TData>(
  url: string,
  data: TData,
  token?: string
) => makeRequest<TReturn>(url, "PATCH", data, token);
