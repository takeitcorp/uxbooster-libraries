import { describe, it, expect, jest } from '@jest/globals';
import { takeFetch, TakeFetchOptions, TakeFetchArgs, TakeResponse } from './takeFetch';

describe('takeFetch', () => {
  it('should fetch data with default options', async () => {
    // Arrange
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    // Act
    const response = await takeFetch()(url);
    const data = await response.json();

    // Assert
    expect(data).toHaveProperty('userId');
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('body');
  });

  it('should fetch data with custom options', async () => {
    // Arrange
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const options: TakeFetchOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Act
    const response = await takeFetch(options)(url);
    const data = await response.json();

    // Assert
    expect(data).toHaveLength(100); // Assuming there are 100 posts
  });

  it('should handle request interceptor', async () => {
    // Arrange
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const requestInterceptor = jest.fn(async (requestArgs: TakeFetchArgs) => {
      return requestArgs;
    });
    const options: TakeFetchOptions = {
      interceptors: {
        request: requestInterceptor,
      },
    };

    // Act
    await takeFetch(options)(url);

    // Assert
    expect(requestInterceptor).toHaveBeenCalledTimes(1);
  });

  it('should handle response interceptor', async () => {
    // Arrange
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const responseInterceptor = jest.fn(
      async (response: TakeResponse, requestArgs: TakeFetchArgs) => {
        return response;
      },
    );
    const options: TakeFetchOptions = {
      interceptors: {
        response: responseInterceptor,
      },
    };

    // Act
    await takeFetch(options)(url);

    // Assert
    expect(responseInterceptor).toHaveBeenCalledTimes(1);
  });
});
