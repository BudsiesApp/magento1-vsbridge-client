module.exports = function (restClient) {
  let module = {};
  const urlPrefix = 'stock/';
  let url = urlPrefix;
  function getResponse(data){
    if(data.code === 200){
      return data.result;
    }
    return false;
  }
  module.check = (userAgent, sku) => {
    url += `check?sku=${sku}`;
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  return module;
};
