module.exports = function (restClient) {
  let module = {};
  let url = 'user/';
  function getResponse(data){
    if (data.code === 200){
      return data.result;
    }

    return false;
  }
  module.login = (userData, userAgent) => {
    url += 'login';
    return restClient.post(url, userData, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.resetPassword = function (emailData, userAgent) {
    url += `resetPassword`;
    return restClient.post(url, {email: emailData.email}, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.changePassword = function (passwordData, userAgent) {
    url += `changePassword?token=${passwordData.token}`;
    return restClient.post(url, passwordData.body, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.create = function (userData, userAgent) {
    url += `create`;
    return restClient.post(url, userData, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.creditValue = function (customerToken, userAgent) {
    const getCreditUrl = `user_credit/get?token=${customerToken}`

    return restClient.get(getCreditUrl, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.refillCredit = function (customerToken, creditCode, userAgent) {
    const getCreditUrl = `user_credit/refill?token=${customerToken}`

    return restClient.post(getCreditUrl, {credit_code: creditCode}, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.orderHistory = function (customerToken, page, pageSize, userAgent) {
    url += `orderHistory?token=${customerToken}`;
    return restClient.get(url, {page: page, pageSize: pageSize}, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.update = function (userData, userAgent) {
    url += `me?token=${userData.token}`
    return restClient.post(url, userData.body, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  module.me = function (customerToken, userAgent) {
    const url = `user/me?token=${customerToken}`
    return restClient.get(url, userAgent).then((data)=> {
      return getResponse(data);
    });
  }
  return module;
}
