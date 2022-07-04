/* Nav Bar Responsiva */

$(document).ready(function () {
    $(".menu-toggle").click(function () {
        $(".menu-toggle").toggleClass("ativar_menu");
        $("nav").toggleClass("ativar_menu");
    });
});

/* Pop Up Banner Rotativo */

function imgPopUp1() {
    $("#img1-pop-up").toggleClass("ativar_pedido");
    $("#pop-up-estrutura").toggleClass("ativar_pedido");
    let imgNome1 = $("#nome1").text();
    let imgDescricao1 = $("#descricao1").text();
    let imgValor1 = $("#valor1").text();
    $("#referencia-img").attr("src", "img/Item1.PNG");
    $("#referencia-nome").html(imgNome1);
    $("#referencia-descricao").html(imgDescricao1);
    $("#referencia-valor").html(imgValor1);
    $("#referencia-valor-atual").html(imgValor1);
}

function imgPopUp2() {
    $("#img2-pop-up").toggleClass("ativar_pedido");
    $("#pop-up-estrutura").toggleClass("ativar_pedido");
    let imgNome2 = $("#nome2").text();
    let imgDescricao2 = $("#descricao2").text();
    let imgValor2 = $("#valor2").text();
    $("#referencia-img").attr("src", "img/Item2.PNG");
    $("#referencia-nome").html(imgNome2);
    $("#referencia-descricao").html(imgDescricao2);
    $("#referencia-valor").html(imgValor2);
    $("#referencia-valor-atual").html(imgValor2);
}

function imgPopUp3() {
    $("#img3-pop-up").toggleClass("ativar_pedido");
    $("#pop-up-estrutura").toggleClass("ativar_pedido");
    let imgNome3 = $("#nome3").text();
    let imgDescricao3 = $("#descricao3").text();
    let imgValor3 = $("#valor3").text();
    $("#referencia-img").attr("src", "img/Item3.PNG");
    $("#referencia-nome").html(imgNome3);
    $("#referencia-descricao").html(imgDescricao3);
    $("#referencia-valor").html(imgValor3);
    $("#referencia-valor-atual").html(imgValor3);
}

function imgPopUp4() {
    $("#img4-pop-up").toggleClass("ativar_pedido");
    $("#pop-up-estrutura").toggleClass("ativar_pedido");
    let imgNome4 = $("#nome4").text();
    let imgDescricao4 = $("#descricao4").text();
    let imgValor4 = $("#valor4").text();
    $("#referencia-img").attr("src", "img/Item4.PNG");
    $("#referencia-nome").html(imgNome4);
    $("#referencia-descricao").html(imgDescricao4);
    $("#referencia-valor").html(imgValor4);
    $("#referencia-valor-atual").html(imgValor4);
}

/* Pop Up Itens Menu */

$(document).ready(function () {
    $("#item1-pop-up").click(function () {
        $("#item1-pop-up").toggleClass("ativar_pedido");
        $("#pop-up-estrutura").toggleClass("ativar_pedido");
        let nome1 = $("#nome1").text();
        let descricao1 = $("#descricao1").text();
        let valor1 = $("#valor1").text();
        $("#referencia-img").attr("src", "img/Item1.PNG");
        $("#referencia-nome").html(nome1);
        $("#referencia-descricao").html(descricao1);
        $("#referencia-valor").html(valor1);
        $("#referencia-valor-atual").html(valor1);
    });
});

$(document).ready(function () {
    $("#item2-pop-up").click(function () {
        $("#item2-pop-up").toggleClass("ativar_pedido");
        $("#pop-up-estrutura").toggleClass("ativar_pedido");
        let nome2 = $("#nome2").text();
        let descricao2 = $("#descricao2").text();
        let valor2 = $("#valor2").text();
        $("#referencia-img").attr("src", "img/Item2.PNG");
        $("#referencia-nome").html(nome2);
        $("#referencia-descricao").html(descricao2);
        $("#referencia-valor").html(valor2);
        $("#referencia-valor-atual").html(valor2);
    });
});

$(document).ready(function () {
    $("#item3-pop-up").click(function () {
        $("#item3-pop-up").toggleClass("ativar_pedido");
        $("#pop-up-estrutura").toggleClass("ativar_pedido");
        let nome3 = $("#nome3").text();
        let descricao3 = $("#descricao3").text();
        let valor3 = $("#valor3").text();
        $("#referencia-img").attr("src", "img/Item3.PNG");
        $("#referencia-nome").html(nome3);
        $("#referencia-descricao").html(descricao3);
        $("#referencia-valor").html(valor3);
        $("#referencia-valor-atual").html(valor3);
    });
});

$(document).ready(function () {
    $("#item4-pop-up").click(function () {
        $("#item4-pop-up").toggleClass("ativar_pedido");
        $("#pop-up-estrutura").toggleClass("ativar_pedido");
        let nome4 = $("#nome4").text();
        let descricao4 = $("#descricao4").text();
        let valor4 = $("#valor4").text();
        $("#referencia-img").attr("src", "img/Item4.PNG");
        $("#referencia-nome").html(nome4);
        $("#referencia-descricao").html(descricao4);
        $("#referencia-valor").html(valor4);
        $("#referencia-valor-atual").html(valor4);
    });
});

