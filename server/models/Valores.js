const keystone = require('keystone');

const { Types } = keystone.Field;

const Valores = new keystone.List('Valores', {
    map: {name: 'valor'},
    singular: 'Valore',
    plural: 'Valores'
})

Valores.add({
    icone: {
        type: Types.CloudinaryImage,
        require: true,
        initial: true,
        label: 'ícone',
        note: 'Um ícone que represente seu valor'
    },
    valor: {
        type: Types.Text,
        require: true,
        initial: true,
        index: true,
        label: 'Valor',
        note: 'Conte-nos sobre o seu valor'
    },
    descricao: {
        type: Types.Textarea,
        initial: true,
        index: true,
        label: 'Descrição',
        note: 'Descreva esse valor (opcional)'
    }
});

Valores.register();