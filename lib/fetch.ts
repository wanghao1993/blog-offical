// lib/api.ts
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

interface FetcherOptions extends RequestInit {
  body?: any;
}

async function fetcher<T>(url: string, options: FetcherOptions): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    throw error;
  }

  return res.json();
}

export async function get<T>(url: string): Promise<T> {
  return fetcher<T>(url, {
    method: "GET",
  });
}

export async function post<T>(url: string, data: any): Promise<T> {
  return fetcher<T>(url, {
    method: "POST",
    body: data,
  });
}

export async function put<T>(url: string, data: any): Promise<T> {
  return fetcher<T>(url, {
    method: "PUT",
    body: data,
  });
}

export async function del<T>(url: string): Promise<T> {
  return fetcher<T>(url, {
    method: "DELETE",
  });
}
