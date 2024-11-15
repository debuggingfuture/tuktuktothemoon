// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { L2Registrar } from "./L2Registrar.sol";
import { L2RegistryFactory } from "./L2RegistryFactory.sol";
// import { console2 } from "forge-std/src/console2.sol";
import { Script } from "forge-std/Script.sol";

contract DeployRegistrarScript is Script {
    function setUp() public {}

    function deploy() public {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_WALLET_PRIVATE_KEY");
        address deployerAddress = vm.rememberKey(deployerPrivateKey);
        // console.log("deployer address", deployerAddress);

        address registryFactoryAddress = vm.envAddress("REGISTRY_FACTORY_ADDRESS");
        L2RegistryFactory registryFactory = L2RegistryFactory(registryFactoryAddress);

        // address registryAddress = '';
        vm.startBroadcast(deployerAddress);
        
        // registrar = new Registrar();
    }
    function run() public {
        vm.broadcast();
    }
}