/* Close Pop Up Itens Menu */

$(document).ready(function () {
    $("#close-pop-up").click(function () {
        $("#close-pop-up").toggleClass("ativar_pedido");
        $("#pop-up-estrutura").toggleClass("ativar_pedido");
        $("#referencia-quantidade-item").text("1");
    });
});

/* Adicionar Valor */

function adicionarValor() {
    let quantidadeItem = parseInt(document.getElementById("referencia-quantidade-item").innerHTML);
    document.getElementById("referencia-quantidade-item").innerHTML = quantidadeItem + 1;
    let valorAdicionado = parseFloat(document.getElementById("referencia-valor-atual").innerHTML);
    let valorAtual = parseFloat(document.getElementById("referencia-valor").innerHTML);
    novoValorAdicionado = valorAdicionado + valorAtual;
    document.getElementById("referencia-valor-atual").innerHTML = novoValorAdicionado.toFixed(2);
}

/* Retirar Valor */

function retirarValor() {
    let quantidadeItemAtual = parseInt(document.getElementById("referencia-quantidade-item").innerHTML);
    let valorAdicionadoAtual = parseFloat(document.getElementById("referencia-valor-atual").innerHTML);
    let valorAtualBase = parseFloat(document.getElementById("referencia-valor").innerHTML);
    if (quantidadeItemAtual > 1) {
        document.getElementById("referencia-quantidade-item").innerHTML = quantidadeItemAtual - 1;
        novoValorRetirado = valorAdicionadoAtual - valorAtualBase;
        document.getElementById("referencia-valor-atual").innerHTML = novoValorRetirado.toFixed(2);
    } else {
        document.getElementById("referencia-valor-atual").innerHTML = valorAtualBase;
    }
}

/* Adicionar no Carrinho */

function adicionarCarrinho() {
    let valorCarrinhoAtual = parseFloat(document.getElementById("valor-adicionado-carrinho").innerHTML);
    let valorAdicionadoFinal = parseFloat(document.getElementById("referencia-valor-atual").innerHTML);
    valorNovoCarrinho = valorCarrinhoAtual + valorAdicionadoFinal;
    document.getElementById("valor-adicionado-carrinho").innerHTML = valorNovoCarrinho.toFixed(2);
    let quantidadePedido = parseInt(document.getElementById("referencia-quantidade-item").innerHTML);
    let quantidadePedidoAtual = parseInt(document.getElementById("referencia-quantidade-itens-carrinho-pedido").innerHTML);
    let quantidadePedidoTotal = quantidadePedidoAtual + quantidadePedido;
    document.getElementById("referencia-quantidade-itens-carrinho-pedido").innerHTML = quantidadePedidoTotal;
    let valorTotal = $("#valor-adicionado-carrinho").text();
    $("#referencia-valor-total-carrinho-pedido").html(valorTotal);
    $("#referencia-valor-total-adicionar").toggleClass("ativar_adicionar");
    $("#pop-up-carrinho-pedidos").toggleClass("ativar_adicionar");
}

/* Ver Carrinho */

$(document).ready(function () {
    $("#referencia-carrinho-pedidos").click(function () {
        $("#referencia-carrinho-pedidos").toggleClass("ativar_adicionar");
        $("#pop-up-carrinho-pedidos").toggleClass("ativar_adicionar");
    });
});

/* Close Pop Up Carrinho Pedidos */

$(document).ready(function () {
    $("#close-pop-up-carrinho-pedido").click(function () {
        $("#close-pop-up-carrinho-pedido").toggleClass("ativar_adicionar");
        $("#pop-up-carrinho-pedidos").toggleClass("ativar_adicionar");
    });
});

/* Limpar Pedido */

function limparPedido() {
    let quantidadeAtualBase = document.getElementById("referencia-quantidade-itens-carrinho-pedido").innerHTML;
    let valorAtualBase = document.getElementById("referencia-valor-total-carrinho-pedido").innerHTML;
    if (quantidadeAtualBase === "0" && valorAtualBase === "0.00") {
        alert("O Carrinho está Vazio!");
    } else {
        document.getElementById("referencia-quantidade-itens-carrinho-pedido").innerHTML = "0";
        document.getElementById("referencia-valor-total-carrinho-pedido").innerHTML = "0.00";
        document.getElementById("valor-adicionado-carrinho").innerHTML = "0.00";
        alert("Carrinho Limpo!");
    }
}

/* Comprar Pedido */

function comprarPedido() {
    let quantidadeAtualBaseInicial = document.getElementById("referencia-quantidade-itens-carrinho-pedido").innerHTML;
    let valorAtualBaseInicial = document.getElementById("referencia-valor-total-carrinho-pedido").innerHTML;
    if (quantidadeAtualBaseInicial === "0" && valorAtualBaseInicial === "0.00") {
        alert("O Carrinho está Vazio!\nA Compra Não Pode ser Realizada");
    } else {
        document.getElementById("referencia-quantidade-itens-carrinho-pedido").innerHTML = "0";
        document.getElementById("referencia-valor-total-carrinho-pedido").innerHTML = "0.00";
        document.getElementById("valor-adicionado-carrinho").innerHTML = "0.00";
        alert("Compra Realizada com Sucesso!");
    }
}