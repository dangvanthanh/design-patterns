function executeWithFetch(request) {}

function executeWithAxios(request) {}

function ClientBuilder() {
  return {
    forBaseUrl: function(baseUrl) {
      this.baseUrl = baseUrl;
      return this;
    },

    withHeaders: function(headers) {
      this.headers = headers;
      return this;
    },

    usingFetch: function() {
      this.executor = executeWithFetch;
      return this;
    },

    usingAxios: function() {
      this.executeWithFetch = executeWithAxios;
    },

    build: function() {
      return new Client(this.baseUrl, this.headers, this.executor);
    },
  };
}

function Client(baseUrl, headers, executor) {
  this.baseUrl = baseUrl;
  this.headers = headers;
  this.executor = executor;

  this.post = function(endpoint, data) {
    const url = `${this.baseUrl}${endpont}`;

    return this.executor({
      url,
      data,
      method: 'POST',
      headers: this.headers,
    });
  };

  this.get = function(endpoint, params) {
    const url = `${this.baseUrl}${endpont}`;

    return this.executor({
      url,
      params,
      method: 'GET',
      headers: this.headers,
    });
  };
}

// Apply builder pattern
const client = ClientBuilder()
  .forBaseUrl('http://example.com/api')
  .withHeaders({
    Authorization: 'Bearer abcxzy',
  })
  .usingAxios()
  .build();

client.post('updateData', {data: 'new data'});
