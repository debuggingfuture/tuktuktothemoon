# 🛺"Tuk Tuk To the Moon"
Decentralized patreon for creators and communities to fund what they love, together
Like Carpool with Tuk Tuk, we could create on-chain pool to fundraise and crowdsource for data contributions and reward creators trustlessly.


## Why
Creator platforms like Patreon today are far from perfect

1. Trust concern -- phishing and scams.
2. middleman - 8% fees + 3% to credit card
3. no mechanisms to incentivize (e.g. airdrop) community to contribute  
4. attention - easier to run rounds over creator fundraise indiviudally 

We could learn from platforms like Gitcoin, Giveth etc
❓What if we support creators to join force and mobilize their community to create fundraising campaign. 
❓What if we enable trustless reward for contributions
❓What if we bring reputation systems on-chain

We have ETH - Let's bring Economy, Trust, Human on-chain 

## Features

- Mint ENS L2 name to receive funding
- Allow community to follow with Ethereum Follower Protocol to indicate reputation
- Create Akave Bucket to crowdsource data and art, then track for reward
- Drag-and-drop to setup funding target and disperse

## Use cases
- crowdsourcing for music creation e.g. Ethereum unofficial theme song
- crowdsourcing for deSci e.g. Collect air quality sensors
- crowdfunding in charity run

## How it's build
- With UI it's possible to connect and create a pool, where the app will 
 - create Akave for community to upload data and media
 - deploy L2 registrar so we can rereceive funding directly
 - update the bucket onto L2 subname TXT record 
 - create a Coinbase smart account as the owner of L2 ENS subname
   - where the smart account could be owned by either pool manager / Chianlink Gatekeeper   
 - with the metadata on akave, we can verify contributors and split reward to legit address
 - we could extend this by updating L2 TXT records on ENS subname to include verified contributors, and pre-configure smart account to disperse in trustless mechanisms 

## Examples

- Example of deployed Registrar (via Durin, DeployRegistrar.s.sol)
  - (update bucket only)
    - https://sepolia.basescan.org/address/0x4b6bcced803bad105504cd587d3d189c72b2a269#writeContract
  - create Smart account
    - https://sepolia.basescan.org/address/0xc4d90794158db499986ccd377c1d7f7fa732a069

  - Moon2 - 54edc009c0c4a5c451fa5a0e97ee26120578ca70f72064eee9ebf7184141e4aa

- Updated TXT record "bucket" https://sepolia.basescan.org/tx/0xd42d4e2e64bef442b68ef446a77b31c9ff305d157750e63338290dd17f153eb9#eventlog#16

- Note
  - CoinbaseSmartWalletFactory on base sepolia https://sepolia.basescan.org/address/0x0ba5ed0c6aa8c49038f819e587e2633c4a9f428a#code