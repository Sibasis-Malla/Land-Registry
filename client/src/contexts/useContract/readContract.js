//get All Lands
import Web3 from "web3";
const getAllLands=async(contract)=>{
  if (!contract) {
    return false;
  }

  const res = await contract.methods.Counter().call();
  // console.log(res)
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

  const res = await contract.methods.reqCounter().call();
  let requests = [];
  for(let i=0;i<res;i++){
    const temp = await contract.methods.allrequests(i).call();
    requests.push(temp);
  }
  return requests;
}
const getLand = async(contract,id)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods.allLands(id).call();
  return res;
}
const getTbalance = async(contract,address)=>{
  if (!contract) {
    return false;
  }
  const res = await contract.methods.balanceOf(address).call();
  var web3 = new Web3(window.ethereum);
 const res2= web3.utils.fromWei(res, "ether")
  return res2;
}
export{getAllLands,getAllrequests,getLand,getTbalance}