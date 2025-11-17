
export function getNetworkId(network) {
  let networkId;
  if (network === 'mtn') {
    networkId = 1;
  } else if (network === 'glo') {
    networkId = 2;
  } else if (network === 'airtel') {
    networkId = 3;
  } else {
    throw new Error('network is unknown')
  }
  
  return networkId;
  
}

// Data plans for different networks
 const dataPlans = {
  mtn:[
  {
    "networkId": 1,
    "network": "mtn",
    "data": "500mb",
    "price": 480,
    "days": 7,
    "id": 104,
    "type": "sme"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "500mb",
    "price": 480,
    "days": 7,
    "id": 89,
    "type": "gifting"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "1GB",
    "price": 600,
    "days": 7,
    "id": 103,
    "type": "sme"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "1GB",
    "price": 900,
    "days": 7,
    "id": 56,
    "type": "gifting"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "1.2GB",
    "price": 850,
    "days": 7,
    "id": 57,
    "type": "gifting"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "1GB",
    "price": 650,
    "days": 30,
    "id": 2,
    "type": "CG"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "2GB",
    "price": 1250,
    "days": 30,
    "id": 3,
    "type": "CG"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "2GB",
    "price": 1600,
    "days": 30,
    "id": 66,
    "type": "gifting"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "2.4GB",
    "price": 2100,
    "days": 30,
    "id": 67,
    "type": "gifting"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "3GB",
    "price": 1750,
    "days": 30,
    "id": 4,
    "type": "CG"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "3.2GB",
    "price": 1150,
    "days": 2,
    "id": 88,
    "type": "gifting"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "3.5GB",
    "price": 2600,
    "days": 30,
    "id": 68,
    "type": "gifting"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "5GB",
    "price": 2700,
    "days": 30,
    "id": 90,
    "type": "CG"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "6.75GB",
    "price": 3250,
    "days": 30,
    "id": 86,
    "type": "gifting"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "7GB",
    "price": 3700,
    "days": 7,
    "id": 54,
    "type": "gifting"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "10GB",
    "price": 4700,
    "days": 30,
    "id": 69,
    "type": "gifting"
  },
  {
    "networkId": 1,
    "network": "mtn",
    "data": "11GB",
    "price": 3680,
    "days": 7,
    "id": 74,
    "type": "gifting"
  }
],

  airtel: [
  {
    "networkId": 2,
    "network": "airtel",
    "data": "600mb",
    "price": 500,
    "days": 2,
    "id": 92,
    "type": "gifting"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "600mb",
    "price": 550,
    "days": 2,
    "id": 107,
    "type": "CG"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "1GB",
    "price": 600,
    "days": 1,
    "id": 76,
    "type": "gifting"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "1GB",
    "price": 600,
    "days": 1,
    "id": 106,
    "type": "CG"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "1.5GB",
    "price": 490,
    "days": 1,
    "id": 77,
    "type": "gifting"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "2GB",
    "price": 580,
    "days": 1,
    "id": 110,
    "type": "CG"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "2GB",
    "price": 560,
    "days": 2,
    "id": 76,
    "type": "gifting"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "3GB",
    "price": 745,
    "days": 2,
    "id": 74,
    "type": "gifting"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "3.2GB",
    "price": 800,
    "days": 3,
    "id": 115,
    "type": "gifting"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "4GB",
    "price": 2800,
    "days": 30,
    "id": 114,
    "type": "CG"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "10GB",
    "price": 3600,
    "days": 30,
    "id": 105,
    "type": "CG"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "6.5GB",
    "price": 2000,
    "days": 7,
    "id": 116,
    "type": "gifting"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "10GB",
    "price": 3550,
    "days": 30,
    "id": 47,
    "type": "gifting"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "500mb",
    "price": 600,
    "days": 7,
    "id": 61,
    "type": "SME"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "1GB",
    "price": 650,
    "days": 7,
    "id": 62,
    "type": "SME"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "1GB",
    "price": 970,
    "days": 7,
    "id": 109,
    "type": "CG"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "2GB",
    "price": 1650,
    "days": 30,
    "id": 63,
    "type": "SME"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "2GB",
    "price": 1650,
    "days": 30,
    "id": 112,
    "type": "CG"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "3GB",
    "price": 2150,
    "days": 30,
    "id": 84,
    "type": "SME"
  },
  {
    "networkId": 2,
    "network": "airtel",
    "data": "4GB",
    "price": 1000,
    "days": 2,
    "id": 111,
    "type": "CG"
  }
],

  glo:[
  {
    "networkId": 3,
    "network": "glo",
    "data": "500mb",
    "price": 249,
    "days": 14,
    "id": 93,
    "type": "SME"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "0.5GB",
    "price": 249,
    "days": 30,
    "id": 12,
    "type": "CG"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "1GB",
    "price": 279,
    "days": 3,
    "id": 95,
    "type": "SME"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "1GB",
    "price": 320,
    "days": 7,
    "id": 96,
    "type": "SME"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "1GB",
    "price": 330,
    "days": 14,
    "id": 94,
    "type": "SME"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "1GB",
    "price": 460,
    "days": 30,
    "id": 13,
    "type": "CG"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "2GB",
    "price": 900,
    "days": 30,
    "id": 14,
    "type": "CG"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "3GB",
    "price": 850,
    "days": 3,
    "id": 97,
    "type": "SME"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "3GB",
    "price": 1330,
    "days": 30,
    "id": 15,
    "type": "CG"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "3GB",
    "price": 970,
    "days": 7,
    "id": 96,
    "type": "SME"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "3GB",
    "price": 1200,
    "days": 14,
    "id": 99,
    "type": "SME"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "5GB",
    "price": 1640,
    "days": 7,
    "id": 100,
    "type": "SME"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "5GB",
    "price": 1650,
    "days": 14,
    "id": 101,
    "type": "SME"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "5GB",
    "price": 2300,
    "days": 30,
    "id": 16,
    "type": "CG"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "10GB",
    "price": 3300,
    "days": 14,
    "id": 102,
    "type": "SME"
  },
  {
    "networkId": 3,
    "network": "glo",
    "data": "10GB",
    "price": 4300,
    "days": 30,
    "id": 17,
    "type": "CG"
  }
],

  "9mobile": [{
    "networkId": 4,
    "network": "9mobile",
    "data": null,
    "price": null,
    "days": null,
    "id": null
  }]
};

export function findBundle(network, planId) {
  const plan = dataPlans[network]?.find(plan => plan.id === planId);
  console.log(plan);
  if(!plan) throw new Error('Invaild planId')
  return plan;
}
