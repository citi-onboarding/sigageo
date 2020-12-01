const keystone = require('keystone');

const { Types } = keystone.Field;

const SobreNos = new keystone.List('SobreNos', {
    map: {name: 'key'},
    singular: 'Sobre',
    plural: 'Sobre Nós',
    nocreate: true,
    nodelete: true
})

SobreNos.add({
    key: {
        type: Types.Text,
        value: 'Sobre',
        noedit: true
    },
    quemSomos: {
        type: Types.Textarea,
        require: true,
        initial: true,
        index: true,
        label: 'Quem Somos',
        note: 'Conte-nos sobre quem é a empresa'
    },
    missao: {
        type: Types.Textarea,
        require: true,
        initial: true,
        index: true,
        label: 'Missão',
        note: 'Conte-nos sobre a missão da empresa'
    },
    visao: {
        type: Types.Textarea,
        require: true,
        initial: true,
        index: true,
        label: 'Visão',
        note: 'Conte-nos sobre a visão da empresa'
    }

});

SobreNos.register();
