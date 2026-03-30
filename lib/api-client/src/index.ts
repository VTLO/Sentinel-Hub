import { HealthResponseSchema, type HealthResponse } from "@sentinel-hub/api-zod";

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getHealth(): Promise<HealthResponse> {
    const response = await fetch(`${this.baseUrl}/health`);
    const data = await response.json();
    return HealthResponseSchema.parse(data);
  }
}
