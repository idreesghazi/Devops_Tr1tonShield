// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyNFT is ERC1155, Ownable, Initializable {
    using StringsUpgradeable for uint256;

    uint256 public constant TYPE_CLAN = 1;
    uint256 public constant TYPE_TED = 2;
    uint256 public constant TYPE_ROOTED = 3;
    uint256 public constant TYPE_LEADER = 4;
    uint256 public constant TYPE_BREATH = 5;
    uint256 public constant TYPE_GROUNDED = 6;
    uint256 public constant TYPE_ALIVE = 7;
    uint256 public constant TYPE_BE_BOLD = 8;
    uint256 public constant TYPE_THUNDER = 9;
    uint256 public constant TYPE_ROYAL_LION = 10;
    uint256 public constant TYPE_FIGHT = 11;
    uint256 public constant TYPE_HELL = 12;
    uint256 public constant TYPE_SILENCE = 13;
    uint256 public constant TYPE_FLAME = 14;
    uint256 public constant TYPE_WING_OF_FREEDOM = 15;
    uint256 public constant TYPE_STING = 16;

    // Define constants for the other types similarly
    // ...
    uint256 public constant MAX_SUPPLY_GROUNDED = 1;
    uint256 public constant MAX_SUPPLY_FLAME = 1;
    uint256 public constant MAX_SUPPLY_LOW = 25;
    uint256 public constant MAX_SUPPLY_LOWER = 10;
    uint256 public constant MAX_SUPPLY_DEFAULT = 50;


    string private _baseTokenURI;

   constructor() ERC1155("") {
        _disableInitializers();
       
    }

    function initialize(string memory baseTokenURI) initializer public {

        _baseTokenURI = baseTokenURI;
        defineTypeNames(); // Initialize default NFT types, names, costs, and max supplies
        
    }

    function setBaseTokenURI(string memory newBaseURI) public onlyOwner {
        _baseTokenURI = newBaseURI;
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return bytes(_baseTokenURI).length > 0
            ? string(abi.encodePacked(_baseTokenURI, tokenId.toString()))
            : "";
    }

    function mint(uint256 id, uint256 amount) public onlyOwner {
        require(id >= 1 && id <= 16, "Invalid NFT type");
        require(amount > 0, "Amount must be greater than zero");

        uint256 maxSupply = getMaxSupply(id);
        require(amount <= maxSupply, "Max supply reached");

        _mint(msg.sender, id, amount,"");
    }


    function getMaxSupply(uint256 id) internal pure returns (uint256) {
        if (id == TYPE_GROUNDED || id == TYPE_FLAME) {
            return id == TYPE_GROUNDED ? MAX_SUPPLY_GROUNDED : MAX_SUPPLY_FLAME;
        } else if (
            id == TYPE_BE_BOLD || id == TYPE_THUNDER || id == TYPE_ROYAL_LION ||
            id == TYPE_FIGHT || id == TYPE_HELL || id == TYPE_WING_OF_FREEDOM
        ) {
            return MAX_SUPPLY_LOW;
        } 
        else if (id == TYPE_STING){
            return MAX_SUPPLY_LOWER;
        }
        else {
            return MAX_SUPPLY_DEFAULT;
        }
    }


    // Define your NFT types, names, mint costs, and max supplies here
    string[] public typeNames;
    mapping(uint256 => uint256) public mintCosts;
    mapping(uint256 => uint256) public maxSupplies;

    function setNFTType(uint256 typeId, string memory name, uint256 cost, uint256 supply) public onlyOwner {
        require(typeId > 0 && typeId <= 16, "Invalid NFT type");
        typeNames[typeId - 1] = name;
        mintCosts[typeId] = cost;
        maxSupplies[typeId] = supply;
    }

    function defineTypeNames() public onlyOwner {
        setNFTType(TYPE_CLAN, "Clan", 0, 50);
        setNFTType(TYPE_TED, "Ted", 0, 50);
        setNFTType(TYPE_ROOTED, "Rooted", 0, 50);
        setNFTType(TYPE_LEADER, "Leader", 0, 50);
        setNFTType(TYPE_BREATH, "Breath", 0, 50);
        setNFTType(TYPE_GROUNDED, "Grounded", 0, 1);
        setNFTType(TYPE_ALIVE, "Alive", 0, 50);
        setNFTType(TYPE_BE_BOLD, "Be Bold", 0, 25);
        setNFTType(TYPE_THUNDER, "Thunder", 0, 25);
        setNFTType(TYPE_ROYAL_LION, "Royal Lion", 0, 25);
        setNFTType(TYPE_FIGHT, "Fight", 0, 25);
        setNFTType(TYPE_HELL, "Hell", 0, 25);
        setNFTType(TYPE_SILENCE, "Silence", 0, 1);
        setNFTType(TYPE_FLAME, "Flame", 0, 1);
        setNFTType(TYPE_WING_OF_FREEDOM, "Wing of Freedom", 0, 20);
        setNFTType(TYPE_STING, "Sting", 0, 10);
    }

}
