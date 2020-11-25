const keystone = require('keystone');

const { Types } = keystone.Field;

const Depoimentos = new keystone.List('Depoimentos');

Depoimentos.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label: "Nome",
  },

  depoimento:{
    type: Types.Textarea,
    required: true,
    initial: true,
    index: true,
  },
  
});

Depoimentos.register();