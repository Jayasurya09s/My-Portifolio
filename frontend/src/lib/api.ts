type ApiRequestOptions = {
  signal?: AbortSignal;
};

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

const toApiUrl = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return API_BASE_URL ? `${API_BASE_URL}${normalizedPath}` : normalizedPath;
};

const postJson = async <TResponse>(
  path: string,
  payload: unknown,
  options?: ApiRequestOptions,
): Promise<TResponse> => {
  const response = await fetch(toApiUrl(path), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    signal: options?.signal,
  });

  const contentType = response.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');
  const body = isJson ? await response.json() : null;

  if (!response.ok) {
    const message =
      (body && typeof body === 'object' && 'message' in body && typeof body.message === 'string'
        ? body.message
        : null) ||
      'Request failed. Please try again.';
    throw new Error(message);
  }

  return (body || {}) as TResponse;
};

export type ContactRequestPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactResponse = {
  ok?: boolean;
  message?: string;
};

export const sendContactMessage = (
  payload: ContactRequestPayload,
  options?: ApiRequestOptions,
) => postJson<ContactResponse>('/api/contact', payload, options);

export type ResumeChatRequestPayload = {
  question: string;
  history?: Array<{ role: 'user' | 'assistant'; content: string }>;
};

export type ResumeChatResponse = {
  answer: string;
  sources?: string[];
};

export const askResumeAssistant = (
  payload: ResumeChatRequestPayload,
  options?: ApiRequestOptions,
) => postJson<ResumeChatResponse>('/api/resume-chat', payload, options);
