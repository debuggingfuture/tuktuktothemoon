import { Script } from "forge-std/Script.sol";
// 
import { CoinbaseSmartWalletFactory } from "../src/CoinbaseSmartWalletFactory.sol";

contract DeployRegistrarScript is Script {
    function setUp() public {
        owners.push(abi.encode(address(1)));
        owners.push(abi.encode(address(2)));
    }


    function deploy() public {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_WALLET_PRIVATE_KEY");
        address deployerAddress = vm.rememberKey(deployerPrivateKey);
        // console2.log("deployer address", deployerAddress);

        address factoryAddress = 0x0BA5ED0c6AA8c49038F819E587E2633c4A9F428a;
        CoinbaseSmartWalletFactory factory = CoinbaseSmartWalletFactory(factoryAddress);
        CoinbaseSmartWallet a = factory.createAccount(owners, 0);
        vm.expectCall(address(a), abi.encodeCall(CoinbaseSmartWallet.initialize, (owners)), 0);

    }
    function run() public {
        deploy();
        // vm.broadcast();
    }
}
