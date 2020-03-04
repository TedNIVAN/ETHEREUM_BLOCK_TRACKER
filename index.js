$(document).ready(() => {

    $('#btn').click(() => {
        $("#load").show();

        // Create the Web3Data instances passing in  your API Key (Get one! -> amberdata.io/onboarding)
        w3d = new Web3Data($('input').val());

        // Listen for new transactions to arrive
        w3d.connect();

        // Listen to block event
        w3d.on({ eventName: 'block' }, blockData => {
            $("#block").show();
            $("#load").hide();
            $("#parentHash").html('parentHash: ' + blockData.parentHash);
            $("#number").html('number: ' + blockData.number);
            $("#nonce").html('nonce: ' + blockData.nonce);
            $("#size").html('size: ' + blockData.size);
            $("#reward").html('reward: ' + blockData.reward);
            $("#difficulty").html('difficulty: ' + blockData.difficulty);
            $("#timestamp").html('timestamp: ' + blockData.timestamp);
            $("#numTransactions").html('numTransactions: ' + blockData.numTransactions);
            $("#gasUsed").html('gasUsed: ' + blockData.gasUsed);
            $("#hash").html('hash: ' + blockData.hash);
        })

    })
});