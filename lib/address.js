module.exports = function (restClient) {
  let module = {};
  let url = 'address/';
  function getResponse(data){
    if (data.code === 200){
      return data.result;
    }

    return false;
  }
  module.list = function (userAgent, customerToken) {
    url += `list?token=${customerToken}`
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  },
  module.update = function (userAgent, customerToken, addressData) {
    url += `update?token=${customerToken}`
    return restClient.post(url, {address: addressData}, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.get = function (userAgent, customerToken, addressId) {
    url += `get?token=${customerToken}&addressId=${addressId}`
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.delete = function (userAgent, customerToken, addressData) {
    url += `delete?token=${customerToken}`
    return restClient.post(url, {address: addressData}, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  return module;
}
