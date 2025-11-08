import cfg from '../cfg.js';

const accessToken= cfg.ACT;
const url = cfg.URL;

const headers = {
  'Authorization': `Token ${accessToken}`,
  'Content-Type': 'application/json'
};



export async function sendAirtime(transId,network,amount, phone) {
  //validate
  //find by id
  //if can afford debit as pending
  //actually buy it
  //save transaction
  //respond

  try {
    const payload = {
      network: network,
      phone: '0'+phone,
      plan_type: 'VTU',
      bypass: false,
      amount: amount,
      'request-id': `Airtime_${transId}`
    };
    console.log(payload)

    let response = await fetch(`${url}/topup`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    let data = response.json();
    // Handle successful response here
    console.log('Success:', data);

  }catch(err) {
    console.log(`Error : ${err.message}`)
  //  res.status(500).send("something went wrong")
  }
}

export async function sendData(transId,network, planId, phone) {
  const payload = {
    network: network,
    phone: '0'+phone,
    data_plan: planId,
    bypass: false,
    "request-id": `Data_${transId}`
  };
  console.log(`payload to provider : ${payload}`)

  try {
    const response = await fetch(`${url}/data`,
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
    // Handle successful response here
    return data;
  } catch (error) {
    console.error('Error:', error);
    // Handle errors here
    throw error;
  }
}


// Call the function
//await buyAirtime(1,100,9064498317)
//await buyData(1,1,9064498317)

