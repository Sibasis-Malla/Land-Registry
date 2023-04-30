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
  .buy(account,price)
  .send({ from: account });
return res;
}

const addLand = async(contract,account,name,currPrice,metaData,long,lat,image)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods
  .addLand(name,currPrice,image,metaData,long,lat)
  .send({ from: account });
return res;
}

const putOnsale = async(contract,account,id,currPrice)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods
  .putOnsale(id,currPrice)
  .send({ from: account });
return res;
}
export { Signup, request, approve, transferLand, addLand,buy,putOnsale };