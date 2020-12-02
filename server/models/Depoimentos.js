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

  cargo:{
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label: "cargo",
  },

  depoimento:{
    type: Types.Textarea,
    required: true,
    initial: true,
    index: true,
  },
  
  imagem: {
    type: Types.CloudinaryImage,
    require: true,
    initial: true,
    label: "imagem"
  }
});

Depoimentos.register();