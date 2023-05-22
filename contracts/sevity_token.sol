// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SevityToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Sevity Token", "SEVITY") {
        _mint(msg.sender, initialSupply);
    }
}
