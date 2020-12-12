const keystone = require('keystone');

const { Types } = keystone.Field;

const Valores = new keystone.List('Valores', {
    map: {name: 'valor'},
    singular: 'Valore',
    plural: 'Valores'
})

Valores.add({
    valor: {
        type: Types.Text,
        require: true,
        initial: true,
        index: true,
        label: 'Valor',
        note: 'Conte-nos sobre o seu valor'
    }
});

Valores.register();