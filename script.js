
function toggleSideMenu() {
    elements.sideMenuOverlay.classList.toggle('active');
    elements.sideMenu.classList.toggle('active');
    elements.menuToggle.classList.toggle('active');
    
    // Garante que apenas um overlay esteja ativo por vez
    if (elements.cartOverlay.classList.contains('active')) {
        toggleCart();
    }
}

// Alterna a visibilidade do carrinho - CORREÇÃO AQUI
function toggleCart() {
    elements.cartOverlay.classList.toggle('active');
    
    // Garante que apenas um overlay esteja ativo por vez
    if (elements.sideMenu.classList.contains('active')) {
        toggleSideMenu();
    }
}

// Dados do cardápio
const menuItems = [
    { 
        id: 1, 
        name: "Canjica Doce", 
        description: "Canjica cremosa com leite condensado e canela", 
        price: 8.00, 
        image: "assets/canjica.jpg", 
        category: "doces" 
    },
    { 
        id: 2, 
        name: "Pamonha", 
        description: "Pamonha de milho verde tradicional", 
        price: 7.50, 
        image: "assets/pamonha.jpg", 
        category: "doces" 
    },
    { 
        id: 3, 
        name: "Bolo de Milho", 
        description: "Bolo úmido feito com milho fresco", 
        price: 6.50, 
        image: "assets/bolo-milho.jpg", 
        category: "doces" 
    },
    { 
        id: 4, 
        name: "Milho Cozido", 
        description: "Milho verde cozido com manteiga", 
        price: 5.00, 
        image: "assets/milho-cozido.jpg", 
        category: "salgados" 
    },
    { 
        id: 5, 
        name: "Curau de Milho", 
        description: "Creme de milho verde com canela", 
        price: 6.00, 
        image: "assets/curau.jpg", 
        category: "doces" 
    },
    { 
        id: 6, 
        name: "Arroz Doce", 
        description: "Arroz doce cremoso com canela", 
        price: 7.00, 
        image: "assets/arroz-doce.jpg", 
        category: "doces" 
    },
    { 
        id: 7, 
        name: "Cuscuz Nordestino", 
        description: "Cuscuz de milho com queijo coalho", 
        price: 6.50, 
        image: "assets/cuscuz.jpg", 
        category: "salgados" 
    },
    { 
        id: 8, 
        name: "Pé de Moleque", 
        description: "Doce tradicional de amendoim", 
        price: 5.50, 
        image: "assets/pe-moleque.jpg", 
        category: "doces" 
    },
    { 
        id: 9, 
        name: "Paçoca de Amendoim", 
        description: "Paçoca artesanal de amendoim", 
        price: 4.50, 
        image: "assets/pacoca.jpg", 
        category: "doces" 
    },
    { 
        id: 10, 
        name: "Maçã do Amor", 
        description: "Maçã caramelizada com açúcar", 
        price: 8.00, 
        image: "assets/maca-amor.jpg", 
        category: "doces" 
    },
    { 
        id: 11, 
        name: "Bolo de Mandioca", 
        description: "Bolo úmido feito com mandioca", 
        price: 6.00, 
        image: "assets/bolo-mandioca.jpg", 
        category: "doces" 
    },
    { 
        id: 12, 
        name: "Cocada", 
        description: "Cocada tradicional de coco fresco", 
        price: 4.00, 
        image: "assets/cocada.jpg", 
        category: "doces" 
    },
    { 
        id: 13, 
        name: "Suco Natural", 
        description: "Suco feito na hora com frutas frescas", 
        price: 6.00, 
        image: "assets/suco.jpg", 
        category: "bebidas" 
    },
    { 
        id: 14, 
        name: "Pipoca", 
        description: "Pipoca quentinha com sal", 
        price: 3.50, 
        image: "assets/pipoca.jpg", 
        category: "salgados" 
    },
    { 
        id: 15, 
        name: "Café Especial", 
        description: "Café gourmet de alta qualidade", 
        price: 5.00, 
        image: "assets/cafe.jpg", 
        category: "bebidas" 
    },
    { 
        id: 16, 
        name: "Chá Gelado", 
        description: "Chá natural gelado com limão", 
        price: 5.50, 
        image: "assets/cha.jpg", 
        category: "bebidas" 
    },
    { 
        id: 17, 
        name: "Água de Coco", 
        description: "Água de coco natural", 
        price: 6.00, 
        image: "assets/agua-coco.jpg", 
        category: "bebidas" 
    },
    { 
        id: 18, 
        name: "Broa de Milho", 
        description: "Broa caseira de milho", 
        price: 5.00, 
        image: "assets/broa-milho.jpg", 
        category: "doces" 
    },
    { 
        id: 19, 
        name: "Tapioca", 
        description: "Tapioca recheada com queijo", 
        price: 6.00, 
        image: "assets/tapioca.jpg", 
        category: "salgados" 
    },
    { 
        id: 20, 
        name: "Bolo de Fubá", 
        description: "Bolo de fubá cremoso", 
        price: 5.50, 
        image: "assets/bolo-fuba.jpg", 
        category: "doces" 
    }
];

