const piece = {
    getPosition : function() {
      return this.position    
    },
    setPosition : function(position) {
      this.position = position
    },
    getColour : function() {
      return this.colour
    },
    setColour : function(colour) {
      this.colour = colour
    },
    getType : function() {
      return this.type
    },
    setType : function(type) {
      this.type = type
    },
    getElement: function() {
      return this.element
    },   
    getPossibleMoves : function() {
      throw console.error('This method should be implemented in concrete piece');    
    },
    getRankStyleClass : function() {
      return `rank-${this.getRank()}`
    },
    getFileStyleClass : function() {
      return `file-${this.getFile()}`
    },
    getPieceStyleClass : function() {
      return `${this.colour}-${this.type}`
    },
    getRank : function() {
      return this.position.charAt(1)
    },
    getFile : function() {
      return this.position.charAt(0)
    },
    getStyleClassList : function() {
      var classList = ''
      classList = `chess-piece ${this.getFileStyleClass()} ${this.getRankStyleClass()} ${this.getPieceStyleClass()}`
      return classList
    },
    isMoved : function() {
      return this.moved
    },
    markAsMoved : function() {
      this.moved = true 
    },
    render : function(containerId) {
      if (this.element) {
        this.element.parentNode.removeChild(this.element)
      }
      var divElement = document.createElement('div')
      this.element = divElement
      divElement.classList.value = this.getStyleClassList()
      
      var pieceContainerElement = document.getElementById(containerId)

      pieceContainerElement.appendChild(divElement)
    }
}

export {piece}
