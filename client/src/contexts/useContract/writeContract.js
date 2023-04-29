//Signup
const Signup = async (contract,account,address,kyc)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods
    .Signup(address,kyc)
    .send({ from: account });
  return res;

}
//request
const request = async (contract,account,id,bid,wallet)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods
    .request(id,bid,wallet)
    .send({ from: account });
  return res;

}
//approve
const approve = async(contract,account,reqId,approvedOwner)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods
    .approve(reqId,approvedOwner)
    .send({ from: account });
  return res;
}
//transferLand

const transferLand=async(contract,account,id,receiver)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods
    .transferLand(id,receiver)
    .send({ from: account });
  return res;
}
const buy = async(contract,account,price)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods
  .buy(id,receiver)
  .send({ from: account });
return res;
}

const addLand = async(contract,account,name,currentOwner,currPrice,metaData)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods
  .addLand(contract,account,name,currentOwner,currPrice,metaData)
  .send({ from: account });
return res;
}

const putOnsale = async(contract,account,id,currPrice)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods
  .putOnsale(contract,account,id,currPrice)
  .send({ from: account });
return res;
}
export { Signup, request, approve, transferLand, addLand,buy,putOnsale };
