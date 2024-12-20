// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import { IL2Registry }from "../src/IL2Registry.sol";
import { L2Registry }from "../src/L2Registry.sol";
import { L2Registrar } from "../src/L2Registrar.sol";
import { L2RegistryFactory } from "../src/L2RegistryFactory.sol";
import { console2 } from "forge-std/console2.sol";
import { Script } from "forge-std/Script.sol";


// https://basescan.org/address/0x0BA5ED0c6AA8c49038F819E587E2633c4A9F428a
contract DeployRegistrarScript is Script {
    function setUp() public {}

    function deploy() public {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_WALLET_PRIVATE_KEY");
        address deployerAddress = vm.rememberKey(deployerPrivateKey);
        console2.log("deployer address", deployerAddress);

        // address registryFactoryAddress = vm.envAddress("REGISTRY_FACTORY_ADDRESS");
        // L2RegistryFactory registryFactory = L2RegistryFactory(registryFactoryAddress);
        vm.startBroadcast(deployerAddress);
        // TODO update uri
        string memory baseUri = "https://storageapi.fleek.co/nfts/";

        address registryAddress = 0xfc8E2d75CE1eAbC2B8ce1BC9a86a868A46B5Eec0;
        L2Registry registry = L2Registry(registryAddress);
        L2Registrar registrar = new L2Registrar(registry);

        registry.addRegistrar(address(registrar));

    }
    function run() public {
        deploy();
        // vm.broadcast();
    }
}
