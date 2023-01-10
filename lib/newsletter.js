module.exports = function (restClient) {
  let module = {};
  const urlPrefix = 'newsletter/';
  let url = urlPrefix;
  function getResponse(data){
    if(data.code === 200){
      return data.result;
    }
    return false;
  }
  module.subscribe = (emailAddress, userAgent) => {
    url += `subscribe`;
    return restClient.post(url, {emailAddress: emailAddress}, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  module.unsubscribe = (customerToken, userAgent) => {
    url += `unsubscribe?token=${customerToken}`;
    return restClient.post(url, undefined, userAgent).then((data)=> {
      return getResponse(data);
    });
  };
  return module;
};
