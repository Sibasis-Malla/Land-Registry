/* eslint-disable */
import React, { useState } from 'react';
import LandRegister from '../contracts/LandRegister.json';
import TerraToken from '../contracts/TerraToken.json'
import { Web3Context } from './index';
import Web3 from 'web3';


const Web3Provider = ({ children }) => {
  const [account, setAccount] = useState({
    accounts: null,
    currentAccount: null,
  });
  const [Contract, setContract] = useState('');
  const [balance,setBalance]=useState('')


  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log('Connected', accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      // console.log('We have the ethereum object');
  
    var web3 = new Web3(window.ethereum);

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const chain = await web3.eth.getChainId();
    setAccount({
      accounts: accounts,
      currentAccount: accounts[0],
    });

    if (accounts.length !== 0) {
      // console.log(LandRegister)
      const deployedNetwork = LandRegister.networks[80001];
      //console.log(deployedNetwork)
  
      const instance = new web3.eth.Contract(
        LandRegister.abi,
        deployedNetwork && deployedNetwork.address
      );
      const instance2 = new web3.eth.Contract(
        TerraToken.abi,
        deployedNetwork && "0x7df98bbf021b3634fa54bde2ccd5df412a16cdd1"
      );

      setBalance(instance2)
      
      setContract(instance);
    } else {
      console.log('No authorized account found');
    }
  }
  };




  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        checkIfWalletIsConnected,
        account,
        Contract,

        balance
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
