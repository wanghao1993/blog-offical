import { message } from "antd";
import { HttpRequestHeader } from "antd/es/upload/interface";

// lib/api.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Response<T> {
  code: number;
  message: string;
  data: T;
}
interface FetcherOptions extends RequestInit {
  body?: any;
}

async function fetcher<T>(url: string, options: FetcherOptions): Promise<T> {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        ...options.headers,
      },
      body: options.body,
    });

    const json = await res.json();
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");

      throw error;
    }
    if (json.code === 200) {
      return json.data;
    } else {
      message.error(json.message);
      return Promise.reject(json.message);
    }
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function get<T>(
  url: string,
  data?: any,
  revalidate = 60
): Promise<T> {
  if (data) {
    url += `?${new URLSearchParams(data).toString()}`;
  }
  return fetcher<T>(url, {
    method: "GET",
    next: { revalidate },
  });
}

export async function post<T>(
  url: string,
  data: any,
  revalidate = 60,
  headers?: HttpRequestHeader
): Promise<T> {
  const isFile = Object.prototype.toString.call(data) === "[object FormData]";

  return fetcher<T>(url, {
    method: "POST",
    body: isFile ? data : JSON.stringify(data),
    headers,
    next: { revalidate },
    credentials: "same-origin",
  });
}

export async function put<T>(url: string, data: any): Promise<T> {
  return fetcher<T>(url, {
    method: "PUT",
    body: data,
  });
}

export async function del<T>(url: string, data?: any): Promise<T> {
  if (data) {
    url += `?${new URLSearchParams(data).toString()}`;
  }
  return fetcher<T>(url, {
    method: "DELETE",
  });
}
