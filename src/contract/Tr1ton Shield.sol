// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Tr1tonShieldEdition is ERC1155, Ownable {
    using Strings for uint256;

    string public name = "Tr1ton Shield Edition";
    string public symbol = "TSE";

    enum NFTType {
        CLAN, TED, ROOTED, LEADER, BREATH, GROUNDED, ALIVE, BE_BOLD, 
        THUNDER, ROYAL_LION, FIGHT, HELL, SILENCE, FLAME, WING_OF_FREEDOM, STING
    }

    uint256 public constant TYPE_MAX = uint256(NFTType.STING) + 1;
    
    // Stores NFT types, names, mint costs, and max supplies
    string[] public typeNames = new string[](TYPE_MAX);
    mapping(uint256 => uint256) public maxSupplies;
    mapping(uint256 => uint256) public currentSupply;

    string private _baseTokenURI;

   constructor(string memory baseTokenURI) ERC1155("") {
        _baseTokenURI = baseTokenURI;
        setNFTType(NFTType.CLAN, "Clan", 50);
        setNFTType(NFTType.TED, "Ted", 50);
        setNFTType(NFTType.ROOTED, "Rooted", 50);
        setNFTType(NFTType.LEADER, "Leader", 50);
        setNFTType(NFTType.BREATH, "Breath", 50);
        setNFTType(NFTType.GROUNDED, "Grounded", 1);
        setNFTType(NFTType.ALIVE, "Alive", 50);
        setNFTType(NFTType.BE_BOLD, "Be Bold", 25);
        setNFTType(NFTType.THUNDER, "Thunder", 25);
        setNFTType(NFTType.ROYAL_LION, "Royal Lion", 25);
        setNFTType(NFTType.FIGHT, "Fight", 25);
        setNFTType(NFTType.HELL, "Hell", 25);
        setNFTType(NFTType.SILENCE, "Silence", 1);
        setNFTType(NFTType.FLAME, "Flame", 1);
        setNFTType(NFTType.WING_OF_FREEDOM, "Wing of Freedom", 20);
        setNFTType(NFTType.STING, "Sting", 10);
    }

    function setBaseTokenURI(string memory newBaseURI) public onlyOwner {
        _baseTokenURI = newBaseURI;
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return bytes(_baseTokenURI).length > 0
            ? string(abi.encodePacked(_baseTokenURI, tokenId.toString()))
            : "";
    }

    function mint(NFTType typeId, uint256 amount) public onlyOwner {
        uint256 id = uint256(typeId);
        require(amount > 0, "Amount must be greater than zero");
        require(currentSupply[id] + amount <= maxSupplies[id], "Max supply reached");

        currentSupply[id] += amount;
        _mint(msg.sender, id, amount, "");
    }

    function setNFTType(NFTType typeId, string memory _name, uint256 _supply) internal {
        uint256 id = uint256(typeId);
        typeNames[id] = _name;
        maxSupplies[id] = _supply;
    }
}