// Variáveis globais
let cart = [];
let vouchers = [];
let currentUser = null;
let currentCategory = 'todos';

// Elementos do DOM
const elements = {
    authScreen: document.getElementById('auth-screen'),
    authForm: document.getElementById('auth-form'),
    registerBtn: document.getElementById('register-btn'),
    menuGrid: document.getElementById('menu-grid'),
    cartIcon: document.getElementById('cart-icon'),
    cartOverlay: document.getElementById('cart-overlay'),
    closeCart: document.getElementById('close-cart'),
    cartItems: document.getElementById('cart-items'),
    cartEmpty: document.getElementById('cart-empty'),
    cartTotal: document.getElementById('cart-total'),
    checkoutBtn: document.getElementById('checkout-btn'),
    checkoutPage: document.getElementById('checkout-page'),
    backFromCheckout: document.getElementById('back-from-checkout'),
    orderItems: document.getElementById('order-items'),
    orderTotal: document.getElementById('order-total'),
    pixAmount: document.getElementById('pix-amount'),
    confirmPaymentBtn: document.getElementById('confirm-payment-btn'),
    voucherScreen: document.getElementById('voucher-screen'),
    backFromVouchers: document.getElementById('back-from-vouchers'),
    voucherScreenGrid: document.getElementById('voucher-screen-grid'),
    noVouchers: document.getElementById('no-vouchers'),
    printVouchersBtn: document.getElementById('print-vouchers-btn'),
    shareVouchersBtn: document.getElementById('share-vouchers-btn'),
    menuToggle: document.getElementById('menu-toggle'),
    sideMenuOverlay: document.getElementById('side-menu-overlay'),
    sideMenu: document.getElementById('side-menu'),
    closeSideMenu: document.getElementById('close-side-menu'),
    categoryLinks: document.querySelectorAll('.category-link'),
    categoryTabs: document.querySelectorAll('.category-tab'),
    userVouchersItem: document.getElementById('user-vouchers-item'),
    showVouchersBtn: document.getElementById('show-vouchers-btn'),
    userNameDisplay: document.getElementById('user-name-display'),
    userPhoneDisplay: document.getElementById('user-phone-display'),
    loadingAnimation: document.getElementById('loading-animation'),
    notificationContainer: document.getElementById('notification-container')
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Verifica se há usuário logado
    const savedUser = localStorage.getItem('feiraGourmetUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        elements.authScreen.classList.add('hidden');
        updateUserInfo();
    }
    
    // Carrega os vouchers salvos
    const savedVouchers = localStorage.getItem('feiraGourmetVouchers');
    if (savedVouchers) {
        vouchers = JSON.parse(savedVouchers);
        updateVouchersMenu();
    }
    
    // Carrega o carrinho salvo
    const savedCart = localStorage.getItem('feiraGourmetCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
    
    // Renderiza o menu
    renderMenu();
    
    // Event listeners
    setupEventListeners();
});

