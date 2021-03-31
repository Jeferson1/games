import css from "./css.js";

function pieceHtml() {

    function addHtmlPiece(pieceFragment) {
        css.addClassAttrById(`l${pieceFragment.line}c${pieceFragment.column}`, pieceFragment.color);
    }

    function addPieceHtml(block) {
        block.forEach(function (p) { addHtmlPiece(p); });
    }

    return {
        addPieceHtml
    }
}

export default pieceHtml();