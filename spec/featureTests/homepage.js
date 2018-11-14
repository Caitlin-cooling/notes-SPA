module.exports = {
  'Demo test notes' : function(client) {
    client
      .url('localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.title('Notes')
  }
}
