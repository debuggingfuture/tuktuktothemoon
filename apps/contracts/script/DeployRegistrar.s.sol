// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { L2Registrar } from "../src/L2Registrar.sol";
import { L2RegistryFactory } from "./L2RegistryFactory.sol";
import { console2 } from "forge-std/console2.sol";
import { Script } from "forge-std/Script.sol";


// https://basescan.org/address/0x0BA5ED0c6AA8c49038F819E587E2633c4A9F428a
contract DeployRegistrarScript is Script {
    function setUp() public {}

    function deploy() public {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_WALLET_PRIVATE_KEY");
        address deployerAddress = vm.rememberKey(deployerPrivateKey);
        console2.log("deployer address", deployerAddress);

        address registryFactoryAddress = vm.envAddress("REGISTRY_FACTORY_ADDRESS");
        L2RegistryFactory registryFactory = L2RegistryFactory(registryFactoryAddress);

        // address registryAddress = '';
        vm.startBroadcast(deployerAddress);

        // TODO update uri
        string memory baseUri = "https://storageapi.fleek.co/nfts/";
        registryFactory.deployRegistry("TUKTUK", "TUKTUK", baseUri);


        
        // registrar = new Registrar();
    }
    function run() public {
        deploy();
        // vm.broadcast();
    }
}
