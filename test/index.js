'use strict';

var should = require('chai').should();
var btccore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(btccore.crypto);
    should.exist(btccore.encoding);
    should.exist(btccore.util);
    should.exist(btccore.errors);
    should.exist(btccore.Address);
    should.exist(btccore.Block);
    should.exist(btccore.MerkleBlock);
    should.exist(btccore.BlockHeader);
    should.exist(btccore.HDPrivateKey);
    should.exist(btccore.HDPublicKey);
    should.exist(btccore.Networks);
    should.exist(btccore.Opcode);
    should.exist(btccore.PrivateKey);
    should.exist(btccore.PublicKey);
    should.exist(btccore.Script);
    should.exist(btccore.Transaction);
    should.exist(btccore.URI);
    should.exist(btccore.Unit);
  });
});
