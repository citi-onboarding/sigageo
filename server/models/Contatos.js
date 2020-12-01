const keystone = require('keystone');

const { Types } = keystone.Field;

const Contatos = new keystone.List('Contatos', {
    map: {name: 'key'},
    label: 'Contatos',
    nocreate: true,
    nodelete: true
})

Contatos.add({
    key: {
        type: Types.Text,
        default: 'Contatos',
        noedit: true
    },
    telefone: {
        type: Types.Number,
        require: true,
        initial: true,
        index: true,
        label: 'Telefone',
    },
    email: {
        type: Types.Email,
        require: true,
        initial: true,
        index: true,
        label: 'E-mail',
    },
    endereco: {
        type: Types.Text,
        require: true,
        initial: true,
        index: true,
        label: 'Endereço',
    },
    facebook: {
        type: Types.Url,
        initial: true,
        index: true,
        label: 'Facebook',
    },
    instagram: {
        type: Types.Url,
        initial: true,
        index: true,
        label: 'Instagram',
    },
    twitter: {
        type: Types.Url,
        initial: true,
        index: true,
        label: 'Twitter',
    },
    linkedin: {
        type: Types.Url,
        initial: true,
        index: true,
        label: 'Linked in',
    },
    imagens: {
        type: Types.CloudinaryImage,
        initial: true,
        index: true,
        label: 'Imagens',
    },
});

Contatos.register();
