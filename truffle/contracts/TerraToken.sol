// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TerraToken is ERC20 {
   
    constructor(uint256 initialSupply) ERC20("TerraToken", "Terra") {
         uint256 decimals = 18;
         uint256  totalSupply = initialSupply * 10 ** decimals;  
        _mint(msg.sender, totalSupply);
    }
}