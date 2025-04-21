import { cookies } from "next/headers";

export async function fetchInstance(
  endpoint: string,
  options: RequestInit = {}
) {
  const token = (await cookies()).get("authToken"); // Get token from cookies

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>), // Ensure headers are correctly typed
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(
    `${"http://kopru.uz:8090/api/collections/api/collections"}${endpoint}`,
    {
      ...options,
      headers,
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json();
}
