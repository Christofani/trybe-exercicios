let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
    function customerInfo(order) {
        let address = 'address'; // Armazene a palavra 'address' em uma variável.
        let deliveryPerson = order.order.delivery.deliveryPerson; // Acesse e armazene o valor da chave `deliveryPerson` em uma variável através de 'notação de ponto'.
        let customerName = order['name']; // Acesse e armazene o valor da chave `name` em uma variável através de 'notação de colchetes'.
        let customerPhone = order['phoneNumber']; // Acesse e armazene o valor da chave `phoneNumber` em uma variável através de 'notação de colchetes'.
        let street = order[address].street; // Acesse e armazene o valor da chave `street` em uma variável através de 'notação de colchetes' e 'notação de ponto'.
        let number = order[address].number; // Acesse e armazene o valor da chave `number` em uma variável através de 'notação de colchetes' e 'notação de ponto'.
        let apartment = order[address].apartment; // Acesse e armazene o valor da chave `apartment` em uma variável através de 'notação de colchetes' e 'notação de ponto'.
      
        console.log('Olá ' + deliveryPerson + ', entrega para: ' + customerName + ', Telefone: ' + customerPhone + ', R. ' + street + ', Nº: ' + number + ', AP: ' + apartment);
      }
  customerInfo(order);
  
  function orderModifier(order) {
    let newBuyer = order.name = 'Luiz Silva';
    let newTotal = order.payment.total = '50';
    let pizzas = Object.keys(order.order.pizza);
    let drinks = order.order.drinks.coke.type;
  
    console.log('Olá ' + newBuyer + ', o total do seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + drinks + ' é R$ ' + newTotal + ',00.'); // Exiba a mensagem desejada
  }
  
  orderModifier(order);