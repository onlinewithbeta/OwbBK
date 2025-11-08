
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
  mtn: [{
    "networkId": 1,
    "network": "mtn",
    "data": "500mb",
    "price": 450,
    "days": 7,
    "id": 165,
    "type": "gifting"
  },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "1GB",
      "price": 600,
      "days": 7,
      "id": 166,
      "type": "gifting"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "1GB",
      "price": 600,
      "days": 7,
      "id": 1,
      "type": "sme"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "1GB",
      "price": 650,
      "days": 30,
      "id": 2,
      "type": "sme"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "2GB",
      "price": 1300,
      "days": 30,
      "id": 3,
      "type": "sme"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "3GB",
      "price": 1950,
      "days": 30,
      "id": 4,
      "type": "sme"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "5GB",
      "price": 2900,
      "days": 30,
      "id": 5,
      "type": "sme"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "0.5GB",
      "price": 550,
      "days": 7,
      "id": 7,
      "type": "CG"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "1GB",
      "price": 850,
      "days": 7,
      "id": 112,
      "type": "CG"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "11GB",
      "price": 3650,
      "days": 7,
      "id": 136,
      "type": "CG"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "2GB",
      "price": 1600,
      "days": 30,
      "id": 122,
      "type": "CG"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "2.7GB",
      "price": 2200,
      "days": 30,
      "id": 123,
      "type": "CG"
    },
    {
      "networkId": 1,
      "network": "mtn",
      "data": "3.5GB",
      "price": 2600,
      "days": 30,
      "id": 124,
      "type": "CG"
    }],

  airtel: [{
    "networkId": 3,
    "network": "airtel",
    "data": "300mb",
    "price": 200,
    "days": 2,
    "id": 188,
    "type": "gifting"
  },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "300mb",
      "price": 240,
      "days": 2,
      "id": 169,
      "type": "CG"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "0.6GB",
      "price": 400,
      "days": 2,
      "id": 96,
      "type": "gifting"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "1GB",
      "price": 450,
      "days": 1,
      "id": 137,
      "type": "gifting"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "1.5GB",
      "price": 480,
      "days": 1,
      "id": 138,
      "type": "gifting"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "1.5GB",
      "price": 550,
      "days": 1,
      "id": 139,
      "type": "gifting"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "600mb",
      "price": 400,
      "days": 2,
      "id": 170,
      "type": "CG"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "1.5GB",
      "price": 600,
      "days": 1,
      "id": 173,
      "type": "CG"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "500mb",
      "price": 550,
      "days": 7,
      "id": 115,
      "type": "SME"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "1GB",
      "price": 850,
      "days": 7,
      "id": 116,
      "type": "SME"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "2GB",
      "price": 1550,
      "days": 30,
      "id": 127,
      "type": "SME"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "3GB",
      "price": 2050,
      "days": 30,
      "id": 128,
      "type": "SME"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "3GB",
      "price": 800,
      "days": 2,
      "id": 140,
      "type": "gifting"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "3GB",
      "price": 850,
      "days": 2,
      "id": 174,
      "type": "CG"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "5GB",
      "price": 1550,
      "days": 7,
      "id": 147,
      "type": "gifting"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "5GB",
      "price": 1650,
      "days": 7,
      "id": 168,
      "type": "CG"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "10GB",
      "price": 3250,
      "days": 30,
      "id": 101,
      "type": "CG"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "10GB",
      "price": 3500,
      "days": 30,
      "id": 167,
      "type": "CG"
    },
    {
      "networkId": 3,
      "network": "airtel",
      "data": "10GB",
      "price": 4300,
      "days": 30,
      "id": 130,
      "type": "SME"
    }],

  glo: [{
    "networkId": 2,
    "network": "glo",
    "data": "0.5GB",
    "price": 240,
    "days": 30,
    "id": 46,
    "type": "CG"
  },
    {
      "networkId": 2,
      "network": "glo",
      "data": "1GB",
      "price": 450,
      "days": 30,
      "id": 47,
      "type": "CG"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "1GB",
      "price": 320,
      "days": 7,
      "id": 183,
      "type": "gifting"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "2GB",
      "price": 900,
      "days": 30,
      "id": 48,
      "type": "CG"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "3GB",
      "price": 1300,
      "days": 30,
      "id": 49,
      "type": "CG"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "5GB",
      "price": 2300,
      "days": 30,
      "id": 50,
      "type": "CG"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "10GB",
      "price": 4500,
      "days": 30,
      "id": 51,
      "type": "CG"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "1GB",
      "price": 450,
      "days": 14,
      "id": 176,
      "type": "sme"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "3GB",
      "price": 1200,
      "days": 14,
      "id": 177,
      "type": "sme"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "5GB",
      "price": 1950,
      "days": 14,
      "id": 178,
      "type": "sme"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "10GB",
      "price": 4000,
      "days": 14,
      "id": 179,
      "type": "sme"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "1GB",
      "price": 330,
      "days": 3,
      "id": 180,
      "type": "gifting"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "3GB",
      "price": 1000,
      "days": 3,
      "id": 181,
      "type": "gifting"
    },
    {
      "networkId": 2,
      "network": "glo",
      "data": "5GB",
      "price": 1600,
      "days": 3,
      "id": 182,
      "type": "gifting"
    }],
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
  return plan;
}
