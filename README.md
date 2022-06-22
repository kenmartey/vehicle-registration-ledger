# Project Description

ServiceOntario is responsible for vehicle registration throughout the province. A secure blockchain-based solution is needed to ensure the immutable recording of vehicle registrations and ownership details. Any solution must also be decentralized and token less for effective operation and cost management.   
  
Hyperledger Fabric is a highly flexible, enterprise-grade private, permissioned blockchain that offers a fast transaction throughput of 5,000-30,000 transactions per second. Developed by the Linux Foundation, it allows organizations to build and run industry-specific blockchain applications for their businesses. Participating organizations participate as Peers. Smart contracts are called Chaincode. These are agreed upon and shared with each organization handling its own onboarding. 
  
In this project, the test network consists of two example organizations ServiceOntario and a dealership. Many other organizations would be part of this deployment in the real world. For example, insurance companies would interact with ServiceOntario using a channel that is a private subnet created between participating organizations. 

# Requirements
A Hyperledger Fabric-based dApp vehicle registry that tracks a vehicle’s lifecycle.  
  
A State record for each vehicle that includes the following:   
•	Vehicle VIN   
•	License plate history   
•	Owner history   
•	Repair history   
•	Accident history
  
The ability to search for vehicles by:   
•	VIN  
•	Owner   
•	Plate  

# State Machine Diagram
  
![StateDiagram](https://user-images.githubusercontent.com/99918492/175080590-e87c34fa-a544-43ce-a5d2-80396ca2c1d2.png)
  

# Transistion Descriptions
  TO-DO  
    
# State Data Descriptions
  TO-DO  
  
# Role Descriptions
Lead Programmer: K. Anyinatoe  
Documentation Lead: N. Harley  
State Diagram & Assistance: K. Ashra & A. AjitpalSingh Bal 

# Application Screenshot
  
  Insert Image Here  
  
  
# Project Implimentation: 
  
### Chaincode Folder (link)  
### Server code (link)  
### Front end code Folder (link)  

  
## Vehicle Registration LifeCycle on Hyperledger Fabric
_(*** Only CarDealership,RegisterCar,GetCarHistory,GetCarDetails and ScrapCar implemented ***)_  
  
## Vehicle application on Hyperledger Fabric  

### Start the Hyperledger Fabric Network 

1. cd vehicle-lc
2. ./start.sh (with this you will start docker-compose.yml up -d )

## Setup the Hyperledger Fabric Network

1. cd vehicle-lc
2. ./setup.sh (With this you will create the channel genesis block, add the peer0 to the channel created and instantiate tfbc chaincode.) 
_*** In this usecase CA's are already generated._ 

We **do not have to run** the following again:

1. "generate --config=crypto-config.yaml"
2. "siamOrgOrdererGenesis -outputBlock ./config/genesis.block" 
3. "siamOrgChannel -outputCreateChannelTx ./config/siamchannel.tx -channelID siamchannel". 

These three statements are part of the "generate.sh" file here. 


## Setup API users 

1. cd vehicle-lc/siam-api
2. npm install
3. rm hfc-key-store/*
4. node enrollBankUser.js
5. node enrollBuyerUser.js
6. node enrollSellerUser.js

## Run Node APIs  
1. node CarDealership.js [see chain code for argument]
2. node registerCar.js [see chain code for argument]
3. node getCarDetails [CHASIS NUMBER]
4. node getCarHistory [REGISTRATION NUMBER]
5. node scrapCar.js [REGISTRATION NUMBER] [Not tested]

1. cd vehicle-lc
2. ./stop.sh
