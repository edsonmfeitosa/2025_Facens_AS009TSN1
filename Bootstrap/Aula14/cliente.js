const url = "https://67d0b74b825945773eb1b9fe.mockapi.io/cliente"
let clientes = [];
function carregarClientes() {
    debugger
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            clientes = dados;
            montarTabela(dados);
        });
}
function montarTabela(dados) {
    const tabela = document.getElementById("tabela-clientes");
    tabela.innerHTML = "";
    dados.forEach(cliente => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefone}</td>
            <td><button class="btn btn-primary" onclick="editarCliente(${cliente.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
            <td><button class="btn btn-danger" onclick="excluirCliente(${cliente.id})">Excluir</button></td>
            `
        tabela.appendChild(tr);
    });
}
function pesquisarCliente(event){
    event.preventDefault();
    const termo = document.getElementById("nome").value.toLowerCase();
    //começa com o termo
    const resultado = clientes.filter(cliente => 
                        cliente.nome.toLowerCase().startsWith(termo));
    montarTabela(resultado);
}
function excluirCliente(id) {
    let confirmacao = confirm("Deseja realmente excluir este cliente?");
    if (!confirmacao) {
        return;
    }
    fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
        carregarClientes();
    });
}
function editarCliente(id) {
    debugger
    const cliente = clientes.find(c => c.id == id);

    // Preencher o formulário com os dados do cliente
    document.getElementById("cadid").value = cliente.id;
    document.getElementById("cadnome").value = cliente.nome;
    document.getElementById("cademail").value = cliente.email;
    document.getElementById("cadtelefone").value = cliente.telefone;

}
function limparCampos() {
    document.getElementById("cadid").value = "";
    document.getElementById("cadnome").value = "";
    document.getElementById("cademail").value = "";
    document.getElementById("cadtelefone").value = "";
}
function salvarCliente(event){
    event.preventDefault();
    const id = document.getElementById("cadid").value;
    const nome = document.getElementById("cadnome").value;
    const email = document.getElementById("cademail").value;
    const telefone = document.getElementById("cadtelefone").value;

    const cliente = {
        id: id ? parseInt(id) : undefined,
        nome: nome,
        email: email,
        telefone: telefone
    };

    if (cliente.id) {
        // Atualizar cliente existente
        fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        })
        .then(response => response.json())
        .then(() => {
            carregarClientes();
            limparCampos();
        });
    } else {
        // Criar novo cliente
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        })
        .then(response => response.json())
        .then(() => {
            carregarClientes();
            limparCampos();
        });
    }
    //fechar o modal data-bs-dismiss="modal"
    const modal = document.getElementById("exampleModal");
    if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
            modalInstance.hide();
        }
    }
}
    