import axios, { type AxiosRequestConfig } from 'axios'

const APP_NAME = process.env.APP_NAME ?? ''

class Request {
  instance = axios.create({
    withCredentials: false,
    headers: {
      'Accept-Language': 'ru'
    }
  })

  getUrl = (url: string): string => `https://${process.env.HOST}/api/${APP_NAME}/${url}`

  getError = (error: unknown): Record<string, unknown> => ({
    data: {
      message: {
        type: 'error',
        name: 'Api error',
        desc: JSON.stringify(error)
      }
    }
  })

  setHeaders = (token: string, language: string | null = 'ru'): void => {
    this.instance.interceptors.request.use((config: any) => {
      config.headers = {
        'Accept-Language': language,
        Authorization: `Bearer ${token}`
      }
      return config
    })
  }

  responseBody = (response:  Record<string, unknown>):  Record<string, unknown> => {
    const resp = response.data

    if (resp.user && resp.token) {
      this.setHeaders(resp.token, resp.user.language)
    }

    return resp
  }

  get = (url: string, config?: AxiosRequestConfig): Promise<any> =>
    this.instance.get(this.getUrl(url), config).then(this.responseBody)

  post = (url: string, body: any, config?: AxiosRequestConfig): Promise<any> =>
    this.instance
      .post(this.getUrl(url), body, config)
      .then(this.responseBody)
      .catch(e => this.responseBody(this.getError(e)))

  patch = (url: string, body: any, config?: AxiosRequestConfig): Promise<any> =>
    this.instance
      .patch(this.getUrl(url), body, config)
      .then(this.responseBody)
      .catch(e => this.responseBody(this.getError(e)))

  put = (url: string, body: any, config?: AxiosRequestConfig): Promise<any> =>
    this.instance
      .put(this.getUrl(url), body, config)
      .then(this.responseBody)
      .catch(e => this.responseBody(this.getError(e)))

  delete = (url: string, config?: AxiosRequestConfig): Promise<any> =>
    this.instance
      .delete(this.getUrl(url), config)
      .then(this.responseBody)
      .catch(e => this.responseBody(this.getError(e)))
}

export const request = new Request()