// Configura os event listeners
function setupEventListeners() {
    // Formulário de registro
    elements.authForm.addEventListener('submit', handleRegister);
    
    // Menu hamburguer
    elements.menuToggle.addEventListener('click', toggleSideMenu);
    elements.closeSideMenu.addEventListener('click', toggleSideMenu);
    elements.sideMenuOverlay.addEventListener('click', toggleSideMenu);
    
    // Carrinho
    elements.cartIcon.addEventListener('click', toggleCart);
    elements.closeCart.addEventListener('click', toggleCart);
    
    // Checkout
    elements.checkoutBtn.addEventListener('click', goToCheckout);
    elements.backFromCheckout.addEventListener('click', backFromCheckout);
    elements.confirmPaymentBtn.addEventListener('click', confirmPayment);
    
    // Vouchers
    elements.backFromVouchers.addEventListener('click', backFromVouchers);
    elements.showVouchersBtn?.addEventListener('click', showVouchersScreen);
    elements.printVouchersBtn.addEventListener('click', printVouchers);
    elements.shareVouchersBtn.addEventListener('click', shareVouchers);
    
    // Filtros de categoria
    elements.categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            filterByCategory(link.dataset.category);
        });
    });
    
    elements.categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterByCategory(tab.dataset.category);
        });
    });
}

// Manipula o registro do usuário
function handleRegister(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    if (!fullname || !phone) {
        showNotification('Por favor, preencha todos os campos', 'error');
        return;
    }
    
    // Mostra o loading
    elements.registerBtn.querySelector('.btn-text').textContent = 'Registrando...';
    elements.registerBtn.querySelector('.loader').classList.remove('hidden');
    
    // Simula um delay de registro
    setTimeout(() => {
        currentUser = {
            name: fullname,
            phone: phone
        };
        
        // Salva no localStorage
        localStorage.setItem('feiraGourmetUser', JSON.stringify(currentUser));
        
        // Atualiza a UI
        updateUserInfo();
        elements.authScreen.classList.add('hidden');
        
        // Reseta o botão
        elements.registerBtn.querySelector('.btn-text').textContent = 'Continuar';
        elements.registerBtn.querySelector('.loader').classList.add('hidden');
        
        showNotification('Registro concluído com sucesso!', 'success');
    }, 1500);
}

// Atualiza as informações do usuário na UI
function updateUserInfo() {
    if (!currentUser) return;
    
    elements.userNameDisplay.textContent = currentUser.name;
    elements.userPhoneDisplay.textContent = currentUser.phone;
}

