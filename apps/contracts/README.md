## Source
- forked from https://github.com/resolverworks/durin/tree/main

### Deploy



#### Registrar

- verify


 <!-- env-cmd -f ../../.env forge script scripts/deploy-registry.s.sol  --broadcast  --rpc-url https://sepolia.base.org  --gas-price 1000 --gas-limit 60000000000000000   --verify
 -->

 <!-- DEPLOYED_OUTPUT=$(ETHERSCAN_API_KEY=$ETHERSCAN_API_KEY forge create --rpc-url $RPC_URL \
             --private-key $PRIVATE_KEY \
	      --verify \
	      --legacy \
             $CONTRACT_FILE:$CONTRACT_NAME \
             --constructor-args $REGISTRY_ADDRESS \
             --json) -->