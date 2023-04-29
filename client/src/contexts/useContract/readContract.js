//get All Lands

const getAllLands=async(contract)=>{
  if (!contract) {
    return false;
  }

  const res = await contract.methods.Counter.call();
  let lands = [];
  for(let i=0;i<res;i++){
    const temp = await contract.methods.allLands(i).call();
    lands.push(temp);
  }
  return lands;
}
//getAllrequest


const getAllrequests=async(contract)=>{
  if (!contract) {
    return false;
  }

  const res = await contract.methods.reqCounter.call();
  let requests = [];
  for(let i=0;i<res;i++){
    const temp = await contract.methods.allrequests(i).call();
    requests.push(temp);
  }
  return requests;
}

export{getAllLands,getAllrequests}