// Renderiza o menu
function renderMenu() {
    // Mostra o loading
    elements.loadingAnimation.classList.remove('hidden');
    
    // Simula um delay de carregamento
    setTimeout(() => {
        const filteredItems = currentCategory === 'todos' 
            ? menuItems 
            : menuItems.filter(item => item.category === currentCategory);
        
        elements.menuGrid.innerHTML = filteredItems.map(item => `
            <div class="menu-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <p class="menu-item-price">R$ ${item.price.toFixed(2)}</p>
                        <button class="add-to-cart" onclick="addToCart(${item.id})">
                            <i class="fas fa-plus"></i> Adicionar
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Esconde o loading
        elements.loadingAnimation.classList.add('hidden');
    }, 800);
}

// Filtra por categoria
function filterByCategory(category) {
    currentCategory = category;
    
    // Atualiza as tabs ativas
    elements.categoryTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    // Renderiza o menu filtrado
    renderMenu();
    
    // Fecha o menu lateral se estiver aberto
    if (elements.sideMenu.classList.contains('active')) {
        toggleSideMenu();
    }
}

// Alterna o menu lateral
function toggleSideMenu() {
    elements.sideMenuOverlay.classList.toggle('active');
    elements.sideMenu.classList.toggle('active');
    elements.menuToggle.classList.toggle('active');
}

// Adiciona item ao carrinho
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        const newItem = {...item, quantity: 1};
        cart.push(newItem);
    }
    
    updateCart();
    showNotification(`${item.name} adicionado ao carrinho!`, 'success');
}

// Remove item do carrinho
function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    updateCart();
    showNotification(`${removedItem.name} removido do carrinho`, 'warning');
}

// Atualiza a quantidade de um item no carrinho
function updateItemQuantity(index, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(index);
        return;
    }
    
    cart[index].quantity = newQuantity;
    updateCart();
}

// Atualiza o carrinho na UI
function updateCart() {
    // Salva no localStorage
    localStorage.setItem('feiraGourmetCart', JSON.stringify(cart));
    
    // Atualiza o contador
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.querySelector('.cart-count').textContent = totalItems;
    
    // Atualiza a lista de itens
    if (cart.length === 0) {
        elements.cartItems.classList.add('hidden');
        elements.cartEmpty.classList.remove('hidden');
        elements.checkoutBtn.disabled = true;
    } else {
        elements.cartItems.classList.remove('hidden');
        elements.cartEmpty.classList.add('hidden');
        elements.checkoutBtn.disabled = false;
        
        elements.cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">R$ ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateItemQuantity(${index}, ${(item.quantity || 1) - 1})">-</button>
                        <span>${item.quantity || 1}</span>
                        <button class="quantity-btn" onclick="updateItemQuantity(${index}, ${(item.quantity || 1) + 1})">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
    
    // Atualiza o total
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    elements.cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Alterna a visibilidade do carrinho
function toggleCart() {
    elements.cartOverlay.classList.toggle('active');
}

// Vai para a página de checkout
function goToCheckout() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!', 'error');
        return;
    }
    
    // Preenche os itens do pedido
    elements.orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.name} (${item.quantity || 1}x)</span>
            <span>R$ ${(item.price * (item.quantity || 1)).toFixed(2)}</span>
        </div>
    `).join('');
    
    // Calcula o total
    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    elements.orderTotal.textContent = `R$ ${total.toFixed(2)}`;
    elements.pixAmount.textContent = `R$ ${total.toFixed(2)}`;
    
    // Fecha o carrinho e abre o checkout
    elements.cartOverlay.classList.remove('active');
    elements.checkoutPage.classList.add('active');
}

// Volta do checkout para o carrinho
function backFromCheckout() {
    elements.checkoutPage.classList.remove('active');
    elements.cartOverlay.classList.add('active');
}

// Confirma o pagamento
function confirmPayment() {
    // Mostra o loading
    elements.confirmPaymentBtn.querySelector('.btn-text').textContent = 'Processando...';
    elements.confirmPaymentBtn.querySelector('.loader').classList.remove('hidden');
    elements.confirmPaymentBtn.classList.add('loading');
    
    // Simula um delay de processamento
    setTimeout(() => {
        // Gera os vouchers
        generateVouchers();
        
        // Limpa o carrinho
        cart = [];
        updateCart();
        localStorage.removeItem('feiraGourmetCart');
        
        // Fecha o checkout
        elements.checkoutPage.classList.remove('active');
        
        // Reseta o botão
        elements.confirmPaymentBtn.querySelector('.btn-text').textContent = 'Confirmar Pagamento';
        elements.confirmPaymentBtn.querySelector('.loader').classList.add('hidden');
        elements.confirmPaymentBtn.classList.remove('loading');
        
        showNotification('Pagamento aprovado! Vouchers gerados.', 'success');
    }, 2000);
}

// Gera fichas virtuais
function generateVouchers() {
    // Cria um voucher para cada item no carrinho
    const newVouchers = cart.map(item => {
        return {
            ...item,
            code: `FV-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`,
            date: new Date().toLocaleDateString('pt-BR'),
            validUntil: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')
        };
    });
    
    // Adiciona aos vouchers existentes
    vouchers = [...vouchers, ...newVouchers];
    
    // Salva no localStorage
    localStorage.setItem('feiraGourmetVouchers', JSON.stringify(vouchers));
    
    // Atualiza a UI
    showVouchersScreen();
    updateVouchersMenu();
}

// Mostra a tela de vouchers
function showVouchersScreen() {
    if (vouchers.length === 0) {
        elements.voucherScreenGrid.classList.add('hidden');
        elements.noVouchers.classList.remove('hidden');
    } else {
        elements.voucherScreenGrid.classList.remove('hidden');
        elements.noVouchers.classList.add('hidden');
        
        elements.voucherScreenGrid.innerHTML = vouchers.map(voucher => `
            <div class="voucher-screen-card">
                <h3>${voucher.name}</h3>
                <p><strong>Quantidade:</strong> ${voucher.quantity || 1}x</p>
                <p><strong>Valor:</strong> R$ ${voucher.price.toFixed(2)}</p>
                <p><strong>Código:</strong> ${voucher.code}</p>
                <img src="${voucher.image}" alt="${voucher.name}">
                <p><strong>Data:</strong> ${voucher.date}</p>
                <p><strong>Validade:</strong> ${voucher.validUntil}</p>
            </div>
        `).join('');
    }
    
    elements.voucherScreen.classList.add('active');
}

// Volta da tela de vouchers para o menu
function backFromVouchers() {
    elements.voucherScreen.classList.remove('active');
}

// Atualiza o menu lateral com os vouchers
function updateVouchersMenu() {
    if (vouchers.length > 0) {
        elements.userVouchersItem.classList.remove('hidden');
    } else {
        elements.userVouchersItem.classList.add('hidden');
    }
}

// Imprime os vouchers
function printVouchers() {
    const printContent = vouchers.map(voucher => `
        <div style="page-break-after: always; padding: 20px; text-align: center; font-family: Arial, sans-serif;">
            <h2 style="color: #5a8f3d; font-family: 'Playfair Display', serif;">${voucher.name}</h2>
            <p><strong>Quantidade:</strong> ${voucher.quantity || 1}x</p>
            <p><strong>Valor:</strong> R$ ${voucher.price.toFixed(2)}</p>
            <p><strong>Código:</strong> ${voucher.code}</p>
            <img src="${voucher.image}" alt="${voucher.name}" style="max-width: 200px; height: auto; margin: 10px 0;">
            <p><strong>Data:</strong> ${voucher.date}</p>
            <p><strong>Validade:</strong> ${voucher.validUntil}</p>
            <div style="margin-top: 30px; border-top: 1px dashed #ccc; padding-top: 10px;">
                <small>Feira Gourmet - ${new Date().getFullYear()}</small>
            </div>
        </div>
    `).join('');
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Vouchers Feira Gourmet</title>
            <style>
                body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
                @page { size: auto; margin: 10mm; }
            </style>
        </head>
        <body>
            ${printContent}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
}

// Compartilha os vouchers
function shareVouchers() {
    if (navigator.share) {
        const itemsText = vouchers.map(v => `${v.quantity || 1}x ${v.name} (R$ ${v.price.toFixed(2)})`).join('\n');
        const total = vouchers.reduce((sum, v) => sum + (v.price * (v.quantity || 1)), 0);
        
        navigator.share({
            title: 'Meus Vouchers - Feira Gourmet',
            text: `Confira meus vouchers:\n\n${itemsText}\n\nTotal: R$ ${total.toFixed(2)}`,
            url: window.location.href
        }).catch(err => {
            console.log('Erro ao compartilhar:', err);
            showNotification('Não foi possível compartilhar', 'error');
        });
    } else {
        // Fallback para navegadores sem API de compartilhamento
        const itemsText = vouchers.map(v => `${v.quantity || 1}x ${v.name} (R$ ${v.price.toFixed(2)})`).join('\n');
        const total = vouchers.reduce((sum, v) => sum + (v.price * (v.quantity || 1)), 0);
        const textToCopy = `Meus Vouchers - Feira Gourmet\n\n${itemsText}\n\nTotal: R$ ${total.toFixed(2)}`;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            showNotification('Vouchers copiados para a área de transferência!', 'success');
        });
    }
}

// Mostra notificação
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'times-circle'}"></i>
        ${message}
    `;
    
    elements.notificationContainer.appendChild(notification);
    
    // Remove a notificação após 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Função para teste rápido (remover em produção)
function testCheckout() {
    cart = [
        { ...menuItems[0], quantity: 2 },
        { ...menuItems[2], quantity: 1 },
        { ...menuItems[4], quantity: 3 }
    ];
    updateCart();
    toggleCart();
}